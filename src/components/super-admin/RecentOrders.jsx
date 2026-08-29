import { FiChevronRight } from "react-icons/fi";

const ORDERS = [
  {
    id: "#ORD-12540",
    customer: "Ananya Singh",
    vendor: "Tech World",
    amount: "₹2,999",
    status: "Delivered",
    date: "May 30, 2025",
  },
  {
    id: "#ORD-12539",
    customer: "Rohit Verma",
    vendor: "Fashion Hub",
    amount: "₹1,299",
    status: "Processing",
    date: "May 30, 2025",
  },
  {
    id: "#ORD-12538",
    customer: "Priya Mehta",
    vendor: "Grocery Mart",
    amount: "₹850",
    status: "Delivered",
    date: "May 29, 2025",
  },
  {
    id: "#ORD-12537",
    customer: "Vikram Patel",
    vendor: "Home Store",
    amount: "₹3,499",
    status: "Cancelled",
    date: "May 29, 2025",
  },
  {
    id: "#ORD-12536",
    customer: "Neha Sharma",
    vendor: "Beauty Zone",
    amount: "₹999",
    status: "Processing",
    date: "May 29, 2025",
  },
];

function StatusBadge({ status }) {
  const key = status.toLowerCase();
  return (
    <span className={`sa-recent-badge sa-recent-badge--${key}`}>{status}</span>
  );
}

function RecentOrders() {
  return (
    <article className="sa-panel sa-recent-orders">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">Recent Orders</h2>
        <button className="sa-panel__viewall" type="button">
          <span>View All</span>
          <FiChevronRight size={13} />
        </button>
      </div>

      <div className="sa-recent-orders__scroll">
        <table className="sa-recent-orders__table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Vendor</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {ORDERS.map((order) => (
              <tr key={order.id}>
                <td className="sa-recent-orders__id">{order.id}</td>
                <td className="sa-recent-orders__strong">{order.customer}</td>
                <td>{order.vendor}</td>
                <td className="sa-recent-orders__amount">{order.amount}</td>
                <td>
                  <StatusBadge status={order.status} />
                </td>
                <td className="sa-recent-orders__date">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default RecentOrders;