export interface User {

    id:string ,
    firstName: '',
    lastName: '',
    email :'',
    address:'',
    dateOfBirth:Date
    password : '';
    accessionDate : Date |null;
    nationality : string;
    identityDocumentType : ''| 'CIN'|'CARTE_RESIDENCE'|'PASSPORT';
    identityNum :'';
    role : ''| 'admin'|'client'|'guide'|'contact'; 
    conversations :'',
    messages:''}