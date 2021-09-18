<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Editar</h4></div>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
                         <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Título</label>
                                    <input type="text" class="form-control" v-model="task.titulo">
                                </div>
                            </div>
                            <div class="col-12 mb-2">

                                <div class="form-floating">
                                <textarea class="form-control" id="floatingTextarea2" v-model="task.descripcion" style="height: 100px"></textarea>
                                <label for="floatingTextarea2">descripcion</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"editar-task",
    data(){
        return {
            task:{
                titulo:"",
                descripcion:"",
            }
        }
    },
    mounted(){
        this.mostrarTask()
    },
    methods:{
        async mostrarTask(){
            await this.axios.get(`/api/task/${this.$route.params.id}`).then(response=>{
                const { titulo, descripcion } = response.data
                this.task.titulo = titulo
                this.task.descripcion = descripcion
            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/task/${this.$route.params.id}`,this.task).then(response=>{
                this.$router.push({name:"mostrarTasks"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
