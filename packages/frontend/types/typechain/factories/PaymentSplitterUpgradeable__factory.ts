/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PaymentSplitterUpgradeable,
  PaymentSplitterUpgradeableInterface,
} from "../PaymentSplitterUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "PayeeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "payee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "account",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "released",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "shares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalReleased",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610797806100206000396000f3fe6080604052600436106100695760003560e01c80639852595c116100435780639852595c1461014f578063ce7c2ac214610192578063e33b7de3146101d557600080fd5b806319165587146100c45780633a98ef39146100e65780638b83209b1461010a57600080fd5b366100bf577f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be770336040805173ffffffffffffffffffffffffffffffffffffffff90921682523460208301520160405180910390a1005b600080fd5b3480156100d057600080fd5b506100e46100df3660046105fa565b6101ea565b005b3480156100f257600080fd5b506033545b6040519081526020015b60405180910390f35b34801561011657600080fd5b5061012a61012536600461061e565b61045e565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610101565b34801561015b57600080fd5b506100f761016a3660046105fa565b73ffffffffffffffffffffffffffffffffffffffff1660009081526036602052604090205490565b34801561019e57600080fd5b506100f76101ad3660046105fa565b73ffffffffffffffffffffffffffffffffffffffff1660009081526035602052604090205490565b3480156101e157600080fd5b506034546100f7565b73ffffffffffffffffffffffffffffffffffffffff81166000908152603560205260409020546102a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f5061796d656e7453706c69747465723a206163636f756e7420686173206e6f2060448201527f736861726573000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000603454476102b19190610637565b73ffffffffffffffffffffffffffffffffffffffff831660009081526036602090815260408083205460335460359093529083205493945091926102f5908561068a565b6102ff919061064f565b61030991906106c7565b905080610398576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f5061796d656e7453706c69747465723a206163636f756e74206973206e6f742060448201527f647565207061796d656e740000000000000000000000000000000000000000006064820152608401610298565b73ffffffffffffffffffffffffffffffffffffffff83166000908152603660205260409020546103c9908290610637565b73ffffffffffffffffffffffffffffffffffffffff84166000908152603660205260409020556034546103fd908290610637565b60345561040a838261049b565b6040805173ffffffffffffffffffffffffffffffffffffffff85168152602081018390527fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b056910160405180910390a1505050565b6000603782815481106104735761047361070d565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1692915050565b80471015610505576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610298565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461055f576040519150601f19603f3d011682016040523d82523d6000602084013e610564565b606091505b50509050806105f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610298565b505050565b60006020828403121561060c57600080fd5b81356106178161073c565b9392505050565b60006020828403121561063057600080fd5b5035919050565b6000821982111561064a5761064a6106de565b500190565b600082610685577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156106c2576106c26106de565b500290565b6000828210156106d9576106d96106de565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461075e57600080fd5b5056fea264697066735822122025863b1a4d1caa60b7300e2d4c7db86a1dc1369a43a27633c3f3ac313005662764736f6c63430008060033";

type PaymentSplitterUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PaymentSplitterUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PaymentSplitterUpgradeable__factory extends ContractFactory {
  constructor(...args: PaymentSplitterUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PaymentSplitterUpgradeable> {
    return super.deploy(overrides || {}) as Promise<PaymentSplitterUpgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PaymentSplitterUpgradeable {
    return super.attach(address) as PaymentSplitterUpgradeable;
  }
  connect(signer: Signer): PaymentSplitterUpgradeable__factory {
    return super.connect(signer) as PaymentSplitterUpgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PaymentSplitterUpgradeableInterface {
    return new utils.Interface(_abi) as PaymentSplitterUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PaymentSplitterUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PaymentSplitterUpgradeable;
  }
}
