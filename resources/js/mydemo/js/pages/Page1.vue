<template>
    <div>
        <h1>Page 1</h1>
        <div class="card flex justify-center">
            <Button label="Verify" />
        </div>

        <p>{{ message }}</p>

        <router-link to="/page2">Go to Page 2</router-link>
    </div>
</template>

<script setup>
console.log("Page1 load");
const message = "This is data from Page 1";
</script>
