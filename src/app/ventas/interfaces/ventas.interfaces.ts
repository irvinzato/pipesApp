
export enum Cultura {
    maya, china, griega, nordica
}

export interface Dios {
    nombre: string;
    ofensivo: boolean;
    cultura: Cultura;
}