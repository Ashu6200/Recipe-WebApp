# Task

## Architecture App are:

- App title + Favicon
- Styled Components
- Router (navigation)
- Redux vs Context API
- Redux toolkit & Redux persist

# Section-1 ENVIRONMENT SETUP
## Use the following command to add new react project without installing react CLI globally:
- $ npx create-react-app myapp
- $ cd myapp
- $ npm start
This will create a react js web app in a directory called “myapp” and run the project in the development environment on your default browser. It will also watch for the changes and perform hot-reloading for the best development experience.

# Section-2 FOLDER STRUCTURE
![folder](https://user-images.githubusercontent.com/109691178/217612995-543b9276-e00e-4046-85be-e9cd62697c73.PNG)

First, we’ll restructure the application code to make it more robust and scalable. This will make it easy to on-boarding new resources by defining a common approach for the development process.

/src/index.js :
- It is the default entry point of every react application. There are no changes in this file except cleanup.
- remove the app.css import & delete that file. I prefer to use only one global CSS file i.e. index.css for our project.
- delete everything from “/src/App.css” and update it with global styles.
- 
/assets :
As the name suggests, all the static assets should reside here.




![Home](https://user-images.githubusercontent.com/109691178/217557303-43a8a045-4432-4f81-9a57-ddc253004011.PNG)
![Recipe](https://user-images.githubusercontent.com/109691178/217557570-f9306229-0430-43fd-a593-e3b970ef31c9.PNG)
![Profile width recipe](https://user-images.githubusercontent.com/109691178/217557503-6d68b81b-a1d8-4602-9f28-3da7fe4a2e19.PNG)
![Profile with recipe](https://user-images.githubusercontent.com/109691178/217557512-5fe1cf3c-96a4-44da-bbb8-7e84845c7e65.PNG)

