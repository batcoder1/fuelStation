import {DefaultCrudRepository} from '@loopback/repository';
import {Pump} from '../models';
import {FuelstationDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PumpRepository extends DefaultCrudRepository<
  Pump,
  typeof Pump.prototype.id
> {
  constructor(
    @inject('datasources.fuelstation') dataSource: FuelstationDataSource,
  ) {
    super(Pump, dataSource);
  }
}
