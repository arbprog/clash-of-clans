const proccess = {
    dev: true,
};

export const site = {
    home: proccess.dev ? 'http://localhost:8080/' : 'https://tocode.ru'
}

export const app = {
    title: 'Clash of Clans',
}

export const links = [
    {
        title: "Home",
        alias: "home",
        url: "/"
    },
    {
        title: "About",
        alias: "about",
        url: "/about"
    },
];