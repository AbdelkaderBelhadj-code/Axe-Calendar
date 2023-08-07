import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';

@Injectable({
  providedIn: 'root'
})
export class TeammemberService {
  private baseUrl = 'http://localhost:8082/BBLMVC';

  constructor(private http: HttpClient) { }

  getAllTeamMembers(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/team/findAll`);
  }

  addTeamMember(employee: Employee): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/team/addteamM`, employee);
  }  

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/team/DisplayTeam/${id}`);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/team/delete/${id}`);
  }
}