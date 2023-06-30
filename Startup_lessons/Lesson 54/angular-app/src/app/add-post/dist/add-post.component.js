"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddPostComponent = void 0;
var core_1 = require("@angular/core");
var AddPostComponent = /** @class */ (function () {
    function AddPostComponent() {
        this.onPost = new core_1.EventEmitter();
        this.nameInputValue = '';
        this.statusInputValue = '';
        this.avatarInputValue = '';
    }
    AddPostComponent.prototype.onName = function (event) {
        this.nameInputValue = event.target.value;
    };
    AddPostComponent.prototype.onStatus = function (event) {
        // Ограничение длины ввода до 50 символов
        this.statusInputValue = event.target.value.slice(0, 50);
    };
    AddPostComponent.prototype.onAvatar = function (event) {
        this.avatarInputValue = event.target.value;
    };
    AddPostComponent.prototype.addNewPost = function () {
        var value = {
            name: this.nameInputValue,
            status: this.statusInputValue,
            avatar: this.avatarInputValue
        };
        this.onPost.emit(value);
        this.resetForm();
    };
    AddPostComponent.prototype.resetForm = function () {
        this.nameInputValue = '';
        this.statusInputValue = '';
        this.avatarInputValue = '';
    };
    __decorate([
        core_1.Output()
    ], AddPostComponent.prototype, "onPost");
    AddPostComponent = __decorate([
        core_1.Component({
            selector: 'app-add-post',
            templateUrl: './add-post.component.html',
            styleUrls: ['./add-post.component.scss']
        })
    ], AddPostComponent);
    return AddPostComponent;
}());
exports.AddPostComponent = AddPostComponent;
