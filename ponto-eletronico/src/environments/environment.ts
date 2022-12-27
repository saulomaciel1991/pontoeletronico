// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/* export const environment = {
  production: false,
  title: 'Dev Environment Heading',
  apiURL: 'http://192.168.41.60:8090/rest',
  authorization: "Basic " + btoa("admin:")
}; */
export const environment = {
  production: false,
  title: 'Dev Environment Heading',
  apiURL: 'http://localhost:8084/rest',
  authorization: "Basic " + btoa("admin:12345")
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
