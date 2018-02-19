<?php

namespace App\Blink1;

class Blink1
{
    /**
     * @var null Path to the Blink1 executable
     */
    protected $binPath = null;

    public function __construct(string $binPath) {
        $this->binPath = $binPath;
    }

    /**
     * @param int $times The number the lamp blinks
     */
    public function blink(int $times) {
        $cmd = sprintf(
            '%s --blink %s',
            $this->binPath,
            $times
        );

        shell_exec($cmd);
    }
}