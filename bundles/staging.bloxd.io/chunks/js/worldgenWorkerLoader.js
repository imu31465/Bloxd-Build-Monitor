export const id = 72;
export const ids = [72];
export const modules = {
  36480: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT
    });
    const WT = {
      wait: function(TT) {
        return new Promise((UT => {
          setTimeout(UT, TT)
        }))
      },
      stallMs: 2e4
    };
    class zT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WT;
        this.url = TT, this.options = UT, this.timing = mT, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = TT
      }
      ready() {
        if (null === this.fetched) {
          const TT = new AbortController;
          this.fetchAbort = TT, this.fetched = this.fetchWithRetries(TT.signal).then((UT => (this.fetchAbort === TT && (this.fetchAbort = null), UT)))
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
      async fetchWithRetries(TT) {
        for (let UT = 0;; UT++) {
          const mT = new URL(this.url);
          if (UT > 0 && mT.searchParams.set("cache-bust", `${Date.now()}-${UT}`), await this.fetchWhole(mT, TT)) return this.scriptUrl = mT, !0;
          if (UT >= 3 || TT.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** UT), TT.aborted) return !1
        }
      }
      async fetchWhole(TT, UT) {
        const mT = new AbortController;
        let WT;
        const zT = () => {
            clearTimeout(WT), WT = setTimeout((() => {
              mT.abort()
            }), this.timing.stallMs)
          },
          MT = () => {
            mT.abort()
          };
        UT.addEventListener("abort", MT, {
          once: !0
        }), zT();
        try {
          var gT;
          const UT = await fetch(TT, {
            signal: mT.signal
          });
          if (!UT.ok) return !1;
          const WT = null === (gT = UT.body) || void 0 === gT ? void 0 : gT.getReader();
          if (!WT) return !1;
          for (;;) {
            const {
              done: TT
            } = await WT.read();
            if (TT) return !0;
            zT()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(WT), UT.removeEventListener("abort", MT)
        }
      }
    }
  },
  51163: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      createWorldgenWorker: () => kT,
      prefetchWorldgenWorker: () => nT,
      stopWorldgenWorkerPrefetch: () => HT,
      worldgenWorkerReady: () => gT
    });
    const WT = new(mT(36480).b)(new URL(mT.p + mT.u(71), mT.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let zT = !1,
      MT = !1;

    function gT() {
      return zT = !0, WT.ready()
    }

    function nT() {
      WT.ready()
    }

    function HT() {
      zT || MT || (MT = !0, WT.cancel())
    }

    function kT() {
      return WT.start()
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);