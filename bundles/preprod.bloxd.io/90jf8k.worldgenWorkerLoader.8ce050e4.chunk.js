export const id = 58;
export const ids = [58];
export const modules = {
  41208: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      createWorldgenWorker: () => hF,
      worldgenWorkerReady: () => uF
    });
    const CF = {
      wait: function(FF) {
        return new Promise((WF => {
          setTimeout(WF, FF)
        }))
      },
      stallMs: 2e4
    };
    const AF = new class {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CF;
        this.url = FF, this.options = WF, this.timing = SF, this.fetched = null, this.scriptUrl = void 0, this.scriptUrl = FF
      }
      ready() {
        return this.fetched ??= this.fetchWithRetries(), this.fetched
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries() {
        for (let FF = 0;; FF++) {
          const WF = new URL(this.url);
          if (FF > 0 && WF.searchParams.set("cache-bust", `${Date.now()}-${FF}`), await this.fetchWhole(WF)) return void(this.scriptUrl = WF);
          if (FF >= 3) return;
          await this.timing.wait(500 * 2 ** FF)
        }
      }
      async fetchWhole(FF) {
        const WF = new AbortController;
        let SF;
        const CF = () => {
          clearTimeout(SF), SF = setTimeout((() => {
            WF.abort()
          }), this.timing.stallMs)
        };
        CF();
        try {
          var AF;
          const SF = await fetch(FF, {
            signal: WF.signal
          });
          if (!SF.ok) return !1;
          const uF = null === (AF = SF.body) || void 0 === AF ? void 0 : AF.getReader();
          if (!uF) return !1;
          for (;;) {
            const {
              done: FF
            } = await uF.read();
            if (FF) return !0;
            CF()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(SF)
        }
      }
    }(new URL(SF.p + SF.u(57), SF.b), {
      name: "worldgenWorker",
      type: "module"
    });

    function uF() {
      return AF.ready()
    }

    function hF() {
      return AF.start()
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);