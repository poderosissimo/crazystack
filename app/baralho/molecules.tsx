import { Label, Input, Avatar, Badge, CheckboxInput, RadioInput, SwitchInput, Icon, SelectOption } from './atoms'
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup } from "@/components/ui/radio-group"

export const FormField = ({ label, id, type = "text", ...props }: { label: string; id: string; type?: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="space-y-2">
    <Label htmlFor={id} className="text-lg">{label}</Label>
    <Input id={id} type={type} className="text-lg p-3" {...props} />
  </div>
)

export const SelectField = ({ label, options, ...props }: { label: string; options: { value: string; label: string }[] } & React.ComponentProps<typeof Select>) => (
  <div className="space-y-2">
    <Label className="text-lg">{label}</Label>
    <Select {...props}>
      <SelectTrigger className="text-lg p-3">
        <SelectValue placeholder={`Selecione ${label.toLowerCase()}`} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectOption key={option.value} value={option.value}>{option.label}</SelectOption>
        ))}
      </SelectContent>
    </Select>
  </div>
)

export const CheckboxField = ({ label, id }: { label: string; id: string }) => (
  <div className="flex items-center space-x-2">
    <CheckboxInput id={id} />
    <Label htmlFor={id}>{label}</Label>
  </div>
)

export const RadioOption = ({ value, label }: { value: string; label: string }) => (
  <div className="flex items-center space-x-2">
    <RadioInput value={value} id={value} />
    <Label htmlFor={value}>{label}</Label>
  </div>
)

export const RadioGroupField = ({ label, options }: { label: string; options: { value: string; label: string }[] }) => (
  <div className="space-y-2">
    <Label className="text-lg">{label}</Label>
    <RadioGroup defaultValue={options[0].value}>
      {options.map((option) => (
        <RadioOption key={option.value} value={option.value} label={option.label} />
      ))}
    </RadioGroup>
  </div>
)

export const SwitchField = ({ label, id }: { label: string; id: string }) => (
  <div className="flex items-center space-x-2">
    <SwitchInput id={id} />
    <Label htmlFor={id} className="text-lg">{label}</Label>
  </div>
)

export const AvatarGroup = ({ users }: { users: { src: string; fallback: string }[] }) => (
  <div className="flex space-x-2">
    {users.map((user, index) => (
      <Avatar key={index} src={user.src} fallback={user.fallback} />
    ))}
  </div>
)

export const BadgeWithIcon = ({ icon, text }: { icon: React.ElementType; text: string }) => (
  <Badge>
    <Icon icon={icon} className="mr-2" />
    <span>{text}</span>
  </Badge>
)

export const IconGroup = ({ icons }: { icons: React.ElementType[] }) => (
  <div className="flex justify-center space-x-4">
    {icons.map((IconComponent, index) => (
      <Icon key={index} icon={IconComponent} />
    ))}
  </div>
)