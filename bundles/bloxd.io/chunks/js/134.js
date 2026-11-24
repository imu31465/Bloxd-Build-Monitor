export const id = 134;
export const ids = [134];
export const modules = {
  38858: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Dm,
      g: () => pm,
      i: () => Em,
      m: () => Ym,
      n: () => Rm,
      q: () => im,
      u: () => om
    });
    var hm = fm(336),
      Am = fm(1698);
    const am = "A valid external Instance reference no longer exists.",
      xm = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      wm = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const Dm = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function im(mm, Tm) {
      return mm ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(mm) {
        var Tm;
        const fm = null !== (Tm = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(mm)) && void 0 !== Tm ? Tm : /failed with ([A-Z][A-Z0-9_]+)/.exec(mm);
        return fm ? fm[1] : mm.includes(am) ? "gpu_process_lost" : "other"
      }(Tm)
    }

    function Rm(mm) {
      return `${(null===mm||void 0===mm?void 0:mm.vendor)||"unknown vendor"} ${(null===mm||void 0===mm?void 0:mm.architecture)||"unknown architecture"}`
    }

    function pm(mm) {
      return qm(mm)[1]
    }

    function Em(mm) {
      return qm(mm)[2]
    }

    function om(mm, Tm, fm) {
      const Am = (0, hm.f)(),
        am = null !== Am && Am >= Tm,
        xm = document.hidden ? "hidden" : am ? "shown" : "visible",
        wm = am ? fm - Am : null;
      return {
        page: null === wm ? xm : `${xm}${pm(wm)}`,
        code: `${mm}_${null===wm?xm:`${xm}_${Em(wm)}`}_${Om(fm)}`
      }
    }

    function Om(mm) {
      if ((0, Am.e)()) return "ad_open";
      const Tm = (0, Am.c)();
      return null === Tm ? "ad_none" : `ad_${Em(mm-Tm.endedAt)}_${Tm.pageHid?"h":"v"}`
    }

    function Ym(mm) {
      return jm(wm, mm)[1]
    }

    function qm(mm) {
      return jm(xm, mm)
    }

    function jm(mm, Tm) {
      var fm;
      return null !== (fm = mm.find((mm => {
        let [fm] = mm;
        return Tm < fm
      }))) && void 0 !== fm ? fm : mm[mm.length - 1]
    }
  },
  39180: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Dm
    });
    var hm = fm(8854),
      Am = fm(36573),
      am = fm(39187);
    const xm = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      wm = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function Dm(mm, Tm) {
      if (mm instanceof Am.e) return {
        at: xm[Tm],
        code: 0
      };
      const fm = (0, hm.d)(mm),
        Dm = "number" === typeof fm ? fm : 0;
      return null !== (0, am.k)(Dm).name ? {
        at: "refused",
        code: Dm
      } : {
        at: wm[Tm],
        code: Dm
      }
    }
  },
  8854: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      d: () => xm,
      h: () => wm,
      i: () => im,
      m: () => Dm
    });
    var hm = fm(198),
      Am = fm(4564);

    function am(mm) {
      return xm(mm) === hm.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function xm(mm) {
      return "object" === typeof mm && null !== mm ? mm.code : void 0
    }

    function wm(mm) {
      var Tm;
      return null !== (Tm = Object.keys(Am.e).find((Tm => Am.e[Tm] === mm))) && void 0 !== Tm ? Tm : null
    }

    function Dm(mm) {
      return "notWhitelisted" === mm ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const im = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  39187: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am,
      f: () => am,
      g: () => wm,
      k: () => Rm,
      m: () => Dm,
      p: () => xm
    });
    var hm = fm(198);
    const Am = 3e3,
      am = 15e3;

    function xm(mm) {
      const Tm = mm.endsWith(hm.i);
      return {
        text: (Tm ? mm.slice(0, -hm.i.length) : mm) || null,
        dropsCache: Tm
      }
    }
    const wm = "Either your internet isn't working or this is a bug.";

    function Dm(mm, Tm) {
      const fm = Rm(mm);
      return null !== fm.name && "" === hm.b[fm.name].text && null !== Tm ? Tm : fm.reason
    }
    const im = "You were removed from the game.";

    function Rm(mm) {
      var Tm;
      let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Am = null !== (Tm = Object.keys(hm.b).find((Tm => hm.b[Tm].code === mm))) && void 0 !== Tm ? Tm : null;
      if (null === Am) return {
        code: mm,
        name: Am,
        reason: null !== fm && void 0 !== fm ? fm : `${wm}\nCode: ${mm}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: am,
        canReconnect: xm = !1
      } = hm.b[Am], Dm = mm === hm.b.outdatedVersion.code || mm === hm.b.loadRecaptchaError.code;
      return {
        code: mm,
        name: Am,
        reason: "" !== am ? am : null !== fm && void 0 !== fm ? fm : mm === hm.b.gameOrPluginKick.code ? im : `Code: ${mm}`,
        canReconnect: xm,
        automaticallyReconnect: mm === hm.b.customGameUpdated.code || mm === hm.b.duplicateLobbyNameError.code,
        requiresRefresh: Dm
      }
    }
  },
  36943: (mm, Tm, fm) => {
    function hm(mm) {
      return "fetch" === mm || "timeout" === mm || "integrity" === mm ? "download" : "browser"
    }
    fm.d(Tm, {
      c: () => Am,
      e: () => xm,
      h: () => Dm,
      j: () => wm,
      m: () => hm,
      q: () => am
    });
    const Am = "https://discord.gg/playbloxd";

    function am(mm) {
      return "download" === mm ? {
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

    function xm(mm, Tm) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: Tm ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: mm.code
        },
        discordLink: Tm,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function wm() {
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

    function Dm(mm, Tm, fm) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: fm ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: mm.reason
        },
        discordLink: null === mm.name,
        confirm: Tm ? "general:reconnect" : mm.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36395: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => dm,
      f: () => mT,
      g: () => Wm,
      i: () => Um
    });
    var hm = fm(2873),
      Am = fm(2888),
      am = fm(6571),
      xm = fm(4632),
      wm = fm(2882),
      Dm = fm(2876);
    const im = "bloxd-wasmDownloaded",
      Rm = 12;

    function pm(mm) {
      return mm.pathname.slice(mm.pathname.lastIndexOf("/") + 1)
    }

    function Em() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const mm = JSON.parse(localStorage.getItem(im) ?? "[]");
        return Array.isArray(mm) ? mm.filter((mm => "string" === typeof mm)) : []
      } catch (mm) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", mm), null
      }
    }
    const om = Reflect.apply,
      Om = "undefined" === typeof Worker ? void 0 : Worker,
      Ym = Om?.prototype.postMessage,
      qm = Om?.prototype.terminate,
      jm = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      Vm = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      Im = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      Km = function() {
        try {
          return (0, xm.l)(Om, "Worker", !0) && (0, xm.l)(Ym, "postMessage") && (0, xm.l)(qm, "terminate") && (0, xm.l)(Im, "buffer") && void 0 !== jm && void 0 !== Vm
        } catch {
          return !1
        }
      }();
    let Qm = !1;

    function nm() {
      return Km && !Qm
    }
    class Jm {
      worker = null;
      failed = !1;
      constructor() {
        if (nm()) try {
          this.worker = zm(), om(jm, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const mm = this.worker;
        if (this.worker = null, null !== mm && this.failed) throw om(qm, mm, []), new Error("it did not run");
        return mm
      }
      stop() {
        const mm = this.worker;
        this.worker = null, null !== mm && om(qm, mm, [])
      }
    }
    class cm {
      decoded;
      worker;
      reject;
      constructor(mm, Tm, fm, hm, am) {
        try {
          this.worker = am?.take() ?? zm()
        } catch (im) {
          throw Qm = !0, new Error(`The zstd decoder's worker did not start: ${(0,wm.c)(im)}`)
        }
        const xm = this.worker;
        this.decoded = (0, Am.i)(((Tm, Am) => {
          this.reject = Am;
          const am = (mm, Tm) => {
            om(jm, xm, [mm, Tm])
          };
          am("message", (mm => {
            hm();
            try {
              const hm = om(Vm, mm, []);
              if (!0 === hm) Tm();
              else {
                if ("string" === typeof hm) throw hm.startsWith(wm.b) && (Qm = !0), new Error(hm);
                fm(hm, om(Dm.y, hm, []))
              }
            } catch (im) {
              Am(im)
            }
          })), am("error", (() => {
            Qm = !0, Am(new Error("The zstd decoder's worker did not run"))
          })), am("messageerror", (() => {
            Am(new Error(`${mm}'s decoder sent a piece that could not be read`))
          }))
        })), (0, Dm.X)(this.decoded), om(Ym, xm, [
          [mm, Tm]
        ])
      }
      push(mm) {
        om(Ym, this.worker, [mm, [om(Im, mm, [])]])
      }
      end() {
        om(Ym, this.worker, [null])
      }
      markWorkerFailed() {
        Qm = !0
      }
      fail(mm) {
        this.reject(mm), this.terminate()
      }
      terminate() {
        om(qm, this.worker, [])
      }
    }

    function zm() {
      if (globalThis.Worker !== Om) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(fm.p + fm.u(67), fm.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const Zm = Reflect.apply,
      km = ArrayBuffer,
      bm = "undefined" === typeof Response ? void 0 : Response,
      Sm = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      em = function() {
        let mm;
        void 0 !== Sm && new Sm({
          __proto__: null,
          start(Tm) {
            const {
              enqueue: fm,
              close: hm,
              error: Am
            } = Object.getPrototypeOf(Tm);
            mm = {
              enqueue: fm,
              close: hm,
              error: Am
            }
          }
        }, {
          __proto__: null
        });
        return mm
      }(),
      Nm = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== em && (0, xm.l)(bm, "Response", !0) && (0, xm.l)(Sm, "ReadableStream", !0) && (0, xm.l)(em.enqueue, "enqueue") && (0, xm.l)(em.close, "close") && (0, xm.l)(em.error, "error") && (0, xm.l)(Dm.$, "body") && (0, xm.l)(Dm.O, "getReader") && (0, xm.l)(Dm._, "read")
        } catch {
          return !1
        }
      }();
    async function Gm(mm, Tm, fm, hm, am, xm, im) {
      const Rm = new km(Tm),
        {
          controller: pm,
          compiled: Em
        } = function(mm) {
          try {
            let mm;
            const Tm = new Sm({
                __proto__: null,
                start(Tm) {
                  mm = Tm
                }
              }, {
                __proto__: null
              }),
              fm = new bm(Tm, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: mm,
              compiled: (0, Dm.X)((0, Dm.B)((0, Dm.ib)(fm)))
            }
          } catch (Tm) {
            throw new Error(`${mm} could not be streamed into a compile: ${(0,wm.c)(Tm)}`)
          }
        }(mm),
        {
          enqueue: om,
          close: Om,
          error: Ym
        } = em,
        qm = mm => {
          try {
            Zm(Ym, pm, [mm])
          } catch {}
        };
      let jm = 0;
      const Vm = (fm, hm) => {
        if (jm + hm > Tm) throw new Error(`${mm} decoded past its module's ${Tm} bytes`);
        Zm(Dm.bb, new Dm.n(Rm), [new Dm.n(fm), jm]);
        try {
          Zm(om, pm, [new Dm.n(Rm, jm, hm)])
        } catch {}
        jm += hm
      };
      let Im, Km;
      try {
        Im = new cm(mm, Tm, Vm, hm, im)
      } catch (zm) {
        throw qm(zm), zm
      }
      const Qm = mm => {
        Im.fail(mm), void 0 !== Km && Xm(Km)
      };
      let nm = !1;
      fm.addEventListener("abort", (() => {
        nm && Im.markWorkerFailed(), Qm(new Error(`${mm} stalled`))
      }), {
        once: !0
      }), (0, Am.v)(Em, (() => {}), Qm);
      try {
        let xm;
        try {
          xm = await fetch(mm, {
            signal: fm
          })
        } catch (zm) {
          throw new Error(`Fetching ${mm} failed: ${(0,wm.c)(zm)}`)
        }
        const {
          ok: im,
          status: Rm,
          body: pm
        } = function(mm, Tm) {
          try {
            const {
              ok: mm,
              status: fm
            } = Tm;
            return {
              ok: mm,
              status: fm,
              body: Zm(Dm.$, Tm, [])
            }
          } catch {
            throw new Error(`${mm} came in a response a page script made`)
          }
        }(mm, xm);
        if (!im) throw new Error(`Fetching ${mm} failed: HTTP ${Rm}`);
        hm();
        const Em = Zm(Dm.O, pm, []);
        Km = Em;
        const om = () => {
          Xm(Em)
        };
        for ((0, Am.v)(Im.decoded, om, om);;) {
          let Tm;
          try {
            Tm = await Zm(Dm._, Em, [])
          } catch (zm) {
            throw new Error(`Downloading ${mm} failed: ${(0,wm.c)(zm)}`)
          }
          if (Tm.done) break;
          hm(), Im.push(Tm.value)
        }
        if (nm = !0, Im.end(), await Im.decoded, am(), jm !== Tm) throw new Error(`${mm} ended before its module did`)
      } catch (zm) {
        throw qm(zm), Qm(zm), zm
      }
      Im.terminate();
      try {
        Zm(Om, pm, [])
      } catch {}
      const Jm = await Em;
      return void 0 !== xm && await (0, Dm.A)(mm, new Dm.n(Rm), {
        sha256: xm.sha256,
        onMismatch: () => {}
      }), Jm
    }

    function Xm(mm) {
      try {
        (0, Dm.X)(mm.cancel())
      } catch {}
    }
    const Pm = ".zst.bin",
      Hm = 1e3;
    let ym = null;

    function Cm(mm) {
      return ym ??= function() {
        const mm = new Map,
          Tm = "bloxd_wasm_webgpu:5121192,bloxd_wasm_webgl:5503528,bloxd_wasm_webgl1:4839018,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3704228";
        for (const fm of Tm?.split(",") ?? []) {
          const [Tm = "", hm] = fm.split(":"), Am = Number(hm);
          Number.isInteger(Am) && Am > 0 && mm.set(Tm, Am)
        }
        return mm
      }(), ym.get(mm)
    }
    async function rm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const hm = Cm(mm.name);
      if (void 0 === hm) return sm(await lm(mm, Tm, fm), "cold-wasm");
      const am = Nm ? new Jm : null;
      let xm;
      try {
        if (im = mm.url(), Em()?.includes(pm(im)) && await async function(mm) {
            const Tm = new AbortController;
            let fm;
            const hm = (0, Am.i)((mm => {
              fm = setTimeout((() => {
                Tm.abort(), mm(null)
              }), Hm)
            }));
            try {
              const fm = fetch(mm.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: Tm.signal
                }),
                am = await (0, Am.r)([fm, hm]);
              return !!am?.ok && ((0, Dm.X)(am.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(fm)
            }
          }(mm.url())) return am?.stop(), await async function(mm, Tm, fm, hm) {
          let Am = !1;
          const am = fm && {
            sha256: fm.sha256,
            onMismatch: () => {
              Am = !0
            }
          };
          try {
            return sm(await lm(mm, am, hm), "warm")
          } catch (xm) {
            const hm = await Mm(mm, Tm, fm, null);
            if (null === hm) throw Am && fm.onMismatch(), xm;
            return console.warn(`${mm.url().href} from the HTTP cache failed: ${(0,wm.c)(xm)}: loaded its copy instead`), sm(hm, Am ? "warm-refused" : "warm-broken")
          }
        }(mm, hm, Tm, fm);
        xm = await Mm(mm, hm, Tm, am)
      } finally {
        am?.stop()
      }
      var im;
      return null !== xm ? sm(xm, "cold-worker") : sm(await lm(mm, Tm, fm), "cold-wasm")
    }

    function sm(mm, Tm) {
      return {
        __proto__: null,
        module: mm,
        path: Tm
      }
    }

    function lm(mm, Tm, fm) {
      return void 0 === Cm(mm.name) ? (0, Dm.G)(mm.url(), Tm, fm) : (0, Dm.G)(mm.url(), Tm, {
        ...fm,
        hideThen: !0,
        onDownloaded: () => {
          ! function(mm) {
            const Tm = Em();
            if (null === Tm) return;
            const fm = pm(mm),
              hm = Tm.filter((mm => mm !== fm));
            hm.push(fm);
            try {
              localStorage.setItem(im, JSON.stringify(hm.slice(-Rm)))
            } catch (Am) {
              console.warn(`Bloxd wasm: ${fm} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, Am)
            }
          }(mm.url()), fm.onDownloaded?.()
        }
      })
    }
    async function Mm(mm, Tm, fm, hm) {
      if (!Nm || !nm()) return null;
      const Am = mm.url(),
        am = `${Am.href}${Pm}`;
      try {
        return await (0, Dm.eb)(am, ((mm, Am, xm) => Gm(am, Tm, mm, Am, xm, fm, hm)))
      } catch (xm) {
        return console.warn(`${(0,wm.c)(xm)}: loading ${Am.href} instead`), null
      }
    }
    let um = null,
      Bm = !1;
    const Lm = new Map,
      tm = new Map;

    function Um(mm, Tm, fm) {
      return null === um ? um = gm(mm, Tm, fm?.memoryMaximumBytes) : mm !== um.build ? console.warn(`Bloxd wasm: ${mm.name} was asked for after ${um.build.name} started loading, which this thread keeps`) : Tm.name !== um.workers.name && console.warn(`Bloxd wasm: ${Tm.name} was asked for workers after ${um.workers.name}, which this thread keeps`), fm?.reloadFailedDownload && !Bm && (0, hm.bb)() && (Bm = !0, um = gm(um.build, um.workers, um.memoryMaximumBytes)), um.loaded
    }

    function dm(mm, Tm) {
      if (null !== um) return (0, Am.f)([]);
      const fm = mm.filter((mm => !Lm.has(mm.name))).map((mm => {
        const fm = new AbortController,
          hm = {
            compiled: lm(mm, (0, am.c)(mm.name), {
              priority: Tm,
              Af: fm.signal,
              onDownloaded: () => {
                hm.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  hm.downloaded = !1, null !== um && fm.abort()
                }
              }
            }),
            cancel: fm,
            downloaded: !1
          };
        return Lm.set(mm.name, hm), (0, Am.i)((Tm => {
          (0, Am.v)(hm.compiled, (() => {
            hm.downloaded = !0, Tm()
          }), (hm => {
            fm.signal.aborted || console.warn(`Bloxd wasm: ${mm.name}'s compile ahead of the load failed: the load compiles it afresh`, hm), Tm()
          }))
        }))
      }));
      return (0, Am.f)(fm)
    }

    function gm(mm, Tm, fm) {
      const am = (0, hm.J)((async () => {
        (0, xm.z)(), tm.clear();
        const fm = Fm(mm),
          hm = Tm.name === mm.name ? fm : Fm(Tm);
        for (const {
            cancel: mm
          }
          of Lm.values()) mm.abort();
        Lm.clear(), await (0, Am.f)([fm, hm]);
        const am = await fm,
          wm = await hm;
        return (0, xm.z)(), {
          module: am,
          workerModule: wm
        }
      }), mm, fm);
      return {
        build: mm,
        workers: Tm,
        memoryMaximumBytes: fm,
        loaded: am
      }
    }

    function Wm(mm) {
      return tm.get(mm)
    }

    function Fm(mm) {
      const Tm = performance.now(),
        fm = Lm.get(mm.name);
      Lm.delete(mm.name);
      const hm = !0 === fm?.downloaded ? fm : void 0;
      return void 0 !== fm && void 0 === hm && fm.cancel.abort(), (0, Am.i)(((fm, am) => {
        const xm = (hm, Am) => {
            tm.set(mm.name, {
              path: Am,
              ms: performance.now() - Tm
            }), fm(hm)
          },
          wm = () => {
            (0, Am.v)(TT(mm), (mm => {
              let {
                module: Tm,
                path: fm
              } = mm;
              xm(Tm, fm)
            }), am)
          };
        void 0 === hm ? wm() : (0, Am.v)(hm.compiled, (mm => {
          xm(mm, "ahead")
        }), wm)
      }))
    }
    async function mT(mm, Tm) {
      const {
        module: fm
      } = await TT(mm, {
        retries: Tm
      });
      return fm
    }
    async function TT(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await rm(mm, (0, am.c)(mm.name), Tm)
    }
  },
  6571: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(2876);
    const Am = {
      bloxd_wasm: () => "613a21bc0b0d6795610be638608f6f896b7ac6493e7e1f81f22f78c10c130b20",
      bloxd_wasm_client: () => "f500bfdaa7b954839685358849e4855ad2aa63607292f3b2cdd2ad1665214c7a",
      bloxd_wasm_workers: () => "7dd9b485307e91e305e2fb397554b566560181e06f5a5b081a6f1c61898558ff",
      bloxd_wasm_models: () => "9693b1d78529633a0838c883241b819b5bd68812b4c6423ce62c95631b8c3415",
      bloxd_wasm_webgpu: () => "de2f06fb711bba52682b2f003e06cf94cb10abdd72e4193fc794f84415757080",
      bloxd_wasm_webgl: () => "7e9ad7e1a934a29dd92aaf8ef4a10e072c55d9316e0d80238bf66fd7535f3ddf",
      bloxd_wasm_webgl1: () => "700b62082439f7ae7c202d3ac83cf13cabe29e7e952f1a87e7cd44b1133e3b9f",
      bloxd_wasm_replay: () => "5341c2187f01707d5afbab140cf74533d8b2076e23e63e9a772320066cfa1513",
      bloxd_wasm_recorder: () => "c80280c22c0f6493e551f45d0599c93183458a244f322d6edf6273a3ebf0b864",
      bloxd_wasm_anim: () => "44db7f8e6b21308f32edc10720aadbb617cfd625a2a950f110c26990904d5bc8",
      bloxd_wasm_textures: () => "273e6f1c6bf63d7b0982fe740c5c8b042be9257ae55fae593545099e99bf76a8",
      bloxd_wasm_shader_pack: () => "2cca231ad5b1288911ab113a53e7191b13627c0fdb4147c6e779bb6b366f71af"
    };
    var am = fm(4632);

    function xm(mm) {
      const Tm = Object.prototype.hasOwnProperty.call(Am, mm) ? Am[mm]() : void 0;
      if (void 0 !== Tm) return {
        sha256: Tm,
        onMismatch: am.x
      };
      throw new hm.j(`${mm} has no release digest, so this build refuses it`)
    }
  },
  6586: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm,
      i: () => xm,
      l: () => wm,
      p: () => Am,
      t: () => am
    });
    const hm = ["terrain", "liquid", "model"];

    function Am() {
      const mm = [];
      for (const Tm of [!1, !0])
        for (const fm of hm) mm.push({
          strict: Tm,
          program: fm
        });
      return mm
    }

    function am(mm) {
      return `${mm.strict?"strict":"allow"}.${mm.program}`
    }

    function xm(mm) {
      return !mm.hooks.vertex && !mm.hooks.surface && !mm.hooks.light
    }

    function wm(mm, Tm) {
      return "off" !== Tm && (null === mm || mm.some((mm => mm.key.strict === ("strict" === Tm) && !xm(mm))))
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);