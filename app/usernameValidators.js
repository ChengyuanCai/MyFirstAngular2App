"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsernameValidators = (function () {
    function UsernameValidators() {
    }
    UsernameValidators.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    };
    UsernameValidators.shouldBeUnique = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value == "Kevin") {
                    resolve({ shouldBeUnique: true });
                }
                else {
                    resolve(null);
                }
            }, 1000);
        });
    };
    return UsernameValidators;
}());
exports.UsernameValidators = UsernameValidators;
//# sourceMappingURL=usernameValidators.js.map