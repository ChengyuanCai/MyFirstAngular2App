"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/forkJoin");
var github_service_1 = require("./github.service");
var GitHubProfileComponent = (function () {
    function GitHubProfileComponent(_gitHubService) {
        this._gitHubService = _gitHubService;
        this.isLoading = true;
        this.username = "octocat";
        this.user = {};
        this.followers = [];
    }
    GitHubProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        Observable_1.Observable.forkJoin(this._gitHubService.getUser(this.username), this._gitHubService.getFollowers(this.username))
            .subscribe(function (res) {
            _this.user = res[0];
            _this.followers = res[1];
            console.log(res);
        }, null, function () { _this.isLoading = false; });
    };
    return GitHubProfileComponent;
}());
GitHubProfileComponent = __decorate([
    core_1.Component({
        selector: 'github-profile',
        styles: ["\n\t\t.avatar {\n\t\t\twidth: 100;\n\t\t\theight: 100;\n\t\t\tborder-radius: 100%;\n\t\t}\n\t"],
        templateUrl: 'app/github.template.html',
        providers: [github_service_1.GitHubService]
    }),
    __metadata("design:paramtypes", [github_service_1.GitHubService])
], GitHubProfileComponent);
exports.GitHubProfileComponent = GitHubProfileComponent;
//# sourceMappingURL=github-profile.component.js.map