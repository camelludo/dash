"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  FileCheck, Container, Truck, PackageCheck,
  Anchor, Ship, Navigation, PackageX, Building,
  ChevronLeft, ChevronRight, Timer, AlertCircle
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useRef, useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"

const timeline = [
  {
    step: "Booking",
    description: "Booking Confirmed",
    timestamp: "2024-03-10",
    status: "completed",
    icon: FileCheck
  },
  {
    step: "Release",
    description: "Container Released",
    timestamp: "2024-03-12",
    status: "completed",
    icon: Container
  },
  {
    step: "Empty Pickup",
    description: "Container Picked Up",
    timestamp: "2024-03-13",
    status: "completed",
    icon: Truck
  },
  {
    step: "Loading",
    description: "Loading in Progress",
    timestamp: "2024-03-14",
    status: "attention",
    icon: PackageCheck,
    message: "Loading delayed by 2 hours"
  },
  {
    step: "Gate In",
    description: "Pending",
    timestamp: "2024-03-15",
    status: "pending",
    icon: Building
  },
  {
    step: "Departure",
    description: "ETD: Mar 15",
    timestamp: "2024-03-15",
    status: "pending",
    icon: Ship
  },
  {
    step: "Transit",
    description: "18 Days",
    timestamp: "-",
    status: "pending",
    icon: Navigation
  },
  {
    step: "Arrival",
    description: "ETA: Apr 02",
    timestamp: "2024-04-02",
    status: "pending",
    icon: Anchor
  },
  {
    step: "Discharge",
    description: "Pending",
    timestamp: "-",
    status: "pending",
    icon: PackageX
  },
  {
    step: "Delivery",
    description: "ETA+3",
    timestamp: "2024-04-05",
    status: "pending",
    icon: Truck
  }
]

export function OperationTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [showTooltip, setShowTooltip] = useState<{
    show: boolean;
    message: string;
    position: number;
  }>({ show: false, message: "", position: 0 })

  // Calculate operation progress
  const completedSteps = timeline.filter(step => step.status === "completed").length
  const totalSteps = timeline.length
  const progressPercentage = (completedSteps / totalSteps) * 100

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScroll)
      checkScroll()
      return () => scrollElement.removeEventListener('scroll', checkScroll)
    }
  }, [])

  return (
    <Card>
      <CardContent className="p-6">
        {/* Operation Progress */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 min-w-fit">
            <Timer className="h-5 w-5 text-primary" />
            <span className="font-medium">Operation Progress</span>
          </div>
          <div className="flex-1">
            <Progress value={progressPercentage} className="h-2" />
          </div>
          <div className="text-sm text-muted-foreground min-w-fit">
            {completedSteps}/{totalSteps} Steps
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-4">
          {/* Scroll Controls */}
          {showLeftArrow && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 h-8 w-8 bg-background/80 shadow-sm hover:bg-background"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}
          {showRightArrow && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 h-8 w-8 bg-background/80 shadow-sm hover:bg-background"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}

          {/* Timeline */}
          <div 
            ref={scrollRef}
            className="flex items-center gap-4 overflow-x-auto scrollbar-hide pb-4 px-2"
          >
            {timeline.map((item, index) => {
              const isLast = index === timeline.length - 1
              const isCompleted = item.status === "completed"
              const isAttention = item.status === "attention"

              return (
                <div 
                  key={item.step} 
                  className="relative flex-none"
                  onMouseEnter={() => {
                    if (isAttention && item.message) {
                      const element = scrollRef.current?.children[index] as HTMLElement
                      if (element) {
                        const rect = element.getBoundingClientRect()
                        const position = rect.left + rect.width / 2
                        setShowTooltip({ 
                          show: true, 
                          message: item.message,
                          position
                        })
                      }
                    }
                  }}
                  onMouseLeave={() => setShowTooltip({ show: false, message: "", position: 0 })}
                >
                  {/* Attention Required Tooltip */}
                  {showTooltip.show && isAttention && (
                    <div 
                      className="absolute -top-12 left-1/2 -translate-x-1/2 bg-destructive/10 text-destructive border-destructive/20 border rounded-lg py-1 px-2 whitespace-nowrap z-30"
                    >
                      <div className="flex items-center gap-1.5">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <p className="text-xs font-medium">{item.message}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col items-center w-24">
                    {/* Connection Line */}
                    {!isLast && (
                      <div className="absolute w-[120px] h-[2px] translate-x-[48px] top-4 -z-10">
                        <div className={cn(
                          "h-full transition-all duration-300",
                          isCompleted ? "bg-primary" :
                          isAttention ? "bg-destructive" :
                          "bg-muted"
                        )} />
                      </div>
                    )}

                    {/* Step Icon */}
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center mb-2",
                      isCompleted ? "bg-primary text-primary-foreground" : 
                      isAttention ? "bg-destructive text-destructive-foreground animate-pulse" : 
                      "bg-muted text-muted-foreground"
                    )}>
                      <item.icon className="h-4 w-4" />
                    </div>

                    {/* Step Label */}
                    <div className="text-center">
                      <p className={cn(
                        "text-xs font-medium",
                        isCompleted ? "text-primary" :
                        isAttention ? "text-destructive" :
                        "text-muted-foreground"
                      )}>
                        {item.step}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">
                        {item.description}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">
                        {item.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}