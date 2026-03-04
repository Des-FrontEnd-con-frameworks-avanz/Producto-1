import { Player } from "@shared/models/player.model";
//import { Player } from "../models/player.model";


export const PLAYERS_DATA: Player[] = [
  {
    id: 1,
    nombre: 'Stephen',
    apellidos: 'Curry',
    posicion: 'Base',
    edad: 37,
    altura: '1.88m',
    peso: '83 kg',
    experiencia: '16° Temporadas',
    precio: 59606817,
    fotoUrl: 'images/curry.png',
    videoUrl: 'assets/videos/curry-highlights.mp4',
    posterUrl: 'assets/videos/poster/curry.webp',
    descripcion: 'Considerado el mejor tirador de la historia. Líder de los Warriors.'
  },
  {
    id: 2,
    nombre: 'Lebron',
    apellidos: 'James',
    posicion: 'Alero',
    edad: 41,
    altura: '2.06m',
    peso: '113 kg',
    experiencia: '22° Temporadas',
    precio: 52627153,
    fotoUrl: 'images/lebron.png',
    videoUrl: 'assets/videos/lebron-highlights.mp4',
    posterUrl: 'assets/videos/poster/lebron.webp',
    descripcion: 'Máximo anotador histórico de la NBA y 4 veces campeón.'
  },
  {
    id: 3,
    nombre: 'Giannis',
    apellidos: 'Antetokounmpo',
    posicion: 'Ala-Pívot',
    edad: 29,
    altura: '2.11m',
    peso: '110 kg',
    experiencia: '12° Temporadas',
    precio: 54126450,
    fotoUrl: 'images/giannis.png',
    videoUrl: 'assets/videos/giannis-highlights.mp4',
    posterUrl: 'assets/videos/poster/giannis.webp',
    descripcion: 'Dominio físico total y MVP de las finales de 2021.'
  },
  {
    id: 4,
    nombre: 'Luka',
    apellidos: 'Dončić',
    posicion: 'Base',
    edad: 24,
    altura: '2.01m',
    peso: '104 kg',
    experiencia: '7° Temporadas',
    precio: 54123450,
    fotoUrl: 'images/luka.png',
    videoUrl: 'assets/videos/luka-highlights.mp4',
    posterUrl: 'assets/videos/poster/luka.webp',
    descripcion: 'Genio esloveno con una visión de juego inigualable.'
  },
  {
    id: 5,
    nombre: 'Nikola',
    apellidos: 'Jokić',
    posicion: 'Pívot',
    edad: 28,
    altura: '2.11m',
    peso: '128 kg',
    experiencia: '10° Temporadas',
    precio: 55224526,
    fotoUrl: 'images/jokic.png',
    videoUrl: 'assets/videos/jokic-highlights.mp4',
    posterUrl: 'assets/videos/poster/jokic.webp',
    descripcion: 'El "Joker". Un pívot con alma de base y doble MVP.'
  }
];
