var homepage = require('../Pages/homePage');
var loginpage = require('../Pages/loginPage');
var fashionCategory = require ("../Pages/fashionCategoryPage");
var itemPage = require ("../Pages/itemPage");
var registerPage = require ("../Pages/registerPage");
var aboutUs = require("../Pages/aboutUs");
var termsandconditions = require("../Pages/termsAndConditions");
var privacyAndPolicy = require ("../Pages/privacyAndPolicy");
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();
var EC = protractor.ExpectedConditions;

describe ("002: Registration", function (){
    beforeEach(() => {
        homepage.open("https://auct-app2-frontend.herokuapp.com/")
        .then(() => homepage.clickOnCreateAnAccont())
    })
    
    var random1 = Math.round(Math.random()*100);
    var random2 = Math.round(Math.random()*100);

    it ("001: User is able to create account with valid credentials", function (){
        var firstName="Tester";
        var lastName="123";
        var email = `gigedov${random1}${random2}@getnada.com`;
        var password ="testing1";
        registerPage.enterFirstName(firstName)
        .then(() => registerPage.enterLastName(lastName))
        .then(() => registerPage.enterEmail(email))
        .then(() => registerPage.enterPassword(password))
        .then(() => registerPage.enterConfirmPassword(password))
        .then(() => registerPage.clickOnRegisterButton())
        .then(() => browser.wait(EC.presenceOf($(".status-success")), 5000))
        .then(() => registerPage.getRegistrationMessage())
        .then((data) => expect(data).toBe("You are registered! Login here"))
    })

    it ("002: User isn't able to create account with invalid credentials", function (){
        registerPage.enterFirstName("     ")
        .then(() => registerPage.enterLastName("     "))
        .then(() => registerPage.enterEmail("gigedov@getnada"))
        .then(() => registerPage.enterPassword("     "))
        .then(() => registerPage.enterConfirmPassword("     "))
        .then(() => registerPage.clickOnRegisterButton())
        .then(() => browser.wait(EC.presenceOf($(".status-error")), 5000))
        .then(() => registerPage.getRegistrationMessage())
        .then((data) => expect(data).toBe("User with given email already exists"))
    })

    it ("003: User isn't able to create account with invalid characters", function (){
        var firstName="$";
        var lastName="$";
        var email = `wok${random1}${random2}@mail.com`;
        var password ="%%%%%";
        registerPage.enterFirstName(firstName)
        .then(() => registerPage.enterLastName(lastName))
        .then(() => registerPage.enterEmail(email))
        .then(() => registerPage.enterPassword(password))
        .then(() => registerPage.enterConfirmPassword(password))
        .then(() => registerPage.clickOnRegisterButton())
        .then(() => browser.wait(EC.presenceOf($(".status-success")), 5000))
        .then(() => registerPage.getRegistrationMessage())
        .then((data) => expect(data).toBe("You are registered! Login here"))
    })
    it ("004: User isn't able to create account with empty field for 'First Name'", function(){
        var lastName="$";
        var email = `wok1@mail.com`;
        var password ="%%%%%";
        registerPage.enterLastName(lastName)
        .then(() => registerPage.enterEmail(email))
        .then(() => registerPage.enterPassword(password))
        .then(() => registerPage.enterConfirmPassword(password))
        .then(() => registerPage.clickOnRegisterButton())
        .then(() => registerPage.getFirstNameValidationMessage())
        .then((data) => expect(data).toBe("First Name is required"))
    });
    it ("005: User isn't able to create account with empty field for 'Last Name'", function (){
        var firstName="$";
        var email = `wok1@mail.com`;
        var password ="%%%%%";
        registerPage.enterFirstName(firstName)
        .then(() => registerPage.enterEmail(email))
        .then(() => registerPage.enterPassword(password))
        .then(() => registerPage.enterConfirmPassword(password))
        .then(() => registerPage.clickOnRegisterButton())
        .then(() => registerPage.getLastNameValidationMessage())
        .then((data) => expect(data).toBe("Last Name is required"))
    });
    it ("006: User isn't able to create account with empty field for 'Email'", function(){
        var firstName= "$";
        var lastName = "$";
        var password = "%%%%%";
        registerPage.enterFirstName(firstName)
        .then(() => registerPage.enterLastName(lastName))
        .then(() => registerPage.enterPassword(password))
        .then(() => registerPage.enterConfirmPassword(password))
        .then(() => registerPage.clickOnRegisterButton())
        .then(() => registerPage.getEmailValidationMessage())
        .then((data) => expect(data).toBe("Invalid email"))
    });
    it ("007: User isn't able to create account with empty field for 'Password'", function(){
        var firstName= "$";
        var lastName = "$";
        var password = "%%%%%";
        registerPage.enterFirstName(firstName)
        .then(() => registerPage.enterLastName(lastName))
        .then(() => registerPage.enterConfirmPassword(password))
        .then(() => registerPage.clickOnRegisterButton())
        .then(() => registerPage.getPasswordValidationMessage())
        .then((data) => expect(data).toBe("Password must be longer than 5 letters"))
    })
    it("008: User isn't able to create account with empty field for 'Confirm Pasword'", function(){
        var firstName= "$";
        var lastName = "$";
        var email = `wok1@mail.com`;
        var password = "%%%%%";
        registerPage.enterFirstName(firstName)
        .then(() => registerPage.enterLastName(lastName))
        .then(() => registerPage.enterEmail(email))
        .then(() => registerPage.enterPassword(password))
        .then(() => registerPage.clickOnRegisterButton())
        .then(() => registerPage.getConfirmPasswordMessage())
        .then((data) => expect(data).toBe("Password is not matching"))
    })
});
describe("003: Login", function(){
    
    beforeEach(() => {
        homepage.open("https://auct-app2-frontend.herokuapp.com/")
        })
    afterEach(() =>{
        homepage.clickOnLogoutButton();
    })
    var random1 = Math.round(Math.random()*100);
    var random2 = Math.round(Math.random()*100);

    it("001: User is able to log in after creating account", function(){
        var firstName="$";
        var lastName="$";
        var email = `wok1${random1}${random2}@mail.com`;
        var password ="%%%%%";
        homepage.clickOnCreateAnAccont()
        .then(() =>  registerPage.enterFirstName(firstName))
        .then(() => registerPage.enterLastName(lastName))
        .then(() => registerPage.enterEmail(email))
        .then(() => registerPage.enterPassword(password))
        .then(() => registerPage.enterConfirmPassword(password))
        .then(() => registerPage.clickOnRegisterButton())
        .then(() => browser.wait(EC.presenceOf($(".status-success")), 5000))
        .then(() => registerPage.clickOnHereLink())
        .then(() => browser.wait(EC.presenceOf($(".form-title")), 5000))
        .then(() => loginpage.enterEmail(email))
        .then(() => loginpage.enterPassword(password))
        .then(() => loginpage.clickOnLoginButton())
        .then(() => browser.wait(EC.presenceOf($(".have-account")), 5000))
        .then(() => registerPage.getRegisterURL())
        .then((data) => expect(data).toBe("https://auct-app2-frontend.herokuapp.com/register"))
        }); 

    it("002: User is able to log in from 'Register' page", function(){
        var firstName="$";
        var lastName="$";
        var email = `wok146${random1}${random2}@mail.com`;
        var password ="%%%%%";
        homepage.clickOnCreateAnAccont()
        .then(() =>  registerPage.enterFirstName(firstName))
        .then(() => registerPage.enterLastName(lastName))
        .then(() => registerPage.enterEmail(email))
        .then(() => registerPage.enterPassword(password))
        .then(() => registerPage.enterConfirmPassword(password))
        .then(() => registerPage.clickOnRegisterButton())
        .then(() => browser.wait(EC.presenceOf($(".status-success")), 5000))
        .then(() => registerPage.clickOnWordLogin())
        .then(() => browser.wait(EC.presenceOf($(".form-title")), 5000))
        .then(() => loginpage.enterEmail(email))
        .then(() => loginpage.enterPassword(password))
        .then(() => loginpage.clickOnLoginButton())
        .then(() => browser.wait(EC.presenceOf($(".have-account")), 5000))
        .then(() => registerPage.getRegisterURL())
        .then((data) => expect(data).toBe("https://auct-app2-frontend.herokuapp.com/register"))
    })
    it ("003: User is able to log in from 'Create an account' form", function(){
        var userName = "rafa@mail.com";
        var password = "password";
        homepage.clickOnCreateAnAccont()
        .then (() =>homepage.clickOnLogin())
        .then(() => loginpage.enterEmail(userName))
        .then(() => loginpage.enterPassword(password))
        .then(() => loginpage.clickOnLoginButton())
        .then(() => browser.wait(EC.presenceOf($(".have-account")), 5000))
        .then(() => loginpage.getLoginURL())
        .then((data) => expect(data).toBe("https://auct-app2-frontend.herokuapp.com/register"))
    }) 
    it ("004: User isn't able to log in without password", function(){
        var userName = "rafa@mail.com"
        homepage.clickOnLogin()
        .then(() => loginpage.enterEmail(userName))
        .then(() => loginpage.clickOnLoginButton())
        .then(() => browser.sleep(2000))
        .then(() => loginpage.getLoginValidationMessage())
        .then((data) => expect(data).toBe("Invalid username or password"))
    })
    it("005: User isn't able to log in without email", function(){
        var password= "password";
        homepage.clickOnLogin()
        .then(() => loginpage.enterPassword(password))
        .then(() => loginpage.clickOnLoginButton())
        .then(() => browser.sleep(2000))
        .then(() => loginpage.getLoginValidationMessage())
        .then((data) => expect(data).toBe("Invalid username or password"))
    })
})
describe("004: Bidding", function(){
    beforeEach(()=> {
        homepage.open("https://auct-app2-frontend.herokuapp.com/")
        .then(() => homepage.clickOnLogin())
        .then(() => loginpage.enterEmail("rafa@mail.com"))
        .then(() => loginpage.enterPassword("password"))
        .then(() => loginpage.clickOnLoginButton())
        .then(() => browser.wait(EC.presenceOf($(".category-item")), 5000))
    })
    afterEach(() =>{
        homepage.clickOnLogoutButton();
    })
    it ("001: User is able to make a bid with decimal values", function (){
        var d = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        homepage.clickOnFashionCategory()
        .then(() => browser.wait(EC.presenceOf($(".landing-product")), 5000))
        .then(() => fashionCategory.clickOnBrownJacket())
        .then(() => itemPage.enterBid(400.25))
        .then(() => itemPage.clickOnPlaceBidButton())
        .then(() => browser.wait(EC.presenceOf($(".bider-name-img")), 5000))
        .then(() => itemPage.getUserName())
        .then((data) => expect(data).toBe("Rafa Nadal"))
        .then(() => itemPage.getBidPrice())
        .then((data) => expect(data).toBe("$400.25.00"))
        .then(() => itemPage.getBidDate())
        .then((data) => expect(data).toBe(`${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`))
    });
    it("002: User is able to make a bid with round values", function(){
        var d = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        homepage.clickOnFashionCategory()
        .then(() => browser.wait(EC.presenceOf($(".landing-product")), 5000))
        .then(() => fashionCategory.clickOnBlueJacket())
        .then(() => itemPage.enterBid(5000))
        .then(() => itemPage.clickOnPlaceBidButton())
        .then(() => browser.wait(EC.presenceOf($(".bider-name-img")), 5000))
        .then(() => itemPage.getUserName())
        .then((data) => expect(data).toBe("Rafa Nadal"))
        .then(() => itemPage.getBidPrice())
        .then((data) => expect(data).toBe("$5000.00"))
        .then(() => itemPage.getBidDate())
        .then((data) => expect(data).toBe(`${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`))
    })
    it("003: User isn't able to make bid which is lower than starting price", function(){
        homepage.clickOnFashionCategory()
        .then(() => browser.wait(EC.presenceOf($(".landing-product")), 5000))
        .then(() => fashionCategory.clickOnWhiteJacket())
        .then(() => itemPage.enterBid(50))
        .then(() => itemPage.clickOnPlaceBidButton())
        .then(() => browser.wait(EC.presenceOf($(".status-info")), 5000))
        .then(() => itemPage.getBidConfirmationText())
        .then((data) => expect(data).toBe("There are higher bids than yours. You could give a second try!"))
    })
})
describe("005: Abouts Us", function (){
    beforeEach(() => {
        homepage.open("https://auct-app2-frontend.herokuapp.com/")
        })
    it ("001: User is able to open 'About Us' section", function (){
        homepage.clickOnAboutUs()
        .then(() => browser.wait(EC.presenceOf($(".helper")), 5000))
        .then(() => aboutUs.getAboutParagraph())
        .then((data) => expect(data).toBe("About Us") )
    })
});
describe("006: Terms and Conditions", function (){
    beforeEach(() => {
        homepage.open("https://auct-app2-frontend.herokuapp.com/")
        })
    it ("001: User is able to open 'Terms and Conditions' section", function (){
        homepage.clickOnTermsAndConditions()
        .then(() => browser.wait(EC.presenceOf($(".helper")), 5000))
        .then(() => termsandconditions.getIntroductionParagraph())
        .then((data) => expect(data).toBe("Introduction"))
    })
})
describe("007: Privacy and Policy", function (){
    beforeEach(() => {
        homepage.open("https://auct-app2-frontend.herokuapp.com/")
        })
    it ("001: User is able to open 'Privacy and Policy' section", function (){
        homepage.clickOnPrivacyAndPolicy()
        .then(() => browser.wait(EC.presenceOf($(".helper")), 5000))
        .then(() => privacyAndPolicy.getSomeTitleParagraph())
        .then((data) => expect(data).toBe("Some title here"))
    })
})
