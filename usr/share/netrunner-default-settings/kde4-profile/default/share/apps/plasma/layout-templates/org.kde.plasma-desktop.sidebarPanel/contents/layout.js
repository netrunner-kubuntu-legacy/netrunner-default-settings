var panel = new Panel;
panel.location = 'right';
panel.alignment = 'center';
panel.hiding = 'windowsbelow';
panel.height = 250;
panel.length = screenGeometry(panel.screen).height;


var player = panel.addWidget("mediaplayer");


var mixer = panel.addWidget("veromix-plasmoid");


panel.addWidget("panelspacer_internal");



var aclock = panel.addWidget("clock");



var toggle = panel.addWidget("paneltoggleapplet")
toggle.globalShortcut = "F11"
toggle.writeConfig("Mode0", "2");
toggle.writeConfig("Mode1", "4");
toggle.writeConfig("FirstStart", "false");



/**
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
**/

