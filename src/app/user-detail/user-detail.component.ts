import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalService } from './../personal.service'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  person:any;

  constructor (
    private ruta:ActivatedRoute,
    private _servicio:PersonalService
  ) {
    this.ruta.params.subscribe(params => {
      this.person = this._servicio.getPersonalDetail(params['id'])
    })
  }

  
  

}
