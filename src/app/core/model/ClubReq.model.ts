export interface ClubReqDTO {
    id: number;
    name: string;
    location: string;
    phone: string;
    logo: string;
    status: ''| 'Accepted'| 'Rejected' |'Pending', 
  }
  