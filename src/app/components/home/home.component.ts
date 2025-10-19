import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { PlatformOverviewComponent } from '../platform-overview/platform-overview.component';
import { BenefitsSectionComponent } from '../benefits-section/benefits-section.component';
import { VideoPreviewComponent } from '../video-preview/video-preview.component';
import { StickyCtaComponent } from '../sticky-cta/sticky-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    PlatformOverviewComponent,
    BenefitsSectionComponent,
    VideoPreviewComponent,
    StickyCtaComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}