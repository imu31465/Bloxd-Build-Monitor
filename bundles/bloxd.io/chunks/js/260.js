export const id = 260;
export const ids = [260];
export const modules = {
  40124: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      f: () => PU
    });
    var tU = gU(1808);
    let pU = !1;

    function EU() {
      pU = !0
    }

    function PU() {
      pU && (pU = !1, (0, tU.c)())
    }
  },
  40140: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU,
      e: () => PU
    });
    var tU = gU(2973);
    let pU = null,
      EU = null;

    function PU() {
      return EU ??= gU.e(208).then((() => gU(35922))).then((UU => {
        let {
          ITEM_SPRITES: RU,
          ITEM_SPRITES_WITHOUT_FILE: gU,
          ITEM_FILES_WITHOUT_SPRITE: EU
        } = UU;
        pU = function(UU, RU, gU) {
          const pU = new Set,
            EU = (0, tU.s)(RU);
          let PU = 0;
          for (const [tU, TU] of UU.entries()) tU === EU[PU] ? PU++ : pU.add(TU);
          if ("" !== gU)
            for (const TU of gU.split(tU.q)) pU.add(TU);
          return pU
        }(RU.split(tU.q), gU, EU)
      }), (UU => {
        throw EU = null, UU
      })), EU
    }

    function TU(UU) {
      var RU, gU;
      return null !== (RU = null === (gU = pU) || void 0 === gU ? void 0 : gU.has(UU)) && void 0 !== RU && RU
    }
  },
  40121: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      loadIcons: () => oU,
      setIconFileOverrides: () => ZU,
      wasmIconLookups: () => HU,
      wasmIconQueries: () => dU
    });
    var tU = gU(4162),
      pU = gU(4131),
      EU = gU(40124),
      PU = gU(1808),
      TU = gU(1800),
      qU = gU(2969),
      KU = gU(2973);
    let cU = null,
      GU = null;

    function jU(UU) {
      const RU = UU.startsWith(KU.i),
        [gU, tU = gU, pU = gU] = (RU ? UU.slice(KU.i.length) : UU).split(KU.f);
      return {
        top: gU,
        left: tU,
        right: pU,
        half: RU
      }
    }

    function uU(UU) {
      const RU = null === cU ? void 0 : (0, qU.c)(UU),
        gU = void 0 === RU ? 0 : cU.codes[RU];
      return 0 === gU ? void 0 : cU.pool[gU - 1]
    }
    var CU = gU(2966),
      hU = gU(4120),
      QU = gU(4153),
      eU = gU(40133);
    const WU = "item:";
    let fU = null,
      xU = null,
      mU = null,
      IU = null,
      JU = !1,
      wU = !1,
      nU = null,
      bU = 0;

    function oU() {
      return wU || (wU = !0, (0, QU.g)().then((UU => {
        UU && (0, PU.c)()
      }))), mU ??= Promise.all([(0, CU.f)(), (GU ??= gU.e(1).then((() => gU(41972))).then((UU => {
        let {
          BLOCK_FACE_RUNS: RU,
          BLOCK_FACES: gU,
          MAX_FACE_ITEM_ID: tU
        } = UU;
        cU = {
          codes: (0, KU.t)(RU, tU + 1),
          pool: gU.split(KU.q).map(jU)
        }
      }), (UU => {
        throw GU = null, UU
      })), GU), (0, eU.d)(), gU.e(189).then((() => gU(9009)))]).then((UU => {
        let [, , RU, gU] = UU;
        RU.followBundledTextures(), fU = RU, xU = gU, (0, PU.c)()
      }), (UU => {
        mU = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", UU)
      })), mU
    }

    function ZU(UU) {
      nU = UU, bU++, (0, PU.c)()
    }

    function aU(UU) {
      var RU, gU;
      return null !== (RU = null === (gU = nU) || void 0 === gU ? void 0 : gU.itemSprite(UU)) && void 0 !== RU ? RU : fU.itemSpriteUrl(UU)
    }

    function YU(UU) {
      var RU, gU;
      return null !== (RU = null === (gU = nU) || void 0 === gU ? void 0 : gU.blockTexture(UU)) && void 0 !== RU ? RU : fU.blockTextureUrl(UU)
    }

    function BU(UU) {
      var RU;
      return null !== (RU = (0, CU.c)(UU)) && void 0 !== RU ? RU : UU
    }

    function VU(UU, RU) {
      var gU, tU, pU;
      return null !== (gU = null !== (tU = null !== (pU = YU(UU)) && void 0 !== pU ? pU : null === RU || void 0 === RU ? void 0 : RU.rotated[UU]) && void 0 !== tU ? tU : null === RU || void 0 === RU ? void 0 : RU.animated[UU]) && void 0 !== gU ? gU : fU.notFoundUrl()
    }

    function rU(UU) {
      return void 0 !== (0, qU.c)(UU) ? UU : /^[1-9][0-9]*$/.test(UU) ? (0, qU.f)(Number(UU)) : void 0
    }

    function XU(UU) {
      var RU;
      if (UU.startsWith(WU)) {
        var gU;
        const RU = (0, CU.c)(UU.slice(5));
        return null !== (gU = void 0 === RU ? null : aU(RU)) && void 0 !== gU ? gU : fU.notFoundUrl()
      }
      return null !== (RU = fU.particleUrl(UU)) && void 0 !== RU ? RU : fU.notFoundUrl()
    }

    function vU(UU, RU) {
      return "StairsBlock" === UU ? UU : RU ? "SlabBlock" : "CubeBlock"
    }
    const dU = {
        async blockIcon(UU) {
          var RU;
          let {
            name: tU,
            size: pU,
            lineWidth: EU
          } = UU;
          await oU();
          const TU = null !== (RU = rU(tU)) && void 0 !== RU ? RU : tU,
            KU = (0, QU.b)(TU, pU, EU);
          if (null !== KU) return KU;
          const cU = uU(TU),
            GU = (0, qU.c)(TU),
            jU = void 0 === GU || null === xU ? void 0 : xU.itemTypeNameOf(GU);
          if (null === fU || void 0 === cU) return "";
          const CU = [cU.top, cU.left, cU.right].some((UU => null === YU(UU))),
            eU = CU ? await (IU ??= gU.e(201).then((() => gU(33915))).then((UU => (JU && (JU = !1, (0, PU.c)()), {
              rotated: UU.rotatedBlockTextures,
              animated: UU.animatedBlockTextures
            })), (UU => (IU = null, JU = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", UU), null))), IU) : null;
          if (CU && null === eU) return "";
          const WU = {
              top: VU(cU.top, eU),
              left: VU(cU.left, eU),
              right: VU(cU.right, eU),
              itemType: vU(jU, cU.half)
            },
            mU = 0 === bU ? TU : `${TU}#${bU}`;
          return (await (0, hU.e)()).drawBlockIconUrl(mU, pU, EU, (() => WU))
        }
      },
      HU = {
        itemIcon: function(UU) {
          var RU, gU;
          if (null === fU) return oU(), TU.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(UU);
          if ((0, pU.k)(UU)) return {
            kind: "icon",
            url: null !== (gU = fU.ingameIconUrl(UU)) && void 0 !== gU ? gU : fU.notFoundUrl()
          };
          if (UU.startsWith(pU.e)) return {
            kind: "icon",
            url: XU(UU.slice(pU.e.length))
          };
          if (0 === (0, qU.g)()) return (0, EU.c)(), TU.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(UU);
          const PU = null !== (RU = rU(UU)) && void 0 !== RU ? RU : UU,
            KU = (0, qU.c)(PU),
            cU = void 0 === KU ? void 0 : xU.itemTypeNameOf(KU);
          if (void 0 !== uU(PU)) return {
            kind: "drawnBlock"
          };
          const GU = function(UU) {
            var RU;
            return null !== (RU = aU(BU(UU))) && void 0 !== RU ? RU : fU.notFoundUrl()
          }(PU);
          if ((0, QU.e)(PU) && ! function(UU) {
              return null !== nU && (null !== nU.itemSprite(BU(UU)) || null !== nU.model(UU))
            }(PU)) return {
            kind: "model",
            url: GU
          };
          if ("Gun" === cU) return {
            kind: "gun",
            url: GU
          };
          if (void 0 !== KU && "GrayscaleArmour" === xU.itemTypeOf(KU) || Object.hasOwn(tU.d, PU)) {
            var jU;
            const RU = null !== (jU = (0, tU.h)(UU)) && void 0 !== jU ? jU : (0, tU.h)(PU);
            if (RU) return {
              kind: "item",
              url: GU,
              tint: RU
            }
          }
          return {
            kind: "item",
            url: GU
          }
        },
        hasIcon: function(UU) {
          return void 0 !== rU(UU) || (0, pU.k)(UU) || UU.startsWith(pU.e)
        },
        isItemName: function(UU) {
          return void 0 !== rU(UU)
        }
      }
  },
  40133: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU,
      d: () => TU
    });
    var tU = gU(40140);
    let pU = null,
      EU = null;

    function PU() {
      return pU ??= gU.e(58).then((() => gU(41979))).catch((UU => {
        throw pU = null, UU
      })), pU
    }

    function TU() {
      return EU ??= Promise.all([PU(), (0, tU.e)()]).then((UU => {
        let [RU] = UU;
        return RU
      }), (UU => {
        throw EU = null, UU
      })), EU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);