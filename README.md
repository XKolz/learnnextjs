9-catch-all segements
features1/concepts1
1/2
2/1
2/2


Colocation of files 

private folders now
Separating UI logic from routing logic
For consistently organizing internal files across a project
For sorting and grouping files in code editors.
And finally, for avioding potenital naming comsflicts with future Nextjs file conventions.

You cant view protected routes in _lib folder

13-Route groups
(File folder)

14- how to creat Layouts
layout.tsx



t19-
navagation
next/link

Video29
    UnMatched routes 
    V30
    conditioal routes
    
    
    v31
    (.) to match segment on the same level
    (..)to match segment one level above
    (..)(..)to match segements two levels above...NB:They havent been using this in a while now
    (...) To match segments from the rrot app directory

    v33
    route handler
    we have learnt how to route to pages
    we can also

    36
    get request
    http://localhost:3000/comments

post request 
    http://localhost:3000/comments


get reqyesrt
    http://localhost:3000/comments/:id



V42
coookies in routes handlers
cookies are small pieces of data that a server send to a user's web browser
The browser may store the cookie and send it back to the same server with later requests

Used for three purposes;
Sessions management like logins and shooping carts
Personalization like user preferences and themes
Tracking like recording and analyzing user behaviour.

v44
Middleware in nextjs is a powerful feature that offers a robust way to intercept and control
the flow of requests and responses within your applications.
it does this at a global level significantly enchancing features like redirection, Url rewrites,
authentication, headers and cookies managemnet, and more.
V44
I need to watch this again, it was about miuddleware 
V45
Rendering 
Rendering is the process that trabsforms the code you write into UI
In nextjs, choosing the right time and place to do this rendering is vital for building a perfmant application,
CSS
SSR
RSCs
Rendering in react  to  Rendering NEXTJS

## Video 46
Client-side Rendering 
This methond of rendering, where the component code is transformed into a user
interface dierectly within the browser(The client), is known as client-side rendering (CRS)
CSR quicckly becames gthe standard for SPAs, with widesppread adoption

It wasnt long before developer began nocticing some inherent drawbacks to this approach
Drawback
SEO
Genertaioon HTML that mainly contains a single div tag is not optimal for zSEO, as it providesn little contenst for search engines to index.

Performance 
Havinf the broswer (the clinet ) handle alll the work, such as fetching datam, computing the UI, and making the html interactive, can slow things down. Users might see a blank screen or a loading spiunner while the page loadfs.

Each new feature adfdes to the application increase the size of the javascripgt bundle, prolonging the wait tie for users to see the UI
## Vide047

It significatly improves SEO because search engines can easliy indedzx the server rendered content.
Users can immmediately see the  page html context, instead of a blank screen or laoding spinner.


Hydration
durig hydration, react takes control ion the broswert, recontructiing the componemtnt tree in memory based on the staikc html that was served.


it  carefully polans the placement iof interactive elements within this tree, then react proceeds to bind the necessary javascriot logic to thes elements.

Two types 
static site Gen
Server Side Rendering
ssG occurs at the build timr,the application is deployed  on the server. this results in pages that are alreday renderd and ready to serve. ir is ideal fiorcontext that doesn't chnage often like blog poosts.


SSR, on the other hand, render pages pages on demand iun the responses to user requests, it is suitable for personalized content like social mdeia feeds, ehere the HTMl depemds on the logged in user.

Drawbacks of SSR-All or nothing waterfall
!. haveing to load the data for the entire page
2. loading the javascript for the entir page, and 
3. hydrate the entire page

create an 'aal or nothing' waterfall problem that spans from the server to the client, where each issues must be resloved before moving to the next one.

this is inefficients if some parts of your app are slower that others, as is often the case in real-world apps.

## ideo48
Data fetchinf must be completed the server can begin rednering HTML,
the javascript required for the components needs to be fully loaded on the client sode the hydration process can start

All components have t be hydarted before thry becomes interactive 


## RSC Rendering Lifecycle
We are  going to learn about the rendering lifecycle of the server and client components 
in simple terms, well will explore how they come to life on youe screen 

For react server compoments RSC, it is important to consider three elements: your broswerr (the client) and on the server side, nextjs(the frameworks) and react the library.