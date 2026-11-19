export const id = 207;
export const ids = [207];
export const modules = {
  38437: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY,
      e: () => RY
    });
    var FY = DY(25);
    let AY = !1;

    function IY() {
      return AY
    }

    function RY(YY) {
      AY !== YY && (AY = YY, FY.g.vo("replayViewer|videoExportChanged"))
    }
  },
  35903: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => sY,
      c: () => vY,
      d: () => iY,
      f: () => uY
    });
    var FY = DY(341),
      AY = DY(662),
      IY = DY(674),
      RY = DY(40);
    const OY = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      gY = "playSessionGameNameWithVariation",
      aY = "wasMatchmakePlayer";

    function vY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RY.q;
      (0, IY.i)(YY, OY)
    }

    function uY() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RY.q).setItem(aY, !0)
    }

    function sY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RY.q;
      return (0, IY.b)(YY, OY)
    }

    function iY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RY.q;
      const DY = (0, IY.b)(rY, OY),
        vY = function(YY) {
          const rY = YY.getItem(gY);
          return "string" !== typeof rY ? null : rY
        }(rY),
        uY = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RY.q).getItem(aY)
        }(rY);
      let sY;
      return sY = null !== DY && null !== vY && (0, IY.e)(rY, OY) && function(YY, rY, DY) {
          const AY = (0, FY.Pb)(YY),
            IY = (0, FY.Pb)(rY),
            RY = (0, FY.Kb)(YY),
            OY = (0, FY.Kb)(rY);
          return !(AY !== IY || !DY) || AY === IY && RY === OY
        }(vY, YY, uY) ? DY : (0, AY.b)(), (0, IY.j)(rY, OY, sY), rY.setItem(gY, YY),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RY.q).removeItem(aY)
        }(rY), sY
    }
  },
  39828: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY,
      f: () => IY,
      i: () => OY
    });
    let FY = null,
      AY = null;

    function IY(YY, rY) {
      return FY = YY, AY = null, OY(rY), () => {
        FY === YY && (FY = null, AY = null)
      }
    }

    function RY() {
      return null === AY ? null : {
        ...AY
      }
    }

    function OY(YY) {
      var rY;
      null !== (rY = FY) && void 0 !== rY && rY(YY) && (AY = {
        ...YY
      })
    }
  },
  39821: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      f: () => IY
    });
    let FY = null;

    function AY(YY, rY) {
      FY = {
        conn: YY,
        reason: rY
      }
    }

    function IY(YY) {
      var rY;
      const DY = (null === (rY = FY) || void 0 === rY ? void 0 : rY.conn) === YY ? FY.reason : null;
      return FY = null, DY
    }
  },
  39790: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY,
      h: () => AY
    });
    let FY = {
      fire: () => {},
      close: () => {}
    };

    function AY(YY) {
      FY = YY
    }

    function IY() {
      return FY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);