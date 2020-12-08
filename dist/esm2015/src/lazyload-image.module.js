import { NgModule } from '@angular/core';
import { LazyLoadImageDirective } from './lazyload-image.directive';
import { IntersectionObserverHooks } from './intersection-observer-hooks/hooks';
import { LAZYLOAD_IMAGE_HOOKS } from './token';
export class LazyLoadImageModule {
}
LazyLoadImageModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LazyLoadImageDirective],
                exports: [LazyLoadImageDirective],
                providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: IntersectionObserverHooks }],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eWxvYWQtaW1hZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLyIsInNvdXJjZXMiOlsic3JjL2xhenlsb2FkLWltYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQU8vQyxNQUFNLE9BQU8sbUJBQW1COzs7WUFML0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDakMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFLENBQUM7YUFDcEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZURpcmVjdGl2ZSB9IGZyb20gJy4vbGF6eWxvYWQtaW1hZ2UuZGlyZWN0aXZlJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9ic2VydmVySG9va3MgfSBmcm9tICcuL2ludGVyc2VjdGlvbi1vYnNlcnZlci1ob29rcy9ob29rcyc7XG5pbXBvcnQgeyBMQVpZTE9BRF9JTUFHRV9IT09LUyB9IGZyb20gJy4vdG9rZW4nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMYXp5TG9hZEltYWdlRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0xhenlMb2FkSW1hZ2VEaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IExBWllMT0FEX0lNQUdFX0hPT0tTLCB1c2VDbGFzczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJIb29rcyB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTGF6eUxvYWRJbWFnZU1vZHVsZSB7fVxuIl19