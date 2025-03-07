import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateDataComponent } from './translate-data/translate-data.component';
import { TableExportComponent } from './table-export/table-export.component';
import { ItemListComponent } from './item-list/item-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { LocalstorageDemoComponent } from './localstorage-demo/localstorage-demo.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { CounterComponent } from './counter/counter.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ParentUiComponent } from './parent-ui/parent-ui.component';
import { canDeactivateGuard } from './can-deactivate.guard';
const routes: Routes = [
  { path: 'translate-text', component: TranslateDataComponent },
  { path: 'table-export', component: TableExportComponent },
  { path: 'ngrx-store', component: ItemListComponent },
  { path: 'store-two', component: BookListComponent },
  { path: 'localstorage-demo', component: LocalstorageDemoComponent },
  { path: 'openai-chat', component: ChatbotComponent },
  { path: 'form-array', component: DynamicFormComponent },
  { path: 'jest-counter', component: CounterComponent },
  { path: 'sentiment-analysis', component: AnalysisComponent },
  { path: 'parent-ui', component: ParentUiComponent, canDeactivate: [canDeactivateGuard] },
  { path: 'customers', 
  loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
{ path: 'orders',
 loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
