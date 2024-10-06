import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/models/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async createProfile(profileData: Partial<Profile>) {
    const profile = this.profileRepository.create(profileData);
    return await this.profileRepository.save(profile);
  }

  async getProfileById(id: number) {
    return await this.profileRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  async updateProfile(id: number, updateData: Partial<Profile>) {
    await this.profileRepository.update(id, updateData);
    return await this.profileRepository.findOne({ where: { id } });
  }

  async deleteProfile(id: number) {
    await this.profileRepository.delete(id);
    return { deleted: true };
  }
}
