export const id = 51;
export const ids = [51];
export const modules = {
  54853: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => jW,
      pageModelPool: () => sW
    });
    var mW = OW(2388),
      EW = OW(37297),
      NW = OW(42202),
      PW = OW(4010),
      LW = OW(5072),
      cW = OW(5089),
      wW = OW(299),
      tW = OW(3953),
      ZW = OW(42339),
      xW = OW(42344),
      lW = OW(37265),
      AW = OW(42440);
    class bW {
      constructor(WW) {
        this.opts = WW, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let iW = 0; iW < Math.max(1, WW.count); iW++) this.slots.push({
          worker: null,
          starting: !1,
          timer: null,
          job: null,
          seq: 0,
          losses: 0,
          startedAt: void 0,
          gaveUp: !1
        });
        this.pump()
      }
      get pending() {
        return this.queue.length + this.slots.filter((WW => null !== WW.job)).length
      }
      build(WW, iW) {
        return null !== this.stopped ? Promise.resolve((0, xW.l)(WW, this.stopped)) : new Promise((OW => {
          this.queue.push({
            word: WW,
            glb: iW,
            attempts: 0,
            resolve: OW
          }), this.pump()
        }))
      }
      stopWorkers() {
        this.resting = !0, this.pump()
      }
      startWorkers() {
        this.resting = !1, this.pump()
      }
      dispose() {
        this.fail(null)
      }
      pump() {
        const WW = this.resting && 0 === this.queue.length;
        for (const iW of this.slots) {
          if (null !== this.stopped) return;
          if (iW.gaveUp || iW.starting) continue;
          if (null === iW.worker) {
            WW || this.start(iW);
            continue
          }
          if (WW) {
            null === iW.job && this.end(iW);
            continue
          }
          const OW = null === iW.job ? this.queue.shift() : void 0;
          void 0 !== OW && this.run(iW, iW.worker, OW)
        }
      }
      start(WW) {
        if (WW.losses >= 6) return WW.gaveUp = !0, void(this.slots.every((WW => WW.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        WW.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((iW => {
          let [OW, mW] = iW;
          null === this.stopped && this.launch(WW, OW, mW)
        }), (WW => {
          this.fail(WW)
        }))
      }
      launch(WW, iW, OW) {
        let mW;
        try {
          mW = iW()
        } catch (EW) {
          return void this.lose(WW, `a model worker could not be created (${String(EW)})`)
        }
        WW.worker = mW, WW.timer = new AW.f(3e4, (iW => {
          WW.timer = null, this.lose(WW, `a model worker did not start: ${(0,AW.g)(iW)}`)
        }), void 0, this.opts.visibility), mW.onmessage = iW => {
          let {
            data: OW
          } = iW;
          this.answered(WW, OW)
        }, mW.onerror = iW => {
          this.lose(WW, WW.starting ? `a model worker failed to start: ${iW.message}` : `a model worker failed: ${iW.message}`)
        }, mW.postMessage({
          type: "start",
          module: OW
        })
      }
      end(WW) {
        const iW = WW.worker;
        null !== iW && (iW.onmessage = null, iW.onerror = null, iW.terminate()), WW.worker = null, WW.startedAt = void 0
      }
      clearTimer(WW) {
        var iW;
        null === (iW = WW.timer) || void 0 === iW || iW.cancel(), WW.timer = null
      }
      answered(WW, iW) {
        if ("lost" === iW.type) return void this.lose(WW, iW.reason);
        if (WW.starting) return "started" !== iW.type ? void this.lose(WW, `a model worker answered ${iW.type} before it started`) : (this.clearTimer(WW), WW.starting = !1, WW.startedAt = performance.now(), void this.pump());
        const OW = WW.job;
        null !== OW && "started" !== iW.type && iW.seq === WW.seq && ("trapped" !== iW.type ? (WW.job = null, WW.losses = 0, this.jobLosses = 0, OW.resolve(new Uint8Array(iW.record)), this.pump()) : this.lose(WW, iW.trap))
      }
      run(WW, iW, OW) {
        const mW = this.nextSeq++;
        WW.seq = mW, WW.job = OW, OW.attempts++;
        const EW = OW.glb.slice();
        iW.postMessage({
          type: "job",
          seq: mW,
          word: OW.word,
          glb: EW.buffer
        }, [EW.buffer])
      }
      lose(WW, iW) {
        this.clearTimer(WW), void 0 !== WW.startedAt && performance.now() - WW.startedAt >= 6e4 && (WW.losses = 0), this.end(WW), WW.starting = !1;
        const OW = WW.job;
        WW.job = null, null === OW && WW.losses++, this.opts.onWorkerLost(iW), null !== OW && (OW.attempts < 2 ? this.queue.unshift(OW) : OW.resolve((0, xW.j)(OW.word, iW)), 0 === (OW.word & ZW.c) && ++this.jobLosses >= 32) ? this.fail(new Error("model workers were lost on 32 jobs with no file built")) : this.pump()
      }
      fail(WW) {
        if (null !== this.stopped) return;
        this.stopped = null === WW ? "the model workers stopped" : `the model workers could not start: ${(0,lW.m)(WW)}`;
        const iW = this.stopped,
          OW = WW => {
            WW.resolve((0, xW.l)(WW.word, iW))
          };
        for (const EW of this.slots) {
          var mW;
          this.clearTimer(EW), null === (mW = EW.worker) || void 0 === mW || mW.terminate(), EW.worker = null, null !== EW.job && OW(EW.job), EW.job = null
        }
        this.queue.splice(0).forEach(OW), null !== WW && this.opts.onUnavailable(WW)
      }
    }
    const jW = [...mW.t, 5e3, 15e3, 3e4];
    let UW = null;
    const kW = new Set;

    function sW(WW) {
      return kW.add(WW), UW ??= function() {
        let WW = "fix" === (0, cW.n)() || (0, cW.g)() || (0, LW.k)() || (0, PW.f)() ? 1 : (iW = navigator.hardwareConcurrency, ZW = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, iW > 2 && !(0, tW.q)(ZW) ? 2 : 1);
        var iW, ZW;
        const xW = new bW({
          module: (0, EW.f)(NW.c, {
            delays: jW,
            onRetry: (WW, iW) => {
              UW === xW && MW((OW => {
                OW.onModuleRetry(WW, iW)
              }))
            }
          }),
          loadWorker: async () => {
            const [WW] = await Promise.all([OW.e(52).then((() => OW(64629))), (0, wW.p)()]);
            return WW.createModelWorker
          },
          count: WW,
          onUnavailable: WW => {
            if (UW === xW) {
              UW = null;
              const iW = function(WW) {
                return WW instanceof mW.d ? [NW.c.url().href] : void 0
              }(WW);
              MW((OW => {
                OW.onUnavailable(WW, iW)
              }))
            }
          },
          onWorkerLost: WW => {
            UW === xW && MW((iW => {
              iW.onWorkerLost(WW)
            }))
          }
        });
        return xW
      }(), {
        pool: UW,
        unlisten: () => {
          kW.delete(WW)
        }
      }
    }

    function MW(WW) {
      for (const OW of [...kW]) try {
        WW(OW)
      } catch (iW) {
        console.error("[pageModelPool] a listener threw", iW)
      }
    }
  },
  42440: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW,
      d: () => mW,
      f: () => LW,
      g: () => PW
    });
    const mW = 12e4,
      EW = 3e4,
      NW = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: WW => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", WW), () => {
          document.removeEventListener("visibilitychange", WW)
        })
      };

    function PW(WW) {
      return `it sent no start within ${Math.round(WW)} ms`
    }
    class LW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : NW;
        this.timeoutMs = WW, this.onTimeout = iW, this.now = OW, this.visibility = mW, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = mW.listen((() => {
          this.onVisibility()
        })), mW.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const WW = this.step;
        return null === WW ? 0 : Math.min(this.now() - WW.at, WW.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const WW = this.timeoutMs - this.counted;
        if (WW <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const iW = Math.min(WW, 5e3);
        this.step = {
          at: this.now(),
          ms: iW
        }, this.arm(iW, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(WW, iW) {
        this.timer = setTimeout((() => {
          this.timer = null, iW()
        }), WW)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);