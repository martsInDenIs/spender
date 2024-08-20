import { PropsWithChildren, ReactNode } from "react"
import { cookies } from "next/headers";
import { getRole } from "@/lib/services/role";
import { ROLES } from "@/lib/services/role/constants";

type Props = PropsWithChildren<{
    modal: ReactNode,
    sugarDM: ReactNode,
    sugarPartner: ReactNode,
}>

export default function Layout({ children, sugarDM, sugarPartner, modal }: Props) {
    const role = getRole();

    console.log('role', role);

    return <>
        <div className='flex flex-row gap-5 flex-1'>
            {children}
            {role && role === ROLES.CHILD ? sugarPartner : sugarDM}
        </div>

        {modal}
        <div id='modal-root' />
    </>;
}