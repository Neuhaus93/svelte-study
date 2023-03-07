<script>
	import { Button } from '$lib/components/Button';
	import { page } from '$app/stores';

	// test
	$: loginPage = $page.url.pathname === '/auth/login';
</script>

<div>
	<div class="flex min-h-screen items-center justify-center">
		<form class="flex flex-col">
			<h1 class="mb-2 text-2xl font-bold">{loginPage ? 'Login' : 'Register'}</h1>

			<div class="form-control">
				<label class="label" for="email">Email</label>
				<input class="input-bordered input" id="email" type="email" />
			</div>

			<div class="form-control mt-1">
				<label class="label" for="password">Password</label>
				<input class="input-bordered input" id="password" type="password" />
			</div>

			<Button type="submit" class="testing mt-6">Login</Button>

			<p class="mt-2 text-sm underline">Forgot password?</p>
		</form>
	</div>
</div>
