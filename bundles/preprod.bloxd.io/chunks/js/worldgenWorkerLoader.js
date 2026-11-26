export const id = 83;
export const ids = [83];
export const modules = {
  37112: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    const cU = {
      wait: function(UU) {
        return new Promise((XU => {
          setTimeout(XU, UU)
        }))
      },
      stallMs: 2e4
    };
    class yU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cU;
        this.url = UU, this.options = XU, this.timing = zU, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = UU
      }
      ready() {
        if (null === this.fetched) {
          const UU = new AbortController;
          this.fetchAbort = UU, this.fetched = this.fetchWithRetries(UU.signal).then((XU => (this.fetchAbort === UU && (this.fetchAbort = null), XU)))
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
      async fetchWithRetries(UU) {
        for (let XU = 0;; XU++) {
          const zU = new URL(this.url);
          if (XU > 0 && zU.searchParams.set("cache-bust", `${Date.now()}-${XU}`), await this.fetchWhole(zU, UU)) return this.scriptUrl = zU, !0;
          if (XU >= 3 || UU.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** XU), UU.aborted) return !1
        }
      }
      async fetchWhole(UU, XU) {
        const zU = new AbortController;
        let cU;
        const yU = () => {
            clearTimeout(cU), cU = setTimeout((() => {
              zU.abort()
            }), this.timing.stallMs)
          },
          QU = () => {
            zU.abort()
          };
        XU.addEventListener("abort", QU, {
          once: !0
        }), yU();
        try {
          var AU;
          const XU = await fetch(UU, {
            signal: zU.signal
          });
          if (!XU.ok) return !1;
          const cU = null === (AU = XU.body) || void 0 === AU ? void 0 : AU.getReader();
          if (!cU) return !1;
          for (;;) {
            const {
              done: UU
            } = await cU.read();
            if (UU) return !0;
            yU()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(cU), XU.removeEventListener("abort", QU)
        }
      }
    }
  },
  53801: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      createWorldgenWorker: () => EU,
      prefetchWorldgenWorker: () => FU,
      stopWorldgenWorkerPrefetch: () => oU,
      worldgenWorkerReady: () => AU,
      worldgenWorkerScriptUrl: () => DU
    });
    const cU = new(zU(37112).b)(new URL(zU.p + zU.u(82), zU.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let yU = !1,
      QU = !1;

    function AU() {
      return yU = !0, cU.ready()
    }

    function FU() {
      cU.ready()
    }

    function oU() {
      yU || QU || (QU = !0, cU.cancel())
    }

    function DU() {
      return cU.href
    }

    function EU() {
      return cU.start()
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);