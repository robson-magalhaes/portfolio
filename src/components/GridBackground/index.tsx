import { useEffect, useState } from "react";
import * as C from "./styled";

export const GridBackground = () => {
    const [particles, setParticles] = useState<JSX.Element[]>([]);

    function createParticles() {
        const particleCount = 350;
        const newParticles: JSX.Element[] = [];

        for (let i = 0; i < particleCount; i++) {
            const left = Math.random() * 100 + "%";
            const top = Math.random() * 100 + "%";
            const animationDelay = Math.random() * 6 + "s";
            const animationDuration = Math.random() * 4 + 3 + "s";

            newParticles.push(
                <div
                    key={i}
                    className="particle"
                    style={{
                        left,
                        top,
                        animationDelay,
                        animationDuration,
                        position: "absolute",
                    }}
                />
            );
        }

        setParticles(newParticles);
    }

    useEffect(() => {
        createParticles();
    }, []);

    return (
        <>
            <C.Grid/>
            {/* <C.Grid style={{ top: 20, left: 20 }} /> */}


            <C.Particles>
                {particles.map((particle, index) => (
                    <span key={index}>{particle}</span>
                ))}
            </C.Particles>
        </>
    );
};
