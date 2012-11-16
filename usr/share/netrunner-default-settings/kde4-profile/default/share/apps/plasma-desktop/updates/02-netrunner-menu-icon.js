activity.currentConfigGroup = new Array('ToolBox')
activity.writeConfig('corner', '1')
activity.writeConfig('offset', '0')

for (var i = 0; i < panelIds.length; ++i) {
    var panel = panelById(panelIds[i]);
    var widgetIds = panel.widgetIds;

    for (var j = 0; j < widgetIds.length; ++j) {
        var widget = panel.widgetById(widgetIds[j]);

        if (widget && (widget.type == 'quickaccess') &&
            (widget.readConfig("icon", "") != "user-home")) {
                widget.writeConfig("icon", "user-home");
        } // if quickaccess

        if (widget && (widget.type == 'lancelot_launcher') &&
            (widget.readConfig("icon", "") != "/usr/share/netrunner/netrunner-kmenu.png")) {
                widget.writeConfig("icon", "/usr/share/netrunner/netrunner-kmenu.png");
        } // if lancelot_launcher


        if (widget && (widget.type == 'launcher') &&
            (widget.readConfig("icon", "") != "/usr/share/netrunner/netrunner-kmenu.png")) {
                widget.writeConfig("icon", "/usr/share/netrunner/netrunner-kmenu.png");
        } // if launcher
    } // for widgets in panel
} // for panel


