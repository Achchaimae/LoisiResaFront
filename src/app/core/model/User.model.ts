export interface User {

    id:string ,
    firstName: '',
    lastName: '',
    email :'',
    address:'', //
    dateOfBirth:Date|string //
    password : '';
    accessionDate : Date |string;
    nationality : string;
    identityDocumentType : ''| 'CIN'|'CARTE_RESIDENCE'|'PASSPORT';
    identityNum :'';
    role : ''| 'admin'|'client'|'guide'|'contact'; 
    conversations :'',
    messages:''
}