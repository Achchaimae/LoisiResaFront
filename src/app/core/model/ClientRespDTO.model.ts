import { ReservationReqDTO } from "./ReservationReqDTO.model";

export interface ClientRespDTO{
  id: number,
  firstName: '',
  lastName: '',
  dateOfBirth: Date|string,
  address: '',
  password: '',
  email: '',
  identityDocumentType:  ''| 'CIN'|'CARTE_RESIDENCE'|'PASSPORT',
  identityNum: '',
  role:  ''| 'admin'|'client'|'guide'|'contact',
  requestedRole:  ''| 'admin'|'client'|'guide'|'contact',
  requestStatus: number,
  conversations: [],
  messages: []
  dateOfSubscription:Date |string;
  reservations: ReservationReqDTO[];
}