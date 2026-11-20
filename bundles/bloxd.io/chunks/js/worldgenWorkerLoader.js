export const id = 68;
export const ids = [68];
export const modules = {
  35850: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb
    });
    const Ab = {
      wait: function(bb) {
        return new Promise((ab => {
          setTimeout(ab, bb)
        }))
      },
      stallMs: 2e4
    };
    class Mb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ab;
        this.url = bb, this.options = ab, this.timing = Ub, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = bb
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
        for (let ab = 0;; ab++) {
          const Ub = new URL(this.url);
          if (ab > 0 && Ub.searchParams.set("cache-bust", `${Date.now()}-${ab}`), await this.fetchWhole(Ub, bb)) return void(this.scriptUrl = Ub);
          if (ab >= 3 || bb.aborted) return;
          if (await this.timing.wait(500 * 2 ** ab), bb.aborted) return
        }
      }
      async fetchWhole(bb, ab) {
        const Ub = new AbortController;
        let Ab;
        const Mb = () => {
            clearTimeout(Ab), Ab = setTimeout((() => {
              Ub.abort()
            }), this.timing.stallMs)
          },
          Tb = () => {
            Ub.abort()
          };
        ab.addEventListener("abort", Tb, {
          once: !0
        }), Mb();
        try {
          var Eb;
          const ab = await fetch(bb, {
            signal: Ub.signal
          });
          if (!ab.ok) return !1;
          const Ab = null === (Eb = ab.body) || void 0 === Eb ? void 0 : Eb.getReader();
          if (!Ab) return !1;
          for (;;) {
            const {
              done: bb
            } = await Ab.read();
            if (bb) return !0;
            Mb()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Ab), ab.removeEventListener("abort", Tb)
        }
      }
    }
  },
  42463: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      createWorldgenWorker: () => eb,
      prefetchWorldgenWorker: () => Yb,
      stopWorldgenWorkerPrefetch: () => Bb,
      worldgenWorkerReady: () => Eb
    });
    const Ab = new(Ub(35850).d)(new URL(Ub.p + Ub.u(67), Ub.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let Mb = !1,
      Tb = !1;

    function Eb() {
      return Mb = !0, Ab.ready()
    }

    function Yb() {
      Ab.ready()
    }

    function Bb() {
      Mb || Tb || (Tb = !0, Ab.cancel())
    }

    function eb() {
      return Ab.start()
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);