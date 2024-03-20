import { ContactReqDTO } from "./ContactReqDTO.model";
import { GuideRespDTO } from "./GuideRespDTO.model";

export interface ClubRespDTO {
    id: number;
    name: string;
    location: string;
    phone: number;
    logo: string;
    status: '' | 'Accepted'| 'Rejected' |'Pending';
    owner: ContactReqDTO;
    activities?: any[]; // Optional properties
    guides: GuideRespDTO[]; 
}