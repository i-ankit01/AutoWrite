'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Header from "../_components/Header";
import { useState } from "react";

export default function BillingPage() {
    const [userSearchInput , setUserSearchInput] = useState<string>()

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small businesses",
      features: [
        "Up to 3 social accounts",
        "50 AI-generated posts/month",
        "Basic analytics",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 10 social accounts",
        "200 AI-generated posts/month",
        "Advanced analytics",
        "Priority support",
        "Custom brand voice",
        "Team collaboration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited social accounts",
        "Unlimited AI-generated posts",
        "White-label solution",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security",
      ],
      popular: false,
    },
  ];

  return (
    <div>
        <Header setSearchValue={(value:string)=>(setUserSearchInput(value))}/>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-lg text-light-primary max-w-2xl mx-auto">
              Flexible pricing options designed to grow with your business.
              Start free, upgrade anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-light-primary/10 hover:border-light-primary/20 transition-all duration-300 hover:shadow-lg ${
                  plan.popular ? "border-primary/30 shadow-lg scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-light-primary">{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-light-primary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full cursor-pointer ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-primary/10 hover:bg-primary/20 text-primary"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
