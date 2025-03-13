import {supabase} from "../../supabase/index.js";


class ProductsApi {


    async getProducts() {
        let { data: products, error } = await supabase
            .from('products')
            .select('*')
        console.log(products)
        return products;
    }
}


export const productApi = new ProductsApi();