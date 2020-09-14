import {Base} from "./base";
import {browser, by, element, ElementFinder, ExpectedConditions, protractor} from "protractor";


export class referAFriend extends Base {

    referAFriend:ElementFinder = element(by.xpath("(//*[text()[contains(.,'Refer a Friend')]])[2]"));
    nameUser:ElementFinder = element(by.xpath('//*[@id="affiliate_member_first_name"]'));
    emailUser:ElementFinder = element(by.css('/html/body/div[1]/div/div[1]/div/div[5]/form/div[2]/input'));
    newsletterCheckBox:ElementFinder = element(by.css('input[id="subs-checkbox"]'));

    //--------------------------------------------------

    nameRefer:ElementFinder = element(by.css('input[class="textfield is-email js-advocate-name"]'));
    emailRefer:ElementFinder = element(by.css('input[class="textfield is-email js-advocate-email"]'));
    newsCheckBox:ElementFinder = element(by.css('input[id="email-subscribe"]'));
    frame:ElementFinder = element(by.css('div[id="talkable-offer"]')).element(by.css('iframe[name="talkable-offer-iframe"]'));

    //--------------------------------------------------


    tempMail:ElementFinder = element(by.css('a[class="item email-link"]'));
    fakeMail:ElementFinder = element(by.css('span[id="email"]'));
    genMail:ElementFinder = element(by.css('span[id="email_ch_text"]'));

    //----------------------------------------


    public async referClick() {

        await this.handle(0);

        await browser.waitForAngularEnabled(true);

        await browser.executeScript('arguments[0].scrollIntoView()', this.referAFriend.getWebElement());

        await browser.wait(ExpectedConditions.elementToBeClickable(this.referAFriend), 5000);
        await this.referAFriend.click();

        expect(await browser.getCurrentUrl()).toContain("refer");

    }

    public async whichPageEmailAndName() {

        await browser.switchTo().frame(this.frame.getWebElement());

       try {

           await browser.sleep(5000);
           await this.nameUser.click();
           await this.nameUser.sendKeys("Shelly");
           await this.emailUser.sendKeys();
           await this.newsletterCheckBox.click();

        } catch  {

           await browser.sleep(3000);
           await this.nameRefer.sendKeys("Shelly");
           await this.emailRefer.sendKeys();
           await this.newsCheckBox.click();

       }


    }

    public async emailAddressesFriends() {

        await browser.waitForAngularEnabled(false);

        await this.openNewTab("https://tempmailgen.com/", 1);

        await browser.wait(ExpectedConditions.urlIs("https://tempmailgen.com/"), 5000);

        expect(await browser.getCurrentUrl()).toContain("tempmailgen");

        let tempEmail = await this.tempMail.getText();

        console.log(tempEmail);

        await this.openNewTab("https://www.fakemail.net/", 2);

        await browser.wait(ExpectedConditions.urlIs("https://www.fakemail.net/"), 5000);

        expect(await browser.getCurrentUrl()).toContain("fakemail");

        let fakeEmail = await this.fakeMail.getText();

        console.log(fakeEmail);

        await this.openNewTab("https://generator.email/", 3);

        await browser.wait(ExpectedConditions.urlIs("https://generator.email/"), 5000);

        expect(await browser.getCurrentUrl()).toContain("generator");

        let genEmail = await this.genMail.getText();

        console.log(genEmail);

    }




}
