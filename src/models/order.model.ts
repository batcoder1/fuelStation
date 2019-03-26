import {Model, model, property, Entity} from '@loopback/repository';

@model()
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  pumpID: string;

  @property({
    type: 'string',
    required: true,
  })
  userID: string;

  @property({
    type: 'number',
    required: true,
  })
  litres: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;


  constructor(data?: Partial<Order>) {
    super(data);
  }
}

exports.Order = Order;
