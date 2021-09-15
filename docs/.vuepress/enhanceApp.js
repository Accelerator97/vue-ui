import Button from '../../src/button.vue';
import ButtonGroup from '../../src/button-group.vue';
import Input from '../../src/Input';
import Row from '../../src/row';
import Col from '../../src/col';
import Content from '../../src/content';
import Header from '../../src/header';
import Footer from '../../src/footer';
import Layout from '../../src/layout';
import Sider from '../../src/sider';
import Toast from '../../src/toast';
import plugin from '../../src/plugin';
import Tabs from '../../src/tabs';
import TabsItem from '../../src/tabs-item';
import TabsBody from '../../src/tabs-body';
import TabsHeader from '../../src/tabs-header';
import TabsPane from '../../src/tabs-pane';
import Collapse from '../../src/collapse';
import CollapseItem from '../../src/collapse-item';
import Popover from '../../src/popover';


export default ({
    Vue
}) => {
    Vue.component('g-button', Button);
    Vue.component('g-button-group', ButtonGroup)
    Vue.component('g-input', Input)
    Vue.component('g-col', Col)
    Vue.component('g-row', Row)
    Vue.component('g-content', Content)
    Vue.component('g-layout', Layout)
    Vue.component('g-header', Header)
    Vue.component('g-footer', Footer)
    Vue.component('g-sider', Sider)
    Vue.component('g-toast', Toast)
    Vue.use(plugin)
    Vue.component('g-tabs', Tabs)
    Vue.component('g-tabs-body', TabsBody)
    Vue.component('g-tabs-item', TabsItem)
    Vue.component('g-tabs-pane', TabsPane)
    Vue.component('g-tabs-header', TabsHeader)
    Vue.component('g-popover', Popover)
    Vue.component('g-collapse', Collapse)
    Vue.component('g-collapse-item',CollapseItem)
    
}