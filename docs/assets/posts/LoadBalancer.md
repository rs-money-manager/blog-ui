A load balancer evenly distributes incoming traffic among web servers that are defined in a load balancer set.

load balancer sits between client and servers group and acts as invisible facilitator, ensuring all the workloads are equally distributes.

![LoadBalancer](/blog-ui/assets/posts/Images/LoadBalancer.svg)
 
1. If server 1 goes offline, all traffic will be routed to server 2. Prevents site from going offline.  
2. If traffic grows rapidly and two servers are not enough to handle server then we can add servers and if traffic becomes normal we can remove servers

###  Load Balancing Types:  
Load balancers are generally used at Layer 4 and Layer 7.  

**Layer 4** load balancers direct traffic based on data from network and transport layer protocols *(IP, TCP, FTP, UDP)*.  
  
**Layer 7** load balancers distribute requests based upon data found in application layer protocols such as HTTP headers, cookies, SSL session ID, HTML form data etc.  
  
1. Network load balancing: **(OSI Layer 4)**
Network load balancers examine IP addresses and other network information to redirect traffic optimally. They track the source of the application traffic and can assign a static IP address to several servers.  
  
2. Application load balancing: **(OSI Layer 7)**  
Complex modern applications have several server farms with multiple servers dedicated to a single application function. Application load balancers look at the request content, such as HTTP headers or SSL session IDs, to redirect traffic.  
  
3. Global server load balancing:  
Global server load balancing occurs across several geographically distributed servers. For example, companies can have servers in multiple data centers, in different countries, and in third-party cloud providers around the globe. In this case, local load balancers manage the application load within a region or zone. They attempt to redirect traffic to a server destination that is geographically closer to the client. They might redirect traffic to servers outside the client’s geographic zone only in case of server failure.

##

![LoadBalancer](/blog-ui/assets/posts/Images/LoadBalancerTypes.svg)

### Network Load Balancer Vs Application Load Balancer

| Application Load Balancer | Network Load Balancer |
|--------------------------------------------|-------------------------------------|
| 1. Operates at Application layer, Layer 7 | 1. Operates at Network layer, Laye 4 |
| 2. HTTP and HTTPS support | 2. TCP and TLC support |
| 3. Supports Lamda functions as targets | 3. Not applicable |
| 4. Routes based on path, host, HTTP header, query string, and source IP | 4. Static IP,preserves the source IP,high throughput |

## 

**NLB and ALB Together** - this feature allows NLB to accept TCP connection and route it to ALB as a target
1. ALB: This allows customers to utilise PrivateLink on NLB and route this traffic to a target ALB to utilise the layer 7 benefits.
2. Static NLB IP Addresses for ALB – With one static IP per Availability Zone on NLB, you get full control over your IP addresses. Allow-listing of IP addresses for firewall rules.

## Load Balancing Algorithm:  
Two Types of Load Balancing Algorithm  

#### Static Load Balancing :
Fixed rules and independent of current server state.

![LoadBalancer](/blog-ui/assets/posts/Images/LoadBalancerStaticAlgo.svg)

1. **Round Robin Method: (Most used)**  
The domain name service returns the IP address of the server to the load balancer and it distributes traffic in turn by turn or round robin fashion.  

2. **Weighted Round Robin Method:**  
You can assign different weights to the different service and the load balancer ditributes traffic based on weight of the server.  
3. **IP Hash Method:**  
Load Balancer distributes the traffic based on hash value of the IP address.

####  Dynamic Load Balancing  
examines the current state of the server before distributing traffic.

![LoadBalancer](/blog-ui/assets/posts/Images/LoadBalancerDynamicAlgo.svg)

1. **Least Connection Method:**  
the load balancer checks which servers have the fewest active connections and sends traffic to those servers.  
2. **Resource Based Method:**  
Load balancers distribute traffic by analyzing the current server load. special agent runs on the each server which keeps track of the load.  
3. **Least Response Time:**  
The response time is the total time that the server takes to process the incoming requests and send a response. The least response time method combines the server response time and the active connections to determine the best server.  

#### Algorithm used by Load Balancers:  
1. ALB - round-robin algorithm  
2. NLB - IP hash algorith (traffic is routed to specific targets in a predetermined manner)  
3. GLB - uses routing table look-ups to determine where to route the traffic.

## Benefits of Load Balancing:

![LoadBalancer](/blog-ui/assets/posts/Images/LoadBalancerBenefits.svg)
  
1. **Application Availability:**  
Server failure or maintenance can increase application downtime, making your application unavailable to visitors. Load balancers increase the fault tolerance of your systems by automatically detecting server problems and redirecting client traffic to available servers.  
 
2. **Health Monitoring:**  
Load balancers continuously monitor the health and performance of servers, removing failed or unhealthy servers from the pool to maintain optimal performance.  

3. **Traffic Distribution:**  
Load balancers evenly distribute incoming traffic among multiple servers, preventing any single server from becoming overwhelmed. This helps maintain optimal performance, scalability, and reliability of applications or websites.  
  
4. **Application Scalabilty:**  
Load balancers facilitate horizontal scaling by effectively managing increased traffic. Additional servers can be easily added to the pool, and the load balancer will distribute traffic across all servers.  
  
5. **Session Persistence:**  
For applications that require maintaining a user's session on a specific server, load balancers can ensure that subsequent requests from a user are sent to the same server.  
  
6. **Application Security:**  
Load balancers come with built-in security features to add another layer of security to your internet applications. They are a useful tool to deal with distributed denial of service attacks, in which attackers flood an application server with millions of concurrent requests that cause server failure.
