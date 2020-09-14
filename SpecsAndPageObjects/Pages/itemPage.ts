import {Base} from "./base";
import {browser, by, element, ElementArrayFinder, ElementFinder} from "protractor";

export class itemPage extends Base{

    metalsList:ElementArrayFinder = element(by.css('ul[class="list-inline ir249-pdp-metals-select mb0"]')).all(by.tagName('li'));
    chooseButton:ElementFinder = element(by.className('form-group mb5'));

    dropdownSize:ElementFinder = element(by.css('div[class="form-group mb0 mt10 position-relative"]'));
    dropdownOptions:ElementArrayFinder = element(by.css('div[class="form-group mb0 mt10 position-relative"]')).all(by.tagName("li"));
    sizeError:ElementFinder = element(by.className('form-group mb10'));

    addToBag:ElementFinder = element(by.id('add_cyoring'));
    size5:ElementFinder = element(by.css('li[rel="2"]'));

    public async selectSetting() {
        
        browser.refresh();

        await this.getIndexOfElementAndClick(this.metalsList);

        await browser.sleep(3000);
        await this.chooseButton.click();

    }

    public async selectSize() {

        await this.justWaitForDisplay(this.dropdownSize);
        await this.dropdownSize.click();
        await this.size5.click();

/*        for (let i = 0; i < 10; i++) {

            if(await this.sizeError.isDisplayed()) {

                await this.dropdownSize.click();
                await this.getIndexOfElementAndClick(this.dropdownOptions);

            } else {

                break;

            }

        }*/




        await browser.sleep(2000);
        await this.addToBag.click();
        await browser.sleep(2000);

        expect(await browser.getCurrentUrl()).toContain("cart");

    }














}
