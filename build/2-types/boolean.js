"use strict";
var admin;
admin = false;
console.log(admin);
admin = Boolean(1);
admin = !!1;
console.log(admin);
var password;
var minPasswordLength;
var securePassword;
password = '1234';
minPasswordLength = 8;
securePassword = password.length >= minPasswordLength;
console.log(password, minPasswordLength, securePassword);
//# sourceMappingURL=boolean.js.map