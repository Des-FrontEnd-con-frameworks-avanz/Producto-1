import { Player } from "@shared/models/player.model";
//import { Player } from "../models/player.model";


export const PLAYERS_DATA: Player[] = [
  {
    id: 1,
    nombre: 'Stephen',
    apellidos: 'Curry',
    posicion: 'Base',
    edad: 35,
    altura: '1.88m',
    fotoUrl: 'assets/images/curry.jpg',
    videoUrl: 'assets/videos/curry-highlights.mp4',
    descripcion: 'Considerado el mejor tirador de la historia. Líder de los Warriors.'
  },
  {
    id: 2,
    nombre: 'LeBron',
    apellidos: 'James',
    posicion: 'Alero',
    edad: 39,
    altura: '2.06m',
    fotoUrl: 'assets/images/lebron.jpg',
    videoUrl: 'assets/videos/lebron-highlights.mp4',
    descripcion: 'Máximo anotador histórico de la NBA y 4 veces campeón.'
  },
  {
    id: 3,
    nombre: 'Giannis',
    apellidos: 'Antetokounmpo',
    posicion: 'Ala-Pívot',
    edad: 29,
    altura: '2.11m',
    fotoUrl: 'assets/images/giannis.jpg',
    videoUrl: 'assets/videos/giannis-highlights.mp4',
    descripcion: 'Dominio físico total y MVP de las finales de 2021.'
  },
  {
    id: 4,
    nombre: 'Luka',
    apellidos: 'Dončić',
    posicion: 'Base',
    edad: 24,
    altura: '2.01m',
    fotoUrl: 'assets/images/luka.jpg',
    videoUrl: 'assets/videos/luka-highlights.mp4',
    descripcion: 'Genio esloveno con una visión de juego inigualable.'
  },
  {
    id: 5,
    nombre: 'Nikola',
    apellidos: 'Jokić',
    posicion: 'Pívot',
    edad: 28,
    altura: '2.11m',
    fotoUrl: 'assets/images/jokic.jpg',
    videoUrl: 'assets/videos/jokic-highlights.mp4',
    descripcion: 'El "Joker". Un pívot con alma de base y doble MVP.'
  }
];
