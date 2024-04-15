<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImportedUser extends Model
{
    use HasFactory;

    protected $casts = [
        'attributes' => 'json',
    ];
}
