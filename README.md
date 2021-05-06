# Forge App using Custom UI

This project contains a Forge app written in Javascript that allows search, view and open issues in a Jira project page.

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

---

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

### Quick summary

You need the following:

- Node.js (version 10.0.0 or later)
  > We recommend running Node under your user. If you're running node under root privilege instead, you'll need to update the Node configuration to allow global module installs using binaries by running:

```
npm config set unsafe-perm true
```

- Docker (version 17.03 or later)

- Install the Forge CLI globally (I recommend install @latest version)

```
npm install -g @forge/cli@latest
```

- Log in with an Atlassian API token

  1.  Create API token https://id.atlassian.com/manage/api-tokens

  2.  Run `forge login`

---

## Quick start

### Register the app

- Register the app by running
  > Note, the forge register command creates a unique app ID in the manifest.yml file and links the ID to the current developer. Forge apps can currently only be deployed and installed by the developer who is linked to the app.

```
forge register
```

### Frontend

- Change into the frontend directory by running:

```
cd static/forge-app
```

- Install frontend dependencies by running:

```
npm install
```

- Build frontend by running:

```
npm run build
```

### Deployment

- Change into root directory by running:

```
cd ../..
```

- Install dependencies by running:

```
npm install
```

- Deploy your app by running

```
forge deploy -e production
```

- Install your app in an Atlassian site by running

```
forge install -e production
```

---

### Notes

- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.
- By default `forge deploy` and `forge install` use development environments, that allows use `forge tunnel` and `forge logs`. You can specify another environment with the **_--environment (-e)_** flag. [More details about environments](https://developer.atlassian.com/platform/forge/environments/)

---

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
