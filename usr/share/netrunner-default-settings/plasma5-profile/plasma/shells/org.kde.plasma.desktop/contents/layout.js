
loadTemplate("org.kde.plasma.desktop.defaultPanel")

// for (var i = 0; i < screenCount; ++i) {
//     var id = createActivity("Desktop");
//     var desktopsArray = desktopsForActivity(id);
//     print(desktopsArray.length);
//     for( var j = 0; j < desktopsArray.length; j++) {
//         desktopsArray[j].wallpaperPlugin = 'org.kde.image';
//         //var clock = desktopsArray[j].addWidget("org.kde.plasma.analogclock");
//     }
// }

var actionPlugins = ConfigFile("plasma-org.kde.plasma.desktop-appletsrc");
actionPlugins.group = "ActionPlugins";

var actionPluginsCurrent = ConfigFile(actionPlugins,"0");
actionPluginsCurrent.writeEntry("MidButton;NoModifier", "org.kde.paste");
actionPluginsCurrent.writeEntry("RightButton;NoModifier", "org.kde.contextmenu");
actionPluginsCurrent.writeEntry("wheel:Vertical;NoModifier", "org.kde.switchdesktop");

var rightButton = ConfigFile(actionPluginsCurrent,"RightButton;NoModifier");
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

//loadTemplate("org.kde.plasma-desktop.defaultPanel");
//loadTemplate("org.kde.plasma-desktop.sidebarPanel");

for (var i = 0; i < screenCount; ++i) {
    var id = createActivity("Netrunner Desktop", "org.kde.plasma.folder")
    var desktopsArray = desktopsForActivity(id);
    
    for (var j = 0; j < desktopsArray.length; j++) {
        desktopsArray[j].wallpaperPlugin = 'org.kde.image'
        desktopsArray[j].wallpaperMode = 'SingleImage'

        desktopsArray[j].currentConfigGroup = new Array("General");
        desktopsArray[j].writeConfig("positions","1,8,desktop:/welcome.desktop,0,2,desktop:/Network,0,1,desktop:/mycomputer.desktop,0,0,desktop:/ubiquity-kdeui.desktop,0,3")
        desktopsArray[j].writeConfig("pressToMove",true);
        desktopsArray[j].writeConfig("popups",false);
        desktopsArray[j].writeConfig("selectionMarkers",false);
        desktopsArray[j].writeConfig("sortMode","-1");
//         [Containments][18][Wallpaper][org.kde.image][General]
        desktopsArray[j].currentConfigGroup = new Array("Wallpaper", "org.kde.image", "General");
        desktopsArray[j].writeConfig("Image", "file:///usr/share/wallpapers/Flux.png");
    }
}