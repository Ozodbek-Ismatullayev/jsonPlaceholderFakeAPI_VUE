<template>
    <div class="sidebar" :style="sidebarStyles">
        <nav class="sidebar-nav">
        <ul>
            <li>
            <font-awesome-icon :icon="['fas', 'user']" />
            <router-link to="/" class="menu-link">Users</router-link>
            </li>

            <li>
            <font-awesome-icon :icon="['fas', 'check']" />
            <router-link to="/todos" class="menu-link">Todos</router-link>
            </li>
            
            <li>
            <font-awesome-icon :icon="['fas', 'image']" />
            <router-link to="/photos" class="menu-link">Photos</router-link>
            </li>

            <li>
            <font-awesome-icon :icon="['fas', 'book']" />
            <router-link to="/albums" class="menu-link">Albums</router-link>
            </li>

            <li>
            <font-awesome-icon :icon="['fas', 'comment']" />
            <router-link to="/comments" class="menu-link">Comments</router-link>
            </li>

            <li>
            <font-awesome-icon :icon="['fas', 'pencil-alt']" />
            <router-link to="/posts" class="menu-link">Posts</router-link>
            </li>
        </ul>
        </nav>
    </div>
</template>

<script>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faCheck, faImage, faBook, faComment, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faCheck, faImage, faBook, faComment, faPencilAlt);

export default {
name: 'Sidebar',
components: {
    FontAwesomeIcon,
},
setup() {
    const sidebarStyles = ref({
    width: '250px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
    });

    return {
    sidebarStyles,
    };
},
};
</script>

<style>
.sidebar {
position: fixed;
top: 0;
left: 0;
bottom: 0;
overflow-y: auto;
transition: transform 0.3s;
}

.sidebar-nav ul {
list-style-type: none;
padding: 0;
}

.sidebar-nav li {
display: flex;
align-items: center;
margin-bottom: 1rem;
cursor: pointer;
transition: background-color 0.2s;
}

.sidebar-nav li:hover {
background-color: #444;
}

.menu-link {
font-size: 16px;
text-decoration: none;
color: inherit;
margin-left: 10px;
}

.menu-link:hover {
color: #fff;
}
</style>
