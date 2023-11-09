# spaceStagram

## Introduction

Hello! Here is documentation for my project 'spaceStagram' in the field of frontend. You can visit the web site in the browser by the address(https://voicihojun.github.io/spacestagram).

## Description

1. Search results come from NASA’s free APIs(https://api.nasa.gov). Between several nasa's websites, I used APOD( Astronomy Picture of the Day).

HTTP Request :
GET https://api.nasa.gov/planetary/apod with API key.

Query parameters : Query parameters that I used for this website
| Parameter | Type | Default | Description |
| --- | :---: | :---: | ---: |
| `start_date` | YYYY-MM-DD | none | The start of a date range, when requesting date for a range of dates. Cannot be used with date. |
| `end_date` | YYYY-MM-DD | today | The end of the date range, when used with start_date. |
| `count` | int | none | If this is specified then count randomly chosen images will be returned. Cannot be used with date or start_date and end_date. |
| `api_key` | string | DEMO_KEY | api.nasa.gov key for expanded usage |

2. Framework : React, CSS

3. Technical requirements
   1. Each image result should list at least a title, date of capture (ideally in earth_date) and a button to “like” that image.
   2. Each image can be “liked”, and a user should be able to undo their “like”
   3. The HTML that ends up being served client-side should be accessible and semantic (MDN reference)
   4. More options
      - Save likes if the user leaves or reloads the page
      - Animate the “like” action (might we suggest a heart?)
      - Add a loading state while we wait for NASA’s API to return data
      - Create shareable links for each image
      - Add a date-picker to be able to browse photos starting from a specific date
      - Add a fabicon image to the title for spaceStagram
      - Responsive website
      - random button to show randomly 5 space's images

## Demo

Below are gif demos of my project to show the above technical requirements.

#### 1. Initial State

When I first access to this website, it shows 5 random space's images. Here is what I used query parameter `count=5`. Each image result lists a title, date of capture and a button to “like” that image. Each image can be “liked”, and a user is able to undo their “like”

![1](https://user-images.githubusercontent.com/46732468/149686562-26f23e1d-0646-479e-9b29-461dd42d2755.gif)

#### 2. Save likes if the user leaves or reloads the page

By using localstorage of browser, I saved likes when the user leaves or reloads the page

![2](https://user-images.githubusercontent.com/46732468/149686924-c7fb31a6-d8d9-463a-9e95-24346372c14b.gif)

#### 3. Animate the “like” action

By using CSS, I made a like action which The heart shape increases and returns to its original size.
(This demo is included to the number 2.)

#### 4. Add a loading state while we wait for NASA’s API to return data

![3](https://user-images.githubusercontent.com/46732468/149687048-4e616d69-98c7-4eb2-8619-aa9c08580661.gif)

#### 5. Create shareable links for each image

Each image has a link image. We can copy the shareable link by clicking the link image.

![4](https://user-images.githubusercontent.com/46732468/149687946-6e2e92cb-4855-4d78-8e31-0a2ee7a6c058.gif)

#### 6. Add a date-picker to be able to browse photos starting from a specific date

With start date and end date information, we can search the photos from the start date to the end date.

![5](https://user-images.githubusercontent.com/46732468/149687978-b679c3b9-b73d-4be4-ac21-5845f77a2cc2.gif)

#### 7. Add a fabicon image to the title for spaceStagram & Responsive website & random button

![6](https://user-images.githubusercontent.com/46732468/149688003-a4b4935d-b332-454b-abe1-8868850961ee.gif)
