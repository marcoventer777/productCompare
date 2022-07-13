<div align='center'>

  <h1>Product / Price Compare</h1>

  ###### A place to view, compare and add products as an admin

  <img src='https://user-images.githubusercontent.com/95920140/178756603-4729dd60-71b1-47df-8cae-3e06effa64a4.png' alt="Product Compare Logo" />

</div>
<hr />

## Tech

#### Frontend

- [_Angular 13_](https://angular.io/)

#### Backend

- [_Express.js_](https://expressjs.com/)
- [_Serverless framework_](https://www.serverless.com/)

#### Database

- [_MS SQL Server_](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

#### Common

- [_Auth0_](https://auth0.com/) as an auth provider
- [_AWS_](https://aws.amazon.com/) as a cloud service

<hr />

## Getting the app running (Hypothetically)

##### Misc tools

- [_node_](https://nodejs.org/en/) - JS Runtime
- [_npm_](https://www.npmjs.com/) - Package manager for server side javascript
- [_npx_](https://www.npmjs.com/package/npx) - `npm` tool for running locally installed npm packages from cli

###### Backend

```shell
cd backend && npm i && npx serverless offline
```

- This will start up an express API wrapped in a serverless app on port 3000

###### Frontend

```shell
cd frontend && npm i && ng serve -o
```

- This will start up the angular frontend on port 4200

<hr />

##### Important to note: If you do not have the secrets used in backend and frontend, you will not be able to run the project locally. (That is by design)

<hr />

## Deployment

#### Frontend

- Firstly, frontend is built using Angular's cli, specifically `ng build`, and the build was then placed in an S3 Bucket.

#### Backend

- Express api was wrapped in a serverless application using the `npm` package `serverless-http` and then deployed using the serverless framework to AWS Lambda.

#### Database

- Our database is a MS SQL Server db and is hosted an AWS RDS

<hr />

#### Contributors

- [Amy Pegram](https://github.com/AmyPegramBBD)
- [Marco Venter](https://github.com/marcoventer777)
- [Waseem Ahmed](https://github.com/wasahmed)
- [Tshiamo Mahloko](https://github.com/tshiamomahloko)
- [Reece Peters](https://github.com/ReeceJamesPeters)
- [Fabio Sousa Vieira](https://github.com/FabioSVBBD)

<hr />

### Architectural Diagram of live instances on AWS

<div align='center'>
  <img src='https://user-images.githubusercontent.com/95920140/178762051-3a540466-3e61-4bc7-a3d8-814f43cd59f6.svg' alt='Architectural Diagram' />

<hr />

### Security measures implemented

#### Backend

- Helmet middleware to configure CSP (Content Security Policy) for Api headers (mitigates XSS, CSRF, XSS)
- Authentication and Authorization (Auth0) 
- Backend endpoints guarded using JWT.
- 'x-powered-by' hidden 
- npm libraries audit 

#### Frontend
- Captchas
- Offline Template compiler (ng build in Angular) - eliminates template injection. 
- CSRF (Cross Site Request Forgery): Built into Angular HTTP Client 
- XSSI (Cross Site Script Inclusion): Built into Angular HTTP Client 
- XSS (Cross Site Scripting): Angular does this by default by sanitizing possible string values that can contain script tags. 
- XSS solution: CSP (Content Security Policy): specify manually in index.html with custom policies: 
  - script-src 'self' 'unsafe-inline'; 
  - object-src 'none'; 
  - base-uri 'self';  
  - trusted-types angular;  
  - require-trusted-types-for 'script'; 
- npm libraries audit 
</div>
