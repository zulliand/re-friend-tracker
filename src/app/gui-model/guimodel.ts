import { ExampleTranslationService } from "../example-translation-service"; // Angepasster Pfad

export class GuiModel {
    constructor(private translationService: ExampleTranslationService) {}

    private _guiModel = {
        "application": {
            "title": this.translationService.getTranslation("Andres Zulliger Requirements Engineering Friend Tracker (FS2024)"),
            "formList": [
                {
                    "id": "FriendForm",
                    "title": this.translationService.getTranslation("MainMenu"),
                    "url": "/friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": this.translationService.getTranslation("FamilyName"),
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": this.translationService.getTranslation("FirstName"),
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "nickname",
                            "type": "text",
                            "name": this.translationService.getTranslation("Nickname"),
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "group",
                            "type": "autocomplete",
                            "name": this.translationService.getTranslation("Group"),
                            "url": "/group",
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id": "location",
                            "type": "autocomplete",
                            "name": this.translationService.getTranslation("Location"),
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": this.translationService.getTranslation("Birthday"),
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": this.translationService.getTranslation("Comments"),
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": this.translationService.getTranslation("Delete")
                        },
                        {
                            "type": "cancelButton",
                            "name": this.translationService.getTranslation("Cancel")
                        },
                        {
                            "type": "okButton",
                            "name": this.translationService.getTranslation("Ok")
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": this.translationService.getTranslation("Location"),
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": this.translationService.getTranslation("Location Name"),
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": this.translationService.getTranslation("Delete")
                        },
                        {
                            "type": "cancelButton",
                            "name": this.translationService.getTranslation("Cancel")
                        },
                        {
                            "type": "okButton",
                            "name": this.translationService.getTranslation("Ok")
                        }
                    ]
                },
                {
                    "id": "GroupForm",
                    "title": this.translationService.getTranslation("Group"),
                    "url": "/group",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": this.translationService.getTranslation("Group Name"),
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": this.translationService.getTranslation("Delete")
                        },
                        {
                            "type": "cancelButton",
                            "name": this.translationService.getTranslation("Cancel")
                        },
                        {
                            "type": "okButton",
                            "name": this.translationService.getTranslation("Ok")
                        }
                    ]
                },
                {
                    "id": "ActivityForm",
                    "title": this.translationService.getTranslation("Activity"),
                    "url": "/activity",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": this.translationService.getTranslation("Activity Name"),
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "location",
                            "type": "autocomplete",
                            "name": this.translationService.getTranslation("Location"),
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "participants",
                            "type": "autocomplete",
                            "name": this.translationService.getTranslation("Participants"),
                            "url": "/friend",
                            "form": "FriendForm",
                            "width": 2,
                            "multiple": true
                        },
                        {
                            "type": "deleteButton",
                            "name": this.translationService.getTranslation("Delete")
                        },
                        {
                            "type": "cancelButton",
                            "name": this.translationService.getTranslation("Cancel")
                        },
                        {
                            "type": "okButton",
                            "name": this.translationService.getTranslation("Ok")
                        }
                    ]
                },
                {
                    "id": "AddActivityForm",
                    "title": this.translationService.getTranslation("Add Activity"),
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id": "activity",
                            "type": "autocomplete",
                            "name": this.translationService.getTranslation("Activity"),
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": this.translationService.getTranslation("Delete")
                        },
                        {
                            "type": "cancelButton",
                            "name": this.translationService.getTranslation("Cancel")
                        },
                        {
                            "type": "okButton",
                            "name": this.translationService.getTranslation("Ok")
                        }
                    ]
                }
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": this.translationService.getTranslation("MainMenu"), // Sicherstellen, dass der Schlüssel korrekt ist
                    "elementList": [
                        {
                            "type": "button",
                            "name": this.translationService.getTranslation("Friends"),
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage"
                        },
                        {
                            "type": "button",
                            "name": this.translationService.getTranslation("Locations"),
                            "icon": "fa-home",
                            "color": "yellow",
                            "page": "locationspage"
                        },
                        {
                            "type": "button",
                            "name": this.translationService.getTranslation("Groups"),
                            "icon": "fa-group",
                            "color": "magenta",
                            "page": "groupspage"
                        },
                        {
                            "type": "button",
                            "name": this.translationService.getTranslation("Activities"),
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
                            "name": this.translationService.getTranslation("New Friend"),
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
                            }
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
                            "name": this.translationService.getTranslation("New Location"),
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
                            "name": this.translationService.getTranslation("New Group"),
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
                            "type": "newButton",
                            "name": this.translationService.getTranslation("New Activity"),
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
