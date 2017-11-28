//business logic
function Account (name, initialDeposit) {
  this.name = name;
  this.initialDeposit = initialDeposit;
};

Account.prototype.subtract = function(amount) {
  this.initialDeposit -= amount;
};

Account.prototype.add = function(amount) {
  this.initialDeposit += amount;
};


$(document).ready(function() {

  console.log("hi");
  $("form#account").submit(function(event) {
    event.preventDefault();
    var account = new Account($("input#name").val(), parseInt($("input#initial-deposit").val() ));
    $("#balance").append("$" + account.initialDeposit);
    console.log(account);
  });

  $("form#transaction").submit(function(event) {
    debugger;
    event.preventDefault();
    var withdraw = parseInt($("input#withdraw").val());
    console.log(withdraw);
    var deposit = $("input#deposit").val();

    Account.subtract(withdraw);
    Account.add(deposit);
    console.log(account);
    $("#balance").append(account.initialDeposit);
  });

});
