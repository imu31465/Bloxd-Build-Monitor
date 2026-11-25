export const id = 137;
export const ids = [137];
export const modules = {
  36535: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Tt,
      h: () => te,
      k: () => st,
      o: () => xt
    });
    var Ot = Vt(2961),
      qt = Vt(2972),
      Dt = Vt(6820),
      mt = Vt(4851),
      dt = Vt(2970),
      jt = Vt(2965);
    const Ht = "bloxd-wasmDownloaded",
      Xt = 12;

    function Qt(tt) {
      return tt.pathname.slice(tt.pathname.lastIndexOf("/") + 1)
    }

    function lt() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const tt = JSON.parse(localStorage.getItem(Ht) ?? "[]");
        return Array.isArray(tt) ? tt.filter((tt => "string" === typeof tt)) : []
      } catch (tt) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", tt), null
      }
    }
    const Et = Reflect.apply,
      ft = "undefined" === typeof Worker ? void 0 : Worker,
      wt = ft?.prototype.postMessage,
      yt = ft?.prototype.terminate,
      Nt = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      Mt = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      bt = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      Jt = function() {
        try {
          return (0, mt.l)(ft, "Worker", !0) && (0, mt.l)(wt, "postMessage") && (0, mt.l)(yt, "terminate") && (0, mt.l)(bt, "buffer") && void 0 !== Nt && void 0 !== Mt
        } catch {
          return !1
        }
      }();
    let Ct = !1;

    function ut() {
      return Jt && !Ct
    }
    class Kt {
      worker = null;
      failed = !1;
      constructor() {
        if (ut()) try {
          this.worker = vt(), Et(Nt, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const tt = this.worker;
        if (this.worker = null, null !== tt && this.failed) throw Et(yt, tt, []), new Error("it did not run");
        return tt
      }
      stop() {
        const tt = this.worker;
        this.worker = null, null !== tt && Et(yt, tt, [])
      }
    }
    class ht {
      decoded;
      worker;
      reject;
      constructor(tt, et, Vt, Ot, Dt) {
        try {
          this.worker = Dt?.take() ?? vt()
        } catch (Ht) {
          throw Ct = !0, new Error(`The zstd decoder's worker did not start: ${(0,dt.d)(Ht)}`)
        }
        const mt = this.worker;
        this.decoded = (0, qt.i)(((et, qt) => {
          this.reject = qt;
          const Dt = (tt, et) => {
            Et(Nt, mt, [tt, et])
          };
          Dt("message", (tt => {
            Ot();
            try {
              const Ot = Et(Mt, tt, []);
              if (!0 === Ot) et();
              else {
                if ("string" === typeof Ot) throw Ot.startsWith(dt.b) && (Ct = !0), new Error(Ot);
                Vt(Ot, Et(jt.v, Ot, []))
              }
            } catch (Ht) {
              qt(Ht)
            }
          })), Dt("error", (() => {
            Ct = !0, qt(new Error("The zstd decoder's worker did not run"))
          })), Dt("messageerror", (() => {
            qt(new Error(`${tt}'s decoder sent a piece that could not be read`))
          }))
        })), (0, jt.Q)(this.decoded), Et(wt, mt, [
          [tt, et]
        ])
      }
      push(tt) {
        Et(wt, this.worker, [tt, [Et(bt, tt, [])]])
      }
      end() {
        Et(wt, this.worker, [null])
      }
      markWorkerFailed() {
        Ct = !0
      }
      fail(tt) {
        this.reject(tt), this.terminate()
      }
      terminate() {
        Et(yt, this.worker, [])
      }
    }

    function vt() {
      if (globalThis.Worker !== ft) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(Vt.p + Vt.u(68), Vt.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const Wt = Reflect.apply,
      St = ArrayBuffer,
      ct = "undefined" === typeof Response ? void 0 : Response,
      Rt = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      It = function() {
        let tt;
        void 0 !== Rt && new Rt({
          __proto__: null,
          start(et) {
            const {
              enqueue: Vt,
              close: Ot,
              error: qt
            } = Object.getPrototypeOf(et);
            tt = {
              enqueue: Vt,
              close: Ot,
              error: qt
            }
          }
        }, {
          __proto__: null
        });
        return tt
      }(),
      Pt = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== It && (0, mt.l)(ct, "Response", !0) && (0, mt.l)(Rt, "ReadableStream", !0) && (0, mt.l)(It.enqueue, "enqueue") && (0, mt.l)(It.close, "close") && (0, mt.l)(It.error, "error") && (0, mt.l)(jt.Y, "body") && (0, mt.l)(jt.L, "getReader") && (0, mt.l)(jt.U, "read")
        } catch {
          return !1
        }
      }();
    async function Zt(tt, et, Vt, Ot, Dt, mt, Ht) {
      const Xt = new St(et),
        {
          controller: Qt,
          compiled: lt
        } = function(tt) {
          try {
            let tt;
            const et = new Rt({
                __proto__: null,
                start(et) {
                  tt = et
                }
              }, {
                __proto__: null
              }),
              Vt = new ct(et, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: tt,
              compiled: (0, jt.Q)((0, jt.C)((0, jt.gb)(Vt)))
            }
          } catch (et) {
            throw new Error(`${tt} could not be streamed into a compile: ${(0,dt.d)(et)}`)
          }
        }(tt),
        {
          enqueue: Et,
          close: ft,
          error: wt
        } = It,
        yt = tt => {
          try {
            Wt(wt, Qt, [tt])
          } catch {}
        };
      let Nt = 0;
      const Mt = (Vt, Ot) => {
        if (Nt + Ot > et) throw new Error(`${tt} decoded past its module's ${et} bytes`);
        Wt(jt.ab, new jt.k(Xt), [new jt.k(Vt), Nt]);
        try {
          Wt(Et, Qt, [new jt.k(Xt, Nt, Ot)])
        } catch {}
        Nt += Ot
      };
      let bt, Jt;
      try {
        bt = new ht(tt, et, Mt, Ot, Ht)
      } catch (vt) {
        throw yt(vt), vt
      }
      const Ct = tt => {
        bt.fail(tt), void 0 !== Jt && Lt(Jt)
      };
      let ut = !1;
      Vt.addEventListener("abort", (() => {
        ut && bt.markWorkerFailed(), Ct(new Error(`${tt} stalled`))
      }), {
        once: !0
      }), (0, qt.s)(lt, (() => {}), Ct);
      try {
        let mt;
        try {
          mt = await fetch(tt, {
            signal: Vt
          })
        } catch (vt) {
          throw new Error(`Fetching ${tt} failed: ${(0,dt.d)(vt)}`)
        }
        const {
          ok: Ht,
          status: Xt,
          body: Qt
        } = function(tt, et) {
          try {
            const {
              ok: tt,
              status: Vt
            } = et;
            return {
              ok: tt,
              status: Vt,
              body: Wt(jt.Y, et, [])
            }
          } catch {
            throw new Error(`${tt} came in a response a page script made`)
          }
        }(tt, mt);
        if (!Ht) throw new Error(`Fetching ${tt} failed: HTTP ${Xt}`);
        Ot();
        const lt = Wt(jt.L, Qt, []);
        Jt = lt;
        const Et = () => {
          Lt(lt)
        };
        for ((0, qt.s)(bt.decoded, Et, Et);;) {
          let et;
          try {
            et = await Wt(jt.U, lt, [])
          } catch (vt) {
            throw new Error(`Downloading ${tt} failed: ${(0,dt.d)(vt)}`)
          }
          if (et.done) break;
          Ot(), bt.push(et.value)
        }
        if (ut = !0, bt.end(), await bt.decoded, Dt(), Nt !== et) throw new Error(`${tt} ended before its module did`)
      } catch (vt) {
        throw yt(vt), Ct(vt), vt
      }
      bt.terminate();
      try {
        Wt(ft, Qt, [])
      } catch {}
      const Kt = await lt;
      return void 0 !== mt && await (0, jt.z)(tt, new jt.k(Xt), {
        sha256: mt.sha256,
        onMismatch: () => {}
      }), Kt
    }

    function Lt(tt) {
      try {
        (0, jt.Q)(tt.cancel())
      } catch {}
    }
    const Ft = ".zst.bin",
      kt = 1e3;
    let Gt = null;

    function zt(tt) {
      return Gt ??= function() {
        const tt = new Map,
          et = "bloxd_wasm_webgpu:5136982,bloxd_wasm_webgl:5516365,bloxd_wasm_webgl1:4851467,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3712496";
        for (const Vt of et?.split(",") ?? []) {
          const [et = "", Ot] = Vt.split(":"), qt = Number(Ot);
          Number.isInteger(qt) && qt > 0 && tt.set(et, qt)
        }
        return tt
      }(), Gt.get(tt)
    }
    async function ot(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Ot = zt(tt.name);
      if (void 0 === Ot) return rt(await Ut(tt, et, Vt), "cold-wasm");
      const Dt = Pt ? new Kt : null;
      let mt;
      try {
        if (Ht = tt.url(), lt()?.includes(Qt(Ht)) && await async function(tt) {
            const et = new AbortController;
            let Vt;
            const Ot = (0, qt.i)((tt => {
              Vt = setTimeout((() => {
                et.abort(), tt(null)
              }), kt)
            }));
            try {
              const Vt = fetch(tt.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: et.signal
                }),
                Dt = await (0, qt.r)([Vt, Ot]);
              return !!Dt?.ok && ((0, jt.Q)(Dt.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(Vt)
            }
          }(tt.url())) return Dt?.stop(), await async function(tt, et, Vt, Ot) {
          let qt = !1;
          const Dt = Vt && {
            sha256: Vt.sha256,
            onMismatch: () => {
              qt = !0
            }
          };
          try {
            return rt(await Ut(tt, Dt, Ot), "warm")
          } catch (mt) {
            const Ot = await At(tt, et, Vt, null);
            if (null === Ot) throw qt && Vt.onMismatch(), mt;
            return console.warn(`${tt.url().href} from the HTTP cache failed: ${(0,dt.d)(mt)}: loaded its copy instead`), rt(Ot, qt ? "warm-refused" : "warm-broken")
          }
        }(tt, Ot, et, Vt);
        mt = await At(tt, Ot, et, Dt)
      } finally {
        Dt?.stop()
      }
      var Ht;
      return null !== mt ? rt(mt, "cold-worker") : rt(await Ut(tt, et, Vt), "cold-wasm")
    }

    function rt(tt, et) {
      return {
        __proto__: null,
        module: tt,
        path: et
      }
    }

    function Ut(tt, et, Vt) {
      return void 0 === zt(tt.name) ? (0, jt.G)(tt.url(), et, Vt) : (0, jt.G)(tt.url(), et, {
        ...Vt,
        hideThen: !0,
        onDownloaded: () => {
          ! function(tt) {
            const et = lt();
            if (null === et) return;
            const Vt = Qt(tt),
              Ot = et.filter((tt => tt !== Vt));
            Ot.push(Vt);
            try {
              localStorage.setItem(Ht, JSON.stringify(Ot.slice(-Xt)))
            } catch (qt) {
              console.warn(`Bloxd wasm: ${Vt} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, qt)
            }
          }(tt.url()), Vt.onDownloaded?.()
        }
      })
    }
    async function At(tt, et, Vt, Ot) {
      if (!Pt || !ut()) return null;
      const qt = tt.url(),
        Dt = `${qt.href}${Ft}`;
      try {
        return await (0, jt.eb)(Dt, ((tt, qt, mt) => Zt(Dt, et, tt, qt, mt, Vt, Ot)))
      } catch (mt) {
        return console.warn(`${(0,dt.d)(mt)}: loading ${qt.href} instead`), null
      }
    }
    let it = null,
      Yt = !1;
    const Bt = new Map,
      pt = new Map;

    function xt(tt, et, Vt) {
      return null === it ? it = gt(tt, et, Vt?.memoryMaximumBytes) : tt !== it.build ? console.warn(`Bloxd wasm: ${tt.name} was asked for after ${it.build.name} started loading, which this thread keeps`) : et.name !== it.workers.name && console.warn(`Bloxd wasm: ${et.name} was asked for workers after ${it.workers.name}, which this thread keeps`), Vt?.reloadFailedDownload && !Yt && (0, Ot.fb)() && (Yt = !0, it = gt(it.build, it.workers, it.memoryMaximumBytes)), it.loaded
    }

    function Tt(tt, et) {
      if (null !== it) return (0, qt.e)([]);
      const Vt = tt.filter((tt => !Bt.has(tt.name))).map((tt => {
        const Vt = new AbortController,
          Ot = {
            compiled: Ut(tt, (0, Dt.c)(tt.name), {
              priority: et,
              nV: Vt.signal,
              onDownloaded: () => {
                Ot.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  Ot.downloaded = !1, null !== it && Vt.abort()
                }
              }
            }),
            cancel: Vt,
            downloaded: !1
          };
        return Bt.set(tt.name, Ot), (0, qt.i)((et => {
          (0, qt.s)(Ot.compiled, (() => {
            Ot.downloaded = !0, et()
          }), (Ot => {
            Vt.signal.aborted || console.warn(`Bloxd wasm: ${tt.name}'s compile ahead of the load failed: the load compiles it afresh`, Ot), et()
          }))
        }))
      }));
      return (0, qt.e)(Vt)
    }

    function gt(tt, et, Vt) {
      const Dt = (0, Ot.M)((async () => {
        (0, mt.z)(), pt.clear();
        const Vt = nt(tt),
          Ot = et.name === tt.name ? Vt : nt(et);
        for (const {
            cancel: tt
          }
          of Bt.values()) tt.abort();
        Bt.clear(), await (0, qt.e)([Vt, Ot]);
        const Dt = await Vt,
          dt = await Ot;
        return (0, mt.z)(), {
          module: Dt,
          workerModule: dt
        }
      }), tt, Vt);
      return {
        build: tt,
        workers: et,
        memoryMaximumBytes: Vt,
        loaded: Dt
      }
    }

    function st(tt) {
      return pt.get(tt)
    }

    function nt(tt) {
      const et = performance.now(),
        Vt = Bt.get(tt.name);
      Bt.delete(tt.name);
      const Ot = !0 === Vt?.downloaded ? Vt : void 0;
      return void 0 !== Vt && void 0 === Ot && Vt.cancel.abort(), (0, qt.i)(((Vt, Dt) => {
        const mt = (Ot, qt) => {
            pt.set(tt.name, {
              path: qt,
              ms: performance.now() - et
            }), Vt(Ot)
          },
          dt = () => {
            (0, qt.s)(ee(tt), (tt => {
              let {
                module: et,
                path: Vt
              } = tt;
              mt(et, Vt)
            }), Dt)
          };
        void 0 === Ot ? dt() : (0, qt.s)(Ot.compiled, (tt => {
          mt(tt, "ahead")
        }), dt)
      }))
    }
    async function te(tt, et) {
      const {
        module: Vt
      } = await ee(tt, {
        retries: et
      });
      return Vt
    }
    async function ee(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await ot(tt, (0, Dt.c)(tt.name), et)
    }
  },
  6820: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    var Ot = Vt(2965);
    const qt = {
      bloxd_wasm: () => "79e619b054ae905a5b8f4bf459846802c4d04f9c338bac0e93fb2e786ccb47d7",
      bloxd_wasm_client: () => "3e9d9c92e80b558e2418153f6d2a1a0bf080851fa9da2f3eac7b5d131fa1208b",
      bloxd_wasm_workers: () => "d6180b50b2f3a41f4cc9ec709c702b403d5c3c14c69a32a117a286fccc1c4cae",
      bloxd_wasm_models: () => "b0007ea7fdbd7aac2fc56ace41940bb9419c473b2c4e22ae586bd9617e961e50",
      bloxd_wasm_webgpu: () => "38c1dcbfb4bbcbb44a23823fffa818ded30864cfa8888b894791e58c09e2b45b",
      bloxd_wasm_webgl: () => "8bc9810de446335f886bb8ec7aec0faad1cf86d215d2899bc364d09bd9e8c969",
      bloxd_wasm_webgl1: () => "67ad9c6dce37796a8d5cd66908a5f05307a9f76718f363441e62f7df779cec5f",
      bloxd_wasm_replay: () => "d4cc807eadefc7c5a5335e66f0d7d03918d890434d43b5338a42fea1e7c35a35",
      bloxd_wasm_recorder: () => "cc2e46ae4efc8d6af5a399e7423d94f6da0332d05b530d991d7a4ca5439ac99d",
      bloxd_wasm_anim: () => "47a23fc87ecc8906f1edafe7d9d71bf5aac49598c5aefc455978f2bcc55551ff",
      bloxd_wasm_textures: () => "4becc450031cb7888091452fd459d969999d55161fb0d00265048d3df8dc21dd",
      bloxd_wasm_shader_pack: () => "9e65c9a3b97efeac864ceaa9c5b11bf65594610d8ff8caa0e62e9a1c70e7968d"
    };
    var Dt = Vt(4851);

    function mt(tt) {
      const et = Object.prototype.hasOwnProperty.call(qt, tt) ? qt[tt]() : void 0;
      if (void 0 !== et) return {
        sha256: et,
        onMismatch: Dt.y
      };
      throw new Ot.g(`${tt} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);