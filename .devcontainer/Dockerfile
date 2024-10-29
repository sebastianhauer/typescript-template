# Use Microsoft's official TypeScript-Node dev container image
# The default variant is Node 22 on Debian Bookworm
ARG VARIANT="22-bookworm"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:${VARIANT}

# System Update
RUN DEBIAN_FRONTEND=noninteractive \
    && apt-get update --quiet --quiet \
    && apt-get upgrade --quiet --quiet --yes --no-install-recommends \
    && apt-get autoremove --quiet --quiet --yes \
    && apt-get clean --quiet --quiet \
    && rm -rf /var/lib/apt/lists/* \
    rm -rf /tmp/* /var/tmp/*

# Additional Development Tools
RUN DEBIAN_FRONTEND=noninteractive \
    && apt-get update --quiet --quiet \
    && apt-get install --quiet --quiet --yes --no-install-recommends \
    vim-nox \
    emacs-nox \
    && apt-get autoremove --quiet --quiet --yes \
    && apt-get clean --quiet --quiet \
    && rm -rf /var/lib/apt/lists/* \
    &&rm -rf /tmp/* /var/tmp/*

# Update Node.js
# Update to latest minor version while keeping major version compatibility
# Base image includes Node.js from nodejs.org; using nvm for version management
RUN . /usr/local/share/nvm/nvm.sh \
    && NODE_MAJOR=$(node --version | cut -d. -f1 | tr -d 'v') \
    && nvm install $NODE_MAJOR --reinstall-packages-from=current --latest-npm \
    && nvm cache clear \
    && rm -rf /tmp/* /root/.npm/*
