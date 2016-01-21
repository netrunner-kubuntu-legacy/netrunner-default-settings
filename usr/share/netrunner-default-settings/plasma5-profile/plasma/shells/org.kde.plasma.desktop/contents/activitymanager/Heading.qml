/*   vim:set foldmethod=marker:
 *
 *   Copyright (C) 2014 Ivan Cukic <ivan.cukic(at)kde.org>
 *
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License version 2,
 *   or (at your option) any later version, as published by the Free
 *   Software Foundation
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details
 *
 *   You should have received a copy of the GNU General Public
 *   License along with this program; if not, write to the
 *   Free Software Foundation, Inc.,
 *   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

import QtQuick 2.2
import QtQuick.Layouts 1.2

import org.kde.plasma.core 2.0 as PlasmaCore
import org.kde.plasma.components 2.0 as PlasmaComponents
import org.kde.plasma.extras 2.0 as PlasmaExtras

import org.kde.activities.settings 0.1

Item {
    id: root

    property alias searchString: searchText.text
    property bool showingSearch: false

    signal closeRequested

    function focusSearch() {
        searchText.forceActiveFocus()
    }

    onShowingSearchChanged: if (!showingSearch) searchText.text = ""

    Keys.onPressed: {
        if (event.key == Qt.Key_Escape) {
            if (root.showingSearch) {
                event.accepted = true;
                root.showingSearch = false;
            }
        }
    }

    height: childrenRect.height

    RowLayout {
        id: buttonRow

        anchors {
            top: parent.top
            left: parent.left
            right: parent.right
        }

        height: closeButton.height

        Item {
            PlasmaExtras.Title {
                id: heading

                anchors.fill: parent

                text: i18nd("plasma_shell_org.kde.plasma.desktop", "Activities")
                elide: Text.ElideRight

                visible: !root.showingSearch
            }

            PlasmaComponents.TextField {
                id: searchText

                anchors.fill: parent

                focus: true
                clearButtonShown: true
                visible: root.showingSearch

                placeholderText: i18nd("plasma_shell_org.kde.plasma.desktop", "Search...")

                onTextChanged: if (text != "") root.showingSearch = true
            }

            Layout.fillWidth: true
            Layout.fillHeight: true
        }

        PlasmaComponents.ToolButton {
            id: searchButton
            iconSource: "edit-find"

            // checkable: true
            // onClicked: root.closeRequested()
            onClicked: root.showingSearch = !root.showingSearch
            checked: root.showingSearch
        }

        PlasmaComponents.ToolButton {
            id: configureButton
            iconSource: "configure"
            onClicked: {
                ActivitySettings.configureActivities();
                root.closeRequested();
            }
        }

        PlasmaComponents.ToolButton {
            id: closeButton
            iconSource: "window-close"
            onClicked: root.closeRequested()
        }

    }
}
