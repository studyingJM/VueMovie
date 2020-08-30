<template>
    <div>
        <h1>영화 목록</h1>
        <div class="row d-flex flex-wrap justify-content-center mt-2">
            <div class="col-10">
                <div class="card-list">
                    <movie-item v-for="item in list" :key="item.code" :item="item"></movie-item>
                </div>
                <!-- <scroll-loader :loader-method="getMovie" :loader-enable="loadMore">
                    <div>Loading...</div>
                </scroll-loader> -->
            </div>
        </div>
    </div>
</template>

<script>
import MovieComItem from '@item/MovieComItem';

export default {
    name: 'movie-list-com',
    components: {
        'movie-item':MovieComItem,
    },
    data() {
        return {
            loadMore:true,
            page: 1,
            pageSize: 9,
            list: [],
        }
    },
    beforeMount() {
        // axios.get('/api/movie').then( res => {
        //     const data = res.data;
        //     if(data.success) {
        //         this.list = data.data;
        //     }
        // });
    },
    methods: {
        // getMovie() {
        //     axios.get('/api/movie', {
        //         params: {
        //             page: this.page++,
        //             per_page: this.pageSize,
        //         }
        //     }).then(res => {
        //         const data = res.data;
        //         this.list.concat(data.data);
        //         data.data.length < this.pageSize && (this.loadMore = false)
        //     }).catch(error => {
        //         console.log(err);
        //     });
        // }
    },
    mounted() {
        this.getMovie();
    }
}
</script>

<style>
    .card-list {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(10, 1fr);
        grid-auto-rows: 150px;
        margin-bottom: 20px;
    }
</style>
