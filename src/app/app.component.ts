import { Component,HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.reveal');
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement;
      const position = element.getBoundingClientRect();

      // checking for partial visibility
      if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('active');
      }
    }
  }
}
