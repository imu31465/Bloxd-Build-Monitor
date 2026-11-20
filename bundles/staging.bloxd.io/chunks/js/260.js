export const id = 260;
export const ids = [260];
export const modules = {
  40168: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      g: () => Tb
    });
    var kb = sb(1881);
    let Wb = !1;

    function ab() {
      Wb = !0
    }

    function Tb() {
      Wb && (Wb = !1, (0, kb.e)())
    }
  },
  40178: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ub,
      i: () => Tb
    });
    var kb = sb(3058);
    let Wb = null,
      ab = null;

    function Tb() {
      return ab ??= sb.e(208).then((() => sb(35987))).then((bb => {
        let {
          ITEM_SPRITES: cb,
          ITEM_SPRITES_WITHOUT_FILE: sb,
          ITEM_FILES_WITHOUT_SPRITE: ab
        } = bb;
        Wb = function(bb, cb, sb) {
          const Wb = new Set,
            ab = (0, kb.z)(cb);
          let Tb = 0;
          for (const [kb, Ub] of bb.entries()) kb === ab[Tb] ? Tb++ : Wb.add(Ub);
          if ("" !== sb)
            for (const Ub of sb.split(kb.r)) Wb.add(Ub);
          return Wb
        }(cb.split(kb.r), sb, ab)
      }), (bb => {
        throw ab = null, bb
      })), ab
    }

    function Ub(bb) {
      var cb, sb;
      return null !== (cb = null === (sb = Wb) || void 0 === sb ? void 0 : sb.has(bb)) && void 0 !== cb && cb
    }
  },
  40166: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      loadIcons: () => Bb,
      setIconFileOverrides: () => tb,
      wasmIconLookups: () => Zb,
      wasmIconQueries: () => Kb
    });
    var kb = sb(4232),
      Wb = sb(4207),
      ab = sb(40168),
      Tb = sb(1881),
      Ub = sb(1870),
      Ib = sb(3050),
      Hb = sb(3058);
    let fb = null,
      Mb = null;

    function Xb(bb) {
      const cb = bb.startsWith(Hb.k),
        [sb, kb = sb, Wb = sb] = (cb ? bb.slice(Hb.k.length) : bb).split(Hb.h);
      return {
        top: sb,
        left: kb,
        right: Wb,
        half: cb
      }
    }

    function nb(bb) {
      const cb = null === fb ? void 0 : (0, Ib.b)(bb),
        sb = void 0 === cb ? 0 : fb.codes[cb];
      return 0 === sb ? void 0 : fb.pool[sb - 1]
    }
    var mb = sb(3043),
      lb = sb(4197),
      Qb = sb(4230),
      eb = sb(40176);
    const Cb = "item:";
    let Nb = null,
      Vb = null,
      Lb = null,
      ub = null,
      Yb = !1,
      hb = !1,
      Jb = null,
      gb = 0;

    function Bb() {
      return hb || (hb = !0, (0, Qb.k)().then((bb => {
        bb && (0, Tb.e)()
      }))), Lb ??= Promise.all([(0, mb.g)(), (Mb ??= sb.e(1).then((() => sb(41976))).then((bb => {
        let {
          BLOCK_FACE_RUNS: cb,
          BLOCK_FACES: sb,
          MAX_FACE_ITEM_ID: kb
        } = bb;
        fb = {
          codes: (0, Hb.D)(cb, kb + 1),
          pool: sb.split(Hb.r).map(Xb)
        }
      }), (bb => {
        throw Mb = null, bb
      })), Mb), (0, eb.e)(), sb.e(189).then((() => sb(8942)))]).then((bb => {
        let [, , cb, sb] = bb;
        cb.followBundledTextures(), Nb = cb, Vb = sb, (0, Tb.e)()
      }), (bb => {
        Lb = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", bb)
      })), Lb
    }

    function tb(bb) {
      Jb = bb, gb++, (0, Tb.e)()
    }

    function yb(bb) {
      var cb, sb;
      return null !== (cb = null === (sb = Jb) || void 0 === sb ? void 0 : sb.itemSprite(bb)) && void 0 !== cb ? cb : Nb.itemSpriteUrl(bb)
    }

    function Pb(bb) {
      var cb, sb;
      return null !== (cb = null === (sb = Jb) || void 0 === sb ? void 0 : sb.blockTexture(bb)) && void 0 !== cb ? cb : Nb.blockTextureUrl(bb)
    }

    function Db(bb) {
      var cb;
      return null !== (cb = (0, mb.e)(bb)) && void 0 !== cb ? cb : bb
    }

    function Eb(bb, cb) {
      var sb, kb, Wb;
      return null !== (sb = null !== (kb = null !== (Wb = Pb(bb)) && void 0 !== Wb ? Wb : null === cb || void 0 === cb ? void 0 : cb.rotated[bb]) && void 0 !== kb ? kb : null === cb || void 0 === cb ? void 0 : cb.animated[bb]) && void 0 !== sb ? sb : Nb.notFoundUrl()
    }

    function ib(bb) {
      return void 0 !== (0, Ib.b)(bb) ? bb : /^[1-9][0-9]*$/.test(bb) ? (0, Ib.f)(Number(bb)) : void 0
    }

    function Ob(bb) {
      var cb;
      if (bb.startsWith(Cb)) {
        var sb;
        const cb = (0, mb.e)(bb.slice(5));
        return null !== (sb = void 0 === cb ? null : yb(cb)) && void 0 !== sb ? sb : Nb.notFoundUrl()
      }
      return null !== (cb = Nb.particleUrl(bb)) && void 0 !== cb ? cb : Nb.notFoundUrl()
    }

    function Gb(bb, cb) {
      return "StairsBlock" === bb ? bb : cb ? "SlabBlock" : "CubeBlock"
    }
    const Kb = {
        async blockIcon(bb) {
          var cb;
          let {
            name: kb,
            size: Wb,
            lineWidth: ab
          } = bb;
          await Bb();
          const Ub = null !== (cb = ib(kb)) && void 0 !== cb ? cb : kb,
            Hb = (0, Qb.e)(Ub, Wb, ab);
          if (null !== Hb) return Hb;
          const fb = nb(Ub),
            Mb = (0, Ib.b)(Ub),
            Xb = void 0 === Mb || null === Vb ? void 0 : Vb.itemTypeNameOf(Mb);
          if (null === Nb || void 0 === fb) return "";
          const mb = [fb.top, fb.left, fb.right].some((bb => null === Pb(bb))),
            eb = mb ? await (ub ??= sb.e(201).then((() => sb(33944))).then((bb => (Yb && (Yb = !1, (0, Tb.e)()), {
              rotated: bb.rotatedBlockTextures,
              animated: bb.animatedBlockTextures
            })), (bb => (ub = null, Yb = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", bb), null))), ub) : null;
          if (mb && null === eb) return "";
          const Cb = {
              top: Eb(fb.top, eb),
              left: Eb(fb.left, eb),
              right: Eb(fb.right, eb),
              itemType: Gb(Xb, fb.half)
            },
            Lb = 0 === gb ? Ub : `${Ub}#${gb}`;
          return (await (0, lb.d)()).drawBlockIconUrl(Lb, Wb, ab, (() => Cb))
        }
      },
      Zb = {
        itemIcon: function(bb) {
          var cb, sb;
          if (null === Nb) return Bb(), Ub.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(bb);
          if ((0, Wb.j)(bb)) return {
            kind: "icon",
            url: null !== (sb = Nb.ingameIconUrl(bb)) && void 0 !== sb ? sb : Nb.notFoundUrl()
          };
          if (bb.startsWith(Wb.b)) return {
            kind: "icon",
            url: Ob(bb.slice(Wb.b.length))
          };
          if (0 === (0, Ib.h)()) return (0, ab.c)(), Ub.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(bb);
          const Tb = null !== (cb = ib(bb)) && void 0 !== cb ? cb : bb,
            Hb = (0, Ib.b)(Tb),
            fb = void 0 === Hb ? void 0 : Vb.itemTypeNameOf(Hb);
          if (void 0 !== nb(Tb)) return {
            kind: "drawnBlock"
          };
          const Mb = function(bb) {
            var cb;
            return null !== (cb = yb(Db(bb))) && void 0 !== cb ? cb : Nb.notFoundUrl()
          }(Tb);
          if ((0, Qb.g)(Tb) && ! function(bb) {
              return null !== Jb && (null !== Jb.itemSprite(Db(bb)) || null !== Jb.model(bb))
            }(Tb)) return {
            kind: "model",
            url: Mb
          };
          if ("Gun" === fb) return {
            kind: "gun",
            url: Mb
          };
          if (void 0 !== Hb && "GrayscaleArmour" === Vb.itemTypeOf(Hb) || Object.hasOwn(kb.b, Tb)) {
            var Xb;
            const cb = null !== (Xb = (0, kb.c)(bb)) && void 0 !== Xb ? Xb : (0, kb.c)(Tb);
            if (cb) return {
              kind: "item",
              url: Mb,
              tint: cb
            }
          }
          return {
            kind: "item",
            url: Mb
          }
        },
        hasIcon: function(bb) {
          return void 0 !== ib(bb) || (0, Wb.j)(bb) || bb.startsWith(Wb.b)
        },
        isItemName: function(bb) {
          return void 0 !== ib(bb)
        }
      }
  },
  40176: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb,
      e: () => Ub
    });
    var kb = sb(40178);
    let Wb = null,
      ab = null;

    function Tb() {
      return Wb ??= sb.e(58).then((() => sb(41981))).catch((bb => {
        throw Wb = null, bb
      })), Wb
    }

    function Ub() {
      return ab ??= Promise.all([Tb(), (0, kb.i)()]).then((bb => {
        let [cb] = bb;
        return cb
      }), (bb => {
        throw ab = null, bb
      })), ab
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);