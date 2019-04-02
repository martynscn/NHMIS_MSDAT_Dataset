function onOpen() {
  ui = SpreadsheetApp.getUi().createMenu('Custom menu')
        .addItem('Update NHMIS MSDAT Dataset', 'updateNHMISDataset')
        .addItem('Update codes', 'update_codes_in_sheet')
        .addItem('Update extract info in sheet', 'update_extract_info_in_sheet')
        .addItem('Manually update sheet with yearly data', 'updateDataFrequently')
        .addItem('format range', 'formatRange')
        .addToUi();
}
