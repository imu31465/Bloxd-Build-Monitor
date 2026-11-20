export const id = 4;
export const ids = [4];
export const modules = {
  35987: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      getBlockModelIconUrl: () => jU,
      hasBlockModelIcon: () => KU
    });
    var tU = gU(35980),
      pU = gU(35974);
    const EU = gU(35994),
      PU = new Map(EU.keys().filter((UU => UU.startsWith("./"))).map((UU => [UU.slice(2, -5), UU]))),
      TU = new Map,
      qU = new Map;

    function KU(UU) {
      return PU.has(UU)
    }

    function cU(UU) {
      return EU(PU.get(UU))
    }
    async function GU(UU, RU, gU) {
      const {
        data: tU,
        texture: EU
      } = await
      function(UU) {
        let RU = TU.get(UU);
        return RU || (RU = cU(UU).then((async UU => {
          const RU = new Image;
          RU.src = UU.texture, await RU.decode();
          const gU = document.createElement("canvas");
          gU.width = RU.width, gU.height = RU.height;
          const tU = gU.getContext("2d");
          return tU.drawImage(RU, 0, 0), {
            data: UU,
            texture: {
              width: RU.width,
              height: RU.height,
              pixels: tU.getImageData(0, 0, RU.width, RU.height).data
            }
          }
        })), RU.catch((() => {
          TU.delete(UU)
        })), TU.set(UU, RU)), RU
      }(UU), PU = document.createElement("canvas");
      return PU.width = RU, PU.height = RU, PU.getContext("2d").putImageData(new ImageData((0, pU.f)(tU, EU, RU, gU), RU, RU), 0, 0), PU.toDataURL()
    }

    function jU(UU, RU, gU) {
      const pU = `${RU}|${gU}|${UU}`;
      let EU = qU.get(pU);
      return EU || (EU = (0, tU.g)(UU, (() => cU(UU)), RU, gU).then((tU => null !== tU && void 0 !== tU ? tU : GU(UU, RU, gU))), EU.catch((() => {
        qU.delete(pU)
      })), qU.set(pU, EU)), EU
    }
  },
  35980: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => bU,
      g: () => oU,
      h: () => fU
    });
    var tU = gU(279),
      pU = gU(96);
    const EU = new(gU(35985).c)(new URL(gU.p + gU.u(3), gU.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var PU = gU(1675),
      TU = gU(2888);
    const qU = 1e4,
      KU = 3e4;
    let cU = null,
      GU = null,
      jU = null,
      uU = !1,
      CU = 0;
    const hU = new Map;
    let QU = null;
    const eU = new Map,
      WU = new Map;

    function fU(UU) {
      const RU = new Promise(((RU, gU) => {
        const tU = new Image;
        tU.crossOrigin = "anonymous", tU.fetchPriority = "high", tU.onload = () => {
          RU(tU)
        }, tU.onerror = () => {
          gU(new Error(`A block icon's texture did not load: ${UU.slice(0,100)}`))
        }, tU.src = UU
      }));
      return (0, TU.f)(RU)
    }

    function xU(UU) {
      var RU, gU;
      uU || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${UU}`), uU = !0, null === (RU = cU) || void 0 === RU || RU.terminate(), cU = null, GU = null, eU.clear(), WU.clear();
      for (const tU of hU.values()) tU(null);
      hU.clear(), null === (gU = QU) || void 0 === gU || gU()
    }

    function mU() {
      return jU ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === tU.c.ios_icon_worker_v1 && (0, pU.isWebKit)()) return;
        try {
          cU = await async function() {
            return await EU.ready(), EU.start()
          }()
        } catch (TU) {
          return void xU(`did not start (${String(TU)})`)
        }
        let UU = () => {};
        const RU = new Promise((RU => {
          UU = RU
        }));
        cU.onmessage = RU => {
          let {
            data: gU
          } = RU;
          if ("started" === gU.type) GU = cU, UU();
          else if ("failed" === gU.type) xU(`failed a draw (${gU.message})`);
          else {
            var tU, pU;
            null === (tU = hU.get(gU.id)) || void 0 === tU || tU(gU.url), hU.delete(gU.id), null === (pU = QU) || void 0 === pU || pU()
          }
        }, cU.onerror = RU => {
          RU.preventDefault(), xU(`stopped (${RU.message||"its script did not load or run"})`), UU()
        };
        const gU = `did not start in ${KU/1e3} s`;
        await (0, PU.i)(RU, KU, gU).catch((() => {
          xU(gU)
        }))
      }(), jU
    }

    function IU() {
      if (null !== QU || 0 === hU.size) return;
      const UU = new Promise((UU => {
          QU = UU
        })),
        RU = `did not answer in ${qU/1e3} s`;
      (0, PU.i)(UU, qU, RU).then((() => {
        QU = null, IU()
      }), (() => {
        QU = null, xU(RU)
      }))
    }

    function JU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      UU.postMessage(RU, gU)
    }

    function wU(UU, RU, gU, tU) {
      let pU = RU.get(gU);
      return void 0 === pU && (pU = tU().then((async RU => {
        let {
          image: gU,
          request: tU
        } = RU;
        try {
          const RU = await createImageBitmap(gU);
          JU(UU, tU(RU), [RU])
        } catch (pU) {
          xU(`could not take an image (${String(pU)})`)
        }
      })), pU.catch((() => {
        RU.get(gU) === pU && RU.delete(gU)
      })), RU.set(gU, pU)), pU
    }
    async function nU(UU, RU) {
      mU();
      const gU = GU;
      if (null === gU) return null;
      if (await UU(gU), GU !== gU) return null;
      const tU = ++CU;
      return new Promise((UU => {
        hU.set(tU, UU), JU(gU, RU(tU)), IU()
      }))
    }

    function bU(UU, RU, gU) {
      return nU((RU => Promise.all([UU.top, UU.left, UU.right].map((UU => function(UU, RU) {
        return wU(UU, eU, RU, (async () => ({
          image: await fU(RU),
          request: UU => ({
            type: "texture",
            url: RU,
            bitmap: UU
          })
        })))
      }(RU, UU))))), (tU => ({
        type: "draw",
        id: tU,
        ...UU,
        size: RU,
        outlineWidth: gU
      })))
    }

    function oU(UU, RU, gU, tU) {
      return nU((gU => function(UU, RU, gU) {
        return wU(UU, WU, RU, (async () => {
          const {
            texture: UU,
            ...tU
          } = await gU();
          return {
            image: await fU(UU),
            request: UU => ({
              type: "model",
              name: RU,
              bitmap: UU,
              geometry: tU
            })
          }
        }))
      }(gU, UU, RU)), (RU => ({
        type: "drawModel",
        id: RU,
        name: UU,
        size: gU,
        outlineWidth: tU
      })))
    }
  },
  35974: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      d: () => TU,
      f: () => PU
    });
    const tU = 1 / 32,
      pU = [15, 15, 15],
      EU = {
        top: 1,
        left: .85,
        right: .7
      };

    function PU(UU, RU, gU, pU) {
      const {
        vertices: EU,
        uvs: PU,
        indices: qU,
        shades: KU
      } = UU, cU = gU * tU, GU = gU - 2 * cU, jU = new Float32Array(EU.length);
      for (let tU = 0; tU < EU.length; tU += 3) jU[tU] = cU + EU[tU] * GU, jU[tU + 1] = cU + EU[tU + 1] * GU, jU[tU + 2] = EU[tU + 2];
      const uU = new Float32Array(gU * gU).fill(-1 / 0),
        CU = new Uint8ClampedArray(gU * gU * 4),
        hU = 255 * UU.alphaCutoff;
      for (let tU = 0; tU < qU.length; tU += 3) {
        const [UU, pU, EU] = [qU[tU], qU[tU + 1], qU[tU + 2]], [TU, cU, GU] = [3 * UU, 3 * pU, 3 * EU], [QU, eU, WU, fU, xU, mU] = [jU[TU], jU[TU + 1], jU[cU], jU[cU + 1], jU[GU], jU[GU + 1]], IU = (WU - QU) * (mU - eU) - (xU - QU) * (fU - eU);
        if (Math.abs(IU) < 1e-9) continue;
        const JU = KU[tU / 3],
          [wU, nU, bU, oU, ZU, aU] = [PU[2 * UU], PU[2 * UU + 1], PU[2 * pU], PU[2 * pU + 1], PU[2 * EU], PU[2 * EU + 1]],
          YU = Math.max(0, Math.floor(Math.min(QU, WU, xU))),
          BU = Math.min(gU - 1, Math.ceil(Math.max(QU, WU, xU))),
          VU = Math.max(0, Math.floor(Math.min(eU, fU, mU))),
          rU = Math.min(gU - 1, Math.ceil(Math.max(eU, fU, mU)));
        for (let tU = VU; tU <= rU; tU++)
          for (let UU = YU; UU <= BU; UU++) {
            const [pU, EU] = [UU + .5, tU + .5], PU = ((pU - QU) * (mU - eU) - (xU - QU) * (EU - eU)) / IU, qU = ((WU - QU) * (EU - eU) - (pU - QU) * (fU - eU)) / IU, KU = 1 - PU - qU;
            if (KU < 0 || PU < 0 || qU < 0) continue;
            const YU = KU * jU[TU + 2] + PU * jU[cU + 2] + qU * jU[GU + 2],
              BU = tU * gU + UU;
            if (YU <= uU[BU]) continue;
            const VU = Math.max(0, Math.min(RU.width - 1, Math.floor((KU * wU + PU * bU + qU * ZU) * RU.width))),
              rU = 4 * (Math.max(0, Math.min(RU.height - 1, Math.floor((KU * nU + PU * oU + qU * aU) * RU.height))) * RU.width + VU);
            RU.pixels[rU + 3] < hU || (uU[BU] = YU, CU[4 * BU] = RU.pixels[rU] * JU, CU[4 * BU + 1] = RU.pixels[rU + 1] * JU, CU[4 * BU + 2] = RU.pixels[rU + 2] * JU, CU[4 * BU + 3] = 255)
          }
      }
      return TU(CU, gU, pU), CU
    }

    function TU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RU => 0 !== UU[4 * RU + 3];
      const EU = (UU, gU) => UU < 0 || gU < 0 || UU >= RU || gU >= RU || !tU(gU * RU + UU),
        PU = [];
      for (let pU = 0; pU < RU; pU++)
        for (let UU = 0; UU < RU; UU++)
          if (!EU(UU, pU)) UU: for (let tU = -gU; tU <= gU; tU++) {
            const TU = gU - Math.abs(tU);
            for (let gU = -TU; gU <= TU; gU++)
              if (EU(UU + gU, pU + tU)) {
                PU.push(pU * RU + UU);
                break UU
              }
          }
      for (const TU of PU) UU.set(pU, 4 * TU), UU[4 * TU + 3] = 255
    }
  },
  35985: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU
    });
    const tU = {
      wait: function(UU) {
        return new Promise((RU => {
          setTimeout(RU, UU)
        }))
      },
      stallMs: 2e4
    };
    class pU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tU;
        this.url = UU, this.options = RU, this.timing = gU, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = UU
      }
      ready() {
        if (null === this.fetched) {
          const UU = new AbortController;
          this.fetchAbort = UU, this.fetched = this.fetchWithRetries(UU.signal).finally((() => {
            this.fetchAbort === UU && (this.fetchAbort = null)
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
      async fetchWithRetries(UU) {
        for (let RU = 0;; RU++) {
          const gU = new URL(this.url);
          if (RU > 0 && gU.searchParams.set("cache-bust", `${Date.now()}-${RU}`), await this.fetchWhole(gU, UU)) return void(this.scriptUrl = gU);
          if (RU >= 3 || UU.aborted) return;
          if (await this.timing.wait(500 * 2 ** RU), UU.aborted) return
        }
      }
      async fetchWhole(UU, RU) {
        const gU = new AbortController;
        let tU;
        const pU = () => {
            clearTimeout(tU), tU = setTimeout((() => {
              gU.abort()
            }), this.timing.stallMs)
          },
          EU = () => {
            gU.abort()
          };
        RU.addEventListener("abort", EU, {
          once: !0
        }), pU();
        try {
          var PU;
          const RU = await fetch(UU, {
            signal: gU.signal
          });
          if (!RU.ok) return !1;
          const tU = null === (PU = RU.body) || void 0 === PU ? void 0 : PU.getReader();
          if (!tU) return !1;
          for (;;) {
            const {
              done: UU
            } = await tU.read();
            if (UU) return !0;
            pU()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(tU), RU.removeEventListener("abort", EU)
        }
      }
    }
  },
  35994: (UU, RU, gU) => {
    var tU = {
      "./Artisan Bench.json": [40568, 265],
      "./Aspen Item Pedestal.json": [40577, 266],
      "./Cedar Item Pedestal.json": [40584, 267],
      "./Cherry Item Pedestal.json": [40586, 268],
      "./Furnace.json": [40595, 269],
      "./Jungle Item Pedestal.json": [40597, 270],
      "./Mango Item Pedestal.json": [40606, 271],
      "./Palm Item Pedestal.json": [40612, 272],
      "./Pear Item Pedestal.json": [40619, 273],
      "./Pine Item Pedestal.json": [40621, 274],
      "./Plum Item Pedestal.json": [40625, 275],
      "./Potion Table.json": [40631, 276],
      "./Salvaging Table.json": [40633, 277],
      "./Showcase.json": [40640, 278],
      "./Spectral Item Pedestal.json": [40648, 279],
      "./Workbench.json": [40653, 280]
    };

    function pU(UU) {
      if (!gU.o(tU, UU)) return Promise.resolve().then((() => {
        var RU = new Error("Cannot find module '" + UU + "'");
        throw RU.code = "MODULE_NOT_FOUND", RU
      }));
      var RU = tU[UU],
        pU = RU[0];
      return gU.e(RU[1]).then((() => gU(pU)))
    }
    pU.keys = () => Object.keys(tU), pU.id = 35994, UU.exports = pU
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);