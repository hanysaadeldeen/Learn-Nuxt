<template lang="pug">
  div
    UCard.card
      div(v-if="!showConfirmEmailMessage")
        h3 {{ authState }}
        .input-container
          input(
            placeholder="Email" 
            v-model="input.email") 
          input(
            placeholder="Password"
            v-model="input.password"
            type="password")
          
        UButton(@click="submitUser") {{authState === "login" ? "Login" : "Signup"}}
        p.error {{ authError }}
        p.toggleLogin(@click="toggleLogin") {{authState === "login" ? "Create Account now" : " Go ahead an log in"}}
      div(v-else)
        //-{{ user }} 
        h3 Confirm Your email
      
  
</template>

<script setup lang="ts">
const input = ref({ email: "", password: "" });
const authState = ref<string>("login");
const authError = ref<any>("");

const showConfirmEmailMessage = ref(false);

const router = useRouter();

const { user, signUp, logIn, logOut, isLoggedIn } = useAuth();
const toggleLogin = () => {
  authState.value = authState.value === "login" ? "signup" : "login";
};

const submitUser = async () => {
  authError.value = "";
  try {
    if (authState.value === "login") {
      await logIn({ email: input.value.email, password: input.value.password });
      router.push("/notes");
    } else {
      await signUp({
        email: input.value.email,
        password: input.value.password,
      });
      showConfirmEmailMessage.value = true;
    }
    input.value.email = "";
    input.value.password = "";
  } catch (error) {
    authError.value = error;
  }
};
</script>

<style scoped>
.card {
  padding: 1rem;
  width: 25rem;
}

.card h3 {
  font-size: 1.75rem;
  text-transform: capitalize;
}

.input-container {
  display: flex;
  flex-direction: column;
}

.input-container input {
  margin-bottom: 0.3rem;
  padding: 0.2rem;
  outline: none;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
}

p {
  color: blue;
  font-size: 0.5rem;
  cursor: pointer;
}

.error {
  color: red;
}
.toggleLogin {
  text-align: center;
  font-size: 16px;
}
</style>
