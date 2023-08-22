<script>
	import '../app.css';
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<NavBar />
<main class="pt-20 min-h-screen overflow-x-hidden">
	<slot />
</main>
<Footer />
