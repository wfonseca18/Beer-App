# Beer-App
Group Project 1
Beer Project

Deliverables:
1.	2 API’s, utilize 1 new library or technology, polished front end /UI, cannot use alerts, confirms, or prompts, repeating element, must use bootstrap, or alternative CSS, must be mobile responsive, deployed in GitHub

Delivered:
    •	Utilized Bootstrap
    •	Google Charts API
    •	Google Charts – new technology for in-situ chart and graphing rendering
        o	Repeating as it dynamically adjusts and tracks favorite beers with user scoring (fun)
    •	Untapped.com API for access to Untapped global Database of beers
    •	Mobile responsive with 3 target size transitions, 320/768/1170 PX
    •	Github deployed 
        o	Public URL = [https://wfonseca18.github.io/Beer-App/]
        o	Github HTTPS = [https://github.com/wfonseca18/Beer-App]
    •	Extras:
        o	Some fun with scores and favorite beers – dynamic array management 

Outline:
Initially we begin with an array of popular beers represented in a pie chart, and text entry/submit area for the users favorite beer entries.  The PIE chart is one of the available technologies available via Google, as are the API’s for Google which allow the dynamic rendering of the charts.

Each beer also has a representative button which is responsive and increments the available score or “votes” for favorite beer.  Increments one per button press. Upon press, the Untapped API is invoked to retrieve the data associated with that beer, and the results are rendered in an adjacent “nameplate” for additional common beer information.  

The Pie Chart renders the top 10 favorite beers from the dynamic array, which is auto sorted and reorganized dynamically as the user “up-votes” specific beers via the available buttons.


NOTES: 
The Untapped DB is Global, and is populated by users, so there is some data “scrubbing” which is a recommendation as we identified duplicates (example misspelled entries), as well as with a Global DB we see many of the same name beers being duplicated based on country, and global region – as a result we are sorting by closest common spelling, and utilizing the most popular entry for that “beer name”

The Google Chart has some structural challenges that only appear when we change sizes, however a refresh establishes the image as desired and is responsive – Chrome inspect/dynamic changes can induce some strange behavior, which can be managed by refreshing the UI in the new target size.
