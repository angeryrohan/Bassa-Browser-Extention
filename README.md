Currently in progress. This is a demo of a potential project for SCoRe Labs with no dynamic functions as of now...


![e x t e n s i o n](https://user-images.githubusercontent.com/29266591/50261799-31185700-0434-11e9-97df-dd357858df17.png)

Making the best use of internet's bandwidth by detecting traffic through Bassa's algorithms on a browser extension

## What is BassaExtension?
BassaExtension is a chrome add on feature inspired by [Bassa - A SCoRe's repository](https://github.com/scorelab/Bassa) which can be installed on browsers with just a few clicks. So you no longer have to specifically setup, install and open an application if you're just looking for an appropriate time to complete your downloads.

![webp net-resizeimage](https://user-images.githubusercontent.com/29266591/50281689-4c0bbb00-0476-11e9-8d99-8cee7bd3bffe.png)

## Working
The BassaExtension works on the principles of Bassa, and thus uses its algorithms to generate a <b>Traffic-Time</b> graph to inform the user about the appropriate timings when a download can be done. It can tell you about when is it better to download stuff from the internet to make the best use of your internet's bandwidth.<br>
<b>Lower the traffic, Higher the efficiency. Higher the traffic, Lower the efficiency</b>

As mentioned above, an empty <b>Traffic-Time</b> graph would look somewhat like this:

![_recommended](https://user-images.githubusercontent.com/29266591/50279766-b4579e00-0470-11e9-9f5f-66e78d93978e.png)

In the following graph, a <b>bar like notation</b> would be present which would indicate the current Internet's bandwidth or Traffic. So you can just look at the bar on the <b>Traffic-Time</b> graph and know exactly when you have to download something.

![webp net-gifmaker 1](https://user-images.githubusercontent.com/29266591/50280611-faadfc80-0472-11e9-8684-01a197d2c821.gif)

And ofcourse, there is no need to keep opening the extension. Just turn it on, and you'll automatically be notified of the appropriate download time. We'll notice the graph on your behalf ;)

![time to download 1](https://user-images.githubusercontent.com/29266591/50282199-fdf7b700-0477-11e9-95c8-c78bd025f5f1.png)

## An Overall Look

![demo](https://user-images.githubusercontent.com/29266591/50321716-32ab5300-04f8-11e9-873c-97acf3e1cd9d.png)

 
<i>Let's break the above picture into snaps of different functionalities to understand better...</i> <br>
<b>Here are the functionalities along with their snaps of these elements in the above picture (From Top to Bottom):</b><br>

![demo1](https://user-images.githubusercontent.com/29266591/50321894-fe846200-04f8-11e9-85ab-5355dc893bac.png)

1. <b>Traffic graph with respect to time</b>:<br> tells about the current traffic on graph with markings<br><br>

![demo5](https://user-images.githubusercontent.com/29266591/50321899-03491600-04f9-11e9-82e1-621d72b93056.png)

2. <b>Current Traffic Status</b>:<br> A much user-friendly way of expressing Traffic would be giving it a "Traffic-tag" which expresses the intensity of the traffic, such as (HIGH, MODERATE, LOW)<br><br>

![demo4](https://user-images.githubusercontent.com/29266591/50321900-03491600-04f9-11e9-8970-096271ce5452.png)

3. <b>Current Bandwidth Efficiency</b>:<br> Bandwidth is the data-transfer rate, So Here BassaExtension tells about the data-transfer (or downloading) efficiency in percentage.<br><br>

![demo2](https://user-images.githubusercontent.com/29266591/50321901-03e1ac80-04f9-11e9-8d4b-8e66893ba906.png)

4. <b>Last Optimal Time</b>:<br> Informs the user of the last optimal download time, Basically the last time when the bandwidth efficiency was good enough to make downloads<br><br>

![demo6](https://user-images.githubusercontent.com/29266591/50321898-03491600-04f9-11e9-90a4-febff5fe8ff6.png)

5. <b>Remind me for an urgent download</b>:<br> After turning this ON, BassaExtension would ask for the user's desired Bandwidth efficiency and notify the user whenever the internet's bandwidth efficiency becomes more than the userinput. What this means is that If I urgently want to download something and I need bandwidth efficiency to make the download faster. Then I would simply type in my desired Bandwidth (say 80%).Then whenever the low internet's traffic (thus higher bandwidth efficiency. In this case, more than 80% which is the userinput) is noticed, BassaExtension would automatically notify the user.</b><br><br>
## Installation on Chrome
1. Get root Directories: ```git clone https://github.com/rohancl/BassaExtension/```
2. Open Chrome and type in ```chrome://extensions/``` into the URL, Hit Enter.
3. Look at the top-right corner, You should see a Developer option switch there, Turn it on.

![step](https://user-images.githubusercontent.com/29266591/50282962-6fd10000-047a-11e9-868a-dcd490777298.png)

4. After turning on the developer options, You'll see a new sub-header, Hit "Load Unpacked"

![step1](https://user-images.githubusercontent.com/29266591/50283029-ae66ba80-047a-11e9-998c-1b036c5e8033.png)

5. Then locate to the root project file: "Bassa Extension", Hit Open.
6. Done! You're now all set to use BassaExtension ^.^
 

 
## Installation on Firefox
1. Get root Directories: ```git clone https://github.com/rohancl/BassaExtension/```
2. Open Firefox and type in ```about:debugging``` into the URL, Hit Enter.
3. In the right, Hit "Load-Temporary Add-On..."

![step3](https://user-images.githubusercontent.com/29266591/50283278-68f6bd00-047b-11e9-858b-e463fa7f9651.png)

4. Then locate to the root project file: "Bassa Extension", Hit Open.
6. Done! You're now all set to use BassaExtension ^.^

## Collaboration

For further development and help, I'll be collaborating with mentors and my friends:

<b>1. Łukasz Myśliwiec</b><br>
<b>2. Jakub Mularski</b><br>
<b>3. Anurag Parida</b>

--> Special thanks to Gaurav Pandey for an amazing Bassa-mobile's new Logo ;)
