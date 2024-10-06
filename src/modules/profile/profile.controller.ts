import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from 'src/typeorm/models/profile.entity';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  async createProfile(@Body() profileData: Partial<Profile>) {
    return await this.profileService.createProfile(profileData);
  }

  @Get(':id')
  async getProfileById(@Param('id') id: number) {
    return await this.profileService.getProfileById(id);
  }

  @Put(':id')
  async updateProfile(
    @Param('id') id: number,
    @Body() updateData: Partial<Profile>,
  ) {
    return await this.profileService.updateProfile(id, updateData);
  }

  @Delete(':id')
  async deleteProfile(@Param('id') id: number) {
    return await this.profileService.deleteProfile(id);
  }
}
