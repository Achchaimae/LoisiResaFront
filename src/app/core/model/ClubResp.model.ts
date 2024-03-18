export interface ClubRespDTO {
    id: number;
    name: string;
    location: string;
    phone: number;
    logo: string;
    status: '' | 'Accepted'| 'Rejected' |'Pending';
    activities?: any[]; // Optional properties
    contactList?: any[]; // Optional properties
    guides?: any[]; 
}