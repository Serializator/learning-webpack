<template>
    <section>
        <article>
            {{ message }}
        </article>

        <article>
            {{ message }}
        </article>
    </section>
</template>

<script>
    export default {
        data: () => ({
            message: 'Hello, World!'
        })
    }
</script>

<style lang="scss" scoped>
    section {
        display: flex;
        justify-content: space-around;
        
        article {
            text-align: center;

            &:first-child {
                color: red;
            }

            &:last-child {
                color: blue;
            }
        }
    }
</style>