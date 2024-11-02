import { notFound } from 'next/navigation'
import { MenuSection } from './menu-section'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Search, ChevronUp } from 'lucide-react'
import { useState } from 'react'

async function getRestaurantData(restaurantId: string) {
  // In a real application, this would fetch data from your database
  // For this example, we'll return mock data
  return {
    name: "Gourmet Delights",
    description: "Experience culinary excellence with our handcrafted dishes.",
    menu: [
      {
        name: "Starters",
        items: [
          { id: 1, name: "Truffle Arancini", description: "Crispy risotto balls with black truffle", price: 12.99, image: "/placeholder.svg?height=100&width=100" },
          { id: 2, name: "Tuna Tartare", description: "Fresh tuna with avocado and citrus dressing", price: 14.99, image: "/placeholder.svg?height=100&width=100" },
        ]
      },
      {
        name: "Main Courses",
        items: [
          { id: 3, name: "Wagyu Steak", description: "Premium Japanese beef with roasted vegetables", price: 39.99, image: "/placeholder.svg?height=100&width=100" },
          { id: 4, name: "Lobster Risotto", description: "Creamy risotto with fresh Maine lobster", price: 29.99, image: "/placeholder.svg?height=100&width=100" },
        ]
      },
      {
        name: "Desserts",
        items: [
          { id: 5, name: "Crème Brûlée", description: "Classic French dessert with Madagascar vanilla", price: 9.99, image: "/placeholder.svg?height=100&width=100" },
          { id: 6, name: "Chocolate Fondant", description: "Warm chocolate cake with molten center", price: 11.99, image: "/placeholder.svg?height=100&width=100" },
        ]
      },
    ]
  }
}

export default function MenuPage({ params }: { params: { restaurantId: string, tableId: string } }) {
  const { restaurantId, tableId } = params
  const [searchTerm, setSearchTerm] = useState("")
  const [cartItems, setCartItems] = useState<{id: number, name: string, price: number, quantity: number}[]>([])
  const [showCart, setShowCart] = useState(false)

  const restaurantData = await getRestaurantData(restaurantId)

  if (!restaurantData) {
    notFound()
  }

  const filteredMenu = restaurantData.menu.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.items.length > 0)

  const addToCart = (item: {id: number, name: string, price: number}) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id)
      if (existingItem) {
        return prevItems.map(i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i)
      } else {
        return [...prevItems, {...item, quantity: 1}]
      }
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{restaurantData.name}</h1>
            <p className="text-sm">Table: {tableId}</p>
          </div>
          <Button variant="outline" size="icon" onClick={() => setShowCart(!showCart)}>
            <ShoppingCart className="h-6 w-6" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-destructive text-destructive-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {cartItems.length}
              </span>
            )}
          </Button>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="mb-6 relative">
          <Input
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>

        {filteredMenu.map((section, index) => (
          <MenuSection key={index} section={section} addToCart={addToCart} />
        ))}
      </main>

      {showCart && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
          <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-card text-card-foreground shadow-lg p-6 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Your Order</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center mb-2">
                    <span>{item.name} x{item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                    <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
                </div>
                <Button className="w-full mt-4">Place Order</Button>
              </>
            )}
            <Button variant="outline" className="mt-4 w-full" onClick={() => setShowCart(false)}>
              Close
              <ChevronUp className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <footer className="bg-muted text-muted-foreground p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 {restaurantData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}