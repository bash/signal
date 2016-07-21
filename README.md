# signal
probably the smallest event dispatcher

## Inspiration
`Signal` is inspired by Chrome's Extension API (Example: https://developer.chrome.com/extensions/tabs#event-onUpdated)

## Usage

```js

class Router {

  constructor () {
    this.onRouteChanged = new Signal()
  }

  get route () {
    return this._route
  }  

  set route (route) {
    this._route = route
    this.onRouteChanged.dispatch(route)
  }
}

const router = new Router()

router.onRouteChanged.addListener((route) => {
  console.log(route)
})

router.route = '/'

```
