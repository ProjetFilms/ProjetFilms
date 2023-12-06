import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.css',
})
export class FilmsListComponent {
  profileForm = this.fb.group({
    Name: ['Drive', [Validators.required, Validators.minLength(4)]],
    Real: [''],
    duree: [''],
    date: [''],
    genre: [''],
  });

  constructor(private fb: FormBuilder) {}
}
