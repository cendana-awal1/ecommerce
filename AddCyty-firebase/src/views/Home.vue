<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered mx-auto w-auto">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>City Name</th>
                    <th>City Description</th>
                    <th>City Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(city, index) in cities">
                    <td>{{ index + 1 }}</td>
                    <td>{{ city.city_name }}</td>
                    <td>{{ city.city_description }}</td>
                    <td>
                      <img :src="city.city_image" width="100" height="100" />
                    </td>
                    <td>
                      <span class="badge badge-primary badge-pill">
                        <router-link
                          :to="{ path: `/edit-city/${city.id}` }"
                          class="btn btn-primary ml-2"
                          >Edit</router-link
                        >
                        <a
                          href="#"
                          class="btn btn-danger"
                          @click="deleteCity(city.id)"
                          >Delete</a
                        >
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import citiesColRef from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
import { onMounted, ref } from "vue";

const cities = ref([]);
const selectedDoc = ref(null);

const fetchCities = async () => {
  const docs = await getDocs(citiesColRef);
  let citys = [];
  docs.forEach((doc) => {
    let cityData = doc.data();
    cityData.id = doc.id;
    citys.push(cityData);
  });
  // console.log(cities);
  cities.value = citys;
  // console.log(cities.value);
};
const editCity = (city) => {
  selectedDoc.value = city;
  console.log(selectedDoc.value);
};
const deleteCity = (id) => {
  let cityRef = doc(citiesColRef, id);
  if(confirm("Are you sure to delete this city?")){
    deleteDoc(cityRef);
  }
  fetchCities();
  
 
};

onMounted(() => {
  fetchCities();
});
</script>
