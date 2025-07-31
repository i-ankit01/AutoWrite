'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {Zap, CheckCircle, Brain, TrendingUp,} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function RegisterPage() {
  const [formData, setFormData] = useState({name : "", email : "", password : ""})
  const router = useRouter()

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData({...formData, [e.target.id] : e.target.value})
  }

  const handleSubmit = async (e:any)=>{
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/register", {
        method : "POST",
        body : JSON.stringify(formData)
      })

      const data = await response.json();
      console.log(data)

      if(response.ok){
        alert("Account Created")
        router.push("/dashboard")
      } else alert("something went wrong")

    } 
    catch (e:any){
      console.log("error" , e)
    }
  }
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Features */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-12 py-16 text-white">
          
          <div className="mb-12">  
            <h1 className="text-4xl font-bold mb-3">AutoWrite</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              An open source platform that helps in generating high quality AI content in seconds.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold ">AI content generation</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Generate content without worrying about prompts
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Multi-Platform Content Generator</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Supports diverse content formats (tweets, Instagram captions, etc.) for various platforms
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Enhance Your Social Engagement</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Improve your social presence by generating high quality ideas, contents, posts etc
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center space-x-6 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Authenticity</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="w-full max-w-md">

          {/* Registration Card */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl font-semibold text-center">Create Account</CardTitle>
              <CardDescription className="text-center">
                Join thousands of developers building with Appwrite
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <Input id="name" value={formData.name} onChange={handleChange} type="text" placeholder="Enter your full name" className="h-11" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="h-11" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    className="h-11"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90 cursor-pointer text-white font-medium">
                    Create Account
                  </Button>
                </div>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">OR</span>
                </div>
              </div>


              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-primary hover:underline font-medium">
                  Sign in
                </Link>
              </div>

              <div className="text-center text-xs text-muted-foreground">
                By creating an account, you agree to our{" "}
                <Link href="#" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
