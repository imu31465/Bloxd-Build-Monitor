export const id = 362;
export const ids = [362];
export const modules = {
  61443: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      applyLightFoOffset: () => Sp,
      getFloatingOriginOffset: () => op,
      lightFoVersion: () => Ip,
      wrapRenderableForFO: () => xp
    });
    var Op = cp(41977);

    function op(pp) {
      const ip = pp.camera;
      if (!ip) return {
        x: 0,
        y: 0,
        z: 0
      };
      const cp = ip.worldMatrix;
      return {
        x: cp[12],
        y: cp[13],
        z: cp[14]
      }
    }

    function Ip(pp) {
      return pp.camera ? pp.camera.worldMatrixVersion : 0
    }

    function Sp(pp, ip) {
      const cp = ip.camera?.worldMatrix;
      if (!cp) return;
      const op = cp[12],
        Ip = cp[13],
        Sp = cp[14];
      let xp = 0;
      for (const Lp of ip.lights) {
        if (xp >= Op.d) break;
        if (!Lp._writeLightUbo) continue;
        const ip = 4 + 16 * xp,
          cp = pp[ip + 3];
        if (0 === cp || 2 === cp) {
          const cp = Lp.worldMatrix;
          pp[ip] = cp[12] - op, pp[ip + 1] = cp[13] - Ip, pp[ip + 2] = cp[14] - Sp
        }
        xp++
      }
    }

    function xp(pp, ip, cp) {
      let Op = -1;
      return () => {
        const op = ip.camera ? ip.camera.worldMatrixVersion : -1;
        op !== Op && (cp(), Op = op), pp()
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);