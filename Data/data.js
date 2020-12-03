class Data{
    constructor(){
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        this.homepageLink = "https://auct-app2-frontend.herokuapp.com/",
        this.registerpageLink="https://auct-app2-frontend.herokuapp.com/register",
        this.loginpageLink="https://auct-app2-frontend.herokuapp.com/login",
        this.shopPageLink="https://auct-app2-frontend.herokuapp.com/shop",
        this.firstNameTester="Tester",
        this.colorToSearch="black",
        this.fashionCategory=1,
        this.lastNameTester="123",
        this.passwordTester="testing1",
        this.fiveSpaces="     ",
        this.emptyString="",
        this.makeEmailWithoutDomain="Make email without domain",
        this.sendStaticEmail="Send static email",
        this.emailWithoutat="Email without @",
        this.itemDetailsTitle="Item details",
        this.jacketTitle="Jacket"
        this.bidConfirmationTextTitle="Bid confirmation text",
        this.email1="gigedov2",
        this.emailDomain="@getnada.com",
        this.email2="moy@mail.com",
        this.emailWithoutDomain="@live",
        this.emailWithoutAt="live.com",
        this.userRafaNadal = "rafa@mail.com",
        this.passwordUserRafaNadal ="password",
        this.userTester1="tester1@mail.com",
        this.passwordTester1="password";
        this.password1="password1",
        this.password2="password2",
        this.bidForSmokeTest=5000,
        this.twoHundredDolars="$200",
        this.titleJacket="Jacket",
        this.titleDress="Dress",
        this.nineHundredDolars="$900",
        this.fiveThousandDollars=5000,
        this.sixThousandDollars=6000,
        this.bidWithDecimalPlaces=40000.25,
        this.fiftyDollars=50,
        this.hundred=100,
        this.userAssert ="Rafa Nadal",
        this.bidAssert="$5000.00",
        this.bidAssertFiveThousandDollars="$5000.00",
        this.bidAssertSixThousandDollars="$6000.00",
        this.bidAssertWithDecimalPlaces="$40000.25",
        this.dataWithInvalidCharacters="$",
        this.fivePercentSigns="%%%%%"
        this.blackJacket=1,
        this.blackJacket2=2,
        this.brownJacket=3,
        this.blueJacket=4,
        this.whiteJacket=5,
        this.blackJacket3=6,
        this.blackJacket4=7,
        this.gridItemNumber=1,
        this.fashionCategoryFilter=1,
        this.accessoriesFilter=2,
        this.jewelryFilter=3,
        this.shoesFilter=4,
        this.sportsWearFilter=5,
        this.homeFilter=6,
        this.electronicsFilter=7,
        this.mobileFilter=8,
        this.comuputerFilter=9,
        this.gardenFilter=10,
        this.featureCollectionProductsTitle="Feature Collection Products",
        this.featureCollectionCollectionTitle="Feature Collection Item",
        this.firstItemForLinksTitle="First Item for Links",
        this.categoriesFilterTitle="Categories filter",
        this.newArrivalsTitle="New Arrival",
        this.topRatedTitle="Top Rated",
        this.lastChanceTitle="Last Chance",
        this.createAnAccountTitle="Create an account",
        this.searchByClickOnIcon="Search by clicking on search icon",
        this.searchByKeyEnter="Seach by pressing ENTER",
        this.privacyAndPolictyTitle="Privacy and Policy",
        this.myAccountTitle="My Account",
        this.profileLinkTitle="Profile",
        this.yourBidsTitle="Your Bids",
        this.profileHeadingTitle="Profile heading",
        this.profileValidation="REQUIRED",
        this.yourBidsTable="Your bids",
        this.yourBidsValidation="Item",
        this.settingsTitle="Settings",
        this.settingsButton="Settings button in My Account Section",
        this.profileButton="Profile button in My Account Section",
        this.bidsButton="Bid button in My Account Section",
        this.settingsButton="Settings button in My Account Section",
        this.settingsPageForm="Policy and Community",
        this.textFromFilterPopUp="Text from selected filter pop up",
        this.pricesFromFilterByPrice="Prices from filter by Price",
        this.termsAndConditionstitle="Terms and Conditions",
        this.listViewButtonAttribute="List view Attribute button",
        this.fashionCategoryTitle="Fashion Category",
        this.emailInputTitle="Email input",
        this.formTitle="Form",
        this.bidButtonTitle="Bid button",
        this.imageSliderTitle="Image slider",
        this.leftSlider="Left slider on shop page",
        this.bidButtonShopTitle="Button from Shop page",
        this.listViewButton="List view button",
        this.dressShopFilter="Dress filter from Shop page",
        this.waitForShopTitle="Wait for Shop",
        this.jacketShopFilter="Jacket filter from Shop page"
        this.rightSlider="Righ slider on shop page",
        this.firstNameTitle="firstName",
        this.lastNameTitle="lastName",
        this.emailTitle="email",
        this.itemTitle="Item title",
        this.bidDateTitle="Bid date",
        this.bidPriceTitle="Bid price",
        this.userNameTitle="User name"
        this.passwordTitle="password",
        this.wordLoginTitle="Login word",
        this.logoutButtonTitle="Logout button",
        this.hereLinkTitle="Here Link",
        this.loginLinkTitle="Login link",
        this.shopTitle="Shop",
        this.statusErrorTitle="Status error",
        this.statusInfoTitle="Status info",
        this.successMessage="Success message",
        this.waitForUserImg="Wait for User image"
        this.registerButtonTitle="Register button",
        this.registrationMessageTitle="Registration message",
        this.confirmPasswordTitle="confirmPassword",
        this.listViewButtonAttribute="span-active",
        this.itemDetailsAssert="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        this.highestBidderMessage="Congrats! You are the highest bidder!",
        this.someTitleHere ="Some title here",
        this.successfullRegistrationMessage="You are registered! Login here"
        this.introductionParagraph = "Introduction",
        this.aboutUsParagraph = "About Us",
        this.notHighestBidMessage = "There are higher bids than yours. You could give a second try!",
        this.usedEmailMessage = "User with given email already exists",
        this.invalidUsernameOrEmail ="Invalid username or password",
        this.firstNameRequiredMessage ="First Name is required",
        this.lastNameRequiredMessage = "Last Name is required",
        this.emailRequiredMessage = "Invalid email",
        this.passwordValidationMessage ="Password is required",
        this.invalidConfirmPasswordValidationMessage ="Password is not matching",
        this.firstNameWithSpecialCharacters ="First Name cannot contain special characters",
        this.lastNameWithSpecialCharacters = "Last Name cannot contain special characters",
        this.featureCollectionLink="https://auct-app2-frontend.herokuapp.com/products?category=1&feature=true"
    }
}
module.exports = new Data();