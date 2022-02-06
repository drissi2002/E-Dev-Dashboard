import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/session';
import { FakeSessionItemService } from '../fake-session-item.service';

@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
  sub: any;
  id: any;

  constructor(private route: ActivatedRoute, private sessionItemService: FakeSessionItemService) { }
  tracks = ['AngularJS', 'ReactJS','NodeJS', 'Flutter', 'Ionic'];
  session = new Session(1,"https://i.imgur.com/zxilNO8.png" ,'Web', this.tracks[2], new Date('2018-06-11'), 10, 'Lyon', 0, false);
 

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      });
      console.log('Session ID ' + this.id.toString());
      this.session = this.sessionItemService.getSession(this.id);
  }
  editSession(sessionItem: NgForm): void{
    console.log("SessionUpdated..."+JSON.stringify(sessionItem.value));
    }

}
