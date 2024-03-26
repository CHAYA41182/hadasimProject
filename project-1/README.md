# מטלת בית הדסים 4.0

## תרגיל :1 מערכת ניהול קורונה לקופת חולים 


### Built With

#### The project was built using the following technologies:

##### server side:

* server side: [![Node.js][Node.js]][Node.js-url]
* server framework: [![Express.js][Express.js]][Express.js-url]
* Databases:  [![MongoDB][MongoDB]][MongoDB-url]
*  Database ORM: [![Mongoose][Mongoose]][Mongoose-url]

additionally, the following packages were used:
*  Validation: [![joi][joi]][joi-url]
*  File Upload: [![multer][multer]][multer-url]


##### client side:
* client side: [![React.js][React.js]][React-url] framework
* api and state management: [![redux-toolkit][redux-toolkit]][redux-toolkit-url]

additionally, the following packages were used:
* form management: [![formik][formik]][formik-url]
* form validation: [![yup][yup]][formik-url]


## Getting Started

### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```
  
### Installation
 Clone the repo
```sh
   git clone https://github.com/CHAYA41182/hadasimProject
```
###### server side:
install required packages:
```sh
    cd project-1
    cd server
    npm install

 ```

###### client side:
install required packages:

 ```sh
    cd project-1
    cd client
    npm install

 ```
### Usage
###### server side:
```sh
    cd project-1
    cd server
    npm start

```
###### client side:
 ```sh
    cd project-1
    cd client
    npm start

 ```



### Screenshots
#### home page:
![home-page-screen-shot](https://github.com/CHAYA41182/hadasimProject/assets/66823881/055686ac-a904-4f0d-ba82-71e3f97266d6)
#### list of members:
![list-members-screen-shot](https://github.com/CHAYA41182/hadasimProject/assets/66823881/9d9f541b-8ac7-40a1-81a5-5cbae9d23824)
#### add member:
![add-member-screen-shot](https://github.com/CHAYA41182/hadasimProject/assets/66823881/d2c4d7e9-a02b-4cce-a0cd-0c5786633e2d)
#### corona information:
![corona-detiles-screen-shot](https://github.com/CHAYA41182/hadasimProject/assets/66823881/6dc4714c-2bc3-41ff-b548-5ae9cb7fcce4)



### Architecture Overview

The project follows an architecture pattern of the three layers: repository, services and controllers.

###### Repository layer:
The repository layer is responsible for interacting with the database. It contains the functions that retrieve the data from the database, including CRUD (Create, Read, Update, Delete) operations. In this project, we use the Mongoose ORM to define schemas and models, which are then used by the repository layer to perform database operations.

##### Service Layer:
The service layer contains the business logic of the application, and the holdings on the data. In this project the service layer uses the JOI package for validations.

##### The controller layer:
The controller layer acts as an interface between client-side requests and application logic. He receives incoming inquiries from the client, delegates them to the appropriate service for processing and sends the answer back to the client.

#### Server-Side API Endpoints:

1. **GET /api/members**: Retrieves a list of all members.
2. **GET /api/members/:id**: Retrieves details of a specific member by ID.
3. **POST /api/members**: Creates a new member.
4. **PUT /api/members/:id**: Updates details of a specific member by ID.
5. **DELETE /api/members/:id**: Deletes a specific member by ID.
6. **POST /api/members/uploadImage/:id**: Uploads an image for a specific member.


#### Middleware and Utilities:

The system utilizes middleware for file uploads using Multer to handle multipart/form-data. Additionally, Joi is used for request data validation.

#### Database Interaction:

The server interacts with a MongoDB database using Mongoose ORM for defining schemas and models.

schema of the information in the database:

![סכמת מסד נתונים drawio](https://github.com/CHAYA41182/hadasimProject/assets/66823881/48211721-795c-44ef-b69d-eec6ed06a30a)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node.js-url]: https://nodejs.org/en/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express.js-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Mongoose]: https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logoColor=white
[Mongoose-url]: https://mongoosejs.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Material-UI]: https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white
[Material-UI-url]: https://material-ui.com/
[redux-toolkit]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[redux-toolkit-url]: https://redux-toolkit.js.org/
[formik]: https://img.shields.io/badge/Formik-FF69B4?style=for-the-badge&logoColor=white
[formik-url]: https://formik.org/
[yup]: https://img.shields.io/badge/Yup-FF69B4?style=for-the-badge&logoColor=white
[react-apexcharts]: https://img.shields.io/badge/ApexCharts-FF69B4?style=for-the-badge&logoColor=white
[react-apexcharts-url]: https://apexcharts.com/
[react-router-dom]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[react-router-dom-url]: https://reactrouter.com/
[react-icons]: https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react-icons&logoColor=white
[react-icons-url]: https://react-icons.github.io/react-icons/
[cors]: https://img.shields.io/badge/cors-20232A?style=for-the-badge&logo=cors&logoColor=61DAFB
[cors-url]: https://www.npmjs.com/package/cors
[dotenv]: https://img.shields.io/badge/dotenv-20232A?style=for-the-badge&logo=dotenv&logoColor=61DAFB
[dotenv-url]: https://www.npmjs.com/package/dotenv
[joi]: https://img.shields.io/badge/joi-20232A?style=for-the-badge&logo=joi&logoColor=61DAFB
[joi-url]: https://www.npmjs.com/package/joi
[multer]: https://img.shields.io/badge/multer-20232A?style=for-the-badge&logo=multer&logoColor=61DAFB
[multer-url]: https://www.npmjs.com/package/multer







