Ethos
=====

An Ethereum Browser

![Ethos](https://raw.githubusercontent.com/projectdnet/ethos/master/static/assets/imgs/v0.0.3-screenshot.png "Ethos and Ethereum Browser")


Still under development. Binaries for the various platforms (when appropriate) will be available at [https://github.com/projectdnet/ethos/releases](https://github.com/projectdnet/ethos/releases).

##Development Build

The application which is essentially a node-webkit wrapper around other Ethereum projects which when used together make for a better DApp user experience.

To run the development build of Ethos to the following

    git clone git://github.com/projectdnet/ethos.git
    cd ethos
    npm install
    npm run build-dev


##Server

The webkit instance also instantiates a nodejs server which is used for serving Ethos interface pages, like the homescreen etc. 

###DNS

Until the Ethereum project fully releases the TLD DNS replacement for the `.eth` domain, this project will proxy all calls to `http://eth:8080/<insert-domain-here>` will be prosied to the domains/ip addresses provided to a top level dns contract.

###Swarm & Torrents

Preliminary work on torrent/content support has been deffered to a later version of Ethos when the Ethereum Project has a more concrete implementation. If this takes longer it is assumed that [c3d](https://github.com/project-douglas/c3d) will be the prefered implementation.

##Eth Object / [Poly-eth](https://github.com/projectdnet/poly-eth)

Current Ethereum clients such as [AlethZero](https://github.com/ethereum/cpp-ethereum) and [Ethereal](https://github.com/ethereum/go-ethereum) inject an `eth` object into the windows context for DApps to interface with. Ethos also injects an `eth` object which currently exposes [poly-eth](https://github.com/projectdnet/poly-eth) a wrapper which allows DApp developers to either polyfil or mock the `eth` object in environments where a native `eth` object is unavailable, in instaces where it is available poly-eth provides a consistent API, allowing DApps to be client independent. 

This means that in its current form Ethos does not actually interact with the Ethereum Network but in providing a poly-eth `eth` object enables DApp developers to use webkit developer tools for better debugging and development.