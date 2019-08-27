import {combineReducers} from 'redux';
import home from './home';
import session from './session';
import {connectRouter} from 'connected-react-router';
//1.合并reducers 为了将当前的路径信息写入仓库
import history from '../history';
let reducers = combineReducers({
    home,
    session,
    router:connectRouter(history)
});
export default reducers;