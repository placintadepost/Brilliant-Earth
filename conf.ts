import {browser, Config} from 'protractor';
import {platform} from "os";


export let config: Config = {
    directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: "jasmine",

    capabilities: {
        browserName: 'chrome',
        unexpectedAlertBehaviour: 'accept',
        chromeOptions: { 'args': ['disable-infobars','start-maximized', '--no-sandbox', '--disable-dev-shm-usage'], w3c: false },
    },

    shardTestFiles: false,

/*    params: {
        login: {
            email: 'olgatest@owlymail.com',
            password: 'QAZxsw123',
            secQuestion: 'Liliana'
        },

        urls: {
            url: 'https://www.brilliantearth.com/'

        }
    },*/


    onPrepare: async ()=> {

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;

        //browser.waitForAngularEnabled(false);

        const fsExtra = require('fs-extra')

        fsExtra.emptyDirSync('Reports\\HtmlReports')

/*        let HtmlReporter = require('protractor-beautiful-reporter');

        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'Reports/HtmlReports'
        }).getJasmine2Reporter());*/

        const HtmlReporter = require('protractor-html-screenshot-reporter');
        const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'Reports/tmp/screenshots'
            //...
        }));
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'Reports/HTML/'
            //...
        }));



        const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: 'pretty'
            }
        }));
    },



    specs :["SpecsAndPageObjects/spec2.js"],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 1440000
    }



};
