export const id = 51;
export const ids = [51];
export const modules = {
  54941: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => Fb,
      pageModelPool: () => mb
    });
    var eb = Mb(2471),
      Hb = Mb(37435),
      pb = Mb(42353),
      Vb = Mb(4209),
      gb = Mb(5226),
      lb = Mb(5235),
      Lb = Mb(352),
      Ib = Mb(4151),
      Ob = Mb(42502),
      Ub = Mb(42509),
      tb = Mb(37406),
      Cb = Mb(42619);
    class Eb {
      constructor(bb) {
        this.opts = bb, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let wb = 0; wb < Math.max(1, bb.count); wb++) this.slots.push({
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
        return this.queue.length + this.slots.filter((bb => null !== bb.job)).length
      }
      build(bb, wb) {
        return null !== this.stopped ? Promise.resolve((0, Ub.p)(bb, this.stopped)) : new Promise((Mb => {
          this.queue.push({
            word: bb,
            glb: wb,
            attempts: 0,
            resolve: Mb
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
        const bb = this.resting && 0 === this.queue.length;
        for (const wb of this.slots) {
          if (null !== this.stopped) return;
          if (wb.gaveUp || wb.starting) continue;
          if (null === wb.worker) {
            bb || this.start(wb);
            continue
          }
          if (bb) {
            null === wb.job && this.end(wb);
            continue
          }
          const Mb = null === wb.job ? this.queue.shift() : void 0;
          void 0 !== Mb && this.run(wb, wb.worker, Mb)
        }
      }
      start(bb) {
        if (bb.losses >= 6) return bb.gaveUp = !0, void(this.slots.every((bb => bb.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        bb.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((wb => {
          let [Mb, eb] = wb;
          null === this.stopped && this.launch(bb, Mb, eb)
        }), (bb => {
          this.fail(bb)
        }))
      }
      launch(bb, wb, Mb) {
        let eb;
        try {
          eb = wb()
        } catch (Hb) {
          return void this.lose(bb, `a model worker could not be created (${String(Hb)})`)
        }
        bb.worker = eb, bb.timer = new Cb.h(3e4, (wb => {
          bb.timer = null, this.lose(bb, `a model worker did not start: ${(0,Cb.k)(wb)}`)
        }), void 0, this.opts.visibility), eb.onmessage = wb => {
          let {
            data: Mb
          } = wb;
          this.answered(bb, Mb)
        }, eb.onerror = wb => {
          this.lose(bb, bb.starting ? `a model worker failed to start: ${wb.message}` : `a model worker failed: ${wb.message}`)
        }, eb.postMessage({
          type: "start",
          module: Mb
        })
      }
      end(bb) {
        const wb = bb.worker;
        null !== wb && (wb.onmessage = null, wb.onerror = null, wb.terminate()), bb.worker = null, bb.startedAt = void 0
      }
      clearTimer(bb) {
        var wb;
        null === (wb = bb.timer) || void 0 === wb || wb.cancel(), bb.timer = null
      }
      answered(bb, wb) {
        if ("lost" === wb.type) return void this.lose(bb, wb.reason);
        if (bb.starting) return "started" !== wb.type ? void this.lose(bb, `a model worker answered ${wb.type} before it started`) : (this.clearTimer(bb), bb.starting = !1, bb.startedAt = performance.now(), void this.pump());
        const Mb = bb.job;
        null !== Mb && "started" !== wb.type && wb.seq === bb.seq && ("trapped" !== wb.type ? (bb.job = null, bb.losses = 0, this.jobLosses = 0, Mb.resolve(new Uint8Array(wb.record)), this.pump()) : this.lose(bb, wb.trap))
      }
      run(bb, wb, Mb) {
        const eb = this.nextSeq++;
        bb.seq = eb, bb.job = Mb, Mb.attempts++;
        const Hb = Mb.glb.slice();
        wb.postMessage({
          type: "job",
          seq: eb,
          word: Mb.word,
          glb: Hb.buffer
        }, [Hb.buffer])
      }
      lose(bb, wb) {
        this.clearTimer(bb), void 0 !== bb.startedAt && performance.now() - bb.startedAt >= 6e4 && (bb.losses = 0), this.end(bb), bb.starting = !1;
        const Mb = bb.job;
        bb.job = null, null === Mb && bb.losses++, this.opts.onWorkerLost(wb), null !== Mb && (Mb.attempts < 2 ? this.queue.unshift(Mb) : Mb.resolve((0, Ub.o)(Mb.word, wb)), 0 === (Mb.word & Ob.b) && ++this.jobLosses >= 32) ? this.fail(new Error("model workers were lost on 32 jobs with no file built")) : this.pump()
      }
      fail(bb) {
        if (null !== this.stopped) return;
        this.stopped = null === bb ? "the model workers stopped" : `the model workers could not start: ${(0,tb.j)(bb)}`;
        const wb = this.stopped,
          Mb = bb => {
            bb.resolve((0, Ub.p)(bb.word, wb))
          };
        for (const Hb of this.slots) {
          var eb;
          this.clearTimer(Hb), null === (eb = Hb.worker) || void 0 === eb || eb.terminate(), Hb.worker = null, null !== Hb.job && Mb(Hb.job), Hb.job = null
        }
        this.queue.splice(0).forEach(Mb), null !== bb && this.opts.onUnavailable(bb)
      }
    }
    const Fb = [...eb.o, 5e3, 15e3, 3e4];
    let Bb = null;
    const sb = new Set;

    function mb(bb) {
      return sb.add(bb), Bb ??= function() {
        let bb = "fix" === (0, lb.h)() || (0, lb.d)() || (0, gb.k)() || (0, Vb.i)() ? 1 : (wb = navigator.hardwareConcurrency, Ob = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, wb > 2 && !(0, Ib.x)(Ob) ? 2 : 1);
        var wb, Ob;
        const Ub = new Eb({
          module: (0, Hb.g)(pb.d, {
            delays: Fb,
            onRetry: (bb, wb) => {
              Bb === Ub && hb((Mb => {
                Mb.onModuleRetry(bb, wb)
              }))
            }
          }),
          loadWorker: async () => {
            const [bb] = await Promise.all([Mb.e(52).then((() => Mb(64640))), (0, Lb.l)()]);
            return bb.createModelWorker
          },
          count: bb,
          onUnavailable: bb => {
            if (Bb === Ub) {
              Bb = null;
              const wb = function(bb) {
                return bb instanceof eb.c ? [pb.d.url().href] : void 0
              }(bb);
              hb((Mb => {
                Mb.onUnavailable(bb, wb)
              }))
            }
          },
          onWorkerLost: bb => {
            Bb === Ub && hb((wb => {
              wb.onWorkerLost(bb)
            }))
          }
        });
        return Ub
      }(), {
        pool: Bb,
        unlisten: () => {
          sb.delete(bb)
        }
      }
    }

    function hb(bb) {
      for (const Mb of [...sb]) try {
        bb(Mb)
      } catch (wb) {
        console.error("[pageModelPool] a listener threw", wb)
      }
    }
  },
  42619: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      f: () => eb,
      h: () => gb,
      k: () => Vb
    });
    const eb = 12e4,
      Hb = 3e4,
      pb = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: bb => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", bb), () => {
          document.removeEventListener("visibilitychange", bb)
        })
      };

    function Vb(bb) {
      return `it sent no start within ${Math.round(bb)} ms`
    }
    class gb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pb;
        this.timeoutMs = bb, this.onTimeout = wb, this.now = Mb, this.visibility = eb, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = eb.listen((() => {
          this.onVisibility()
        })), eb.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const bb = this.step;
        return null === bb ? 0 : Math.min(this.now() - bb.at, bb.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const bb = this.timeoutMs - this.counted;
        if (bb <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const wb = Math.min(bb, 5e3);
        this.step = {
          at: this.now(),
          ms: wb
        }, this.arm(wb, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(bb, wb) {
        this.timer = setTimeout((() => {
          this.timer = null, wb()
        }), bb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);