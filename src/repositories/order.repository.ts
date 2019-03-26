import {DefaultCrudRepository} from '@loopback/repository';
import {Order} from '../models';
import {FuelstationDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id
> {
  constructor(
    @inject('datasources.fuelstation') dataSource: FuelstationDataSource,
  ) {
    super(Order, dataSource);
  }
}
