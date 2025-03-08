import { NgModule,CUSTOM_ELEMENTS_SCHEMA, isDevMode,Injector ,Type } from '@angular/core';
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
import { MicroUiCComponent } from './micro-ui-c/micro-ui-c.component';
import { MicroUiDComponent } from './micro-ui-d/micro-ui-d.component';
import { ParentUiBComponent } from './parent-ui-b/parent-ui-b.component';
import { WebUiAComponent } from './web-components/web-ui-a/web-ui-a.component';
import { WebUiBComponent } from './web-components/web-ui-b/web-ui-b.component';
import { ParentWebComponent } from './parent-web/parent-web.component';
//no compatible version for angular v16, so used v15, v17 works 
import { createCustomElement } from '@angular/elements';
import { WebOneComponent } from './web-components/web-one/web-one.component';
import { WebTwoComponent } from './web-components/web-two/web-two.component';
import { NewParentComponent } from './new-parent/new-parent.component';

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
    MicroUiBComponent,
    MicroUiCComponent,
    MicroUiDComponent,
    ParentUiBComponent,
    WebUiAComponent,
    WebUiBComponent,
    ParentWebComponent,
    WebOneComponent,
    WebTwoComponent,
    NewParentComponent
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
export class AppModule { 
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
     // register create opportunity component
     this.registerMicroUI(
      'web-ui-a-component',
      WebUiAComponent,
      this.injector
    );

    // register insured component
    this.registerMicroUI(
      'web-ui-b-component',
      WebUiBComponent,
      this.injector
    );

  }
  registerMicroUI(name: string, component: Type<any>, injector: Injector) {
    if (!customElements.get(name)) {
      const microUI = createCustomElement(component, { injector });
      customElements.define(name, microUI);
    }
  }
}
