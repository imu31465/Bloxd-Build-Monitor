export const id = 259;
export const ids = [259];
export const modules = {
  39849: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY,
      e: () => RY
    });
    var FY = DY(1818);
    let AY = !1;

    function IY() {
      AY = !0
    }

    function RY() {
      AY && (AY = !1, (0, FY.e)())
    }
  },
  39862: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      h: () => RY
    });
    var FY = DY(2866);
    let AY = null,
      IY = null;

    function RY() {
      return IY ??= DY.e(203).then((() => DY(35761))).then((YY => {
        let {
          ITEM_SPRITES: rY,
          ITEM_SPRITES_WITHOUT_FILE: DY,
          ITEM_FILES_WITHOUT_SPRITE: IY
        } = YY;
        AY = function(YY, rY, DY) {
          const AY = new Set,
            IY = (0, FY.w)(rY);
          let RY = 0;
          for (const [FY, OY] of YY.entries()) FY === IY[RY] ? RY++ : AY.add(OY);
          if ("" !== DY)
            for (const OY of DY.split(FY.s)) AY.add(OY);
          return AY
        }(rY.split(FY.s), DY, IY)
      }), (YY => {
        throw IY = null, YY
      })), IY
    }

    function OY(YY) {
      var rY, DY;
      return null !== (rY = null === (DY = AY) || void 0 === DY ? void 0 : DY.has(YY)) && void 0 !== rY && rY
    }
  },
  39842: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      loadIcons: () => cY,
      setIconFileOverrides: () => KY,
      wasmIconLookups: () => JY,
      wasmIconQueries: () => dY
    });
    var FY = DY(4038),
      AY = DY(4010),
      IY = DY(39849),
      RY = DY(1818),
      OY = DY(1808),
      gY = DY(2864),
      aY = DY(2866);
    let vY = null,
      uY = null;

    function sY(YY) {
      const rY = YY.startsWith(aY.j),
        [DY, FY = DY, AY = DY] = (rY ? YY.slice(aY.j.length) : YY).split(aY.f);
      return {
        top: DY,
        left: FY,
        right: AY,
        half: rY
      }
    }

    function iY(YY) {
      const rY = null === vY ? void 0 : (0, gY.b)(YY),
        DY = void 0 === rY ? 0 : vY.codes[rY];
      return 0 === DY ? void 0 : vY.pool[DY - 1]
    }
    var yY = DY(2862),
      QY = DY(3992),
      oY = DY(4035),
      WY = DY(39858);
    const EY = "item:";
    let mY = null,
      VY = null,
      SY = null,
      lY = null,
      TY = !1,
      eY = !1,
      NY = null,
      BY = 0;

    function cY() {
      return eY || (eY = !0, (0, oY.i)().then((YY => {
        YY && (0, RY.e)()
      }))), SY ??= Promise.all([(0, yY.e)(), (uY ??= DY.e(1).then((() => DY(41667))).then((YY => {
        let {
          BLOCK_FACE_RUNS: rY,
          BLOCK_FACES: DY,
          MAX_FACE_ITEM_ID: FY
        } = YY;
        vY = {
          codes: (0, aY.y)(rY, FY + 1),
          pool: DY.split(aY.s).map(sY)
        }
      }), (YY => {
        throw uY = null, YY
      })), uY), (0, WY.i)(), DY.e(186).then((() => DY(8770)))]).then((YY => {
        let [, , rY, DY] = YY;
        rY.followBundledTextures(), mY = rY, VY = DY, (0, RY.e)()
      }), (YY => {
        SY = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", YY)
      })), SY
    }

    function KY(YY) {
      NY = YY, BY++, (0, RY.e)()
    }

    function HY(YY) {
      var rY, DY;
      return null !== (rY = null === (DY = NY) || void 0 === DY ? void 0 : DY.itemSprite(YY)) && void 0 !== rY ? rY : mY.itemSpriteUrl(YY)
    }

    function zY(YY) {
      var rY, DY;
      return null !== (rY = null === (DY = NY) || void 0 === DY ? void 0 : DY.blockTexture(YY)) && void 0 !== rY ? rY : mY.blockTextureUrl(YY)
    }

    function ZY(YY) {
      var rY;
      return null !== (rY = (0, yY.b)(YY)) && void 0 !== rY ? rY : YY
    }

    function CY(YY, rY) {
      var DY, FY, AY;
      return null !== (DY = null !== (FY = null !== (AY = zY(YY)) && void 0 !== AY ? AY : null === rY || void 0 === rY ? void 0 : rY.rotated[YY]) && void 0 !== FY ? FY : null === rY || void 0 === rY ? void 0 : rY.animated[YY]) && void 0 !== DY ? DY : mY.notFoundUrl()
    }

    function fY(YY) {
      return void 0 !== (0, gY.b)(YY) ? YY : /^[1-9][0-9]*$/.test(YY) ? (0, gY.e)(Number(YY)) : void 0
    }

    function jY(YY) {
      var rY;
      if (YY.startsWith(EY)) {
        var DY;
        const rY = (0, yY.b)(YY.slice(5));
        return null !== (DY = void 0 === rY ? null : HY(rY)) && void 0 !== DY ? DY : mY.notFoundUrl()
      }
      return null !== (rY = mY.particleUrl(YY)) && void 0 !== rY ? rY : mY.notFoundUrl()
    }

    function hY(YY, rY) {
      return "StairsBlock" === YY ? YY : rY ? "SlabBlock" : "CubeBlock"
    }
    const dY = {
        async blockIcon(YY) {
          var rY;
          let {
            name: FY,
            size: AY,
            lineWidth: IY
          } = YY;
          await cY();
          const OY = null !== (rY = fY(FY)) && void 0 !== rY ? rY : FY,
            aY = (0, oY.b)(OY, AY, IY);
          if (null !== aY) return aY;
          const vY = iY(OY),
            uY = (0, gY.b)(OY),
            sY = void 0 === uY || null === VY ? void 0 : VY.itemTypeNameOf(uY);
          if (null === mY || void 0 === vY) return "";
          const yY = [vY.top, vY.left, vY.right].some((YY => null === zY(YY))),
            WY = yY ? await (lY ??= DY.e(196).then((() => DY(33702))).then((YY => (TY && (TY = !1, (0, RY.e)()), {
              rotated: YY.rotatedBlockTextures,
              animated: YY.animatedBlockTextures
            })), (YY => (lY = null, TY = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", YY), null))), lY) : null;
          if (yY && null === WY) return "";
          const EY = {
              top: CY(vY.top, WY),
              left: CY(vY.left, WY),
              right: CY(vY.right, WY),
              itemType: hY(sY, vY.half)
            },
            SY = 0 === BY ? OY : `${OY}#${BY}`;
          return (await (0, QY.b)()).drawBlockIconUrl(SY, AY, IY, (() => EY))
        }
      },
      JY = {
        itemIcon: function(YY) {
          var rY, DY;
          if (null === mY) return cY(), OY.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(YY);
          if ((0, AY.i)(YY)) return {
            kind: "icon",
            url: null !== (DY = mY.ingameIconUrl(YY)) && void 0 !== DY ? DY : mY.notFoundUrl()
          };
          if (YY.startsWith(AY.c)) return {
            kind: "icon",
            url: jY(YY.slice(AY.c.length))
          };
          if (0 === (0, gY.i)()) return (0, IY.b)(), OY.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(YY);
          const RY = null !== (rY = fY(YY)) && void 0 !== rY ? rY : YY,
            aY = (0, gY.b)(RY),
            vY = void 0 === aY ? void 0 : VY.itemTypeNameOf(aY);
          if (void 0 !== iY(RY)) return {
            kind: "drawnBlock"
          };
          const uY = function(YY) {
            var rY;
            return null !== (rY = HY(ZY(YY))) && void 0 !== rY ? rY : mY.notFoundUrl()
          }(RY);
          if ((0, oY.e)(RY) && ! function(YY) {
              return null !== NY && (null !== NY.itemSprite(ZY(YY)) || null !== NY.model(YY))
            }(RY)) return {
            kind: "model",
            url: uY
          };
          if ("Gun" === vY) return {
            kind: "gun",
            url: uY
          };
          if (void 0 !== aY && "GrayscaleArmour" === VY.itemTypeOf(aY) || Object.hasOwn(FY.b, RY)) {
            var sY;
            const rY = null !== (sY = (0, FY.e)(YY)) && void 0 !== sY ? sY : (0, FY.e)(RY);
            if (rY) return {
              kind: "item",
              url: uY,
              tint: rY
            }
          }
          return {
            kind: "item",
            url: uY
          }
        },
        hasIcon: function(YY) {
          return void 0 !== fY(YY) || (0, AY.i)(YY) || YY.startsWith(AY.c)
        },
        isItemName: function(YY) {
          return void 0 !== fY(YY)
        }
      }
  },
  39858: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY,
      i: () => OY
    });
    var FY = DY(39862);
    let AY = null,
      IY = null;

    function RY() {
      return AY ??= DY.e(58).then((() => DY(41672))).catch((YY => {
        throw AY = null, YY
      })), AY
    }

    function OY() {
      return IY ??= Promise.all([RY(), (0, FY.h)()]).then((YY => {
        let [rY] = YY;
        return rY
      }), (YY => {
        throw IY = null, YY
      })), IY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);