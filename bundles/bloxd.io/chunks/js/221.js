export const id = 221;
export const ids = [221];
export const modules = {
  36733: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => WG,
      g: () => mG,
      k: () => zG
    });
    var wG = ZG(283),
      SG = ZG(80);
    const LG = new(ZG(36737).b)(new URL(ZG.p + ZG.u(3), ZG.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var yG = ZG(1775),
      kG = ZG(2130);
    const UG = 1e4,
      YG = 3e4;
    let VG = null,
      pG = null,
      fG = null,
      QG = !1,
      KG = 0;
    const hG = new Map;
    let dG = null;
    const JG = new Map,
      rG = new Map;

    function zG(GG) {
      const bG = new Promise(((bG, ZG) => {
        const wG = new Image;
        wG.crossOrigin = "anonymous", wG.fetchPriority = "high", wG.onload = () => {
          bG(wG)
        }, wG.onerror = () => {
          ZG(new Error(`A block icon's texture did not load: ${GG.slice(0,100)}`))
        }, wG.src = GG
      }));
      return (0, kG.e)(bG)
    }

    function EG(GG) {
      var bG, ZG;
      QG || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${GG}`), QG = !0, null === (bG = VG) || void 0 === bG || bG.terminate(), VG = null, pG = null, JG.clear(), rG.clear();
      for (const wG of hG.values()) wG(null);
      hG.clear(), null === (ZG = dG) || void 0 === ZG || ZG()
    }

    function oG() {
      return fG ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === wG.d.ios_icon_worker_v1 && (0, SG.isWebKit)()) return;
        try {
          VG = await async function() {
            return await LG.ready(), LG.start()
          }()
        } catch (kG) {
          return void EG(`did not start (${String(kG)})`)
        }
        let GG = () => {};
        const bG = new Promise((bG => {
          GG = bG
        }));
        VG.onmessage = bG => {
          let {
            data: ZG
          } = bG;
          if ("started" === ZG.type) pG = VG, GG();
          else if ("failed" === ZG.type) EG(`failed a draw (${ZG.message})`);
          else {
            var wG, SG;
            null === (wG = hG.get(ZG.id)) || void 0 === wG || wG(ZG.url), hG.delete(ZG.id), null === (SG = dG) || void 0 === SG || SG()
          }
        }, VG.onerror = bG => {
          bG.preventDefault(), EG(`stopped (${bG.message||"its script did not load or run"})`), GG()
        };
        const ZG = `did not start in ${YG/1e3} s`;
        await (0, yG.n)(bG, YG, ZG).catch((() => {
          EG(ZG)
        }))
      }(), fG
    }

    function XG() {
      if (null !== dG || 0 === hG.size) return;
      const GG = new Promise((GG => {
          dG = GG
        })),
        bG = `did not answer in ${UG/1e3} s`;
      (0, yG.n)(GG, UG, bG).then((() => {
        dG = null, XG()
      }), (() => {
        dG = null, EG(bG)
      }))
    }

    function uG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      GG.postMessage(bG, ZG)
    }

    function iG(GG, bG, ZG, wG) {
      let SG = bG.get(ZG);
      return void 0 === SG && (SG = wG().then((async bG => {
        let {
          image: ZG,
          request: wG
        } = bG;
        try {
          const bG = await createImageBitmap(ZG);
          uG(GG, wG(bG), [bG])
        } catch (SG) {
          EG(`could not take an image (${String(SG)})`)
        }
      })), SG.catch((() => {
        bG.get(ZG) === SG && bG.delete(ZG)
      })), bG.set(ZG, SG)), SG
    }
    async function CG(GG, bG) {
      oG();
      const ZG = pG;
      if (null === ZG) return null;
      if (await GG(ZG), pG !== ZG) return null;
      const wG = ++KG;
      return new Promise((GG => {
        hG.set(wG, GG), uG(ZG, bG(wG)), XG()
      }))
    }

    function WG(GG, bG, ZG) {
      return CG((bG => Promise.all([GG.top, GG.left, GG.right].map((GG => function(GG, bG) {
        return iG(GG, JG, bG, (async () => ({
          image: await zG(bG),
          request: GG => ({
            type: "texture",
            url: bG,
            bitmap: GG
          })
        })))
      }(bG, GG))))), (wG => ({
        type: "draw",
        id: wG,
        ...GG,
        size: bG,
        outlineWidth: ZG
      })))
    }

    function mG(GG, bG, ZG, wG) {
      return CG((ZG => function(GG, bG, ZG) {
        return iG(GG, rG, bG, (async () => {
          const {
            texture: GG,
            ...wG
          } = await ZG();
          return {
            image: await zG(GG),
            request: GG => ({
              type: "model",
              name: bG,
              bitmap: GG,
              geometry: wG
            })
          }
        }))
      }(ZG, GG, bG)), (bG => ({
        type: "drawModel",
        id: bG,
        name: GG,
        size: ZG,
        outlineWidth: wG
      })))
    }
  },
  36729: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG,
      h: () => UG,
      l: () => yG,
      n: () => fG,
      o: () => YG
    });
    const wG = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      SG = .6,
      LG = {
        width: 2 * wG.across,
        height: 2 * wG.down + wG.up
      };

    function yG(GG, bG) {
      const ZG = bG > 0 ? bG + 1 : 0,
        yG = GG * SG - bG / wG.across;
      return Math.max(0, Math.min(yG, (GG - 2 * ZG) / LG.height))
    }
    const kG = [15, 15, 15],
      UG = {
        top: 1,
        left: .85,
        right: .7
      };

    function YG(GG, bG, ZG, wG) {
      const {
        vertices: SG,
        uvs: kG,
        indices: UG,
        shades: YG
      } = GG, VG = function(GG, bG) {
        const ZG = yG(GG, bG),
          wG = LG.width * ZG,
          SG = LG.height * ZG;
        return {
          left: (GG - wG) / 2,
          top: (GG - SG) / 2,
          width: wG,
          height: SG
        }
      }(ZG, wG), pG = new Float32Array(SG.length);
      for (let LG = 0; LG < SG.length; LG += 3) pG[LG] = VG.left + SG[LG] * VG.width, pG[LG + 1] = VG.top + SG[LG + 1] * VG.height, pG[LG + 2] = SG[LG + 2];
      const QG = new Float32Array(ZG * ZG).fill(-1 / 0),
        KG = new Uint8ClampedArray(ZG * ZG * 4),
        hG = 255 * GG.alphaCutoff;
      for (let LG = 0; LG < UG.length; LG += 3) {
        const [GG, wG, SG] = [UG[LG], UG[LG + 1], UG[LG + 2]], [yG, VG, fG] = [3 * GG, 3 * wG, 3 * SG], [dG, JG, rG, zG, EG, oG] = [pG[yG], pG[yG + 1], pG[VG], pG[VG + 1], pG[fG], pG[fG + 1]], XG = (rG - dG) * (oG - JG) - (EG - dG) * (zG - JG);
        if (Math.abs(XG) < 1e-9) continue;
        const uG = YG[LG / 3],
          [iG, CG, WG, mG, IG, FG] = [kG[2 * GG], kG[2 * GG + 1], kG[2 * wG], kG[2 * wG + 1], kG[2 * SG], kG[2 * SG + 1]],
          vG = Math.max(0, Math.floor(Math.min(dG, rG, EG))),
          aG = Math.min(ZG - 1, Math.ceil(Math.max(dG, rG, EG))),
          cG = Math.max(0, Math.floor(Math.min(JG, zG, oG))),
          lG = Math.min(ZG - 1, Math.ceil(Math.max(JG, zG, oG)));
        for (let LG = cG; LG <= lG; LG++)
          for (let GG = vG; GG <= aG; GG++) {
            const [wG, SG] = [GG + .5, LG + .5], kG = ((wG - dG) * (oG - JG) - (EG - dG) * (SG - JG)) / XG, UG = ((rG - dG) * (SG - JG) - (wG - dG) * (zG - JG)) / XG, YG = 1 - kG - UG;
            if (YG < 0 || kG < 0 || UG < 0) continue;
            const vG = YG * pG[yG + 2] + kG * pG[VG + 2] + UG * pG[fG + 2],
              aG = LG * ZG + GG;
            if (vG <= QG[aG]) continue;
            const cG = Math.max(0, Math.min(bG.width - 1, Math.floor((YG * iG + kG * WG + UG * IG) * bG.width))),
              lG = 4 * (Math.max(0, Math.min(bG.height - 1, Math.floor((YG * CG + kG * mG + UG * FG) * bG.height))) * bG.width + cG);
            bG.pixels[lG + 3] < hG || (QG[aG] = vG, KG[4 * aG] = bG.pixels[lG] * uG, KG[4 * aG + 1] = bG.pixels[lG + 1] * uG, KG[4 * aG + 2] = bG.pixels[lG + 2] * uG, KG[4 * aG + 3] = 255)
          }
      }
      return fG(KG, ZG, wG), KG
    }
    let VG = NaN,
      pG = new Int32Array(0);

    function fG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bG => 0 !== GG[4 * bG + 3];
      const SG = new Uint8Array(bG * bG);
      for (let kG = 0; kG < bG * bG; kG++) SG[kG] = wG(kG) ? 1 : 0;
      const LG = (GG, ZG) => GG >= 0 && ZG >= 0 && GG < bG && ZG < bG && 0 === SG[ZG * bG + GG],
        yG = new Float32Array(bG * bG).fill(1 / 0),
        UG = function(GG) {
          if (GG !== VG) {
            const bG = Math.ceil(GG + 1),
              ZG = [];
            for (let wG = -bG; wG <= bG; wG++)
              for (let SG = -bG; SG <= bG; SG++) {
                const bG = SG * SG + wG * wG;
                bG > 0 && bG < (GG + 1) ** 2 && ZG.push(SG, wG, bG)
              }
            VG = GG, pG = Int32Array.from(ZG)
          }
          return pG
        }(ZG);
      for (let kG = 0; kG < bG; kG++)
        for (let GG = 0; GG < bG; GG++) {
          if (1 === SG[kG * bG + GG] && (LG(GG - 1, kG) || LG(GG + 1, kG) || LG(GG, kG - 1) || LG(GG, kG + 1)))
            for (let ZG = 0; ZG < UG.length; ZG += 3) {
              const wG = GG + UG[ZG],
                SG = kG + UG[ZG + 1];
              if (wG >= 0 && SG >= 0 && wG < bG && SG < bG) {
                const GG = SG * bG + wG;
                yG[GG] = Math.min(yG[GG], UG[ZG + 2])
              }
            }
        }
      for (let YG = 0; YG < bG * bG; YG++) 1 !== SG[YG] && yG[YG] !== 1 / 0 && (GG.set(kG, 4 * YG), GG[4 * YG + 3] = Math.round(255 * Math.min(1, ZG + 1 - Math.sqrt(yG[YG]))))
    }
  },
  36737: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG
    });
    const wG = {
      wait: function(GG) {
        return new Promise((bG => {
          setTimeout(bG, GG)
        }))
      },
      stallMs: 2e4
    };
    class SG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wG;
        this.url = GG, this.options = bG, this.timing = ZG, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = GG
      }
      ready() {
        if (null === this.fetched) {
          const GG = new AbortController;
          this.fetchAbort = GG, this.fetched = this.fetchWithRetries(GG.signal).then((bG => (this.fetchAbort === GG && (this.fetchAbort = null), bG)))
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
      async fetchWithRetries(GG) {
        for (let bG = 0;; bG++) {
          const ZG = new URL(this.url);
          if (bG > 0 && ZG.searchParams.set("cache-bust", `${Date.now()}-${bG}`), await this.fetchWhole(ZG, GG)) return this.scriptUrl = ZG, !0;
          if (bG >= 3 || GG.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** bG), GG.aborted) return !1
        }
      }
      async fetchWhole(GG, bG) {
        const ZG = new AbortController;
        let wG;
        const SG = () => {
            clearTimeout(wG), wG = setTimeout((() => {
              ZG.abort()
            }), this.timing.stallMs)
          },
          LG = () => {
            ZG.abort()
          };
        bG.addEventListener("abort", LG, {
          once: !0
        }), SG();
        try {
          var yG;
          const bG = await fetch(GG, {
            signal: ZG.signal
          });
          if (!bG.ok) return !1;
          const wG = null === (yG = bG.body) || void 0 === yG ? void 0 : yG.getReader();
          if (!wG) return !1;
          for (;;) {
            const {
              done: GG
            } = await wG.read();
            if (GG) return !0;
            SG()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(wG), bG.removeEventListener("abort", LG)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);