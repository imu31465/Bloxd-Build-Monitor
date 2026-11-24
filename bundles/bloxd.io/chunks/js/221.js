export const id = 221;
export const ids = [221];
export const modules = {
  36475: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => qB,
      f: () => fB,
      g: () => LB
    });
    var QB = zB(297),
      nB = zB(106);
    const dB = new(zB(36480).d)(new URL(zB.p + zB.u(3), zB.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var IB = zB(1842),
      NB = zB(2204);
    const uB = 1e4,
      UB = 3e4;
    let aB = null,
      pB = null,
      rB = null,
      sB = !1,
      JB = 0;
    const mB = new Map;
    let yB = null;
    const kB = new Map,
      GB = new Map;

    function LB(BB) {
      const jB = new Promise(((jB, zB) => {
        const QB = new Image;
        QB.crossOrigin = "anonymous", QB.fetchPriority = "high", QB.onload = () => {
          jB(QB)
        }, QB.onerror = () => {
          zB(new Error(`A block icon's texture did not load: ${BB.slice(0,100)}`))
        }, QB.src = BB
      }));
      return (0, NB.f)(jB)
    }

    function gB(BB) {
      var jB, zB;
      sB || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${BB}`), sB = !0, null === (jB = aB) || void 0 === jB || jB.terminate(), aB = null, pB = null, kB.clear(), GB.clear();
      for (const QB of mB.values()) QB(null);
      mB.clear(), null === (zB = yB) || void 0 === zB || zB()
    }

    function tB() {
      return rB ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === QB.c.ios_icon_worker_v1 && (0, nB.isWebKit)()) return;
        try {
          aB = await async function() {
            return await dB.ready(), dB.start()
          }()
        } catch (NB) {
          return void gB(`did not start (${String(NB)})`)
        }
        let BB = () => {};
        const jB = new Promise((jB => {
          BB = jB
        }));
        aB.onmessage = jB => {
          let {
            data: zB
          } = jB;
          if ("started" === zB.type) pB = aB, BB();
          else if ("failed" === zB.type) gB(`failed a draw (${zB.message})`);
          else {
            var QB, nB;
            null === (QB = mB.get(zB.id)) || void 0 === QB || QB(zB.url), mB.delete(zB.id), null === (nB = yB) || void 0 === nB || nB()
          }
        }, aB.onerror = jB => {
          jB.preventDefault(), gB(`stopped (${jB.message||"its script did not load or run"})`), BB()
        };
        const zB = `did not start in ${UB/1e3} s`;
        await (0, IB.j)(jB, UB, zB).catch((() => {
          gB(zB)
        }))
      }(), rB
    }

    function SB() {
      if (null !== yB || 0 === mB.size) return;
      const BB = new Promise((BB => {
          yB = BB
        })),
        jB = `did not answer in ${uB/1e3} s`;
      (0, IB.j)(BB, uB, jB).then((() => {
        yB = null, SB()
      }), (() => {
        yB = null, gB(jB)
      }))
    }

    function MB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      BB.postMessage(jB, zB)
    }

    function EB(BB, jB, zB, QB) {
      let nB = jB.get(zB);
      return void 0 === nB && (nB = QB().then((async jB => {
        let {
          image: zB,
          request: QB
        } = jB;
        try {
          const jB = await createImageBitmap(zB);
          MB(BB, QB(jB), [jB])
        } catch (nB) {
          gB(`could not take an image (${String(nB)})`)
        }
      })), nB.catch((() => {
        jB.get(zB) === nB && jB.delete(zB)
      })), jB.set(zB, nB)), nB
    }
    async function iB(BB, jB) {
      tB();
      const zB = pB;
      if (null === zB) return null;
      if (await BB(zB), pB !== zB) return null;
      const QB = ++JB;
      return new Promise((BB => {
        mB.set(QB, BB), MB(zB, jB(QB)), SB()
      }))
    }

    function qB(BB, jB, zB) {
      return iB((jB => Promise.all([BB.top, BB.left, BB.right].map((BB => function(BB, jB) {
        return EB(BB, kB, jB, (async () => ({
          image: await LB(jB),
          request: BB => ({
            type: "texture",
            url: jB,
            bitmap: BB
          })
        })))
      }(jB, BB))))), (QB => ({
        type: "draw",
        id: QB,
        ...BB,
        size: jB,
        outlineWidth: zB
      })))
    }

    function fB(BB, jB, zB, QB) {
      return iB((zB => function(BB, jB, zB) {
        return EB(BB, GB, jB, (async () => {
          const {
            texture: BB,
            ...QB
          } = await zB();
          return {
            image: await LB(BB),
            request: BB => ({
              type: "model",
              name: jB,
              bitmap: BB,
              geometry: QB
            })
          }
        }))
      }(zB, BB, jB)), (jB => ({
        type: "drawModel",
        id: jB,
        name: BB,
        size: zB,
        outlineWidth: QB
      })))
    }
  },
  36473: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB,
      f: () => uB,
      g: () => IB,
      j: () => rB,
      n: () => UB
    });
    const QB = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      nB = .6,
      dB = {
        width: 2 * QB.across,
        height: 2 * QB.down + QB.up
      };

    function IB(BB, jB) {
      const zB = jB > 0 ? jB + 1 : 0,
        IB = BB * nB - jB / QB.across;
      return Math.max(0, Math.min(IB, (BB - 2 * zB) / dB.height))
    }
    const NB = [15, 15, 15],
      uB = {
        top: 1,
        left: .85,
        right: .7
      };

    function UB(BB, jB, zB, QB) {
      const {
        vertices: nB,
        uvs: NB,
        indices: uB,
        shades: UB
      } = BB, aB = function(BB, jB) {
        const zB = IB(BB, jB),
          QB = dB.width * zB,
          nB = dB.height * zB;
        return {
          left: (BB - QB) / 2,
          top: (BB - nB) / 2,
          width: QB,
          height: nB
        }
      }(zB, QB), pB = new Float32Array(nB.length);
      for (let dB = 0; dB < nB.length; dB += 3) pB[dB] = aB.left + nB[dB] * aB.width, pB[dB + 1] = aB.top + nB[dB + 1] * aB.height, pB[dB + 2] = nB[dB + 2];
      const sB = new Float32Array(zB * zB).fill(-1 / 0),
        JB = new Uint8ClampedArray(zB * zB * 4),
        mB = 255 * BB.alphaCutoff;
      for (let dB = 0; dB < uB.length; dB += 3) {
        const [BB, QB, nB] = [uB[dB], uB[dB + 1], uB[dB + 2]], [IB, aB, rB] = [3 * BB, 3 * QB, 3 * nB], [yB, kB, GB, LB, gB, tB] = [pB[IB], pB[IB + 1], pB[aB], pB[aB + 1], pB[rB], pB[rB + 1]], SB = (GB - yB) * (tB - kB) - (gB - yB) * (LB - kB);
        if (Math.abs(SB) < 1e-9) continue;
        const MB = UB[dB / 3],
          [EB, iB, qB, fB, oB, HB] = [NB[2 * BB], NB[2 * BB + 1], NB[2 * QB], NB[2 * QB + 1], NB[2 * nB], NB[2 * nB + 1]],
          DB = Math.max(0, Math.floor(Math.min(yB, GB, gB))),
          FB = Math.min(zB - 1, Math.ceil(Math.max(yB, GB, gB))),
          YB = Math.max(0, Math.floor(Math.min(kB, LB, tB))),
          VB = Math.min(zB - 1, Math.ceil(Math.max(kB, LB, tB)));
        for (let dB = YB; dB <= VB; dB++)
          for (let BB = DB; BB <= FB; BB++) {
            const [QB, nB] = [BB + .5, dB + .5], NB = ((QB - yB) * (tB - kB) - (gB - yB) * (nB - kB)) / SB, uB = ((GB - yB) * (nB - kB) - (QB - yB) * (LB - kB)) / SB, UB = 1 - NB - uB;
            if (UB < 0 || NB < 0 || uB < 0) continue;
            const DB = UB * pB[IB + 2] + NB * pB[aB + 2] + uB * pB[rB + 2],
              FB = dB * zB + BB;
            if (DB <= sB[FB]) continue;
            const YB = Math.max(0, Math.min(jB.width - 1, Math.floor((UB * EB + NB * qB + uB * oB) * jB.width))),
              VB = 4 * (Math.max(0, Math.min(jB.height - 1, Math.floor((UB * iB + NB * fB + uB * HB) * jB.height))) * jB.width + YB);
            jB.pixels[VB + 3] < mB || (sB[FB] = DB, JB[4 * FB] = jB.pixels[VB] * MB, JB[4 * FB + 1] = jB.pixels[VB + 1] * MB, JB[4 * FB + 2] = jB.pixels[VB + 2] * MB, JB[4 * FB + 3] = 255)
          }
      }
      return rB(JB, zB, QB), JB
    }
    let aB = NaN,
      pB = new Int32Array(0);

    function rB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : jB => 0 !== BB[4 * jB + 3];
      const nB = new Uint8Array(jB * jB);
      for (let NB = 0; NB < jB * jB; NB++) nB[NB] = QB(NB) ? 1 : 0;
      const dB = (BB, zB) => BB >= 0 && zB >= 0 && BB < jB && zB < jB && 0 === nB[zB * jB + BB],
        IB = new Float32Array(jB * jB).fill(1 / 0),
        uB = function(BB) {
          if (BB !== aB) {
            const jB = Math.ceil(BB + 1),
              zB = [];
            for (let QB = -jB; QB <= jB; QB++)
              for (let nB = -jB; nB <= jB; nB++) {
                const jB = nB * nB + QB * QB;
                jB > 0 && jB < (BB + 1) ** 2 && zB.push(nB, QB, jB)
              }
            aB = BB, pB = Int32Array.from(zB)
          }
          return pB
        }(zB);
      for (let NB = 0; NB < jB; NB++)
        for (let BB = 0; BB < jB; BB++) {
          if (1 === nB[NB * jB + BB] && (dB(BB - 1, NB) || dB(BB + 1, NB) || dB(BB, NB - 1) || dB(BB, NB + 1)))
            for (let zB = 0; zB < uB.length; zB += 3) {
              const QB = BB + uB[zB],
                nB = NB + uB[zB + 1];
              if (QB >= 0 && nB >= 0 && QB < jB && nB < jB) {
                const BB = nB * jB + QB;
                IB[BB] = Math.min(IB[BB], uB[zB + 2])
              }
            }
        }
      for (let UB = 0; UB < jB * jB; UB++) 1 !== nB[UB] && IB[UB] !== 1 / 0 && (BB.set(NB, 4 * UB), BB[4 * UB + 3] = Math.round(255 * Math.min(1, zB + 1 - Math.sqrt(IB[UB]))))
    }
  },
  36480: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB
    });
    const QB = {
      wait: function(BB) {
        return new Promise((jB => {
          setTimeout(jB, BB)
        }))
      },
      stallMs: 2e4
    };
    class nB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QB;
        this.url = BB, this.options = jB, this.timing = zB, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = BB
      }
      ready() {
        if (null === this.fetched) {
          const BB = new AbortController;
          this.fetchAbort = BB, this.fetched = this.fetchWithRetries(BB.signal).then((jB => (this.fetchAbort === BB && (this.fetchAbort = null), jB)))
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
      async fetchWithRetries(BB) {
        for (let jB = 0;; jB++) {
          const zB = new URL(this.url);
          if (jB > 0 && zB.searchParams.set("cache-bust", `${Date.now()}-${jB}`), await this.fetchWhole(zB, BB)) return this.scriptUrl = zB, !0;
          if (jB >= 3 || BB.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** jB), BB.aborted) return !1
        }
      }
      async fetchWhole(BB, jB) {
        const zB = new AbortController;
        let QB;
        const nB = () => {
            clearTimeout(QB), QB = setTimeout((() => {
              zB.abort()
            }), this.timing.stallMs)
          },
          dB = () => {
            zB.abort()
          };
        jB.addEventListener("abort", dB, {
          once: !0
        }), nB();
        try {
          var IB;
          const jB = await fetch(BB, {
            signal: zB.signal
          });
          if (!jB.ok) return !1;
          const QB = null === (IB = jB.body) || void 0 === IB ? void 0 : IB.getReader();
          if (!QB) return !1;
          for (;;) {
            const {
              done: BB
            } = await QB.read();
            if (BB) return !0;
            nB()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(QB), jB.removeEventListener("abort", dB)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);