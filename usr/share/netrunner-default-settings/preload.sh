#!/bin/bash

# Make sure there is no lock file no matter what on start
rm -f ~/.mozilla/firefox/*/lock

TotalMem=$(cat /proc/meminfo | grep -i memtotal | cut -d ':' -f 2 | awk '{print $1}')
# Under 2 GB of RAM means skip preloading
if [ "$TotalMem" -le "2000000" ]; then
  echo "Preloading skipped as under 2 GB of RAM detected"
  exit 0
else 
  sleep 2;
  #ksystraycmd --window 'Mozilla Firefox' --hidden firefox &
  kstart --skiptaskbar --window "(.*)Firefox(.*)" ksystraycmd --window "(.*)Firefox(.*)" --hidden firefox &
fi
