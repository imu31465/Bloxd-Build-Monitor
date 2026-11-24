export const id = 72;
export const ids = [72];
export const modules = {
  36480: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB
    });
    const QB = {
      wait: function(BB) {
        return new Promise((jB => {
          setTimeout(jB, BB)
        }))
      },
      stallMs: 2e4
    };
    class nB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QB;
        this.url = BB, this.options = jB, this.timing = zB, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = BB
      }
      ready() {
        if (null === this.fetched) {
          const BB = new AbortController;
          this.fetchAbort = BB, this.fetched = this.fetchWithRetries(BB.signal).then((jB => (this.fetchAbort === BB && (this.fetchAbort = null), jB)))
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
        for (let jB = 0;; jB++) {
          const zB = new URL(this.url);
          if (jB > 0 && zB.searchParams.set("cache-bust", `${Date.now()}-${jB}`), await this.fetchWhole(zB, BB)) return this.scriptUrl = zB, !0;
          if (jB >= 3 || BB.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** jB), BB.aborted) return !1
        }
      }
      async fetchWhole(BB, jB) {
        const zB = new AbortController;
        let QB;
        const nB = () => {
            clearTimeout(QB), QB = setTimeout((() => {
              zB.abort()
            }), this.timing.stallMs)
          },
          dB = () => {
            zB.abort()
          };
        jB.addEventListener("abort", dB, {
          once: !0
        }), nB();
        try {
          var IB;
          const jB = await fetch(BB, {
            signal: zB.signal
          });
          if (!jB.ok) return !1;
          const QB = null === (IB = jB.body) || void 0 === IB ? void 0 : IB.getReader();
          if (!QB) return !1;
          for (;;) {
            const {
              done: BB
            } = await QB.read();
            if (BB) return !0;
            nB()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(QB), jB.removeEventListener("abort", dB)
        }
      }
    }
  },
  51188: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      createWorldgenWorker: () => UB,
      prefetchWorldgenWorker: () => NB,
      stopWorldgenWorkerPrefetch: () => uB,
      worldgenWorkerReady: () => IB
    });
    const QB = new(zB(36480).d)(new URL(zB.p + zB.u(71), zB.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let nB = !1,
      dB = !1;

    function IB() {
      return nB = !0, QB.ready()
    }

    function NB() {
      QB.ready()
    }

    function uB() {
      nB || dB || (dB = !0, QB.cancel())
    }

    function UB() {
      return QB.start()
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);