export const id = 240;
export const ids = [240];
export const modules = {
  37556: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => XV,
      e: () => MV,
      h: () => qV
    });
    var JV = xV(313),
      YV = xV(99);
    const UV = new(xV(37560).b)(new URL(xV.p + xV.u(3), xV.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var yV = xV(1900),
      pV = xV(2270);
    const QV = 1e4,
      nV = 3e4;
    let wV = null,
      ZV = null,
      vV = null,
      rV = !1,
      kV = 0;
    const bV = new Map;
    let EV = null;
    const BV = new Map,
      jV = new Map;

    function qV(VV) {
      const eV = new Promise(((eV, xV) => {
        const JV = new Image;
        JV.crossOrigin = "anonymous", JV.fetchPriority = "high", JV.onload = () => {
          eV(JV)
        }, JV.onerror = () => {
          xV(new Error(`A block icon's texture did not load: ${VV.slice(0,100)}`))
        }, JV.src = VV
      }));
      return (0, pV.d)(eV)
    }

    function tV(VV) {
      var eV, xV;
      rV || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${VV}`), rV = !0, null === (eV = wV) || void 0 === eV || eV.terminate(), wV = null, ZV = null, BV.clear(), jV.clear();
      for (const JV of bV.values()) JV(null);
      bV.clear(), null === (xV = EV) || void 0 === xV || xV()
    }

    function FV() {
      return vV ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === JV.b.ios_icon_worker_v1 && (0, YV.isWebKit)()) return;
        try {
          wV = await async function() {
            return await UV.ready(), UV.start()
          }()
        } catch (pV) {
          return void tV(`did not start (${String(pV)})`)
        }
        let VV = () => {};
        const eV = new Promise((eV => {
          VV = eV
        }));
        wV.onmessage = eV => {
          let {
            data: xV
          } = eV;
          if ("started" === xV.type) ZV = wV, VV();
          else if ("failed" === xV.type) tV(`failed a draw (${xV.message})`);
          else {
            var JV, YV;
            null === (JV = bV.get(xV.id)) || void 0 === JV || JV(xV.url), bV.delete(xV.id), null === (YV = EV) || void 0 === YV || YV()
          }
        }, wV.onerror = eV => {
          eV.preventDefault(), tV(`stopped (${eV.message||"its script did not load or run"})`), VV()
        };
        const xV = `did not start in ${nV/1e3} s`;
        await (0, yV.m)(eV, nV, xV).catch((() => {
          tV(xV)
        }))
      }(), vV
    }

    function TV() {
      if (null !== EV || 0 === bV.size) return;
      const VV = new Promise((VV => {
          EV = VV
        })),
        eV = `did not answer in ${QV/1e3} s`;
      (0, yV.m)(VV, QV, eV).then((() => {
        EV = null, TV()
      }), (() => {
        EV = null, tV(eV)
      }))
    }

    function PV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      VV.postMessage(eV, xV)
    }

    function AV(VV, eV, xV, JV) {
      let YV = eV.get(xV);
      return void 0 === YV && (YV = JV().then((async eV => {
        let {
          image: xV,
          request: JV
        } = eV;
        try {
          const eV = await createImageBitmap(xV);
          PV(VV, JV(eV), [eV])
        } catch (YV) {
          tV(`could not take an image (${String(YV)})`)
        }
      })), YV.catch((() => {
        eV.get(xV) === YV && eV.delete(xV)
      })), eV.set(xV, YV)), YV
    }
    async function NV(VV, eV) {
      FV();
      const xV = ZV;
      if (null === xV) return null;
      if (await VV(xV), ZV !== xV) return null;
      const JV = ++kV;
      return new Promise((VV => {
        bV.set(JV, VV), PV(xV, eV(JV)), TV()
      }))
    }

    function XV(VV, eV, xV) {
      return NV((eV => Promise.all([VV.top, VV.left, VV.right].map((VV => function(VV, eV) {
        return AV(VV, BV, eV, (async () => ({
          image: await qV(eV),
          request: VV => ({
            type: "texture",
            url: eV,
            bitmap: VV
          })
        })))
      }(eV, VV))))), (JV => ({
        type: "draw",
        id: JV,
        ...VV,
        size: eV,
        outlineWidth: xV
      })))
    }

    function MV(VV, eV, xV, JV) {
      return NV((xV => function(VV, eV, xV) {
        return AV(VV, jV, eV, (async () => {
          const {
            texture: VV,
            ...JV
          } = await xV();
          return {
            image: await qV(VV),
            request: VV => ({
              type: "model",
              name: eV,
              bitmap: VV,
              geometry: JV
            })
          }
        }))
      }(xV, VV, eV)), (eV => ({
        type: "drawModel",
        id: eV,
        name: VV,
        size: xV,
        outlineWidth: JV
      })))
    }
  },
  37549: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV,
      c: () => QV,
      g: () => yV,
      k: () => vV,
      n: () => nV
    });
    const JV = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      YV = .6,
      UV = {
        width: 2 * JV.across,
        height: 2 * JV.down + JV.up
      };

    function yV(VV, eV) {
      const xV = eV > 0 ? eV + 1 : 0,
        yV = VV * YV - eV / JV.across;
      return Math.max(0, Math.min(yV, (VV - 2 * xV) / UV.height))
    }
    const pV = [15, 15, 15],
      QV = {
        top: 1,
        left: .85,
        right: .7
      };

    function nV(VV, eV, xV, JV) {
      const {
        vertices: YV,
        uvs: pV,
        indices: QV,
        shades: nV
      } = VV, wV = function(VV, eV) {
        const xV = yV(VV, eV),
          JV = UV.width * xV,
          YV = UV.height * xV;
        return {
          left: (VV - JV) / 2,
          top: (VV - YV) / 2,
          width: JV,
          height: YV
        }
      }(xV, JV), ZV = new Float32Array(YV.length);
      for (let UV = 0; UV < YV.length; UV += 3) ZV[UV] = wV.left + YV[UV] * wV.width, ZV[UV + 1] = wV.top + YV[UV + 1] * wV.height, ZV[UV + 2] = YV[UV + 2];
      const rV = new Float32Array(xV * xV).fill(-1 / 0),
        kV = new Uint8ClampedArray(xV * xV * 4),
        bV = 255 * VV.alphaCutoff;
      for (let UV = 0; UV < QV.length; UV += 3) {
        const [VV, JV, YV] = [QV[UV], QV[UV + 1], QV[UV + 2]], [yV, wV, vV] = [3 * VV, 3 * JV, 3 * YV], [EV, BV, jV, qV, tV, FV] = [ZV[yV], ZV[yV + 1], ZV[wV], ZV[wV + 1], ZV[vV], ZV[vV + 1]], TV = (jV - EV) * (FV - BV) - (tV - EV) * (qV - BV);
        if (Math.abs(TV) < 1e-9) continue;
        const PV = nV[UV / 3],
          [AV, NV, XV, MV, zV, GV] = [pV[2 * VV], pV[2 * VV + 1], pV[2 * JV], pV[2 * JV + 1], pV[2 * YV], pV[2 * YV + 1]],
          WV = Math.max(0, Math.floor(Math.min(EV, jV, tV))),
          RV = Math.min(xV - 1, Math.ceil(Math.max(EV, jV, tV))),
          gV = Math.max(0, Math.floor(Math.min(BV, qV, FV))),
          DV = Math.min(xV - 1, Math.ceil(Math.max(BV, qV, FV)));
        for (let UV = gV; UV <= DV; UV++)
          for (let VV = WV; VV <= RV; VV++) {
            const [JV, YV] = [VV + .5, UV + .5], pV = ((JV - EV) * (FV - BV) - (tV - EV) * (YV - BV)) / TV, QV = ((jV - EV) * (YV - BV) - (JV - EV) * (qV - BV)) / TV, nV = 1 - pV - QV;
            if (nV < 0 || pV < 0 || QV < 0) continue;
            const WV = nV * ZV[yV + 2] + pV * ZV[wV + 2] + QV * ZV[vV + 2],
              RV = UV * xV + VV;
            if (WV <= rV[RV]) continue;
            const gV = Math.max(0, Math.min(eV.width - 1, Math.floor((nV * AV + pV * XV + QV * zV) * eV.width))),
              DV = 4 * (Math.max(0, Math.min(eV.height - 1, Math.floor((nV * NV + pV * MV + QV * GV) * eV.height))) * eV.width + gV);
            eV.pixels[DV + 3] < bV || (rV[RV] = WV, kV[4 * RV] = eV.pixels[DV] * PV, kV[4 * RV + 1] = eV.pixels[DV + 1] * PV, kV[4 * RV + 2] = eV.pixels[DV + 2] * PV, kV[4 * RV + 3] = 255)
          }
      }
      return vV(kV, xV, JV), kV
    }
    let wV = NaN,
      ZV = new Int32Array(0);

    function vV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eV => 0 !== VV[4 * eV + 3];
      const YV = new Uint8Array(eV * eV);
      for (let pV = 0; pV < eV * eV; pV++) YV[pV] = JV(pV) ? 1 : 0;
      const UV = (VV, xV) => VV >= 0 && xV >= 0 && VV < eV && xV < eV && 0 === YV[xV * eV + VV],
        yV = new Float32Array(eV * eV).fill(1 / 0),
        QV = function(VV) {
          if (VV !== wV) {
            const eV = Math.ceil(VV + 1),
              xV = [];
            for (let JV = -eV; JV <= eV; JV++)
              for (let YV = -eV; YV <= eV; YV++) {
                const eV = YV * YV + JV * JV;
                eV > 0 && eV < (VV + 1) ** 2 && xV.push(YV, JV, eV)
              }
            wV = VV, ZV = Int32Array.from(xV)
          }
          return ZV
        }(xV);
      for (let pV = 0; pV < eV; pV++)
        for (let VV = 0; VV < eV; VV++) {
          if (1 === YV[pV * eV + VV] && (UV(VV - 1, pV) || UV(VV + 1, pV) || UV(VV, pV - 1) || UV(VV, pV + 1)))
            for (let xV = 0; xV < QV.length; xV += 3) {
              const JV = VV + QV[xV],
                YV = pV + QV[xV + 1];
              if (JV >= 0 && YV >= 0 && JV < eV && YV < eV) {
                const VV = YV * eV + JV;
                yV[VV] = Math.min(yV[VV], QV[xV + 2])
              }
            }
        }
      for (let nV = 0; nV < eV * eV; nV++) 1 !== YV[nV] && yV[nV] !== 1 / 0 && (VV.set(pV, 4 * nV), VV[4 * nV + 3] = Math.round(255 * Math.min(1, xV + 1 - Math.sqrt(yV[nV]))))
    }
  },
  37560: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV
    });
    const JV = {
      wait: function(VV) {
        return new Promise((eV => {
          setTimeout(eV, VV)
        }))
      },
      stallMs: 2e4
    };
    class YV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JV;
        this.url = VV, this.options = eV, this.timing = xV, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = VV
      }
      ready() {
        if (null === this.fetched) {
          const VV = new AbortController;
          this.fetchAbort = VV, this.fetched = this.fetchWithRetries(VV.signal).then((eV => (this.fetchAbort === VV && (this.fetchAbort = null), eV)))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      forgetFailedFetch() {
        this.fetched = null
      }
      get href() {
        return this.url.href
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(VV) {
        for (let eV = 0;; eV++) {
          const xV = new URL(this.url);
          if (eV > 0 && xV.searchParams.set("cache-bust", `${Date.now()}-${eV}`), await this.fetchWhole(xV, VV)) return this.scriptUrl = xV, !0;
          if (eV >= 3 || VV.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** eV), VV.aborted) return !1
        }
      }
      async fetchWhole(VV, eV) {
        const xV = new AbortController;
        let JV;
        const YV = () => {
            clearTimeout(JV), JV = setTimeout((() => {
              xV.abort()
            }), this.timing.stallMs)
          },
          UV = () => {
            xV.abort()
          };
        eV.addEventListener("abort", UV, {
          once: !0
        }), YV();
        try {
          var yV;
          const eV = await fetch(VV, {
            signal: xV.signal
          });
          if (!eV.ok) return !1;
          const JV = null === (yV = eV.body) || void 0 === yV ? void 0 : yV.getReader();
          if (!JV) return !1;
          for (;;) {
            const {
              done: VV
            } = await JV.read();
            if (VV) return !0;
            YV()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(JV), eV.removeEventListener("abort", UV)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);