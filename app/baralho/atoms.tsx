import React from 'react'
import { Button as ButtonBase } from "@/components/ui/button"
import { Input as InputBase } from "@/components/ui/input"
import { Label as LabelBase } from "@/components/ui/label"
import { Avatar as AvatarBase, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge as BadgeBase } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { SelectItem } from "@/components/ui/select"

export const Button = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof ButtonBase>>(
  ({ className, ...props }, ref) => (
    <ButtonBase
      ref={ref}
      className={`${className} transition-all duration-200 hover:scale-105 active:scale-95`}
      {...props}
    />
  )
)

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<typeof InputBase>>(
  ({ className, ...props }, ref) => (
    <InputBase
      ref={ref}
      className={`${className} border-2 focus:ring-2 focus:ring-primary transition-all duration-200`}
      {...props}
    />
  )
)

export const Label = React.forwardRef<HTMLLabelElement, React.ComponentProps<typeof LabelBase>>(
  ({ className, ...props }, ref) => (
    <LabelBase
      ref={ref}
      className={`${className} font-semibold text-primary-700 dark:text-primary-300`}
      {...props}
    />
  )
)

export const Avatar = ({ src, fallback, className }: { src: string; fallback: string; className?: string }) => (
  <AvatarBase className={`${className} ring-2 ring-primary-300 dark:ring-primary-700`}>
    <AvatarImage src={src} alt="Avatar" className="object-cover" />
    <AvatarFallback className="bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300">
      {fallback}
    </AvatarFallback>
  </AvatarBase>
)

export const Badge = ({ children, className, ...props }: React.ComponentProps<typeof BadgeBase>) => (
  <BadgeBase
    variant="secondary"
    className={`${className} text-sm py-1 px-2 rounded-full font-medium bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-300`}
    {...props}
  >
    {children}
  </BadgeBase>
)

export const CheckboxInput = React.forwardRef<HTMLInputElement, React.ComponentProps<typeof Checkbox>>(
  ({ className, ...props }, ref) => (
    <Checkbox
      ref={ref}
      className={`${className} border-2 border-primary-300 data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500`}
      {...props}
    />
  )
)

export const RadioInput = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof RadioGroupItem>>(
  ({ className, ...props }, ref) => (
    <RadioGroupItem
      ref={ref}
      className={`${className} border-2 border-primary-300 text-primary-700 data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500`}
      {...props}
    />
  )
)

export const SwitchInput = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Switch>>(
  ({ className, ...props }, ref) => (
    <Switch
      ref={ref}
      className={`${className} data-[state=checked]:bg-primary-500`}
      {...props}
    />
  )
)

export const SelectOption = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof SelectItem>>(
  ({ className, ...props }, ref) => (
    <SelectItem
      ref={ref}
      className={`${className} cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-800`}
      {...props}
    />
  )
)

export const Icon = ({ icon: IconComponent, className }: { icon: React.ElementType; className?: string }) => (
  <IconComponent className={`${className} text-primary-500 dark:text-primary-400`} />
)