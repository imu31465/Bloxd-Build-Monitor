export const id = 68;
export const ids = [68];
export const modules = {
  35826: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    const FY = {
      wait: function(YY) {
        return new Promise((rY => {
          setTimeout(rY, YY)
        }))
      },
      stallMs: 2e4
    };
    class AY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FY;
        this.url = YY, this.options = rY, this.timing = DY, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = YY
      }
      ready() {
        if (null === this.fetched) {
          const YY = new AbortController;
          this.fetchAbort = YY, this.fetched = this.fetchWithRetries(YY.signal).finally((() => {
            this.fetchAbort === YY && (this.fetchAbort = null)
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
      async fetchWithRetries(YY) {
        for (let rY = 0;; rY++) {
          const DY = new URL(this.url);
          if (rY > 0 && DY.searchParams.set("cache-bust", `${Date.now()}-${rY}`), await this.fetchWhole(DY, YY)) return void(this.scriptUrl = DY);
          if (rY >= 3 || YY.aborted) return;
          if (await this.timing.wait(500 * 2 ** rY), YY.aborted) return
        }
      }
      async fetchWhole(YY, rY) {
        const DY = new AbortController;
        let FY;
        const AY = () => {
            clearTimeout(FY), FY = setTimeout((() => {
              DY.abort()
            }), this.timing.stallMs)
          },
          IY = () => {
            DY.abort()
          };
        rY.addEventListener("abort", IY, {
          once: !0
        }), AY();
        try {
          var RY;
          const rY = await fetch(YY, {
            signal: DY.signal
          });
          if (!rY.ok) return !1;
          const FY = null === (RY = rY.body) || void 0 === RY ? void 0 : RY.getReader();
          if (!FY) return !1;
          for (;;) {
            const {
              done: YY
            } = await FY.read();
            if (YY) return !0;
            AY()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(FY), rY.removeEventListener("abort", IY)
        }
      }
    }
  },
  42400: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      createWorldgenWorker: () => aY,
      prefetchWorldgenWorker: () => OY,
      stopWorldgenWorkerPrefetch: () => gY,
      worldgenWorkerReady: () => RY
    });
    const FY = new(DY(35826).d)(new URL(DY.p + DY.u(67), DY.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let AY = !1,
      IY = !1;

    function RY() {
      return AY = !0, FY.ready()
    }

    function OY() {
      FY.ready()
    }

    function gY() {
      AY || IY || (IY = !0, FY.cancel())
    }

    function aY() {
      return FY.start()
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);