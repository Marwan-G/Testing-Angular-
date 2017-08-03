import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse'
});
export class ReversPipe {
    transform(value: string) {
        return value.split('').reverse().join('');
    }
}
