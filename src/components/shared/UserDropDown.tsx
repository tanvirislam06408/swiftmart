"use client"

import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"



interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null;
}

interface UserDropDownProps {
  user?: User;
}

export function DropdownMenuAvatar({ user }: UserDropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="rounded-full"><Avatar>
          <AvatarImage src={user?.image || undefined} alt={user?.name} />
          <AvatarFallback>{user?.name.slice(0, 2)}</AvatarFallback>
        </Avatar></Button>} />
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <Link href={`/dashboard/${user?.role}/profile`}>
          <DropdownMenuItem>
            <BadgeCheckIcon />
            profile
          </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={async()=>await authClient.signOut()}>
          <LogOutIcon/>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
