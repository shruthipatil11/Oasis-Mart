const OrderSummary = ({ cartItems }) => {
  const getOrderSummary = (cartItems) => ({
    priceOfallItems: (() =>
      cartItems.reduce(
        (total, item) => total + item.originalPrice * item.qty,
        0
      ))(),
    totalDiscount: (() =>
      cartItems.reduce(
        (total, item) =>
          total + (item.discount / 100) * (item.originalPrice * item.qty),
        0
      ))(),
  });

  let { priceOfallItems, totalDiscount } = getOrderSummary(cartItems);

  return (
    <div className="card card--shadow card__text">
      <div className="card__body">
        <h3 className="font-weight-600">Price Details</h3>
        <hr />
        <div>
          <span>Price ({cartItems.length} items)</span>{" "}
          <span>
            &#x20B9;
            {priceOfallItems}
          </span>
        </div>
        <div>
          <span>Discount</span> <span> - &#x20B9;{totalDiscount}</span>
        </div>
        <div>
          <span>Delivery charges</span> <span>FREE</span>
        </div>
        <hr />
        <div>
          <span className="font-weight-600">Total Amount</span>
          <span className="font-weight-600">
            &#x20B9;{priceOfallItems - totalDiscount}
          </span>
        </div>
        <hr />
        <p>You will save &#x20B9;{totalDiscount} on this order</p>
        <button className="btn btn--primary">Place Order</button>
      </div>
    </div>
  );
};

export default OrderSummary;
