// CCNA 200-301 Data Hierarchy
        export const studyData = [
            {
                id: "domain1",
                name: "1.0 Network Fundamentals",
                topics: [
                    {
                        id: "1.1",
                        title: "1.1 Explain the role and function of network components",
                        summary: "Routers, L2/L3 Switches, NGFW, IPS, APs, Controllers, Endpoints, Servers, PoE",
                        content: `
                            <h3><strong>1. Routers (Layer 3)</strong></h3>
                            <p>Routers are the "brain" of inter-networking. Their primary job is to connect different networks (like your LAN to the Internet) and determine the best path for data to travel using <strong>IP addresses</strong>.</p>
                            <p><strong>Function:</strong> Routing packets based on the Routing Table.<br/>
                            <strong>Key Concept:</strong> They break up <strong>Broadcast Domains</strong>.</p>
                            <pre># Static Route Example\nRouter(config)# <code>ip route 192.168.20.0 255.255.255.0 10.0.0.2</code></pre>

                            <h3><strong>2. Layer 2 (L2) Switches</strong></h3>
                            <p>Switches operate primarily at Layer 2 (Data Link) of the OSI model. They connect devices within the same network (LAN) by using <strong>MAC addresses</strong> to ensure data goes directly to the intended device rather than broadcasting it to everyone.</p>
                            <p><strong>Function:</strong> Forwarding frames within the same broadcast domain.<br/>
                            <strong>Key Concept:</strong> They create separate <strong>Collision Domains</strong> per port.</p>
                            <pre># Example: Assigning a port to a specific VLAN\nSwitch(config)# <code>interface gigabitEthernet 0/1</code>\nSwitch(config-if)# <code>switchport mode access</code>\nSwitch(config-if)# <code>switchport access vlan 10</code></code></pre>

                            <h3><strong>3. Layer 3 (L3) Switches</strong></h3>
                            <p>Also called "Multilayer Switches," these act like a hybrid. L3 Switches combine the functionality of L2 switching with routing capabilities. They can route traffic between VLANs without needing an external router.</p>
                             <ul>
                                <li><strong>Function:</strong> Inter-VLAN routing at high speeds.</li>
                                <li><strong>Key Syntax:</strong> You must enable routing globally first.</li>
                            </ul>
                            <pre># Example: Enabling routing and creating an SVI (Switch Virtual Interface)\nL3Switch(config)# <code>ip routing</code>\nL3Switch(config)# <code>interface vlan 10</code>\nL3Switch(config-if)# <code>ip address 192.168.10.1 255.255.255.0</code></pre>

                            <h3><strong>4. Next-Generation Firewalls (NGFW)</strong></h3>
                            <p>Traditional firewalls block traffic based on IP/Port (Layer 3/4). Next-Generation Firewalls (NGFWs) go deeper (up to Layer 7) to inspect the actual application. NGFWs are advanced security appliances that provide traditional firewall functionality along with additional features like deep packet inspection, intrusion prevention, and application awareness. </p>
                             <ul>
                                <li><strong>Function:</strong> Deep Packet Inspection (DPI), Application visibility, and integrated malware filtering.</li>
                                <li><strong>Role:</strong> The primary gatekeeper between your internal network and the "outside" world.</li>
                            </ul>

                            <h3><strong>5. Intrusion Prevention System (IPS)</strong></h3>
                            <p>While a firewall is like a locked door, an IPS is like a security guard inside the building watching for suspicious behavior. Intrusion Prevention Systems (IPS) are security appliances that monitor network traffic for suspicious activity and take action to prevent potential threats. Unlike Intrusion Detection Systems (IDS) that only alert on suspicious activity, IPS can actively block or mitigate attacks.</p>
                             <ul>
                                <li><strong>Function:</strong> It monitors network traffic for malicious activity and <strong>actively blocks</strong> it in real-time.</li>
                                <li><strong>Difference:</strong> Unlike an IDS (Detection), an IPS sits "in-line" to stop the attack as it happens.</li>
                            </ul>

                            <h3><strong>6. Access Points (APs) and Controllers (WLC)</strong></h3>
                            <p>Access Points (APs) are devices that allow wireless devices to connect to a wired network. Wireless Local Controllers (WLCs) manage multiple APs and provide centralized control and configuration. Together, they form the backbone of a wireless network infrastructure.</p>
                             <ul>
                                <li><strong>Access Point (AP):</strong> Extends the wired network into the wireless realm. It converts Ethernet frames into radio frequencies (802.11).</li>
                                <li><strong>Wireless LAN Controller (WLC):</strong> In modern networks, we use "Lightweight" APs that can't think for themselves. The WLC acts as the central brain, managing configurations, security, and roaming for all APs.</li>
                            </ul>

                            <h3><strong>7. Endpoints and Servers</strong></h3>
                            <p>Endpoints and servers are the devices that connect to the network and consume resources. Endpoints include computers, laptops, smartphones, and tablets. Servers are powerful devices that provide services to other devices on the network.</p>
                             <ul>
                                <li><strong>Endpoints:</strong> These are the devices users interact with (Laptops, Tablets, VoIP phones, IoT devices).</li>
                                <li><strong>Servers:</strong> These provide services to the endpoints (Web servers, Email, File storage). They usually have static IP addresses and are housed in a Data Center or DMZ.</li>
                            </ul>

                            <h3><strong>8. Power over Ethernet (PoE)</strong></h3>
                            <p>PoE is a technology that allows a switch to send both **data and electrical power** over a single copper Ethernet cable.</p>
                             <ul>
                                <li><strong>Why it matters:</strong> It powers devices like IP Phones, Cameras, and Access Points without needing a separate power outlet.</li>
                                <li><strong>Standard Example:</strong> 802.3at (PoE+) provides up to 30W of power.</li>
                            </ul>
                            <pre># Example: Checking PoE status on a switch port\nSwitch# <code>show power inline gigabitEthernet 0/1</code></pre>

                            <table>
                                <caption>
                                    <b>Summary Table for Quick Study</b>
                                </caption>
                                <thead>
                                    <tr>
                                    <th scope="col">Component</th>
                                    <th scope="col">OSI Layer</th>
                                    <th scope="col">Key Identifier</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">Router</th>
                                    <td>Layer 3</td>
                                    <td>IP Address</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">L2 Switch</th>
                                    <td>Layer 2</td>
                                    <td>MAC Address</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">L3 Switch</th>
                                    <td>Layer 2 & 3</td>
                                    <td>MAC & IP Address</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">NGFW</th>
                                    <td>Layer 3 - 7</td>
                                    <td>Applications/Users</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">AP</th>
                                    <td>Layer 1 & 2</td>
                                    <td>Radio Waves / SSIDs</td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        id: "1.2",
                        title: "1.2 Describe characteristics of network topology architectures",
                        summary: "Three-Tier, Collapsed Core, Spine-Leaf, WAN, SOHO, Cloud",
                        content: `
                            <h3><strong>1. Three-Tier Architecture (The Hierarchical Model)</strong></h3>
                            <p>This is the "gold standard" for large enterprise networks. It divides the network into three distinct layers to ensure modularity and scalability.</p>
                             <ul>
                                <li><strong>Access Layer:</strong> This is where end-devices (PCs, printers, IP phones) connect to the network. Switches here usually provide Port Security and VLAN assignment.</li>
                                <li><strong>Distribution Layer:</strong> Acts as the "boundary" between the Access and Core layers. It handles routing, filtering (ACLs), and queuing. This is often where your Default Gateways (SVIs) live.</li>
                                <li><strong>Core Layer:</strong> The "backbone." Its sole job is to switch traffic as fast as possible between Distribution blocks. It should never perform packet manipulation (like ACLs) to avoid latency.</li>
                            </ul>

                            <h3><strong>2. Two-Tier Architecture (Collapsed Core)</strong></h3>
                            <p>In smaller environments, having a separate Core and Distribution layer is often overkill and too expensive.</p>
                             <ul>
                                <li><strong>Characteristics:</strong> The Core and Distribution layers are merged into a single set of powerful switches.</li>
                                <li><strong>Use Case:</strong> Ideal for small-to-medium-sized businesses (SMBs) where the distance and device count don't justify a dedicated Core.</li>
                            </ul>

                            <h3><strong>3. Spine-Leaf Architecture</strong></h3>
                            <p>While the Tiered models are great for "North-South" traffic (user to internet), modern Data Centers need to handle massive "East-West" traffic (server to server).</p>
                             <ul>
                                <li><strong>Leaf Switches:</strong> Every device (servers, storage) connects to a Leaf switch.</li>
                                <li><strong>Spine Switches:</strong> Every Leaf switch connects to <strong>every</strong> Spine switch. These are the high-performance switches that connect to all the Leaf switches. They handle the bulk of the traffic within the Data Center.</li>
                                <li><strong>Key Benefit:</strong> Predictable latency. Any server is exactly two hops away from any other server. It uses Layer 3 routing (often ECMP) rather than Spanning Tree (STP) to utilize all available links.</li>
                            </ul>

                            <h3><strong>4. WAN (Wide Area Network)</strong></h3>
                            <p>A WAN connects Local Area Networks (LANs) over long geographical distances.</p>
                             <ul>
                                <li><strong>Characteristics:</strong> Uses leased lines, MPLS, or the Internet (via SD-WAN or VPNs).</li>
                                <li><strong>Focus:</strong>High availability and cost management. Modern CCNA focuses heavily on **SD-WAN**, which uses a centralized controller to manage traffic across multiple WAN links.</li>
                            </ul>

                            <h3><strong>5. SOHO (Small Office/Home Office)</strong></h3>
                            <p>SOHO networks are designed for small businesses or home users with limited networking needs. This is the simplest form of network architecture.</p>
                             <ul>
                                <li><strong>Characteristics:</strong> Usually relies on a single "All-in-One" device that acts as a Router, Switch, Firewall, and Wireless Access Point.</li>
                                <li><strong>Connectivity:</strong> Typically uses a single ISP connection (Cable, Fiber, or DSL) and provides basic NAT (Network Address Translation) and DHCP services.</li>
                                <li><strong>Focus:</strong> Simplicity and cost-effectiveness for basic networking requirements.</li>
                            </ul>

                            <h3><strong>6. On-premises vs. Cloud</strong></h3>
                            <p>This describes <strong>where</strong> your resources and management live.</p>
                             <ul>
                                <li><strong>On-premises:</strong> Your servers, switches, and firewalls are physically located in your building. You have total control, but you are responsible for power, cooling, and hardware maintenance (**CapEx** - Capital Expenditure).</li>
                                <li><strong>Cloud:</strong> Resources are hosted by a provider (AWS, Azure, Google Cloud). You access them over the Internet or a private connection.
                                    <ul>
                                        <li><strong><q>Public Cloud</q>:</strong> Shared infrastructure.</li>
                                        <li><strong><q>Private Cloud</q>:</strong> Dedicated infrastructure for one organization.</li>
                                        <li><strong><q>Hybrid</q>:</strong> A mix of On-premises and Cloud (**OpEx** - Operating Expenditure).</li>
                                    </ul>
                                </li>
                            </ul>

                            <h3><strong>Quick Configuration Reference</strong></h3>
                            <p>If you were configuring a <strong>Distribution Layer</strong> switch to act as the gateway for a VLAN in a Three-Tier model, the syntax would look like this:</p>
                            <pre>Switch(config)# <code>interface vlan 10</code>\nSwitch(config-if)# <code>description Marketing_Gateway</code>\nSwitch(config-if)# <code>ip address 192.168.10.1 255.255.255.0</code>\nSwitch(config-if)# <code>no shutdown</code>\nSwitch(config-if)# <code>exit</code></pre>
                            <pre># Enabling routing on a multilayer switch\nSwitch(config)# <code>ip routing</code></pre>

                            <table>
                                <caption>
                                    <b>Summary Table for the CCNA Exam</b>
                                </caption>
                                <thead>
                                    <tr>
                                    <th scope="col">Architecture</th>
                                    <th scope="col">Primary Use Case</th>
                                    <th scope="col">Key Benefit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">Three-Tier</th>
                                    <td>Large Enterprise</td>
                                    <td>Scalability & Modularity</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Two-Tier</th>
                                    <td>Medium Business</td>
                                    <td>Cost-Effective</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Spine-Leaf</th>
                                    <td>Data Centers</td>
                                    <td>Low latency, East-West traffic</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">WAN</th>
                                    <td>Global/Regional</td>
                                    <td>Connects distant LANs </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">SOHO</th>
                                    <td>Home/Small Office</td>
                                    <td>Simple, All-in-one </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Cloud</th>
                                    <td>Modern IT</td>
                                    <td>Scalability, No hardware management</td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        id: "1.3",
                        title: "1.3 Compare physical interface and cabling types",
                        summary: "Single-mode/Multimode fiber, copper, Ethernet shared media vs point-to-point",
                        content: `
                            <h3><strong>1. Copper Cabling (Twisted Pair)</strong></h3>
                            <p>Copper cabling is the most common type of cabling used in Local Area Networks (LANs). It uses electrical signals to transmit data and comes in various categories (Cat5e, Cat6, Cat6a, Cat7) that support different speeds and bandwidths.</p>
                            <ul>
                                <li><strong>UTP (Unshielded Twisted Pair):</strong> Most common, cost-effective, susceptible to EMI.</li>
                                <li><strong>STP (Shielded Twisted Pair):</strong> Has shielding to reduce EMI, more expensive.</li>
                                <li><strong>RJ-45 Connectors:</strong> Standard connector for Ethernet cables.</li>
                                <li><strong>Distance Limit:</strong> 100 meters (328 feet) for Cat5e/Cat6. Beyond this, signal degradation (attenuation) occurs.</li>
                                <br>
                                <li><strong>Common Categories:</strong>
                                    <ul>
                                        <li><strong><q>Cat5e</q>:</strong> Supports up to 1000 Mbps (1 Gbps) at 100 meters.</li>
                                        <li><strong><q>Cat6</q>:</strong> Supports up to 10000 Mbps (10 Gbps) at 55 meters.</li>
                                        <li><strong><q>Cat6a</q>:</strong> Supports up to 10000 Mbps (10 Gbps) at 100 meters.</li>
                                        <li><strong><q>Cat7</q>:</strong> Supports up to 10000 Mbps (10 Gbps) at 100 meters.</li>
                                    </ul>
                                </li>
                                <br>
                                <li><strong>Pros:</strong> Inexpensive, easy to install, supports Power over Ethernet (PoE).</li>
                                <li><strong>Cons:</strong> Susceptible to Electromagnetic Interference (EMI) and has distance limitations.</li>
                            </ul>

                            <h3><strong>2. Fiber Optic Cabling</strong></h3>
                            <p>Fiber optic cabling uses light signals to transmit data. This makes it immune to EMI and is ideal for long-distance communication and high-speed applications.</p>
                            <ul>
                                <li><strong>Single-mode Fiber (SMF)</strong>
                                    <ul>
                                        <li><strong><q>Core Diameter</q>:</strong> Very small (~9 microns).</li>
                                        <li><strong><q>Light Source</q>:</strong> Laser.</li>
                                        <li><strong><q>Path</q>:</strong> A single straight path for light.</li>
                                        <li><strong><q>Distance</q>:</strong> Extremely long (up to 40km or even 100km).</li>
                                        <li><strong><q>Use Case</q>:</strong> WAN links and connecting buildings across a large campus.</li>
                                    </ul>
                                </li>
                                <br>
                                <li><strong>Multimode Fiber (MMF)</strong>
                                    <ul>
                                        <li><strong><q>Core Diameter</q>:</strong> Larger (~50/62.5 microns).</li>
                                        <li><strong><q>Light Source</q>:</strong> LED.</li>
                                        <li><strong><q>Path</q>:</strong> Light "bounces" off the walls of the core (multiple paths).</li>
                                        <li><strong><q>Distance</q>:</strong> Moderate (up to ~550m).</li>
                                        <li><strong><q>Use Case</q>:</strong> Within a data center or between floors in a single building.</li>
                                    </ul>
                                </li>
                            </ul>

                            <table>
                                <thead><tr><th>Medium</th><th>Distance</th><th>Light Source / Standard</th><th>Primary Use Case</th><th>Cost</th><th>Core Size</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Copper (UTP)</strong></td><td>100m</td><td>Electrical Pulses / RJ-45</td><td>LAN Workstations / APs</td><td>Low</td><td>-</td></tr>
                                    <tr><td><strong>Multimode Fiber (MMF)</strong></td><td>~550m</td><td>LED (50/62.5 µm core)</td><td>Intra-building / Data Centers</td><td>Moderate</td><td>Large</td></tr>
                                    <tr><td><strong>Single-mode Fiber (SMF)</strong></td><td>Up to 40km+</td><td>Laser (~9 µm core)</td><td>WAN / Campus Backbones</td><td>Expensive </td><td>Small</td></tr>
                                </tbody>
                            </table>

                            <h3><strong>3. Shared Media vs. Point-to-Point</strong></h3>
                            <p>In networking, the way devices communicate can be categorized into two main types: Shared Media and Point-to-Point. This refers to how devices compete for the right to talk on the wire.</p>
                            <h3><strong>Ethernet Shared Media (Half-Duplex)</strong></h3>
                            <p>In the "old days" of Hubs, every device was connected to the same electrical wire. Only one device can transmit at a time, leading to potential collisions. This is known as half-duplex communication.</p>
                            <ul>
                                <li><strong>Collision Domain:</strong> All devices on the same shared medium are in the same collision domain. If two devices transmit simultaneously, a collision occurs.</li>
                                <li><strong>CSMA/CD:</strong> <em>Carrier Sense Multiple Access with Collision Detection</em>. Devices listen before transmitting and back off if a collision is detected.</li>
                                <li><strong>Bandwidth Sharing:</strong> All devices share the same bandwidth. If you have 10 devices on a 100 Mbps hub, each device effectively gets a fraction of that bandwidth.</li>
                                <li><strong>Duplex:</strong> Half-duplex communication allows devices to transmit in only one direction at a time (you cannot send and receive at the same time).</li>
                                <li><strong>Modern Ethernet:</strong> Today, most networks use switches that provide full-duplex communication, eliminating collisions and allowing simultaneous send/receive.</li>
                            </ul>
                            <h3><strong>Point-to-Point (Full-Duplex)</strong></h3>
                            <p>Modern networks use Switches. Each port on a switch is its own dedicated segment. In a point-to-point connection, two devices are not directly connected to each other. This allows for full-duplex communication, meaning both devices can send and receive data simultaneously without collisions.</p>
                            <ul>
                                <li><strong>Collision Domain:</strong> Eliminated. Each switch port is its own collision domain. It is a private conversation between the switch and the device.</li>
                                <li><strong>Duplex:</strong> Full-duplex (you can send and receive simultaneously). Each device gets the full bandwidth of the link. A 1 Gbps switch port provides 1 Gbps to the connected device.</li>
                                <li><strong>Efficiency:</strong> Much higher throughput because there are no collisions. Dedicated bandwidth. No sharing with other devices.</li>
                            </ul>
                            <h3><strong>CCNA Configuration Tip</strong></h3>
                            <p>When you are troubleshooting physical interfaces on a Cisco router or switch, your best friend is the <q>show interface</q> command. You can check if the media is running at Full-Duplex and see the speed.</p>
                            <pre># Check the status and statistics of a specific interface\nRouter# <code>show interfaces GigabitEthernet 0/1</code>\n\n# Look for these key lines in the output:\n# <code>GigabitEthernet0/1 is up, line protocol is up</code>\n# <code>Full-duplex, 1000Mb/s, media type is RJ45</code></pre>
                            <p>When configuring interfaces on a switch or router, you can specify the speed and duplex settings. For example:</p>
                            <pre>Switch(config)# <code>interface gigabitEthernet 0/1</code>\nSwitch(config-if)# <code>speed 1000</code>\nSwitch(config-if)# <code>duplex full</code></pre>
                            <ul>
                                <li><strong>Summary for your exam:</strong></li>
                                <li><strong>Copper</strong> = 100m limit, cheap, RJ-45.</li>
                                <li><strong>Multimode Fiber</strong> = LED, short distance, data centers.</li>
                                <li><strong>Single-Mode Fiber</strong> = Laser, long distance, backbone networks (WANs).</li>
                                <li><strong>Shared Media</strong> = Hubs, CSMA/CD, Half-duplex.</li>
                                <li><strong>Point-to-Point</strong> = Switches, Full-duplex.</li>
                            </ul>

                        `
                    },
                    {
                        id: "1.4",
                        title: "1.4 Identify interface and cable issues",
                        summary: "Collisions, Errors, Speed/Duplex Mismatches, TDR Testing",
                        content: `
                            <h3><strong>1. The Starting Point: diagnostics via <code>show interfaces</code></strong></h3>
                            <p>To diagnose a specific port (e.g., GigabitEthernet 0/1), use this command:</p>
                            <pre>Router# <code>show interfaces gigabitEthernet 0/1</code></pre>
                            <p>Look specifically at the <code>line protocol status</code>, the <code>duplex/speed settings</code>, and the <code>error counters</code> at the bottom of the output.</p>
                            
                            <h3><strong>2. Duplex and Speed Mismatches</strong></h3>
                            <p>Duplex mismatches occur when one end of a link is set to full-duplex and the other is set to half-duplex. This can lead to collisions, late collisions, and CRC errors. Always ensure both ends of a link are configured for the same duplex mode.</p>
                            <ul>
                                <li><strong>Symptoms:</strong> High latency, slow throughput, and intermittent connectivity.</li>
                                <li><strong>Identification:</strong> Check the output for: <code>Half-duplex, 100Mb/s</code> on one side while the other side shows <code>Full-duplex, 100Mb/s</code>.</li>
                                <li><strong>Rule of Thumb:</strong>If one side is "Auto" and fails to negotiate, Cisco defaults to <code>10/Half</code> for Ethernet/FastEthernet.</li>
                                <br>
                                <li><strong>The Fix:</strong> Always ensure both sides match. Use <code>auto</code> on both, or hard-code both.</li>
                            </ul>
                            <pre>Switch(config)# <code>interface gi0/1</code>\nSwitch(config-if)# <code>speed 1000</code>\nSwitch(config-if)# <code>duplex full</code>\nSwitch(config-if)# <code>exit</code></pre>
                            
                            <h3><strong>3. Understanding Interface Errors</strong></h3>
                            <p>When you see the "Input errors" or "Output errors" incrementing, here is what they usually mean:</p>
                            <ul>
                                <li><strong>A. CRC Errors (Cyclic Redundancy Check)</strong>
                                    <ul>
                                        <li><strong>What it is:</strong> The frame arrived, but the checksum didn't match.</li>
                                        <li><strong>Cause:</strong> Almost always a <q>physical layer issue</q>—bad cabling, a faulty SFP module, or electromagnetic interference (EMI).</li>
                                        <li><strong>Look for:</strong> <code>input errors</code>, <code>CRC</code>.</li>
                                    </ul>
                                </li>
                                <li><strong>B. Runts and Giants</strong>
                                    <ul>
                                        <li><strong>Runts:</strong> Frames smaller than 64 bytes. Usually caused by collisions or a malfunctioning NIC.</li>
                                        <li><strong>Giants:</strong> Frames larger than 1518 bytes. Usually caused by <q>MTU mismatches</q> or 802.1Q tagging issues.</li>
                                    </ul>
                                </li>
                            </ul>
                            
                            <h3><strong>4. Collisions: The "Silent Killer"</strong></h3>
                            <p>In a modern switched environment (Full-Duplex), you should see <strong>zero</strong> collisions.</p>
                            <ul>
                                <li><strong>Single/Multiple Collisions:</strong> Normal in a Half-Duplex (hub) environment.</li>
                                <li><strong>Late Collisions:</strong> This is a major red flag! Occur after the first 512 bits of the frame have been transmitted.
                                    <ul>
                                        <li><strong><q>Cause</q>:</strong> Usually a <strong>Duplex Mismatch</strong> (one side is Half, the other is Full) or the cable exceeds the 100-meter length limit.</li>
                                        <li><strong><q>Identification</q>:</strong> Look for the <code>late collision</code> counter in the <code>show interfaces</code> output.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h3><strong>5. Advanced Cable Testing (TDR)</strong></h3>
                            <p>If you suspect the copper cable itself is physically broken (a "short" or an "open"), many Cisco switches have a built-in <strong>Time Domain Reflectometer (TDR)</strong>.</p>
                            <pre>Switch# <code>test cable-diagnostics tdr interface gi0/1</code>\n# Wait a few seconds...\nSwitch# <code>show cable-diagnostics tdr interface gigabitEthernet 0/1</code>\n\n# This will tell you exactly how many meters into the cable the break is located!</code></pre>

                            <table>
                                <caption>
                                    <b>Summary Table for Quick Troubleshooting</b>
                                </caption>
                                <thead>
                                    <tr>
                                    <th scope="col">Symptom</th>
                                    <th scope="col">Probable Cause</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">Interface is "up/down"</th>
                                    <td>Keepalive failure or speed mismatch.</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">High CRC errors</th>
                                    <td>Bad cable, bad SFP, or interference.</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Late Collisions</th>
                                    <td>Duplex mismatch or cable too long (>100m).</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Output Errors</th>
                                    <td>Interface buffer is full (congestion).</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Interface is "administratively down"</th>
                                    <td>You forgot to run the <code>no shutdown</code> command!</td>
                                    </tr>
                                    </tr>
                                </tbody>
                            </table>

                            <p><strong>Pro Tip:</strong> Always start your troubleshooting with <code>show interfaces</code>. It will tell you the status, speed, duplex, and error counters for the interface in question. From there, you can determine if it's a physical layer issue (cabling, SFP) or a configuration issue (speed/duplex mismatch).</p>
                            <p>If you see errors incrementing, clear the counters first to see if the problem is still happening in real-time:</p>
                            <pre>Switch# <code>clear counters gigabitEthernet 0/1</code></pre>
                        `
                    },
                    {
                        id: "1.5",
                        title: "1.5 Compare TCP to UDP",
                        summary: "3-Way Handshake, Flow Control, Headers, Port Numbers",
                        content: `
                            <p>Both of these protocols live at <strong>Layer 4 (the Transport Layer)</strong> of the OSI model. Their job is to move data from an application on one device to an application on another, but they go about it in very different ways. Think of it this way: TCP is like <q>sending a registered letter through the mail</q>, while UDP is like <q>shouting a message across a crowded room.</q></p>
                            <h3><strong>1. TCP (Transmission Control Protocol)</strong></h3>
                            <p>TCP is designed for <strong>reliability</strong>. It ensures that every single packet arrives in the correct order and without errors. If a packet goes missing, TCP will ask for it to be resent. It is a connection-oriented protocol that ensures reliable data delivery. It establishes a connection using a 3-way handshake, provides flow control, and guarantees that data is received in order.</p>
                            <ul>
                                <li><strong>Key Characteristics:</strong></li>
                                <li><strong>Connection-Oriented:</strong> Before any data is sent, TCP performs a "Three-Way Handshake" to establish a connection.</li>
                                <li><strong>3-Way Handshake:</strong> SYN, SYN-ACK, ACK. This establishes a connection before data is sent.</li>
                                <li><strong>Reliable:</strong> It uses acknowledgments (ACKs) to confirm receipt of data. Ensures data is delivered without errors and in the correct order.</li>
                                <li><strong>Flow Control:</strong> It uses a "Windowing" mechanism to manage how much data can be sent before waiting for an ACK, preventing the receiver from being overwhelmed.</li>
                                <li><strong>Sequencing:</strong> Packets are numbered so the receiving device can put them back in the correct order.</li>
                                <li><strong>Header Size:</strong> TCP has a <strong>20-byte header</strong> that contains information like source/destination ports, sequence numbers, and flags.</li>
                            </ul>

                            <h3><strong>2. UDP (User Datagram Protocol)</strong></h3>
                            <p>UDP is designed for <strong>speed and efficiency</strong>. It is a <q>best-effort</q> delivery protocol. It doesn't care if the data gets there or if it’s in the right order—it just sends it as fast as possible.</p>
                            <ul>
                                <li><strong>Key Characteristics:</strong></li>
                                <li><strong>Connectionless:</strong> No handshake is performed. Data is sent without establishing a connection. It just starts blasting data.</li>
                                <li><strong>Fast:</strong> Due to the lack of connection setup and error checking, UDP is faster than TCP.</li>
                                <li><strong>Best-Effort Delivery:</strong> It does not guarantee delivery, order, or error checking. No acknowledgments and no retransmissions.</li>
                                <li><strong>No Flow Control:</strong> It sends data at the rate the application provides it.</li>
                                <li><strong>Low Overhead:</strong> The UDP header is only <strong>8 bytes</strong> which makes it more efficient for simple data transfers.</li>
                            </ul>

                             <table>
                                <caption>
                                    <b>Comparison Table</b>
                                </caption>
                                <thead>
                                    <tr>
                                    <th scope="col">Feature</th>
                                    <th scope="col">TCP</th>
                                    <th scope="col">UDP</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">Reliability</th>
                                    <td>Guaranteed delivery</td>
                                    <td>Best-effort (No guarantee) </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Speed</th>
                                    <td>Slower (due to overhead)</td>
                                    <td>Faster (minimal overhead)</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Method</th>
                                    <td>Connection-oriented</td>
                                    <td>Connectionless</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Retransmission</th>
                                    <td>Retransmits lost data</td>
                                    <td>Does not retransmit (best-effort)</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Header Size</th>
                                    <td>20 bytes</td>
                                    <td>8 bytes</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Usage</th>
                                    <td>Web browsing, Email, File transfers</td>
                                    <td>Streaming, VoIP, DNS, Gaming</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3><strong>Common Port Numbers to Know for the CCNA</strong></h3>
                            <p>In the world of Cisco networking, you need to know which common protocols use which Transport Layer protocol:
                            <ul>
                                <li><strong>TCP Applications:</strong></li>
                                <li>SSH (22)</li>
                                <li>Telnet (23)</li>
                                <li>HTTP (80)</li>
                                <li>HTTPS (443)</li>
                                <li>FTP (20/21)</li>
                                <li><strong>UDP Applications:</strong></li>
                                <li>DNS (53)</li>
                                <li>DHCP (67/68)</li>
                                <li>TFTP (69)</li>
                                <li>SNMP (161)</li>
                                <li>NTP (123)</li>
                            </ul>

                            <h3><strong>Cisco IOS Verification</strong></h3>
                            <p>If you are logged into a Cisco router or switch and want to see the active TCP connections or check for UDP traffic statistics, you can use these commands:</p>
                            <pre># View active TCP connections on the device\nRouter# <code>show tcp brief</code>\n\nView general statistics for transport layer protocols\nRouter# <code>show ip traffic</code>\n\n# Show UDP statistics\nRouter# <code>show udp statistics</code>\n\n# Check if a specific service (like a web server) is listening\nRouter# <code>show control-plane host open-ports</code></pre>

                            <h3><strong>Summary for the CCNA Exam</strong></h3>
                            <p>* Use <strong>TCP</strong> when you cannot afford to lose even one bit of data (like a bank transfer or a text document).</p>
                            <p>* Use <strong>UDP</strong> when speed is more important than perfect accuracy (like a Zoom call, where a dropped packet just causes a tiny glitch in audio rather than stopping the whole call).</p>
                        `
                    },
                    {
                        id: "1.6",
                        title: "1.6 Configure and verify IPv4 addressing and subnetting",
                        summary: "Subnet Masking, Magic Number Rule, IOS Interface Config",
                        content: `
                            <h3><strong>1. The Subnetting Scenario</strong></h3>
                            <p>Subnetting is the process of dividing a larger network into smaller, more manageable sub-networks (subnets). This allows for better organization, improved security, and efficient use of IP addresses.<br>Let’s say we are given the network <strong>192.168.10.0/24</strong> and we need to create two separate departments.<br>By "borrowing" 1 bit from the host portion, our new subnet mask becomes <strong>/25</strong> (or <q>255.255.255.128</q>).</p>
                            <pre><strong>Subnet A:</strong> 192.168.10.0/25<br><strong>Usable IP Range:</strong> 192.168.10.1 to 192.168.10.126<br><strong>Broadcast:</strong> 192.168.10.127<br><br><strong>Subnet B:</strong> 192.168.10.128/25<br><strong>Usable IP Range:</strong> 192.168.10.129 to 192.168.10.254<br><strong>Broadcast:</strong> 192.168.10.255</pre>

                            <h3><strong>2. Configuring IPv4 on a Cisco Router</strong></h3>
                            <p>To apply these addresses, we navigate to the specific interface. We will assign the first usable IP of each subnet to the router's interfaces to act as the <strong>Default Gateway</strong>.</p>
                            <pre># Configuring GigabitEthernet 0/0 (Subnet A)\nRouter> <code>enable</code>\nRouter# <code>configure terminal</code>\nRouter(config)# <code>interface GigabitEthernet0/0</code>\nRouter(config-if)# <code>ip address 192.168.10.1 255.255.255.128</code>\nRouter(config-if)# <code>description Gateway for Sales Dept</code>\nRouter(config-if)# <code>no shutdown</code>\nRouter(config-if)# <code>exit</code>\n\n# Configuring GigabitEthernet 0/1 (Subnet B)\nRouter(config)# <code>interface GigabitEthernet0/1</code>\nRouter(config-if)# <code>ip address 192.168.10.129 255.255.255.128</code>\nRouter(config-if)# <code>description Gateway for Marketing Dept</code>\nRouter(config-if)# <code>no shutdown</code>\nRouter(config-if)# <code>exit</code></pre>

                            <h3><strong>3. Configuring a Switch Virtual Interface (SVI)</strong></h3>
                            <p>On a Layer 2 switch, we assign an IP address to a VLAN interface for remote management (SSH/Telnet).</p>
                            <pre>Switch# <code>configure terminal</code>\nSwitch(config)# interface vlan 1\nSwitch(config-if)# <code>ip address 192.168.10.2 255.255.255.128</code>\nSwitch(config-if)# <code>no shutdown</code>\nSwitch(config-if)# <code>exit</code>\nSwitch(config)# <code>ip default-gateway 192.168.10.1</code></pre>

                            <h3><strong>4. Verification</strong></h3>
                            <p>Once configured, you must verify that the interfaces are functional and the logic is correct.</p>
                            <pre># Check Interface Status:\nThis command shows if the interface is "up/up."\nRouter# <code>show ip interface brief</code>\n\nCheck the Routing Table:\nThis confirms that the router sees the subnets as "Directly Connected."\nRouter# <code>show ip route</code>\n\nVerify Detailed Interface Info:\nUse this to double-check the subnet mask specifically.\nRouter# <code>show ip interface GigabitEthernet0/0</code>\n\nTest Connectivity:\nFinally, ensure the router can reach a device (e.g., a PC at 192.168.10.10).\nRouter# <code>ping 192.168.10.10</code></pre>

                            <h3><strong>Quick Pro-Tip for the CCNA Exam:</strong></h3>
                            <p>Always remember the <strong>"Magic Number"</strong> rule for subnetting! </p>
                            <ol>
                                <li>Subtract the interesting octet of the mask from 256. </li>
                                <li>Example: For mask <q>255.255.255.128</q>, the magic number is <q>256 - 128 = 128</q>. </li>
                                <li>Your networks will go up in increments of 128 (0, 128). </li>
                            </ol>


                        `
                    },
                    {
                        id: "1.7",
                        title: "1.7 Describe private IPv4 addressing",
                        summary: "RFC 1918 Ranges, NAT, APIPA 169.254.0.0/16",
                        content: `
                            <h3><strong>What are Private IPv4 Addresses?</strong></h3>
                            <p>In the early days of the internet, every device was intended to have a unique public IP address. However, as the number of devices exploded, we quickly realized we would run out of IPv4 addresses (there are only about 4.29 billion).<br>To solve this, <strong>RFC 1918</strong> was established. It set aside specific blocks of IP addresses for use within private networks (like your home, office, or lab). These addresses are <strong>not routable</strong> on the public internet.<br>These addresses allow organizations to create their own internal networks without consuming public IP address space.</p>
                            <h3><strong>1. The RFC 1918 Address Ranges</strong></h3>
                            <p>There are three main blocks of private addresses, corresponding to the traditional classes (A, B, and C):</p>
                            <table>
                                <thead>
                                    <tr>
                                    <th scope="col">Class</th>
                                    <th scope="col">Starting Address</th>
                                    <th scope="col">Ending Address</th>
                                    <th scope="col">CIDR Prefix</th>
                                    <th scope="col">Total Addresses</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">Class A</th>
                                    <td>10.0.0.0</td>
                                    <td>10.255.255.255</td>
                                    <td>/8</td>
                                    <td>16,777,216</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Class B</th>
                                    <td>172.16.0.0</td>
                                    <td>172.31.255.255</td>
                                    <td>/12</td>
                                    <td>1,048,576</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Class C</th>
                                    <td>192.168.0.0</td>
                                    <td>192.168.255.255</td>
                                    <td>/16</td>
                                    <td>65,536</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p><strong>Bonus Tip:</strong> Remember that the Class B private range is 172.16.0.0 to 172.31.255.255.</p>

                            <h3><strong>Key Characteristics</strong></h3>
                            <ul>
                                <li><strong>Non-Routable:</strong> Internet Service Providers (ISPs) are configured to drop any traffic coming from a private IP address. This prevents internal traffic from leaking onto the global web.
                                <li><strong>Reusability:</strong> Because these addresses are not unique globally, millions of different organizations can use the <q>192.168.1.0/24</q> network simultaneously without any conflict.</li>
                                <li><strong>Cost:</strong> Public IP addresses must be leased from an ISP or registry. Private addresses are free for anyone to use.</li>
                                <li><strong>Security:</strong> Using private addresses hides the internal structure of a network from the outside world..</li>
                            </ul>

                            <h3><strong>How do Private IPs talk to the Internet?</strong></h3>
                            <p><strong>Note:</strong> These private addresses can be used freely within an organization, but if you want to communicate with the public internet, you'll need to use <strong>NAT (Network Address Translation)</strong> to translate these private addresses to a public IP address.<br>A router sits at the edge of your network. It takes your internal private IP address and "translates" it into a single public IP address provided by your ISP. When the data comes back, the router translates it back to your private IP.</p>
                            
                            <h3><strong>Special Mention: APIPA</strong></h3>
                            <p>If a Windows computer is configured for DHCP but cannot find a DHCP server, it assigns itself an <strong>Automatic Private IP Address (APIPA)</strong>. This is a special range of addresses that allows the computer to communicate with other devices on the same local network, but it cannot reach the internet.</p>
                            <ul>
                                <li><strong>APIPA Range:</strong> 169.254.0.1 to 169.254.255.254</li>
                                <li><strong>Subnet Mask:</strong> 255.255.0.0 (/16)</li>
                            </ul>

                            <p>If you ever see a <code><strong>169.254.x.x</strong></code> address during your CCNA labs, it’s a red flag that your DHCP configuration is broken!</p>

                            <h3><strong>Configuration Example: Cisco IOS</strong></h3>
                            <p>Assigning a private IP address to a router interface is one of the first things you'll do in the lab.<br>Here is how you configure a Class C private address on a GigabitEthernet interface:</p>
                            <pre>Router> <code>enable</code>\nRouter# <code>configure terminal</code>\nRouter(config)# <code>interface gigabitEthernet 0/0</code>\nRouter(config-if)# <code>ip address 192.168.1.1 255.255.255.0</code>\nRouter(config-if)# <code>no shutdown</code>\nRouter(config-if)# <code>exit</code>\nRouter(config)# <code>exit</code>\nRouter# <code>show ip interface brief</code></pre>

                            <p><strong>Pro-Tip for the Exam:</strong> Remember that the Class B range is specifically <q>172.16.0.0</q> through <q>172.31.255.255</q>.<br>Beginners often mistakenly think it goes all the way to <q>172.255.255.255</q>, but that is incorrect!</p>
                        `
                    },
                    {
                        id: "1.8",
                        title: "1.8 Configure and verify IPv6 addressing and prefix",
                        summary: "Global Unicast (GUA), Link-Local (LLA), Verification",
                        content: `
                            <h3><strong>1. Enable IPv6 Routing</strong></h3>
                            <p>Before you can assign IPv6 addresses to interfaces, you must enable IPv6 routing on the router. Without this command, the router acts like an IPv6 host but won't route traffic between interfaces. This is done with the command:</p>
                            <pre>Router(config)# <code>ipv6 unicast-routing</code></pre>

                            <h3><strong>2. Configure an IPv6 Address on an Interface</strong></h3>
                            <p>IPv6 addresses are assigned to interfaces in a similar way to IPv4, but the syntax is slightly different. We typically configure two types of addresses on an interface:</p>
                            <ul>
                                <li><strong>Link-Local Address (LLA):</strong> This is automatically generated for each interface and is used for communication on the local link. It always starts with <code>fe80::/10</code>. You can also manually configure it if needed.</li>
                                <li><strong>Global Unicast Address (GUA):</strong> These are publicly routable addresses that start with <code>2000::/3</code>.</li>
                            </ul>
                            <p>Here is how you would configure both a GUA and a LLA on GigabitEthernet 0/0/0:</p>
                            <pre>Router(config)# <code>interface GigabitEthernet0/0/0</code>\nRouter(config-if)# <code>ipv6 address 2001:db8:acad:1::1/64</code>\nRouter(config-if)# <code>ipv6 address fe80::1 link-local</code>\nRouter(config-if)# <code>no shutdown</code>\nRouter(config-if)# <code>exit</code></pre>

                            <p><strong>Pro Tip:</strong> While the router can auto-generate a Link-Local address based on the EUI-64 process, manually setting it to something simple like <code><strong>fe80::1</strong></code> makes troubleshooting and documenting your network much easier!</p>

                            <h3><strong>3. Verify IPv6 Configuration</strong></h3>
                            <p>After configuring IPv6 addresses, you should verify that they are correctly applied and that the interface is operational.</p>
                            <h3><strong>The quick Summary</strong></h3>
                            <p>This is the most common command used by engineers to see the status of all IPv6-enabled interfaces.</p>
                            <pre>Router# <code>show ipv6 interface brief</code>\n\n*Output will show the interface, its status (up/up), and the assigned GUA and LLA.*</pre>
                            <h3><strong>Detailed Interface Information</strong></h3>
                            <p>If you need to see details like multicast group memberships and whether ICMP redirects are enabled, use:</p>
                            <pre>Router# <code>show ipv6 interface GigabitEthernet0/0/0</code></pre>
                            <h3><strong>Verify the IPv6 Routing Table</strong></h3>
                            <p>To ensure the prefix is in the routing table and the router knows where to send traffic:</p>
                            <pre>Router# <code>show ipv6 route</code>\n\n*Look for codes like **C** (Connected) and **L** (Local) to verify your direct networks.*</pre>
                            <h3><strong>Testing Connectivity</strong></h3>
                            <p>Finally, test the reachability of a neighbor or the gateway:</p>
                            <pre>Router# <code>ping ipv6 2001:db8:acad:1::2</code></pre>

                            <h3><strong>4. Summary Checklist</strong></h3>
                            <ul>
                                <li><strong>Prefix Length:</strong> Always double-check your <code>/64</code>.</li>
                                <li><strong>Unicast Routing:</strong> Did you remember the global <code>ipv6 unicast-routing</code> command?</li>
                                <li><strong>No Shutdown:</strong> Is the interface physically and logically up?</li>
                            </ul>
                        `
                    },
                    {
                        id: "1.9",
                        title: "1.9 Describe IPv6 address types",
                        summary: "Unicast, Anycast, Multicast (ff02::), EUI-64 Calculation",
                        content: `
                            <p>IPv6 addresses are 128 bits long and are represented in hexadecimal notation. They are divided into different types based on their purpose and scope.<br>There is <strong>no broadcast in IPv6</strong> it has been replaced by more efficient multicast and anycast methods.<br>Understanding these types is crucial for network design and troubleshooting.</p>

                            <h3><strong>1. Unicast Addresses</strong></h3>
                            <p>Unicast identifies a **single interface**. A packet sent to a unicast address is delivered to that specific interface. There are three main types:</p>
                            <ul>
                                <li><strong>Global Unicast (GUA):</strong> These are globally routable on the internet (like IPv4 public IPs). They currently use the prefix <code>2000::/3</code> (Routable public IP)</li>
                                <li><strong>Link-Local (LLA):</strong>These are used for communication within a single local link (subnet). They are not routable. Every IPv6-enabled interface must have one. They use the prefix <code>fe80::/10</code> (Mandatory per interface).</li>
                                <li><strong>Unique Local Address (ULA):</strong> These are similar to IPv4 private addresses (RFC 1918). They are used inside an organization but are not routable on the internet. They use the prefix <code>fd00::/7</code> (though usually seen as <code>fd00::/8</code>) Locally administered.</li>
                                <li><strong>Loopback Address:</strong> Written as <code>::1/128</code> (Equivalent to IPv4's 127.0.0.1)</li>
                            </ul>
                            <h3><strong>2. Multicast Addresses</strong></h3>
                            <p>A multicast address identifies a <strong>group of interfaces</strong> (usually on different nodes). A packet sent to this address is delivered to all interfaces belonging to that group. They all start with the prefix <code>ff00::/8</code>.</p>
                            <ul>
                                <li><strong>Common Multicast addresses you should memorize:</strong></li>
                                <li><strong>ff02::1</strong> - All nodes on the local link (like a broadcast in IPv4)</li>
                                <li><strong>ff02::2</strong> - All routers on the local link</li>
                                <li><strong>ff02::a</strong> - EIGRP routers.</li>
                                <li><strong>ff02::5 or</strong> <strong>ff02::9</strong> - OSPFv3 routers.</li>
                            </ul>
                            
                            <h3><strong>3. Anycast Addresses</strong></h3>
                            <p>Anycast is a "one-to-nearest" delivery method. Multiple devices (usually servers or routers) are assigned the <strong>exact same IPv6 address</strong>.<br>When a packet is sent to an anycast address, the routing infrastructure delivers it to the interface that is "closest" based on the routing protocol's metric. There is no special prefix for Anycast; you simply configure a Unicast address and tell the router it is an Anycast address.</p>
                            
                            <h3><strong>4. Modified EUI-64</strong></h3>
                            <p>Modified EUI-64 is a process used to automatically create a 64-bit **Interface ID** (the host portion) using the device's 48-bit MAC address.</p>
                            <h3><strong>The Process:</strong></h3>
                            <ol>
                                <li>Take the 48-bit MAC address.</li>
                                <li>Split it into two halves.</li>
                                <li>Insert <code>FFFE</code> in the middle.</li>
                                <li>Invert the 7th bit (the Universal/Local bit). If it was 0, make it 1; if it was 1, make it 0.</li>
                            </ol>                            
                            <h3><strong>Example:</strong></h3>
                            <ul>
                                <li><strong>MAC Address:</strong> <code>0011:2233:4455</code></li>
                                <li><strong>Insert FFFE:</strong> <code>0011:22FF:FE33:4455</code></li>
                                <li><strong>Flip the 7th Bit:</strong> The first byte is <code>00</code> (binary <code>00000000</code>). Invert the 7th bit to get <code>02</code> (binary <code>00000010</code>).</li>
                                <li><strong>Resulting EUI-64 ID:</strong> <code>0211:22FF:FE33:4455</code></li>
                            </ul>
                            <p>This Interface ID is then combined with the network prefix to form a full IPv6 address.</p>

                            <h3><strong>Cisco Configuration Examples</strong></h3>
                            <p>To enable IPv6 routing on a router:</p>
                            <pre>Router(config)# <code>ipv6 unicast-routing</code></pre>
                            <p>To configure a Global Unicast Address manually:</p>
                            <pre>Router(config)# <code>ipv6 address 2001:db8:acad:1::1/64</code></pre>
                            <p>To configure an address using the **Modified EUI-64** process:</p>
                            <pre>Router(config)# <code>ipv6 address 2001:db8:acad:1::1/64 eui-64</code></pre>
                            <p>To verify your IPv6 interfaces:</p>
                            <pre>Router(config)# <code>show ipv6 interface brief</code></pre>
                        `
                    },
                    {
                        id: "1.10",
                        title: "1.10 Verify IP parameters for Client OS",
                        summary: "Windows, Linux, macOS Command Reference",
                        content: `
                            <h3><strong>1. Windows (Command Prompt or PowerShell)</strong></h3>
                            <p>Windows uses the <code>ipconfig</code> utility. This is the most common tool for CCNA candidates to learn first.</p>
                            <p><strong>Basic View:</strong> Shows IP, Mask, and Gateway.</p>

                            <pre>C:\\Windows\\System32> <code>ipconfig</code></pre>
                            <p><strong>Detailed View:</strong> Shows MAC address (Layer 2), DNS servers, and DHCP lease information.</p>
                            <pre>C:\\Windows\\System32> <code>ipconfig /all</code></pre>
                            <ul>
                                <li><strong>Key Parameters to look for:</strong></li>
                                <li><strong>IPv4 Address:</strong> The logical address of the host.</code></li>
                                <li><strong>Subnet Mask:</strong> Defines the network/host boundary.</li>
                                <li><strong>Default Gateway:</strong> The router interface that connects the host to other networks (crucial for leaving the local network).</li>
                                <li><strong>DNS Servers:</strong> The IP addresses of the servers that resolve domain names to IP addresses.</li>
                                <li><strong>MAC Address:</strong> The physical address of the network interface card (NIC).</li>
                            </ul>

                            <h3><strong>2. Linux (CLI)</strong></h3>
                            <p>Modern Linux distributions (Ubuntu, CentOS, Debian) primarily use the <code>ip</code> command from the **iproute2** package, though older systems might still use <code>ifconfig</code>.</p>

                            <p><strong>To check IP address and Subnet Mask:</strong></p>
                            <pre>$ <code>ip addr show</code>\n\nNote: Look for the <code>inet</code> line under your interface, such as <code>eth0</code> or <code>enp0s3</code>.</pre>

                            <p><strong>To check the Default Gateway (Routing Table):</strong></p>
                            <pre>$ <code>ip route</code>\n\nNote: Look for the <code>default via</code> line, which indicates the default gateway.</pre>

                            <p><strong>To check DNS Servers:</strong></p>
                            <pre>$ <code>cat /etc/resolv.conf</code>\n\nOn Linux, DNS information is typically stored in a configuration file.</pre>

                            <h3><strong>3. macOS (Terminal)</strong></h3>
                            <p>macOS is Unix-based, so its commands are very similar to Linux, but it retains some specific utilities.</p>

                            <p><strong>To check IP address (Standard Unix command):</strong></p>
                            <pre>$ <code>ifconfig</code>\n\nNote: Look for <code>en0</code> for Wi-Fi or <code>en1</code> for Ethernet.</pre>

                            <p><strong>To check the Default Gateway (Routing Table):</strong></p>
                            <pre>$ <code>netstat -nr | grep default</code></pre>

                            <p><strong>The "macOS Way" (Specific Utility):</strong><br>If you want a clean, easy-to-read output for a specific interface (like Wi-Fi), use <code>networksetup</code>:</p>
                            <pre>$ <code>networksetup -getinfo Wi-Fi</code></pre>

                            <table>
                                <caption>
                                    <b>Summary Table for Troubleshooting</b>
                                </caption>
                                <thead><tr><th>Parameter</th><th>Windows</th><th>Linux / macOS</th></tr></thead>
                                <tbody>
                                    <tr><td>IP / Subnet</td><td><code>ipconfig /all</code></td><td><code>ip addr</code> / <code>ifconfig</code></td></tr>
                                    <tr><td>Default Gateway</td><td><code>ipconfig</code></td><td><code>ip route</code> / <code>netstat -nr</code></td></tr>
                                    <tr><td>DNS Servers</td><td><code>ipconfig /all</code></td><td><code>cat /etc/resolv.conf</code></td></tr>
                                    <tr><td>MAC Address</td><td><code>ipconfig /all</code></td><td><code>ip link</code> / <code>ifconfig</code></td></tr>
                                </tbody>
                            </table>
                            <h3><strong>Pro-Tip for the CCNA:</strong></h3>
                            <p>If you see an IP address starting with <q>169.254.x.x</q>, the client has configured an <strong>APIPA</strong> (Automatic Private IP Addressing) address.<br>This means the client is configured for DHCP but cannot reach the DHCP server! This is a classic "Layer 2" or "DHCP Scope" issue you'll often see on the exam.</p>
                        `
                    },
                    {
                        id: "1.11",
                        title: "1.11 Describe wireless principles",
                        summary: "Nonoverlapping channels, SSID, RF, Encryption",
                        content: `
                            <p>Wireless networking allows devices to communicate without physical cables, using radio frequency (RF) signals. Understanding the principles of wireless communication is essential for network design, troubleshooting, and security.</p>
                            <h3><strong>1. Radio Frequency (RF)</strong></h3>
                            <p>RF is the physical layer of wireless communication. Instead of electrical pulses in copper or light pulses in fiber, wireless devices use **electromagnetic waves** to transmit data.</p>
                            <ul>
                                <li><strong>Frequency Bands:</strong> Most Wi-Fi operates on two main bands:</li>
                                <li><strong>2.4 GHz:</strong> Better range and obstacle penetration (walls), but slower speeds and more interference (microwaves, Bluetooth).</li>
                                <li><strong>5 GHz:</strong> Faster speeds and less interference, but shorter range and poor wall penetration.</li>
                                <li><strong>6 GHz (Wi-Fi 6E/7):</strong>  The newest band, offering massive bandwidth and almost zero interference.</li>
                                <li><strong>Modulation:</strong> This is the process of changing the RF wave (amplitude, frequency, or phase) to represent binary data (0s and 1s).</li>
                            </ul>

                            <h3><strong>2. Service Set Identifier (SSID):</strong></h3>
                            <p>The SSID is simply the <strong>technical name</strong> of the wireless network. It’s what you see on your phone when you are looking for a hotspot.</p>
                            <ul>
                                <li><strong>Identification:</strong> It allows a client (station) to distinguish one WLAN from another in the same area.</li>
                                <li><strong>Beacons:</strong> Access Points (APs) broadcast "Beacon Frames" containing the SSID so clients can find them.</li>
                                <li><strong>Security Note:</strong> You can "hide" an SSID by disabling the broadcast, but this isn't true security—hackers can still find the SSID by sniffing the air for probe requests.</li>
                            </ul>

                            <h3><strong>3. Non-overlapping Channels</strong></h3>
                            <p>Wi-Fi bands are divided into smaller "channels" to prevent everyone from talking on the exact same frequency at once. However, if channels are too close together, they bleed into each other, causing <strong>interference</strong>.</p>
                            <ul>
                                <li><strong>The 2.4 GHz Problem:</strong> This band has 11 channels (in the US), but they are only 5 MHz apart, while a Wi-Fi signal is 20 MHz wide. This causes overlap.</li>
                                <li><strong>The "Magic Three":</strong> To avoid interference in the 2.4 GHz band, we only use channels <strong>1, 6, and 11</strong>. These are the only three that do not overlap.</li>
                                <li><strong>5 GHz  and 6 GHz:</strong> These bands have many more channels (24+), making it much easier to deploy high-density networks without overlap.</li>
                            </ul>
                            <p><strong>Analogy:</strong> Think of channels like lanes on a highway. If the lanes aren't painted clearly and cars drift into each other's space, accidents (packet collisions) happen. Too many cars (devices) are in the same lane, traffic slows down. By using non-overlapping channels, we give each device its own lane to drive in.</p>
                            <h3><strong>4. Encryption</strong></h3>
                            <p>Since RF signals travel through the air, anyone with an antenna can "hear" your data. Encryption scrambles that data so only the intended recipient can read it.</p>
                            <ul>
                                <li><strong>WEP (Legacy):</strong> Weak and easily cracked. Avoid using it.</li>
                                <li><strong>WPA/WPA2 (Standard):</strong> Stronger encryption using TKIP (WPA) or AES (WPA2). WPA2 is the current standard for most networks.</li>
                                <li><strong>WPA3 (Modern):</strong> The latest standard, offering even stronger encryption and protection against brute-force attacks.</li>
                                <li><strong>Enterprise vs Personal:</strong></li>
                                <li>- <strong>WPA-Personal (PSK):</strong> Uses a pre-shared key (PSK) for authentication. Good for home networks.</li>
                                <li>- <strong>WPA-Enterprise (802.1X):</strong> Uses a RADIUS server for authentication. Ideal for businesses and large networks.</li>
                            </ul>

                            <h3><strong>Quick Config Example: Basic SSID Setup</strong></h3>
                            <p>In a Cisco environment (like a Wireless LAN Controller), you might define a basic WLAN via CLI or GUI. Here is a conceptual CLI representation for a simple WPA2-PSK setup:</p>
                            <pre># Create the WLAN with an ID and SSID name\n<code>wlan MyCiscoNetwork 1 MyCiscoNetwork</code>\n\n# Enable the WLAN\n <code>no shutdown</code>\n\n# Set security to WPA2 with AES encryption\n<code>security wpa2 aes\nsecurity wpa2 akm psk</code>\n\nSet the Pre-Shared Key (Password)\n<code>security wpa2 akm psk set-key ascii Cisco123!</code></pre>

                            <p><strong>Pro Tip:</strong> For your CCNA exam, remember that <strong>Co-channel interference</strong> happens when APs are on the same channel, and <strong>Adjacent-channel interference</strong> happens when they are on overlapping channels (like 1 and 2). Always stick to 1, 6, and 11!
                        `
                    },
                    {
                        id: "1.12",
                        title: "1.12 Explain virtualization fundamentals",
                        summary: "Server virtualization, Containers, and VRFs",
                        content: `
                            <h3><strong>1. Server Virtualization (Virtual Machines)</strong></h3>
                            <p>Server virtualization uses a software layer called a <strong>Hypervisor</strong> to trick multiple Operating Systems (OS) into thinking they have their own dedicated hardware.</p>
                            <ul>
                                <li><strong>How it works:</strong> A single physical server (the Host) runs a hypervisor. This hypervisor allocates CPU, RAM, and Storage to multiple <strong>Virtual Machines (VMs)</strong>.</li>
                                <li><strong>Key Benefit:</strong> You can run a Windows Server, a Linux Server, and a SQL database on the same physical hardware without them interfering with each other.</li>
                                <li><strong>Types of Hypervisors:</strong></li>
                                <li>- <strong>Type 1 (Bare Metal):</strong> Runs directly on the hardware (e.g., VMware ESXi, Microsoft Hyper-V).</li>
                                <li>- <strong>Type 2 (Hosted):</strong> Runs on top of an existing OS (e.g., VMware Workstation, Oracle VirtualBox).</li>
                            </ul>

                            <h3><strong>2. Containers</strong></h3>
                            <p>Containers are a lightweight form of virtualization that package an application and its dependencies into a single unit. While a VM virtualizes the hardware, a container virtualizes the <strong>Operating System kernel</strong>.</p>
                            <ul>
                                <li><strong>How it works:</strong> All containers on a host share the same OS kernel but remain isolated in "user space.</li>
                                <li><strong>The Docker Factor</strong> Docker is the most famous container platform. Instead of booting an entire OS (which takes minutes), a container starts in seconds because it only includes the application and its dependencies (libraries/binaries).</li>
                                <li><strong>Comparison:</strong></li>
                                <li>- <strong>VM:</strong> Virtualizes the hardware; each VM runs a full OS (Gigabytes in size).</li>
                                <li>- <strong>Container:</strong> Virtualizes the OS kernel; lighter weight and faster startup (Megabytes in size).</li>
                            </ul>

                            <h3><strong>3. VRF (Virtual Routing and Forwarding)</strong></h3>
                            <p>Now, let's talk about virtualization for the Network Engineer! <strong>VRF</strong> is a technology that allows multiple instances of a routing table to exist on the same router simultaneously. Each VRF instance is isolated from the others, allowing overlapping IP addresses to be used in different VRFs.<br>If you have two customers who both use the '192.168.1.0/24' subnet, their traffic will clash. VRFs solve this by creating multiple independent routing tables on the same device.</p>
                            <ul>
                                <li><strong>How it works:</strong> Each VRF has its own routing table, interfaces, and forwarding decisions. This is similar to having multiple routers in one physical device.</li>
                                <li><strong>Use Cases:</strong> Service providers use VRFs to provide isolated networks for different customers. Enterprises can use VRFs to separate departments or applications.</li>
                            </ul>

                            <p><strong>Configuration Example:</strong></p>
                            <pre># Create the VRF\nRouter(config)# <code>vrf definition CUSTOMER_A</code>\nRouter(config-vrf)# <code>address-family ipv4</code>\nRouter(config-vrf-af)# <code>extit</code>\nRouter(config-vrf)# <code>exit</code>\n\n# Assign an interface to the VRF\nRouter(config)# <code>interface GigabitEthernet0/1</code>\nRouter(config-if)# <code>vrf forwarding CUSTOMER_A</code>\nRouter(config-if)# <code>ip address 10.1.1.1 255.255.255.0</code>\nRouter(config-if)# <code>no shutdown</code>\nRouter(config-if)# <code>exit</code>\n\n# Viewing the specific VRF routing table\nRouter# <code>show ip route vrf CUSTOMER_A</code>\n\n<strong>Note:</strong>\nIn older IOS versions, the command <code>ip vrf CUSTOMER_A</code> is used instead of <code>vrf definition</code></pre></p>

                            <table>
                                <caption>
                                    <b>Summary Comparison Table</b>
                                </caption>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Virtual Machines (VMs)</th>
                                        <th>Containers</th>
                                        <th>VRFs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>What is virtualized?<b></td>
                                        <td>Hardware</td>
                                        <td>Operating System</td>
                                        <td>Routing Table</td>
                                    </tr>
                                    <tr>
                                        <td><b>Isolation Level<b></td>
                                        <td>High (Separate OS)</td>
                                        <td>Medium (Shared Kernel)</td>
                                        <td>Network Layer (L3)</td>
                                    </tr>
                                    <tr>
                                        <td><b>Resource Usage<b></td>
                                        <td>High (GBs of RAM/Disk)</td>
                                        <td>Low (MBs)</td>
                                        <td>Negligible</td>
                                    </tr>
                                    <tr>
                                        <td><b>Primary Use Case<b></td>
                                        <td>Running different OSs</td>
                                        <td>Microservices/App Dev</td>
                                        <td>Multi-tenancy/Security</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p>Virtualization is the foundation of the modern <strong>Cloud</strong> and <strong>Software-Defined Networking (SDN)</strong>.</p>
                        `
                    },
                    {
                        id: "1.13",
                        title: "1.13 Describe switching concepts",
                        summary: "MAC learning and aging, Frame switching, Frame flooding, MAC address table",
                        content: `
                            <h3><strong>1. The MAC Address Table (CAM Table)</strong></h3>
                            <p>The "brain" of the switch is the <strong>MAC Address Table</strong>, also known as the <strong>CAM (Content Addressable Memory) Table</strong>.<br>This is a dynamic database stored in the switch's memory that maps a specific MAC address to a specific physical port.</p>
                            <p>To view this table on a Cisco switch, you use this command:</p>
                            <pre>Switch# <code>show mac address-table</code></pre>
                            
                            <h3><strong>2. MAC Learning (Source MAC Analysis)</strong></h3>
                            <p>A switch is a student that is constantly learning. When a switch receives a frame, it looks at the <strong>source MAC address</strong> in the Ethernet header. If this MAC address is not already in the MAC Address Table, the switch "learns" it and associates it with the port on which the frame arrived.</p>
                            <ul>
                                <li><strong>Process:</strong> If the Source MAC is not already in the table, the switch creates an entry mapping that MAC address to the port it just arrived on.</li>
                                <li><strong>Rule of Thumb:</strong> Switches learn from <strong>Source</strong> addresses; they never learn from Destination addresses.</li>
                            </ul>

                            <h3><strong>3. Frame Switching (Destination MAC Analysis)</strong></h3>
                            <p>Once the switch knows "who is where," it can perform <strong>Frame Switching</strong>. When a frame arrives, the switch looks at the <strong>Destination MAC Address</strong>.
                            <ul>
                                <li><strong>The Lookup:</strong> It searches its MAC Address Table for that destination.</li>
                                <li><strong>The Action:</strong> If the destination is found, the switch creates a temporary point-to-point connection between the ingress (incoming) port and the egress (outgoing) port. This is called <strong>Forwarding</strong>.</li>
                                <li><strong>Filtering:</strong> If the switch knows the destination is on the same port it arrived on (which can happen with hubs or nested switches), it drops the frame. This is called <strong>Filtering</strong>.</li>
                            </ul>

                            <h3><strong>4. Frame Flooding (Unknown Unicast & Broadcast)</strong></h3>
                            <p>What happens if the switch looks at the Destination MAC and doesn't see it in the table?</p>
                            <ul>
                                <li><strong>Unknown Unicast Flooding:</strong> The switch doesn't want to lose the data, so it sends the frame out of <strong>every port</strong> except the one it arrived on. Once the intended recipient replies, the switch "learns" its location (back to step 2) and won't have to flood again.</li>
                                <li><strong>Broadcast/Multicast:</strong> If a frame is addressed to <code>FFFF.FFFF.FFFF</code> (Broadcast), the switch automatically floods it to everyone in the VLAN.</strong>.</li>
                            </ul>

                            <h3><strong>5. MAC Address Aging</strong></h3>
                            <p>The MAC address table isn't infinite. To keep it accurate and clean, switches use an <strong>Aging Timer</strong>.
                            <ul>
                                <li><strong>The Timer:</strong> On most Cisco switches, the default aging time is <strong>300 seconds</strong> (5 minutes).</li>
                                <li><strong>The Refresh:</strong> Every time a frame arrives from a known source, the timer for that entry is reset to zero.</li>
                                <li><strong>The Removal:</strong> If the switch doesn't hear from a specific MAC address for 5 minutes, it deletes the entry. This ensures that if you unplug a laptop and move it to a different office, the switch eventually "forgets" the old location and learns the new one.</li>
                            </ul>

                            <h3><strong>Summary Checklist: The "Life of a Frame"</strong></h3>
                            <ol>
                                <li><strong>1. Frame Arrives:</strong> Switch inspects the <strong>2. Source MAC</strong>.</li>
                                <li><strong>Learning:</strong> Is the source in the table? If not, add it + port ID + timestamp.</li>
                                <li><strong>3. Forwarding Lookup:</strong> Switch inspects <strong>Destination MAC</strong>.</li>
                                <li><strong>4. Decision:</strong></li>
                                    <li>- <strong>Known Unicast</strong>: Forward out the specific port.</li>
                                    <li>- <strong>Unknown Unicast</strong>: Flood out all ports (except the source).</li>
                                    <li>- <strong>Broadcast</strong>: Flood out all ports (except the source).</li>
                                <li><strong>5. Aging:</strong> Remove entries if they haven't talked in a while.</li>
                            </ol>
                        `
                    },
                    {
                        id: "1.14",
                        title: "1.14 General",
                        summary: "ICMP Operations & Troubleshooting Tools",
                        content: `
                            <p>The exam expects you to understand ICMP messages (Destination Unreachable, Time Exceeded, Redirects) and how tools like traceroute manipulate TTL (Time to Live) fields or how ping uses echo requests/replies.</p>
                            <h3><strong>1. Key ICMP Messages</strong></h3>
                            <p>In the world of networking, ICMP is like the "diagnostic feedback system" of the IP suite. While IP is responsible for delivering data, it doesn't have a built-in mechanism for error reporting. That is where ICMP steps in.</p>
                            <h3><strong>1. What is ICMP?</strong></h3>
                            <p>ICMP operates at <strong>Layer 3 (Network Layer)</strong>. It doesn’t carry application data; instead, it carries information about the status of the network or reports errors when a packet cannot reach its destination.</p>
                            <ul>
                                <li><strong>Common ICMP Message Types:</strong></li>
                                <li>- <strong>Echo Request (Type 8) & Reply (Type 0):</strong> Used by 'Ping' command to test connectivity.</li>
                                <li>- <strong>Time Exceeded (Type 11):</strong> Sent when a packet’s **TTL (Time to Live)** reaches 0. This is the foundation of the <code>traceroute</code> command to map hops.</li>
                                <li>- <strong>Destination Unreachable (Type 3):</strong> Sent by a router when it doesn't have a route to the destination.</li>
                                <li>- <strong>Redirect (Type 5):</strong> sed to inform a host that there is a better path/gateway to a destination.</li>
                            </ul>

                            <h3><strong>2. Primary Troubleshooting Tools</strong></h3>
                            <p><b>A. Ping (Packet Inter-Network Groper)</b></b>
                            <p>'ping' verifies Layer 3 connectivity. It sends an Echo Request to an IP address and waits for an Echo Reply.</p>
                            <ul>
                                <li>- <b>Success (!):</b> Received a reply.</li>
                                <li>- <b>Timeout (.):</b> The router waited but heard nothing back (likely a firewall or a dead end).</li>
                                <li>- <b>Unreachable (U):</b> A router along the path doesn't know how to get to the destination..</li>
                            </ul>
                            <p><b>Cisco IOS Configuration:</b></p>
                            <pre># Standard Ping\nRouter# <code>ping</code>\n\n# Extended Ping (Allows you to specify source interface, size, etc.)\nRouter# <code> ping</code>\nProtocol [ip]:\nTarget IP address: 10.1.1.1\nRepeat count [5]: 10\nDatagram size [100]:\nTimeout in seconds [2]: \nExtended commands [n]: y\nSource address or interface: GigabitEthernet0/0</pre>

                            <p><b>B. Traceroute</b></b>
                            <p>'traceroute' maps the path a packet takes to its destination. It works by sending packets with increasing TTL values (starting at TTL 1). Each router along the way decrements the TTL, and when it hits 0, the router drops the packet and sends back an **ICMP Time Exceeded** message.</p>
                            <p><b>Cisco IOS Configuration:</b></p>
                            <pre># Tracing the path to a remote server\nRouter# <code>traceroute 8.8.8.8</code></pre>
                            
                            <h3><strong>3. ICMPv6: The Evolution</strong></h3>
                            <p>In IPv6, ICMPv6 is much more powerful. It doesn't just report errors; it handles essential network functions that were previously handled by other protocols like ARP.</p>
                            <ul>
                                <li><strong>Neighbor Discovery Protocol (NDP):</strong> Replaces ARP. It uses <b>Neighbor Solicitation</b> and <b>Neighbor Advertisement</b> to find MAC addresses.</li>
                                <li><strong>Router Solicitation (RS) & Router Advertisement (RA):</strong> Used for stateless autoconfiguration (SLAAC) so devices can get an IP address without a DHCP server.</li>
                            </ul>
                            
                            <h3><strong>4. Troubleshooting Workflow</strong></h3>
                            <p>When a ping fails, here is how you should think like a CCNA professional:</p>
                            <ul>
                                <li><strong>Ping your Loopback (127.0.0.1):</strong> Is your own TCP/IP stack working?</li>
                                <li><strong>Ping your Default Gateway:</strong> Can you reach your local router?</li>
                                <li><strong>Ping a Remote IP:</strong> Is the problem inside your ISP or the remote network?</li>
                                <li><strong>Traceroute:</strong> Where exactly is the packet being dropped?</li>
                                <li>- If it dies at the first hop, check your local gateway.</li>
                                <li>- If it dies several hops away, it’s an ISP or routing issue.</li>
                            </ul>

                            <h3><strong>5. Security Note</strong></h3>
                            <p>Many network administrators block ICMP at the firewall to prevent <b>Reconnaissance Attacks</b> (where hackers map your network).<br>This is why you might sometimes see a successful <code>traceroute</code> hop followed by <code>* * *</code> (request timed out).</p>
                        `
                    }
                ]
            },
            {
                id: "domain2",
                name: "2.0 Network Access",
                topics: [
                    {
                        id: "2.1",
                        title: "2.1 Configure and verify VLANs",
                        summary: "normal range) spanning multiple switches (Access ports, Default VLAN, InterVLAN connectivity",
                        content: `
                            <h3><strong>1. Create the VLANs (Normal Range)</strong></h3>
                            <p>Normal range VLANs are numbered from <strong>1 to 1005</strong>. We will create VLAN 10 (Sales) and VLAN 20 (Engineering). You must perform this on <strong>both</strong> switches.</p>
                            <pre>On SW1 and SW2:\nSW1# <code>Conf t</code>\nSW1(config)# <code>vlan 10</code>\nSW1(config-vlan)# <code>name Sales</code>\nSW1(config-vlan)# <code>exit</code>\nSW1(config)# <code>vlan 20</code>\nSW1(config-vlan)# <code>name Engineering</code>\nSW1(config-vlan)# <code>exit</code>\nSW1(config)# <code>exit</code>\n\nSW2# <code>Conf t</code>\nSW2(config)# <code>vlan 10</code>\nSW2(config-vlan)# <code>name Sales</code>\nSW2(config-vlan)# <code>exit</code>\nSW2(config)# <code>vlan 20</code>\nSW2(config-vlan)# <code>name Engineering</code>\nSW2(config-vlan)# <code>exit</code>\nSW2(config)# <code>exit</code></pre>

                            <h3><strong>2. Configure Access Ports</strong></h3>
                            <p>Access ports belong to a single VLAN and are used to connect end devices like PCs. By default, all ports belong to <strong>VLAN 1</strong> (the Default VLAN).</p>
                            <pre>On SW1 (Connecting a PC to Sales):\nSW1# <code>Conf t</code>\nSW1(config)# <code>interface FastEthernet 0/1</code>\nSW1(config-if)# <code>switchport mode access</code>\nSW1(config-if)# <code>switchport access vlan 10</code>\nSW1(config-if)# <code>no shutdown</code>\nSW1(config-if)# <code>exit</code></pre>
                            <pre>On SW2 (Connecting a PC to Engineering):\nSW2# <code>Conf t</code>\nSW2(config)# <code>interface FastEthernet 0/2</code>\nSW2(config-if)# <code>switchport mode access</code>\nSW2(config-if)# <code>switchport access vlan 20</code>\nSW2(config-if)# <code>no shutdown</code>\nSW2(config-if)# <code>exit</code></pre>

                            <h3><strong>3. Configure Trunking (Spanning Multiple Switches)</strong></h3>
                            <p>To allow VLAN 10 and VLAN 20 traffic to travel between SW1 and SW2, we need a <strong>Trunk link</strong>.<br>Trunks use the <strong>802.1Q</strong> protocol to "tag" frames so the receiving switch knows which VLAN the traffic belongs to.</p>
                            <pre>On SW1 and SW2 (connecting to each other on G0/1):\n\nSW1# <code>Conf t</code>\nSW1(config)# <code>interface GigabitEthernet 0/1</code>\nSW1(config-if)# <code>switchport mode trunk</code>\nSW1(config-if)# <code>description Link_to_Other_Switch</code>\nSW1(config-if)# <code>no shutdown</code>\nSW2(config-if)# <code>exit</code>\n\nSW2# <code>Conf t</code>\nSW2(config)# <code>interface GigabitEthernet 0/1</code>\nSW2(config-if)# <code>switchport mode trunk</code>\nSW2(config-if)# <code>description Link_to_Other_Switch</code>\nSW2(config-if)# <code>no shutdown</code>\nSW2(config-if)# <code>exit</code></pre>

                            <h3><strong>4. InterVLAN Connectivity (Router-on-a-Stick)</strong></h3>
                            <p>Even though the PCs are on the same switch fabric, they cannot talk to each other across different VLANs without a Layer 3 device (Router or Multilayer Switch).<br>We will use <strong>Router-on-a-Stick (ROAS)</strong>.</p>
                            <pre>On SW1 (Link to Router on G0/2):\n\nSW1# <code>Conf t</code>\nSW1(config)# <code>interface GigabitEthernet 0/2</code>\nSW1(config-if)# <code>switchport mode trunk</code>\nSW1(config-if)# <code>description Link_to_Router</code>\nSW1(config-if)# <code>no shutdown</code>\nSW2(config-if)# <code>exit</code>\n\nOn Router R1 (Sub-interface configuration)\n\nR1# <code>conf t</code>\nR1(config)# <code>interface GigabitEthernet 0/0</code>\nR1(config-if)# <code>no shutdown</code>\nR1(config-if)# <code>exit</code>\nR1(config)# <code>interface GigabitEthernet 0/0.10</code>\nR1(config-if)# <code>encapsulation dot1Q 10</code>\nR1(config-if)# <code>ip address 192.168.10.1 255.255.255.0</code>\nR1(config-if)# <code>exit</code>\nR1(config)# <code>interface GigabitEthernet 0/0.10</code>\nR1(config-if)# <code>encapsulation dot1Q 20</code>\nR1(config-if)# <code>ip address 192.168.20.1 255.255.255.0</code>\nR1(config-if)# <code>exit</code></pre>

                            <h3><strong>5. Verification Commands</strong></h3>
                            <p>Verification is the most important part of the CCNA exam! Use these commands to ensure your configuration is operational.</p>
                            <pre>To see your VLAN database and assigned ports:\nSW1# <code>show vlan brief</code>\n\nTo verify which ports are trunks and which VLANs are allowed:\nSW1# <code>show interfaces trunk</code>\n\nTo check the status of your router sub-interfaces:\nR1# <code>show ip interface brief</code></pre>

                            <h3><strong>Summary of Key Concepts</strong></h3>
                            <ul>
                                <li>- <strong>VLAN 1:</strong> The default management VLAN. It is a best practice to move management traffic to a different VLAN for security.</li>
                                <li>- <strong>Access Port:</strong> Carries traffic for only one VLAN.</li>
                                <li>- <strong>Trunk Port:</strong> Carries traffic for multiple VLANs using 802.1Q tagging.</li>
                                <li>- <strong>Native VLAN:</strong> Frames belonging to this VLAN are sent across a trunk link <strong>untagged</strong>. Both ends of a trunk must have the same Native VLAN (usually VLAN 1 by default).</li>
                        `
                    },
                    {
                        id: "2.2",
                        title: "2.2 Configure and verify interswitch connectivity",
                        summary: "Trunk ports, 802.1Q, Native VLAN",
                        content: `
                            <h3><strong>1. Key Concepts</strong></h3>
                            <ul>
                                <li><strong>802.1Q:</strong> The standard "tagging" protocol. It inserts a 4-byte tag into the Ethernet frame header to identify which VLAN the traffic belongs to.</li>
                                <li><strong>Native VLAN:</strong> By default, this is VLAN 1. Frames belonging to the Native VLAN are sent across the trunk <b>untagged</b>. <br>For security reasons, it is a best practice to change this to a non-default VLAN.</li>
                                <li><strong>Allowed VLANs:</strong> A security feature that restricts which VLANs can actually cross the trunk link.</li>
                            </ul>

                            <h3><strong>2. Configuration Steps</strong></h3>
                            <p>Let's assume we are connecting two switches via their <b>GigabitEthernet 0/1</b> interfaces. We want to use <b>VLAN 99</b> as our Native VLAN and allow <b>VLANs 10, 20, and 99</b>.</p>

                            <pre># On Switch A (and repeat on Switch B):\nSwitch# <code>configure terminal</code>\nSwitch(config)# <code>interface GigabitEthernet 0/1</code>\nSwitch(config-if)# <code>switchport mode trunk</code>\nSwitch(config-if)# <code>switchport trunk native vlan 99</code>\nSwitch(config-if)# <code>switchport trunk allowed vlan 10,20,99</code>\nSwitch(config-if)# <code>description Link_to_Switch_B</code>\nSwitch(config-if)# <code>exit</code>\n\n# (Optional on some newer switches) Set the encapsulation to <code>802.1Q</code>\n# Note: Many modern switches only support dot1q and skip this command\nswitchport trunk encapsulation dot1q</pre>
                            
                            <h3><strong>3. Verification Commands</strong></h3>
                            <p>Once configured, you must verify that the trunk is operational. Here are the most important commands:</p>

                            <h3><strong>A. The "Gold Standard" Command</strong></h3>
                            <p>This command provides a concise summary of trunking status, the native VLAN, and allowed VLANs.</p>
                            <pre>Switch# <code>show interfaces trunk</code>\n\n* Look for: Status <code>trunking</code>, Native VLAN <code>99</code>, and the list of allowed VLANs.</pre>
                            
                            <h3><strong>B. Detailed Interface Status" Command</strong></h3>
                            <p>If you need to see the administrative vs. operational mode (e.g., if DTP is being used):</p>
                            <pre>Switch# <code>show interfaces GigabitEthernet 0/1 switchport</code></pre>
                            
                            <h3><strong>C. Interface Status Summary" Command</strong></h3>
                            <p>To see if the physical line is "up/up":</p>
                            <pre>Switch# <code>show interfaces description</code></pre>

                            <h3><strong>4. Common Troubleshooting Tips (CCNA Essentials)</strong></h3>
                            <ul>
                                <li><strong>Native VLAN Mismatch:</strong> If Switch A has Native VLAN 99 and Switch B has Native VLAN 1, the switch will log "Native VLAN mismatch" errors via CDP (Cisco Discovery Protocol). This can cause traffic leaking between VLANs.</li>
                                <li><strong>Trunk Mode Mismatch:</strong> If one side is set to <code>access</code> and the other to <code>trunk</code>, the link will not function correctly for multiple VLANs.</li>
                                <li><strong>VLAN Pruning:</strong> If you forget to add a VLAN to the <code>switchport trunk allowed vlan</code> list, that VLAN's traffic will be dropped, even if the trunk is "up.</li>
                            </ul>
                            <p><strong>Pro-Tip:</strong> Always remember to create the VLANs in the switch database using the <code>vlan 10</code>, <code>vlan 20</code>, etc., commands. A trunk cannot carry a VLAN that <b>doesn't exist</b> on the switch!</p>
                        `
                    },
                    {
                        id: "2.3",
                        title: "2.3 Configure and verify Layer 2 discovery protocols",
                        summary: "Cisco Proprietary CDP vs IEEE 802.1AB LLDP",
                        content: `
                            <h3><strong>1. Cisco Discovery Protocol (CDP)</strong></h3>
                            <p><strong>CDP</strong> is a Cisco-proprietary protocol. It is <strong>enabled</strong> by default on almost all Cisco devices.<br>It shares information like the device ID, local interface, capability (Router/Switch), and the platform model.</p>

                            <h3><strong>Global Configuration</strong></h3>
                            <p>To enable or disable CDP globally on the device:</p>
                            <pre>Router# <code>configure terminal</code>\nRouter(config)# <code>cdp run</code>      # Enables CDP globally\nRouter(config)# <code>no cdp run</code>   # Disables CDP globally</pre>

                            <h3><strong>Interface Specific Configuration</strong></h3>
                            <p>Sometimes you want CDP running on your trunk links but disabled on ports facing the public or end-users for security.</p>
                            <pre>Router# <code>configure terminal</code>\nRouter(config)# <code>interface GigabitEthernet0/1</code>\nRouter(config-if)# <code>cdp enable</code>      # Enables CDP on this interface\nRouter(config-if)# <code>no cdp enable</code>   # Disables CDP on this interface</code>\nRouter(config-if)# <code>exit</code></pre>

                            <h3><strong>2. Link Layer Discovery Protocol (LLDP)</strong></h3>
                            <p><strong>LLDP</strong> is the IEEE 802.1AB standard. It is vendor-neutral, meaning it works between Cisco, Juniper, HP, and other hardware. On many Cisco devices, it is <strong>disabled</strong> by default.</p>

                            <h3><strong>Global Configuration</strong></h3>
                            <pre>Router# <code>configure terminal</code>\nRouter(config)# <code>lldp run</code>         # Enables LLDP globally\nRouter(config)# <code>no lldp run</code>      # Disables LLDP globally</pre>

                            <h3><strong>Interface Specific Configurations</strong></h3>
                            <p>Unlike CDP, LLDP allows you to granularly control whether you are <strong>sending</strong> or <strong>receiving</strong> discovery packets.</p>
                            <pre>Router# <code>configure terminal</code>\nRouter(config)# <code>interface GigabitEthernet0/1</code>\nRouter(config-if)# <code>lldp transmit</code>       # The interface will send LLDP packets\nRouter(config-if)# <code>lldp receive</code>        # he interface will process incoming LLDP packets\nRouter(config-if)# <code>exit</code></pre>

                            <h3><strong>3. Verification Commands</strong></h3>
                            <p>Once configured, you need to verify that your device can see its neighbors. These commands are the "bread and butter" of network discovery.</p>

                            <h3><strong>To see a summary of neighbors:</strong></h3>
                            <p>These commands show you a quick list of what is connected and where.</p>
                            <pre>Router# <code>show cdp neighbors</code>\nRouter# <code>show lldp neighbors</code></pre>

                            <h3><strong>To see detailed information (IP addresses, software versions):</strong></h3>
                            <p>If you need to know the IP address of the neighbor to SSH into it, use the 'detail' modifier.</p>
                            <pre>Router# <code>show cdp neighbors detail</code>\nRouter# <code>show lldp neighbors detail</code></pre>

                            <h3><strong>To verify protocol status and timers:</strong></h3>
                            <p>This confirms if the protocol is active and how often it sends updates.</p>
                            <pre>Router# <code>show cdp</code>\nRouter# <code>show lldp</code>\nRouter# <code>show cdp interface GigabitEthernet0/1</code></pre>

                            <table>
                                <caption>
                                    <b>Key Comparison Table</b>
                                </caption>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>CDP</th>
                                        <th>LLDP</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>Standard<b></td>
                                        <td>Cisco Proprietary</td>
                                        <td>IEEE 802.1AB (Open)</td>
                                    </tr>
                                    <tr>
                                        <td><b>Default State<b></td>
                                        <td>Enabled</td>
                                        <td>Usually Disabled</td>
                                    </tr>
                                    <tr>
                                        <td><b>Interface Control<b></td>
                                        <td>On/Off</td>
                                        <td>Transmit/Receive separately</td>
                                    </tr>
                                    <tr>
                                        <td><b>Layer<b></td>
                                        <td>Layer 2</td>
                                        <td>Layer 2</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p><strong>Pro-Tip:</strong> In a secure environment, always use <code>no cdp run</code> or <code>no lldp run</code> on interfaces connected to the internet or untrusted guest networks.<br>You don't want to hand out a map of your internal hardware to potential attackers!
                        `
                    },
                    {
                        id: "2.4",
                        title: "2.4 Configure and verify EtherChannel (LACP)",
                        summary: "Layer 2 & Layer 3 Bundles, Active vs Passive Modes",
                        content: `
                            <h3><strong>1. Layer 2 EtherChannel (Switchport)</strong></h3>
                            <p>In a Layer 2 configuration, the bundled interfaces act as a single trunk or access port.</p>
                            <p><strong>Scenario:</strong> We are bundling 'GigabitEthernet 0/1' and '0/2' into 'Port-channel 1'.</p>

                            <pre>Switch# <code>configure terminal</code>\n\n# Select the range of physical interfaces\nSwitch(config)# <code>interface range gi0/1-2</code>\n\n# Ensure the settings match on both ends (Speed/Duplex)\nSwitch(config-if-range)# <code>speed 1000</code>\nSwitch(config-if-range)# <code>duplex full</code>\n\n# Assign the interfaces to a channel group using LACP (active)\nSwitch(config-if-range)# <code>channel-group 1 mode active</code>\nSwitch(config-if-range)# <code>exit</code>\n\n# Configure the logical Port-channel interface as a Trunk\nSwitch(config)# <code>interface port-channel 1</code>\nSwitch(config-if)# <code>switchport mode trunk</code>\nSwitch(config-if)# <code>switchport trunk allowed vlan 10,20,30</code>\nSwitch(config-if)# <code>exit</code></pre>

                            <p><strong>Note:</strong> Use <code>mode active</code> to actively negotiate LACP. Use <code>mode passive</code> only if the other side is active.</p>

                            <h3><strong>2. Layer 3 EtherChannel (Routed)</strong></h3>
                            <p>In Layer 3 EtherChannel, we strip the "switchport" (Layer 2) capabilities from the interfaces and assign an IP address to the logical bundle. This is common in distribution-to-core links.</p>
                            <p><strong>Scenario:</strong> Bundling 'GigabitEthernet 0/1' and '0/2' into 'Port-channel 10' with an IP address.</p>

                            <pre>Switch# <code>configure terminal</code>\n\n# Select the range of physical interfaces\nSwitch(config)# <code>interface range gi0/1-2</code>\n\n# Turn off Layer 2 functionality (Make them routed ports)\nSwitch(config-if-range)# <code>no switchport</code>\n\n# Assign to a channel group\nSwitch(config-if-range)# <code>channel-group 10 mode active</code>\nSwitch(config-if-range)# <code>exit</code>\n\n# Configure the logical Port-channel interface\nSwitch(config)# <code>interface port-channel 10</code>\nSwitch(config-if)# <code>no switchport</code>\nSwitch(config-if)# <code>ip address 10.1.1.1 255.255.255.252</code>\nSwitch(config-if)# <code>exit</code></pre>

                            <h3><strong>3. Verification Commands</strong></h3>
                            <p>Verification is the most important part of the CCNA exam! Use these commands to ensure your EtherChannel is up and running.</p>
                            <h3><strong>A. The Summary Command (The "Go-To")</strong></h3>
                            <p>This shows the status of all bundles.</p>
                            <pre>Switch# <code>show etherchannel summary</code></pre>
                            <p><strong>Look for Flags:</strong> You want to see <strong>(SU)</strong> for Layer 2 (S = Layer 2, U = In Use) or <strong>(RU)</strong> for Layer 3 (R = Layer 3, U = In Use).<br><strong>Interface Flags:</strong> You want to see <strong>(P)</strong> next to the physical ports, meaning they are bundled in the Port-channel.</p>
                            <h3><strong>B. Check LACP Specifics</strong></h3>
                            <p>To see which neighbor your switch is talking to via LACP:</p>
                            <pre>Switch# <code>show lacp neighbor</code></pre>
                            <h3><strong>C. Interface Status</strong></h3>
                            <p>To see the logical interface status:</p>
                            <pre>Switch# <code>show interfaces port-channel 1</code></pre>

                            <h3><strong>Key Reminders for the Exam:</strong></h3>
                            <ul>
                                <li><strong>Consistency is Key:</strong> All physical ports in the bundle must have the same speed, duplex, VTP mode, native VLAN, and allowed VLANs.</li>
                                <li><strong>LACP Modes:</strong>
                                    <ul>
                                        <li>- 'Active' + 'Active' = <strong>Works</strong
                                        ></li>
                                        <li>- 'Active' + 'Passive' = <strong>Works</strong
                                        ></li>
                                        <li>- 'Passive' + 'Passive' = <strong>Fails</strong
                                        > (Neither side will start negotiation)</li>
                                    </ul>
                                <li><strong>Spanning Tree:</strong> STP treats the entire Port-channel as one single interface, preventing loops while allowing you to use all physical bandwidth.</li>
                            </ul>
                        `
                    },
                    {
                        id: "2.5",
                        title: "2.5 Rapid PVST+ Spanning Tree (802.1w)",
                        summary: "Root Bridge Selection, Port Roles, PortFast Edge Ports",
                        content: `
                            <ul>
                                <li><strong>Root Bridge Selection:</strong> Lowest Bridge ID (Priority + MAC). Priority steps of 4096.</li>
                                <li><strong>Port States:</strong> Discarding, Learning, Forwarding.</li>
                                <li><strong>PortFast:</strong> Enables immediate transition from Discarding to Forwarding on access ports.</li>
                            </ul>
                            <pre><code>Switch(config)# spanning-tree mode rapid-pvst\nSwitch(config)# spanning-tree vlan 10 root primary\nSwitch(config-if)# spanning-tree portfast</code></pre>
                        `
                    },
                    {
                        id: "2.6",
                        title: "2.6 Advanced STP Security Protections",
                        summary: "BPDU Guard, BPDU Filter, Root Guard, Loop Guard",
                        content: `
                            <table>
                                <thead><tr><th>Feature</th><th>Purpose</th><th>Triggered State</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>BPDU Guard</strong></td><td>Shuts down access ports receiving BPDUs</td><td>err-disabled</td></tr>
                                    <tr><td><strong>Root Guard</strong></td><td>Prevents rogue switch from becoming Root</td><td>root-inconsistent</td></tr>
                                    <tr><td><strong>Loop Guard</strong></td><td>Prevents loops from unidirectional link failure</td><td>loop-inconsistent</td></tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        id: "2.7",
                        title: "2.7 Cisco Wireless Architectures & LAP Modes",
                        summary: "Split-MAC, CAPWAP Tunnels (UDP 5246/5247), AP Modes",
                        content: `
                            <p><strong>Split-MAC Architecture:</strong> LAP handles real-time tasks (beacons/encryption); WLC handles management (Auth, RRM, Roaming).</p>
                            <p><strong>LAP Modes:</strong> Local (default client traffic), FlexConnect (branch survivability), Monitor (sensor), Sniffer (Wireshark capture).</p>
                        `
                    },
                    {
                        id: "2.8",
                        title: "2.8 VTP & DTP Protocols",
                        summary: "VLAN Trunking Protocol, Dynamic Trunking Modes, Security Risks",
                        content: `
                            <h3>1. VTP Modes & Revision Number Warning</h3>
                            <p>Server, Client, Transparent, Off. High VTP revision numbers can overwrite production VLAN databases!</p>
                            <h3>2. DTP Negotiation Modes</h3>
                            <p>Dynamic Auto + Dynamic Auto = Access. Best practice: Disable DTP with <code>switchport nonegotiate</code>.</p>
                        `
                    }
                ]
            },
            {
                id: "domain3",
                name: "3.0 IP Connectivity",
                topics: [
                    {
                        id: "3.1",
                        title: "3.1 Routing Table Components & AD",
                        summary: "Administrative Distance Table, Prefix, Metric, Next Hop",
                        content: `
                            <h3>Default Administrative Distances (AD)</h3>
                            <ul>
                                <li>Connected: <strong>0</strong> | Static: <strong>1</strong></li>
                                <li>External BGP: <strong>20</strong> | Internal EIGRP: <strong>90</strong></li>
                                <li>OSPF: <strong>110</strong> | RIP: <strong>120</strong> | External EIGRP: <strong>170</strong></li>
                            </ul>
                        `
                    },
                    {
                        id: "3.2",
                        title: "3.2 Router Forwarding Decision Hierarchy",
                        summary: "1. Longest Prefix Match, 2. Lowest AD, 3. Lowest Metric",
                        content: `
                            <p>Golden Rule: <strong>Longest Prefix Match (LPM) ALWAYS wins</strong>, regardless of Administrative Distance!</p>
                        `
                    },
                    {
                        id: "3.3",
                        title: "3.3 Static Routing (IPv4 & IPv6)",
                        summary: "Default Routes (0.0.0.0/0, ::/0), Host Routes, Floating Statics",
                        content: `
                            <pre><code># Floating Static Route (Backup via AD 10)\nRouter(config)# ip route 192.168.2.0 255.255.255.0 172.16.0.2 10\nRouter(config)# ipv6 route ::/0 2001:db8:acad:1::2</code></pre>
                        `
                    },
                    {
                        id: "3.4",
                        title: "3.4 Single Area OSPFv2 (Area 0)",
                        summary: "Router ID, Wildcard Masks, DR/BDR Priority Election",
                        content: `
                            <pre><code>Router(config)# router ospf 1\nRouter(config-router)# router-id 1.1.1.1\nRouter(config)# interface gi0/0\nRouter(config-if)# ip ospf 1 area 0\nRouter(config-if)# ip ospf priority 255</code></pre>
                        `
                    },
                    {
                        id: "3.5",
                        title: "3.5 Multi-Area OSPF Concepts",
                        summary: "Backbone Area 0, ABR, ASBR, Summary LSAs (Type 3)",
                        content: `
                            <p><strong>ABR (Area Border Router):</strong> Connects non-backbone areas to Area 0. Generates Type 3 Summary LSAs to limit SPF calculations.</p>
                        `
                    },
                    {
                        id: "3.6",
                        title: "3.6 First Hop Redundancy Protocols (FHRP)",
                        summary: "HSRP, VRRP, GLBP, Virtual MAC Addresses",
                        content: `
                            <pre><code># HSRP Active Router Config\nRouter(config-if)# standby 1 ip 192.168.1.1\nRouter(config-if)# standby 1 priority 110\nRouter(config-if)# standby 1 preempt</code></pre>
                        `
                    }
                ]
            },
            {
                id: "domain4",
                name: "4.0 IP Services",
                topics: [
                    {
                        id: "4.1",
                        title: "4.1 Inside Source NAT & PAT",
                        summary: "Static NAT, Dynamic Pools, Port Address Translation (Overload)",
                        content: `
                            <pre><code>Router(config)# ip nat pool PUBLIC_POOL 203.0.113.10 203.0.113.15 netmask 255.255.255.248\nRouter(config)# ip nat inside source list 1 pool PUBLIC_POOL overload</code></pre>
                        `
                    },
                    {
                        id: "4.2",
                        title: "4.2 Network Time Protocol (NTP)",
                        summary: "Stratum Hierarchy, Client/Server Mode, NTP Verification",
                        content: `
                            <pre><code>Router(config)# ntp master 3\nClient(config)# ntp server 10.0.0.1\nClient# show ntp status</code></pre>
                        `
                    },
                    {
                        id: "4.3",
                        title: "4.3 DHCP & DNS Roles",
                        summary: "DHCP DORA Process, DNS Records (A, AAAA, CNAME, MX)",
                        content: `
                            <p><strong>DORA:</strong> Discover (Broadcast), Offer (Unicast), Request (Broadcast), ACK (Unicast).</p>
                        `
                    },
                    {
                        id: "4.4",
                        title: "4.4 SNMP & Network Monitoring",
                        summary: "NMS, Agent, MIB, OIDs, SNMPv3 Encryption & Traps",
                        content: `
                            <p>SNMPv3 adds <strong>AuthNoPriv</strong> and <strong>AuthPriv</strong> (Encryption + Hashing) to secure SNMP commands.</p>
                        `
                    },
                    {
                        id: "4.5",
                        title: "4.5 Syslog Operations & Severity Levels",
                        summary: "Levels 0-7 Mnemonic: Every Awesome Cisco Engineer Will Need Ice Cream",
                        content: `
                            <ol start="0">
                                <li>Emergency | 1. Alert | 2. Critical | 3. Error</li>
                                <li>Warning | 5. Notice | 6. Informational | 7. Debugging</li>
                            </ol>
                        `
                    },
                    {
                        id: "4.6",
                        title: "4.6 DHCP Relay (IP Helper-Address)",
                        summary: "Forwarding UDP Broadcasts across Subnets",
                        content: `
                            <pre><code>Router(config-if)# ip helper-address 10.1.1.50</code></pre>
                        `
                    },
                    {
                        id: "4.7",
                        title: "4.7 Quality of Service (QoS) Principles",
                        summary: "Classification, Marking (CoS/DSCP), Policing vs Shaping, LLQ",
                        content: `
                            <p><strong>Policing:</strong> Drops excess traffic (Ingress).</p>
                            <p><strong>Shaping:</strong> Buffers excess traffic (Egress).</p>
                        `
                    },
                    {
                        id: "4.8",
                        title: "4.8 Wireless Roaming & Architecture Details",
                        summary: "Layer 2 vs Layer 3 Roaming, Mobility Groups, Anchor WLCs",
                        content: `
                            <p><strong>L3 Roaming:</strong> Uses CAPWAP Mobility Tunnels between Anchor WLC and Foreign WLC so clients keep their original IP address while roaming across subnets.</p>
                        `
                    }
                ]
            },
            {
                id: "domain5",
                name: "5.0 Security Fundamentals",
                topics: [
                    {
                        id: "5.1",
                        title: "5.1 Key Security Concepts & Hardening",
                        summary: "Threats, Vulnerabilities, Exploits, Defense-in-Depth",
                        content: `
                            <p><strong>Threat:</strong> Danger to asset. <strong>Vulnerability:</strong> Flaw/Hole. <strong>Exploit:</strong> Act of taking advantage of flaw.</p>
                        `
                    },
                    {
                        id: "5.2",
                        title: "5.2 Device Access & Local Passwords",
                        summary: "Enable Secret, VTY Lines, service password-encryption",
                        content: `
                            <pre><code>Router(config)# enable secret Class@123\nRouter(config)# username admin privilege 15 secret SecurePass!\nRouter(config)# service password-encryption</code></pre>
                        `
                    },
                    {
                        id: "5.3",
                        title: "5.3 AAA Concepts & Protocols",
                        summary: "Authentication, Authorization, Accounting: TACACS+ vs RADIUS",
                        content: `
                            <table>
                                <thead><tr><th>Protocol</th><th>Transport</th><th>Encryption</th><th>AAA Separation</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>TACACS+</strong></td><td>TCP 49</td><td>Entire Packet</td><td>Separated</td></tr>
                                    <tr><td><strong>RADIUS</strong></td><td>UDP 1812/1813</td><td>Password Only</td><td>Combined</td></tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        id: "5.4",
                        title: "5.4 Wireless Security: WPA, WPA2, WPA3",
                        summary: "TKIP, AES/CCMP, SAE (Simultaneous Authentication of Equals)",
                        content: `
                            <p>WPA3 replaces Pre-Shared Key 4-way handshakes with <strong>SAE (Dragonfly)</strong> to eliminate offline dictionary attacks.</p>
                        `
                    },
                    {
                        id: "5.5",
                        title: "5.5 Layer 2 Security Features",
                        summary: "DHCP Snooping, Dynamic ARP Inspection (DAI), Port Security",
                        content: `
                            <pre><code># Port Security Sticky Config\nSwitch(config-if)# switchport mode access\nSwitch(config-if)# switchport port-security\nSwitch(config-if)# switchport port-security mac-address sticky\nSwitch(config-if)# switchport port-security violation shutdown</code></pre>
                        `
                    },
                    {
                        id: "5.6",
                        title: "5.6 Access Control Lists (ACLs)",
                        summary: "Standard (1-99) vs Extended (100-199), Wildcard Masks",
                        content: `
                            <p>Standard ACLs check <strong>Source IP only</strong> (place near destination). Extended ACLs check <strong>Source/Dest IP, Protocol, Port</strong> (place near source).</p>
                        `
                    },
                    {
                        id: "5.7",
                        title: "5.7 Management & Control Plane Security (CoPP)",
                        summary: "VTY Access-Classes, Control Plane Policing Rate-Limiting",
                        content: `
                            <p><strong>CoPP (Control Plane Policing):</strong> Protects CPU from DoS packet floods by applying MQC rate-limiting policies to the control-plane interface.</p>
                        `
                    }
                ]
            },
            {
                id: "domain6",
                name: "6.0 Automation & Programmability",
                topics: [
                    {
                        id: "6.1",
                        title: "6.1 Explain how automation impacts network management",
                        summary: "Overlay/Underlay, Fabrics, Python Netmiko, REST APIs",
                        content: `
                            <p>Automation is fundamentally changing how we interact with infrastructure, shifting the focus from "device-by-device" management to "network-wide" orchestration.<br>In the past, network engineers spent 80% of their time on manual configuration and troubleshooting. Automation flips that script.<br>Here is how it impacts network management across four key areas:</p>

                            <h3><strong>1. Speed and Efficiency</strong></h3>
                            <p>In a traditional environment, if you need to change a VLAN on 50 switches, you have to log into each one manually.<br>With automation, you can push that change to all 50 devices simultaneously.</p>
                            <ul>
                                <li><strong>Traditional:</strong> 50 devices × 5 minutes = 250 minutes.</li>
                                <li><strong>Automated:</strong> 1 script = ~30 seconds.</li>
                            </ul>

                            <h3><strong>2. Elimination of Human Error</strong></h3>
                            <p>Most network outages are caused by manual configuration errors (the "fat-finger" syndrome). Automation ensures <strong>Consistency</strong>.<br>By using "Golden Configurations," you ensure that every device follows the exact same standard.</p>

                            <h3><strong>3. Scalability</strong></h3>
                            <p>As networks grow, manual management becomes unsustainable. Automation allows a small team to manage thousands of devices. Through the use of <strong>Software-Defined Networking (SDN)</strong> controllers like Cisco DNA Center, the network is treated as a single entity rather than a collection of individual boxes.</p>

                            <h3><strong>4. Telemetry and Compliance</strong></h3>
                            <p>Instead of waiting for a user to call and say "the internet is slow," automated systems use <strong>Streaming Telemetry</strong> to provide real-time data. Automation tools can also run "compliance checks" to instantly flag any device that deviates from the required security policy.</p>

                            <h3><strong>The Tools of the Trade</strong></h3>
                            <p>To achieve this, we move away from the CLI and toward <strong>APIs (Application Programming Interfaces)</strong> and <strong>Data Models (YANG)</strong>. Here are the common tools you'll encounter:</p>

                            <h3><strong>Python:</strong></h3>
                            <p>The most popular programming language for network automation. Libraries like <code>Netmiko</code> and <code>Nornir</code> simplify device interaction.</p>
                            <pre>* python\n<code>from netmiko import ConnectHandler\n\ncisco_device = {\n    'device_type': 'cisco_ios',\n    'host': '192.168.1.10',\n    'username': 'admin',\n    'password': 'password123'\n}</code>\n\n# Connecting and sending a command\n<code>with ConnectHandler(**device) as net_connect:\n    output = net_connect.send_config_set(['interface GigabitEthernet0/1',\n             'description Link to Core'])\n    print(output)</code></pre>

                            <h3><strong>Ansible (Infrastructure as Code)</strong></h3>
                            <p>Ansible uses <strong>Playbooks</strong> written in YAML to define the "desired state" of the network. It is "agentless," meaning you don't need to install anything on the Cisco switches.</p>
                            <pre>* yaml\n<code>- name: Configure VLANs on Cisco Switches\n  hosts: access_switches\n  gather_facts: no\n  tasks:\n    - name: Create VLAN 10\n      cisco.ios.ios_vlans:\n        config:\n            - name: Sales\n              vlan_id: 10\n        state: merged</code></pre>

                            <h3><strong>REST APIs and JSON</strong></h3>
                            <p>Modern controllers (like DNA Center or Meraki) use <strong>REST APIs</strong>. We send requests (GET, POST, PUT, DELETE) and receive data back in **JSON** format, which is easy for computers to parse.<br>For example, you can retrieve the configuration of a device or push new settings programmatically.</p>
                            <pre>* Example of a JSON response representing an interface:\n<code>{\n    "interface": {\n        "name": "GigabitEthernet1",\n        "description": "Uplink to ISP",\n        "enabled": true,\n        "ipv4": {\n            "address": "192.168.50.1",\n            "netmask": "255.255.255.0"\n        }\n    }\n}</code></pre>

                            <h3><strong>Summary for your CCNA Journey</strong></h3>
                            <p>Automation doesn't replace the network engineer but it is no longer a "nice-to-have" skill. It is becoming a core competency for network engineers. You still need to understand spanning-tree, routing protocols, and subnetting to know *what* to automate. Understanding how to leverage these tools will not only help you pass the CCNA exam but also prepare you for the future of networking. You are moving from being a "CLI operator" to a "Network Designer and Programmer".</p>
                        `
                    },
                    {
                        id: "6.2",
                        title: "6.2 Compare traditional networks with controller-based networking",
                        summary: "Separation of Control & Data Planes, Northbound vs Southbound APIs",
                        content: `
                            <p>For the CCNA exam, understanding the transition from traditional hardware-centric models to software-defined networking (SDN) is crucial.<br>In traditional networks, each device (switch, router) makes its own forwarding decisions based on its local configuration. In contrast, controller-based networking centralizes the control plane, allowing for more efficient management and orchestration of the network.<br>Let’s break this down by looking at how the "Planes" of networking function in both environments.</p>
                            <h3><strong>1. The Three Planes of Networking</strong></h3>
                            <p>Before we compare, remember that every network device operates on three levels:</p>
                            <ul>
                                <li><strong>Data Plane:</strong> Forwarding the actual traffic (frames and packets).</li>
                                <li><strong>Control Plane:</strong> Making decisions on where traffic should go (Routing protocols like OSPF, EIGRP, STP).</li>
                                <li><strong>Management Plane:</strong> Provides the interface for managing and configuring the network device. How we interact with the device (SSH, Telnet, Console).</li>
                            </ul>

                            <h3><strong>2. Traditional Networking (Distributed)</strong></h3>
                            <p>In a traditional network, the <strong>control plane and the data plane reside on the same physical device.</strong> Each router and switch is an autonomous island.</p>
                            <ul>
                                <li><strong>Distributed Control Plane:</strong> Every router runs its own routing protocol and builds its own routing table.</li>
                                <li><strong>Manual Configuration:</strong> You must log into each device individually (hop-by-hop) via CLI to make changes.</li>
                                <li><strong>Complexity:</strong> Scaling is difficult. If you want to deploy a new VLAN across 50 switches, you have to configure 50 switches manually.</li>
                                <li><strong>Proprietary Nature:</strong> Different vendors have their own CLI syntax and configuration methods.</li>
                            </ul>

                            <h3><strong>Traditional CLI Configuration Example:</strong></h3>
                            <p>To configure an interface on a single router, you do it manually:</p>
                            <pre>Router> <code>enable</code>\nRouter# <code>configure terminal</code>\nRouter(config)# <code>interface gigabitethernet0/1</code>\nRouter(config-if)# <code>ip address 192.168.1.1 255.255.255.0</code>\nRouter(config-if)# <code>no shutdown</code></pre>

                            <h3><strong>3. Controller-Based Networking (SDN)</strong></h3>
                            <p>In a controller-based model, we <strong>separate the control plane from the data plane</strong>. We move the "brains" (control plane) to a centralized piece of software called a <strong>Controller</strong> (like Cisco DNA Center or vManage).</p>

                            <ul>
                                <li><strong>Centralized Control Plane:</strong> The controller dictates how traffic should flow across the entire network.</li>
                                <li><strong>Southbound APIs:</strong> The controller communicates with the switches/routers using protocols like <q>NETCONF, RESTCONF, or OpenFlow</q>.</li>
                                <li><strong>Northbound APIs:</strong> The controller exposes APIs to applications and orchestration tools, allowing for automation and programmability. Applications (like a Python script or a web GUI) communicate with the controller.</li>
                                <li><strong>Automation:</strong> Instead of configuring one device at a time, you define a policy on the controller, and it pushes that policy to all relevant devices.</li>
                            </ul>

                            <h3><strong>Controller-Based (API) Example:</strong></h3>
                            <p>Instead of configuring each device individually, you can define a policy on the controller:</p>
                            <pre>{\n  "interface": {\n    "name": "GigabitEthernet0/1",\n    "description": "Configured via SDN Controller",\n    "address": "192.168.10.1",\n    "mask": "255.255.255.0",\n    "status": "up"\n  }\n}</pre>
                            <p>The controller takes this JSON payload and applies it to all relevant devices automatically.</p>
                            
                            <table>
                                <caption><b>Key Comparison Table</b></caption>
                                <thead>
                                    <tr>
                                        <th scope="col">Feature</th>
                                        <th scope="col">Traditional Network</th>
                                        <th scope="col">Controller-Based (SDN)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Control Plane</th>
                                        <td>Distributed (on every device)</td>
                                        <td>Centralized (on the controller)</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Configuration</th>
                                        <td>Manual, device-by-device (CLI)</td>
                                        <td>Automated, policy-based (API/GUI)</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Speed of Change</th>
                                        <td>Slow and prone to human error</td>
                                        <td>Fast and consistent</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Visibility</th>
                                        <td>Limited to one device at a time</td>
                                        <td>Holistic view of the entire fabric</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Operational Cost</th>
                                        <td>High (more manual labor)</td>
                                        <td>Lower (automation saves time)</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3><strong>Why does this matter for your CCNA?</strong></h3>
                            <p>Cisco is moving heavily toward <strong>Cisco DNA Center</strong> (for Enterprise networks) and <strong>SD-WAN</strong>. Understanding the differences between traditional and controller-based networking is crucial for the CCNA exam.<br>You may be asked to identify which model is being used in a scenario or to explain the benefits of SDN. As a CCNA candidate, you need to be comfortable with the idea that the "Master Map" of the network no longer lives just in the heads of the routers, but in a central controller that we can program.<br>Remember, while you still need to know how to configure devices manually, the future of networking is moving towards automation and centralized control.</p>
                        `
                    },
                    {
                        id: "6.3",
                        title: "6.3 Describe controller-based, software defined architecture",
                        summary: "overlay, underlay, fabric, Separation of control/data plane, Northbound/Southbound APIs",
                        content: `
                            <p>In traditional networking, every router and switch acts as an independent thinker. In a controller-based architecture, we move the "intelligence" to a centralized location. Let's break down the components of this architecture.</p>

                            <h3><strong>1. Separation of Control Plane and Data Plane</strong></h3>
                            <p>The control plane is responsible for making decisions about where traffic should go (routing, switching logic), while the data plane is responsible for forwarding the actual packets. In a controller-based architecture, the control plane is centralized in a controller, while the data plane remains on the individual devices. To understand <strong>Software-Defined Networking (SDN)</strong>, you must understand these two functions:</p>
                            <ul>
                                <li><strong>Data Plane (Forwarding Plane):</strong> This is the "muscle." Its job is to move packets as fast as possible based on the rules it has. It handles switching frames and routing packets using specialized hardware like ASICs.</li>
                                <li><strong>Control Plane:</strong> This is the "brain." It decides how traffic should flow. It builds the routing table (RIB), runs OSPF or BGP, and figures out the topology.</li>
                            </ul>

                            <h3><strong>The SDN Shift:</strong></h3>
                            <p>In traditional networking, these planes are bundled together on every device. In SDN, we <strong>decouple</strong> them. We take the Control Plane off the individual switches and centralize it into a **Controller** (like Cisco DNA Center or vManage). The devices (switches/routers) become "dumb" forwarding devices that simply follow the instructions from the controller.</p>

                            <h3><strong>2. Underlay, Overlay, and Fabric</strong></h3>
                            <p>Think of this like a GPS app (Overlay) running on top of physical roads (Underlay).</p>
                            <ul>
                                <li><strong>Underlay:</strong> This is the physical infrastructure—the actual cables, switches, and routers. Its only goal is to provide basic IP connectivity (reachability) between all devices. We usually run a simple routing protocol like OSPF or IS-IS here.</li>
                                <li><strong>Overlay:</strong> This is a logical network that sits on top of the underlay, allowing for more flexible and scalable network designs. It uses <strong>tunnels</strong> (usually VXLAN). The overlay allows us to create virtual networks that aren't restricted by physical location.</li>
                                <li><strong>Fabric:</strong> The combination of the Underlay and the Overlay is called the <strong>Fabric</strong>. This is a software-defined network that provides a unified control plane for managing and orchestrating the underlying infrastructure. It provides end-to-end connectivity and policy enforcement.</li>
                            </ul>

                            <h3><strong>3. Northbound and Southbound APIs</strong></h3>
                            <p>A controller is the "middleman." It needs to talk to the devices below it and the applications above it via <strong>APIs (Application Programming Interfaces)</strong>. We have two types of APIs:</p>
                            <ul>
                                <li><strong>Southbound APIs:</strong> The controller uses these to communicate with the networking hardware (switches/routers). It "pushes" configurations and "pulls" statistics.</li>
                                <li><strong>- Protocols:</strong> NETCONF, RESTCONF, SNMP, and OpenFlow.</li>
                                <li><strong>Northbound APIs:</strong> These allow network administrators or automated scripts to communicate with the controller. They allow developers to programmatically interact with the network, retrieve telemetry data, and automate tasks.</li>
                                <li><strong>- Protocol:</strong> Primarily <strong>REST</strong> (Representational State Transfer).</li>
                                <li><strong>- Data Formats:</strong> JSON or XML.</li>
                            </ul>

                            <h3><strong>4. Example: A RESTCONF GET Request</strong></h3>
                            <p>If you were using a Northbound API to ask a controller about an interface using RESTCONF, the "syntax" (the URI) would look something like this:</p>
                            <pre><code>GET https://192.168.1.1/restconf/data/ietf-interfaces:interfaces/interface=GigabitEthernet1\nAccept: application/yang-data+json</code></pre>
                            <p>The controller would respond with a JSON payload containing the interface's configuration and operational state.</p>
                            <pre><code>{\n  "ietf-interfaces:interface": {\n    "name": "GigabitEthernet1",\n    "description": "Configured via SDN Controller",\n    "type": "iana-if-type:ethernetCsmacd",\n    "enabled": true,\n    "ietf-ip:ipv4": {\n      "address": [\n        {\n          "ip": "10.1.1.1",\n          "netmask": "255.255.255.0"\n        }\n      ]\n    }\n  }\n}</code></pre>

                            <h3><strong>Summary Checklist for the CCNA</strong></h3>
                            <ul>
                                <li><strong>Controller</strong>: Centralized management (DNA Center for SD-Access, vManage for SD-WAN).</li>
                                <li><strong>Underlay</strong>: Physical reachability (OSPF/BGP).</li>
                                <li><strong>Overlay</strong>: Logical network abstraction (VXLAN, MPLS).</li>
                                <li><strong>Fabric</strong>: The combination of the Underlay and the Overlay.</li>
                                <li><strong>Southbound</strong>: Communication from the controller to the network devices. Controller -> Switch.</li>
                                <li><strong>Northbound</strong>: Communication from the network devices to the controller. Admin/Script -> Controller.</li>
                            </ul>
                        `
                    },
                    {
                        id: "6.4",
                        title: "6.4 Explain AI",
                        summary: "(generative and predictive) and machine learning in network operations",
                        content: `
                            <p>As a CCNA, you are likely used to configuring routers and switches manually via the CLI, but the industry is shifting toward <strong>AIOps (Artificial Intelligence for IT Operations)</strong>.<br>In a modern network, we use Machine Learning (ML), Predictive AI, and Generative AI to move away from being "reactive" (fixing things when they break) to being "proactive" (fixing things before they break).</p>

                            <h3><strong>1. Machine Learning (ML): The Foundation</strong></h3>
                            <p>Machine Learning is the engine that powers network analytics. Instead of a human setting a manual threshold (e.g., "Alert me if CPU > 80%"), ML looks at historical data to determine what is "normal" for *your* specific network.</p>
                            <ul>
                                <li><strong>How it works:</strong> The model ingests telemetry data (SNMP, Syslog, NetFlow) and creates a <strong>Dynamic Baseline</strong>.<br>It is trained on labeled data (e.g., "This is normal traffic," "This is an anomaly").</li>
                                <li><strong>Networking Use Case:</strong></li>
                                <li><strong>Anomaly Detection.</strong> If your guest Wi-Fi usually has 50 users on a Tuesday but suddenly has 500, ML identifies this as an anomaly even if no hard limits were hit.</li>
                                <li><strong>Cisco Context:</strong> This is a core feature of <strong>Cisco Catalyst Center</strong> (formerly DNA Center), which uses ML to correlate events and reduce "alert fatigue."</li>
                            </ul>

                            <h3><strong>2. Predictive AI: Anticipating Problems</strong></h3>
                            <p>Predictive AI takes the insights from ML and uses them to forecast future network behavior. Instead of just alerting you when something is wrong, it predicts when something *might* go wrong. In networking, this is often called <strong>Predictive Maintenance</strong>.</p>
                            <ul>
                                <li><strong>How it works:</strong> Predictive models analyze trends and patterns in the data to forecast potential issues, like network congestion or hardware failures.</li>
                                <li><strong>Networking Use Case:</strong></li>
                                <li><strong>Capacity Planning.</strong> Predicting that a WAN link will reach 100% utilization in three weeks based on current growth. If your network traffic has been growing 10% per month, Predictive AI can forecast when you'll hit your bandwidth limit and alert you to upgrade before users complain.</li>
                                <li><strong>Hardware Failure:</strong> Predicting a power supply or SFP module failure based on increasing error rates or temperature fluctuations.</li>
                                <li><strong>The Goal:</strong> To trigger a "Self-Healing" workflow where the network reroutes traffic *before* the outage occurs.</li>
                            </ul>

                            <h3><strong>3. Generative AI: The Next Frontier</strong></h3>
                            <p>Generative AI is the newest and most exciting development.While ML and Predictive AI analyze data, it can create new configurations, scripts, or even entire network topologies based on high-level requirements. Think of it as a "network architect" that can generate solutions for you.</p>
                            <ul>
                                <li><strong>How it works:</strong> Large Language Models (LLMs) are trained on massive datasets of networking documentation and code.</li>
                                <li><strong>Networking Use Case:</strong></li>
                                <li><strong>Natural Language Queries.</strong> Instead of typing complex RegEx commands, you ask: "Show me all access points in the London office that had high latency yesterday."</li>
                                <li><strong>Automated Configuration.</strong> Creating automation scripts for routine tasks or troubleshooting scenarios. Generating a Python script to deploy a VLAN across 50 switches.</li>
                                <li><strong>Root Cause Analysis (RCA).</strong> Summarizing thousands of lines of logs into a simple paragraph: "The outage was caused by a spanning-tree loop on Switch-A caused by a redundant link configuration error."</li>
                            </ul>

                            <h3><strong>Practical Examples: Automation with AI</strong></h3>
                            <p>In a modern CCNA workflow, you might use a Python script to interact with an AI-driven controller.<br>Here is a conceptual example of how we might use an API to pull "Issues" that an AI has already identified in a network:<p>
                            <pre>* python\n<code>import requests</code>\n\n# Example API call to a network controller\n<code>url = "https://controller.example.com/api/issues"\nheaders = {\n    "Authorization": "Bearer YOUR_API_TOKEN",\n    "Accept": "application/json"\n}\n\nresponse = requests.get(url, headers=headers)\ndata = response.json()</code>\n\n# Print out the issues identified by AI\n<code>for issue in data['issues']:\n    print(f"Issue: {issue['description']} - Severity: {issue['severity']}")</code></pre>

                            <p>Imagine you have a network with 100 switches, and you need to update the SNMP community string on all of them. Traditionally, this would take hours of manual work. With Generative AI, you could simply ask:</p>
                            <pre><code>AI Prompt: "Generate a Python script that connects to all switches in my network\nand updates the SNMP community string to 'NewCommunity'."</code></pre>
                            <p>The AI would generate a script using libraries like Netmiko or Nornir, which you could then run to perform the task automatically.</p>

                            <table>
                                <caption>
                                    <b>Summary Table for your CCNA Studies</b>
                                </caption>
                                <thead>
                                    <tr>
                                        <th scope="col">Technology</th>
                                        <th scope="col">Role in Networking</th>
                                        <th scope="col">Real-world Analogy</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Machine Learning</td>
                                        <td>Learning what "normal" looks like.</td>
                                        <td>A security guard learning who usually enters a building.</td>
                                    </tr>
                                    <tr>
                                        <td>Predictive AI</td>
                                        <td>Forecasting errors and congestion.</td>
                                        <td>A weather app telling you it will rain in 20 minutes.</td>
                                    </tr>
                                    <tr>
                                        <td>Generative AI</td>
                                        <td>Writing scripts and explaining problems.</td>
                                        <td>An expert engineer standing next to you, giving advice.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3><strong>Why this matters for the CCNA</strong></h3>
                            <p>The modern CCNA exam (200-301) emphasizes <strong>Automation and Programmability</strong>, and it is important to understand how these technologies are shaping the future of networking. Cisco's own platforms, like DNA Center and Meraki, are increasingly incorporating AI-driven features for monitoring, troubleshooting, and automation.<br>AI reduces manual CLI intervention allows you to focus on high-level network design rather than repetitive troubleshooting.<br>Understanding the concepts of Machine Learning, Predictive AI, and Generative AI will help you appreciate the direction in which network management is heading and prepare you for more advanced certifications in the future.</p>
                        `
                    },
                    {
                        id: "6.5",
                        title: "6.5 Describe characteristics of REST-based APIs",
                        summary: "authentication types, CRUD, HTTP verbs, and data encoding",
                        content: `
                            <p>As a CCNA, understanding <strong>REST (Representational State Transfer)</strong> is vital because it is the primary way we interact with modern network controllers like Cisco DNA Center, SD-WAN vManage, and Meraki. REST APIs allow us to programmatically manage network devices, retrieve telemetry data, and automate tasks. Let's break down the key characteristics of REST-based APIs:</p>

                            <h3><strong>1. CRUD Operations and HTTP Verbs</strong></h3>
                            <p>In networking, we are constantly managing resources (like a VLAN, an interface, or a routing policy).<br>REST uses standard <strong>HTTP Verbs</strong> to perform <strong>CRUD</strong> (Create, Read, Update, Delete) actions.</p>

                            <table>
                                <caption><b>CRUD Operations and HTTP Verbs</b></caption>
                                <thead>
                                    <tr>
                                        <th>CRUD Action</th>
                                        <th>HTTP Verb</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Create</td>
                                        <td>POST</td>
                                        <td>Creates a new resource (e.g., adding a new VLAN).</td>
                                    </tr>
                                    <tr>
                                        <td>Read</td>
                                        <td>GET</td>
                                        <td>Retrieves information about a resource (e.g., checking interface status).</td>
                                    </tr>
                                    <tr>
                                        <td>Update</td>
                                        <td>PUT / PATCH</td>
                                        <td><b>PUT</b> replaces the entire resource; <b>PATCH</b> updates specific fields.</td>
                                    </tr>
                                    <tr>
                                        <td>Delete</td>
                                        <td>DELETE</td>
                                        <td>Removes a resource (e.g., deleting a static route).</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3><strong>2. Data Encoding</strong></h3>
                            <p>REST APIs are "language agnostic," meaning they don't care if you use Python, JavaScript, or Go. They communicate using structured data formats.<br>The two most common are:</p>
                            <ul>
                                <li>- <strong>JSON (JavaScript Object Notation):</strong> The industry standard for modern networking. It is lightweight and easy for humans to read and machines to parse.</li>
                                <li>- <strong>XML (eXtensible Markup Language):</strong> An older, more verbose format using tags (similar to HTML).</li>
                            </ul>
                            <p>Example of a JSON response for a Cisco Interface:</p>
                            <pre><code>{\n  "interface": {\n    "name": "GigabitEthernet1",\n    "description": "Uplink_to_Core",\n    "enabled": true,\n    "ip_address": "10.1.1.1",\n    "mask": "255.255.255.0"\n  }\n}</code></pre>
                            
                            <h3><strong>3. Authentication Types</strong></h3>
                            <p>Security is paramount in network automation. You can't just let anyone change your OSPF timers! REST APIs typically use one of these three methods:</p>
                            <ul>
                                <li><strong>Basic Authentication:</strong> The username and password are combined and encoded in <strong>Base64</strong>. It is sent in the HTTP Header.</li>
                                <li>Note: This is only secure if used over HTTPS.</li>
                                <li><strong>Bearer (Token) Authentication:</strong> This is the most common method for Cisco controllers. You first exchange your credentials for a "Token" (often a JWT). You then use this token in the header of all subsequent requests.</li>
                                <li><strong>API Keys:</strong> A long, unique key is generated for your application by the server. It acts as both a username and a password and is sent in the header or as a query parameter. This is often used for public APIs.</li>
                                <li><strong>OAuth 2.0:</strong> A more secure and flexible method, often used in enterprise environments. It allows for delegated access without sharing passwords.</li>
                            </ul>

                            <h3>Example of an API Request Header with a Token:</h3>
                            <pre><code>GET /dna/intent/api/v1/network-device HTTP/1.1\nHost: sandboxdnac.cisco.com\nAuthorization: Bearer \nAccept: application/json</code></pre>

                            <h3><strong>4. Statelessness</strong></h3>
                            <p>A key characteristic of REST is that it is <strong>stateless</strong>. This means the server does not "remember" previous requests.<br>Every single API call must contain all the information necessary for the server to understand and process the request (including the authentication token).</p>

                            <h3><strong>5. HTTP Response Codes</strong></h3>
                            <p>When you send a command to a router via an API, the router replies with a numerical code to tell you how it went:</p>
                            <ul>
                                <li><strong>200 OK:</strong> The request was successful. (common for <b>GET</b> requests)</li>
                                <li><strong>201 Created:</strong> The resource was successfully created (common for <b>POST</b> requests)</li>
                                <li><strong>400 Bad Request:</strong> The request was malformed or invalid.</li>
                                <li><strong>401 Unauthorized:</strong> The request requires authentication.</li>
                                <li><strong>403 Forbidden:</strong> You are authenticated, but you don't have permission to do that.</li>
                                <li><strong>404 Not Found:</strong> The requested resource could not be found.</li>
                                <li><strong>500 Internal Server Error:</strong> An error occurred on the server.</li>
                            </ul>
                        `
                    },
                    {
                        id: "6.6",
                        title: "6.6 Recognize the capabilities of configuration management mechanisms",
                        summary: "such as Ansible and Terraform",
                        content: `
                            <p>Traditional network management involves logging into every router and switch via CLI. Configuration management tools like <strong>Ansible</strong> and <strong>Terraform</strong> are essential for automating network device configurations and infrastructure provisioning by using <strong>Infrastructure as Code (IaC)</strong>. They allow network engineers to define the desired state of their network in code, which can then be applied consistently across multiple devices. This allows us to manage networks with consistency, speed, and version control.</p>

                            <h3><strong>1. Ansible: The Configuration Management Leader</strong></h3>
                            <p>Ansible is an open-source automation engine used for configuration management, application deployment, and task automation.<br>In a Cisco environment, it’s primarily used to push configurations to routers and switches.</p>

                            <ul>
                                <li><strong>Key Capabilities:</strong></li>
                                <li>- <strong>Agentless:</strong> You don't need to install any software on your Cisco IOS devices. Ansible uses <strong>SSH</strong> to communicate with them.</li>
                                <li>- <strong>Push Model:</strong> The control machine (where Ansible is installed) "pushes" the configuration changes to the devices.</li>
                                <li>- <strong>YAML-Based:</strong>  It uses Playbooks written in <strong>YAML</strong>, which is easy for humans to read and write.</li>
                                <li>- <strong>Idempotency:</strong> This is a crucial concept. It means if you run the same playbook twice, Ansible only makes changes if the current state doesn't match the desired state.</li>
                            </ul>

                            <p><strong>Example:</strong> Ansible Playbook to configure a VLAN on a Cisco Switch</p>
                            <pre>* yaml\n<code>- name: Configure VLAN 10 on Switch\n  hosts: switches\n  gather_facts: no\n  tasks:\n    - name: Create VLAN 10\n      cisco.ios.ios_vlans:\n        config:\n          - name: Sales\n            vlan_id: 10\n        state: merged</code></pre>

                            <h3><strong>2. Terraform: The Infrastructure Provisioning Specialist</strong></h3>
                            <p>While Ansible focuses on configuring what is already there, <strong>Terraform</strong> (by HashiCorp) is designed for <strong>provisioning</strong>—creating the infrastructure itself.<br>It is widely used in Cloud environments (AWS, Azure) and Software-Defined Networking (Cisco ACI or SD-WAN).</p>

                            <ul>
                                <li><strong>Key Capabilities:</strong></li>
                                <li>- <strong>State Management:</strong> Terraform keeps a "State File" (<code>terraform.tfstate</code>). It knows exactly what it built.<br>If someone manually deletes a resource, Terraform will detect the "drift" and recreate it.</li>
                                <li>- <strong>Declarative Approach:</strong> You describe the <strong>final state</strong> you want (e.g., "I want 3 VPCs and 2 Routers"), and Terraform figures out the steps to make it happen.</li>
                                <li>- <strong>Provider-Based:</strong>  It uses "Providers" to talk to different platforms. There are providers for Cisco IOS-XE, NX-OS, and ACI.</li>
                                <li>- <strong>HCL (HashiCorp Configuration Language):</strong> It uses a specific syntax that is slightly more structured than YAML.</li>
                            </ul>

                            <p><strong>Example:</strong> Terraform snippet to define a Virtual Network Resource</p>
                            <pre>* hcl\n<code>resource "cisco_ios_interface" "gigabit_eth1" {\n  name        = "GigabitEthernet1"\n  description = "Managed by Terraform"\n  enabled     = true\n  ipv4_address = "192.168.1.1"\n  ipv4_mask    = "255.255.255.0"\n}</code></pre>

                            <table>
                                <caption><b>Comparison at a Glance</b></caption>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Ansible</th>
                                        <th>Terraform</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Primary Goal</strong></td>
                                        <td>Configuration Management</td>
                                        <td>Infrastructure Provisioning</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Communication</strong></td>
                                        <td>Agentless (SSH/HTTPS)</td>
                                        <td>Provider-based (API)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>State</strong></td>
                                        <td>Generally stateless (checks device live)</td>
                                        <td>Stateful (tracks everything in a state file)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Model</strong></td>
                                        <td>Push Model</td>
                                        <td>Push Model (via API)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Language</strong></td>
                                        <td>YAML (Playbooks)</td>
                                        <td>HCL (HashiCorp Configuration Language)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Best Used For</strong></td>
                                        <td>Updating OS, changing CLI configs, daily tasks.</td>
                                        <td>Deploying Cloud instances, VPCs, and SDN fabrics.</td>
                                    </tr>
                                </tbody>
                            </table>

                        `
                    },
                    {
                        id: "6.7",
                        title: "6.7 JSON Data Parsing & Python",
                        summary: "Objects {}, Arrays [], Key-Value Pairs, Python json.loads()",
                        content: `
                            <pre><code>import json\n\nraw_json = '{"vlan_database": {"vlans": [{"id": 10, "name": "Sales"}, {"id": 20, "name": "Voice"}]}}'\ndata = json.loads(raw_json)\n\n# Accessing VLAN 20 Name\nvlan_20_name = data["vlan_database"]["vlans"][1]["name"]\nprint(f"VLAN Name: {vlan_20_name}")  # Output: Voice</code></pre>
                        `
                    }
                ]
            }
        ];

        export const flashcardsData = [
            { q: "What is the Administrative Distance of OSPF?", a: "110" },
            { q: "What is the Administrative Distance of EIGRP (Internal)?", a: "90" },
            { q: "Which port does SSH use?", a: "TCP Port 22" },
            { q: "What is the Syslog Severity Level for 'Warning'?", a: "Level 4" },
            { q: "What is the EUI-64 inserted 16-bit hex value?", a: "FFFE" },
            { q: "What is the IPv6 Link-Local prefix?", a: "fe80::/10" },
            { q: "Which 2.4 GHz channels are non-overlapping in the US?", a: "Channels 1, 6, and 11" },
            { q: "What port does TACACS+ use?", a: "TCP Port 49" },
            { q: "What is the default CAM table aging timer on Cisco switches?", a: "300 Seconds (5 minutes)" },
            { q: "What is the IPv6 multicast address for All Routers?", a: "ff02::2" }
        ];
