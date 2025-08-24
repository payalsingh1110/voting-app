import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from './poll.models';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  private BASE_URL = "http://localhost:8080/api/polls"

  constructor(private http : HttpClient) { }

  createPoll(poll : Poll): Observable<Poll>{
    return this.http.post<Poll>(this.BASE_URL, poll);    
  }

  getPolls(): Observable<Poll[]>{
    return this.http.get<Poll[]>(this.BASE_URL);    
  }

  vote(pollId :  number, optionIndex: number): Observable<void>{
    const url = `${this.BASE_URL}/vote`;
    return this.http.post<void>(url, { pollId, optionIndex});    
  }
}
