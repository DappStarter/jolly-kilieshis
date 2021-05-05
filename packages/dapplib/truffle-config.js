require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stove regret random coach inflict drive fresh gather'; 
let testAccounts = [
"0xc0e0a40b09694b45cefa6e54de995f65db859aeadcf805f4f5e706ecbbf7d46f",
"0xdd4a71f95098948ae814be2ddce060e0c13d844fbaca2d2c7d74bcb2c1d93141",
"0xc59a69ddb11217943bbe369d0c1c598c65ba831124d11b9bd0d8221f29ac495c",
"0x0d4be51e45e57d8853885e972467529194ad6f1263496c3331a364d54de597c2",
"0x9fb7111f16f0d6496cf790587835a3d9847d0942393bbf6036e30b18598e1a78",
"0x73e0b3407f93399eacb4a6073ca8409692aaec36cc6fe5cb32b43322700d9b2c",
"0x2e3fd0811bb2df693c0eaf64aa2ade76969557da4d94517a72d6babb56a79c57",
"0x8fdc26268efd71ec34e1bc057acd7dd47b36d1e67a5ba4b251e53ec1c010d002",
"0xe67b6592686a23eda5874482d8e8ec014ff9360a22d9f306df857b56f234beaa",
"0x259ad591ab1127fee54704d4564bbd99e1b241441c24ccd4c41b31aad1611b0f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

