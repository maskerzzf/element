import {makeInstaller} from '@element/utils'
import components from "./components.ts";
import '@element/theme/index.css'
const installer = makeInstaller(components)
export * from '@element/components'
export  default installer