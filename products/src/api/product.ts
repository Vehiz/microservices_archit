import ProductService from "../services/product-service";
import express, { Request, Response, NextFunction } from "express";
import userAuth from './middlewares/auth'
export const Product = (app: express.Application) => {
  const service = new ProductService();

  app.post(
    "/create", userAuth,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const {
          name,
          description,
          banner,
          type,
          unit,
          price,
          available,
          supplier,
        } = req.body;

        const data = await service.ProductsCreate({
          name,
          description,
          banner,
          type,
          unit,
          price,
          available,
          supplier,
        });

        return res.status(201).json(data);
      } catch (err) {
        next(err);
      }
    }
  );
};
