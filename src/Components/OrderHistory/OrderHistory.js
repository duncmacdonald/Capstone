import "./OrderHistory.css";

export default function OrderHistory({ orderHistory, listen}) {
 console.log(orderHistory);
  const orderHistoryJSX = orderHistory.map((order) => {
    return (
      <div className="OrderHistory__Row">
        <div>
          <h1>
            {(order.restaurant_id === 1) ? ("Yuko Maki") : ("Ingrain Pastifico")}
          </h1>
          <p>{Math.round((Date.now() - order.order_time)/86400000)} days ago</p>
        </div>
        {(order.status === "complete") ? (
          <div className="Button" onClick={() => listen(order.id)}>
            Return Dishes
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  });

  
    return (<section className="OrderHistory">{orderHistoryJSX}</section>);
  
}
