import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-benefits-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits-section.component.html',
  styleUrl: './benefits-section.component.css'
})
export class BenefitsSectionComponent {
  benefits = [
    {
      icon: 'dollar',
      title: 'دخل شهري مستمر',
      description: 'احصل على دخل من طلابك كل شهر',
      gradient: 'from-primary to-secondary'
    },
    {
      icon: 'smartphone',
      title: 'دفع سهل برصيد ليبيانا',
      description: 'طلابك يدفعون برصيد الموبايل مباشرة',
      gradient: 'from-secondary to-primary'
    },
    {
      icon: 'layout',
      title: 'منصة سهلة الاستخدام',
      description: 'سجل فيديوهاتك وابدأ بدون تعقيدات',
      gradient: 'from-primary to-secondary'
    }
  ];
}