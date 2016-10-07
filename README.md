# PlatformUIExtensionSkeletonBundle

## Description

PlatformUI Skeleton Extension bundle, it shows several PlatformUI extension points:

* How to personnalize the UI (Custom CSS and template override)
* How to add a Dashboard Block
* How to integrate a PHP API into PlatformUI
* How to tweak a Field Edit View (Add a sign counter for TextBlock and RichText
  fields)

More info can be found in the [Extending and Customizing
the eZ Platform User
Interface](http://dpobel.github.io/slides-ez/extending-platformui-ezconference-2016/#/) slides.

## Install

If you want to install this bundle in an eZ Platform setup:

* create the folder `src/DP`
* clone this repository in `src/DP`
* add the following line in `app/AppKernel.php` in the `$bundles` variable to enable the bundle

  ```php
  new DP\PlatformUIExtensionSkeletonBundle\DPPlatformUIExtensionSkeletonBundle(),
  ```

* add the following lines to `app/config/routing.yml`:
  ```yml
  _dpExtendingPlatormUIRoutes:
      resource: "@DPPlatformUIExtensionSkeletonBundle/Resources/config/routing.yml"
  ```

* clear the caches
