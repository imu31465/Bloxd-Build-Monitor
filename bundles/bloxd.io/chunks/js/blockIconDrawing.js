export const id = 2;
export const ids = [2];
export const modules = {
  36256: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      drawBlockIcon: () => du,
      drawBlockIconUrl: () => bu,
      getDrawnBlockIcon: () => Hu
    });
    var Eu = yu(36260);
    const Ku = Math.SQRT1_2,
      Qu = Math.sqrt(3) / 2,
      mu = .5,
      Ju = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      Nu = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      Xu = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const Vu = 1e-6;

    function ru(uu, Ru, yu, Eu) {
      let {
        origin: Ku,
        across: Qu,
        down: mu,
        texture: Ju,
        rect: [Nu, Xu, ru, Bu],
        shade: xu
      } = Eu;
      const Su = Qu.x * mu.y - Qu.y * mu.x;
      if (Math.abs(Su) < 1e-9) return;
      const pu = [Ku.x, Ku.x + Qu.x, Ku.x + mu.x, Ku.x + Qu.x + mu.x],
        Tu = [Ku.y, Ku.y + Qu.y, Ku.y + mu.y, Ku.y + Qu.y + mu.y],
        Wu = Math.max(0, Math.floor(Math.min(...pu))),
        ju = Math.min(yu - 1, Math.ceil(Math.max(...pu))),
        Hu = Math.max(0, Math.floor(Math.min(...Tu))),
        du = Math.min(yu - 1, Math.ceil(Math.max(...Tu)));
      for (let bu = Hu; bu <= du; bu++)
        for (let Eu = Wu; Eu <= ju; Eu++) {
          const pu = Eu + .5 - Ku.x,
            Tu = bu + .5 - Ku.y,
            Wu = (pu * mu.y - Tu * mu.x) / Su,
            ju = (Qu.x * Tu - Qu.y * pu) / Su;
          if (Wu < -Vu || Wu > 1 + Vu || ju < -Vu || ju > 1 + Vu) continue;
          const Hu = bu * yu + Eu;
          Ru[Hu] = 1;
          const du = Nu + Math.min(Math.max(Wu, 0), 1) * (ru - Nu),
            Cu = Xu + Math.min(Math.max(ju, 0), 1) * (Bu - Xu),
            ku = Math.min(Ju.width - 1, Math.floor(du * Ju.width)),
            eu = 4 * (Math.min(Ju.height - 1, Math.floor(Cu * Ju.height)) * Ju.width + ku),
            Au = Ju.pixels[eu + 3] / 255;
          if (0 === Au) continue;
          const Du = 4 * Hu,
            Mu = uu[Du + 3] / 255 * (1 - Au),
            Iu = Au + Mu;
          for (let Ru = 0; Ru < 3; Ru++) uu[Du + Ru] = (Ju.pixels[eu + Ru] * xu * Au + uu[Du + Ru] * Mu) / Iu;
          uu[Du + 3] = 255 * Iu
        }
    }
    var Bu = yu(36263);
    const xu = new Map,
      Su = new Map,
      pu = new Map,
      Tu = new Map;

    function Wu(uu, Ru, yu) {
      return `${Ru}|${yu}|${uu}`
    }

    function ju(uu, Ru, yu) {
      let Eu = uu.get(Ru);
      return void 0 === Eu && (Eu = yu().catch((yu => {
        throw uu.delete(Ru), yu
      })), uu.set(Ru, Eu)), Eu
    }

    function Hu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Su.get(Wu(uu, Ru, yu))
    }

    function du(uu, Ru, yu, Eu) {
      const Ku = Wu(uu, Ru, yu);
      return ju(xu, Ku, (async () => {
        const Qu = await ku(Eu(uu), Ru, Cu(yu));
        return Su.set(Ku, Qu), Qu
      }))
    }

    function bu(uu, Ru, yu, Eu) {
      return ju(pu, Wu(uu, Ru, yu), (async () => {
        var Ku;
        const Qu = Eu(uu),
          mu = Cu(yu);
        return null !== (Ku = await (0, Bu.c)(Qu, Ru, mu)) && void 0 !== Ku ? Ku : (await ku(Qu, Ru, mu)).toDataURL()
      }))
    }

    function Cu(uu) {
      return Math.max(1, Math.round(uu))
    }
    async function ku(uu, Ru, yu) {
      let {
        top: Vu,
        left: Bu,
        right: xu,
        itemType: Su
      } = uu;
      const [pu, Tu, Wu] = await Promise.all([eu(Vu), eu(Bu), eu(xu)]), ju = function(uu, Ru, yu, Ju) {
        const Nu = .6 * yu,
          Xu = Nu * Ku,
          Vu = Nu * Ku * mu,
          Bu = Nu * Qu,
          xu = Math.max(...Ru.boxes.map((uu => uu[4]))),
          Su = Xu / 2 + (yu - Xu) / 2,
          pu = Vu + (yu - Vu - Vu - xu * Bu) / 2,
          Tu = (uu, Ru, yu) => ({
            x: Su + (uu - yu) * Xu,
            y: pu - Vu + (uu + yu) * Vu + (xu - Ru) * Bu
          }),
          Wu = (uu, yu, Eu, Ku, Qu, mu) => ({
            origin: uu,
            across: {
              x: yu.x - uu.x,
              y: yu.y - uu.y
            },
            down: {
              x: Eu.x - uu.x,
              y: Eu.y - uu.y
            },
            texture: Ku,
            rect: Ru.cropFaces ? Qu : [0, 0, 1, 1],
            shade: mu
          }),
          ju = new Uint8ClampedArray(yu * yu * 4),
          Hu = new Uint8Array(yu * yu),
          du = Eu.e;
        for (const [Eu, Ku, Qu, mu, bu, Cu] of Ru.boxes) {
          const Ru = Wu(Tu(mu, bu, Cu), Tu(mu, bu, Qu), Tu(mu, Ku, Cu), uu.right, [1 - Cu, 1 - bu, 1 - Qu, 1 - Ku], du.right),
            Ju = Wu(Tu(Eu, bu, Cu), Tu(mu, bu, Cu), Tu(Eu, Ku, Cu), uu.left, [Eu, 1 - bu, mu, 1 - Ku], du.left),
            Nu = Wu(Tu(Eu, bu, Qu), Tu(mu, bu, Qu), Tu(Eu, bu, Cu), uu.top, [Eu, Qu, mu, Cu], du.top);
          for (const uu of [Ru, Ju, Nu]) ru(ju, Hu, yu, uu)
        }
        return (0, Eu.g)(ju, yu, Ju, (uu => 1 === Hu[uu])), ju
      }({
        top: pu,
        left: Tu,
        right: Wu
      }, function(uu) {
        return "SlabBlock" === uu ? Nu : "StairsBlock" === uu ? Xu : Ju
      }(Su), Ru, yu), Hu = document.createElement("canvas");
      Hu.width = Ru, Hu.height = Ru;
      const du = Hu.getContext("2d");
      if (!du) throw new Error("Failed to get 2D context");
      return du.putImageData(new ImageData(ju, Ru, Ru), 0, 0), Hu
    }

    function eu(uu) {
      return ju(Tu, uu, (async () => {
        const Ru = await (0, Bu.e)(uu),
          yu = document.createElement("canvas");
        yu.width = Ru.width, yu.height = Ru.height;
        const Eu = yu.getContext("2d");
        if (!Eu) throw new Error("Failed to get 2D context");
        return Eu.drawImage(Ru, 0, 0), {
          width: Ru.width,
          height: Ru.height,
          pixels: Eu.getImageData(0, 0, Ru.width, Ru.height).data
        }
      }))
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
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);