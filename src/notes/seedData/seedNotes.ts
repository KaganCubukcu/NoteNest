import { Note } from "../interfaces/note.interface";

export const seedNotes: Omit<Note, "id">[] = [
    { title: 'First Note', content: 'This is the content of the first note.' },
    { title: 'Second Note', content: 'This is the content of the second note.' },
    { title: 'Third Note', content: 'This is the content of the third note.' }
];