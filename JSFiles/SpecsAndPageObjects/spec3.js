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
var homePage_1 = require("./Pages/homePage");
var engagementRingSettings_1 = require("./Pages/engagementRingSettings");
var engagementDiamond_1 = require("./Pages/engagementDiamond");
var itemPage_1 = require("./Pages/itemPage");
var referAFriend_1 = require("./Pages/referAFriend");
var searchAction_1 = require("./Pages/searchAction");
var cartPage_1 = require("./Pages/cartPage");
var home = new homePage_1.homePage();
var engRngStg = new engagementRingSettings_1.engagementRingSettings();
var engDiamond = new engagementDiamond_1.engagementRingDiamond();
var itmPage = new itemPage_1.itemPage();
var refer = new referAFriend_1.referAFriend();
var searchPage = new searchAction_1.searchAction();
var cartPg = new cartPage_1.cartPage();
describe('ProtractorDemo - TC001: Access homepage', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        it('Access main page and verify correct location', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, home.accessPage()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Confirm expected cookies popup message and close', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, home.closePopup()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
describe('ProtractorDemo - TC002: Access the "Start with a Diamond" page and complete a full flow', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        it("Access the 'Engagement' menu area and successfully enter the 'Start with a Diamond' page", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, home.accessMenuEngagementDiamond()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, engDiamond.getStarted()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Select up to 5 items after using all basic filters to filter through products", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, engDiamond.filtersDiamondPage()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, engDiamond.getDiamondResults()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Select one diamond from the comparison list", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, engDiamond.compareAndChoose()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Select an item after using all basic filters to filter through products", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, engRngStg.ringSettings()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, engRngStg.selectRandomItem()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Select ring size", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, itmPage.selectSetting()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, itmPage.selectSize()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
describe('ProtractorDemo - TC003: Access the "Start with a Lab Diamond" page and complete a full flow', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        it("Access the 'Engagement' menu area and successfully enter the 'Start with a Lab Diamond' page", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, home.accessMenuEngagementLabDiamond()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Select up to 5 items after using all basic filters to filter through products", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, engDiamond.filtersDiamondPage()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, engDiamond.getDiamondResults()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Select one diamond from the comparison list", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, engDiamond.compareAndChoose()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Select an item after using all basic filters to filter through products", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, engRngStg.ringSettings()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, engRngStg.selectRandomItem()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Select ring size", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, itmPage.selectSetting()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, itmPage.selectSize()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
describe('ProtractorDemo - TC006: Add an item to wishlist from search results', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        it('Enter a search keyword', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, searchPage.searchBtn()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Add the searched item to the user wishlist', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, searchPage.getSearchResults()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
describe('ProtractorDemo - TC004: Add item(s) to wishlist', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        it('Access the cart page', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cartPg.accessBag()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=spec3.js.map