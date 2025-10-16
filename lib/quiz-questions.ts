export const quizQuestions: Record<number, any[]> = {
  1: [
    {
      type: "multiple-choice",
      question: "What type of routing protocol is OSPF?",
      options: ["Distance vector", "Link-state", "Path vector", "Hybrid"],
      correctAnswer: "Link-state",
      explanation:
        "OSPF is a link-state routing protocol that uses the Dijkstra SPF algorithm to calculate the shortest path.",
    },
    {
      type: "enumeration",
      question: "Which three databases does OSPF maintain? (Select 3)",
      options: [
        "Adjacency Database",
        "Link-State Database",
        "Forwarding Database",
        "Routing Database",
        "Topology Cache",
      ],
      correctAnswer: ["Adjacency Database", "Link-State Database", "Forwarding Database"],
      explanation:
        "OSPF maintains three databases: Adjacency (neighbor table), Link-State (topology table), and Forwarding (routing table).",
    },
    {
      type: "multiple-choice",
      question: "What multicast address does OSPF use for Hello packets?",
      options: ["224.0.0.5", "224.0.0.6", "224.0.0.9", "224.0.0.10"],
      correctAnswer: "224.0.0.5",
      explanation: "OSPF uses the multicast address 224.0.0.5 (All OSPF Routers) for Hello packets.",
    },
    {
      type: "true-false",
      question: "On point-to-point links, OSPF requires the election of a DR and BDR.",
      correctAnswer: "false",
      explanation:
        "Point-to-point links do NOT require DR/BDR election. DR/BDR is only needed on multiaccess networks like Ethernet.",
    },
    {
      type: "enumeration",
      question: "What are the five OSPF packet types? (Select 5)",
      options: [
        "Hello",
        "Database Description (DBD)",
        "Link-State Request (LSR)",
        "Link-State Update (LSU)",
        "Link-State Acknowledgment (LSAck)",
        "Route Update",
        "Keepalive",
      ],
      correctAnswer: [
        "Hello",
        "Database Description (DBD)",
        "Link-State Request (LSR)",
        "Link-State Update (LSU)",
        "Link-State Acknowledgment (LSAck)",
      ],
      explanation:
        "The five OSPF packet types are: Hello (Type 1), DBD (Type 2), LSR (Type 3), LSU (Type 4), and LSAck (Type 5).",
    },
    {
      type: "essay",
      question: "Explain the OSPF neighbor adjacency process from Down state to Full state.",
      correctAnswer: "",
      keyPoints: ["Down State", "Init State", "Two-Way State", "ExStart", "Exchange", "Loading", "Full"],
      explanation:
        "The process includes: Down (no Hellos), Init (Hellos received), Two-Way (bidirectional), ExStart (master/slave), Exchange (DBDs), Loading (LSRs/LSUs), Full (synchronized).",
    },
  ],
  4: [
    {
      type: "multiple-choice",
      question: "What is the primary purpose of an ACL?",
      options: [
        "Increase network speed",
        "Filter packets based on header information",
        "Encrypt network traffic",
        "Compress data packets",
      ],
      correctAnswer: "Filter packets based on header information",
      explanation:
        "ACLs are used to filter packets based on information found in the packet header, providing security and traffic control.",
    },
    {
      type: "multiple-choice",
      question: "In a wildcard mask, what does a binary 0 indicate?",
      options: ["Ignore the bit", "Match the bit", "Invert the bit", "Delete the bit"],
      correctAnswer: "Match the bit",
      explanation: "In wildcard masks, 0 means match the bit and 1 means ignore the bit (opposite of subnet masks).",
    },
    {
      type: "enumeration",
      question: "Which statements are true about ACL processing? (Select 3)",
      options: [
        "Processed top-down",
        "Stops at first match",
        "Implicit deny all at end",
        "Processed bottom-up",
        "Allows all traffic by default",
      ],
      correctAnswer: ["Processed top-down", "Stops at first match", "Implicit deny all at end"],
      explanation:
        "ACLs are processed sequentially from top to bottom, stop at the first match, and have an implicit deny all at the end.",
    },
    {
      type: "true-false",
      question: "Standard ACLs should be placed close to the source.",
      correctAnswer: "false",
      explanation:
        "Standard ACLs should be placed close to the DESTINATION. Extended ACLs should be placed close to the source.",
    },
    {
      type: "multiple-choice",
      question: "What is the wildcard mask to match the network 192.168.10.0/24?",
      options: ["0.0.0.255", "255.255.255.0", "0.0.0.0", "255.255.255.255"],
      correctAnswer: "0.0.0.255",
      explanation:
        "To match 192.168.10.0/24, use wildcard mask 0.0.0.255 (calculated as 255.255.255.255 - 255.255.255.0).",
    },
  ],
  5: [
    {
      type: "multiple-choice",
      question: "What is the number range for standard ACLs?",
      options: ["1-99", "100-199", "1-199", "1000-1999"],
      correctAnswer: "1-99",
      explanation: "Standard ACLs use numbers 1-99 and 1300-1999 (expanded range).",
    },
    {
      type: "multiple-choice",
      question: "Which command applies an ACL to an interface?",
      options: ["access-list", "ip access-group", "access-class", "ip access-list"],
      correctAnswer: "ip access-group",
      explanation: "The ip access-group command is used to apply an ACL to an interface.",
    },
    {
      type: "enumeration",
      question: "What can extended ACLs filter on? (Select 4)",
      options: [
        "Source IP address",
        "Destination IP address",
        "Protocol type",
        "Port numbers",
        "MAC address",
        "VLAN ID",
      ],
      correctAnswer: ["Source IP address", "Destination IP address", "Protocol type", "Port numbers"],
      explanation: "Extended ACLs can filter on source/destination IP, protocol (TCP/UDP/ICMP), and port numbers.",
    },
    {
      type: "true-false",
      question: "The TCP established keyword allows return traffic for connections initiated from inside the network.",
      correctAnswer: "true",
      explanation:
        "The established keyword permits returning TCP traffic (with ACK or RST flags set) for connections initiated from inside.",
    },
  ],
  6: [
    {
      type: "multiple-choice",
      question: "What is the primary purpose of NAT?",
      options: ["Increase network speed", "Conserve public IPv4 addresses", "Encrypt traffic", "Load balancing"],
      correctAnswer: "Conserve public IPv4 addresses",
      explanation:
        "The primary purpose of NAT is to conserve public IPv4 addresses by allowing multiple private addresses to share public addresses.",
    },
    {
      type: "enumeration",
      question: "What are the four NAT address types? (Select 4)",
      options: ["Inside local", "Inside global", "Outside local", "Outside global", "Inside private", "Outside public"],
      correctAnswer: ["Inside local", "Inside global", "Outside local", "Outside global"],
      explanation: "The four NAT address types are: inside local, inside global, outside local, and outside global.",
    },
    {
      type: "multiple-choice",
      question: "Which NAT type uses port numbers to differentiate connections?",
      options: ["Static NAT", "Dynamic NAT", "PAT", "NAT64"],
      correctAnswer: "PAT",
      explanation:
        "PAT (Port Address Translation), also called NAT overload, uses port numbers to map multiple private IPs to a single public IP.",
    },
    {
      type: "true-false",
      question: "Static NAT requires a one-to-one mapping between inside and outside addresses.",
      correctAnswer: "true",
      explanation:
        "Static NAT creates a permanent one-to-one mapping between an inside local address and an inside global address.",
    },
    {
      type: "essay",
      question: "Explain the difference between Dynamic NAT and PAT, including when each would be used.",
      correctAnswer: "",
      keyPoints: ["pool of addresses", "port numbers", "scalability", "use cases"],
      explanation:
        "Dynamic NAT uses a pool of public IPs (one-to-one at a time), while PAT uses port numbers to map many private IPs to one/few public IPs. PAT is more scalable and commonly used.",
    },
  ],
  8: [
    {
      type: "multiple-choice",
      question: "What does VPN stand for?",
      options: ["Virtual Private Network", "Very Private Network", "Verified Public Network", "Virtual Public Network"],
      correctAnswer: "Virtual Private Network",
      explanation: "VPN stands for Virtual Private Network - a secure connection over a public network.",
    },
    {
      type: "enumeration",
      question: "What are the main benefits of VPNs? (Select 4)",
      options: ["Cost savings", "Security", "Scalability", "Compatibility", "Faster speeds", "Lower latency"],
      correctAnswer: ["Cost savings", "Security", "Scalability", "Compatibility"],
      explanation:
        "VPN benefits include cost savings, security through encryption, scalability, and compatibility with various technologies.",
    },
    {
      type: "multiple-choice",
      question: "Which IPsec protocol provides both confidentiality and authentication?",
      options: ["AH", "ESP", "IKE", "GRE"],
      correctAnswer: "ESP",
      explanation:
        "ESP (Encapsulating Security Payload) provides both confidentiality (encryption) and authentication.",
    },
    {
      type: "enumeration",
      question: "What security functions does IPsec provide? (Select 4)",
      options: [
        "Confidentiality",
        "Integrity",
        "Authentication",
        "Secure key exchange",
        "Compression",
        "Load balancing",
      ],
      correctAnswer: ["Confidentiality", "Integrity", "Authentication", "Secure key exchange"],
      explanation:
        "IPsec provides confidentiality (encryption), integrity (hashing), authentication, and secure key exchange (Diffie-Hellman).",
    },
    {
      type: "true-false",
      question: "Site-to-site VPNs require end hosts to have VPN client software installed.",
      correctAnswer: "false",
      explanation:
        "Site-to-site VPNs are transparent to end hosts. The VPN is configured on routers/gateways, not on individual hosts.",
    },
    {
      type: "essay",
      question: "Explain the difference between SSL VPN and IPsec VPN, including advantages of each.",
      correctAnswer: "",
      keyPoints: ["browser-based", "client software", "applications", "security"],
      explanation:
        "SSL VPN is browser-based (clientless), easier to deploy, but limited to web apps. IPsec VPN requires client software, supports all IP apps, and provides stronger security.",
    },
  ],
}
