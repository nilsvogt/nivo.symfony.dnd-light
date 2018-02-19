<?php

namespace App\Controller;

use App\Blink1\Blink1;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class IndexController extends AbstractController
{
    public function index(Blink1 $blink1) {
        return $this->render('index.home.twig');
    }
}