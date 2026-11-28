export const id = 676;
export const ids = [676];
export const modules = {
  64854: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      applyLightFoOffset: () => Xd,
      getFloatingOriginOffset: () => Fd,
      lightFoVersion: () => Rd,
      wrapRenderableForFO: () => Kd
    });
    var Wd = md(54151);

    function Fd(dd) {
      const Od = dd.camera;
      if (!Od) return {
        x: 0,
        y: 0,
        z: 0
      };
      const md = Od.worldMatrix;
      return {
        x: md[12],
        y: md[13],
        z: md[14]
      }
    }

    function Rd(dd) {
      return dd.camera ? dd.camera.worldMatrixVersion : 0
    }

    function Xd(dd, Od) {
      const md = Od.camera?.worldMatrix;
      if (!md) return;
      const Fd = md[12],
        Rd = md[13],
        Xd = md[14];
      let Kd = 0;
      for (const hd of Od.lights) {
        if (Kd >= Wd.d) break;
        if (!hd._writeLightUbo) continue;
        const Od = 4 + 16 * Kd,
          md = dd[Od + 3];
        if (0 === md || 2 === md) {
          const md = hd.worldMatrix;
          dd[Od] = md[12] - Fd, dd[Od + 1] = md[13] - Rd, dd[Od + 2] = md[14] - Xd
        }
        Kd++
      }
    }

    function Kd(dd, Od, md) {
      let Wd = -1;
      return () => {
        const Fd = Od.camera ? Od.camera.worldMatrixVersion : -1;
        Fd !== Wd && (md(), Wd = Fd), dd()
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);