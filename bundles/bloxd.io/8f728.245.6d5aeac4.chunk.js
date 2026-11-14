export const id = 245;
export const ids = [245];
export const modules = {
  38754: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      e: () => uc
    });
    var Vc = nc(1579);
    let Ic = !1;

    function rB() {
      Ic = !0
    }

    function uc() {
      Ic && (Ic = !1, (0, Vc.c)())
    }
  },
  38765: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => sc,
      i: () => uc
    });
    var Vc = nc(2451);
    let Ic = null,
      rB = null;

    function uc() {
      return rB ??= nc.e(191).then((() => nc(35055))).then((cB => {
        let {
          ITEM_SPRITES: Bc,
          ITEM_SPRITES_WITHOUT_FILE: nc,
          ITEM_FILES_WITHOUT_SPRITE: rB
        } = cB;
        Ic = function(cB, Bc, nc) {
          const Ic = new Set,
            rB = (0, Vc.B)(Bc);
          let uc = 0;
          for (const [Vc, sc] of cB.entries()) Vc === rB[uc] ? uc++ : Ic.add(sc);
          if ("" !== nc)
            for (const sc of nc.split(Vc.t)) Ic.add(sc);
          return Ic
        }(Bc.split(Vc.t), nc, rB)
      }), (cB => {
        throw rB = null, cB
      })), rB
    }

    function sc(cB) {
      var Bc, nc;
      return null !== (Bc = null === (nc = Ic) || void 0 === nc ? void 0 : nc.has(cB)) && void 0 !== Bc && Bc
    }
  },
  38746: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      loadIcons: () => Uc,
      setIconFileOverrides: () => bB,
      wasmIconLookups: () => Wc,
      wasmIconQueries: () => oc
    });
    var Vc = nc(3615),
      Ic = nc(3588),
      rB = nc(38754),
      uc = nc(1579),
      sc = nc(1566),
      Mc = nc(2444),
      Pc = nc(2451);
    let qB = null,
      Oc = null;

    function Tc(cB) {
      const Bc = cB.startsWith(Pc.k),
        [nc, Vc = nc, Ic = nc] = (Bc ? cB.slice(Pc.k.length) : cB).split(Pc.i);
      return {
        top: nc,
        left: Vc,
        right: Ic,
        half: Bc
      }
    }

    function fc(cB) {
      const Bc = null === qB ? void 0 : (0, Mc.e)(cB),
        nc = void 0 === Bc ? 0 : qB.codes[Bc];
      return 0 === nc ? void 0 : qB.pool[nc - 1]
    }
    var mB = nc(2438),
      ec = nc(3579),
      tB = nc(3609),
      Sc = nc(38763);
    const yB = "item:";
    let zB = null,
      pc = null,
      hc = null,
      aB = null,
      lc = !1,
      Yc = !1,
      Lc = null,
      gB = 0;

    function Uc() {
      return Yc || (Yc = !0, (0, tB.i)().then((cB => {
        cB && (0, uc.c)()
      }))), hc ??= Promise.all([(0, mB.g)(), (Oc ??= nc.e(1).then((() => nc(40580))).then((cB => {
        let {
          BLOCK_FACE_RUNS: Bc,
          BLOCK_FACES: nc,
          MAX_FACE_ITEM_ID: Vc
        } = cB;
        qB = {
          codes: (0, Pc.D)(Bc, Vc + 1),
          pool: nc.split(Pc.t).map(Tc)
        }
      }), (cB => {
        throw Oc = null, cB
      })), Oc), (0, Sc.c)(), nc.e(197).then((() => nc(35325)))]).then((cB => {
        let [, , Bc, nc] = cB;
        Bc.loadBundledTextures(), zB = Bc, pc = nc, (0, uc.c)()
      }), (cB => {
        hc = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", cB)
      })), hc
    }

    function bB(cB) {
      Lc = cB, gB++, (0, uc.c)()
    }

    function Zc(cB) {
      var Bc, nc;
      return null !== (Bc = null === (nc = Lc) || void 0 === nc ? void 0 : nc.itemSprite(cB)) && void 0 !== Bc ? Bc : zB.itemSpriteUrl(cB)
    }

    function Qc(cB) {
      var Bc, nc;
      return null !== (Bc = null === (nc = Lc) || void 0 === nc ? void 0 : nc.blockTexture(cB)) && void 0 !== Bc ? Bc : zB.blockTextureUrl(cB)
    }

    function Cc(cB) {
      var Bc;
      return null !== (Bc = (0, mB.d)(cB)) && void 0 !== Bc ? Bc : cB
    }

    function vB(cB, Bc) {
      var nc, Vc, Ic;
      return null !== (nc = null !== (Vc = null !== (Ic = Qc(cB)) && void 0 !== Ic ? Ic : null === Bc || void 0 === Bc ? void 0 : Bc.rotated[cB]) && void 0 !== Vc ? Vc : null === Bc || void 0 === Bc ? void 0 : Bc.animated[cB]) && void 0 !== nc ? nc : zB.notFoundUrl()
    }

    function Dc(cB) {
      return void 0 !== (0, Mc.e)(cB) ? cB : /^[1-9][0-9]*$/.test(cB) ? (0, Mc.f)(Number(cB)) : void 0
    }

    function Nc(cB) {
      var Bc;
      if (cB.startsWith(yB)) {
        var nc;
        const Bc = (0, mB.d)(cB.slice(5));
        return null !== (nc = void 0 === Bc ? null : Zc(Bc)) && void 0 !== nc ? nc : zB.notFoundUrl()
      }
      return null !== (Bc = zB.particleUrl(cB)) && void 0 !== Bc ? Bc : zB.notFoundUrl()
    }

    function Ec(cB, Bc) {
      return "StairsBlock" === cB ? cB : Bc ? "SlabBlock" : "CubeBlock"
    }
    const oc = {
        async blockIcon(cB) {
          var Bc;
          let {
            name: Vc,
            size: Ic,
            lineWidth: rB
          } = cB;
          await Uc();
          const sc = null !== (Bc = Dc(Vc)) && void 0 !== Bc ? Bc : Vc,
            Pc = (0, tB.b)(sc, Ic, rB);
          if (null !== Pc) return Pc;
          const qB = fc(sc),
            Oc = (0, Mc.e)(sc),
            Tc = void 0 === Oc || null === pc ? void 0 : pc.itemTypeNameOf(Oc);
          if (null === zB || void 0 === qB) return "";
          const mB = [qB.top, qB.left, qB.right].some((cB => null === Qc(cB))),
            Sc = mB ? await (aB ??= nc.e(185).then((() => nc(33054))).then((cB => (lc && (lc = !1, (0, uc.c)()), {
              rotated: cB.rotatedBlockTextures,
              animated: cB.animatedBlockTextures
            })), (cB => (aB = null, lc = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", cB), null))), aB) : null;
          if (mB && null === Sc) return "";
          const yB = {
              top: vB(qB.top, Sc),
              left: vB(qB.left, Sc),
              right: vB(qB.right, Sc),
              itemType: Ec(Tc, qB.half)
            },
            hc = 0 === gB ? sc : `${sc}#${gB}`;
          return (await (0, ec.c)()).drawBlockIconUrl(hc, Ic, rB, (() => yB))
        }
      },
      Wc = {
        itemIcon: function(cB) {
          var Bc, nc;
          if (null === zB) return Uc(), sc.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(cB);
          if ((0, Ic.j)(cB)) return {
            kind: "icon",
            url: null !== (nc = zB.ingameIconUrl(cB)) && void 0 !== nc ? nc : zB.notFoundUrl()
          };
          if (cB.startsWith(Ic.e)) return {
            kind: "icon",
            url: Nc(cB.slice(Ic.e.length))
          };
          if (0 === (0, Mc.i)()) return (0, rB.b)(), sc.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(cB);
          const uc = null !== (Bc = Dc(cB)) && void 0 !== Bc ? Bc : cB,
            Pc = (0, Mc.e)(uc),
            qB = void 0 === Pc ? void 0 : pc.itemTypeNameOf(Pc);
          if (void 0 !== fc(uc)) return {
            kind: "drawnBlock"
          };
          const Oc = function(cB) {
            var Bc;
            return null !== (Bc = Zc(Cc(cB))) && void 0 !== Bc ? Bc : zB.notFoundUrl()
          }(uc);
          if ((0, tB.e)(uc) && ! function(cB) {
              return null !== Lc && (null !== Lc.itemSprite(Cc(cB)) || null !== Lc.model(cB))
            }(uc)) return {
            kind: "model",
            url: Oc
          };
          if ("Gun" === qB) return {
            kind: "gun",
            url: Oc
          };
          if (void 0 !== Pc && "GrayscaleArmour" === pc.itemTypeOf(Pc) || Object.hasOwn(Vc.e, uc)) {
            var Tc;
            const Bc = null !== (Tc = (0, Vc.f)(cB)) && void 0 !== Tc ? Tc : (0, Vc.f)(uc);
            if (Bc) return {
              kind: "item",
              url: Oc,
              tint: Bc
            }
          }
          return {
            kind: "item",
            url: Oc
          }
        },
        hasIcon: function(cB) {
          return void 0 !== Dc(cB) || (0, Ic.j)(cB) || cB.startsWith(Ic.e)
        },
        isItemName: function(cB) {
          return void 0 !== Dc(cB)
        }
      }
  },
  38763: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      c: () => sc
    });
    var Vc = nc(38765);
    let Ic = null,
      rB = null;

    function uc() {
      return Ic ??= nc.e(51).then((() => nc(40586))).catch((cB => {
        throw Ic = null, cB
      })), Ic
    }

    function sc() {
      return rB ??= Promise.all([uc(), (0, Vc.i)()]).then((cB => {
        let [Bc] = cB;
        return Bc
      }), (cB => {
        throw rB = null, cB
      })), rB
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);