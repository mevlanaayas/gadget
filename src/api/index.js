import axios from 'axios'
import * as resource from './resources.js'

export default {
    GetNotes: function (options) {
        return axios.post(resource.Notes, {...options})
    }
}
