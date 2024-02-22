import products from "../data"

const Products = () => {
    return (
        <div>
            <h2>
                Product Components
            </h2>
            {
                products.map((product) => {
                    return (
                        <div key={product.id}>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <img src={product.image} alt={`Image of ${product.title}`} width={200} height={200} />
                            <hr />
                        </div>
                    )
                })
            }
        </div>


    )
}
export default Products