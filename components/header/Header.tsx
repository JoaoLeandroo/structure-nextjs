import Link from "next/link";
import Container from "../Container";

const Header = () => {
    return ( 
        <header className="bg-sky-950">
            <Container>
                <div className="flex justify-around h-11 items-center">
                    <h1 className="font-bold">Logo</h1>

                    <div className="flex gap-3 h-full items-center">
                        <Link className="hover:opacity-50 transition duration-500" href={'/'}>Home</Link>
                        <Link className="hover:opacity-50 transition duration-500" href={'/'}>About</Link>
                        <Link className="hover:opacity-50 transition duration-500" href={'/'}>Suporte</Link>
                        <Link className="hover:opacity-50 transition duration-500" href={'/'}>Contact</Link>
                    </div>
                </div>
            </Container>
        </header>
     );
}
 
export default Header;