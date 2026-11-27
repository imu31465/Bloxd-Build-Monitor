export const id = 280;
export const ids = [280];
export const modules = {
  42533: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      h: () => PW
    });
    var mW = OW(2047);
    let EW = !1;

    function NW() {
      EW = !0
    }

    function PW() {
      EW && (EW = !1, (0, mW.b)())
    }
  },
  42394: (WW, iW, OW) => {
    OW.d(iW, {
      C: () => dW,
      G: () => rW,
      H: () => gW,
      I: () => nW,
      J: () => vW,
      M: () => HW,
      P: () => qW,
      S: () => BW,
      V: () => oW,
      d: () => RW,
      h: () => VW,
      i: () => JW,
      m: () => GW,
      q: () => hW,
      t: () => TW,
      u: () => DW,
      v: () => uW,
      z: () => eW
    });
    var mW = OW(1459),
      EW = OW(27),
      NW = OW(1294),
      PW = OW(3305),
      LW = OW(5575),
      cW = OW(5533);
    let wW, tW = !1,
      ZW = !1,
      xW = !1,
      lW = !1;
    const AW = 1300,
      bW = 3e3;
    let jW = 0,
      UW = !1,
      kW = !1,
      sW = 0;
    const MW = 2;
    let KW = !1,
      SW = !1;
    const YW = new Set,
      yW = new Set;

    function TW() {
      return tW
    }

    function JW() {
      return kW
    }

    function hW() {
      return SW
    }

    function HW() {
      return (0, NW.z)() && !SW
    }

    function nW(WW) {
      let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (WW !== SW) {
        SW = WW;
        for (const WW of [...yW]) WW(SW);
        iW && BW()
      }
    }

    function uW(WW) {
      return yW.add(WW), () => {
        yW.delete(WW)
      }
    }

    function oW() {
      (0, LW.j)(PW.y.Menu, (0, NW.z)() ? 0 : PW.y.Menu)
    }

    function dW() {
      kW = !1, sW = 0, oW(), BW()
    }

    function eW(WW) {
      return YW.add(WW), () => {
        YW.delete(WW)
      }
    }

    function vW(WW) {
      ZW = !1, WW !== tW && (tW = WW, lW = !1, clearTimeout(wW), xW = !tW && KW, tW ? (UW = !1, kW = !1, sW = 0) : HW() && !KW && (kW = !0), KW = !1, tW && !HW() && aW(), zW(), xW && BW())
    }

    function gW(WW) {
      WW !== UW && (UW = WW, WW || BW())
    }

    function DW() {
      ZW = !1, lW || !0 !== CW() || (lW = !0, clearTimeout(wW), wW = setTimeout(pW, AW))
    }

    function VW() {
      return (!ZW || performance.now() - jW > bW) && (ZW = (0, cW.K)().lockPointer(), jW = performance.now()), ZW
    }

    function pW() {
      fW() && XW() && VW()
    }

    function fW() {
      return HW() && !tW && !UW && !(0, mW.k)()
    }

    function CW() {
      var WW;
      return "undefined" === typeof navigator || null === (WW = navigator.userActivation) || void 0 === WW ? void 0 : WW.isActive
    }

    function XW() {
      return xW && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== CW()
    }

    function BW() {
      HW() ? fW() && !kW && XW() && VW() : tW && !KW && aW()
    }

    function qW() {
      kW ? navigator.vendor.startsWith("Apple") ? IW() : sW = MW : BW()
    }

    function RW() {
      sW > 0 && 0 === --sW && IW()
    }

    function GW() {
      sW = 0
    }

    function IW() {
      fW() && !0 === CW() && VW()
    }

    function aW() {
      KW = !0, (0, cW.K)().unlockPointer()
    }

    function rW() {
      ZW = !1, xW = !1, lW = !1, clearTimeout(wW), UW = !1, kW = !1, sW = 0, KW = !1;
      const WW = tW;
      tW = !1, WW && zW()
    }

    function zW() {
      for (const WW of [...YW]) WW(tW);
      EW.l.iZ("pointerLockUpdate", tW)
    }
  },
  42373: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => xW,
      h: () => LW,
      j: () => ZW,
      n: () => wW,
      q: () => PW,
      t: () => tW,
      x: () => cW
    });
    let mW = null,
      EW = null,
      NW = null;

    function PW(WW) {
      mW = WW
    }

    function LW() {
      return mW
    }

    function cW(WW) {
      EW = WW
    }

    function wW() {
      return EW
    }

    function tW(WW) {
      NW = WW
    }

    function ZW() {
      return NW
    }

    function xW() {
      var WW, iW;
      return !0 === (null === (WW = EW) || void 0 === WW || null === (iW = WW.currentViewer) || void 0 === iW ? void 0 : iW.inPlayback)
    }
  },
  42528: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW,
      c: () => NW,
      f: () => LW
    });
    var mW = OW(42094),
      EW = OW(42109);

    function NW(WW) {
      if (WW.queries.drawCensus() < mW.Ib.BYTES) return null;
      const iW = WW.memoryData(WW.scratch(), mW.Ib.BYTES, 4, "the draw census");
      return null === iW ? null : {
        terrainOpaque: mW.Ib.terrainOpaque(iW, 0),
        terrainTransparent: mW.Ib.terrainTransparent(iW, 0),
        terrainPack: mW.Ib.terrainPack(iW, 0),
        earthSky: mW.Ib.earthSky(iW, 0),
        skyMeshes: mW.Ib.skyMeshes(iW, 0),
        regular: mW.Ib.regular(iW, 0),
        thin: mW.Ib.thin(iW, 0),
        line: mW.Ib.line(iW, 0),
        text: mW.Ib.text(iW, 0),
        particles: mW.Ib.particles(iW, 0),
        terrainParts: mW.Ib.terrainParts(iW, 0),
        terrainCompiling: mW.Ib.terrainCompiling(iW, 0),
        ringCopiesMax: mW.Ib.ringCopiesMax(iW, 0),
        ringBusyWrites: mW.Ib.ringBusyWrites(iW, 0)
      }
    }

    function PW(WW) {
      const {
        terrainOpaque: iW,
        terrainTransparent: OW,
        earthSky: mW,
        skyMeshes: EW,
        regular: NW,
        thin: PW,
        line: LW,
        text: cW,
        particles: wW
      } = WW;
      return iW + OW + mW + EW + NW + PW + LW + cW + wW
    }

    function LW() {
      const WW = (0, EW.f)();
      return !0 === (null === WW || void 0 === WW ? void 0 : WW.isCoreRunning) ? function(WW) {
        const iW = NW(WW);
        if (null === iW) return [];
        const {
          terrainOpaque: OW,
          terrainTransparent: mW,
          terrainPack: EW,
          earthSky: LW,
          skyMeshes: cW,
          regular: wW,
          thin: tW,
          line: ZW,
          text: xW,
          particles: lW
        } = iW;
        return [{
          label: "Drawn",
          value: `${PW(iW)}`
        }, {
          label: "Terrain",
          value: `${OW} opaque / ${mW} transparent (${EW} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${wW} / ${tW}`
        }, {
          label: "Text / Lines",
          value: `${xW} / ${ZW}`
        }, {
          label: "Sky / Particles",
          value: `${LW+cW} / ${lW}`
        }]
      }(WW.api) : []
    }
  },
  42508: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => AW,
      c: () => xW,
      g: () => lW
    });
    var mW = OW(2051),
      EW = OW(1296),
      NW = OW(42109),
      PW = OW(42131),
      LW = OW(42134),
      cW = OW(42149);
    const wW = new EW.b;
    let tW = !1;

    function ZW(WW) {
      const iW = (0, NW.f)();
      return null !== iW && +WW === iW.api.localId
    }

    function xW() {
      tW || (tW = !0, (0, cW.j)(PW.j, (WW => {
        var iW, OW;
        const mW = (0, LW.g)(PW.j, WW);
        if (!(0, LW.d)(mW)) return;
        const EW = mW;
        ZW(EW.FN) && lW(EW.QN, {
          icon: EW.iP,
          level: EW.mP,
          displayName: null !== (iW = EW.WP) && void 0 !== iW ? iW : null,
          durationMs: null !== (OW = EW.OP) && void 0 !== OW ? OW : null
        })
      })), (0, cW.j)(PW.S, (WW => {
        const iW = (0, LW.g)(PW.S, WW);
        if (!(0, LW.d)(iW)) return;
        const OW = iW;
        ZW(OW.FN) && mW.c.remove(OW.QN)
      })), (0, cW.e)((() => {
        mW.c.clear()
      })))
    }

    function lW(WW, iW) {
      mW.c.update(WW, iW), wW.forEach((iW => {
        iW(WW)
      }))
    }
    const AW = {
      localEffectUpdated: {
        watch: WW => wW.add(WW)
      }
    }
  },
  42513: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW
    });
    var mW = OW(5551),
      EW = OW(5546),
      NW = OW(42137),
      PW = OW(42149);
    const LW = new Set(mW.R),
      cW = mW.R.map((WW => (new TextEncoder).encode(WW))),
      wW = new Map;

    function tW(WW, iW) {
      var OW;
      return null === (OW = wW.get(WW)) || void 0 === OW ? void 0 : OW[iW]
    }(0, PW.j)(mW.uc.NewOtherEntitySettings, (WW => {
      WW.payloadKind === EW.hc.Msgpack && cW.some((iW => function(WW, iW) {
        const OW = iW[0];
        for (let mW = WW.indexOf(OW); - 1 !== mW && mW + iW.length <= WW.length; mW = WW.indexOf(OW, mW + 1)) {
          let OW = 1;
          for (; OW < iW.length && WW[mW + OW] === iW[OW];) OW++;
          if (OW === iW.length) return !0
        }
        return !1
      }(WW.payload, iW))) && function(WW) {
        if (null === WW || "object" !== typeof WW || null === WW.settings || "object" !== typeof WW.settings) return;
        const iW = String(WW.eId),
          OW = WW.settings;
        let mW = wW.get(iW);
        for (const EW in OW) {
          if (!LW.has(EW)) continue;
          const WW = OW[EW];
          null === WW || void 0 === WW ? mW && delete mW[EW] : (mW ??= {}, mW[EW] = WW)
        }
        mW && wW.set(iW, mW)
      }((0, NW.d)(WW.payload))
    })), (0, PW.e)((() => {
      wW.clear()
    }))
  },
  42502: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => lW,
      i: () => wW,
      m: () => ZW
    });
    var mW = OW(40205),
      EW = OW(2042),
      NW = OW(1296),
      PW = OW(42131),
      LW = OW(42134),
      cW = OW(42149);
    const wW = new mW.c;
    let tW = {};

    function ZW(WW) {
      return tW[WW]
    }
    const xW = new NW.b;

    function lW(WW) {
      return xW.add(WW)
    }

    function AW(WW) {
      xW.callEach(WW, "a roster listener")
    }(0, cW.j)(PW.db, (WW => {
      const iW = (0, LW.g)(PW.db, WW);
      if (void 0 === iW) return;
      const OW = iW.SE.some((WW => {
          let {
            YE: iW,
            yE: OW
          } = WW;
          return null !== OW && wW.has(iW) && wW.getName(iW) !== OW
        })),
        {
          added: mW,
          removed: NW,
          settingChanges: cW
        } = wW.apply(iW),
        tW = new Set;
      for (const EW of cW)
        for (const WW in EW.settings) tW.add(WW);
      const ZW = OW || mW.length > 0 || NW.length > 0;
      (ZW || tW.has("hideNameSeed")) && function() {
        const WW = new Map;
        for (const iW of wW.ids()) {
          const OW = wW.getName(iW),
            mW = wW.getSetting(iW, "hideNameSeed");
          void 0 !== OW && void 0 !== mW && null !== mW && WW.set(OW, mW)
        }
        EW.e.replaceAll(WW)
      }(), AW({
        kind: "roster",
        members: ZW,
        settings: tW
      })
    })), (0, cW.j)(PW.O, (WW => {
      const iW = (0, LW.g)(PW.O, WW);
      if (void 0 !== iW) {
        for (const {
            EE: WW,
            NE: OW,
            PE: mW
          }
          of iW) tW[WW] = {
          ...tW[WW],
          [OW]: mW
        };
        AW({
          kind: "cosmetics",
          updates: iW
        })
      }
    })), (0, cW.e)((() => {
      wW.clear(), tW = {}, EW.e.clear(), AW({
        kind: "reset"
      })
    })), (0, cW.i)((() => {
      wW.clear(), AW({
        kind: "reset"
      })
    }))
  },
  42519: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => hW,
      g: () => jW,
      k: () => oW,
      l: () => dW
    });
    var mW = OW(1259),
      EW = OW(632),
      NW = OW(100),
      PW = OW(5551),
      LW = OW(42094),
      cW = OW(42125),
      wW = OW(42109),
      tW = OW(42513),
      ZW = OW(42502),
      xW = OW(42134),
      lW = OW(42149);

    function AW(WW) {
      let {
        deadEId: iW,
        killerEId: OW,
        killerLifeformType: mW,
        withItem: EW,
        killstreak: NW
      } = WW;
      return {
        killer: MW({
          eId: OW,
          lifeformType: mW
        }),
        victim: MW({
          eId: iW
        }),
        withItem: EW,
        killstreak: NW
      }
    }

    function bW(WW) {
      let {
        killer: iW,
        victim: OW,
        withItem: mW
      } = WW;
      return {
        killer: MW(iW),
        victim: MW(OW),
        withItem: mW,
        killstreak: 0
      }
    }

    function jW(WW) {
      yW && JW((() => "killed" === WW.kind ? AW(WW.body) : bW(WW.body)))
    }
    const UW = "#2727f1",
      kW = "#912c2c";

    function sW(WW, iW) {
      var OW;
      return ZW.i.has(WW) ? null === (OW = ZW.i.getSettings(WW)) || void 0 === OW ? void 0 : OW[iW] : (0, tW.c)(WW, iW)
    }

    function MW(WW) {
      var iW, OW, PW, LW, tW;
      let {
        eId: xW,
        name: lW,
        colour: AW,
        lifeformType: bW
      } = WW;
      if (void 0 === xW || null === xW || "" === xW) {
        const WW = lW || null;
        return {
          id: null,
          shownName: WW,
          lifeformType: null === WW && null !== bW && void 0 !== bW ? bW : null,
          colour: AW || null,
          local: !1,
          realName: null
        }
      }
      const jW = String(xW),
        MW = null === (iW = (0, wW.f)()) || void 0 === iW ? void 0 : iW.api,
        KW = void 0 !== MW && String(MW.localId) === jW,
        SW = null !== (OW = ZW.i.getName(jW)) && void 0 !== OW ? OW : null,
        YW = null !== (PW = sW(jW, "hideNameSeed")) && void 0 !== PW ? PW : null;
      let yW = null === SW ? null : (0, mW.b)(SW, !NW.featureFlags.canSeeRealPlayerNames, YW) || null,
        TW = null;
      if (null === yW && void 0 !== MW) {
        const WW = MW.getEntityType(jW);
        "Player" !== WW && (yW = (0, cW.k)(MW, +jW) || null), TW = EW.i.includes(WW) ? WW : null
      }
      return {
        id: jW,
        shownName: yW,
        lifeformType: null === yW && null !== (LW = null !== (tW = TW) && void 0 !== tW ? tW : bW) && void 0 !== LW ? LW : null,
        colour: AW || sW(jW, "killfeedColour") || (KW ? UW : kW),
        local: KW,
        realName: SW
      }
    }
    const KW = 32;
    let SW = [],
      YW = null,
      yW = !1,
      TW = !1;

    function JW(WW) {
      null === YW ? (SW.length === KW && SW.shift(), SW.push(WW)) : YW(WW())
    }

    function hW() {
      TW || (TW = !0, (0, lW.j)(PW.uc.PlayerKilled, (WW => {
        const iW = (0, xW.j)(WW);
        (0, xW.d)(iW) && JW((() => AW(iW)))
      })), (0, lW.j)(PW.uc.CustomKillfeed, (WW => {
        const iW = (0, xW.j)(WW);
        (0, xW.d)(iW) && (0, xW.d)(iW.killer) && (0, xW.d)(iW.victim) && JW((() => bW(iW)))
      })), (0, lW.e)((() => {
        SW = []
      })))
    }
    const HW = Object.freeze([0, 0, 0]),
      nW = [0, 0, 0],
      uW = [0, 0, 0],
      oW = {
        kill: {
          watch(WW) {
            if (yW = !0, 0 === SW.length) return YW = WW, () => {
              yW = !1, YW = null
            };
            const iW = setTimeout((() => {
              const iW = SW;
              SW = [], YW = WW;
              for (const mW of iW) try {
                WW(mW())
              } catch (OW) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", OW)
              }
            }), 0);
            return () => {
              clearTimeout(iW), yW = !1, YW = null
            }
          }
        }
      },
      dW = {
        localPos() {
          const WW = (0, wW.f)();
          if (null === WW) return HW;
          const iW = WW.api.apiView;
          for (let OW = 0; OW < 3; OW++) nW[OW] = LW.z.localPos(iW, 0, OW);
          return nW
        },
        targetedBlockPos() {
          const WW = (0, wW.f)();
          if (null === WW || LW.z.targetBlockId(WW.api.apiView, 0) === LW.nd) return null;
          for (let iW = 0; iW < 3; iW++) uW[iW] = LW.z.targetBlock(WW.api.apiView, 0, iW);
          return uW
        }
      }
  },
  40205: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    class mW {
      constructor() {
        this.members = new Map
      }
      apply(WW) {
        const iW = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const mW of WW.SE) {
          let WW = this.members.get(mW.YE);
          if (WW || (WW = {
              name: null,
              settings: {}
            }, this.members.set(mW.YE, WW), iW.added.push(mW.YE)), null !== mW.yE && (WW.name = mW.yE), null !== mW.TE || mW.JE.length > 0) {
            const OW = null === mW.TE ? {} : JSON.parse(mW.TE);
            Object.assign(WW.settings, OW);
            for (const iW of mW.JE) delete WW.settings[iW], OW[iW] = void 0;
            iW.settingChanges.push({
              playerId: mW.YE,
              settings: OW
            })
          }
        }
        for (const mW of WW.hE) {
          const WW = this.members.get(mW);
          var OW;
          if (WW) this.members.delete(mW), iW.removed.push({
            playerId: mW,
            name: null !== (OW = WW.name) && void 0 !== OW ? OW : void 0
          })
        }
        return iW
      }
      has(WW) {
        return this.members.has(WW)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(WW) {
        var iW, OW;
        return null !== (iW = null === (OW = this.members.get(WW)) || void 0 === OW ? void 0 : OW.name) && void 0 !== iW ? iW : void 0
      }
      getSettings(WW) {
        var iW;
        return null === (iW = this.members.get(WW)) || void 0 === iW ? void 0 : iW.settings
      }
      getSetting(WW, iW) {
        var OW;
        return null === (OW = this.members.get(WW)) || void 0 === OW ? void 0 : OW.settings[iW]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);