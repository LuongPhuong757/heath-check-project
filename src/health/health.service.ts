import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  check() {
    return {
      status: 'ok',
      message: 'Service is healthy',
      timestamp: new Date().toISOString(),
    };
  }
}
