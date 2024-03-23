import { ActivityRespDTO } from "./ActivityRespDTO.model";
import { ClientRespDTO } from "./ClientRespDTO.model";

export interface ReservationIdRespDTO{
    client: ClientRespDTO;
    activity: ActivityRespDTO;
}