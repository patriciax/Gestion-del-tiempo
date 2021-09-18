<template>
    <div class="container">
        <p>crear task</p>

        <div class="row">
            <form @submit.prevent="crear">
                <label for="">Contendio</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="task.descripcion"
                />

                <button type="submit" class="btn">Guardar</button>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name:"crear-task",
    data(){
        return {
            task:{

               descripcion:""
            }
        }
    },
    methods:{
        async crear(){
            await this.axios.post('/api/task',this.task).then(response=>{
                this.$router.push({name:"mostrarTasks"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
