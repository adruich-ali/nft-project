import React, {useState} from 'react'
import {ethers} from 'ethers'
import styled from 'styled-components';

const ConnectBtn = () => {
    const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
    const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	// window.ethereum.on('accountsChanged', accountChangedHandler);
	// window.ethereum.on('chainChanged', chainChangedHandler);
    return (
        <>
            <NavBtn>
                <NavBtnLink href="" onClick={connectWalletHandler}> Connect Wallet </NavBtnLink>
            </NavBtn>
            
        </>
    )
}

export default ConnectBtn;

const NavBtn =  styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
;

@media screen and (max-width: 768px){
    display: flex; 
    padding-right: 44px;
}
`;

const NavBtnLink = styled.a`
border-radius: 4px;
background: transparent ;
padding: 10px 22px;
color: #fff;
border:1px solid white ;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover{
    transition: all 0.2s ease-in-out;
    background:#A21112;
    color: #fff;
}
`;
