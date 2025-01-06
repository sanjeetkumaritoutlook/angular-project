import { CanActivateFn,Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
