export const url = 'http://0.0.0.0:8000/api/v1/'

export const pages = {
    main: 'main',
    articles: 'articles',
    articleDetail: 'articleDetail',
    tours: 'tours',
    tourDetail: 'tourDetail',
    merch: 'merch',
    about: 'about',
    login: 'login',
    profile: 'profile'
}

export const links = [
    { page: pages.articles, to: '/articles', text: 'Статьи' },
    { page: pages.tours, to: '/tours', text: 'Туры' },
    { page: pages.merch, to: '/merch', text: 'Мерч' },
    { page: pages.about, to: '/about', text: 'О нас' },
]

export const tours = [
    {
      'name': 'gorniy-altay',
      'title': 'Горный Алтай',
      'dateinfo': 'С Июля по Август 2023',
      'img': 'static/gorniy.jpg'
    }
]

export const text_sign = {
    in: {
        title: 'Войдите, чтобы начать путешествие',
        vk: 'Войти через ВКонтакте',
        google: 'Войти через Google',
        password: 'Пароль',
        btn: 'Войти',
        link_text: 'Еще нет профиля? ',
        link: 'Зарегистрируйтесь'
    },
    up: {
        title: 'Создайте профиль, чтобы начать путешествие',
        vk: 'Создать через ВКонтакте',
        google: 'Создать через Google',
        password: 'Придумайте пароль',
        btn: 'Создать',
        link_text: 'Уже есть профиль? ',
        link: 'Войти'
    },
}

export const profile_btns = {
    favorites: {
        name: 'favorites',
        text: 'Избранное',
        icon: '/static/icon-favorites.svg'
    },
    trips: {
        name: 'trips',
        text: 'Мои поездки',
        icon: '/static/icon-trips.svg'
    },
    paid_articles: {
        name: 'paid_articles',
        text: 'Платные статьи',
        icon: '/static/icon-paid.svg'
    },
    settings: {
        name: 'settings',
        text: 'Настройки',
        icon: '/static/icon-settings.svg'
    },
    exit: {
        name: 'exit',
        text: 'Выход',
        icon: '/static/icon-exit.svg'
    },
}

export const toast_options = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
}
