export const id = 239;
export const ids = [239];
export const modules = {
  38645: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF,
      d: () => hF
    });
    var CF = SF(1587);
    let AF = !1;

    function uF() {
      AF = !0
    }

    function hF() {
      AF && (AF = !1, (0, CF.b)())
    }
  },
  38653: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      c: () => hF
    });
    var CF = SF(2485);
    let AF = null,
      uF = null;

    function hF() {
      return uF ??= SF.e(188).then((() => SF(34926))).then((FF => {
        let {
          ITEM_SPRITES: WF,
          ITEM_SPRITES_WITHOUT_FILE: SF,
          ITEM_FILES_WITHOUT_SPRITE: uF
        } = FF;
        AF = function(FF, WF, SF) {
          const AF = new Set,
            uF = (0, CF.E)(WF);
          let hF = 0;
          for (const [CF, bW] of FF.entries()) CF === uF[hF] ? hF++ : AF.add(bW);
          if ("" !== SF)
            for (const bW of SF.split(CF.w)) AF.add(bW);
          return AF
        }(WF.split(CF.w), SF, uF)
      }), (FF => {
        throw uF = null, FF
      })), uF
    }

    function bW(FF) {
      var WF, SF;
      return null !== (WF = null === (SF = AF) || void 0 === SF ? void 0 : SF.has(FF)) && void 0 !== WF && WF
    }
  },
  38638: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      loadIcons: () => xW,
      setIconFileOverrides: () => ZF,
      wasmIconLookups: () => yW,
      wasmIconQueries: () => fF
    });
    var CF = SF(3584),
      AF = SF(3559),
      uF = SF(38645),
      hF = SF(1587),
      bW = SF(3566),
      dF = SF(1576),
      PF = SF(2477),
      RF = SF(2485);
    let iW = null,
      eF = null;

    function EF(FF) {
      const WF = FF.startsWith(RF.o),
        [SF, CF = SF, AF = SF] = (WF ? FF.slice(RF.o.length) : FF).split(RF.l);
      return {
        top: SF,
        left: CF,
        right: AF,
        half: WF
      }
    }

    function QF(FF) {
      const WF = null === iW ? void 0 : (0, PF.b)(FF),
        SF = void 0 === WF ? 0 : iW.codes[WF];
      return 0 === SF ? void 0 : iW.pool[SF - 1]
    }
    var rW = SF(2474),
      gW = SF(3548),
      tW = SF(3579),
      TF = SF(38649);
    const aW = "item:";
    let kW = null,
      qW = null,
      VF = null,
      NF = null,
      DF = null,
      LF = !1,
      mW = null,
      OF = 0;

    function xW() {
      return LF || (LF = !0, (0, tW.i)().then((FF => {
        FF && (0, hF.b)()
      }))), NF ??= Promise.all([(0, rW.d)(), (eF ??= SF.e(1).then((() => SF(40478))).then((FF => {
        let {
          BLOCK_FACE_RUNS: WF,
          BLOCK_FACES: SF,
          MAX_FACE_ITEM_ID: CF
        } = FF;
        iW = {
          codes: (0, RF.H)(WF, CF + 1),
          pool: SF.split(RF.w).map(EF)
        }
      }), (FF => {
        throw eF = null, FF
      })), eF), (0, TF.g)(), SF.e(194).then((() => SF(35203)))]).then((FF => {
        let [, , WF, SF] = FF;
        WF.loadBundledTextures(), kW = WF, qW = SF, (0, hF.b)()
      }), (FF => {
        NF = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", FF)
      })), NF
    }

    function ZF(FF) {
      mW = FF, OF++, (0, hF.b)()
    }

    function oF(FF) {
      var WF, SF;
      return null !== (WF = null === (SF = mW) || void 0 === SF ? void 0 : SF.itemSprite(FF)) && void 0 !== WF ? WF : kW.itemSpriteUrl(FF)
    }

    function YF(FF) {
      var WF, SF;
      return null !== (WF = null === (SF = mW) || void 0 === SF ? void 0 : SF.blockTexture(FF)) && void 0 !== WF ? WF : kW.blockTextureUrl(FF)
    }

    function MF() {
      return DF ??= SF.e(182).then((() => SF(32982))).then((FF => {
        VF = {
          rotated: FF.rotatedBlockTextures,
          animated: FF.animatedBlockTextures
        }, (0, hF.b)()
      }), (FF => {
        DF = null, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", FF)
      })), DF
    }

    function cW(FF) {
      var WF;
      return null !== (WF = (0, rW.c)(FF)) && void 0 !== WF ? WF : FF
    }

    function GF(FF) {
      var WF, SF;
      const CF = YF(FF);
      return null !== CF ? CF : null === VF ? (MF(), "") : null !== (WF = null !== (SF = VF.rotated[FF]) && void 0 !== SF ? SF : VF.animated[FF]) && void 0 !== WF ? WF : kW.notFoundUrl()
    }

    function zW(FF) {
      return void 0 !== (0, PF.b)(FF) ? FF : /^[1-9][0-9]*$/.test(FF) ? (0, PF.f)(Number(FF)) : void 0
    }

    function IF(FF) {
      var WF;
      if (FF.startsWith(aW)) {
        var SF;
        const WF = (0, rW.c)(FF.slice(5));
        return null !== (SF = void 0 === WF ? null : oF(WF)) && void 0 !== SF ? SF : kW.notFoundUrl()
      }
      return null !== (WF = kW.particleUrl(FF)) && void 0 !== WF ? WF : kW.notFoundUrl()
    }
    const fF = {
        async blockIcon(FF) {
          var WF;
          let {
            name: SF,
            size: CF,
            lineWidth: AF
          } = FF;
          await xW();
          const uF = null !== (WF = zW(SF)) && void 0 !== WF ? WF : SF,
            hF = (0, tW.c)(uF, CF, AF);
          if (null !== hF) return hF;
          const dF = QF(uF),
            RF = (0, PF.b)(uF),
            iW = void 0 === RF || null === qW ? void 0 : qW.itemTypeNameOf(RF);
          if (null === kW || void 0 === dF) return "";
          if ([dF.top, dF.left, dF.right].some((FF => null === YF(FF))) && null === VF && (await MF(), null === VF)) return "";
          const eF = {
              top: GF(dF.top),
              left: GF(dF.left),
              right: GF(dF.right),
              itemType: (0, bW.e)(iW) ? iW : "CubeBlock"
            },
            EF = 0 === OF ? uF : `${uF}#${OF}`;
          return (await (0, gW.b)()).drawBlockIconUrl(EF, CF, AF, (() => eF))
        }
      },
      yW = {
        itemIcon: function(FF) {
          var WF, SF;
          if (null === kW) return xW(), dF.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(FF);
          if ((0, AF.m)(FF)) return {
            kind: "icon",
            url: null !== (SF = kW.ingameIconUrl(FF)) && void 0 !== SF ? SF : kW.notFoundUrl()
          };
          if (FF.startsWith(AF.e)) return {
            kind: "icon",
            url: IF(FF.slice(AF.e.length))
          };
          if (0 === (0, PF.g)()) return (0, uF.c)(), dF.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(FF);
          const hF = null !== (WF = zW(FF)) && void 0 !== WF ? WF : FF,
            bW = (0, PF.b)(hF),
            RF = void 0 === bW ? void 0 : qW.itemTypeNameOf(bW),
            iW = QF(hF);
          if (void 0 !== iW) return "StairsBlock" === RF ? {
            kind: "stairs"
          } : {
            kind: "block",
            top: GF(iW.top),
            left: GF(iW.left),
            right: GF(iW.right),
            half: iW.half
          };
          const eF = function(FF) {
            var WF;
            return null !== (WF = oF(cW(FF))) && void 0 !== WF ? WF : kW.notFoundUrl()
          }(hF);
          if ((0, tW.g)(hF) && ! function(FF) {
              return null !== mW && (null !== mW.itemSprite(cW(FF)) || null !== mW.model(FF))
            }(hF)) return {
            kind: "model",
            url: eF
          };
          if ("Gun" === RF) return {
            kind: "gun",
            url: eF
          };
          if (void 0 !== bW && "GrayscaleArmour" === qW.itemTypeOf(bW) || Object.hasOwn(CF.c, hF)) {
            var EF;
            const WF = null !== (EF = (0, CF.f)(FF)) && void 0 !== EF ? EF : (0, CF.f)(hF);
            if (WF) return {
              kind: "item",
              url: eF,
              tint: WF
            }
          }
          return {
            kind: "item",
            url: eF
          }
        },
        hasIcon: function(FF) {
          return void 0 !== zW(FF) || (0, AF.m)(FF) || FF.startsWith(AF.e)
        },
        isItemName: function(FF) {
          return void 0 !== zW(FF)
        }
      }
  },
  38649: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF,
      g: () => bW
    });
    var CF = SF(38653);
    let AF = null,
      uF = null;

    function hF() {
      return AF ??= SF.e(50).then((() => SF(40485))).catch((FF => {
        throw AF = null, FF
      })), AF
    }

    function bW() {
      return uF ??= Promise.all([hF(), (0, CF.c)()]).then((FF => {
        let [WF] = FF;
        return WF
      }), (FF => {
        throw uF = null, FF
      })), uF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);