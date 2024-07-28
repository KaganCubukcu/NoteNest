import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

    @Post()
    createNote(@Body() createNoteDto: createNoteDto): Note {
        return this.notesService.createNote(createNoteDto);
    }

    @Put(':id')
    updateNote(@Param('id') id: number, @Body() updateNoteDto: createNoteDto): Note {
        return this.notesService.updateNote(id, updateNoteDto);
    }

    @Delete(':id')
    deleteNote(@Param('id') id: number): void {
        this.notesService.deleteNote(id);
    }

}
