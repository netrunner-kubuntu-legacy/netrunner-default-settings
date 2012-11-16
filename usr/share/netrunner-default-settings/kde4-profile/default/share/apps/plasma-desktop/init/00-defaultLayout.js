var activity = new Activity("desktop")

activity.alignToGrid="true"
activity.blankLabel="false"
activity.clickForFolderPreviews="false"
activity.customIconSize="64"
activity.desktop="-1"
activity.flow="0"
activity.formfactor="0"
activity.iconsLocked="true"
activity.immutability="1"
activity.location="0"
activity.numTextLines="2"
activity.plugin="folderview"
activity.previewPlugins="imagethumbnail,jpegthumbnail,windowsexethumbnail,kffmpegthumbnailer,windowsimagethumbnail,directorythumbnail"
activity.savedPositions="1,6,mycomputer.desktop,10,10,runners-id.desktop,141,10,webaccounts.desktop,272,10,sambamount.desktop,403,10,welcome.desktop,534,10,ubiquity-kdeui.desktop,665,10"
activity.sortDirsFirst = "false"

activity.wallpaperPlugin = "image"
activity.wallpaperMode = "SingleImage"


activity.currentConfigGroup = Array("Wallpaper", "image")
activity.writeConfig("slidepaths","/usr/share/wallpapers")
activity.writeConfig("wallpaper", "/usr/share/wallpapers/Dryland - Third Edition - The Tower")
activity.writeConfig("wallpaperposition", "2")

activity.currentConfigGroup = new Array('ToolBox')
activity.writeConfig('corner', '1')
activity.writeConfig('offset', '0')
     
var screenrect = screenGeometry(0)
