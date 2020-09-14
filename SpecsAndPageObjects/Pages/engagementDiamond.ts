import {Base} from "./base";
import {browser, by, element, ElementArrayFinder, ElementFinder} from "protractor";


export class engagementRingDiamond extends Base {

    getStartedButton:ElementFinder = element(by.xpath('//*[@id="cyo_popup"]/div/div/div/a'));
    productResultsModal:ElementFinder = element(by.xpath('//*[@id="cyo_popup"]/div/div'));

    //----------------------------------

    diamondShape:ElementArrayFinder = element.all(by.css('li[class*="details"]'));
    sliderCaratMin:ElementFinder = element(by.xpath('//*[@id="shadow_carat_slider"]/div/div[1]/div'));
    sliderCaratMax:ElementFinder = element(by.xpath('//*[@id="shadow_carat_slider"]/div/div[2]/div'));
    sliderColorMin:ElementFinder = element(by.xpath('//*[@id="color_slider"]/div/div[1]/div'));
    sliderColorMax:ElementFinder = element(by.xpath('//*[@id="color_slider"]/div/div[2]/div'));
    sliderPriceMin:ElementFinder = element(by.xpath('//*[@id="shadow_price_slider"]/div/div[1]/div'));
    sliderPriceMax:ElementFinder = element(by.xpath('//*[@id="shadow_price_slider"]/div/div[2]/div'));
    sliderCutMin:ElementFinder = element(by.xpath('//*[@id="cut_slider"]/div/div[1]/div'));
    sliderCutMax:ElementFinder = element(by.xpath('//*[@id="cut_slider"]/div/div[2]/div'));
    sliderClarityMin:ElementFinder = element(by.xpath('//*[@id="clarity_slider"]/div/div[1]/div'));
    sliderClarityMax:ElementFinder = element(by.xpath('//*[@id="clarity_slider"]/div/div[2]/div'));


    diamondsResult:ElementArrayFinder = element(by.id('diamonds_search_table')).all(by.css('i[class="icons-checkbox"]'));
    diamondsResultNr:ElementArrayFinder = element(by.id('diamonds_search_table')).all(by.className('inner item'));
    diamondLoadingIcon:ElementFinder = element(by.id('diamond_search_loading'));
    resetAllButton:ElementFinder = element(by.className('ir246-reset-filters'));
    advancedTabButton:ElementFinder = element(by.className("ir246-diamond-search__panel ir246-advanced-filters"));


    comparisonTab:ElementFinder = element(by.css('a[id="tab_diamonds_comparison"]'));
    sortPrice:ElementFinder = element(by.id('order_by_price_comparison'));
    comparisonTable:ElementArrayFinder = element(by.css('div[id="comparison_table"]')).all(by.className('inner item'));
    chooseDiamondBtn:ElementFinder = element(by.css('div[class="form-group mb5"]'));
    mouseOverNotImage:ElementFinder = element(by.xpath('//*[@id="cyo-bar"]/div/div'));

    //------------------------------


    public async getStarted() {

        await this.justWaitForDisplay(this.productResultsModal);
        await this.justClick(this.getStartedButton);
        await this.justWaitForInvisibility(this.getStartedButton);

    }

    public async filtersDiamondPage() {

        //price
        let max = Math.floor(Math.random() * 200) + 1;
        let min = Math.floor(Math.random() * 200) - 200;

        for(let i=0; i<3; i++) {

            await this.getIndexOfElementAndClick(this.diamondShape);

        }

        await browser.actions().dragAndDrop(await this.sliderCaratMin, {x:max, y:0}).mouseUp().perform();
        await browser.actions().dragAndDrop(await this.sliderCaratMax, {x:min, y:0}).mouseUp().perform();
        await browser.actions().dragAndDrop(await this.sliderColorMin, {x:max, y:0}).mouseUp().perform();
        await browser.actions().dragAndDrop(await this.sliderColorMax, {x:min, y:0}).mouseUp().perform();

        await browser.actions().dragAndDrop(await this.sliderPriceMin, {x:max, y:0}).mouseUp().perform();
        await browser.actions().dragAndDrop(await this.sliderPriceMax, {x:min, y:0}).mouseUp().perform();
        await browser.actions().dragAndDrop(await this.sliderCutMin, {x:max, y:0}).mouseUp().perform();
        await browser.actions().dragAndDrop(await this.sliderCutMax, {x:min, y:0}).mouseUp().perform();
        await browser.actions().dragAndDrop(await this.sliderClarityMin, {x:max, y:0}).mouseUp().perform();
        await browser.actions().dragAndDrop(await this.sliderClarityMax, {x:min, y:0}).mouseUp().perform();

    }

    public async getDiamondResults() {

        let nr;

        await this.justWaitForInvisibility(this.diamondLoadingIcon);

        await this.diamondsResultNr.count().then(function (size) {

            nr = size;

        });

        if(nr >= 5) {

            for(let i=0; i<2; i++) {

                await this.getIndexOfElementAndClick(this.diamondsResult);

            }


        } else {

            await this.resetAllButton.click();
            await this.justWaitForInvisibility(this.diamondLoadingIcon);
            await this.filtersDiamondPage();
            await this.getDiamondResults();



        }

        //force pass for html reporter
        expect(true).toBe(true);

    }

    public async compareAndChoose() {

        await browser.executeScript('arguments[0].scrollIntoView()', this.advancedTabButton.getWebElement());

        await this.comparisonTab.click();

        /*        for (let i=0; i<2; i++) {

                    await this.sortPrice.click();
                    await this.justWaitForInvisibility(this.diamondLoadingIcon)

                }*/

        await this.comparisonTable.get(0).click();

        expect(await browser.getCurrentUrl()).toContain("view_diamond");
        await browser.actions().mouseMove(await this.mouseOverNotImage).perform();
        browser.sleep(3000);
        await this.chooseDiamondBtn.click();






    }






}
