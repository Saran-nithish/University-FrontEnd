import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-academic-programs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './academic-programs.component.html',
  styleUrl: './academic-programs.component.css'
})
export class AcademicProgramsComponent {
  constructor(private userService: UserService, private router: Router) { }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
