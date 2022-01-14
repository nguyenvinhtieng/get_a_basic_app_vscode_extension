const vscode = require('vscode');
const fs = require('fs-extra');

function copyFolder(source, destination) {
	fs.copy(source, destination, function (err) {
		if (err) {
			console.log('An error occured while copying the folder.')
			return console.error(err)
		}
		console.log('Copy completed!')
	})
}

function activate(context) {
	console.log('Congratulations, your extension "get-basic-app" is now active!');
	let disposable = vscode.commands.registerCommand('get-basic-app.vinhtieng', async function () {
		const rootPath = vscode.workspace.rootPath
		let sourceExpressApp = __dirname + "/template/express_app"
		let destination = rootPath
		let result = await vscode.window.showInputBox()
		result = result.toLowerCase()
		switch (result) {
			case "express":
				copyFolder(sourceExpressApp, destination)
				break;
			default:
				vscode.window.showErrorMessage('Invalid app enter "express"');
		}
		vscode.window.showInformationMessage('Get A Basic App (Vinh Tienggg !)');
	});
	context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
