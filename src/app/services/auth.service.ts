import { Injectable } from '@angular/core';
import { Observable, of, delay, throwError } from 'rxjs';

export interface AuthResponse {
  success: boolean;
  token?: string;
  message?: string;
  expiresAt?: string;
}

export interface AccessCode {
  code: string;
  usageCount: number;
  maxUsage: number;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_TOKEN_KEY = 'libyana_hub_auth_token';
  private readonly TOKEN_EXPIRY_KEY = 'libyana_hub_token_expiry';

  // Mock data - will be replaced with API calls
  private mockAccessCodes: AccessCode[] = [
    { code: '1234', usageCount: 0, maxUsage: 5, isActive: true },
    { code: '5678', usageCount: 3, maxUsage: 5, isActive: true },
    { code: '9999', usageCount: 5, maxUsage: 5, isActive: false }, // Already maxed out
    { code: '0000', usageCount: 1, maxUsage: 5, isActive: true },
  ];

  constructor() {}

  /**
   * Validate access code
   * TODO: Replace with actual API call to backend
   * API endpoint: POST /api/auth/validate-code
   */
  validateCode(code: string): Observable<AuthResponse> {
    // Simulate API delay
    return of(null).pipe(
      delay(800),
      // This is where the actual API call would go:
      // return this.http.post<AuthResponse>('/api/auth/validate-code', { code })
    ).pipe(
      delay(0),
      // Mock validation logic
      () => {
        const accessCode = this.mockAccessCodes.find(ac => ac.code === code);

        if (!accessCode) {
          return throwError(() => ({
            success: false,
            message: 'الكود غير صحيح'
          }));
        }

        if (!accessCode.isActive || accessCode.usageCount >= accessCode.maxUsage) {
          return throwError(() => ({
            success: false,
            message: 'هذا الكود تم استخدامه بالكامل'
          }));
        }

        // Generate mock token (in real app, this comes from backend)
        const mockToken = this.generateMockToken(code);
        const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(); // 24 hours from now

        return of({
          success: true,
          token: mockToken,
          message: 'تم التحقق بنجاح',
          expiresAt: expiresAt
        });
      }
    );
  }

  /**
   * Store authentication token in session storage
   */
  setAuthToken(token: string, expiresAt?: string): void {
    sessionStorage.setItem(this.AUTH_TOKEN_KEY, token);
    if (expiresAt) {
      sessionStorage.setItem(this.TOKEN_EXPIRY_KEY, expiresAt);
    }
  }

  /**
   * Get current auth token
   */
  getAuthToken(): string | null {
    return sessionStorage.getItem(this.AUTH_TOKEN_KEY);
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    const token = this.getAuthToken();
    if (!token) {
      return false;
    }

    // Check token expiry if exists
    const expiryStr = sessionStorage.getItem(this.TOKEN_EXPIRY_KEY);
    if (expiryStr) {
      const expiry = new Date(expiryStr);
      const now = new Date();
      if (now > expiry) {
        this.clearAuth();
        return false;
      }
    }

    return true;
  }

  /**
   * Clear authentication data
   */
  clearAuth(): void {
    sessionStorage.removeItem(this.AUTH_TOKEN_KEY);
    sessionStorage.removeItem(this.TOKEN_EXPIRY_KEY);
  }

  /**
   * Logout user
   */
  logout(): void {
    this.clearAuth();
  }

  /**
   * Generate mock token for development
   * TODO: Remove when backend is integrated
   */
  private generateMockToken(code: string): string {
    const timestamp = Date.now();
    return `mock_token_${code}_${timestamp}`;
  }
}