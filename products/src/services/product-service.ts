import { ProductRepository } from "../database";
import { IProductDTO } from "./product-service.dto";
import { FormatData } from "../utils";

// Business logic

class ProductService {
  repository;

  constructor() {
    this.repository = new ProductRepository();
  }
  async ProductsCreate(productInput: IProductDTO) {
    const {
      name,
      description,
      banner,
      type,
      unit,
      price,
      available,
      supplier,
    } = productInput;

    try {
      const products = await this.repository.CreateProduct({
        name,
        description,
        banner,
        type,
        unit,
        price,
        available,
        supplier,
      });

      return FormatData(products);
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
}

export default ProductService;
