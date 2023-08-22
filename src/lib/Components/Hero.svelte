<script>
	// @ts-nocheck

	import Countup from 'svelte-countup';
</script>

<div
	class="h-[90vh] px-10

bg-hero flex lg:flex-row gap-3 relative"
>
	<div
		class="lg:basis-3/4 px-10 h-[80vh] flex flex-col gap-1 lg:items-start items-center w-full justify-center"
	>
		<p class="text-4xl lg:text-6xl font-semibold">Find your</p>
		<p class="text-6xl lg:text-7xl font-extrabold text-center lg:text-start">Dream House</p>
		<p class="mt-2 lg:text-lg text-center lg:text-start text-2xl font-light">
			An Award-winning real-estate company
			<br />
			housing Ugandans since 2007
		</p>

		<!-- Buttons  -->
		<div class="mt-3 flex flex-col lg:flex-row gap-2 lg:gap-6">
			<button class="btn-filled">Discover Now</button>
			<button class="btn-ghost flex flex-row gap-3 items-center justify-center"
				>See our Houses
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="w-5 h-5"
				>
					<path
						d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"
					/>
				</svg>
			</button>
		</div>
		<!-- Buttons End  -->

		<br />

		<!-- Counter -->
		<div class="w-56 flex flex-col gap-2 mt-10 mx-10">
			<p class="font-extrabold text-center text-6xl">
				<Countup duration={1000} value={560} />+
			</p>
			<p class="font-light text-xl text-center text-light">HOUSES PROVIDED IN 25 DISTRICTS</p>
		</div>
		<!-- Counter End -->
	</div>

	<!-- Bottom Right Blog  -->
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		id="visual"
		viewBox="0 0 900 450"
		width="900"
		height="450"
		version="1.1"
		class="bottom-0 right-0 absolute z-10 fill-gray-50 opacity-20 hidden lg:block"
		><g transform="translate(900, 450)"
			><path
				d="M-202.5 0C-192.6 -32.6 -182.8 -65.2 -167.1 -96.5C-151.5 -127.8 -130.1 -157.9 -101.3 -175.4C-72.4 -192.8 -36.2 -197.7 0 -202.5L0 0Z"
				fill=""
			/></g
		><g transform="translate(0, 0)" /></svg
	>
</div>

<style>
	.bg-hero {
		@media (min-width: 1060px) {
			background-image: url('/house.png');
			background-repeat: no-repeat;
			background-size: auto 80vh;
			background-position: right bottom;
		}
	}
</style>
