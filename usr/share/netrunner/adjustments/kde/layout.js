var panel = new Panel
if (panelIds.length == 1) {
    // we are the only panel, so set the location for the user
    panel.location = 'bottom'
}

panel.height = 36;

launcher = panel.addWidget("simplelauncher");
launcher.writeConfig("format", "NameDescription");
launcher.globalShortcut = "Alt+F1"
launcher.writeConfig("icon", "/usr/share/netrunner/netrunner-kmenu.png");
launcher.writeConfig("maxRecentApps", "5")
launcher.writeConfig("views", "RecentlyUsedApplications,Applications,RunCommand,Leave");
 
var krunner = panel.addWidget("quicklaunch");
krunner.writeConfig("iconUrls","file:///usr/share/applications/kde4/krunner.desktop")
 
var dolphin = panel.addWidget("quicklaunch");
dolphin.writeConfig("iconUrls","file:///usr/share/applications/kde4/dolphin.desktop")
 
var firefox = panel.addWidget("quicklaunch");
firefox.writeConfig("iconUrls","file:///usr/share/applications/firefox.desktop")
 

tasks = panel.addWidget("tasks")
tasks.writeConfig("Share","false")
tasks.writeConfig("forceRows","true")
tasks.writeConfig("groupWhenFull","true")
tasks.writeConfig("groupingStrategy","0")
tasks.writeConfig("highlightWindows","false")
tasks.writeConfig("maxRows","1")
tasks.writeConfig("showOnlyCurrentDesktop","true")
tasks.writeConfig("showOnlyCurrentScreen","false") 
tasks.writeConfig("showOnlyMinimized","false")
tasks.writeConfig("showTooltip","true")
tasks.writeConfig("sortingStrategy","1")

var yakuake = panel.addWidget("quicklaunch");
yakuake.writeConfig("iconUrls","file:///usr/share/applications/kde4/yakuake.desktop")
 

var systemtray = panel.addWidget("systemtray");
systemtray.currentConfigGroup = Array("Applets","999")
systemtray.writeConfig("plugin","notifications")
systemtray.currentConfigGroup = Array()

systemtray.currentConfigGroup = Array("Applets","996")
systemtray.writeConfig("plugin","veromix-plasmoid")
systemtray.writeConfig("unitvalues_visible","true")
systemtray.currentConfigGroup = Array()

systemtray.currentConfigGroup = Array("Applets","998")
systemtray.writeConfig("plugin","ktp_presence")
systemtray.currentConfigGroup = Array()
 
systemtray.currentConfigGroup = Array("Applets","997")
systemtray.writeConfig("plugin","battery")
systemtray.currentConfigGroup = Array()

systemtray.writeConfig("ShowApplicationStatus","true")
systemtray.writeConfig("ShowCommunications","true")
systemtray.writeConfig("ShowHardware","true")
systemtray.writeConfig("ShowSystemService","true")
systemtray.writeConfig("ShowUnknown","true")
systemtray.writeConfig("alwaysShown","Konversation,ktp_presence,notifications")
systemtray.writeConfig("hidden","KDE Wallet Manager")
 
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
clock.writeConfig("plainClockColor","228,228,228")
clock.writeConfig("plainClockDrawShadow","false")
clock.writeConfig("plainClockFont","Open Sans,12,-1,5,50,0,0,0,0,0")
clock.writeConfig("showDay","false")
clock.writeConfig("showSeconds","false")
clock.writeConfig("showTimezone","false")
clock.writeConfig("timeZones","")
clock.writeConfig("useCustomColor","false")
clock.writeConfig("useCustomShadowColor","false")

