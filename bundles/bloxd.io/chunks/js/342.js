export const id = 342;
export const ids = [342];
export const modules = {
  41859: (vv, zv, Pv) => {
    function hv(vv) {
      return Math.floor(vv / 8)
    }

    function Sv(vv) {
      return 1 << vv % 8
    }
    Pv.d(zv, {
      OptimizeIndices: () => gv
    });
    class ev {
      constructor(vv) {
        this.size = vv, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(vv) {
        if (vv >= this.size) throw new RangeError("Bit index out of range");
        const zv = hv(vv),
          Pv = Sv(vv);
        return 0 !== (this._byteArray[zv] & Pv)
      }
      set(vv, zv) {
        if (vv >= this.size) throw new RangeError("Bit index out of range");
        const Pv = hv(vv),
          ev = Sv(vv);
        zv ? this._byteArray[Pv] |= ev : this._byteArray[Pv] &= ~ev
      }
    }

    function gv(vv) {
      const zv = [],
        Pv = vv.length / 3;
      for (let ev = 0; ev < Pv; ev++) zv.push([vv[3 * ev], vv[3 * ev + 1], vv[3 * ev + 2]]);
      const hv = new Map;
      for (let ev = 0; ev < zv.length; ev++) {
        const vv = zv[ev];
        for (const zv of vv) {
          let vv = hv.get(zv);
          vv || hv.set(zv, vv = []), vv.push(ev)
        }
      }
      const Sv = new ev(Pv),
        gv = [],
        pv = vv => {
          const Pv = [vv];
          for (; Pv.length > 0;) {
            const vv = Pv.pop();
            if (!Sv.get(vv)) {
              Sv.set(vv, !0), gv.push(zv[vv]);
              for (const ev of zv[vv]) {
                const vv = hv.get(ev);
                if (!vv) return;
                for (const zv of vv) Sv.get(zv) || Pv.push(zv)
              }
            }
          }
        };
      for (let ev = 0; ev < Pv; ev++) Sv.get(ev) || pv(ev);
      let dv = 0;
      for (const ev of gv) vv[dv++] = ev[0], vv[dv++] = ev[1], vv[dv++] = ev[2]
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);