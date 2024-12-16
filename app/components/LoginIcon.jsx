"use client";
import { decode } from "jsonwebtoken";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";

const LoginIcon = () => {

    const router = useRouter();
    const [roll, setRoll] = useState('');
    const [name, setName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            const decodedToken = token ? decode(token) : null;
            setRoll(decodedToken.role);
            setName(decodedToken.name);
        }
        // console.log("From nav bar", decodedToken);
    }, []);

    const logout = () => {
        localStorage.clear();
        router.push('/');
    }

    return (
        <div>
            {isLoggedIn ?
                <div>
                    {roll === 'admin' && <DropdownMenu>
                        <DropdownMenuTrigger><FaUser /></DropdownMenuTrigger>
                        <DropdownMenuContent className="text-[#c19f5f] bg-black border-[#c19f5f] ">
                            <DropdownMenuLabel className="text-xl capitalize ">{name}</DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-[#c19f5f]" />
                            <DropdownMenuItem><Link className="text-xl" href={'/dashboard/admin'}>Dashboard</Link></DropdownMenuItem>
                            <DropdownMenuItem className="text-xl cursor-pointer" onClick={() => logout()}>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>}
                    {roll === 'user' && <DropdownMenu>
                        <DropdownMenuTrigger><FaUser /></DropdownMenuTrigger>
                        <DropdownMenuContent className="text-[#c19f5f] bg-black border-[#c19f5f] ">
                            <DropdownMenuLabel className="text-xl capitalize ">{name}</DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-[#c19f5f]" />
                            <DropdownMenuItem><Link className="text-xl" href={'/dashboard/user'}>Profile</Link></DropdownMenuItem>
                            <DropdownMenuItem className="text-xl cursor-pointer" onClick={() => logout()}>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>}
                </div>

                : <Link href={'/login'}>Login</Link>}
        </div>
    )
}

export default LoginIcon