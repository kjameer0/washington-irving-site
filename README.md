# Washington Irving YABC
This is the source code for www.washingtonirvingyabc.org. It is built with Next.js, TypeScript, and CSS Modules. Please contact Khalid Jameer to become a collaborator if you are assigned to work on this site.


## Build Pipeline
The build pipeline for this website goes like this.
  1. Content is updated in Contentful
  2. A Contentful Webhook is triggered
  3. The webhook sends a POST request to Github Actions
  4. Github Actions rebuilds the site and uploads it to the Google Cloud Storage Bucket

## Contentful
Changes made in Contentful (contact Khalid Jameer or the site administrator to become a collaborator on Contentful if you are assigned to work on this site) will trigger a Contentful webhook(Found on Contentful under Settings -> Webhooks) that will then trigger a github action that rebuilds the site and uploads it to the google cloud storage bucket associated with the website.



## SECRETS
The most important SECRETS are:
  1. Contentful API KEY
  2. Contentful SPACE KEY
  3. GCP CREDENTIALS
Both the Contentful API key and space key can be found on Contentful under Settings -> API keys. You can create a new one if you need to as long as it is also updated on Github Actions secrets.


## Google Cloud Storage Bucket
The site administrator should have the ability to add new collaborators to edit content.

## HMAC key and service accounts
Google Cloud offers service accounts (https://cloud.google.com/storage/docs/authentication/hmackeys) that allow the github actions to work.
Make sure you are granted sufficiently high level permissions as a collaborator. Ideally whoever maintains this site should have owner permissions.
Service Accounts (https://cloud.google.com/iam/docs/service-account-overview) are used to programmatically validate the Github action request to upload the website files to the storage bucket. There probably will not need to be an update to this service account, but if the credentials stop working and build actions fail, a new service account can be created to get new credentials. The credentials for GCP_CREDENTIALS will be JSON that has this format:
`
    {
      "type": "service_account",
      "project_id": "your-project-id",
      "private_key_id": "your-private-key-id",
      "private_key": "-----BEGIN PRIVATE KEY-----\nYourPrivateKeyHere\n-----END PRIVATE KEY-----\n",
      "client_email": "your-service-account-email@your-project-id.iam.gserviceaccount.com",
      "client_id": "your-client-id",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://accounts.google.com/o/oauth2/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/your-service-account-email%40your-project-id.iam.gserviceaccount.com"
    }
`


In the data directory at the root of the project resides all of the code that downloads all of the JSON and images from Contentful that contain the content for the website.
  1. contentful
    1. contentful-types.ts -> All of the types for the contentful content models. Some of them have overrides that make them more usable so be carefule when changing them. Make sure you add this app from github to your contentful to generate new types https://github.com/marcolink/cf-content-types-generator-app
    2. type-functions -> Contains utility functions that convert raw data form contentful to the final data format that will go into the page-data directory and the build-assets directory.
  2. contentful-api-functions -> functions that interact with the CDA(Contentful Delivery API)
    1. bannerText.ts -> fetching banner text
    2. pageContent.ts -> fetches all other page content(text, images, carousels)
  3. contentful-client.ts -> initializes the connection between the script and contentful content
  4. pre-build-script.ts -> loads all data for the website and places it into page-data and build-assets directories



This website uses React Router for SPA routing.
The list of page names with their corresponding url names are as follows:
  1. x page -> 'www.washingtonirvingyabc.org/x'
  2. home page -> ''
  3. about page -> 'about'
  4. counselor contact form page -> 'counselor-contact-form'
  5. site admin contact form page -> 'site-administrator-contact-form'
  6. counselor corner page -> 'counselor-corner'
  7. information request form page -> 'information-request-form'
  8. student support activites page -> 'student-support-activities'
  9. parents/families page -> 'parents-families'
  10. shared admissions page -> 'shared-admissions'
  11. staff directory page -> 'staff-directory'
  12. student corner page -> 'student-corner'
  13. teacher hub page -> 'teacher-hub'

  This is here because some pages are not found directly in the nav bar, so if a change needs to be made to a page not there then it helps to know what all of the page names are and where to find them.

## CSS
It is important to note that globals.css is used to style the carousels for the most part. CSS modules were not cooperating with react-responsive-carousel so it was necessary to use regular css to make changes to the component's class names.

## Images
Most if not all of the images are .webp. Try to compress and minimize the size of any images as much as you can. Website performance can be impacted by large files.

## Styles
As mentioned above, each component has its own styled component wrapper that stores the localized styles for that component.

Each component has its main styles and a media query to transition to desktop view. That media query is mostly for major layout shifts.

For the most part, styles read in order of appearance on screen, and are named based on containers they reside in.

As a general rule, pages are styled with flex layout, keeping sections centered in the main tag.

## Email
In the contact pages and information request page, HeroTofu is used to submit messages to their proper destination. The useContactForm hook form HeroTofu in the Contact Form page accomplishes the form post action for all forms. The HeroTofu API endpoints are stored in Contentful. The site admin should have a HeroTofu login info. If not a new account can be made and the endpoints can be changed on Contentful to send forms to the intended email address.

## Navigation
There are two nav bars, changes to navigation/routing should be reflected in both. Make sure that the JSX from one matches the other in structure for the routes, because they are not generalized. Adjustments have to be made deliberately.


## Pages
Creating a new pages means:

1. Creating a new folder in the app directory
2. Naming that folder the desired URL name
3. Adding a page.tsx and page.module.css file to the folder
4. Updating the Side Nav Bar and Mobile Nav bar and utils-NavBar.tsx to reflect new navigation structure
