phonegap-angular
================

Barebones JS & CSS template to create Phonegap applications using AngularJS.

Includes some useful directives and services, and a 3-row layout stylesheet supporting a few common view types:

Header and content:
'''html
<header>
	<h1>My awesome app</h1>
</header>
<div>
	<!-- content goes here -->
</div>
'''
Header and iScroll-able content:
<header>
	<h1>My awesome app</h1>
</header>
<div pgng-scroll>
	<!-- content goes here -->
</div>

Header and tabs:
<header>
	<h1>My awesome app</h1>
</header>
<dl pgng-tabs>
	<dd data-tab="list">List</dd>
	<dd data-tab="map">Map</dd>
</dd>
<ul>
	<li data-tab="list">List tab content</dd>
	<li data-tab="map">Map tab content</dd>
</ul>

Services:
SpinnerService - show/hide a spinner overlay.

Directives:
Tabs - Scroller-aware tabs with content filling all available screen space.

