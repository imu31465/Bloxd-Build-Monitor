export const id = 4;
export const ids = [4];
export const modules = {
  36271: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      getBlockModelIconUrl: () => Bu,
      hasBlockModelIcon: () => Xu
    });
    var Eu = yu(36263),
      Ku = yu(36260);
    const Qu = yu(36274),
      mu = new Map(Qu.keys().filter((uu => uu.startsWith("./"))).map((uu => [uu.slice(2, -5), uu]))),
      Ju = new Map,
      Nu = new Map;

    function Xu(uu) {
      return mu.has(uu)
    }

    function Vu(uu) {
      return Qu(mu.get(uu))
    }
    async function ru(uu, Ru, yu) {
      const {
        data: Eu,
        texture: Qu
      } = await
      function(uu) {
        let Ru = Ju.get(uu);
        return Ru || (Ru = Vu(uu).then((async uu => {
          const Ru = new Image;
          Ru.src = uu.texture, await Ru.decode();
          const yu = document.createElement("canvas");
          yu.width = Ru.width, yu.height = Ru.height;
          const Eu = yu.getContext("2d");
          return Eu.drawImage(Ru, 0, 0), {
            data: uu,
            texture: {
              width: Ru.width,
              height: Ru.height,
              pixels: Eu.getImageData(0, 0, Ru.width, Ru.height).data
            }
          }
        })), Ru.catch((() => {
          Ju.delete(uu)
        })), Ju.set(uu, Ru)), Ru
      }(uu), mu = document.createElement("canvas");
      return mu.width = Ru, mu.height = Ru, mu.getContext("2d").putImageData(new ImageData((0, Ku.j)(Eu, Qu, Ru, yu), Ru, Ru), 0, 0), mu.toDataURL()
    }

    function Bu(uu, Ru, yu) {
      const Ku = `${Ru}|${yu}|${uu}`;
      let Qu = Nu.get(Ku);
      return Qu || (Qu = (0, Eu.d)(uu, (() => Vu(uu)), Ru, yu).then((Eu => null !== Eu && void 0 !== Eu ? Eu : ru(uu, Ru, yu))), Qu.catch((() => {
        Nu.delete(Ku)
      })), Nu.set(Ku, Qu)), Qu
    }
  },
  36263: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Du,
      d: () => Mu,
      e: () => Hu
    });
    var Eu = yu(312),
      Ku = yu(106);
    const Qu = new(yu(36266).e)(new URL(yu.p + yu.u(3), yu.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var mu = yu(1699),
      Ju = yu(2995);
    const Nu = 1e4,
      Xu = 3e4;
    let Vu = null,
      ru = null,
      Bu = null,
      xu = !1,
      Su = 0;
    const pu = new Map;
    let Tu = null;
    const Wu = new Map,
      ju = new Map;

    function Hu(uu) {
      const Ru = new Promise(((Ru, yu) => {
        const Eu = new Image;
        Eu.crossOrigin = "anonymous", Eu.fetchPriority = "high", Eu.onload = () => {
          Ru(Eu)
        }, Eu.onerror = () => {
          yu(new Error(`A block icon's texture did not load: ${uu.slice(0,100)}`))
        }, Eu.src = uu
      }));
      return (0, Ju.h)(Ru)
    }

    function du(uu) {
      var Ru, yu;
      xu || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${uu}`), xu = !0, null === (Ru = Vu) || void 0 === Ru || Ru.terminate(), Vu = null, ru = null, Wu.clear(), ju.clear();
      for (const Eu of pu.values()) Eu(null);
      pu.clear(), null === (yu = Tu) || void 0 === yu || yu()
    }

    function bu() {
      return Bu ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Eu.c.ios_icon_worker_v1 && (0, Ku.isWebKit)()) return;
        try {
          Vu = await async function() {
            return await Qu.ready(), Qu.start()
          }()
        } catch (Ju) {
          return void du(`did not start (${String(Ju)})`)
        }
        let uu = () => {};
        const Ru = new Promise((Ru => {
          uu = Ru
        }));
        Vu.onmessage = Ru => {
          let {
            data: yu
          } = Ru;
          if ("started" === yu.type) ru = Vu, uu();
          else if ("failed" === yu.type) du(`failed a draw (${yu.message})`);
          else {
            var Eu, Ku;
            null === (Eu = pu.get(yu.id)) || void 0 === Eu || Eu(yu.url), pu.delete(yu.id), null === (Ku = Tu) || void 0 === Ku || Ku()
          }
        }, Vu.onerror = Ru => {
          Ru.preventDefault(), du(`stopped (${Ru.message||"its script did not load or run"})`), uu()
        };
        const yu = `did not start in ${Xu/1e3} s`;
        await (0, mu.i)(Ru, Xu, yu).catch((() => {
          du(yu)
        }))
      }(), Bu
    }

    function Cu() {
      if (null !== Tu || 0 === pu.size) return;
      const uu = new Promise((uu => {
          Tu = uu
        })),
        Ru = `did not answer in ${Nu/1e3} s`;
      (0, mu.i)(uu, Nu, Ru).then((() => {
        Tu = null, Cu()
      }), (() => {
        Tu = null, du(Ru)
      }))
    }

    function ku(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      uu.postMessage(Ru, yu)
    }

    function eu(uu, Ru, yu, Eu) {
      let Ku = Ru.get(yu);
      return void 0 === Ku && (Ku = Eu().then((async Ru => {
        let {
          image: yu,
          request: Eu
        } = Ru;
        try {
          const Ru = await createImageBitmap(yu);
          ku(uu, Eu(Ru), [Ru])
        } catch (Ku) {
          du(`could not take an image (${String(Ku)})`)
        }
      })), Ku.catch((() => {
        Ru.get(yu) === Ku && Ru.delete(yu)
      })), Ru.set(yu, Ku)), Ku
    }
    async function Au(uu, Ru) {
      bu();
      const yu = ru;
      if (null === yu) return null;
      if (await uu(yu), ru !== yu) return null;
      const Eu = ++Su;
      return new Promise((uu => {
        pu.set(Eu, uu), ku(yu, Ru(Eu)), Cu()
      }))
    }

    function Du(uu, Ru, yu) {
      return Au((Ru => Promise.all([uu.top, uu.left, uu.right].map((uu => function(uu, Ru) {
        return eu(uu, Wu, Ru, (async () => ({
          image: await Hu(Ru),
          request: uu => ({
            type: "texture",
            url: Ru,
            bitmap: uu
          })
        })))
      }(Ru, uu))))), (Eu => ({
        type: "draw",
        id: Eu,
        ...uu,
        size: Ru,
        outlineWidth: yu
      })))
    }

    function Mu(uu, Ru, yu, Eu) {
      return Au((yu => function(uu, Ru, yu) {
        return eu(uu, ju, Ru, (async () => {
          const {
            texture: uu,
            ...Eu
          } = await yu();
          return {
            image: await Hu(uu),
            request: uu => ({
              type: "model",
              name: Ru,
              bitmap: uu,
              geometry: Eu
            })
          }
        }))
      }(yu, uu, Ru)), (Ru => ({
        type: "drawModel",
        id: Ru,
        name: uu,
        size: yu,
        outlineWidth: Eu
      })))
    }
  },
  36260: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu,
      g: () => Ju,
      j: () => mu
    });
    const Eu = 1 / 32,
      Ku = [15, 15, 15],
      Qu = {
        top: 1,
        left: .85,
        right: .7
      };

    function mu(uu, Ru, yu, Ku) {
      const {
        vertices: Qu,
        uvs: mu,
        indices: Nu,
        shades: Xu
      } = uu, Vu = yu * Eu, ru = yu - 2 * Vu, Bu = new Float32Array(Qu.length);
      for (let Eu = 0; Eu < Qu.length; Eu += 3) Bu[Eu] = Vu + Qu[Eu] * ru, Bu[Eu + 1] = Vu + Qu[Eu + 1] * ru, Bu[Eu + 2] = Qu[Eu + 2];
      const xu = new Float32Array(yu * yu).fill(-1 / 0),
        Su = new Uint8ClampedArray(yu * yu * 4),
        pu = 255 * uu.alphaCutoff;
      for (let Eu = 0; Eu < Nu.length; Eu += 3) {
        const [uu, Ku, Qu] = [Nu[Eu], Nu[Eu + 1], Nu[Eu + 2]], [Ju, Vu, ru] = [3 * uu, 3 * Ku, 3 * Qu], [Tu, Wu, ju, Hu, du, bu] = [Bu[Ju], Bu[Ju + 1], Bu[Vu], Bu[Vu + 1], Bu[ru], Bu[ru + 1]], Cu = (ju - Tu) * (bu - Wu) - (du - Tu) * (Hu - Wu);
        if (Math.abs(Cu) < 1e-9) continue;
        const ku = Xu[Eu / 3],
          [eu, Au, Du, Mu, Iu, Gu] = [mu[2 * uu], mu[2 * uu + 1], mu[2 * Ku], mu[2 * Ku + 1], mu[2 * Qu], mu[2 * Qu + 1]],
          Uu = Math.max(0, Math.floor(Math.min(Tu, ju, du))),
          nu = Math.min(yu - 1, Math.ceil(Math.max(Tu, ju, du))),
          su = Math.max(0, Math.floor(Math.min(Wu, Hu, bu))),
          tu = Math.min(yu - 1, Math.ceil(Math.max(Wu, Hu, bu)));
        for (let Eu = su; Eu <= tu; Eu++)
          for (let uu = Uu; uu <= nu; uu++) {
            const [Ku, Qu] = [uu + .5, Eu + .5], mu = ((Ku - Tu) * (bu - Wu) - (du - Tu) * (Qu - Wu)) / Cu, Nu = ((ju - Tu) * (Qu - Wu) - (Ku - Tu) * (Hu - Wu)) / Cu, Xu = 1 - mu - Nu;
            if (Xu < 0 || mu < 0 || Nu < 0) continue;
            const Uu = Xu * Bu[Ju + 2] + mu * Bu[Vu + 2] + Nu * Bu[ru + 2],
              nu = Eu * yu + uu;
            if (Uu <= xu[nu]) continue;
            const su = Math.max(0, Math.min(Ru.width - 1, Math.floor((Xu * eu + mu * Du + Nu * Iu) * Ru.width))),
              tu = 4 * (Math.max(0, Math.min(Ru.height - 1, Math.floor((Xu * Au + mu * Mu + Nu * Gu) * Ru.height))) * Ru.width + su);
            Ru.pixels[tu + 3] < pu || (xu[nu] = Uu, Su[4 * nu] = Ru.pixels[tu] * ku, Su[4 * nu + 1] = Ru.pixels[tu + 1] * ku, Su[4 * nu + 2] = Ru.pixels[tu + 2] * ku, Su[4 * nu + 3] = 255)
          }
      }
      return Ju(Su, yu, Ku), Su
    }

    function Ju(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ru => 0 !== uu[4 * Ru + 3];
      const Qu = (uu, yu) => uu < 0 || yu < 0 || uu >= Ru || yu >= Ru || !Eu(yu * Ru + uu),
        mu = [];
      for (let Ku = 0; Ku < Ru; Ku++)
        for (let uu = 0; uu < Ru; uu++)
          if (!Qu(uu, Ku)) uu: for (let Eu = -yu; Eu <= yu; Eu++) {
            const Ju = yu - Math.abs(Eu);
            for (let yu = -Ju; yu <= Ju; yu++)
              if (Qu(uu + yu, Ku + Eu)) {
                mu.push(Ku * Ru + uu);
                break uu
              }
          }
      for (const Ju of mu) uu.set(Ku, 4 * Ju), uu[4 * Ju + 3] = 255
    }
  },
  36266: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku
    });
    const Eu = {
      wait: function(uu) {
        return new Promise((Ru => {
          setTimeout(Ru, uu)
        }))
      },
      stallMs: 2e4
    };
    class Ku {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eu;
        this.url = uu, this.options = Ru, this.timing = yu, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = uu
      }
      ready() {
        if (null === this.fetched) {
          const uu = new AbortController;
          this.fetchAbort = uu, this.fetched = this.fetchWithRetries(uu.signal).finally((() => {
            this.fetchAbort === uu && (this.fetchAbort = null)
          }))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(uu) {
        for (let Ru = 0;; Ru++) {
          const yu = new URL(this.url);
          if (Ru > 0 && yu.searchParams.set("cache-bust", `${Date.now()}-${Ru}`), await this.fetchWhole(yu, uu)) return void(this.scriptUrl = yu);
          if (Ru >= 3 || uu.aborted) return;
          if (await this.timing.wait(500 * 2 ** Ru), uu.aborted) return
        }
      }
      async fetchWhole(uu, Ru) {
        const yu = new AbortController;
        let Eu;
        const Ku = () => {
            clearTimeout(Eu), Eu = setTimeout((() => {
              yu.abort()
            }), this.timing.stallMs)
          },
          Qu = () => {
            yu.abort()
          };
        Ru.addEventListener("abort", Qu, {
          once: !0
        }), Ku();
        try {
          var mu;
          const Ru = await fetch(uu, {
            signal: yu.signal
          });
          if (!Ru.ok) return !1;
          const Eu = null === (mu = Ru.body) || void 0 === mu ? void 0 : mu.getReader();
          if (!Eu) return !1;
          for (;;) {
            const {
              done: uu
            } = await Eu.read();
            if (uu) return !0;
            Ku()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Eu), Ru.removeEventListener("abort", Qu)
        }
      }
    }
  },
  36274: (uu, Ru, yu) => {
    var Eu = {
      "./Artisan Bench.json": [40767, 265],
      "./Aspen Item Pedestal.json": [40769, 266],
      "./Cedar Item Pedestal.json": [40776, 267],
      "./Cherry Item Pedestal.json": [40784, 268],
      "./Furnace.json": [40786, 269],
      "./Jungle Item Pedestal.json": [40792, 270],
      "./Mango Item Pedestal.json": [40801, 271],
      "./Palm Item Pedestal.json": [40804, 272],
      "./Pear Item Pedestal.json": [40811, 273],
      "./Pine Item Pedestal.json": [40819, 274],
      "./Plum Item Pedestal.json": [40825, 275],
      "./Potion Table.json": [40831, 276],
      "./Salvaging Table.json": [40836, 277],
      "./Showcase.json": [40842, 278],
      "./Spectral Item Pedestal.json": [40845, 279],
      "./Workbench.json": [40852, 280]
    };

    function Ku(uu) {
      if (!yu.o(Eu, uu)) return Promise.resolve().then((() => {
        var Ru = new Error("Cannot find module '" + uu + "'");
        throw Ru.code = "MODULE_NOT_FOUND", Ru
      }));
      var Ru = Eu[uu],
        Ku = Ru[0];
      return yu.e(Ru[1]).then((() => yu(Ku)))
    }
    Ku.keys = () => Object.keys(Eu), Ku.id = 36274, uu.exports = Ku
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);