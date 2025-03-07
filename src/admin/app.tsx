import type { StrapiApp } from '@strapi/strapi/admin';
import Logo from './extensions/Logo.png'

export default {
  config: {
    locales: [ 'pt-BR', ],

    auth: {
      logo:Logo
    },

    menu: {
      logo:Logo
    },
    translations: {
      en: {
        'Auth.form.welcome.title': 'Orallin-Odontologia',
        'Auth.form.welcome.subtitle': 'Entre e Personalize seu Site!'
      },
      'pt-BR': {
        'Auth.form.welcome.title': 'Orallin-Odontologia',
        'Auth.form.welcome.subtitle': 'Entre e Personalize seu Site!'
      },
    },

  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
