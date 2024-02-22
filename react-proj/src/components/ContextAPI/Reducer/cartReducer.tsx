
const cartReducer = (state: any, action: any) => {
    switch (action.type) {
        case "INIT_PRODUCTS":
            fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((error) => console.log(error));
            break;
        default:
            return state
    }


}

export default cartReducer