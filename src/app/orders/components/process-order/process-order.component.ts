import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {Subscription} from 'rxjs';

import {CustomValidators} from '../../validators/custom.validators';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit, OnDestroy {
  orderForm: FormGroup;
  validationMessage: string;

  private sub: Subscription;
  private validationMessagesMap = {
    email: {
      required: 'Please enter your email address.',
      email: 'Please enter a valid email address.',
    }
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
    this.watchValueChanges();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
  }

  onBlur() {
    const emailControl = this.orderForm.get('emailGroup.email');
    this.setValidationMessage(emailControl, 'email');
  }

  onAddPhone(): void {
    this.phones.push(this.buildPhone());
  }

  onRemovePhone(idx: number): void {
    this.phones.removeAt(idx);
  }

  get phones(): FormArray {
    return this.orderForm.get('phones') as FormArray;
  }

  private watchValueChanges() {
    this.sub = this.orderForm.get('sendProducts').valueChanges
      .subscribe(value => {
        if (value) {
          this.orderForm.addControl('address', this.buildAddress());
        } else {
          this.orderForm.removeControl('address');
        }
      });

    const emailControl = this.orderForm.get('emailGroup.email');
    const sub = emailControl.valueChanges
      .pipe(
        debounceTime(1000),
      ).subscribe(() =>
      this.setValidationMessage(emailControl, 'email')
    );
    this.sub.add(sub);
  }

  private setValidationMessage(c: AbstractControl, controlName: string) {
    this.validationMessage = '';

    if ((c.touched || c.dirty) && c.errors) {
      this.validationMessage = Object.keys(c.errors)
        .map(key => this.validationMessagesMap[controlName][key])
        .join(' ');
    }
  }

  private buildForm(): void {
    this.orderForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required]],
      }, {validator: CustomValidators.emailMatcher}),
      sendProducts: false,
      phones: this.fb.array([this.buildPhone()]),
    });
  }

  private buildPhone(): FormControl {
    return this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[0-9]*$'),
    ]);
  }

  private buildAddress(): FormControl {
    return this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
    ]);
  }

}
