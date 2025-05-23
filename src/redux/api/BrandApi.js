import {supabase} from "../../supabase/index.js";


class BrandApi{

    async getBrand() {
        let { data: brand, error } = await supabase
            .from('brand')
            .select('*')
        return brand;
    }
}


export const brandApi = new BrandApi();