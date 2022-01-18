import React,{Component} from 'react';
import { getLayout } from '../../layouts/getLayout';
import Demo from '../../components/demo/demo';

class DemoIndex extends Component {
    render() {
        return (
            <>
                <Demo />
            </>
        );
    }
}
DemoIndex.getLayout = getLayout;
export default DemoIndex;