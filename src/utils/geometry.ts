export type Point3D = {
    x: number;
    y: number;
    z: number;
    color: string;
    connections: number[];
};

export const rotateY = (point: Point3D, angle: number): Point3D => {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const { x, z } = point;
    return {
        ...point,
        x: x * cos - z * sin,
        z: z * cos + x * sin,
    };
};

export const rotateX = (point: Point3D, angle: number): Point3D => {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const { y, z } = point;
    return {
        ...point,
        y: y * cos - z * sin,
        z: z * cos + y * sin,
    };
};

export const project = (point: Point3D, width: number, height: number): [number, number] => {
    const scale = 500 / (500 + point.z);
    const x = point.x * scale + width / 2;
    const y = point.y * scale + height / 2;
    return [x, y];
};

export const createHexagonPoints = (): Point3D[] => {
    const radius = 100;
    const height = 100;
    const points: Point3D[] = [];

    for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        points.push({
            x,
            y: -height / 2,
            z,
            color: "white",
            connections: [(i + 1) % 6, i + 6],
        });
    }

    for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        points.push({
            x,
            y: height / 2,
            z,
            color: "white",
            connections: [((i + 1) % 6) + 6],
        });
    }

    return points;
};

export const createIcosahedronPoints = (): Point3D[] => {
    const t = (1 + Math.sqrt(5)) / 2;
    const s = 100; // scale
    const vertices: Point3D[] = [
        { x: -1, y: t, z: 0, color: "white", connections: [] },
        { x: 1, y: t, z: 0, color: "white", connections: [] },
        { x: -1, y: -t, z: 0, color: "white", connections: [] },
        { x: 1, y: -t, z: 0, color: "white", connections: [] },

        { x: 0, y: -1, z: t, color: "white", connections: [] },
        { x: 0, y: 1, z: t, color: "white", connections: [] },
        { x: 0, y: -1, z: -t, color: "white", connections: [] },
        { x: 0, y: 1, z: -t, color: "white", connections: [] },

        { x: t, y: 0, z: -1, color: "white", connections: [] },
        { x: t, y: 0, z: 1, color: "white", connections: [] },
        { x: -t, y: 0, z: -1, color: "white", connections: [] },
        { x: -t, y: 0, z: 1, color: "white", connections: [] },
    ].map((p) => ({ ...p, x: p.x * s, y: p.y * s, z: p.z * s }));

    // Define the 30 unique edges of the icosahedron using vertex indices
    const edges = [
        [0, 11],
        [0, 5],
        [0, 1],
        [0, 7],
        [0, 10],
        [1, 5],
        [1, 9],
        [1, 8],
        [1, 7],
        [2, 11],
        [2, 10],
        [2, 3],
        [2, 4],
        [2, 6],
        [3, 4],
        [3, 9],
        [3, 8],
        [3, 6],
        [4, 9],
        [4, 11],
        [4, 5],
        [5, 11],
        [5, 9],
        [6, 10],
        [6, 8],
        [6, 7],
        [7, 10],
        [7, 8],
        [8, 9],
        [10, 11],
        [6, 3],
    ];

    // Add connections based on edges
    edges.forEach(([a, b]) => {
        vertices[a].connections.push(b);
        vertices[b].connections.push(a);
    });

    return vertices;
};

