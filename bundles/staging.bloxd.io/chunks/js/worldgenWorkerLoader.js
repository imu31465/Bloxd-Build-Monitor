export const id = 68;
export const ids = [68];
export const modules = {
  35408: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT
    });
    const iT = {
      wait: function(TT) {
        return new Promise((oT => {
          setTimeout(oT, TT)
        }))
      },
      stallMs: 2e4
    };
    class zT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iT;
        this.url = TT, this.options = oT, this.timing = IT, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = TT
      }
      ready() {
        if (null === this.fetched) {
          const TT = new AbortController;
          this.fetchAbort = TT, this.fetched = this.fetchWithRetries(TT.signal).finally((() => {
            this.fetchAbort === TT && (this.fetchAbort = null)
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
      async fetchWithRetries(TT) {
        for (let oT = 0;; oT++) {
          const IT = new URL(this.url);
          if (oT > 0 && IT.searchParams.set("cache-bust", `${Date.now()}-${oT}`), await this.fetchWhole(IT, TT)) return void(this.scriptUrl = IT);
          if (oT >= 3 || TT.aborted) return;
          if (await this.timing.wait(500 * 2 ** oT), TT.aborted) return
        }
      }
      async fetchWhole(TT, oT) {
        const IT = new AbortController;
        let iT;
        const zT = () => {
            clearTimeout(iT), iT = setTimeout((() => {
              IT.abort()
            }), this.timing.stallMs)
          },
          kT = () => {
            IT.abort()
          };
        oT.addEventListener("abort", kT, {
          once: !0
        }), zT();
        try {
          var WT;
          const oT = await fetch(TT, {
            signal: IT.signal
          });
          if (!oT.ok) return !1;
          const iT = null === (WT = oT.body) || void 0 === WT ? void 0 : WT.getReader();
          if (!iT) return !1;
          for (;;) {
            const {
              done: TT
            } = await iT.read();
            if (TT) return !0;
            zT()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(iT), oT.removeEventListener("abort", kT)
        }
      }
    }
  },
  42151: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      createWorldgenWorker: () => FT,
      prefetchWorldgenWorker: () => XT,
      stopWorldgenWorkerPrefetch: () => BT,
      worldgenWorkerReady: () => WT
    });
    const iT = new(IT(35408).e)(new URL(IT.p + IT.u(67), IT.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let zT = !1,
      kT = !1;

    function WT() {
      return zT = !0, iT.ready()
    }

    function XT() {
      iT.ready()
    }

    function BT() {
      zT || kT || (kT = !0, iT.cancel())
    }

    function FT() {
      return iT.start()
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);