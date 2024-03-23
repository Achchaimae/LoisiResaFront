import { ReservationIdReqDTO } from "./ReservationIdReq.model";

export interface ReservationReqDTO{
    id: ReservationIdReqDTO;
    date: Date | string;
    nbrPerson: number;
    etat :''| 'ANUULE' |'CONFIRME'|'PENDING';
}