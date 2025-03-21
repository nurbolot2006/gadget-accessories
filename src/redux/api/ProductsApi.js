import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from "./baseQuery.js";
import {supabase} from "../../supabase/index.js";

export const ProductsApi = createApi({
        baseQuery,
        endpoints: (builder) => ({
            getProducts: builder.query({
                query: () => `/products/`,
            }),
            getProductsById: builder.query({
                queryFn: async (id) => {
                    const {data, error} = await supabase
                        .from('products')
                        .select('*')
                        .eq('id', id);
                    if (error) {
                        return {error};
                    }
                    return {data};
                },
            })
        }),
    }
)

export const { useGetProductsByIdQuery } = ProductsApi;
