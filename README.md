# A Web Developers Journey Blog
This is going to be a blog that new web developers can contribute to, while learning to be a web developers.  A place to share with others their issues and triumphs.

## What is working?
Right now test posts are being pulled from the database and displayed on both the main (no log in required page) and Dashboard (login required) pages

## What is needed?
There are still a few things to add

### 1) Register page
This will need to be a form to register new general users so that they can add new blog posts

1. A page will need to be created to register and form on the page
2. No role is needed as default is set to general user
3. Required entries will be on the API documentation
4. API link `/api/auth/register` (database is up and running routes are created)
5. New users should land on the `/dashboard` page upon successful creation

### 2) General User page
This page is where they will add their blog posts

1. A page will be needed and form created
2. API link `/posts` (database is up and running routes are created)
3. Link to this page should be from their dashboard
4. Should have back links to Dashboard and Logout like current Admin page

### 3) Dashboard update
The following updates should be made to the dashboard page

1. Show current users name or user name
2. Link to general user page (unless admin then to admin page)
3. Show all the posts that the current user has created
4. Update / Delete buttons for current users posts

### 4) Admin update
The following updates can be made to the Admin page

1. List of all posts and an update/delete button for all posts as this is the admin
2. Link to General user page as well so that even logged in as Admin you can see what posts you have made and update/delete them
3. Link to show all users, their names, email

### 5) Future updates
These are other ideas to add.

1. Ability to have a basic user comment on blog posts
2. general users and admin users can delete comments on posts
3. Short versions of the blog posts that are clickable to show full post in new page
4. About the author pages where the general users or authors can have a link to their social media or portfolios

## API base URL
https://beedev-blog-api.herokuapp.com

1. Documentation for API is being created and will be found directly on the base url.
2. Database tables are created, routes are still being added.

## Rules
1. Do not push to master branch
2. Create your own branch and create a pull request
3. Do not merge any pull requests.

# Questions?
Please feel free to reach out to Melissa Longenberger (owner):
1. melissa@beedev-services.com 
2. Slack Channel = https://join.slack.com/t/beedev-itservices/shared_invite/zt-i21p28jo-P3LBfEjpMRCO7yxwmqA7Og

## Run app
1. Clone repo
2. Create your own branch
3. npm install
4. npm start