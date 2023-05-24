import {useRouter} from 'next/router'
export default function Home() {
  const router = useRouter();
   return (
      <h1>
        {router.query.name? `Hello ${router.query.name}`
                          : 'I dont know your name'}
      </h1>
   );
                            
}
