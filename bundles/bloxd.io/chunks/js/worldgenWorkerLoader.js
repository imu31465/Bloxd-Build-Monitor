export const id = 83;
export const ids = [83];
export const modules = {
  37192: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    const ye = {
      wait: function(ee) {
        return new Promise((ie => {
          setTimeout(ie, ee)
        }))
      },
      stallMs: 2e4
    };
    class be {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ye;
        this.url = ee, this.options = ie, this.timing = He, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = ee
      }
      ready() {
        if (null === this.fetched) {
          const ee = new AbortController;
          this.fetchAbort = ee, this.fetched = this.fetchWithRetries(ee.signal).then((ie => (this.fetchAbort === ee && (this.fetchAbort = null), ie)))
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
      async fetchWithRetries(ee) {
        for (let ie = 0;; ie++) {
          const He = new URL(this.url);
          if (ie > 0 && He.searchParams.set("cache-bust", `${Date.now()}-${ie}`), await this.fetchWhole(He, ee)) return this.scriptUrl = He, !0;
          if (ie >= 3 || ee.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** ie), ee.aborted) return !1
        }
      }
      async fetchWhole(ee, ie) {
        const He = new AbortController;
        let ye;
        const be = () => {
            clearTimeout(ye), ye = setTimeout((() => {
              He.abort()
            }), this.timing.stallMs)
          },
          Me = () => {
            He.abort()
          };
        ie.addEventListener("abort", Me, {
          once: !0
        }), be();
        try {
          var Ke;
          const ie = await fetch(ee, {
            signal: He.signal
          });
          if (!ie.ok) return !1;
          const ye = null === (Ke = ie.body) || void 0 === Ke ? void 0 : Ke.getReader();
          if (!ye) return !1;
          for (;;) {
            const {
              done: ee
            } = await ye.read();
            if (ee) return !0;
            be()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(ye), ie.removeEventListener("abort", Me)
        }
      }
    }
  },
  54302: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      createWorldgenWorker: () => oe,
      prefetchWorldgenWorker: () => Ue,
      stopWorldgenWorkerPrefetch: () => Fe,
      worldgenWorkerReady: () => Ke,
      worldgenWorkerScriptUrl: () => Je
    });
    const ye = new(He(37192).b)(new URL(He.p + He.u(82), He.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let be = !1,
      Me = !1;

    function Ke() {
      return be = !0, ye.ready()
    }

    function Ue() {
      ye.ready()
    }

    function Fe() {
      be || Me || (Me = !0, ye.cancel())
    }

    function Je() {
      return ye.href
    }

    function oe() {
      return ye.start()
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);