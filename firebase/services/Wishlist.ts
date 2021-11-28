import {collection, doc, getDoc, addDoc} from "firebase/firestore"
import {db, auth} from "../../firebase"

const COLLECTION_NAME = "wishlists"

interface Wishlist {
  uid: string,
  name: string
}

class WishlistService {
  create = async (): Promise<Wishlist> => {
    const collectionRef = collection(db, COLLECTION_NAME)
    const wishlist = await addDoc(collectionRef, {ownerId: auth.currentUser!.uid})
    console.log("=== wishlist added ===>", wishlist)
    // return this.get(uid)
  }

  // list = async (): Promise<Wishlist[]> => {
  //   const ref = doc(db, COLLECTION_NAME, userId)
  //   const docSnap = await getDoc(ref)
  //   return docSnap.data() as User
  // }
}

const wishlistService = new WishlistService()

export default wishlistService
