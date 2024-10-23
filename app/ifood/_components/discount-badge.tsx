import { ArrowDownIcon } from "lucide-react";

interface DiscountBadgeProps {
  product: any;
}

const DiscountBadge = ({ product }: DiscountBadgeProps) => {
  return (
    <div className="flex items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] text-white">
      <ArrowDownIcon size={12} />
      <span className="text-xs font-semibold">
        {product.discountPercentage}%
      </span>
    </div>
  );
};

export default DiscountBadge;
