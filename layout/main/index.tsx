//import modules
import React, {FC, ReactNode} from 'react';
import { useRouter } from 'next/router';

//import components
import Navbar from '../../components/common/navbar'

type MainlayoutProps = {
    children: ReactNode;
};

const Mainlayout: FC<MainlayoutProps> = ({children }) => {

    const router = useRouter().pathname.split('/')[1]
    return (
        <>
            <Navbar>
            {children}
            </Navbar>
        </>
    );
};

export default Mainlayout;
