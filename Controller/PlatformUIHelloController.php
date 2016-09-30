<?php

namespace DP\PlatformUIExtensionSkeletonBundle\Controller;

use EzSystems\PlatformUIBundle\Controller\Controller as BaseController;

class PlatformUIHelloController extends BaseController
{
    public function helloAction()
    {
        return $this->render('DPPlatformUIExtensionSkeletonBundle:PlatformUI:hello.html.twig');
    }
}
