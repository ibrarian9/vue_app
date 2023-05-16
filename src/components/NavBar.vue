<template>
  <nav id="coy"  class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb- lg-0">
          <li class="nav-item">
            <router-link class="nav-link active text-black" to="/">Beranda</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link active text-black" to="/kontak">Kontak</router-link>
          </li>
        
          <!-- list untuk surat -->
          <div class="dropdown">
            <a class="btn dropdown-toggle text-black" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> Pilih Surah Yang diinginkan </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li v-for="chapter in listSurah" :key="chapter.id">
                <router-link class="dropdown-item" :to="{ name: 'baca', params: { id: chapter.id } }">{{ chapter.name_simple }}</router-link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default{
  data() {
    return {
      nomor: "1",
      judul: "",
      arti: "",
      listSurah: ref([]),
      namaSurah: "",
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
};
</script>

<style>
#coy{
  background-color: #FFDE59;
  text-align: center;
}

#navbarSupportedContent{
  text-align: center;

}

#coyi{
  text-align: center;

}

</style>
