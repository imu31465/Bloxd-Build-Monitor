export const id = 50;
export const ids = [50];
export const modules = {
  53818: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => aU,
      pageModelPool: () => kU
    });
    var cU = zU(3176),
      yU = zU(37014),
      QU = zU(41959),
      AU = zU(4800),
      FU = zU(4809),
      oU = zU(3604),
      DU = zU(3217),
      EU = zU(41886),
      YU = zU(41889),
      NU = zU(36981),
      IU = zU(42029);
    class pU {
      constructor(UU) {
        this.opts = UU, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let XU = 0; XU < Math.max(1, UU.count); XU++) this.slots.push({
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
        return this.queue.length + this.slots.filter((UU => null !== UU.job)).length
      }
      build(UU, XU) {
        return null !== this.stopped ? Promise.resolve((0, YU.s)(UU, this.stopped)) : new Promise((zU => {
          this.queue.push({
            word: UU,
            glb: XU,
            attempts: 0,
            resolve: zU
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
        const UU = this.resting && 0 === this.queue.length;
        for (const XU of this.slots) {
          if (null !== this.stopped) return;
          if (XU.gaveUp || XU.starting) continue;
          if (null === XU.worker) {
            UU || this.start(XU);
            continue
          }
          if (UU) {
            null === XU.job && this.end(XU);
            continue
          }
          const zU = null === XU.job ? this.queue.shift() : void 0;
          void 0 !== zU && this.run(XU, XU.worker, zU)
        }
      }
      start(UU) {
        if (UU.losses >= 6) return UU.gaveUp = !0, void(this.slots.every((UU => UU.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        UU.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((XU => {
          let [zU, cU] = XU;
          null === this.stopped && this.launch(UU, zU, cU)
        }), (UU => {
          this.fail(UU)
        }))
      }
      launch(UU, XU, zU) {
        let cU;
        try {
          cU = XU()
        } catch (yU) {
          return void this.lose(UU, `a model worker could not be created (${String(yU)})`)
        }
        UU.worker = cU, UU.timer = new IU.i(3e4, (XU => {
          UU.timer = null, this.lose(UU, `a model worker did not start: ${(0,IU.k)(XU)}`)
        }), void 0, this.opts.visibility), cU.onmessage = XU => {
          let {
            data: zU
          } = XU;
          this.answered(UU, zU)
        }, cU.onerror = XU => {
          this.lose(UU, UU.starting ? `a model worker failed to start: ${XU.message}` : `a model worker failed: ${XU.message}`)
        }, cU.postMessage({
          type: "start",
          module: zU
        })
      }
      end(UU) {
        const XU = UU.worker;
        null !== XU && (XU.onmessage = null, XU.onerror = null, XU.terminate()), UU.worker = null, UU.startedAt = void 0
      }
      clearTimer(UU) {
        var XU;
        null === (XU = UU.timer) || void 0 === XU || XU.cancel(), UU.timer = null
      }
      answered(UU, XU) {
        if ("lost" === XU.type) return void this.lose(UU, XU.reason);
        if (UU.starting) return "started" !== XU.type ? void this.lose(UU, `a model worker answered ${XU.type} before it started`) : (this.clearTimer(UU), UU.starting = !1, UU.startedAt = performance.now(), void this.pump());
        const zU = UU.job;
        null !== zU && "started" !== XU.type && XU.seq === UU.seq && ("trapped" !== XU.type ? (UU.job = null, UU.losses = 0, this.jobLosses = 0, zU.resolve(new Uint8Array(XU.record)), this.pump()) : this.lose(UU, XU.trap))
      }
      run(UU, XU, zU) {
        const cU = this.nextSeq++;
        UU.seq = cU, UU.job = zU, zU.attempts++;
        const yU = zU.glb.slice();
        XU.postMessage({
          type: "job",
          seq: cU,
          word: zU.word,
          glb: yU.buffer
        }, [yU.buffer])
      }
      lose(UU, XU) {
        this.clearTimer(UU), void 0 !== UU.startedAt && performance.now() - UU.startedAt >= 6e4 && (UU.losses = 0), this.end(UU), UU.starting = !1;
        const zU = UU.job;
        UU.job = null, null === zU && UU.losses++, this.opts.onWorkerLost(XU), null !== zU && (zU.attempts < 2 ? this.queue.unshift(zU) : zU.resolve((0, YU.o)(zU.word, XU)), 0 === (zU.word & EU.d) && ++this.jobLosses >= 32) ? this.fail(new Error("model workers were lost on 32 jobs with no file built")) : this.pump()
      }
      fail(UU) {
        if (null !== this.stopped) return;
        this.stopped = null === UU ? "the model workers stopped" : `the model workers could not start: ${(0,NU.l)(UU)}`;
        const XU = this.stopped,
          zU = UU => {
            UU.resolve((0, YU.s)(UU.word, XU))
          };
        for (const yU of this.slots) {
          var cU;
          this.clearTimer(yU), null === (cU = yU.worker) || void 0 === cU || cU.terminate(), yU.worker = null, null !== yU.job && zU(yU.job), yU.job = null
        }
        this.queue.splice(0).forEach(zU), null !== UU && this.opts.onUnavailable(UU)
      }
    }
    const aU = [...cU.t, 5e3, 15e3, 3e4];
    let tU = null;
    const gU = new Set;

    function kU(UU) {
      return gU.add(UU), tU ??= function() {
        let UU = "fix" === (0, FU.o)() || (0, FU.d)() || (0, AU.l)() ? 1 : (XU = navigator.hardwareConcurrency, EU = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, XU > 2 && !(0, DU.v)(EU) ? 2 : 1);
        var XU, EU;
        const YU = new pU({
          module: (0, yU.g)(QU.e, {
            delays: aU,
            onRetry: (UU, XU) => {
              tU === YU && GU((zU => {
                zU.onModuleRetry(UU, XU)
              }))
            }
          }),
          loadWorker: async () => {
            const [UU] = await Promise.all([zU.e(51).then((() => zU(64157))), (0, oU.j)()]);
            return UU.createModelWorker
          },
          count: UU,
          onUnavailable: UU => {
            if (tU === YU) {
              tU = null;
              const XU = function(UU) {
                return UU instanceof cU.e ? [QU.e.url().href] : void 0
              }(UU);
              GU((zU => {
                zU.onUnavailable(UU, XU)
              }))
            }
          },
          onWorkerLost: UU => {
            tU === YU && GU((XU => {
              XU.onWorkerLost(UU)
            }))
          }
        });
        return YU
      }(), {
        pool: tU,
        unlisten: () => {
          gU.delete(UU)
        }
      }
    }

    function GU(UU) {
      for (const zU of [...gU]) try {
        UU(zU)
      } catch (XU) {
        console.error("[pageModelPool] a listener threw", XU)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);