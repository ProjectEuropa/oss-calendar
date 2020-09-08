<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Laravel\Passport\Passport;

class GoogleSyncTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $user = factory(User::class)->create();

        // $response = $this->json('POST', '/api/auth/login', [
        //     'username' => $user->username,
        //     'password' => 'secret'
        // ]);

        // $accessToken = (json_decode($response->getContent())->access_token);
        // $response = $this->actingAs($user)->get('/api/google/isAuth', [
        //     'headers' => [
        //         'Accept' => 'application/json',
        //         'Authorization' => 'Bearer '.$accessToken,
        //     ],
        // ]);

        Passport::actingAs(
            factory(User::class)->create(),
            []
        );

        $response = $this->get('/api/google/isAuth');

        $response->assertStatus(200);
    }
}
