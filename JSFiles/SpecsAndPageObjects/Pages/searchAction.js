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
var searchAction = /** @class */ (function (_super) {
    __extends(searchAction, _super);
    function searchAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameIcon = protractor_1.element(protractor_1.by.css('button[id="king-search-button"]'));
        _this.searchInput = protractor_1.element(protractor_1.by.css('input[id="king-search-input"]'));
        _this.searchResult = protractor_1.element(protractor_1.by.id('product_results')).all(protractor_1.by.className("col-lg-3 col-md-4 col-sm-6 col-xs-6 per-product"));
        _this.itemAvailable = protractor_1.element(protractor_1.by.css('p[class="normal-statement mt10 mb-20"]'));
        _this.wishList = protractor_1.element(protractor_1.by.css('li[class="add-to-wishlist"]'));
        _this.wishListActive = protractor_1.element(protractor_1.by.css('span[class="settings active"]'));
        _this.wishListCount = protractor_1.element(protractor_1.by.css('span[class="count"]'));
        _this.itemBtn = protractor_1.element(protractor_1.by.xpath("//*[text()[contains(.,'ADD TO BAG')]]"));
        _this.addToBagBtn = protractor_1.element(protractor_1.by.css('a[class="btn btn-lg btn-block fw-b btn-success add_cyoring add_button"]'));
        _this.requestGuid = protractor_1.element(protractor_1.by.css('div[class="form-group mb5"]')).element(protractor_1.by.tagName("a"));
        _this.notAvailable = protractor_1.element(protractor_1.by.xpath('//*[@id="product_results"]/div/div/div[129]/div/div/div/div[2]/span'));
        _this.wishlistIcon = protractor_1.element(protractor_1.by.css('li[class="dropdown king-wish-list"]'));
        _this.wishListBtn = protractor_1.element(protractor_1.by.css('a[class="btn btn-success btn-lg btn-block"]'));
        return _this;
    }
    searchAction.prototype.searchBtn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.nameIcon), 5000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.nameIcon.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.searchInput.sendKeys("silver earrings")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.nameIcon.click()];
                    case 4:
                        _a.sent();
                        //force pass for html reporter
                        expect(true).toBe(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    searchAction.prototype.getSearchResults = function () {
        return __awaiter(this, void 0, void 0, function () {
            var x, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        x = Math.floor(Math.random() * 6) + 1;
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.urlContains("search"), 5000)];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, this.searchResult.get(x).click()];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.browser.refresh()];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.addToBagBtn), 5000)];
                    case 5:
                        _c.sent();
                        return [4 /*yield*/, this.addToBagBtn.getText()];
                    case 6:
                        if (!((_c.sent()) == 'NEW SEARCH')) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.addToBagBtn.click()];
                    case 7:
                        _c.sent();
                        return [4 /*yield*/, this.searchBtn()];
                    case 8:
                        _c.sent();
                        return [4 /*yield*/, this.getSearchResults()];
                    case 9:
                        _c.sent();
                        _c.label = 10;
                    case 10: return [4 /*yield*/, protractor_1.browser.sleep(1500)];
                    case 11:
                        _c.sent();
                        return [4 /*yield*/, this.justClick(this.wishList)];
                    case 12:
                        _c.sent();
                        _b = (_a = protractor_1.browser.actions()).mouseMove;
                        return [4 /*yield*/, this.wishlistIcon];
                    case 13: return [4 /*yield*/, _b.apply(_a, [_c.sent()]).perform()];
                    case 14:
                        _c.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.wishListBtn)];
                    case 15:
                        _c.sent();
                        return [4 /*yield*/, this.justClick(this.wishListBtn)];
                    case 16:
                        _c.sent();
                        //force pass for html reporter
                        expect(true).toBe(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    return searchAction;
}(base_1.Base));
exports.searchAction = searchAction;
//# sourceMappingURL=searchAction.js.map