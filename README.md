# Project Greenfield

Our outdated client-facing retail web-portal has become significantly outdated and has been proven to be hurting sales numbers. Project Greenfield comprises a complete redesign of the retail portal designed to address this concern and modernize the site. We were given a 27 page SRS outlining the features to be implemented as part of Project Greenfield in its initial release with only two weeks as a deadline. 

These are the scripts in package JSON

```
$ npm run start <- starts a development server //Use this for all dev
$ npm run build <- creates production bundle // See server notes
$ npm run test <- runs tests
```

## [Server](/server/index.js)

Because our information comes from a blackbox API, this server will only be used to serve the production bundle upon deployment.

```
$ npm build <- builds a production bundle
$ node ./server <- runs express server
```

## [App](/src/components/App.js)

Mounted to 'root' element in index.html

Currently housing the react-router-dom BrowserRouter, Switch and Routes.

- BrowserRouter is renamed 'Router'
- When the app is mounted, the url will be checked through the router. The router will then render out the component matching the url path.

* 'http://localhost:3000/' has a path of '/' and thus render's the Home component
* 'http://localhost:3000/product/' has a path of '/product' and thus render's the product component

* variable paths are done as normal, i.e. '/product/:id' will render the component designated by the Route regardless following url parameter.

## [**Optimization**](/server/index.js)

[webpack config](/webpack.config.js)

**Challenge**: Large network payload producing low performance in critical categories such as time to interactive, contentful paint and meaningful paint.

Progress of performance optimization is documentated below, using Google Lighthouse to test performances.

**Time to Interactive, First Contentful Paint and Meaningful Paint were reduce by over 50%**
<details>
<summary>Before Optimizations:</summary>
<br>
<img src='https://i.imgur.com/YjpjiVy.png' width='50%'/>
</details>

<details>
<summary>GZIP Bundle delivered via express server optimization results:</summary>
<br>
<img src='https://i.imgur.com/FAIqUw2.png' width='50%'/>
</details>

<details>
<summary>Code refactor to load compressed images for thumbnails:</summary>
<br>
<img src='https://i.imgur.com/Gd19FTd.png' width='50%'/>
</details>

# [**Ratings and Reviews Component**](/src/components/Reviews)

### Main Contributor: **Cesar Roman**

![](https://drive.google.com/uc?export=view&id=1MyRzfF42QJFiTc4ZOXMJSi23vAEjfMAi)


## **Live Demo**
<b>The FPS and Quality of this demo have been significantly reduced to be formatted in this document, please see optimization for accurate data on load times and smoothness of application.</b>

[**Link to demo GIF**](http://g.recordit.co/kLOoxaYOUV.gif)

## Ratings and Reviews Features:

**Purpose**: The Ratings & Reviews module will allow viewing and submission of reviews for the product selected. The functionality contained within this module can be divided into several pieces:

- [Reviews List](/src/components/Reviews/reviewRatingsHelpers/ReviewsList.js)
- [Individual Review Tile](/src/components/Reviews/reviewRatingsHelpers/ReviewTile.js)
- [Sort Options](/src/components/Reviews/reviewRatingsHelpers/SortingView.js)
- [Write New Review](/src/components/Reviews/reviewRatingsHelpers/AddReview.js)
- [Rating Breakdown (Filtering)](/src/components/Reviews/reviewRatingsHelpers/RatingsBreakdown.js)
- [Product Characteristics Breakdown (Factors)](/src/components/Reviews/reviewRatingsHelpers/CharBreakdown.js)

Queries API for product data based on the URL end point, adding to a shared store via Redux.

- [Redux Actions](/src/actions/ReviewActions/actions.js)
- [Redux Reducers](/src/reducers/Reviews)
- [Store](/src/reducers/index.js)

### [Reviews List](/src/components/Reviews/reviewRatingsHelpers/ReviewsList.js)
The heart of the Ratings and Reviews module will be the list of reviews available for the user to read.   This list will display all the reviews that have been submitted for the product being viewed.  

**Dynamically renders:**

- Each individual Review Tile (initial load of 2, subsequent render of 2 additional reviews per click on 'More Reviews' button)
  - Once there are no more review to load, 'More Reviews' button will not render
- Number of Reviews and Sort Options which consists of selections for sorting by:
  - Helpful - This sort order will prioritize reviews that have been found helpful.  The order can be found by subtracting “No” responses from “Yes” responses and    sorting such that the highest score appears at the top.
  - Newest - This is a straightforward sort based on the date the review was submitted.  The most recent reviews should appear first.
  - Relevant - Relevance will be determined by a combination of both the date that the review was submitted as well as ‘helpfulness’ feedback received.  This        combination should weigh the two characteristics such that recent reviews appear near the top, but do not outweigh reviews that have been found helpful.          Similarly, reviews that have been helpful should appear near the top, but should yield to more recent reviews if they are older.


- 'Add Review' button which will pop up modal with form that will allow user to select star rating which will appropriately show what each star rating equates to
  - Also allows user to select if they recommend product
  - Select characteristics 
  - Write review summar and body with minimum character limit (50) and dynamically shows how many characters are left before limit is reached
  - Allows user to upload photo
  - Requires valid email
  - Once submitted will be posted to API and saved

### [Ratings Breakdown](/src/components/Reviews/reviewRatingsHelpers/RatingsBreakdown.js)
A breakdown of the ratings received for the product will double as the filtering options for the reviews list.  This breakdown will display at the top left corner of the Rating and Reviews module. 

**Dynamically renders:**

- [StarBreakdown](/src/components/Reviews/reviewRatingsHelpers/StarBreakdown.js), which is a visual breakdown of the start ratings received for the product will double as the filtering options for the reviews list.
  - Each filter is additive, meaning if a user selects 4 and 5 stars, they will only reviews with those two ratings, if one specific rating is clicked again, that    will be removed from the filtering.
  - Serves as visual representation of all of the possible star ratings in the form of a bar graph which is   populated based on the percentage amount of each        specific rating.
- Percentage of how many "recommendations" were given to the product based on the reviews given.

### [Product Characteristics Breakdown](/src/components/Reviews/reviewRatingsHelpers/CharBreakdown.js)

**Dynamically renders:**
- Visual representation of the feedback given on specific characteristics for each product
  - Each type of product has it's own characteristics, so the trickiest part here was in figuring out a way to build out two functions that would serve as the 'filterLow' and 'filterHigh' to appropriately categorize ratings based on the characteristics. 
- Implemented bar graphs with a Caret Down that would mark the accurate rating of the characteristic on a sliding scale. 
