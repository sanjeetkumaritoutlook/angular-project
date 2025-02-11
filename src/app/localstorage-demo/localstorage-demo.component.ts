import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-localstorage-demo',
  templateUrl: './localstorage-demo.component.html',
  styleUrls: ['./localstorage-demo.component.css']
})
export class LocalstorageDemoComponent implements OnInit{
  users: { id: number; name: string }[] = [];

  ngOnInit() {
    //data is stored in localStorage as a JSON string on initial load itself
    localStorage.setItem('users', JSON.stringify([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ]));
    
    const storedUsers = localStorage.getItem('users');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
  }

  //Updating List in LocalStorage Dynamically
  addUser() {
    const newUser = { id: this.users.length + 1, name: `User ${this.users.length + 1}` };
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  
}
