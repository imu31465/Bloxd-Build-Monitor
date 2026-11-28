export const id = 677;
export const ids = [677];
export const modules = {
  64860: (dd, Od, md) => {
    function Wd(dd, Od, md, Wd, Fd, Rd, Xd) {
      const Kd = Od,
        hd = Wd,
        vd = md;
      dd[vd + 0] = Kd[hd + 0], dd[vd + 1] = Kd[hd + 1], dd[vd + 2] = Kd[hd + 2], dd[vd + 3] = Kd[hd + 3], dd[vd + 4] = Kd[hd + 4], dd[vd + 5] = Kd[hd + 5], dd[vd + 6] = Kd[hd + 6], dd[vd + 7] = Kd[hd + 7], dd[vd + 8] = Kd[hd + 8], dd[vd + 9] = Kd[hd + 9], dd[vd + 10] = Kd[hd + 10], dd[vd + 11] = Kd[hd + 11], dd[vd + 12] = Kd[hd + 12] - Fd, dd[vd + 13] = Kd[hd + 13] - Rd, dd[vd + 14] = Kd[hd + 14] - Xd, dd[vd + 15] = Kd[hd + 15]
    }

    function Fd(dd) {
      return (Od, md, Fd, Rd) => {
        const Xd = dd.camera;
        if (!Xd) return void Wd(Od, md, Fd, Rd, 0, 0, 0);
        const Kd = Xd.worldMatrix;
        Wd(Od, md, Fd, Rd, Kd[12], Kd[13], Kd[14])
      }
    }
    md.r(Od), md.d(Od, {
      makePackMeshWorld: () => Fd,
      packMat4IntoF32WithOffset: () => Wd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);