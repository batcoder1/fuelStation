import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './fuelstation.datasource.json';

export class FuelstationDataSource extends juggler.DataSource {
  static dataSourceName = 'fuelstation';

  constructor(
    @inject('datasources.config.fuelstation', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
