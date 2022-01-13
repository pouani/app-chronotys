<template lang="">
    <div class="dash">
        <h3>Bienvenue david</h3><br/>
        <div class="card-d">
        <table>
            <thead>
                <tr>
                    <th>Nom & Prenom</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{id, email, password } in users" :key="id">
                    <td>{{ email }}</td>
                    <td>{{ password }}</td>
                    <td>
                        <router-link :to="`/edit/${id} `">
                            <button class="edit"><i class="fas fa-user-edit"></i></button>
                        </router-link>
                        <button class="delete" @click="deleteUser(id)"><i class="fas fa-trash-alt"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>
<script>
import { useLoadUsers, deleteUser } from '@/firebase';
export default {
    setup(){
        const users = useLoadUsers();
        return { users, deleteUser }
    }
}
</script>
<style lang="css">
    .dash{
        position: relative;
        top: 100px;
    }
    .dash h3{
        text-align: center;
    }
    .card-d{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    table{
        padding: 20px;
        border-collapse: collapse;
        
         box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
    }
    td, th{
        padding: 15px;
        text-align: left;
    }
    th{
        color: #fff;
        background: dodgerblue;
    }
    tr:nth-child(even){
        background: #f2f2f2;
    }
    table button{
        border: none;
        cursor: pointer;
        background-color: inherit;
    }
    table .delete i{
        color: red;
    }
    table .edit i{
        color: dodgerblue;
    }
</style>