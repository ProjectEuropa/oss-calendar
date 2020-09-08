<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Spatie\GoogleCalendar\Event;
use Auth;

class SyncGoogleController extends Controller
{
    //
    public function sync(Request $request)
    {
        $event = new Event;
        $event->name = $request->summary;
        $event->startDateTime = new Carbon("{$request->start_date} {$request->start_date_time}");
        $event->endDateTime = new Carbon("{$request->end_date} {$request->end_date_time}");
        $event->save();
    }

    /**
     *
     */
    public function isAuth() {
        try {
            Event::get(null, null, [], Auth::user()->email);
        } catch (\Exception $e) {
            return ['google_auth' => 0];
        }
        return ['google_auth' => 1];
    }
}
