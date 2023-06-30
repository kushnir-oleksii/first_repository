"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.post = { name: "", status: "", avatar: "" };
        this.charsetAmount = 0;
    }
    AppComponent.prototype.addPost = function (newPost) {
        this.post.name = newPost.name;
        this.post.status = newPost.status;
        this.post.avatar = newPost.avatar;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.charsetAmount = this.post.status.length;
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.charsetAmount = this.post.status.length;
    };
    AppComponent.prototype.resetPostData = function () {
        this.post.name = '';
        this.post.status = '';
        this.post.avatar = '';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
