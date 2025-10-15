import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-platform-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './platform-overview.component.html',
  styleUrl: './platform-overview.component.css'
})
export class PlatformOverviewComponent {
  categoryImages = [
    'category-1-video-courses.jpg',
    'category-2-live-sessions.jpg',
    'category-3-interactive-courses.jpg',
    'category-4-fitness-training.jpg',
    'category-5-cooking-classes.jpg',
    'category-6-professional-development.jpg',
    'category-7-creative-arts.jpg',
    'category-8-language-teaching.jpg'
  ];

  teachingMethods = [
    {
      title: 'دورات فيديو مسجلة',
      description: 'سجل دوراتك مرة واحدة وبيعها لآلاف الطلاب - محتوى يعمل لك حتى وأنت نائم',
      points: ['سجل مرة، بيع للأبد', 'طلاب غير محدودين', 'سعر: 120-250 د.ل للدورة'],
      imagePosition: 'right',
      gradient: 'from-primary to-secondary'
    },
    {
      title: 'جلسات فردية مباشرة',
      description: 'حصص خاصة مع كل طالب - علاقة شخصية ودخل أعلى لكل ساعة',
      points: ['حصص 30-60 دقيقة', 'جدول مرن تختاره أنت', 'سعر: 30-120 د.ل للجلسة'],
      imagePosition: 'left',
      gradient: 'from-secondary to-primary',
      connectorBefore: 'أو إذا كنت تفضل التفاعل المباشر...'
    },
    {
      title: 'دورات تفاعلية منظمة',
      description: 'دروس مجدولة + واجبات + اختبارات + شهادة - تعليم حقيقي بنتائج مثبتة',
      points: ['دروس تفتح تدريجياً', 'واجبات + تصحيح شخصي', 'سعر: 200-400 د.ل للدورة'],
      imagePosition: 'right',
      gradient: 'from-primary to-secondary',
      connectorBefore: 'أو علّم مع هيكل وواجبات منظمة...'
    },
    {
      title: 'تدريب لياقة بدنية شخصي',
      description: 'برامج تدريب + خطط غذائية + متابعة يومية - كوتش شخصي لكل متدرب',
      points: ['خطط تمارين مخصصة', 'متابعة يومية + تصحيح', 'سعر: 180-450 د.ل شهرياً'],
      imagePosition: 'left',
      gradient: 'from-secondary to-primary',
      connectorBefore: 'أو ابدأ في مجال الصحة واللياقة...'
    },
    {
      title: 'دروس طبخ تفاعلية',
      description: 'وصفات بالفيديو + معلومات شراء محلية + تفاعل مع الطلاب - علّمهم الطبخ بطريقتك',
      points: ['وصفات مع أماكن الشراء بليبيا', 'طلاب يسألون وأنت تجاوب', 'سعر: 150-300 د.ل للدورة'],
      imagePosition: 'right',
      gradient: 'from-primary to-secondary',
      connectorBefore: 'أو شارك وصفاتك ومهاراتك في الطبخ...'
    },
    {
      title: 'استشارات وتطوير مهني',
      description: 'جلسات مهنية فردية - مراجعة سيرة ذاتية، استعداد للمقابلات، تخطيط مسار مهني',
      points: ['جلسات استشارية 60 دقيقة', 'تطوير سيرة ذاتية ولينكد إن', 'سعر: 50-120 د.ل للجلسة'],
      imagePosition: 'left',
      gradient: 'from-secondary to-primary',
      connectorBefore: 'أو ساعد الناس في تطوير مسيرتهم المهنية...'
    },
    {
      title: 'فنون إبداعية ومهارات تصميم',
      description: 'تصوير فوتوغرافي، تصميم جرافيك، رسم، فنون - علّم الإبداع وطور مواهب الطلاب',
      points: ['دروس عملية مع مشاريع', 'مراجعة أعمال الطلاب', 'سعر: 180-400 د.ل للدورة'],
      imagePosition: 'right',
      gradient: 'from-primary to-secondary',
      connectorBefore: 'أو علّم مهارات إبداعية وفنية...'
    },
    {
      title: 'تعليم لغات',
      description: 'إنجليزي، فرنسي، تركي أو أي لغة تتقنها - دروس تفاعلية مع ممارسة المحادثة',
      points: ['دروس محادثة + قواعد', 'تسجيلات صوتية + تصحيح', 'سعر: 200-350 د.ل للدورة'],
      imagePosition: 'left',
      gradient: 'from-secondary to-primary',
      connectorBefore: 'أو علّم لغات جديدة للمتعلمين...'
    }
  ];

  steps = [
    {
      title: 'سجل محتواك',
      subtitle: 'فيديوهات أو جلسات مباشرة',
      icon: 'camera'
    },
    {
      title: 'الطلاب يشتركون',
      subtitle: 'يدفعون شهرياً أو لكل جلسة',
      icon: 'users'
    },
    {
      title: 'احصل على دخلك',
      subtitle: 'تحويل مباشر لحسابك',
      icon: 'wallet'
    }
  ];
}