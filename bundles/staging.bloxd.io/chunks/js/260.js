export const id = 260;
export const ids = [260];
export const modules = {
  39815: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      e: () => fD
    });
    var ID = cD(1922);
    let pD = !1;

    function iD() {
      pD = !0
    }

    function fD() {
      pD && (pD = !1, (0, ID.b)())
    }
  },
  39822: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD,
      h: () => fD
    });
    var ID = cD(3090);
    let pD = null,
      iD = null;

    function fD() {
      return iD ??= cD.e(208).then((() => cD(35741))).then((DD => {
        let {
          ITEM_SPRITES: CD,
          ITEM_SPRITES_WITHOUT_FILE: cD,
          ITEM_FILES_WITHOUT_SPRITE: iD
        } = DD;
        pD = function(DD, CD, cD) {
          const pD = new Set,
            iD = (0, ID.z)(CD);
          let fD = 0;
          for (const [ID, bD] of DD.entries()) ID === iD[fD] ? fD++ : pD.add(bD);
          if ("" !== cD)
            for (const bD of cD.split(ID.v)) pD.add(bD);
          return pD
        }(CD.split(ID.v), cD, iD)
      }), (DD => {
        throw iD = null, DD
      })), iD
    }

    function bD(DD) {
      var CD, cD;
      return null !== (CD = null === (cD = pD) || void 0 === cD ? void 0 : cD.has(DD)) && void 0 !== CD && CD
    }
  },
  39808: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      loadIcons: () => xD,
      setIconFileOverrides: () => qD,
      wasmIconLookups: () => TD,
      wasmIconQueries: () => LD
    });
    var ID = cD(4288),
      pD = cD(4272),
      iD = cD(39815),
      fD = cD(1922),
      bD = cD(1905),
      QD = cD(3083),
      wD = cD(3090);
    let SD = null,
      BD = null;

    function yD(DD) {
      const CD = DD.startsWith(wD.m),
        [cD, ID = cD, pD = cD] = (CD ? DD.slice(wD.m.length) : DD).split(wD.k);
      return {
        top: cD,
        left: ID,
        right: pD,
        half: CD
      }
    }

    function MD(DD) {
      const CD = null === SD ? void 0 : (0, QD.e)(DD),
        cD = void 0 === CD ? 0 : SD.codes[CD];
      return 0 === cD ? void 0 : SD.pool[cD - 1]
    }
    var tD = cD(3076),
      ZD = cD(4259),
      oD = cD(4284),
      vD = cD(39817);
    const ND = "item:";
    let gD = null,
      XD = null,
      mD = null,
      nD = null,
      OD = !1,
      PD = !1,
      HD = null,
      UD = 0;

    function xD() {
      return PD || (PD = !0, (0, oD.i)().then((DD => {
        DD && (0, fD.b)()
      }))), mD ??= Promise.all([(0, tD.e)(), (BD ??= cD.e(1).then((() => cD(41770))).then((DD => {
        let {
          BLOCK_FACE_RUNS: CD,
          BLOCK_FACES: cD,
          MAX_FACE_ITEM_ID: ID
        } = DD;
        SD = {
          codes: (0, wD.A)(CD, ID + 1),
          pool: cD.split(wD.v).map(yD)
        }
      }), (DD => {
        throw BD = null, DD
      })), BD), (0, vD.d)(), cD.e(189).then((() => cD(9062)))]).then((DD => {
        let [, , CD, cD] = DD;
        CD.followBundledTextures(), gD = CD, XD = cD, (0, fD.b)()
      }), (DD => {
        mD = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", DD)
      })), mD
    }

    function qD(DD) {
      HD = DD, UD++, (0, fD.b)()
    }

    function JD(DD) {
      var CD, cD;
      return null !== (CD = null === (cD = HD) || void 0 === cD ? void 0 : cD.itemSprite(DD)) && void 0 !== CD ? CD : gD.itemSpriteUrl(DD)
    }

    function KD(DD) {
      var CD, cD;
      return null !== (CD = null === (cD = HD) || void 0 === cD ? void 0 : cD.blockTexture(DD)) && void 0 !== CD ? CD : gD.blockTextureUrl(DD)
    }

    function aD(DD) {
      var CD;
      return null !== (CD = (0, tD.d)(DD)) && void 0 !== CD ? CD : DD
    }

    function VD(DD, CD) {
      var cD, ID, pD;
      return null !== (cD = null !== (ID = null !== (pD = KD(DD)) && void 0 !== pD ? pD : null === CD || void 0 === CD ? void 0 : CD.rotated[DD]) && void 0 !== ID ? ID : null === CD || void 0 === CD ? void 0 : CD.animated[DD]) && void 0 !== cD ? cD : gD.notFoundUrl()
    }

    function zD(DD) {
      return void 0 !== (0, QD.e)(DD) ? DD : /^[1-9][0-9]*$/.test(DD) ? (0, QD.h)(Number(DD)) : void 0
    }

    function jD(DD) {
      var CD;
      if (DD.startsWith(ND)) {
        var cD;
        const CD = (0, tD.d)(DD.slice(5));
        return null !== (cD = void 0 === CD ? null : JD(CD)) && void 0 !== cD ? cD : gD.notFoundUrl()
      }
      return null !== (CD = gD.particleUrl(DD)) && void 0 !== CD ? CD : gD.notFoundUrl()
    }

    function lD(DD, CD) {
      return "StairsBlock" === DD ? DD : CD ? "SlabBlock" : "CubeBlock"
    }
    const LD = {
        async blockIcon(DD) {
          var CD;
          let {
            name: ID,
            size: pD,
            lineWidth: iD
          } = DD;
          await xD();
          const bD = null !== (CD = zD(ID)) && void 0 !== CD ? CD : ID,
            wD = (0, oD.c)(bD, pD, iD);
          if (null !== wD) return wD;
          const SD = MD(bD),
            BD = (0, QD.e)(bD),
            yD = void 0 === BD || null === XD ? void 0 : XD.itemTypeNameOf(BD);
          if (null === gD || void 0 === SD) return "";
          const tD = [SD.top, SD.left, SD.right].some((DD => null === KD(DD))),
            vD = tD ? await (nD ??= cD.e(201).then((() => cD(33733))).then((DD => (OD && (OD = !1, (0, fD.b)()), {
              rotated: DD.rotatedBlockTextures,
              animated: DD.animatedBlockTextures
            })), (DD => (nD = null, OD = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", DD), null))), nD) : null;
          if (tD && null === vD) return "";
          const ND = {
              top: VD(SD.top, vD),
              left: VD(SD.left, vD),
              right: VD(SD.right, vD),
              itemType: lD(yD, SD.half)
            },
            mD = 0 === UD ? bD : `${bD}#${UD}`;
          return (await (0, ZD.d)()).drawBlockIconUrl(mD, pD, iD, (() => ND))
        }
      },
      TD = {
        itemIcon: function(DD) {
          var CD, cD;
          if (null === gD) return xD(), bD.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(DD);
          if ((0, pD.h)(DD)) return {
            kind: "icon",
            url: null !== (cD = gD.ingameIconUrl(DD)) && void 0 !== cD ? cD : gD.notFoundUrl()
          };
          if (DD.startsWith(pD.c)) return {
            kind: "icon",
            url: jD(DD.slice(pD.c.length))
          };
          if (0 === (0, QD.l)()) return (0, iD.c)(), bD.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(DD);
          const fD = null !== (CD = zD(DD)) && void 0 !== CD ? CD : DD,
            wD = (0, QD.e)(fD),
            SD = void 0 === wD ? void 0 : XD.itemTypeNameOf(wD);
          if (void 0 !== MD(fD)) return {
            kind: "drawnBlock"
          };
          const BD = function(DD) {
            var CD;
            return null !== (CD = JD(aD(DD))) && void 0 !== CD ? CD : gD.notFoundUrl()
          }(fD);
          if ((0, oD.f)(fD) && ! function(DD) {
              return null !== HD && (null !== HD.itemSprite(aD(DD)) || null !== HD.model(DD))
            }(fD)) return {
            kind: "model",
            url: BD
          };
          if ("Gun" === SD) return {
            kind: "gun",
            url: BD
          };
          if (void 0 !== wD && "GrayscaleArmour" === XD.itemTypeOf(wD) || Object.hasOwn(ID.b, fD)) {
            var yD;
            const CD = null !== (yD = (0, ID.d)(DD)) && void 0 !== yD ? yD : (0, ID.d)(fD);
            if (CD) return {
              kind: "item",
              url: BD,
              tint: CD
            }
          }
          return {
            kind: "item",
            url: BD
          }
        },
        hasIcon: function(DD) {
          return void 0 !== zD(DD) || (0, pD.h)(DD) || DD.startsWith(pD.c)
        },
        isItemName: function(DD) {
          return void 0 !== zD(DD)
        }
      }
  },
  39817: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      d: () => bD
    });
    var ID = cD(39822);
    let pD = null,
      iD = null;

    function fD() {
      return pD ??= cD.e(58).then((() => cD(41772))).catch((DD => {
        throw pD = null, DD
      })), pD
    }

    function bD() {
      return iD ??= Promise.all([fD(), (0, ID.h)()]).then((DD => {
        let [CD] = DD;
        return CD
      }), (DD => {
        throw iD = null, DD
      })), iD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);