## How to build a web scraper.


Building a web scraper is a easy way to feel like Elliot from MrRobots without the illegality. Follow the steps below and have fun.

###Ready, set , go.


#### Step 1  
First of all, you will need NodeJS. You can install NodeJS with one command.

```
 $ curl http://npmjs.org/install.sh | sh
```
Create the necessary folders and files.

```
$ mkdir how_to_build_a_webscraper && cd how_to_build_a_webscraper && touch index.js
```

Create a package manager using the following command.

```
$ npm init 
```


#### Step 2

You will need to be able to send and receive HTTP requests. Request-promise is my favourite HTTP request client, because of it's in build support of promises. It makes your code so much more simpler. 

``` 
$ npm install request-promise   --save
```

With the package above we can now send requests to web pages and receive data back. When you make a request to a webpage, the body of the data you received is in the form of HTML, this is were cheerio comes in.<br>

Cheerio is the server side version of jQuery, which will enable you to be able manipulate the DOM.

``` 
$ npm install cheerio  --save
```

#### Step 3

So now open up your index.js files and require the packages that you have installed. when you require packages you are making the code that does all the cool stuff available to you in the file that you are currently in.

```
  var rp = require('request-promise');
  var cheerio = require('cheerio'); 

```

You will then need the URL of the website you want to scrape. 
As a lipstick fanatic my website of choice is Mac Cosmetics. My goal is to get a list of all the lipsticks that they have on their website.

There is not a lot of code need to be able to get the basic data you need. It only involves making a request and manipulating the data you get back. See below:

```
  var options = {
    uri: 'http://www.google.com',
    transform: function(body) {
      return cheerio.load(body);
    }
  };

  rp(options)
    .then(function($) {
      // Process html like you would with jQuery...
    
    })
    .catch(function(err) {
      // Sraper failed or Cheerio choked...
          console.log(err);
    });

``` 

The response you will receive will be all the webpage without the fancy css that makes it look good.


  
#### Step 4

Now that you are getting back all the HTMl from the webpage, we can manipulate the DOM we have received. 

I've noticed that all the lipsticks are being listed in div with the class '.shade-picker-float__colors'. 

I’ve stored Cheerio in a $ variable which at the moment  loading the body of the request that contains the html. So now I can use it to get each of the divs for me from the html using the following code.

```

  rp(options)
    .then(function($) {
      // Process html like you would with jQuery...
      
      var lipsticksNameDivs = [];

      $("div.shade-picker-float__colors").each(function(index, value) {

        lipsticksName.push($(value).html());
        
        console.log(lipsticksNameDiv)

      });
    
    })
    .catch(function(err) {
      // Sraper failed or Cheerio choked...
      console.log(err);
    });

``` 
Now if I console.log lipsticksNameDiv by running 'node index.js' in the terminal, I should have a list of all the divs that have class '.shade-picker-float__colors'. 

![](/images/lipstickDivs.png)

That great!!

I can do want ever I want with thhis data , I can regex it to get the actual names or just use te html as it is.



#### The end

Yeah you have now build your first web scraper. <br>
Have fun scraping !!!!



