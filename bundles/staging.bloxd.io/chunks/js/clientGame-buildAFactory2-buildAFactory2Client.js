export const id = 11;
export const ids = [11];
export const modules = {
  35680: TT => {
    TT.exports = function TT(oT, IT) {
      if (oT === IT) return !0;
      if (oT && IT && "object" == typeof oT && "object" == typeof IT) {
        if (oT.constructor !== IT.constructor) return !1;
        var iT, zT, kT;
        if (Array.isArray(oT)) {
          if ((iT = oT.length) != IT.length) return !1;
          for (zT = iT; 0 !== zT--;)
            if (!TT(oT[zT], IT[zT])) return !1;
          return !0
        }
        if (oT.constructor === RegExp) return oT.source === IT.source && oT.flags === IT.flags;
        if (oT.valueOf !== Object.prototype.valueOf) return oT.valueOf() === IT.valueOf();
        if (oT.toString !== Object.prototype.toString) return oT.toString() === IT.toString();
        if ((iT = (kT = Object.keys(oT)).length) !== Object.keys(IT).length) return !1;
        for (zT = iT; 0 !== zT--;)
          if (!Object.prototype.hasOwnProperty.call(IT, kT[zT])) return !1;
        for (zT = iT; 0 !== zT--;) {
          var WT = kT[zT];
          if (!TT(oT[WT], IT[WT])) return !1
        }
        return !0
      }
      return oT !== oT && IT !== IT
    }
  },
  35594: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => xT,
      e: () => cT,
      h: () => LT,
      l: () => DT
    });
    var iT = IT(8743),
      zT = IT(35599),
      kT = IT(35601),
      WT = IT(8139),
      XT = IT(1403),
      BT = IT(46),
      FT = IT(68),
      ST = IT(1083);

    function DT() {
      var TT;
      return (0, XT.i)(zT.c, (0, zT.k)()), (0, ST.jsx)(ST.Fragment, {
        children: null === (TT = (0, zT.k)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function LT(TT) {
      var oT;
      let {
        show: IT
      } = TT;
      (0, XT.i)(zT.c, (0, zT.k)());
      const FT = null === (oT = (0, zT.k)()) || void 0 === oT ? void 0 : oT.menu;
      return (0, BT.useEffect)((() => {
        var TT;
        IT || (null === FT || void 0 === FT || null === (TT = FT.onClose) || void 0 === TT || TT.call(FT), (0, kT.r)())
      }), [IT, FT]), (0, BT.useEffect)((() => IT ? (0, WT.f)(kT.x, kT.g) : void 0), [IT]), (0, ST.jsx)(iT.c, {
        showing: IT,
        globallyUniqueKey: "clientGameMenu",
        children: null === FT || void 0 === FT ? void 0 : FT.content
      })
    }

    function xT(TT) {
      let {
        placement: oT = "bottom"
      } = TT;
      return (0, ST.jsx)("div", {
        id: `clientGameHud-${oT}`,
        style: {
          display: "contents"
        }
      })
    }

    function cT(TT) {
      let {
        children: oT,
        placement: IT = "bottom"
      } = TT;
      const [iT, zT] = (0, BT.useState)(null);
      return (0, BT.useEffect)((() => {
        zT(document.getElementById(`clientGameHud-${IT}`))
      }), [IT]), iT ? (0, FT.createPortal)(oT, iT) : null
    }
  },
  8743: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT
    });
    var iT = IT(4057),
      zT = IT(4061);

    function kT(TT) {
      let {
        children: oT,
        showing: IT,
        globallyUniqueKey: kT,
        alwaysMountChildren: WT = !1,
        doGameplayStartStopOnShow: XT = !0,
        keepsMovement: BT = !1
      } = TT;
      return (0, zT.d)(!0, IT, kT, BT), (0, iT.e)(XT, IT), IT || WT ? oT : null
    }
  },
  8139: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      f: () => zT
    });
    let iT = null;
    const zT = function(TT) {
        const oT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return iT = oT, () => {
          iT === oT && (iT = null)
        }
      },
      kT = () => {
        var TT;
        return null !== (TT = iT) && void 0 !== TT && TT.canCycle() ? iT.cycle : null
      }
  },
  35777: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      h: () => kT
    });
    const iT = new Map;

    function zT(TT) {
      var oT;
      return null === TT ? null : null !== (oT = iT.get(TT)) && void 0 !== oT ? oT : null
    }

    function kT(TT, oT) {
      return iT.set(TT, oT), () => {
        iT.get(TT) === oT && iT.delete(TT)
      }
    }
  },
  35601: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      g: () => KT,
      j: () => MT,
      m: () => XT,
      n: () => LT,
      r: () => rT,
      s: () => DT,
      w: () => gT,
      x: () => cT,
      y: () => AT
    });
    var iT = IT(12),
      zT = IT(16);
    const kT = "clientGameInventoryButtonsChanged",
      WT = new Map;

    function XT() {
      return [...WT.values()].sort(((TT, oT) => {
        var IT, iT;
        return (null !== (IT = TT.order) && void 0 !== IT ? IT : 0) - (null !== (iT = oT.order) && void 0 !== iT ? iT : 0)
      }))
    }
    let BT = null;

    function FT(TT) {
      BT = TT
    }
    let ST = !1;

    function DT(TT) {
      ST = !0;
      try {
        TT.onClick()
      } finally {
        ST = !1
      }
      TT.panel && "clientGame" === iT.c.get("openInGameMenuName") && FT(TT.id)
    }

    function LT() {
      return ST
    }

    function xT() {
      return XT().filter((TT => TT.panel && !TT.disabled))
    }

    function cT(TT) {
      const oT = xT(),
        IT = oT.findIndex((TT => TT.id === BT));
      return !(IT < 0 || oT.length < 2) && (DT(oT[(IT + TT + oT.length) % oT.length]), !0)
    }

    function KT() {
      return null !== BT && xT().length > 1
    }

    function MT() {
      FT(null)
    }

    function rT() {
      "inventory" !== iT.c.get("openInGameMenuName") && FT(null)
    }

    function AT() {
      const TT = BT;
      return FT(null), TT
    }

    function gT(TT) {
      return WT.set(TT.id, TT), zT.h.XM(kT, XT(), !0), () => {
        WT.get(TT.id) === TT && (WT.delete(TT.id), zT.h.XM(kT, XT()))
      }
    }
  },
  35599: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      e: () => MT,
      h: () => rT,
      i: () => LT,
      k: () => FT,
      o: () => KT,
      s: () => xT,
      u: () => ST
    });
    var iT = IT(12),
      zT = IT(16),
      kT = IT(1253),
      WT = IT(35601);
    const XT = "clientGameUiChanged";
    let BT = null;

    function FT() {
      return BT
    }

    function ST(TT, oT) {
      const IT = {
        content: TT,
        menu: oT
      };
      return BT = IT, zT.h.XM(XT, BT, !0), () => {
        BT === IT && (BT = null, cT = !1, MT(), zT.h.XM(XT, null))
      }
    }
    let DT = null;

    function LT() {
      return DT
    }

    function xT(TT) {
      return DT = TT, () => {
        DT === TT && (DT = null)
      }
    }
    let cT = !1;

    function KT() {
      const TT = iT.c.get("openInGameMenuName");
      "clientGame" !== TT && (cT = "inventory" === TT), (0, WT.n)() || (0, WT.j)(), (0, kT.o)(kT.c), iT.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function MT() {
      AT(!1)
    }

    function rT() {
      AT(cT)
    }

    function AT(TT) {
      "clientGame" === iT.c.get("openInGameMenuName") && iT.c.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, WT.j)(), cT = !1
    }
  },
  37405: (TT, oT, IT) => {
    IT.d(oT, {
      B: () => mT,
      C: () => RT,
      E: () => wT,
      F: () => hT,
      G: () => LT,
      J: () => KT,
      L: () => rT,
      O: () => zT,
      b: () => ST,
      d: () => BT,
      h: () => gT,
      k: () => FT,
      n: () => XT,
      r: () => WT,
      s: () => kT,
      v: () => eT,
      x: () => xT
    });
    var iT = IT(8907);

    function zT(TT) {
      return Math.floor(TT).toLocaleString("en-US")
    }
    const kT = 2e3,
      WT = .005,
      XT = .001,
      BT = 2,
      FT = "Fluid Tank",
      ST = "Coolant Mixer",
      DT = 144;

    function LT(TT) {
      const oT = TT.split("|")[0];
      return (0, iT.k)(oT) ? oT === iT.d ? "cryo" : "water" : null
    }
    const xT = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      cT = 63;

    function KT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const IT = oT ? function(TT, oT, IT) {
        const iT = xT.findIndex((iT => {
          let [zT, kT, WT] = iT;
          return zT === TT && kT === oT && WT === IT
        }));
        return iT < 0 ? 0 : 1 << iT
      }(oT[0], oT[1], oT[2]) : 0;
      return "maker" === TT ? {
        kind: TT,
        faces: IT
      } : "user" === TT ? {
        kind: TT,
        faces: cT & ~IT
      } : {
        kind: TT,
        faces: cT
      }
    }

    function MT(TT) {
      return "pipe" === TT || "tank" === TT || "maker" === TT
    }

    function rT(TT, oT, IT) {
      return 0 !== (TT.faces & 1 << IT) && 0 !== (oT.faces & 1 << (1 ^ IT)) && (MT(TT.kind) || MT(oT.kind))
    }
    const AT = (TT, oT, IT, iT) => ({
        input: TT,
        inputAmount: iT,
        output: oT,
        outputAmount: IT
      }),
      gT = {
        Condenser: {
          kind: "Condenser",
          opMs: 2e3,
          inputSlot: null,
          fuelSlot: null,
          outputSlots: [],
          recipes: [],
          powerPerOp: 60,
          fluidMade: 12,
          couplable: !0,
          couplerSlot: 0
        },
        Centrifuge: {
          kind: "Centrifuge",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [AT("Uranium Grit", "Uranium Pellet", 1, 12), AT("Spent Pellet", "Plutonium Pellet", 1, 4)],
          powerPerOp: 600,
          waterPerOp: 24
        },
        Synthesizer: {
          kind: "Synthesizer",
          opMs: 6e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [],
          powerPerOp: 120,
          waterPerOp: 12,
          synth: !0
        },
        "Coolant Mixer": {
          kind: "Coolant Mixer",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [],
          recipes: [AT("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: DT,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function hT(TT, oT) {
      return 1e3 * (null !== oT && void 0 !== oT ? oT : 0) / TT.opMs
    }

    function wT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const IT = hT(gT["Coolant Mixer"], DT) * oT;
      return TT <= 0 ? 0 : Math.ceil(TT / IT - 1e-9)
    }
    const mT = "baf2Water",
      eT = "baf2waterclose",
      RT = "baf2wateropen"
  },
  37399: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => uT,
      h: () => hT,
      l: () => gT
    });
    var iT = IT(8829),
      zT = IT(8846),
      kT = IT(8907),
      WT = IT(37405),
      XT = IT(8901);
    const BT = (0, WT.J)("pipe"),
      FT = (0, WT.J)("tank"),
      ST = (0, WT.J)("port"),
      DT = "Reactor Port";

    function LT(TT, oT, IT) {
      const iT = new Set([kT.f, kT.d, DT, ...oT, ...IT, ...TT ? [WT.k] : []]);
      return {
        makers: new Set(oT),
        roots: iT
      }
    }
    const xT = {
        water: LT(!0, ["Condenser"], ["Centrifuge", "Synthesizer", WT.b]),
        cryo: LT(!1, [WT.b], [])
      },
      cT = new Set([...xT.water.roots, ...xT.cryo.roots]),
      KT = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      MT = zT.h.map((TT => KT[TT])),
      rT = MT.map((TT => {
        let [oT, IT, iT] = TT;
        return WT.x.findIndex((TT => {
          let [zT, kT, WT] = TT;
          return zT === oT && kT === IT && WT === iT
        }))
      }));

    function AT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const IT = iT.j[TT],
        zT = null === IT || void 0 === IT ? void 0 : IT.meta.rootName,
        LT = xT[oT];
      if (!zT || !LT.roots.has(zT)) return null;
      if ((0, kT.k)(zT)) return (0, WT.G)(IT.name) === oT ? BT : null;
      if (zT === WT.k) return FT;
      if (zT === DT) return IT.name.endsWith("|Water") ? ST : null;
      const [cT, KT] = XT.g[(IT.meta.rot || 1) - 1];
      return (0, WT.J)(LT.makers.has(zT) ? "maker" : "user", [-cT, 0, -KT])
    }

    function gT(TT, oT, IT, zT) {
      let kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: XT
      } = xT[kT];
      return MT.some(((FT, ST) => {
        var DT, LT;
        let [xT, cT, KT] = FT;
        const MT = TT(oT + xT, IT + cT, zT + KT),
          gT = AT(MT, kT);
        return null !== gT && XT.has(null !== (DT = null === (LT = iT.j[MT]) || void 0 === LT ? void 0 : LT.meta.rootName) && void 0 !== DT ? DT : "") && !(0, WT.L)(BT, gT, rT[ST])
      }))
    }

    function hT(TT) {
      const oT = iT.j[TT];
      return oT ? (0, WT.G)(oT.name) : null
    }
    let wT = null;

    function mT(TT) {
      if (!wT) {
        wT = new Map;
        for (const TT of ["water", "cryo"])
          for (let oT = 0; oT < 64; oT++)
            for (const IT of [!1, !0]) wT.set((0, kT.l)(TT, oT, IT), {
              Sx: TT,
              mask: oT,
              full: IT
            })
      }
      return wT.get(TT)
    }
    const eT = new Map(Array.from({
      length: kT.g + 1
    }, ((TT, oT) => [(0, kT.o)(oT), oT])));

    function RT(TT, oT, IT, zT, kT, WT) {
      return MT.some(((XT, BT) => {
        var FT, ST, DT;
        let [LT, xT, cT] = XT;
        if (0 === (WT >> BT & 1)) return !1;
        const KT = null !== (FT = null === (ST = iT.j[TT(oT + LT, IT + xT, zT + cT)]) || void 0 === ST ? void 0 : ST.name) && void 0 !== FT ? FT : "",
          MT = mT(KT);
        return MT ? MT.Sx === kT && MT.full : (null !== (DT = function(TT) {
          var oT;
          return null !== (oT = eT.get(TT)) && void 0 !== oT ? oT : null
        }(KT)) && void 0 !== DT ? DT : 0) > 0
      }))
    }
    class uT {
      constructor() {
        this.reshapeOffsets = MT
      }
      handles(TT) {
        return null !== hT(TT)
      }
      affects(TT) {
        var oT, IT;
        return cT.has(null !== (oT = null === (IT = iT.j[TT]) || void 0 === IT ? void 0 : IT.meta.rootName) && void 0 !== oT ? oT : "")
      }
      placedBy(TT) {
        var oT;
        return (null === (oT = iT.j[TT]) || void 0 === oT ? void 0 : oT.meta.rootName) === kT.d ? kT.f : null
      }
      shape(TT, oT, IT, zT, XT, FT) {
        var ST, DT, LT;
        const xT = null !== (ST = null === (DT = iT.j[XT]) || void 0 === DT ? void 0 : DT.name) && void 0 !== ST ? ST : "",
          cT = FT || xT !== kT.f ? null !== (LT = (0, WT.G)(xT)) && void 0 !== LT ? LT : "water" : function(TT, oT, IT, iT) {
            return MT.some(((zT, kT) => {
              let [XT, FT, ST] = zT;
              const DT = AT(TT(oT + XT, IT + FT, iT + ST), "cryo");
              return null !== DT && "port" !== DT.kind && (0, WT.L)(BT, DT, rT[kT])
            })) ? "cryo" : "water"
          }(TT, oT, IT, zT),
          KT = function(TT, oT, IT, iT) {
            let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              kT = 0;
            return MT.forEach(((XT, FT) => {
              let [ST, DT, LT] = XT;
              const xT = AT(TT(oT + ST, IT + DT, iT + LT), zT);
              xT && (0, WT.L)(BT, xT, rT[FT]) && (kT |= 1 << FT)
            })), kT
          }(TT, oT, IT, zT, cT),
          gT = FT ? function(TT) {
            var oT;
            return !0 === (null === (oT = mT(TT)) || void 0 === oT ? void 0 : oT.full)
          }(xT) : RT(TT, oT, IT, zT, cT, KT);
        return (0, iT.m)((0, kT.l)(cT, KT, gT))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);