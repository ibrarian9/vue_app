<template>

 
  <div class="jumbotron jumbotron-fluid mt-5">
    <div class="container text-center">
      <br>
      
      <h1 id="test" class="mt-5 display-4 fw-bolder">Alquran Flexibel Dzaki</h1>
      
      <p class="lead">Bisa diakses kapan dan dimana saja</p>
      
    </div>
  </div>
  
  <!--search-->
  <div class="container">
    <div class="row align-item-center justify-content-center">
      <form class="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-12 p-1 mt-4">
        <input class="form-control form-control-lg mb-1 font-italic" type="text" v-model="search" placeholder="cari surah yang kamu inginkan... 🔍" />
      </form>
    </div>
  </div>

  <!-- Bagian Surah -->
  <div class="content-surah mx-5">
    <div class="row">
      <div class="col-xl-3 col-sm-6 col-12 p-1" v-for="(chapter, index) in filterSurah" :key="index">
        <div class="card mx-3 my-3">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div  class="media-body m-auto text-center">
                  <h5 class="card-title">{{ chapter.name_simple }}</h5>
                  <p class="card-text">{{ chapter.translated_name.name }}</p>
                  <router-link :to="{ name: 'baca', params: { id: chapter.id } }" id="warna" class="btn btn">View </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watch } from "vue";
import axios from "axios";

export default {
  data() {
    return {
      nomor: "1",
      judul: "",
      arti: "",
      listSurah: ref([]),
      namaSurah: "",
      search: "",
    };
  },

  watch: {
    nomor() {
      this.getSurah();
    },
  },

  mounted() {
    this.getSurah();
    this.getlistSurah();
  },

  methods: {
    getSurah() {
      axios
        .get(`https://api.quran.com/api/v4/chapters/${this.nomor}?language=id`)
        .then((response) => {
          this.judul = response.data.chapter;
          this.arti = this.judul.translated_name;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getlistSurah() {
      axios
        .get(`https://api.quran.com/api/v4/chapters?language=id`)
        .then((response) => {
          this.listSurah = response.data.chapters;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    filterSurah: function () {
      return this.listSurah.filter((listSurah) => {
        return listSurah.name_simple.toLowerCase().split("-").join(" ").match(this.search);
      });
    },
  },
};
</script>
<style scoped>
.card {
  border-radius: 20pt;
}

#warna{
  background-color: #FFDE59;
}

#test{
  color: black;
  font-size: 2rem;
  letter-spacing: 10px;
  border-right: 5px solid;
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  animation: 
           typing 3s steps(8),
           cursor .4s step-end infinite alternate;
           display: inline-block;



}
@keyframes cursor {
         50% { border-color: transparent}
    
  }

  @keyframes typing {
          from { width:0}
  }
</style>

