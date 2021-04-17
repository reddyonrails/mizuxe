import AssocList "mo:base/AssocList";
import Error "mo:base/Error";
import List "mo:base/List";
import Database "./database";
import Types "./types";
import Utils "./utils";
import Connectd "./depend/main"


actor Mizuxe {
    flexible var contact: ContactsMap = List.nil<(Name, Entry)>();

    type Name = Text;
    type Phone = Nat;

    type Entry = {
        name: Name;
        address1: Text;
        address2: Text;
        email: Text;
        phone: Phone;
    };

    type ContactsMap = AssocList.AssocList<Name, Entry>;
    var connection:Connectd.Connectd=Connectd.Connectd();
    var directory: Database.Directory = Database.Directory();

    type NewProfile = Types.NewProfile;
    type Profile = Types.Profile;
    type UserId = Types.UserId;

  // Healthcheck

  public func healthcheck(): async Bool { true };

  // Profiles

  public shared(msg) func create(profile: NewProfile): async () {
    directory.createOne(msg.caller, profile);
  };

    public shared(msg) func update(profile: Profile): async () {
      directory.updateOne(msg.caller, profile);
    };

  public func getConnections(userId: UserId): async [Profile] {
    let userIds = await connection.getConnections(userId);
    directory.findMany(userIds)
  };

  public query func get(userId: UserId): async Profile {
    Utils.getProfile(directory, userId)
  };

  public query func search(term: Text): async [Profile] {
    directory.findBy(term)
  };

  // User Auth

  public shared query(msg) func getOwnId(): async UserId { msg.caller };

};

