package Orangehrmtests;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="FeatureFiles", glue="stepdefinitions",dryRun=false,
plugin= {"pretty","html:target/report.html",
		"com.cucumber.listener.ExtentCucumberFormatter:Reports/TestReport.html"})
public class HRM_EmpLoginTest 
{

	
	
	
}
