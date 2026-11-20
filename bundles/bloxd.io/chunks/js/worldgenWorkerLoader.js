export const id = 68;
export const ids = [68];
export const modules = {
  36068: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb
    });
    const kb = {
      wait: function(bb) {
        return new Promise((cb => {
          setTimeout(cb, bb)
        }))
      },
      stallMs: 2e4
    };
    class Wb {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kb;
        this.url = bb, this.options = cb, this.timing = sb, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = bb
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
        for (let cb = 0;; cb++) {
          const sb = new URL(this.url);
          if (cb > 0 && sb.searchParams.set("cache-bust", `${Date.now()}-${cb}`), await this.fetchWhole(sb, bb)) return void(this.scriptUrl = sb);
          if (cb >= 3 || bb.aborted) return;
          if (await this.timing.wait(500 * 2 ** cb), bb.aborted) return
        }
      }
      async fetchWhole(bb, cb) {
        const sb = new AbortController;
        let kb;
        const Wb = () => {
            clearTimeout(kb), kb = setTimeout((() => {
              sb.abort()
            }), this.timing.stallMs)
          },
          ab = () => {
            sb.abort()
          };
        cb.addEventListener("abort", ab, {
          once: !0
        }), Wb();
        try {
          var Tb;
          const cb = await fetch(bb, {
            signal: sb.signal
          });
          if (!cb.ok) return !1;
          const kb = null === (Tb = cb.body) || void 0 === Tb ? void 0 : Tb.getReader();
          if (!kb) return !1;
          for (;;) {
            const {
              done: bb
            } = await kb.read();
            if (bb) return !0;
            Wb()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(kb), cb.removeEventListener("abort", ab)
        }
      }
    }
  },
  42709: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      createWorldgenWorker: () => Hb,
      prefetchWorldgenWorker: () => Ub,
      stopWorldgenWorkerPrefetch: () => Ib,
      worldgenWorkerReady: () => Tb
    });
    const kb = new(sb(36068).b)(new URL(sb.p + sb.u(67), sb.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let Wb = !1,
      ab = !1;

    function Tb() {
      return Wb = !0, kb.ready()
    }

    function Ub() {
      kb.ready()
    }

    function Ib() {
      Wb || ab || (ab = !0, kb.cancel())
    }

    function Hb() {
      return kb.start()
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);