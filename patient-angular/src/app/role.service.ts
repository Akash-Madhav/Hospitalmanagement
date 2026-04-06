import { Injectable } from '@angular/core';
import { roleStorageKey, type Role } from './portal-data';

@Injectable({ providedIn: 'root' })
export class RoleService {
  getRole(): Role | null {
    if (typeof window === 'undefined') {
      return null;
    }

    const storedRole = window.localStorage.getItem(roleStorageKey);
    return storedRole === 'doctor' || storedRole === 'patient' ? storedRole : null;
  }

  setRole(role: Role): void {
    window.localStorage.setItem(roleStorageKey, role);
  }

  clearRole(): void {
    window.localStorage.removeItem(roleStorageKey);
  }
}
