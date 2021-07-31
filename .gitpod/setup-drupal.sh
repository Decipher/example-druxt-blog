#!/usr/bin/env bash
if [ -n "$DEBUG_DRUXTJS" ]; then
    set -x
fi

# Set up ddev for use on gitpod

set -eu -o pipefail

DRUPAL_DIR="${GITPOD_REPO_ROOT}/drupal"

# Set up DDEV
cd "$GITPOD_REPO_ROOT" && .gitpod/setup-ddev.sh

# Set up Drupal website
cd "$DRUPAL_DIR" && ddev composer install
cd "$DRUPAL_DIR" && ddev drush tome:install -y && ddev drush uli
