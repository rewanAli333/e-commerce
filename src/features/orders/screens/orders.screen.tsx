import Link from "next/link";
import CardOrder from "../components/ordersCart";
import { getOrders } from "../server/orders.action";
import { verifytoken } from "../../../app/(authentication)/server/server.actions";
import { Order } from "../types/orders.type";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function OrdersScreens() {
  const { userInfo } = await verifytoken();
  const orders = await getOrders(userInfo?.id || "");

  return (
    <>
    <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link className="hover:text-primary-600 transition" href="/">
                Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">My Orders</span>
            </nav>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
                    <FontAwesomeIcon icon={faBagShopping}  className="text-green-600 text-2xl"/>
                </div>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    My Orders
                    </h1>
                    <p className="text-gray-500 text-sm mt-0.5">
                    Track and manage your {orders.length} orders
                    </p>
                </div>
                </div>
                <Link
                className="self-start sm:self-auto text-green-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-green-50 transition-all text-sm"
                href="/"
                >
                <svg
                data-prefix="fas"
                data-icon="bag-shopping"
                className="svg-inline--fa fa-bag-shopping text-xs"
                role="img"
                viewBox="0 0 448 512"
                aria-hidden="true"
            >
            <path
                fill="currentColor"
                d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
            />
            </svg>
            Continue Shopping
        </Link>
        </div>
    </div>
    <div className="space-y-4">
        {orders?.map((order: Order) => (
        <CardOrder key={order.id} order={order} />
        ))}
    </div>
    </div>
</>
);
}

