export const id = 83;
export const ids = [83];
export const modules = {
  37297: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH
    });
    const AH = {
      wait: function(HH) {
        return new Promise((BH => {
          setTimeout(BH, HH)
        }))
      },
      stallMs: 2e4
    };
    class rH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AH;
        this.url = HH, this.options = BH, this.timing = LH, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = HH
      }
      ready() {
        if (null === this.fetched) {
          const HH = new AbortController;
          this.fetchAbort = HH, this.fetched = this.fetchWithRetries(HH.signal).then((BH => (this.fetchAbort === HH && (this.fetchAbort = null), BH)))
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
      async fetchWithRetries(HH) {
        for (let BH = 0;; BH++) {
          const LH = new URL(this.url);
          if (BH > 0 && LH.searchParams.set("cache-bust", `${Date.now()}-${BH}`), await this.fetchWhole(LH, HH)) return this.scriptUrl = LH, !0;
          if (BH >= 3 || HH.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** BH), HH.aborted) return !1
        }
      }
      async fetchWhole(HH, BH) {
        const LH = new AbortController;
        let AH;
        const rH = () => {
            clearTimeout(AH), AH = setTimeout((() => {
              LH.abort()
            }), this.timing.stallMs)
          },
          SH = () => {
            LH.abort()
          };
        BH.addEventListener("abort", SH, {
          once: !0
        }), rH();
        try {
          var hH;
          const BH = await fetch(HH, {
            signal: LH.signal
          });
          if (!BH.ok) return !1;
          const AH = null === (hH = BH.body) || void 0 === hH ? void 0 : hH.getReader();
          if (!AH) return !1;
          for (;;) {
            const {
              done: HH
            } = await AH.read();
            if (HH) return !0;
            rH()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(AH), BH.removeEventListener("abort", SH)
        }
      }
    }
  },
  54598: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      createWorldgenWorker: () => EH,
      prefetchWorldgenWorker: () => tH,
      stopWorldgenWorkerPrefetch: () => zH,
      worldgenWorkerReady: () => hH,
      worldgenWorkerScriptUrl: () => CH
    });
    const AH = new(LH(37297).b)(new URL(LH.p + LH.u(82), LH.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let rH = !1,
      SH = !1;

    function hH() {
      return rH = !0, AH.ready()
    }

    function tH() {
      AH.ready()
    }

    function zH() {
      rH || SH || (SH = !0, AH.cancel())
    }

    function CH() {
      return AH.href
    }

    function EH() {
      return AH.start()
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);