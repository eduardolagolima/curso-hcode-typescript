"use strict";
function showError(error) {
    throw new Error(error);
}
var count = 0;
function infinityLoop() {
    while (true) {
        console.log(count++);
    }
}
infinityLoop();
//# sourceMappingURL=never.js.map