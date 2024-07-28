import { Controller, Get, Param } from '@nestjs/common';
import { Note, NotesService } from './notes.service';

interface createNoteDto {
    title: string;
    content: string;
}

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) {}

    @Get()
    getNotes(): Note[] {
     return this.notesService.getNotes();
    }
    
    @Get(':id')
    getNote(@Param('id') id: number): Note {
        return this.notesService.getNote(id);
    }

}
