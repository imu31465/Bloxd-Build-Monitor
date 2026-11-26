export const id = 83;
export const ids = [83];
export const modules = {
  37085: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB
    });
    const YB = {
      wait: function(BB) {
        return new Promise((OB => {
          setTimeout(OB, BB)
        }))
      },
      stallMs: 2e4
    };
    class DB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YB;
        this.url = BB, this.options = OB, this.timing = GB, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = BB
      }
      ready() {
        if (null === this.fetched) {
          const BB = new AbortController;
          this.fetchAbort = BB, this.fetched = this.fetchWithRetries(BB.signal).then((OB => (this.fetchAbort === BB && (this.fetchAbort = null), OB)))
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
      async fetchWithRetries(BB) {
        for (let OB = 0;; OB++) {
          const GB = new URL(this.url);
          if (OB > 0 && GB.searchParams.set("cache-bust", `${Date.now()}-${OB}`), await this.fetchWhole(GB, BB)) return this.scriptUrl = GB, !0;
          if (OB >= 3 || BB.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** OB), BB.aborted) return !1
        }
      }
      async fetchWhole(BB, OB) {
        const GB = new AbortController;
        let YB;
        const DB = () => {
            clearTimeout(YB), YB = setTimeout((() => {
              GB.abort()
            }), this.timing.stallMs)
          },
          QB = () => {
            GB.abort()
          };
        OB.addEventListener("abort", QB, {
          once: !0
        }), DB();
        try {
          var oB;
          const OB = await fetch(BB, {
            signal: GB.signal
          });
          if (!OB.ok) return !1;
          const YB = null === (oB = OB.body) || void 0 === oB ? void 0 : oB.getReader();
          if (!YB) return !1;
          for (;;) {
            const {
              done: BB
            } = await YB.read();
            if (BB) return !0;
            DB()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(YB), OB.removeEventListener("abort", QB)
        }
      }
    }
  },
  54103: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      createWorldgenWorker: () => MB,
      prefetchWorldgenWorker: () => jB,
      stopWorldgenWorkerPrefetch: () => yB,
      worldgenWorkerReady: () => oB,
      worldgenWorkerScriptUrl: () => JB
    });
    const YB = new(GB(37085).d)(new URL(GB.p + GB.u(82), GB.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let DB = !1,
      QB = !1;

    function oB() {
      return DB = !0, YB.ready()
    }

    function jB() {
      YB.ready()
    }

    function yB() {
      DB || QB || (QB = !0, YB.cancel())
    }

    function JB() {
      return YB.href
    }

    function MB() {
      return YB.start()
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);