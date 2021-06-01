import { App } from 'vue'
import {
    NavBar,
    Button,
    Cell,
    CellGroup,
    Icon,
    Col,
    Row,
    Popup,
    Cascader,
    Checkbox,
    CheckboxGroup,
    DatetimePicker,
    Field,
    Form,
    NumberKeyboard,
    PasswordInput,
    Picker,
    RadioGroup,
    Radio,
    Rate,
    Search,
    Slider,
    Stepper,
    Switch,
    Uploader,
    ActionSheet,
    DropdownMenu,
    DropdownItem,
    Loading,
    Overlay,
    PullRefresh,
    ShareSheet,
    Badge,
    Collapse,
    CollapseItem,
    Divider,
    Empty,
    List,
    Progress,
    Skeleton,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
    Tab,
    Tabs,
} from 'vant'


const plugins = [
    NavBar,
    Button,
    Cell,
    CellGroup,
    Icon,
    Col,
    Row,
    Popup,
    Cascader,
    Checkbox,
    CheckboxGroup,
    DatetimePicker,
    Field,
    Form,
    NumberKeyboard,
    PasswordInput,
    Picker,
    RadioGroup,
    Radio,
    Rate,
    Search,
    Slider,
    Stepper,
    Switch,
    Uploader,
    ActionSheet,
    DropdownMenu,
    DropdownItem,
    Loading,
    Overlay,
    PullRefresh,
    ShareSheet,
    Badge,
    Collapse,
    CollapseItem,
    Divider,
    Empty,
    List,
    Progress,
    Skeleton,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
    Tab,
    Tabs]

const vant = {
    install: function (app: App<Element>) {
        plugins.forEach(item => {
            app.component(item.name, item)
        })
    }
}

export default vant
