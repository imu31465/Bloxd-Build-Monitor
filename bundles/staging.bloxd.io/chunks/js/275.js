export const id = 275;
export const ids = [275];
export const modules = {
  41049: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT,
      c: () => MT,
      g: () => nT
    });
    let WT = null,
      zT = null;

    function MT(TT, UT) {
      return WT = TT, zT = null, nT(UT), () => {
        WT === TT && (WT = null, zT = null)
      }
    }

    function gT() {
      return null === zT ? null : {
        ...zT
      }
    }

    function nT(TT) {
      var UT;
      null !== (UT = WT) && void 0 !== UT && UT(TT) && (zT = {
        ...TT
      })
    }
  },
  41061: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT,
      h: () => MT
    });
    let WT = null;

    function zT(TT, UT) {
      WT = {
        conn: TT,
        reason: UT
      }
    }

    function MT(TT) {
      var UT;
      const mT = (null === (UT = WT) || void 0 === UT ? void 0 : UT.conn) === TT ? WT.reason : null;
      return WT = null, mT
    }
  },
  41121: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      d: () => zT
    });
    let WT = {
      fire: () => {},
      close: () => {}
    };

    function zT(TT) {
      WT = TT
    }

    function MT() {
      return WT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);