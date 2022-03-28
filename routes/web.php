<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Documents\DocumentController;
use App\Http\Controllers\File\FileController;
use App\Http\Controllers\Inventory\ContactController;
use App\Http\Controllers\Inventory\ItemController;
use App\Http\Controllers\Inventory\ItemUnitController;
use App\Http\Controllers\Settings\SettingController;
use App\Http\Controllers\Students\Frontend\StudentRegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'api'], function () {
    Route::get('logo', [\App\Http\Controllers\Settings\LogoController::class, 'index']);
    // List nav bar menu for guest
    Route::get('menus', [AuthController::class, 'menus']);
    Route::post('/auth/login', [AuthController::class, 'login']);

    Route::group(['prefix' => 'registration'], function () {
        Route::get('/print', [StudentRegisterController::class, 'export'])->name('ppdb.print.registration');
        Route::post('/register', [StudentRegisterController::class, 'store'])->name('ppdb.register.post');
        Route::post('/forget-id', [StudentRegisterController::class, 'storeForgetId'])->name('ppdb.forgetId.post');
        Route::post('/announcement', [StudentRegisterController::class, 'studentAnnouncement']);
    });

    Route::group(['middleware' => ['auth:sanctum']], function () {

        Route::group(['prefix' => 'auth'], function () {
            Route::post('/roles', [AuthController::class, 'roles']);
            Route::post('/permissions', [AuthController::class, 'permissions']);
            Route::get('/user', [AuthController::class, 'user']);
            Route::post('/logout', [AuthController::class, 'logout']);
            Route::post('/refresh', [AuthController::class, 'refresh']);
        });
        // Inventory routes
        Route::group(['prefix' => 'inventory'], function () {
            Route::apiResources([
                'contacts' => ContactController::class,
                'items' => ItemController::class,
                'item-units' => ItemUnitController::class,
            ]);
        });

        // Student registration routes
        Route::prefix('student')
            ->group(__DIR__ . '/student.php');

        // List all master routes
        Route::prefix('master')
            ->group(__DIR__ . '/master.php');

        // List all sales routes
        Route::prefix('transactions')
            ->group(__DIR__ . '/transactions.php');

        // List all documents routes
        Route::get('document-files', [FileController::class, 'index']);
        Route::post('document-files', [FileController::class, 'store']);
        Route::delete('document-files', [FileController::class, 'destroy']);

        Route::group(['prefix' => 'documents'], function () {
            Route::apiResource('form', DocumentController::class);
            Route::get('print', [\App\Http\Controllers\Documents\DocumentExportController::class, 'print']);
            Route::get('email', [\App\Http\Controllers\Documents\DocumentExportController::class, 'email']);
        });

        // List all master routes
        Route::prefix('financial')
            ->group(__DIR__ . '/financial.php');

        // Route Resource for settings
        Route::apiResource('settings', SettingController::class);
    });
});

// Add this route last as a catch-all for undefined routes.
Route::get(
    '/{path?}',
    function (Request $request) {
        // ...
        // If the request expects JSON, it means that
        // someone sent a request to an invalid route.
        if ($request->expectsJson()) {
            abort(404);
        }

        // Fetch and display the page from the render path on nuxt dev server or fallback to static file
        return file_get_contents(env('NUXT_OUTPUT_PATH', public_path('spa.html')));
    }
)->where('path', '.*')
    // Redirect to Nuxt from within Laravel
    // by using Laravels route helper
    // e.g.: `route('nuxt', ['path' => '/<nuxtPath>'])`
    ->name('nuxt');
