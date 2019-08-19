//入口文件引入所有的静态资源

import {foo,bar} from './math';
import data from '../data/test.json';
import '../css/text1.css'

document.write('966666')
document.write(foo(3))
document.write(bar(9))
document.write(JSON.stringify(data))
