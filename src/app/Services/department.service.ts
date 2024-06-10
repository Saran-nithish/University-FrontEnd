import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../interfaces/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private Url="https://localhost:7107/api";

  constructor(private http: HttpClient) { }

  // Fetch all departments
  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.Url}/Departments`);
  }

  // Add new department
  addDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(`${this.Url}/Departments`, department);
  }

  // Update department
  updateDepartment(department: Department): Observable<Department> {
    return this.http.put<Department>(`${this.Url}/Departments/${department.departmentId}`, department);
  }

  // Delete department
  deleteDepartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/Departments/${id}`);
  }

  // Search department by ID
  getDepartmentById(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.Url}/Departments/${id}`);
  }
}
