

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { getSession } from "@/lib/core/session";
import { DashboardSidebarNavItems } from "./DashboardSidebarNavItems";
import { redirect } from "next/navigation";
// Icon components are resolved inside the client component
// to avoid passing non-plain objects from a Server Component.





const navItems = {

  user: [
    {
      name: "Dashboard",
      path: "/dashboard/user",
      icon: "LayoutDashboard",
    },
    {
      name: "Add Product",
      path: "/dashboard/user/add-product",
      icon: "PlusCircle",
    },
    {
      name: "My Products",
      path: "/dashboard/user/products",
      icon: "Package",
    },
    {
      name: "Cart",
      path: "/dashboard/user/orders",
      icon: "ShoppingCart",
    },
    
    {
      name: "Profile",
      path: "/dashboard/user/profile",
      icon: "User",
    },
  ],

  admin: [
    {
      name: "Dashboard",
      path: "/dashboard/admin",
      icon: "LayoutDashboard",
    },
    {
      name: "Manage Users",
      path: "/dashboard/admin/users",
      icon: "Users",
    },
    {
      name: "Manage Products",
      path: "/dashboard/admin/products",
      icon: "Package",
    },
    {
      name: "Manage Orders",
      path: "/dashboard/admin/orders",
      icon: "ShoppingCart",
    },
    {
      name: "Platform Analytics",
      path: "/dashboard/admin/analytics",
      icon: "BarChart3",
    },
    {
      name: "Payment History",
      path: "/dashboard/admin/payments",
      icon: "CreditCard",
    },
    {
      name: "Profile",
      path: "/dashboard/admin/profile",
      icon: "User",
    },
  ],
};




export async function DashboardSidebar() {


  const user = await getSession()
  
  const items = navItems[user?.role] 
  
  
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h2 className="text-xl font-bold">hi</h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <DashboardSidebarNavItems items={items} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <p className="text-sm text-muted-foreground">
          © 2026 My App
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}