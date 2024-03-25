import { ActivityRespDTO } from "./ActivityRespDTO.model";
import { ClientRespDTO } from "./ClientRespDTO.model";

export interface ReservationIdRespDTO{
    reservationId(reservationId: any): unknown;
    client: ClientRespDTO;
    activity: ActivityRespDTO;
}