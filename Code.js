function onOpen()
{
	SpreadsheetApp.getUi()
		.createMenu('Imprimer')
		.addItem('Étiquettes prix', 'showPrintModal')
		.addToUi();
}

function showPrintModal()
{
	const url = 'https://script.google.com/a/macros/banquealimentaire.org/s/AKfycbzqZ4Fb1ImWcV7A4A4HCqqn6gllVXZdMJius1CUuFJ6tBqJnY4Zx_IzJzAgb_frykk93Q/exec';
	const html = `<script>window.open("${url}", "_blank"); google.script.host.close();</script>`;
	const userInterface = HtmlService.createHtmlOutput(html)
		.setWidth(300)
		.setHeight(100);
	SpreadsheetApp.getUi().showModalDialog(userInterface, 'Ouverture en cours...');
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
