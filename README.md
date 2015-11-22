# node-composer-runner

A node.js wrapper for the php package manager [composer](https://github.com/composer/composer).

## Motivation

In times where you have complex build chains for your frontend environment based on NodeJS but interchangeable backend systems, NPM is a good choice to unify processes across your projects. I am working with different backend systems in my daily business but NPM is the foundation in all projects to perform common tasks. One of them is the installment of all dependencies for frontend and backend.

When using a NPM run scripts to install php dependencies via composer you need to be sure to have composer installed on your system. This can be a little bit complicated to do for a php nooby. To reduce local dependencies on your development environment it would be great to have a NPM package that will handle composer installment and versions management of composer itself for you. This package will do exactly that.

## Dependencies

This package will not reduce the dependency of php to be installed on your environment. Be sure to have php installend and available in your PATH environment.

## Usage

You should install this package into your project and call it from your npm run scripts.

It is also possible to install it globally but that would have no benefit because the primary goal is to remove global dependencies on the developers local environment.

``` base
npm install --save-dev node-composer-runner
```

Then you can use it in the package.json as a node run script:

``` json
{
  ...
  scripts: {
    "postinstall": "composer-runner -- install"
  }
}
```

### CLI

You can run composer via ``composer-runner``. Use ``--`` to forward commands directly to composer.

Some examples:

``` base
composer-runner -- install --dry-run
composer-runner -- -v
```

### Versions

By default every version of node-composer-runner is bundled with a predefined specific composer version, to be sure the repository is independent for breaking changes to the composer library.

If the specified version is to old, you can override it in your package json:
``` json
{
  ...
  "engines": {
    "composer": "1.0.0-alpha11"
  }
} 
```

You can defined every version that is defined on the composer server like ``https://getcomposer.org/download/<version>/composer.phar``.
