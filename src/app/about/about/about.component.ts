import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onMouseMove(event: MouseEvent): void {
    const imgElement = event.target as HTMLImageElement;
    const rect = imgElement.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

    const moveX = offsetX * 20; // Adjust intensity
    const moveY = offsetY * 20; // Adjust intensity

    imgElement.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
  }

  onMouseLeave(): void {
    const imgElement = document.querySelector(
      '.image-container img'
    ) as HTMLImageElement;
    if (imgElement) {
      imgElement.style.transform = 'translate(0, 0) scale(1)';
    }
  }
}
