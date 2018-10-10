import EventEmitter from 'events'
import storeProp from 'app/storeProp'
import fxios from 'tool/fxios'
import { base as api } from 'app/api'

@storeProp({
  rest: [
    {
      name: 'me',
      default: {},
      fetch: {
        url: api.me,
      },
    },
  ],
  setter: [
    {
      name: 'loading',
      default: true,
    },
  ],
})
class App extends EventEmitter {
  load = () => this.fetchMe().finally(() => this.setLoading(false))

  logout = () => fxios.get(api.logout)
}

export default new App()
