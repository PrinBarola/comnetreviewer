export const studyContent: Record<number, any> = {
  1: {
    title: "Single-Area OSPFv2 Concepts",
    description: "Understanding OSPF link-state routing protocol fundamentals",
    keyTopics: ["OSPF Features", "OSPF Packets", "OSPF Operation", "DR/BDR"],
    concepts: [
      {
        title: "OSPF Overview",
        description:
          "OSPF (Open Shortest Path First) is a link-state routing protocol developed as an alternative to RIP. It offers faster convergence and scales to larger networks.",
        points: [
          "Link-state routing protocol using Dijkstra SPF algorithm",
          "Uses areas for scalability (single-area vs multiarea)",
          "Supports hierarchical network design",
          "Faster convergence than distance vector protocols",
        ],
      },
      {
        title: "OSPF Components",
        description: "OSPF uses three main databases to maintain routing information",
        points: [
          "Adjacency Database (Neighbor Table) - Lists all neighbor routers",
          "Link-State Database (Topology Table) - Contains all routers in the area",
          "Forwarding Database (Routing Table) - Best routes calculated by SPF",
        ],
      },
      {
        title: "OSPF Packet Types",
        description: "Five types of packets used for communication",
        points: [
          "Type 1: Hello - Discovers neighbors and maintains adjacencies",
          "Type 2: DBD - Database Description for synchronization",
          "Type 3: LSR - Link-State Request for specific records",
          "Type 4: LSU - Link-State Update containing LSAs",
          "Type 5: LSAck - Acknowledgment packets",
        ],
      },
      {
        title: "OSPF Operational States",
        description: "Seven states OSPF progresses through to reach convergence",
        points: [
          "Down State - No Hello packets received",
          "Init State - Hello packets received",
          "Two-Way State - Bidirectional communication established",
          "ExStart State - Master/slave relationship determined",
          "Exchange State - DBD packets exchanged",
          "Loading State - LSRs and LSUs exchanged",
          "Full State - Databases fully synchronized",
        ],
      },
      {
        title: "DR and BDR Election",
        description: "On multiaccess networks, OSPF elects a Designated Router (DR) and Backup DR (BDR)",
        points: [
          "Reduces LSA flooding on multiaccess networks",
          "DR is collection/distribution point for LSAs",
          "BDR serves as backup if DR fails",
          "Other routers become DROTHERs",
          "Election based on router priority and router ID",
        ],
      },
    ],
    commands: [
      {
        command: "show ip ospf neighbor",
        description: "Displays the adjacency database (neighbor table)",
      },
      {
        command: "show ip ospf database",
        description: "Displays the link-state database (topology table)",
      },
      {
        command: "show ip route",
        description: "Displays the forwarding database (routing table)",
      },
    ],
  },
  2: {
    title: "Single-Area OSPFv2 Configuration",
    description: "Configuring and verifying OSPF in a single-area network",
    keyTopics: ["OSPF Configuration", "Router ID", "Network Command", "Passive Interfaces", "OSPF Verification"],
    concepts: [
      {
        title: "OSPF Configuration Steps",
        description: "Basic steps to configure OSPF on a router",
        points: [
          "Enable OSPF with 'router ospf process-id' command",
          "Configure router ID (optional but recommended)",
          "Enable OSPF on interfaces using network command or ip ospf command",
          "Verify OSPF configuration and adjacencies",
        ],
      },
      {
        title: "Router ID Configuration",
        description: "Three methods to determine OSPF router ID (in priority order)",
        points: [
          "Explicitly configured with 'router-id' command (highest priority)",
          "Highest IPv4 address of any loopback interface",
          "Highest IPv4 address of any active physical interface (lowest priority)",
          "Router ID is a 32-bit value formatted like an IPv4 address",
        ],
      },
      {
        title: "Network Command",
        description: "Enable OSPF on interfaces using the network command",
        points: [
          "Syntax: network network-address wildcard-mask area area-id",
          "Uses wildcard mask (inverse of subnet mask)",
          "Matches interfaces based on IP address range",
          "Configured in OSPF router configuration mode",
        ],
      },
      {
        title: "Interface Configuration Method",
        description: "Alternative method to enable OSPF directly on interfaces",
        points: [
          "Command: ip ospf process-id area area-id",
          "Configured in interface configuration mode",
          "More precise control over which interfaces run OSPF",
          "Recommended for modern OSPF configurations",
        ],
      },
      {
        title: "Passive Interfaces",
        description: "Prevent OSPF updates on specific interfaces",
        points: [
          "Command: passive-interface interface-id",
          "Stops Hello packets on the interface",
          "Network is still advertised in OSPF",
          "Used on interfaces with no OSPF neighbors (e.g., user LANs)",
          "Can use 'passive-interface default' then enable specific interfaces",
        ],
      },
      {
        title: "OSPF Cost Metric",
        description: "Understanding and modifying OSPF cost",
        points: [
          "Cost = Reference Bandwidth / Interface Bandwidth",
          "Default reference bandwidth is 100 Mbps",
          "Modify with 'auto-cost reference-bandwidth' command",
          "Manually set cost with 'ip ospf cost' interface command",
          "Lower cost is preferred",
        ],
      },
    ],
    commands: [
      {
        command: "router ospf 10",
        description: "Enable OSPF process 10 (process-id is locally significant)",
      },
      {
        command: "router-id 1.1.1.1",
        description: "Manually configure OSPF router ID",
      },
      {
        command: "network 192.168.1.0 0.0.0.255 area 0",
        description: "Enable OSPF on interfaces matching the network range",
      },
      {
        command: "ip ospf 10 area 0",
        description: "Enable OSPF directly on an interface (interface config mode)",
      },
      {
        command: "passive-interface GigabitEthernet0/0",
        description: "Make an interface passive (no Hello packets sent)",
      },
      {
        command: "show ip ospf interface",
        description: "Display OSPF interface information",
      },
      {
        command: "show ip ospf neighbor",
        description: "Display OSPF neighbor adjacencies",
      },
      {
        command: "show ip protocols",
        description: "Display routing protocol information including OSPF",
      },
      {
        command: "auto-cost reference-bandwidth 10000",
        description: "Set reference bandwidth to 10 Gbps for cost calculation",
      },
      {
        command: "ip ospf cost 50",
        description: "Manually set OSPF cost on an interface",
      },
    ],
  },
  3: {
    title: "Network Security Concepts",
    description: "Understanding network security threats and mitigation strategies",
    keyTopics: ["Security Threats", "Cryptography", "AAA", "Security Best Practices"],
    concepts: [
      {
        title: "Common Security Threats",
        description: "Understanding various types of network attacks",
        points: [
          "Malware - Viruses, worms, trojans, ransomware",
          "Social Engineering - Phishing, pretexting, baiting",
          "DoS/DDoS - Denial of Service attacks",
          "Man-in-the-Middle - Intercepting communications",
          "Password Attacks - Brute force, dictionary attacks",
        ],
      },
      {
        title: "Cryptography Basics",
        description: "Methods to secure data through encryption",
        points: [
          "Symmetric Encryption - Same key for encryption/decryption (DES, 3DES, AES)",
          "Asymmetric Encryption - Public/private key pairs (RSA)",
          "Hashing - One-way functions for integrity (MD5, SHA)",
          "Digital Signatures - Verify authenticity and integrity",
        ],
      },
      {
        title: "AAA Framework",
        description: "Authentication, Authorization, and Accounting",
        points: [
          "Authentication - Verify user identity (who you are)",
          "Authorization - Determine access rights (what you can do)",
          "Accounting - Track user activities (what you did)",
          "Protocols: RADIUS, TACACS+",
        ],
      },
    ],
    commands: [],
  },
  4: {
    title: "ACL Concepts",
    description: "Understanding Access Control Lists for packet filtering",
    keyTopics: ["ACL Purpose", "Wildcard Masks", "ACL Types", "ACL Placement"],
    concepts: [
      {
        title: "ACL Overview",
        description: "ACLs are sequential lists of permit/deny statements used to filter packets",
        points: [
          "Filter traffic based on packet header information",
          "Provide basic network security",
          "Control traffic flow and bandwidth",
          "Processed top-down until a match is found",
          "Implicit deny all at the end",
        ],
      },
      {
        title: "Wildcard Masks",
        description: "Used to identify which bits to match in an IP address",
        points: [
          "0 = match the bit, 1 = ignore the bit",
          "Opposite of subnet masks",
          "Calculate: 255.255.255.255 - subnet mask",
          "Keywords: host (0.0.0.0) and any (255.255.255.255)",
        ],
      },
      {
        title: "ACL Types",
        description: "Standard vs Extended ACLs",
        points: [
          "Standard ACLs - Filter based on source IP only (1-99, 1300-1999)",
          "Extended ACLs - Filter on source/dest IP, protocol, ports (100-199, 2000-2699)",
          "Named ACLs - Use descriptive names instead of numbers",
          "Numbered ACLs - Use number ranges",
        ],
      },
      {
        title: "ACL Placement Guidelines",
        description: "Where to place ACLs for optimal performance",
        points: [
          "Standard ACLs - Place close to destination",
          "Extended ACLs - Place close to source",
          "Consider organizational control and bandwidth",
          "One ACL per interface, per direction, per protocol",
        ],
      },
    ],
    commands: [],
  },
  5: {
    title: "ACLs for IPv4 Configuration",
    description: "Configuring and implementing Access Control Lists",
    keyTopics: ["Standard ACLs", "Extended ACLs", "Named ACLs", "VTY Security"],
    concepts: [
      {
        title: "Standard ACL Configuration",
        description: "Filter based on source IP address only",
        points: [
          "Numbered: access-list 1-99 or 1300-1999",
          "Named: ip access-list standard NAME",
          "Apply with: ip access-group",
          "Place close to destination",
        ],
      },
      {
        title: "Extended ACL Configuration",
        description: "Filter on multiple criteria",
        points: [
          "Numbered: access-list 100-199 or 2000-2699",
          "Named: ip access-list extended NAME",
          "Can filter on protocol, source/dest IP, ports",
          "Place close to source",
          "TCP established keyword for stateful filtering",
        ],
      },
      {
        title: "Modifying ACLs",
        description: "Two methods to modify existing ACLs",
        points: [
          "Text Editor Method - Copy, edit, remove old, paste new",
          "Sequence Number Method - Use sequence numbers to insert/delete ACEs",
          "Cannot overwrite existing sequence numbers",
        ],
      },
      {
        title: "Securing VTY Lines",
        description: "Use ACLs to restrict remote access",
        points: [
          "Create ACL to permit authorized hosts",
          "Apply with access-class command on VTY lines",
          "Restricts Telnet/SSH access",
        ],
      },
    ],
    commands: [
      {
        command: "access-list 10 permit 192.168.1.0 0.0.0.255",
        description: "Create standard ACL permitting a network",
      },
      {
        command: "ip access-list extended WEB-FILTER",
        description: "Create named extended ACL",
      },
      {
        command: "ip access-group 10 in",
        description: "Apply ACL to interface inbound",
      },
      {
        command: "show ip access-lists",
        description: "Display all configured ACLs",
      },
      {
        command: "show ip interface",
        description: "Verify ACL applied to interface",
      },
    ],
  },
  6: {
    title: "NAT for IPv4",
    description: "Network Address Translation for IPv4 address conservation",
    keyTopics: ["NAT Characteristics", "Static NAT", "Dynamic NAT", "PAT"],
    concepts: [
      {
        title: "NAT Overview",
        description: "Translates private IP addresses to public addresses",
        points: [
          "Conserves public IPv4 addresses",
          "Allows private networks to access internet",
          "Four address types: inside local, inside global, outside local, outside global",
          "Operates at border router between stub network and ISP",
        ],
      },
      {
        title: "Static NAT",
        description: "One-to-one mapping of addresses",
        points: [
          "Permanent mapping configured manually",
          "Used for servers that need consistent public address",
          "Requires one public IP per internal host",
          "Command: ip nat inside source static LOCAL GLOBAL",
        ],
      },
      {
        title: "Dynamic NAT",
        description: "Uses pool of public addresses",
        points: [
          "First-come, first-served allocation",
          "Define pool with ip nat pool command",
          "Create ACL to identify inside addresses",
          "Bind ACL to pool",
          "Still requires enough public IPs for simultaneous users",
        ],
      },
      {
        title: "PAT (NAT Overload)",
        description: "Maps multiple private IPs to single public IP",
        points: [
          "Uses port numbers to differentiate connections",
          "Most common NAT implementation",
          "Can use single IP or pool of IPs",
          "Add overload keyword to configuration",
          "Supports thousands of internal hosts with one public IP",
        ],
      },
    ],
    commands: [
      {
        command: "ip nat inside source static 192.168.1.10 209.165.200.5",
        description: "Configure static NAT",
      },
      {
        command: "ip nat pool POOL1 209.165.200.226 209.165.200.240 netmask 255.255.255.224",
        description: "Define NAT pool",
      },
      {
        command: "ip nat inside source list 1 pool POOL1 overload",
        description: "Configure PAT with pool",
      },
      {
        command: "show ip nat translations",
        description: "Display active NAT translations",
      },
      {
        command: "show ip nat statistics",
        description: "Display NAT statistics",
      },
    ],
  },
  7: {
    title: "WAN Concepts",
    description: "Understanding Wide Area Network technologies and connections",
    keyTopics: ["WAN Technologies", "WAN Connections", "PPP", "HDLC", "Modern WAN Solutions"],
    concepts: [
      {
        title: "WAN Overview",
        description: "Wide Area Networks connect LANs over large geographic distances",
        points: [
          "Operates over large geographic areas",
          "Connects LANs and other types of networks",
          "Typically owned and managed by service providers",
          "Uses various connection types and technologies",
        ],
      },
      {
        title: "WAN Connection Types",
        description: "Different methods to connect to WANs",
        points: [
          "Dedicated Leased Lines - Permanent point-to-point connections (T1/E1, T3/E3)",
          "Circuit-Switched - Dial-up connections established on demand (ISDN, dial-up)",
          "Packet-Switched - Shared connections using virtual circuits (Frame Relay, ATM)",
          "Internet-based - VPNs over public internet (IPsec, SSL VPN)",
        ],
      },
      {
        title: "PPP (Point-to-Point Protocol)",
        description: "Standard WAN encapsulation protocol for point-to-point links",
        points: [
          "HDLC-like encapsulation for data transport",
          "LCP (Link Control Protocol) - Establishes, configures, and tests links",
          "NCP (Network Control Protocol) - Configures network layer protocols",
          "Supports authentication (PAP, CHAP)",
          "Multilink PPP for load balancing",
        ],
      },
      {
        title: "HDLC (High-Level Data Link Control)",
        description: "Default encapsulation on Cisco serial interfaces",
        points: [
          "Cisco's HDLC is proprietary (includes protocol type field)",
          "Default encapsulation on serial interfaces",
          "Simple, no authentication or error recovery",
          "Point-to-point and multipoint configurations",
        ],
      },
      {
        title: "Modern WAN Solutions",
        description: "Current WAN technologies replacing legacy solutions",
        points: [
          "MPLS - Multiprotocol Label Switching for efficient routing",
          "Metro Ethernet - Ethernet-based WAN connections",
          "Broadband - DSL, Cable, Fiber (FTTH/FTTP)",
          "Wireless - 4G LTE, 5G, Satellite",
          "SD-WAN - Software-Defined WAN for intelligent path selection",
        ],
      },
      {
        title: "WAN Terminology",
        description: "Common WAN terms and concepts",
        points: [
          "CPE (Customer Premises Equipment) - Devices at customer site",
          "DCE (Data Communications Equipment) - Provides clocking",
          "DTE (Data Terminal Equipment) - Connects to DCE",
          "Demarcation Point - Where provider responsibility ends",
          "Local Loop - Connection from customer to CO (Central Office)",
        ],
      },
    ],
    commands: [
      {
        command: "encapsulation ppp",
        description: "Configure PPP encapsulation on a serial interface",
      },
      {
        command: "encapsulation hdlc",
        description: "Configure HDLC encapsulation (default on Cisco)",
      },
      {
        command: "show interfaces serial 0/0/0",
        description: "Display serial interface information including encapsulation",
      },
      {
        command: "ppp authentication chap",
        description: "Enable CHAP authentication on PPP link",
      },
      {
        command: "clock rate 64000",
        description: "Set clock rate on DCE interface (bits per second)",
      },
    ],
  },
  8: {
    title: "VPN and IPsec Concepts",
    description: "Virtual Private Networks and IPsec security framework",
    keyTopics: ["VPN Technology", "Types of VPNs", "IPsec", "Encryption"],
    concepts: [
      {
        title: "VPN Overview",
        description: "Secure connections over public networks",
        points: [
          "Virtual - Uses public network infrastructure",
          "Private - Traffic is encrypted for confidentiality",
          "Benefits: Cost savings, security, scalability, compatibility",
          "Types: Site-to-site and Remote access",
        ],
      },
      {
        title: "Types of VPNs",
        description: "Different VPN implementations",
        points: [
          "Site-to-Site - Connects networks, transparent to end hosts",
          "Remote Access - Individual users connect to corporate network",
          "SSL VPN - Browser-based, clientless or client-based",
          "IPsec VPN - Requires VPN client, more secure",
          "GRE over IPsec - Supports multicast and routing protocols",
          "DMVPN - Dynamic Multipoint VPN for scalable hub-and-spoke",
        ],
      },
      {
        title: "IPsec Framework",
        description: "Security framework for IP networks",
        points: [
          "Confidentiality - Encryption (DES, 3DES, AES, SEAL)",
          "Integrity - Hashing (MD5, SHA)",
          "Authentication - Pre-shared keys or RSA certificates",
          "Secure Key Exchange - Diffie-Hellman groups",
          "Protocols: AH (Authentication Header) or ESP (Encapsulating Security Payload)",
        ],
      },
      {
        title: "IPsec Modes",
        description: "Transport vs Tunnel mode",
        points: [
          "Transport Mode - Only payload encrypted, original IP header intact",
          "Tunnel Mode - Entire packet encrypted, new IP header added",
          "Tunnel mode most common for VPNs",
          "ESP provides both confidentiality and authentication",
        ],
      },
    ],
    commands: [],
  },
}
