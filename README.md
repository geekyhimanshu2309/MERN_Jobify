# Client

 ### Track your job search
 Project in Action- [Client](https://www.jobify.live/)

 #### Support
  Find the App Useful? [You can always buy me a coffee](https://www.buymeacoffee.com/johnsmilga)

 #### Run the app locally
 - npm run install-dependencies
 - rename .env.temp to .env
 - setup values for -MONGO_URL, JWT_SECRET, JWT_LIFETIME
 - npm start
 - visit url https://localhost: 3000/

 #### Setup React App
 
 - create 'client' folder
 - open terminal
 - cd client
 - npx create-react-app
 - npm start
 - set editor/browser side by side
 - copy/paste assets from complete project

 #### Spring Cleaning

 - in src remove
 - App.css
 - App.test.js
 - logo.svg
 - reportWebVitals.js
 - setUpTests.js
 - fix App.js and index.js

 #### Title and Favicon

 - change title in public/index.html
 - replace favicon.ico in public
 - resource (favicons) [https://favicon.io/]


 #### Normalize.css and Global Style
 - CSS in JS
 - saves time on the setup
 - less lines of css
 - speeds up the development
 - normalize.css
 - small CSS file that provides cross-browser consistency in the default styling of HTML elements.
 - (normalize) [https://necolas.github.io/normalize.css/]
 - npm install normalize.css
 - import 'normalize.css' in index.js
 - SET BEFORE 'index.css'
 - if any questions about normalize or specific styles
 - Coding Addict (Default Starter) [https://youtu.be/UDdyGNlQK5w]
 - Repo (Default Starter) [https://github.com/john-smilgo/default-starter]

#### Landing Page

- zoom level 175%
- markdown preview extension
- get something on the screen
- react router and styled components right after
- create page directory in the source
- for now Landing.js
- create component (snippets extension)
- setup basic return
```js
    <h4>Landing Page</h4>
```
- import logo.svg and main.svg
- import Landing in App.js and render

#### Styled Components

- CSS in JS
- Styled components
- have logic and styles in component
- no name collisions
- apply javascript logic
- [Styled Components Docs ] (https://styled-components.com/)
- [Styled Components Course] (https://www.udemy.com/course/styled-components-tutorial-and-project-course/?)
(   npm install styled-components
    import styled from 'styled-components'  
    const El = styled.el    )
- no name collisions, since unique class
- vscode styled components extension
- colors and bugs
- style entire react component
(
    const Wrapper = styled.el
    const Component = () => {
        return (
            <Wrapper>
                <h1>Component</h1>
            </Wrapper>
        )
    }
)
- only responsible for styling
- wrappers folder in assets

#### Logo and Images

- logo built in Figma
- Cool Images(Undraw.co)

#### Logo

- create components folder in source
- create Logo.js
- move import and image logic
- export as default
- utilize index.js

#### React Router

- version 6
- React route docs
( npm install history@5 react-router-dom@6 )
- import four components
(
    import { BrowseRouter, Routes, Route, Link } from 'react-router-dom'
)
- connect to browser's URL with BrowserRouter
- Routes instead of switch
- go to Landing.js

#### Setup Pages

- create Error, Register, DashBoard pages
- basic return
- create index.js
- import all the pages
- export one by one
- basically the same, as in components
- import App.js
- add to element={}
- remove temp router

#### Auto Imports 

- use while developing
- only sparingly while recording
- better picture
- messes with flow
- just my preference
- still use them, just one all the time

#### Register Page- Setup

- show preview in Browser and themes

#### FormRow Component

- create FormRow in components
- setup import/Export
- setup one for email and password
- hint 'type.name.value'

#### Alert Component

- right now setup as component
- create Alert in components
- setup import/export
- alert danger or alert-success
- eventually setup in global context
- showAlert in initialState (true||false)
- right after h3 login

#### Global Context

- in src create context directory
- actions.js
- reducer.js
- appContext.js
- switch to global showAlert

#### useReducer

- React tutorial
- useReducer vs redux
- multiple reducers vs one

#### Display Alert

- setup imports (reducer and appContext)
- get displayAlert function

#### Clear Alert

- technically optional
- setup imports (reducer and appContext)

#### Setup Server

- stop the dev server in client
- cd ..
- start setting up our server
- setup package.json
- create server.js
- console.log('server running')

#### Nodemon and Basic express server

- npm install nodemon --save-dev
- npm install express

#### Not found middleware

- in the root create <b>Middleware</b> folder
- not-found.js
- setup function
- return 404 with message 'Route does not exist'
- import in server.js
- make sure to use .js extension
- place after home route

#### Error middleware

- in the middleware create error-handler.js
- setup function
- accept 4 parameters, first one error
- log error
- return 500
- json({msg:'there was an error'})
- import in the server.js
- make sure to use .js extension
- place it last
- eventually handle Mongoose Errors, just like in the node-express
- showcase with async errors

#### ENV Variables

- import dotenv from 'dotenv'
- dotenv.config()
- create .env
- PORT = 4000
- .gitignore
- /node_modules
- .env

#### Connect to MongoDB

- switched back to PORT:5000
- remove Error from '/'
- existing mongoDB atlas account
- create db folder
- create connect.js
- setup connectDB(url)
- in server.js create start() function
- get connection string
- setup as MONGO_URL in .env
- provide credentials add DB Name

#### Auth Controller and Route Structures

- create <b>controllers</b>
- authControllers.js
- create functions
```js
export { register, login, updateUser }
```
- return res.send('function name')
- create <b>routes</b> folder
- authRoutes.js
- setup express router
- import functions from authController.js
- import authRouter in server.js

#### Jobs Controller and Route Structure

- jobsController.js
- create functions
- return res.send('function name')
- jobsRoutes.js
- setup express router
- import functions from jobsController.js
- in server.js jobsRouter

#### Postman 

- URL global user
- JOBIFY Collection
- auth and jobs folders
- setup routes

#### User Model

- <b>models</b> folder
- User.js
- setup schema
- name, email, password, lastName, location
- all {type: String}

#### Validate email

- [Validator Package] (https://www.npmjs.com/package/validator)
- import in User.js
- validator.isEmail

#### Register User - Initial Setup

- authController
- import User model
- setup temporary try/catch
- await User.create(req.body)
- if success 201 with json({user}) (temp)
- if error 500 with json({msg:'there was an error'})

#### Pass Error to Error Handler

- next(error)

#### Express-Async-Error Package

- remove try/catch
- [Express-Async-Errors] (https://www.npmjs.com/package/express-async-errors)
```sh
npm install express-async-errors
```
- in server.js
- import 'express-async-errors'
- use throw Error('error') instead of next(error)

#### Http Status code

- constants for status codes
- personal preference
- provides consistency
- less bugs
- easier to read/manage
- [http Status Codes](https://www.npmjs.com/package/http-status-codes)
```sh
npm install http-status-codes
```
- import/setup in authController and error-handler
- setup defaultError

#### Custom Errors

#### Refractor Errors

- create errors folder
- create custom-api, bad-request, not-found, index.js files
- add proper imports
- setup index.js just like in the front-end
- import {BadRequestError} in authController
- gotcha "index.js"

#### Hash Passwords

- one way street, only compare hashed values
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
```sh
npm install bcryptjs
```
- import bcryptjs in User model
- await getSalt(10)
- await hash(password,salt)
- await compare(requestPassword, currentPassword)
- [mongoose middleware](https://mongoosejs.com/docs/middleware.html)
- UserSchema.pre('save', async function(){"this" points back to UserSchema})

#### Mongoose - Custom Instance Methods

[Custom Instance Methods](https://mongoosejs.com/docs/guide.html#methods)

- UserSchema.methods.createJWT = function(){console.log(this)}
- register controller
- right after User.create()
- invoke user.createJWT()

#### JWT

- token
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
```sh 
npm install jsonwebtoken
```
- User Model
- import jwt from 'jsonwebtoken'
- jwt.sign(payload, secret, options)
- createJWT
```js 
return jwt.sign({userId: this._id},'jwtSecret',{expressIn:'1d'})
```

#### JWT_SECRET and JWT_LIFETIME

- [Keys Generator](https://www.allkeysgenerator.com/)
- RESTART SERVER!!!

#### Complete Register

- password: {select:false}
- complete response

#### Concurrently 

- front-end and backend (server)
- run separate terminals
- [concurrently](https://www.npmjs.com/package/concurrently)
```sh
npm install concurrently --save-dev
```
- package.json
```js
// --kill-others switch, all commands are killed if one dies
// --prefix client-folder
// cd client && npm start
// escape quotes

"scripts":{
    "server":"nodemon server --ignore client"
    "client":"npm start --prefix client"
    "start":"concurrently --kill-others-on-fail \"npm run server"\ \"npm run client\""
},
```

#### Cors Error 

[Cors Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/cors)
- two fixes

#### Cors Package

```sh 
npm install cors
```
```js
```

#### Proxy

- access from anywhere
- don't want to use full url
[cra proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/)
```js
"proxy":"http://localhost:5000"
```
- my preference to remove trailing slash
- restart

#### Register User- Setup

```js
appContext.js
const initialState = {
    user: null,
    token: null,
    userLocation: '',
}
```
- actions.js REGISTER_USER_BEGIN, SUCCESS,ERROR
- import reducer, appContext

```js
appContext.js
const registerUser = async(currentUser) => {
    console.log(currentUser)
}
```
- import in Register.js
``` js
Register.js
const currentUser = {name,email,password}
if(isMember){
    console.log('already a member')
}else{
    registerUser(currentUser)
}
return(
    <button type='submit' className= 'btn btn-block' disable = {isLoading}>submit</button>
)
```

#### Axios

-[axios docs](https://axios-http.com/docs/intro)
```sh
npm install axios
```

#### Navigate to Dashboard

```js
Register.js
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const {user} = userAppContext()
    const navigate = useNavigate()

    useEffect(() => {
        if(user){
            setTimeout(() => {
                navigate('/')
            },3000)
        }
    },[user, navigate])
}
```
#### Local Storage

```js
appContext.js
const addUserToLocalStorage = ({user,token, location}) =>{
    localStorage.setItem('user',JSON.stringify(user))
    localStorage.setItem('token',token)
    localStorage.setItem('location',location)
}
const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('location')
}
const registerUser = async (currentUser) => {
    addUserToLocalStorage({
        user,
        token,
        location,
    })
}

// set as default

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')

const initialState = {
    user: user ? JSON.parse(user): null,
    token: token,
    userLocation: userLocation || '',
    jobLocation : userLocation || '',
}
```

#### Morgan Package 

 - http logger middleware for node.js
 - [morgan docs](https://www.npmjs.com/package/morgan)

 ```sh
 npm install morgan
 ```
 ```js
 import morgan from 'morgan'

 if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
 }
 ```

 #### Login Controller

 ```js 
 authController.js
 const login = async (req,res) => {
    const {email,password}
 }
```
 #### UnauthenticatedError

 - unauthenticated.js in errors
 - import/export
 ```js
 import { StatusCodes} from 'http-status-codes'
 import CustomAPIError from '/custom-api.js'

 class UnauthenticatedError extends CustomAPIError{
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
 }
 ```

 #### Compare Password

 ```js 
 User.js in models
 UserSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
 }
 ```

 ```js
 authController.js
 const login = async(req,res) => {
    const {email,password} = req.body
    if(!email || !password){
        throw new BadRequestError('Please provide all values')
    }
    const user = await User.findOne({email}).select('+password')
    if(!user){
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const token = user.createJWT()
    user.password = undefined
    res.status(StatusCodes.OK).json({user,token, location: user.location })
 }
 ```

 #### Login User - Setup

 - actions.js LOGIN_USER_BEGIN, SUCCESS, ERROR
 - import reducer, appContext

 ```js
 appContext.js
 const loginUser = async (currentUser) => {
    console.log(currentUser)
 }
 ```

 - import in Register.js
 ```js
 Register.js

if( isMember ){
    loginUser (currentUser)
}else{
    registerUser(currentUser)
}
```

#### Login User - Complete

```js
appContext.js
const loginUser = async(currentUser) =>{
    dispatch({type: LOGIN_USER_BEGIN})
    try{
        const {data} = await axios.post('/api/v1/auth/login', currentUser)
        const {user,token, location} = data
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: {user,token,location},
        })
        addUserToLocalStorage({user,token,location})
    }catch (error){
        dispatch({
            type: LOGIN_USER_ERROR,
            payload: { msg: error.response.data.msg},
        })
    }
    clearAlert()
}
```

```js
reducer.js
if(action.type === LOGIN_USER_BEGIN){
    return{
        ...state,
        isLoading: true,
    }
}
if(action.type === LOGIN_USER_SUCCESS) {
    return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: 'success',
        alertText: 'Login Successful! Redirecting...',
    }
}
if(action.type === LOGIN_USER_ERROR){
    return{
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText:  action.payload.msg,
    }
}
```

#### Nested Pages in React Router 6

#### DashBoard  pages

- delete Dashboard.js
- fix imports/exports
- replace in home route
```js
<Route path='/' element={<div>dashboard</div>}/>
```
- create <b>dashboard</b> directory in pages
- create AddJob, AllJobs, Profile, Stats, SharedLayout, index.js
- setup basic returns
```js
return <h1>Add Job Pages</h1>
```
- export all with index.js (just like components)
- import all pages in App.js

#### Nested Structure

```js
App.js
<Route path="/">
    <Route path="stats" element={<Stats/>} />
    <Route path="stats" element={<Stats/>} />
    <Route path="stats" element={<Stats/>} />
    <Route path="stats" element={<Stats/>} />
</Route>
```

#### Shared Layout

```js 
App.js
<Route path='/' element={<SharedLayout/>}>
```
```js
SharedLayout.js

import { Outlet, Link } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
const SharedLayout = () => {
    return(
        <Wrapper>
            <nav>
                <Link to='all-jobs'>all jobs</Link>
                <Link to='add-job'>add jobs</Link>
            </nav>
            <Outlet/>
        </Wrapper>
    )
}
export default SharedLayout
```

#### Protected Route

- create ProtectedRoute.js in pages
- import/export
- wrap SharedLayout in App.js

```js
<Route
    path = '/'
    element = {
        <ProtectedRoute>
            <SharedLayout/>
        </ProtectedRoute>
    }
/>
```
```js
#### ProtectedRoute.js

import {Navigate} from 'react-router-dom'
import {useAppContext} from '../context/appContext'

const ProtectedRoute = ({children}) => {
    const {user } = useAppContext()
    if(!user){
        return <Navigate to='/landing'/>
    }
    return children
}
```

#### Navbar, SmallSidebar, BigSidebar

- create Navbar, SmallSidebar, BigSidebar in components
- import Wrappers from assets/wrappers
- simple return
- import/export

```js
SharedLayout.js

import {Outlet} from 'react-router-dom'
import { Navbar, SmallSidebar, BigSidebar} from '../../components'
import Wrapper from '../../assets/wrappers/SharedLayout'

const SharedLayout = () => {
    const {user} = useAppContext()
    return(
        <>
        <Wrapper>
            <main className = 'dashboard'
                <SmallSidebar/>
                <BigSidebar/>
                <div>
                    <Navbar/>
                    <div className='dashboard-page'>
                    <Outlet/>
                    </div>
                </div>
            </main>
        </Wrapper>
        </>
    )
}
```   
#### React Icons

```sh
npm install react-icons
```

```js
Navbar.js

import Wrapper from '../assets/wrappers/Navbar'
import {FaHome} from 'react-icons/fa'
const Navbar = () => {
    return(
        <Wrapper>
            <h4>Navbar</h4>
            <FaHome/>
        </Wrapper>
    )
} 
export default Navbar
```

#### Navbar Setup

```js
Navbar.js
import { useState } from 'react'
import {FaAlignLeft, FaUserCircle, FaCareDown} from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import Logo from './Logo'
import Wrapper from '../assets/wrapper/Navbar'
const Navbar = () => {
    return (
        <Wrapper>
            <div className='nav-center'>
                <button
                    className='toggle-btn'
                    onClick={() => console.log('toggle sidebar')}
                >
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h3 className='logo-text'>dashboard</h3>
                </div>
                <div className='btn-container'>
                    <button className='btn' onClick={() => console.log('show logout')}>
                        <FaUserCircle />
                        john
                        <FaCareDown/>
                    </button>
                    <div className='dropdown show-dropdown'>
                        <button
                            onClick={() => console.log('logout user')}
                            className='dropdown-btn'
                        >
                        logout
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
```

#### Toggle Sidebar

```js
actions.js

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
```

- import/export 

```js
appContext.js

const initialState = {
    showSidebar: false,
}

const toggleSidebar = () => {
    dispatch({type: TOGGLE_SIDEBAR})
}
```

```js
reducer.js

if(action.type === TOGGLE_SIDEBAR){
    return {...state, showSidebar: !state.showSidebar }
}
```

```js
Navbar.js

const {toggleSidebar } = useAppContext()

return(
    <button className = 'toggle-btn' onClick={toggleSidebar}>
    <FaAlignLeft />
    </button>
)
```
#### Toggle Dropdown

```js
Navbar.js

const [showLogout, setShowLogout] = useState(false)

<div 
    className='btn-container'>
    <button
        className = 'btn' onClick={() => setShowLogout(!showLogout)}
    >
        <FaUserCircle />
            {user.name}
        <FaCaretDown />
    </button>
    <div className = {showLogout ? 'dropdown show-dropdown':'dropdown'}>
        <button onClick={() => logoutUser()} className='dropdown-btn'>
            logout
        </button>
    </div>
</div>
```

#### Setup Links

- create <b>utils</b> in the <b>src</b>
- setup links.js

#### Small Sidebar - Setup


#### Nav Links Component

- create NavLinks component
- styles still set from Wrapper
- also can setup in links.js, preference

#### REACT ROUTER UPDATE !!!

- [Stack Overflow](https://stackoverflow.com/questions/70644361/react-router-dom-v6-show-active-for-index-as-well-as-other-subroutes)

#### Big Sidebar

#### Postman - Set Token Programmatically

- register and login routes
- Tests
