import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  download() {
    const pdfPath = '../../../assets/Saraswathi_Jagadeesan.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Saraswathi_Jagadeesan.pdf';
    link.target = '_blank';
    link.click();
  }
}
