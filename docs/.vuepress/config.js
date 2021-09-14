module.exports = {
    title: '咕噜UI',
    description: '一个简易的UI框架',
    plugins:['demo-container'],
    themeConfig: {
        sidebar: [
            {
                title: '入门',
                collapsable: true,
                children: ['/install/',
                    '/get-started/',],
            },
            {
                title: '组件',
                collapsable: true,
                children: [
                    ["components/button", "Button"],
                    ["components/switch", "Switch"]
                ]
            },
        ],
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/' },
            { text: '交流', link: 'https://google.com' },
        ]
    }

}