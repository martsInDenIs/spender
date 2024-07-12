import { PropsWithChildren, ReactNode } from "react"
import { cookies } from "next/headers";
import { ROLE } from "@/app/types";

type Props = PropsWithChildren<{
    modal: ReactNode,
    sugarDM: ReactNode,
    sugarPartner: ReactNode,
}>

export default function Layout({ children, sugarDM, sugarPartner, modal }: Props) {
    const role = cookies().get('role');

    return <>
        <div className='flex flex-row gap-5 flex-1'>
            {children}
            {role && role.value === ROLE.CHILD ? sugarPartner : sugarDM}
        </div>

        {modal}
        <div id='modal-root' />
    </>;
}