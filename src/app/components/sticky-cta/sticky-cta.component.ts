import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sticky-cta',
  standalone: true,
  imports: [],
  templateUrl: './sticky-cta.component.html',
  styleUrl: './sticky-cta.component.css'
})
export class StickyCtaComponent {
  
  constructor(private router: Router) {}

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}