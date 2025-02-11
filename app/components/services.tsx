import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Pen, Megaphone, Search } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Blog Writing",
      description: "Engaging and informative blog posts that drive traffic and establish authority.",
      icon: Pen,
    },
    {
      title: "Copywriting",
      description: "Persuasive copy that converts visitors into customers and boosts your bottom line.",
      icon: Megaphone,
    },
    {
      title: "SEO Content",
      description: "SEO-optimized content that improves your search engine rankings and visibility.",
      icon: Search,
    },
  ]

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

