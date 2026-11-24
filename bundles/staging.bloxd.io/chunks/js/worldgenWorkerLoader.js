export const id = 71;
export const ids = [71];
export const modules = {
  36404: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    const pD = {
      wait: function(DD) {
        return new Promise((zD => {
          setTimeout(zD, DD)
        }))
      },
      stallMs: 2e4
    };
    class sD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pD;
        this.url = DD, this.options = zD, this.timing = wD, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = DD
      }
      ready() {
        if (null === this.fetched) {
          const DD = new AbortController;
          this.fetchAbort = DD, this.fetched = this.fetchWithRetries(DD.signal).then((zD => (this.fetchAbort === DD && (this.fetchAbort = null), zD)))
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
      async fetchWithRetries(DD) {
        for (let zD = 0;; zD++) {
          const wD = new URL(this.url);
          if (zD > 0 && wD.searchParams.set("cache-bust", `${Date.now()}-${zD}`), await this.fetchWhole(wD, DD)) return this.scriptUrl = wD, !0;
          if (zD >= 3 || DD.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** zD), DD.aborted) return !1
        }
      }
      async fetchWhole(DD, zD) {
        const wD = new AbortController;
        let pD;
        const sD = () => {
            clearTimeout(pD), pD = setTimeout((() => {
              wD.abort()
            }), this.timing.stallMs)
          },
          KD = () => {
            wD.abort()
          };
        zD.addEventListener("abort", KD, {
          once: !0
        }), sD();
        try {
          var rD;
          const zD = await fetch(DD, {
            signal: wD.signal
          });
          if (!zD.ok) return !1;
          const pD = null === (rD = zD.body) || void 0 === rD ? void 0 : rD.getReader();
          if (!pD) return !1;
          for (;;) {
            const {
              done: DD
            } = await pD.read();
            if (DD) return !0;
            sD()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(pD), zD.removeEventListener("abort", KD)
        }
      }
    }
  },
  50822: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      createWorldgenWorker: () => gD,
      prefetchWorldgenWorker: () => LD,
      stopWorldgenWorkerPrefetch: () => cD,
      worldgenWorkerReady: () => rD
    });
    const pD = new(wD(36404).e)(new URL(wD.p + wD.u(70), wD.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let sD = !1,
      KD = !1;

    function rD() {
      return sD = !0, pD.ready()
    }

    function LD() {
      pD.ready()
    }

    function cD() {
      sD || KD || (KD = !0, pD.cancel())
    }

    function gD() {
      return pD.start()
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);