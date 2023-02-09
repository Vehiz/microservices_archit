import { ProductModel, IProducts } from "../models";

export class ProductRepository {
  async CreateProduct({
    name,
    description,
    banner,
    type,
    unit,
    price,
    available,
    supplier,
  }: IProducts) {
    try {
      const product = new ProductModel({
        name,
        description,
        banner,
        type,
        unit,
        price,
        available,
        supplier,
      });

      const productResult = await product.save();
      return productResult;
    } catch (err) {
      console.log(err);
    }
  }

  // async FindCustomer({email}:{email:string}){
  //  const existingCustomer = await CustomerModel.findOne({email});
  //  return existingCustomer;
  // }
}
