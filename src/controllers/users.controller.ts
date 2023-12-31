import { Request, Response } from 'express';
import UsersService from '../services/users.service';

export default class UsersController {
  constructor(private usersService = new UsersService()) { }

  public registerUser = async (req: Request, res: Response) => {
    const user = req.body;
    
    const result = await this.usersService.registerUser(user);

    res.status(201).json(result);
  };
}
