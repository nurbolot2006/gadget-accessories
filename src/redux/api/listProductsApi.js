import {supabase} from "../../supabase/index.js";

class ListProductsApi {

    async getProductsByCategory(categoryId) {
        let { data: products, error } = await supabase
            .from('products')
            .select('*')
            .eq('category_id', categoryId);
        console.log(products);
        return products;
    }
}

export const productsApi = new ListProductsApi();
//
//
// import {createApi} from '@reduxjs/toolkit/query/react';
// import {baseQuery} from "./baseQuery.js";
// import {supabase} from "../../supabase/index.js";
//
// export const productsApi = createApi({
//         baseQuery,
//         endpoints: (builder) => ({
//             getProducts: builder.query({
//                 query: () => `/products/`,
//             }),
//             getProductsById: builder.query({
//                 queryFn: async (id) => {
//                     const {data, error} = await supabase
//                         .from('products')
//                         .select('*')
//                         .eq('id', id);
//                     if (error) {
//                         return {error};
//                     }
//                     return {data};
//                 },
//             })
//         }),
//     }
// )
//
// export const { useGetProductsByIdQuery } = productsApi;
