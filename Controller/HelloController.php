<?php

namespace DP\PlatformUIExtensionSkeletonBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Templating\EngineInterface;

class HelloController
{
    private $templating;

    public function __construct(EngineInterface $templating)
    {
        $this->templating = $templating;
    }

    public function helloAction()
    {
        return $this->templating->renderResponse('DPPlatformUIExtensionSkeletonBundle::hello.html.twig');
    }
}
