import { MediaReqDto } from "./MediaReqDTO.model";

export interface ActivityReqDTO{
    id:number,
    mediaList:MediaReqDto[];
    name:string;
    tariff:number;
    rating:number;
    club_id:number;
    tag:''|'riding';
    
}
