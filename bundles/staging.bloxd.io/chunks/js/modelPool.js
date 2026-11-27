export const id = 51;
export const ids = [51];
export const modules = {
  54712: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => LR,
      pageModelPool: () => WR
    });
    var yR = GR(2457),
      tR = GR(37213),
      uR = GR(42212),
      ZR = GR(4102),
      qR = GR(5180),
      iR = GR(5191),
      fR = GR(327),
      VR = GR(4051),
      KR = GR(42352),
      wR = GR(42357),
      rR = GR(37183),
      eR = GR(42472);
    class aR {
      constructor(RR) {
        this.opts = RR, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let JR = 0; JR < Math.max(1, RR.count); JR++) this.slots.push({
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
        return this.queue.length + this.slots.filter((RR => null !== RR.job)).length
      }
      build(RR, JR) {
        return null !== this.stopped ? Promise.resolve((0, wR.t)(RR, this.stopped)) : new Promise((GR => {
          this.queue.push({
            word: RR,
            glb: JR,
            attempts: 0,
            resolve: GR
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
        const RR = this.resting && 0 === this.queue.length;
        for (const JR of this.slots) {
          if (null !== this.stopped) return;
          if (JR.gaveUp || JR.starting) continue;
          if (null === JR.worker) {
            RR || this.start(JR);
            continue
          }
          if (RR) {
            null === JR.job && this.end(JR);
            continue
          }
          const GR = null === JR.job ? this.queue.shift() : void 0;
          void 0 !== GR && this.run(JR, JR.worker, GR)
        }
      }
      start(RR) {
        if (RR.losses >= 6) return RR.gaveUp = !0, void(this.slots.every((RR => RR.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        RR.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((JR => {
          let [GR, yR] = JR;
          null === this.stopped && this.launch(RR, GR, yR)
        }), (RR => {
          this.fail(RR)
        }))
      }
      launch(RR, JR, GR) {
        let yR;
        try {
          yR = JR()
        } catch (tR) {
          return void this.lose(RR, `a model worker could not be created (${String(tR)})`)
        }
        RR.worker = yR, RR.timer = new eR.h(3e4, (JR => {
          RR.timer = null, this.lose(RR, `a model worker did not start: ${(0,eR.l)(JR)}`)
        }), void 0, this.opts.visibility), yR.onmessage = JR => {
          let {
            data: GR
          } = JR;
          this.answered(RR, GR)
        }, yR.onerror = JR => {
          this.lose(RR, RR.starting ? `a model worker failed to start: ${JR.message}` : `a model worker failed: ${JR.message}`)
        }, yR.postMessage({
          type: "start",
          module: GR
        })
      }
      end(RR) {
        const JR = RR.worker;
        null !== JR && (JR.onmessage = null, JR.onerror = null, JR.terminate()), RR.worker = null, RR.startedAt = void 0
      }
      clearTimer(RR) {
        var JR;
        null === (JR = RR.timer) || void 0 === JR || JR.cancel(), RR.timer = null
      }
      answered(RR, JR) {
        if ("lost" === JR.type) return void this.lose(RR, JR.reason);
        if (RR.starting) return "started" !== JR.type ? void this.lose(RR, `a model worker answered ${JR.type} before it started`) : (this.clearTimer(RR), RR.starting = !1, RR.startedAt = performance.now(), void this.pump());
        const GR = RR.job;
        null !== GR && "started" !== JR.type && JR.seq === RR.seq && ("trapped" !== JR.type ? (RR.job = null, RR.losses = 0, this.jobLosses = 0, GR.resolve(new Uint8Array(JR.record)), this.pump()) : this.lose(RR, JR.trap))
      }
      run(RR, JR, GR) {
        const yR = this.nextSeq++;
        RR.seq = yR, RR.job = GR, GR.attempts++;
        const tR = GR.glb.slice();
        JR.postMessage({
          type: "job",
          seq: yR,
          word: GR.word,
          glb: tR.buffer
        }, [tR.buffer])
      }
      lose(RR, JR) {
        this.clearTimer(RR), void 0 !== RR.startedAt && performance.now() - RR.startedAt >= 6e4 && (RR.losses = 0), this.end(RR), RR.starting = !1;
        const GR = RR.job;
        RR.job = null, null === GR && RR.losses++, this.opts.onWorkerLost(JR), null !== GR && (GR.attempts < 2 ? this.queue.unshift(GR) : GR.resolve((0, wR.q)(GR.word, JR)), 0 === (GR.word & KR.b) && ++this.jobLosses >= 32) ? this.fail(new Error("model workers were lost on 32 jobs with no file built")) : this.pump()
      }
      fail(RR) {
        if (null !== this.stopped) return;
        this.stopped = null === RR ? "the model workers stopped" : `the model workers could not start: ${(0,rR.k)(RR)}`;
        const JR = this.stopped,
          GR = RR => {
            RR.resolve((0, wR.t)(RR.word, JR))
          };
        for (const tR of this.slots) {
          var yR;
          this.clearTimer(tR), null === (yR = tR.worker) || void 0 === yR || yR.terminate(), tR.worker = null, null !== tR.job && GR(tR.job), tR.job = null
        }
        this.queue.splice(0).forEach(GR), null !== RR && this.opts.onUnavailable(RR)
      }
    }
    const LR = [...yR.q, 5e3, 15e3, 3e4];
    let nR = null;
    const UR = new Set;

    function WR(RR) {
      return UR.add(RR), nR ??= function() {
        let RR = "fix" === (0, iR.n)() || (0, iR.e)() || (0, qR.k)() || (0, ZR.g)() ? 1 : (JR = navigator.hardwareConcurrency, KR = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, JR > 2 && !(0, VR.v)(KR) ? 2 : 1);
        var JR, KR;
        const wR = new aR({
          module: (0, tR.h)(uR.c, {
            delays: LR,
            onRetry: (RR, JR) => {
              nR === wR && AR((GR => {
                GR.onModuleRetry(RR, JR)
              }))
            }
          }),
          loadWorker: async () => {
            const [RR] = await Promise.all([GR.e(52).then((() => GR(64369))), (0, fR.k)()]);
            return RR.createModelWorker
          },
          count: RR,
          onUnavailable: RR => {
            if (nR === wR) {
              nR = null;
              const JR = function(RR) {
                return RR instanceof yR.d ? [uR.c.url().href] : void 0
              }(RR);
              AR((GR => {
                GR.onUnavailable(RR, JR)
              }))
            }
          },
          onWorkerLost: RR => {
            nR === wR && AR((JR => {
              JR.onWorkerLost(RR)
            }))
          }
        });
        return wR
      }(), {
        pool: nR,
        unlisten: () => {
          UR.delete(RR)
        }
      }
    }

    function AR(RR) {
      for (const GR of [...UR]) try {
        RR(GR)
      } catch (JR) {
        console.error("[pageModelPool] a listener threw", JR)
      }
    }
  },
  42472: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      f: () => yR,
      h: () => qR,
      l: () => ZR
    });
    const yR = 12e4,
      tR = 3e4,
      uR = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: RR => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", RR), () => {
          document.removeEventListener("visibilitychange", RR)
        })
      };

    function ZR(RR) {
      return `it sent no start within ${Math.round(RR)} ms`
    }
    class qR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uR;
        this.timeoutMs = RR, this.onTimeout = JR, this.now = GR, this.visibility = yR, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = yR.listen((() => {
          this.onVisibility()
        })), yR.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const RR = this.step;
        return null === RR ? 0 : Math.min(this.now() - RR.at, RR.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const RR = this.timeoutMs - this.counted;
        if (RR <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const JR = Math.min(RR, 5e3);
        this.step = {
          at: this.now(),
          ms: JR
        }, this.arm(JR, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(RR, JR) {
        this.timer = setTimeout((() => {
          this.timer = null, JR()
        }), RR)
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);