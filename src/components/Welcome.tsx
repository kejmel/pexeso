import { Meteors } from "./ui/meteors";

const Welcome = () => {
    return (
        <>
            <Meteors number={20} />
            <h1 className="text-9xl text-white">Welcome</h1>
            <button className="mt-20 universe-button">Let's play</button>
        </>
    );
}

export default Welcome;