<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Spatie\GoogleCalendar\Event;

class SyncGoogleContoller extends Controller
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
}
