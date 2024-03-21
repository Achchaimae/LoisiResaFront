import { ClubRespDTO } from "./ClubResp.model";
import { GuideReqDTO } from "./GuideReqDTO.model";
import { MediaReqDto } from "./MediaReqDTO.model";

export interface ActivityRespDTO{
    id: number;
    mediaList: MediaReqDto[];
    name: string;
    tariff: number;
    rating?: number;
    tag:string;
    guideList: GuideReqDTO[];
    reservations: any[];
    club: ClubRespDTO;
}
