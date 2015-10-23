# Author : Rohan Garg <rohan@garg.io>
# Export sbin path's on systems such as Debian that don't have
# sbin exported to PATH

if [[ $PATH != *"sbin"* ]]
then
    export PATH=$PATH:/usr/local/sbin:/usr/sbin:/sbin
fi
