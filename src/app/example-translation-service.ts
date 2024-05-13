import { Injectable } from "@angular/core";
import { TranslationService } from "path-framework/app/path-framework/service/translation.service";

@Injectable()
export class ExampleTranslationService extends TranslationService {

    public getTranslation(key: string): string {
        const myTranslations = this.createTranslationMap(this.getExampleTranslations());
        // Prefer custom translations if available
        const translation = myTranslations.get(key);
        if (translation == null) {
            console.log(`Translation not found for key: ${key}`); // Debugging-Anweisung hinzufügen
            return super.getTranslation(key);
        }
        console.log(`Translation found for key: ${key}, value: ${translation}`); // Debugging-Anweisung hinzufügen
        return translation;
    }

    private getExampleTranslations() {
        return {
            "MainMenu": "Main Menu", // Sicherstellen, dass dieser Schlüssel vorhanden ist
            "Friends": "Friends",
            "Locations": "Locations",
            "Groups": "Groups",
            "Activities": "Activities",
            "FamilyName": "Family Name",
            "FirstName": "First Name",
            "Nickname": "Nickname",
            "Group": "Group",
            "Location": "Location",
            "Birthday": "Birthday",
            "Comments": "Comments",
            "Delete": "Delete",
            "Cancel": "Cancel",
            "Ok": "Ok",
            "Friend": "Friend",
            "Location Name": "Location Name",
            "Group Name": "Group Name",
            "Activity Name": "Activity Name",
            "Participants": "Participants",
            "Add Activity": "Add Activity",
            "New Friend": "New Friend",
            "New Location": "New Location",
            "New Group": "New Group",
            "New Activity": "New Activity",
            "Edit Friend": "Edit Friend",
            "Edit Location": "Edit Location",
            "Edit Group": "Edit Group",
            "Edit Activity": "Edit Activity"
        };
    }
}
