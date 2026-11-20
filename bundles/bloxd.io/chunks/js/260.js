export const id = 260;
export const ids = [260];
export const modules = {
  40316: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu,
      h: () => mu
    });
    var Eu = yu(1867);
    let Ku = !1;

    function Qu() {
      Ku = !0
    }

    function mu() {
      Ku && (Ku = !1, (0, Eu.d)())
    }
  },
  40328: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ju,
      f: () => mu
    });
    var Eu = yu(3101);
    let Ku = null,
      Qu = null;

    function mu() {
      return Qu ??= yu.e(208).then((() => yu(36206))).then((uu => {
        let {
          ITEM_SPRITES: Ru,
          ITEM_SPRITES_WITHOUT_FILE: yu,
          ITEM_FILES_WITHOUT_SPRITE: Qu
        } = uu;
        Ku = function(uu, Ru, yu) {
          const Ku = new Set,
            Qu = (0, Eu.w)(Ru);
          let mu = 0;
          for (const [Eu, Ju] of uu.entries()) Eu === Qu[mu] ? mu++ : Ku.add(Ju);
          if ("" !== yu)
            for (const Ju of yu.split(Eu.s)) Ku.add(Ju);
          return Ku
        }(Ru.split(Eu.s), yu, Qu)
      }), (uu => {
        throw Qu = null, uu
      })), Qu
    }

    function Ju(uu) {
      var Ru, yu;
      return null !== (Ru = null === (yu = Ku) || void 0 === yu ? void 0 : yu.has(uu)) && void 0 !== Ru && Ru
    }
  },
  40313: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      loadIcons: () => Mu,
      setIconFileOverrides: () => Iu,
      wasmIconLookups: () => Lu,
      wasmIconQueries: () => cu
    });
    var Eu = yu(4254),
      Ku = yu(4231),
      Qu = yu(40316),
      mu = yu(1867),
      Ju = yu(1855),
      Nu = yu(3093),
      Xu = yu(3101);
    let Vu = null,
      ru = null;

    function Bu(uu) {
      const Ru = uu.startsWith(Xu.j),
        [yu, Eu = yu, Ku = yu] = (Ru ? uu.slice(Xu.j.length) : uu).split(Xu.g);
      return {
        top: yu,
        left: Eu,
        right: Ku,
        half: Ru
      }
    }

    function xu(uu) {
      const Ru = null === Vu ? void 0 : (0, Nu.b)(uu),
        yu = void 0 === Ru ? 0 : Vu.codes[Ru];
      return 0 === yu ? void 0 : Vu.pool[yu - 1]
    }
    var Su = yu(3088),
      pu = yu(4218),
      Tu = yu(4247),
      Wu = yu(40324);
    const ju = "item:";
    let Hu = null,
      du = null,
      bu = null,
      Cu = null,
      ku = !1,
      eu = !1,
      Au = null,
      Du = 0;

    function Mu() {
      return eu || (eu = !0, (0, Tu.g)().then((uu => {
        uu && (0, mu.d)()
      }))), bu ??= Promise.all([(0, Su.h)(), (ru ??= yu.e(1).then((() => yu(42180))).then((uu => {
        let {
          BLOCK_FACE_RUNS: Ru,
          BLOCK_FACES: yu,
          MAX_FACE_ITEM_ID: Eu
        } = uu;
        Vu = {
          codes: (0, Xu.A)(Ru, Eu + 1),
          pool: yu.split(Xu.s).map(Bu)
        }
      }), (uu => {
        throw ru = null, uu
      })), ru), (0, Wu.g)(), yu.e(189).then((() => yu(9079)))]).then((uu => {
        let [, , Ru, yu] = uu;
        Ru.followBundledTextures(), Hu = Ru, du = yu, (0, mu.d)()
      }), (uu => {
        bu = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", uu)
      })), bu
    }

    function Iu(uu) {
      Au = uu, Du++, (0, mu.d)()
    }

    function Gu(uu) {
      var Ru, yu;
      return null !== (Ru = null === (yu = Au) || void 0 === yu ? void 0 : yu.itemSprite(uu)) && void 0 !== Ru ? Ru : Hu.itemSpriteUrl(uu)
    }

    function Uu(uu) {
      var Ru, yu;
      return null !== (Ru = null === (yu = Au) || void 0 === yu ? void 0 : yu.blockTexture(uu)) && void 0 !== Ru ? Ru : Hu.blockTextureUrl(uu)
    }

    function nu(uu) {
      var Ru;
      return null !== (Ru = (0, Su.e)(uu)) && void 0 !== Ru ? Ru : uu
    }

    function su(uu, Ru) {
      var yu, Eu, Ku;
      return null !== (yu = null !== (Eu = null !== (Ku = Uu(uu)) && void 0 !== Ku ? Ku : null === Ru || void 0 === Ru ? void 0 : Ru.rotated[uu]) && void 0 !== Eu ? Eu : null === Ru || void 0 === Ru ? void 0 : Ru.animated[uu]) && void 0 !== yu ? yu : Hu.notFoundUrl()
    }

    function tu(uu) {
      return void 0 !== (0, Nu.b)(uu) ? uu : /^[1-9][0-9]*$/.test(uu) ? (0, Nu.f)(Number(uu)) : void 0
    }

    function lu(uu) {
      var Ru;
      if (uu.startsWith(ju)) {
        var yu;
        const Ru = (0, Su.e)(uu.slice(5));
        return null !== (yu = void 0 === Ru ? null : Gu(Ru)) && void 0 !== yu ? yu : Hu.notFoundUrl()
      }
      return null !== (Ru = Hu.particleUrl(uu)) && void 0 !== Ru ? Ru : Hu.notFoundUrl()
    }

    function gu(uu, Ru) {
      return "StairsBlock" === uu ? uu : Ru ? "SlabBlock" : "CubeBlock"
    }
    const cu = {
        async blockIcon(uu) {
          var Ru;
          let {
            name: Eu,
            size: Ku,
            lineWidth: Qu
          } = uu;
          await Mu();
          const Ju = null !== (Ru = tu(Eu)) && void 0 !== Ru ? Ru : Eu,
            Xu = (0, Tu.b)(Ju, Ku, Qu);
          if (null !== Xu) return Xu;
          const Vu = xu(Ju),
            ru = (0, Nu.b)(Ju),
            Bu = void 0 === ru || null === du ? void 0 : du.itemTypeNameOf(ru);
          if (null === Hu || void 0 === Vu) return "";
          const Su = [Vu.top, Vu.left, Vu.right].some((uu => null === Uu(uu))),
            Wu = Su ? await (Cu ??= yu.e(201).then((() => yu(34131))).then((uu => (ku && (ku = !1, (0, mu.d)()), {
              rotated: uu.rotatedBlockTextures,
              animated: uu.animatedBlockTextures
            })), (uu => (Cu = null, ku = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", uu), null))), Cu) : null;
          if (Su && null === Wu) return "";
          const ju = {
              top: su(Vu.top, Wu),
              left: su(Vu.left, Wu),
              right: su(Vu.right, Wu),
              itemType: gu(Bu, Vu.half)
            },
            bu = 0 === Du ? Ju : `${Ju}#${Du}`;
          return (await (0, pu.d)()).drawBlockIconUrl(bu, Ku, Qu, (() => ju))
        }
      },
      Lu = {
        itemIcon: function(uu) {
          var Ru, yu;
          if (null === Hu) return Mu(), Ju.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(uu);
          if ((0, Ku.f)(uu)) return {
            kind: "icon",
            url: null !== (yu = Hu.ingameIconUrl(uu)) && void 0 !== yu ? yu : Hu.notFoundUrl()
          };
          if (uu.startsWith(Ku.b)) return {
            kind: "icon",
            url: lu(uu.slice(Ku.b.length))
          };
          if (0 === (0, Nu.g)()) return (0, Qu.e)(), Ju.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(uu);
          const mu = null !== (Ru = tu(uu)) && void 0 !== Ru ? Ru : uu,
            Xu = (0, Nu.b)(mu),
            Vu = void 0 === Xu ? void 0 : du.itemTypeNameOf(Xu);
          if (void 0 !== xu(mu)) return {
            kind: "drawnBlock"
          };
          const ru = function(uu) {
            var Ru;
            return null !== (Ru = Gu(nu(uu))) && void 0 !== Ru ? Ru : Hu.notFoundUrl()
          }(mu);
          if ((0, Tu.e)(mu) && ! function(uu) {
              return null !== Au && (null !== Au.itemSprite(nu(uu)) || null !== Au.model(uu))
            }(mu)) return {
            kind: "model",
            url: ru
          };
          if ("Gun" === Vu) return {
            kind: "gun",
            url: ru
          };
          if (void 0 !== Xu && "GrayscaleArmour" === du.itemTypeOf(Xu) || Object.hasOwn(Eu.d, mu)) {
            var Bu;
            const Ru = null !== (Bu = (0, Eu.g)(uu)) && void 0 !== Bu ? Bu : (0, Eu.g)(mu);
            if (Ru) return {
              kind: "item",
              url: ru,
              tint: Ru
            }
          }
          return {
            kind: "item",
            url: ru
          }
        },
        hasIcon: function(uu) {
          return void 0 !== tu(uu) || (0, Ku.f)(uu) || uu.startsWith(Ku.b)
        },
        isItemName: function(uu) {
          return void 0 !== tu(uu)
        }
      }
  },
  40324: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu,
      g: () => Ju
    });
    var Eu = yu(40328);
    let Ku = null,
      Qu = null;

    function mu() {
      return Ku ??= yu.e(58).then((() => yu(42183))).catch((uu => {
        throw Ku = null, uu
      })), Ku
    }

    function Ju() {
      return Qu ??= Promise.all([mu(), (0, Eu.f)()]).then((uu => {
        let [Ru] = uu;
        return Ru
      }), (uu => {
        throw Qu = null, uu
      })), Qu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);