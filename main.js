const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inventory: 1,
            onSale: true,
            details: ['50% cotton', '30% woll', '20% polyester'],
            Sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'}
            ]
        }
    }
})
