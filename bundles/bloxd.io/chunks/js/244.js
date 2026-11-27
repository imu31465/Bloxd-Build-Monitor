export const id = 244;
export const ids = [244];
export const modules = {
  39867: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      f: () => Ke
    });
    var ye = He(27);
    let be = !1;

    function Me() {
      return be
    }

    function Ke(ee) {
      be !== ee && (be = ee, ye.h.yR("replayViewer|videoExportChanged"))
    }
  },
  37260: (ee, ie, He) => {
    He.d(ie, {
      b: () => ke,
      f: () => oe,
      h: () => qe,
      j: () => Re
    });
    var ye = He(347),
      be = He(656),
      Me = He(663),
      Ke = He(35);
    const Ue = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Fe = "playSessionGameNameWithVariation",
      Je = "wasMatchmakePlayer";

    function oe() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m;
      (0, Me.k)(ee, Ue)
    }

    function Re() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m).setItem(Je, !0)
    }

    function ke() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m;
      return (0, Me.e)(ee, Ue)
    }

    function qe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ke.m;
      const He = (0, Me.e)(ie, Ue),
        oe = function(ee) {
          const ie = ee.getItem(Fe);
          return "string" !== typeof ie ? null : ie
        }(ie),
        Re = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m).getItem(Je)
        }(ie);
      let ke;
      return ke = null !== He && null !== oe && (0, Me.h)(ie, Ue) && function(ee, ie, He) {
          const be = (0, ye.Xb)(ee),
            Me = (0, ye.Xb)(ie),
            Ke = (0, ye.Qb)(ee),
            Ue = (0, ye.Qb)(ie);
          return !(be !== Me || !He) || be === Me && Ke === Ue
        }(oe, ee, Re) ? He : (0, be.d)(), (0, Me.m)(ie, Ue, ke), ie.setItem(Fe, ee),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m).removeItem(Je)
        }(ie), ke
    }
  },
  42006: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      h: () => Ke,
      l: () => Fe,
      n: () => Me,
      r: () => Ue,
      s: () => Je
    });
    let ye = null,
      be = null;

    function Me(ee, ie) {
      return ye = ee, be = null, Ue(ie), () => {
        ye === ee && (ye = null, be = null)
      }
    }

    function Ke() {
      return null === be ? null : {
        ...be
      }
    }

    function Ue(ee) {
      var ie;
      null !== (ie = ye) && void 0 !== ie && ie(ee) && (be = {
        ...ee
      })
    }

    function Fe() {
      return "undefined" === typeof location ? null : function(ee) {
        const ie = new URLSearchParams(ee).get("renderDistanceMax");
        if (null === ie || !/^\d{1,2}$/.test(ie)) return null;
        const He = Number(ie);
        return He >= 1 && He <= 64 ? He : null
      }(location.search)
    }

    function Je(ee, ie) {
      return null === ie ? ee : {
        horizontal: Math.min(ee.horizontal, ie),
        vertical: ee.vertical
      }
    }

    function oe(ee, ie) {
      return null === ie ? ee : Je(null !== ee && void 0 !== ee ? ee : {
        horizontal: 1 / 0,
        vertical: 1 / 0
      }, ie)
    }
  },
  42015: (ee, ie, He) => {
    He.d(ie, {
      b: () => be,
      e: () => Me
    });
    let ye = null;

    function be(ee, ie) {
      ye = {
        conn: ee,
        reason: ie
      }
    }

    function Me(ee) {
      var ie;
      const He = (null === (ie = ye) || void 0 === ie ? void 0 : ie.conn) === ee ? ye.reason : null;
      return ye = null, He
    }
  },
  42077: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      e: () => be
    });
    let ye = {
      fire: () => {},
      close: () => {}
    };

    function be(ee) {
      ye = ee
    }

    function Me() {
      return ye
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);