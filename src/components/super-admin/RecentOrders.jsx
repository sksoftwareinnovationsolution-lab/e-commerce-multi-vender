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
  const colors = {
    delivered: "bg-[rgba(34,197,94,0.14)] text-[#16a34a] dark:text-[#4ade80]",
    processing: "bg-[rgba(59,130,246,0.14)] text-[#3b82f6] dark:text-[#60a5fa]",
    cancelled: "bg-[rgba(239,68,68,0.14)] text-[#dc2626] dark:text-[#f87171]",
  };
  return (
    <span
      className={`inline-flex items-center justify-center px-[0.6rem] py-[0.22rem] rounded-full text-[0.7rem] font-semibold whitespace-nowrap leading-[1.3] ${colors[key]}`}
    >
      {status}
    </span>
  );
}

function RecentOrders() {
  return (
    <article className="md:col-span-2 lg:col-span-1 bg-white dark:bg-[#1e293b] border dark:border-[#334155] border-[#eef0f3] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-[0.9rem_1rem] min-w-0 flex flex-col items-stretch">
      <div className="flex items-center justify-between gap-3 mb-[0.6rem]">
        <h2 className="text-[0.95rem] font-semibold text-gray-900 dark:text-gray-100 leading-tight">
          Recent Orders
        </h2>
        <button className="group inline-flex items-center gap-1 bg-none border-none p-[0.3rem_0.5rem] text-[0.8rem] font-semibold text-[#8b5cf6] cursor-pointer rounded-lg whitespace-nowrap transition-[background-color,color] duration-200 hover:bg-[rgba(139,92,246,0.08)] hover:text-[#7c3aed] dark:text-[#a78bfa] dark:hover:bg-[rgba(139,92,246,0.15)] dark:hover:text-[#c4b5fd]" type="button">
          <span>View All</span>
          <FiChevronRight size={13} className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-[2px]" />
        </button>
      </div>

      <div className="w-full overflow-x-auto [overflow-scrolling:touch] [-webkit-overflow-scrolling:touch]">
        <table className="w-full min-w-[560px] border-collapse text-[0.8125rem]">
          <thead>
            <tr>
              <th className="text-left py-[0.35rem] px-[0.625rem] text-[0.68rem] font-semibold uppercase tracking-[0.04em] text-gray-400 dark:text-slate-500 border-b border-[#f1f5f9] dark:border-[#334155] whitespace-nowrap">Order ID</th>
              <th className="text-left py-[0.35rem] px-[0.625rem] text-[0.68rem] font-semibold uppercase tracking-[0.04em] text-gray-400 dark:text-slate-500 border-b border-[#f1f5f9] dark:border-[#334155] whitespace-nowrap">Customer</th>
              <th className="text-left py-[0.35rem] px-[0.625rem] text-[0.68rem] font-semibold uppercase tracking-[0.04em] text-gray-400 dark:text-slate-500 border-b border-[#f1f5f9] dark:border-[#334155] whitespace-nowrap">Vendor</th>
              <th className="text-left py-[0.35rem] px-[0.625rem] text-[0.68rem] font-semibold uppercase tracking-[0.04em] text-gray-400 dark:text-slate-500 border-b border-[#f1f5f9] dark:border-[#334155] whitespace-nowrap">Amount</th>
              <th className="text-left py-[0.35rem] px-[0.625rem] text-[0.68rem] font-semibold uppercase tracking-[0.04em] text-gray-400 dark:text-slate-500 border-b border-[#f1f5f9] dark:border-[#334155] whitespace-nowrap">Status</th>
              <th className="text-left py-[0.35rem] px-[0.625rem] text-[0.68rem] font-semibold uppercase tracking-[0.04em] text-gray-400 dark:text-slate-500 border-b border-[#f1f5f9] dark:border-[#334155] whitespace-nowrap">Date</th>
            </tr>
          </thead>
          <tbody>
            {ORDERS.map((order, idx) => (
              <tr
                key={order.id}
                className={`transition-colors duration-150 hover:bg-[#fafafa] dark:hover:bg-[rgba(148,163,184,0.06)] ${
                  idx === ORDERS.length - 1 ? "[&>td]:border-b-0" : ""
                }`}
              >
                <td className="py-[0.42rem] px-[0.625rem] text-gray-700 dark:text-slate-300 border-b border-[#f1f5f9] dark:border-[#334155] whitespace-nowrap font-semibold text-[#8b5cf6] dark:text-[#a78bfa]">{order.id}</td>
                <td className="py-[0.42rem] px-[0.625rem] text-gray-700 dark:text-slate-300 border-b border-[#f1f5f9] dark:border-[#334155] whitespace-nowrap font-semibold text-gray-900 dark:text-gray-100">{order.customer}</td>
                <td className="py-[0.42rem] px-[0.625rem] text-gray-700 dark:text-slate-300 border-b border-[#f1f5f9] dark:border-[#334155] whitespace-nowrap">{order.vendor}</td>
                <td className="py-[0.42rem] px-[0.625rem] text-gray-700 dark:text-slate-300 border-b border-[#f1f5f9] dark:border-[#334155] whitespace-nowrap font-semibold text-gray-900 dark:text-gray-100">{order.amount}</td>
                <td className="py-[0.42rem] px-[0.625rem] text-gray-700 dark:text-slate-300 border-b border-[#f1f5f9] dark:border-[#334155] whitespace-nowrap">
                  <StatusBadge status={order.status} />
                </td>
                <td className="py-[0.42rem] px-[0.625rem] text-gray-700 dark:text-slate-300 border-b border-[#f1f5f9] dark:border-[#334155] whitespace-nowrap text-gray-400 dark:text-slate-500">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default RecentOrders;