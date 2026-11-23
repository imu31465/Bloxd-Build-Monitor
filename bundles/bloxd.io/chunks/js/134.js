export const id = 134;
export const ids = [134];
export const modules = {
  38762: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ak,
      g: () => tk,
      i: () => wk,
      k: () => Lk,
      l: () => qk,
      o: () => jk
    });
    var Xk = Ik(314),
      Tk = Ik(1652);
    const ik = "A valid external Instance reference no longer exists.",
      yk = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      lk = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const ak = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function qk(kk, Fk) {
      return kk ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(kk) {
        var Fk;
        const Ik = null !== (Fk = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(kk)) && void 0 !== Fk ? Fk : /failed with ([A-Z][A-Z0-9_]+)/.exec(kk);
        return Ik ? Ik[1] : kk.includes(ik) ? "gpu_process_lost" : "other"
      }(Fk)
    }

    function Lk(kk) {
      return `${(null===kk||void 0===kk?void 0:kk.vendor)||"unknown vendor"} ${(null===kk||void 0===kk?void 0:kk.architecture)||"unknown architecture"}`
    }

    function tk(kk) {
      return Hk(kk)[1]
    }

    function Zk(kk) {
      return Hk(kk)[2]
    }

    function jk(kk, Fk, Ik) {
      const Tk = (0, Xk.e)(),
        ik = null !== Tk && Tk >= Fk,
        yk = document.hidden ? "hidden" : ik ? "shown" : "visible",
        lk = ik ? Ik - Tk : null;
      return {
        page: null === lk ? yk : `${yk}${tk(lk)}`,
        code: `${kk}_${null===lk?yk:`${yk}_${Zk(lk)}`}_${ek(Ik)}`
      }
    }

    function ek(kk) {
      if ((0, Tk.c)()) return "ad_open";
      const Fk = (0, Tk.b)();
      return null === Fk ? "ad_none" : `ad_${Zk(kk-Fk.endedAt)}_${Fk.pageHid?"h":"v"}`
    }

    function wk(kk) {
      return Jk(lk, kk)[1]
    }

    function Hk(kk) {
      return Jk(yk, kk)
    }

    function Jk(kk, Fk) {
      var Ik;
      return null !== (Ik = kk.find((kk => {
        let [Ik] = kk;
        return Fk < Ik
      }))) && void 0 !== Ik ? Ik : kk[kk.length - 1]
    }
  },
  39058: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ak
    });
    var Xk = Ik(8880),
      Tk = Ik(36486),
      ik = Ik(39066);
    const yk = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      lk = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function ak(kk, Fk) {
      if (kk instanceof Tk.f) return {
        at: yk[Fk],
        code: 0
      };
      const Ik = (0, Xk.g)(kk),
        ak = "number" === typeof Ik ? Ik : 0;
      return null !== (0, ik.l)(ak).name ? {
        at: "refused",
        code: ak
      } : {
        at: lk[Fk],
        code: ak
      }
    }
  },
  8880: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik,
      g: () => yk,
      j: () => lk,
      n: () => qk,
      p: () => ak
    });
    var Xk = Ik(187),
      Tk = Ik(4612);

    function ik(kk) {
      return yk(kk) === Xk.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function yk(kk) {
      return "object" === typeof kk && null !== kk ? kk.code : void 0
    }

    function lk(kk) {
      var Fk;
      return null !== (Fk = Object.keys(Tk.b).find((Fk => Tk.b[Fk] === kk))) && void 0 !== Fk ? Fk : null
    }

    function ak(kk) {
      return "notWhitelisted" === kk ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const qk = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  39066: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk,
      e: () => ik,
      i: () => lk,
      l: () => Lk,
      n: () => ak,
      p: () => yk
    });
    var Xk = Ik(187);
    const Tk = 3e3,
      ik = 15e3;

    function yk(kk) {
      const Fk = kk.endsWith(Xk.m);
      return {
        text: (Fk ? kk.slice(0, -Xk.m.length) : kk) || null,
        dropsCache: Fk
      }
    }
    const lk = "Either your internet isn't working or this is a bug.";

    function ak(kk, Fk) {
      const Ik = Lk(kk);
      return null !== Ik.name && "" === Xk.d[Ik.name].text && null !== Fk ? Fk : Ik.reason
    }
    const qk = "You were removed from the game.";

    function Lk(kk) {
      var Fk;
      let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Tk = null !== (Fk = Object.keys(Xk.d).find((Fk => Xk.d[Fk].code === kk))) && void 0 !== Fk ? Fk : null;
      if (null === Tk) return {
        code: kk,
        name: Tk,
        reason: null !== Ik && void 0 !== Ik ? Ik : `${lk}\nCode: ${kk}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: ik,
        canReconnect: yk = !1
      } = Xk.d[Tk], ak = kk === Xk.d.outdatedVersion.code || kk === Xk.d.loadRecaptchaError.code;
      return {
        code: kk,
        name: Tk,
        reason: "" !== ik ? ik : null !== Ik && void 0 !== Ik ? Ik : kk === Xk.d.gameOrPluginKick.code ? qk : `Code: ${kk}`,
        canReconnect: yk,
        automaticallyReconnect: kk === Xk.d.customGameUpdated.code || kk === Xk.d.duplicateLobbyNameError.code,
        requiresRefresh: ak
      }
    }
  },
  36879: (kk, Fk, Ik) => {
    function Xk(kk) {
      return "fetch" === kk || "timeout" === kk || "integrity" === kk ? "download" : "browser"
    }
    Ik.d(Fk, {
      d: () => Tk,
      f: () => yk,
      i: () => ak,
      j: () => lk,
      l: () => Xk,
      p: () => ik
    });
    const Tk = "https://discord.gg/playbloxd";

    function ik(kk) {
      return "download" === kk ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: "wasmScreens:unsupportedTitle",
        help: "wasmScreens:unsupportedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function yk(kk, Fk) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: Fk ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: kk.code
        },
        discordLink: Fk,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function lk() {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:turnstilePageTitle",
        help: "wasmScreens:turnstilePageHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function ak(kk, Fk, Ik) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: Ik ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: kk.reason
        },
        discordLink: null === kk.name,
        confirm: Fk ? "general:reconnect" : kk.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36297: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => hk,
      c: () => kF,
      e: () => Dk,
      h: () => mk
    });
    var Xk = Ik(2801),
      Tk = Ik(2809),
      ik = Ik(6599),
      yk = Ik(4692),
      lk = Ik(2806),
      ak = Ik(2803);
    const qk = "bloxd-wasmDownloaded",
      Lk = 12;

    function tk(kk) {
      return kk.pathname.slice(kk.pathname.lastIndexOf("/") + 1)
    }

    function Zk() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const kk = JSON.parse(localStorage.getItem(qk) ?? "[]");
        return Array.isArray(kk) ? kk.filter((kk => "string" === typeof kk)) : []
      } catch (kk) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", kk), null
      }
    }
    const jk = Reflect.apply,
      ek = "undefined" === typeof Worker ? void 0 : Worker,
      wk = ek?.prototype.postMessage,
      Hk = ek?.prototype.terminate,
      Jk = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      xk = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      Pk = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      Kk = function() {
        try {
          return (0, yk.m)(ek, "Worker", !0) && (0, yk.m)(wk, "postMessage") && (0, yk.m)(Hk, "terminate") && (0, yk.m)(Pk, "buffer") && void 0 !== Jk && void 0 !== xk
        } catch {
          return !1
        }
      }();
    let Qk = !1;

    function sk() {
      return Kk && !Qk
    }
    class Vk {
      worker = null;
      failed = !1;
      constructor() {
        if (sk()) try {
          this.worker = Sk(), jk(Jk, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const kk = this.worker;
        if (this.worker = null, null !== kk && this.failed) throw jk(Hk, kk, []), new Error("it did not run");
        return kk
      }
      stop() {
        const kk = this.worker;
        this.worker = null, null !== kk && jk(Hk, kk, [])
      }
    }
    class zk {
      decoded;
      worker;
      reject;
      constructor(kk, Fk, Ik, Xk, ik) {
        try {
          this.worker = ik?.take() ?? Sk()
        } catch (qk) {
          throw Qk = !0, new Error(`The zstd decoder's worker did not start: ${(0,lk.d)(qk)}`)
        }
        const yk = this.worker;
        this.decoded = (0, Tk.i)(((Fk, Tk) => {
          this.reject = Tk;
          const ik = (kk, Fk) => {
            jk(Jk, yk, [kk, Fk])
          };
          ik("message", (kk => {
            Xk();
            try {
              const Xk = jk(xk, kk, []);
              if (!0 === Xk) Fk();
              else {
                if ("string" === typeof Xk) throw Xk.startsWith(lk.c) && (Qk = !0), new Error(Xk);
                Ik(Xk, jk(ak.z, Xk, []))
              }
            } catch (qk) {
              Tk(qk)
            }
          })), ik("error", (() => {
            Qk = !0, Tk(new Error("The zstd decoder's worker did not run"))
          })), ik("messageerror", (() => {
            Tk(new Error(`${kk}'s decoder sent a piece that could not be read`))
          }))
        })), (0, ak.Y)(this.decoded), jk(wk, yk, [
          [kk, Fk]
        ])
      }
      push(kk) {
        jk(wk, this.worker, [kk, [jk(Pk, kk, [])]])
      }
      end() {
        jk(wk, this.worker, [null])
      }
      markWorkerFailed() {
        Qk = !0
      }
      fail(kk) {
        this.reject(kk), this.terminate()
      }
      terminate() {
        jk(Hk, this.worker, [])
      }
    }

    function Sk() {
      if (globalThis.Worker !== ek) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(Ik.p + Ik.u(67), Ik.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const vk = Reflect.apply,
      Ek = ArrayBuffer,
      Ok = "undefined" === typeof Response ? void 0 : Response,
      nk = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      Gk = function() {
        let kk;
        void 0 !== nk && new nk({
          __proto__: null,
          start(Fk) {
            const {
              enqueue: Ik,
              close: Xk,
              error: Tk
            } = Object.getPrototypeOf(Fk);
            kk = {
              enqueue: Ik,
              close: Xk,
              error: Tk
            }
          }
        }, {
          __proto__: null
        });
        return kk
      }(),
      pk = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== Gk && (0, yk.m)(Ok, "Response", !0) && (0, yk.m)(nk, "ReadableStream", !0) && (0, yk.m)(Gk.enqueue, "enqueue") && (0, yk.m)(Gk.close, "close") && (0, yk.m)(Gk.error, "error") && (0, yk.m)(ak.cb, "body") && (0, yk.m)(ak.Q, "getReader") && (0, yk.m)(ak.$, "read")
        } catch {
          return !1
        }
      }();
    async function uk(kk, Fk, Ik, Xk, ik, yk, qk) {
      const Lk = new Ek(Fk),
        {
          controller: tk,
          compiled: Zk
        } = function(kk) {
          try {
            let kk;
            const Fk = new nk({
                __proto__: null,
                start(Fk) {
                  kk = Fk
                }
              }, {
                __proto__: null
              }),
              Ik = new Ok(Fk, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: kk,
              compiled: (0, ak.Y)((0, ak.B)((0, ak.ib)(Ik)))
            }
          } catch (Fk) {
            throw new Error(`${kk} could not be streamed into a compile: ${(0,lk.d)(Fk)}`)
          }
        }(kk),
        {
          enqueue: jk,
          close: ek,
          error: wk
        } = Gk,
        Hk = kk => {
          try {
            vk(wk, tk, [kk])
          } catch {}
        };
      let Jk = 0;
      const xk = (Ik, Xk) => {
        if (Jk + Xk > Fk) throw new Error(`${kk} decoded past its module's ${Fk} bytes`);
        vk(ak.fb, new ak.n(Lk), [new ak.n(Ik), Jk]);
        try {
          vk(jk, tk, [new ak.n(Lk, Jk, Xk)])
        } catch {}
        Jk += Xk
      };
      let Pk, Kk;
      try {
        Pk = new zk(kk, Fk, xk, Xk, qk)
      } catch (Sk) {
        throw Hk(Sk), Sk
      }
      const Qk = kk => {
        Pk.fail(kk), void 0 !== Kk && bk(Kk)
      };
      let sk = !1;
      Ik.addEventListener("abort", (() => {
        sk && Pk.markWorkerFailed(), Qk(new Error(`${kk} stalled`))
      }), {
        once: !0
      }), (0, Tk.t)(Zk, (() => {}), Qk);
      try {
        let yk;
        try {
          yk = await fetch(kk, {
            signal: Ik
          })
        } catch (Sk) {
          throw new Error(`Fetching ${kk} failed: ${(0,lk.d)(Sk)}`)
        }
        const {
          ok: qk,
          status: Lk,
          body: tk
        } = function(kk, Fk) {
          try {
            const {
              ok: kk,
              status: Ik
            } = Fk;
            return {
              ok: kk,
              status: Ik,
              body: vk(ak.cb, Fk, [])
            }
          } catch {
            throw new Error(`${kk} came in a response a page script made`)
          }
        }(kk, yk);
        if (!qk) throw new Error(`Fetching ${kk} failed: HTTP ${Lk}`);
        Xk();
        const Zk = vk(ak.Q, tk, []);
        Kk = Zk;
        const jk = () => {
          bk(Zk)
        };
        for ((0, Tk.t)(Pk.decoded, jk, jk);;) {
          let Fk;
          try {
            Fk = await vk(ak.$, Zk, [])
          } catch (Sk) {
            throw new Error(`Downloading ${kk} failed: ${(0,lk.d)(Sk)}`)
          }
          if (Fk.done) break;
          Xk(), Pk.push(Fk.value)
        }
        if (sk = !0, Pk.end(), await Pk.decoded, ik(), Jk !== Fk) throw new Error(`${kk} ended before its module did`)
      } catch (Sk) {
        throw Hk(Sk), Qk(Sk), Sk
      }
      Pk.terminate();
      try {
        vk(ek, tk, [])
      } catch {}
      const Vk = await Zk;
      return void 0 !== yk && await (0, ak.A)(kk, new ak.n(Lk), {
        sha256: yk.sha256,
        onMismatch: () => {}
      }), Vk
    }

    function bk(kk) {
      try {
        (0, ak.Y)(kk.cancel())
      } catch {}
    }
    const Rk = ".zst.bin",
      Uk = 1e3;
    let Ck = null;

    function Nk(kk) {
      return Ck ??= function() {
        const kk = new Map,
          Fk = "bloxd_wasm_webgpu:5121311,bloxd_wasm_webgl:5500808,bloxd_wasm_webgl1:4836347,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3704284";
        for (const Ik of Fk?.split(",") ?? []) {
          const [Fk = "", Xk] = Ik.split(":"), Tk = Number(Xk);
          Number.isInteger(Tk) && Tk > 0 && kk.set(Fk, Tk)
        }
        return kk
      }(), Ck.get(kk)
    }
    async function ck(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Xk = Nk(kk.name);
      if (void 0 === Xk) return Wk(await fk(kk, Fk, Ik), "cold-wasm");
      const ik = pk ? new Vk : null;
      let yk;
      try {
        if (qk = kk.url(), Zk()?.includes(tk(qk)) && await async function(kk) {
            const Fk = new AbortController;
            let Ik;
            const Xk = (0, Tk.i)((kk => {
              Ik = setTimeout((() => {
                Fk.abort(), kk(null)
              }), Uk)
            }));
            try {
              const Ik = fetch(kk.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: Fk.signal
                }),
                ik = await (0, Tk.s)([Ik, Xk]);
              return !!ik?.ok && ((0, ak.Y)(ik.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(Ik)
            }
          }(kk.url())) return ik?.stop(), await async function(kk, Fk, Ik, Xk) {
          let Tk = !1;
          const ik = Ik && {
            sha256: Ik.sha256,
            onMismatch: () => {
              Tk = !0
            }
          };
          try {
            return Wk(await fk(kk, ik, Xk), "warm")
          } catch (yk) {
            const Xk = await Bk(kk, Fk, Ik, null);
            if (null === Xk) throw Tk && Ik.onMismatch(), yk;
            return console.warn(`${kk.url().href} from the HTTP cache failed: ${(0,lk.d)(yk)}: loaded its copy instead`), Wk(Xk, Tk ? "warm-refused" : "warm-broken")
          }
        }(kk, Xk, Fk, Ik);
        yk = await Bk(kk, Xk, Fk, ik)
      } finally {
        ik?.stop()
      }
      var qk;
      return null !== yk ? Wk(yk, "cold-worker") : Wk(await fk(kk, Fk, Ik), "cold-wasm")
    }

    function Wk(kk, Fk) {
      return {
        __proto__: null,
        module: kk,
        path: Fk
      }
    }

    function fk(kk, Fk, Ik) {
      return void 0 === Nk(kk.name) ? (0, ak.G)(kk.url(), Fk, Ik) : (0, ak.G)(kk.url(), Fk, {
        ...Ik,
        hideThen: !0,
        onDownloaded: () => {
          ! function(kk) {
            const Fk = Zk();
            if (null === Fk) return;
            const Ik = tk(kk),
              Xk = Fk.filter((kk => kk !== Ik));
            Xk.push(Ik);
            try {
              localStorage.setItem(qk, JSON.stringify(Xk.slice(-Lk)))
            } catch (Tk) {
              console.warn(`Bloxd wasm: ${Ik} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, Tk)
            }
          }(kk.url()), Ik.onDownloaded?.()
        }
      })
    }
    async function Bk(kk, Fk, Ik, Xk) {
      if (!pk || !sk()) return null;
      const Tk = kk.url(),
        ik = `${Tk.href}${Rk}`;
      try {
        return await (0, ak.hb)(ik, ((kk, Tk, yk) => uk(ik, Fk, kk, Tk, yk, Ik, Xk)))
      } catch (yk) {
        return console.warn(`${(0,lk.d)(yk)}: loading ${Tk.href} instead`), null
      }
    }
    let dk = null,
      Yk = !1;
    const Ak = new Map,
      gk = new Map;

    function mk(kk, Fk, Ik) {
      return null === dk ? dk = rk(kk, Fk, Ik?.memoryMaximumBytes) : kk !== dk.build ? console.warn(`Bloxd wasm: ${kk.name} was asked for after ${dk.build.name} started loading, which this thread keeps`) : Fk.name !== dk.workers.name && console.warn(`Bloxd wasm: ${Fk.name} was asked for workers after ${dk.workers.name}, which this thread keeps`), Ik?.reloadFailedDownload && !Yk && (0, Xk.R)() && (Yk = !0, dk = rk(dk.build, dk.workers, dk.memoryMaximumBytes)), dk.loaded
    }

    function hk(kk, Fk) {
      if (null !== dk) return (0, Tk.f)([]);
      const Ik = kk.filter((kk => !Ak.has(kk.name))).map((kk => {
        const Ik = new AbortController,
          Xk = {
            compiled: fk(kk, (0, ik.c)(kk.name), {
              priority: Fk,
              iI: Ik.signal,
              onDownloaded: () => {
                Xk.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  Xk.downloaded = !1, null !== dk && Ik.abort()
                }
              }
            }),
            cancel: Ik,
            downloaded: !1
          };
        return Ak.set(kk.name, Xk), (0, Tk.i)((Fk => {
          (0, Tk.t)(Xk.compiled, (() => {
            Xk.downloaded = !0, Fk()
          }), (Xk => {
            Ik.signal.aborted || console.warn(`Bloxd wasm: ${kk.name}'s compile ahead of the load failed: the load compiles it afresh`, Xk), Fk()
          }))
        }))
      }));
      return (0, Tk.f)(Ik)
    }

    function rk(kk, Fk, Ik) {
      const ik = (0, Xk.D)((async () => {
        (0, yk.F)(), gk.clear();
        const Ik = Mk(kk),
          Xk = Fk.name === kk.name ? Ik : Mk(Fk);
        for (const {
            cancel: kk
          }
          of Ak.values()) kk.abort();
        Ak.clear(), await (0, Tk.f)([Ik, Xk]);
        const ik = await Ik,
          lk = await Xk;
        return (0, yk.F)(), {
          module: ik,
          workerModule: lk
        }
      }), kk, Ik);
      return {
        build: kk,
        workers: Fk,
        memoryMaximumBytes: Ik,
        loaded: ik
      }
    }

    function Dk(kk) {
      return gk.get(kk)
    }

    function Mk(kk) {
      const Fk = performance.now(),
        Ik = Ak.get(kk.name);
      Ak.delete(kk.name);
      const Xk = !0 === Ik?.downloaded ? Ik : void 0;
      return void 0 !== Ik && void 0 === Xk && Ik.cancel.abort(), (0, Tk.i)(((Ik, ik) => {
        const yk = (Xk, Tk) => {
            gk.set(kk.name, {
              path: Tk,
              ms: performance.now() - Fk
            }), Ik(Xk)
          },
          lk = () => {
            (0, Tk.t)(FF(kk), (kk => {
              let {
                module: Fk,
                path: Ik
              } = kk;
              yk(Fk, Ik)
            }), ik)
          };
        void 0 === Xk ? lk() : (0, Tk.t)(Xk.compiled, (kk => {
          yk(kk, "ahead")
        }), lk)
      }))
    }
    async function kF(kk, Fk) {
      const {
        module: Ik
      } = await FF(kk, {
        retries: Fk
      });
      return Ik
    }
    async function FF(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await ck(kk, (0, ik.c)(kk.name), Fk)
    }
  },
  6599: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk
    });
    var Xk = Ik(2803);
    const Tk = {
      bloxd_wasm: () => "e2f9e22926b42992a62e6da973b3cd1227290abc3e4b086f16ef7a6e7451e01c",
      bloxd_wasm_client: () => "197b3a58630dd256c73f6be56077b03aba52688d49b256cfcb5b4297a602be6f",
      bloxd_wasm_workers: () => "c531aa2c5eb2277940017568a817b82729d5bd8e37ed09fdb9542eeedecfabb2",
      bloxd_wasm_models: () => "82813a7dd849808b1d07d41cb80b2035277c675f83cdbe5540a809aa86e18dae",
      bloxd_wasm_webgpu: () => "2066e38e37e17624dae8b4b9c559f5daf047cb3ceb4eb8056d5135d5b3d9eb24",
      bloxd_wasm_webgl: () => "3d1d580992195f6369c2533ce100ae6e8452da7398faf88e49b339f937ec6192",
      bloxd_wasm_webgl1: () => "8032d9766cccf3c8343274c4d612b6bb3252bd4e5129a88b0ce812c44371db80",
      bloxd_wasm_replay: () => "8d3f5aa602437d8a622249e4b26ef375d3132f03479495456878d8869447f290",
      bloxd_wasm_recorder: () => "4e4293beaac6f6862394c42133a435a6ade3bf181e4ae4bc1a5a3c0c8e0c9dd2",
      bloxd_wasm_anim: () => "125adb66f5cee367958854d2a9364d34f8d55bf2c7b62e20f2a9dcc7b9af5035",
      bloxd_wasm_textures: () => "b45159af64c2cb22c8ac7c32ed16b3591e0026feb57c6ebfb95e710677904764",
      bloxd_wasm_shader_pack: () => "b4044fc49c30628f5ddaad152e8054fb78f46958556f35beebe36f24a022d42c"
    };
    var ik = Ik(4692);

    function yk(kk) {
      const Fk = Object.prototype.hasOwnProperty.call(Tk, kk) ? Tk[kk]() : void 0;
      if (void 0 !== Fk) return {
        sha256: Fk,
        onMismatch: ik.C
      };
      throw new Xk.g(`${kk} has no release digest, so this build refuses it`)
    }
  },
  6622: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk,
      e: () => yk,
      f: () => lk,
      h: () => Tk,
      i: () => ik
    });
    const Xk = ["terrain", "liquid", "model"];

    function Tk() {
      const kk = [];
      for (const Fk of [!1, !0])
        for (const Ik of Xk) kk.push({
          strict: Fk,
          program: Ik
        });
      return kk
    }

    function ik(kk) {
      return `${kk.strict?"strict":"allow"}.${kk.program}`
    }

    function yk(kk) {
      return !kk.hooks.vertex && !kk.hooks.surface && !kk.hooks.light
    }

    function lk(kk, Fk) {
      return "off" !== Fk && (null === kk || kk.some((kk => kk.key.strict === ("strict" === Fk) && !yk(kk))))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);