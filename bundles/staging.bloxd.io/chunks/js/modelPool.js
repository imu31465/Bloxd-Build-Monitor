export const id = 50;
export const ids = [50];
export const modules = {
  54113: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => qB,
      pageModelPool: () => RB
    });
    var YB = GB(3210),
      DB = GB(36912),
      QB = GB(41882),
      oB = GB(4808),
      jB = GB(4820),
      yB = GB(3656),
      JB = GB(3257),
      MB = GB(41834),
      PB = GB(41842),
      zB = GB(36876),
      lB = GB(41944);
    class pB {
      constructor(BB) {
        this.opts = BB, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let OB = 0; OB < Math.max(1, BB.count); OB++) this.slots.push({
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
        return this.queue.length + this.slots.filter((BB => null !== BB.job)).length
      }
      build(BB, OB) {
        return null !== this.stopped ? Promise.resolve((0, PB.o)(BB, this.stopped)) : new Promise((GB => {
          this.queue.push({
            word: BB,
            glb: OB,
            attempts: 0,
            resolve: GB
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
        const BB = this.resting && 0 === this.queue.length;
        for (const OB of this.slots) {
          if (null !== this.stopped) return;
          if (OB.gaveUp || OB.starting) continue;
          if (null === OB.worker) {
            BB || this.start(OB);
            continue
          }
          if (BB) {
            null === OB.job && this.end(OB);
            continue
          }
          const GB = null === OB.job ? this.queue.shift() : void 0;
          void 0 !== GB && this.run(OB, OB.worker, GB)
        }
      }
      start(BB) {
        if (BB.losses >= 6) return BB.gaveUp = !0, void(this.slots.every((BB => BB.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        BB.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((OB => {
          let [GB, YB] = OB;
          null === this.stopped && this.launch(BB, GB, YB)
        }), (BB => {
          this.fail(BB)
        }))
      }
      launch(BB, OB, GB) {
        let YB;
        try {
          YB = OB()
        } catch (DB) {
          return void this.lose(BB, `a model worker could not be created (${String(DB)})`)
        }
        BB.worker = YB, BB.timer = new lB.g(3e4, (OB => {
          BB.timer = null, this.lose(BB, `a model worker did not start: ${(0,lB.k)(OB)}`)
        }), void 0, this.opts.visibility), YB.onmessage = OB => {
          let {
            data: GB
          } = OB;
          this.answered(BB, GB)
        }, YB.onerror = OB => {
          this.lose(BB, BB.starting ? `a model worker failed to start: ${OB.message}` : `a model worker failed: ${OB.message}`)
        }, YB.postMessage({
          type: "start",
          module: GB
        })
      }
      end(BB) {
        const OB = BB.worker;
        null !== OB && (OB.onmessage = null, OB.onerror = null, OB.terminate()), BB.worker = null, BB.startedAt = void 0
      }
      clearTimer(BB) {
        var OB;
        null === (OB = BB.timer) || void 0 === OB || OB.cancel(), BB.timer = null
      }
      answered(BB, OB) {
        if ("lost" === OB.type) return void this.lose(BB, OB.reason);
        if (BB.starting) return "started" !== OB.type ? void this.lose(BB, `a model worker answered ${OB.type} before it started`) : (this.clearTimer(BB), BB.starting = !1, BB.startedAt = performance.now(), void this.pump());
        const GB = BB.job;
        null !== GB && "started" !== OB.type && OB.seq === BB.seq && ("trapped" !== OB.type ? (BB.job = null, BB.losses = 0, this.jobLosses = 0, GB.resolve(new Uint8Array(OB.record)), this.pump()) : this.lose(BB, OB.trap))
      }
      run(BB, OB, GB) {
        const YB = this.nextSeq++;
        BB.seq = YB, BB.job = GB, GB.attempts++;
        const DB = GB.glb.slice();
        OB.postMessage({
          type: "job",
          seq: YB,
          word: GB.word,
          glb: DB.buffer
        }, [DB.buffer])
      }
      lose(BB, OB) {
        this.clearTimer(BB), void 0 !== BB.startedAt && performance.now() - BB.startedAt >= 6e4 && (BB.losses = 0), this.end(BB), BB.starting = !1;
        const GB = BB.job;
        BB.job = null, null === GB && BB.losses++, this.opts.onWorkerLost(OB), null !== GB && (GB.attempts < 2 ? this.queue.unshift(GB) : GB.resolve((0, PB.m)(GB.word, OB)), 0 === (GB.word & MB.c) && ++this.jobLosses >= 32) ? this.fail(new Error("model workers were lost on 32 jobs with no file built")) : this.pump()
      }
      fail(BB) {
        if (null !== this.stopped) return;
        this.stopped = null === BB ? "the model workers stopped" : `the model workers could not start: ${(0,zB.l)(BB)}`;
        const OB = this.stopped,
          GB = BB => {
            BB.resolve((0, PB.o)(BB.word, OB))
          };
        for (const DB of this.slots) {
          var YB;
          this.clearTimer(DB), null === (YB = DB.worker) || void 0 === YB || YB.terminate(), DB.worker = null, null !== DB.job && GB(DB.job), DB.job = null
        }
        this.queue.splice(0).forEach(GB), null !== BB && this.opts.onUnavailable(BB)
      }
    }
    const qB = [...YB.r, 5e3, 15e3, 3e4];
    let ZB = null;
    const NB = new Set;

    function RB(BB) {
      return NB.add(BB), ZB ??= function() {
        let BB = "fix" === (0, jB.n)() || (0, jB.e)() || (0, oB.i)() ? 1 : (OB = navigator.hardwareConcurrency, MB = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, OB > 2 && !(0, JB.q)(MB) ? 2 : 1);
        var OB, MB;
        const PB = new pB({
          module: (0, DB.g)(QB.d, {
            delays: qB,
            onRetry: (BB, OB) => {
              ZB === PB && WB((GB => {
                GB.onModuleRetry(BB, OB)
              }))
            }
          }),
          loadWorker: async () => {
            const [BB] = await Promise.all([GB.e(51).then((() => GB(64086))), (0, yB.g)()]);
            return BB.createModelWorker
          },
          count: BB,
          onUnavailable: BB => {
            if (ZB === PB) {
              ZB = null;
              const OB = function(BB) {
                return BB instanceof YB.b ? [QB.d.url().href] : void 0
              }(BB);
              WB((GB => {
                GB.onUnavailable(BB, OB)
              }))
            }
          },
          onWorkerLost: BB => {
            ZB === PB && WB((OB => {
              OB.onWorkerLost(BB)
            }))
          }
        });
        return PB
      }(), {
        pool: ZB,
        unlisten: () => {
          NB.delete(BB)
        }
      }
    }

    function WB(BB) {
      for (const GB of [...NB]) try {
        BB(GB)
      } catch (OB) {
        console.error("[pageModelPool] a listener threw", OB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);