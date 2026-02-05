

🧬 inherit.01 — Decentralized Crypto Inheritance Protocol
A trustless, non-custodial Web3 inheritance system enabling secure nominee-based crypto transfers after prolonged inactivity.
🌐 Overview

inherit.01 is a decentralized inheritance protocol that allows users to **assign nominees for their crypto assets and define a time-based transfer condition**.

Instead of locking funds into smart contracts, inherit.01 uses an **ERC20 approve-based execution model**, ensuring:

* Full user custody of funds
* No contract-side fund storage
* Maximum security & transparency

Transfers occur **only when the owner becomes inactive for a predefined duration (default: 365 days)** and the nominee manually initiates a claim.

---

## ✨ Core Features

* 🔐 **Non-custodial architecture (no fund locking)**
* 👤 **Nominee-based inheritance mapping**
* ⏳ **Time-based inactivity verification**
* 🔁 **Alive Button (Proof-of-Life reset)**
* 🧠 **Trustless execution via smart contracts**
* 🌐 **Wallet-based Web3 authentication**
* 🧾 **Fully on-chain verification**
* ⚡ **Gas optimized Solidity contracts**

---

## 🛠 Protocol Flow

### 1️⃣ Inheritance Setup

Owner configures:

* Nominee wallet address
* ERC20 token address
* Amount to transfer

Owner then **approves the protocol smart contract** for token allowance.

> ⚠️ Funds always remain in the owner's wallet — inherit.01 never locks funds.

---

### 2️⃣ Alive Mechanism (Proof of Life)

* Default inactivity timeout = **365 days**
* Owner must periodically click **Alive Button**
* Each click **resets the inactivity timer**

This prevents premature claims and ensures transfers only occur after prolonged inactivity.

---

### 3️⃣ Claim Process

Nominee triggers claim by providing the owner's wallet address.

Smart contract verifies:

* Nominee mapping
* Timeout expiration

If conditions are met → **ERC20 tokens are transferred using approved allowance**

If not → Transaction reverts.

---

## 🔐 Security Architecture

| Feature         | Protection                        |
| --------------- | --------------------------------- |
| Non-custodial   | Funds never leave owner wallet    |
| Time lock       | Prevents premature claims         |
| Nominee mapping | Only authorized nominee can claim |
| No admin        | Fully decentralized               |
| Immutable       | On-chain logic                    |

---

## 🧱 Tech Stack

**Smart Contracts**

* Solidity
* OpenZeppelin Interfaces
* Hardhat

**Frontend**

* React.js
* Tailwind CSS
* Wagmi
* RainbowKit
* Ethers.js

**Wallet**

* MetaMask
* WalletConnect

---

## 🚀 Getting Started

### Prerequisites

* Node.js ≥ 18
* MetaMask installed
* Sepolia Test ETH

---

### Installation

```bash
git clone https://github.com/your-username/inherit.01.git
cd inherit.01
npm install
```

---

### Run Frontend

```bash
npm run dev
```

---

### Compile Contracts

```bash
npx hardhat compile
```

---

### Deploy Contract

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

---

## 🔧 Contract Functions

### addNominee()

```solidity
addnominee(address nominee, address token, uint256 amount)
```

Assigns nominee and transfer amount.

---

### checkin() → Alive Button

```solidity
checkin()
```

Resets inactivity timer.

---

### claim()

```solidity
claim(address owner)
```

Transfers tokens if timeout passed.

---

## 🌍 Supported Networks

* Sepolia (Testnet)
* Ethereum Mainnet (future deployment)
* Polygon (planned)
* Arbitrum (planned)

---

## 🎯 Use Cases

* Crypto inheritance planning
* Emergency access protocols
* Trustless nominee systems
* Digital estate management
* High-value wallet protection


## ⚠️ Disclaimer

This project is **experimental and educational**.

**DO NOT use on mainnet with large funds without professional smart contract audits.**

---

## 🤝 Contributions

PRs welcome!
Open issues for feature requests or bug reports.

---

## 📜 License

MIT License

---

## 💬 Author

**Harsh Ranawat**
Computer Engineer • Web3 Developer • XR Developer

