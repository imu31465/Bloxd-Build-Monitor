export const id = 298;
export const ids = [298];
export const modules = {
  42203: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      e: () => UV,
      h: () => pV
    });
    let JV = null,
      YV = null;

    function UV(VV, eV) {
      return JV = VV, YV = null, pV(eV), () => {
        JV === VV && (JV = null, YV = null)
      }
    }

    function yV() {
      return null === YV ? null : {
        ...YV
      }
    }

    function pV(VV) {
      var eV;
      null !== (eV = JV) && void 0 !== eV && eV(VV) && (YV = {
        ...VV
      })
    }
  },
  42217: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV,
      f: () => UV
    });
    let JV = null;

    function YV(VV, eV) {
      JV = {
        conn: VV,
        reason: eV
      }
    }

    function UV(VV) {
      var eV;
      const xV = (null === (eV = JV) || void 0 === eV ? void 0 : eV.conn) === VV ? JV.reason : null;
      return JV = null, xV
    }
  },
  42297: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      d: () => YV
    });
    let JV = {
      fire: () => {},
      close: () => {}
    };

    function YV(VV) {
      JV = VV
    }

    function UV() {
      return JV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);