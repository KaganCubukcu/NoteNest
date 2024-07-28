import { Injectable, NotFoundException } from '@nestjs/common';
import { seedNotes } from './seedData/seedNotes';

export interface Note {
    id: number;
    title: string;
    content: string;
}

@Injectable()
export class NotesService {
    private notes: Note[] = [];
    private idCounter = 1;

    constructor() {
        this.initializeSeedData();
    }

    private initializeSeedData(): void {
        seedNotes.forEach((note) => {
            this.createNote(note);
        });
    }

    getNotes(): Note[] {
        return this.notes;
    }

    getNote(id: number): Note {
        const note = this.notes.find((note) => note.id === id);
        if (!note) {
         throw new NotFoundException('Note not found');
        }
        return note;
     }

    createNote(note: Omit<Note, 'id'>): Note {
        const newNote = { ...note, id: this.idCounter++ };
        this.notes.push(newNote);
        return newNote;
    }

    updateNote(id: number, note: Omit<Note, 'id'>): Note {
        const noteIndex = this.notes.findIndex((note) => note.id === id);
        if (noteIndex === -1) {
            throw new Error('Note not found');
        }
        this.notes[noteIndex] = { ...note, id };
        return this.notes[noteIndex];
    }

    deleteNote(id: number): void {
        this.notes = this.notes.filter((note) => note.id !== id);
    }

}
