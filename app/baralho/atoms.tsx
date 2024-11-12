import { Button as ButtonBase } from "@/components/ui/button"
import { Input as InputBase } from "@/components/ui/input"
import { Label as LabelBase } from "@/components/ui/label"
import { Avatar as AvatarBase, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge as BadgeBase } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { SelectItem } from "@/components/ui/select"

export const Button = ButtonBase
export const Input = InputBase
export const Label = LabelBase
export const CheckboxInput = Checkbox
export const RadioInput = RadioGroupItem
export const SwitchInput = Switch
export const SelectOption = SelectItem

export const Avatar = ({ src, fallback }: { src: string; fallback: string }) => (
  <AvatarBase>
    <AvatarImage src={src} alt="Avatar" />
    <AvatarFallback>{fallback}</AvatarFallback>
  </AvatarBase>
)

export const Badge = ({ children, ...props }: React.ComponentProps<typeof BadgeBase>) => (
  <BadgeBase variant="secondary" className="text-lg py-2 px-4" {...props}>
    {children}
  </BadgeBase>
)

export const Icon = ({ icon: IconComponent, className }: { icon: React.ElementType; className?: string }) => (
  <IconComponent className={className} />
)