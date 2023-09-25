<template>
    <div class="input-group">
        <input
            v-model="searchTerm"
            type="search"
            class="form-control"
            placeholder="Search Product..."
            @input="onInput"
        >
        <div
            v-show="searchTerm !== ''"
            class="input-group-append"
        >
            <button
                class="btn btn-outline-secondary"
                @click="clearSearch"
            >
                X
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            searchTerm: '',
            searchTimeout: null,
        };
    },
    methods: {
        onInput() {
            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }
            this.searchTimeout = setTimeout(() => {
                this.$emit('searchTermChanged', { term: this.searchTerm });
                this.searchTimeout = null;
            }, 200);
        },
        clearSearch() {
            this.searchTerm = '';
            this.$emit('searchTermChanged', { term: this.searchTerm });
        },
    },
};

</script>
