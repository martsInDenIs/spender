import { PropsWithChildren } from "react";
import Footer from "@/components/dashboard/Footer";
import Header from "@/components/dashboard/Header";

type Props = PropsWithChildren;

export default function PageWrapper({ children }: Props) {
    return <div className='w-full h-full m-auto flex flex-col rounded-xl overflow-hidden'>
        <Header />
        <main className='flex flex-row flex-1 bg-3 p-4 h-40 gap-2'>
            {children}
        </main>
        <Footer />
    </div>
}