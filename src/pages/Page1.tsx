import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Button from '@mui/material/Button';
import { RootStore } from 'mobx-store';
import { fetchBankInfo, useAppSelector, useAppDispatch } from 'redux-store';

const Page1: FC = () => {
	const bankInfo = useAppSelector((state) => state.bank.bankInfo);
	const dispatch = useAppDispatch();
	const rootStore = new RootStore();

	const { REACT_APP_TESTVAR } = process.env;

	return (
		<div className="root">
			<div>
				Environment variable -{' '}
				<span className="text">{REACT_APP_TESTVAR}</span>
			</div>
			<div style={{ margin: '10px 0px' }}>
				Hi from Page1. Feel free to add your own code 😃.
			</div>
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
