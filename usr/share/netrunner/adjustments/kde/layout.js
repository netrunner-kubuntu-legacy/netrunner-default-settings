var panel = new Panel
if (panelIds.length == 1) {
    // we are the only panel, so set the location for the user
    panel.location = 'bottom'
}

panel.height = 33;

//launcher = panel.addWidget("simplelauncher");
//launcher.writeConfig("format", "NameDescription");
//launcher.globalShortcut = "Alt+F1"
//launcher.writeConfig("icon", "/usr/share/netrunner/netrunner-kmenu.png");
//launcher.writeConfig("maxRecentApps", "5")
//launcher.writeConfig("views", "RecentlyUsedApplications,Applications,RunCommand,Leave");

launcher = panel.addWidget("org.kde.homerun-kicker")
launcher.currentConfigGroup = Array("General")

// This does currently not work for QML Widgets
launcher.writeConfig("buttonImage", "file:///usr/share/netrunner/netrunner-kmenu.png");
launcher.writeConfig("useCustomButtonImage", "true");


//var dolphin = panel.addWidget("icon");
//dolphin.writeConfig("Url", "file:///usr/share/applications/kde4/dolphin.desktop"); 
//dolphin.writeConfig("Order", "2"); 

//var firefox = panel.addWidget("icon");
//firefox.writeConfig("Url", "file:///usr/share/applications/kde4/firefox.desktop"); 
//firefox.writeConfig("Order", "3"); 


tasks = panel.addWidget("expanding-icons-taskmanager")
tasks.writeConfig("Share","false")
tasks.writeConfig("forceRows","false")
tasks.writeConfig("groupWhenFull","true")
tasks.writeConfig("groupingStrategy","0")
tasks.writeConfig("highlightWindows","false")
tasks.writeConfig("maxRows","1")
tasks.writeConfig("showOnlyCurrentActivity","true")
tasks.writeConfig("showOnlyCurrentDesktop","true")
tasks.writeConfig("showOnlyCurrentScreen","false") 
tasks.writeConfig("showOnlyMinimized","false")
tasks.writeConfig("showTooltip","true")

tasks.currentConfigGroup = Array("Launchers")
tasks.writeConfig("Items","file:///usr/share/applications/kde4/dolphin.desktop?wmClass=Dolphin,file:///usr/share/applications/firefox.desktop?wmClass=Firefox")


var yakuake = panel.addWidget("icon");
yakuake.writeConfig("Url", "file:///usr/share/applications/kde4/yakuake.desktop"); 
yakuake.writeConfig("Order", "5"); 


var systemtray = panel.addWidget("systemtray");

systemtray.currentConfigGroup = Array("Applets","998")
systemtray.writeConfig("plugin","org.kde.ktp-presence")
systemtray.currentConfigGroup = Array()
 
systemtray.currentConfigGroup = Array("Applets","997")
systemtray.writeConfig("plugin","battery")
systemtray.currentConfigGroup = Array()

systemtray.currentConfigGroup = Array("Applets","996")
systemtray.writeConfig("plugin","org.kde.plasma-nm")
systemtray.currentConfigGroup = Array("Applets","995")
systemtray.writeConfig("plugin","org.kde.networkmanagement")
systemtray.currentConfigGroup = Array()

systemtray.writeConfig("ShowApplicationStatus","true")
systemtray.writeConfig("ShowCommunications","true")
systemtray.writeConfig("ShowHardware","true")
systemtray.writeConfig("ShowSystemServices","true")
systemtray.writeConfig("ShowUnknown","true")
systemtray.writeConfig("alwaysShown","Konversation,org.kde.ktp-presence")
systemtray.writeConfig("hidden","KDE Wallet Manager,org.kde.notifications,battery")
 
var clock = panel.addWidget("digital-clock");
clock.writeConfig("Share","false")

clock.writeConfig("announceInterval","0")
clock.writeConfig("calendarType","locale")
clock.writeConfig("dateStyle","0")
clock.writeConfig("defaultTimezone","Local")
clock.writeConfig("displayEvents","true")
clock.writeConfig("displayHolidays","false")
clock.writeConfig("holidaysRegion","")
clock.writeConfig("holidaysRegions","")
clock.writeConfig("holidaysRegionsDaysOff","")
clock.writeConfig("plainClockColor","255,255,255")
clock.writeConfig("plainClockDrawShadow","false")
clock.writeConfig("plainClockFont","Roboto,12,-1,5,50,0,0,0,0,0")
clock.writeConfig("showDay","false")
clock.writeConfig("showSeconds","false")
clock.writeConfig("showTimezone","false")
clock.writeConfig("timeZones","")
clock.writeConfig("useCustomColor","true")
clock.writeConfig("useCustomShadowColor","false")

var krunner = panel.addWidget("icon");
krunner.writeConfig("Url", "file:///usr/share/applications/kde4/krunner.desktop"); 
krunner.writeConfig("Order", "8"); 

var notifications = panel.addWidget("org.kde.notifications");
notifications.writeConfig("Order", "9");
