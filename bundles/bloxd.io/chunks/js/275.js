export const id = 275;
export const ids = [275];
export const modules = {
  40992: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      f: () => dB,
      g: () => NB
    });
    let QB = null,
      nB = null;

    function dB(BB, jB) {
      return QB = BB, nB = null, NB(jB), () => {
        QB === BB && (QB = null, nB = null)
      }
    }

    function IB() {
      return null === nB ? null : {
        ...nB
      }
    }

    function NB(BB) {
      var jB;
      null !== (jB = QB) && void 0 !== jB && jB(BB) && (nB = {
        ...BB
      })
    }
  },
  41007: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB,
      e: () => dB
    });
    let QB = null;

    function nB(BB, jB) {
      QB = {
        conn: BB,
        reason: jB
      }
    }

    function dB(BB) {
      var jB;
      const zB = (null === (jB = QB) || void 0 === jB ? void 0 : jB.conn) === BB ? QB.reason : null;
      return QB = null, zB
    }
  },
  41061: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB,
      g: () => nB
    });
    let QB = {
      fire: () => {},
      close: () => {}
    };

    function nB(BB) {
      QB = BB
    }

    function dB() {
      return QB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);