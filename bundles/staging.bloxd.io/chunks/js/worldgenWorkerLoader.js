export const id = 83;
export const ids = [83];
export const modules = {
  37560: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV
    });
    const JV = {
      wait: function(VV) {
        return new Promise((eV => {
          setTimeout(eV, VV)
        }))
      },
      stallMs: 2e4
    };
    class YV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JV;
        this.url = VV, this.options = eV, this.timing = xV, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = VV
      }
      ready() {
        if (null === this.fetched) {
          const VV = new AbortController;
          this.fetchAbort = VV, this.fetched = this.fetchWithRetries(VV.signal).then((eV => (this.fetchAbort === VV && (this.fetchAbort = null), eV)))
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
      async fetchWithRetries(VV) {
        for (let eV = 0;; eV++) {
          const xV = new URL(this.url);
          if (eV > 0 && xV.searchParams.set("cache-bust", `${Date.now()}-${eV}`), await this.fetchWhole(xV, VV)) return this.scriptUrl = xV, !0;
          if (eV >= 3 || VV.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** eV), VV.aborted) return !1
        }
      }
      async fetchWhole(VV, eV) {
        const xV = new AbortController;
        let JV;
        const YV = () => {
            clearTimeout(JV), JV = setTimeout((() => {
              xV.abort()
            }), this.timing.stallMs)
          },
          UV = () => {
            xV.abort()
          };
        eV.addEventListener("abort", UV, {
          once: !0
        }), YV();
        try {
          var yV;
          const eV = await fetch(VV, {
            signal: xV.signal
          });
          if (!eV.ok) return !1;
          const JV = null === (yV = eV.body) || void 0 === yV ? void 0 : yV.getReader();
          if (!JV) return !1;
          for (;;) {
            const {
              done: VV
            } = await JV.read();
            if (VV) return !0;
            YV()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(JV), eV.removeEventListener("abort", UV)
        }
      }
    }
  },
  53996: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      createWorldgenWorker: () => wV,
      prefetchWorldgenWorker: () => pV,
      stopWorldgenWorkerPrefetch: () => QV,
      worldgenWorkerReady: () => yV,
      worldgenWorkerScriptUrl: () => nV
    });
    const JV = new(xV(37560).b)(new URL(xV.p + xV.u(82), xV.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let YV = !1,
      UV = !1;

    function yV() {
      return YV = !0, JV.ready()
    }

    function pV() {
      JV.ready()
    }

    function QV() {
      YV || UV || (UV = !0, JV.cancel())
    }

    function nV() {
      return JV.href
    }

    function wV() {
      return JV.start()
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);