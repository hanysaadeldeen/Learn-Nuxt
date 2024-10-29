export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth();

  const userIsLoggedIn = computed(() => isLoggedIn());

  if (!userIsLoggedIn.value) {
    return navigateTo("/");
  }
});
