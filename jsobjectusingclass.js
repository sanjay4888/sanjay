
//class es6
class person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = function () {
            return this.firstname + ""
                + this.lastname;
        };

    }
}
const p1 =new person ("vignesh","v");
const p2 = new person("viki","vignesh");

console.log(p1);
console.log(p2);
console.log(p2.fullname());
