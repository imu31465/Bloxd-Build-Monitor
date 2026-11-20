export const id = 260;
export const ids = [260];
export const modules = {
  40154: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      g: () => Xk
    });
    var Rk = Bk(1858);
    let tk = !1;

    function ak() {
      tk = !0
    }

    function Xk() {
      tk && (tk = !1, (0, Rk.b)())
    }
  },
  40161: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => bk,
      e: () => Xk
    });
    var Rk = Bk(3097);
    let tk = null,
      ak = null;

    function Xk() {
      return ak ??= Bk.e(208).then((() => Bk(36056))).then((kk => {
        let {
          ITEM_SPRITES: Fk,
          ITEM_SPRITES_WITHOUT_FILE: Bk,
          ITEM_FILES_WITHOUT_SPRITE: ak
        } = kk;
        tk = function(kk, Fk, Bk) {
          const tk = new Set,
            ak = (0, Rk.v)(Fk);
          let Xk = 0;
          for (const [Rk, bk] of kk.entries()) Rk === ak[Xk] ? Xk++ : tk.add(bk);
          if ("" !== Bk)
            for (const bk of Bk.split(Rk.o)) tk.add(bk);
          return tk
        }(Fk.split(Rk.o), Bk, ak)
      }), (kk => {
        throw ak = null, kk
      })), ak
    }

    function bk(kk) {
      var Fk, Bk;
      return null !== (Fk = null === (Bk = tk) || void 0 === Bk ? void 0 : Bk.has(kk)) && void 0 !== Fk && Fk
    }
  },
  40150: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      loadIcons: () => Hk,
      setIconFileOverrides: () => uk,
      wasmIconLookups: () => zk,
      wasmIconQueries: () => Dk
    });
    var Rk = Bk(4235),
      tk = Bk(4204),
      ak = Bk(40154),
      Xk = Bk(1858),
      bk = Bk(1847),
      wk = Bk(3090),
      dk = Bk(3097);
    let sk = null,
      Vk = null;

    function Jk(kk) {
      const Fk = kk.startsWith(dk.i),
        [Bk, Rk = Bk, tk = Bk] = (Fk ? kk.slice(dk.i.length) : kk).split(dk.f);
      return {
        top: Bk,
        left: Rk,
        right: tk,
        half: Fk
      }
    }

    function Ak(kk) {
      const Fk = null === sk ? void 0 : (0, wk.c)(kk),
        Bk = void 0 === Fk ? 0 : sk.codes[Fk];
      return 0 === Bk ? void 0 : sk.pool[Bk - 1]
    }
    var ek = Bk(3083),
      yk = Bk(4190),
      fk = Bk(4228),
      mk = Bk(40156);
    const Wk = "item:";
    let vk = null,
      ik = null,
      Yk = null,
      Lk = null,
      Ok = !1,
      Ek = !1,
      Sk = null,
      Nk = 0;

    function Hk() {
      return Ek || (Ek = !0, (0, fk.j)().then((kk => {
        kk && (0, Xk.b)()
      }))), Yk ??= Promise.all([(0, ek.e)(), (Vk ??= Bk.e(1).then((() => Bk(42030))).then((kk => {
        let {
          BLOCK_FACE_RUNS: Fk,
          BLOCK_FACES: Bk,
          MAX_FACE_ITEM_ID: Rk
        } = kk;
        sk = {
          codes: (0, dk.x)(Fk, Rk + 1),
          pool: Bk.split(dk.o).map(Jk)
        }
      }), (kk => {
        throw Vk = null, kk
      })), Vk), (0, mk.e)(), Bk.e(189).then((() => Bk(9022)))]).then((kk => {
        let [, , Fk, Bk] = kk;
        Fk.followBundledTextures(), vk = Fk, ik = Bk, (0, Xk.b)()
      }), (kk => {
        Yk = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", kk)
      })), Yk
    }

    function uk(kk) {
      Sk = kk, Nk++, (0, Xk.b)()
    }

    function Mk(kk) {
      var Fk, Bk;
      return null !== (Fk = null === (Bk = Sk) || void 0 === Bk ? void 0 : Bk.itemSprite(kk)) && void 0 !== Fk ? Fk : vk.itemSpriteUrl(kk)
    }

    function gk(kk) {
      var Fk, Bk;
      return null !== (Fk = null === (Bk = Sk) || void 0 === Bk ? void 0 : Bk.blockTexture(kk)) && void 0 !== Fk ? Fk : vk.blockTextureUrl(kk)
    }

    function Uk(kk) {
      var Fk;
      return null !== (Fk = (0, ek.c)(kk)) && void 0 !== Fk ? Fk : kk
    }

    function ck(kk, Fk) {
      var Bk, Rk, tk;
      return null !== (Bk = null !== (Rk = null !== (tk = gk(kk)) && void 0 !== tk ? tk : null === Fk || void 0 === Fk ? void 0 : Fk.rotated[kk]) && void 0 !== Rk ? Rk : null === Fk || void 0 === Fk ? void 0 : Fk.animated[kk]) && void 0 !== Bk ? Bk : vk.notFoundUrl()
    }

    function Gk(kk) {
      return void 0 !== (0, wk.c)(kk) ? kk : /^[1-9][0-9]*$/.test(kk) ? (0, wk.f)(Number(kk)) : void 0
    }

    function Tk(kk) {
      var Fk;
      if (kk.startsWith(Wk)) {
        var Bk;
        const Fk = (0, ek.c)(kk.slice(5));
        return null !== (Bk = void 0 === Fk ? null : Mk(Fk)) && void 0 !== Bk ? Bk : vk.notFoundUrl()
      }
      return null !== (Fk = vk.particleUrl(kk)) && void 0 !== Fk ? Fk : vk.notFoundUrl()
    }

    function rk(kk, Fk) {
      return "StairsBlock" === kk ? kk : Fk ? "SlabBlock" : "CubeBlock"
    }
    const Dk = {
        async blockIcon(kk) {
          var Fk;
          let {
            name: Rk,
            size: tk,
            lineWidth: ak
          } = kk;
          await Hk();
          const bk = null !== (Fk = Gk(Rk)) && void 0 !== Fk ? Fk : Rk,
            dk = (0, fk.c)(bk, tk, ak);
          if (null !== dk) return dk;
          const sk = Ak(bk),
            Vk = (0, wk.c)(bk),
            Jk = void 0 === Vk || null === ik ? void 0 : ik.itemTypeNameOf(Vk);
          if (null === vk || void 0 === sk) return "";
          const ek = [sk.top, sk.left, sk.right].some((kk => null === gk(kk))),
            mk = ek ? await (Lk ??= Bk.e(201).then((() => Bk(34024))).then((kk => (Ok && (Ok = !1, (0, Xk.b)()), {
              rotated: kk.rotatedBlockTextures,
              animated: kk.animatedBlockTextures
            })), (kk => (Lk = null, Ok = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", kk), null))), Lk) : null;
          if (ek && null === mk) return "";
          const Wk = {
              top: ck(sk.top, mk),
              left: ck(sk.left, mk),
              right: ck(sk.right, mk),
              itemType: rk(Jk, sk.half)
            },
            Yk = 0 === Nk ? bk : `${bk}#${Nk}`;
          return (await (0, yk.d)()).drawBlockIconUrl(Yk, tk, ak, (() => Wk))
        }
      },
      zk = {
        itemIcon: function(kk) {
          var Fk, Bk;
          if (null === vk) return Hk(), bk.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(kk);
          if ((0, tk.h)(kk)) return {
            kind: "icon",
            url: null !== (Bk = vk.ingameIconUrl(kk)) && void 0 !== Bk ? Bk : vk.notFoundUrl()
          };
          if (kk.startsWith(tk.d)) return {
            kind: "icon",
            url: Tk(kk.slice(tk.d.length))
          };
          if (0 === (0, wk.h)()) return (0, ak.c)(), bk.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(kk);
          const Xk = null !== (Fk = Gk(kk)) && void 0 !== Fk ? Fk : kk,
            dk = (0, wk.c)(Xk),
            sk = void 0 === dk ? void 0 : ik.itemTypeNameOf(dk);
          if (void 0 !== Ak(Xk)) return {
            kind: "drawnBlock"
          };
          const Vk = function(kk) {
            var Fk;
            return null !== (Fk = Mk(Uk(kk))) && void 0 !== Fk ? Fk : vk.notFoundUrl()
          }(Xk);
          if ((0, fk.g)(Xk) && ! function(kk) {
              return null !== Sk && (null !== Sk.itemSprite(Uk(kk)) || null !== Sk.model(kk))
            }(Xk)) return {
            kind: "model",
            url: Vk
          };
          if ("Gun" === sk) return {
            kind: "gun",
            url: Vk
          };
          if (void 0 !== dk && "GrayscaleArmour" === ik.itemTypeOf(dk) || Object.hasOwn(Rk.b, Xk)) {
            var Jk;
            const Fk = null !== (Jk = (0, Rk.c)(kk)) && void 0 !== Jk ? Jk : (0, Rk.c)(Xk);
            if (Fk) return {
              kind: "item",
              url: Vk,
              tint: Fk
            }
          }
          return {
            kind: "item",
            url: Vk
          }
        },
        hasIcon: function(kk) {
          return void 0 !== Gk(kk) || (0, tk.h)(kk) || kk.startsWith(tk.d)
        },
        isItemName: function(kk) {
          return void 0 !== Gk(kk)
        }
      }
  },
  40156: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk,
      e: () => bk
    });
    var Rk = Bk(40161);
    let tk = null,
      ak = null;

    function Xk() {
      return tk ??= Bk.e(58).then((() => Bk(42039))).catch((kk => {
        throw tk = null, kk
      })), tk
    }

    function bk() {
      return ak ??= Promise.all([Xk(), (0, Rk.e)()]).then((kk => {
        let [Fk] = kk;
        return Fk
      }), (kk => {
        throw ak = null, kk
      })), ak
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);