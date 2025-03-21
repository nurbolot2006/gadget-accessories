import {supabase} from "../../supabase/index.js";


class PhoneApi {

    async getPhoneByCategory(id) {

        let {data: phones, error} = await supabase
            .from('phones')
            .select('*')
            .eq('brand_id', id)
        console.log(phones)
        return phones;
    }
}


export const phoneApi = new PhoneApi();