<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Games extends Model
{
    protected $table = "Games";
    protected $fillable = [
        "name",
        "nota",
        "image"
    ];
}
