# HelpOps-Hub Contributing Guidelines
Thank you for taking the time to contribute to my Web-dev project PlayCafe. Your help is essential for keeping it great.

Please take a moment to read the following guidelines before contributing:

> **⚠️IMPORTANT**
>
> **Pull Requests _having no issue associated_ with them _will not be accepted_. Firstly get an issue assigned, whether it's already opened or raised by you, and then create a Pull Request.**
>
> **An automated process has been implemented to ensure the timely management of Pull Requests (PRs) on this platform.**
>
> **PRs that have been open for a duration exceeding 45 days will be automatically closed, so please plan accordingly.**

## Prerequisites ⚠️

- Open Source Etiquette: If you've never contributed to an open source project before, have a read of [Basic etiquette](https://developer.mozilla.org/en-US/docs/MDN/Community/Open_source_etiquette) for open source projects.

- Basic familiarity with Git and GitHub: If you are also new to these tools, visit [GitHub for complete beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners) for a comprehensive introduction to them.

---

## How to Contribute 🤔

To get started, look at the existing [**create a new issue**](https://github.com/RamakrushnaBiswal/PlayCafe/issues/new)!

### Setup guidelines 🪜

> [!NOTE]
> This is [React.js](https://react.dev/) project.
> You must have installed Node.js on your local macahine. If you don't have it installed yet,                                                             
  you can download it from [here](https://nodejs.org/en/download/package-manager).


**Follow these steps to setup HelpOps-Hub on your local machine 👇**

- [Fork](https://github.com/RamakrushnaBiswal/PlayCafe/fork) the repository
- Clone the forked repository in your local system.
  
  ```bash
   git clone https://github.com/<your-github-username>/playcafe.git
  ```
 - Navigate to the [website3.0](https://github.com/RamakrushnaBiswal/PlayCafe/tree/main/frontend) folder if you want to contribute to our website(In frontend).
   ```bash
    cd frontend
   ```
- for backend
   ```bash
    cd backend
   ```
 - Now install dependency
   ```bash
    npm install
   ```
  - Run the Deployment Server
    ```bash
     npm run dev
    ```
  - `Open http://localhost:5137 with your browser to see the result.`
  
 - Create a new branch for your feature.
   ```bash
    git checkout -b <your_branch_name>
   ```
 - Perform your desired changes to the code base.
 - Track and stage your changes.
   ```bash
    # Track the changes
     git status

    # Add changes to Index
     git add .
   ```
- Commit your changes.
  ```bash
  git commit -m "your_commit_message"
  ```
- Push your committed changes to the remote repo.
  ```bash
  git push origin <your_branch_name>
  ```

  ## Please run it before pushing the code
To run ESLint, use the following commands:

```bash
npm run lint
```

To automatically fix linting issues, run:
```bash
npm run lint:fix
```
To format your code with Prettier, use:
```bash
npm run format
```


- Go to your forked repository on GitHub and click on `Compare & pull request`.
- Add an appropriate title and description to your pull request explaining your changes and efforts done.
- Click on `Create pull request`.
- Congrats! 🥳 You've made your first pull request to this project repo.
- Wait for your pull request to be reviewed and if required suggestions would be provided to improve it.
- Celebrate 🥳 your success after your pull request is merged successfully.
  
> [!NOTE]
> All images must be in webp or avif format, not png, jpeg, jpg, or others. This practice applies to the entire repository.
> 
> Use [freeconvert.com](https://www.freeconvert.com/png-to-webp) to convert images to the required webp or avif formats.

## 💡 Want to contribute some documents related Playcafe?
- Just crate new folder in the root directory according to your requirement
- and write everythig step by step in your own language in `README.md`
- And then commit changes
- Append new Documentation of Installation or anything
- Adding or Updating category description
- And more!
---

## 🧑‍💻 Engage in Discussions 
Join our community [discussions](https://github.com/RamakrushnaBiswal/PlayCafe/discussions/) to share insights and collaborate with others:
- **Visit the Forum**: Head over to our community forum.
- **Participate Actively**: Engage in ongoing discussions or start new ones on topics you're passionate about.

## ✅ Guidelines for Good Commit Messages 
We follow a standardized commit message format using Commitlint to ensure consistency and clarity in our commit history. Each commit message should adhere to the following guidelines:

1. **Be Concise and Descriptive**: Summarize the change in a way that’s easy to understand at a glance.
2. **Use the Imperative Mood**: Write as if giving a command (e.g., `Add`, `Fix`, `Update`), which is a convention in many projects.
3. **Include Context**: Provide context or reason for the change if it’s not immediately obvious from the summary.
4. **Reference Issues and Pull Requests**: Include `issue numbers` or PR references if the commit addresses them.
5. **Issue reference** (Optional): Include the issue number associated with the commit (e.g., `#123`).

## 📝 Commit Message Examples ✅
### Adding New things or features
- `Add - Added 404 not found page`

### Fixing Errors or Bugs
- `Fix - fixed footer`

### Updating Existing Content
- `Update - Update profiles pages`

### Enhancing Documentation
- `Enhance - troubleshooting section in Prometheus guide`

### General Maintenance
- `Refactor - README for better clarity`

# ❌ Examples of Invalid Commit Messages

- `Added new stuff`
- `Fixed a bug`
- `Updated code`
- `auth feature update`
- `chore: fixed some stuff`

## Commit Example with Commitlint

```bash
git commit -m "feat(auth): Implement user signup process (#789)"
```

---

- If something is missing here, or you feel something is not well described, please [raise an issue](https://github.com/RamakrushnaBiswal/PlayCafe/issues).


