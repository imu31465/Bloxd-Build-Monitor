export const id = 225;
export const ids = [225];
export const modules = {
  37752: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy,
      f: () => Zy
    });
    var Uy = Wy(23);
    let hy = !1;

    function fy() {
      return hy
    }

    function Zy(yb) {
      hy !== yb && (hy = yb, Uy.g.EZ("replayViewer|videoExportChanged"))
    }
  },
  39233: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy,
      h: () => fy,
      j: () => cb
    });
    let Uy = null,
      hy = null;

    function fy(yb, bb) {
      return Uy = yb, hy = null, cb(bb), () => {
        Uy === yb && (Uy = null, hy = null)
      }
    }

    function Zy() {
      return null === hy ? null : {
        ...hy
      }
    }

    function cb(yb) {
      var bb;
      null !== (bb = Uy) && void 0 !== bb && bb(yb) && (hy = {
        ...yb
      })
    }
  },
  39226: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy,
      e: () => fy
    });
    let Uy = null;

    function hy(yb, bb) {
      Uy = {
        conn: yb,
        reason: bb
      }
    }

    function fy(yb) {
      var bb;
      const Wy = (null === (bb = Uy) || void 0 === bb ? void 0 : bb.conn) === yb ? Uy.reason : null;
      return Uy = null, Wy
    }
  },
  39198: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy,
      d: () => hy
    });
    let Uy = {
      fire: () => {},
      close: () => {}
    };

    function hy(yb) {
      Uy = yb
    }

    function fy() {
      return Uy
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);