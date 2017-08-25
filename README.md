# SVO
A webpage that showcases local seattle musicians

## Planning

1. Configuration/dependencies
  * Angular2
  * Firebase
  * Typescript
  * Node/NPM
  * Bower

2. Specs
  * Spec 1: User can view list of music, user can click an artist, user can get more information and links to musicians
  * Spec 2: Admin can have a distinct page/route, can see all music, can add, edit, and delete music

3. Integration
  * Component for Viewing Music
  * Component for Viewing Music Details
  * Component for Editing Music
  * Component for Creating Music
  * Component for Deleting Music

4. UX/UI
  * Include and modify bootstrap
  * Develop custom style

5. Polish (Wish List for future)
  * Clean up page layout with html, css, and bootstrap
  * add some type of logo to index
  * Make README awesome

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

## Setting Up Firebase
1. In src/app/ create a file called api-keys.ts
2. Add the following code:
  * export const  masterFirebaseConfig = {
  * apiKey: "xxxx",
  * authDomain: "xxxx",
  * databaseURL: "xxxx",
  * storageBucket: "xxxx",
  * messagingSenderId: "xxxx"
  * };
3. Replace the x's with your values.
4. (optional) if you wish to work with sample data already made, import the svo-music-export.json.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
