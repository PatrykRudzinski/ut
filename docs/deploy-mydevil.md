# Deploy to MyDevil (GitHub Actions + SSH)

This project deploys static Astro output (`dist/`) to MyDevil via SSH + `rsync`.

## 1) Generate deploy key pair

Run locally:

```bash
ssh-keygen -t ed25519 -C "github-actions-mydevil" -f ./mydevil_deploy_key
```

You will get:
- private key: `mydevil_deploy_key`
- public key: `mydevil_deploy_key.pub`

## 2) Add public key on MyDevil

Add contents of `mydevil_deploy_key.pub` to SSH authorized keys for your MyDevil account.

You can do that either:
- in MyDevil panel (SSH keys / accepted keys), or
- by appending the key to `~/.ssh/authorized_keys` on the server.

## 3) Configure GitHub repository secrets

In GitHub -> Settings -> Secrets and variables -> Actions -> New repository secret:

- `MYDEVIL_SSH_PRIVATE_KEY` -> full content of `mydevil_deploy_key` (private key)
- `MYDEVIL_HOST` -> your SSH host, e.g. `s123.mydevil.net`
- `MYDEVIL_USER` -> your SSH username on MyDevil
- `MYDEVIL_PORT` -> SSH port (`22` in most cases)
- `MYDEVIL_TARGET_DIR` -> target directory for deployed files, e.g. `/home/USERNAME/domains/example.com/public_html`

Optional but recommended:
- `MYDEVIL_KNOWN_HOSTS` -> output of:

```bash
ssh-keyscan -p 22 s123.mydevil.net
```

If not provided, workflow will run `ssh-keyscan` during deploy.

## 4) Verify target path on server

Log in with SSH and verify your webroot:

```bash
ssh USERNAME@s123.mydevil.net
pwd
ls -la /home/USERNAME/domains
```

Use the final domain directory (typically `public_html`) as `MYDEVIL_TARGET_DIR`.

## 5) Trigger deployment

- Automatic: push to `master`
- Manual: GitHub -> Actions -> `Deploy to MyDevil` -> Run workflow

## 6) Local dry run (optional)

You can test script logic locally:

```bash
npm run build
MYDEVIL_HOST=s123.mydevil.net \
MYDEVIL_USER=USERNAME \
MYDEVIL_PORT=22 \
MYDEVIL_TARGET_DIR=/home/USERNAME/domains/example.com/public_html \
bash ./scripts/deploy-mydevil.sh
```

## Notes

- Deploy uses `rsync --delete`, so files removed locally in `dist/` will also be removed remotely.
- If SSH fails with host verification issues, set `MYDEVIL_KNOWN_HOSTS` explicitly.
