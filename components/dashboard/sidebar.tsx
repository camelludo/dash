"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import {
  LayoutDashboard,
  FileText,
  Ship,
  Calculator,
  ClipboardCheck,
  Settings,
  ScrollText,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Stone Projects', href: '/dashboard/projects', icon: ScrollText },
  { name: 'Operations', href: '/dashboard/operations', icon: Ship },
  { name: 'Documents', href: '/dashboard/documents', icon: FileText },
  { name: 'Quotations', href: '/dashboard/quotations', icon: Calculator },
  { name: 'Quality Control', href: '/dashboard/qc', icon: ClipboardCheck },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setIsCollapsed(true)
      } else {
        setIsCollapsed(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={cn(
      "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col",
      isCollapsed ? "lg:w-20" : "lg:w-72",
      "transition-all duration-300"
    )}>
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-white px-6">
        <div className="flex h-16 shrink-0 items-center justify-between">
          <div className={cn(
            "flex items-center",
            isCollapsed ? "justify-center" : "justify-start"
          )}>
            {!isCollapsed ? (
              <Image
                src="https://marmolturco.com/wp-content/uploads/2018/06/go2stone-siyah-logo@4x.png"
                alt="Go2Stone Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            ) : (
              <Ship className="h-8 w-8 text-primary" />
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="hidden xl:flex"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 transition-colors',
                          isActive
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                          isCollapsed && "justify-center"
                        )}
                        title={isCollapsed ? item.name : undefined}
                      >
                        <item.icon className="h-6 w-6 shrink-0" />
                        {!isCollapsed && item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}