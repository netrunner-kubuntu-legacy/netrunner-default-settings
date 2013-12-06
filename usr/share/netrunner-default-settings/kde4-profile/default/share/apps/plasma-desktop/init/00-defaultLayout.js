var actionPlugins = ConfigFile("plasma-desktop-appletsrc");
actionPlugins.group = "ActionPlugins";

var rightButton = ConfigFile(actionPlugins);
rightButton.group = "RightButton;NoModifier";
rightButton.writeEntry("_add panel", "true");
rightButton.writeEntry("_context", "true");
rightButton.writeEntry("_lock_screen", "false");
rightButton.writeEntry("_logout", "false");
rightButton.writeEntry("_run_command", "false");
rightButton.writeEntry("_sep1", "false");
rightButton.writeEntry("_sep2", "true");
rightButton.writeEntry("_sep3", "false");
rightButton.writeEntry("_wallpaper", "true");
rightButton.writeEntry("add sibling containment", "false");
rightButton.writeEntry("add widgets", "true");
rightButton.writeEntry("configure", "true");
rightButton.writeEntry("configure shortcuts", "false");
rightButton.writeEntry("lock widgets", "true");
rightButton.writeEntry("manage activities", "false");
rightButton.writeEntry("remove", "true");

delete rightButton;
delete actionPlugins;

loadTemplate("org.kde.plasma-desktop.defaultPanel");
loadTemplate("org.kde.plasma-desktop.sidebarPanel");

for (var i = 0; i < screenCount; ++i) {
    var desktop = new Activity("netrunnerdesktop");
    desktop.name = i18n("Desktop");
    desktop.screen = i;

    desktop.wallpaperPlugin = 'image'
    desktop.wallpaperMode = 'SingleImage'

    desktop.writeConfig("alignToGrid", "true");
    desktop.writeConfig("blankLabel", "false");
    desktop.writeConfig("clickForFolderPreviews", "false");
    desktop.writeConfig("customIconSize", "64");
    desktop.writeConfig("numTextLines", "2");
    desktop.writeConfig("sortColumn", "-1");
    desktop.writeConfig("previewPlugins", "imagethumbnail,jpegthumbnail,windowsexethumbnail,kffmpegthumbnailer,windowsimagethubmnail");
    desktop.writeConfig("savedPositions", "1,5,mycomputer.desktop,10,10,Network,162,10,welcome.desktop,314,10,webaccounts.desktop,466,10,steam.desktop,618,10,ubiquity-kdeui.desktop,770,10");
    desktop.writeConfig("sortDirsFirst", "false");

}
