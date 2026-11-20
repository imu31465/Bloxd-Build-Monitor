export const id = 69;
export const ids = [69];
export const modules = {
  36018: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob
    });
    const Bb = {
      wait: function(bb) {
        return new Promise((ub => {
          setTimeout(ub, bb)
        }))
      },
      stallMs: 2e4
    };
    class Ob {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Bb;
        this.url = bb, this.options = ub, this.timing = hb, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = bb
      }
      ready() {
        if (null === this.fetched) {
          const bb = new AbortController;
          this.fetchAbort = bb, this.fetched = this.fetchWithRetries(bb.signal).finally((() => {
            this.fetchAbort === bb && (this.fetchAbort = null)
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
      async fetchWithRetries(bb) {
        for (let ub = 0;; ub++) {
          const hb = new URL(this.url);
          if (ub > 0 && hb.searchParams.set("cache-bust", `${Date.now()}-${ub}`), await this.fetchWhole(hb, bb)) return void(this.scriptUrl = hb);
          if (ub >= 3 || bb.aborted) return;
          if (await this.timing.wait(500 * 2 ** ub), bb.aborted) return
        }
      }
      async fetchWhole(bb, ub) {
        const hb = new AbortController;
        let Bb;
        const Ob = () => {
            clearTimeout(Bb), Bb = setTimeout((() => {
              hb.abort()
            }), this.timing.stallMs)
          },
          Gb = () => {
            hb.abort()
          };
        ub.addEventListener("abort", Gb, {
          once: !0
        }), Ob();
        try {
          var Ub;
          const ub = await fetch(bb, {
            signal: hb.signal
          });
          if (!ub.ok) return !1;
          const Bb = null === (Ub = ub.body) || void 0 === Ub ? void 0 : Ub.getReader();
          if (!Bb) return !1;
          for (;;) {
            const {
              done: bb
            } = await Bb.read();
            if (bb) return !0;
            Ob()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Bb), ub.removeEventListener("abort", Gb)
        }
      }
    }
  },
  42750: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      createWorldgenWorker: () => Sb,
      prefetchWorldgenWorker: () => Lb,
      stopWorldgenWorkerPrefetch: () => Yb,
      worldgenWorkerReady: () => Ub
    });
    const Bb = new(hb(36018).c)(new URL(hb.p + hb.u(68), hb.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let Ob = !1,
      Gb = !1;

    function Ub() {
      return Ob = !0, Bb.ready()
    }

    function Lb() {
      Bb.ready()
    }

    function Yb() {
      Ob || Gb || (Gb = !0, Bb.cancel())
    }

    function Sb() {
      return Bb.start()
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);