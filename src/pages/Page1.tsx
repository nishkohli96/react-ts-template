import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Button from '@mui/material/Button';

import rootStore from '_Mobx/index';
import { useAppSelector, useAppDispatch } from '_Redux/hooks';
import { fetchBankInfo } from '_Redux/bankInfo.slice';

const Page1: FC = () => {
    const navigate = useNavigate();
    const bankInfo = useAppSelector((state) => state.bank.bankInfo);
    const dispatch = useAppDispatch();

    return (
        <div className="root">
            <div>hi from Page1. Edit the code</div>
            <Button variant="outlined" onClick={() => navigate('/page-2')}>
                Go to Page2
            </Button>
            <div>Doubler Value: {rootStore.doubler.counterValue}</div>
            <Button onClick={() => rootStore.doubler.increment()}>
                Increment
            </Button>
            <Button
                onClick={() => dispatch(fetchBankInfo({ ifsc: 'KARB0000001' }))}
            >
                Get Bank Info
            </Button>
            <div>Fetched Bank Info: {JSON.stringify(bankInfo)}</div>
        </div>
    );
};

export default observer(Page1);
