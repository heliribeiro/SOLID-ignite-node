import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;
    try {
      const userUpdated = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(200).json(userUpdated);
    } catch (error) {
      return response.status(404).json({ error });
    }
  }
}

export { TurnUserAdminController };
