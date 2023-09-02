type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

interface StoreListProp {
  products: Product[];
}

const StoreList = ({ products }: StoreListProp) => {
  return (
    <div className="container">
      <div className="row gap-3 justify-content-center">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="card p-2 border border-dark rounded-3"
              style={{ width: "250px" }}
            >
              <img
                className="card-img-top"
                src={product.images[0]}
                alt={`${product.title}'s image`}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h6 className="card-subtitle mb-2">
                  <span className="text-dark">
                    <i className="bi bi-currency-dollar"></i>
                    {product.price} <i className="bi bi-star-fill"></i>{" "}
                    {product.rating}
                  </span>
                </h6>
                <p className="card-text">{product.description}</p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <a href="#" className="btn btn-success card-link">
                  Buy Now
                </a>
                <a href="#" className="btn btn-secondary card-link">
                  Add To Cart
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StoreList;
