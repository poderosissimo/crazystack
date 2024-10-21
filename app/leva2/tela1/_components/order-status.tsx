export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo',
}

export const OrderStatus = ({ status }: OrderStatusProps) => {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-slate-400"
        ></span>
      )}

      {status === 'canceled' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-rose-500"
        ></span>
      )}

      {status === 'delivered' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-emerald-500"
        ></span>
      )}

      {['processing', 'delivering'].includes(status) && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-amber-500"
        ></span>
      )}

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}

export const OrderListStatus = () => {
  return (
    <>
      {mockOrderStatus.map((item) => (
        <OrderStatus key={item.status} status={item.status} />
      ))}
    </>
  );
};

// mockOrderStatus.ts
export const mockOrderStatus = [
  { status: 'pending', expectedBadgeColor: 'bg-slate-400', expectedText: 'Pendente' },
  { status: 'canceled', expectedBadgeColor: 'bg-rose-500', expectedText: 'Cancelado' },
  { status: 'delivered', expectedBadgeColor: 'bg-emerald-500', expectedText: 'Entregue' },
  { status: 'processing', expectedBadgeColor: 'bg-amber-500', expectedText: 'Em preparo' },
  { status: 'delivering', expectedBadgeColor: 'bg-amber-500', expectedText: 'Em entrega' },
];
