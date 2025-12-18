import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(private supabaseService: SupabaseService, private router: Router) {}

  async signOut() {
    await this.supabaseService.signOut();
    this.router.navigate(['/']);
  }
}
