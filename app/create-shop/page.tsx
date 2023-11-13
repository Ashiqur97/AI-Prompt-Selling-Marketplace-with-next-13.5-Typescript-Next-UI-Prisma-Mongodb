'use-client'
import { styles } from "@/utils/styles";

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
        <div>
            <h1 className={`${styles.heading} text-center font-Monserrat`}>
                Start to selling with us
            </h1>
        </div>
    </div>
  )
}

export default Page