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
