'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Loader2Icon,} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function LoginPage() {
  const [formData, setFormData] = useState({email : "", password : ""})
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // this is done to have dynamic controll over the inputs , for this you should have id and value provided to the input fields 
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData({...formData, [e.target.id] : e.target.value})
  }

  const handleSubmit = async (e:any)=>{
    e.preventDefault();
    try {
      setIsLoading(true)
      const response = await fetch("/api/auth/login", {
        method : "POST",
        body : JSON.stringify(formData)
      })

      const data = await response.json();
      console.log(data)

      if(response.ok){
        setIsLoading(false)
        alert("User Logged In")
        router.push("/dashboard")
      } else{
        setIsLoading(false)
         alert("something went wrong")
        }

    } 
    catch (e:any){
      console.log("error" , e)
    }
  }
  return (
      <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="w-full max-w-md">

          {/* Login Card */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl font-semibold text-center">Log In into you account</CardTitle>
              <CardDescription className="text-center">
                Enhance Your Reach with AutoWrite
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">

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
                    placeholder="Enter your password"
                    className="h-11"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90 cursor-pointer text-white font-medium " disabled={isLoading}>
                   {isLoading && <Loader2Icon className="animate-spin mr-1" />}
                    Login
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
                Do not have an account?{" "}
                <Link href="/auth/login" className="text-primary hover:underline font-medium">
                  Sign up
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
  )
}
