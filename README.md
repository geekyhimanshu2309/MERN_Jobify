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
- no name collisons
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