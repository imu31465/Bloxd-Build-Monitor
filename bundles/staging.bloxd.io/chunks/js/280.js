export const id = 280;
export const ids = [280];
export const modules = {
  42577: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      g: () => ZR
    });
    var yR = GR(2144);
    let tR = !1;

    function uR() {
      tR = !0
    }

    function ZR() {
      tR && (tR = !1, (0, yR.e)())
    }
  },
  42423: (RR, JR, GR) => {
    GR.d(JR, {
      A: () => DR,
      E: () => NR,
      I: () => FR,
      M: () => oR,
      O: () => vR,
      S: () => HR,
      T: () => bR,
      X: () => dR,
      _: () => jR,
      ab: () => xR,
      d: () => ER,
      h: () => PR,
      k: () => pR,
      o: () => YR,
      r: () => gR,
      t: () => lR,
      w: () => cR,
      y: () => OR
    });
    var yR = GR(1532),
      tR = GR(32),
      uR = GR(1383),
      ZR = GR(3428),
      qR = GR(5699),
      iR = GR(5665);
    let fR, VR = !1,
      KR = !1,
      wR = !1,
      rR = !1;
    const eR = 1300,
      aR = 3e3;
    let LR = 0,
      nR = !1,
      UR = !1,
      WR = 0;
    const AR = 2;
    let CR = !1,
      XR = !1;
    const MR = new Set,
      BR = new Set;

    function lR() {
      return VR
    }

    function pR() {
      return UR
    }

    function gR() {
      return XR
    }

    function bR() {
      return (0, uR.u)() && !XR
    }

    function vR(RR) {
      let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (RR !== XR) {
        XR = RR;
        for (const RR of [...BR]) RR(XR);
        JR && jR()
      }
    }

    function OR(RR) {
      return BR.add(RR), () => {
        BR.delete(RR)
      }
    }

    function xR() {
      (0, qR.i)(ZR.C.Menu, (0, uR.u)() ? 0 : ZR.C.Menu)
    }

    function NR() {
      UR = !1, WR = 0, xR(), jR()
    }

    function DR(RR) {
      return MR.add(RR), () => {
        MR.delete(RR)
      }
    }

    function HR(RR) {
      KR = !1, RR !== VR && (VR = RR, rR = !1, clearTimeout(fR), wR = !VR && CR, VR ? (nR = !1, UR = !1, WR = 0) : bR() && !CR && (UR = !0), CR = !1, VR && !bR() && QR(), TR(), wR && jR())
    }

    function oR(RR) {
      RR !== nR && (nR = RR, RR || jR())
    }

    function cR() {
      KR = !1, rR || !0 !== zR() || (rR = !0, clearTimeout(fR), fR = setTimeout(IR, eR))
    }

    function PR() {
      return (!KR || performance.now() - LR > aR) && (KR = (0, iR.E)().lockPointer(), LR = performance.now()), KR
    }

    function IR() {
      mR() && SR() && PR()
    }

    function mR() {
      return bR() && !VR && !nR && !(0, yR.j)()
    }

    function zR() {
      var RR;
      return "undefined" === typeof navigator || null === (RR = navigator.userActivation) || void 0 === RR ? void 0 : RR.isActive
    }

    function SR() {
      return wR && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== zR()
    }

    function jR() {
      bR() ? mR() && !UR && SR() && PR() : VR && !CR && QR()
    }

    function dR() {
      UR ? navigator.vendor.startsWith("Apple") ? kR() : WR = AR : jR()
    }

    function ER() {
      WR > 0 && 0 === --WR && kR()
    }

    function YR() {
      WR = 0
    }

    function kR() {
      mR() && !0 === zR() && PR()
    }

    function QR() {
      CR = !0, (0, iR.E)().unlockPointer()
    }

    function FR() {
      KR = !1, wR = !1, rR = !1, clearTimeout(fR), nR = !1, UR = !1, WR = 0, CR = !1;
      const RR = VR;
      VR = !1, RR && TR()
    }

    function TR() {
      for (const RR of [...MR]) RR(VR);
      tR.n.JK("pointerLockUpdate", VR)
    }
  },
  42394: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => wR,
      f: () => qR,
      i: () => KR,
      l: () => fR,
      n: () => ZR,
      o: () => VR,
      r: () => iR
    });
    let yR = null,
      tR = null,
      uR = null;

    function ZR(RR) {
      yR = RR
    }

    function qR() {
      return yR
    }

    function iR(RR) {
      tR = RR
    }

    function fR() {
      return tR
    }

    function VR(RR) {
      uR = RR
    }

    function KR() {
      return uR
    }

    function wR() {
      var RR, JR;
      return !0 === (null === (RR = tR) || void 0 === RR || null === (JR = RR.currentViewer) || void 0 === JR ? void 0 : JR.inPlayback)
    }
  },
  42568: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR,
      d: () => uR,
      g: () => qR
    });
    var yR = GR(42106),
      tR = GR(42118);

    function uR(RR) {
      if (RR.queries.drawCensus() < yR.wb.BYTES) return null;
      const JR = RR.memoryData(RR.scratch(), yR.wb.BYTES, 4, "the draw census");
      return null === JR ? null : {
        terrainOpaque: yR.wb.terrainOpaque(JR, 0),
        terrainTransparent: yR.wb.terrainTransparent(JR, 0),
        terrainPack: yR.wb.terrainPack(JR, 0),
        earthSky: yR.wb.earthSky(JR, 0),
        skyMeshes: yR.wb.skyMeshes(JR, 0),
        regular: yR.wb.regular(JR, 0),
        thin: yR.wb.thin(JR, 0),
        line: yR.wb.line(JR, 0),
        text: yR.wb.text(JR, 0),
        particles: yR.wb.particles(JR, 0),
        terrainParts: yR.wb.terrainParts(JR, 0),
        terrainCompiling: yR.wb.terrainCompiling(JR, 0),
        ringCopiesMax: yR.wb.ringCopiesMax(JR, 0),
        ringBusyWrites: yR.wb.ringBusyWrites(JR, 0)
      }
    }

    function ZR(RR) {
      const {
        terrainOpaque: JR,
        terrainTransparent: GR,
        earthSky: yR,
        skyMeshes: tR,
        regular: uR,
        thin: ZR,
        line: qR,
        text: iR,
        particles: fR
      } = RR;
      return JR + GR + yR + tR + uR + ZR + qR + iR + fR
    }

    function qR() {
      const RR = (0, tR.l)();
      return !0 === (null === RR || void 0 === RR ? void 0 : RR.isCoreRunning) ? function(RR) {
        const JR = uR(RR);
        if (null === JR) return [];
        const {
          terrainOpaque: GR,
          terrainTransparent: yR,
          terrainPack: tR,
          earthSky: qR,
          skyMeshes: iR,
          regular: fR,
          thin: VR,
          line: KR,
          text: wR,
          particles: rR
        } = JR;
        return [{
          label: "Drawn",
          value: `${ZR(JR)}`
        }, {
          label: "Terrain",
          value: `${GR} opaque / ${yR} transparent (${tR} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${fR} / ${VR}`
        }, {
          label: "Text / Lines",
          value: `${wR} / ${KR}`
        }, {
          label: "Sky / Particles",
          value: `${qR+iR} / ${rR}`
        }]
      }(RR.api) : []
    }
  },
  42552: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => eR,
      g: () => wR,
      h: () => rR
    });
    var yR = GR(2152),
      tR = GR(1391),
      uR = GR(42118),
      ZR = GR(42137),
      qR = GR(42145),
      iR = GR(42164);
    const fR = new tR.d;
    let VR = !1;

    function KR(RR) {
      const JR = (0, uR.l)();
      return null !== JR && +RR === JR.api.localId
    }

    function wR() {
      VR || (VR = !0, (0, iR.l)(ZR.k, (RR => {
        var JR, GR;
        const yR = (0, qR.i)(ZR.k, RR);
        if (!(0, qR.e)(yR)) return;
        const tR = yR;
        KR(tR.tZ) && rR(tR.uZ, {
          icon: tR.qZ,
          level: tR.fZ,
          displayName: null !== (JR = tR.ZZ) && void 0 !== JR ? JR : null,
          durationMs: null !== (GR = tR.iZ) && void 0 !== GR ? GR : null
        })
      })), (0, iR.l)(ZR.R, (RR => {
        const JR = (0, qR.i)(ZR.R, RR);
        if (!(0, qR.e)(JR)) return;
        const GR = JR;
        KR(GR.tZ) && yR.d.remove(GR.uZ)
      })), (0, iR.f)((() => {
        yR.d.clear()
      })))
    }

    function rR(RR, JR) {
      yR.d.update(RR, JR), fR.forEach((JR => {
        JR(RR)
      }))
    }
    const eR = {
      localEffectUpdated: {
        watch: RR => fR.add(RR)
      }
    }
  },
  42555: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => VR
    });
    var yR = GR(5685),
      tR = GR(5676),
      uR = GR(42154),
      ZR = GR(42164);
    const qR = new Set(yR.Q),
      iR = yR.Q.map((RR => (new TextEncoder).encode(RR))),
      fR = new Map;

    function VR(RR, JR) {
      var GR;
      return null === (GR = fR.get(RR)) || void 0 === GR ? void 0 : GR[JR]
    }(0, ZR.l)(yR.sc.NewOtherEntitySettings, (RR => {
      RR.payloadKind === tR.gc.Msgpack && iR.some((JR => function(RR, JR) {
        const GR = JR[0];
        for (let yR = RR.indexOf(GR); - 1 !== yR && yR + JR.length <= RR.length; yR = RR.indexOf(GR, yR + 1)) {
          let GR = 1;
          for (; GR < JR.length && RR[yR + GR] === JR[GR];) GR++;
          if (GR === JR.length) return !0
        }
        return !1
      }(RR.payload, JR))) && function(RR) {
        if (null === RR || "object" !== typeof RR || null === RR.settings || "object" !== typeof RR.settings) return;
        const JR = String(RR.eId),
          GR = RR.settings;
        let yR = fR.get(JR);
        for (const tR in GR) {
          if (!qR.has(tR)) continue;
          const RR = GR[tR];
          null === RR || void 0 === RR ? yR && delete yR[tR] : (yR ??= {}, yR[tR] = RR)
        }
        yR && fR.set(JR, yR)
      }((0, uR.e)(RR.payload))
    })), (0, ZR.f)((() => {
      fR.clear()
    }))
  },
  42543: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => rR,
      f: () => fR,
      i: () => KR
    });
    var yR = GR(40251),
      tR = GR(2137),
      uR = GR(1391),
      ZR = GR(42137),
      qR = GR(42145),
      iR = GR(42164);
    const fR = new yR.d;
    let VR = {};

    function KR(RR) {
      return VR[RR]
    }
    const wR = new uR.d;

    function rR(RR) {
      return wR.add(RR)
    }

    function eR(RR) {
      wR.callEach(RR, "a roster listener")
    }(0, iR.l)(ZR.bb, (RR => {
      const JR = (0, qR.i)(ZR.bb, RR);
      if (void 0 === JR) return;
      const GR = JR.vt.some((RR => {
          let {
            Ot: JR,
            xt: GR
          } = RR;
          return null !== GR && fR.has(JR) && fR.getName(JR) !== GR
        })),
        {
          added: yR,
          removed: uR,
          settingChanges: iR
        } = fR.apply(JR),
        VR = new Set;
      for (const tR of iR)
        for (const RR in tR.settings) VR.add(RR);
      const KR = GR || yR.length > 0 || uR.length > 0;
      (KR || VR.has("hideNameSeed")) && function() {
        const RR = new Map;
        for (const JR of fR.ids()) {
          const GR = fR.getName(JR),
            yR = fR.getSetting(JR, "hideNameSeed");
          void 0 !== GR && void 0 !== yR && null !== yR && RR.set(GR, yR)
        }
        tR.e.replaceAll(RR)
      }(), eR({
        kind: "roster",
        members: KR,
        settings: VR
      })
    })), (0, iR.l)(ZR.Q, (RR => {
      const JR = (0, qR.i)(ZR.Q, RR);
      if (void 0 !== JR) {
        for (const {
            Zt: RR,
            ft: GR,
            Vt: yR
          }
          of JR) VR[RR] = {
          ...VR[RR],
          [GR]: yR
        };
        eR({
          kind: "cosmetics",
          updates: JR
        })
      }
    })), (0, iR.f)((() => {
      fR.clear(), VR = {}, tR.e.clear(), eR({
        kind: "reset"
      })
    })), (0, iR.i)((() => {
      fR.clear(), eR({
        kind: "reset"
      })
    }))
  },
  42563: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => gR,
      f: () => LR,
      j: () => xR,
      l: () => NR
    });
    var yR = GR(1359),
      tR = GR(664),
      uR = GR(103),
      ZR = GR(5685),
      qR = GR(42106),
      iR = GR(42132),
      fR = GR(42118),
      VR = GR(42555),
      KR = GR(42543),
      wR = GR(42145),
      rR = GR(42164);

    function eR(RR) {
      let {
        deadEId: JR,
        killerEId: GR,
        killerLifeformType: yR,
        withItem: tR,
        killstreak: uR
      } = RR;
      return {
        killer: AR({
          eId: GR,
          lifeformType: yR
        }),
        victim: AR({
          eId: JR
        }),
        withItem: tR,
        killstreak: uR
      }
    }

    function aR(RR) {
      let {
        killer: JR,
        victim: GR,
        withItem: yR
      } = RR;
      return {
        killer: AR(JR),
        victim: AR(GR),
        withItem: yR,
        killstreak: 0
      }
    }

    function LR(RR) {
      BR && pR((() => "killed" === RR.kind ? eR(RR.body) : aR(RR.body)))
    }
    const nR = "#2727f1",
      UR = "#912c2c";

    function WR(RR, JR) {
      var GR;
      return KR.f.has(RR) ? null === (GR = KR.f.getSettings(RR)) || void 0 === GR ? void 0 : GR[JR] : (0, VR.b)(RR, JR)
    }

    function AR(RR) {
      var JR, GR, ZR, qR, VR;
      let {
        eId: wR,
        name: rR,
        colour: eR,
        lifeformType: aR
      } = RR;
      if (void 0 === wR || null === wR || "" === wR) {
        const RR = rR || null;
        return {
          id: null,
          shownName: RR,
          lifeformType: null === RR && null !== aR && void 0 !== aR ? aR : null,
          colour: eR || null,
          local: !1,
          realName: null
        }
      }
      const LR = String(wR),
        AR = null === (JR = (0, fR.l)()) || void 0 === JR ? void 0 : JR.api,
        CR = void 0 !== AR && String(AR.localId) === LR,
        XR = null !== (GR = KR.f.getName(LR)) && void 0 !== GR ? GR : null,
        MR = null !== (ZR = WR(LR, "hideNameSeed")) && void 0 !== ZR ? ZR : null;
      let BR = null === XR ? null : (0, yR.e)(XR, !uR.featureFlags.canSeeRealPlayerNames, MR) || null,
        lR = null;
      if (null === BR && void 0 !== AR) {
        const RR = AR.getEntityType(LR);
        "Player" !== RR && (BR = (0, iR.l)(AR, +LR) || null), lR = tR.k.includes(RR) ? RR : null
      }
      return {
        id: LR,
        shownName: BR,
        lifeformType: null === BR && null !== (qR = null !== (VR = lR) && void 0 !== VR ? VR : aR) && void 0 !== qR ? qR : null,
        colour: eR || WR(LR, "killfeedColour") || (CR ? nR : UR),
        local: CR,
        realName: XR
      }
    }
    const CR = 32;
    let XR = [],
      MR = null,
      BR = !1,
      lR = !1;

    function pR(RR) {
      null === MR ? (XR.length === CR && XR.shift(), XR.push(RR)) : MR(RR())
    }

    function gR() {
      lR || (lR = !0, (0, rR.l)(ZR.sc.PlayerKilled, (RR => {
        const JR = (0, wR.k)(RR);
        (0, wR.e)(JR) && pR((() => eR(JR)))
      })), (0, rR.l)(ZR.sc.CustomKillfeed, (RR => {
        const JR = (0, wR.k)(RR);
        (0, wR.e)(JR) && (0, wR.e)(JR.killer) && (0, wR.e)(JR.victim) && pR((() => aR(JR)))
      })), (0, rR.f)((() => {
        XR = []
      })))
    }
    const bR = Object.freeze([0, 0, 0]),
      vR = [0, 0, 0],
      OR = [0, 0, 0],
      xR = {
        kill: {
          watch(RR) {
            if (BR = !0, 0 === XR.length) return MR = RR, () => {
              BR = !1, MR = null
            };
            const JR = setTimeout((() => {
              const JR = XR;
              XR = [], MR = RR;
              for (const yR of JR) try {
                RR(yR())
              } catch (GR) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", GR)
              }
            }), 0);
            return () => {
              clearTimeout(JR), BR = !1, MR = null
            }
          }
        }
      },
      NR = {
        localPos() {
          const RR = (0, fR.l)();
          if (null === RR) return bR;
          const JR = RR.api.apiView;
          for (let GR = 0; GR < 3; GR++) vR[GR] = qR.s.localPos(JR, 0, GR);
          return vR
        },
        targetedBlockPos() {
          const RR = (0, fR.l)();
          if (null === RR || qR.s.targetBlockId(RR.api.apiView, 0) === qR.Yc) return null;
          for (let JR = 0; JR < 3; JR++) OR[JR] = qR.s.targetBlock(RR.api.apiView, 0, JR);
          return OR
        }
      }
  },
  40251: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    class yR {
      constructor() {
        this.members = new Map
      }
      apply(RR) {
        const JR = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const yR of RR.vt) {
          let RR = this.members.get(yR.Ot);
          if (RR || (RR = {
              name: null,
              settings: {}
            }, this.members.set(yR.Ot, RR), JR.added.push(yR.Ot)), null !== yR.xt && (RR.name = yR.xt), null !== yR.Nt || yR.Dt.length > 0) {
            const GR = null === yR.Nt ? {} : JSON.parse(yR.Nt);
            Object.assign(RR.settings, GR);
            for (const JR of yR.Dt) delete RR.settings[JR], GR[JR] = void 0;
            JR.settingChanges.push({
              playerId: yR.Ot,
              settings: GR
            })
          }
        }
        for (const yR of RR.Ht) {
          const RR = this.members.get(yR);
          var GR;
          if (RR) this.members.delete(yR), JR.removed.push({
            playerId: yR,
            name: null !== (GR = RR.name) && void 0 !== GR ? GR : void 0
          })
        }
        return JR
      }
      has(RR) {
        return this.members.has(RR)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(RR) {
        var JR, GR;
        return null !== (JR = null === (GR = this.members.get(RR)) || void 0 === GR ? void 0 : GR.name) && void 0 !== JR ? JR : void 0
      }
      getSettings(RR) {
        var JR;
        return null === (JR = this.members.get(RR)) || void 0 === JR ? void 0 : JR.settings
      }
      getSetting(RR, JR) {
        var GR;
        return null === (GR = this.members.get(RR)) || void 0 === GR ? void 0 : GR.settings[JR]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);