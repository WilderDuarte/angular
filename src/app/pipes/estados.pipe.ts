import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estados'
})
export class EstadosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log("Pipes ejecutándose");
    const text = value == false ? 'PENDIENTE' : 'REGISTRADO';
    return text;
  }

}
