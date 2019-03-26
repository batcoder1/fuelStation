import {model, property, Entity} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  surname?: string;

  @property({
    type: 'string',
  })
  address?: string;


  constructor(data?: Partial<User>) {
    super(data);
  }
}
exports.User = User;
