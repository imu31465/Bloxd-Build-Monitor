export const id = 4;
export const ids = [4];
export const modules = {
  36141: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      getBlockModelIconUrl: () => Jk,
      hasBlockModelIcon: () => dk
    });
    var Rk = Bk(36123),
      tk = Bk(36117);
    const ak = Bk(36148),
      Xk = new Map(ak.keys().filter((kk => kk.startsWith("./"))).map((kk => [kk.slice(2, -5), kk]))),
      bk = new Map,
      wk = new Map;

    function dk(kk) {
      return Xk.has(kk)
    }

    function sk(kk) {
      return ak(Xk.get(kk))
    }
    async function Vk(kk, Fk, Bk) {
      const {
        data: Rk,
        texture: ak
      } = await
      function(kk) {
        let Fk = bk.get(kk);
        return Fk || (Fk = sk(kk).then((async kk => {
          const Fk = new Image;
          Fk.src = kk.texture, await Fk.decode();
          const Bk = document.createElement("canvas");
          Bk.width = Fk.width, Bk.height = Fk.height;
          const Rk = Bk.getContext("2d");
          return Rk.drawImage(Fk, 0, 0), {
            data: kk,
            texture: {
              width: Fk.width,
              height: Fk.height,
              pixels: Rk.getImageData(0, 0, Fk.width, Fk.height).data
            }
          }
        })), Fk.catch((() => {
          bk.delete(kk)
        })), bk.set(kk, Fk)), Fk
      }(kk), Xk = document.createElement("canvas");
      return Xk.width = Fk, Xk.height = Fk, Xk.getContext("2d").putImageData(new ImageData((0, tk.i)(Rk, ak, Fk, Bk), Fk, Fk), 0, 0), Xk.toDataURL()
    }

    function Jk(kk, Fk, Bk) {
      const tk = `${Fk}|${Bk}|${kk}`;
      let ak = wk.get(tk);
      return ak || (ak = (0, Rk.g)(kk, (() => sk(kk)), Fk, Bk).then((Rk => null !== Rk && void 0 !== Rk ? Rk : Vk(kk, Fk, Bk))), ak.catch((() => {
        wk.delete(tk)
      })), wk.set(tk, ak)), ak
    }
  },
  36123: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Nk,
      g: () => Hk,
      j: () => vk
    });
    var Rk = Bk(271),
      tk = Bk(98);
    const ak = new(Bk(36132).c)(new URL(Bk.p + Bk.u(3), Bk.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Xk = Bk(1698),
      bk = Bk(2994);
    const wk = 1e4,
      dk = 3e4;
    let sk = null,
      Vk = null,
      Jk = null,
      Ak = !1,
      ek = 0;
    const yk = new Map;
    let fk = null;
    const mk = new Map,
      Wk = new Map;

    function vk(kk) {
      const Fk = new Promise(((Fk, Bk) => {
        const Rk = new Image;
        Rk.crossOrigin = "anonymous", Rk.fetchPriority = "high", Rk.onload = () => {
          Fk(Rk)
        }, Rk.onerror = () => {
          Bk(new Error(`A block icon's texture did not load: ${kk.slice(0,100)}`))
        }, Rk.src = kk
      }));
      return (0, bk.d)(Fk)
    }

    function ik(kk) {
      var Fk, Bk;
      Ak || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${kk}`), Ak = !0, null === (Fk = sk) || void 0 === Fk || Fk.terminate(), sk = null, Vk = null, mk.clear(), Wk.clear();
      for (const Rk of yk.values()) Rk(null);
      yk.clear(), null === (Bk = fk) || void 0 === Bk || Bk()
    }

    function Yk() {
      return Jk ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Rk.d.ios_icon_worker_v1 && (0, tk.isWebKit)()) return;
        try {
          sk = await async function() {
            return await ak.ready(), ak.start()
          }()
        } catch (bk) {
          return void ik(`did not start (${String(bk)})`)
        }
        let kk = () => {};
        const Fk = new Promise((Fk => {
          kk = Fk
        }));
        sk.onmessage = Fk => {
          let {
            data: Bk
          } = Fk;
          if ("started" === Bk.type) Vk = sk, kk();
          else if ("failed" === Bk.type) ik(`failed a draw (${Bk.message})`);
          else {
            var Rk, tk;
            null === (Rk = yk.get(Bk.id)) || void 0 === Rk || Rk(Bk.url), yk.delete(Bk.id), null === (tk = fk) || void 0 === tk || tk()
          }
        }, sk.onerror = Fk => {
          Fk.preventDefault(), ik(`stopped (${Fk.message||"its script did not load or run"})`), kk()
        };
        const Bk = `did not start in ${dk/1e3} s`;
        await (0, Xk.m)(Fk, dk, Bk).catch((() => {
          ik(Bk)
        }))
      }(), Jk
    }

    function Lk() {
      if (null !== fk || 0 === yk.size) return;
      const kk = new Promise((kk => {
          fk = kk
        })),
        Fk = `did not answer in ${wk/1e3} s`;
      (0, Xk.m)(kk, wk, Fk).then((() => {
        fk = null, Lk()
      }), (() => {
        fk = null, ik(Fk)
      }))
    }

    function Ok(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      kk.postMessage(Fk, Bk)
    }

    function Ek(kk, Fk, Bk, Rk) {
      let tk = Fk.get(Bk);
      return void 0 === tk && (tk = Rk().then((async Fk => {
        let {
          image: Bk,
          request: Rk
        } = Fk;
        try {
          const Fk = await createImageBitmap(Bk);
          Ok(kk, Rk(Fk), [Fk])
        } catch (tk) {
          ik(`could not take an image (${String(tk)})`)
        }
      })), tk.catch((() => {
        Fk.get(Bk) === tk && Fk.delete(Bk)
      })), Fk.set(Bk, tk)), tk
    }
    async function Sk(kk, Fk) {
      Yk();
      const Bk = Vk;
      if (null === Bk) return null;
      if (await kk(Bk), Vk !== Bk) return null;
      const Rk = ++ek;
      return new Promise((kk => {
        yk.set(Rk, kk), Ok(Bk, Fk(Rk)), Lk()
      }))
    }

    function Nk(kk, Fk, Bk) {
      return Sk((Fk => Promise.all([kk.top, kk.left, kk.right].map((kk => function(kk, Fk) {
        return Ek(kk, mk, Fk, (async () => ({
          image: await vk(Fk),
          request: kk => ({
            type: "texture",
            url: Fk,
            bitmap: kk
          })
        })))
      }(Fk, kk))))), (Rk => ({
        type: "draw",
        id: Rk,
        ...kk,
        size: Fk,
        outlineWidth: Bk
      })))
    }

    function Hk(kk, Fk, Bk, Rk) {
      return Sk((Bk => function(kk, Fk, Bk) {
        return Ek(kk, Wk, Fk, (async () => {
          const {
            texture: kk,
            ...Rk
          } = await Bk();
          return {
            image: await vk(kk),
            request: kk => ({
              type: "model",
              name: Fk,
              bitmap: kk,
              geometry: Rk
            })
          }
        }))
      }(Bk, kk, Fk)), (Fk => ({
        type: "drawModel",
        id: Fk,
        name: kk,
        size: Bk,
        outlineWidth: Rk
      })))
    }
  },
  36117: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      g: () => bk,
      i: () => Xk
    });
    const Rk = 1 / 32,
      tk = [15, 15, 15],
      ak = {
        top: 1,
        left: .85,
        right: .7
      };

    function Xk(kk, Fk, Bk, tk) {
      const {
        vertices: ak,
        uvs: Xk,
        indices: wk,
        shades: dk
      } = kk, sk = Bk * Rk, Vk = Bk - 2 * sk, Jk = new Float32Array(ak.length);
      for (let Rk = 0; Rk < ak.length; Rk += 3) Jk[Rk] = sk + ak[Rk] * Vk, Jk[Rk + 1] = sk + ak[Rk + 1] * Vk, Jk[Rk + 2] = ak[Rk + 2];
      const Ak = new Float32Array(Bk * Bk).fill(-1 / 0),
        ek = new Uint8ClampedArray(Bk * Bk * 4),
        yk = 255 * kk.alphaCutoff;
      for (let Rk = 0; Rk < wk.length; Rk += 3) {
        const [kk, tk, ak] = [wk[Rk], wk[Rk + 1], wk[Rk + 2]], [bk, sk, Vk] = [3 * kk, 3 * tk, 3 * ak], [fk, mk, Wk, vk, ik, Yk] = [Jk[bk], Jk[bk + 1], Jk[sk], Jk[sk + 1], Jk[Vk], Jk[Vk + 1]], Lk = (Wk - fk) * (Yk - mk) - (ik - fk) * (vk - mk);
        if (Math.abs(Lk) < 1e-9) continue;
        const Ok = dk[Rk / 3],
          [Ek, Sk, Nk, Hk, uk, Mk] = [Xk[2 * kk], Xk[2 * kk + 1], Xk[2 * tk], Xk[2 * tk + 1], Xk[2 * ak], Xk[2 * ak + 1]],
          gk = Math.max(0, Math.floor(Math.min(fk, Wk, ik))),
          Uk = Math.min(Bk - 1, Math.ceil(Math.max(fk, Wk, ik))),
          ck = Math.max(0, Math.floor(Math.min(mk, vk, Yk))),
          Gk = Math.min(Bk - 1, Math.ceil(Math.max(mk, vk, Yk)));
        for (let Rk = ck; Rk <= Gk; Rk++)
          for (let kk = gk; kk <= Uk; kk++) {
            const [tk, ak] = [kk + .5, Rk + .5], Xk = ((tk - fk) * (Yk - mk) - (ik - fk) * (ak - mk)) / Lk, wk = ((Wk - fk) * (ak - mk) - (tk - fk) * (vk - mk)) / Lk, dk = 1 - Xk - wk;
            if (dk < 0 || Xk < 0 || wk < 0) continue;
            const gk = dk * Jk[bk + 2] + Xk * Jk[sk + 2] + wk * Jk[Vk + 2],
              Uk = Rk * Bk + kk;
            if (gk <= Ak[Uk]) continue;
            const ck = Math.max(0, Math.min(Fk.width - 1, Math.floor((dk * Ek + Xk * Nk + wk * uk) * Fk.width))),
              Gk = 4 * (Math.max(0, Math.min(Fk.height - 1, Math.floor((dk * Sk + Xk * Hk + wk * Mk) * Fk.height))) * Fk.width + ck);
            Fk.pixels[Gk + 3] < yk || (Ak[Uk] = gk, ek[4 * Uk] = Fk.pixels[Gk] * Ok, ek[4 * Uk + 1] = Fk.pixels[Gk + 1] * Ok, ek[4 * Uk + 2] = Fk.pixels[Gk + 2] * Ok, ek[4 * Uk + 3] = 255)
          }
      }
      return bk(ek, Bk, tk), ek
    }

    function bk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Fk => 0 !== kk[4 * Fk + 3];
      const ak = (kk, Bk) => kk < 0 || Bk < 0 || kk >= Fk || Bk >= Fk || !Rk(Bk * Fk + kk),
        Xk = [];
      for (let tk = 0; tk < Fk; tk++)
        for (let kk = 0; kk < Fk; kk++)
          if (!ak(kk, tk)) kk: for (let Rk = -Bk; Rk <= Bk; Rk++) {
            const bk = Bk - Math.abs(Rk);
            for (let Bk = -bk; Bk <= bk; Bk++)
              if (ak(kk + Bk, tk + Rk)) {
                Xk.push(tk * Fk + kk);
                break kk
              }
          }
      for (const bk of Xk) kk.set(tk, 4 * bk), kk[4 * bk + 3] = 255
    }
  },
  36132: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    const Rk = {
      wait: function(kk) {
        return new Promise((Fk => {
          setTimeout(Fk, kk)
        }))
      },
      stallMs: 2e4
    };
    class tk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Rk;
        this.url = kk, this.options = Fk, this.timing = Bk, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = kk
      }
      ready() {
        if (null === this.fetched) {
          const kk = new AbortController;
          this.fetchAbort = kk, this.fetched = this.fetchWithRetries(kk.signal).finally((() => {
            this.fetchAbort === kk && (this.fetchAbort = null)
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
      async fetchWithRetries(kk) {
        for (let Fk = 0;; Fk++) {
          const Bk = new URL(this.url);
          if (Fk > 0 && Bk.searchParams.set("cache-bust", `${Date.now()}-${Fk}`), await this.fetchWhole(Bk, kk)) return void(this.scriptUrl = Bk);
          if (Fk >= 3 || kk.aborted) return;
          if (await this.timing.wait(500 * 2 ** Fk), kk.aborted) return
        }
      }
      async fetchWhole(kk, Fk) {
        const Bk = new AbortController;
        let Rk;
        const tk = () => {
            clearTimeout(Rk), Rk = setTimeout((() => {
              Bk.abort()
            }), this.timing.stallMs)
          },
          ak = () => {
            Bk.abort()
          };
        Fk.addEventListener("abort", ak, {
          once: !0
        }), tk();
        try {
          var Xk;
          const Fk = await fetch(kk, {
            signal: Bk.signal
          });
          if (!Fk.ok) return !1;
          const Rk = null === (Xk = Fk.body) || void 0 === Xk ? void 0 : Xk.getReader();
          if (!Rk) return !1;
          for (;;) {
            const {
              done: kk
            } = await Rk.read();
            if (kk) return !0;
            tk()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Rk), Fk.removeEventListener("abort", ak)
        }
      }
    }
  },
  36148: (kk, Fk, Bk) => {
    var Rk = {
      "./Artisan Bench.json": [40619, 265],
      "./Aspen Item Pedestal.json": [40627, 266],
      "./Cedar Item Pedestal.json": [40634, 267],
      "./Cherry Item Pedestal.json": [40637, 268],
      "./Furnace.json": [40640, 269],
      "./Jungle Item Pedestal.json": [40649, 270],
      "./Mango Item Pedestal.json": [40657, 271],
      "./Palm Item Pedestal.json": [40661, 272],
      "./Pear Item Pedestal.json": [40666, 273],
      "./Pine Item Pedestal.json": [40674, 274],
      "./Plum Item Pedestal.json": [40680, 275],
      "./Potion Table.json": [40686, 276],
      "./Salvaging Table.json": [40691, 277],
      "./Showcase.json": [40700, 278],
      "./Spectral Item Pedestal.json": [40703, 279],
      "./Workbench.json": [40707, 280]
    };

    function tk(kk) {
      if (!Bk.o(Rk, kk)) return Promise.resolve().then((() => {
        var Fk = new Error("Cannot find module '" + kk + "'");
        throw Fk.code = "MODULE_NOT_FOUND", Fk
      }));
      var Fk = Rk[kk],
        tk = Fk[0];
      return Bk.e(Fk[1]).then((() => Bk(tk)))
    }
    tk.keys = () => Object.keys(Rk), tk.id = 36148, kk.exports = tk
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);