<script>
	let team = [
		{
			name: 'Coriss Ambady',
			position: 'Chief Engineer',
			avatar: 'https://picsum.photos/200/200.jpg'
		},
		{
			name: 'Tom Brady',
			position: 'Chief Technician',
			avatar: 'https://picsum.photos/200/200.jpg'
		},
		{
			name: 'Christopher Robinson',
			position: 'Head Foreman',
			avatar: 'https://picsum.photos/200/200.jpg'
		},
		{
			name: 'Minasa Miyagi',
			position: 'Accountant',
			avatar: 'https://picsum.photos/200/200.jpg'
		}
	];
</script>

<!-- ====== Team Section Start -->
<section class="pt-20 pb-10 lg:pt-10 lg:pb-20 mb-8 bg-primary text-primary-content">
	<div class="container mx-auto">
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4">
				<div class="mx-auto mb-12 max-w-md text-center">
					<span class="text-gray-200 mb-2 block text-lg font-semibold"> Our Team </span>
					<h2 class="mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">Meet our Awesome Team</h2>
				</div>
			</div>
		</div>
		<div class="mx-4 flex flex-wrap justify-center">
			{#each team as m}
				<div class="w-full px-4 md:w-1/2 xl:w-1/4">
					<div class="mx-auto mb-10 w-full max-w-sm">
						<div class="relative overflow-hidden rounded-lg">
							<img src={m.avatar} alt="image_" class="w-full max-h-96 object-contain" />
							<div class="absolute bottom-5 left-0 w-full text-center">
								<div
									class="relative mx-5 overflow-hidden rounded-lg bg-primary text-primary-content py-5 px-3"
								>
									<h2 class="text-xl font-semibold">{m.name}</h2>
									<p class="text-lg">{m.position}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- ====== Team Section End -->
