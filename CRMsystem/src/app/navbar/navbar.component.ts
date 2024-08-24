import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    const toggleButton = document.getElementById('navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    
    if (toggleButton && menu) {
      toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
      });
    }
  }
}
