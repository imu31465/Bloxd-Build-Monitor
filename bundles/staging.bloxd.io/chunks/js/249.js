export const id = 249;
export const ids = [249];
export const modules = {
  39459: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB,
      h: () => lB
    });
    var VB = dB(1694);
    let yB = !1;

    function pB() {
      yB = !0
    }

    function lB() {
      yB && (yB = !1, (0, VB.c)())
    }
  },
  39470: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => JB,
      f: () => lB
    });
    var VB = dB(2764);
    let yB = null,
      pB = null;

    function lB() {
      return pB ??= dB.e(193).then((() => dB(35362))).then((BB => {
        let {
          ITEM_SPRITES: TB,
          ITEM_SPRITES_WITHOUT_FILE: dB,
          ITEM_FILES_WITHOUT_SPRITE: pB
        } = BB;
        yB = function(BB, TB, dB) {
          const yB = new Set,
            pB = (0, VB.z)(TB);
          let lB = 0;
          for (const [VB, JB] of BB.entries()) VB === pB[lB] ? lB++ : yB.add(JB);
          if ("" !== dB)
            for (const JB of dB.split(VB.v)) yB.add(JB);
          return yB
        }(TB.split(VB.v), dB, pB)
      }), (BB => {
        throw pB = null, BB
      })), pB
    }

    function JB(BB) {
      var TB, dB;
      return null !== (TB = null === (dB = yB) || void 0 === dB ? void 0 : dB.has(BB)) && void 0 !== TB && TB
    }
  },
  39454: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      loadIcons: () => wB,
      setIconFileOverrides: () => UB,
      wasmIconLookups: () => RB,
      wasmIconQueries: () => QB
    });
    var VB = dB(3916),
      yB = dB(3886),
      pB = dB(39459),
      lB = dB(1694),
      JB = dB(1679),
      YB = dB(2760),
      gB = dB(2764);
    let oB = null,
      kB = null;

    function LB(BB) {
      const TB = BB.startsWith(gB.n),
        [dB, VB = dB, yB = dB] = (TB ? BB.slice(gB.n.length) : BB).split(gB.j);
      return {
        top: dB,
        left: VB,
        right: yB,
        half: TB
      }
    }

    function OB(BB) {
      const TB = null === oB ? void 0 : (0, YB.b)(BB),
        dB = void 0 === TB ? 0 : oB.codes[TB];
      return 0 === dB ? void 0 : oB.pool[dB - 1]
    }
    var DB = dB(2751),
      uB = dB(3869),
      HB = dB(3909),
      EB = dB(39467);
    const vB = "item:";
    let mB = null,
      iB = null,
      NB = null,
      tB = null,
      fB = !1,
      sB = !1,
      MB = null,
      zB = 0;

    function wB() {
      return sB || (sB = !0, (0, HB.d)().then((BB => {
        BB && (0, lB.c)()
      }))), NB ??= Promise.all([(0, DB.g)(), (kB ??= dB.e(1).then((() => dB(41306))).then((BB => {
        let {
          BLOCK_FACE_RUNS: TB,
          BLOCK_FACES: dB,
          MAX_FACE_ITEM_ID: VB
        } = BB;
        oB = {
          codes: (0, gB.B)(TB, VB + 1),
          pool: dB.split(gB.v).map(LB)
        }
      }), (BB => {
        throw kB = null, BB
      })), kB), (0, EB.f)(), dB.e(200).then((() => dB(35681)))]).then((BB => {
        let [, , TB, dB] = BB;
        TB.followBundledTextures(), mB = TB, iB = dB, (0, lB.c)()
      }), (BB => {
        NB = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", BB)
      })), NB
    }

    function UB(BB) {
      MB = BB, zB++, (0, lB.c)()
    }

    function FB(BB) {
      var TB, dB;
      return null !== (TB = null === (dB = MB) || void 0 === dB ? void 0 : dB.itemSprite(BB)) && void 0 !== TB ? TB : mB.itemSpriteUrl(BB)
    }

    function KB(BB) {
      var TB, dB;
      return null !== (TB = null === (dB = MB) || void 0 === dB ? void 0 : dB.blockTexture(BB)) && void 0 !== TB ? TB : mB.blockTextureUrl(BB)
    }

    function rB(BB) {
      var TB;
      return null !== (TB = (0, DB.d)(BB)) && void 0 !== TB ? TB : BB
    }

    function IB(BB, TB) {
      var dB, VB, yB;
      return null !== (dB = null !== (VB = null !== (yB = KB(BB)) && void 0 !== yB ? yB : null === TB || void 0 === TB ? void 0 : TB.rotated[BB]) && void 0 !== VB ? VB : null === TB || void 0 === TB ? void 0 : TB.animated[BB]) && void 0 !== dB ? dB : mB.notFoundUrl()
    }

    function cB(BB) {
      return void 0 !== (0, YB.b)(BB) ? BB : /^[1-9][0-9]*$/.test(BB) ? (0, YB.c)(Number(BB)) : void 0
    }

    function SB(BB) {
      var TB;
      if (BB.startsWith(vB)) {
        var dB;
        const TB = (0, DB.d)(BB.slice(5));
        return null !== (dB = void 0 === TB ? null : FB(TB)) && void 0 !== dB ? dB : mB.notFoundUrl()
      }
      return null !== (TB = mB.particleUrl(BB)) && void 0 !== TB ? TB : mB.notFoundUrl()
    }

    function PB(BB, TB) {
      return "StairsBlock" === BB ? BB : TB ? "SlabBlock" : "CubeBlock"
    }
    const QB = {
        async blockIcon(BB) {
          var TB;
          let {
            name: VB,
            size: yB,
            lineWidth: pB
          } = BB;
          await wB();
          const JB = null !== (TB = cB(VB)) && void 0 !== TB ? TB : VB,
            gB = (0, HB.b)(JB, yB, pB);
          if (null !== gB) return gB;
          const oB = OB(JB),
            kB = (0, YB.b)(JB),
            LB = void 0 === kB || null === iB ? void 0 : iB.itemTypeNameOf(kB);
          if (null === mB || void 0 === oB) return "";
          const DB = [oB.top, oB.left, oB.right].some((BB => null === KB(BB))),
            EB = DB ? await (tB ??= dB.e(187).then((() => dB(33444))).then((BB => (fB && (fB = !1, (0, lB.c)()), {
              rotated: BB.rotatedBlockTextures,
              animated: BB.animatedBlockTextures
            })), (BB => (tB = null, fB = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", BB), null))), tB) : null;
          if (DB && null === EB) return "";
          const vB = {
              top: IB(oB.top, EB),
              left: IB(oB.left, EB),
              right: IB(oB.right, EB),
              itemType: PB(LB, oB.half)
            },
            NB = 0 === zB ? JB : `${JB}#${zB}`;
          return (await (0, uB.e)()).drawBlockIconUrl(NB, yB, pB, (() => vB))
        }
      },
      RB = {
        itemIcon: function(BB) {
          var TB, dB;
          if (null === mB) return wB(), JB.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(BB);
          if ((0, yB.l)(BB)) return {
            kind: "icon",
            url: null !== (dB = mB.ingameIconUrl(BB)) && void 0 !== dB ? dB : mB.notFoundUrl()
          };
          if (BB.startsWith(yB.e)) return {
            kind: "icon",
            url: SB(BB.slice(yB.e.length))
          };
          if (0 === (0, YB.d)()) return (0, pB.d)(), JB.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(BB);
          const lB = null !== (TB = cB(BB)) && void 0 !== TB ? TB : BB,
            gB = (0, YB.b)(lB),
            oB = void 0 === gB ? void 0 : iB.itemTypeNameOf(gB);
          if (void 0 !== OB(lB)) return {
            kind: "drawnBlock"
          };
          const kB = function(BB) {
            var TB;
            return null !== (TB = FB(rB(BB))) && void 0 !== TB ? TB : mB.notFoundUrl()
          }(lB);
          if ((0, HB.c)(lB) && ! function(BB) {
              return null !== MB && (null !== MB.itemSprite(rB(BB)) || null !== MB.model(BB))
            }(lB)) return {
            kind: "model",
            url: kB
          };
          if ("Gun" === oB) return {
            kind: "gun",
            url: kB
          };
          if (void 0 !== gB && "GrayscaleArmour" === iB.itemTypeOf(gB) || Object.hasOwn(VB.e, lB)) {
            var LB;
            const TB = null !== (LB = (0, VB.f)(BB)) && void 0 !== LB ? LB : (0, VB.f)(lB);
            if (TB) return {
              kind: "item",
              url: kB,
              tint: TB
            }
          }
          return {
            kind: "item",
            url: kB
          }
        },
        hasIcon: function(BB) {
          return void 0 !== cB(BB) || (0, yB.l)(BB) || BB.startsWith(yB.e)
        },
        isItemName: function(BB) {
          return void 0 !== cB(BB)
        }
      }
  },
  39467: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB,
      f: () => JB
    });
    var VB = dB(39470);
    let yB = null,
      pB = null;

    function lB() {
      return yB ??= dB.e(54).then((() => dB(41310))).catch((BB => {
        throw yB = null, BB
      })), yB
    }

    function JB() {
      return pB ??= Promise.all([lB(), (0, VB.f)()]).then((BB => {
        let [TB] = BB;
        return TB
      }), (BB => {
        throw pB = null, BB
      })), pB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);