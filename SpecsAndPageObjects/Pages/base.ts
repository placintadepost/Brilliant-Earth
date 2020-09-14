import {browser, ElementArrayFinder, ElementFinder, protractor, ProtractorExpectedConditions} from 'protractor';
import {Url} from "url";


export class Base {

    EC: ProtractorExpectedConditions = protractor.ExpectedConditions;

    public async getIndexOfElementAndClick(elementList: ElementArrayFinder) {


        await elementList.count().then(async function(numberOfItems) {
            return Math.floor(Math.random() * numberOfItems) - 1;
        }).then(async function(randomNumber) {

                    await browser.sleep(1500);
                    await elementList.get(randomNumber).click();

            }

        )



    }

    public async getIndexOfElement(elementList: ElementArrayFinder) {


        await elementList.count().then(async function(numberOfItems) {
            return Math.floor(Math.random() * numberOfItems) - 1;
        }).then(async function(randomNumber) {

                await elementList.get(randomNumber);

            }

        )



    }

    public async justClick(item: ElementFinder) {

        await browser.wait(this.EC.elementToBeClickable(item))
            .then(item.click);
    }

    public async justWaitForDisplay(a: ElementFinder) {

        for (let i=0;i<10000;) {

            try {

                let until = protractor.ExpectedConditions;
                await browser.wait(until.presenceOf(a), 2500000, 'The element is taking too long to appear in the DOM')
                break;

            } catch (e) {

                i++

            }
        }

    }

    public async justWaitForInvisibility(a: ElementFinder) {

        for (let i=0;i<10000;) {

            try {

                let until = protractor.ExpectedConditions
                await browser.wait(until.invisibilityOf(a), 2500000, 'The element is taking too long to disappear')
                break;

            } catch (e) {

                i++

            }



        }



    };

    public async validateListByText(listItem: ElementArrayFinder, expectedItems: Array<string>) {

        let presentedItems = [];


        await listItem.each(async element => {
            let value: string = await element.getText();
            await presentedItems.push(value);

            for (let i = 0; i < presentedItems.length; i++) {

                presentedItems[i];

                try {
                    await expect(presentedItems[i]).toContain(expectedItems[i]);
                    console.log("List matched");

                } catch {
                    console.log("Not found")
                }
            }


        })
    }

    public async openNewWindowIncognito() {

        const robot = require("kbm-robot");

        await robot.startJar("7");

        await robot.press("CTRL")
            .sleep(100)
            .press("SHIFT")
            .sleep(100)
            .press("N")
            .sleep(100)
            .release("CTRL")
            .release("SHIFT")
            .release("N")
            .go()
            .then(robot.stopJar);



        await this.handle(1);

    }

    public async openNewTab(newPageToOpen, handle) {

        await browser.executeScript('window.open()').then(async function () {
            await browser.getAllWindowHandles().then(async function (handles) {
                let secondWindow = handles[handle];
                await browser.switchTo().window(secondWindow).then(async function () {
                    return browser.get(newPageToOpen);
                });
            });
        });

    }

    public async handle(a:number) {

        await browser.getAllWindowHandles().then(async(handles) => {
            await browser.switchTo().window(handles[a]);    // pass the index, here assuming that
            // there are only two tabs in the browser
        });
    }

    public async addContent (item: ElementFinder, a: any) {

        try {

            await browser.wait(item.sendKeys(a));

        } catch {

            console.log("Inputting didn't work");
        }

    }

    public async randomInt() {

        return Math.floor(Math.random() * 1001);
    }

    public async scroll() {

        for (let i = 0; i < 6000; i++) {

            await browser.sleep(2000);
            await browser.executeScript("window.scrollBy(0,1)");

        }
    }

    public async waitForEmail(titleEmailContains:ElementFinder) {

        for(let i=0; i <= 6000;) {

            try {

                await titleEmailContains.isDisplayed();
                break;

            } catch {

                await browser.sleep(2000);
                i++;

            }

        }

    }




}
