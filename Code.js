function onOpen()
{
	SpreadsheetApp.getUi()
		.createMenu('Imprimer')
		.addItem('Étiquettes prix', 'showPrintModal')
		.addToUi();
}

function showPrintModal()
{
	const html = HtmlService.createTemplateFromFile('Print')
		.evaluate()
		.setWidth(900)
		.setHeight(600);
	SpreadsheetApp.getUi().showModalDialog(html, 'Impression des étiquettes');
}

function doGet()
{
	return HtmlService.createTemplateFromFile('Print')
		.evaluate()
		.setTitle('Étiquettes Rayon')
		.addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getSheetData()
{
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Menu');
	const range = sheet.getRange('B2:D' + sheet.getLastRow());
	return range.getValues();
}
