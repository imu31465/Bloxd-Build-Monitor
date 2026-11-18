export const id = 249;
export const ids = [249];
export const modules = {
  39494: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      c: () => XJ
    });
    var FJ = ZJ(1717);
    let UJ = !1;

    function eJ() {
      UJ = !0
    }

    function XJ() {
      UJ && (UJ = !1, (0, FJ.b)())
    }
  },
  39508: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ,
      d: () => XJ
    });
    var FJ = ZJ(2780);
    let UJ = null,
      eJ = null;

    function XJ() {
      return eJ ??= ZJ.e(193).then((() => ZJ(35454))).then((JJ => {
        let {
          ITEM_SPRITES: cJ,
          ITEM_SPRITES_WITHOUT_FILE: ZJ,
          ITEM_FILES_WITHOUT_SPRITE: eJ
        } = JJ;
        UJ = function(JJ, cJ, ZJ) {
          const UJ = new Set,
            eJ = (0, FJ.t)(cJ);
          let XJ = 0;
          for (const [FJ, AJ] of JJ.entries()) FJ === eJ[XJ] ? XJ++ : UJ.add(AJ);
          if ("" !== ZJ)
            for (const AJ of ZJ.split(FJ.n)) UJ.add(AJ);
          return UJ
        }(cJ.split(FJ.n), ZJ, eJ)
      }), (JJ => {
        throw eJ = null, JJ
      })), eJ
    }

    function AJ(JJ) {
      var cJ, ZJ;
      return null !== (cJ = null === (ZJ = UJ) || void 0 === ZJ ? void 0 : ZJ.has(JJ)) && void 0 !== cJ && cJ
    }
  },
  39490: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      loadIcons: () => IJ,
      setIconFileOverrides: () => MJ,
      wasmIconLookups: () => dJ,
      wasmIconQueries: () => pJ
    });
    var FJ = ZJ(3917),
      UJ = ZJ(3880),
      eJ = ZJ(39494),
      XJ = ZJ(1717),
      AJ = ZJ(1703),
      qJ = ZJ(2778),
      jJ = ZJ(2780);
    let YJ = null,
      hJ = null;

    function DJ(JJ) {
      const cJ = JJ.startsWith(jJ.i),
        [ZJ, FJ = ZJ, UJ = ZJ] = (cJ ? JJ.slice(jJ.i.length) : JJ).split(jJ.h);
      return {
        top: ZJ,
        left: FJ,
        right: UJ,
        half: cJ
      }
    }

    function sJ(JJ) {
      const cJ = null === YJ ? void 0 : (0, qJ.c)(JJ),
        ZJ = void 0 === cJ ? 0 : YJ.codes[cJ];
      return 0 === ZJ ? void 0 : YJ.pool[ZJ - 1]
    }
    var nJ = ZJ(2769),
      GJ = ZJ(3864),
      fJ = ZJ(3911),
      xJ = ZJ(39499);
    const rJ = "item:";
    let vJ = null,
      mJ = null,
      QJ = null,
      EJ = null,
      VJ = !1,
      KJ = !1,
      yJ = null,
      SJ = 0;

    function IJ() {
      return KJ || (KJ = !0, (0, fJ.j)().then((JJ => {
        JJ && (0, XJ.b)()
      }))), QJ ??= Promise.all([(0, nJ.i)(), (hJ ??= ZJ.e(1).then((() => ZJ(41276))).then((JJ => {
        let {
          BLOCK_FACE_RUNS: cJ,
          BLOCK_FACES: ZJ,
          MAX_FACE_ITEM_ID: FJ
        } = JJ;
        YJ = {
          codes: (0, jJ.x)(cJ, FJ + 1),
          pool: ZJ.split(jJ.n).map(DJ)
        }
      }), (JJ => {
        throw hJ = null, JJ
      })), hJ), (0, xJ.h)(), ZJ.e(200).then((() => ZJ(35740)))]).then((JJ => {
        let [, , cJ, ZJ] = JJ;
        cJ.followBundledTextures(), vJ = cJ, mJ = ZJ, (0, XJ.b)()
      }), (JJ => {
        QJ = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", JJ)
      })), QJ
    }

    function MJ(JJ) {
      yJ = JJ, SJ++, (0, XJ.b)()
    }

    function bJ(JJ) {
      var cJ, ZJ;
      return null !== (cJ = null === (ZJ = yJ) || void 0 === ZJ ? void 0 : ZJ.itemSprite(JJ)) && void 0 !== cJ ? cJ : vJ.itemSpriteUrl(JJ)
    }

    function wJ(JJ) {
      var cJ, ZJ;
      return null !== (cJ = null === (ZJ = yJ) || void 0 === ZJ ? void 0 : ZJ.blockTexture(JJ)) && void 0 !== cJ ? cJ : vJ.blockTextureUrl(JJ)
    }

    function WJ(JJ) {
      var cJ;
      return null !== (cJ = (0, nJ.e)(JJ)) && void 0 !== cJ ? cJ : JJ
    }

    function gJ(JJ, cJ) {
      var ZJ, FJ, UJ;
      return null !== (ZJ = null !== (FJ = null !== (UJ = wJ(JJ)) && void 0 !== UJ ? UJ : null === cJ || void 0 === cJ ? void 0 : cJ.rotated[JJ]) && void 0 !== FJ ? FJ : null === cJ || void 0 === cJ ? void 0 : cJ.animated[JJ]) && void 0 !== ZJ ? ZJ : vJ.notFoundUrl()
    }

    function HJ(JJ) {
      return void 0 !== (0, qJ.c)(JJ) ? JJ : /^[1-9][0-9]*$/.test(JJ) ? (0, qJ.e)(Number(JJ)) : void 0
    }

    function PJ(JJ) {
      var cJ;
      if (JJ.startsWith(rJ)) {
        var ZJ;
        const cJ = (0, nJ.e)(JJ.slice(5));
        return null !== (ZJ = void 0 === cJ ? null : bJ(cJ)) && void 0 !== ZJ ? ZJ : vJ.notFoundUrl()
      }
      return null !== (cJ = vJ.particleUrl(JJ)) && void 0 !== cJ ? cJ : vJ.notFoundUrl()
    }

    function kJ(JJ, cJ) {
      return "StairsBlock" === JJ ? JJ : cJ ? "SlabBlock" : "CubeBlock"
    }
    const pJ = {
        async blockIcon(JJ) {
          var cJ;
          let {
            name: FJ,
            size: UJ,
            lineWidth: eJ
          } = JJ;
          await IJ();
          const AJ = null !== (cJ = HJ(FJ)) && void 0 !== cJ ? cJ : FJ,
            jJ = (0, fJ.b)(AJ, UJ, eJ);
          if (null !== jJ) return jJ;
          const YJ = sJ(AJ),
            hJ = (0, qJ.c)(AJ),
            DJ = void 0 === hJ || null === mJ ? void 0 : mJ.itemTypeNameOf(hJ);
          if (null === vJ || void 0 === YJ) return "";
          const nJ = [YJ.top, YJ.left, YJ.right].some((JJ => null === wJ(JJ))),
            xJ = nJ ? await (EJ ??= ZJ.e(187).then((() => ZJ(33439))).then((JJ => (VJ && (VJ = !1, (0, XJ.b)()), {
              rotated: JJ.rotatedBlockTextures,
              animated: JJ.animatedBlockTextures
            })), (JJ => (EJ = null, VJ = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", JJ), null))), EJ) : null;
          if (nJ && null === xJ) return "";
          const rJ = {
              top: gJ(YJ.top, xJ),
              left: gJ(YJ.left, xJ),
              right: gJ(YJ.right, xJ),
              itemType: kJ(DJ, YJ.half)
            },
            QJ = 0 === SJ ? AJ : `${AJ}#${SJ}`;
          return (await (0, GJ.c)()).drawBlockIconUrl(QJ, UJ, eJ, (() => rJ))
        }
      },
      dJ = {
        itemIcon: function(JJ) {
          var cJ, ZJ;
          if (null === vJ) return IJ(), AJ.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(JJ);
          if ((0, UJ.h)(JJ)) return {
            kind: "icon",
            url: null !== (ZJ = vJ.ingameIconUrl(JJ)) && void 0 !== ZJ ? ZJ : vJ.notFoundUrl()
          };
          if (JJ.startsWith(UJ.c)) return {
            kind: "icon",
            url: PJ(JJ.slice(UJ.c.length))
          };
          if (0 === (0, qJ.h)()) return (0, eJ.b)(), AJ.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(JJ);
          const XJ = null !== (cJ = HJ(JJ)) && void 0 !== cJ ? cJ : JJ,
            jJ = (0, qJ.c)(XJ),
            YJ = void 0 === jJ ? void 0 : mJ.itemTypeNameOf(jJ);
          if (void 0 !== sJ(XJ)) return {
            kind: "drawnBlock"
          };
          const hJ = function(JJ) {
            var cJ;
            return null !== (cJ = bJ(WJ(JJ))) && void 0 !== cJ ? cJ : vJ.notFoundUrl()
          }(XJ);
          if ((0, fJ.f)(XJ) && ! function(JJ) {
              return null !== yJ && (null !== yJ.itemSprite(WJ(JJ)) || null !== yJ.model(JJ))
            }(XJ)) return {
            kind: "model",
            url: hJ
          };
          if ("Gun" === YJ) return {
            kind: "gun",
            url: hJ
          };
          if (void 0 !== jJ && "GrayscaleArmour" === mJ.itemTypeOf(jJ) || Object.hasOwn(FJ.d, XJ)) {
            var DJ;
            const cJ = null !== (DJ = (0, FJ.f)(JJ)) && void 0 !== DJ ? DJ : (0, FJ.f)(XJ);
            if (cJ) return {
              kind: "item",
              url: hJ,
              tint: cJ
            }
          }
          return {
            kind: "item",
            url: hJ
          }
        },
        hasIcon: function(JJ) {
          return void 0 !== HJ(JJ) || (0, UJ.h)(JJ) || JJ.startsWith(UJ.c)
        },
        isItemName: function(JJ) {
          return void 0 !== HJ(JJ)
        }
      }
  },
  39499: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ,
      h: () => AJ
    });
    var FJ = ZJ(39508);
    let UJ = null,
      eJ = null;

    function XJ() {
      return UJ ??= ZJ.e(54).then((() => ZJ(41282))).catch((JJ => {
        throw UJ = null, JJ
      })), UJ
    }

    function AJ() {
      return eJ ??= Promise.all([XJ(), (0, FJ.d)()]).then((JJ => {
        let [cJ] = JJ;
        return cJ
      }), (JJ => {
        throw eJ = null, JJ
      })), eJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);