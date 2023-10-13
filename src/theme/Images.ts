import { ThemeVariables } from '../../@types/theme';

export default function ({}: ThemeVariables) {
  return {
    logo: require('./assets/images/logo-app.png'),
    banner: require('./assets/images/logo-app.png'),
    avatar: require('./assets/images/avatar.png'),
    sparkles: {
      topLeft: require('./assets/images/sparkles-top-left.png'),
      top: require('./assets/images/sparkles-top.png'),
      topRight: require('./assets/images/sparkles-top-right.png'),
      right: require('./assets/images/sparkles-right.png'),
      bottomRight: require('./assets/images/sparkles-bottom-right.png'),
      bottom: require('./assets/images/sparkles-bottom.png'),
      bottomLeft: require('./assets/images/sparkles-bottom-left.png'),
    },
    icons: {
      colors: require('./assets/images/colorswatch.png'),
      send: require('./assets/images/send.png'),
      translate: require('./assets/images/translate.png'),
      eyeHide: require('./assets/images/eye-hide.png'),
      eyeShow: require('./assets/images/eye-show.png'),
      notification: require('./assets/images/icon-notification.png'),
      homeLeft: require('./assets/images/icon-home1.png'),
      homeRight: require('./assets/images/icon-home2.png'),
      arrowRight: require('./assets/images/icon-arrow-right.png'),
    },
    animations: {
      schedule: require('./assets/animations/animation-schedule.json'),
    },
  };
}
