#!/bin/bash
# 
# Put into ~/.config/plasma-workspace/env

if [ ! -L ~/.kde/share/apps/RecentDocuments ] && [ -d ~/.kde/share/apps/RecentDocuments ]
then
	rm -r ~/.kde/share/apps/RecentDocuments
fi

ln -sf ~/.local/share/RecentDocuments ~/.kde/share/apps/RecentDocuments
