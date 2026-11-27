export const id = 84;
export const ids = [84];
export const modules = {
  37646: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    const mW = {
      wait: function(WW) {
        return new Promise((iW => {
          setTimeout(iW, WW)
        }))
      },
      stallMs: 2e4
    };
    class EW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mW;
        this.url = WW, this.options = iW, this.timing = OW, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = WW
      }
      ready() {
        if (null === this.fetched) {
          const WW = new AbortController;
          this.fetchAbort = WW, this.fetched = this.fetchWithRetries(WW.signal).then((iW => (this.fetchAbort === WW && (this.fetchAbort = null), iW)))
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
      async fetchWithRetries(WW) {
        for (let iW = 0;; iW++) {
          const OW = new URL(this.url);
          if (iW > 0 && OW.searchParams.set("cache-bust", `${Date.now()}-${iW}`), await this.fetchWhole(OW, WW)) return this.scriptUrl = OW, !0;
          if (iW >= 3 || WW.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** iW), WW.aborted) return !1
        }
      }
      async fetchWhole(WW, iW) {
        const OW = new AbortController;
        let mW;
        const EW = () => {
            clearTimeout(mW), mW = setTimeout((() => {
              OW.abort()
            }), this.timing.stallMs)
          },
          NW = () => {
            OW.abort()
          };
        iW.addEventListener("abort", NW, {
          once: !0
        }), EW();
        try {
          var PW;
          const iW = await fetch(WW, {
            signal: OW.signal
          });
          if (!iW.ok) return !1;
          const mW = null === (PW = iW.body) || void 0 === PW ? void 0 : PW.getReader();
          if (!mW) return !1;
          for (;;) {
            const {
              done: WW
            } = await mW.read();
            if (WW) return !0;
            EW()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(mW), iW.removeEventListener("abort", NW)
        }
      }
    }
  },
  54840: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      createWorldgenWorker: () => tW,
      prefetchWorldgenWorker: () => LW,
      stopWorldgenWorkerPrefetch: () => cW,
      worldgenWorkerReady: () => PW,
      worldgenWorkerScriptUrl: () => wW
    });
    const mW = new(OW(37646).e)(new URL(OW.p + OW.u(83), OW.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let EW = !1,
      NW = !1;

    function PW() {
      return EW = !0, mW.ready()
    }

    function LW() {
      mW.ready()
    }

    function cW() {
      EW || NW || (NW = !0, mW.cancel())
    }

    function wW() {
      return mW.href
    }

    function tW() {
      return mW.start()
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);