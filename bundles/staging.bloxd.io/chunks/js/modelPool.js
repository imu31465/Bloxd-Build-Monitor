export const id = 51;
export const ids = [51];
export const modules = {
  55136: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      MODELS_MODULE_RETRY_DELAYS_MS: () => yd,
      pageModelPool: () => pd
    });
    var Wd = md(2425),
      Fd = md(37688),
      Rd = md(42640),
      Xd = md(4034),
      Kd = md(5043),
      hd = md(5055),
      vd = md(364),
      Qd = md(3984),
      td = md(42779),
      od = md(42788),
      Nd = md(37659),
      qd = md(42915);
    class Hd {
      constructor(dd) {
        this.opts = dd, this.queue = [], this.slots = [], this.stopped = null, this.create = null, this.nextSeq = 0, this.jobLosses = 0, this.resting = !1;
        for (let Od = 0; Od < Math.max(1, dd.count); Od++) this.slots.push({
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
        return this.queue.length + this.slots.filter((dd => null !== dd.job)).length
      }
      build(dd, Od) {
        return null !== this.stopped ? Promise.resolve((0, od.r)(dd, this.stopped)) : new Promise((md => {
          this.queue.push({
            word: dd,
            glb: Od,
            attempts: 0,
            resolve: md
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
        const dd = this.resting && 0 === this.queue.length;
        for (const Od of this.slots) {
          if (null !== this.stopped) return;
          if (Od.gaveUp || Od.starting) continue;
          if (null === Od.worker) {
            dd || this.start(Od);
            continue
          }
          if (dd) {
            null === Od.job && this.end(Od);
            continue
          }
          const md = null === Od.job ? this.queue.shift() : void 0;
          void 0 !== md && this.run(Od, Od.worker, md)
        }
      }
      start(dd) {
        if (dd.losses >= 6) return dd.gaveUp = !0, void(this.slots.every((dd => dd.gaveUp)) && this.fail(new Error("every model worker went 6 times with no file built")));
        dd.starting = !0, this.create ??= this.opts.loadWorker(), Promise.all([this.create, this.opts.module]).then((Od => {
          let [md, Wd] = Od;
          null === this.stopped && this.launch(dd, md, Wd)
        }), (dd => {
          this.fail(dd)
        }))
      }
      launch(dd, Od, md) {
        let Wd;
        try {
          Wd = Od()
        } catch (Fd) {
          return void this.lose(dd, `a model worker could not be created (${String(Fd)})`)
        }
        dd.worker = Wd, dd.timer = new qd.g(3e4, (Od => {
          dd.timer = null, this.lose(dd, `a model worker did not start: ${(0,qd.j)(Od)}`)
        }), void 0, this.opts.visibility), Wd.onmessage = Od => {
          let {
            data: md
          } = Od;
          this.answered(dd, md)
        }, Wd.onerror = Od => {
          this.lose(dd, dd.starting ? `a model worker failed to start: ${Od.message}` : `a model worker failed: ${Od.message}`)
        }, Wd.postMessage({
          type: "start",
          module: md
        })
      }
      end(dd) {
        const Od = dd.worker;
        null !== Od && (Od.onmessage = null, Od.onerror = null, Od.terminate()), dd.worker = null, dd.startedAt = void 0
      }
      clearTimer(dd) {
        var Od;
        null === (Od = dd.timer) || void 0 === Od || Od.cancel(), dd.timer = null
      }
      answered(dd, Od) {
        if ("lost" === Od.type) return void this.lose(dd, Od.reason);
        if (dd.starting) return "started" !== Od.type ? void this.lose(dd, `a model worker answered ${Od.type} before it started`) : (this.clearTimer(dd), dd.starting = !1, dd.startedAt = performance.now(), void this.pump());
        const md = dd.job;
        null !== md && "started" !== Od.type && Od.seq === dd.seq && ("trapped" !== Od.type ? (dd.job = null, dd.losses = 0, this.jobLosses = 0, md.resolve(new Uint8Array(Od.record)), this.pump()) : this.lose(dd, Od.trap))
      }
      run(dd, Od, md) {
        const Wd = this.nextSeq++;
        dd.seq = Wd, dd.job = md, md.attempts++;
        const Fd = md.glb.slice();
        Od.postMessage({
          type: "job",
          seq: Wd,
          word: md.word,
          glb: Fd.buffer
        }, [Fd.buffer])
      }
      lose(dd, Od) {
        this.clearTimer(dd), void 0 !== dd.startedAt && performance.now() - dd.startedAt >= 6e4 && (dd.losses = 0), this.end(dd), dd.starting = !1;
        const md = dd.job;
        dd.job = null, null === md && dd.losses++, this.opts.onWorkerLost(Od), null !== md && (md.attempts < 2 ? this.queue.unshift(md) : md.resolve((0, od.q)(md.word, Od)), 0 === (md.word & td.e) && ++this.jobLosses >= 32) ? this.fail(new Error("model workers were lost on 32 jobs with no file built")) : this.pump()
      }
      fail(dd) {
        if (null !== this.stopped) return;
        this.stopped = null === dd ? "the model workers stopped" : `the model workers could not start: ${(0,Nd.h)(dd)}`;
        const Od = this.stopped,
          md = dd => {
            dd.resolve((0, od.r)(dd.word, Od))
          };
        for (const Fd of this.slots) {
          var Wd;
          this.clearTimer(Fd), null === (Wd = Fd.worker) || void 0 === Wd || Wd.terminate(), Fd.worker = null, null !== Fd.job && md(Fd.job), Fd.job = null
        }
        this.queue.splice(0).forEach(md), null !== dd && this.opts.onUnavailable(dd)
      }
    }
    const yd = [...Wd.p, 5e3, 15e3, 3e4];
    let bd = null;
    const Td = new Set;

    function pd(dd) {
      return Td.add(dd), bd ??= function() {
        let dd = "fix" === (0, hd.m)() || (0, hd.e)() || (0, Kd.o)() || (0, Xd.h)() ? 1 : (Od = navigator.hardwareConcurrency, td = "deviceMemory" in navigator ? navigator.deviceMemory : void 0, Od > 2 && !(0, Qd.t)(td) ? 2 : 1);
        var Od, td;
        const od = new Hd({
          module: (0, Fd.e)(Rd.c, {
            delays: yd,
            onRetry: (dd, Od) => {
              bd === od && Yd((md => {
                md.onModuleRetry(dd, Od)
              }))
            }
          }),
          loadWorker: async () => {
            const [dd] = await Promise.all([md.e(52).then((() => md(64992))), (0, vd.p)()]);
            return dd.createModelWorker
          },
          count: dd,
          onUnavailable: dd => {
            if (bd === od) {
              bd = null;
              const Od = function(dd) {
                return dd instanceof Wd.b ? [Rd.c.url().href] : void 0
              }(dd);
              Yd((md => {
                md.onUnavailable(dd, Od)
              }))
            }
          },
          onWorkerLost: dd => {
            bd === od && Yd((Od => {
              Od.onWorkerLost(dd)
            }))
          }
        });
        return od
      }(), {
        pool: bd,
        unlisten: () => {
          Td.delete(dd)
        }
      }
    }

    function Yd(dd) {
      for (const md of [...Td]) try {
        dd(md)
      } catch (Od) {
        console.error("[pageModelPool] a listener threw", Od)
      }
    }
  },
  42915: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      e: () => Wd,
      g: () => Kd,
      j: () => Xd
    });
    const Wd = 12e4,
      Fd = 3e4,
      Rd = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: dd => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", dd), () => {
          document.removeEventListener("visibilitychange", dd)
        })
      };

    function Xd(dd) {
      return `it sent no start within ${Math.round(dd)} ms`
    }
    class Kd {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Rd;
        this.timeoutMs = dd, this.onTimeout = Od, this.now = md, this.visibility = Wd, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Wd.listen((() => {
          this.onVisibility()
        })), Wd.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const dd = this.step;
        return null === dd ? 0 : Math.min(this.now() - dd.at, dd.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const dd = this.timeoutMs - this.counted;
        if (dd <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const Od = Math.min(dd, 5e3);
        this.step = {
          at: this.now(),
          ms: Od
        }, this.arm(Od, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(dd, Od) {
        this.timer = setTimeout((() => {
          this.timer = null, Od()
        }), dd)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);