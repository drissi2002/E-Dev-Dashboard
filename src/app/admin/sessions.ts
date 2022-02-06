import { Session } from '../session';

//fichier pour stocker toutes les sessions 
export const SESSIONITEMS: Session[] = [
    {
    id: 1,
    image :"https://i.imgur.com/b0WOmOj.png",
    name: 'Web',
    track: 'AngularJS',
    date: new Date('2022-06-13'),
    duree: 3,
    adress: "Lyon",
    participants: 0,
    isCompleted: false
    },
    {
    id: 2,
    image :"https://i.imgur.com/PG0smQM.png",
    name: 'Mobile',
    track: 'Flutter',
    date: new Date('2022-08-10'),
    duree: 5,
    adress: 'Paris',
    participants: 0,
    isCompleted: false

    },
    {
    id: 3,
    image :"https://i.imgur.com/VMLpDam.png",
    name: 'Web',
    track: 'ReactJS',
    date: new Date('2022/07/20'),
    duree: 5,
    adress: 'Lyon',
    participants: 0,
    isCompleted: false
    },
    {
      id: 4,
      image :"https://i.imgur.com/hBSTyjQ.png",
      name: 'Mobile',
      track: 'Ionic',
      date: new Date('2022-11/20'),
      duree: 4,
      adress: 'Tunis',
      participants: 0,
      isCompleted: false
      }
    ];