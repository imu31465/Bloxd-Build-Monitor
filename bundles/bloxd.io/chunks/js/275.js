export const id = 275;
export const ids = [275];
export const modules = {
  41098: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      i: () => Dt,
      m: () => dt
    });
    let Ot = null,
      qt = null;

    function Dt(tt, et) {
      return Ot = tt, qt = null, dt(et), () => {
        Ot === tt && (Ot = null, qt = null)
      }
    }

    function mt() {
      return null === qt ? null : {
        ...qt
      }
    }

    function dt(tt) {
      var et;
      null !== (et = Ot) && void 0 !== et && et(tt) && (qt = {
        ...tt
      })
    }
  },
  41115: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      f: () => Dt
    });
    let Ot = null;

    function qt(tt, et) {
      Ot = {
        conn: tt,
        reason: et
      }
    }

    function Dt(tt) {
      var et;
      const Vt = (null === (et = Ot) || void 0 === et ? void 0 : et.conn) === tt ? Ot.reason : null;
      return Ot = null, Vt
    }
  },
  41174: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      h: () => qt
    });
    let Ot = {
      fire: () => {},
      close: () => {}
    };

    function qt(tt) {
      Ot = tt
    }

    function Dt() {
      return Ot
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);