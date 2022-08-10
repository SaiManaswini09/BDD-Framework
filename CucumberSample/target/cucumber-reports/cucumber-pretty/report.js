$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/Sample.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on pre-login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Sample.user_is_on_pre_login_page()"
});
formatter.result({
  "duration": 19795685300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#Test Case - GVCA_Login_01_TC001"
    },
    {
      "line": 7,
      "value": "#Description - The purpose of this Test Case is to verify the UI of Login dialog box"
    },
    {
      "line": 8,
      "value": "#Developed By - Sai Manaswini"
    },
    {
      "line": 9,
      "value": "#Date - September 8,2021"
    }
  ],
  "line": 11,
  "name": "GVCA_Login_01_TC001",
  "description": "",
  "id": "login;gvca-login-01-tc001",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Clicked on Login or Sign up",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "verify and click on login elements",
  "keyword": "Then "
});
formatter.match({
  "location": "Sample.clicked_on_Login_or_Sign_up()"
});
formatter.result({
  "duration": 54700,
  "status": "passed"
});
formatter.match({
  "location": "Sample.verify_and_click_on_login_elements()"
});
formatter.result({
  "duration": 104100,
  "status": "passed"
});
});