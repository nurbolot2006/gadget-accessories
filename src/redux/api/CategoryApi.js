import {supabase} from "../../supabase/index.js";


class CategoryApi {
    async getCategory() {
        let { data: category, error } = await supabase
            .from('category')
            .select('*')
        console.log(category)
        return category
    }
}

export const categoryApi = new CategoryApi();