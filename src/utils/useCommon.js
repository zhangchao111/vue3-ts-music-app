import {ref,reactive} from 'vue';
import {useRouter } from 'vue-router';
export default function useCommon() {
    const goLink=(path,query)=>{
        const router = useRouter();
        router.push({path,query})
    }
    return{
        goLink
    }
}


