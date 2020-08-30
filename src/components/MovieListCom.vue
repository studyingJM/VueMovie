<template>
    <div>
        <h1>스크롤 로더 연습</h1>
        <div>
            <div class="images-item" v-for="(list,index) of list" :key="index">
                <div class="images-card">
                    <img class="images-card__image" :src="list.image" @load="masks.push(index)">
                    <div class="images-card__mask" :style="{'background-color':list.title}" v-if="!masks.includes(index)"></div>
                </div>
            </div>
        </div>
        <div class="copyright-container" v-if="loadMore">
            <h1>끝 입니다만 ?????? 더이상 존재 하지않는다구 오이</h1>
        </div>
        <scroll-loader :loader-method="getMovie" :loader-disable="loadMore">
            <!--   You can replace the default loading animation with slot here. -->
        </scroll-loader>
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
            loadMore:false,
            page: 1,
            pageSize: 10,
            list: [],
            masks: []
        }
    },
    beforeMount() {
        // axios.get('https://api.unsplash.com/photos').then( res => {
        //     const data = res.data;
        //     if(data.success) {
        //         this.list = data.data;
        //     }
        // });
    },
    methods: {
        getMovie() {
            axios.get('/api/movie', {
                params: {
                    page: this.page++,
                    per_page:this.pageSize,
                }
            }).then(res => {
                res.data.data && (this.list = [...this.list, ...res.data.data])
            }).catch(err => {
                console.log(err)
            });
        }
    },
    watch: {
        page (value) {
            this.loadMore = value > 10
        }
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
