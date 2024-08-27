import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interaction } from '../model/Interaction.model';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  baseUrl: string = "http://localhost:3000/interaction";

  constructor(private http: HttpClient) { }


  viewAllInteraction(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createInteraction(interaction: Interaction): Observable<Interaction> {
    return this.http.post<Interaction>(this.baseUrl, interaction);
  }

  updateInteraction(interaction: Interaction): Observable<Interaction> {
    return this.http.put<Interaction>(`${this.baseUrl}${interaction.id}`, interaction);
  }

  deleteInteraction(interactionId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${interactionId}`);
    //return this.http.delete<void>(this.baseUrl+studentId);
  }

  getInteractionById(interactionId: string): Observable<Interaction> {
    // const url = `${this.baseUrl}/${interactionId}`;
    return this.http.get<Interaction>(`${this.baseUrl}${interactionId}`);
  }
  
}
