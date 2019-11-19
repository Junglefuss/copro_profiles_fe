<a href="https://coproductions.com/"><img src="./images/coproductions-logo.png" width=200px  /></a>

# Coproductions Profiles Platform

> The sign-up and profile-page management tool for members of the Coproductions network of marketing, design, and digital agencies and freelancers.

This is a full stack application built with Django, PostgresQL, node.js, and React. The functions it will someday provide include signing up for the Coproductions network as an individual or representative of a team, adding links and images to resume and portfolio website, and connecting to other people and teams. As of now, it does none of these things. But we're getting there!

It is a thing though:
<img src="./images/Screen Shot 2019-11-19 at 11.18.48 AM.png">

## Technologies

### Back End

- Python 3.7.5
- Django 2.2.7
  - Django Rest Framework
    - JWT
  - Cors Header
  - Heroku (for deployment)
  - Pillow (for images... which don't work)

### Front End

- Node.js
  - Node Package Manager
- React 16.11.0
  - React DOM
  - React Router DOM

## Current Functionality

- Homepage with welcome (see above)

- Account Login/Logout (top right of homepage)

- Member Profile Creation
  <img src="./images/Screen Shot 2019-11-19 at 11.19.53 AM.png" />

- Member Profile Display
  - no images yet
  - name, skills, contact information are all successfully acquired from the backend
  - Portfolios, Teams, and Connections should be generated through separate components, which are also receiving the correct data.
  - However, I have not yet been able to iterate through those data to return the right displayed value.
    <img src="./images/Screen Shot 2019-11-19 at 11.19.39 AM.png" />

## Repositories

- Back End:

  - Development: https://github.com/Junglefuss/copro_profiles_be
  - Deployed: https://coproductions-profiles.herokuapp.com/api/

- Front End:
  - Development: https://github.com/Junglefuss/copro_profiles_fe
  - Deployed-ish (not working): https://junglefuss.github.io/copro_profiles_fe/

## Code Samples

> Because code looks cool, I guess!

#### Django Worker Model

<img src="./images/Screen Shot 2019-11-19 at 12.42.18 PM.png" />

#### React App.js

<img src="./images/Screen Shot 2019-11-19 at 12.42.18 PM.png" />

## Contact and Contribute

Leave me an issue above or visit www.coproductions.com

Thanks for visiting!
