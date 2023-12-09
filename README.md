
# Blood Donation Application

The Blood Donation Application is a web platform designed to facilitate blood donation activities by connecting donors with those in need of blood. The application is built using the MERN stack (MongoDB, Express.js, React, Node.js).
<br/>
[Blood Donation Application Live](https://spiffy-lollipop-bbb8a6.netlify.app/)  ||  [Server Side Code Github](https://github.com/Md-Rakib-Hassan/blood-bank-server-side)

Admin email: admin@admin.com
<br/>
Admin password: admin@1A

## Table of Contents
1. [Introduction](#introduction)
   - [Purpose](#purpose)
   - [Scope](#scope)
2. [User Roles and Permissions](#user-roles-and-permissions)
   - [Role Management](#role-management)
3. [User Authentication (public)](#user-authentication-public)
   - [Registration](#registration)
   - [Login](#login)
4. [Dashboard (private🔒)](#dashboard-private)
   - [Donor Dashboard](#donor-dashboard)
   - [Admin Dashboard](#admin-dashboard)
   - [Volunteer Dashboard](#volunteer-dashboard)
5. [Home Page (public)](#home-page-public)
6. [Search Page (public)](#search-page-public)
7. [Blood Donation Requests (public)](#blood-donation-requests-public)
8. [Blood Donation Details Page (private🔒)](#blood-donation-details-page-private)
9. [Blog Page (public)](#blog-page-public)
10. [Donate Page](#donate-page)
11. [Terms and Conditions Page](#terms-and-conditions-page)
12. [FAQ Page](#faq-page)
13. [Responsive Design](#responsive-design)


## Introduction
### Purpose
The Blood Donation Application aims to create a user-friendly platform connecting blood donors with those in need, streamlining the blood donation process.

### Scope
The application includes features for user registration, blood donation requests, donor management, content management, and role-based access control. It is built using the MERN stack (MongoDB, Express.js, React, Node.js).

## User Roles and Permissions
### Role Management
- **Admin🌐:** Has access to all features, including user management, donation requests, and content management.
- **Donor🩸:** Can register, view donation requests, respond to them, and maintain their own profile.
- **Volunteer🤝:** Can create and manage donation requests.

## User Authentication(public)
### Registration
The registration page allows users to create an account with the following input fields:
- Email
- Name
- Avatar (using imageBB for avatar upload)
- Blood group
- District
- Upazila
- Password
- Confirm password

### Login
Users can log in using their email and password.

## Dashboard (private🔒)
The dashboard layout has a sidebar and is fully responsive.

### Donor Dashboard
#### Dashboard Home page🏠
This page displays a welcome message with the user’s name. Below the welcome section, donors see their three most recent donation requests. Each request includes:
- Recipient name
- Recipient location (district and upazila)
- Donation date
- Donation time
- Donation status (pending, in progress, done, canceled)
- Donor information (name, email)
- Edit button to modify the donation request
- Delete button to remove the donation request
- View button to see detailed information

#### My Donation Requests Page🩸
This page shows all of the donor's donation requests in tabular format with pagination and filtering options.

#### Create Donation Request Page🆕
This page includes a form to create a new donation request, with fields for requester name, requester email, recipient name, recipient location, hospital name, full address, donation date, donation time, and request message.

### Admin Dashboard
#### Dashboard Home Page🏠
This page includes a welcome section and three featured cards showing statistics for total users, total funding, and total blood donation requests.

#### All Users Page👤
This page displays all users' data in tabular format with pagination and filtering options based on user status. Each row includes user avatar, email, name, status, block/unblock button, make volunteer button, and make admin button.

#### All Blood Donation Request Page🩸
This page mirrors the "My Donation Requests Page" from the donor dashboard but provides admin access to manage all users' donation requests.

#### Content Management Page📝
This page allows admins to manage blog content. It includes an "Add Blog" button to create new blogs and displays existing blogs with filtering options. Admins can publish, unpublish, and delete blogs.

### Volunteer Dashboard
#### Dashboard Home Page🏠
This page is identical to the Admin Dashboard's home page.

#### All Blood Donation Request Page🩸
This page is similar to the Admin Dashboard's "All Blood Donation Request Page" but with limited permissions. Volunteers can see all blood donation requests, paginate, and update the donation status.

#### Content Management Page📝
This page is the same as the Admin Dashboard's Content Management Page but with restrictions. Volunteers can view, create, and edit blogs but cannot publish, unpublish, or delete.

## Home Page(public)
This page includes a navigation bar, banner with "Join as a donor" and "Search Donors" buttons, a featured section, contact form, and footer.

## Search Page(public)
This page includes a search form with fields for blood group, district, upazila, email, and a search button. The donor list is displayed below upon clicking the search button.

## Blood Donation requests(public)
This page shows all pending donation requests in card or tabular view, each including requester name, location, date, time, and a view button to see details.

## Blood Donation Details Page(private🔒)
This private page displays all information provided during the creation of a donation request. A donate button opens a modal with a form for donor name and email, confirming the donation and changing the status from pending to in progress.

## Blog Page(public)
This page shows all published blogs in a card or tabular format. Each blog has a title, content, and options for reading more.

## Donate Page
This page includes a form for entering a donation amount and card details securely using Stripe Elements.

## Terms and Conditions Page
This page contains the terms and conditions of the Blood Donation Application.

## FAQ Page
Frequently Asked Questions (FAQ) are available on this page with stylized content.

## Responsive Design
The entire website, including the dashboard, is designed to be responsive for various devices.