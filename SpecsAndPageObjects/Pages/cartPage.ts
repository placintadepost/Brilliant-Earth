import {Base} from "./base";
import {browser, by, element, ElementFinder, ExpectedConditions} from "protractor";

export class cartPage extends Base {

    //---------------------------------

    cartIconNav:ElementFinder = element(by.css('a[id="mybag-toggler"]'));

    //--------------------------------

    public async accessBag() {

        await this.cartIconNav.click();
        await browser.wait(ExpectedConditions.urlContains("shop/cart"), 5000);
    }



}
