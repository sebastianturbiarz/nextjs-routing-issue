import {ReactNode} from "react";
import Link from "next/link";

export const Layout = ({children}: { children: ReactNode }) => {
    return (
        <div>
            <nav style={{display: 'flex', gap: '1rem'}}>
                <Link href="/module/test/1231">Go to ID Page</Link>
                <Link href="/module/test/create">Go to Create Page</Link>
            </nav>
            {children}
        </div>
    )
}