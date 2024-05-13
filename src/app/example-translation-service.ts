import { Injectable } from "@angular/core";
import { TranslationService } from "path-framework/app/path-framework/service/translation.service";

@Injectable()
export class ExampleTranslationService extends TranslationService {

    protected getTranslation(key: string): string {
        const myTranslations = this.createTranslationMap(this.getExampleTranslations());
        // prefer custom translations
        if (myTranslations.get(key) == null) {
            return super.getTranslation(key);
        }
        return myTranslations.get(key);
    }

    private getExampleTranslations() {
        const languageCode: string = this.getUserLanguage();

        // Hier werden die Texte ohne geschweifte Klammern angepasst
        return {
            "Activity": "Activity",
            "AddActivity": "Add Activity",
            "AddFriend": "Add Friend",
            "Activities": "Activities",
            "Birthday": "Birthday",
            "Comments": "Comments",
            "CreationDate": "Creation Date",
            "Date": "Date",
            "EditActivity": "Edit Activity",
            "EditFriend": "Edit Friend",
            "EditLocation": "Edit Location",
            "Friends": "Friends",
            "Friend": "Friend",
            "FamilyName": "Family Name",
            "FirstName": "First Name",
            "Group": "Group",
            "Groups": "Groups",
            "GroupName": "Group Name",
            "Location": "Location",
            "LocationName": "Location Name",
            "Name": "Name",
            "NewActivity": "New Activity",
            "NewFriend": "New Friend",
            "NewGroup": "New Group",
            "NewLocation": "New Location",
            "Nickname": "Nickname"
        };
    }
}
