$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/featurefile/etoe.feature");
formatter.feature({
  "line": 1,
  "name": "As a new user I want to register",
  "description": "so that I can enjoy the shopping",
  "id": "as-a-new-user-i-want-to-register",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10327919543,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User wants to register his valid detail",
  "description": "",
  "id": "as-a-new-user-i-want-to-register;user-wants-to-register-his-valid-detail",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he enter his valid detail for registration",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "he able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 164032085,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...opCommerce demo stor[e]\u003e but was:\u003c...opCommerce demo stor[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat nop.HomePage.checkTitle(HomePage.java:113)\r\n\tat nop.HomePage.checkUrlAndTitle(HomePage.java:108)\r\n\tat nop.MyStepdefs.userIsOnHomePage(MyStepdefs.java:14)\r\n\tat ✽.Given user is on home page(src/test/resources/featurefile/etoe.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.heEnterHisValidDetailForRegistration()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.heAbleToRegisterSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 262815976,
  "status": "passed"
});
});