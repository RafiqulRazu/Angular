import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeadModel } from '../model/lead.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  private apiUrl = 'http://localhost:8089/api/lead'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  // Get all leads
  getLeads(): Observable<LeadModel[]> {
    return this.http.get<LeadModel[]>(`${this.apiUrl}/`);
  }

  // Get a single lead by ID
  getLeadById(id: number): Observable<LeadModel> {
    return this.http.get<LeadModel>(`${this.apiUrl}/${id}`);
  }

  // Create a new lead
  createLead(lead: LeadModel): Observable<LeadModel> {
    return this.http.post<LeadModel>(`${this.apiUrl}/save`, lead);
  }

  // Update an existing lead
  updateLead(lead: LeadModel): Observable<LeadModel> {
    return this.http.put<LeadModel>(`${this.apiUrl}/update/${lead.id}`, lead);
  }

  // Delete a lead
  deleteLead(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
