

<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <h2>Add City</h2>
                    <form @submit.prevent="createCity">
                        <div class="form-group">
                            <input type="text" class="form-control mb-2" placeholder="Name" v-model="name" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control mb-2" placeholder="description"
                                v-model="description" />
                        </div>
                        <div class="form-group">
                            <div v-if="picture">

                                <img :src="picture" alt="picture" width="80">
                            </div>
                            <input type="file" class="form-control mb-2" placeholder="picture" @change="onFileChange" />
                        </div>
                        <button class="btn btn-primary">Create City</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import citiesColRef from "../firebase";
import { addDoc } from "firebase/firestore";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const name = ref("")
const description = ref("")
const picture = ref("")

const onFileChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
        picture.value = e.target.result
    }
   
}

const createCity = async () => {
    const city = {
        city_name: name.value,
        city_description: description.value,
        city_image: picture.value
    };
    await addDoc(citiesColRef, city);
    name.value = "";
    description.value = "";
    picture.value = "";
    router.push({ name: "home" });
};


// export default {
//   data() {
//     return {
//       name: null,
//       county: null,
//       country: null,
//     };
//   },
//   methods: {
//     async createCity() {
//       console.log("Creating Document");
//       const addedDoc = await addDoc(citiesColRef, this.$data);
//       alert("Document created successfully!");
//       console.log(addedDoc);
//       this.$router.push("/");
//     },
//   },
// };
</script>

<style>
</style>
