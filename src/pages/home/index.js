import React,{Component} from 'react';
import { getLayout } from '../../layouts/getLayout';
import Home from '../../components/home/home';

class HomeIndex extends Component {
    render() {
        return (
            <>
                <Home />
            </>
        );
    }
}
HomeIndex.getLayout = getLayout;
export default HomeIndex;