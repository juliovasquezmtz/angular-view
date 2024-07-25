import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-by-id',
  templateUrl: './user-by-id.component.html',
  styleUrls: ['./user-by-id.component.scss']
})
export class UserByIdComponent {
  id:any = '';
  user:any = '';
  private sub: any;
  searchId:String = '';
  enableSearh:Boolean = false;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (isNaN(this.id)) {
        this.enableSearh = true;
      } else {
        this.getUser(this.id);
      }

    });
  }

  async getUser (id:String) {
    const response = await window.fetch(`http://localhost:8080/user?id=${id}`, {
      method: "GET",
      mode: 'cors',
      headers:  {
        'Access-Control-Allow-Origin': '*',
      }
    })
    this.user = await response.json();
    console.log(this.user)
  }

  search () {
    if (this.searchId !== '') {
      this.getUser(this.searchId)
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
