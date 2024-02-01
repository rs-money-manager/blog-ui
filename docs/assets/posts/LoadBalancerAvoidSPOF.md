### Single Point Failure
If your load balancer breaks for any reason, you will lose connection to all your backend server which is scaled.

![LoadBalancer](/assets/posts/Images/LoadBalancerFails.svg)

### How To avoid SPOF in Load Balancer
You can introduce a **parallel/standBy Load Balancer** to make the application highly available. Even if the main load balancer fails the standby load balancer will take over, giving a extra layer to redundancy and protection against down time.

![LoadBalancer](/assets/posts/Images/StandByLoadBalancer.svg)

If the Primary Load Balancer is down, a failover will occur. The Secondary/StandBy Load Balancer should able to pick up the requests by becoming active. This ensures that no client will require prolonged down time.

![LoadBalancer](/assets/posts/Images/StandByLoadBalancerFails.svg)

Having redundancy between your application and load balancer ensure continuous uptime. So, even though one appliance will help you scale out your backend servers, it won't help you completely avoid the vulnerability of a single point of failure. Hence why you **need a pair - and buying a single load balancer is a false economy**.

And if you want  endless scalability, you can also load balance your load balancers! 