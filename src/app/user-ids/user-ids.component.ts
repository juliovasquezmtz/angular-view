import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-ids',
  templateUrl: './user-ids.component.html',
  styleUrls: ['./user-ids.component.scss']
})
export class UserIdsComponent {
  ids:Array<any> = [];
  public ngOnInit(): void {
    this.getIds()
 }
 async getIds () {
  const response = await window.fetch("http://localhost:8080/users/ids", {
    method: "GET",
    mode: 'cors',
    headers:  {
      'Access-Control-Allow-Origin': '*',
    }
  })
  this.ids = await response.json();
  }
}
