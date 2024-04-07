document.addEventListener("mousemove", (e) => {
  Object.assign(document.documentElement, {
    style: `
          --move-x: ${(e.x - window.innerWidth / 2) * -0.005}deg;
          --move-y: ${(e.y - window.innerHeight / 2) * -0.01}deg;
          `,
  });
});
