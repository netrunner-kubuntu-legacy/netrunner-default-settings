for (var i in activityIds)
  {
      var activity = activityById(activityIds[i]);
      activity.currentConfigGroup = new Array('ToolBox');
      activity.writeConfig('corner', '1');
      activity.writeConfig('offset', '0');	
      activity.reloadConfig();
  }

