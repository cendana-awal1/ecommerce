<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Update City</h2>
          <form @submit.prevent="updateCity">
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Name"
                v-model="cities.city_name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="description"
                v-model="cities.city_description"
              />
            </div>
            <div class="form-group">
              <div>
                <img :src="cities.city_image" alt="picture" width="80" />
              </div>
              <input
                type="file"
                class="form-control mb-2"
                placeholder="picture"
                
              />
            </div>
            <button class="btn btn-primary">Update City</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import citiesColRef from "../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { onMounted, ref, reactive } from "vue";

const router = useRouter();


const route = useRoute();
const cityId = ref(route.params.id);

const selectedCity = ref([]);

const cities = reactive({
  city_name: "",
  city_description: "",
  city_image: "",
});

onMounted(async () => {
  const getCity = doc(citiesColRef, cityId.value);
  const city = await getDoc(getCity);

  selectedCity.value = city.data();
  console.log(selectedCity.value);
  cities.city_name = selectedCity.value.city_name;
  cities.city_description = selectedCity.value.city_description;
  cities.city_image = selectedCity.value.city_image;
});

const updateCity = async () => {
   const docRef = doc(citiesColRef, cityId.value);
  await setDoc(docRef, cities);
  router.push({ name: "home" });
};
</script>
