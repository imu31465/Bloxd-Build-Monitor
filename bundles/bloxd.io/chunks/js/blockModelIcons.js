export const id = 4;
export const ids = [4];
export const modules = {
  35956: (vv, zv, Pv) => {
    var hv = {
      "./Artisan Bench.json": [40479, 266],
      "./Aspen Item Pedestal.json": [40483, 267],
      "./Cedar Item Pedestal.json": [40490, 268],
      "./Cherry Item Pedestal.json": [40495, 269],
      "./Furnace.json": [40503, 270],
      "./Jungle Item Pedestal.json": [40509, 271],
      "./Mango Item Pedestal.json": [40515, 272],
      "./Palm Item Pedestal.json": [40521, 273],
      "./Pear Item Pedestal.json": [40525, 274],
      "./Pine Item Pedestal.json": [40530, 275],
      "./Plum Item Pedestal.json": [40533, 276],
      "./Potion Table.json": [40536, 277],
      "./Salvaging Table.json": [40542, 278],
      "./Showcase.json": [40550, 279],
      "./Spectral Item Pedestal.json": [40554, 280],
      "./Workbench.json": [40558, 281]
    };

    function Sv(vv) {
      if (!Pv.o(hv, vv)) return Promise.resolve().then((() => {
        var zv = new Error("Cannot find module '" + vv + "'");
        throw zv.code = "MODULE_NOT_FOUND", zv
      }));
      var zv = hv[vv],
        Sv = zv[0];
      return Pv.e(zv[1]).then((() => Pv(Sv)))
    }
    Sv.keys = () => Object.keys(hv), Sv.id = 35956, vv.exports = Sv
  },
  35950: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      getBlockModelIconUrl: () => Wv,
      hasBlockModelIcon: () => Nv
    });
    var hv = Pv(35942),
      Sv = Pv(35939);
    const ev = Pv(35956),
      gv = new Map(ev.keys().filter((vv => vv.startsWith("./"))).map((vv => [vv.slice(2, -5), vv]))),
      pv = new Map,
      dv = new Map;

    function Nv(vv) {
      return gv.has(vv)
    }

    function lv(vv) {
      return ev(gv.get(vv))
    }
    async function Tv(vv, zv, Pv) {
      const {
        data: hv,
        texture: ev
      } = await
      function(vv) {
        let zv = pv.get(vv);
        return zv || (zv = lv(vv).then((async vv => {
          const zv = new Image;
          zv.src = vv.texture, await zv.decode();
          const Pv = document.createElement("canvas");
          Pv.width = zv.width, Pv.height = zv.height;
          const hv = Pv.getContext("2d");
          return hv.drawImage(zv, 0, 0), {
            data: vv,
            texture: {
              width: zv.width,
              height: zv.height,
              pixels: hv.getImageData(0, 0, zv.width, zv.height).data
            }
          }
        })), zv.catch((() => {
          pv.delete(vv)
        })), pv.set(vv, zv)), zv
      }(vv), gv = document.createElement("canvas");
      return gv.width = zv, gv.height = zv, gv.getContext("2d").putImageData(new ImageData((0, Sv.l)(hv, ev, zv, Pv), zv, zv), 0, 0), gv.toDataURL()
    }

    function Wv(vv, zv, Pv) {
      const Sv = `${zv}|${Pv}|${vv}`;
      let ev = dv.get(Sv);
      return ev || (ev = (0, hv.f)(vv, (() => lv(vv)), zv, Pv).then((hv => null !== hv && void 0 !== hv ? hv : Tv(vv, zv, Pv))), ev.catch((() => {
        dv.delete(Sv)
      })), dv.set(Sv, ev)), ev
    }
  },
  35942: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Ov,
      f: () => Dv,
      j: () => Gv
    });
    var hv = Pv(284),
      Sv = Pv(73);
    const ev = new(Pv(35944).e)(new URL(Pv.p + Pv.u(3), Pv.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var gv = Pv(1748),
      pv = Pv(2975);
    const dv = 1e4,
      Nv = 3e4;
    let lv = null,
      Tv = null,
      Wv = null,
      wv = !1,
      av = 0;
    const sv = new Map;
    let Cv = null;
    const iv = new Map,
      cv = new Map;

    function Gv(vv) {
      const zv = new Promise(((zv, Pv) => {
        const hv = new Image;
        hv.crossOrigin = "anonymous", hv.fetchPriority = "high", hv.onload = () => {
          zv(hv)
        }, hv.onerror = () => {
          Pv(new Error(`A block icon's texture did not load: ${vv.slice(0,100)}`))
        }, hv.src = vv
      }));
      return (0, pv.g)(zv)
    }

    function mv(vv) {
      var zv, Pv;
      wv || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${vv}`), wv = !0, null === (zv = lv) || void 0 === zv || zv.terminate(), lv = null, Tv = null, iv.clear(), cv.clear();
      for (const hv of sv.values()) hv(null);
      sv.clear(), null === (Pv = Cv) || void 0 === Pv || Pv()
    }

    function jv() {
      return Wv ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === hv.d.ios_icon_worker_v1 && (0, Sv.isWebKit)()) return;
        try {
          lv = await async function() {
            return await ev.ready(), ev.start()
          }()
        } catch (pv) {
          return void mv(`did not start (${String(pv)})`)
        }
        let vv = () => {};
        const zv = new Promise((zv => {
          vv = zv
        }));
        lv.onmessage = zv => {
          let {
            data: Pv
          } = zv;
          if ("started" === Pv.type) Tv = lv, vv();
          else if ("failed" === Pv.type) mv(`failed a draw (${Pv.message})`);
          else {
            var hv, Sv;
            null === (hv = sv.get(Pv.id)) || void 0 === hv || hv(Pv.url), sv.delete(Pv.id), null === (Sv = Cv) || void 0 === Sv || Sv()
          }
        }, lv.onerror = zv => {
          zv.preventDefault(), mv(`stopped (${zv.message||"its script did not load or run"})`), vv()
        };
        const Pv = `did not start in ${Nv/1e3} s`;
        await (0, gv.j)(zv, Nv, Pv).catch((() => {
          mv(Pv)
        }))
      }(), Wv
    }

    function fv() {
      if (null !== Cv || 0 === sv.size) return;
      const vv = new Promise((vv => {
          Cv = vv
        })),
        zv = `did not answer in ${dv/1e3} s`;
      (0, gv.j)(vv, dv, zv).then((() => {
        Cv = null, fv()
      }), (() => {
        Cv = null, mv(zv)
      }))
    }

    function Fv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      vv.postMessage(zv, Pv)
    }

    function Yv(vv, zv, Pv, hv) {
      let Sv = zv.get(Pv);
      return void 0 === Sv && (Sv = hv().then((async zv => {
        let {
          image: Pv,
          request: hv
        } = zv;
        try {
          const zv = await createImageBitmap(Pv);
          Fv(vv, hv(zv), [zv])
        } catch (Sv) {
          mv(`could not take an image (${String(Sv)})`)
        }
      })), Sv.catch((() => {
        zv.get(Pv) === Sv && zv.delete(Pv)
      })), zv.set(Pv, Sv)), Sv
    }
    async function nv(vv, zv) {
      jv();
      const Pv = Tv;
      if (null === Pv) return null;
      if (await vv(Pv), Tv !== Pv) return null;
      const hv = ++av;
      return new Promise((vv => {
        sv.set(hv, vv), Fv(Pv, zv(hv)), fv()
      }))
    }

    function Ov(vv, zv, Pv) {
      return nv((zv => Promise.all([vv.top, vv.left, vv.right].map((vv => function(vv, zv) {
        return Yv(vv, iv, zv, (async () => ({
          image: await Gv(zv),
          request: vv => ({
            type: "texture",
            url: zv,
            bitmap: vv
          })
        })))
      }(zv, vv))))), (hv => ({
        type: "draw",
        id: hv,
        ...vv,
        size: zv,
        outlineWidth: Pv
      })))
    }

    function Dv(vv, zv, Pv, hv) {
      return nv((Pv => function(vv, zv, Pv) {
        return Yv(vv, cv, zv, (async () => {
          const {
            texture: vv,
            ...hv
          } = await Pv();
          return {
            image: await Gv(vv),
            request: vv => ({
              type: "model",
              name: zv,
              bitmap: vv,
              geometry: hv
            })
          }
        }))
      }(Pv, vv, zv)), (zv => ({
        type: "drawModel",
        id: zv,
        name: vv,
        size: Pv,
        outlineWidth: hv
      })))
    }
  },
  35939: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev,
      i: () => pv,
      l: () => gv
    });
    const hv = 1 / 32,
      Sv = [15, 15, 15],
      ev = {
        top: 1,
        left: .85,
        right: .7
      };

    function gv(vv, zv, Pv, Sv) {
      const {
        vertices: ev,
        uvs: gv,
        indices: dv,
        shades: Nv
      } = vv, lv = Pv * hv, Tv = Pv - 2 * lv, Wv = new Float32Array(ev.length);
      for (let hv = 0; hv < ev.length; hv += 3) Wv[hv] = lv + ev[hv] * Tv, Wv[hv + 1] = lv + ev[hv + 1] * Tv, Wv[hv + 2] = ev[hv + 2];
      const wv = new Float32Array(Pv * Pv).fill(-1 / 0),
        av = new Uint8ClampedArray(Pv * Pv * 4),
        sv = 255 * vv.alphaCutoff;
      for (let hv = 0; hv < dv.length; hv += 3) {
        const [vv, Sv, ev] = [dv[hv], dv[hv + 1], dv[hv + 2]], [pv, lv, Tv] = [3 * vv, 3 * Sv, 3 * ev], [Cv, iv, cv, Gv, mv, jv] = [Wv[pv], Wv[pv + 1], Wv[lv], Wv[lv + 1], Wv[Tv], Wv[Tv + 1]], fv = (cv - Cv) * (jv - iv) - (mv - Cv) * (Gv - iv);
        if (Math.abs(fv) < 1e-9) continue;
        const Fv = Nv[hv / 3],
          [Yv, nv, Ov, Dv, Kv, Vv] = [gv[2 * vv], gv[2 * vv + 1], gv[2 * Sv], gv[2 * Sv + 1], gv[2 * ev], gv[2 * ev + 1]],
          Uv = Math.max(0, Math.floor(Math.min(Cv, cv, mv))),
          Rv = Math.min(Pv - 1, Math.ceil(Math.max(Cv, cv, mv))),
          xv = Math.max(0, Math.floor(Math.min(iv, Gv, jv))),
          tv = Math.min(Pv - 1, Math.ceil(Math.max(iv, Gv, jv)));
        for (let hv = xv; hv <= tv; hv++)
          for (let vv = Uv; vv <= Rv; vv++) {
            const [Sv, ev] = [vv + .5, hv + .5], gv = ((Sv - Cv) * (jv - iv) - (mv - Cv) * (ev - iv)) / fv, dv = ((cv - Cv) * (ev - iv) - (Sv - Cv) * (Gv - iv)) / fv, Nv = 1 - gv - dv;
            if (Nv < 0 || gv < 0 || dv < 0) continue;
            const Uv = Nv * Wv[pv + 2] + gv * Wv[lv + 2] + dv * Wv[Tv + 2],
              Rv = hv * Pv + vv;
            if (Uv <= wv[Rv]) continue;
            const xv = Math.max(0, Math.min(zv.width - 1, Math.floor((Nv * Yv + gv * Ov + dv * Kv) * zv.width))),
              tv = 4 * (Math.max(0, Math.min(zv.height - 1, Math.floor((Nv * nv + gv * Dv + dv * Vv) * zv.height))) * zv.width + xv);
            zv.pixels[tv + 3] < sv || (wv[Rv] = Uv, av[4 * Rv] = zv.pixels[tv] * Fv, av[4 * Rv + 1] = zv.pixels[tv + 1] * Fv, av[4 * Rv + 2] = zv.pixels[tv + 2] * Fv, av[4 * Rv + 3] = 255)
          }
      }
      return pv(av, Pv, Sv), av
    }

    function pv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zv => 0 !== vv[4 * zv + 3];
      const ev = (vv, Pv) => vv < 0 || Pv < 0 || vv >= zv || Pv >= zv || !hv(Pv * zv + vv),
        gv = [];
      for (let Sv = 0; Sv < zv; Sv++)
        for (let vv = 0; vv < zv; vv++)
          if (!ev(vv, Sv)) vv: for (let hv = -Pv; hv <= Pv; hv++) {
            const pv = Pv - Math.abs(hv);
            for (let Pv = -pv; Pv <= pv; Pv++)
              if (ev(vv + Pv, Sv + hv)) {
                gv.push(Sv * zv + vv);
                break vv
              }
          }
      for (const pv of gv) vv.set(Sv, 4 * pv), vv[4 * pv + 3] = 255
    }
  },
  35944: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv
    });
    const hv = {
      wait: function(vv) {
        return new Promise((zv => {
          setTimeout(zv, vv)
        }))
      },
      stallMs: 2e4
    };
    class Sv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hv;
        this.url = vv, this.options = zv, this.timing = Pv, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = vv
      }
      ready() {
        if (null === this.fetched) {
          const vv = new AbortController;
          this.fetchAbort = vv, this.fetched = this.fetchWithRetries(vv.signal).finally((() => {
            this.fetchAbort === vv && (this.fetchAbort = null)
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
      async fetchWithRetries(vv) {
        for (let zv = 0;; zv++) {
          const Pv = new URL(this.url);
          if (zv > 0 && Pv.searchParams.set("cache-bust", `${Date.now()}-${zv}`), await this.fetchWhole(Pv, vv)) return void(this.scriptUrl = Pv);
          if (zv >= 3 || vv.aborted) return;
          if (await this.timing.wait(500 * 2 ** zv), vv.aborted) return
        }
      }
      async fetchWhole(vv, zv) {
        const Pv = new AbortController;
        let hv;
        const Sv = () => {
            clearTimeout(hv), hv = setTimeout((() => {
              Pv.abort()
            }), this.timing.stallMs)
          },
          ev = () => {
            Pv.abort()
          };
        zv.addEventListener("abort", ev, {
          once: !0
        }), Sv();
        try {
          var gv;
          const zv = await fetch(vv, {
            signal: Pv.signal
          });
          if (!zv.ok) return !1;
          const hv = null === (gv = zv.body) || void 0 === gv ? void 0 : gv.getReader();
          if (!hv) return !1;
          for (;;) {
            const {
              done: vv
            } = await hv.read();
            if (vv) return !0;
            Sv()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(hv), zv.removeEventListener("abort", ev)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);