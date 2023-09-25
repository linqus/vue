<template>
    <div>
        <div class="row">
            <div class="col-12">
                <title-component
                    :categories="categories"
                    :current-category-id="currentCategoryId"
                />
            </div>
        </div>
        <product-list
            :products="products"
            :loading="loading"
            :categories="categories"
        />
        <div class="row">
            <legend-component
                :title="legend"
            />
        </div>
    </div>
</template>

<script>
import { fetchProducts } from '@/services/products-service';
import LegendComponent from '@/components/legend';
import ProductList from '@/components/product-list';
import TitleComponent from '@/components/title';


export default {
    name: 'Catalog',
    components: {
        LegendComponent,
        ProductList,
        TitleComponent,
    },
    props: {
        currentCategoryId: {
            type: String,
            default: null,
        },
        categories: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            products: [],
            loading: false,
            legend: "Shipping takes 10-12 weeks, and products probably won't work",
        };
    },
    async created() {
        this.loading = true;

        try {
            this.products = await fetchProducts(this.currentCategoryId);
            this.loading = false;
        } catch (e) {
            this.loading = false;
        }
    },
};
</script>
