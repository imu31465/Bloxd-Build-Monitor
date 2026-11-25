export const id = 275;
export const ids = [275];
export const modules = {
  41305: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG,
      g: () => LG,
      k: () => kG
    });
    let wG = null,
      SG = null;

    function LG(GG, bG) {
      return wG = GG, SG = null, kG(bG), () => {
        wG === GG && (wG = null, SG = null)
      }
    }

    function yG() {
      return null === SG ? null : {
        ...SG
      }
    }

    function kG(GG) {
      var bG;
      null !== (bG = wG) && void 0 !== bG && bG(GG) && (SG = {
        ...GG
      })
    }
  },
  41319: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG,
      e: () => LG
    });
    let wG = null;

    function SG(GG, bG) {
      wG = {
        conn: GG,
        reason: bG
      }
    }

    function LG(GG) {
      var bG;
      const ZG = (null === (bG = wG) || void 0 === bG ? void 0 : bG.conn) === GG ? wG.reason : null;
      return wG = null, ZG
    }
  },
  41383: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      h: () => SG
    });
    let wG = {
      fire: () => {},
      close: () => {}
    };

    function SG(GG) {
      wG = GG
    }

    function LG() {
      return wG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);