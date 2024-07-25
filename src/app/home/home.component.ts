import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  id:String = '';
  hasId:Boolean = false;
  public search() {
    this.hasId = this.id !== '';
  }
}
