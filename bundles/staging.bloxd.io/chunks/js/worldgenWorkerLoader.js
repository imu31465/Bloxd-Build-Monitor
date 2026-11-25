export const id = 72;
export const ids = [72];
export const modules = {
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
  },
  51455: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      createWorldgenWorker: () => YG,
      prefetchWorldgenWorker: () => kG,
      stopWorldgenWorkerPrefetch: () => UG,
      worldgenWorkerReady: () => yG
    });
    const wG = new(ZG(36737).b)(new URL(ZG.p + ZG.u(71), ZG.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let SG = !1,
      LG = !1;

    function yG() {
      return SG = !0, wG.ready()
    }

    function kG() {
      wG.ready()
    }

    function UG() {
      SG || LG || (LG = !0, wG.cancel())
    }

    function YG() {
      return wG.start()
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);