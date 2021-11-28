import {collection, doc, getDoc, setDoc} from "firebase/firestore"
import {auth, db} from "../../firebase"

const COLLECTION_NAME = "users"

interface NewUser {
  email: string
}

interface User {
  uid: string,
  email: string,
  firstname?: string,
  lastname?: string
}

class UserService {
  create = async (newUser: NewUser): Promise<User> => {
    const {email} = newUser
    const uid = auth.currentUser?.uid
    const collectionRef = collection(db, COLLECTION_NAME)
    await setDoc(doc(collectionRef, uid), {email, uid})
    return this.get(uid)
  }

  get = async (userId = auth.currentUser?.uid): Promise<User> => {
    if (!userId) {
      throw new Error("Cannot get a User without a user ID.")
    }
    const docRef = doc(db, COLLECTION_NAME, userId)
    const docSnap = await getDoc(docRef)
    return docSnap.data() as User
  }
}

const userService = new UserService()

export default userService
