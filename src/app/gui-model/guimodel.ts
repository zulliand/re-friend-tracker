import { ExampleTranslationService } from "../example-translation-service"; // Angepasster Pfad

export class GuiModel {
    constructor(private translationService: ExampleTranslationService) {}

    private _guiModel = {
        "application": {
            "title": "Andres Zulliger Requirements Engineering Friend Tracker (FS2024)",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "MainMenu",
                    "url": "/friend/:friendKey", // Angepasst, um spezifische Freunde zu bearbeiten
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "url": "/group",
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id": "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location/:locationKey", // Angepasst, um spezifische Locations zu bearbeiten
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Location Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "GroupForm",
                    "title": "Group",
                    "url": "/group/:groupKey", // Angepasst, um spezifische Gruppen zu bearbeiten
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Group Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ActivityForm",
                    "title": "Activity",
                    "url": "/activity/:activityKey", // Angepasst, um spezifische Aktivitäten zu bearbeiten
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Activity Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "participants",
                            "type": "autocomplete",
                            "name": "Participants",
                            "url": "/activity/:activityKey/friend", // Angepasst, um nur Teilnehmer der spezifischen Aktivität zu laden
                            "form": "FriendForm",
                            "width": 2,
                            "multiple": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddActivityForm",
                    "title": "Add Activity",
                    "url": "/friend/:friendKey/activity", // Unverändert
                    "formFieldList": [
                        {
                            "id": "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                }
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage"
                        },
                        {
                            "type": "button",
                            "name": "Locations",
                            "icon": "fa-home",
                            "color": "yellow",
                            "page": "locationspage"
                        },
                        {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-group",
                            "color": "magenta",
                            "page": "groupspage"
                        },
                        {
                            "type": "button",
                            "name": "Activities",
                            "icon": "fa-tasks",
                            "color": "green",
                            "page": "activityspage"
                        }
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton"
                        },
                        {
                            "type": "newButton",
                            "name": "New Friend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "form": {
                                "form": "FriendForm"
                            },
                            "page": "friendActivitiesPage",
                            "key": "friendKey" // Stellt sicher, dass der Schlüssel korrekt übergeben wird
                        }
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton"
                        },
                        {
                            "type": "newButton",
                            "name": "New Location",
                            "icon": "fa-home",
                            "color": "green",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/location",
                            "form": {
                                "form": "LocationForm"
                            }
                        }
                    ]
                },
                {
                    "id": "groupspage",
                    "elementList": [
                        {
                            "type": "backbutton"
                        },
                        {
                            "type": "newButton",
                            "name": "New Group",
                            "icon": "fa-group",
                            "color": "green",
                            "form": {
                                "form": "GroupForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-group",
                            "color": "magenta",
                            "search": true,
                            "url": "/group",
                            "form": {
                                "form": "GroupForm"
                            }
                        }
                    ]
                },
                {
                    "id": "activityspage",
                    "elementList": [
                        {
                            "type": "backbutton"
                        },
                        {
                            "type": "button",
                            "name": "Edit Friend",
                            "icon": "fa-regular fa-user",
                            "color": "green",
                            "url": "/friend/:friendKey", // Stellt sicher, dass der Schlüssel übergeben wird
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "New Activity",
                            "icon": "fa-tasks",
                            "color": "green",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-tasks",
                            "color": "blue",
                            "search": true,
                            "url": "/activity",
                            "form": {
                                "form": "ActivityForm"
                            },
                            "page": "activityParticipantsPage", // Fügt eine neue Seite hinzu, um Teilnehmer anzuzeigen
                            "key": "activityKey" // Stellt sicher, dass der Schlüssel korrekt übergeben wird
                        }
                    ]
                },
                {
                    "id": "friendActivitiesPage",
                    "elementList": [
                        {
                            "type": "backbutton"
                        },
                        {
                            "type": "button", // Hinzufügen des Bearbeiten-Buttons für Freund
                            "name": "Edit Friend",
                            "icon": "fa-edit",
                            "color": "green",
                            "url": "/friend/:friendKey", // URL zum Bearbeiten des Freundes
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "newButton", // Hinzufügen des Add Activity Buttons
                            "name": "Add Activity",
                            "icon": "fa-plus",
                            "color": "blue",
                            "form": {
                                "form": "AddActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-tasks",
                            "color": "blue",
                            "search": true,
                            "url": "/friend/:friendKey/activity", // Lädt die Aktivitäten des spezifischen Freundes
                            "form": {
                                "form": "ActivityForm"
                            }
                        }
                    ]
                },
                {
                    "id": "activityParticipantsPage",
                    "elementList": [
                        {
                            "type": "backbutton"
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/activity/:activityKey/friend", // Lädt die Teilnehmer der spezifischen Aktivität
                            "form": {
                                "form": "FriendForm"
                            }
                        }
                    ]
                }
            ]
        }
    };

    get guiModel() {
        return this._guiModel;
    }
}
