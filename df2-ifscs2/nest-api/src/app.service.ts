import { Injectable } from '@nestjs/common';
import { Route } from './types';

@Injectable()
export class AppService {
  createRoute(title: string): Route {
    return {
      title: title,
      startPosition: {
        latitude: Math.random() * 100000,
        longitude: Math.random() * 100000,
      },
      endPosition: {
        latitude: Math.random() * 100000,
        longitude: Math.random() * 100000,
      },
    };
  }

  getRoutes(): Route[] {
    return Array(5)
      .fill(null)
      .map((_, idx) => this.createRoute(`Route ${idx + 1}`));
  }
}
