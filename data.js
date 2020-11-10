class Data{
    constructor(){
        this.d= new Date(),
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        this.homepageLink = "https://auct-app2-frontend.herokuapp.com/",
        this.EC = protractor.ExpectedConditions,
        this.userRafaNadal = "rafa@mail.com",
        this.passwordUserRafaNadal ="password",
        this.bidForSmokeTest=1003,
        this.userAssert ="Rafa Nadal",
        this.bidAssert="$1003.00",
        this.whiteJacket=5,
        this.itemDetailsAssert="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        this.highestBidderMessage="Congrats! you are the higest bider!"
    }
}
module.exports = new Data();