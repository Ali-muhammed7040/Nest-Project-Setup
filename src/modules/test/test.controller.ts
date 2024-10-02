// test/test.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from 'src/typeorm/models/test.entity';
import { CreateTestDto } from './dto/test.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  create(@Body() createTestDto: CreateTestDto): Promise<Test> {
    console.log(createTestDto, 'createTestDto');
    return this.testService.create(createTestDto);
  }

  @Get()
  findAll(): Promise<Test[]> {
    return this.testService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Test> {
    return this.testService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.testService.remove(+id);
  }
}
