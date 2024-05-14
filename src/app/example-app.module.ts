import { NgModule } from "@angular/core";
import { ExampleAppComponent } from "./example-app.component";
import { AppModule } from "path-framework/app/app.module";
import { ExampleTranslationService } from "./example-translation-service"; // Angepasster Pfad
import { TranslationService } from "path-framework/app/path-framework/service/translation.service"; // TranslationService importieren

@NgModule({
    imports: [AppModule.forRoot()],
    declarations: [ExampleAppComponent],
    bootstrap: [ExampleAppComponent],
    providers: [{ provide: TranslationService, useClass: ExampleTranslationService }] // Provider hinzufügen
})
export class ExampleAppModule { }
//