import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import xss from 'xss';

@Injectable()
export class SanitizePipe implements PipeTransform {
  transform(value: any) {
    if (typeof value !== 'object' || value === null) {
      throw new BadRequestException('Validation failed: Invalid input type');
    }

    return this.sanitizeObject(value);
  }

  private sanitizeObject(obj: any): any {
    const sanitizedObject = {};
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        sanitizedObject[key] = xss(obj[key].trim());
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        sanitizedObject[key] = this.sanitizeObject(obj[key]);
      } else {
        sanitizedObject[key] = obj[key];
      }
    }
    return sanitizedObject;
  }
}
