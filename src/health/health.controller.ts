import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('health')
@Controller('health')
export class HealthController {
  @Get()
  @ApiOperation({ summary: 'Check service health' })
  @ApiResponse({ 
    status: 200, 
    description: 'Service is healthy',
    schema: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'ok' },
        message: { type: 'string', example: 'Service is healthy' },
        timestamp: { type: 'string', example: '2024-03-21T10:00:00.000Z' }
      }
    }
  })
  check() {
    return {
      status: 'ok',
      message: 'Service is healthy',
      timestamp: new Date().toISOString()
    };
  }
} 