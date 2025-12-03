# Git Setup Guide - Multiple GitHub Accounts

Complete guide for configuring Git to work with multiple GitHub accounts (work vs personal).

---

## Overview

This guide helps you set up Git to use a different GitHub account than your IDE's default configuration. You'll learn how to:

- Configure Git for this specific repository
- Set up SSH keys for multiple accounts
- Push to your personal GitHub repository
- Keep work and personal Git identities separate

---

## Quick Setup (Repository-Specific Config)

If you just want to push this project with different credentials without affecting your global Git config:

### Step 1: Configure Git for This Repository Only

```powershell
# Navigate to repository root
cd "d:\Personal\ScottKlusaw_Website-master\ScottKlusaw_Website-master"

# Set your personal GitHub email (repository-specific)
git config user.email "your-personal-email@example.com"

# Set your personal GitHub name (repository-specific)
git config user.name "Scott Klusaw"

# Verify settings
git config user.email
git config user.name
```

These settings only apply to THIS repository and won't affect your work projects.

### Step 2: Connect to Your Personal GitHub Repository

```powershell
# Check current remote
git remote -v

# If no remote exists, add it:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# If remote exists but points to wrong repo, update it:
git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
```

### Step 3: Push Your Changes

```powershell
# First time push (sets up tracking)
git push -u origin main

# Subsequent pushes
git push
```

**Authentication:** When you push, you'll be prompted for credentials. Use:

- **Username:** Your personal GitHub username
- **Password:** Personal Access Token (NOT your GitHub password)

---

## Create GitHub Personal Access Token (PAT)

GitHub no longer accepts password authentication. You need a Personal Access Token.

### Generate Token

