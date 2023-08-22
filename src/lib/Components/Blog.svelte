<!-- ====== Blog Section Start -->
<section class="pt-20 pb-10 lg:py-10">
	<div class="container mx-auto">
		<div class="-mx-4 flex flex-wrap justify-center">
			<div class="w-full px-4">
				<div class="mx-auto mb-10 max-w-md text-center lg:mb-10">
					<h2 class="mb-4 text-4xl font-bold sm:text-4xl">Our Blog</h2>
				</div>
			</div>
			<div class=" grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-5">
				{#each { length: 8 } as f}
					<div class="w-full px-4">
						<div class="mx-auto mb-3 max-w-sm">
							<div class="mb-2 overflow-hidden rounded">
								<img
									src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
									alt="image_"
									class="w-full"
								/>
							</div>
							<div>
								<span
									class="bg-primary my-2 inline-block py-1 px-4 text-center text-xs font-semibold
                                rounded-full
                                leading-loose text-white"
								>
									Dec 22, 2023
								</span>
								<h3>
									<a
										href="/"
										class="text-dark hover:text-primary mb-1 inline-block text-xl
                                        font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
									>
										Meet AutoManage, the best AI management tools
									</a>
								</h3>
								<p class="">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
<!-- ====== Blog Section End -->
