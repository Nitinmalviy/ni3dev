"use client"
import Header from '@/components/header'
import Footer from '@/components/footer'
import WorkExperince from '@/components/work-experince'
import HeroSection from '@/components/hero-section'
import NI3DEV from '@/components/NI3DEV'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <Header />
      {/* Hero Section */}
      <HeroSection />
      {/* Work Experince */}
      <WorkExperince />
      {/* NI3DEV */}
      <NI3DEV />
      {/* Footer */}
      <Footer />
    </div>
  )
}
