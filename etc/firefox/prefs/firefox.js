// This is the Debian specific preferences file for Mozilla Firefox
// You can make any change in here, it is the purpose of this file.
// You can, with this file and all files present in the
// /etc/firefox/pref directory, override any preference that is
// present in /usr/lib/firefox/defaults/pref directory.
// While your changes will be kept on upgrade if you modify files in
// /etc/firefox/pref, please note that they won't be kept if you
// do them in /usr/lib/firefox/defaults/pref.

pref("extensions.update.enabled", true);

// Use LANG environment variable to choose locale
pref("intl.locale.matchOS", true);

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);

// Prevent EULA dialog to popup on first run
pref("browser.EULA.override", true);

// identify linuxmint @ yahoo searchplugin
pref("browser.search.param.yahoo-fr", "netrunner");

// Set the UserAgent
pref("general.useragent.vendor", "Netrunner");
pref("general.useragent.vendorSub", "4");
pref("general.useragent.vendorComment", "Dryland");

// Activate the backspace key for browsing back
pref("browser.backspace_action", 0);

// Disable ipv6
pref("network.dns.disableIPv6", true);

// Ignore Mozilla release notes startup pages
pref("browser.startup.homepage_override.mstone", "ignore");

// Select the Stratastripe theme by default
pref("general.skins.selectedSkin", "stratastripe");

