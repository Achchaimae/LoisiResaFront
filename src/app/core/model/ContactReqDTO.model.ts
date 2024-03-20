export interface ContactReqDTO { 
  id: string,
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
 firstDateContact:Date|String;
}