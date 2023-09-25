<template>
    <div>
        <input
            v-model="searchTerm"
            type="search"
            class="form-control"
            placeholder="Search Product..."
            @input="$emit('searchTermChanged', {term: searchTerm})"
        >
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            searchTerm: '',
        };
    },
};

</script>
