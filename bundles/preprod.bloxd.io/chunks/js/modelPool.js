export const id = 50;
export const ids = [50];
export const modules = {
  54607: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => QH,
      pageModelPool: () => xH
    });
    var AH = LH(3171),
      rH = LH(37083),
      SH = LH(42172),
      hH = LH(4786),
      tH = LH(4802),
      zH = LH(3595),
      CH = LH(3206),
      EH = LH(42125),
      XH = LH(42129),
      GH = LH(37037),
      YH = LH(42256);
    class uH {
      constructor(HH) {
        this.opts = HH, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let BH = 0; BH < Math.max(1, HH.count); BH++) this.slots.push({
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
        return this.queue.length + this.slots.filter((HH => null !== HH.job)).length
      }
      build(HH, BH) {
        return null !== this.stopped ? Promise.resolve((0, XH.p)(HH, this.stopped)) : new Promise((LH => {
          this.queue.push({
            word: HH,
            glb: BH,
            attempts: 0,
            resolve: LH
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
        const HH = this.resting && 0 === this.queue.length;
        for (const BH of this.slots) {
          if (null !== this.stopped) return;
          if (BH.gaveUp || BH.starting) continue;
          if (null === BH.worker) {
            HH || this.start(BH);
            continue
          }
          if (HH) {
            null === BH.job && this.end(BH);
            continue
          }
          const LH = null === BH.job ? this.queue.shift() : void 0;
          void 0 !== LH && this.run(BH, BH.worker, LH)
        }
      }
      start(HH) {
        if (HH.losses >= 6) return HH.gaveUp = !0, void(this.slots.every((HH => HH.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        HH.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((BH => {
          let [LH, AH] = BH;
          null === this.stopped && this.launch(HH, LH, AH)
        }), (HH => {
          this.fail(HH)
        }))
      }
      launch(HH, BH, LH) {
        let AH;
        try {
          AH = BH()
        } catch (rH) {
          return void this.lose(HH, `a model worker could not be created (${String(rH)})`)
        }
        HH.worker = AH, HH.timer = new YH.j(3e4, (BH => {
          HH.timer = null, this.lose(HH, `a model worker did not start: ${(0,YH.m)(BH)}`)
        }), void 0, this.opts.visibility), AH.onmessage = BH => {
          let {
            data: LH
          } = BH;
          this.answered(HH, LH)
        }, AH.onerror = BH => {
          this.lose(HH, HH.starting ? `a model worker failed to start: ${BH.message}` : `a model worker failed: ${BH.message}`)
        }, AH.postMessage({
          type: "start",
          module: LH
        })
      }
      end(HH) {
        const BH = HH.worker;
        null !== BH && (BH.onmessage = null, BH.onerror = null, BH.terminate()), HH.worker = null, HH.startedAt = void 0
      }
      clearTimer(HH) {
        var BH;
        null === (BH = HH.timer) || void 0 === BH || BH.cancel(), HH.timer = null
      }
      answered(HH, BH) {
        if ("lost" === BH.type) return void this.lose(HH, BH.reason);
        if (HH.starting) return "started" !== BH.type ? void this.lose(HH, `a model worker answered ${BH.type} before it started`) : (this.clearTimer(HH), HH.starting = !1, HH.startedAt = performance.now(), void this.pump());
        const LH = HH.job;
        null !== LH && "started" !== BH.type && BH.seq === HH.seq && ("trapped" !== BH.type ? (HH.job = null, HH.losses = 0, this.jobLosses = 0, LH.resolve(new Uint8Array(BH.record)), this.pump()) : this.lose(HH, BH.trap))
      }
      run(HH, BH, LH) {
        const AH = this.nextSeq++;
        HH.seq = AH, HH.job = LH, LH.attempts++;
        const rH = LH.glb.slice();
        BH.postMessage({
          type: "job",
          seq: AH,
          word: LH.word,
          glb: rH.buffer
        }, [rH.buffer])
      }
      lose(HH, BH) {
        this.clearTimer(HH), void 0 !== HH.startedAt && performance.now() - HH.startedAt >= 6e4 && (HH.losses = 0), this.end(HH), HH.starting = !1;
        const LH = HH.job;
        HH.job = null, null === LH && HH.losses++, this.opts.onWorkerLost(BH), null !== LH && (LH.attempts < 2 ? this.queue.unshift(LH) : LH.resolve((0, XH.m)(LH.word, BH)), 0 === (LH.word & EH.e) && ++this.jobLosses >= 32) ? this.fail(new Error("model workers were lost on 32 jobs with no file built")) : this.pump()
      }
      fail(HH) {
        if (null !== this.stopped) return;
        this.stopped = null === HH ? "the model workers stopped" : `the model workers could not start: ${(0,GH.k)(HH)}`;
        const BH = this.stopped,
          LH = HH => {
            HH.resolve((0, XH.p)(HH.word, BH))
          };
        for (const rH of this.slots) {
          var AH;
          this.clearTimer(rH), null === (AH = rH.worker) || void 0 === AH || AH.terminate(), rH.worker = null, null !== rH.job && LH(rH.job), rH.job = null
        }
        this.queue.splice(0).forEach(LH), null !== HH && this.opts.onUnavailable(HH)
      }
    }
    const QH = [...AH.v, 5e3, 15e3, 3e4];
    let WH = null;
    const MH = new Set;

    function xH(HH) {
      return MH.add(HH), WH ??= function() {
        let HH = "fix" === (0, tH.i)() || (0, tH.e)() || (0, hH.k)() ? 1 : (BH = navigator.hardwareConcurrency, EH = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, BH > 2 && !(0, CH.s)(EH) ? 2 : 1);
        var BH, EH;
        const XH = new uH({
          module: (0, rH.e)(SH.d, {
            delays: QH,
            onRetry: (HH, BH) => {
              WH === XH && vH((LH => {
                LH.onModuleRetry(HH, BH)
              }))
            }
          }),
          loadWorker: async () => {
            const [HH] = await Promise.all([LH.e(51).then((() => LH(64345))), (0, zH.l)()]);
            return HH.createModelWorker
          },
          count: HH,
          onUnavailable: HH => {
            if (WH === XH) {
              WH = null;
              const BH = function(HH) {
                return HH instanceof AH.e ? [SH.d.url().href] : void 0
              }(HH);
              vH((LH => {
                LH.onUnavailable(HH, BH)
              }))
            }
          },
          onWorkerLost: HH => {
            WH === XH && vH((BH => {
              BH.onWorkerLost(HH)
            }))
          }
        });
        return XH
      }(), {
        pool: WH,
        unlisten: () => {
          MH.delete(HH)
        }
      }
    }

    function vH(HH) {
      for (const LH of [...MH]) try {
        HH(LH)
      } catch (BH) {
        console.error("[pageModelPool] a listener threw", BH)
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);