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
var referAFriend = /** @class */ (function (_super) {
    __extends(referAFriend, _super);
    function referAFriend() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.referAFriend = protractor_1.element(protractor_1.by.xpath("(//*[text()[contains(.,'Refer a Friend')]])[2]"));
        _this.nameUser = protractor_1.element(protractor_1.by.xpath('//*[@id="affiliate_member_first_name"]'));
        _this.emailUser = protractor_1.element(protractor_1.by.css('/html/body/div[1]/div/div[1]/div/div[5]/form/div[2]/input'));
        _this.newsletterCheckBox = protractor_1.element(protractor_1.by.css('input[id="subs-checkbox"]'));
        //--------------------------------------------------
        _this.nameRefer = protractor_1.element(protractor_1.by.css('input[class="textfield is-email js-advocate-name"]'));
        _this.emailRefer = protractor_1.element(protractor_1.by.css('input[class="textfield is-email js-advocate-email"]'));
        _this.newsCheckBox = protractor_1.element(protractor_1.by.css('input[id="email-subscribe"]'));
        _this.frame = protractor_1.element(protractor_1.by.css('div[id="talkable-offer"]')).element(protractor_1.by.css('iframe[name="talkable-offer-iframe"]'));
        //--------------------------------------------------
        _this.tempMail = protractor_1.element(protractor_1.by.css('a[class="item email-link"]'));
        _this.fakeMail = protractor_1.element(protractor_1.by.css('span[id="email"]'));
        _this.genMail = protractor_1.element(protractor_1.by.css('span[id="email_ch_text"]'));
        return _this;
    }
    //----------------------------------------
    referAFriend.prototype.referClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.handle(0)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(true)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.executeScript('arguments[0].scrollIntoView()', this.referAFriend.getWebElement())];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.referAFriend), 5000)];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.referAFriend.click()];
                    case 5:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                    case 6:
                        _a.apply(void 0, [_b.sent()]).toContain("refer");
                        return [2 /*return*/];
                }
            });
        });
    };
    referAFriend.prototype.whichPageEmailAndName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.switchTo().frame(this.frame.getWebElement())];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 8, , 13]);
                        return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.nameUser.click()];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.nameUser.sendKeys("Shelly")];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, this.emailUser.sendKeys()];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, this.newsletterCheckBox.click()];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 13];
                    case 8:
                        _a = _b.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 9:
                        _b.sent();
                        return [4 /*yield*/, this.nameRefer.sendKeys("Shelly")];
                    case 10:
                        _b.sent();
                        return [4 /*yield*/, this.emailRefer.sendKeys()];
                    case 11:
                        _b.sent();
                        return [4 /*yield*/, this.newsCheckBox.click()];
                    case 12:
                        _b.sent();
                        return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    referAFriend.prototype.emailAddressesFriends = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, tempEmail, _b, fakeEmail, _c, genEmail;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                    case 1:
                        _d.sent();
                        return [4 /*yield*/, this.openNewTab("https://tempmailgen.com/", 1)];
                    case 2:
                        _d.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.urlIs("https://tempmailgen.com/"), 5000)];
                    case 3:
                        _d.sent();
                        _a = expect;
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                    case 4:
                        _a.apply(void 0, [_d.sent()]).toContain("tempmailgen");
                        return [4 /*yield*/, this.tempMail.getText()];
                    case 5:
                        tempEmail = _d.sent();
                        console.log(tempEmail);
                        return [4 /*yield*/, this.openNewTab("https://www.fakemail.net/", 2)];
                    case 6:
                        _d.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.urlIs("https://www.fakemail.net/"), 5000)];
                    case 7:
                        _d.sent();
                        _b = expect;
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                    case 8:
                        _b.apply(void 0, [_d.sent()]).toContain("fakemail");
                        return [4 /*yield*/, this.fakeMail.getText()];
                    case 9:
                        fakeEmail = _d.sent();
                        console.log(fakeEmail);
                        return [4 /*yield*/, this.openNewTab("https://generator.email/", 3)];
                    case 10:
                        _d.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.urlIs("https://generator.email/"), 5000)];
                    case 11:
                        _d.sent();
                        _c = expect;
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                    case 12:
                        _c.apply(void 0, [_d.sent()]).toContain("generator");
                        return [4 /*yield*/, this.genMail.getText()];
                    case 13:
                        genEmail = _d.sent();
                        console.log(genEmail);
                        return [2 /*return*/];
                }
            });
        });
    };
    return referAFriend;
}(base_1.Base));
exports.referAFriend = referAFriend;
//# sourceMappingURL=referAFriend.js.map