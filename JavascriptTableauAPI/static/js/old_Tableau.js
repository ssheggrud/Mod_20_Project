var workbook;
var activeSheet;
var width = 500;
var height = 500;
//var vizList = ["https://public.tableau.com/views/Elections_16312857232880/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link",
//"https://public.tableau.com/views/Elections_16312857232880/Dashboard2?:language=en-US&:display_count=n&:origin=viz_share_link"
//];
var counter = 0;

var viz;
//vizLen = vizList.length,
//vizCount = 0;

function initViz() {
  var placeholderDiv = document.getElementById("Div1"),
  vizURL = "https://public.tableau.com/views/Elections_16312857232880/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link";
  options = {
    //width: placeholderDiv.offsetWidth,
    //height: placeholderDiv.offsetHeight,
    hideTabs: true,
    onFirstInteractive: function () {
      workbook = viz.getWorkbook();
      //querySheets();
      activeSheet = workbook.getActiveSheet();
      console.log(activeSheet.getName());
  }
  };
 //viz = new tableau.Viz(placeholderDiv, url,options);
 //viz.setFrameSize(parseInt(width, 10), parseInt(height, 10));
 
  //vizCount = vizCount + vizPlusMinus;

  //if (vizCount >= vizLen) {
  // Keep the vizCount in the bounds of the array index.
  //    vizCount = 0;
  //} else if (vizCount < 0) {
  //    vizCount = vizLen - 1;
  //}
  
  //if (viz) { // If a viz object exists, delete it.
   //  viz.dispose();
  //}
  
  //var vizURL = vizList[vizCount];
  
  viz = new tableau.Viz(placeholderDiv, vizURL, options);
  
  
  console.log("viz displayed");
  //viz.addEventListener(tableau.TableauEventName.FILTER_CHANGE, switchTabsThenFilterThenSelectMarks);
  console.log("event listened to");
 
  //setAppliedWorksheetsAsync(applyToWorksheets: values[0] )
};
function getSheetsAlertText(sheets) {
  var alertText = [];

  for (var i = 0, len = sheets.length; i < len; i++) {
    var sheet = sheets[i];
    alertText.push("  Sheet " + i);
    alertText.push(" (" + sheet.getSheetType() + ")");
    alertText.push(" - " + sheet.getName());
    alertText.push("\n");
  }

  return alertText.join("");
};

function querySheets() {
  var sheets = workbook.getPublishedSheetsInfo();
  var text = getSheetsAlertText(sheets);
  text = "Sheets in the workbook:\n" + text;
  alert(text);
;}

function switchTabsThenFilterThenSelectMarks() {
  workbook.activateSheetAsync(vizURL)
    .then(function (newSheet) {
      activeSheet = newSheet;

      // It's important to return the promise so the next link in the chain
      // won't be called until the filter completes.
      return activeSheet.getFilterAsync(
        "Election Year", 2012,
        tableau.FilterUpdateType.REPLACE);
    });
};

function onFilterSelection(filterEvent) {
  console.log(" inside onFilterSelection");
  filterEvent.getFilterAsync().then(function(filter) {
    console.log("inside getFilterAsync");
    var values = filter.getAppliedValues();
    //let values = filter.$9; // Also works but less reliable.
    console.log(values);
    worksheet.applyFilterAsync("Election Year", values[0],
   tableau.FilterUpdateType.REPLACE);
  })
};

function keepFilteredValue() {
  workbook = viz.getWorkbook();
  console.log(workbook)
  workbook.activateSheetAsync("Dashboard2");
  activeSheet.applyFilterAsync(
    "Election1",
    values[0],
    tableau.FilterUpdateType.REPLACE)
}  ;

function switchToNextTab(){
  console.log("line1");
    console.log(activeSheet.getName());
    switch(activeSheet.getName()){
      case "Dashboard 1":  
        workbook.activateSheetAsync("Dashboard 2");
        activeSheet = workbook.getActiveSheet();
        console.log("hello there");
        console.log( activeSheet.getName());
        break;
      case "Dashboard 2":
        console.log("Dashboard 2 is here")
        const button = document.getElementById("btnNext");
        button.disabled = true;
    };
};

function switchToPreviousTab(){
  console.log("line2")
    console.log(activeSheet.getName());
    switch(activeSheet.getName()){
      case "Dashboard 2":  
        workbook.activateSheetAsync("Dashboard 1")
       
          activeSheet = workbook.getActiveSheet();
        
        
        const button = document.getElementById("btnPrevious");
        button.disabled = true;
        break;
    };
};









