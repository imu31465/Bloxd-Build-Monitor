export const id = 137;
export const ids = [137];
export const modules = {
  36519: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => zp,
      f: () => ii,
      i: () => Kp,
      k: () => Zp
    });
    var Op = cp(2963),
      op = cp(2980),
      Ip = cp(6762),
      Sp = cp(4791),
      xp = cp(2975),
      Lp = cp(2970);
    const Yp = "bloxd-wasmDownloaded",
      Dp = 12;

    function Ap(pp) {
      return pp.pathname.slice(pp.pathname.lastIndexOf("/") + 1)
    }

    function Pp() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const pp = JSON.parse(localStorage.getItem(Yp) ?? "[]");
        return Array.isArray(pp) ? pp.filter((pp => "string" === typeof pp)) : []
      } catch (pp) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", pp), null
      }
    }
    const Wp = Reflect.apply,
      yp = "undefined" === typeof Worker ? void 0 : Worker,
      Up = yp?.prototype.postMessage,
      wp = yp?.prototype.terminate,
      vp = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      tp = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      Hp = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      dp = function() {
        try {
          return (0, Sp.i)(yp, "Worker", !0) && (0, Sp.i)(Up, "postMessage") && (0, Sp.i)(wp, "terminate") && (0, Sp.i)(Hp, "buffer") && void 0 !== vp && void 0 !== tp
        } catch {
          return !1
        }
      }();
    let ep = !1;

    function jp() {
      return dp && !ep
    }
    class kp {
      worker = null;
      failed = !1;
      constructor() {
        if (jp()) try {
          this.worker = Rp(), Wp(vp, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const pp = this.worker;
        if (this.worker = null, null !== pp && this.failed) throw Wp(wp, pp, []), new Error("it did not run");
        return pp
      }
      stop() {
        const pp = this.worker;
        this.worker = null, null !== pp && Wp(wp, pp, [])
      }
    }
    class mp {
      decoded;
      worker;
      reject;
      constructor(pp, ip, cp, Op, Ip) {
        try {
          this.worker = Ip?.take() ?? Rp()
        } catch (Yp) {
          throw ep = !0, new Error(`The zstd decoder's worker did not start: ${(0,xp.f)(Yp)}`)
        }
        const Sp = this.worker;
        this.decoded = (0, op.j)(((ip, op) => {
          this.reject = op;
          const Ip = (pp, ip) => {
            Wp(vp, Sp, [pp, ip])
          };
          Ip("message", (pp => {
            Op();
            try {
              const Op = Wp(tp, pp, []);
              if (!0 === Op) ip();
              else {
                if ("string" === typeof Op) throw Op.startsWith(xp.e) && (ep = !0), new Error(Op);
                cp(Op, Wp(Lp.q, Op, []))
              }
            } catch (Yp) {
              op(Yp)
            }
          })), Ip("error", (() => {
            ep = !0, op(new Error("The zstd decoder's worker did not run"))
          })), Ip("messageerror", (() => {
            op(new Error(`${pp}'s decoder sent a piece that could not be read`))
          }))
        })), (0, Lp.T)(this.decoded), Wp(Up, Sp, [
          [pp, ip]
        ])
      }
      push(pp) {
        Wp(Up, this.worker, [pp, [Wp(Hp, pp, [])]])
      }
      end() {
        Wp(Up, this.worker, [null])
      }
      markWorkerFailed() {
        ep = !0
      }
      fail(pp) {
        this.reject(pp), this.terminate()
      }
      terminate() {
        Wp(wp, this.worker, [])
      }
    }

    function Rp() {
      if (globalThis.Worker !== yp) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(cp.p + cp.u(68), cp.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const qp = Reflect.apply,
      Mp = ArrayBuffer,
      Cp = "undefined" === typeof Response ? void 0 : Response,
      Ep = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      Xp = function() {
        let pp;
        void 0 !== Ep && new Ep({
          __proto__: null,
          start(ip) {
            const {
              enqueue: cp,
              close: Op,
              error: op
            } = Object.getPrototypeOf(ip);
            pp = {
              enqueue: cp,
              close: Op,
              error: op
            }
          }
        }, {
          __proto__: null
        });
        return pp
      }(),
      lp = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== Xp && (0, Sp.i)(Cp, "Response", !0) && (0, Sp.i)(Ep, "ReadableStream", !0) && (0, Sp.i)(Xp.enqueue, "enqueue") && (0, Sp.i)(Xp.close, "close") && (0, Sp.i)(Xp.error, "error") && (0, Sp.i)(Lp.Y, "body") && (0, Sp.i)(Lp.K, "getReader") && (0, Sp.i)(Lp.V, "read")
        } catch {
          return !1
        }
      }();
    async function Qp(pp, ip, cp, Op, Ip, Sp, Yp) {
      const Dp = new Mp(ip),
        {
          controller: Ap,
          compiled: Pp
        } = function(pp) {
          try {
            let pp;
            const ip = new Ep({
                __proto__: null,
                start(ip) {
                  pp = ip
                }
              }, {
                __proto__: null
              }),
              cp = new Cp(ip, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: pp,
              compiled: (0, Lp.T)((0, Lp.x)((0, Lp.bb)(cp)))
            }
          } catch (ip) {
            throw new Error(`${pp} could not be streamed into a compile: ${(0,xp.f)(ip)}`)
          }
        }(pp),
        {
          enqueue: Wp,
          close: yp,
          error: Up
        } = Xp,
        wp = pp => {
          try {
            qp(Up, Ap, [pp])
          } catch {}
        };
      let vp = 0;
      const tp = (cp, Op) => {
        if (vp + Op > ip) throw new Error(`${pp} decoded past its module's ${ip} bytes`);
        qp(Lp.Z, new Lp.k(Dp), [new Lp.k(cp), vp]);
        try {
          qp(Wp, Ap, [new Lp.k(Dp, vp, Op)])
        } catch {}
        vp += Op
      };
      let Hp, dp;
      try {
        Hp = new mp(pp, ip, tp, Op, Yp)
      } catch (Rp) {
        throw wp(Rp), Rp
      }
      const ep = pp => {
        Hp.fail(pp), void 0 !== dp && Jp(dp)
      };
      let jp = !1;
      cp.addEventListener("abort", (() => {
        jp && Hp.markWorkerFailed(), ep(new Error(`${pp} stalled`))
      }), {
        once: !0
      }), (0, op.u)(Pp, (() => {}), ep);
      try {
        let Sp;
        try {
          Sp = await fetch(pp, {
            signal: cp
          })
        } catch (Rp) {
          throw new Error(`Fetching ${pp} failed: ${(0,xp.f)(Rp)}`)
        }
        const {
          ok: Yp,
          status: Dp,
          body: Ap
        } = function(pp, ip) {
          try {
            const {
              ok: pp,
              status: cp
            } = ip;
            return {
              ok: pp,
              status: cp,
              body: qp(Lp.Y, ip, [])
            }
          } catch {
            throw new Error(`${pp} came in a response a page script made`)
          }
        }(pp, Sp);
        if (!Yp) throw new Error(`Fetching ${pp} failed: HTTP ${Dp}`);
        Op();
        const Pp = qp(Lp.K, Ap, []);
        dp = Pp;
        const Wp = () => {
          Jp(Pp)
        };
        for ((0, op.u)(Hp.decoded, Wp, Wp);;) {
          let ip;
          try {
            ip = await qp(Lp.V, Pp, [])
          } catch (Rp) {
            throw new Error(`Downloading ${pp} failed: ${(0,xp.f)(Rp)}`)
          }
          if (ip.done) break;
          Op(), Hp.push(ip.value)
        }
        if (jp = !0, Hp.end(), await Hp.decoded, Ip(), vp !== ip) throw new Error(`${pp} ended before its module did`)
      } catch (Rp) {
        throw wp(Rp), ep(Rp), Rp
      }
      Hp.terminate();
      try {
        qp(yp, Ap, [])
      } catch {}
      const kp = await Pp;
      return void 0 !== Sp && await (0, Lp.t)(pp, new Lp.k(Dp), {
        sha256: Sp.sha256,
        onMismatch: () => {}
      }), kp
    }

    function Jp(pp) {
      try {
        (0, Lp.T)(pp.cancel())
      } catch {}
    }
    const Bp = ".zst.bin",
      Np = 1e3;
    let Tp = null;

    function fp(pp) {
      return Tp ??= function() {
        const pp = new Map,
          ip = "bloxd_wasm_webgpu:5136608,bloxd_wasm_webgl:5516677,bloxd_wasm_webgl1:4851495,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3713604";
        for (const cp of ip?.split(",") ?? []) {
          const [ip = "", Op] = cp.split(":"), op = Number(Op);
          Number.isInteger(op) && op > 0 && pp.set(ip, op)
        }
        return pp
      }(), Tp.get(pp)
    }
    async function bp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Op = fp(pp.name);
      if (void 0 === Op) return hp(await ap(pp, ip, cp), "cold-wasm");
      const Ip = lp ? new kp : null;
      let Sp;
      try {
        if (Yp = pp.url(), Pp()?.includes(Ap(Yp)) && await async function(pp) {
            const ip = new AbortController;
            let cp;
            const Op = (0, op.j)((pp => {
              cp = setTimeout((() => {
                ip.abort(), pp(null)
              }), Np)
            }));
            try {
              const cp = fetch(pp.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: ip.signal
                }),
                Ip = await (0, op.q)([cp, Op]);
              return !!Ip?.ok && ((0, Lp.T)(Ip.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(cp)
            }
          }(pp.url())) return Ip?.stop(), await async function(pp, ip, cp, Op) {
          let op = !1;
          const Ip = cp && {
            sha256: cp.sha256,
            onMismatch: () => {
              op = !0
            }
          };
          try {
            return hp(await ap(pp, Ip, Op), "warm")
          } catch (Sp) {
            const Op = await np(pp, ip, cp, null);
            if (null === Op) throw op && cp.onMismatch(), Sp;
            return console.warn(`${pp.url().href} from the HTTP cache failed: ${(0,xp.f)(Sp)}: loaded its copy instead`), hp(Op, op ? "warm-refused" : "warm-broken")
          }
        }(pp, Op, ip, cp);
        Sp = await np(pp, Op, ip, Ip)
      } finally {
        Ip?.stop()
      }
      var Yp;
      return null !== Sp ? hp(Sp, "cold-worker") : hp(await ap(pp, ip, cp), "cold-wasm")
    }

    function hp(pp, ip) {
      return {
        __proto__: null,
        module: pp,
        path: ip
      }
    }

    function ap(pp, ip, cp) {
      return void 0 === fp(pp.name) ? (0, Lp.C)(pp.url(), ip, cp) : (0, Lp.C)(pp.url(), ip, {
        ...cp,
        hideThen: !0,
        onDownloaded: () => {
          ! function(pp) {
            const ip = Pp();
            if (null === ip) return;
            const cp = Ap(pp),
              Op = ip.filter((pp => pp !== cp));
            Op.push(cp);
            try {
              localStorage.setItem(Yp, JSON.stringify(Op.slice(-Dp)))
            } catch (op) {
              console.warn(`Bloxd wasm: ${cp} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, op)
            }
          }(pp.url()), cp.onDownloaded?.()
        }
      })
    }
    async function np(pp, ip, cp, Op) {
      if (!lp || !jp()) return null;
      const op = pp.url(),
        Ip = `${op.href}${Bp}`;
      try {
        return await (0, Lp._)(Ip, ((pp, op, Sp) => Qp(Ip, ip, pp, op, Sp, cp, Op)))
      } catch (Sp) {
        return console.warn(`${(0,xp.f)(Sp)}: loading ${op.href} instead`), null
      }
    }
    let Fp = null,
      gp = !1;
    const Gp = new Map,
      rp = new Map;

    function Zp(pp, ip, cp) {
      return null === Fp ? Fp = sp(pp, ip, cp?.memoryMaximumBytes) : pp !== Fp.build ? console.warn(`Bloxd wasm: ${pp.name} was asked for after ${Fp.build.name} started loading, which this thread keeps`) : ip.name !== Fp.workers.name && console.warn(`Bloxd wasm: ${ip.name} was asked for workers after ${Fp.workers.name}, which this thread keeps`), cp?.reloadFailedDownload && !gp && (0, Op.fb)() && (gp = !0, Fp = sp(Fp.build, Fp.workers, Fp.memoryMaximumBytes)), Fp.loaded
    }

    function zp(pp, ip) {
      if (null !== Fp) return (0, op.f)([]);
      const cp = pp.filter((pp => !Gp.has(pp.name))).map((pp => {
        const cp = new AbortController,
          Op = {
            compiled: ap(pp, (0, Ip.e)(pp.name), {
              priority: ip,
              OO: cp.signal,
              onDownloaded: () => {
                Op.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  Op.downloaded = !1, null !== Fp && cp.abort()
                }
              }
            }),
            cancel: cp,
            downloaded: !1
          };
        return Gp.set(pp.name, Op), (0, op.j)((ip => {
          (0, op.u)(Op.compiled, (() => {
            Op.downloaded = !0, ip()
          }), (Op => {
            cp.signal.aborted || console.warn(`Bloxd wasm: ${pp.name}'s compile ahead of the load failed: the load compiles it afresh`, Op), ip()
          }))
        }))
      }));
      return (0, op.f)(cp)
    }

    function sp(pp, ip, cp) {
      const Ip = (0, Op.O)((async () => {
        (0, Sp.x)(), rp.clear();
        const cp = Vp(pp),
          Op = ip.name === pp.name ? cp : Vp(ip);
        for (const {
            cancel: pp
          }
          of Gp.values()) pp.abort();
        Gp.clear(), await (0, op.f)([cp, Op]);
        const Ip = await cp,
          xp = await Op;
        return (0, Sp.x)(), {
          module: Ip,
          workerModule: xp
        }
      }), pp, cp);
      return {
        build: pp,
        workers: ip,
        memoryMaximumBytes: cp,
        loaded: Ip
      }
    }

    function Kp(pp) {
      return rp.get(pp)
    }

    function Vp(pp) {
      const ip = performance.now(),
        cp = Gp.get(pp.name);
      Gp.delete(pp.name);
      const Op = !0 === cp?.downloaded ? cp : void 0;
      return void 0 !== cp && void 0 === Op && cp.cancel.abort(), (0, op.j)(((cp, Ip) => {
        const Sp = (Op, op) => {
            rp.set(pp.name, {
              path: op,
              ms: performance.now() - ip
            }), cp(Op)
          },
          xp = () => {
            (0, op.u)(ci(pp), (pp => {
              let {
                module: ip,
                path: cp
              } = pp;
              Sp(ip, cp)
            }), Ip)
          };
        void 0 === Op ? xp() : (0, op.u)(Op.compiled, (pp => {
          Sp(pp, "ahead")
        }), xp)
      }))
    }
    async function ii(pp, ip) {
      const {
        module: cp
      } = await ci(pp, {
        retries: ip
      });
      return cp
    }
    async function ci(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await bp(pp, (0, Ip.e)(pp.name), ip)
    }
  },
  6762: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp
    });
    var Op = cp(2970);
    const op = {
      bloxd_wasm: () => "b2340e61a7d448277a389ebeac9c8ae332a7699b283661cfa159ae4f9b5e0b46",
      bloxd_wasm_client: () => "fc04a63668a4bc6b8108c23defb833287279306fc25451198e7e46db490160bc",
      bloxd_wasm_workers: () => "97593e648fa195611cb0537edc597de1fb35e0ff06c7ba452104e324f7e81a2a",
      bloxd_wasm_models: () => "2bf3307bf44a828cd7c420818a0ed5b061472ebe327b277c5eba216bf14f6d21",
      bloxd_wasm_webgpu: () => "bb0d39b71cbd62566055f119cdde94768780e27f37f323027d63e6b3a5a43b04",
      bloxd_wasm_webgl: () => "9b5a782f90a35f11a25813cfef777f781fa19f7f35be550f5ba3ccd789c15381",
      bloxd_wasm_webgl1: () => "53c64fa3997d454ee8786274e88a96df2e92e734612cf00e45f3b10812d8ed86",
      bloxd_wasm_replay: () => "6da56602c0cf1eac0fee1a30eb3409cd19788e1cf0bf82c91f41e9dc2ec26a17",
      bloxd_wasm_recorder: () => "f89c2afc61048a96a7ea68674c418202687a5df82028a7c7506a545f43cf8a00",
      bloxd_wasm_anim: () => "12c4beb6cacfbdea124da1b78d9d3bb64d476f26a1d82ae9031fb1eb6b45b89d",
      bloxd_wasm_textures: () => "8da34a927a2e21429dd7b220d476b1d909f2b62d3b85d0f3e892b23b3c44d36f",
      bloxd_wasm_shader_pack: () => "5e1ab13681c364aca3fb9e7bad689eb7302538f98091c87c0994a7538b0e884b"
    };
    var Ip = cp(4791);

    function Sp(pp) {
      const ip = Object.prototype.hasOwnProperty.call(op, pp) ? op[pp]() : void 0;
      if (void 0 !== ip) return {
        sha256: ip,
        onMismatch: Ip.v
      };
      throw new Op.g(`${pp} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);