<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Arip Budiman',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin12345'),
            'role' => 'admin',
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Mega Ranisa',
            'email' => 'kasir@gmail.com',
            'password' => bcrypt('kasir12345'),
            'role' => 'kasir',
        ]);
    }
}
