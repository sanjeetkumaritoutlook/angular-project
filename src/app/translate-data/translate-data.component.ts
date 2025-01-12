import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate-data',
  templateUrl: './translate-data.component.html',
  styleUrls: ['./translate-data.component.css']
})
export class TranslateDataComponent {
  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('en');

    // Use the browser's language if available
    const browserLang = this.translate.getBrowserLang();
    if (browserLang) {
      this.translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
    } else {
      this.translate.use('en');
    }
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
