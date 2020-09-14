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
var Base_1 = require("./Base");
var assert_1 = require("assert");
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        //-----------------------------------------
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.account = protractor_1.element(protractor_1.by.id('navbarAccount'));
        _this.login = protractor_1.element(protractor_1.by.css('div[class*="ng-star-inserted mat-elevation-z4"]'));
        _this.anotherLogin = protractor_1.element(protractor_1.by.id('navbarLoginButton'));
        _this.emailField = protractor_1.element(protractor_1.by.id('email'));
        _this.passField = protractor_1.element(protractor_1.by.id('password'));
        _this.loginBtn = protractor_1.element(protractor_1.by.id('loginButton'));
        _this.welcomeMessBtn = protractor_1.element(protractor_1.by.css('button[color="primary"]'));
        _this.cookiesBtn = protractor_1.element(protractor_1.by.css('a[class="cc-btn cc-dismiss"]'));
        _this.reloadEn = protractor_1.element(protractor_1.by.xpath('//div[text()[contains(.,\'Language has been changed to English\')]]'));
        _this.userAcc = protractor_1.element(protractor_1.by.xpath('(//span[text()=\' olgatest@owlymail.com \'])[2]'));
        //-----------------------------------------
        _this.searchIcon = protractor_1.element(protractor_1.by.id('searchQuery'));
        _this.searchBar = protractor_1.element(protractor_1.by.id('mat-input-0'));
        //-----------------------------------------
        _this.regCustomer = protractor_1.element(protractor_1.by.xpath('//a[text()=\'Not yet a customer?\']'));
        _this.emailReg = protractor_1.element(protractor_1.by.id('emailControl'));
        _this.passReg = protractor_1.element(protractor_1.by.id('passwordControl'));
        _this.confPassReg = protractor_1.element(protractor_1.by.id('repeatPasswordControl'));
        _this.secQueReg2 = protractor_1.element(protractor_1.by.className('mat-select-empty ng-star-inserted'));
        _this.secQueReg = protractor_1.element.all(protractor_1.by.css('span[class="mat-select-placeholder ng-tns-c22-18 ng-star-inserted"]'));
        _this.secRegTable = protractor_1.element(protractor_1.by.id('mat-option-4'));
        //secRegTableOne : ElementFinder = element(by.id('mat-option-4'));
        _this.secAnsReg = protractor_1.element(protractor_1.by.id('securityAnswerControl'));
        _this.confBtnReg = protractor_1.element(protractor_1.by.id('registerButton'));
        _this.invalidMess = protractor_1.element(protractor_1.by.xpath('//div[text()[contains(.,\'Invalid email or password.\')]]'));
        _this.privacyLabel = protractor_1.element(protractor_1.by.css('button[aria-label="Show Privacy and Security Menu"]'));
        _this.eraseData = protractor_1.element(protractor_1.by.css('button[aria-label="Go to data subject page"]'));
        _this.dataErasure = protractor_1.element(protractor_1.by.xpath('//h1[text()[contains(.,\'Data Erasure Request (Art. 17 GDPR)\')]]'));
        _this.secQuestionErase = protractor_1.element(protractor_1.by.id('securityAnswer'));
        _this.deletUserData = protractor_1.element(protractor_1.by.id('deleteUserButton'));
        _this.deletConfirm = protractor_1.element(protractor_1.by.xpath("//span[text()[contains(.,'Sorry to see you leave!')]]"));
        _this.accMenu = protractor_1.element.all(protractor_1.by.className('mat-menu-ripple mat-ripple'));
        _this.privacySec = protractor_1.element(protractor_1.by.css('button[aria-label="Show Privacy and Security Menu"]'));
        _this.dataErasureOne = protractor_1.element(protractor_1.by.xpath('//span[text()[contains(.,\'Request Data Erasure\')]]'));
        _this.overlay = protractor_1.element(protractor_1.by.css('div[class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]'));
        _this.logo = protractor_1.element(protractor_1.by.xpath('//span[text()[contains(.,\' OWASP Juice Shop \')]]'));
        _this.logout = protractor_1.element(protractor_1.by.xpath('(//span[text()[contains(.,\'Logout\')]])[2]'));
        _this.AccMenu = protractor_1.element(protractor_1.by.id('cdk-overlay-2'));
        return _this;
    }
    //-----------------------------------------
    Login.prototype.checkLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.welcomeMessBtn)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.welcomeMessBtn.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.cookiesBtn.click()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.justWaitForNotDisplay(this.reloadEn)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.account.click()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.switchTo().activeElement];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.login.click()];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.emailField)];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, this.addContent(this.emailField, protractor_1.browser.params.login.email)];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, this.addContent(this.passField, protractor_1.browser.params.login.password)];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, this.waitForClickEnabled(this.loginBtn)];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, this.loginBtn.click()];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, this.invalidMess.isPresent()];
                    case 18:
                        if (!_a.sent()) return [3 /*break*/, 26];
                        return [4 /*yield*/, this.registerUser()];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.emailField)];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, this.addContent(this.emailField, protractor_1.browser.params.login.email)];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, this.addContent(this.passField, protractor_1.browser.params.login.password)];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, this.waitForClickEnabled(this.loginBtn)];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, this.loginBtn.click()];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 25:
                        _a.sent();
                        return [3 /*break*/, 27];
                    case 26:
                        console.log("User is already registered");
                        _a.label = 27;
                    case 27: return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.insertText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.getWindowHandle()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.logout.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.searchIcon)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.searchIcon.click()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.searchBar)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.addContent(this.searchBar, "<iframe src=\"javascript:alert(`xss`)\">")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform()];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.ignoreAlertGetLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fs, log, dateValue, gitlog, commits;
            return __generator(this, function (_a) {
                fs = require('fs');
                log = require('git-log-reader');
                dateValue = new Date();
                //let expectedDateValue = new Date(dateValue.getFullYear(), 9, 30, 10, 45, 0);
                protractor_1.browser.switchTo().alert().accept;
                gitlog = require('C:\\Users\\OlgaStanciu\\juice-shop\\logs\\access.log' + dateValue);
                commits = gitlog.read({
                    fields: ['abbrevHash', 'subject', 'body']
                });
                console.log(commits);
                return [2 /*return*/];
            });
        });
    };
    Login.prototype.getLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fs, text, i, j, date, array;
            return __generator(this, function (_a) {
                fs = require('fs');
                text = fs.readFileSync('C:\\Users\\OlgaStanciu\\juice-shop\\logs\\access.log.2019-12-12', 'utf8');
                i = 0;
                j = 0;
                date = new Date().toDateString();
                array = text.split("\n");
                j = array.length;
                while (i < j) {
                    if (array[i] === date) {
                        console.log("ipotetic");
                        break;
                    }
                    else {
                        i++;
                    }
                }
                console.log(array);
                return [2 /*return*/];
            });
        });
    };
    Login.prototype.getTheDamnLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var readLastLines;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        readLastLines = require('read-last-lines');
                        protractor_1.browser.sleep(2000);
                        return [4 /*yield*/, protractor_1.browser.driver.switchTo().alert().dismiss()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, readLastLines.read('C:\\Users\\OlgaStanciu\\juice-shop\\logs\\access.log.2019-12-23', 1)
                                .then(function (lines) { return console.log(lines); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.waitForClickEnabled = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                protractor_1.browser.wait(this.EC.elementToBeClickable((a)), 5000);
                return [2 /*return*/];
            });
        });
    };
    Login.prototype.VerifyBothSessionAcc = function () {
        return __awaiter(this, void 0, void 0, function () {
            var x, y;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.account.click()];
                    case 1:
                        _a.sent();
                        x = this.userAcc.getText();
                        expect(x).toContain(protractor_1.browser.params.login.email);
                        this.handle(0);
                        return [4 /*yield*/, this.account.click()];
                    case 2:
                        _a.sent();
                        y = this.userAcc.getText();
                        if (expect(y).toContain(protractor_1.browser.params.login.email)) {
                            assert_1.fail("The same account is logged in two instances");
                            protractor_1.browser.close();
                        }
                        else {
                            console.log("You fucked something up, didn't you?");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.registerUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.regCustomer.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.emailReg.sendKeys(protractor_1.browser.params.login.email)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.passReg.sendKeys(protractor_1.browser.params.login.password)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.confPassReg.sendKeys(protractor_1.browser.params.login.password)];
                    case 4:
                        _a.sent();
                        //await this.secQueReg.click();
                        return [4 /*yield*/, this.secQueReg2.click()];
                    case 5:
                        //await this.secQueReg.click();
                        _a.sent();
                        return [4 /*yield*/, this.secRegTable.click()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.secAnsReg.sendKeys("Liliana")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.waitForClickEnabled(this.confBtnReg)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.confBtnReg.click()];
                    case 9:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.dumpMeh = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.LogIn()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.waitForClickEnabled(this.privacySec)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.actions().mouseMove(this.privacySec).perform()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.dataErasureOne)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.dataErasureOne.click()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.dataErasure)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.emailField.sendKeys(protractor_1.browser.params.login.email)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.secQuestionErase)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.secQuestionErase.sendKeys(protractor_1.browser.params.login.secQuestion)];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.waitForClickEnabled(this.deletUserData)];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, this.deletUserData.click()];
                    case 14:
                        _a.sent();
                        expect(this.deletConfirm.isPresent());
                        return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.confirmDump = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.LogIn()];
                    case 1:
                        _a.sent();
                        if (expect(this.userAcc.getText()).toContain(protractor_1.browser.params.login.email)) {
                            assert_1.fail("The user can still log in after account erasure");
                        }
                        else {
                            console.log("The user account was deleted");
                        }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.LogIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.account.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.anotherLogin)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.anotherLogin.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.justWaitForDisplay(this.emailField)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.addContent(this.emailField, protractor_1.browser.params.login.email)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.addContent(this.passField, protractor_1.browser.params.login.password)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.waitForClickEnabled(this.loginBtn)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.loginBtn.click()];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.account.click()];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.ffs = function () {
        return __awaiter(this, void 0, void 0, function () {
            function rmDir(dirPath) {
                try {
                    files = fs.readdirSync(dirPath);
                }
                catch (e) {
                    return;
                }
                if (files.length > 0)
                    for (var i = 0; i < files.length; i++) {
                        var filePath = dirPath + '/' + files[i];
                        if (fs.statSync(filePath).isFile())
                            fs.unlinkSync(filePath);
                        else
                            rmDir(filePath);
                    }
                fs.rmdirSync(dirPath);
            }
            var fs, files;
            return __generator(this, function (_a) {
                fs = require('fs');
                return [2 /*return*/];
            });
        });
    };
    return Login;
}(Base_1.Base));
exports.Login = Login;
//# sourceMappingURL=Login.js.map