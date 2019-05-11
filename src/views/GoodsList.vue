<template>
    <div>
        <h2>这是商品列表页</h2>
        <router-link to='/goods/title'>显示标题</router-link>
        <router-link to='/goods/image'>显示图片</router-link>
        <div>
            <router-view></router-view>
        </div>
        <router-link to="/cart">跳转到购物车页面</router-link>
        <button @click="jump">button-跳转到购物车页面</button>
    </div>
    
</template>
<script>
export default {
    data: {
        return(){

        }
    },
    methods: {
        jump(){
            // this.$router.push('/cart')
            this.$router.go(-2)
        }
    }
}
</script>
