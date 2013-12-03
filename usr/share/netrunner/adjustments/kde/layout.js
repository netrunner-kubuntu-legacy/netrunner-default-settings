var panel = new Panel;

if (panelIds.length == 1) {
    // we are the only panel, so set the location for the user
    panel.location = "bottom";
}

panel.height = 38;

launcher = panel.addWidget("org.kde.homerun-kicker");
launcher.globalShortcut = "Alt+F1";
launcher.currentConfigGroup = Array("General");
launcher.writeConfig("buttonImage", "file:///usr/share/netrunner/netrunner-kmenu.png");
launcher.writeConfig("useCustomButtonImage", "true");

spacer = panel.addWidget("panelspacer_internal");
spacer.geometry = new QRectF(0, 0, 9, panel.height);
spacer.writeConfig("FixedSize", "true");

tasks = panel.addWidget("expanding-icons-taskmanager");
tasks.writeConfig("Share","false");
tasks.writeConfig("forceRows","false");
tasks.writeConfig("groupWhenFull","true");
tasks.writeConfig("groupingStrategy","0");
tasks.writeConfig("highlightWindows","false");
tasks.writeConfig("maxRows","1");
tasks.writeConfig("showOnlyCurrentActivity","true");
tasks.writeConfig("showOnlyCurrentDesktop","true");
tasks.writeConfig("showOnlyCurrentScreen","false");
tasks.writeConfig("showOnlyMinimized","false");
tasks.writeConfig("showTooltip","true");
tasks.currentConfigGroup = Array("Launchers");
tasks.writeConfig("Items","file:///usr/share/applications/kde4/dolphin.desktop?wmClass=Dolphin,file:///usr/share/applications/firefox.desktop?wmClass=Firefox");

var yakuake = panel.addWidget("icon");
yakuake.writeConfig("Url", "file:///usr/share/applications/kde4/yakuake.desktop");

spacer = panel.addWidget("panelspacer_internal");
spacer.geometry = new QRectF(0, 0, 9, panel.height);
spacer.writeConfig("FixedSize", "true");

var systemtray = panel.addWidget("systemtray");
systemtray.writeConfig("DefaultAppletsAdded", "true");
systemtray.writeConfig("ShowApplicationStatus","true");
systemtray.writeConfig("ShowCommunications","true");
systemtray.writeConfig("ShowHardware","true");
systemtray.writeConfig("ShowSystemServices","true");
systemtray.writeConfig("ShowUnknown","true");
systemtray.writeConfig("alwaysShown","Konversation,org.kde.ktp-presence");
systemtray.writeConfig("hidden","KDE Wallet Manager,battery,easystroke");
systemtray.currentConfigGroup = Array("Applets","1");
systemtray.writeConfig("plugin","notifier");
systemtray.currentConfigGroup = Array("Applets","2");
systemtray.writeConfig("plugin","org.kde.ktp-presence");
systemtray.currentConfigGroup = Array("Applets","3");
systemtray.writeConfig("plugin","battery");
systemtray.currentConfigGroup = Array("Applets","4");
systemtray.writeConfig("plugin","org.kde.networkmanagement");

var clock = panel.addWidget("digital-clock");
clock.writeConfig("Share","false");
clock.writeConfig("announceInterval","0");
clock.writeConfig("calendarType","locale");
clock.writeConfig("dateStyle","0");
clock.writeConfig("defaultTimezone","Local");
clock.writeConfig("displayEvents","true");
clock.writeConfig("displayHolidays","false");
clock.writeConfig("holidaysRegion","");
clock.writeConfig("holidaysRegions","");
clock.writeConfig("holidaysRegionsDaysOff","");
clock.writeConfig("plainClockColor","255,255,255");
clock.writeConfig("plainClockDrawShadow","false");
clock.writeConfig("plainClockFont","Roboto,12,-1,5,50,0,0,0,0,0");
clock.writeConfig("showDay","false");
clock.writeConfig("showSeconds","false");
clock.writeConfig("showTimezone","false");
clock.writeConfig("timeZones","");
clock.writeConfig("useCustomColor","true");
clock.writeConfig("useCustomShadowColor","false");

var krunner = panel.addWidget("icon");
krunner.writeConfig("Url", "file:///usr/share/applications/kde4/krunner.desktop");

var notifications = panel.addWidget("org.kde.notifications");

