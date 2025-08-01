import React, { ReactNode } from 'react'
import {Zap, CheckCircle, Brain, TrendingUp, Loader2Icon,} from "lucide-react"

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='w-full min-h-screen flex'>
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
      <div className='w-1/2 min-h-screen'>
      {children}
      </div>
    </div>
  )
}

export default layout
