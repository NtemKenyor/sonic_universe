# Contributing to Sonic Universe 🎮

Thank you for your interest in contributing to **Sonic Universe**! We’re excited to have you help build the future of Web3 gaming. This document provides guidelines for contributing to the project and outlines our standards and best practices.

## 🛠️ How to Contribute

We appreciate any contributions, whether they are bug fixes, documentation improvements, or code enhancements. Follow these steps to get started:

### 1. Fork the Repository

- Go to the repository on GitHub and click the **Fork** button at the top-right corner to create your copy of the repo.
- Clone your forked repo locally:
  ```bash
  git clone https://github.com/your-username/sonic-universe.git
  ```

### 2. Make Your Changes

Make the necessary changes in your fork, keeping the following in mind:

- **Code quality**: Follow the existing code style, use meaningful variable names, and keep the code clean and readable.
- **Test your changes**: If you are adding new functionality or fixing a bug, write tests to ensure everything works as expected.
- **Document your changes**: If you are adding a new feature or modifying an existing one, update the relevant documentation in the README or create a new documentation file if necessary.

### 3. Commit and Push Your Changes

Once you are happy with your changes, commit them:

```bash
git add .
git commit -m "Brief description of your changes"
git push origin main
```

Ensure your commit message is concise and informative, describing the changes you made.

### 4. Submit a Pull Request

- Go to the original repository on GitHub and click the **Pull Request** button.
- Select your fork and submit the pull request (PR) with a detailed description of the changes you made.
- Reference any issues your PR addresses (e.g., “Fixes #123”).

A member of our team will review your PR and may suggest changes. Once everything is approved, your contribution will be merged!

---

## 🔍 Guidelines for Contributions

### Branching Policy

Only maintainers are responsible for creating new branches for significant features or modules. If your contribution involves **creating new features**, reach out to the maintainers first. You can still fork the repository, make changes in your own fork, and submit a pull request.

- If your contribution is a **bug fix, small improvement, or documentation update**, you do not need a separate branch. You can make changes directly in your fork and submit a pull request as outlined above.
- For larger features or projects, once the maintainers have approved your request, they will create a branch for you to work on.

### Code Guidelines

1. **Follow Existing Style**: Stick to the code style and structure already used in the project.
2. **Modularity**: Keep code modular and reusable whenever possible. Avoid duplicating code.
3. **Document Your Code**: Use clear comments and ensure that your code is easy to understand for other contributors.
4. **Error Handling**: Implement proper error handling in smart contracts and client-side code to avoid vulnerabilities and improve user experience.

### Tests

- Write tests for any new features or bug fixes.
- Make sure your tests pass before submitting a pull request.
- Use the existing testing framework and tools set up for the repository.

### Smart Contracts

For smart contract contributions, make sure to:

- Adhere to Solana's best practices for contract security and optimization.
- Thoroughly test your smart contract code with the Solana testnet before submitting it for review.
- Comment your code to explain key logic, especially where game mechanics are involved.

### Client-Side Code

For client-side contributions, ensure:

- The user interface is responsive and mobile-friendly.
- API interactions with the smart contracts are secure and efficient.
- Game mechanics are fun and intuitive for players.

---

## 🤝 Collaboration Standards

- **Respect**: Be respectful and open-minded in discussions. Constructive feedback is welcome, and collaboration is key.
- **Clarity**: Provide clear explanations and justifications for the changes you propose.
- **Responsiveness**: Be responsive to questions or suggestions from maintainers during the PR review process.

---

## 📂 Project Structure

Here’s a quick overview of the project structure to help you navigate through the repo:

```
sonic-universe/
│
├── contracts/                    # Smart contract section for different games
│   ├── riddle_game_contract/
│   └── arcade_challenge_contract/
│
├── clients/                      # Frontend clients section for different games
│   ├── riddle_game_client/
│   └── arcade_challenge_client/
│
├── tests/                        # Unit and integration tests for smart contracts
│
├── README.md                     # Main project documentation
└── CONTRIBUTING.md                # Contribution guidelines (this file)
```

---

## 📧 Need Help?

If you have any questions or need assistance, feel free to reach out:

<!-- - **Discord**: [Sonic Universe Discord](https://discord.com/invite/sonicuniverse)
- **Twitter**: [SonicSVM](https://x.com/SonicSVM)
- **Documentation**: [Sonic Universe Docs](https://docs.sonic.game/) -->

We look forward to your contributions and are excited to build Sonic Universe together! 🎮🚀

---