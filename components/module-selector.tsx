"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Network, Shield, Lock, Globe, Wifi, Key } from "lucide-react"

interface ModuleSelectorProps {
  onSelectModule: (module: number) => void
}

const modules = [
  {
    id: 1,
    title: "Single-Area OSPFv2 Concepts",
    icon: Network,
    topics: ["OSPF Features", "OSPF Packets", "OSPF Operation", "DR/BDR Election"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Single-Area OSPFv2 Configuration",
    icon: Network,
    topics: ["Router ID", "Network Command", "Passive Interfaces", "Verification"],
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: 3,
    title: "Network Security Concepts",
    icon: Shield,
    topics: ["Security Threats", "Security Best Practices", "Cryptography", "AAA"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "ACL Concepts",
    icon: Lock,
    topics: ["ACL Purpose", "Wildcard Masks", "ACL Guidelines", "ACL Types"],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 5,
    title: "ACLs for IPv4 Configuration",
    icon: Key,
    topics: ["Standard ACLs", "Extended ACLs", "Named ACLs", "VTY Security"],
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 6,
    title: "NAT for IPv4",
    icon: Globe,
    topics: ["NAT Characteristics", "Static NAT", "Dynamic NAT", "PAT"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 7,
    title: "WAN Concepts",
    icon: Wifi,
    topics: ["WAN Purpose", "WAN Operations", "Traditional WAN", "Modern WAN"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 8,
    title: "VPN and IPsec Concepts",
    icon: Shield,
    topics: ["VPN Technology", "Types of VPNs", "IPsec Framework", "Encryption"],
    color: "from-violet-500 to-purple-500",
  },
]

export default function ModuleSelector({ onSelectModule }: ModuleSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {modules.map((module) => {
        const Icon = module.icon
        return (
          <Card
            key={module.id}
            className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden bg-white/80 backdrop-blur"
            onClick={() => onSelectModule(module.id)}
          >
            <div className={`h-2 bg-gradient-to-r ${module.color}`} />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${module.color} text-white`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-sm font-semibold text-gray-500">Module {module.id}</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {module.title}
              </h3>
              <ul className="space-y-2">
                {module.topics.map((topic, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                Start Learning
              </Button>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
