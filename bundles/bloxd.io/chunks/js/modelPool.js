export const id = 50;
export const ids = [50];
export const modules = {
  54314: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => Te,
      pageModelPool: () => ze
    });
    var ye = He(3101),
      be = He(37003),
      Me = He(41955),
      Ke = He(4771),
      Ue = He(4781),
      Fe = He(3565),
      Je = He(3136),
      oe = He(41925),
      Re = He(41933),
      ke = He(36965),
      qe = He(42021);
    class fe {
      constructor(ee) {
        this.opts = ee, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let ie = 0; ie < Math.max(1, ee.count); ie++) this.slots.push({
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
        return this.queue.length + this.slots.filter((ee => null !== ee.job)).length
      }
      build(ee, ie) {
        return null !== this.stopped ? Promise.resolve((0, Re.s)(ee, this.stopped)) : new Promise((He => {
          this.queue.push({
            word: ee,
            glb: ie,
            attempts: 0,
            resolve: He
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
        const ee = this.resting && 0 === this.queue.length;
        for (const ie of this.slots) {
          if (null !== this.stopped) return;
          if (ie.gaveUp || ie.starting) continue;
          if (null === ie.worker) {
            ee || this.start(ie);
            continue
          }
          if (ee) {
            null === ie.job && this.end(ie);
            continue
          }
          const He = null === ie.job ? this.queue.shift() : void 0;
          void 0 !== He && this.run(ie, ie.worker, He)
        }
      }
      start(ee) {
        if (ee.losses >= 6) return ee.gaveUp = !0, void(this.slots.every((ee => ee.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        ee.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((ie => {
          let [He, ye] = ie;
          null === this.stopped && this.launch(ee, He, ye)
        }), (ee => {
          this.fail(ee)
        }))
      }
      launch(ee, ie, He) {
        let ye;
        try {
          ye = ie()
        } catch (be) {
          return void this.lose(ee, `a model worker could not be created (${String(be)})`)
        }
        ee.worker = ye, ee.timer = new qe.h(3e4, (ie => {
          ee.timer = null, this.lose(ee, `a model worker did not start: ${(0,qe.l)(ie)}`)
        }), void 0, this.opts.visibility), ye.onmessage = ie => {
          let {
            data: He
          } = ie;
          this.answered(ee, He)
        }, ye.onerror = ie => {
          this.lose(ee, ee.starting ? `a model worker failed to start: ${ie.message}` : `a model worker failed: ${ie.message}`)
        }, ye.postMessage({
          type: "start",
          module: He
        })
      }
      end(ee) {
        const ie = ee.worker;
        null !== ie && (ie.onmessage = null, ie.onerror = null, ie.terminate()), ee.worker = null, ee.startedAt = void 0
      }
      clearTimer(ee) {
        var ie;
        null === (ie = ee.timer) || void 0 === ie || ie.cancel(), ee.timer = null
      }
      answered(ee, ie) {
        if ("lost" === ie.type) return void this.lose(ee, ie.reason);
        if (ee.starting) return "started" !== ie.type ? void this.lose(ee, `a model worker answered ${ie.type} before it started`) : (this.clearTimer(ee), ee.starting = !1, ee.startedAt = performance.now(), void this.pump());
        const He = ee.job;
        null !== He && "started" !== ie.type && ie.seq === ee.seq && ("trapped" !== ie.type ? (ee.job = null, ee.losses = 0, this.jobLosses = 0, He.resolve(new Uint8Array(ie.record)), this.pump()) : this.lose(ee, ie.trap))
      }
      run(ee, ie, He) {
        const ye = this.nextSeq++;
        ee.seq = ye, ee.job = He, He.attempts++;
        const be = He.glb.slice();
        ie.postMessage({
          type: "job",
          seq: ye,
          word: He.word,
          glb: be.buffer
        }, [be.buffer])
      }
      lose(ee, ie) {
        this.clearTimer(ee), void 0 !== ee.startedAt && performance.now() - ee.startedAt >= 6e4 && (ee.losses = 0), this.end(ee), ee.starting = !1;
        const He = ee.job;
        ee.job = null, null === He && ee.losses++, this.opts.onWorkerLost(ie), null !== He && (He.attempts < 2 ? this.queue.unshift(He) : He.resolve((0, Re.q)(He.word, ie)), 0 === (He.word & oe.e) && ++this.jobLosses >= 32) ? this.fail(new Error("model workers were lost on 32 jobs with no file built")) : this.pump()
      }
      fail(ee) {
        if (null !== this.stopped) return;
        this.stopped = null === ee ? "the model workers stopped" : `the model workers could not start: ${(0,ke.n)(ee)}`;
        const ie = this.stopped,
          He = ee => {
            ee.resolve((0, Re.s)(ee.word, ie))
          };
        for (const be of this.slots) {
          var ye;
          this.clearTimer(be), null === (ye = be.worker) || void 0 === ye || ye.terminate(), be.worker = null, null !== be.job && He(be.job), be.job = null
        }
        this.queue.splice(0).forEach(He), null !== ee && this.opts.onUnavailable(ee)
      }
    }
    const Te = [...ye.o, 5e3, 15e3, 3e4];
    let pe = null;
    const Xe = new Set;

    function ze(ee) {
      return Xe.add(ee), pe ??= function() {
        let ee = "fix" === (0, Ue.h)() || (0, Ue.c)() || (0, Ke.o)() ? 1 : (ie = navigator.hardwareConcurrency, oe = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, ie > 2 && !(0, Je.o)(oe) ? 2 : 1);
        var ie, oe;
        const Re = new fe({
          module: (0, be.g)(Me.c, {
            delays: Te,
            onRetry: (ee, ie) => {
              pe === Re && Be((He => {
                He.onModuleRetry(ee, ie)
              }))
            }
          }),
          loadWorker: async () => {
            const [ee] = await Promise.all([He.e(51).then((() => He(64057))), (0, Fe.g)()]);
            return ee.createModelWorker
          },
          count: ee,
          onUnavailable: ee => {
            if (pe === Re) {
              pe = null;
              const ie = function(ee) {
                return ee instanceof ye.b ? [Me.c.url().href] : void 0
              }(ee);
              Be((He => {
                He.onUnavailable(ee, ie)
              }))
            }
          },
          onWorkerLost: ee => {
            pe === Re && Be((ie => {
              ie.onWorkerLost(ee)
            }))
          }
        });
        return Re
      }(), {
        pool: pe,
        unlisten: () => {
          Xe.delete(ee)
        }
      }
    }

    function Be(ee) {
      for (const He of [...Xe]) try {
        ee(He)
      } catch (ie) {
        console.error("[pageModelPool] a listener threw", ie)
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);