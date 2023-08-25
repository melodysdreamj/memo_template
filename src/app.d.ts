// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces


declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}

		interface Platform {
			env: {
				PromptLink: prompt_gem_prompt;
				SmallCategory: prompt_gem_category;
				MainPage: prompt_gem_mainpage;
			};
			context: {
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache }
		}

	}
}

export {};
