import { ActivatedRoute as route, CanActivateFn } from '@angular/router';

export const hasRoleGuard: CanActivateFn = (route, state) => {
  let username: string = route.paramMap.get('username') || '';
  let localUsername: string = localStorage.getItem('username') || '';
  if (isLoggedIn() && username === localUsername) {
    return true;
  } else {
    alert('Access Denied');
    return false;
  }
};

function isLoggedIn(): boolean {
  const username: string | null = localStorage.getItem('username');
  const userid:string|null = localStorage.getItem('userId');
  const role:string|null =localStorage.getItem('role');
  if (username && userid && role==='User') return true;
  return false;
}
