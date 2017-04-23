<template>
    <transition name="bounce">
        <img src="../../assets/images/advertisingImgs/img-02.jpg" alt="">
    </transition>
</template>
<script>
export default {
    mounted() {
        let self = this;
        setTimeout(() => {
            self.$router.push({
                path: 'index'
            });
        }, 2000);
    }
}
</script>
<style>
img {
    width: 100%;
}

.bounce-enter-active {
    animation: bounce-in .5s;
}

.bounce-leave-active {
    animation: bounce-out .5s;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes bounce-out {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(0);
    }
}
</style>
