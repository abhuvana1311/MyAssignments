function launchBrowser (browserName) {
if  (browserName === "chrome") 
{   
    console.log(" Launching Chrome Browser " );  
}
else if (browserName === "Firefox")
{
    console.log("Launching Firefox Browser " );
}
else if (browserName === " Edge ")
{ 
    console.log(" Launching Edge Browser ");
}
else 
{
console.log(" Browser not Supported ");
}   
}
launchBrowser("chrome");


function runTests(testType) {
    switch(testType) {
        case "Smoke":
            console.log( " Smoke Testcase is Running ");
        break;
        case "Sanity":
            console.log( "Sanity Testcase is Running ");
        break;
        case "Regression":
            console.log( "Regression Testcase is Running ");
        break;
        default :
            console.log( " Smoke Testcase is Running ");
    }
}
runTests("Smoke");
runTests("Regression");
