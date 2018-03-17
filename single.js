const MainApp = function () {
  if (MainApp.instance) {
    return MainApp.instance
  }
  MainApp.instance = this

  this.routes = MainApp.routes
  this.currentRoute = null

  this.init()
}

MainApp.routes = {
  'home-view': {
    'render': function () {
      console.log('>>>> Home')
    }
  },
  'app-view': {
    'render': function () {
      console.log('>>>> App')
    }
  }
}

MainApp.prototype = {
  init: function () {
    console.log('Rakendus läks tööle')

    window.addEventListener('hashchange', this.routeChange.bind(this))

    if (!window.location.hash) {
      window.location.hash = 'home-view'
    } else {
      this.routeChange()
    }
  },

  routeChange: function (event) {
    this.currentRoute = location.hash.slice(1)
    if (this.routes[this.currentRoute]) {
      this.updateMenu()

      this.routes[this.currentRoute].render()
    } else {
      /// 404 - ei olnud
    }
  },

  updateMenu: function () {
    // http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript
    document.querySelector('.active-menu').className = document.querySelector('.active-menu').className.replace('active-menu', '')
    document.querySelector('.' + this.currentRoute).className += ' active-menu'
  }
}

// kui leht laetud käivitan app'i
window.onload = function () {
  const app = new MainApp()
  window.app = app
}
