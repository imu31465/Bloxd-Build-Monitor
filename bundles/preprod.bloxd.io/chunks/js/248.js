export const id = 248;
export const ids = [248];
export const modules = {
  39247: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      h: () => Zy
    });
    var Uy = Wy(1583);
    let hy = !1;

    function fy() {
      hy = !0
    }

    function Zy() {
      hy && (hy = !1, (0, Uy.b)())
    }
  },
  39258: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => cb,
      g: () => Zy
    });
    var Uy = Wy(2604);
    let hy = null,
      fy = null;

    function Zy() {
      return fy ??= Wy.e(192).then((() => Wy(35150))).then((yb => {
        let {
          ITEM_SPRITES: bb,
          ITEM_SPRITES_WITHOUT_FILE: Wy,
          ITEM_FILES_WITHOUT_SPRITE: fy
        } = yb;
        hy = function(yb, bb, Wy) {
          const hy = new Set,
            fy = (0, Uy.y)(bb);
          let Zy = 0;
          for (const [Uy, cb] of yb.entries()) Uy === fy[Zy] ? Zy++ : hy.add(cb);
          if ("" !== Wy)
            for (const cb of Wy.split(Uy.r)) hy.add(cb);
          return hy
        }(bb.split(Uy.r), Wy, fy)
      }), (yb => {
        throw fy = null, yb
      })), fy
    }

    function cb(yb) {
      var bb, Wy;
      return null !== (bb = null === (Wy = hy) || void 0 === Wy ? void 0 : Wy.has(yb)) && void 0 !== bb && bb
    }
  },
  39241: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      loadIcons: () => vb,
      setIconFileOverrides: () => ib,
      wasmIconLookups: () => Fy,
      wasmIconQueries: () => ab
    });
    var Uy = Wy(3707),
      hy = Wy(3685),
      fy = Wy(39247),
      Zy = Wy(1583),
      cb = Wy(1572),
      Py = Wy(2597),
      oy = Wy(2604);
    let By = null,
      Ky = null;

    function ey(yb) {
      const bb = yb.startsWith(oy.k),
        [Wy, Uy = Wy, hy = Wy] = (bb ? yb.slice(oy.k.length) : yb).split(oy.j);
      return {
        top: Wy,
        left: Uy,
        right: hy,
        half: bb
      }
    }

    function qb(yb) {
      const bb = null === By ? void 0 : (0, Py.b)(yb),
        Wy = void 0 === bb ? 0 : By.codes[bb];
      return 0 === Wy ? void 0 : By.pool[Wy - 1]
    }
    var sy = Wy(2591),
      Sy = Wy(3676),
      Ey = Wy(3705),
      ly = Wy(39250);
    const mb = "item:";
    let Cy = null,
      Ty = null,
      Vy = null,
      Jy = null,
      gb = !1,
      Gy = !1,
      Oy = null,
      Ry = 0;

    function vb() {
      return Gy || (Gy = !0, (0, Ey.j)().then((yb => {
        yb && (0, Zy.b)()
      }))), Vy ??= Promise.all([(0, sy.d)(), (Ky ??= Wy.e(1).then((() => Wy(41111))).then((yb => {
        let {
          BLOCK_FACE_RUNS: bb,
          BLOCK_FACES: Wy,
          MAX_FACE_ITEM_ID: Uy
        } = yb;
        By = {
          codes: (0, oy.C)(bb, Uy + 1),
          pool: Wy.split(oy.r).map(ey)
        }
      }), (yb => {
        throw Ky = null, yb
      })), Ky), (0, ly.g)(), Wy.e(198).then((() => Wy(35464)))]).then((yb => {
        let [, , bb, Wy] = yb;
        bb.loadBundledTextures(), Cy = bb, Ty = Wy, (0, Zy.b)()
      }), (yb => {
        Vy = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", yb)
      })), Vy
    }

    function ib(yb) {
      Oy = yb, Ry++, (0, Zy.b)()
    }

    function My(yb) {
      var bb, Wy;
      return null !== (bb = null === (Wy = Oy) || void 0 === Wy ? void 0 : Wy.itemSprite(yb)) && void 0 !== bb ? bb : Cy.itemSpriteUrl(yb)
    }

    function Yy(yb) {
      var bb, Wy;
      return null !== (bb = null === (Wy = Oy) || void 0 === Wy ? void 0 : Wy.blockTexture(yb)) && void 0 !== bb ? bb : Cy.blockTextureUrl(yb)
    }

    function Xy(yb) {
      var bb;
      return null !== (bb = (0, sy.c)(yb)) && void 0 !== bb ? bb : yb
    }

    function ny(yb, bb) {
      var Wy, Uy, hy;
      return null !== (Wy = null !== (Uy = null !== (hy = Yy(yb)) && void 0 !== hy ? hy : null === bb || void 0 === bb ? void 0 : bb.rotated[yb]) && void 0 !== Uy ? Uy : null === bb || void 0 === bb ? void 0 : bb.animated[yb]) && void 0 !== Wy ? Wy : Cy.notFoundUrl()
    }

    function uy(yb) {
      return void 0 !== (0, Py.b)(yb) ? yb : /^[1-9][0-9]*$/.test(yb) ? (0, Py.c)(Number(yb)) : void 0
    }

    function rb(yb) {
      var bb;
      if (yb.startsWith(mb)) {
        var Wy;
        const bb = (0, sy.c)(yb.slice(5));
        return null !== (Wy = void 0 === bb ? null : My(bb)) && void 0 !== Wy ? Wy : Cy.notFoundUrl()
      }
      return null !== (bb = Cy.particleUrl(yb)) && void 0 !== bb ? bb : Cy.notFoundUrl()
    }

    function Hy(yb, bb) {
      return "StairsBlock" === yb ? yb : bb ? "SlabBlock" : "CubeBlock"
    }
    const ab = {
        async blockIcon(yb) {
          var bb;
          let {
            name: Uy,
            size: hy,
            lineWidth: fy
          } = yb;
          await vb();
          const cb = null !== (bb = uy(Uy)) && void 0 !== bb ? bb : Uy,
            oy = (0, Ey.d)(cb, hy, fy);
          if (null !== oy) return oy;
          const By = qb(cb),
            Ky = (0, Py.b)(cb),
            ey = void 0 === Ky || null === Ty ? void 0 : Ty.itemTypeNameOf(Ky);
          if (null === Cy || void 0 === By) return "";
          const sy = [By.top, By.left, By.right].some((yb => null === Yy(yb))),
            ly = sy ? await (Jy ??= Wy.e(186).then((() => Wy(33215))).then((yb => (gb && (gb = !1, (0, Zy.b)()), {
              rotated: yb.rotatedBlockTextures,
              animated: yb.animatedBlockTextures
            })), (yb => (Jy = null, gb = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", yb), null))), Jy) : null;
          if (sy && null === ly) return "";
          const mb = {
              top: ny(By.top, ly),
              left: ny(By.left, ly),
              right: ny(By.right, ly),
              itemType: Hy(ey, By.half)
            },
            Vy = 0 === Ry ? cb : `${cb}#${Ry}`;
          return (await (0, Sy.b)()).drawBlockIconUrl(Vy, hy, fy, (() => mb))
        }
      },
      Fy = {
        itemIcon: function(yb) {
          var bb, Wy;
          if (null === Cy) return vb(), cb.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(yb);
          if ((0, hy.k)(yb)) return {
            kind: "icon",
            url: null !== (Wy = Cy.ingameIconUrl(yb)) && void 0 !== Wy ? Wy : Cy.notFoundUrl()
          };
          if (yb.startsWith(hy.e)) return {
            kind: "icon",
            url: rb(yb.slice(hy.e.length))
          };
          if (0 === (0, Py.e)()) return (0, fy.d)(), cb.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(yb);
          const Zy = null !== (bb = uy(yb)) && void 0 !== bb ? bb : yb,
            oy = (0, Py.b)(Zy),
            By = void 0 === oy ? void 0 : Ty.itemTypeNameOf(oy);
          if (void 0 !== qb(Zy)) return {
            kind: "drawnBlock"
          };
          const Ky = function(yb) {
            var bb;
            return null !== (bb = My(Xy(yb))) && void 0 !== bb ? bb : Cy.notFoundUrl()
          }(Zy);
          if ((0, Ey.f)(Zy) && ! function(yb) {
              return null !== Oy && (null !== Oy.itemSprite(Xy(yb)) || null !== Oy.model(yb))
            }(Zy)) return {
            kind: "model",
            url: Ky
          };
          if ("Gun" === By) return {
            kind: "gun",
            url: Ky
          };
          if (void 0 !== oy && "GrayscaleArmour" === Ty.itemTypeOf(oy) || Object.hasOwn(Uy.d, Zy)) {
            var ey;
            const bb = null !== (ey = (0, Uy.e)(yb)) && void 0 !== ey ? ey : (0, Uy.e)(Zy);
            if (bb) return {
              kind: "item",
              url: Ky,
              tint: bb
            }
          }
          return {
            kind: "item",
            url: Ky
          }
        },
        hasIcon: function(yb) {
          return void 0 !== uy(yb) || (0, hy.k)(yb) || yb.startsWith(hy.e)
        },
        isItemName: function(yb) {
          return void 0 !== uy(yb)
        }
      }
  },
  39250: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy,
      g: () => cb
    });
    var Uy = Wy(39258);
    let hy = null,
      fy = null;

    function Zy() {
      return hy ??= Wy.e(54).then((() => Wy(41118))).catch((yb => {
        throw hy = null, yb
      })), hy
    }

    function cb() {
      return fy ??= Promise.all([Zy(), (0, Uy.g)()]).then((yb => {
        let [bb] = yb;
        return bb
      }), (yb => {
        throw fy = null, yb
      })), fy
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);