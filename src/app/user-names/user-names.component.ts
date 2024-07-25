import { Component } from '@angular/core';

@Component({
  selector: 'app-user-names',
  templateUrl: './user-names.component.html',
  styleUrls: ['./user-names.component.scss']
})
export class UserNamesComponent {
  names:Array<any> = [];
  public ngOnInit(): void {
    this.getNames()
 }
 async getNames () {
  const response = await window.fetch("http://localhost:8080/users/names", {
    method: "GET",
    mode: 'cors',
    headers:  {
      'Access-Control-Allow-Origin': '*',
    }
  })
  this.names = await response.json();
  }
}
