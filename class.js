var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.email = "Blah.com";
        console.log("Congrats", name, "for being our new user!");
    }
    User.prototype.login = function () {
        console.log(this.name, "is logged in now!");
    };
    return User;
}());
var Darshan = new User("Darshan Patel", 21);
console.log(Darshan.name); //no error
console.log(Darshan.email); //error if data type of set private or protected.
Darshan.login();
// Inheritance
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.id = 1;
        return _this;
    }
    return Member;
}(User));
