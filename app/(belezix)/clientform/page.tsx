'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronDown, Check, Search, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { parsePhoneNumber, AsYouType, isValidPhoneNumber, CountryCode } from 'libphonenumber-js'

const countries = [
  { name: 'Brazil', code: 'BR', phone: '55', flag: '🇧🇷', format: '(99) 99999-9999' },
  { name: 'United States', code: 'US', phone: '1', flag: '🇺🇸', format: '(999) 999-9999' },
  { name: 'Afghanistan', code: 'AF', phone: '93', flag: '🇦🇫', format: '999 999 999' },
  { name: 'Albania', code: 'AL', phone: '355', flag: '🇦🇱', format: '999 999 999' },
  { name: 'Algeria', code: 'DZ', phone: '213', flag: '🇩🇿', format: '999 999 999' },
  { name: 'Argentina', code: 'AR', phone: '54', flag: '🇦🇷', format: '(999) 999-9999' },
  { name: 'Australia', code: 'AU', phone: '61', flag: '🇦🇺', format: '999 999 999' },
  { name: 'Austria', code: 'AT', phone: '43', flag: '🇦🇹', format: '999 999 999' },
  { name: 'Belgium', code: 'BE', phone: '32', flag: '🇧🇪', format: '999 999 999' },
  { name: 'Canada', code: 'CA', phone: '1', flag: '🇨🇦', format: '(999) 999-9999' },
  { name: 'China', code: 'CN', phone: '86', flag: '🇨🇳', format: '999 999 9999' },
  { name: 'Colombia', code: 'CO', phone: '57', flag: '🇨🇴', format: '999 999 9999' },
  { name: 'France', code: 'FR', phone: '33', flag: '🇫🇷', format: '99 99 99 99 99' },
  { name: 'Germany', code: 'DE', phone: '49', flag: '🇩🇪', format: '999 999 9999' },
  { name: 'India', code: 'IN', phone: '91', flag: '🇮🇳', format: '99999 99999' },
  { name: 'Italy', code: 'IT', phone: '39', flag: '🇮🇹', format: '999 999 9999' },
  { name: 'Japan', code: 'JP', phone: '81', flag: '🇯🇵', format: '999 999 9999' },
  { name: 'Mexico', code: 'MX', phone: '52', flag: '🇲🇽', format: '999 999 9999' },
  { name: 'Portugal', code: 'PT', phone: '351', flag: '🇵🇹', format: '999 999 999' },
  { name: 'Spain', code: 'ES', phone: '34', flag: '🇪🇸', format: '999 999 999' },
  { name: 'United Kingdom', code: 'GB', phone: '44', flag: '🇬🇧', format: '9999 999999' },
] as const

export default function Component() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    birthMonth: '',
    observation: '',
    isSubscriber: false
  })
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [searchTerm, setSearchTerm] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [isPhoneValid, setIsPhoneValid] = useState(false)

  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ]

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const validateAndFormatPhone = (value: string, country: typeof countries[0]) => {
    try {
      // Remove all non-digit characters
      const digitsOnly = value.replace(/\D/g, '')
      
      // Format the number as you type
      const formatter = new AsYouType(country.code as CountryCode)
      const formattedNumber = formatter.input(digitsOnly)
      
      // Validate the full number
      const fullNumber = `+${country.phone}${digitsOnly}`
      const isValid = isValidPhoneNumber(fullNumber, country.code as CountryCode)
      
      // Parse the number to get additional information
      const phoneNumber = parsePhoneNumber(fullNumber, country.code as CountryCode)
      
      setIsPhoneValid(isValid)
      setPhoneError(isValid ? '' : 'Número de telefone inválido')
      
      return {
        formatted: formattedNumber,
        isValid,
        phoneNumber
      }
    } catch (error) {
      setIsPhoneValid(false)
      setPhoneError('Formato inválido')
      return {
        formatted: value,
        isValid: false,
        phoneNumber: null
      }
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    const { formatted, isValid } = validateAndFormatPhone(input, selectedCountry)
    
    setFormData(prev => ({
      ...prev,
      phone: formatted
    }))

    // Clear error if input is empty
    if (!input) {
      setPhoneError('')
      setIsPhoneValid(false)
    }
  }

  // Validate phone when country changes
  useEffect(() => {
    if (formData.phone) {
      validateAndFormatPhone(formData.phone, selectedCountry)
    }
  }, [selectedCountry])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate phone before submission
    const { isValid, phoneNumber } = validateAndFormatPhone(formData.phone, selectedCountry)
    
    if (!isValid) {
      setPhoneError('Por favor, insira um número de telefone válido')
      return
    }

    console.log('Form submitted:', {
      ...formData,
      countryCode: selectedCountry.code,
      fullPhone: phoneNumber?.number
    })
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" className="text-white">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="space-y-1">
          <h2 className="text-lg font-medium">Adicionar um</h2>
          <h1 className="text-4xl font-bold">Novo Cliente</h1>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm text-gray-400">NOME</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm text-gray-400">TELEFONE</Label>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[140px] justify-between bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                >
                  <span className="flex items-center gap-2 truncate">
                    <span>{selectedCountry.flag}</span>
                    <span>+{selectedCountry.phone}</span>
                  </span>
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[300px] bg-gray-800 border-gray-700">
                <div className="flex items-center border-b border-gray-700 px-3 py-2">
                  <Search className="h-4 w-4 text-gray-400 mr-2" />
                  <Input
                    placeholder="Search countries..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-0 bg-transparent text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <ScrollArea className="h-[200px]">
                  {filteredCountries.map((country) => (
                    <DropdownMenuItem
                      key={country.code}
                      onClick={() => {
                        setSelectedCountry(country)
                        setFormData({ ...formData, phone: '' })
                        setPhoneError('')
                        setIsPhoneValid(false)
                      }}
                      className="flex items-center gap-2 text-white hover:bg-gray-700"
                    >
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                      <span className="ml-auto text-gray-400">+{country.phone}</span>
                      {selectedCountry.code === country.code && (
                        <Check className="h-4 w-4" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex-1 space-y-2">
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handlePhoneChange}
                className={`bg-gray-800 border-gray-700 text-white ${
                  phoneError ? 'border-red-500 focus-visible:ring-red-500' : 
                  isPhoneValid ? 'border-green-500 focus-visible:ring-green-500' : ''
                }`}
                placeholder={selectedCountry.format}
                required
              />
              {phoneError && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{phoneError}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="birthMonth" className="text-sm text-gray-400">MÊS DE ANIVERSÁRIO</Label>
          <Select
            value={formData.birthMonth}
            onValueChange={(value) => setFormData({ ...formData, birthMonth: value })}
          >
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Selecione um mês" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {months.map((month) => (
                <SelectItem key={month} value={month.toLowerCase()} className="text-white">
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="observation" className="text-sm text-gray-400">OBSERVAÇÃO</Label>
          <Textarea
            id="observation"
            value={formData.observation}
            onChange={(e) => setFormData({ ...formData, observation: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
          />
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="space-y-0.5">
            <div className="text-base">Cliente assinante?</div>
            <div className="text-sm text-gray-400">
              Este cliente é um assinante recorrente do seu negócio
            </div>
          </div>
          <Switch
            checked={formData.isSubscriber}
            onCheckedChange={(checked) => setFormData({ ...formData, isSubscriber: checked })}
            className="data-[state=checked]:bg-orange-500"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg"
        >
          SALVAR
        </Button>
      </form>
    </div>
  )
}