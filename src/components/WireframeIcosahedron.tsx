import React, { useRef, useEffect } from "react";
import {
    createIcosahedronPoints,
    rotateX,
    rotateY,
    project
} from "../utils/geometry";
import type { Point3D } from "../utils/geometry";

// 🔁 Rotation speed constant (adjust this value)
const ROTATION_SPEED = 0.002;

interface WireframeIcosahedronProps {
    className?: string;
}

const WireframeIcosahedron: React.FC<WireframeIcosahedronProps> = ({ className }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointsRef = useRef<Point3D[]>(createIcosahedronPoints());
    const angleRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const width = canvas.width;
        const height = canvas.height;

        const animate = () => {
            // Increment the angle by the rotation speed
            angleRef.current += ROTATION_SPEED;

            ctx.clearRect(0, 0, width, height);

            // Apply 3D rotation to all points using the current angle
            const rotated = pointsRef.current.map((p) => {
                let rotatedPoint = rotateY(p, angleRef.current);
                rotatedPoint = rotateX(rotatedPoint, angleRef.current);
                return rotatedPoint;
            });

            // Draw connections (edges)
            rotated.forEach((point) => {
                const [x1, y1] = project(point, width, height);
                point.connections.forEach((connIdx) => {
                    const connected = rotated[connIdx];
                    const [x2, y2] = project(connected, width, height);

                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.strokeStyle = "#ffffff40";
                    ctx.lineWidth = 1;
                    ctx.stroke();
                });
            });

            // Draw vertices
            rotated.forEach((point) => {
                const [x, y] = project(point, width, height);
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2);
                ctx.fillStyle = point.color;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={600}
            height={600}
            className={className}
        />
    );
};

export default WireframeIcosahedron;
