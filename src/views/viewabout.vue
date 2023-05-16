<script>
import { ref, watch } from "vue";
import axios from "axios";

export default {
  data() {
    return {
      nomor: "1",
      judul: "",
      arti: "",
      listSurah:ref([]),
      namaSurah:""
    };
  },

  watch: {
    nomor() {
      this.getSurah();
    }
  },

  mounted() {
    this.getSurah();
    this.getlistSurah();
  },

  methods: {
    getSurah() {
      axios
        .get(`https://api.quran.com/api/v4/chapters/${this.nomor}?language=id`)
        .then(response => {
          this.judul = response.data.chapter;
          this.arti = this.judul.translated_name;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getlistSurah(){
      axios
      .get(`https://api.quran.com/api/v4/chapters?language=en`)
      .then(response => {
        this.listSurah = response.data.chapters;
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
        <input v-model="nomor" type="search" placeholder="1-114" class="" aria-label="Search" />
      </ul>
    </div>
  </div>
</nav>
  <div>
    <label for="surah">
      <select class="form-control" v-model="selectedChapter">
        <option v-for="chapter in listSurah" :key="chapter.id">{{chapter.name_simple}}</option>
      </select>
    </label>
    <h1>Nama Surah :{{judul.name_simple}}</h1>
    <p>Arti Surah :{{arti.name}}</p>
    <input v-model="nomor" type="search" placeholder="1-114" class="form-control" aria-label="Search" />
  </div>
</template>
