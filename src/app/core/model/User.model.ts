export interface User {

    id:string ,
    firstName: '',
    lastName: '',
    dateOfBirth:Date|string 
    address:'', 
    email :'',
    identityDocumentType : ''| 'CIN'|'CARTE_RESIDENCE'|'PASSPORT';
    identityNum :'';
    password : '';
    accessionDate : Date |string;
    nationality : string;
    role : ''| 'admin'|'client'|'guide'|'contact'; 
    requestedRole:''| 'admin'|'client'|'guide'|'contact';
    requestStatus : number,
    conversations: []; // Adjust the type as per the actual data structure
    messages: []; 
}
