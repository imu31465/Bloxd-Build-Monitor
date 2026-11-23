export const id = 71;
export const ids = [71];
export const modules = {
  36294: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC
    });
    const QC = {
      wait: function(CC) {
        return new Promise((zC => {
          setTimeout(zC, CC)
        }))
      },
      stallMs: 2e4
    };
    class wC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QC;
        this.url = CC, this.options = zC, this.timing = ZC, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = CC
      }
      ready() {
        if (null === this.fetched) {
          const CC = new AbortController;
          this.fetchAbort = CC, this.fetched = this.fetchWithRetries(CC.signal).then((zC => (this.fetchAbort === CC && (this.fetchAbort = null), zC)))
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
      async fetchWithRetries(CC) {
        for (let zC = 0;; zC++) {
          const ZC = new URL(this.url);
          if (zC > 0 && ZC.searchParams.set("cache-bust", `${Date.now()}-${zC}`), await this.fetchWhole(ZC, CC)) return this.scriptUrl = ZC, !0;
          if (zC >= 3 || CC.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** zC), CC.aborted) return !1
        }
      }
      async fetchWhole(CC, zC) {
        const ZC = new AbortController;
        let QC;
        const wC = () => {
            clearTimeout(QC), QC = setTimeout((() => {
              ZC.abort()
            }), this.timing.stallMs)
          },
          bC = () => {
            ZC.abort()
          };
        zC.addEventListener("abort", bC, {
          once: !0
        }), wC();
        try {
          var nC;
          const zC = await fetch(CC, {
            signal: ZC.signal
          });
          if (!zC.ok) return !1;
          const QC = null === (nC = zC.body) || void 0 === nC ? void 0 : nC.getReader();
          if (!QC) return !1;
          for (;;) {
            const {
              done: CC
            } = await QC.read();
            if (CC) return !0;
            wC()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(QC), zC.removeEventListener("abort", bC)
        }
      }
    }
  },
  50762: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      createWorldgenWorker: () => qC,
      prefetchWorldgenWorker: () => fC,
      stopWorldgenWorkerPrefetch: () => oC,
      worldgenWorkerReady: () => nC
    });
    const QC = new(ZC(36294).d)(new URL(ZC.p + ZC.u(70), ZC.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let wC = !1,
      bC = !1;

    function nC() {
      return wC = !0, QC.ready()
    }

    function fC() {
      QC.ready()
    }

    function oC() {
      wC || bC || (bC = !0, QC.cancel())
    }

    function qC() {
      return QC.start()
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);