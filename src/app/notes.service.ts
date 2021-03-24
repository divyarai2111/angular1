import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';

@Injectable()
export class NotesService {
  constructor(private httpClient:HttpClient){

  }

  getNotes(): Observable<any> {

    return this.httpClient.get('http://localhost:3000/notes')
  

  }

  addNote(note: Note): Observable<any> {
    return this.httpClient.post('http://localhost:3000/notes',note)


  }

}
