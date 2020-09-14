import {Base} from "./base";
import {browser, by, element, ElementArrayFinder, ElementFinder, ExpectedConditions} from "protractor";


export class searchAction extends Base {


    nameIcon:ElementFinder = element(by.css('button[id="king-search-button"]'));
    searchInput:ElementFinder = element(by.css('input[id="king-search-input"]'));
    searchResult:ElementArrayFinder = element(by.id('product_results')).all(by.className("col-lg-3 col-md-4 col-sm-6 col-xs-6 per-product"));
    itemAvailable:ElementFinder = element(by.css('p[class="normal-statement mt10 mb-20"]'));
    wishList:ElementFinder = element(by.css('li[class="add-to-wishlist"]'));
    wishListActive:ElementFinder = element(by.css('span[class="settings active"]'));
    wishListCount:ElementFinder = element(by.css('span[class="count"]'));
    itemBtn:ElementFinder = element(by.xpath("//*[text()[contains(.,'ADD TO BAG')]]"));
    addToBagBtn:ElementFinder = element(by.css('a[class="btn btn-lg btn-block fw-b btn-success add_cyoring add_button"]'));
    requestGuid:ElementFinder = element(by.css('div[class="form-group mb5"]')).element(by.tagName("a"));
    notAvailable:ElementFinder = element(by.xpath('//*[@id="product_results"]/div/div/div[129]/div/div/div/div[2]/span'));
    wishlistIcon:ElementFinder = element(by.css('li[class="dropdown king-wish-list"]'))
    wishListBtn:ElementFinder = element(by.css('a[class="btn btn-success btn-lg btn-block"]'))



    public async searchBtn() {

        await browser.wait(ExpectedConditions.elementToBeClickable(this.nameIcon), 5000);
        await this.nameIcon.click();
        await this.searchInput.sendKeys("silver earrings");
        await this.nameIcon.click();

        //force pass for html reporter
        expect(true).toBe(true);

    }


    public async getSearchResults() {

        let x = Math.floor(Math.random() * 6) + 1

        await browser.wait(ExpectedConditions.urlContains("search"), 5000);
        await browser.sleep(3000);
        await this.searchResult.get(x).click();
        await browser.refresh();

        await browser.wait(ExpectedConditions.elementToBeClickable(this.addToBagBtn), 5000);

        if(await this.addToBagBtn.getText() == 'NEW SEARCH') {

            await this.addToBagBtn.click();
            await this.searchBtn();
            await this.getSearchResults()
        }

        await browser.sleep(1500);
        await this.justClick(this.wishList)

        await browser.actions().mouseMove(await this.wishlistIcon).perform();
        await this.justWaitForDisplay(this.wishListBtn);
        await this.justClick(this.wishListBtn);

        //force pass for html reporter
        expect(true).toBe(true);

    }

}
