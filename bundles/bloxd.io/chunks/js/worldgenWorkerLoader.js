export const id = 72;
export const ids = [72];
export const modules = {
  36430: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB
    });
    const TB = {
      wait: function(BB) {
        return new Promise((IB => {
          setTimeout(IB, BB)
        }))
      },
      stallMs: 2e4
    };
    class JB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TB;
        this.url = BB, this.options = IB, this.timing = ZB, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = BB
      }
      ready() {
        if (null === this.fetched) {
          const BB = new AbortController;
          this.fetchAbort = BB, this.fetched = this.fetchWithRetries(BB.signal).then((IB => (this.fetchAbort === BB && (this.fetchAbort = null), IB)))
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
      async fetchWithRetries(BB) {
        for (let IB = 0;; IB++) {
          const ZB = new URL(this.url);
          if (IB > 0 && ZB.searchParams.set("cache-bust", `${Date.now()}-${IB}`), await this.fetchWhole(ZB, BB)) return this.scriptUrl = ZB, !0;
          if (IB >= 3 || BB.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** IB), BB.aborted) return !1
        }
      }
      async fetchWhole(BB, IB) {
        const ZB = new AbortController;
        let TB;
        const JB = () => {
            clearTimeout(TB), TB = setTimeout((() => {
              ZB.abort()
            }), this.timing.stallMs)
          },
          oB = () => {
            ZB.abort()
          };
        IB.addEventListener("abort", oB, {
          once: !0
        }), JB();
        try {
          var GB;
          const IB = await fetch(BB, {
            signal: ZB.signal
          });
          if (!IB.ok) return !1;
          const TB = null === (GB = IB.body) || void 0 === GB ? void 0 : GB.getReader();
          if (!TB) return !1;
          for (;;) {
            const {
              done: BB
            } = await TB.read();
            if (BB) return !0;
            JB()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(TB), IB.removeEventListener("abort", oB)
        }
      }
    }
  },
  51106: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      createWorldgenWorker: () => cB,
      prefetchWorldgenWorker: () => vB,
      stopWorldgenWorkerPrefetch: () => kB,
      worldgenWorkerReady: () => GB
    });
    const TB = new(ZB(36430).d)(new URL(ZB.p + ZB.u(71), ZB.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let JB = !1,
      oB = !1;

    function GB() {
      return JB = !0, TB.ready()
    }

    function vB() {
      TB.ready()
    }

    function kB() {
      JB || oB || (oB = !0, TB.cancel())
    }

    function cB() {
      return TB.start()
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);