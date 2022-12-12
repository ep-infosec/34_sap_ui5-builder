//@ui5-bundle library/i/library-preload.js
/*!
 * Some fancy copyright
 */
sap.ui.predefine("library/i/library", ["sap/ui/core/Core"],function(i){"use strict";sap.ui.getCore().initLibrary({name:"library.i",version:"1.0.0",dependencies:["sap.ui.core"],types:["library.i.ButtonType","library.i.DialogType"],interfaces:["library.i.IContent"],controls:["library.i.Button","library.i.CheckBox","library.i.Dialog","library.i.Input","library.i.Label","library.i.Link","library.i.Menu","library.i.Text"],elements:["library.i.MenuItem"]});return thisLib});
sap.ui.require.preload({
	"library/i/manifest.json":'{"_version":"1.21.0","sap.app":{"id":"library.i","type":"library","embeds":[],"i18n":"(i18nPathRelativeToLibrary)","applicationVersion":{"version":"1.0.0"},"title":"{{title}}","description":"{{description}}","ach":"NOT-ME","resources":"resources.json","offline":false,"openSourceComponents":[{"name":"D3.js","packagedWithMySelf":false},{"name":"Hammer.js","packagedWithMySelf":true,"version":"2.0.4"}]},"sap.ui":{"technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":[]},"sap.ui5":{"dependencies":{"minUI5Version":"1.0","libs":{"sap.ui.core":{"minVersion":"1.0.0"},"library.d":{"lazy":true}}},"contentDensities":{"cozy":true,"compact":false},"library":{"i18n":false,"content":{"controls":["library.i.Button","library.i.CheckBox","library.i.Dialog","library.i.Input","library.i.Label","library.i.Link","library.i.Menu","library.i.Text"],"elements":["library.i.MenuItem"],"types":["library.i.ButtonType","library.i.DialogType"],"interfaces":["library.i.IContent"]}}},"sap.fiori":{"registrationIds":["F0042"],"archeType":"fancycomponent"}}'
});
//# sourceMappingURL=library-preload.js.map
