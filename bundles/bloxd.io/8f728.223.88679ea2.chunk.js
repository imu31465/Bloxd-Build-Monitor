export const id = 223;
export const ids = [223];
export const modules = {
  37554: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB,
      f: () => uc
    });
    var Vc = nc(35);
    let Ic = !1;

    function rB() {
      return Ic
    }

    function uc(cB) {
      Ic !== cB && (Ic = cB, Vc.i.Vu("replayViewer|videoExportChanged"))
    }
  },
  38742: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc,
      f: () => rB,
      h: () => sc
    });
    let Vc = null,
      Ic = null;

    function rB(cB, Bc) {
      return Vc = cB, Ic = null, sc(Bc), () => {
        Vc === cB && (Vc = null, Ic = null)
      }
    }

    function uc() {
      return null === Ic ? null : {
        ...Ic
      }
    }

    function sc(cB) {
      var Bc;
      null !== (Bc = Vc) && void 0 !== Bc && Bc(cB) && (Ic = {
        ...cB
      })
    }
  },
  38738: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic,
      f: () => rB
    });
    let Vc = null;

    function Ic(cB, Bc) {
      Vc = {
        conn: cB,
        reason: Bc
      }
    }

    function rB(cB) {
      var Bc;
      const nc = (null === (Bc = Vc) || void 0 === Bc ? void 0 : Bc.conn) === cB ? Vc.reason : null;
      return Vc = null, nc
    }
  },
  38701: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      e: () => Ic
    });
    let Vc = {
      fire: () => {},
      close: () => {}
    };

    function Ic(cB) {
      Vc = cB
    }

    function rB() {
      return Vc
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);