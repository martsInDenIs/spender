import { cookies } from "next/headers"
import { PropsWithChildren, ReactNode } from "react"
import { getRole } from "@/lib/services/role";
import { ROLES } from "@/lib/services/role/constants";

type Props = PropsWithChildren<{
    sugarDM: ReactNode,
    sugarPartner: ReactNode,
}>

export default function Layout({ children, sugarDM, sugarPartner }: Props) {
    const role = getRole();

    return <>
        {children}
        {role && role === ROLES.CHILD ? sugarPartner : sugarDM}
    </>
}