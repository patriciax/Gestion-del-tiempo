<template>
    <div class="row">
        <div class="col-12 mb-2">
            <!-- llamamos al componente para Crear   -->
            <router-link :to="{ name: 'crearTask' }" class="btn btn-success"
                >crear</router-link
            >
        </div>
        <div class="col-12">
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead class="bg-primary text-white">
                        <tr>
                            <th>ID</th>

                            <th>descripcion</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="task in tasks" :key="task.id">
                            <td>{{ task.id }}</td>

                            <td>{{ task.descripcion }}</td>
                            <td>
                                <!-- llamamos al componente para Editar     -->
                                <router-link
                                    :to="{
                                        name: 'editarTask',
                                        params: { id: task.id }
                                    }"
                                    class="btn btn-info"
                                    >editar</router-link
                                >
                                <a
                                    type="button"
                                    @click="borrarTask(task.id)"
                                    class="btn btn-danger"
                                    >eliminar</a
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "tasks",
    data() {
        return {
            tasks: []
        };
    },
    mounted() {
        this.mostrarTasks();
    },
    methods: {
        async mostrarTasks() {
            await this.axios
                .get("/api/task")
                .then(response => {
                    this.tasks = response.data;
                })
                .catch(error => {
                    console.log(error);
                    this.tasks = [];
                });
        },
        borrarTask(id) {
            if (confirm("¿Confirma eliminar el registro?")) {
                this.axios
                    .delete(`/api/task/${id}`)
                    .then(response => {
                        this.mostrarTasks();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }
};
</script>
