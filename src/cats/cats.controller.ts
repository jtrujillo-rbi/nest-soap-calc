import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }
}
