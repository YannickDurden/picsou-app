export interface Depense {
  id?: number;
  libelle: string;
  cout: number;
  categorie: string;
}

export interface Depenses {
  depense: Depense[];
}
