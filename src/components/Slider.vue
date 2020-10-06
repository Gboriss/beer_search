<template>
<div class="range-slider">
	<input 
        type="range" 
        min="0" max="20" 
        step="1"
        v-model.number="minAbv"
        @change="setRanges"
        @sortedProducts="sortByCategories" 
    >
	<input 
        type="range" 
        min="0" 
        max="20" 
        step="1"
        v-model.number="maxAbv"
        @change="setRanges"
        @sortedProducts="sortByCategories" 
    >
    <div class="range-values">
        <p>Min alc {{minAbv}} %</p>
        <p>Max alc {{maxAbv}} %</p>

    </div>
</div>
</template>

<script>
export default {
    name: 'Slider',
    props: ['products'],
    data() {
        return {
            sortedProducts: [],
            minAbv: 0,
            maxAbv: 20
        }
    },
    methods: {
        setRanges() {
            if (this.minAbv > this.maxAbv) {
                let temp = this.maxAbv
                this.maxAbv = this.minAbv
                this.minAbv = temp
            }
            this.sortByCategories()
        },
        // sortByCategories() {
        //     let vm = this
        //     this.sortedProducts = [...this.products]
        //     this.sortedProducts = this.sortedProducts.filter(function (e) {
        //             return e.abv >= vm.minAbv && e.abv <= vm.maxAbv
        //         })
        // },
        sortByCategories() {
            this.$emit('sortByCategories')
        },
    }
}

</script>

<style scoped lang="scss">

.range-values {
    margin-left: 25px;
}
.range-slider {
    display: flex;
    justify-content: flex-start;
    position: relative;

    width: 200px;
    margin: auto 16px;
    text-align: center;
}

.range-slider input[type=range] {
	margin: 20px;

    position: absolute;
    width: 250px;
    left: 0;
    bottom: 85px;

}
::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;     
}
input[type=range]{
    -webkit-appearance: none;
}
input[type=range]::-webkit-slider-runnable-track {
    width: 300px;
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1.5px solid #C1C1C1;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #EDEDED;
}
input[type=range]:focus {
    outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    box-shadow: 1px 1px 1px #C6C6C6, 0px 0px 1px #787878;
    border-radius: 2px;
    border: 0.2px solid #787878;
}

</style>