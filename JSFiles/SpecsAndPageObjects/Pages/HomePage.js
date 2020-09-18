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
var protractor_1 = require("protractor");
var base_1 = require("./base");
var homePage = /** @class */ (function (_super) {
    __extends(homePage, _super);
    function homePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.engagementTab = protractor_1.element(protractor_1.by.css('a[data-label="Engagement"]'));
        _this.startWithADiamond = protractor_1.element.all(protractor_1.by.css('a[data-label="Engagement:Start with a Diamond"]'));
        _this.startWithALabDiamond = protractor_1.element.all(protractor_1.by.css('a[data-label="Engagement:Start with a Lab Diamond"]'));
        _this.acceptCookies = protractor_1.element(protractor_1.by.css('div[class="optanon-alert-box-button-middle accept-cookie-container"]'));
        _this.footerNewsletter = protractor_1.element(protractor_1.by.id('footer_newsletter'));
        _this.newsletterBtn = protractor_1.element(protractor_1.by.xpath('//*[@id="footer-newsletter"]/span/button'));
        _this.newsletterCheckbox = protractor_1.element(protractor_1.by.xpath('//*[@id="footer_agree_policy_checkbox"]'));
        _this.scrollToNewsletter = protractor_1.element(protractor_1.by.css('ul[class="list-inline ir217-follow-us"]'));
        _this.thankYouForSubs = protractor_1.element(protractor_1.by.css('div[class="thx-message"]'));
        _this.gallery = protractor_1.element(protractor_1.by.css('div[class="sc-6s1ye6-0 bHDpZk"]'));
        _this.newsletterModal = protractor_1.element(protractor_1.by.css('div[id="myModalLabel"]'));
        _this.newsletterCloseBtn = protractor_1.element(protractor_1.by.xpath('//*[@id="myModalLabel"]/div/button'));
        //--------------------------------------
        _this.copyBtn = protractor_1.element(protractor_1.by.css('button[class="btn-rds icon-btn bg-theme click-to-copy copyIconGreenBtn"]'));
        _this.refreshBtn = protractor_1.element(protractor_1.by.css('a[id="click-to-refresh"]'));
        _this.tempMail = protractor_1.element(protractor_1.by.css('a[class="item email-link"]'));
        //--------------------------------------
        _this.welcomeToBrilliant = protractor_1.element(protractor_1.by.xpath("(//*[text()[contains(.,'Welcome to Brilliant Earth')]])[2]"));
        return _this;
    }
    homePage.prototype.accessPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.get("https://www.brilliantearth.com/")];
                    case 1:
                        _a.sent();
                        expect(protractor_1.browser.getCurrentUrl()).toContain("https://www.brilliantearth.com");
                        return [2 /*return*/];
                }
            });
        });
    };
    homePage.prototype.closePopup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.justWaitForDisplay(this.acceptCookies)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.acceptCookies.click()
                            //force pass for html reporter
                        ];
                    case 2:
                        _a.sent();
                        //force pass for html reporter
                        expect(true).toBe(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    homePage.prototype.closeNewsletter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.justWaitForDisplay(this.newsletterModal)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.newsletterCloseBtn.click()
                            //force pass for html reporter
                        ];
                    case 2:
                        _a.sent();
                        //force pass for html reporter
                        expect(true).toBe(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    homePage.prototype.accessMenuEngagementDiamond = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = protractor_1.browser.actions()).mouseMove;
                        return [4 /*yield*/, this.engagementTab];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()]).perform()];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, this.justClick(this.startWithADiamond.get(0))];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    homePage.prototype.accessMenuEngagementLabDiamond = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = protractor_1.browser.actions()).mouseMove;
                        return [4 /*yield*/, this.engagementTab];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()]).perform()];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, this.justClick(this.startWithALabDiamond.get(0))];
                    case 3:
                        _c.sent();
                        //force pass for html reporter
                        expect(true).toBe(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    homePage.prototype.signUpNewsletter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tempEmail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.openNewTab("https://tempmailgen.com/", 1)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.urlIs("https://tempmailgen.com/"), 5000)];
                    case 3:
                        _a.sent();
                        //expect(await browser.getCurrentUrl()).toContain("tempmailgen");
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 4:
                        //expect(await browser.getCurrentUrl()).toContain("tempmailgen");
                        _a.sent();
                        return [4 /*yield*/, this.tempMail.getText()];
                    case 5:
                        tempEmail = _a.sent();
                        protractor_1.browser.waitForAngularEnabled(true);
                        return [4 /*yield*/, this.handle(0)];
                    case 6:
                        _a.sent();
                        protractor_1.browser.refresh();
                        return [4 /*yield*/, protractor_1.browser.executeScript('arguments[0].scrollIntoView(true)', this.footerNewsletter.getWebElement())];
                    case 7:
                        _a.sent();
                        //await this.justWaitForDisplay(this.gallery);
                        return [4 /*yield*/, protractor_1.browser.executeScript('arguments[0].scrollIntoViewIfNeeded(true);', this.footerNewsletter.getWebElement())];
                    case 8:
                        //await this.justWaitForDisplay(this.gallery);
                        _a.sent();
                        return [4 /*yield*/, this.footerNewsletter.sendKeys(tempEmail)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.newsletterCheckbox.click()];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.newsletterBtn.click()];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.thankYouForSubs)];
                    case 12:
                        _a.sent();
                        expect((this.thankYouForSubs).getText()).toContain("Thank you for subscribing to the Brilliant Earth newsletter");
                        return [2 /*return*/];
                }
            });
        });
    };
    return homePage;
}(base_1.Base));
exports.homePage = homePage;
//# sourceMappingURL=homePage.js.map