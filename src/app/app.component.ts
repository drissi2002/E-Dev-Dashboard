import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  nbpart : number =0;
  title='app';
  firstSession ={
    id:1,
    image:"https://i.imgur.com/b0WOmOj.png",
    name:'Formation Web',
    track:'MEAN Stack',
    date: new Date('2022-06-13'),
    duree: 3,
    local :'Lyon',
    participants :0
  };

  /* nbrParticiapantsChange(event){
    this.nbpart = event.value ;
  } */

  /*On déduit que le code du composant SessionItemComponent aura
en @Input nommé session (avec 0 Participants) et un @output nommé participantsChange.
Cela constitue donc la règle du Data Binding 2-way : dans la notation [session], session est le
modèle à modifier et participantsChange est l'évènement lancé lors d'une modification de la
valeur de l’attribut participants (session.participants). Cet évènement sera donc intercepté
par le composant parent AppComponent afin de récupérer cette nouvelle */
}
