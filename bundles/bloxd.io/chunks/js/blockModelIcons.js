export const id = 4;
export const ids = [4];
export const modules = {
  36572: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      getBlockModelIconUrl: () => ld,
      hasBlockModelIcon: () => Cd
    });
    var pd = kd(36559),
      Nd = kd(36557);
    const Wd = kd(36579),
      Pd = new Map(Wd.keys().filter((dd => dd.startsWith("./"))).map((dd => [dd.slice(2, -5), dd]))),
      Zd = new Map,
      gd = new Map;

    function Cd(dd) {
      return Pd.has(dd)
    }

    function Kd(dd) {
      return Wd(Pd.get(dd))
    }
    async function od(dd, Jd, kd) {
      const {
        data: pd,
        texture: Wd
      } = await
      function(dd) {
        let Jd = Zd.get(dd);
        return Jd || (Jd = Kd(dd).then((async dd => {
          const Jd = new Image;
          Jd.src = dd.texture, await Jd.decode();
          const kd = document.createElement("canvas");
          kd.width = Jd.width, kd.height = Jd.height;
          const pd = kd.getContext("2d");
          return pd.drawImage(Jd, 0, 0), {
            data: dd,
            texture: {
              width: Jd.width,
              height: Jd.height,
              pixels: pd.getImageData(0, 0, Jd.width, Jd.height).data
            }
          }
        })), Jd.catch((() => {
          Zd.delete(dd)
        })), Zd.set(dd, Jd)), Jd
      }(dd), Pd = document.createElement("canvas");
      return Pd.width = Jd, Pd.height = Jd, Pd.getContext("2d").putImageData(new ImageData((0, Nd.j)(pd, Wd, Jd, kd), Jd, Jd), 0, 0), Pd.toDataURL()
    }

    function ld(dd, Jd, kd) {
      const Nd = `${Jd}|${kd}|${dd}`;
      let Wd = gd.get(Nd);
      return Wd || (Wd = (0, pd.e)(dd, (() => Kd(dd)), Jd, kd).then((pd => null !== pd && void 0 !== pd ? pd : od(dd, Jd, kd))), Wd.catch((() => {
        gd.delete(Nd)
      })), gd.set(Nd, Wd)), Wd
    }
  },
  36559: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Md,
      e: () => Fd,
      i: () => Gd
    });
    var pd = kd(284),
      Nd = kd(95);
    const Wd = new(kd(36564).c)(new URL(kd.p + kd.u(3), kd.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Pd = kd(1797),
      Zd = kd(3054);
    const gd = 1e4,
      Cd = 3e4;
    let Kd = null,
      od = null,
      ld = null,
      Qd = !1,
      Ld = 0;
    const Od = new Map;
    let ed = null;
    const Rd = new Map,
      Id = new Map;

    function Gd(dd) {
      const Jd = new Promise(((Jd, kd) => {
        const pd = new Image;
        pd.crossOrigin = "anonymous", pd.fetchPriority = "high", pd.onload = () => {
          Jd(pd)
        }, pd.onerror = () => {
          kd(new Error(`A block icon's texture did not load: ${dd.slice(0,100)}`))
        }, pd.src = dd
      }));
      return (0, Zd.d)(Jd)
    }

    function vd(dd) {
      var Jd, kd;
      Qd || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${dd}`), Qd = !0, null === (Jd = Kd) || void 0 === Jd || Jd.terminate(), Kd = null, od = null, Rd.clear(), Id.clear();
      for (const pd of Od.values()) pd(null);
      Od.clear(), null === (kd = ed) || void 0 === kd || kd()
    }

    function xd() {
      return ld ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === pd.c.ios_icon_worker_v1 && (0, Nd.isWebKit)()) return;
        try {
          Kd = await async function() {
            return await Wd.ready(), Wd.start()
          }()
        } catch (Zd) {
          return void vd(`did not start (${String(Zd)})`)
        }
        let dd = () => {};
        const Jd = new Promise((Jd => {
          dd = Jd
        }));
        Kd.onmessage = Jd => {
          let {
            data: kd
          } = Jd;
          if ("started" === kd.type) od = Kd, dd();
          else if ("failed" === kd.type) vd(`failed a draw (${kd.message})`);
          else {
            var pd, Nd;
            null === (pd = Od.get(kd.id)) || void 0 === pd || pd(kd.url), Od.delete(kd.id), null === (Nd = ed) || void 0 === Nd || Nd()
          }
        }, Kd.onerror = Jd => {
          Jd.preventDefault(), vd(`stopped (${Jd.message||"its script did not load or run"})`), dd()
        };
        const kd = `did not start in ${Cd/1e3} s`;
        await (0, Pd.m)(Jd, Cd, kd).catch((() => {
          vd(kd)
        }))
      }(), ld
    }

    function qd() {
      if (null !== ed || 0 === Od.size) return;
      const dd = new Promise((dd => {
          ed = dd
        })),
        Jd = `did not answer in ${gd/1e3} s`;
      (0, Pd.m)(dd, gd, Jd).then((() => {
        ed = null, qd()
      }), (() => {
        ed = null, vd(Jd)
      }))
    }

    function Bd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      dd.postMessage(Jd, kd)
    }

    function sd(dd, Jd, kd, pd) {
      let Nd = Jd.get(kd);
      return void 0 === Nd && (Nd = pd().then((async Jd => {
        let {
          image: kd,
          request: pd
        } = Jd;
        try {
          const Jd = await createImageBitmap(kd);
          Bd(dd, pd(Jd), [Jd])
        } catch (Nd) {
          vd(`could not take an image (${String(Nd)})`)
        }
      })), Nd.catch((() => {
        Jd.get(kd) === Nd && Jd.delete(kd)
      })), Jd.set(kd, Nd)), Nd
    }
    async function ad(dd, Jd) {
      xd();
      const kd = od;
      if (null === kd) return null;
      if (await dd(kd), od !== kd) return null;
      const pd = ++Ld;
      return new Promise((dd => {
        Od.set(pd, dd), Bd(kd, Jd(pd)), qd()
      }))
    }

    function Md(dd, Jd, kd) {
      return ad((Jd => Promise.all([dd.top, dd.left, dd.right].map((dd => function(dd, Jd) {
        return sd(dd, Rd, Jd, (async () => ({
          image: await Gd(Jd),
          request: dd => ({
            type: "texture",
            url: Jd,
            bitmap: dd
          })
        })))
      }(Jd, dd))))), (pd => ({
        type: "draw",
        id: pd,
        ...dd,
        size: Jd,
        outlineWidth: kd
      })))
    }

    function Fd(dd, Jd, kd, pd) {
      return ad((kd => function(dd, Jd, kd) {
        return sd(dd, Id, Jd, (async () => {
          const {
            texture: dd,
            ...pd
          } = await kd();
          return {
            image: await Gd(dd),
            request: dd => ({
              type: "model",
              name: Jd,
              bitmap: dd,
              geometry: pd
            })
          }
        }))
      }(kd, dd, Jd)), (Jd => ({
        type: "drawModel",
        id: Jd,
        name: dd,
        size: kd,
        outlineWidth: pd
      })))
    }
  },
  36557: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      f: () => Zd,
      j: () => Pd
    });
    const pd = 1 / 32,
      Nd = [15, 15, 15],
      Wd = {
        top: 1,
        left: .85,
        right: .7
      };

    function Pd(dd, Jd, kd, Nd) {
      const {
        vertices: Wd,
        uvs: Pd,
        indices: gd,
        shades: Cd
      } = dd, Kd = kd * pd, od = kd - 2 * Kd, ld = new Float32Array(Wd.length);
      for (let pd = 0; pd < Wd.length; pd += 3) ld[pd] = Kd + Wd[pd] * od, ld[pd + 1] = Kd + Wd[pd + 1] * od, ld[pd + 2] = Wd[pd + 2];
      const Qd = new Float32Array(kd * kd).fill(-1 / 0),
        Ld = new Uint8ClampedArray(kd * kd * 4),
        Od = 255 * dd.alphaCutoff;
      for (let pd = 0; pd < gd.length; pd += 3) {
        const [dd, Nd, Wd] = [gd[pd], gd[pd + 1], gd[pd + 2]], [Zd, Kd, od] = [3 * dd, 3 * Nd, 3 * Wd], [ed, Rd, Id, Gd, vd, xd] = [ld[Zd], ld[Zd + 1], ld[Kd], ld[Kd + 1], ld[od], ld[od + 1]], qd = (Id - ed) * (xd - Rd) - (vd - ed) * (Gd - Rd);
        if (Math.abs(qd) < 1e-9) continue;
        const Bd = Cd[pd / 3],
          [sd, ad, Md, Fd, Yd, md] = [Pd[2 * dd], Pd[2 * dd + 1], Pd[2 * Nd], Pd[2 * Nd + 1], Pd[2 * Wd], Pd[2 * Wd + 1]],
          bd = Math.max(0, Math.floor(Math.min(ed, Id, vd))),
          Sd = Math.min(kd - 1, Math.ceil(Math.max(ed, Id, vd))),
          jd = Math.max(0, Math.floor(Math.min(Rd, Gd, xd))),
          Xd = Math.min(kd - 1, Math.ceil(Math.max(Rd, Gd, xd)));
        for (let pd = jd; pd <= Xd; pd++)
          for (let dd = bd; dd <= Sd; dd++) {
            const [Nd, Wd] = [dd + .5, pd + .5], Pd = ((Nd - ed) * (xd - Rd) - (vd - ed) * (Wd - Rd)) / qd, gd = ((Id - ed) * (Wd - Rd) - (Nd - ed) * (Gd - Rd)) / qd, Cd = 1 - Pd - gd;
            if (Cd < 0 || Pd < 0 || gd < 0) continue;
            const bd = Cd * ld[Zd + 2] + Pd * ld[Kd + 2] + gd * ld[od + 2],
              Sd = pd * kd + dd;
            if (bd <= Qd[Sd]) continue;
            const jd = Math.max(0, Math.min(Jd.width - 1, Math.floor((Cd * sd + Pd * Md + gd * Yd) * Jd.width))),
              Xd = 4 * (Math.max(0, Math.min(Jd.height - 1, Math.floor((Cd * ad + Pd * Fd + gd * md) * Jd.height))) * Jd.width + jd);
            Jd.pixels[Xd + 3] < Od || (Qd[Sd] = bd, Ld[4 * Sd] = Jd.pixels[Xd] * Bd, Ld[4 * Sd + 1] = Jd.pixels[Xd + 1] * Bd, Ld[4 * Sd + 2] = Jd.pixels[Xd + 2] * Bd, Ld[4 * Sd + 3] = 255)
          }
      }
      return Zd(Ld, kd, Nd), Ld
    }

    function Zd(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Jd => 0 !== dd[4 * Jd + 3];
      const Wd = (dd, kd) => dd < 0 || kd < 0 || dd >= Jd || kd >= Jd || !pd(kd * Jd + dd),
        Pd = [];
      for (let Nd = 0; Nd < Jd; Nd++)
        for (let dd = 0; dd < Jd; dd++)
          if (!Wd(dd, Nd)) dd: for (let pd = -kd; pd <= kd; pd++) {
            const Zd = kd - Math.abs(pd);
            for (let kd = -Zd; kd <= Zd; kd++)
              if (Wd(dd + kd, Nd + pd)) {
                Pd.push(Nd * Jd + dd);
                break dd
              }
          }
      for (const Zd of Pd) dd.set(Nd, 4 * Zd), dd[4 * Zd + 3] = 255
    }
  },
  36564: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd
    });
    const pd = {
      wait: function(dd) {
        return new Promise((Jd => {
          setTimeout(Jd, dd)
        }))
      },
      stallMs: 2e4
    };
    class Nd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pd;
        this.url = dd, this.options = Jd, this.timing = kd, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = dd
      }
      ready() {
        if (null === this.fetched) {
          const dd = new AbortController;
          this.fetchAbort = dd, this.fetched = this.fetchWithRetries(dd.signal).finally((() => {
            this.fetchAbort === dd && (this.fetchAbort = null)
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
      async fetchWithRetries(dd) {
        for (let Jd = 0;; Jd++) {
          const kd = new URL(this.url);
          if (Jd > 0 && kd.searchParams.set("cache-bust", `${Date.now()}-${Jd}`), await this.fetchWhole(kd, dd)) return void(this.scriptUrl = kd);
          if (Jd >= 3 || dd.aborted) return;
          if (await this.timing.wait(500 * 2 ** Jd), dd.aborted) return
        }
      }
      async fetchWhole(dd, Jd) {
        const kd = new AbortController;
        let pd;
        const Nd = () => {
            clearTimeout(pd), pd = setTimeout((() => {
              kd.abort()
            }), this.timing.stallMs)
          },
          Wd = () => {
            kd.abort()
          };
        Jd.addEventListener("abort", Wd, {
          once: !0
        }), Nd();
        try {
          var Pd;
          const Jd = await fetch(dd, {
            signal: kd.signal
          });
          if (!Jd.ok) return !1;
          const pd = null === (Pd = Jd.body) || void 0 === Pd ? void 0 : Pd.getReader();
          if (!pd) return !1;
          for (;;) {
            const {
              done: dd
            } = await pd.read();
            if (dd) return !0;
            Nd()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(pd), Jd.removeEventListener("abort", Wd)
        }
      }
    }
  },
  36579: (dd, Jd, kd) => {
    var pd = {
      "./Artisan Bench.json": [41153, 266],
      "./Aspen Item Pedestal.json": [41158, 267],
      "./Cedar Item Pedestal.json": [41165, 268],
      "./Cherry Item Pedestal.json": [41168, 269],
      "./Furnace.json": [41171, 270],
      "./Jungle Item Pedestal.json": [41179, 271],
      "./Mango Item Pedestal.json": [41183, 272],
      "./Palm Item Pedestal.json": [41186, 273],
      "./Pear Item Pedestal.json": [41194, 274],
      "./Pine Item Pedestal.json": [41198, 275],
      "./Plum Item Pedestal.json": [41207, 276],
      "./Potion Table.json": [41212, 277],
      "./Salvaging Table.json": [41215, 278],
      "./Showcase.json": [41217, 279],
      "./Spectral Item Pedestal.json": [41224, 280],
      "./Workbench.json": [41231, 281]
    };

    function Nd(dd) {
      if (!kd.o(pd, dd)) return Promise.resolve().then((() => {
        var Jd = new Error("Cannot find module '" + dd + "'");
        throw Jd.code = "MODULE_NOT_FOUND", Jd
      }));
      var Jd = pd[dd],
        Nd = Jd[0];
      return kd.e(Jd[1]).then((() => kd(Nd)))
    }
    Nd.keys = () => Object.keys(pd), Nd.id = 36579, dd.exports = Nd
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);