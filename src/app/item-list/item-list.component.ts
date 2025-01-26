import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//import { loadItems } from  '../store/item.actions';
import { selectItems } from '../store/item.selectors';
import * as ItemActions from '../store/item.actions';

//Dispatch Actions and Select State:
//In your component, dispatch actions and subscribe to the store.

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  //items$ = this.store.select(selectItemList);
  items$: Observable<string[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.items$ = this.store.select(selectItems);
   // Dispatch action to load items
    this.store.dispatch(ItemActions.loadItems());
  }

}
