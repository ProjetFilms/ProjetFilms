import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Film } from '../films.model';

@Component({
 selector: 'app-film-form',
 templateUrl: './film-list.component.html',
 styleUrls: ['./film-list.component.css']
})
export class FilmsListComponent {

    @Input()
    model: Film | null = null;
    @Output()
    emitFilm: EventEmitter<Film> = new EventEmitter<Film>();

    filmform = this.fb.group({
    titre: this.fb.control('', [Validators.required]),
    realisateur: this.fb.control(0),
    }, { updateOn: 'submit' });
    submitted = false;
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
    this.submitted = false;
 
    if (this.model === null) {
    this.model = new Film();
    } else {
    this.filmform.patchValue(this.model);
    }
    }
    onSubmit() {
    
    this.submitted = true;
    if (this.filmform.valid) {
    this.model = {...this.model!, ...this.filmform.value };
        this.emitFilm.emit(this.model!);
    }
    }
    resetForm() {
    if (this.model !== null) {
    this.filmform.patchValue(this.model);
    }
    }
}

