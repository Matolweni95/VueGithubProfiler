import { createRouter, createWebHistory} from 'vue-router'
import Userfollwers from '../views/Userfollowers'
import Userfollowing from '../views/Userfollowing'
import Userrepos from '../views/Userrepos'
import Usergists from '../views/Usergists'
import UserList from '../views/UserList'
import Userdetails from '../views/Userdetails'
import Repodetails from '../views/Repodetails'

const routes = [

    {
        path: '/',
        name: 'Users',
        component: UserList
    },

    {
        path: '/:username/repos',
        name: 'Repos',
        component: Userrepos
    },

    {
        path: '/:username/repos/:repo',
        name: 'RepoInfo',
        component: Repodetails
    },

    {
        path: '/:username',
        name: 'userDetails',
        component: Userdetails
    },

    {
        path: '/:username/gists',
        name: 'Gists',
        component: Usergists
    },

    {
        path: '/:username/followers',
        name: 'Followers',
        component: Userfollwers
    },

    {
        path: '/:username/following',
        name: 'Following',
        component: Userfollowing
    },


]

const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes,
  })

export default router;