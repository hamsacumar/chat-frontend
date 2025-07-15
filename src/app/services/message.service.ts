import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private apiUrl = 'http://localhost:5104/api/message';

  constructor(private http: HttpClient) { }

  getMessage(): Observable<Message[]>{
    return this.http.get<Message[]>(this.apiUrl);
  }

  sendMessage(message: Message): Observable<Message>{
    return this.http.post<Message>(this.apiUrl, message);
  }

}
