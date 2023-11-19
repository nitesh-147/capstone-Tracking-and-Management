import { FormGroup } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const CONTROL = formGroup.controls[controlName];
        const MATCHINGCONTROL = formGroup.controls[matchingControlName];

        if (MATCHINGCONTROL.errors && !MATCHINGCONTROL.errors['mustMatch']) {
            return;
        }

        if (CONTROL.value !== MATCHINGCONTROL.value) {
            MATCHINGCONTROL.setErrors({ mustMatch: true });
        } else {
            MATCHINGCONTROL.setErrors(null);
        }
    }
}