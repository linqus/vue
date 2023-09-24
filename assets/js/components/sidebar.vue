<template>
    <div
        :class="[this.$style.component, 'p-3', 'mb-5']"
    >
        <div v-show="!collapsed">
            <h5 class="text-center">
                Categories
            </h5>
            <ul class="nav flex-column mb4">
                <li class="nav-item">
                    <a
                        :class="`nav-link ${ !currentCategoryId ? 'selected' :'' }`"
                        href="/"
                    >All Products</a>
                </li>
                <li
                    v-for="category in categories"
                    :key="category['@id']"
                    class="nav-item"
                >
                    <a
                        :class="{
                            'nav-link': true,
                            'selected': currentCategoryId===category['@id'],
                        }"
                        :href="`/category/${category.id}`"
                    >{{ category.name }}</a>
                </li>
            </ul>
            <Loading v-show="loading" />
            <hr>
        </div>
        <div class="d-flex justify-content-end">
            <button
                class="btn btn-secondary btm-sm"
                @click="$emit('toggle-collapsed')"
                v-text="collapsed ? '>>' : '<< Collapse'"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Loading from '@/components/loading';

export default {
    name: 'Sidebar',
    components: {
        Loading,
    },
    props: {
        collapsed: {
            type: Boolean,
            required: true,
        },
        currentCategoryId: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            categories: [],
        };
    },
    computed: {
        loading() {
            return this.categories.length === 0;
        },
    },
    async created() {
        const response = await axios.get('/api/categories');

        this.categories = response.data['hydra:member'];
    },
};
</script>

<style lang="scss" module>
@import '~styles/components/light-component';

.component :global {
    @include light-component;

    ul {
        li a:hover {
            background: $blue-component-link-hover;
        }

        li a.selected {
            background: $light-component-border;
        }
    }
}
</style>
