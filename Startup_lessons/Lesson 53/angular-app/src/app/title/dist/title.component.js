"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TitleComponent = void 0;
var core_1 = require("@angular/core");
var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
        this.title = "main title";
    }
    TitleComponent = __decorate([
        core_1.Component({
            selector: 'app-title',
            templateUrl: './title.component.html',
            styles: ["\n  .title{\n    font-size: 25px;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    padding: 10px;\n    with: fit-content;\n    color: #fff;\n    text-align: center;\n  }\n  "]
        })
    ], TitleComponent);
    return TitleComponent;
}());
exports.TitleComponent = TitleComponent;
