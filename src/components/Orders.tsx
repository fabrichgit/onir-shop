import { Package, Truck, CheckCircle } from 'lucide-react';
import { useOrders } from '../hook/order';

export default function Orders() {

  const { data: orders } = useOrders()

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Package className="h-5 w-5 text-yellow-500" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-blue-500" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'processing':
        return 'En cours de traitement';
      case 'shipped':
        return 'En cours de livraison';
      case 'delivered':
        return 'Livré';
      default:
        return status;
    }
  };

  return (
    <div className="pt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Mes Commandes</h2>

      <div className="space-y-6">
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        {orders?.map(order => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600">Commande #{order.id}</p>
                <p className="text-sm text-gray-600">
                  {new Date(order.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(order.status)}
                <span className="text-sm font-medium">{getStatusText(order.status)}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-expect-error */}
              {order?.items.map(item => (
                <div key={item.id} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">Quantité: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {item.price.toLocaleString('fr-FR', {
                      style: 'currency',
                      currency: 'EUR'
                    })}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between">
                <span className="text-base font-medium text-gray-900">Total</span>
                <span className="text-base font-medium text-indigo-600">
                  {order?.total.toLocaleString('fr-FR', {
                    style: 'currency',
                    currency: 'EUR'
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}