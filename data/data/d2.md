#d2

doc/dox - Self identifying documentation

##Contract

Simple serpent version of the contract:

    // param 0: action
    if msg.data[0] == "create":
      // param 1: content hash
      contract.storage[msg.sender] = msg.data[1]
      return(1)
    else:
      return(0)

This contract enables the association of a content hash which represents the documentation of the contract or address which submitted the transaction.

The contract has only one action `create` which should be provided as the first data parameter. The second parameter should be the `content_hash` of the documentation itself. When sending a `create` action with the `content_hash`, that hash is saved to storage with the key being the address of the sender of the contract, which should be the contract itself, or the individual who the documentation identifies.

##User Interface

The User Interface is only a bit of sugar over an otherwise simple and unambiguous contract, it is not nessisary to use the user interface to use the d2 contract itself, it mearly provides a user friendly facade.

###Create

Documentation can be created using the User Interface, for a contract or for an individual address.

Contract documentation:

    INPUT: contract_address, documentation_content_hash
    ACTION: None
    OUTPUT: This outputs Ethereum ASM code that can be prepended to your contract that enables it to self document itself using the d2 contract when it is initialised.


User/Address dox:

    INPUT: address, documentation_content_hash
    ACTION: This submits a Transaction to the d2 contract on behalf of the submitting user.
    OUTPUT: None.

###View

You can view other documentation that exists using the d2 User Interface, by entering the address of the Contract or Address who's documentation you'd like to view.

    INPUT: address
    OUTPUT: The content_hash is fetched from the contracts storage and transformed into a Magnet Link, which when opened using a bittorrent client will attempt to download the documentation.

##Documentation Content

Content from which the `content_hash`es mentioned above is derived should be uploaded to a/the DHT which all users will be using to fetch files from. The process of creation (submission to DHT) and downloading (via generated magnet links) is manual at present, but will eventually be automatable from within the Ethereum client.

For now use uTorrent to create a `.torrent` file and then seed that file and create its magnet link eg:

    magnet:?xt=urn:btih:3EB0B04E8A6819A732BEAC1F738043E8793FD80F&dn=d2.md&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.ccc.de%3a80%2fannounce

Where `3EB0B04E8A6819A732BEAC1F738043E8793FD80F` is the `content_hash` and it creates a magnet link like so for downloading: [d2 Documentation](magnet:?xt=urn:btih:3EB0B04E8A6819A732BEAC1F738043E8793FD80F) (doesnt work on gist.github.com)
