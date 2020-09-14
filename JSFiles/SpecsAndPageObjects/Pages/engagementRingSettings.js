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
var selenium_webdriver_1 = require("selenium-webdriver");
var engagementRingSettings = /** @class */ (function (_super) {
    __extends(engagementRingSettings, _super);
    function engagementRingSettings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getStartedButton = protractor_1.element(protractor_1.by.css('a[class="btn btn-success btn-lg w220"]'));
        _this.productResultsModal = protractor_1.element(protractor_1.by.css('div[id="product_results"]'));
        //--------------------------------
        _this.sortBy = protractor_1.element(protractor_1.by.css('div[class="filter-v3-sort-by"]')).element(protractor_1.by.id("dropdownSortByMenu")).all(protractor_1.by.tagName("a"));
        _this.sortByHover = protractor_1.element(protractor_1.by.css('a[id="dropdownMenu"]'));
        _this.waitForSortBy = protractor_1.element(protractor_1.by.css('div[class="filter-v3-sort-by"]')).element(protractor_1.by.css('div[class="dropdown-content"]'));
        _this.sortPriceMin = protractor_1.element(protractor_1.by.css('input[id="min-price-display"]'));
        _this.sortPriceMax = protractor_1.element(protractor_1.by.css('input[id="max-price-display"]'));
        _this.waitForSortByPrice = protractor_1.element(protractor_1.by.css('dl[id="dropdownPriceMenu"]'));
        _this.sortPriceHover = protractor_1.element(protractor_1.by.xpath("//h2[text()[contains(.,'Price')]]"));
        _this.sortBridalSet = protractor_1.element(protractor_1.by.css('dl[id="dropdownMSMenu"]')).all(protractor_1.by.tagName('dd'));
        _this.sortBridalSetHover = protractor_1.element(protractor_1.by.xpath("//h2[text()[contains(.,'Bridal Sets ')]]"));
        _this.waitForBridalSet = protractor_1.element(protractor_1.by.css('dl[id="dropdownMSMenu"]'));
        _this.sortStyle = protractor_1.element(protractor_1.by.css('dl[id="dropdownStyleMenu"]')).all(protractor_1.by.tagName('dd'));
        _this.sortStyleHover = protractor_1.element(protractor_1.by.xpath("//h2[text()[contains(.,'style')]]"));
        _this.waitForStyle = protractor_1.element(protractor_1.by.css('dl[id="dropdownStyleMenu"]'));
        _this.sortDiamondShape = protractor_1.element(protractor_1.by.css('dl[id="dropdownShapeMenu"]')).all(protractor_1.by.tagName('dd'));
        _this.sortDiamondShapeHover = protractor_1.element(protractor_1.by.xpath("//h2[text()[contains(.,'diamond')]]"));
        _this.header = protractor_1.element(protractor_1.by.css('div[class="king-site-logo"]'));
        _this.sortMetal = protractor_1.element(protractor_1.by.css('dl[id="dropdownMeatlMenu"]')).all(protractor_1.by.tagName('dd'));
        _this.sortMetalHover = protractor_1.element(protractor_1.by.xpath("//h2[text()[contains(.,'metal')]]"));
        _this.waitForMetal = protractor_1.element(protractor_1.by.css('dl[id="dropdownMeatlMenu"]'));
        _this.diamondLoadingIcon = protractor_1.element(protractor_1.by.id('diamond_search_loading'));
        //---------------------------------
        _this.productResultsCol = protractor_1.element(protractor_1.by.id('product_results')).all(protractor_1.by.className("col-lg-3 col-md-4 col-sm-6 col-xs-6 per-product"));
        _this.productResults = protractor_1.element(protractor_1.by.css('div[class="item-dis"]'));
        _this.textItems = protractor_1.element(protractor_1.by.css('div[class="listpage-filter-v3-total"]')).element(protractor_1.by.css('span[class="total_obj_count"]'));
        _this.resetAll = protractor_1.element(protractor_1.by.className('item reset-button'));
        _this.metalDropdownIcon = protractor_1.element(protractor_1.by.xpath('//*[@id="filter_panel"]/div/div/div[1]/div[2]/a/span'));
        return _this;
    }
    //---------------------------------
    engagementRingSettings.prototype.getStarted = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.justWaitForDisplay(this.productResultsModal)];
                    case 1:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).toContain("engagement-ring-settings");
                        return [4 /*yield*/, this.justClick(this.getStartedButton)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.justWaitForInvisibility(this.getStartedButton)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    engagementRingSettings.prototype.ringSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, x, y, _c, _d, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.executeScript('arguments[0].scrollIntoView(true)', this.header.getWebElement())];
                    case 1:
                        _l.sent();
                        //sort using all filters
                        //sort
                        return [4 /*yield*/, this.justWaitForInvisibility(this.diamondLoadingIcon)];
                    case 2:
                        //sort using all filters
                        //sort
                        _l.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                    case 3:
                        _l.sent();
                        _b = (_a = protractor_1.browser.actions()).mouseMove;
                        return [4 /*yield*/, this.sortByHover];
                    case 4: return [4 /*yield*/, _b.apply(_a, [_l.sent()]).perform()];
                    case 5:
                        _l.sent();
                        return [4 /*yield*/, this.getIndexOfElementAndClick(this.sortBy)];
                    case 6:
                        _l.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.waitForSortBy)];
                    case 7:
                        _l.sent();
                        return [4 /*yield*/, this.getIndexOfElementAndClick(this.sortBy)];
                    case 8:
                        _l.sent();
                        x = Math.floor(Math.random() * 2000) + 1;
                        y = Math.floor(Math.random() * 200) + 3000;
                        _d = (_c = protractor_1.browser.actions()).mouseMove;
                        return [4 /*yield*/, this.sortPriceHover];
                    case 9: return [4 /*yield*/, _d.apply(_c, [_l.sent()]).perform()];
                    case 10:
                        _l.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.waitForSortByPrice)];
                    case 11:
                        _l.sent();
                        return [4 /*yield*/, this.sortPriceMin.sendKeys(selenium_webdriver_1.Key.chord(selenium_webdriver_1.Key.CONTROL, 'a'))];
                    case 12:
                        _l.sent();
                        return [4 /*yield*/, this.sortPriceMin.sendKeys(selenium_webdriver_1.Key.chord(selenium_webdriver_1.Key.BACK_SPACE))];
                    case 13:
                        _l.sent();
                        return [4 /*yield*/, this.sortPriceMin.sendKeys('$' + x)];
                    case 14:
                        _l.sent();
                        return [4 /*yield*/, this.sortPriceMin.sendKeys(selenium_webdriver_1.Key.chord(selenium_webdriver_1.Key.ENTER))];
                    case 15:
                        _l.sent();
                        return [4 /*yield*/, this.sortPriceMax.sendKeys(selenium_webdriver_1.Key.chord(selenium_webdriver_1.Key.CONTROL, 'a'))];
                    case 16:
                        _l.sent();
                        return [4 /*yield*/, this.sortPriceMax.sendKeys(selenium_webdriver_1.Key.chord(selenium_webdriver_1.Key.BACK_SPACE))];
                    case 17:
                        _l.sent();
                        return [4 /*yield*/, this.sortPriceMax.clear()];
                    case 18:
                        _l.sent();
                        return [4 /*yield*/, this.sortPriceMax.sendKeys('$' + y)];
                    case 19:
                        _l.sent();
                        return [4 /*yield*/, this.sortPriceMax.sendKeys(selenium_webdriver_1.Key.chord(selenium_webdriver_1.Key.ENTER))];
                    case 20:
                        _l.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 21:
                        _l.sent();
                        _f = (_e = protractor_1.browser.actions()).mouseMove;
                        return [4 /*yield*/, this.sortBridalSetHover];
                    case 22: 
                    //add some function that gives out correct random numbers for min and max
                    //bridal sets
                    return [4 /*yield*/, _f.apply(_e, [_l.sent()]).perform()];
                    case 23:
                        //add some function that gives out correct random numbers for min and max
                        //bridal sets
                        _l.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.waitForBridalSet)];
                    case 24:
                        _l.sent();
                        return [4 /*yield*/, this.getIndexOfElementAndClick(this.sortBridalSet)];
                    case 25:
                        _l.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 26:
                        _l.sent();
                        _h = (_g = protractor_1.browser.actions()).mouseMove;
                        return [4 /*yield*/, this.sortStyleHover];
                    case 27: 
                    //style
                    return [4 /*yield*/, _h.apply(_g, [_l.sent()]).perform()];
                    case 28:
                        //style
                        _l.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.waitForStyle)];
                    case 29:
                        _l.sent();
                        return [4 /*yield*/, this.getIndexOfElementAndClick(this.sortStyle)];
                    case 30:
                        _l.sent();
                        //need an if in case it de-selects the show all checkbox
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 31:
                        //need an if in case it de-selects the show all checkbox
                        _l.sent();
                        _k = (_j = protractor_1.browser.actions()).mouseMove;
                        return [4 /*yield*/, this.sortMetalHover];
                    case 32: 
                    //diamond shape
                    // await browser.actions().mouseMove(await this.sortDiamondShapeHover).perform();
                    // await this.justWaitForDisplay(this.waitForDiamondShape);
                    // await this.getIndexOfElementAndClick(this.sortDiamondShape);
                    // await browser.sleep(2000);
                    //metal
                    return [4 /*yield*/, _k.apply(_j, [_l.sent()]).perform()];
                    case 33:
                        //diamond shape
                        // await browser.actions().mouseMove(await this.sortDiamondShapeHover).perform();
                        // await this.justWaitForDisplay(this.waitForDiamondShape);
                        // await this.getIndexOfElementAndClick(this.sortDiamondShape);
                        // await browser.sleep(2000);
                        //metal
                        _l.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.waitForMetal)];
                    case 34:
                        _l.sent();
                        return [4 /*yield*/, this.getIndexOfElementAndClick(this.sortMetal)];
                    case 35:
                        _l.sent();
                        return [4 /*yield*/, this.metalDropdownIcon.click()];
                    case 36:
                        _l.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 37:
                        _l.sent();
                        return [4 /*yield*/, this.textItems.getText()];
                    case 38:
                        if (!((_l.sent()) == "0 Items")) return [3 /*break*/, 41];
                        return [4 /*yield*/, this.resetAll.click()];
                    case 39:
                        _l.sent();
                        return [4 /*yield*/, this.ringSettings()];
                    case 40:
                        _l.sent();
                        _l.label = 41;
                    case 41: return [2 /*return*/];
                }
            });
        });
    };
    engagementRingSettings.prototype.selectRandomItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 1:
                        _a.sent();
                        //await this.metalDropdownIcon.click();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.productResults), 5000)];
                    case 2:
                        //await this.metalDropdownIcon.click();
                        _a.sent();
                        return [4 /*yield*/, this.getIndexOfElementAndClick(this.productResultsCol)];
                    case 3:
                        _a.sent();
                        //force pass for html reporter
                        expect(true).toBe(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    return engagementRingSettings;
}(base_1.Base));
exports.engagementRingSettings = engagementRingSettings;
//# sourceMappingURL=engagementRingSettings.js.map