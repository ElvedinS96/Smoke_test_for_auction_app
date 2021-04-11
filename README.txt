These are tests for the application, which on of the ABH Intern coded, and it is deployed on this link :
https://auct-app2-frontend.herokuapp.com/ 

Test Cases can be found here: 
https://docs.google.com/spreadsheets/d/1BHNHM0gNf0OmJclWZVer6qTCvZIqQZCb9ZSFrXkzajQ/edit#gid=0 

Setup:
1. Install Node JS (https://nodejs.org/en/download/) 
2. Install Java (https://www.java.com/en/download/)
3. Install Protractor (in command line enter: npm install -g protractor)
4. Update Selenium Driver instance (in command line enter: webdriver-manager update)
5. Git (https://git-scm.com/downloads) 
6. Install Google Chrome (https://www.google.com/chrome/)
7. Clone this repository by running: gh repo clone ElvedinS96/Tests_for_auction_app
...or downloading project ZIP. For more on cloning see https://help.github.com/en/articles/cloning-a-repository.

Different ways of setting up the selenium server:
1. [Wihtout having to manually start selenium server] In conf.js remove current line seleniumAddress: 'http://localhost:4444/wd/hub', 
and instead add directConnect: true, and server will start automatically.
2. [Manually starting server] In terminal enter webdriver-manager update, and then webdriver-manager start, and server will
start on port 4444

For running tests:
1. Enter webdriver-manager start in Windows Powershell
2. From files directory where conf.js is located, run in terminal: protractor conf.js
3. If wanted to run single test suite, or test case, enter protractor conf.js --grep="001:Name of the test suite/case"
For example running Smoke test -> protractor conf.js --grep="001: Smoke test"





