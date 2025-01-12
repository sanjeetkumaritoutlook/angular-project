import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateDataComponent } from './translate-data/translate-data.component';
import { TableExportComponent } from './table-export/table-export.component';
const routes: Routes = [
  { path: 'translate-text', component: TranslateDataComponent },
  { path: 'table-export', component: TableExportComponent },
  { path: 'customers', 
  loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
{ path: 'orders',
 loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
