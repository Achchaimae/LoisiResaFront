import { ReservationIdRespDTO } from "./ReservationIdResp.model";

export interface ReservationRespDTO{
    id: ReservationIdRespDTO;
  date: Date | string;
  nbrPerson: number;
  etat :''| 'ANUULE' |'CONFIRME';
}