function extract_info(contentJson) {
  return NHMISMonthlyAnalysisDataset.extract_info(contentJson);
}
function update_extract_info_in_sheet() {
  NHMISMonthlyAnalysisDataset.update_extract_info_in_sheet();
}

function extract_codes(contentJson) {
  return NHMISMonthlyAnalysisDataset.extract_codes(contentJson);
}

function update_codes_in_sheet() {
  NHMISMonthlyAnalysisDataset.update_codes_in_sheet();
}

function getResponseandCode(baseUrl,target, uname, pwd, slackPostUrl) {
  return NHMISMonthlyAnalysisDataset.getResponseandCode(baseUrl,target, uname, pwd, slackPostUrl);
}

function getResponseandCodeAPIVersion(baseUrl, uname, pwd,slackPostUrl,plain_uname, plain_pwd, ou, dx, pe, filter, aggregationType, measureCriteria, preAggregationMeasureCriteria, skipMeta, skipData, skipRounding, hierarchyMeta, ignoreLimit, hideEmptyRows, showHierarchy, includeNumDen, inputIdScheme, approvalLevel, relativePeriodDate, userOrgUnit, displayProperty, outputIdScheme, tableLayout, columns, rows) {
  return NHMISMonthlyAnalysisDataset.getResponseandCodeAPIVersion(baseUrl, uname, pwd,slackPostUrl,plain_uname, plain_pwd, ou, dx, pe, filter, aggregationType, measureCriteria, preAggregationMeasureCriteria, skipMeta, skipData, skipRounding, hierarchyMeta, ignoreLimit, hideEmptyRows, showHierarchy, includeNumDen, inputIdScheme, approvalLevel, relativePeriodDate, userOrgUnit, displayProperty, outputIdScheme, tableLayout, columns, rows); 
}
function InitiateExtraction(baseUrl,uname,pwd,slackPostUrl,plain_uname, plain_pwd, ou, dx, pe, filter, aggregationType, measureCriteria, preAggregationMeasureCriteria, skipMeta, skipData, skipRounding, hierarchyMeta, ignoreLimit, hideEmptyRows, showHierarchy, includeNumDen, inputIdScheme, approvalLevel, relativePeriodDate, userOrgUnit, displayProperty, outputIdScheme, tableLayout, columns, rows) {
  return NHMISMonthlyAnalysisDataset.InitiateExtraction(baseUrl,uname,pwd,slackPostUrl,plain_uname, plain_pwd, ou, dx, pe, filter, aggregationType, measureCriteria, preAggregationMeasureCriteria, skipMeta, skipData, skipRounding, hierarchyMeta, ignoreLimit, hideEmptyRows, showHierarchy, includeNumDen, inputIdScheme, approvalLevel, relativePeriodDate, userOrgUnit, displayProperty, outputIdScheme, tableLayout, columns, rows);
}

function getNHMISDataset_Pre_Fn(baseUrl,uname,pwd,slackPostUrl,plain_uname, plain_pwd, ou, dx, pe, filter, aggregationType, measureCriteria, preAggregationMeasureCriteria, skipMeta, skipData, skipRounding, hierarchyMeta, ignoreLimit, hideEmptyRows, showHierarchy, includeNumDen, inputIdScheme, approvalLevel, relativePeriodDate, userOrgUnit, displayProperty, outputIdScheme, tableLayout, columns, rows) {
  return NHMISMonthlyAnalysisDataset.getNHMISDataset_Pre_Fn(baseUrl, uname, pwd, slackPostUrl, plain_uname, plain_pwd, ou, dx, pe, filter, aggregationType, measureCriteria, preAggregationMeasureCriteria, skipMeta, skipData, skipRounding, hierarchyMeta, ignoreLimit, hideEmptyRows, showHierarchy, includeNumDen, inputIdScheme, approvalLevel, relativePeriodDate, userOrgUnit, displayProperty, outputIdScheme, tableLayout, columns, rows)
}

/**
* Retrieves the NHMIS reporting rates for last month[later allow it to accept parameters from the API].
*
* //@param {number or string in double quotes e.g. 123456 or "123456"} teamId The team Id.
* 
* @return An array of the NHMIS reporting rates.
* @customfunction
*/

function getNHMISDatasetFn(baseUrl,uname,pwd,slackPostUrl,plain_uname, plain_pwd, ou, dx, pe, filter, aggregationType, measureCriteria, preAggregationMeasureCriteria, skipMeta, skipData, skipRounding, hierarchyMeta, ignoreLimit, hideEmptyRows, showHierarchy, includeNumDen, inputIdScheme, approvalLevel, relativePeriodDate, userOrgUnit, displayProperty, outputIdScheme, tableLayout, columns, rows) {
  return NHMISMonthlyAnalysisDataset.getNHMISDatasetFn(baseUrl,uname,pwd,slackPostUrl,plain_uname, plain_pwd, ou, dx, pe, filter, aggregationType, measureCriteria, preAggregationMeasureCriteria, skipMeta, skipData, skipRounding, hierarchyMeta, ignoreLimit, hideEmptyRows, showHierarchy, includeNumDen, inputIdScheme, approvalLevel, relativePeriodDate, userOrgUnit, displayProperty, outputIdScheme, tableLayout, columns, rows);
}

function updateNHMISDataset(baseUrl,uname,pwd,slackPostUrl,plain_uname, plain_pwd, ou, dx, pe, filter, aggregationType, measureCriteria, preAggregationMeasureCriteria, skipMeta, skipData, skipRounding, hierarchyMeta, ignoreLimit, hideEmptyRows, showHierarchy, includeNumDen, inputIdScheme, approvalLevel, relativePeriodDate, userOrgUnit, displayProperty, outputIdScheme, tableLayout, columns, rows) {
  var baseUrl = 'https://dhis2nigeria.org.ng/dhis/api/29/analytics.json?';
  var slackPostUrl = 'https://hooks.slack.com/services/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';
  NHMISMonthlyAnalysisDataset.updateNHMISDataset(baseUrl,uname,pwd,slackPostUrl,plain_uname, plain_pwd, ou, dx, pe, filter, aggregationType, measureCriteria, preAggregationMeasureCriteria, skipMeta, skipData, skipRounding, hierarchyMeta, ignoreLimit, hideEmptyRows, showHierarchy, includeNumDen, inputIdScheme, approvalLevel, relativePeriodDate, userOrgUnit, displayProperty, outputIdScheme, tableLayout, columns, rows);
}

function updateEntireOnSheet(sheetname,content,topMetadata) {
  NHMISMonthlyAnalysisDataset.updateEntireOnSheet(sheetname, content, topMetadata);
}

// =============================
