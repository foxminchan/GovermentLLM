import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common';
import { from, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@nestjs/common';
import { CacheService } from '../../frameworks';

@Injectable()
export class ClearCacheInterceptor implements NestInterceptor {
  constructor(private readonly cacheService: CacheService) {}

  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse();
        const request = context.switchToHttp().getRequest();

        if (
          request.method !== 'GET' &&
          response.statusCode >= 200 &&
          response.statusCode < 300
        )
          return from(this.cacheService.resetCache());

        return of();
      })
    );
  }
}
