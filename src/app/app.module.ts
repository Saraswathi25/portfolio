import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AboutModule } from './about/about.module';
import { ExperienceModule } from './experience/experience.module';
import { ProjectComponent } from './project/project/project.component';
import { ContactComponent } from './contact/contact/contact.component';
import { SkillsComponent } from './skills/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectComponent,
    ContactComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    AboutModule,
    ExperienceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