1. Go to [GitHub.com](https://github.com) and log into your PERSONAL account
2. Click your profile picture (top right) → **Settings**
3. Scroll to bottom of left sidebar → **Developer settings**
4. Click **Personal access tokens** → **Tokens (classic)**
5. Click **Generate new token** → **Generate new token (classic)**
6. Configure token:
   - **Note:** `ScottKlusaw Website Deployment`
   - **Expiration:** 90 days (or custom)
   - **Scopes:** Check these boxes:
     - ✅ `repo` (Full control of private repositories)
     - ✅ `workflow` (Update GitHub Actions workflows)
7. Click **Generate token**
8. **⚠️ COPY TOKEN NOW** - You can't see it again!
9. Save token securely (password manager recommended)

### Use Token for Authentication

When Git prompts for password, paste your Personal Access Token (not your GitHub password).

**Windows Credential Manager:** Windows may save credentials. To update:

1. Search "Credential Manager" in Start menu
2. Click **Windows Credentials**
3. Find `git:https://github.com`
4. Click it → **Edit** → Update password with new token

---

## Advanced: SSH Keys for Multiple Accounts

If you want seamless authentication without entering tokens, use SSH keys.

### Step 1: Generate Personal SSH Key

```powershell
# Generate new SSH key (save as different file than work key)
ssh-keygen -t ed25519 -C "your-personal-email@example.com"

# When prompted for file location, use:
# C:\Users\YOUR-USERNAME\.ssh\id_ed25519_personal

# Set a passphrase (or press Enter for none)
```

### Step 2: Add SSH Key to GitHub

```powershell
# Copy public key to clipboard
Get-Content ~/.ssh/id_ed25519_personal.pub | clip
```

1. Go to GitHub.com (personal account) → **Settings**
2. **SSH and GPG keys** → **New SSH key**
3. **Title:** `Personal Laptop - ScottKlusaw Website`
4. **Key:** Paste from clipboard
5. Click **Add SSH key**

### Step 3: Configure SSH Config File

Create/edit `~/.ssh/config`:

```
# Personal GitHub account
Host github.com-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal
    IdentitiesOnly yes

# Work GitHub account (if you have one)
Host github.com-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
    IdentitiesOnly yes
```

### Step 4: Update Git Remote to Use SSH

```powershell
# Change HTTPS remote to SSH (using personal config)
git remote set-url origin git@github.com-personal:YOUR-USERNAME/YOUR-REPO-NAME.git

# Verify
git remote -v
```

### Step 5: Test SSH Connection

```powershell
ssh -T git@github.com-personal
# Should see: "Hi YOUR-USERNAME! You've successfully authenticated..."
```

Now you can push without entering credentials!

---

## Troubleshooting

### "Permission denied (publickey)" Error

**Problem:** SSH key not recognized by GitHub.

**Solutions:**

1. Verify SSH key added to GitHub (Settings → SSH keys)
2. Check SSH config file syntax (`~/.ssh/config`)
3. Test connection: `ssh -T git@github.com-personal`
4. Ensure correct IdentityFile path in SSH config

### "Authentication failed" with HTTPS

**Problem:** Invalid credentials or expired token.

**Solutions:**

1. Verify using Personal Access Token, not password
2. Check token hasn't expired (GitHub Settings → Developer settings)
3. Update Windows Credential Manager with new token
4. Ensure token has `repo` and `workflow` scopes

### Wrong Git Identity (Commits Show Work Email)

**Problem:** Repository using global Git config instead of local.

**Solutions:**

1. Check local config: `git config user.email`
2. Set repository-specific email: `git config user.email "personal@example.com"`
3. Verify: `git config --local user.email`
4. For existing commits, you'd need to amend history (advanced)

### "fatal: remote origin already exists"

**Problem:** Trying to add origin when it's already configured.

**Solutions:**

1. Check existing remote: `git remote -v`
2. Update URL instead: `git remote set-url origin NEW-URL`
3. Or remove and re-add: `git remote remove origin` then `git remote add origin NEW-URL`

### Push Rejected (Non-Fast-Forward)

**Problem:** Remote has commits you don't have locally.

**Solutions:**

1. Pull first: `git pull origin main --rebase`
2. Resolve any conflicts
3. Then push: `git push origin main`

---

## Workflow Summary

### Initial Setup (One Time)

```powershell
# 1. Configure repository-specific identity
git config user.email "your-personal-email@example.com"
git config user.name "Scott Klusaw"

# 2. Set up remote (HTTPS or SSH)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
# OR
git remote add origin git@github.com-personal:YOUR-USERNAME/YOUR-REPO.git

# 3. Initialize Husky (if not already done)
npm install
npx husky install
```

### Daily Workflow

```powershell
# 1. Make changes
# ... edit files ...

# 2. Stage changes
git add .

# 3. Commit (Husky runs pre-commit hooks automatically)
git commit -m "feat: describe your changes"

# 4. Push to GitHub
git push

# 5. GitHub Actions automatically deploys to S3!
```

---

## Security Best Practices

🔒 **Repository-Specific Config:**

- ✅ Keeps work and personal identities separate
- ✅ Prevents accidental commits with wrong email
- ✅ Each project can have different settings

🔒 **Personal Access Tokens:**

- ✅ Use tokens with minimal required scopes
- ✅ Set expiration dates (90 days recommended)
- ✅ Rotate tokens regularly
- ✅ Store in password manager, never in code
- ✅ Revoke unused tokens from GitHub settings

🔒 **SSH Keys:**

- ✅ Use separate keys for work vs personal
- ✅ Add passphrase for extra security
- ✅ Use SSH config to manage multiple keys
- ✅ Never share private keys (`.ssh/id_*` files)

---

## Checking Your Configuration

### View Current Settings

```powershell
# Repository-specific settings
git config --local --list

# Global settings (IDE default)
git config --global --list

# Check specific values
git config user.email
git config user.name
git remote -v
```

### Verify Pre-Commit Hooks Work

```powershell
# Make a test commit with bad formatting
echo "test" >> test.txt
git add test.txt
git commit -m "test: checking hooks"

# Husky should run linters automatically
# If linters fail, commit is blocked (working correctly!)

# Clean up
git reset HEAD~1
rm test.txt
```

---

## Reference: Git Remote URLs

### HTTPS Format

```
https://github.com/USERNAME/REPOSITORY.git
```

**Pros:**

- ✅ Works through corporate firewalls
- ✅ Easy to set up

**Cons:**

- ❌ Requires token authentication each push
- ❌ Windows Credential Manager may cache wrong credentials

### SSH Format

```
git@github.com:USERNAME/REPOSITORY.git
# OR with SSH config alias:
git@github.com-personal:USERNAME/REPOSITORY.git
```

**Pros:**

- ✅ No authentication prompts once set up
- ✅ More secure than tokens
- ✅ Can use different keys for different accounts

**Cons:**

- ❌ May be blocked by some corporate firewalls
- ❌ Initial SSH setup more complex

---

## Next Steps

1. **Choose authentication method:**
   - Quick/Simple: HTTPS with Personal Access Token
   - Advanced/Seamless: SSH with multiple keys

2. **Set up repository:**
   - Configure local Git identity
   - Connect to GitHub remote
   - Test push

3. **Enable automated deployment:**
   - Follow [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
   - Add GitHub secrets for AWS S3
   - Test GitHub Actions workflow

4. **Update TODO:**
   - Check off Git setup tasks
   - Add deployment setup as next priority

---

**Last Updated:** December 2025
