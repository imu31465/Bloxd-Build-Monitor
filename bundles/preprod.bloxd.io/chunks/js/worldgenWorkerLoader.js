export const id = 83;
export const ids = [83];
export const modules = {
  37356: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM
    });
    const OM = {
      wait: function(MM) {
        return new Promise((rM => {
          setTimeout(rM, MM)
        }))
      },
      stallMs: 2e4
    };
    class SM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OM;
        this.url = MM, this.options = rM, this.timing = iM, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = MM
      }
      ready() {
        if (null === this.fetched) {
          const MM = new AbortController;
          this.fetchAbort = MM, this.fetched = this.fetchWithRetries(MM.signal).then((rM => (this.fetchAbort === MM && (this.fetchAbort = null), rM)))
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
      async fetchWithRetries(MM) {
        for (let rM = 0;; rM++) {
          const iM = new URL(this.url);
          if (rM > 0 && iM.searchParams.set("cache-bust", `${Date.now()}-${rM}`), await this.fetchWhole(iM, MM)) return this.scriptUrl = iM, !0;
          if (rM >= 3 || MM.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** rM), MM.aborted) return !1
        }
      }
      async fetchWhole(MM, rM) {
        const iM = new AbortController;
        let OM;
        const SM = () => {
            clearTimeout(OM), OM = setTimeout((() => {
              iM.abort()
            }), this.timing.stallMs)
          },
          jM = () => {
            iM.abort()
          };
        rM.addEventListener("abort", jM, {
          once: !0
        }), SM();
        try {
          var aM;
          const rM = await fetch(MM, {
            signal: iM.signal
          });
          if (!rM.ok) return !1;
          const OM = null === (aM = rM.body) || void 0 === aM ? void 0 : aM.getReader();
          if (!OM) return !1;
          for (;;) {
            const {
              done: MM
            } = await OM.read();
            if (MM) return !0;
            SM()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(OM), rM.removeEventListener("abort", jM)
        }
      }
    }
  },
  53795: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      createWorldgenWorker: () => zM,
      prefetchWorldgenWorker: () => PM,
      stopWorldgenWorkerPrefetch: () => nM,
      worldgenWorkerReady: () => aM,
      worldgenWorkerScriptUrl: () => QM
    });
    const OM = new(iM(37356).b)(new URL(iM.p + iM.u(82), iM.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let SM = !1,
      jM = !1;

    function aM() {
      return SM = !0, OM.ready()
    }

    function PM() {
      OM.ready()
    }

    function nM() {
      SM || jM || (jM = !0, OM.cancel())
    }

    function QM() {
      return OM.href
    }

    function zM() {
      return OM.start()
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);