export const id = 239;
export const ids = [239];
export const modules = {
  38252: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR,
      g: () => AW
    });
    var wW = MW(1553);
    let CW = !1;

    function zR() {
      CW = !0
    }

    function AW() {
      CW && (CW = !1, (0, wW.e)())
    }
  },
  38262: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR,
      g: () => AW
    });
    var wW = MW(2415);
    let CW = null,
      zR = null;

    function AW() {
      return zR ??= MW.e(188).then((() => MW(34645))).then((WW => {
        let {
          ITEM_SPRITES: RW,
          ITEM_SPRITES_WITHOUT_FILE: MW,
          ITEM_FILES_WITHOUT_SPRITE: zR
        } = WW;
        CW = function(WW, RW, MW) {
          const CW = new Set,
            zR = (0, wW.y)(RW);
          let AW = 0;
          for (const [wW, bR] of WW.entries()) wW === zR[AW] ? AW++ : CW.add(bR);
          if ("" !== MW)
            for (const bR of MW.split(wW.s)) CW.add(bR);
          return CW
        }(RW.split(wW.s), MW, zR)
      }), (WW => {
        throw zR = null, WW
      })), zR
    }

    function bR(WW) {
      var RW, MW;
      return null !== (RW = null === (MW = CW) || void 0 === MW ? void 0 : MW.has(WW)) && void 0 !== RW && RW
    }
  },
  38247: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      loadIcons: () => jR,
      setIconFileOverrides: () => kR,
      wasmIconLookups: () => mR,
      wasmIconQueries: () => VW
    });
    var wW = MW(3536),
      CW = MW(3507),
      zR = MW(38252),
      AW = MW(1553),
      bR = MW(3520),
      yR = MW(1544),
      NW = MW(2410),
      eW = MW(2415);
    let BW = null,
      tR = null;

    function TW(WW) {
      const RW = WW.startsWith(eW.k),
        [MW, wW = MW, CW = MW] = (RW ? WW.slice(eW.k.length) : WW).split(eW.h);
      return {
        top: MW,
        left: wW,
        right: CW,
        half: RW
      }
    }

    function gR(WW) {
      const RW = null === BW ? void 0 : (0, NW.e)(WW),
        MW = void 0 === RW ? 0 : BW.codes[RW];
      return 0 === MW ? void 0 : BW.pool[MW - 1]
    }
    var iR = MW(2405),
      YW = MW(3491),
      JW = MW(3532),
      PW = MW(38256);
    const IW = "item:";
    let oW = null,
      lW = null,
      FW = null,
      fW = null,
      QW = null,
      rR = !1,
      cR = null,
      XW = 0;

    function jR() {
      return rR || (rR = !0, (0, JW.j)().then((WW => {
        WW && (0, AW.e)()
      }))), fW ??= Promise.all([(0, iR.d)(), (tR ??= MW.e(1).then((() => MW(40056))).then((WW => {
        let {
          BLOCK_FACE_RUNS: RW,
          BLOCK_FACES: MW,
          MAX_FACE_ITEM_ID: wW
        } = WW;
        BW = {
          codes: (0, eW.z)(RW, wW + 1),
          pool: MW.split(eW.s).map(TW)
        }
      }), (WW => {
        throw tR = null, WW
      })), tR), (0, PW.e)(), MW.e(194).then((() => MW(34920)))]).then((WW => {
        let [, , RW, MW] = WW;
        RW.loadBundledTextures(), oW = RW, lW = MW, (0, AW.e)()
      }), (WW => {
        fW = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", WW)
      })), fW
    }

    function kR(WW) {
      cR = WW, XW++, (0, AW.e)()
    }

    function aR(WW) {
      var RW, MW;
      return null !== (RW = null === (MW = cR) || void 0 === MW ? void 0 : MW.itemSprite(WW)) && void 0 !== RW ? RW : oW.itemSpriteUrl(WW)
    }

    function sW(WW) {
      var RW, MW;
      return null !== (RW = null === (MW = cR) || void 0 === MW ? void 0 : MW.blockTexture(WW)) && void 0 !== RW ? RW : oW.blockTextureUrl(WW)
    }

    function dW() {
      return QW ??= MW.e(182).then((() => MW(32670))).then((WW => {
        FW = {
          rotated: WW.rotatedBlockTextures,
          animated: WW.animatedBlockTextures
        }, (0, AW.e)()
      }), (WW => {
        QW = null, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", WW)
      })), QW
    }

    function pW(WW) {
      var RW;
      return null !== (RW = (0, iR.c)(WW)) && void 0 !== RW ? RW : WW
    }

    function hW(WW) {
      var RW, MW;
      const wW = sW(WW);
      return null !== wW ? wW : null === FW ? (dW(), "") : null !== (RW = null !== (MW = FW.rotated[WW]) && void 0 !== MW ? MW : FW.animated[WW]) && void 0 !== RW ? RW : oW.notFoundUrl()
    }

    function UW(WW) {
      return void 0 !== (0, NW.e)(WW) ? WW : /^[1-9][0-9]*$/.test(WW) ? (0, NW.g)(Number(WW)) : void 0
    }

    function EW(WW) {
      var RW;
      if (WW.startsWith(IW)) {
        var MW;
        const RW = (0, iR.c)(WW.slice(5));
        return null !== (MW = void 0 === RW ? null : aR(RW)) && void 0 !== MW ? MW : oW.notFoundUrl()
      }
      return null !== (RW = oW.particleUrl(WW)) && void 0 !== RW ? RW : oW.notFoundUrl()
    }
    const VW = {
        async blockIcon(WW) {
          var RW;
          let {
            name: MW,
            size: wW,
            lineWidth: CW
          } = WW;
          await jR();
          const zR = null !== (RW = UW(MW)) && void 0 !== RW ? RW : MW,
            AW = (0, JW.e)(zR, wW, CW);
          if (null !== AW) return AW;
          const yR = gR(zR),
            eW = (0, NW.e)(zR),
            BW = void 0 === eW || null === lW ? void 0 : lW.itemTypeNameOf(eW);
          if (null === oW || void 0 === yR) return "";
          if ([yR.top, yR.left, yR.right].some((WW => null === sW(WW))) && null === FW && (await dW(), null === FW)) return "";
          const tR = {
              top: hW(yR.top),
              left: hW(yR.left),
              right: hW(yR.right),
              itemType: (0, bR.d)(BW) ? BW : "CubeBlock"
            },
            TW = 0 === XW ? zR : `${zR}#${XW}`;
          return (await (0, YW.d)()).drawBlockIconUrl(TW, wW, CW, (() => tR))
        }
      },
      mR = {
        itemIcon: function(WW) {
          var RW, MW;
          if (null === oW) return jR(), yR.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(WW);
          if ((0, CW.j)(WW)) return {
            kind: "icon",
            url: null !== (MW = oW.ingameIconUrl(WW)) && void 0 !== MW ? MW : oW.notFoundUrl()
          };
          if (WW.startsWith(CW.d)) return {
            kind: "icon",
            url: EW(WW.slice(CW.d.length))
          };
          if (0 === (0, NW.k)()) return (0, zR.d)(), yR.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(WW);
          const AW = null !== (RW = UW(WW)) && void 0 !== RW ? RW : WW,
            bR = (0, NW.e)(AW),
            eW = void 0 === bR ? void 0 : lW.itemTypeNameOf(bR),
            BW = gR(AW);
          if (void 0 !== BW) return "StairsBlock" === eW ? {
            kind: "stairs"
          } : {
            kind: "block",
            top: hW(BW.top),
            left: hW(BW.left),
            right: hW(BW.right),
            half: BW.half
          };
          const tR = function(WW) {
            var RW;
            return null !== (RW = aR(pW(WW))) && void 0 !== RW ? RW : oW.notFoundUrl()
          }(AW);
          if ((0, JW.g)(AW) && ! function(WW) {
              return null !== cR && (null !== cR.itemSprite(pW(WW)) || null !== cR.model(WW))
            }(AW)) return {
            kind: "model",
            url: tR
          };
          if ("Gun" === eW) return {
            kind: "gun",
            url: tR
          };
          if (void 0 !== bR && "GrayscaleArmour" === lW.itemTypeOf(bR) || Object.hasOwn(wW.b, AW)) {
            var TW;
            const RW = null !== (TW = (0, wW.d)(WW)) && void 0 !== TW ? TW : (0, wW.d)(AW);
            if (RW) return {
              kind: "item",
              url: tR,
              tint: RW
            }
          }
          return {
            kind: "item",
            url: tR
          }
        },
        hasIcon: function(WW) {
          return void 0 !== UW(WW) || (0, CW.j)(WW) || WW.startsWith(CW.d)
        },
        isItemName: function(WW) {
          return void 0 !== UW(WW)
        }
      }
  },
  38256: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW,
      e: () => bR
    });
    var wW = MW(38262);
    let CW = null,
      zR = null;

    function AW() {
      return CW ??= MW.e(50).then((() => MW(40059))).catch((WW => {
        throw CW = null, WW
      })), CW
    }

    function bR() {
      return zR ??= Promise.all([AW(), (0, wW.g)()]).then((WW => {
        let [RW] = WW;
        return RW
      }), (WW => {
        throw zR = null, WW
      })), zR
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);