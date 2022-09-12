var app = new Vue({
  el: "#app",
  data: {
    message: "Olá Vue!",
    tasks: [],
    title: "",
    date: "",
    project: "",
    modoAdicionar: false,
    indexCard: null,
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
      if (this.indexCard != null) {
        this.tasks[this.indexCard].title = this.title;
        this.tasks[this.indexCard].date = this.date;
        this.tasks[this.indexCard].project = this.project;
        this.indexCard = null;
      } else {
        this.tasks.push({
          title: this.title,
          date: this.date,
          project: this.project,
        });
      }
      this.modoAdicionar = false;
      this.title = "";
      this.date = "";
      this.project = "";
    },
    exclude(index) {
      this.tasks.splice(index, 1);
    },
    edit(index) {
      this.title = this.tasks[index].title;
      this.date = this.tasks[index].date;
      this.project = this.tasks[index].project;
      this.indexCard = index;
      this.adicionar();
    },
  },
  created() {
    console.log("created");
    this.getTasks();
  },
  mounted() {
    console.log("montend");
  },
});
