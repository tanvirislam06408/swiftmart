"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { 
  Users, 
  Package, 
  ShoppingCart, 
  DollarSign, 
  ArrowRight,
  ShieldAlert,
  UserCheck,
  UserX,
  Activity,
  BarChart3,
  CreditCard
} from "lucide-react";

export default function AdminDashboard() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center p-8 space-y-4">
        <div className="h-12 w-12 rounded-full border-4 border-[#14B8A6]/20 border-t-[#14B8A6] animate-spin" />
        <p className="text-gray-500 font-medium animate-pulse">Loading admin workspace...</p>
      </div>
    );
  }

  const user = session?.user;

  // Mock Admin Metrics
  const metrics = [
    {
      title: "Total Users",
      value: "1,248",
      description: "24 registered today",
      icon: Users,
      color: "from-blue-500 to-indigo-600",
      href: "/dashboard/admin/users"
    },
    {
      title: "Active Products",
      value: "184 Listings",
      description: "12 pending approval",
      icon: Package,
      color: "from-teal-500 to-emerald-600",
      href: "/dashboard/admin/products"
    },
    {
      title: "Total Bookings",
      value: "5,640 Orders",
      description: "85 completed this week",
      icon: ShoppingCart,
      color: "from-amber-500 to-orange-600",
      href: "/dashboard/admin/orders"
    },
    {
      title: "Commission Earnings",
      value: "$28,950.00",
      description: "15% platform booking fee",
      icon: DollarSign,
      color: "from-purple-500 to-pink-600",
      href: "/dashboard/admin/payments"
    }
  ];

  // Mock recent logs
  const logs = [
    {
      id: 1,
      type: "block",
      message: "Admin blocked user 'spammer@example.com'",
      time: "10 mins ago",
      icon: UserX,
      iconColor: "text-red-600 bg-red-50 border-red-100"
    },
    {
      id: 2,
      type: "delete_prod",
      message: "Product 'Milan Fashion Week VIP' deleted due to copyright claim",
      time: "1 hour ago",
      icon: ShieldAlert,
      iconColor: "text-amber-600 bg-amber-50 border-amber-100"
    },
    {
      id: 3,
      type: "unblock",
      message: "Admin unblocked user 'john.doe@example.com'",
      time: "3 hours ago",
      icon: UserCheck,
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100"
    },
    {
      id: 4,
      type: "payout",
      message: "Sent payout of $4,850.00 to seller 'Paris tours corp'",
      time: "Yesterday",
      icon: DollarSign,
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* Welcome Header */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0E1F2B] via-[#122A3C] to-[#14B8A6] p-6 md:p-10 text-white shadow-xl">
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_bottom_right,var(--color-primary),transparent)]" />
        <div className="relative z-10 space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-red-200 border border-red-500/20">
            System Administration
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Hello, Administrator <span className="text-teal-300">{user?.name || "Admin"}</span>
          </h1>
          <p className="text-teal-50/80 text-sm md:text-base leading-relaxed">
            Welcome to the SwiftMart administrative workspace. Monitor platform activity, manage registered accounts, handle catalog products, and review global statistics.
          </p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <Link 
              key={idx} 
              href={metric.href} 
              className="card-base card-hover p-6 flex flex-col justify-between group hover:border-[#14B8A6]/40 cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${metric.color} text-white shadow-md`}>
                  <Icon size={22} />
                </div>
                <span className="text-xs font-medium text-gray-400 group-hover:text-[#14B8A6] flex items-center gap-1 transition-colors">
                  Manage <ArrowRight size={12} />
                </span>
              </div>
              <div className="mt-5 space-y-1">
                <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-950 transition-colors">{metric.value}</h3>
                <p className="text-xs text-gray-400">{metric.description}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Tools & Platform Activity logs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Quick Tools (Left) */}
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Activity size={18} className="text-[#14B8A6]" /> Administrative Tools
          </h2>

          <div className="flex flex-col gap-4">
            <Link 
              href="/dashboard/admin/users"
              className="card-base card-hover p-5 flex items-center gap-4 border border-gray-100 hover:border-teal-500/20 group"
            >
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-650 group-hover:bg-blue-650 group-hover:text-white transition-colors duration-300">
                <Users size={22} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-gray-800 text-sm">Manage User Accounts</h4>
                <p className="text-xs text-gray-400">Block, unblock, or delete users</p>
              </div>
              <ArrowRight size={16} className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </Link>

            <Link 
              href="/dashboard/admin/products"
              className="card-base card-hover p-5 flex items-center gap-4 border border-gray-100 hover:border-teal-500/20 group"
            >
              <div className="p-3 rounded-xl bg-teal-50 text-[#14B8A6] group-hover:bg-[#14B8A6] group-hover:text-white transition-colors duration-300">
                <Package size={22} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-gray-800 text-sm">Manage Product Catalog</h4>
                <p className="text-xs text-gray-400">Review products in a table list</p>
              </div>
              <ArrowRight size={16} className="text-gray-300 group-hover:text-[#14B8A6] group-hover:translate-x-1 transition-all" />
            </Link>

            <Link 
              href="/dashboard/admin/analytics"
              className="card-base card-hover p-5 flex items-center gap-4 border border-gray-100 hover:border-teal-500/20 group"
            >
              <div className="p-3 rounded-xl bg-purple-50 text-purple-650 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                <BarChart3 size={22} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-gray-800 text-sm">Platform Analytics</h4>
                <p className="text-xs text-gray-400">View commission charts & logs</p>
              </div>
              <ArrowRight size={16} className="text-gray-300 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
            </Link>

            <Link 
              href="/dashboard/admin/payments"
              className="card-base card-hover p-5 flex items-center gap-4 border border-gray-100 hover:border-teal-500/20 group"
            >
              <div className="p-3 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-650 group-hover:text-white transition-colors duration-300">
                <CreditCard size={22} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-gray-800 text-sm">Payment History</h4>
                <p className="text-xs text-gray-400">Review platform receipts</p>
              </div>
              <ArrowRight size={16} className="text-gray-300 group-hover:text-orange-650 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>

        {/* System Activity logs (Right) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">System Activity Logs</h2>
            <button className="text-xs font-semibold text-[#14B8A6] hover:underline">
              Clear Logs
            </button>
          </div>

          <div className="card-base p-6 space-y-5">
            {logs.map((log) => {
              const LogIcon = log.icon;
              return (
                <div key={log.id} className="flex gap-4 items-start group">
                  <div className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${log.iconColor}`}>
                    <LogIcon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 leading-snug">{log.message}</p>
                    <span className="text-[10px] text-gray-400 mt-1 block">{log.time} • Platform Daemon</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}