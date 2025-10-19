import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export interface RegistrationData {
  // Step 1: Personal Info
  fullName: string;
  email: string;
  phone: string;
  
  // Step 2: Teaching Info
  expertise: string[];
  teachingMethods: string[]; // Changed from single to multiple
  bio: string;
  
  // Step 3: Video (was Step 4)
  introVideo: File | null;
  introVideoUrl: string;
}

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  currentStep = 1;
  totalSteps = 4; // Changed from 5 to 4
  
  // Form data
  formData: RegistrationData = {
    fullName: '',
    email: '',
    phone: '',
    expertise: [],
    teachingMethods: [], // Changed from teachingMethod to teachingMethods array
    bio: '',
    introVideo: null,
    introVideoUrl: ''
  };
  
  // Teaching methods from landing page
  teachingMethodsList = [
    'دورات فيديو مسجلة',
    'جلسات فردية مباشرة',
    'دورات تفاعلية منظمة',
    'تدريب لياقة بدنية شخصي',
    'دروس طبخ تفاعلية',
    'استشارات وتطوير مهني',
    'فنون إبداعية',
    'تعليم لغات'
  ];
  
  // Expertise suggestions
  expertiseSuggestions = [
    'برمجة',
    'تصميم',
    'تسويق',
    'كتابة',
    'ترجمة',
    'محاسبة',
    'قانون',
    'طب',
    'هندسة',
    'تعليم',
    'طبخ',
    'رياضة',
    'فنون',
    'موسيقى',
    'أخرى'
  ];
  
  isSubmitting = false;
  showSuccessMessage = false;
  
  private readonly STORAGE_KEY = 'libyana_hub_registration_draft';
  
  constructor(public router: Router) {}
  
  ngOnInit(): void {
    this.loadDraft();
  }
  
  /**
   * Navigate to next step
   */
  nextStep(): void {
    if (this.validateCurrentStep()) {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
        this.saveDraft();
        this.scrollToTop();
      }
    }
  }
  
  /**
   * Navigate to previous step
   */
  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.scrollToTop();
    }
  }
  
  /**
   * Go to specific step
   */
  goToStep(step: number): void {
    if (step >= 1 && step <= this.totalSteps) {
      this.currentStep = step;
      this.scrollToTop();
    }
  }
  
  /**
   * Validate current step
   */
  validateCurrentStep(): boolean {
    switch (this.currentStep) {
      case 1:
        return this.formData.fullName.trim() !== '' &&
               this.formData.email.trim() !== '' &&
               this.formData.phone.trim() !== '';
      case 2:
        return this.formData.expertise.length > 0 &&
               this.formData.teachingMethods.length > 0 &&
               this.formData.bio.trim() !== '';
      case 3:
        return this.formData.introVideo !== null || this.formData.introVideoUrl !== '';
      case 4:
        return true;
      default:
        return false;
    }
  }
  
  /**
   * Check if step is complete
   */
  isStepComplete(step: number): boolean {
    const currentStepCache = this.currentStep;
    this.currentStep = step;
    const isComplete = this.validateCurrentStep();
    this.currentStep = currentStepCache;
    return isComplete;
  }
  
  /**
   * Handle expertise selection
   */
  toggleExpertise(expertise: string): void {
    const index = this.formData.expertise.indexOf(expertise);
    if (index > -1) {
      this.formData.expertise.splice(index, 1);
    } else {
      this.formData.expertise.push(expertise);
    }
    this.saveDraft();
  }
  
  /**
   * Handle teaching method selection
   */
  toggleTeachingMethod(method: string): void {
    const index = this.formData.teachingMethods.indexOf(method);
    if (index > -1) {
      this.formData.teachingMethods.splice(index, 1);
    } else {
      this.formData.teachingMethods.push(method);
    }
    this.saveDraft();
  }
  
  /**
   * Handle video file selection
   */
  onVideoSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      
      // Basic validation
      if (file.type.startsWith('video/')) {
        this.formData.introVideo = file;
        
        // Create preview URL
        this.formData.introVideoUrl = URL.createObjectURL(file);
        this.saveDraft();
      } else {
        alert('الرجاء اختيار ملف فيديو صالح');
      }
    }
  }
  
  /**
   * Remove selected video
   */
  removeVideo(): void {
    this.formData.introVideo = null;
    this.formData.introVideoUrl = '';
    this.saveDraft();
  }
  
  /**
   * Save draft to localStorage
   */
  saveDraft(): void {
    const draftData = {
      ...this.formData,
      introVideo: null, // Can't store File in localStorage
      currentStep: this.currentStep
    };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(draftData));
  }
  
  /**
   * Load draft from localStorage
   */
  loadDraft(): void {
    const draft = localStorage.getItem(this.STORAGE_KEY);
    if (draft) {
      try {
        const draftData = JSON.parse(draft);
        this.formData = { ...this.formData, ...draftData };
        this.currentStep = draftData.currentStep || 1;
      } catch (e) {
        console.error('Failed to load draft:', e);
      }
    }
  }
  
  /**
   * Clear draft from localStorage
   */
  clearDraft(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
  
  /**
   * Submit registration
   */
  async submitRegistration(): Promise<void> {
    if (!this.validateCurrentStep()) {
      return;
    }
    
    this.isSubmitting = true;
    
    // TODO: Replace with actual API call
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For now, just show success message
    this.isSubmitting = false;
    this.showSuccessMessage = true;
    
    // Clear draft
    this.clearDraft();
    
    // Scroll to top to show success message
    this.scrollToTop();
    
    console.log('Registration data:', this.formData);
    
    // TODO: Send SMS confirmation
    // TODO: Redirect after success or show next steps
  }
  
  /**
   * Scroll to top of page
   */
  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  /**
   * Get progress percentage
   */
  getProgress(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }
}