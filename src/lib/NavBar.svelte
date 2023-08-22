<script>
	import { page } from '$app/stores';
	$: _page = $page.route.id;
</script>

<div
	class="flex-row justify-between py-4 px-10 items-center top-0 left-0 absolute w-full hidden lg:flex"
>
	<!-- Nav Logo -->
	<div class="flex-1">
		<a href="/" class="text-2xl font-bold cursor-pointer"> Nyumba</a>
	</div>
	<!-- Logo End  -->

	<!-- Nav Links  -->
	<div class="flex flex-row gap-12 items-center justify-center">
		<ul class="nav-links">
			<li class="">
				<a class="nav-link" class:active={_page == '/'} href="/">Home</a>
			</li>
			<li class="">
				<a class="nav-link" class:active={_page == '/about'} href="/about">About Us</a>
			</li>
			<li class="">
				<a class="nav-link" class:active={_page == '/services'} href="/services">Services</a>
			</li>
			<li class="">
				<a class="nav-link" class:active={_page == '/blog'} href="/blog">Blog</a>
			</li>
		</ul>

		<button class="btn-filled ml-8">Contact Us</button>
	</div>
	<!-- Nav Links End  -->
</div>
