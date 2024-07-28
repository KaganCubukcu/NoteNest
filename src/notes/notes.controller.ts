import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { Note } from './interfaces/note.interface';

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) {}

    @Get()
    findAll(): Note[] {
     return this.notesService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: string): Note {
        return this.notesService.findOne(id);
    }

    @Post()
    create(@Body() createNoteDto: CreateNoteDto): Note {
        return this.notesService.create(createNoteDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateNoteDto: CreateNoteDto): Note {
        return this.notesService.update(id, updateNoteDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): void {
        this.notesService.remove(id);
    }

}
