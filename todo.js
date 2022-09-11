var app = new Vue({
  el: "#app",
  data: {
    message: "Olá Vue!",
    tasks: [],
    title: '',
    date: '',
    project: '',
    modoAdicionar: false,
  },
  methods: {
    getTasks() {
      fetch("http://localhost:3000/tasks")
        .then((response) => response.json())
        .then((tarefasJson) => {
          console.log(tarefasJson);
          this.tasks = tarefasJson;
        });
    },
    adicionar() {
      this.modoAdicionar = true;
    },
    save() {
      this.tasks.push({
        title: this.title,
        date: this.date,
        project: this.project,
      })
      this.modoAdicionar = false;
      this.title = '';
      this.date = '';
      this.project = '';
    },
    exclude(index) {
      this.tasks.splice(index, 1)
    }
  },
  created() {
    console.log("created");
    this.getTasks();
  },
  mounted() {
    console.log("montend");
  },
});