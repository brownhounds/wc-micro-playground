import { initApp } from '@brownhounds/wc-micro/app';

initApp({
    shadowDOM: false,
    entryPoint: () => import('./MainApp'),
});

// // Function that returns a Promise for the FPS
// const getFPS = () =>
//     new Promise((resolve) =>
//         requestAnimationFrame((t1) =>
//             requestAnimationFrame((t2) => resolve(1000 / (t2 - t1)))
//         )
//     );

// // Calling the function to get the FPS
// getFPS().then((fps) => console.log(fps));
