function updateDataFrequently() {
  DHIS2ReportingRates.updateDataFrequently_fixedRange(sourceSheetName = 'extract_data_pivoted',destSheetName = null,sourceSheetStartRow = 2,sourceSheetStartCol = 1,sourceSheetNumRows = 3, sourceSheetNumCols =  72, destSheetStartRow = 2,destSheetStartCol = 1);
  DHIS2ReportingRates.updateDataWeekly(sourceSheetName = 'extract_data_pivoted', destSheetName = null, sourceSheetStartRow = 5, sourceSheetStartCol = null, destStartCol = null, temp_destStartRow = 5);
//  formatRange();
}



function formatRange() {
  var ss =  SpreadsheetApp.getActiveSpreadsheet().getSheetByName('IncrementalData');
  var range = ss.getRange('a3');
  range.setNumberFormat("ddd mmm-d, yyyy hh:mmam/pm");
  ss.getRange('a5:a').setNumberFormat("mmmm yyyy");
  ss.getRange('c3').setNumberFormat("mmmm yyyy");
  ss.autoResizeColumn(1);
  var datarange = ss.getRange(4, 1, ss.getLastRow() - 4 + 1, ss.getLastColumn());
  datarange.getBandings().length == 0 ? datarange.applyRowBanding() : null;
}


function transpose(a) {
  return NHMISMonthlyAnalysisDataset.transpose(a);
}

function myVlookup(sourceArray, tableToLookup,columnToSearch,columnToReturn) {
  return NHMISMonthlyAnalysisDataset.myVlookup(sourceArray, tableToLookup, columnToSearch, columnToReturn);
}

function sendSlackMessage(subject, body, postUrl) {
  NHMISMonthlyAnalysisDataset.sendSlackMessage(subject, body, postUrl);
}