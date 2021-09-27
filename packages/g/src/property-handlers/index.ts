/** handle props in keyframe */
import type { IElement } from '../dom';
import { SceneGraphService } from '../services';

export const StylePropertyParser = 'StylePropertyParser';
export type StylePropertyParser<Original, Parsed> = (
  value: Original,
  displayObject: IElement | null,
) => Parsed;
export const StylePropertyParserFactory = 'StylePropertyParserFactory';
export type StylePropertyParserFactory = <Original, Parsed>(
  name: string,
) => StylePropertyParser<Original, Parsed>;
export interface ParsedStyleProperty<T, V, Formatted = string> {
  type: T;
  value: V;
  formatted: Formatted;
}
export type Interpolatable = number | boolean | number[] | boolean[];

export const StylePropertyUpdater = 'StylePropertyUpdater';
export type StylePropertyUpdater<Original> = (
  oldValue: Original,
  newValue: Original,
  displayObject: IElement,
  sceneGraphService: SceneGraphService,
) => void;
export const StylePropertyUpdaterFactory = 'StylePropertyUpdaterFactory';
export type StylePropertyUpdaterFactory = <Original>(
  name: string,
) => StylePropertyUpdater<Original>;

export const StylePropertyMerger = 'StylePropertyMerger';
export type StylePropertyMerger<Parsed, T extends Interpolatable = number> = (
  left: Parsed,
  right: Parsed,
  displayObject: IElement | null,
) => [T, T, (i: T) => string] | undefined;
export const StylePropertyMergerFactory = 'StylePropertyMergerFactory';
export type StylePropertyMergerFactory = <Parsed>(name: string) => StylePropertyMerger<Parsed>;

export * from './anchor';
export * from './aabb';
export * from './localPosition';
export * from './numeric';
export * from './color';
export * from './offsetPath';
export * from './offsetDistance';
export * from './clipPath';
export * from './zIndex';
export * from './origin';
export * from './transform';
export * from './dimension';
export * from './path';
export * from './points';
export * from './filter';
