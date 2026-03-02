export interface Player {
  id: number;
  nombre: string;
  apellidos: string;
  posicion: 'Base' | 'Escolta' | 'Alero' | 'Ala-Pívot' | 'Pívot';
  edad: number;
  altura: string;
  fotoUrl?: string;
  videoUrl?: string;
  descripcion?: string;
}
