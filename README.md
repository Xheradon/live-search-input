# Live Search Demo

![demo gif](https://github.com/Xheradon/live-search-input/blob/master/demo.gif?raw=true)

This project is meant to be a demo for a live search component. There are many things that are out of scope and would be
done differently in a real app.

## Requirements

- NodeJS ^v15.4
- Yarn or NPM (this guide wil be done taking yarn as default package manager)

## Express Server

This projects has an Express server in order to facilitate accesing a remote API. Its contents are inside the server
folder.

## Usage

- Navigate to the project directory
- Install all dependencies: `yarn install`
- Build the project files: `yarn build` or `yarn dev` in case we want to use a development version
- Navigate to the server directory: `cd server`
- Install all server dependencies: `yarn install`
- Start the server: `yarn start`
- Open `build/index.html` with your default browser and use the demo