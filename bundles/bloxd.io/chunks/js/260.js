export const id = 260;
export const ids = [260];
export const modules = {
  39859: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      h: () => Eb
    });
    var Ab = Ub(1838);
    let Mb = !1;

    function Tb() {
      Mb = !0
    }

    function Eb() {
      Mb && (Mb = !1, (0, Ab.c)())
    }
  },
  39870: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      g: () => Eb
    });
    var Ab = Ub(2991);
    let Mb = null,
      Tb = null;

    function Eb() {
      return Tb ??= Ub.e(208).then((() => Ub(35785))).then((bb => {
        let {
          ITEM_SPRITES: ab,
          ITEM_SPRITES_WITHOUT_FILE: Ub,
          ITEM_FILES_WITHOUT_SPRITE: Tb
        } = bb;
        Mb = function(bb, ab, Ub) {
          const Mb = new Set,
            Tb = (0, Ab.C)(ab);
          let Eb = 0;
          for (const [Ab, Yb] of bb.entries()) Ab === Tb[Eb] ? Eb++ : Mb.add(Yb);
          if ("" !== Ub)
            for (const Yb of Ub.split(Ab.u)) Mb.add(Yb);
          return Mb
        }(ab.split(Ab.u), Ub, Tb)
      }), (bb => {
        throw Tb = null, bb
      })), Tb
    }

    function Yb(bb) {
      var ab, Ub;
      return null !== (ab = null === (Ub = Mb) || void 0 === Ub ? void 0 : Ub.has(bb)) && void 0 !== ab && ab
    }
  },
  39857: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      loadIcons: () => Wb,
      setIconFileOverrides: () => Hb,
      wasmIconLookups: () => rb,
      wasmIconQueries: () => ub
    });
    var Ab = Ub(4174),
      Mb = Ub(4147),
      Tb = Ub(39859),
      Eb = Ub(1838),
      Yb = Ub(1824),
      Bb = Ub(2989),
      eb = Ub(2991);
    let vb = null,
      Lb = null;

    function Pb(bb) {
      const ab = bb.startsWith(eb.m),
        [Ub, Ab = Ub, Mb = Ub] = (ab ? bb.slice(eb.m.length) : bb).split(eb.k);
      return {
        top: Ub,
        left: Ab,
        right: Mb,
        half: ab
      }
    }

    function Xb(bb) {
      const ab = null === vb ? void 0 : (0, Bb.d)(bb),
        Ub = void 0 === ab ? 0 : vb.codes[ab];
      return 0 === Ub ? void 0 : vb.pool[Ub - 1]
    }
    var jb = Ub(2981),
      Rb = Ub(4131),
      kb = Ub(4165),
      yb = Ub(39864);
    const Zb = "item:";
    let Db = null,
      zb = null,
      xb = null,
      ib = null,
      fb = !1,
      mb = !1,
      pb = null,
      Nb = 0;

    function Wb() {
      return mb || (mb = !0, (0, kb.f)().then((bb => {
        bb && (0, Eb.c)()
      }))), xb ??= Promise.all([(0, jb.f)(), (Lb ??= Ub.e(1).then((() => Ub(41705))).then((bb => {
        let {
          BLOCK_FACE_RUNS: ab,
          BLOCK_FACES: Ub,
          MAX_FACE_ITEM_ID: Ab
        } = bb;
        vb = {
          codes: (0, eb.E)(ab, Ab + 1),
          pool: Ub.split(eb.u).map(Pb)
        }
      }), (bb => {
        throw Lb = null, bb
      })), Lb), (0, yb.h)(), Ub.e(189).then((() => Ub(8922)))]).then((bb => {
        let [, , ab, Ub] = bb;
        ab.followBundledTextures(), Db = ab, zb = Ub, (0, Eb.c)()
      }), (bb => {
        xb = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", bb)
      })), xb
    }

    function Hb(bb) {
      pb = bb, Nb++, (0, Eb.c)()
    }

    function Ib(bb) {
      var ab, Ub;
      return null !== (ab = null === (Ub = pb) || void 0 === Ub ? void 0 : Ub.itemSprite(bb)) && void 0 !== ab ? ab : Db.itemSpriteUrl(bb)
    }

    function db(bb) {
      var ab, Ub;
      return null !== (ab = null === (Ub = pb) || void 0 === Ub ? void 0 : Ub.blockTexture(bb)) && void 0 !== ab ? ab : Db.blockTextureUrl(bb)
    }

    function Fb(bb) {
      var ab;
      return null !== (ab = (0, jb.c)(bb)) && void 0 !== ab ? ab : bb
    }

    function hb(bb, ab) {
      var Ub, Ab, Mb;
      return null !== (Ub = null !== (Ab = null !== (Mb = db(bb)) && void 0 !== Mb ? Mb : null === ab || void 0 === ab ? void 0 : ab.rotated[bb]) && void 0 !== Ab ? Ab : null === ab || void 0 === ab ? void 0 : ab.animated[bb]) && void 0 !== Ub ? Ub : Db.notFoundUrl()
    }

    function Gb(bb) {
      return void 0 !== (0, Bb.d)(bb) ? bb : /^[1-9][0-9]*$/.test(bb) ? (0, Bb.h)(Number(bb)) : void 0
    }

    function Qb(bb) {
      var ab;
      if (bb.startsWith(Zb)) {
        var Ub;
        const ab = (0, jb.c)(bb.slice(5));
        return null !== (Ub = void 0 === ab ? null : Ib(ab)) && void 0 !== Ub ? Ub : Db.notFoundUrl()
      }
      return null !== (ab = Db.particleUrl(bb)) && void 0 !== ab ? ab : Db.notFoundUrl()
    }

    function qb(bb, ab) {
      return "StairsBlock" === bb ? bb : ab ? "SlabBlock" : "CubeBlock"
    }
    const ub = {
        async blockIcon(bb) {
          var ab;
          let {
            name: Ab,
            size: Mb,
            lineWidth: Tb
          } = bb;
          await Wb();
          const Yb = null !== (ab = Gb(Ab)) && void 0 !== ab ? ab : Ab,
            eb = (0, kb.b)(Yb, Mb, Tb);
          if (null !== eb) return eb;
          const vb = Xb(Yb),
            Lb = (0, Bb.d)(Yb),
            Pb = void 0 === Lb || null === zb ? void 0 : zb.itemTypeNameOf(Lb);
          if (null === Db || void 0 === vb) return "";
          const jb = [vb.top, vb.left, vb.right].some((bb => null === db(bb))),
            yb = jb ? await (ib ??= Ub.e(201).then((() => Ub(33702))).then((bb => (fb && (fb = !1, (0, Eb.c)()), {
              rotated: bb.rotatedBlockTextures,
              animated: bb.animatedBlockTextures
            })), (bb => (ib = null, fb = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", bb), null))), ib) : null;
          if (jb && null === yb) return "";
          const Zb = {
              top: hb(vb.top, yb),
              left: hb(vb.left, yb),
              right: hb(vb.right, yb),
              itemType: qb(Pb, vb.half)
            },
            xb = 0 === Nb ? Yb : `${Yb}#${Nb}`;
          return (await (0, Rb.c)()).drawBlockIconUrl(xb, Mb, Tb, (() => Zb))
        }
      },
      rb = {
        itemIcon: function(bb) {
          var ab, Ub;
          if (null === Db) return Wb(), Yb.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(bb);
          if ((0, Mb.k)(bb)) return {
            kind: "icon",
            url: null !== (Ub = Db.ingameIconUrl(bb)) && void 0 !== Ub ? Ub : Db.notFoundUrl()
          };
          if (bb.startsWith(Mb.d)) return {
            kind: "icon",
            url: Qb(bb.slice(Mb.d.length))
          };
          if (0 === (0, Bb.l)()) return (0, Tb.d)(), Yb.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(bb);
          const Eb = null !== (ab = Gb(bb)) && void 0 !== ab ? ab : bb,
            eb = (0, Bb.d)(Eb),
            vb = void 0 === eb ? void 0 : zb.itemTypeNameOf(eb);
          if (void 0 !== Xb(Eb)) return {
            kind: "drawnBlock"
          };
          const Lb = function(bb) {
            var ab;
            return null !== (ab = Ib(Fb(bb))) && void 0 !== ab ? ab : Db.notFoundUrl()
          }(Eb);
          if ((0, kb.c)(Eb) && ! function(bb) {
              return null !== pb && (null !== pb.itemSprite(Fb(bb)) || null !== pb.model(bb))
            }(Eb)) return {
            kind: "model",
            url: Lb
          };
          if ("Gun" === vb) return {
            kind: "gun",
            url: Lb
          };
          if (void 0 !== eb && "GrayscaleArmour" === zb.itemTypeOf(eb) || Object.hasOwn(Ab.b, Eb)) {
            var Pb;
            const ab = null !== (Pb = (0, Ab.c)(bb)) && void 0 !== Pb ? Pb : (0, Ab.c)(Eb);
            if (ab) return {
              kind: "item",
              url: Lb,
              tint: ab
            }
          }
          return {
            kind: "item",
            url: Lb
          }
        },
        hasIcon: function(bb) {
          return void 0 !== Gb(bb) || (0, Mb.k)(bb) || bb.startsWith(Mb.d)
        },
        isItemName: function(bb) {
          return void 0 !== Gb(bb)
        }
      }
  },
  39864: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      h: () => Yb
    });
    var Ab = Ub(39870);
    let Mb = null,
      Tb = null;

    function Eb() {
      return Mb ??= Ub.e(58).then((() => Ub(41714))).catch((bb => {
        throw Mb = null, bb
      })), Mb
    }

    function Yb() {
      return Tb ??= Promise.all([Eb(), (0, Ab.g)()]).then((bb => {
        let [ab] = bb;
        return ab
      }), (bb => {
        throw Tb = null, bb
      })), Tb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);