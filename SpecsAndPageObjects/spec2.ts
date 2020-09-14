import {homePage} from "./Pages/homePage";
import {engagementRingSettings} from "./Pages/engagementRingSettings"
import {engagementRingDiamond} from "./Pages/engagementDiamond";
import {itemPage} from "./Pages/itemPage";
import {referAFriend} from "./Pages/referAFriend";
import {searchAction} from "./Pages/searchAction";
import {cartPage} from "./Pages/cartPage";

let home:homePage = new homePage();
let engRngStg:engagementRingSettings = new engagementRingSettings();
let engDiamond:engagementRingDiamond = new engagementRingDiamond();
let itmPage:itemPage = new itemPage();
let refer:referAFriend = new referAFriend();
let searchPage:searchAction = new searchAction();
let cartPg:cartPage = new cartPage();


describe('ProtractorDemo - TC000: Access homepage', async()=> {


    it('Access main page and verify correct location', async()=> {

        await home.accessPage();

    });

    it('Confirm expected newsletter popup message and close', async()=> {

        await home.closeNewsletter();
        //await home.closePopup();

    });

});

describe('ProtractorDemo - TC001: Access the "Start with a Lab Diamond" page and complete a full flow', async()=> {

    it("Access the 'Engagement' menu area and successfully enter the 'Start with a Lab Diamond' page", async () => {

        await home.accessMenuEngagementLabDiamond();
        await engDiamond.getStarted();
    });

    it("Select up to 5 items after using all basic filters to filter through products", async () => {

        await engDiamond.filtersDiamondPage();
        await engDiamond.getDiamondResults();

    });

    it("Select one diamond from the comparison list", async () => {

        await engDiamond.compareAndChoose();

    });

    it("Select an item after using all basic filters to filter through products", async () => {

        await engRngStg.ringSettings()
        await engRngStg.selectRandomItem()

    });

    it("Select ring size", async () => {

        await itmPage.selectSetting();
        await itmPage.selectSize();

    });

});

describe('ProtractorDemo - TC002: Sign up for the newsletter', async()=> {


    it('Scroll to the bottom page and sign up for the newsletter', async()=> {

        await home.signUpNewsletter();

    });


});



