import { cookies } from "next/headers"
import { PropsWithChildren, ReactNode } from "react"
import { ROLE } from "@/app/types";

type Props = PropsWithChildren<{
    sugarDM: ReactNode,
    sugarPartner: ReactNode,
}>

export default function Layout({ children, sugarDM, sugarPartner }: Props) {
    const role = cookies().get('role');

    return <>
        {children}
        {role && role.value === ROLE.CHILD ? sugarPartner : sugarDM}
    </>
}