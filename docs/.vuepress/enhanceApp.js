import plugin from "../../src/plugin.js"

export default ({
    Vue,
}) => {
    Vue.mixin({
        mounted(){
            Vue.use(plugin)
            import("../../src/components.js")
        }
    })
}