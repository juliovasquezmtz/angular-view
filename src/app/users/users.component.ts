import { Component } from '@angular/core';
import { PersonalService } from './../personal.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  personal:any = [];
  usuarios:any = [];
  constructor(private _servicio:PersonalService) {
    this.personal = _servicio.gerPersonal()
    
  }
  users:Array<any> = [];
  public ngOnInit(): void {
    this.getList()

    /*
    this._servicio.getAllUsers().subscribe(usuarios => {
      this.usuarios = usuarios.response
    })
    */
 }



 async getList () {
  const response = await fetch("http://localhost:8080/users", {
    method: "GET",
    mode: 'cors',
    headers:  {
      'Access-Control-Allow-Origin': '*',
    }
  })
  this.users = await response.json();
  }
}
