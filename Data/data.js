class Data{
    constructor(){
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        this.homepageLink = "https://auct-app2-frontend.herokuapp.com/",
        this.registerpageLink="https://auct-app2-frontend.herokuapp.com/register",
        this.firstNameTester="Tester",
        this.fashionCategory=1,
        this.lastNameTester="123",
        this.passwordTester="testing1",
        this.fiveSpaces="     ",
        this.email1="gigedov23",
        this.emailDomain="@getnada.com",
        this.email2="apt5@mail.com"
        this.userRafaNadal = "rafa@mail.com",
        this.passwordUserRafaNadal ="password",
        this.bidForSmokeTest=5000,
        this.fiveThousandDollars=500000,
        this.bidWithDecimalPlaces=400000.25,
        this.fiftyDollars=50,
        this.userAssert ="Rafa Nadal",
        this.bidAssert="$5000.00",
        this.bidAssertFiveThousandDollars="$500000.00",
        this.bidAssertWithDecimalPlaces="$400000.25",
        this.dataWithInvalidCharacters="$",
        this.fivePercentSigns="%%%%%"
        this.whiteJacket=5,
        this.blueJacket=3,
        this.brownJacket=2,
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
        this.passwordValidationMessage ="Password can't be white spaces",
        this.invalidConfirmPasswordValidationMessage ="Password is not matching",
        this.firstNameWithSpecialCharacters ="First Name cannot contain special characters",
        this.lastNameWithSpecialCharacters = "Last Name cannot contain special characters"
    }
}
module.exports = new Data();