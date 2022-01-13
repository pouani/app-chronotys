
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { ref, onUnmounted } from 'vue';

const firebaseConfig = {
    apiKey: "AIzaSyCawB_fl-lqWj04JucpnpSTsm-MQCu9ZeQ",
    authDomain: "chronotysbd.firebaseapp.com",
    projectId: "chronotysbd",
    storageBucket: "chronotysbd.appspot.com",
    messagingSenderId: "807030949873",
    appId: "1:807030949873:web:1af1a469d2fe12e1576650"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export const login = user =>{
      auth.signInWithEmailAndPassword(user.email, user.password).then(res =>{
          console.log(res);
      }).catch(error=>{console.warn(error)})
  }

  export const register = user =>{
    auth.createUserWithEmailAndPassword(user.email, user.password).then(res =>{
        var utilisateur = res
        utilisateur.role = 'admin'
        createUser(utilisateur, res.user.uid);
        console.log(res.user.uid)
        res.user.updateProfile({
            displayName: user.name
        }).then(result => {
            console.log(result)
        })
        console.log(res);
    }).catch(error=>{console.warn(error)})
}

export const logOut = () =>{
    auth.signOut().then(()=>{
        console.log("user disconnected");
    })
}

export const userProfil = async ()=>{
    return await auth.currentUser;
} 
  const usersCollection = db.collection('users');

  export const createUser = (user, uid) => {
      return usersCollection.doc(uid).set(user);
  }

  export const getUser = async id => {
      const user = await usersCollection.doc(id).get();
      return user.exists ? user.data() : null
  }

  export const updateUser = (id, user) => {
      return usersCollection.doc(id).update(user)
  }

  export const deleteUser = id => {
      return usersCollection.doc(id).delete()
  }

  export const useLoadUsers = () => {
      const users = ref([])
      const close = usersCollection.onSnapshot(snapshot => {
          users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      })
      onUnmounted(close)
      return users
  }