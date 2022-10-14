/* eslint-disable prettier/prettier */
import utility from 'src/utility/utility'

const prod = {
  url: {
    // API_URL: 'http://35.224.190.237:2526',
    API_URL: 'https://sigcen.herokuapp.com/'
  },
}
const dev = {
  url: {
    API_URL: 'https://sigcen.herokuapp.com/',
  },
}

function getEnvConfig() {
  var config
  if (utility.removeSpace(process.env.REACT_APP_ENV_VAR) === 'development') {
    config = dev
  } else {
    config = prod
    // config = dev
  }
  console.log(config)
  return config
}

export const ServerConfig = getEnvConfig()
