import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  resp:Array<any> = [];
  newUser:any = {
    id: '',
    name: '',
    edad: '',
    email: ''
  };
  public ngOnInit(): void {
    //this.setUser()
  }
  async setUser () {
    const response = await window.fetch("http://localhost:8080/user/add", {
      method: "POST",
      mode: 'cors',
      headers:  {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(this.newUser)
    });
    this.resp = await response.json();
    console.log(this.resp)
  }

  guardar(user:any) {
    this.setUser()
  }
}

//headers.append('Content-Type', 'application/json');
//headers.append('Accept', 'application/json');
//headers.append('Access-Control-Allow-Origin', 'http://localhost:8081');
//headers.append('Access-Control-Allow-Credentials', 'true');
//headers.append('Access-Control-Allow-Methods', 'POST');
//headers.append('Access-Control-Allow-Headers', 'Authorization');
//headers.append('GET', 'POST');
