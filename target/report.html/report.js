$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Employeelogin.feature");
formatter.feature({
  "line": 2,
  "name": "Employee Login",
  "description": "I want to use this template for check Employee login",
  "id": "employee-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Check Employee Login Test",
  "description": "",
  "id": "employee-login;check-employee-login-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I Open Browser with url \"http://orangehrm.qedgetech.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I Should see login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Enter Empname \"Ramya123\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I Enter Emppwd \"Qedge123!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Click Login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Should See Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click Logout",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I close Browser",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "http://orangehrm.qedgetech.com",
      "offset": 25
    }
  ],
  "location": "HRM_EmpLoginfunction.i_Open_Browser_with_url(String)"
});
formatter.result({
  "duration": 18734713200,
  "status": "passed"
});
formatter.match({
  "location": "HRM_EmpLoginfunction.i_Should_see_login_Page()"
});
formatter.result({
  "duration": 154235500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ramya123",
      "offset": 17
    }
  ],
  "location": "HRM_EmpLoginfunction.i_Enter_Empname(String)"
});
formatter.result({
  "duration": 85753900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qedge123!@#",
      "offset": 16
    }
  ],
  "location": "HRM_EmpLoginfunction.i_Enter_Emppwd(String)"
});
formatter.result({
  "duration": 72801700,
  "status": "passed"
});
formatter.match({
  "location": "HRM_EmpLoginfunction.i_Click_Login()"
});
formatter.result({
  "duration": 3906686700,
  "status": "passed"
});
formatter.match({
  "location": "HRM_EmpLoginfunction.i_Should_See_Login_Page()"
});
formatter.result({
  "duration": 138368500,
  "status": "passed"
});
formatter.match({
  "location": "HRM_EmpLoginfunction.i_click_Logout()"
});
formatter.result({
  "duration": 2483259300,
  "status": "passed"
});
formatter.match({
  "location": "HRM_EmpLoginfunction.i_should_see_Login_page()"
});
formatter.result({
  "duration": 93727500,
  "status": "passed"
});
formatter.match({
  "location": "HRM_EmpLoginfunction.i_close_Browser()"
});
formatter.result({
  "duration": 3802381600,
  "status": "passed"
});
});