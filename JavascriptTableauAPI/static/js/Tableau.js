//Online References:
//https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#workbook_class
//https://help.tableau.com/samples/en-us/js_api/tutorial.htm

var workbook;
var activeSheet;
var width = 500;
var height = 500;

var counter = 0;

var viz;

// called on load. onFirstInteractive is called line 25 is run. 
function initViz() {
  const button5 = document.getElementById("btnPrevious");
  button5.disabled = true;
  var placeholderDiv = document.getElementById("Div1"),
  vizURL = "https://public.tableau.com/views/ElectionsFinanceData/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link&:showShareOptions=false&:toolbar=no&:download=no";
  options = {
    hideTabs: true,
    onFirstInteractive: function () {
      workbook = viz.getWorkbook();
      //querySheets();
      activeSheet = workbook.getActiveSheet();
      console.log(activeSheet.getName());
  }
  };

  
  viz = new tableau.Viz(placeholderDiv, vizURL, options);
  //var dashboardDesc = getElementById("textForDashboard");
  dashboard1Text()
   // dashboardDesc.appendChild(textNode);
  
  
  console.log("viz displayed");
  
  console.log("event listened to");
 
  
};

// called on click of Next button

function switchToNextTab(){
  console.log("line1");
    console.log(activeSheet.getName());
    switch(activeSheet.getName()){
      case "Dashboard 1":  
        workbook.activateSheetAsync("Dashboard 2")
        .then(function (sheet){
          activeSheet = workbook.getActiveSheet();
          console.log("hello there");
          console.log( activeSheet.getName());
          const button6 = document.getElementById("btnPrevious");
          button6.disabled = false;
        })
        dashboard2Text();
        break;
      case "Dashboard 2":
        workbook.activateSheetAsync("Dashboard 3")
        .then(function (sheet){
          activeSheet = workbook.getActiveSheet();
          console.log("hello there");
          console.log( activeSheet.getName());
        })
        dashboard3Text();
        break;
        case "Dashboard 3":
         
        workbook.activateSheetAsync("Dashboard 4")
        .then(function (sheet){
          activeSheet = workbook.getActiveSheet();
          console.log("hello there");
          console.log( activeSheet.getName());
        })
        dashboard4Text();
        break;
        case "Dashboard 4":
          
        workbook.activateSheetAsync("Dashboard 5")
        .then(function (sheet){
          activeSheet = workbook.getActiveSheet();
          console.log("hello there");
          console.log( activeSheet.getName());
          const button3 = document.getElementById("btnNext");
          button3.disabled = true;
        })
        dashboard5Text();
        break;
      //case "Dashboard 5":
        //console.log("Dashboard 5 is here")
        //const button = document.getElementById("btnNext");
        //button.disabled = true;
    };
};

// called on click of Previous button

function switchToPreviousTab(){
  console.log("line2")
    console.log(activeSheet.getName());
    switch(activeSheet.getName()){
      case "Dashboard 2":  

        workbook.activateSheetAsync("Dashboard 1")
        .then(function (sheet){
          activeSheet = workbook.getActiveSheet();
          console.log("hello there");
          console.log( activeSheet.getName());
        })
        const button = document.getElementById("btnPrevious");
        button.disabled = true;
        const button1 = document.getElementById("btnNext");
        button1.disabled = false;
        dashboard1Text();
        break;
        case "Dashboard 3":  

        workbook.activateSheetAsync("Dashboard 2")
        .then(function (sheet){
          activeSheet = workbook.getActiveSheet();
          console.log("hello there");
          console.log( activeSheet.getName());
        })
        dashboard2Text();
        break;
        case "Dashboard 4":  

        workbook.activateSheetAsync("Dashboard 3")
        .then(function (sheet){
          activeSheet = workbook.getActiveSheet();
          console.log("hello there");
          console.log( activeSheet.getName());
        })
        dashboard3Text();
        break;
        case "Dashboard 5":  

        workbook.activateSheetAsync("Dashboard 4")
        .then(function (sheet){
          activeSheet = workbook.getActiveSheet();
          console.log("hello there");
          console.log( activeSheet.getName());
          const button4 = document.getElementById("btnNext");
         button4.disabled = false;
        })
        dashboard4Text();
        break;

    };
};

function dashboard1Text() {
var a = document.getElementById("textForDashboard")
a.innerText = "Select individual candidates (bar graph) to get more details."
a.append.te

};

function dashboard2Text(){
document.getElementById("textForDashboard").innerText = "Top candidates by donations & expenditures."

};

function dashboard3Text(){
document.getElementById("textForDashboard").innerText = "The interactive map shows the top zip codes based on the total amount of donations."
};

function dashboard4Text(){
  document.getElementById('textForDashboard').innerText = " Here contributions have been further classified under contributor types.";

};

function dashboard5Text(){
  document.getElementById('textForDashboard').innerText = "Top expenditues by purpose codes. Further expenditures are divided by quarter.";
};



// embed image file generated by ML model to your dashboard
function Get_PNG() {
// dispose the vizualization
  viz.dispose();

  var newP = document.createElement("p");
  //const lineBreak = document.createElement('br');
  var textNode = document. createTextNode(" To test for accuracy, we applied the R-squared function to our predictions. Results from our model are listed from 2021-2005 in that order.These high correlation results indicate that there is a correlation between the features we selected for our model and the the total amount of money raised in a particular zip code.The rather high correlation calculated by our model can also indicate that there were bugs in our code that led to some kind of imbalance that skewed our data.");
  newP. appendChild(textNode);
  var element = document.getElementById("textForML");
  element.appendChild(newP);


    var ar = [];
    ar.push("JavascriptTableauAPI/static/images/Regression_2021.png");
    ar.push("JavascriptTableauAPI/static/images/Regression_2017.png");
    ar.push("JavascriptTableauAPI/static/images/Regression_2013.png");
    ar.push("JavascriptTableauAPI/static/images/Regression_2009.png");
    ar.push("JavascriptTableauAPI/static/images/Regression_2005.png");
    ar.push("JavascriptTableauAPI/static/images/blank.png");

 
    for (i = 0; ar.length > i; i++)
    {
      var img = new Image(400, 400);
      img.src = ar[i];

      var src = document.getElementById("Div1");
      src.appendChild(img);
    }
    document.getElementById('textForDashboard').innerText = "";

      const button9 = document.getElementById("btnML");
      button9.disabled = true;
      const button7 = document.getElementById("btnNext");
      button7.disabled = true;
      const button8 = document.getElementById("btnPrevious");
      button8.disabled = true;
    }; 







