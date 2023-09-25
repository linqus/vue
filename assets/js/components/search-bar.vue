<template>
    <div>
        <input
            :value="searchTerm"
            type="search"
            class="form-control"
            placeholder="Search Product..."
            @input="searchTerm = $event.target.value"
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
