import React, { useEffect, useRef } from "react";

/*
 *  a function which will literallt return a canvas
 *  that's renders a "i love you" heart animation
 *  powered with some autistic math algorithm 
 *  cc: @SFINXV
 */
const CanvasAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) 
            return;

        const ctx = canvas.getContext('2d');

        if (!ctx) 
            return;

        // canvas.width = 900;
        // canvas.height = 500;
        canvas.style.width = '105%';
        canvas.style.height = '100%';

        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        let e: any[] = [];
        let h: any[] = [];
        const WIDTH = canvas.width = window.innerWidth;
        const HEIGHT = canvas.height = window.innerHeight;
        const v = 32 + 16 + 8;
        const R = Math.random;
        const C = Math.cos;
        const Y = 6.3;

        for (let i = 0; i < Y; i += 0.2) {
            h.push([WIDTH / 2 + 210 * Math.pow(Math.sin(i), 3), HEIGHT / 2 + 13 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);
        }

        for (let i = 0; i < Y; i += 0.4) {
            h.push([WIDTH / 2 + 150 * Math.pow(Math.sin(i), 3), HEIGHT / 2 + 9 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);
        }

        for (let i = 0; i < Y; i += 0.8) {
            h.push([WIDTH / 2 + 90 * Math.pow(Math.sin(i), 3), HEIGHT / 2 + 5 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);
        }

        for (let i = 0; i < v;) {

            const x = R() * WIDTH;
            const y = R() * HEIGHT;
            const H = 80 * (i / v) + Math.random * 100;
            const S = 40 * R() + 60;
            const B = 60 * R() + 20;
            const f: any[] = [];
            for (let k = 0; k < v;) {
                f[k++] = {
                    x: x,
                    y: y,
                    X: 0,
                    Y: 0,
                    R: 1 - k / v + 1,
                    S: R() + 1,
                    q: ~~(R() * v),
                    D: 2 * (i % 2) - 1,
                    F: 0.2 * R() + 0.7,
                    f: `hsla(${~~H},${~~S}%,${~~B}%,.1)`
                };
            }

            e[i++] = f;
        }

        function path(d: any) {
            ctx.fillStyle = d.f;
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.R, 0, Y, 1);
            ctx.closePath();
            ctx.fill();
        }

        setInterval(() => {
            ctx.fillStyle = "rgba(0,0,0,.2)";
            ctx.fillRect(0, 0, WIDTH, HEIGHT);

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = '30px Arial';
            ctx.fillStyle = 'white';
            ctx.fillText('I LOVE YOU SOO MUCH', WIDTH / 2, HEIGHT / 2 + 300);

            for (let i = v; i--;) {
                const f = e[i];
                const u = f[0];
                const q = h[u.q];
                const D = u.x - q[0];
                const E = u.y - q[1];
                const G = Math.sqrt(D * D + E * E);
                if (10 > G) {
                    if (0.95 < R()) {
                        u.q = ~~(R() * v);
                    } else if (0.99 < R()) {
                        u.D *= -1;
                        u.q += u.D;
                        u.q %= v;

                        if (0 > u.q) {
                            u.q += v;
                        }
                    }
                }

                u.X += -D / G * u.S;
                u.Y += -E / G * u.S;
                u.x += u.X;
                u.y += u.Y;
                path(u);
                u.X *= u.F;
                u.Y *= u.F;

                for (let k = 0; k < v - 1;) {
                    const T = f[k];
                    const N = f[++k];
                    N.x -= 0.7 * (N.x - T.x);
                    N.y -= 0.7 * (N.y - T.y);
                    path(N);
                }
            }
        }, 25);



    }, []);

    return <canvas ref={canvasRef} width={30} height={30} id="alx" />;
}

export default CanvasAnimation;