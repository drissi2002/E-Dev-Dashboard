import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { FakeSessionItemService } from "../fake-session-item.service";

@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
  })
  export class SessionAddFormComponent {
  constructor(private sessionItemService: FakeSessionItemService,private router:Router){}
  ngOnInit() {
  }
  addSession(sessionItem: NgForm):void {
  console.log("Logs...."+JSON.stringify(sessionItem.value));
  this.sessionItemService.add(sessionItem.value);
  this.router.navigate(["/admin/list"]);
  }
  }
