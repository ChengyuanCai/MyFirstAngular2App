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
var post_service_1 = require("./post.service");
var AppComponent = (function () {
    function AppComponent(_postService) {
        this._postService = _postService;
        this.title = "My First Angular App";
        this.isLoading = true;
        this.post = {
            title: 'title',
            isFavorite: true
        };
        this.tweet = {
            totalLikes: 10,
            isLike: false
        };
        this.votes = {
            voteCount: 10,
            myVote: 0
        };
    }
    AppComponent.prototype.onFavoriteChange = function ($event) {
        console.log($event);
    };
    AppComponent.prototype.onVote = function ($event) {
        console.log($event);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postService.getPosts()
            .then(function (posts) {
            _this.isLoading = false;
            console.log(posts[0].id);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div *ngIf = \"isLoading\">\n  \t\t\t\t<i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n  \t\t\t</div>"
        /*templateUrl: 'app/favorite.template.html',*/
        ,
        /*templateUrl: 'app/favorite.template.html',*/
        providers: [post_service_1.PostService]
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map