<template>
    <div>
        <h2>这是商品列表页</h2>
        <router-link to='/goods/title'>显示标题</router-link>
        <router-link to='/goods/image'>显示图片</router-link>
        <div>
            <router-view></router-view>
        </div>
    </div>
    
</template>
<script>
export default {
    
}
</script>
