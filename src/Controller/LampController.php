<?php

namespace App\Controller;

use App\Blink1\Blink1;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class LampController extends AbstractController
{
    public function blink(Blink1 $lamp) {
        $lamp->blink(3);
    }
}   