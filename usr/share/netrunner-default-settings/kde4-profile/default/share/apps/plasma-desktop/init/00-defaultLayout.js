loadTemplate("org.kde.plasma-desktop.defaultPanel")

for (var i = 0; i < screenCount; ++i) {
    var desktop = new Activity("netrunnerdesktop")
    desktop.name = i18n("Desktop")
    desktop.screen = i
    desktop.writeConfig("alignToGrid", "true")
    desktop.writeConfig("blankLabel", "false")
    desktop.writeConfig("clickForFolderPreviews", "false")
    desktop.writeConfig("customIconSize", "64")
    desktop.writeConfig("numTextLines", "2")
    desktop.writeConfig("previewPlugins", "imagethumbnail,jpegthumbnail,windowsexethumbnail,kffmpegthumbnailer,windowsimagethubmnail")
    desktop.writeConfig("savedPositions", "1,6,ubiquity-kdeui.desktop,10,136,welcome.desktop,618,10,webaccounts.desktop,314,10,steam.desktop,466,10,mycomputer.desktop,10,10,Network,162,10")
    desktop.writeConfig("sortDirsFirst", "false")
    
    desktop.wallpaperPlugin = 'image'
    desktop.wallpaperMode = 'SingleImage'
    
    desktop.currentConfigGroup = new Array("Wallpaper", "image")
    desktop.writeConfig("wallpaper", "/usr/share/wallpapers/Horizon")
    desktop.writeConfig("slidepaths", "/usr/share/wallpapers")
    desktop.writeConfig("wallpaperposition", "2")
    
    desktop.currentConfigGroup = Array("ActionPlugins","RightButton;NoModifier")
    desktop.writeConfig("_add panel","true")
    desktop.writeConfig("_context", "true")
    desktop.writeConfig("_lock_screen", "false")
    desktop.writeConfig("_logout", "false")
    desktop.writeConfig("_run_command", "false")
    desktop.writeConfig("_sep1", "false")
    desktop.writeConfig("_sep2", "true")
    desktop.writeConfig("_sep3", "false")
    desktop.writeConfig("_wallpaper", "true")
    desktop.writeConfig("add sibling containment", "false")
    desktop.writeConfig("add widgets", "true")
    desktop.writeConfig("configure", "true")
    desktop.writeConfig("configure shortcuts", "false")
    desktop.writeConfig("lock widgets", "true")
    desktop.writeConfig("manage activities", "false")
    desktop.writeConfig("remove", "true")

    //Create more panels for other screens // DON'T
//     if (i > 0){
//         var panel = new Panel
//         panel.screen = i
//         panel.location = 'bottom'
//         panel.height = screenGeometry(i).height > 1024 ? 33 : 33
//         var tasks = panel.addWidget("tasks")
//         tasks.writeConfig("showOnlyCurrentScreen", true);
//     }
}