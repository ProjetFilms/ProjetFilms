import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.css',
})
export class FilmsListComponent {
  profileForm = this.fb.group({
    Name: ['FightClub', [Validators.required, Validators.minLength(4)]],
    Real: [''],
    duree: [''],
    date: [''],
    genre: [''],
  });
  data: {
    Name: string;
    Real: string;
    duree: string;
    date: string;
    genre: string;
  } = {
    Name: 'FightClub',
    Real: 'David Fincher',
    duree: '2H',
    date: '1999',
    genre: 'thriller',
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm.patchValue(this.data);
  }
}
