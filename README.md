# Task

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
/src/utils :
- As the name suggests, all the static assets should reside here.

/src/pages :
-  All pages which route through are page folder.

/src/components :
- All components are in this folder.
- Only shared components used across features are placed here.

/src/store
- It holds all the redux resources at one place.
- This includes action creators, reducers and a redux store of our app.

/

# Section-3 ARCHITECTURE — DEVELOP / ADD FEATURES
![image](https://user-images.githubusercontent.com/109691178/217615645-b6ba61d1-3e08-437d-94b1-02a2505bd078.png)

Development thumb rules before we begin:
As a general rule, if a module (a utility, component, etc.) is only used within another module, then I want it nested in the directory structure as shown above.
We are not ejecting our react app. It is an irreversible process. There are workarounds for the limitations like minify/uglify, drop consoles and few other production ready accomplishments.
All the code will reside strictly within the “/src” directory (Exceptions can be any static assets in /public if required.)
Our app should be production ready and we don’t want all the environments’ configurations bundled together in each build. (Imagine each build has configs of your dev, stage, uat & prod environments all together). Thus, we will use the universally accepted approach of environment variables for the same.
Unit testing is important, although we are not focusing on the same in this story.
CI pipeline can be a bonus (Info on GitLab CI implementation in this story)


## Scrrenshot
![Home](https://user-images.githubusercontent.com/109691178/217557303-43a8a045-4432-4f81-9a57-ddc253004011.PNG)
![Recipe](https://user-images.githubusercontent.com/109691178/217557570-f9306229-0430-43fd-a593-e3b970ef31c9.PNG)
![Profile width recipe](https://user-images.githubusercontent.com/109691178/217557503-6d68b81b-a1d8-4602-9f28-3da7fe4a2e19.PNG)
![Profile with recipe](https://user-images.githubusercontent.com/109691178/217557512-5fe1cf3c-96a4-44da-bbb8-7e84845c7e65.PNG)



https://user-images.githubusercontent.com/109691178/217616775-6f3c0dad-468b-477f-b24d-fa34185558ac.mp4

