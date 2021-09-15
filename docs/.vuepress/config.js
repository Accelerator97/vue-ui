module.exports = {
    title: '咕噜UI',
    description: '一个简易的UI框架',
    plugins:['demo-container'],
    sidebarDepth: 1,
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
                sidebarDepth: 0,
                children: [
                    ["components/button", "button - 按钮"],
                    ["components/input", "input - 输入框"],
                    ["components/grid", "grid - 网格"],
                    ["components/layout", "layout - 布局"],
                    ["components/toast", "toast - 气泡提示框"],
                    ["components/tabs", "tabs - 标签"],
                    ["components/collapse", "collapse - 折叠面板"],
                    ["components/popover", "popover - 弹出框"]
                ],
            },
        ],
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/' },
            { text: '交流', link: 'https://google.com' },
        ]
    }

}