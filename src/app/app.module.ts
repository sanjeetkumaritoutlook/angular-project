import { NgModule,CUSTOM_ELEMENTS_SCHEMA, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

import { MatDesignComponent } from './mat-design/mat-design.component';
import { LoginMaterialComponent } from './login-material/login-material.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { TranslateDataComponent } from './translate-data/translate-data.component';
import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { TableExportComponent } from './table-export/table-export.component';
import { StateSurchargeService } from './state-surcharge.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemEffects } from './store/item.effects';
import { itemReducer } from './store/item.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BookReducer } from './books/book.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { BookEffects } from './books/book.effects';
import { LocalstorageDemoComponent } from './localstorage-demo/localstorage-demo.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { CounterComponent } from './counter/counter.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { CardOneComponent } from './card-one/card-one.component';
import { CardTwoComponent } from './card-two/card-two.component';
import { CardThreeComponent } from './card-three/card-three.component';
import { MicroUiComponent } from './micro-ui/micro-ui.component';
import { ParentUiComponent } from './parent-ui/parent-ui.component';
import { MicroUiBComponent } from './micro-ui-b/micro-ui-b.component';

// Required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export class CustomMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return `Missing translation for: ${params.key}`;
  }
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MatDesignComponent,
    LoginMaterialComponent,
    TranslateDataComponent,
    TableExportComponent,
    ItemListComponent,
    BookListComponent,
    LocalstorageDemoComponent,
    ChatbotComponent,
    CounterComponent,
    AnalysisComponent,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent,
    MicroUiComponent,
    ParentUiComponent,
    MicroUiBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    CustomerDashboardModule,
    HttpClientModule, // Import HttpClientModule
    DynamicFormComponent,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomMissingTranslationHandler,
      },
    }), StoreModule.forRoot({item: itemReducer, book: BookReducer}),
     EffectsModule.forRoot([ItemEffects,BookEffects]),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [StateSurchargeService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
