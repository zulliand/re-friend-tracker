import { Component } from "@angular/core";
import { GuiModel } from "./gui-model/guimodel";
import * as handler from "./gui-model/form/handlers";
import * as beans from "./gui-model/generated/forms";
import { TranslationService } from "path-framework/app/path-framework/service/translation.service";
import { ExampleTranslationService } from "./example-translation-service"; // Angepasster Pfad
import { PathAppComponent } from "path-framework/app/path-framework/path-app.component";
import { PathService } from "path-framework/app/path-framework/service/path.service";

@Component({
    selector: "path-application",
    templateUrl: "./../../node_modules/path-framework/app/path-framework/path-app.component.html",
    providers: [PathService, { provide: TranslationService, useClass: ExampleTranslationService }] // Provider hinzufügen
})
export class ExampleAppComponent extends PathAppComponent {

    private _appConfig = new GuiModel(new ExampleTranslationService()); // Constructor Injection anpassen

    constructor(pathService: PathService, translationService: TranslationService) {
        super(pathService, translationService);
    }

    protected getFrontendVersion(): string {
        return "0.7.0";
    }

    protected getStartPage(): string {
        return "mainmenu";
    }

    protected getOwnUserForm(): string {
        return "UserForm";
    }

    public getGuiModel() {
        if (this._appConfig != null) {
            return this._appConfig.guiModel;
        }
        return null;
    }

    public getBackendUrl() {
        if (window.location.hostname.indexOf("localhost") !== -1) {
            return "http://localhost:8080/services";
        } else if (window.location.hostname.indexOf("127.0.0.1") !== -1) {
            return "http://127.0.0.1:8080/services";
        } else if (window.location.hostname.indexOf("gitpod.io") !== -1) {
            let gitpodUrl = window.location.origin + "/";
            gitpodUrl = gitpodUrl.replace("https://4200", "https://8080");
            return gitpodUrl + "services";
        }
        let url: string = window.location.href;
        url = url.replace("/#", "");
        if (url.endsWith("/")) {
            return url + "services";
        }
        return url + "/services";
    }

    protected getBeans() {
        return beans;
    }

    protected getHandlers() {
        return handler;
    }

}
