import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {

  @Input() session: any;

/*Grâce au décorateur @Input, le template de SessionItemComponent affiche session sans problème. Il faut importer la classe Input.*/ 
  @Output() participantsChange = new EventEmitter<any>();
  constructor() { }

  inscrire(){
    //this.session.name='Formation Web'
    console.log('Nouvelle Inscription ..');
    this.session.participants = + this.session.participants + 1;
    console.log(this.session.participants +'participants');
    this.participantsChange.emit({
      value :this.session.participants
    });
    if(this.session.participants >=20){
      this.session.isCompleted=true;
    }
  }
  /*On s’intéresse au Data Binding (technique Event Binding). Le clic sur le
lien Inscription permet d’appeler la méthode inscrire() qui modifiera la
propriété name par la chaine « Formation Web Avancé » en affichant le message
« Nouvelle Inscription sur le console ».*/ 

/*Avec ce mécanisme, vous pouvez être averti des évènements utilisateurs tels que le click, la
frappe sur le clavier, le touch, etc.
Par exemple, le clic sur le lien Inscription permet d’appeler la méthode inscrire() qui
modifiera la propriété name. On aura donc une interaction dans le DOM qui modifiera le
modèle. */
  ngOnInit(): void {
  }

}
