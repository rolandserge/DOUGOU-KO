<?php

namespace App\Jobs;

use App\Mail\MailCommande;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class CommandeJobs implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    protected $user;
    protected $commande;
    protected $elements;

    public function __construct($user, $commande, $elements)
    {
        $this->user = $user;
        $this->commande = $commande;
        $this->elements = $elements;
    }

    /**
     * Execute the job.
     */
    public function handle()
    {
        $contenu = new MailCommande($this->commande, $this->elements);
        Mail::to($this->user->email)->send($contenu);
    }
}