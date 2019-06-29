# Pathfinder-19

![demo](/readme_assets/Demo.gif)
* Project For - AngelHack Dubai 2019 
* Done by: 
    * Adib Ali (github.com/adib1996)
    * Nasir Khalid (github.com/NasirKhalid24)
    * Mahmoud Saad (github.com/mabouamer)

***
Pathfinder is a software that is applied to drones during disasters to assist ground staff and first responders by providing them with the optimal path to reach their destination. It uses deep learning to locate and identify debris & obstacles. Based on that, the drone will map out a path for the ground personal to reach their destination, avoiding any other routes that may be blocked due to debris or any other obstacles.

## IBM Watson

Used to develop classifiers to identify debry and obstacles in the road

![waton](/readme_assets/watson.jpeg)

## Requrements
* Any IDE of your choice
* A web browser

## Installation 
1. Clone the Repo into the directory you wish, by using the following Command
``` bash
$ git clone https://github.com/mabouamer/Pathfinder-19 
```

2. Replace "YOUR-API-KEY" with your Maps API Key under the index.html file
``` html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR-API-KEY&callback=initMap" defer></script>
```
3. Open the index.html with your favourite web browser