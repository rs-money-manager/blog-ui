---

 - Binary Search is a searching algorithm used in a **sorted array**
 - the array is **repeatedly dividing the search in half** the portion of the list
 - The **middle element** act as a reference to **check with half** contains the target value, eliminating the other half in which target cannot lie.

![BinarySearch](/assets/posts/Images/BinarySearch/BinarySearch.drawio.svg)

# Algorithm
---

```
    Repeat Until Low and High meet each other
    1. get Index of mid element
    2. if the element is present in mid
            a. return mid
    3.  if the mid element is greater than element. search only left side
            a. eliminate right
    4.  if the mid element is less than element. search only right side
            a. eliminate left
```

# Example
---
![BinarySearchExample](/assets/posts/Images/BinarySearch/BinarySearchExample.svg)

# Implementation
---
 
```
	int binary Search(int[] arr, int x) {
		int l = 0;
		int h = arr.length - 1;
		while(l<=h) {
			int mid = (l+h)/2;
			if(arr[mid] == x)
				 return mid;
			else if(arr[mid] > x)
				h = mid - 1;
			else
				l = mid + 1;
		}
		return -1;
	}
```
# Time Complexity
---
To find the time complexity, let's take some example.

![BinarySearchTimeComplexity](/assets/posts/Images/BinarySearch/BinarySearchTimeComplexity.svg)

To find a index:
1. 4 it takes 1 comparision
2. 6 it takes 2 comparision
3. 3 it takes 3 comparision

So the maximium comparision is **height of a tree**

#### Time Complexity = O(log n)