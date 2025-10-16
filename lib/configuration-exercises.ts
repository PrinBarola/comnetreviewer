export const configurationExercises: Record<number, any[]> = {
  1: [
    {
      title: "Configure Single-Area OSPF",
      difficulty: "Intermediate",
      scenario:
        "Configure OSPF on Router R1 with router ID 1.1.1.1. Enable OSPF on networks 192.168.1.0/24 and 10.0.0.0/30 in area 0.",
      requirements: [
        "Set router ID to 1.1.1.1",
        "Enable OSPF process 1",
        "Add both networks to area 0",
        "Verify OSPF is running",
      ],
      steps: [
        "Enter global configuration mode",
        "Start OSPF process with router ospf 1",
        "Set the router ID",
        "Use network commands to enable OSPF on interfaces",
        "Verify configuration",
      ],
      solution: `R1(config)# router ospf 1
R1(config-router)# router-id 1.1.1.1
R1(config-router)# network 192.168.1.0 0.0.0.255 area 0
R1(config-router)# network 10.0.0.0 0.0.0.3 area 0
R1(config-router)# end`,
      verification: "Use show ip ospf neighbor and show ip ospf interface to verify",
    },
    {
      title: "Configure Passive Interface",
      difficulty: "Beginner",
      scenario: "Configure GigabitEthernet0/0 as a passive interface in OSPF to prevent Hello packets from being sent.",
      requirements: [
        "Make G0/0 passive",
        "OSPF should still advertise the network",
        "No OSPF neighbors should form on G0/0",
      ],
      steps: ["Enter OSPF configuration mode", "Use passive-interface command", "Verify the configuration"],
      solution: `R1(config)# router ospf 1
R1(config-router)# passive-interface GigabitEthernet0/0
R1(config-router)# end`,
      verification: "Use show ip ospf interface to verify passive status",
    },
  ],
  5: [
    {
      title: "Configure Standard ACL",
      difficulty: "Beginner",
      scenario:
        "Create a standard ACL to permit traffic from network 192.168.10.0/24 and deny all other traffic. Apply it inbound on interface G0/0.",
      requirements: ["Use ACL number 10", "Permit 192.168.10.0/24", "Apply inbound on G0/0"],
      steps: ["Create the ACL in global config", "Add permit statement", "Apply to interface", "Verify configuration"],
      solution: `R1(config)# access-list 10 permit 192.168.10.0 0.0.0.255
R1(config)# interface GigabitEthernet0/0
R1(config-if)# ip access-group 10 in
R1(config-if)# end`,
      verification: "Use show ip access-lists and show ip interface G0/0",
    },
    {
      title: "Configure Extended ACL",
      difficulty: "Intermediate",
      scenario:
        "Create a named extended ACL called WEB-FILTER that permits HTTP and HTTPS traffic from 192.168.1.0/24 to any destination. Apply it outbound on G0/1.",
      requirements: [
        "Named ACL: WEB-FILTER",
        "Permit HTTP (port 80)",
        "Permit HTTPS (port 443)",
        "Source: 192.168.1.0/24",
        "Apply outbound on G0/1",
      ],
      steps: [
        "Create named extended ACL",
        "Add permit statements for HTTP and HTTPS",
        "Apply to interface outbound",
        "Verify",
      ],
      solution: `R1(config)# ip access-list extended WEB-FILTER
R1(config-ext-nacl)# permit tcp 192.168.1.0 0.0.0.255 any eq 80
R1(config-ext-nacl)# permit tcp 192.168.1.0 0.0.0.255 any eq 443
R1(config-ext-nacl)# exit
R1(config)# interface GigabitEthernet0/1
R1(config-if)# ip access-group WEB-FILTER out
R1(config-if)# end`,
      verification: "Use show access-lists WEB-FILTER and show ip interface G0/1",
    },
  ],
  6: [
    {
      title: "Configure Static NAT",
      difficulty: "Beginner",
      scenario:
        "Configure static NAT to map inside local address 192.168.1.10 to inside global address 209.165.200.5. G0/0 is inside, S0/0/0 is outside.",
      requirements: [
        "Static mapping: 192.168.1.10 to 209.165.200.5",
        "Configure inside interface",
        "Configure outside interface",
      ],
      steps: ["Create static NAT mapping", "Configure inside interface", "Configure outside interface", "Verify"],
      solution: `R1(config)# ip nat inside source static 192.168.1.10 209.165.200.5
R1(config)# interface GigabitEthernet0/0
R1(config-if)# ip nat inside
R1(config-if)# exit
R1(config)# interface Serial0/0/0
R1(config-if)# ip nat outside
R1(config-if)# end`,
      verification: "Use show ip nat translations and show ip nat statistics",
    },
    {
      title: "Configure PAT (NAT Overload)",
      difficulty: "Intermediate",
      scenario:
        "Configure PAT to allow network 192.168.0.0/16 to access the internet using the IP address of interface S0/0/0.",
      requirements: [
        "Create ACL to identify inside addresses",
        "Configure PAT using interface address",
        "Apply to interfaces",
      ],
      steps: [
        "Create ACL for inside network",
        "Configure NAT with overload",
        "Set inside/outside interfaces",
        "Verify",
      ],
      solution: `R1(config)# access-list 1 permit 192.168.0.0 0.0.255.255
R1(config)# ip nat inside source list 1 interface Serial0/0/0 overload
R1(config)# interface GigabitEthernet0/0
R1(config-if)# ip nat inside
R1(config-if)# exit
R1(config)# interface Serial0/0/0
R1(config-if)# ip nat outside
R1(config-if)# end`,
      verification: "Use show ip nat translations verbose and show ip nat statistics",
    },
  ],
}
