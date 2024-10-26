import { AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function FlaggedContentIndicator({ flagCount }: { flagCount: number }) {
  return (
    <Badge variant="destructive" className="ml-2">
      <AlertTriangle className="h-4 w-4 mr-1" />
      Flagged ({flagCount})
    </Badge>
  );
}
