// test/test.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Test } from 'src/typeorm/models/test.entity';
import { Repository } from 'typeorm';
import { CreateTestDto } from './dto/test.dto';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private testRepository: Repository<Test>,
  ) {}

  create(createTestDto: CreateTestDto): Promise<Test> {
    const test = this.testRepository.create(createTestDto);
    return this.testRepository.save(test);
  }

  findAll(): Promise<Test[]> {
    return this.testRepository.find();
  }

  findOne(id: number): Promise<Test> {
    return this.testRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.testRepository.delete(id);
  }
}
