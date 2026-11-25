export const id = 221;
export const ids = [221];
export const modules = {
  36784: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => au,
      g: () => Pu,
      k: () => Mu
    });
    var su = ju(284),
      Uu = ju(91);
    const Zu = new(ju(36792).d)(new URL(ju.p + ju.u(3), ju.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Xu = ju(1843),
      lu = ju(2230);
    const qu = 1e4,
      fu = 3e4;
    let Cu = null,
      bu = null,
      cu = null,
      Nu = !1,
      Ou = 0;
    const Yu = new Map;
    let hu = null;
    const Du = new Map,
      gu = new Map;

    function Mu(uu) {
      const Eu = new Promise(((Eu, ju) => {
        const su = new Image;
        su.crossOrigin = "anonymous", su.fetchPriority = "high", su.onload = () => {
          Eu(su)
        }, su.onerror = () => {
          ju(new Error(`A block icon's texture did not load: ${uu.slice(0,100)}`))
        }, su.src = uu
      }));
      return (0, lu.d)(Eu)
    }

    function eu(uu) {
      var Eu, ju;
      Nu || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${uu}`), Nu = !0, null === (Eu = Cu) || void 0 === Eu || Eu.terminate(), Cu = null, bu = null, Du.clear(), gu.clear();
      for (const su of Yu.values()) su(null);
      Yu.clear(), null === (ju = hu) || void 0 === ju || ju()
    }

    function Gu() {
      return cu ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === su.d.ios_icon_worker_v1 && (0, Uu.isWebKit)()) return;
        try {
          Cu = await async function() {
            return await Zu.ready(), Zu.start()
          }()
        } catch (lu) {
          return void eu(`did not start (${String(lu)})`)
        }
        let uu = () => {};
        const Eu = new Promise((Eu => {
          uu = Eu
        }));
        Cu.onmessage = Eu => {
          let {
            data: ju
          } = Eu;
          if ("started" === ju.type) bu = Cu, uu();
          else if ("failed" === ju.type) eu(`failed a draw (${ju.message})`);
          else {
            var su, Uu;
            null === (su = Yu.get(ju.id)) || void 0 === su || su(ju.url), Yu.delete(ju.id), null === (Uu = hu) || void 0 === Uu || Uu()
          }
        }, Cu.onerror = Eu => {
          Eu.preventDefault(), eu(`stopped (${Eu.message||"its script did not load or run"})`), uu()
        };
        const ju = `did not start in ${fu/1e3} s`;
        await (0, Xu.i)(Eu, fu, ju).catch((() => {
          eu(ju)
        }))
      }(), cu
    }

    function pu() {
      if (null !== hu || 0 === Yu.size) return;
      const uu = new Promise((uu => {
          hu = uu
        })),
        Eu = `did not answer in ${qu/1e3} s`;
      (0, Xu.i)(uu, qu, Eu).then((() => {
        hu = null, pu()
      }), (() => {
        hu = null, eu(Eu)
      }))
    }

    function wu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      uu.postMessage(Eu, ju)
    }

    function Ju(uu, Eu, ju, su) {
      let Uu = Eu.get(ju);
      return void 0 === Uu && (Uu = su().then((async Eu => {
        let {
          image: ju,
          request: su
        } = Eu;
        try {
          const Eu = await createImageBitmap(ju);
          wu(uu, su(Eu), [Eu])
        } catch (Uu) {
          eu(`could not take an image (${String(Uu)})`)
        }
      })), Uu.catch((() => {
        Eu.get(ju) === Uu && Eu.delete(ju)
      })), Eu.set(ju, Uu)), Uu
    }
    async function du(uu, Eu) {
      Gu();
      const ju = bu;
      if (null === ju) return null;
      if (await uu(ju), bu !== ju) return null;
      const su = ++Ou;
      return new Promise((uu => {
        Yu.set(su, uu), wu(ju, Eu(su)), pu()
      }))
    }

    function au(uu, Eu, ju) {
      return du((Eu => Promise.all([uu.top, uu.left, uu.right].map((uu => function(uu, Eu) {
        return Ju(uu, Du, Eu, (async () => ({
          image: await Mu(Eu),
          request: uu => ({
            type: "texture",
            url: Eu,
            bitmap: uu
          })
        })))
      }(Eu, uu))))), (su => ({
        type: "draw",
        id: su,
        ...uu,
        size: Eu,
        outlineWidth: ju
      })))
    }

    function Pu(uu, Eu, ju, su) {
      return du((ju => function(uu, Eu, ju) {
        return Ju(uu, gu, Eu, (async () => {
          const {
            texture: uu,
            ...su
          } = await ju();
          return {
            image: await Mu(uu),
            request: uu => ({
              type: "model",
              name: Eu,
              bitmap: uu,
              geometry: su
            })
          }
        }))
      }(ju, uu, Eu)), (Eu => ({
        type: "drawModel",
        id: Eu,
        name: uu,
        size: ju,
        outlineWidth: su
      })))
    }
  },
  36779: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su,
      e: () => qu,
      f: () => Xu,
      j: () => cu,
      m: () => fu
    });
    const su = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      Uu = .6,
      Zu = {
        width: 2 * su.across,
        height: 2 * su.down + su.up
      };

    function Xu(uu, Eu) {
      const ju = Eu > 0 ? Eu + 1 : 0,
        Xu = uu * Uu - Eu / su.across;
      return Math.max(0, Math.min(Xu, (uu - 2 * ju) / Zu.height))
    }
    const lu = [15, 15, 15],
      qu = {
        top: 1,
        left: .85,
        right: .7
      };

    function fu(uu, Eu, ju, su) {
      const {
        vertices: Uu,
        uvs: lu,
        indices: qu,
        shades: fu
      } = uu, Cu = function(uu, Eu) {
        const ju = Xu(uu, Eu),
          su = Zu.width * ju,
          Uu = Zu.height * ju;
        return {
          left: (uu - su) / 2,
          top: (uu - Uu) / 2,
          width: su,
          height: Uu
        }
      }(ju, su), bu = new Float32Array(Uu.length);
      for (let Zu = 0; Zu < Uu.length; Zu += 3) bu[Zu] = Cu.left + Uu[Zu] * Cu.width, bu[Zu + 1] = Cu.top + Uu[Zu + 1] * Cu.height, bu[Zu + 2] = Uu[Zu + 2];
      const Nu = new Float32Array(ju * ju).fill(-1 / 0),
        Ou = new Uint8ClampedArray(ju * ju * 4),
        Yu = 255 * uu.alphaCutoff;
      for (let Zu = 0; Zu < qu.length; Zu += 3) {
        const [uu, su, Uu] = [qu[Zu], qu[Zu + 1], qu[Zu + 2]], [Xu, Cu, cu] = [3 * uu, 3 * su, 3 * Uu], [hu, Du, gu, Mu, eu, Gu] = [bu[Xu], bu[Xu + 1], bu[Cu], bu[Cu + 1], bu[cu], bu[cu + 1]], pu = (gu - hu) * (Gu - Du) - (eu - hu) * (Mu - Du);
        if (Math.abs(pu) < 1e-9) continue;
        const wu = fu[Zu / 3],
          [Ju, du, au, Pu, ou, ku] = [lu[2 * uu], lu[2 * uu + 1], lu[2 * su], lu[2 * su + 1], lu[2 * Uu], lu[2 * Uu + 1]],
          mu = Math.max(0, Math.floor(Math.min(hu, gu, eu))),
          vu = Math.min(ju - 1, Math.ceil(Math.max(hu, gu, eu))),
          Ku = Math.max(0, Math.floor(Math.min(Du, Mu, Gu))),
          Vu = Math.min(ju - 1, Math.ceil(Math.max(Du, Mu, Gu)));
        for (let Zu = Ku; Zu <= Vu; Zu++)
          for (let uu = mu; uu <= vu; uu++) {
            const [su, Uu] = [uu + .5, Zu + .5], lu = ((su - hu) * (Gu - Du) - (eu - hu) * (Uu - Du)) / pu, qu = ((gu - hu) * (Uu - Du) - (su - hu) * (Mu - Du)) / pu, fu = 1 - lu - qu;
            if (fu < 0 || lu < 0 || qu < 0) continue;
            const mu = fu * bu[Xu + 2] + lu * bu[Cu + 2] + qu * bu[cu + 2],
              vu = Zu * ju + uu;
            if (mu <= Nu[vu]) continue;
            const Ku = Math.max(0, Math.min(Eu.width - 1, Math.floor((fu * Ju + lu * au + qu * ou) * Eu.width))),
              Vu = 4 * (Math.max(0, Math.min(Eu.height - 1, Math.floor((fu * du + lu * Pu + qu * ku) * Eu.height))) * Eu.width + Ku);
            Eu.pixels[Vu + 3] < Yu || (Nu[vu] = mu, Ou[4 * vu] = Eu.pixels[Vu] * wu, Ou[4 * vu + 1] = Eu.pixels[Vu + 1] * wu, Ou[4 * vu + 2] = Eu.pixels[Vu + 2] * wu, Ou[4 * vu + 3] = 255)
          }
      }
      return cu(Ou, ju, su), Ou
    }
    let Cu = NaN,
      bu = new Int32Array(0);

    function cu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Eu => 0 !== uu[4 * Eu + 3];
      const Uu = new Uint8Array(Eu * Eu);
      for (let lu = 0; lu < Eu * Eu; lu++) Uu[lu] = su(lu) ? 1 : 0;
      const Zu = (uu, ju) => uu >= 0 && ju >= 0 && uu < Eu && ju < Eu && 0 === Uu[ju * Eu + uu],
        Xu = new Float32Array(Eu * Eu).fill(1 / 0),
        qu = function(uu) {
          if (uu !== Cu) {
            const Eu = Math.ceil(uu + 1),
              ju = [];
            for (let su = -Eu; su <= Eu; su++)
              for (let Uu = -Eu; Uu <= Eu; Uu++) {
                const Eu = Uu * Uu + su * su;
                Eu > 0 && Eu < (uu + 1) ** 2 && ju.push(Uu, su, Eu)
              }
            Cu = uu, bu = Int32Array.from(ju)
          }
          return bu
        }(ju);
      for (let lu = 0; lu < Eu; lu++)
        for (let uu = 0; uu < Eu; uu++) {
          if (1 === Uu[lu * Eu + uu] && (Zu(uu - 1, lu) || Zu(uu + 1, lu) || Zu(uu, lu - 1) || Zu(uu, lu + 1)))
            for (let ju = 0; ju < qu.length; ju += 3) {
              const su = uu + qu[ju],
                Uu = lu + qu[ju + 1];
              if (su >= 0 && Uu >= 0 && su < Eu && Uu < Eu) {
                const uu = Uu * Eu + su;
                Xu[uu] = Math.min(Xu[uu], qu[ju + 2])
              }
            }
        }
      for (let fu = 0; fu < Eu * Eu; fu++) 1 !== Uu[fu] && Xu[fu] !== 1 / 0 && (uu.set(lu, 4 * fu), uu[4 * fu + 3] = Math.round(255 * Math.min(1, ju + 1 - Math.sqrt(Xu[fu]))))
    }
  },
  36792: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu
    });
    const su = {
      wait: function(uu) {
        return new Promise((Eu => {
          setTimeout(Eu, uu)
        }))
      },
      stallMs: 2e4
    };
    class Uu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : su;
        this.url = uu, this.options = Eu, this.timing = ju, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = uu
      }
      ready() {
        if (null === this.fetched) {
          const uu = new AbortController;
          this.fetchAbort = uu, this.fetched = this.fetchWithRetries(uu.signal).then((Eu => (this.fetchAbort === uu && (this.fetchAbort = null), Eu)))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      forgetFailedFetch() {
        this.fetched = null
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(uu) {
        for (let Eu = 0;; Eu++) {
          const ju = new URL(this.url);
          if (Eu > 0 && ju.searchParams.set("cache-bust", `${Date.now()}-${Eu}`), await this.fetchWhole(ju, uu)) return this.scriptUrl = ju, !0;
          if (Eu >= 3 || uu.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** Eu), uu.aborted) return !1
        }
      }
      async fetchWhole(uu, Eu) {
        const ju = new AbortController;
        let su;
        const Uu = () => {
            clearTimeout(su), su = setTimeout((() => {
              ju.abort()
            }), this.timing.stallMs)
          },
          Zu = () => {
            ju.abort()
          };
        Eu.addEventListener("abort", Zu, {
          once: !0
        }), Uu();
        try {
          var Xu;
          const Eu = await fetch(uu, {
            signal: ju.signal
          });
          if (!Eu.ok) return !1;
          const su = null === (Xu = Eu.body) || void 0 === Xu ? void 0 : Xu.getReader();
          if (!su) return !1;
          for (;;) {
            const {
              done: uu
            } = await su.read();
            if (uu) return !0;
            Uu()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(su), Eu.removeEventListener("abort", Zu)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);