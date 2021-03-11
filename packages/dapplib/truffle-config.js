require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gesture hill fresh spot toy note office color hunt glide equal genre'; 
let testAccounts = [
"0x3ad411e5a60a390eb763bd6d06c98967ec97e47fbcdea8023d727047b8cc8494",
"0xeeeaf69eb70693a1fa46631c2606a3a42760b715e458c85ab18b66a8db8b2d9a",
"0x4898b5d849874afc5d6af28577a9805a9ff31a1dc8ac7b246fc30a0cfde60b00",
"0x91c32d43b9bb124d0769b34cb04f93b29c20fff43784bee38356b7b62b7fc186",
"0x581457d60053a0ed5740f0c16627622c56d4b5c810c5340f9e3a05ae7e3a7910",
"0x2f0581318c8cbfc99588c014838446b64623989c31d43fa263430f15f9cfb2f8",
"0x0c0454796faee6d254a9f1086e2fd86fe240ed1211c015bfbf7f2165ea4e1eb6",
"0x0b71b40a1b95e898c12bf6bc860186d1fdc19e899ed6cf0d654172ec42fb2445",
"0xaaf1222d2c97ba030788c64627c8d42735128e0df4c1e93573bcfbc40f9e4d7b",
"0x94dfd4cdd1697041f8d9deaea8a332b96e260120e4d34793f25c2bbaaaf3addd"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

