export const id = 246;
export const ids = [246];
export const modules = {
  40333: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR,
      f: () => ZR
    });
    var yR = GR(32);
    let tR = !1;

    function uR() {
      return tR
    }

    function ZR(RR) {
      tR !== RR && (tR = RR, yR.n.JK("replayViewer|videoExportChanged"))
    }
  },
  37620: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => wR,
      e: () => VR,
      h: () => rR,
      i: () => KR
    });
    var yR = GR(377),
      tR = GR(717),
      uR = GR(729),
      ZR = GR(46);
    const qR = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      iR = "playSessionGameNameWithVariation",
      fR = "wasMatchmakePlayer";

    function VR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZR.k;
      (0, uR.j)(RR, qR)
    }

    function KR() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZR.k).setItem(fR, !0)
    }

    function wR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZR.k;
      return (0, uR.d)(RR, qR)
    }

    function rR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZR.k;
      const GR = (0, uR.d)(JR, qR),
        VR = function(RR) {
          const JR = RR.getItem(iR);
          return "string" !== typeof JR ? null : JR
        }(JR),
        KR = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZR.k).getItem(fR)
        }(JR);
      let wR;
      return wR = null !== GR && null !== VR && (0, uR.h)(JR, qR) && function(RR, JR, GR) {
          const tR = (0, yR.Sb)(RR),
            uR = (0, yR.Sb)(JR),
            ZR = (0, yR.Mb)(RR),
            qR = (0, yR.Mb)(JR);
          return !(tR !== uR || !GR) || tR === uR && ZR === qR
        }(VR, RR, KR) ? GR : (0, tR.c)(), (0, uR.m)(JR, qR, wR), JR.setItem(iR, RR),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZR.k).removeItem(fR)
        }(JR), wR
    }
  },
  42454: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => VR,
      g: () => ZR,
      k: () => iR,
      l: () => uR,
      o: () => qR,
      s: () => fR
    });
    let yR = null,
      tR = null;

    function uR(RR, JR) {
      return yR = RR, tR = null, qR(JR), () => {
        yR === RR && (yR = null, tR = null)
      }
    }

    function ZR() {
      return null === tR ? null : {
        ...tR
      }
    }

    function qR(RR) {
      var JR;
      null !== (JR = yR) && void 0 !== JR && JR(RR) && (tR = {
        ...RR
      })
    }

    function iR() {
      return "undefined" === typeof location ? null : function(RR) {
        const JR = new URLSearchParams(RR).get("renderDistanceMax");
        if (null === JR || !/^\d{1,2}$/.test(JR)) return null;
        const GR = Number(JR);
        return GR >= 1 && GR <= 64 ? GR : null
      }(location.search)
    }

    function fR(RR, JR) {
      return null === JR ? RR : {
        horizontal: Math.min(RR.horizontal, JR),
        vertical: RR.vertical
      }
    }

    function VR(RR, JR) {
      return null === JR ? RR : fR(null !== RR && void 0 !== RR ? RR : {
        horizontal: 1 / 0,
        vertical: 1 / 0
      }, JR)
    }
  },
  42463: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      g: () => uR
    });
    let yR = null;

    function tR(RR, JR) {
      yR = {
        conn: RR,
        reason: JR
      }
    }

    function uR(RR) {
      var JR;
      const GR = (null === (JR = yR) || void 0 === JR ? void 0 : JR.conn) === RR ? yR.reason : null;
      return yR = null, GR
    }
  },
  37346: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => VR,
      f: () => iR,
      g: () => qR,
      j: () => fR
    });
    var yR = GR(2144);
    let tR = null,
      uR = 0;
    const ZR = new Set;

    function qR() {
      return tR
    }

    function iR() {
      return uR
    }

    function fR(RR) {
      tR = RR, uR++, (0, yR.e)();
      for (const JR of ZR) JR()
    }

    function VR(RR) {
      ZR.add(RR)
    }
  },
  42523: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      g: () => tR
    });
    let yR = {
      fire: () => {},
      close: () => {}
    };

    function tR(RR) {
      yR = RR
    }

    function uR() {
      return yR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);