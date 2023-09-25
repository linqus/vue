<template>
    <div>
        <div class="row">
            <div class="col-3">
                <title-component
                    :categories="categories"
                    :current-category-id="currentCategoryId"
                />
            </div>
            <div class="col-9">
                <search-bar
                    @search-term-changed="onSearchProducts"
                />
            </div>
        </div>
        <product-list
            :products="filteredProducts"
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
import SearchBar from '@/components/search-bar';


export default {
    name: 'Catalog',
    components: {
        LegendComponent,
        ProductList,
        TitleComponent,
        SearchBar,
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
            searchTerm: '',
            legend: "Shipping takes 10-12 weeks, and products probably won't work",
        };
    },
    computed: {
        filteredProducts() {
            if (!this.searchTerm) {
                return this.products;
            }
            return this.products.filter((product) => (
                product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
            ));
        },
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
    methods: {
        onSearchProducts(event) {
            this.searchTerm = event.term;
        },
    },
};
</script>
