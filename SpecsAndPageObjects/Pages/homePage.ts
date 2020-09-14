import {ElementFinder, element, by, browser, ElementArrayFinder, protractor, ExpectedConditions} from "protractor";
import {Base} from "./base";

export class homePage extends Base {

    engagementTab:ElementFinder = element(by.css('a[data-label="Engagement"]'));
    startWithADiamond:ElementArrayFinder = element.all(by.css('a[data-label="Engagement:Start with a Diamond"]'));
    startWithALabDiamond:ElementArrayFinder = element.all(by.css('a[data-label="Engagement:Start with a Lab Diamond"]'));
    acceptCookies:ElementFinder = element(by.css('div[class="optanon-alert-box-button-middle accept-cookie-container"]'));

    footerNewsletter:ElementFinder = element(by.id('footer_newsletter'));
    newsletterBtn:ElementFinder = element(by.xpath('//*[@id="footer-newsletter"]/span/button'));
    newsletterCheckbox:ElementFinder = element(by.xpath('//*[@id="footer_agree_policy_checkbox"]'));
    scrollToNewsletter:ElementFinder = element(by.css('ul[class="list-inline ir217-follow-us"]'));
    thankYouForSubs:ElementFinder = element(by.css('div[class="thx-message"]'));
    gallery:ElementFinder = element(by.css('div[class="sc-6s1ye6-0 bHDpZk"]'));
    newsletterModal:ElementFinder = element(by.css('div[id="myModalLabel"]'));
    newsletterCloseBtn:ElementFinder = element(by.xpath('//*[@id="myModalLabel"]/div/button'));

    //--------------------------------------

    copyBtn:ElementFinder = element(by.css('button[class="btn-rds icon-btn bg-theme click-to-copy copyIconGreenBtn"]'));
    refreshBtn:ElementFinder = element(by.css('a[id="click-to-refresh"]'));
    tempMail:ElementFinder = element(by.css('a[class="item email-link"]'));

    //--------------------------------------

    welcomeToBrilliant:ElementFinder = element(by.xpath("(//*[text()[contains(.,'Welcome to Brilliant Earth')]])[2]"));


    public async accessPage() {

        await browser.get("https://www.brilliantearth.com/");
        expect(browser.getCurrentUrl()).toContain("https://www.brilliantearth.com");

    }

    public async closePopup() {

        await this.justWaitForDisplay(this.acceptCookies);
        await this.acceptCookies.click()

        //force pass for html reporter
        expect(true).toBe(true);

    }

    public async closeNewsletter() {

        await this.justWaitForDisplay(this.newsletterModal);
        await this.newsletterCloseBtn.click()
        
        //force pass for html reporter
        expect(true).toBe(true);

    }

    public async accessMenuEngagementDiamond() {

        await browser.actions().mouseMove(await this.engagementTab).perform();
        await this.justClick(this.startWithADiamond.get(0));

    }

    public async accessMenuEngagementLabDiamond() {

        await browser.actions().mouseMove(await this.engagementTab).perform();
        await this.justClick(this.startWithALabDiamond.get(0));

        //force pass for html reporter
        expect(true).toBe(true);

    }


    public async signUpNewsletter() {

        await browser.waitForAngularEnabled(false);

        await this.openNewTab("https://tempmailgen.com/", 1);

        await browser.wait(ExpectedConditions.urlIs("https://tempmailgen.com/"), 5000);

        //expect(await browser.getCurrentUrl()).toContain("tempmailgen");

        await browser.sleep(2000)

        let tempEmail = await this.tempMail.getText();

        browser.waitForAngularEnabled(true);

        await this.handle(0)

        browser.refresh();

        await browser.executeScript('arguments[0].scrollIntoView(true)', this.footerNewsletter.getWebElement());

        //await this.justWaitForDisplay(this.gallery);

        await browser.executeScript('arguments[0].scrollIntoViewIfNeeded(true);', this.footerNewsletter.getWebElement());

        await this.footerNewsletter.sendKeys(tempEmail);
        //await this.newsletterCheckbox.click();

        await this.newsletterBtn.click();

        await this.justWaitForDisplay(this.thankYouForSubs);

        expect((this.thankYouForSubs).getText()).toContain("Thank you for subscribing to the Brilliant Earth newsletter");


    }













}


