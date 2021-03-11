<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width">
<meta name="robots" content="noindex,nofollow">
<title>@yield('title', $title ?? __('Here')) ‹ Eklektos.io</title>
<link rel="icon" type="image/png" href="/assets/site/eklektos-io__e.svg" sizes="32x32" />
<link rel="icon" type="image/png" href="/assets/site/eklektos-io__e.svg" sizes="16x16" />
<link rel="shortcut icon" type="image/x-icon" href="/assets/site/eklektos-io__e.svg" sizes="16x16 32x32"/>
<link href="{{ Statamic::cpAssetUrl('css/cp.css') }}?v={{ Statamic::version() }}" rel="stylesheet" />

@foreach (Statamic::availableStyles(request()) as $package => $paths)
    @foreach ($paths as $path)
        <link href="{{ Statamic::vendorAssetUrl("$package/css/$path") }}" rel="stylesheet" />
    @endforeach
@endforeach

@stack('head')
