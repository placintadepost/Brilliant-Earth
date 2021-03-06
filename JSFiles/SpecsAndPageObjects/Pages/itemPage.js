"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var protractor_1 = require("protractor");
var itemPage = /** @class */ (function (_super) {
    __extends(itemPage, _super);
    function itemPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.metalsList = protractor_1.element(protractor_1.by.css('ul[class="list-inline ir249-pdp-metals-select mb0"]')).all(protractor_1.by.tagName('li'));
        _this.chooseButton = protractor_1.element(protractor_1.by.className('form-group mb5'));
        _this.dropdownSize = protractor_1.element(protractor_1.by.css('div[class="form-group mb0 mt10 position-relative"]'));
        _this.dropdownOptions = protractor_1.element(protractor_1.by.css('div[class="form-group mb0 mt10 position-relative"]')).all(protractor_1.by.tagName("li"));
        _this.sizeError = protractor_1.element(protractor_1.by.className('form-group mb10'));
        _this.addToBag = protractor_1.element(protractor_1.by.id('add_cyoring'));
        _this.size5 = protractor_1.element(protractor_1.by.css('li[rel="2"]'));
        return _this;
    }
    itemPage.prototype.selectSetting = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        return [4 /*yield*/, this.getIndexOfElementAndClick(this.metalsList)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.chooseButton.click()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    itemPage.prototype.selectSize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.justWaitForDisplay(this.dropdownSize)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.dropdownSize.click()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.size5.click()];
                    case 3:
                        _b.sent();
                        /*        for (let i = 0; i < 10; i++) {
                        
                                    if(await this.sizeError.isDisplayed()) {
                        
                                        await this.dropdownSize.click();
                                        await this.getIndexOfElementAndClick(this.dropdownOptions);
                        
                                    } else {
                        
                                        break;
                        
                                    }
                        
                                }*/
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 4:
                        /*        for (let i = 0; i < 10; i++) {
                        
                                    if(await this.sizeError.isDisplayed()) {
                        
                                        await this.dropdownSize.click();
                                        await this.getIndexOfElementAndClick(this.dropdownOptions);
                        
                                    } else {
                        
                                        break;
                        
                                    }
                        
                                }*/
                        _b.sent();
                        return [4 /*yield*/, this.addToBag.click()];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 6:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                    case 7:
                        _a.apply(void 0, [_b.sent()]).toContain("cart");
                        return [2 /*return*/];
                }
            });
        });
    };
    return itemPage;
}(base_1.Base));
exports.itemPage = itemPage;
//# sourceMappingURL=itemPage.js.map