export const id = 63;
export const ids = [63];
export const modules = {
  35511: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ
    });
    const FJ = {
      wait: function(JJ) {
        return new Promise((cJ => {
          setTimeout(cJ, JJ)
        }))
      },
      stallMs: 2e4
    };
    class UJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FJ;
        this.url = JJ, this.options = cJ, this.timing = ZJ, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = JJ
      }
      ready() {
        if (null === this.fetched) {
          const JJ = new AbortController;
          this.fetchAbort = JJ, this.fetched = this.fetchWithRetries(JJ.signal).finally((() => {
            this.fetchAbort === JJ && (this.fetchAbort = null)
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
      async fetchWithRetries(JJ) {
        for (let cJ = 0;; cJ++) {
          const ZJ = new URL(this.url);
          if (cJ > 0 && ZJ.searchParams.set("cache-bust", `${Date.now()}-${cJ}`), await this.fetchWhole(ZJ, JJ)) return void(this.scriptUrl = ZJ);
          if (cJ >= 3 || JJ.aborted) return;
          if (await this.timing.wait(500 * 2 ** cJ), JJ.aborted) return
        }
      }
      async fetchWhole(JJ, cJ) {
        const ZJ = new AbortController;
        let FJ;
        const UJ = () => {
            clearTimeout(FJ), FJ = setTimeout((() => {
              ZJ.abort()
            }), this.timing.stallMs)
          },
          eJ = () => {
            ZJ.abort()
          };
        cJ.addEventListener("abort", eJ, {
          once: !0
        }), UJ();
        try {
          var XJ;
          const cJ = await fetch(JJ, {
            signal: ZJ.signal
          });
          if (!cJ.ok) return !1;
          const FJ = null === (XJ = cJ.body) || void 0 === XJ ? void 0 : XJ.getReader();
          if (!FJ) return !1;
          for (;;) {
            const {
              done: JJ
            } = await FJ.read();
            if (JJ) return !0;
            UJ()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(FJ), cJ.removeEventListener("abort", eJ)
        }
      }
    }
  },
  42011: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      createWorldgenWorker: () => jJ,
      prefetchWorldgenWorker: () => AJ,
      stopWorldgenWorkerPrefetch: () => qJ,
      worldgenWorkerReady: () => XJ
    });
    const FJ = new(ZJ(35511).b)(new URL(ZJ.p + ZJ.u(62), ZJ.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let UJ = !1,
      eJ = !1;

    function XJ() {
      return UJ = !0, FJ.ready()
    }

    function AJ() {
      FJ.ready()
    }

    function qJ() {
      UJ || eJ || (eJ = !0, FJ.cancel())
    }

    function jJ() {
      return FJ.start()
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);