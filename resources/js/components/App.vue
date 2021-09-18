<template>
    <div class="custom__main">
        <nav class="nav sidebar_custom">
            <router-link exact-active-class="active" to="/" class="nav-link active">Dashboard</router-link>
            <router-link exact-active-class="active" to="/tasks" class="nav-link ">Tarea</router-link>
            <router-link exact-active-class="active" to="/historial" class="nav-link ">Historial</router-link>
        </nav>
        <!----------------------->
        <div id="content-main" class="content-main d-flex flex-column ">
            <div id="content">
                <!----nav-->
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand">Navbar</a>
                        <form class="d-flex">

                        <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    </nav>
               <div>
                      <router-view></router-view>
               </div>

            </div>
        </div>
    </div>

</template>

<style scoped>

.custom__main{
        display: flex;
}
.sidebar_custom{
    width: 14rem;
    background: #FF0061;
    color: #fff;
}
.content-main{
    background-color: #f8f9fc;
    width: 100%;
    overflow-x: hidden;
    height: 100vh;
}
</style>
