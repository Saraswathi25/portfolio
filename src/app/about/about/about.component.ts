import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}
  particles = Array.from({ length: 100 });
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
  download() {
    const pdfPath = '../../../assets/Saraswathi_Jagadeesan.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Saraswathi_Jagadeesan.pdf';
    link.target = '_blank';
    link.click();
  }
}
