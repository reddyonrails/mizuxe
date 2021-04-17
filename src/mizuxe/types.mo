import Principal "mo:base/Principal";

module {
  public type UserId = Principal;

  public type NewProfile = {
    firstName: Text;
    lastName: Text;
    mailing1: Text;
    mailing2: Text;
    zipcode: Text;
    city: Text;
    state: Text;
    email:Text;
    phone:Text;
    amount: Nat;
  };

  public type Profile = {
    id: UserId;
    firstName: Text;
    lastName: Text;
    mailing1: Text;
    mailing2: Text;
    zipcode: Text;
    city: Text;
    state: Text;
    email:Text;
    phone:Text;
    amount:Nat;
  };
};