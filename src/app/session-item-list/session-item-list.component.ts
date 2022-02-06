import { Component, Directive, HostBinding, Input, OnInit } from '@angular/core';
@Component({
selector: 'app-session-item-list',
templateUrl: './session-item-list.component.html',
styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {


sessionItems = [
{
id: 1,
image:"https://i.imgur.com/b0WOmOj.png",
name: 'Web',
track: 'AngularJS',
date: new Date('2022-06-13'),
duree: 3,
local: 'Lyon',
participants: 0,
isCompleted : false
},
{
id: 2,
image:"https://i.imgur.com/PG0smQM.png",
name: 'Mobile',
track: 'Flutter',
date:  new Date('2022-10-17'),
duree: 5,
local: 'Paris',
participants: 0,
isCompleted : false
},
{
id: 3,
image:"https://i.imgur.com/VMLpDam.png",
name: 'Web',
track: 'ReactJS',
date: new Date('2022-04-10'),
duree: 5,
local: 'Lyon',
participants: 0,
isCompleted : false
}
];



constructor() { }
ngOnInit() {}
} 
/*on s’intéresse à la création d’une nouvelle directive. On voudrait
désactiver le lien « Inscription » une fois on atteint les 20 participants */
@Directive({
    selector: '[appInscriptionDisabled]'
    })
    export class InscriptionDisabledDirective {
    @HostBinding('class.link-is-disabled') status: boolean | undefined;
    @Input()
    set appInscriptionDisabled(value: boolean) {
    this.status = value;
    }
    constructor() { }
/*
-Angular propose l’annotation @HostBinding qui permet de définir la classe CSS qu’on doit
utiliser dans l’élément DOM (template HTML) d’un composant.
Pour définir la classe CSS, on utilise l'annotation @HostBinding (‘class. link-is-disabled') sur
une propriété booléenne de la Directive (status). La valeur de status détermine si la classe
CSS est définie ou non. Si la valeur de status retournée est vraie, la classe sera appliquée à
l'élément DOM du composant.

-Angular propose aussi le décorateur (annotation) @HostListener permettant à une directive
de réagir aux évènements (par exemple lorsque le pointeur de la souris est sur/quitte
l'élément). Le décorateur @HostListener permet de positionner des Listners sur l'élément. Il
prend en paramètre l'évènement que l'on veut écouter.
*/
   
    }
