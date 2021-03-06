🎨🖌
=
[![Build Status](https://travis-ci.org/mstaicu/website-alex.svg?branch=master)](https://travis-ci.org/mstaicu/website-alex)

## Table of content
- [Introduction](#introduction)
- [Prerequisities](#prerequisites)
- Installation
  - [Getting the sources](#getting-the-sources)
  - [Installing the dependencies](#installing-the-dependencies)
- Usage
    - [Development environment](#development-environment)
    - [Production deployment](#production-deployment)

## Introduction

This is a client-side application powered by React

## Prerequisites

The following tools need to be installed before you can develop or deploy against this application:

* [github account](https://github.com/join)
* terminal emulator (pick one)
  * [Windows Terminal](https://www.microsoft.com/en-gb/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab)
  * [Cmder](https://cmder.net/)
  * [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7)
  * cmd
* [nodejs](https://nodejs.org/)
* [git](https://git-scm.com/download/win)

## Getting the sources

In order to start contributing to this project or even run it locally, you must first retrieve a copy of the project from Github. In order to do this, open a terminal emulator and navigate to a folder where you will download the sources of the project

First, change the partition

```bash
$ d:
```

Navigation in the terminal is done with the `change directory` or `cd` command

```bash
$ cd D:\Projects
```

Note that you must specify the absolute path, on the partition, to an existing directory

After we have navigated to the desired folder, clone the project

```bash
$ git clone https://github.com/mstaicu/website-alex.git
```

This will download a copy of the project in your current folder (where you `changed directory`) under the `website-alex` folder. After this operation has completed, you need to `change directory` into the project folder

```bash
$ cd website-alex
```

## Installing the dependencies

You must install the application dependencies in order to run this application on your local machine. The installation of the dependencies is done using the following command, issued from the terminal emulator at the root of the project (`npm` is a program that comes with [nodejs](https://nodejs.org/) and is available as a global variable in your terminal emulator after the installation of nodejs)

```bash
$ npm install
```

## Development environment

👉🏻 All the following commands must be issued at the root folder of the project. For example, if the project folder has been cloned in `D:\Experiments\website-alex`, you must navigate inside this folder from your terminal using the `cd` shell command

In order to run the project locally, you must issue the following command in your terminal

```bash
$ npm run dev
```

## Production deployment

We are using Travis CI for continous delivery and deployment to production. The deployment pipeline follows the convention:

* Contributions to this project should be done through Github pull requests. For every opened pull request, a new job is started on Travis CI, which:
  * validates the project
  * builds the project
* A maintainer of the project must approve the pull request, based on the build status from Travis CI
* Once the pull request is merged in the master branch of the repository, Travis CI will start another job, which:
  * validates the project
  * builds the project
  * deploys the project to AWS S3
  * invalidates the Cloudfront distribution