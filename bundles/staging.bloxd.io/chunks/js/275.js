export const id = 275;
export const ids = [275];
export const modules = {
  40944: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB,
      f: () => oB,
      j: () => vB
    });
    let TB = null,
      JB = null;

    function oB(BB, IB) {
      return TB = BB, JB = null, vB(IB), () => {
        TB === BB && (TB = null, JB = null)
      }
    }

    function GB() {
      return null === JB ? null : {
        ...JB
      }
    }

    function vB(BB) {
      var IB;
      null !== (IB = TB) && void 0 !== IB && IB(BB) && (JB = {
        ...BB
      })
    }
  },
  40954: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      f: () => oB
    });
    let TB = null;

    function JB(BB, IB) {
      TB = {
        conn: BB,
        reason: IB
      }
    }

    function oB(BB) {
      var IB;
      const ZB = (null === (IB = TB) || void 0 === IB ? void 0 : IB.conn) === BB ? TB.reason : null;
      return TB = null, ZB
    }
  },
  41017: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      f: () => JB
    });
    let TB = {
      fire: () => {},
      close: () => {}
    };

    function JB(BB) {
      TB = BB
    }

    function oB() {
      return TB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);