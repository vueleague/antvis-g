import { containerModule as ecsModule, World, Component } from '@antv/g-ecs';
import * as ManaSyringe from 'mana-syringe';
import { containerModule as globalModule, globalContainer } from './global-module';
import { Sortable, Cullable, Geometry, Renderable, Transform } from './components';

export { ManaSyringe, Component };

// bind ECS
globalContainer.load(ecsModule);
globalContainer.load(globalModule);

// register components & systems
const world = globalContainer.get<World>(World);
world
  .registerComponent(Transform)
  .registerComponent(Sortable)
  .registerComponent(Cullable)
  .registerComponent(Geometry)
  .registerComponent(Renderable);

export { world };
export * from './types';
export * from './components';
export * from './dom';
export * from './AbstractRenderer';
export * from './Canvas';
export * from './DisplayObjectPool';
export * from './camera';
export * from './services';
export * from './shapes';
export * from './utils';
export * from './property-handlers';
export * from './display-objects';
export * from './global-module';