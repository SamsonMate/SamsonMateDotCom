import React, { useRef, useEffect } from "react";
import {createHexagonPoints, rotateX, rotateY, project} from "../utils/geometry";
import type { Point3D } from "../utils/geometry";

const WireframeHexagon: React.FC = () => {
const canvasRef = useRef<HTMLCanvasElement>(null);
const pointsRef = useRef<Point3D[]>(createHexagonPoints());
const angleRef = useRef(0);

useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    const width = canvasRef.current?.width || 600;
    const height = canvasRef.current?.height || 600;

    const animate = () => {
    if (!ctx) return;

    angleRef.current += 0.01;
    ctx.clearRect(0, 0, width, height);

    const rotated = pointsRef.current.map((p) => rotateX(rotateY(p, angleRef.current), angleRef.current));

    // Draw connections
    rotated.forEach((point, idx) => {
        const [x1, y1] = project(point, width, height);
        point.connections.forEach((connIdx) => {
        const connected = rotated[connIdx];
        const [x2, y2] = project(connected, width, height);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "#aaa";
        ctx.stroke();
        });
    });

    // Draw points
    rotated.forEach((point) => {
        const [x, y] = project(point, width, height);
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = point.color;
        ctx.fill();
    });

    requestAnimationFrame(animate);
    };

    animate();
}, []);

return <canvas ref={canvasRef} width={600} height={600} style={{ background: "#111" }} />;
};

export default WireframeHexagon;
