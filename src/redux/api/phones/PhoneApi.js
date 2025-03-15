import {supabase} from "../../../supabase/index.js";


class PhoneApi {


    async getPhone() {
        let { data: phones, error } = await supabase
            .from('phones')
            .select('*')
        console.log(phones)
        return phones;
    }
}


export const phoneApi = new PhoneApi();