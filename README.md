# Site Den NodeJs Content Management System (CMS) #

![Image of Siteden Logo](https://kevant.com/siteden/SiteDen-nodejs-logo.png)

## Overview ##
Site Den is a content management system built with the following tech:
* NodeJs
* Mongo DB
* Express
* Handlebars

## Table of Contents ##
1. [Project Status](#project-status)
1. [Goals And Motivation](#goals-and-motivation)
1. [Setup](#setup)


## Project Status ##
Overall, the project is in an **early POC and Planning Phase**. Here is a list of features and their associated status. The features in the "Complete" section indicate parts of the application that have reached the initial POC stage. **This project should no be used in a production setting until the planned security features have been implemented.**

**Complete Features**:
* Serve dynamic data-driven content
* Create custom content types (ie: Pages, Menus, Blog Posts, Books, Movies, etc)
* Create custom field types to be used as the building blocks for content types (ie: Textbox, Select List, Tags, Layout, etc)
* Create content, each instance with it's own unique URL
* Bootstrap based admin theme
* Bootstrap based front end theme

**Planned Features**:
* Security (User managements, roles, login, registration, etc)
* Themes, ability to switch front end theme
* Theme Library, collection of pre-built front end theme
* Modules, extend capabilities AND extend/override core functionality

## Goals And Motivation ##
In short, the goal of this project is to create a NodeJs based CMS with the flexibility of Drupal and the front end editing capabilities of some of Wordpress' top page builder plugins.

The audience for this CMS project in order of precedence are:
1. Web Developers
1. Web Designers
1. Site Builders (Non-technical)

Ultimately this project will allow developers to build complex web applications, not just websites with the goal of cutting down development time by providing basic core functionality similar on most web application projects.

Modules can be built (using NodeJs) or added from the community repository. This allows the system to be extended not only in meeting custom requirements but also the alteration of core functionality (Similar to Drupal).

I started this project because I have established a recent affinity to NodeJs although I'm primarily a Asp.Net/C#/SQL Server developer by day. There wasn't an existing NodeJs CMS project with lofty enough goals to perhaps someday become a highly trusted web application platform/CMS.

### Setup ###

1. Make sure Mongo Db is running: `mongod`
1. Edit the `mongoUrl` and `dbName` setting in `/routes/mongo-dal.js`
1. Install dependencies with `npm install`
1. To run the app: `npm start`
1. To Debug the app: Use the built in debug from VS Code