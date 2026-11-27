export const id = 84;
export const ids = [84];
export const modules = {
  37561: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR
    });
    const yR = {
      wait: function(RR) {
        return new Promise((JR => {
          setTimeout(JR, RR)
        }))
      },
      stallMs: 2e4
    };
    class tR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yR;
        this.url = RR, this.options = JR, this.timing = GR, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = RR
      }
      ready() {
        if (null === this.fetched) {
          const RR = new AbortController;
          this.fetchAbort = RR, this.fetched = this.fetchWithRetries(RR.signal).then((JR => (this.fetchAbort === RR && (this.fetchAbort = null), JR)))
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
      async fetchWithRetries(RR) {
        for (let JR = 0;; JR++) {
          const GR = new URL(this.url);
          if (JR > 0 && GR.searchParams.set("cache-bust", `${Date.now()}-${JR}`), await this.fetchWhole(GR, RR)) return this.scriptUrl = GR, !0;
          if (JR >= 3 || RR.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** JR), RR.aborted) return !1
        }
      }
      async fetchWhole(RR, JR) {
        const GR = new AbortController;
        let yR;
        const tR = () => {
            clearTimeout(yR), yR = setTimeout((() => {
              GR.abort()
            }), this.timing.stallMs)
          },
          uR = () => {
            GR.abort()
          };
        JR.addEventListener("abort", uR, {
          once: !0
        }), tR();
        try {
          var ZR;
          const JR = await fetch(RR, {
            signal: GR.signal
          });
          if (!JR.ok) return !1;
          const yR = null === (ZR = JR.body) || void 0 === ZR ? void 0 : ZR.getReader();
          if (!yR) return !1;
          for (;;) {
            const {
              done: RR
            } = await yR.read();
            if (RR) return !0;
            tR()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(yR), JR.removeEventListener("abort", uR)
        }
      }
    }
  },
  54695: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      createWorldgenWorker: () => VR,
      prefetchWorldgenWorker: () => qR,
      stopWorldgenWorkerPrefetch: () => iR,
      worldgenWorkerReady: () => ZR,
      worldgenWorkerScriptUrl: () => fR
    });
    const yR = new(GR(37561).b)(new URL(GR.p + GR.u(83), GR.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let tR = !1,
      uR = !1;

    function ZR() {
      return tR = !0, yR.ready()
    }

    function qR() {
      yR.ready()
    }

    function iR() {
      tR || uR || (uR = !0, yR.cancel())
    }

    function fR() {
      return yR.href
    }

    function VR() {
      return yR.start()
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);