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
var VoteComponent = (function () {
    function VoteComponent() {
        this.voteCount = 0;
        this.myVote = 0;
        this.vote = new core_1.EventEmitter();
    }
    VoteComponent.prototype.upvote = function () {
        if (this.myVote <= 0) {
            this.voteCount = this.voteCount + 1;
            this.myVote += 1;
            this.vote.emit({ myVote: this.myVote });
        }
    };
    VoteComponent.prototype.downvote = function () {
        if (this.myVote >= 0) {
            this.voteCount = this.voteCount - 1;
            this.myVote -= 1;
            this.vote.emit({ myVote: this.myVote });
        }
    };
    return VoteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VoteComponent.prototype, "voteCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VoteComponent.prototype, "myVote", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], VoteComponent.prototype, "vote", void 0);
VoteComponent = __decorate([
    core_1.Component({
        selector: 'vote',
        template: "<div class=\"vote-wrapper\">\n\t\t\t   <i class=\"glyphicon glyphicon-menu-up hover\" [class.highlighted]=\"myVote == 1\" (click)=\"upvote()\"></i>\n\t\t\t\t<span>{{voteCount}}</span>\n\t\t\t   <i class=\"glyphicon glyphicon-menu-down hover\" [class.highlighted]=\"myVote == -1\" (click)=\"downvote()\"></i>\n\t\t\t   </div>\n\t",
        styles: ["\n\t\t.vote-wrapper {\n\t\t\twidth: 20px;\n\t\t\ttext-align: center;\n\t\t\tcolor: #999;\n\t\t}\n\n\t\t.highlighted {\n\t\t\tcolor: deeppink;\n\t\t}\n\n\t\t.hover {\n\t\t\tcursor:pointer;\n\t\t}\n\t"]
    })
], VoteComponent);
exports.VoteComponent = VoteComponent;
//# sourceMappingURL=vote.component.js.map