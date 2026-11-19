export const id = 259;
export const ids = [259];
export const modules = {
  39524: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      e: () => WT
    });
    var iT = IT(1762);
    let zT = !1;

    function kT() {
      zT = !0
    }

    function WT() {
      zT && (zT = !1, (0, iT.d)())
    }
  },
  39541: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => XT,
      f: () => WT
    });
    var iT = IT(2848);
    let zT = null,
      kT = null;

    function WT() {
      return kT ??= IT.e(203).then((() => IT(35350))).then((TT => {
        let {
          ITEM_SPRITES: oT,
          ITEM_SPRITES_WITHOUT_FILE: IT,
          ITEM_FILES_WITHOUT_SPRITE: kT
        } = TT;
        zT = function(TT, oT, IT) {
          const zT = new Set,
            kT = (0, iT.u)(oT);
          let WT = 0;
          for (const [iT, XT] of TT.entries()) iT === kT[WT] ? WT++ : zT.add(XT);
          if ("" !== IT)
            for (const XT of IT.split(iT.s)) zT.add(XT);
          return zT
        }(oT.split(iT.s), IT, kT)
      }), (TT => {
        throw kT = null, TT
      })), kT
    }

    function XT(TT) {
      var oT, IT;
      return null !== (oT = null === (IT = zT) || void 0 === IT ? void 0 : IT.has(TT)) && void 0 !== oT && oT
    }
  },
  39520: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      loadIcons: () => ET,
      setIconFileOverrides: () => fT,
      wasmIconLookups: () => HT,
      wasmIconQueries: () => OT
    });
    var iT = IT(4014),
      zT = IT(3989),
      kT = IT(39524),
      WT = IT(1762),
      XT = IT(1751),
      BT = IT(2844),
      FT = IT(2848);
    let ST = null,
      DT = null;

    function LT(TT) {
      const oT = TT.startsWith(FT.i),
        [IT, iT = IT, zT = IT] = (oT ? TT.slice(FT.i.length) : TT).split(FT.g);
      return {
        top: IT,
        left: iT,
        right: zT,
        half: oT
      }
    }

    function xT(TT) {
      const oT = null === ST ? void 0 : (0, BT.d)(TT),
        IT = void 0 === oT ? 0 : ST.codes[oT];
      return 0 === IT ? void 0 : ST.pool[IT - 1]
    }
    var cT = IT(2837),
      KT = IT(3983),
      MT = IT(4011),
      rT = IT(39533);
    const AT = "item:";
    let gT = null,
      hT = null,
      wT = null,
      mT = null,
      eT = !1,
      RT = !1,
      uT = null,
      vT = 0;

    function ET() {
      return RT || (RT = !0, (0, MT.h)().then((TT => {
        TT && (0, WT.d)()
      }))), wT ??= Promise.all([(0, cT.h)(), (DT ??= IT.e(1).then((() => IT(41422))).then((TT => {
        let {
          BLOCK_FACE_RUNS: oT,
          BLOCK_FACES: IT,
          MAX_FACE_ITEM_ID: iT
        } = TT;
        ST = {
          codes: (0, FT.w)(oT, iT + 1),
          pool: IT.split(FT.s).map(LT)
        }
      }), (TT => {
        throw DT = null, TT
      })), DT), (0, rT.g)(), IT.e(186).then((() => IT(8763)))]).then((TT => {
        let [, , oT, IT] = TT;
        oT.followBundledTextures(), gT = oT, hT = IT, (0, WT.d)()
      }), (TT => {
        wT = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", TT)
      })), wT
    }

    function fT(TT) {
      uT = TT, vT++, (0, WT.d)()
    }

    function CT(TT) {
      var oT, IT;
      return null !== (oT = null === (IT = uT) || void 0 === IT ? void 0 : IT.itemSprite(TT)) && void 0 !== oT ? oT : gT.itemSpriteUrl(TT)
    }

    function jT(TT) {
      var oT, IT;
      return null !== (oT = null === (IT = uT) || void 0 === IT ? void 0 : IT.blockTexture(TT)) && void 0 !== oT ? oT : gT.blockTextureUrl(TT)
    }

    function JT(TT) {
      var oT;
      return null !== (oT = (0, cT.e)(TT)) && void 0 !== oT ? oT : TT
    }

    function UT(TT, oT) {
      var IT, iT, zT;
      return null !== (IT = null !== (iT = null !== (zT = jT(TT)) && void 0 !== zT ? zT : null === oT || void 0 === oT ? void 0 : oT.rotated[TT]) && void 0 !== iT ? iT : null === oT || void 0 === oT ? void 0 : oT.animated[TT]) && void 0 !== IT ? IT : gT.notFoundUrl()
    }

    function aT(TT) {
      return void 0 !== (0, BT.d)(TT) ? TT : /^[1-9][0-9]*$/.test(TT) ? (0, BT.g)(Number(TT)) : void 0
    }

    function YT(TT) {
      var oT;
      if (TT.startsWith(AT)) {
        var IT;
        const oT = (0, cT.e)(TT.slice(5));
        return null !== (IT = void 0 === oT ? null : CT(oT)) && void 0 !== IT ? IT : gT.notFoundUrl()
      }
      return null !== (oT = gT.particleUrl(TT)) && void 0 !== oT ? oT : gT.notFoundUrl()
    }

    function QT(TT, oT) {
      return "StairsBlock" === TT ? TT : oT ? "SlabBlock" : "CubeBlock"
    }
    const OT = {
        async blockIcon(TT) {
          var oT;
          let {
            name: iT,
            size: zT,
            lineWidth: kT
          } = TT;
          await ET();
          const XT = null !== (oT = aT(iT)) && void 0 !== oT ? oT : iT,
            FT = (0, MT.d)(XT, zT, kT);
          if (null !== FT) return FT;
          const ST = xT(XT),
            DT = (0, BT.d)(XT),
            LT = void 0 === DT || null === hT ? void 0 : hT.itemTypeNameOf(DT);
          if (null === gT || void 0 === ST) return "";
          const cT = [ST.top, ST.left, ST.right].some((TT => null === jT(TT))),
            rT = cT ? await (mT ??= IT.e(196).then((() => IT(33287))).then((TT => (eT && (eT = !1, (0, WT.d)()), {
              rotated: TT.rotatedBlockTextures,
              animated: TT.animatedBlockTextures
            })), (TT => (mT = null, eT = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", TT), null))), mT) : null;
          if (cT && null === rT) return "";
          const AT = {
              top: UT(ST.top, rT),
              left: UT(ST.left, rT),
              right: UT(ST.right, rT),
              itemType: QT(LT, ST.half)
            },
            wT = 0 === vT ? XT : `${XT}#${vT}`;
          return (await (0, KT.d)()).drawBlockIconUrl(wT, zT, kT, (() => AT))
        }
      },
      HT = {
        itemIcon: function(TT) {
          var oT, IT;
          if (null === gT) return ET(), XT.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(TT);
          if ((0, zT.m)(TT)) return {
            kind: "icon",
            url: null !== (IT = gT.ingameIconUrl(TT)) && void 0 !== IT ? IT : gT.notFoundUrl()
          };
          if (TT.startsWith(zT.e)) return {
            kind: "icon",
            url: YT(TT.slice(zT.e.length))
          };
          if (0 === (0, BT.h)()) return (0, kT.c)(), XT.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(TT);
          const WT = null !== (oT = aT(TT)) && void 0 !== oT ? oT : TT,
            FT = (0, BT.d)(WT),
            ST = void 0 === FT ? void 0 : hT.itemTypeNameOf(FT);
          if (void 0 !== xT(WT)) return {
            kind: "drawnBlock"
          };
          const DT = function(TT) {
            var oT;
            return null !== (oT = CT(JT(TT))) && void 0 !== oT ? oT : gT.notFoundUrl()
          }(WT);
          if ((0, MT.e)(WT) && ! function(TT) {
              return null !== uT && (null !== uT.itemSprite(JT(TT)) || null !== uT.model(TT))
            }(WT)) return {
            kind: "model",
            url: DT
          };
          if ("Gun" === ST) return {
            kind: "gun",
            url: DT
          };
          if (void 0 !== FT && "GrayscaleArmour" === hT.itemTypeOf(FT) || Object.hasOwn(iT.e, WT)) {
            var LT;
            const oT = null !== (LT = (0, iT.f)(TT)) && void 0 !== LT ? LT : (0, iT.f)(WT);
            if (oT) return {
              kind: "item",
              url: DT,
              tint: oT
            }
          }
          return {
            kind: "item",
            url: DT
          }
        },
        hasIcon: function(TT) {
          return void 0 !== aT(TT) || (0, zT.m)(TT) || TT.startsWith(zT.e)
        },
        isItemName: function(TT) {
          return void 0 !== aT(TT)
        }
      }
  },
  39533: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT,
      g: () => XT
    });
    var iT = IT(39541);
    let zT = null,
      kT = null;

    function WT() {
      return zT ??= IT.e(58).then((() => IT(41429))).catch((TT => {
        throw zT = null, TT
      })), zT
    }

    function XT() {
      return kT ??= Promise.all([WT(), (0, iT.f)()]).then((TT => {
        let [oT] = TT;
        return oT
      }), (TT => {
        throw kT = null, TT
      })), kT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);