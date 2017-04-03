import configDev from './dev';
import configPro from './prod';

var config = {};

if (process.env.NODE_ENV === 'development') {
  config = configDev;
} else if (process.env.NODE_ENV === 'production') {
  config = configPro;
}

export default config;
