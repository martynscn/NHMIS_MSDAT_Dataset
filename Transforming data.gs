function rearrangeData(destSheetName,sourceSheetName, sourceStartRow, sourceStartCol, destStartRow, destStartCol) {
  NHMISMonthlyAnalysisDataset.rearrangeData(destSheetName, sourceSheetName, sourceStartRow, sourceStartCol, destStartRow, destStartCol);
}


function myFunction() {
 var combinedColValues = getCombinedColumnValues('% of Fever cases tested positive with Microscopy','IncrementalData', 4,1);
 Logger.log(combinedColValues)
}

/**
* Combines values for a particular field in specified worksheet
*
* @param {string} label The field(column) to match against. E.g. "ANC Anaemia test done"
* @param {string} mySheetName The name of the sheet to use as source. E.g. "IncrementalData"
* @param {number} startRow The start row (header row) in the source sheet. E.g. 4
* @param {number} startCol The start col (Column no. of the first label) in the source sheet. E.g. 1
* @return An array of the NHMIS reporting rates.
* @customfunction
*/
function getCombinedColumnValues(label, mySheetName, startRow,startCol) {
  return NHMISMonthlyAnalysisDataset.getCombinedColumnValues(label, mySheetName, startRow, startCol);
}

function getColumnValues(label,sheetName, startRow,startCol) {
  return NHMISMonthlyAnalysisDataset.getColumnValues(label, sheetName, startRow, startCol);
}

/**
* Gets the column index of a label from a header row.
*
* @param {string} label The field(column) to match against. E.g. "ANC Anaemia test done"
* @param {string} sheetName The name of the sheet to use as source. E.g. "IncrementalData"
* @param {number} startRow The start row (header row) in the source sheet. E.g. 4
* @param {number} startCol The start col (Column no. of the first label) in the source sheet. E.g. 1
@param {number} numColumns Number of columns to include from the source sheet. E.g. 70
* @return The column index of the searched label.
* @customfunction
*/
function getColumnIndex(label, sheetName,startRow, startCol,numColumns) {
  return NHMISMonthlyAnalysisDataset.getColumnIndex(label, sheetName, startRow, startCol, numColumns);
}
