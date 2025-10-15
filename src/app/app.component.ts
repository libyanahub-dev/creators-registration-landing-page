import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { PlatformOverviewComponent } from './components/platform-overview/platform-overview.component';
import { BenefitsSectionComponent } from './components/benefits-section/benefits-section.component';
import { VideoPreviewComponent } from './components/video-preview/video-preview.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroSectionComponent,
    PlatformOverviewComponent,
    BenefitsSectionComponent,
    VideoPreviewComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'creators-registration-landing-page';
}