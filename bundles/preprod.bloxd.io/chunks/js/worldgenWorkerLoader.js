export const id = 62;
export const ids = [62];
export const modules = {
  35226: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    const Uy = {
      wait: function(yb) {
        return new Promise((bb => {
          setTimeout(bb, yb)
        }))
      },
      stallMs: 2e4
    };
    class hy {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uy;
        this.url = yb, this.options = bb, this.timing = Wy, this.fetched = null, this.scriptUrl = void 0, this.scriptUrl = yb
      }
      ready() {
        return this.fetched ??= this.fetchWithRetries(), this.fetched
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries() {
        for (let yb = 0;; yb++) {
          const bb = new URL(this.url);
          if (yb > 0 && bb.searchParams.set("cache-bust", `${Date.now()}-${yb}`), await this.fetchWhole(bb)) return void(this.scriptUrl = bb);
          if (yb >= 3) return;
          await this.timing.wait(500 * 2 ** yb)
        }
      }
      async fetchWhole(yb) {
        const bb = new AbortController;
        let Wy;
        const Uy = () => {
          clearTimeout(Wy), Wy = setTimeout((() => {
            bb.abort()
          }), this.timing.stallMs)
        };
        Uy();
        try {
          var hy;
          const Wy = await fetch(yb, {
            signal: bb.signal
          });
          if (!Wy.ok) return !1;
          const fy = null === (hy = Wy.body) || void 0 === hy ? void 0 : hy.getReader();
          if (!fy) return !1;
          for (;;) {
            const {
              done: yb
            } = await fy.read();
            if (yb) return !0;
            Uy()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Wy)
        }
      }
    }
  },
  41870: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      createWorldgenWorker: () => fy,
      worldgenWorkerReady: () => hy
    });
    const Uy = new(Wy(35226).c)(new URL(Wy.p + Wy.u(61), Wy.b), {
      name: "worldgenWorker",
      type: "module"
    });

    function hy() {
      return Uy.ready()
    }

    function fy() {
      return Uy.start()
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);