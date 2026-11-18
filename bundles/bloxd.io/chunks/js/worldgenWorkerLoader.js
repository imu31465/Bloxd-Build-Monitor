export const id = 63;
export const ids = [63];
export const modules = {
  35430: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB
    });
    const VB = {
      wait: function(BB) {
        return new Promise((TB => {
          setTimeout(TB, BB)
        }))
      },
      stallMs: 2e4
    };
    class yB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VB;
        this.url = BB, this.options = TB, this.timing = dB, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = BB
      }
      ready() {
        if (null === this.fetched) {
          const BB = new AbortController;
          this.fetchAbort = BB, this.fetched = this.fetchWithRetries(BB.signal).finally((() => {
            this.fetchAbort === BB && (this.fetchAbort = null)
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
      async fetchWithRetries(BB) {
        for (let TB = 0;; TB++) {
          const dB = new URL(this.url);
          if (TB > 0 && dB.searchParams.set("cache-bust", `${Date.now()}-${TB}`), await this.fetchWhole(dB, BB)) return void(this.scriptUrl = dB);
          if (TB >= 3 || BB.aborted) return;
          if (await this.timing.wait(500 * 2 ** TB), BB.aborted) return
        }
      }
      async fetchWhole(BB, TB) {
        const dB = new AbortController;
        let VB;
        const yB = () => {
            clearTimeout(VB), VB = setTimeout((() => {
              dB.abort()
            }), this.timing.stallMs)
          },
          pB = () => {
            dB.abort()
          };
        TB.addEventListener("abort", pB, {
          once: !0
        }), yB();
        try {
          var lB;
          const TB = await fetch(BB, {
            signal: dB.signal
          });
          if (!TB.ok) return !1;
          const VB = null === (lB = TB.body) || void 0 === lB ? void 0 : lB.getReader();
          if (!VB) return !1;
          for (;;) {
            const {
              done: BB
            } = await VB.read();
            if (BB) return !0;
            yB()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(VB), TB.removeEventListener("abort", pB)
        }
      }
    }
  },
  42059: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      createWorldgenWorker: () => gB,
      prefetchWorldgenWorker: () => JB,
      stopWorldgenWorkerPrefetch: () => YB,
      worldgenWorkerReady: () => lB
    });
    const VB = new(dB(35430).c)(new URL(dB.p + dB.u(62), dB.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let yB = !1,
      pB = !1;

    function lB() {
      return yB = !0, VB.ready()
    }

    function JB() {
      VB.ready()
    }

    function YB() {
      yB || pB || (pB = !0, VB.cancel())
    }

    function gB() {
      return VB.start()
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);