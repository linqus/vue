<template>
    <div>
        <input
            v-model="searchTerm"
            type="search"
            class="form-control"
            placeholder="Search Product..."
            @input="onInput"
        >
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
    },
};

</script>
