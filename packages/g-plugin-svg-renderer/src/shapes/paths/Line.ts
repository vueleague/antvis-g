import { LineStyleProps } from '@antv/g';
import { ElementRenderer } from '.';
import { injectable } from 'inversify';

@injectable()
export class LineRenderer implements ElementRenderer<LineStyleProps> {
  apply($el: SVGElement, attributes: LineStyleProps) {
    const { x1, y1, x2, y2, x = 0, y = 0 } = attributes;

    $el.setAttribute('x1', `${x1 - x}`);
    $el.setAttribute('y1', `${y1 - y}`);
    $el.setAttribute('x2', `${x2 - x}`);
    $el.setAttribute('y2', `${y2 - y}`);
  }
}