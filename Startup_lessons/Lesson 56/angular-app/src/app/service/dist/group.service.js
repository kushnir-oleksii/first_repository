"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GroupService = void 0;
var core_1 = require("@angular/core");
var GroupService = /** @class */ (function () {
    function GroupService() {
        this.groupName = 'Healthy lifestyle';
    }
    GroupService.prototype.getGroupName = function () {
        return this.groupName;
    };
    GroupService.prototype.setGroupName = function (newGroupName) {
        this.groupName = newGroupName;
    };
    GroupService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], GroupService);
    return GroupService;
}());
exports.GroupService = GroupService;