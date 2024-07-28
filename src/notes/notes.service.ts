import { Injectable, NotFoundException } from '@nestjs/common';
import { seedNotes } from './seedData/seedNotes';
import { Note } from './interfaces/note.interface';

@Injectable()
export class NotesService {
    private notes: Note[] = [];

    constructor() {
        this.initializeSeedData();
    }

    private initializeSeedData(): void {
        seedNotes.forEach((note) => {
            this.create(note);
        });
    }

    findAll(): Note[] {
        return this.notes
    }

    findOne(id: string): Note {
        const note = this.notes.find((note) => note.id === id);
        if (!note) {
         throw new NotFoundException('Note not found');
        }
        return note;
     }

    create(note: Omit<Note, 'id'>): Note {
        const newNote = { ...note, id: crypto.randomUUID() };
        this.notes.push(newNote);
        return newNote;
    }

    update(id: string, note: Omit<Note, 'id'>): Note {
        const noteIndex = this.notes.findIndex((note) => note.id === id);
        if (noteIndex === -1) {
            throw new Error('Note not found');
        }
        this.notes[noteIndex] = { ...note, id };
        return this.notes[noteIndex];
    }

    remove(id: string): void {
        this.notes = this.notes.filter((note) => note.id !== id);
    }

}
