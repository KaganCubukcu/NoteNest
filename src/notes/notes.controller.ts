import { Controller } from '@nestjs/common';
import { NotesService } from './notes.service';

interface createNoteDto {
    title: string;
    content: string;
}

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) {}
}
