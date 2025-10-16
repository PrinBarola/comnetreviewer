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
    {
      type: "multiple-choice",
      question: "What algorithm does OSPF use to calculate the shortest path?",
      options: ["Bellman-Ford", "Dijkstra SPF", "DUAL", "Distance Vector"],
      correctAnswer: "Dijkstra SPF",
      explanation: "OSPF uses the Dijkstra Shortest Path First (SPF) algorithm to calculate the best routes.",
    },
    {
      type: "multiple-choice",
      question: "In multiarea OSPF, what is the backbone area number?",
      options: ["Area 0", "Area 1", "Area 255", "Area 100"],
      correctAnswer: "Area 0",
      explanation: "Area 0 is the backbone area in multiarea OSPF. All other areas must connect to Area 0.",
    },
    {
      type: "enumeration",
      question: "What are the benefits of multiarea OSPF? (Select 3)",
      options: [
        "Smaller routing tables",
        "Reduced link-state update overhead",
        "Reduced frequency of SPF calculations",
        "Faster convergence",
        "Lower bandwidth usage",
      ],
      correctAnswer: [
        "Smaller routing tables",
        "Reduced link-state update overhead",
        "Reduced frequency of SPF calculations",
      ],
      explanation:
        "Multiarea OSPF provides smaller routing tables through summarization, reduced LSA flooding overhead, and localized SPF calculations within areas.",
    },
    {
      type: "true-false",
      question: "The DR is used for forwarding all data packets in a multiaccess network.",
      correctAnswer: "false",
      explanation:
        "The DR is only used for the dissemination of LSAs. Routers still use the best next-hop router in the routing table for forwarding data packets.",
    },
    {
      type: "multiple-choice",
      question: "What determines the DR election in OSPF?",
      options: [
        "Lowest IP address",
        "Highest router priority, then highest router ID",
        "First router to boot",
        "Highest bandwidth interface",
      ],
      correctAnswer: "Highest router priority, then highest router ID",
      explanation:
        "The DR election is based on the highest router priority. If priorities are equal, the highest router ID is used as the tiebreaker.",
    },
    {
      type: "enumeration",
      question: "Which OSPF operational states involve database synchronization? (Select 3)",
      options: ["Down", "Init", "Two-Way", "ExStart", "Exchange", "Loading", "Full"],
      correctAnswer: ["ExStart", "Exchange", "Loading"],
      explanation:
        "ExStart (decide first router), Exchange (exchange DBDs), and Loading (send LSRs/LSUs) are the database synchronization states.",
    },
  ],
  2: [
    {
      type: "multiple-choice",
      question: "What command enables OSPF on a router?",
      options: ["router ospf process-id", "enable ospf", "ospf enable", "ip ospf enable"],
      correctAnswer: "router ospf process-id",
      explanation:
        "The 'router ospf process-id' command enables OSPF routing and enters OSPF configuration mode. The process-id is locally significant.",
    },
    {
      type: "multiple-choice",
      question: "Which command is used to configure OSPF on an interface directly?",
      options: ["network command", "ip ospf process-id area area-id", "ospf area", "enable ospf area"],
      correctAnswer: "ip ospf process-id area area-id",
      explanation:
        "The 'ip ospf process-id area area-id' interface command directly enables OSPF on that specific interface.",
    },
    {
      type: "enumeration",
      question: "What are the three ways to configure a router ID? (Select 3)",
      options: [
        "Explicitly configured with router-id command",
        "Highest IPv4 address of loopback interfaces",
        "Highest IPv4 address of active physical interfaces",
        "Automatically assigned by OSPF",
        "Derived from MAC address",
      ],
      correctAnswer: [
        "Explicitly configured with router-id command",
        "Highest IPv4 address of loopback interfaces",
        "Highest IPv4 address of active physical interfaces",
      ],
      explanation:
        "Router ID can be: 1) Explicitly configured, 2) Highest loopback IP, or 3) Highest active physical interface IP (in that priority order).",
    },
    {
      type: "true-false",
      question: "The OSPF process-id must match on all routers in the same area.",
      correctAnswer: "false",
      explanation:
        "The OSPF process-id is locally significant and does NOT need to match between routers. However, area IDs must match.",
    },
    {
      type: "multiple-choice",
      question: "What is the default OSPF cost calculation based on?",
      options: ["Bandwidth", "Delay", "Hop count", "Load"],
      correctAnswer: "Bandwidth",
      explanation:
        "OSPF cost is calculated based on bandwidth using the formula: Cost = Reference Bandwidth / Interface Bandwidth. Default reference bandwidth is 100 Mbps.",
    },
    {
      type: "multiple-choice",
      question: "Which command displays the OSPF-enabled interfaces?",
      options: ["show ip ospf interface", "show ospf interface", "show ip interface ospf", "display ospf interface"],
      correctAnswer: "show ip ospf interface",
      explanation:
        "The 'show ip ospf interface' command displays detailed OSPF information for all OSPF-enabled interfaces.",
    },
    {
      type: "enumeration",
      question: "What information is displayed by 'show ip ospf neighbor'? (Select 4)",
      options: ["Neighbor ID", "Priority", "State", "Interface", "Cost", "Bandwidth", "Hello interval"],
      correctAnswer: ["Neighbor ID", "Priority", "State", "Interface"],
      explanation:
        "The 'show ip ospf neighbor' command displays Neighbor ID, Priority, State, Dead Time, Address, and Interface.",
    },
    {
      type: "true-false",
      question: "Passive interfaces send OSPF Hello packets but do not form adjacencies.",
      correctAnswer: "false",
      explanation:
        "Passive interfaces do NOT send Hello packets at all. They prevent OSPF updates on specified interfaces while still advertising the network.",
    },
    {
      type: "multiple-choice",
      question: "What command makes an interface passive in OSPF?",
      options: ["passive-interface interface-id", "no ip ospf hello", "ospf passive", "interface passive"],
      correctAnswer: "passive-interface interface-id",
      explanation:
        "The 'passive-interface interface-id' command prevents OSPF Hello packets from being sent on the specified interface.",
    },
    {
      type: "essay",
      question:
        "Explain the difference between using the network command and the ip ospf command to enable OSPF on interfaces.",
      correctAnswer: "",
      keyPoints: [
        "network command in router config mode",
        "uses wildcard mask",
        "ip ospf on interface",
        "more precise control",
      ],
      explanation:
        "The network command is configured in router config mode and uses wildcard masks to match interfaces. The ip ospf command is configured directly on interfaces for more precise control.",
    },
    {
      type: "multiple-choice",
      question: "What is the default Hello interval on OSPF broadcast networks?",
      options: ["5 seconds", "10 seconds", "30 seconds", "40 seconds"],
      correctAnswer: "10 seconds",
      explanation:
        "The default Hello interval is 10 seconds on broadcast and point-to-point networks, and 30 seconds on NBMA networks.",
    },
    {
      type: "multiple-choice",
      question: "What is the default Dead interval on OSPF broadcast networks?",
      options: ["10 seconds", "30 seconds", "40 seconds", "120 seconds"],
      correctAnswer: "40 seconds",
      explanation:
        "The default Dead interval is 4 times the Hello interval: 40 seconds on broadcast networks and 120 seconds on NBMA networks.",
    },
  ],
  3: [
    {
      type: "multiple-choice",
      question: "What are the three functional areas of network security?",
      options: [
        "Prevention, Detection, Response",
        "Confidentiality, Integrity, Availability",
        "Authentication, Authorization, Accounting",
        "Firewall, IPS, VPN",
      ],
      correctAnswer: "Confidentiality, Integrity, Availability",
      explanation:
        "The CIA triad (Confidentiality, Integrity, Availability) represents the three fundamental security principles.",
    },
    {
      type: "enumeration",
      question: "Which are types of malware? (Select 4)",
      options: ["Virus", "Worm", "Trojan", "Ransomware", "Firewall", "Encryption", "Hashing"],
      correctAnswer: ["Virus", "Worm", "Trojan", "Ransomware"],
      explanation:
        "Viruses, worms, trojans, and ransomware are all types of malicious software (malware) that can harm systems.",
    },
    {
      type: "multiple-choice",
      question: "What type of attack intercepts communication between two parties?",
      options: ["DoS attack", "Man-in-the-Middle attack", "Phishing", "Brute force"],
      correctAnswer: "Man-in-the-Middle attack",
      explanation:
        "A Man-in-the-Middle (MITM) attack occurs when an attacker intercepts communications between two parties without their knowledge.",
    },
    {
      type: "true-false",
      question: "Symmetric encryption uses different keys for encryption and decryption.",
      correctAnswer: "false",
      explanation:
        "Symmetric encryption uses the SAME key for both encryption and decryption. Asymmetric encryption uses different keys (public/private key pairs).",
    },
    {
      type: "enumeration",
      question: "Which are symmetric encryption algorithms? (Select 3)",
      options: ["DES", "3DES", "AES", "RSA", "Diffie-Hellman"],
      correctAnswer: ["DES", "3DES", "AES"],
      explanation:
        "DES, 3DES, and AES are symmetric encryption algorithms. RSA is asymmetric, and Diffie-Hellman is a key exchange protocol.",
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of hashing in network security?",
      options: ["Encrypt data", "Verify data integrity", "Authenticate users", "Generate keys"],
      correctAnswer: "Verify data integrity",
      explanation:
        "Hashing creates a fixed-length digest of data to verify integrity. Any change in the data results in a different hash value.",
    },
    {
      type: "enumeration",
      question: "What are the three components of AAA? (Select 3)",
      options: ["Authentication", "Authorization", "Accounting", "Auditing", "Access Control", "Availability"],
      correctAnswer: ["Authentication", "Authorization", "Accounting"],
      explanation:
        "AAA stands for Authentication (who you are), Authorization (what you can do), and Accounting (what you did).",
    },
    {
      type: "true-false",
      question: "MD5 produces a 256-bit hash value.",
      correctAnswer: "false",
      explanation:
        "MD5 produces a 128-bit hash value. SHA-256 produces a 256-bit hash value. MD5 is considered cryptographically broken and should not be used for security.",
    },
    {
      type: "multiple-choice",
      question: "Which AAA protocol uses TCP port 49?",
      options: ["RADIUS", "TACACS+", "Kerberos", "LDAP"],
      correctAnswer: "TACACS+",
      explanation:
        "TACACS+ uses TCP port 49 and encrypts the entire payload. RADIUS uses UDP ports 1812/1813 and only encrypts the password.",
    },
    {
      type: "essay",
      question:
        "Explain the difference between symmetric and asymmetric encryption, including advantages and disadvantages of each.",
      correctAnswer: "",
      keyPoints: ["same key vs key pair", "speed", "key distribution", "use cases"],
      explanation:
        "Symmetric uses one key (fast, key distribution problem). Asymmetric uses public/private keys (slower, solves key distribution, used for key exchange and digital signatures).",
    },
    {
      type: "multiple-choice",
      question: "What type of attack attempts to overwhelm a system with traffic?",
      options: ["Phishing", "DoS/DDoS", "SQL Injection", "Cross-site scripting"],
      correctAnswer: "DoS/DDoS",
      explanation:
        "Denial of Service (DoS) and Distributed Denial of Service (DDoS) attacks attempt to overwhelm systems with excessive traffic to make them unavailable.",
    },
    {
      type: "enumeration",
      question: "Which are social engineering attack types? (Select 3)",
      options: ["Phishing", "Pretexting", "Baiting", "DDoS", "SQL Injection", "Buffer Overflow"],
      correctAnswer: ["Phishing", "Pretexting", "Baiting"],
      explanation:
        "Phishing, pretexting, and baiting are social engineering attacks that manipulate people into divulging confidential information.",
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
    {
      type: "multiple-choice",
      question: "What wildcard mask matches a single host?",
      options: ["0.0.0.0", "255.255.255.255", "0.0.0.255", "255.255.255.0"],
      correctAnswer: "0.0.0.0",
      explanation:
        "A wildcard mask of 0.0.0.0 matches all bits exactly, thus matching a single host. The keyword 'host' can be used as shorthand.",
    },
    {
      type: "enumeration",
      question: "What are the differences between standard and extended ACLs? (Select 3)",
      options: [
        "Standard filters source IP only",
        "Extended filters source and destination",
        "Extended can filter by protocol and port",
        "Standard uses 1-99",
        "Standard is faster",
        "Extended is more secure",
      ],
      correctAnswer: [
        "Standard filters source IP only",
        "Extended filters source and destination",
        "Extended can filter by protocol and port",
      ],
      explanation:
        "Standard ACLs filter only source IP (1-99, 1300-1999). Extended ACLs filter source/dest IP, protocol, and ports (100-199, 2000-2699).",
    },
    {
      type: "true-false",
      question: "Only one ACL per interface, per direction, per protocol is allowed.",
      correctAnswer: "true",
      explanation:
        "Cisco routers allow only one ACL per interface, per direction (in or out), per protocol (IPv4 or IPv6).",
    },
    {
      type: "multiple-choice",
      question: "What does the wildcard mask 0.0.0.255 match?",
      options: ["A single host", "All hosts", "The last octet (256 addresses)", "The first three octets"],
      correctAnswer: "The last octet (256 addresses)",
      explanation:
        "Wildcard mask 0.0.0.255 matches the first three octets exactly and ignores the last octet, matching 256 addresses (a /24 network).",
    },
    {
      type: "essay",
      question: "Explain the ACL placement guidelines for standard and extended ACLs and why they differ.",
      correctAnswer: "",
      keyPoints: [
        "standard near destination",
        "extended near source",
        "filtering specificity",
        "bandwidth conservation",
      ],
      explanation:
        "Standard ACLs filter only source IP, so place near destination to avoid blocking too much. Extended ACLs filter specifically, so place near source to block unwanted traffic early.",
    },
    {
      type: "multiple-choice",
      question: "What keyword in a wildcard mask matches any IP address?",
      options: ["host", "any", "all", "permit"],
      correctAnswer: "any",
      explanation: "The keyword 'any' is shorthand for 0.0.0.0 255.255.255.255, which matches any IP address.",
    },
    {
      type: "enumeration",
      question: "What are valid uses of ACLs? (Select 4)",
      options: [
        "Packet filtering",
        "Traffic control",
        "Network security",
        "QoS classification",
        "Increase bandwidth",
        "Encrypt traffic",
      ],
      correctAnswer: ["Packet filtering", "Traffic control", "Network security", "QoS classification"],
      explanation:
        "ACLs are used for packet filtering, controlling traffic flow, providing security, and classifying traffic for QoS policies.",
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
      explanation: "The 'ip access-group' command is used to apply an ACL to an interface.",
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
        "The 'established' keyword permits returning TCP traffic (with ACK or RST flags set) for connections initiated from inside.",
    },
    {
      type: "multiple-choice",
      question: "What is the number range for extended ACLs?",
      options: ["1-99", "100-199", "200-299", "1300-1999"],
      correctAnswer: "100-199",
      explanation: "Extended ACLs use numbers 100-199 and 2000-2699 (expanded range).",
    },
    {
      type: "multiple-choice",
      question: "Which command creates a named standard ACL?",
      options: [
        "ip access-list standard NAME",
        "access-list NAME standard",
        "standard access-list NAME",
        "create access-list NAME",
      ],
      correctAnswer: "ip access-list standard NAME",
      explanation:
        "The 'ip access-list standard NAME' command creates a named standard ACL and enters ACL configuration mode.",
    },
    {
      type: "enumeration",
      question: "What are advantages of named ACLs over numbered ACLs? (Select 3)",
      options: [
        "More descriptive",
        "Can delete individual entries",
        "Can insert entries with sequence numbers",
        "Faster processing",
        "More secure",
        "Use less memory",
      ],
      correctAnswer: ["More descriptive", "Can delete individual entries", "Can insert entries with sequence numbers"],
      explanation:
        "Named ACLs are more descriptive, allow deletion of individual entries, and support sequence numbers for insertion/modification.",
    },
    {
      type: "true-false",
      question: "ACL entries are automatically assigned sequence numbers in increments of 10.",
      correctAnswer: "true",
      explanation:
        "ACL entries are automatically assigned sequence numbers starting at 10 and incrementing by 10, allowing room for insertions.",
    },
    {
      type: "multiple-choice",
      question: "Which command secures VTY lines with an ACL?",
      options: ["ip access-group", "access-class", "ip access-class", "vty access-list"],
      correctAnswer: "access-class",
      explanation: "The 'access-class' command is used on VTY lines to restrict Telnet/SSH access using an ACL.",
    },
    {
      type: "essay",
      question: "Explain the two methods for modifying existing ACLs and when each method is appropriate.",
      correctAnswer: "",
      keyPoints: ["text editor method", "sequence number method", "copy and paste", "insert/delete entries"],
      explanation:
        "Text editor method: copy ACL to text editor, modify, remove old ACL, paste new (for major changes). Sequence number method: use sequence numbers to insert/delete specific entries (for minor changes).",
    },
    {
      type: "multiple-choice",
      question: "What command displays ACL statistics including match counts?",
      options: ["show access-lists", "show ip access-lists", "show running-config", "show ip interface"],
      correctAnswer: "show ip access-lists",
      explanation:
        "The 'show ip access-lists' command displays ACLs with statistics including the number of packets matched by each entry.",
    },
    {
      type: "enumeration",
      question: "What information is needed to configure an extended ACL? (Select 4)",
      options: [
        "Source IP address",
        "Destination IP address",
        "Protocol",
        "Port numbers",
        "Router ID",
        "VLAN number",
        "MAC address",
      ],
      correctAnswer: ["Source IP address", "Destination IP address", "Protocol", "Port numbers"],
      explanation:
        "Extended ACLs require source IP, destination IP, protocol (TCP/UDP/ICMP), and optionally port numbers for TCP/UDP.",
    },
    {
      type: "multiple-choice",
      question: "What does the 'remark' command do in an ACL?",
      options: ["Deletes an entry", "Adds a comment", "Modifies an entry", "Displays statistics"],
      correctAnswer: "Adds a comment",
      explanation: "The 'remark' command adds a comment or description to an ACL entry for documentation purposes.",
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
    {
      type: "multiple-choice",
      question: "What does 'inside local' address refer to in NAT terminology?",
      options: [
        "Private IP before translation",
        "Public IP after translation",
        "External server IP",
        "Router interface IP",
      ],
      correctAnswer: "Private IP before translation",
      explanation:
        "Inside local is the private IP address assigned to a host on the inside network before NAT translation.",
    },
    {
      type: "multiple-choice",
      question: "What command displays active NAT translations?",
      options: ["show ip nat translations", "show nat table", "display nat", "show ip nat"],
      correctAnswer: "show ip nat translations",
      explanation: "The 'show ip nat translations' command displays the NAT translation table with active mappings.",
    },
    {
      type: "enumeration",
      question: "What are the benefits of NAT? (Select 4)",
      options: [
        "Conserves public IP addresses",
        "Increases network security",
        "Provides flexibility",
        "Allows network changes without renumbering",
        "Increases network speed",
        "Reduces latency",
      ],
      correctAnswer: [
        "Conserves public IP addresses",
        "Increases network security",
        "Provides flexibility",
        "Allows network changes without renumbering",
      ],
      explanation:
        "NAT conserves IPs, hides internal addressing (security), provides flexibility in network design, and allows ISP changes without renumbering.",
    },
    {
      type: "true-false",
      question: "PAT can support thousands of internal hosts with a single public IP address.",
      correctAnswer: "true",
      explanation:
        "PAT uses port numbers (65,536 available ports) to uniquely identify connections, allowing thousands of internal hosts to share one public IP.",
    },
    {
      type: "multiple-choice",
      question: "Which command configures an interface as NAT inside?",
      options: ["ip nat inside", "nat inside", "ip nat enable", "interface nat inside"],
      correctAnswer: "ip nat inside",
      explanation:
        "The 'ip nat inside' interface command designates the interface as connected to the inside (private) network.",
    },
    {
      type: "multiple-choice",
      question: "What command creates a NAT pool?",
      options: [
        "ip nat pool NAME start-ip end-ip netmask mask",
        "nat pool NAME start-ip end-ip",
        "create nat pool NAME",
        "ip nat create pool",
      ],
      correctAnswer: "ip nat pool NAME start-ip end-ip netmask mask",
      explanation: "The 'ip nat pool' command defines a pool of public IP addresses for dynamic NAT translation.",
    },
    {
      type: "enumeration",
      question: "What are disadvantages of NAT? (Select 3)",
      options: [
        "Breaks end-to-end IP traceability",
        "Complicates tunneling protocols",
        "Can cause issues with some applications",
        "Reduces security",
        "Increases bandwidth usage",
        "Requires more IP addresses",
      ],
      correctAnswer: [
        "Breaks end-to-end IP traceability",
        "Complicates tunneling protocols",
        "Can cause issues with some applications",
      ],
      explanation:
        "NAT disadvantages include breaking end-to-end IP traceability, complicating protocols like IPsec, and causing issues with applications that embed IP addresses.",
    },
  ],
  7: [
    {
      type: "multiple-choice",
      question: "What does WAN stand for?",
      options: ["Wide Area Network", "Wireless Access Network", "World Area Network", "Wired Access Network"],
      correctAnswer: "Wide Area Network",
      explanation: "WAN stands for Wide Area Network, which connects LANs over large geographic distances.",
    },
    {
      type: "enumeration",
      question: "Which are WAN connection types? (Select 4)",
      options: ["Leased Line", "Circuit-Switched", "Packet-Switched", "Internet-based", "Bluetooth", "NFC"],
      correctAnswer: ["Leased Line", "Circuit-Switched", "Packet-Switched", "Internet-based"],
      explanation:
        "WAN connection types include dedicated leased lines, circuit-switched (dial-up/ISDN), packet-switched (Frame Relay/ATM), and internet-based (VPN/broadband).",
    },
    {
      type: "multiple-choice",
      question: "What is a leased line?",
      options: [
        "A dedicated point-to-point connection",
        "A shared connection",
        "A wireless connection",
        "A temporary connection",
      ],
      correctAnswer: "A dedicated point-to-point connection",
      explanation:
        "A leased line is a dedicated, permanent point-to-point connection between two locations, providing guaranteed bandwidth.",
    },
    {
      type: "true-false",
      question: "MPLS operates at Layer 2 of the OSI model.",
      correctAnswer: "false",
      explanation:
        "MPLS operates between Layer 2 and Layer 3 (sometimes called Layer 2.5). It uses labels to forward packets.",
    },
    {
      type: "multiple-choice",
      question: "What WAN encapsulation protocol is used for point-to-point links?",
      options: ["PPP", "Frame Relay", "ATM", "Ethernet"],
      correctAnswer: "PPP",
      explanation:
        "PPP (Point-to-Point Protocol) is the standard WAN encapsulation protocol for point-to-point serial links.",
    },
    {
      type: "enumeration",
      question: "What are the components of PPP? (Select 3)",
      options: [
        "HDLC encapsulation",
        "LCP (Link Control Protocol)",
        "NCP (Network Control Protocol)",
        "OSPF",
        "TCP",
        "UDP",
      ],
      correctAnswer: ["HDLC encapsulation", "LCP (Link Control Protocol)", "NCP (Network Control Protocol)"],
      explanation:
        "PPP consists of HDLC-like encapsulation, LCP for establishing/configuring links, and NCP for configuring network layer protocols.",
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of HDLC?",
      options: ["WAN encapsulation protocol", "Routing protocol", "Security protocol", "Compression protocol"],
      correctAnswer: "WAN encapsulation protocol",
      explanation:
        "HDLC (High-Level Data Link Control) is a WAN encapsulation protocol. Cisco's version is proprietary and the default on serial interfaces.",
    },
    {
      type: "true-false",
      question: "Frame Relay is a modern WAN technology still widely deployed today.",
      correctAnswer: "false",
      explanation:
        "Frame Relay is a legacy WAN technology that has been largely replaced by MPLS, Metro Ethernet, and internet-based VPNs.",
    },
    {
      type: "multiple-choice",
      question: "What is the typical bandwidth range for T1 lines?",
      options: ["1.544 Mbps", "10 Mbps", "100 Mbps", "1 Gbps"],
      correctAnswer: "1.544 Mbps",
      explanation: "A T1 line provides 1.544 Mbps bandwidth. E1 (European standard) provides 2.048 Mbps.",
    },
    {
      type: "enumeration",
      question: "What are modern WAN solutions? (Select 4)",
      options: ["MPLS", "Metro Ethernet", "Broadband (DSL/Cable)", "Wireless (4G/5G)", "Token Ring", "ISDN"],
      correctAnswer: ["MPLS", "Metro Ethernet", "Broadband (DSL/Cable)", "Wireless (4G/5G)"],
      explanation:
        "Modern WAN solutions include MPLS, Metro Ethernet, broadband technologies (DSL/Cable/Fiber), and wireless (4G/5G/Satellite).",
    },
    {
      type: "essay",
      question:
        "Compare and contrast private WAN infrastructure versus public WAN infrastructure, including advantages and disadvantages of each.",
      correctAnswer: "",
      keyPoints: ["dedicated vs shared", "cost", "security", "performance", "scalability"],
      explanation:
        "Private WAN (leased lines, MPLS) offers dedicated bandwidth, better security, and guaranteed performance but higher cost. Public WAN (Internet) is cost-effective and scalable but requires VPNs for security and has variable performance.",
    },
    {
      type: "multiple-choice",
      question: "What does CPE stand for in WAN terminology?",
      options: [
        "Customer Premises Equipment",
        "Central Processing Equipment",
        "Customer Private Equipment",
        "Central Premises Equipment",
      ],
      correctAnswer: "Customer Premises Equipment",
      explanation:
        "CPE (Customer Premises Equipment) refers to devices located at the customer's site, such as routers, modems, and switches.",
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
    {
      type: "multiple-choice",
      question: "What does AH stand for in IPsec?",
      options: ["Authentication Header", "Access Header", "Application Header", "Authorization Header"],
      correctAnswer: "Authentication Header",
      explanation:
        "AH (Authentication Header) provides authentication and integrity but NOT confidentiality. It's less commonly used than ESP.",
    },
    {
      type: "enumeration",
      question: "Which are IPsec encryption algorithms? (Select 4)",
      options: ["DES", "3DES", "AES", "SEAL", "MD5", "SHA"],
      correctAnswer: ["DES", "3DES", "AES", "SEAL"],
      explanation:
        "IPsec encryption algorithms include DES (56-bit), 3DES (168-bit), AES (128/192/256-bit), and SEAL (160-bit stream cipher). MD5 and SHA are hashing algorithms.",
    },
    {
      type: "true-false",
      question: "GRE tunnels provide encryption by default.",
      correctAnswer: "false",
      explanation:
        "GRE (Generic Routing Encapsulation) does NOT provide encryption by default. GRE over IPsec is used to add encryption to GRE tunnels.",
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of Diffie-Hellman in IPsec?",
      options: ["Encrypt data", "Secure key exchange", "Authenticate users", "Verify integrity"],
      correctAnswer: "Secure key exchange",
      explanation:
        "Diffie-Hellman (DH) allows two peers to establish a shared secret key over an insecure channel for encryption.",
    },
    {
      type: "multiple-choice",
      question: "Which VPN type is best for connecting multiple branch offices to headquarters?",
      options: ["Remote access VPN", "Site-to-site VPN", "SSL VPN", "Clientless VPN"],
      correctAnswer: "Site-to-site VPN",
      explanation:
        "Site-to-site VPNs are designed to connect entire networks (like branch offices to headquarters) transparently to end users.",
    },
    {
      type: "enumeration",
      question: "What are the two IPsec modes? (Select 2)",
      options: ["Transport mode", "Tunnel mode", "Bridge mode", "Router mode", "Switch mode"],
      correctAnswer: ["Transport mode", "Tunnel mode"],
      explanation:
        "IPsec has two modes: Transport mode (only payload encrypted, original IP header intact) and Tunnel mode (entire packet encrypted, new IP header added).",
    },
    {
      type: "multiple-choice",
      question: "What does DMVPN stand for?",
      options: ["Dynamic Multipoint VPN", "Direct Multipoint VPN", "Dynamic Multiple VPN", "Direct Multiple VPN"],
      correctAnswer: "Dynamic Multipoint VPN",
      explanation:
        "DMVPN (Dynamic Multipoint VPN) is a Cisco solution for building scalable VPNs using a hub-and-spoke topology with dynamic spoke-to-spoke tunnels.",
    },
  ],
}
