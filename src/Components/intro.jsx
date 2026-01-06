import Hero from "./hero";

export default function intro(){
    const need=true;
    return (
        <>
            <Hero need={need}/>
        </>
    );
}