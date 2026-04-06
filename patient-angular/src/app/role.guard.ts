import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RoleService } from './role.service';
import type { Role } from './portal-data';

export const roleGuard: CanActivateFn = (route) => {
  const requestedRole = route.paramMap.get('role') as Role | null;
  const router = inject(Router);
  const roleService = inject(RoleService);

  if (requestedRole !== 'doctor' && requestedRole !== 'patient') {
    return router.createUrlTree(['/']);
  }

  const storedRole = roleService.getRole();
  return storedRole === requestedRole ? true : router.createUrlTree(['/']);
};
