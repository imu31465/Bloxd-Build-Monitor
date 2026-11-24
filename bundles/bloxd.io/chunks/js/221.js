export const id = 221;
export const ids = [221];
export const modules = {
  36422: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => YB,
      g: () => iB,
      h: () => WB
    });
    var TB = ZB(282),
      JB = ZB(105);
    const oB = new(ZB(36430).d)(new URL(ZB.p + ZB.u(3), ZB.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var GB = ZB(1860),
      vB = ZB(2227);
    const kB = 1e4,
      cB = 3e4;
    let nB = null,
      hB = null,
      zB = null,
      FB = !1,
      NB = 0;
    const gB = new Map;
    let qB = null;
    const yB = new Map,
      UB = new Map;

    function WB(BB) {
      const IB = new Promise(((IB, ZB) => {
        const TB = new Image;
        TB.crossOrigin = "anonymous", TB.fetchPriority = "high", TB.onload = () => {
          IB(TB)
        }, TB.onerror = () => {
          ZB(new Error(`A block icon's texture did not load: ${BB.slice(0,100)}`))
        }, TB.src = BB
      }));
      return (0, vB.h)(IB)
    }

    function dB(BB) {
      var IB, ZB;
      FB || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${BB}`), FB = !0, null === (IB = nB) || void 0 === IB || IB.terminate(), nB = null, hB = null, yB.clear(), UB.clear();
      for (const TB of gB.values()) TB(null);
      gB.clear(), null === (ZB = qB) || void 0 === ZB || ZB()
    }

    function CB() {
      return zB ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === TB.d.ios_icon_worker_v1 && (0, JB.isWebKit)()) return;
        try {
          nB = await async function() {
            return await oB.ready(), oB.start()
          }()
        } catch (vB) {
          return void dB(`did not start (${String(vB)})`)
        }
        let BB = () => {};
        const IB = new Promise((IB => {
          BB = IB
        }));
        nB.onmessage = IB => {
          let {
            data: ZB
          } = IB;
          if ("started" === ZB.type) hB = nB, BB();
          else if ("failed" === ZB.type) dB(`failed a draw (${ZB.message})`);
          else {
            var TB, JB;
            null === (TB = gB.get(ZB.id)) || void 0 === TB || TB(ZB.url), gB.delete(ZB.id), null === (JB = qB) || void 0 === JB || JB()
          }
        }, nB.onerror = IB => {
          IB.preventDefault(), dB(`stopped (${IB.message||"its script did not load or run"})`), BB()
        };
        const ZB = `did not start in ${cB/1e3} s`;
        await (0, GB.j)(IB, cB, ZB).catch((() => {
          dB(ZB)
        }))
      }(), zB
    }

    function QB() {
      if (null !== qB || 0 === gB.size) return;
      const BB = new Promise((BB => {
          qB = BB
        })),
        IB = `did not answer in ${kB/1e3} s`;
      (0, GB.j)(BB, kB, IB).then((() => {
        qB = null, QB()
      }), (() => {
        qB = null, dB(IB)
      }))
    }

    function sB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      BB.postMessage(IB, ZB)
    }

    function wB(BB, IB, ZB, TB) {
      let JB = IB.get(ZB);
      return void 0 === JB && (JB = TB().then((async IB => {
        let {
          image: ZB,
          request: TB
        } = IB;
        try {
          const IB = await createImageBitmap(ZB);
          sB(BB, TB(IB), [IB])
        } catch (JB) {
          dB(`could not take an image (${String(JB)})`)
        }
      })), JB.catch((() => {
        IB.get(ZB) === JB && IB.delete(ZB)
      })), IB.set(ZB, JB)), JB
    }
    async function OB(BB, IB) {
      CB();
      const ZB = hB;
      if (null === ZB) return null;
      if (await BB(ZB), hB !== ZB) return null;
      const TB = ++NB;
      return new Promise((BB => {
        gB.set(TB, BB), sB(ZB, IB(TB)), QB()
      }))
    }

    function YB(BB, IB, ZB) {
      return OB((IB => Promise.all([BB.top, BB.left, BB.right].map((BB => function(BB, IB) {
        return wB(BB, yB, IB, (async () => ({
          image: await WB(IB),
          request: BB => ({
            type: "texture",
            url: IB,
            bitmap: BB
          })
        })))
      }(IB, BB))))), (TB => ({
        type: "draw",
        id: TB,
        ...BB,
        size: IB,
        outlineWidth: ZB
      })))
    }

    function iB(BB, IB, ZB, TB) {
      return OB((ZB => function(BB, IB, ZB) {
        return wB(BB, UB, IB, (async () => {
          const {
            texture: BB,
            ...TB
          } = await ZB();
          return {
            image: await WB(BB),
            request: BB => ({
              type: "model",
              name: IB,
              bitmap: BB,
              geometry: TB
            })
          }
        }))
      }(ZB, BB, IB)), (IB => ({
        type: "drawModel",
        id: IB,
        name: BB,
        size: ZB,
        outlineWidth: TB
      })))
    }
  },
  36416: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB,
      h: () => kB,
      j: () => GB,
      n: () => zB,
      o: () => cB
    });
    const TB = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      JB = .6,
      oB = {
        width: 2 * TB.across,
        height: 2 * TB.down + TB.up
      };

    function GB(BB, IB) {
      const ZB = IB > 0 ? IB + 1 : 0,
        GB = BB * JB - IB / TB.across;
      return Math.max(0, Math.min(GB, (BB - 2 * ZB) / oB.height))
    }
    const vB = [15, 15, 15],
      kB = {
        top: 1,
        left: .85,
        right: .7
      };

    function cB(BB, IB, ZB, TB) {
      const {
        vertices: JB,
        uvs: vB,
        indices: kB,
        shades: cB
      } = BB, nB = function(BB, IB) {
        const ZB = GB(BB, IB),
          TB = oB.width * ZB,
          JB = oB.height * ZB;
        return {
          left: (BB - TB) / 2,
          top: (BB - JB) / 2,
          width: TB,
          height: JB
        }
      }(ZB, TB), hB = new Float32Array(JB.length);
      for (let oB = 0; oB < JB.length; oB += 3) hB[oB] = nB.left + JB[oB] * nB.width, hB[oB + 1] = nB.top + JB[oB + 1] * nB.height, hB[oB + 2] = JB[oB + 2];
      const FB = new Float32Array(ZB * ZB).fill(-1 / 0),
        NB = new Uint8ClampedArray(ZB * ZB * 4),
        gB = 255 * BB.alphaCutoff;
      for (let oB = 0; oB < kB.length; oB += 3) {
        const [BB, TB, JB] = [kB[oB], kB[oB + 1], kB[oB + 2]], [GB, nB, zB] = [3 * BB, 3 * TB, 3 * JB], [qB, yB, UB, WB, dB, CB] = [hB[GB], hB[GB + 1], hB[nB], hB[nB + 1], hB[zB], hB[zB + 1]], QB = (UB - qB) * (CB - yB) - (dB - qB) * (WB - yB);
        if (Math.abs(QB) < 1e-9) continue;
        const sB = cB[oB / 3],
          [wB, OB, YB, iB, pB, aB] = [vB[2 * BB], vB[2 * BB + 1], vB[2 * TB], vB[2 * TB + 1], vB[2 * JB], vB[2 * JB + 1]],
          HB = Math.max(0, Math.floor(Math.min(qB, UB, dB))),
          MB = Math.min(ZB - 1, Math.ceil(Math.max(qB, UB, dB))),
          jB = Math.max(0, Math.floor(Math.min(yB, WB, CB))),
          PB = Math.min(ZB - 1, Math.ceil(Math.max(yB, WB, CB)));
        for (let oB = jB; oB <= PB; oB++)
          for (let BB = HB; BB <= MB; BB++) {
            const [TB, JB] = [BB + .5, oB + .5], vB = ((TB - qB) * (CB - yB) - (dB - qB) * (JB - yB)) / QB, kB = ((UB - qB) * (JB - yB) - (TB - qB) * (WB - yB)) / QB, cB = 1 - vB - kB;
            if (cB < 0 || vB < 0 || kB < 0) continue;
            const HB = cB * hB[GB + 2] + vB * hB[nB + 2] + kB * hB[zB + 2],
              MB = oB * ZB + BB;
            if (HB <= FB[MB]) continue;
            const jB = Math.max(0, Math.min(IB.width - 1, Math.floor((cB * wB + vB * YB + kB * pB) * IB.width))),
              PB = 4 * (Math.max(0, Math.min(IB.height - 1, Math.floor((cB * OB + vB * iB + kB * aB) * IB.height))) * IB.width + jB);
            IB.pixels[PB + 3] < gB || (FB[MB] = HB, NB[4 * MB] = IB.pixels[PB] * sB, NB[4 * MB + 1] = IB.pixels[PB + 1] * sB, NB[4 * MB + 2] = IB.pixels[PB + 2] * sB, NB[4 * MB + 3] = 255)
          }
      }
      return zB(NB, ZB, TB), NB
    }
    let nB = NaN,
      hB = new Int32Array(0);

    function zB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : IB => 0 !== BB[4 * IB + 3];
      const JB = new Uint8Array(IB * IB);
      for (let vB = 0; vB < IB * IB; vB++) JB[vB] = TB(vB) ? 1 : 0;
      const oB = (BB, ZB) => BB >= 0 && ZB >= 0 && BB < IB && ZB < IB && 0 === JB[ZB * IB + BB],
        GB = new Float32Array(IB * IB).fill(1 / 0),
        kB = function(BB) {
          if (BB !== nB) {
            const IB = Math.ceil(BB + 1),
              ZB = [];
            for (let TB = -IB; TB <= IB; TB++)
              for (let JB = -IB; JB <= IB; JB++) {
                const IB = JB * JB + TB * TB;
                IB > 0 && IB < (BB + 1) ** 2 && ZB.push(JB, TB, IB)
              }
            nB = BB, hB = Int32Array.from(ZB)
          }
          return hB
        }(ZB);
      for (let vB = 0; vB < IB; vB++)
        for (let BB = 0; BB < IB; BB++) {
          if (1 === JB[vB * IB + BB] && (oB(BB - 1, vB) || oB(BB + 1, vB) || oB(BB, vB - 1) || oB(BB, vB + 1)))
            for (let ZB = 0; ZB < kB.length; ZB += 3) {
              const TB = BB + kB[ZB],
                JB = vB + kB[ZB + 1];
              if (TB >= 0 && JB >= 0 && TB < IB && JB < IB) {
                const BB = JB * IB + TB;
                GB[BB] = Math.min(GB[BB], kB[ZB + 2])
              }
            }
        }
      for (let cB = 0; cB < IB * IB; cB++) 1 !== JB[cB] && GB[cB] !== 1 / 0 && (BB.set(vB, 4 * cB), BB[4 * cB + 3] = Math.round(255 * Math.min(1, ZB + 1 - Math.sqrt(GB[cB]))))
    }
  },
  36430: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB
    });
    const TB = {
      wait: function(BB) {
        return new Promise((IB => {
          setTimeout(IB, BB)
        }))
      },
      stallMs: 2e4
    };
    class JB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TB;
        this.url = BB, this.options = IB, this.timing = ZB, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = BB
      }
      ready() {
        if (null === this.fetched) {
          const BB = new AbortController;
          this.fetchAbort = BB, this.fetched = this.fetchWithRetries(BB.signal).then((IB => (this.fetchAbort === BB && (this.fetchAbort = null), IB)))
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
        for (let IB = 0;; IB++) {
          const ZB = new URL(this.url);
          if (IB > 0 && ZB.searchParams.set("cache-bust", `${Date.now()}-${IB}`), await this.fetchWhole(ZB, BB)) return this.scriptUrl = ZB, !0;
          if (IB >= 3 || BB.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** IB), BB.aborted) return !1
        }
      }
      async fetchWhole(BB, IB) {
        const ZB = new AbortController;
        let TB;
        const JB = () => {
            clearTimeout(TB), TB = setTimeout((() => {
              ZB.abort()
            }), this.timing.stallMs)
          },
          oB = () => {
            ZB.abort()
          };
        IB.addEventListener("abort", oB, {
          once: !0
        }), JB();
        try {
          var GB;
          const IB = await fetch(BB, {
            signal: ZB.signal
          });
          if (!IB.ok) return !1;
          const TB = null === (GB = IB.body) || void 0 === GB ? void 0 : GB.getReader();
          if (!TB) return !1;
          for (;;) {
            const {
              done: BB
            } = await TB.read();
            if (BB) return !0;
            JB()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(TB), IB.removeEventListener("abort", oB)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);