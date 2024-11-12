import React from 'react'
import { Label, Input, Avatar, Badge, CheckboxInput, RadioInput, SwitchInput, Icon, SelectOption } from './atoms'
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup } from "@/components/ui/radio-group"

export const FormField = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }>(
  ({ label, id, error, ...props }, ref) => (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-lg">{label}</Label>
      <Input id={id} ref={ref} className="text-lg p-3 w-full" {...props} />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
)

export const SelectField = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Select> & { label: string; options: { value: string; label: string }[]; error?: string }>(
  ({ label, options, error, ...props }, ref) => (
    <div className="space-y-2">
      <Label className="text-lg">{label}</Label>
      <Select {...props}>
        <SelectTrigger ref={ref} className="text-lg p-3 w-full border-2 focus:ring-2 focus:ring-primary transition-all duration-200">
          <SelectValue placeholder={`Selecione ${label.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectOption key={option.value} value={option.value}>{option.label}</SelectOption>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
)

export const CheckboxField = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { label: string }>(
  ({ label, id, ...props }, ref) => (
    <div className="flex items-center space-x-2">
      <CheckboxInput id={id} ref={ref} {...props} />
      <Label htmlFor={id} className="text-base cursor-pointer">{label}</Label>
    </div>
  )
)

export const RadioOption = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { label: string }>(
  ({ value, label, ...props }, ref) => (
    <div className="flex items-center space-x-2">
      <RadioInput value={value} id={value} ref={ref} {...props} />
      <Label htmlFor={value} className="text-base cursor-pointer">{label}</Label>
    </div>
  )
)

export const RadioGroupField = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof RadioGroup> & { label: string; options: { value: string; label: string }[]; error?: string }>(
  ({ label, options, error, ...props }, ref) => (
    <div className="space-y-2">
      <Label className="text-lg">{label}</Label>
      <RadioGroup ref={ref} className="space-y-2" {...props}>
        {options.map((option) => (
          <RadioOption key={option.value} value={option.value} label={option.label} />
        ))}
      </RadioGroup>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
)

export const SwitchField = React.forwardRef<HTMLButtonElement, React.InputHTMLAttributes<HTMLInputElement> & { label: string }>(
  ({ label, id, ...props }, ref) => (
    <div className="flex items-center space-x-2">
      <SwitchInput id={id} ref={ref} {...props} />
      <Label htmlFor={id} className="text-lg cursor-pointer">{label}</Label>
    </div>
  )
)

export const AvatarGroup = ({ users }: { users: { src: string; fallback: string }[] }) => (
  <div className="flex -space-x-2">
    {users.map((user, index) => (
      <Avatar key={index} src={user.src} fallback={user.fallback} className="w-10 h-10 border-2 border-white dark:border-gray-800" />
    ))}
  </div>
)

export const BadgeWithIcon = ({ icon, text }: { icon: React.ElementType; text: string }) => (
  <Badge className="flex items-center space-x-1">
    <Icon icon={icon} className="w-4 h-4" />
    <span>{text}</span>
  </Badge>
)

export const IconGroup = ({ icons }: { icons: React.ElementType[] }) => (
  <div className="flex justify-center space-x-4">
    {icons.map((IconComponent, index) => (
      <Icon key={index} icon={IconComponent} className="w-6 h-6 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200" />
    ))}
  </div>
)