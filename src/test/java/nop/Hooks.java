package nop;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import utils.BrowserFactory;

/**
 * Created by Acer on 11/12/2016.
 */
public class Hooks {

    private Scenario scenario;

    @Before
    public static void setUp() {
        BrowserFactory.openBrowser();
    }

// slenium grid not working******++++

//    public RemoteWebDriver driver;
//    public static String appURL = "http://www.google.com";
//   @BeforeClass
//    public void setUpp() throws MalformedURLException {
//        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
//        driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), capabilities);
//        driver.manage().window().maximize();
//}


    @After
    public void teaDown(Scenario scenario) {
        this.scenario = scenario;
        if (scenario.isFailed()) {
            BrowserFactory.takeScreenShot(scenario);
        } else {
            BrowserFactory.closeBrowser();
        }
    }
}