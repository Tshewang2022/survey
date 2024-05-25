<template>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2
                classNameName="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
            >
                Register for free
            </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" @submit="register">
                <!-- name input for the register -->
                <div>
                    <label
                        for="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                        >Full Name</label
                    >
                    <div classNameName="mt-2">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autocomplete="name"
                            required
                            v-model="user.name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <!-- enter email address -->
                <div>
                    <label
                        for="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                        >Email address</label
                    >
                    <div classNameName="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required
                            v-model="user.email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <!-- enter password -->
                <div>
                    <div className="flex items-center justify-between">
                        <label
                            for="password"
                            className="block text-sm font-medium leading-6 text-gray-900"
                            >Password</label
                        >
                    </div>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required
                            v-model="user.password"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <!-- confirm password -->
                <div>
                    <div className="flex items-center justify-between">
                        <label
                            for="password_confirmation"
                            className="block text-sm font-medium leading-6 text-gray-900"
                            >Confirm password</label
                        >
                    </div>
                    <div className="mt-2">
                        <input
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            autocomplete="current-password_confirmation"
                            required
                            v-model="user.password_confirmation"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <!-- create account-->
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Create account
                    </button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Or
                <router-link
                    :to="{ name: 'Login' }"
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >login into your account</router-link
                >
            </p>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex/dist/vuex.cjs.js";
const router = useRouter();
const store = useStore();
//defining the user object here
const user = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
};

// defining the register funtion, where we are going to register the user into the database
function register(ev) {
    ev.preventDefault();
    store.dispatch("register", user).then((res) => {
        router.push({
            name: "Dashboard",
        });
    });
}
// export default {
//     name: "Register",
// };
// import { LockedClosedIcon } from "@heroicons/vue/solid";
</script>

<style scoped></style>
