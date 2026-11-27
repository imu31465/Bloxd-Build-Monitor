export const id = 51;
export const ids = [51];
export const modules = {
  55199: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => hr,
      pageModelPool: () => nr
    });
    var Zr = Qr(2398),
      Wr = Qr(37566),
      ar = Qr(42550),
      jr = Qr(4050),
      Ir = Qr(5104),
      fr = Qr(5116),
      Er = Qr(335),
      pr = Qr(4001),
      xr = Qr(42684),
      mr = Qr(42691),
      Nr = Qr(37529),
      Ur = Qr(42796);
    class tr {
      constructor(rr) {
        this.opts = rr, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let Sr = 0; Sr < Math.max(1, rr.count); Sr++) this.slots.push({
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
        return this.queue.length + this.slots.filter((rr => null !== rr.job)).length
      }
      build(rr, Sr) {
        return null !== this.stopped ? Promise.resolve((0, mr.r)(rr, this.stopped)) : new Promise((Qr => {
          this.queue.push({
            word: rr,
            glb: Sr,
            attempts: 0,
            resolve: Qr
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
        const rr = this.resting && 0 === this.queue.length;
        for (const Sr of this.slots) {
          if (null !== this.stopped) return;
          if (Sr.gaveUp || Sr.starting) continue;
          if (null === Sr.worker) {
            rr || this.start(Sr);
            continue
          }
          if (rr) {
            null === Sr.job && this.end(Sr);
            continue
          }
          const Qr = null === Sr.job ? this.queue.shift() : void 0;
          void 0 !== Qr && this.run(Sr, Sr.worker, Qr)
        }
      }
      start(rr) {
        if (rr.losses >= 6) return rr.gaveUp = !0, void(this.slots.every((rr => rr.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        rr.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((Sr => {
          let [Qr, Zr] = Sr;
          null === this.stopped && this.launch(rr, Qr, Zr)
        }), (rr => {
          this.fail(rr)
        }))
      }
      launch(rr, Sr, Qr) {
        let Zr;
        try {
          Zr = Sr()
        } catch (Wr) {
          return void this.lose(rr, `a model worker could not be created (${String(Wr)})`)
        }
        rr.worker = Zr, rr.timer = new Ur.m(3e4, (Sr => {
          rr.timer = null, this.lose(rr, `a model worker did not start: ${(0,Ur.o)(Sr)}`)
        }), void 0, this.opts.visibility), Zr.onmessage = Sr => {
          let {
            data: Qr
          } = Sr;
          this.answered(rr, Qr)
        }, Zr.onerror = Sr => {
          this.lose(rr, rr.starting ? `a model worker failed to start: ${Sr.message}` : `a model worker failed: ${Sr.message}`)
        }, Zr.postMessage({
          type: "start",
          module: Qr
        })
      }
      end(rr) {
        const Sr = rr.worker;
        null !== Sr && (Sr.onmessage = null, Sr.onerror = null, Sr.terminate()), rr.worker = null, rr.startedAt = void 0
      }
      clearTimer(rr) {
        var Sr;
        null === (Sr = rr.timer) || void 0 === Sr || Sr.cancel(), rr.timer = null
      }
      answered(rr, Sr) {
        if ("lost" === Sr.type) return void this.lose(rr, Sr.reason);
        if (rr.starting) return "started" !== Sr.type ? void this.lose(rr, `a model worker answered ${Sr.type} before it started`) : (this.clearTimer(rr), rr.starting = !1, rr.startedAt = performance.now(), void this.pump());
        const Qr = rr.job;
        null !== Qr && "started" !== Sr.type && Sr.seq === rr.seq && ("trapped" !== Sr.type ? (rr.job = null, rr.losses = 0, this.jobLosses = 0, Qr.resolve(new Uint8Array(Sr.record)), this.pump()) : this.lose(rr, Sr.trap))
      }
      run(rr, Sr, Qr) {
        const Zr = this.nextSeq++;
        rr.seq = Zr, rr.job = Qr, Qr.attempts++;
        const Wr = Qr.glb.slice();
        Sr.postMessage({
          type: "job",
          seq: Zr,
          word: Qr.word,
          glb: Wr.buffer
        }, [Wr.buffer])
      }
      lose(rr, Sr) {
        this.clearTimer(rr), void 0 !== rr.startedAt && performance.now() - rr.startedAt >= 6e4 && (rr.losses = 0), this.end(rr), rr.starting = !1;
        const Qr = rr.job;
        rr.job = null, null === Qr && rr.losses++, this.opts.onWorkerLost(Sr), null !== Qr && (Qr.attempts < 2 ? this.queue.unshift(Qr) : Qr.resolve((0, mr.o)(Qr.word, Sr)), 0 === (Qr.word & xr.d) && ++this.jobLosses >= 32) ? this.fail(new Error("model workers were lost on 32 jobs with no file built")) : this.pump()
      }
      fail(rr) {
        if (null !== this.stopped) return;
        this.stopped = null === rr ? "the model workers stopped" : `the model workers could not start: ${(0,Nr.l)(rr)}`;
        const Sr = this.stopped,
          Qr = rr => {
            rr.resolve((0, mr.r)(rr.word, Sr))
          };
        for (const Wr of this.slots) {
          var Zr;
          this.clearTimer(Wr), null === (Zr = Wr.worker) || void 0 === Zr || Zr.terminate(), Wr.worker = null, null !== Wr.job && Qr(Wr.job), Wr.job = null
        }
        this.queue.splice(0).forEach(Qr), null !== rr && this.opts.onUnavailable(rr)
      }
    }
    const hr = [...Zr.s, 5e3, 15e3, 3e4];
    let zr = null;
    const Yr = new Set;

    function nr(rr) {
      return Yr.add(rr), zr ??= function() {
        let rr = "fix" === (0, fr.n)() || (0, fr.f)() || (0, Ir.n)() || (0, jr.j)() ? 1 : (Sr = navigator.hardwareConcurrency, xr = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, Sr > 2 && !(0, pr.v)(xr) ? 2 : 1);
        var Sr, xr;
        const mr = new tr({
          module: (0, Wr.i)(ar.e, {
            delays: hr,
            onRetry: (rr, Sr) => {
              zr === mr && er((Qr => {
                Qr.onModuleRetry(rr, Sr)
              }))
            }
          }),
          loadWorker: async () => {
            const [rr] = await Promise.all([Qr.e(52).then((() => Qr(64841))), (0, Er.p)()]);
            return rr.createModelWorker
          },
          count: rr,
          onUnavailable: rr => {
            if (zr === mr) {
              zr = null;
              const Sr = function(rr) {
                return rr instanceof Zr.b ? [ar.e.url().href] : void 0
              }(rr);
              er((Qr => {
                Qr.onUnavailable(rr, Sr)
              }))
            }
          },
          onWorkerLost: rr => {
            zr === mr && er((Sr => {
              Sr.onWorkerLost(rr)
            }))
          }
        });
        return mr
      }(), {
        pool: zr,
        unlisten: () => {
          Yr.delete(rr)
        }
      }
    }

    function er(rr) {
      for (const Qr of [...Yr]) try {
        rr(Qr)
      } catch (Sr) {
        console.error("[pageModelPool] a listener threw", Sr)
      }
    }
  },
  42796: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      i: () => Zr,
      m: () => Ir,
      o: () => jr
    });
    const Zr = 12e4,
      Wr = 3e4,
      ar = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: rr => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", rr), () => {
          document.removeEventListener("visibilitychange", rr)
        })
      };

    function jr(rr) {
      return `it sent no start within ${Math.round(rr)} ms`
    }
    class Ir {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ar;
        this.timeoutMs = rr, this.onTimeout = Sr, this.now = Qr, this.visibility = Zr, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Zr.listen((() => {
          this.onVisibility()
        })), Zr.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const rr = this.step;
        return null === rr ? 0 : Math.min(this.now() - rr.at, rr.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const rr = this.timeoutMs - this.counted;
        if (rr <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const Sr = Math.min(rr, 5e3);
        this.step = {
          at: this.now(),
          ms: Sr
        }, this.arm(Sr, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(rr, Sr) {
        this.timer = setTimeout((() => {
          this.timer = null, Sr()
        }), rr)
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);