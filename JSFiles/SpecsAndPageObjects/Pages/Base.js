"use strict";
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
var Base = /** @class */ (function () {
    function Base() {
        this.EC = protractor_1.protractor.ExpectedConditions;
    }
    Base.prototype.getIndexOfElementAndClick = function (elementList) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, elementList.count().then(function (numberOfItems) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, Math.floor(Math.random() * numberOfItems) - 1];
                                });
                            });
                        }).then(function (randomNumber) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, protractor_1.browser.sleep(1500)];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, elementList.get(randomNumber).click()];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Base.prototype.getIndexOfElement = function (elementList) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, elementList.count().then(function (numberOfItems) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, Math.floor(Math.random() * numberOfItems) - 1];
                                });
                            });
                        }).then(function (randomNumber) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, elementList.get(randomNumber)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Base.prototype.justClick = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(this.EC.elementToBeClickable(item))
                            .then(item.click)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Base.prototype.justWaitForDisplay = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var i, until, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 10000)) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        until = protractor_1.protractor.ExpectedConditions;
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(a), 2500000, 'The element is taking too long to appear in the DOM')];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        e_1 = _a.sent();
                        i++;
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Base.prototype.justWaitForInvisibility = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var i, until, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 10000)) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        until = protractor_1.protractor.ExpectedConditions;
                        return [4 /*yield*/, protractor_1.browser.wait(until.invisibilityOf(a), 2500000, 'The element is taking too long to disappear')];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        e_2 = _a.sent();
                        i++;
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ;
    Base.prototype.validateListByText = function (listItem, expectedItems) {
        return __awaiter(this, void 0, void 0, function () {
            var presentedItems;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        presentedItems = [];
                        return [4 /*yield*/, listItem.each(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                var value, i, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, element.getText()];
                                        case 1:
                                            value = _b.sent();
                                            return [4 /*yield*/, presentedItems.push(value)];
                                        case 2:
                                            _b.sent();
                                            i = 0;
                                            _b.label = 3;
                                        case 3:
                                            if (!(i < presentedItems.length)) return [3 /*break*/, 8];
                                            presentedItems[i];
                                            _b.label = 4;
                                        case 4:
                                            _b.trys.push([4, 6, , 7]);
                                            return [4 /*yield*/, expect(presentedItems[i]).toContain(expectedItems[i])];
                                        case 5:
                                            _b.sent();
                                            console.log("List matched");
                                            return [3 /*break*/, 7];
                                        case 6:
                                            _a = _b.sent();
                                            console.log("Not found");
                                            return [3 /*break*/, 7];
                                        case 7:
                                            i++;
                                            return [3 /*break*/, 3];
                                        case 8: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Base.prototype.openNewWindowIncognito = function () {
        return __awaiter(this, void 0, void 0, function () {
            var robot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        robot = require("kbm-robot");
                        return [4 /*yield*/, robot.startJar("7")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, robot.press("CTRL")
                                .sleep(100)
                                .press("SHIFT")
                                .sleep(100)
                                .press("N")
                                .sleep(100)
                                .release("CTRL")
                                .release("SHIFT")
                                .release("N")
                                .go()
                                .then(robot.stopJar)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.handle(1)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Base.prototype.openNewTab = function (newPageToOpen, handle) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.executeScript('window.open()').then(function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, protractor_1.browser.getAllWindowHandles().then(function (handles) {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    var secondWindow;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                secondWindow = handles[handle];
                                                                return [4 /*yield*/, protractor_1.browser.switchTo().window(secondWindow).then(function () {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            return __generator(this, function (_a) {
                                                                                return [2 /*return*/, protractor_1.browser.get(newPageToOpen)];
                                                                            });
                                                                        });
                                                                    })];
                                                            case 1:
                                                                _a.sent();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                });
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Base.prototype.handle = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.getAllWindowHandles().then(function (handles) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, protractor_1.browser.switchTo().window(handles[a])];
                                    case 1:
                                        _a.sent(); // pass the index, here assuming that
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Base.prototype.addContent = function (item, a) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, protractor_1.browser.wait(item.sendKeys(a))];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        console.log("Inputting didn't work");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Base.prototype.randomInt = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Math.floor(Math.random() * 1001)];
            });
        });
    };
    Base.prototype.scroll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 6000)) return [3 /*break*/, 5];
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.executeScript("window.scrollBy(0,1)")];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Base.prototype.waitForEmail = function (titleEmailContains) {
        return __awaiter(this, void 0, void 0, function () {
            var i, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!(i <= 6000)) return [3 /*break*/, 7];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 6]);
                        return [4 /*yield*/, titleEmailContains.isDisplayed()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 4:
                        _a = _b.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 5:
                        _b.sent();
                        i++;
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 1];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return Base;
}());
exports.Base = Base;
//# sourceMappingURL=base.js.map