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
  var placeholderDiv = document.getElementById("Div1"),
  vizURL = "https://public.tableau.com/views/ElectionsFinanceData/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";
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
        })
        break;
      case "Dashboard 2":
        workbook.activateSheetAsync("Dashboard 3")
        .then(function (sheet){
          activeSheet = workbook.getActiveSheet();
          console.log("hello there");
          console.log( activeSheet.getName());
        })
        break;
        case "Dashboard 3":
        workbook.activateSheetAsync("Dashboard 4")
        .then(function (sheet){
          activeSheet = workbook.getActiveSheet();
          console.log("hello there");
          console.log( activeSheet.getName());
        })
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
        break;
        case "Dashboard 3":  

        workbook.activateSheetAsync("Dashboard 2")
        .then(function (sheet){
          activeSheet = workbook.getActiveSheet();
          console.log("hello there");
          console.log( activeSheet.getName());
        })
        break;
        case "Dashboard 4":  

        workbook.activateSheetAsync("Dashboard 3")
        .then(function (sheet){
          activeSheet = workbook.getActiveSheet();
          console.log("hello there");
          console.log( activeSheet.getName());
        })
        break;
        case "Dashboard 5":  

        workbook.activateSheetAsync("Dashboard 4")
        .then(function (sheet){
          activeSheet = workbook.getActiveSheet();
          console.log("hello there");
          console.log( activeSheet.getName());
        })
        break;

    };
};









