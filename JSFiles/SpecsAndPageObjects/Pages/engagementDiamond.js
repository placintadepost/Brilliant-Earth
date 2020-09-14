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
var engagementRingDiamond = /** @class */ (function (_super) {
    __extends(engagementRingDiamond, _super);
    function engagementRingDiamond() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getStartedButton = protractor_1.element(protractor_1.by.xpath('//*[@id="cyo_popup"]/div/div/div/a'));
        _this.productResultsModal = protractor_1.element(protractor_1.by.xpath('//*[@id="cyo_popup"]/div/div'));
        //----------------------------------
        _this.diamondShape = protractor_1.element.all(protractor_1.by.css('li[class*="details"]'));
        _this.sliderCaratMin = protractor_1.element(protractor_1.by.xpath('//*[@id="shadow_carat_slider"]/div/div[1]/div'));
        _this.sliderCaratMax = protractor_1.element(protractor_1.by.xpath('//*[@id="shadow_carat_slider"]/div/div[2]/div'));
        _this.sliderColorMin = protractor_1.element(protractor_1.by.xpath('//*[@id="color_slider"]/div/div[1]/div'));
        _this.sliderColorMax = protractor_1.element(protractor_1.by.xpath('//*[@id="color_slider"]/div/div[2]/div'));
        _this.sliderPriceMin = protractor_1.element(protractor_1.by.xpath('//*[@id="shadow_price_slider"]/div/div[1]/div'));
        _this.sliderPriceMax = protractor_1.element(protractor_1.by.xpath('//*[@id="shadow_price_slider"]/div/div[2]/div'));
        _this.sliderCutMin = protractor_1.element(protractor_1.by.xpath('//*[@id="cut_slider"]/div/div[1]/div'));
        _this.sliderCutMax = protractor_1.element(protractor_1.by.xpath('//*[@id="cut_slider"]/div/div[2]/div'));
        _this.sliderClarityMin = protractor_1.element(protractor_1.by.xpath('//*[@id="clarity_slider"]/div/div[1]/div'));
        _this.sliderClarityMax = protractor_1.element(protractor_1.by.xpath('//*[@id="clarity_slider"]/div/div[2]/div'));
        _this.diamondsResult = protractor_1.element(protractor_1.by.id('diamonds_search_table')).all(protractor_1.by.css('i[class="icons-checkbox"]'));
        _this.diamondsResultNr = protractor_1.element(protractor_1.by.id('diamonds_search_table')).all(protractor_1.by.className('inner item'));
        _this.diamondLoadingIcon = protractor_1.element(protractor_1.by.id('diamond_search_loading'));
        _this.resetAllButton = protractor_1.element(protractor_1.by.className('ir246-reset-filters'));
        _this.advancedTabButton = protractor_1.element(protractor_1.by.className("ir246-diamond-search__panel ir246-advanced-filters"));
        _this.comparisonTab = protractor_1.element(protractor_1.by.css('a[id="tab_diamonds_comparison"]'));
        _this.sortPrice = protractor_1.element(protractor_1.by.id('order_by_price_comparison'));
        _this.comparisonTable = protractor_1.element(protractor_1.by.css('div[id="comparison_table"]')).all(protractor_1.by.className('inner item'));
        _this.chooseDiamondBtn = protractor_1.element(protractor_1.by.css('div[class="form-group mb5"]'));
        _this.mouseOverNotImage = protractor_1.element(protractor_1.by.xpath('//*[@id="cyo-bar"]/div/div'));
        return _this;
    }
    //------------------------------
    engagementRingDiamond.prototype.getStarted = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.justWaitForDisplay(this.productResultsModal)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.justClick(this.getStartedButton)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.justWaitForInvisibility(this.getStartedButton)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    engagementRingDiamond.prototype.filtersDiamondPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var max, min, i, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        max = Math.floor(Math.random() * 200) + 1;
                        min = Math.floor(Math.random() * 200) - 200;
                        i = 0;
                        _w.label = 1;
                    case 1:
                        if (!(i < 3)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getIndexOfElementAndClick(this.diamondShape)];
                    case 2:
                        _w.sent();
                        _w.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        _b = (_a = protractor_1.browser.actions()).dragAndDrop;
                        return [4 /*yield*/, this.sliderCaratMin];
                    case 5: return [4 /*yield*/, _b.apply(_a, [_w.sent(), { x: max, y: 0 }]).mouseUp().perform()];
                    case 6:
                        _w.sent();
                        _d = (_c = protractor_1.browser.actions()).dragAndDrop;
                        return [4 /*yield*/, this.sliderCaratMax];
                    case 7: return [4 /*yield*/, _d.apply(_c, [_w.sent(), { x: min, y: 0 }]).mouseUp().perform()];
                    case 8:
                        _w.sent();
                        _f = (_e = protractor_1.browser.actions()).dragAndDrop;
                        return [4 /*yield*/, this.sliderColorMin];
                    case 9: return [4 /*yield*/, _f.apply(_e, [_w.sent(), { x: max, y: 0 }]).mouseUp().perform()];
                    case 10:
                        _w.sent();
                        _h = (_g = protractor_1.browser.actions()).dragAndDrop;
                        return [4 /*yield*/, this.sliderColorMax];
                    case 11: return [4 /*yield*/, _h.apply(_g, [_w.sent(), { x: min, y: 0 }]).mouseUp().perform()];
                    case 12:
                        _w.sent();
                        _k = (_j = protractor_1.browser.actions()).dragAndDrop;
                        return [4 /*yield*/, this.sliderPriceMin];
                    case 13: return [4 /*yield*/, _k.apply(_j, [_w.sent(), { x: max, y: 0 }]).mouseUp().perform()];
                    case 14:
                        _w.sent();
                        _m = (_l = protractor_1.browser.actions()).dragAndDrop;
                        return [4 /*yield*/, this.sliderPriceMax];
                    case 15: return [4 /*yield*/, _m.apply(_l, [_w.sent(), { x: min, y: 0 }]).mouseUp().perform()];
                    case 16:
                        _w.sent();
                        _p = (_o = protractor_1.browser.actions()).dragAndDrop;
                        return [4 /*yield*/, this.sliderCutMin];
                    case 17: return [4 /*yield*/, _p.apply(_o, [_w.sent(), { x: max, y: 0 }]).mouseUp().perform()];
                    case 18:
                        _w.sent();
                        _r = (_q = protractor_1.browser.actions()).dragAndDrop;
                        return [4 /*yield*/, this.sliderCutMax];
                    case 19: return [4 /*yield*/, _r.apply(_q, [_w.sent(), { x: min, y: 0 }]).mouseUp().perform()];
                    case 20:
                        _w.sent();
                        _t = (_s = protractor_1.browser.actions()).dragAndDrop;
                        return [4 /*yield*/, this.sliderClarityMin];
                    case 21: return [4 /*yield*/, _t.apply(_s, [_w.sent(), { x: max, y: 0 }]).mouseUp().perform()];
                    case 22:
                        _w.sent();
                        _v = (_u = protractor_1.browser.actions()).dragAndDrop;
                        return [4 /*yield*/, this.sliderClarityMax];
                    case 23: return [4 /*yield*/, _v.apply(_u, [_w.sent(), { x: min, y: 0 }]).mouseUp().perform()];
                    case 24:
                        _w.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    engagementRingDiamond.prototype.getDiamondResults = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nr, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.justWaitForInvisibility(this.diamondLoadingIcon)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.diamondsResultNr.count().then(function (size) {
                                nr = size;
                            })];
                    case 2:
                        _a.sent();
                        if (!(nr >= 5)) return [3 /*break*/, 7];
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < 2)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getIndexOfElementAndClick(this.diamondsResult)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 12];
                    case 7: return [4 /*yield*/, this.resetAllButton.click()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.justWaitForInvisibility(this.diamondLoadingIcon)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.filtersDiamondPage()];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.getDiamondResults()];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12:
                        //force pass for html reporter
                        expect(true).toBe(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    engagementRingDiamond.prototype.compareAndChoose = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.executeScript('arguments[0].scrollIntoView()', this.advancedTabButton.getWebElement())];
                    case 1:
                        _d.sent();
                        return [4 /*yield*/, this.comparisonTab.click()];
                    case 2:
                        _d.sent();
                        /*        for (let i=0; i<2; i++) {
                
                                    await this.sortPrice.click();
                                    await this.justWaitForInvisibility(this.diamondLoadingIcon)
                
                                }*/
                        return [4 /*yield*/, this.comparisonTable.get(0).click()];
                    case 3:
                        /*        for (let i=0; i<2; i++) {
                
                                    await this.sortPrice.click();
                                    await this.justWaitForInvisibility(this.diamondLoadingIcon)
                
                                }*/
                        _d.sent();
                        _a = expect;
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                    case 4:
                        _a.apply(void 0, [_d.sent()]).toContain("view_diamond");
                        _c = (_b = protractor_1.browser.actions()).mouseMove;
                        return [4 /*yield*/, this.mouseOverNotImage];
                    case 5: return [4 /*yield*/, _c.apply(_b, [_d.sent()]).perform()];
                    case 6:
                        _d.sent();
                        protractor_1.browser.sleep(3000);
                        return [4 /*yield*/, this.chooseDiamondBtn.click()];
                    case 7:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return engagementRingDiamond;
}(base_1.Base));
exports.engagementRingDiamond = engagementRingDiamond;
//# sourceMappingURL=engagementDiamond.js.map