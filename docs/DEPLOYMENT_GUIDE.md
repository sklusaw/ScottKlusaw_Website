# AWS S3 Deployment Guide

Complete guide to setting up automated deployment from GitHub to AWS S3 using GitHub Actions.

---

## Overview

This guide will help you configure automated deployment so that every push to the `main` branch automatically updates your website on AWS S3. No more manual file uploads!

**What You'll Set Up:**

- GitHub Actions workflow (already created in `.github/workflows/deploy.yml`)
- AWS IAM user with S3 deployment permissions (secure, not root!)
- GitHub repository secrets for AWS credentials
- Optional: Manual deployment trigger

**Time Required:** ~15 minutes

---

## Prerequisites

- ✅ AWS account with existing S3 bucket hosting your website
- ✅ GitHub repository with this code
- ✅ Administrative access to both AWS Console and GitHub repository settings

---

## Step 1: Create AWS IAM User (Security Best Practice)

**Why not use root?** Root credentials have unlimited permissions. An IAM user with limited S3-only access is much safer for automated deployments.

### 1.1 Navigate to IAM Service

1. Log into [AWS Console](https://console.aws.amazon.com/)
2. Search for **IAM** in the top search bar
3. Click **IAM** under Services

### 1.2 Create IAM User

1. In left sidebar, click **Users**
2. Click **Create user** button (top right)
3. **User name:** `github-actions-deployer`
4. Click **Next**

### 1.3 Set Permissions

1. Select **Attach policies directly**
2. Click **Create policy** button (opens new tab)
3. Click **JSON** tab
4. **Replace ALL content** with this policy (update `YOUR-BUCKET-NAME`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3BucketAccess",
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": ["arn:aws:s3:::YOUR-BUCKET-NAME"]
    },
    {
      "Sid": "S3ObjectAccess",
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:GetObject", "s3:DeleteObject"],
      "Resource": ["arn:aws:s3:::YOUR-BUCKET-NAME/*"]
    }
  ]
}
```

5. Click **Next**
6. **Policy name:** `GitHubActionsS3DeployPolicy`
7. **Description:** `Allows GitHub Actions to deploy static files to S3 bucket`
8. Click **Create policy**
9. Return to the browser tab with "Create user" still open
10. Click the **refresh icon** (↻) next to "Create policy" button
11. Search for `GitHubActionsS3DeployPolicy`
12. **Check the box** next to your new policy
13. Click **Next**

### 1.4 Review and Create

1. Review the user details
2. Click **Create user**
3. Click on the newly created user name (`github-actions-deployer`)

### 1.5 Create Access Keys

1. Click **Security credentials** tab
2. Scroll to **Access keys** section
3. Click **Create access key**
4. Select **Other** (use case)
5. Click **Next**
6. **Description:** `GitHub Actions deployment`
7. Click **Create access key**
8. **⚠️ CRITICAL:** Click **Download .csv file** button
   - This is your ONLY chance to download the secret key!
   - Store this file securely (you'll need it for GitHub secrets)
9. Click **Done**

**✅ Step 1 Complete!** You now have:

- IAM user: `github-actions-deployer`
- Access Key ID (in CSV file)
- Secret Access Key (in CSV file)

---

## Step 2: Find Your AWS Information

You'll need these values for GitHub secrets.

### 2.1 S3 Bucket Name

1. Go to **S3** service in AWS Console
2. Find your website bucket in the list
3. **Copy the bucket name** (e.g., `scottklusaw.com` or `my-portfolio-site`)

### 2.2 AWS Region

1. In your S3 bucket list, note the **AWS Region** column
2. Common values:
   - `us-east-1` (N. Virginia)
   - `us-west-2` (Oregon)
   - `eu-west-1` (Ireland)
   - `ap-southeast-1` (Singapore)

**✅ Step 2 Complete!** You have:

- S3 Bucket Name
- AWS Region code

---

## Step 3: Add GitHub Secrets

GitHub Secrets store sensitive credentials securely and make them available to GitHub Actions workflows.

### 3.1 Navigate to Repository Settings

1. Go to your GitHub repository
2. Click **Settings** tab (top right)
3. In left sidebar, expand **Secrets and variables**
4. Click **Actions**

### 3.2 Add Each Secret

Click **New repository secret** button for each of the following:

#### Secret 1: AWS_ACCESS_KEY_ID

- **Name:** `AWS_ACCESS_KEY_ID`
- **Secret:** Open your downloaded CSV file, copy the "Access key ID" value
- Click **Add secret**

#### Secret 2: AWS_SECRET_ACCESS_KEY

- **Name:** `AWS_SECRET_ACCESS_KEY`
- **Secret:** From CSV file, copy the "Secret access key" value
- Click **Add secret**

#### Secret 3: AWS_REGION

- **Name:** `AWS_REGION`
- **Secret:** Your region code (e.g., `us-east-1`)
- Click **Add secret**

#### Secret 4: AWS_S3_BUCKET

- **Name:** `AWS_S3_BUCKET`
- **Secret:** Your S3 bucket name (e.g., `scottklusaw.com`)
- Click **Add secret**

### 3.3 Verify Secrets

You should now see 4 secrets listed:

- ✅ `AWS_ACCESS_KEY_ID`
- ✅ `AWS_SECRET_ACCESS_KEY`
- ✅ `AWS_REGION`
- ✅ `AWS_S3_BUCKET`

**✅ Step 3 Complete!** GitHub can now authenticate with AWS.

---

## Step 4: Verify S3 Bucket Configuration

Ensure your S3 bucket is configured for static website hosting.

### 4.1 Static Website Hosting

1. Go to your S3 bucket in AWS Console
2. Click **Properties** tab
3. Scroll to **Static website hosting** section
4. Ensure it's **Enabled**
5. **Index document:** `index.html`
6. **Error document:** `index.html` (optional)

### 4.2 Bucket Policy (Public Read Access)

1. Click **Permissions** tab
2. Scroll to **Bucket policy** section
3. Ensure you have a policy allowing public read access:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

**Note:** Replace `YOUR-BUCKET-NAME` with your actual bucket name.

**✅ Step 4 Complete!** S3 bucket is properly configured.

---

## Step 5: Test Deployment

Time to test the automated deployment!

### 5.1 Automatic Deployment (Push to Main)

1. Make a small change to your code (e.g., update a comment)
2. Commit and push to `main` branch:
   ```powershell
   git add .
   git commit -m "test: trigger deployment workflow"
   git push origin main
   ```
3. Go to your GitHub repository
4. Click **Actions** tab
5. You should see a workflow run "Deploy to AWS S3" starting
6. Click on the run to watch progress
7. Wait for green checkmarks (usually ~30-60 seconds)

### 5.2 Manual Deployment (On Demand)

You can also trigger deployment manually without pushing code:

1. Go to **Actions** tab in GitHub
2. Click **Deploy to AWS S3** in left sidebar
3. Click **Run workflow** button (right side)
4. Select `main` branch
5. Click green **Run workflow** button
6. Watch the deployment progress

### 5.3 Verify Deployment

1. Open your website URL (S3 static website endpoint or custom domain)
2. Verify your changes appear
3. Check browser console for any errors (F12)

**✅ Step 5 Complete!** Automated deployment is working!

---

## Troubleshooting

### Deployment Fails with "Access Denied"

**Problem:** IAM user doesn't have permission to access S3 bucket.

**Solutions:**

1. Verify bucket name in GitHub secret matches exactly
2. Check IAM policy has correct bucket ARN
3. Ensure policy is attached to IAM user

### Deployment Succeeds but Website Shows Old Content

**Problem:** Browser cache or S3 versioning.

**Solutions:**

1. Hard refresh browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Check S3 bucket to confirm files updated (Properties → Last modified)
3. Try incognito/private browsing window
4. Clear browser cache completely

### "Invalid Credentials" Error

**Problem:** AWS credentials in GitHub secrets are incorrect.

**Solutions:**

1. Re-download access keys from IAM (create new access key if needed)
2. Update GitHub secrets with new credentials
3. Ensure no extra spaces when copying/pasting secrets

### Files Missing After Deployment

**Problem:** `--exclude` patterns in workflow may be too broad.

**Solutions:**

1. Check `.github/workflows/deploy.yml` exclude patterns
2. Verify files exist in repository (not in `.gitignore`)
3. Check GitHub Actions logs for "skipped" files

### Workflow Doesn't Trigger

**Problem:** Workflow file not on `main` branch or GitHub Actions disabled.

**Solutions:**

1. Ensure `.github/workflows/deploy.yml` exists on `main` branch
2. Check repository Settings → Actions → Allow all actions
3. Verify workflow syntax with GitHub's workflow validator

---

## What Gets Deployed

The workflow deploys everything EXCEPT:

❌ Not Deployed:

- `.git/` (version control)
- `.github/` (workflow files)
- `node_modules/` (dev dependencies)
- `archive/` (legacy versions)
- `docs/` (documentation)
- `.vscode/` (editor settings)
- `*.md` files (README, guides)
- `package.json`, `package-lock.json`
- Config files (`.eslintrc.json`, etc.)

✅ Deployed:

- `index.html` (homepage)
- `assets/` (CSS, JS, images, fonts)
- `fun/` (fun projects section)
- `xmas/` (Christmas cards)
- All other HTML files

---

## Security Best Practices

🔒 **Followed by This Setup:**

- ✅ IAM user instead of root credentials
- ✅ Minimal permissions (S3 access only)
- ✅ Secrets encrypted in GitHub
- ✅ No credentials in code repository
- ✅ Access keys rotatable without code changes

🔒 **Additional Recommendations:**

- Rotate access keys every 90 days (create new, update GitHub secrets, delete old)
- Enable CloudTrail logging to audit S3 access
- Use AWS Organizations for multi-account management
- Consider AWS SSO for human access (IAM users for automation only)

---

## Maintenance

### Rotating Access Keys (Every 90 Days Recommended)

1. Create new access key in IAM (max 2 keys per user)
2. Update GitHub secrets with new credentials
3. Test deployment with new keys
4. Delete old access key from IAM
5. Update documentation with rotation date

### Monitoring Deployments

- **GitHub Actions:** Check Actions tab for deployment history
- **AWS CloudTrail:** View API calls to S3 (if enabled)
- **S3 Metrics:** Monitor bucket requests and data transfer

---

## Advanced: Adding CloudFront Support (Future)

If you later add CloudFront CDN for faster global delivery, you'll need to:

1. Create CloudFront distribution pointing to S3 bucket
2. Note the Distribution ID (starts with `E...`)
3. Update IAM policy to include CloudFront invalidation:
   ```json
   {
     "Effect": "Allow",
     "Action": "cloudfront:CreateInvalidation",
     "Resource": "*"
   }
   ```
4. Add GitHub secret: `CLOUDFRONT_DISTRIBUTION_ID`
5. Add CloudFront invalidation step to `.github/workflows/deploy.yml`:
   ```yaml
   - name: Invalidate CloudFront cache
     run: |
       aws cloudfront create-invalidation \
         --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
         --paths "/*"
   ```

See [FUTURE_CONSIDERATIONS.md](./FUTURE_CONSIDERATIONS.md) for more details.

---

## Summary

You now have:

- ✅ Secure IAM user with S3-only permissions
- ✅ GitHub Actions workflow for automated deployment
- ✅ Encrypted credentials stored as GitHub secrets
- ✅ Automatic deployment on every push to `main`
- ✅ Manual deployment trigger option
- ✅ No more manual file uploads to AWS Console!

**Deployment Flow:**

```
1. Make code changes locally
2. Run npm run test:all (validate)
3. git commit -m "feat: your changes"
4. git push origin main
5. GitHub Actions automatically deploys to S3
6. Your website updates within 60 seconds!
```

**Questions?** Check the Troubleshooting section or review GitHub Actions logs for specific error messages.

---

**Last Updated:** December 2025
