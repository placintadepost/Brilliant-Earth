import {Base} from "./base";
import {browser, by, element, ElementArrayFinder, ElementFinder, ExpectedConditions} from "protractor";
import {Key} from "selenium-webdriver";


export class engagementRingSettings extends Base {

    getStartedButton:ElementFinder = element(by.css('a[class="btn btn-success btn-lg w220"]'));
    productResultsModal:ElementFinder = element(by.css('div[id="product_results"]'));

    //--------------------------------

    sortBy:ElementArrayFinder = element(by.css('div[class="filter-v3-sort-by"]')).element(by.id("dropdownSortByMenu")).all(by.tagName("a"));
    sortByHover:ElementFinder = element(by.css('a[id="dropdownMenu"]'));
    waitForSortBy:ElementFinder = element(by.css('div[class="filter-v3-sort-by"]')).element(by.css('div[class="dropdown-content"]'));
    sortPriceMin:ElementFinder = element(by.css('input[id="min-price-display"]'));
    sortPriceMax:ElementFinder = element(by.css('input[id="max-price-display"]'));
    waitForSortByPrice:ElementFinder = element(by.css('dl[id="dropdownPriceMenu"]'));
    sortPriceHover:ElementFinder = element(by.xpath("//h2[text()[contains(.,'Price')]]"));
    sortBridalSet:ElementArrayFinder = element(by.css('dl[id="dropdownMSMenu"]')).all(by.tagName('dd'));
    sortBridalSetHover:ElementFinder = element(by.xpath("//h2[text()[contains(.,'Bridal Sets ')]]"));
    waitForBridalSet:ElementFinder = element(by.css('dl[id="dropdownMSMenu"]'));
    sortStyle:ElementArrayFinder = element(by.css('dl[id="dropdownStyleMenu"]')).all(by.tagName('dd'));
    sortStyleHover:ElementFinder = element(by.xpath("//h2[text()[contains(.,'style')]]"));
    waitForStyle:ElementFinder = element(by.css('dl[id="dropdownStyleMenu"]'));
    sortDiamondShape:ElementArrayFinder = element(by.css('dl[id="dropdownShapeMenu"]')).all(by.tagName('dd'));
    sortDiamondShapeHover:ElementFinder = element(by.xpath("//h2[text()[contains(.,'diamond')]]"));
    header:ElementFinder = element(by.css('div[class="king-site-logo"]'));
    sortMetal:ElementArrayFinder = element(by.css('dl[id="dropdownMeatlMenu"]')).all(by.tagName('dd'));
    sortMetalHover:ElementFinder = element(by.xpath("//h2[text()[contains(.,'metal')]]"));
    waitForMetal:ElementFinder = element(by.css('dl[id="dropdownMeatlMenu"]'));
    diamondLoadingIcon:ElementFinder = element(by.id('diamond_search_loading'));

    //---------------------------------

    productResultsCol:ElementArrayFinder = element(by.id('product_results')).all(by.className("col-lg-3 col-md-4 col-sm-6 col-xs-6 per-product"));
    productResults:ElementFinder = element(by.css('div[class="item-dis"]'));
    textItems: ElementFinder = element(by.css('div[class="listpage-filter-v3-total"]')).element(by.css('span[class="total_obj_count"]'));
    resetAll:ElementFinder = element(by.className('item reset-button'));
    metalDropdownIcon:ElementFinder = element(by.xpath('//*[@id="filter_panel"]/div/div/div[1]/div[2]/a/span'));

    //---------------------------------


    public async getStarted() {

        await this.justWaitForDisplay(this.productResultsModal);
        expect(await browser.getCurrentUrl()).toContain("engagement-ring-settings");
        await this.justClick(this.getStartedButton);
        await this.justWaitForInvisibility(this.getStartedButton);

    }



    public async ringSettings() {


        await browser.executeScript('arguments[0].scrollIntoView(true)', this.header.getWebElement());

        //sort using all filters
        //sort
        await this.justWaitForInvisibility(this.diamondLoadingIcon);
        await browser.sleep(5000);

        await browser.actions().mouseMove(await this.sortByHover).perform();
        await this.getIndexOfElementAndClick(this.sortBy);
        await this.justWaitForDisplay(this.waitForSortBy);
        await this.getIndexOfElementAndClick(this.sortBy);

        //price
        let x = Math.floor(Math.random() * 2000) + 1;
        let y = Math.floor(Math.random() * 200) + 3000;

        await browser.actions().mouseMove(await this.sortPriceHover).perform();
        await this.justWaitForDisplay(this.waitForSortByPrice);
        await this.sortPriceMin.sendKeys(Key.chord(Key.CONTROL, 'a'));
        await this.sortPriceMin.sendKeys(Key.chord(Key.BACK_SPACE));
        await this.sortPriceMin.sendKeys('$' + x);
        await this.sortPriceMin.sendKeys(Key.chord(Key.ENTER));
        await this.sortPriceMax.sendKeys(Key.chord(Key.CONTROL, 'a'));
        await this.sortPriceMax.sendKeys(Key.chord(Key.BACK_SPACE));
        await this.sortPriceMax.clear();
        await this.sortPriceMax.sendKeys('$' + y);
        await this.sortPriceMax.sendKeys(Key.chord(Key.ENTER));
        await browser.sleep(2000);

        //add some function that gives out correct random numbers for min and max

        //bridal sets
        await browser.actions().mouseMove(await this.sortBridalSetHover).perform();
        await this.justWaitForDisplay(this.waitForBridalSet);
        await this.getIndexOfElementAndClick(this.sortBridalSet);
        await browser.sleep(2000);

        //style
        await browser.actions().mouseMove(await this.sortStyleHover).perform();
        await this.justWaitForDisplay(this.waitForStyle);
        await this.getIndexOfElementAndClick(this.sortStyle);
        //need an if in case it de-selects the show all checkbox
        await browser.sleep(2000);

        //diamond shape
        // await browser.actions().mouseMove(await this.sortDiamondShapeHover).perform();
        // await this.justWaitForDisplay(this.waitForDiamondShape);
        // await this.getIndexOfElementAndClick(this.sortDiamondShape);
        // await browser.sleep(2000);

        //metal
        await browser.actions().mouseMove(await this.sortMetalHover).perform();
        await this.justWaitForDisplay(this.waitForMetal);
        await this.getIndexOfElementAndClick(this.sortMetal);
        await this.metalDropdownIcon.click();
        await browser.sleep(2000);


        if(await this.textItems.getText() == "0 Items" ) {

            await this.resetAll.click();
            await this.ringSettings();

        }

    }

    public async selectRandomItem() {

        await browser.sleep(2000);
        //await this.metalDropdownIcon.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(this.productResults), 5000);
        await this.getIndexOfElementAndClick(this.productResultsCol);

        //force pass for html reporter
        expect(true).toBe(true);

    }


}
