export const id = 161;
export const ids = [161];
export const modules = {
  35293: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      f: () => jr
    });
    var Zr = Qr(285),
      Wr = Qr(135),
      ar = Qr(35296);

    function jr() {
      var rr, Sr, Qr;
      return null !== (rr = (0, Zr.j)(null !== (Sr = null === (Qr = (0, Wr.q)()) || void 0 === Qr ? void 0 : Qr.renderer) && void 0 !== Sr ? Sr : null, (0, Wr.m)())) && void 0 !== rr ? rr : "unknown"
    }

    function Ir(rr, Sr, Qr, Zr, Wr) {
      const jr = null === Sr ? "untimed" : `${Math.round(Sr)} ms`;
      return `frames stalled, ${Qr}, gpu ${(0,ar.b)(Wr)}, blocking ${jr}, drawn ${Math.round(rr)} ms apart, timers ${Zr.timers}, timer gap ${Math.round(Zr.longestGapMs)} ms`
    }
  },
  40627: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => fr
    });
    var Zr = Qr(10062),
      Wr = Qr(38018),
      ar = Qr(40632);
    const jr = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      Ir = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function fr(rr, Sr) {
      if (rr instanceof Wr.c) return {
        at: jr[Sr],
        code: 0
      };
      const Qr = (0, Zr.d)(rr),
        fr = "number" === typeof Qr ? Qr : 0;
      return null !== (0, ar.i)(fr).name ? {
        at: "refused",
        code: fr
      } : {
        at: Ir[Sr],
        code: fr
      }
    }
  },
  10062: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      d: () => jr,
      e: () => Ir,
      f: () => Er,
      g: () => fr
    });
    var Zr = Qr(208),
      Wr = Qr(5384);

    function ar(rr) {
      return jr(rr) === Zr.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function jr(rr) {
      return "object" === typeof rr && null !== rr ? rr.code : void 0
    }

    function Ir(rr) {
      var Sr;
      return null !== (Sr = Object.keys(Wr.b).find((Sr => Wr.b[Sr] === rr))) && void 0 !== Sr ? Sr : null
    }

    function fr(rr) {
      return "notWhitelisted" === rr ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Er = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  35296: (rr, Sr, Qr) => {
    function Zr(rr) {
      return String(rr).replace(/\d/g, (rr => String.fromCharCode(97 + Number(rr))))
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  },
  40632: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      i: () => fr,
      j: () => jr,
      n: () => Wr
    });
    var Zr = Qr(208);

    function Wr(rr) {
      const Sr = rr.endsWith(Zr.l);
      return {
        text: (Sr ? rr.slice(0, -Zr.l.length) : rr) || null,
        dropsCache: Sr
      }
    }
    const ar = "Either your internet isn't working or this is a bug.";

    function jr(rr, Sr) {
      const Qr = fr(rr);
      return null !== Qr.name && "" === Zr.e[Qr.name].text && null !== Sr ? Sr : Qr.reason
    }
    const Ir = "You were removed from the game.";

    function fr(rr) {
      var Sr;
      let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Wr = null !== (Sr = Object.keys(Zr.e).find((Sr => Zr.e[Sr].code === rr))) && void 0 !== Sr ? Sr : null;
      if (null === Wr) return {
        code: rr,
        name: Wr,
        reason: null !== Qr && void 0 !== Qr ? Qr : `${ar}\nCode: ${rr}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: jr,
        canReconnect: fr = !1
      } = Zr.e[Wr], Er = rr === Zr.e.outdatedVersion.code || rr === Zr.e.loadRecaptchaError.code;
      return {
        code: rr,
        name: Wr,
        reason: "" !== jr ? jr : null !== Qr && void 0 !== Qr ? Qr : rr === Zr.e.gameOrPluginKick.code ? Ir : `Code: ${rr}`,
        canReconnect: fr,
        automaticallyReconnect: rr === Zr.e.customGameUpdated.code || rr === Zr.e.duplicateLobbyNameError.code,
        requiresRefresh: Er
      }
    }
  },
  42500: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      e: () => pr,
      g: () => jr,
      i: () => Wr,
      k: () => Ir,
      n: () => Er
    });
    class Zr extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Wr(rr) {
      return rr instanceof RangeError && /call stack/i.test(rr.message) || rr instanceof Error && "InternalError" === rr.name && /recursion/i.test(rr.message)
    }
    const ar = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function jr(rr) {
      var Sr;
      return rr instanceof WebAssembly.RuntimeError || rr instanceof Zr || Wr(rr) && ar.test(null !== (Sr = rr.stack) && void 0 !== Sr ? Sr : "")
    }

    function Ir(rr, Sr) {
      if (jr(rr)) throw rr;
      console.error(Sr, rr)
    }

    function fr(rr, Sr, Qr, Wr, ar) {
      if (Sr % Wr !== 0 || Sr + Qr > rr.byteLength) throw new Zr(`${ar}: ${Qr} bytes at ${Sr}, ${Wr}-aligned, outside ${rr.byteLength} bytes of memory`)
    }

    function Er(rr, Sr, Qr, Zr, Wr) {
      return 0 === Qr ? null : (fr(Sr, Qr, Zr * rr.BYTES_PER_ELEMENT, rr.BYTES_PER_ELEMENT, Wr), new rr(Sr, Qr, Zr))
    }

    function pr(rr, Sr, Qr, Zr, Wr) {
      return 0 === Sr ? null : (fr(rr, Sr, Qr, Zr, Wr), new DataView(rr, Sr, Qr))
    }
  },
  42559: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      $: () => WS,
      D: () => rS,
      F: () => QS,
      H: () => Dr,
      K: () => jS,
      L: () => aS,
      P: () => ZS,
      S: () => fS,
      T: () => eS,
      X: () => IS,
      bb: () => ES,
      db: () => Rr,
      e: () => Hr,
      g: () => KS,
      gb: () => NS,
      h: () => vS,
      hb: () => hS,
      kb: () => gr,
      l: () => tS,
      n: () => nS,
      nb: () => Cr,
      p: () => mS,
      t: () => YS,
      x: () => zS,
      z: () => TS
    });
    var Zr = Qr(360),
      Wr = Qr(277),
      ar = Qr(285),
      jr = Qr(26),
      Ir = Qr(3909),
      fr = Qr(750),
      Er = Qr(5279),
      pr = Qr(3886),
      xr = Qr(4690),
      mr = Qr(109),
      Nr = Qr(139),
      Ur = Qr(351),
      tr = Qr(43),
      hr = Qr(345),
      zr = Qr(127),
      Yr = Qr(705),
      nr = Qr(335),
      er = Qr(135),
      Kr = Qr(129),
      yr = Qr(5617),
      Br = Qr(42565),
      Tr = Qr(1783),
      vr = Qr(42574),
      Or = Qr(42579),
      Lr = Qr(35408),
      lr = Qr(42581),
      Xr = Qr(42585);
    const Pr = "bloxd-webgpuOffAfterLoss",
      Hr = "context:webgl",
      qr = "probe:threw";

    function Rr(rr) {
      return rr.includes("Web page caused context loss and was blocked")
    }

    function gr() {
      const rr = document.createElement("canvas");
      let Sr = "";
      rr.addEventListener("webglcontextcreationerror", (rr => {
        Sr = rr.statusMessage
      }));
      try {
        var Qr, Zr;
        null === (Qr = rr.getContext("webgl")) || void 0 === Qr || null === (Zr = Qr.getExtension("WEBGL_lose_context")) || void 0 === Zr || Zr.loseContext()
      } catch (Wr) {
        return String(Wr)
      }
      return Sr
    }

    function Cr(rr) {
      let Sr;
      try {
        Sr = rr.getContext("webgl", {
          powerPreference: er.d
        })
      } catch {
        Sr = null
      }
      if (null === Sr) return null;
      let Qr = null;
      try {
        const rr = Sr.getParameter(Sr.MAX_TEXTURE_SIZE);
        Qr = "number" === typeof rr && rr > 0 ? rr : null
      } catch {
        Qr = null
      }
      try {
        var Zr;
        null === (Zr = Sr.getExtension("WEBGL_lose_context")) || void 0 === Zr || Zr.loseContext()
      } catch {}
      return Qr
    }
    const Mr = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);

    function Gr() {
      return "ios" === (0, mr.getOperatingSystem)() ? "ios" : "other"
    }
    const kr = "mali_valhall",
      Ar = new Set(["nvidia_pre_turing"]),
      Vr = new Set(["intel_gen7_8"]),
      ir = new Set(["powervr_rogue"]);

    function wr(rr, Sr, Qr) {
      return Mr.has(rr) ? "android_arm" === rr && Sr === kr && "mobileAndroid" !== Qr ? "webgpu_default" : "webgl_default" : null
    }

    function cr(rr) {
      return function(rr) {
        try {
          return rr()
        } catch {
          return null
        }
      }((() => {
        var Sr, Qr, Zr, jr;
        const Ir = null !== (Sr = null === (Qr = rr.info) || void 0 === Qr ? void 0 : Qr.vendor) && void 0 !== Sr ? Sr : "";
        return "windows" === (0, mr.getOperatingSystem)() && "" !== Ir && "intel" !== (0, mr.normaliseGpuVendor)(Ir) ? null : ((0, mr.seedGpuVendor)(Ir), wr((0, Wr.j)(), (0, ar.f)(Ir, null !== (Zr = null === (jr = rr.info) || void 0 === jr ? void 0 : jr.architecture) && void 0 !== Zr ? Zr : ""), Nr.siteUsed))
      }))
    }

    function Fr() {
      var rr;
      return {
        gpu: null !== (rr = navigator.gpu) && void 0 !== rr ? rr : null,
        webgl2: lr.h,
        webgl1: () => function(rr) {
          let Sr, Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Br.d;
          try {
            Sr = rr.getContext("webgl")
          } catch {
            Sr = null
          }
          if (null === Sr) return [Hr];
          const Zr = [];
          try {
            for (const Wr of Qr.extensions) null === Sr.getExtension(Wr) && Zr.push(Wr);
            for (const [Wr, ar] of Object.entries(Qr.limits)) {
              const rr = Sr[Wr],
                Qr = "number" === typeof rr ? Sr.getParameter(rr) : null;
              ("number" !== typeof Qr || Qr < ar) && Zr.push(`limit:${Wr}`)
            }
            const rr = Sr.getShaderPrecisionFormat(Sr.VERTEX_SHADER, Sr.HIGH_FLOAT);
            (null === rr || rr.precision < Qr.vertexHighFloatBits) && Zr.push("precision:vertex_high_float")
          } catch {
            Zr.push(qr)
          }
          try {
            var Wr;
            null === (Wr = Sr.getExtension("WEBGL_lose_context")) || void 0 === Wr || Wr.loseContext()
          } catch {}
          return Zr
        }(document.createElement("canvas")),
        webgl1First: () => br((() => function(rr, Sr) {
          if ("chrome_os" !== rr) return !1;
          const Qr = Sr();
          return null !== Qr && ir.has((0, ar.g)(Qr.vendor, Qr.renderer))
        }((0, mr.getOperatingSystem)(), er.D))),
        offAfterLoss: rr => br((() => rr ? (0, hr.C)() : jr.c.isWebGpuOffAfterLoss())),
        fewWasmMemories: nr.i,
        oldIntelDriver: rr => br((() => (0, zr.e)(rr))),
        intelGen9: rr => br((() => (0, zr.o)(rr))),
        storeIntelGen9Verdict: rr => {
          tr.j.setItem(zr.D, rr)
        },
        gpuClassWebGlArm: cr,
        storeGpuClassVerdict: rr => {
          tr.j.setItem(zr.A, rr)
        },
        gpuClassOnWebGl: rr => (0, Yr.d)(rr),
        webGlDefaultFamily: rr => Vr.has((0, ar.f)(rr.vendor, rr.architecture)),
        storeWebGlDefaultFamilyVerdict: rr => {
          tr.j.setItem(zr.L, rr)
        },
        override: () => or(),
        claimed: () => Jr((0, fr.k)()),
        webGpuSetting: () => {
          const rr = tr.j.getItem(Zr.mc);
          return "boolean" === typeof rr ? rr : null
        },
        heldBack: () => Yr.h,
        storeHoldbackSpared: rr => {
          tr.j.setItem(zr.z, rr)
        },
        intelGen9OnWebGl: () => Yr.k,
        zU: () => br((() => (0, xr.d)(mr.featureFlags.settings.canUseShaderPacks))),
        windows: () => br((() => "windows" === (0, mr.getOperatingSystem)())),
        defaultCompatibility: Lr.e
      }
    }

    function or() {
      let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, Ir.p)("render") && "webgl1" === (0, Ir.o)("renderer")) return "webgl1";
      const Sr = [() => new URLSearchParams(window.location.search).get(pr.b), () => tr.j.getItem(pr.f), () => {
        const Sr = localStorage.getItem(Pr);
        return null !== Sr && rr && localStorage.removeItem(Pr), "1" === Sr ? "webgl2" : null
      }];
      for (const Qr of Sr) {
        let rr = null;
        try {
          rr = Jr(Qr())
        } catch {}
        if (null !== rr) return rr
      }
      return null
    }

    function br(rr) {
      try {
        return rr()
      } catch {
        return !1
      }
    }

    function Jr(rr) {
      return "lite" === rr ? "webgpu" : "webgl2" === rr || "babylon" === rr ? "webgl" : null
    }

    function Dr(rr) {
      return "none" === rr || "compatibility_mode" === rr
    }
    async function dr() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fr();
      const Sr = await async function(rr) {
        const Sr = ur(rr),
          {
            source: Qr
          } = Sr,
          Zr = !Sr.asked,
          Wr = "gpu" in Sr && Sr.heldBack,
          jr = function(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return Wr && !Dr(rr) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: Qr
            } : {
              reason: rr,
              adapter: Sr,
              source: Qr
            }
          };
        if (!("gpu" in Sr)) return jr(Sr.refused);
        let Ir;
        try {
          Ir = await (0, Tr.h)((0, Kr.k)(Sr.gpu, {
            compatibility: sr(rr, Sr)
          }), yS, `requestAdapter didn't settle in ${yS/1e3} s`)
        } catch {
          return jr("adapter_error")
        }
        if ("string" === typeof Ir) return jr(Ir);
        const {
          adapter: fr,
          compatibility: Er
        } = Ir, pr = (0, Kr.c)(fr);
        if ((0, Kr.f)(fr)) return jr("software_adapter", pr);
        const xr = rr.windows() && function(rr) {
          return Ar.has((0, ar.f)(rr.vendor, rr.architecture))
        }(pr);
        if (rr.storeHoldbackSpared(xr), Wr && !xr) return jr("webgl_holdback");
        const mr = rr.intelGen9(fr);
        rr.storeIntelGen9Verdict(mr);
        const Nr = mr ? null : rr.gpuClassWebGlArm(fr);
        rr.storeGpuClassVerdict(null !== Nr && void 0 !== Nr && Nr);
        const Ur = rr.webGlDefaultFamily(pr);
        if (rr.storeWebGlDefaultFamilyVerdict(Ur), Zr && rr.oldIntelDriver(fr)) return jr("old_intel_driver", pr);
        if ("default" === Qr && mr && rr.intelGen9OnWebGl()) return jr("intel_gen9", pr);
        if ("default" === Qr && null !== Nr && rr.gpuClassOnWebGl(Nr)) return jr("gpu_class_webgl", pr);
        if ("default" === Qr && Ur) return jr("gpu_wasm_arm", pr);
        return jr(Er ? "compatibility_mode" : "none", pr)
      }(rr);
      if (Dr(Sr.reason)) return {
        backend: "webgpu",
        ...Sr
      };
      const Qr = "webgl1" === rr.override(),
        Zr = "not_requested" === Sr.reason && ("override" === Sr.source || "claim" === Sr.source),
        Wr = !Qr && !Zr && rr.webgl1First();
      if (!Qr && !Wr && rr.webgl2()) return {
        backend: "webgl",
        ...Sr
      };
      const jr = rr.webgl1();
      return 0 === jr.length ? {
        backend: "webgl1",
        ...Sr
      } : Wr && rr.webgl2() ? {
        backend: "webgl",
        ...Sr
      } : {
        missing: jr
      }
    }

    function sr(rr, Sr) {
      let {
        source: Qr,
        asked: Zr
      } = Sr;
      return Zr || "default" === Qr ? (0, Lr.l)(Zr, rr.defaultCompatibility) : void 0
    }

    function ur(rr) {
      const Sr = rr.override(),
        Qr = rr.webGpuSetting(),
        Zr = null === Sr && !0 !== Qr && rr.zU(),
        Wr = null !== Sr || null !== Qr || Zr ? null : rr.claimed(),
        ar = null !== Sr ? "override" : !0 === Qr ? "setting" : Zr ? "pack" : !1 === Qr ? "setting" : null !== Wr ? "claim" : "default",
        jr = function(rr) {
          return "override" === rr || "setting" === rr
        }(ar);
      if ("webgl" === Sr || "webgl1" === Sr || "webgl" === Wr || "setting" === ar && !1 === Qr) return {
        source: ar,
        asked: jr,
        refused: "not_requested"
      };
      if (!rr.gpu) return {
        source: ar,
        asked: jr,
        refused: "no_webgpu_api"
      };
      const Ir = "default" === ar && rr.heldBack();
      if (Ir && !rr.windows()) return {
        source: ar,
        asked: jr,
        refused: "webgl_holdback"
      };
      const fr = jr ? null : rr.offAfterLoss("pack" === ar) ? "off_after_loss" : rr.fewWasmMemories() ? "few_wasm_memories" : null;
      return null !== fr ? {
        source: ar,
        asked: jr,
        refused: Ir ? "webgl_holdback" : fr
      } : {
        source: ar,
        asked: jr,
        heldBack: Ir,
        gpu: rr.gpu
      }
    }

    function rS() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...Fr(),
          override: () => or(!1)
        },
        Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mr.isWebKit,
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Gr;
      try {
        if (!Sr()) return !1;
        const Zr = ur(rr);
        if (!("gpu" in Zr) || Zr.heldBack) return !1;
        const Wr = "default" === Zr.source ? wr(Qr(), "apple", Nr.siteUsed) : null;
        return null === Wr || !rr.gpuClassOnWebGl(Wr)
      } catch (Zr) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", Zr), !1
      }
    }
    let SS = !1;
    async function QS(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fr();
      if (null === rr) return null;
      const Qr = await dr(Sr);
      return SS = !("missing" in Qr) && "webgpu" === Qr.backend && "claim" === Qr.source, "missing" in Qr ? Qr : {
        ...Qr,
        load: rr[Qr.backend]
      }
    }
    async function ZS(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fr().gpu,
        Zr = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== rr.backend) return !1;
      const Wr = xS(rr, Sr, "indirectDraws", "off", "on");
      if (null !== Wr) return Wr;
      if (null !== rr.adapter && (0, zr.q)(rr.adapter, Zr)) return !0;
      if (null === Qr) return !1;
      try {
        var ar;
        const rr = await (0, Tr.h)(Qr.requestAdapter({
          powerPreference: "low-power"
        }).then((async rr => (null !== rr && await (0, Kr.d)(rr), rr))), yS, `the low-power requestAdapter didn't settle in ${yS/1e3} s`);
        return (0, zr.q)(null !== (ar = null === rr || void 0 === rr ? void 0 : rr.info) && void 0 !== ar ? ar : {}, Zr)
      } catch (jr) {
        return jr instanceof Tr.d
      }
    }

    function WS(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, mr.pageOperatingSystem)();
      if ("webgpu" !== rr.backend) return !1;
      const Wr = xS(rr, Sr, "terrainFetch", "texture", "storage");
      return null !== Wr ? Wr : null !== rr.adapter && ((0, zr.h)(rr.adapter, Qr) || (0, zr.g)(rr.adapter, Zr))
    }

    function aS(rr, Sr) {
      if ("webgpu" !== rr.backend) return !1;
      const Qr = xS(rr, Sr, "skyOrder", "early", "last");
      return null !== Qr ? Qr : null !== rr.adapter && (0, ar.f)(rr.adapter.vendor, rr.adapter.architecture) === kr
    }

    function jS(rr, Sr) {
      if ("webgpu" !== rr.backend) return !1;
      const Qr = xS(rr, Sr, "uploadCopies", "off", "on");
      return null !== Qr ? Qr : null !== rr.adapter && "powervr_rogue" === (0, ar.f)(rr.adapter.vendor, rr.adapter.architecture)
    }

    function IS(rr, Sr, Qr) {
      if ("webgpu" !== rr.backend) return !1;
      const Zr = xS(rr, Sr, "sceneDepth", "off", "on");
      return null !== Zr ? Zr : null !== rr.adapter && (0, zr.k)(rr.adapter, Qr)
    }

    function fS(rr, Sr) {
      return "webgl" === rr.backend ? xS(rr, Sr, "instancedTerrain", "1", "0") : null
    }

    function ES(rr, Sr) {
      return "webgpu" !== rr.backend || Sr && (null === rr.adapter || !(0, hr.E)(rr.adapter))
    }

    function pS(rr, Sr, Qr, Zr) {
      const Wr = new URLSearchParams(Sr).get(Qr),
        ar = null !== Wr && void 0 !== Wr ? Wr : null === rr ? null : (0, fr.h)(Qr);
      return null !== ar && Zr(ar) ? (SS ||= null === Wr && "webgpu" === (null === rr || void 0 === rr ? void 0 : rr.backend), ar) : null
    }

    function xS(rr, Sr, Qr, Zr, Wr) {
      const ar = pS(rr, Sr, Qr, (rr => rr === Zr || rr === Wr));
      return null === ar ? null : ar === Zr
    }

    function mS(rr) {
      return null !== rr && "missing" in rr
    }

    function NS(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !hS(),
        Qr = arguments.length > 2 ? arguments[2] : void 0;
      return Sr ? function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jr.c,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const Zr = "start_failed" === rr || "pipeline_failed" === rr,
            Wr = (0, Xr.f)(rr, Qr),
            ar = Sr.turnOffWebGpuAfterDeviceLoss(Zr ? "visible" : (0, hr.o)((0, Ur.g)()), Zr, Wr);
          return SS && (0, fr.x)("webgpuLoss"), Sr.isWebGpuOffAfterLoss() && "webgpu" === Jr(tr.j.getItem(pr.f)) && tr.j.removeItem(pr.f), (0, Ir.p)("webgpuloss") && (0, Er.c)((Sr => {
            var Qr;
            Sr.noteWebGpuLoss("wasm", ar ? rr : `${rr}, which storage didn't keep`, null !== (Qr = Wr.message) && void 0 !== Qr ? Qr : null)
          })), ar
        } catch {
          return !1
        }
      }(rr, jr.c, Qr) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const US = "framePacing";

    function tS(rr, Sr) {
      const Qr = pS("webgpu" === (null === Sr || void 0 === Sr ? void 0 : Sr.backend) ? Sr : null, rr, US, (rr => /^\d{1,9}$/.test(rr)));
      return null === Qr ? void 0 : Number(Qr)
    }

    function hS() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === Jr(new URLSearchParams(rr).get(pr.b))
      } catch {
        return !1
      }
    }

    function zS(rr) {
      return !!YS(rr) || rr instanceof Error && !(rr instanceof WebAssembly.RuntimeError) && rr.message.startsWith(`${yr.o.RenderSurfaceUnusable}:`)
    }

    function YS(rr) {
      const {
        name: Sr,
        message: Qr
      } = null !== rr && void 0 !== rr ? rr : {};
      return "InvalidStateError" === Sr && "string" === typeof Qr && Qr.startsWith("GPUDevice.")
    }

    function nS(rr) {
      const Sr = rr;
      return "function" === typeof Sr.eWr && "function" === typeof Sr.KWr ? Sr : null
    }

    function eS(rr) {
      return "function" === typeof rr.mz ? rr : null
    }
    const KS = "openRenderer";
    const yS = 5e3,
      BS = 15e3;

    function TS(rr, Sr, Qr, Zr, Wr, ar) {
      return (0, Tr.h)(function(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = (0, vr.f)(rr, Sr, (() => rr.mz(Qr, Zr, Wr, ar.indirectHangs, ar.storagePullBreaks, ar.splitPassBreaks, ar.earlySky, ar.instancedTerrain, ar.cellLight, ar.framesAhead, ar.webGpuRestores, ar.bufferCopiesCrash))),
          {
            firstVertex: Ir
          } = ar;
        return void 0 === Ir ? jr : jr.then((rr => ((0, Or.c)(Qr, Ir), rr)))
      }(rr, Sr, Qr, Zr, Wr, ar), BS, `${yr.o.RenderSurfaceUnusable}: the renderer didn't open in ${BS/1e3} s`, OS)
    }
    async function vS(rr, Sr, Qr, Zr, Wr, ar) {
      if ("function" !== typeof rr.NWr) throw new Error("this core has no set_renderer");
      const jr = await TS(Sr, KS, Qr, Wr, Zr, ar);
      try {
        rr.NWr(jr)
      } catch (Ir) {
        throw OS(jr), Ir
      }
    }

    function OS(rr) {
      try {
        rr.free()
      } catch {}
    }
  },
  42699: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    const Zr = {
      destroy_stage_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAK0lEQVQYlWP8//8/IwMewIRPknQFjIyM/wmaYGdn9w9FE7IjYSagiFHsCwCM7A/Ccc+NjAAAAABJRU5ErkJggg==",
      destroy_stage_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAQklEQVQYlYWPMQ4AIAgDOeO7+v9XWScMOGinpjmgYJt4aKQB/ASqKtwASeuGZxrbAEhyRJxe1JJ1debtRIZt6PfmBqYNG36KBWHbAAAAAElFTkSuQmCC",
      destroy_stage_2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAARUlEQVQYlYWPwQnAMAwDdaVr2ftPVfWVIBJC9DI6LMvYRpIAjzn1rMaq9wQAbwnd/SWUJNkmb1eVkx07zPK5PaLTu37xA3+wH3UI6vmHAAAAAElFTkSuQmCC",
      destroy_stage_3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAASUlEQVQYlW2PwQ3AMAjEfFXXYv+x3A+pSNqT+IBPMlEDkEQ6awdwMaJGzYTfVJUL4GydUFW5AbM5j2o+DrMEcE+g5dKzf/FrDjw47TfQdOS/BAAAAABJRU5ErkJggg==",
      destroy_stage_4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATklEQVQYlYWPsRHDQAzDQF/W4u8/lZEmn5PtwuwkETwqagCSyE97B3AwpEbNNH8A1lpn2wvwN824tqpp6yN2G+dRzaPDhLgPm56peXvzC7EqSTSAXQcxAAAAAElFTkSuQmCC",
      destroy_stage_5: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATElEQVQYlW2PwREAMQgCIX1p/1Xd3idmNBN/iotowJJkG+2q2WkARwRD2LUkKTO/m44I7mWVyxDrxIsEvCqg7ZOhAyNx0d3Vrzc7+AM+lEvjLYgPSwAAAABJRU5ErkJggg==",
      destroy_stage_6: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAT0lEQVQYlW2PyQ2AQAwDx9tXtv+qGD4ERQt+RY7lI2oAksiD5gBWH1WlGjUtTuIC2HtfHHi5qvJ0mRxt27nzqWZ1VhJnuU/Js8u77m/mFNyVEDqzHRw/iwAAAABJRU5ErkJggg==",
      destroy_stage_7: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJklEQVQYlWNgQAK2trb/GXABXJIsuCThYsiSMDZBq7AqoEw3Pp0AAAYX+aJ4oVQAAAAASUVORK5CYII=",
      destroy_stage_8: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUUlEQVQYlV2PwQ3AMAwCoepazvDJXr1+apWEl40BYQHWh6pCAcACDLiq6DlFtySNMZ4kt6RcOiW5LdI2eZxzXmpBurPLVqjda60/Ob84uwB+AVXlTrnZ3+XVAAAAAElFTkSuQmCC",
      destroy_stage_9: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUElEQVQYlW2OyQ3AMAgEhyhtQfF2X9m8IKvIvBDMHkgKSQGQmcJGUtBAZsr3hm6Aqnr4zUBOt4vfJh8gIuTPtdZFK1ztXUbtcXvvz/nU3F1eyBpW2eqlL9QAAAAASUVORK5CYII="
    }
  },
  42611: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ur,
      g: () => tr,
      i: () => mr,
      k: () => xr
    });
    const Zr = 2e3,
      Wr = "unavailable";
    let ar = () => Promise.resolve().then((() => Qr(1920))),
      jr = null,
      Ir = null,
      fr = Er();

    function Er() {
      let rr = () => {};
      return {
        promise: new Promise((Sr => {
          rr = () => {
            Sr(null)
          }
        })),
        resolve: rr
      }
    }

    function pr() {
      if (null === jr) {
        const rr = ar();
        jr = rr, rr.then((Sr => {
          jr === rr && (Ir = Sr)
        }), (() => {
          jr === rr && (jr = null)
        }))
      }
      return jr
    }

    function xr() {
      pr().catch((() => {}))
    }

    function mr() {
      fr.resolve()
    }

    function Nr(rr, Sr, Qr, Zr) {
      if (null === rr) return {
        errorKind: Sr,
        fingerprint: Wr,
        dedupe: `${Sr}|${Zr}`
      };
      const {
        fingerprint: ar
      } = rr.clientErrorKey(Sr, Qr, Zr);
      return {
        errorKind: Sr,
        fingerprint: ar,
        dedupe: ar
      }
    }

    function Ur(rr, Sr, Qr, Zr) {
      return null === Ir ? Zr ? (xr(), Nr(null, rr, Sr, Qr)) : null : Nr(Ir, rr, Sr, Qr)
    }
    async function tr(rr, Sr, Qr) {
      let Wr;
      const ar = new Promise((rr => {
        Wr = setTimeout((() => {
          rr(null)
        }), Zr)
      }));
      try {
        return Nr(await Promise.race([pr(), ar, fr.promise]), rr, Sr, Qr)
      } catch {
        return Nr(null, rr, Sr, Qr)
      } finally {
        clearTimeout(Wr)
      }
    }
  },
  42607: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      BUILT_IN_ANIMATIONS_SITE: () => rS,
      CAMERA_DIRECTOR_SITE: () => jS,
      CORE_ERRORS_SITE: () => wr,
      EVENT_OVERFLOW_SITE: () => ur,
      FIRST_VIEW_SITE: () => ZS,
      GraphicsLostError: () => ZQ,
      JOIN_SITE: () => Fr,
      LEAVE_SITE: () => or,
      MAIN_THREAD_SITE: () => WS,
      MODEL_FEED_SITE: () => br,
      MODEL_POOL_SITE: () => Jr,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => ES,
      NON_FATAL_REPORTS_PER_SESSION: () => LS,
      PREVIEW_ANIMATIONS_SITE: () => sr,
      RENDER_RELOAD_SITE: () => dr,
      REQUEST_DEVICE_SITE: () => aS,
      TEXTURE_NAMES_SITE: () => Dr,
      TEXTURE_PACK_FEED_SITE: () => SS,
      TEXTURE_PACK_SWAP_SITE: () => QS,
      TurnstilePageError: () => UQ,
      WASM_LOAD_SITE: () => cr,
      countRenderLost: () => dQ,
      crashError: () => RS,
      crashReportsSettled: () => cS,
      deviceLossFields: () => DS,
      deviceLossWords: () => oQ,
      flushCrashReports: () => iS,
      joinFailureCode: () => tQ,
      loadRecoveryCode: () => fQ,
      lokiTransport: () => mS,
      modelFailureCode: () => yQ,
      readTrap: () => uS,
      renderLoss: () => DQ,
      renderReloadMessage: () => bQ,
      reportCameraDirectorFault: () => iQ,
      reportCoreErrors: () => bS,
      reportCrash: () => gS,
      reportDataLoadFailure: () => ZZ,
      reportDisconnect: () => eQ,
      reportDroppedRequiredLimits: () => pQ,
      reportEventOverflow: () => XQ,
      reportFirstViewNoTerrain: () => MQ,
      reportFirstViewUnshown: () => GQ,
      reportLightFault: () => qQ,
      reportLoadRecovery: () => EQ,
      reportLoadReload: () => mQ,
      reportMainStall: () => kQ,
      reportMemoryShed: () => gQ,
      reportModelFailure: () => BQ,
      reportModelPoolFailure: () => TQ,
      reportModelsModuleRetry: () => vQ,
      reportNoBackendRetry: () => jQ,
      reportPageJoinFailure: () => zQ,
      reportReconnectGaveUp: () => KQ,
      reportRenderRecovery: () => kS,
      reportRenderReload: () => rZ,
      reportReplayFault: () => VQ,
      reportStaleBuildReload: () => aZ,
      reportStoppedCore: () => SQ,
      reportTerrainTextureFailure: () => SZ,
      reportTexturePackFeedLoadFailure: () => LQ,
      reportTexturePackKeptOut: () => lQ,
      reportUnstreamedCoreLoad: () => NQ,
      reportUnusedSeat: () => nQ,
      reportWorkerLost: () => PQ,
      reportWorkerStartTimeout: () => AQ,
      reportWorldgenGaveUp: () => RQ,
      reportWorldgenLoadFailure: () => OQ,
      reportWorldgenWorkerLost: () => HQ,
      resetCrashReports: () => FS,
      setCrashAdPreload: () => KS,
      setCrashBackend: () => eS,
      setCrashScreen: () => zS,
      setCrashTransport: () => tS,
      showCrash: () => rQ,
      showJoinFailure: () => hQ,
      showUnsupported: () => WQ,
      unknownSkyWords: () => oS,
      unsupportedCrashScreen: () => aQ,
      warmCrashCounts: () => MS
    });
    var Zr = Qr(1127),
      Wr = Qr(1433),
      ar = Qr(190),
      jr = Qr(1422),
      Ir = Qr(1371),
      fr = Qr(285),
      Er = Qr(1922),
      pr = Qr(4988),
      xr = Qr(42611),
      mr = Qr(5610),
      Nr = Qr(42617),
      Ur = Qr(35296),
      tr = Qr(2466),
      hr = Qr(35293),
      zr = Qr(5126),
      Yr = Qr(139),
      nr = Qr(135),
      er = Qr(2472),
      Kr = Qr(38018),
      yr = Qr(1783),
      Br = Qr(42627),
      Tr = Qr(42637),
      vr = Qr(42451),
      Or = Qr(42654),
      Lr = Qr(42663),
      lr = Qr(38011),
      Xr = Qr(2396),
      Pr = Qr(2398),
      Hr = Qr(42680),
      qr = Qr(42646),
      Rr = Qr(42694),
      gr = Qr(38320),
      Cr = Qr(712),
      Mr = Qr(4434),
      Gr = Qr(37514),
      kr = Qr(42574),
      Ar = Qr(37529),
      Vr = Qr(42707);
    const ir = "[bloxd-wasm-client]",
      wr = "coreErrors",
      cr = "wasmLoad",
      Fr = "join",
      or = "leave",
      br = "modelFeed",
      Jr = "modelWorkerPool",
      Dr = "textureNames",
      dr = "renderReload",
      sr = "previewAnimations",
      ur = "eventOverflow",
      rS = "builtInAnimations",
      SS = "texturePackFeed",
      QS = "texturePackSwap",
      ZS = "firstView",
      WS = "mainThread",
      aS = "requestDevice",
      jS = "cameraDirector",
      IS = 300,
      fS = 64,
      ES = 8;
    let pS = 0;
    const xS = new Set,
      mS = (rr, Sr) => {
        const Qr = yS[rr.kind],
          Zr = {
            backend: YS,
            adPreload: nS
          };
        if (null === Qr) return void NS(rr, Sr, Zr, null);
        const Wr = (0, xr.d)(Qr, rr.message, rr.code, rr.fatal);
        null === Wr ? VS("Loki", (async () => {
          NS(rr, Sr, Zr, await (0, xr.g)(Qr, rr.message, rr.code))
        })) : NS(rr, Sr, Zr, Wr)
      };

    function NS(rr, Sr, Qr, Zr) {
      let {
        backend: Wr,
        adPreload: ar
      } = Qr;
      const {
        kind: jr,
        code: fr,
        site: pr,
        fatal: xr,
        details: mr
      } = rr;
      if (!xr)
        if (null === Zr || (0, Er.d)(Zr.errorKind) || xS.has(Zr.dedupe)) {
          if (pS >= ES) return;
          pS++
        } else xS.add(Zr.dedupe);
      const Nr = {
        ...mr,
        kind: jr,
        code: fr,
        site: pr,
        fatal: String(xr),
        backend: Wr
      };
      ar && (Nr.adPreload = "true"), null !== Zr && (Nr.errorKind = Zr.errorKind, Nr.fingerprint = Zr.fingerprint), Sr instanceof Error && "string" === typeof Sr.stack && (Nr.causeStack = Sr.stack.slice(0, 2e3)), (0, Ir.Pt)(RS(rr, Sr), Nr)
    }
    let US = mS;

    function tS(rr) {
      const Sr = US;
      return US = rr, Sr
    }
    let hS = () => {};

    function zS(rr) {
      const Sr = hS;
      return hS = rr, Sr
    }
    let YS = "unpicked",
      nS = !1;

    function eS(rr) {
      YS = rr
    }

    function KS(rr) {
      nS = rr
    }
    const yS = {
        crash: "wasm_load",
        unsupported: "wasm_load",
        model: "wasm_load",
        join: "matchmake_failed",
        pageJoin: null,
        coreError: null,
        meshHeap: null,
        recovered: null,
        unstreamedLoad: null,
        modelLate: null,
        worldgenLoad: null,
        texturePackLoad: null,
        texturePackKeptOut: null,
        terrainTexture: null,
        previewAnimations: null,
        builtInAnimations: null,
        seat: null,
        noTerrain: null,
        viewUnshown: null,
        mainStall: null,
        staleBuild: "wasm_load",
        disconnect: "disconnect",
        linkCensus: "wasm_load",
        linksReadAfterView: "wasm_load"
      },
      BS = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        viewUnshown: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      TS = new Set(["unstreamedLoad"]),
      vS = new Set(["linkCensus", "linksReadAfterView"]);
    let OS = !1;
    const LS = 20,
      lS = new Map;
    let XS = 0,
      PS = 0;
    const HS = new Set,
      qS = new Set;

    function RS(rr, Sr) {
      const Qr = Object.assign(new Error(`${rr.code}: ${rr.message}`), {
        name: "WasmClientCrash",
        cause: null !== Sr && void 0 !== Sr ? Sr : void 0
      });
      return Sr instanceof Error && Sr.stack && (Qr.stack = Sr.stack), Qr
    }

    function gS(rr) {
      var Sr, Zr;
      const {
        kind: Wr,
        code: ar,
        site: jr,
        fatal: Ir,
        message: fr,
        error: Er
      } = rr, pr = !1 !== rr.toTransport && !TS.has(Wr), xr = !Ir && pr && !vS.has(Wr), mr = {
        kind: Wr,
        code: ar,
        site: jr,
        fatal: Ir,
        message: fr,
        details: null !== (Sr = rr.details) && void 0 !== Sr ? Sr : {}
      }, Nr = `${ar}@${jr}${void 0===rr.instance?"":`#${rr.instance}`}${Ir?"!":""}`, Ur = (null !== (Zr = lS.get(Nr)) && void 0 !== Zr ? Zr : 0) + 1;
      if (lS.set(Nr, Ur), void 0 !== rr.countAs && 1 === Ur && GS(rr.countAs), Ur > 1 ? 0 === (Ur & Ur - 1) && AS((() => {
          console.warn(`${ir} ${ar} at ${jr} reported ${Ur} times`)
        })) : xr && XS >= LS ? AS((() => {
          console.warn(`${ir} ${Wr} ${ar} at ${jr}: ${fr} (not sent: the session's ${LS} went)`, mr.details, null !== Er && void 0 !== Er ? Er : "")
        })) : (xr && XS++, function(rr, Sr, Zr, Wr) {
          var ar, jr;
          const {
            kind: Ir,
            code: fr,
            site: Er,
            fatal: pr,
            message: xr,
            details: mr
          } = rr;
          AS((() => {
            (pr ? console.error : console.warn)(`${ir} ${Ir} ${fr} at ${Er}: ${xr}`, mr, null !== Sr && void 0 !== Sr ? Sr : "")
          }));
          const Nr = BS[Ir],
            Ur = null !== (ar = null !== (jr = yS[Ir]) && void 0 !== jr ? jr : Nr) && void 0 !== ar ? ar : null;
          Wr || null === Ur || CS((async () => {
            const {
              reportCappedWasmFailure: Sr,
              reportUncappedWasmFailure: Zr,
              reportWasmFailure: Wr
            } = await Qr.e(218).then((() => Qr(35287))), ar = vS.has(Ir) ? Zr : void 0 === Nr ? Wr : Sr, jr = function(rr) {
              let {
                kind: Sr,
                site: Qr,
                fatal: Zr,
                details: Wr
              } = rr;
              if ("crash" !== Sr) return;
              return {
                ...Wr,
                site: Qr,
                fatal: String(Zr)
              }
            }(rr);
            void 0 === jr ? ar(Ur, xr, fr) : ar(Ur, xr, fr, jr)
          }));
          Zr && AS((() => {
            US(rr, Sr)
          }))
        }(mr, Er, pr, void 0 !== rr.countAs)), Ir) {
        var tr;
        const Sr = null !== (tr = rr.screen) && void 0 !== tr ? tr : {
          text: (0, gr.e)(mr, !0),
          reload: !0,
          stillBlocked: null
        };
        AS((() => {
          hS(Sr)
        }))
      }
      return mr
    }

    function CS(rr) {
      VS("counts", (async () => {
        const {
          peekVisitSessionId: Sr
        } = await Promise.resolve().then((() => Qr(727)));
        null !== Sr() && (await rr(), OS = !0)
      }))
    }

    function MS() {
      Promise.all([Promise.resolve().then((() => Qr(727))), Qr.e(218).then((() => Qr(35287)))]).catch((rr => {
        console.warn(`${ir} the counts' modules didn't load ahead`, rr)
      }))
    }

    function GS(rr) {
      HS.has(rr.errorKind) || (HS.add(rr.errorKind), CS((async () => {
        const {
          reportClientError: Sr
        } = await Promise.resolve().then((() => Qr(1912)));
        Sr(rr.errorKind, rr.error, rr.code, !0, void 0, rr.fields)
      })))
    }

    function kS(rr, Sr) {
      VS("render_lost", (async () => {
        const [{
          reportClientError: Zr
        }, {
          CAPPED_COUNTS_VISIT_CAP: Wr
        }] = await Promise.all([Promise.resolve().then((() => Qr(1912))), Qr.e(218).then((() => Qr(35287)))]);
        Zr("render_lost", Sr, rr, !0, Wr)
      }))
    }

    function AS(rr) {
      try {
        rr()
      } catch (Sr) {
        try {
          console.warn(`${ir} could not send a report`, Sr)
        } catch {}
      }
    }

    function VS(rr, Sr) {
      try {
        const Qr = Sr().catch((Sr => {
          console.warn(`${ir} could not send the report to ${rr}`, Sr)
        })).finally((() => {
          qS.delete(Qr)
        }));
        qS.add(Qr)
      } catch (Qr) {
        console.warn(`${ir} could not send the report to ${rr}`, Qr)
      }
    }
    async function iS(rr) {
      let Sr;
      (0, xr.i)();
      const Qr = new Promise((Qr => {
        Sr = setTimeout(Qr, rr)
      }));
      await Promise.race([wS(), Qr]), clearTimeout(Sr)
    }
    async function wS() {
      if (await Promise.allSettled([...qS]), OS) try {
        const {
          flushClientAnalyticsEvents: rr
        } = await Promise.resolve().then((() => Qr(1626)));
        await rr()
      } catch (rr) {
        console.warn(`${ir} could not send the counts`, rr)
      }
    }
    async function cS() {
      for (; qS.size > 0;) await Promise.allSettled([...qS])
    }

    function FS() {
      lS.clear(), XS = 0, OS = !1, pS = 0, xS.clear(), PS = 0, HS.clear(), (0, Nr.w)()
    }

    function oS(rr) {
      const Sr = "object" === typeof rr && null !== rr ? rr.type : rr;
      return "string" !== typeof Sr ? "sky not named" : `sky ${JSON.stringify(Array.from(Sr).slice(0,fS).join(""))}`
    }

    function bS(rr, Sr, Qr, Zr) {
      PS += Sr;
      for (const {
          code: Ir,
          detail: fr
        }
        of rr) {
        var Wr, ar, jr;
        const rr = (0, mr.te)(Ir),
          Sr = (0, Nr.h)(Ir, fr),
          Er = Sr ? "CORE-RenderLinkPending" : `CORE-${rr}`,
          pr = (0, Nr.b)(Ir, fr),
          xr = null === Zr || void 0 === Zr ? void 0 : Zr(Ir, fr),
          tr = void 0 !== (null === pr || void 0 === pr ? void 0 : pr.gpuDetails),
          hr = tr ? null === (Wr = (0, nr.C)()) || void 0 === Wr ? void 0 : Wr.renderer : void 0,
          zr = tr ? ` ${(0,Nr.o)()}` : "",
          Yr = Array.from([hr && `gpu ${(0,Ur.b)(hr)}`, xr].filter(Boolean).join("; ")).slice(0, IS).join(""),
          er = `core error ${rr}${null!==(ar=null===pr||void 0===pr?void 0:pr.words)&&void 0!==ar?ar:""}${zr}${Yr?`: ${Yr}`:""}`,
          Kr = {
            errorCode: String(Ir),
            detail: String(fr),
            droppedBefore: String(PS),
            wasmBuild: Qr.wasm,
            clientVersion: Qr.client,
            ...null === pr || void 0 === pr ? void 0 : pr.gpuDetails,
            ...DS(Ir, fr)
          };
        null !== pr && (0, Nr.u)(pr) ? AS((() => {
          console.warn(`${ir} coreError ${Er}: ${er} (not sent: the session's render warnings of its kind went)`, Kr)
        })) : JS(Ir) ? AS((() => {
          console.warn(`${ir} coreError ${Er}: ${er} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, Kr)
        })) : gS({
          kind: Sr ? "recovered" : sS(Ir, fr),
          code: Er,
          site: wr,
          fatal: !1,
          message: er,
          details: Kr,
          instance: null !== (jr = null === pr || void 0 === pr ? void 0 : pr.instance) && void 0 !== jr ? jr : dS(Ir, fr)
        })
      }
    }

    function JS(rr) {
      if (rr !== mr.J.AudioUnknownSound && rr !== mr.J.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: Sr,
        lobbyName: Qr
      } = (0, jr.b)();
      return null !== Sr && (!!(0, Zr.l)(Sr) || rr === mr.J.AudioUnknownSound && (0, Wr.e)(Sr, Qr))
    }

    function DS(rr, Sr) {
      if (rr !== mr.J.RenderDeviceLost) return;
      const Qr = Sr >>> mr.S.LINKS_IN_FLIGHT_SHIFT & mr.S.LINKS_IN_FLIGHT_MAX,
        Zr = Sr >>> mr.S.OLDEST_LINK_SHIFT & mr.S.OLDEST_LINK_MAX;
      return {
        linksInFlight: String(Qr),
        oldestLinkMs: String(Zr * mr.S.OLDEST_LINK_UNIT_MS)
      }
    }

    function dS(rr, Sr) {
      return rr === mr.J.RenderDeviceLost && 0 !== (Sr & mr.S.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function sS(rr, Sr) {
      return rr === mr.J.JobsHeapGaveUp ? "meshHeap" : (0, Nr.l)(rr, Sr) ? "linksReadAfterView" : (0, Nr.d)(rr, Sr) ? "linkCensus" : "coreError"
    }

    function uS(rr) {
      return (0, Gr.j)(rr instanceof kr.d ? rr.trap : rr, Xr.B, Xr.gb)
    }

    function rQ(rr, Sr, Qr) {
      return QQ(rr, Sr, Qr, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function SQ(rr, Sr, Qr) {
      return QQ(rr, Sr, Qr, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function QQ(rr, Sr, Qr, Zr, Wr) {
      let {
        memoryDetails: ar = {},
        memoryStep: jr
      } = Zr;
      const {
        code: Ir,
        details: fr,
        message: Er
      } = (0, Br.R)(rr, Sr), pr = [];
      Object.assign(fr, (0, Ar.g)(rr.error)), null !== Qr && (fr.trapKind = Qr.kind, null !== Qr.panic && (fr.panic = (0, Gr.i)(Qr.panic)), Qr.refusedBytes > 0 && (fr.refusedAllocation = String(Qr.refusedBytes)), pr.push((0, Gr.l)(Qr.kind, Qr.refusedBytes))), void 0 !== jr && pr.push(`memory=${jr}`);
      const xr = rr.error instanceof ZQ;
      return xr && (0, Cr.H)(), gS({
        kind: "crash",
        code: Ir,
        site: rr.site,
        fatal: Wr,
        message: [...pr, Er].join("; "),
        details: {
          ...fr,
          ...ar,
          ...void 0 === jr ? {} : {
            memoryStep: jr
          }
        },
        error: rr.error,
        screen: xr ? aQ("graphicsLost") : void 0
      })
    }
    class ZQ extends Error {}

    function WQ(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return "download" !== rr && (0, Cr.H)(), gS({
        kind: "unsupported",
        code: Sr,
        site: cr,
        fatal: !0,
        message: Qr,
        details: {
          ...Zr,
          cause: rr,
          status: Sr
        },
        screen: aQ(rr)
      })
    }

    function aQ(rr) {
      const Sr = (0, ar.s)(Yr.siteUsed),
        Qr = (0, gr.u)(rr, Sr),
        Zr = "noContext" === rr || "graphicsLost" === rr ? (0, gr.l)(rr, Sr) : null;
      return {
        text: Qr,
        reload: "general:tryAgain" === Qr.confirm,
        stillBlocked: Zr
      }
    }

    function jQ(rr, Sr, Qr) {
      return gS({
        kind: "recovered",
        code: "reprobed" === rr ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: cr,
        fatal: !1,
        message: Qr,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: Sr,
          step: rr
        }
      })
    }
    const IQ = 9;

    function fQ(rr) {
      const Sr = "recovered" === rr.outcome ? "recovered" : "gave_up",
        Qr = "load" === rr.step ? `wasm_load_${Sr}${rr.oom?"_oom":""}` : `no_context_${Sr}`;
      return "recovered" === rr.outcome ? `${Qr}_t${Math.min(rr.tries,IQ)}` : "load" === rr.step ? `${Qr}_${rr.stage}` : Qr
    }

    function EQ(rr) {
      const {
        step: Sr,
        outcome: Qr,
        tries: Zr,
        detail: Wr,
        details: ar = {}
      } = rr, jr = "load" === rr.step ? {
        stage: rr.stage,
        ...rr.oom ? {
          oom: "true"
        } : {}
      } : {};
      return gS({
        kind: "recovered",
        code: fQ(rr),
        site: cr,
        fatal: !1,
        message: Wr,
        details: {
          ...ar,
          step: Sr,
          outcome: Qr,
          tries: String(Zr),
          ...jr
        }
      })
    }

    function pQ(rr) {
      return gS({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: aS,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: rr.join(",")
        }
      })
    }
    const xQ = "reload=wasm";

    function mQ(rr, Sr, Qr) {
      return gS({
        kind: "unsupported",
        code: Sr,
        site: cr,
        fatal: !1,
        message: [xQ, Qr].join("; "),
        details: {
          cause: rr,
          status: Sr,
          fallback: "wasmReload"
        }
      })
    }

    function NQ() {
      const {
        code: rr,
        message: Sr
      } = Mr.e;
      return gS({
        kind: "unstreamedLoad",
        code: rr,
        site: cr,
        fatal: !1,
        message: Sr
      })
    }
    class UQ extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function tQ(rr) {
      return rr instanceof Or.q ? 0 === rr.code ? "JOIN-matchmake" : `JOIN-${rr.code}` : rr instanceof Or.e ? 0 === rr.code ? `JOIN-${rr.stage}` : `JOIN-${rr.stage}-${rr.code}` : rr instanceof vr.b ? "JOIN-gameCode" : rr instanceof UQ ? "JOIN-turnstilePage" : rr instanceof Or.C ? "JOIN-trafficCheck" : rr instanceof Kr.c ? "JOIN-timeout" : "JOIN-network"
    }

    function hQ(rr, Sr) {
      const Qr = (0, Ar.l)(rr),
        Zr = {
          wasmBuild: Sr.wasm,
          clientVersion: Sr.client
        },
        Wr = rr instanceof UQ ? {
          text: (0, gr.p)(),
          reload: !1,
          stillBlocked: null
        } : void 0,
        ar = (0, Lr.f)(rr),
        jr = "expected" !== ar;
      return gS({
        kind: "join",
        code: tQ(rr),
        site: Fr,
        fatal: !0,
        message: Qr,
        details: Zr,
        error: rr,
        screen: Wr,
        toTransport: jr,
        instance: ar
      })
    }

    function zQ(rr, Sr, Qr) {
      var Zr;
      const Wr = (0, Lr.f)(rr),
        ar = {
          cause: (rr instanceof Or.e || rr instanceof Or.q) && null !== (Zr = rr.serverText) && void 0 !== Zr ? Zr : "",
          sinceJoinStart: (0, er.b)(Qr.sinceJoinStartMs),
          game: Qr.game,
          ...(0, er.f)(),
          wasmBuild: Sr.wasm,
          clientVersion: Sr.client
        };
      return gS({
        kind: "pageJoin",
        code: tQ(rr),
        site: Fr,
        fatal: !1,
        message: (0, Ar.l)(rr),
        details: ar,
        error: rr,
        toTransport: "unrecognised" === Wr,
        instance: Wr
      })
    }
    const YQ = {
      renewed: {
        code: "CORE-seatRenewed",
        message: "the early seat outlasted the room's hold, so the join reserved another"
      },
      lost: {
        code: "CORE-seatAbandoned",
        message: "the early seat's request failed before the join, so the join reserved another"
      },
      rematched: {
        code: "CORE-seatAbandoned",
        message: "the early seat was for a place matchmaking replaced"
      },
      abandoned: {
        code: "CORE-seatAbandoned",
        message: "the early seat was abandoned by a leave or a failed boot or join"
      }
    };

    function nQ(rr, Sr) {
      let {
        unused: Qr,
        answered: Zr,
        gR: Wr
      } = rr;
      const {
        code: ar,
        message: jr
      } = YQ[Qr], Ir = {
        unused: Qr,
        answered: String(Zr),
        gR: String(Wr),
        wasmBuild: Sr.wasm,
        clientVersion: Sr.client
      };
      return gS({
        kind: "seat",
        code: ar,
        site: Fr,
        fatal: !1,
        message: jr,
        details: Ir
      })
    }

    function eQ(rr, Sr, Qr) {
      var Zr;
      let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (Zr = rr.name) && void 0 !== Zr ? Zr : String(rr.code);
      const ar = {
          closeCode: String(rr.code),
          recognised: String(null !== rr.name),
          closeReason: Qr.closeReason,
          sinceJoined: (0, er.b)(Qr.sinceJoinedMs),
          game: Qr.game,
          ...(0, er.f)(),
          wasmBuild: Sr.wasm,
          clientVersion: Sr.client
        },
        jr = null === rr.name && !(0, er.c)(rr.code);
      return gS({
        kind: "disconnect",
        code: Wr,
        site: or,
        fatal: !1,
        message: "Left room",
        details: ar,
        toTransport: jr
      })
    }

    function KQ(rr, Sr) {
      const Qr = {
        ...(0, tr.q)(rr),
        wasmBuild: Sr.wasm,
        clientVersion: Sr.client
      };
      return gS({
        kind: "disconnect",
        code: `reconnect-${rr.reason}`,
        site: Fr,
        fatal: !1,
        message: "Reconnect failed",
        details: Qr
      })
    }

    function yQ(rr) {
      return rr.error instanceof Pr.e ? `MODEL-${rr.error.status}` : rr.error instanceof Hr.n ? "MODEL-ring" : "MODEL-network"
    }

    function BQ(rr, Sr) {
      const Qr = yQ(rr),
        Zr = `model file ${rr.file} ${rr.startup?"(startup) ":""}could not load`,
        Wr = {
          file: String(rr.file),
          url: rr.url,
          wasmBuild: Sr.wasm,
          clientVersion: Sr.client
        };
      return gS({
        kind: rr.startup ? "model" : "modelLate",
        code: Qr,
        site: br,
        fatal: rr.startup,
        message: Zr,
        details: Wr,
        error: rr.error
      })
    }

    function TQ(rr, Sr) {
      const Qr = {
        wasmBuild: Sr.wasm,
        clientVersion: Sr.client
      };
      return gS({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: Jr,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: Qr,
        error: rr
      })
    }

    function vQ(rr, Sr, Qr) {
      const Zr = {
        delayMs: String(Sr),
        wasmBuild: Qr.wasm,
        clientVersion: Qr.client
      };
      rr instanceof Pr.e && (Zr.status = String(rr.status));
      return gS({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: Jr,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: Zr,
        error: rr
      })
    }

    function OQ(rr, Sr) {
      const Qr = {
        wasmBuild: Sr.wasm,
        clientVersion: Sr.client
      };
      return gS({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: Br.M,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: Qr,
        error: rr
      })
    }

    function LQ(rr, Sr) {
      const Qr = {
        wasmBuild: Sr.wasm,
        clientVersion: Sr.client
      };
      return gS({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: SS,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: Qr,
        error: rr
      })
    }

    function lQ(rr, Sr, Qr, Zr) {
      const Wr = {
        wasmBuild: Zr.wasm,
        clientVersion: Zr.client
      };
      return gS({
        kind: "texturePackKeptOut",
        code: (0, pr.i)("wasm", rr, Sr),
        site: QS,
        fatal: !1,
        message: Sr.detail,
        details: Wr,
        error: Qr
      })
    }

    function XQ(rr, Sr) {
      const {
        frames: Qr,
        acks: Zr,
        mask: Wr,
        outcome: ar
      } = rr, jr = {
        frames: String(Qr),
        acks: String(Zr),
        mask: String(Wr),
        outcome: null !== ar && void 0 !== ar ? ar : "resynced",
        wasmBuild: Sr.wasm,
        clientVersion: Sr.client
      };
      return gS({
        kind: "recovered",
        code: "rejoined" === ar ? "CORE-eventOverflowRejoin" : "failed" === ar ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: ur,
        fatal: !1,
        message: `the event buffer refused records in ${Qr} frames`,
        details: jr
      })
    }

    function PQ(rr, Sr, Qr) {
      return gS({
        kind: "recovered",
        code: "CORE-workerLost",
        site: rr,
        fatal: !1,
        message: `a ${rr} worker was lost`,
        details: {
          reason: Sr,
          wasmBuild: Qr.wasm,
          clientVersion: Qr.client
        }
      })
    }

    function HQ(rr, Sr, Qr, Zr) {
      const Wr = {
          reason: rr,
          pageBuild: Zr.build,
          pageAgeMin: String(Math.floor(Zr.ageMs / 6e4)),
          wasmBuild: Qr.wasm,
          clientVersion: Qr.client
        },
        ar = Sr ? "a world-gen worker's code did not load" : "a world-gen worker was lost";
      return gS({
        kind: "recovered",
        code: "CORE-worldgenWorkerLost",
        site: Br.M,
        fatal: !1,
        message: ar,
        details: Wr
      })
    }

    function qQ(rr, Sr, Qr) {
      const Zr = {
        wasmBuild: Qr.wasm,
        clientVersion: Qr.client
      };
      return gS({
        kind: "recovered",
        code: rr,
        site: Br.u,
        fatal: !1,
        message: Sr,
        details: Zr
      })
    }

    function RQ(rr, Sr) {
      const Qr = {
        lastReason: rr,
        wasmBuild: Sr.wasm,
        clientVersion: Sr.client
      };
      return gS({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: Br.M,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: Qr
      })
    }

    function gQ(rr, Sr, Qr) {
      return gS({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: Br.q,
        fatal: !1,
        message: `${(0,lr.y)(rr)}: the session shed load`,
        details: {
          cause: rr,
          ...Sr,
          wasmBuild: Qr.wasm,
          clientVersion: Qr.client
        }
      })
    }

    function CQ(rr, Sr, Qr, Zr) {
      var Wr, ar;
      return {
        game: rr,
        cause: Sr,
        census: null === Qr ? "none" : JSON.stringify(Qr),
        gpu: null !== (Wr = null === (ar = (0, nr.C)()) || void 0 === ar ? void 0 : ar.renderer) && void 0 !== Wr ? Wr : "",
        browser: (0, Nr.o)(),
        wasmBuild: Zr.wasm,
        clientVersion: Zr.client
      }
    }

    function MQ(rr, Sr, Qr, Zr) {
      const Wr = (0, Nr.q)(),
        ar = {
          ...CQ(rr, Sr, Qr, Zr),
          renderWarned: String(Wr)
        },
        jr = `first view drew no whole terrain in ${qr.h/1e3} s, ${Sr}${Wr?", render warned":""}`;
      return gS({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: ZS,
        fatal: !1,
        message: jr,
        details: ar
      })
    }

    function GQ(rr, Sr, Qr, Zr, Wr) {
      const ar = {
          ...CQ(rr, Qr.cause, Zr, Wr),
          waitedMs: String(Math.round(Sr.waitedMs)),
          visibleMs: String(Math.round(Sr.visibleMs)),
          drawnMs: String(Math.round(Sr.drawnMs)),
          frames: String(Sr.frames),
          renderPending: String(Qr.renderPending),
          viewWait: null === Qr.wait ? "none" : Qr.wait.slice(0, 6).join(",")
        },
        jr = (0, Tr.h)(Sr, Qr);
      return gS({
        kind: "viewUnshown",
        code: "CORE-firstViewUnshown",
        site: ZS,
        fatal: !1,
        message: jr,
        details: ar
      })
    }

    function kQ(rr, Sr, Qr, Zr, Wr) {
      const ar = (0, hr.f)(),
        jr = (0, hr.b)(rr, Sr, Qr, Zr, ar),
        Ir = {
          gpuModel: ar,
          wasmBuild: Wr.wasm,
          clientVersion: Wr.client
        };
      return gS({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: WS,
        fatal: !1,
        message: jr,
        details: Ir
      })
    }

    function AQ(rr, Sr, Qr) {
      return gS({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: rr,
        fatal: !1,
        message: `a ${rr} worker did not start`,
        details: {
          waitedMs: String(Math.round(Sr)),
          wasmBuild: Qr.wasm,
          clientVersion: Qr.client
        }
      })
    }

    function VQ(rr, Sr, Qr) {
      return gS({
        kind: "recovered",
        code: "CORE-replayFault",
        site: rr,
        fatal: !1,
        message: `the replay's ${rr} failed`,
        details: {
          wasmBuild: Qr.wasm,
          clientVersion: Qr.client
        },
        error: Sr
      })
    }

    function iQ(rr, Sr) {
      const Qr = {
          wasmBuild: Sr.wasm,
          clientVersion: Sr.client
        },
        Zr = rr instanceof Error ? rr.message : String(rr);
      return gS({
        kind: "recovered",
        code: "CORE-cameraDirector",
        site: jS,
        fatal: !1,
        message: "the scripted camera's director threw",
        details: Qr,
        instance: Zr,
        error: rr
      })
    }
    const wQ = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function cQ(rr) {
      if (0 === rr) return "none";
      const Sr = [60, 600, 3600].find((Sr => rr < Sr));
      return void 0 === Sr ? "ge3600" : `lt${Sr}`
    }

    function FQ(rr, Sr) {
      return null === rr ? "unbound" : (0, zr.h)(Sr - rr)
    }

    function oQ(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (rr & mr.S.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (rr & mr.S.LINKS_RUNNING) ? "links running" : "", `frames ${(0,Ur.b)(cQ(rr&mr.S.FRAMES))}`, `up ${(0,Ur.b)(FQ(Sr,Qr))}`].filter(Boolean).join(", ")
    }

    function bQ(rr, Sr, Qr) {
      const Zr = "lost" === Sr && void 0 !== Qr ? ` (${Qr})` : "";
      return `the ${rr} ${wQ[Sr]}${Zr}`
    }
    const JQ = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function DQ(rr, Sr, Qr, Zr) {
      var Wr;
      let {
        restoreLost: ar = !1,
        adapterRemembered: jr = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, Ir = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const fr = null === Qr || void 0 === Qr ? void 0 : Qr.message,
        Er = "pipeline_failed" === Sr ? Sr : Qr instanceof yr.d ? "timeout" : (0, zr.q)("frames_refused" === Sr, "string" === typeof fr ? fr : ""),
        pr = null === Zr.boundAtMs ? "unbound" : `up${(0,zr.f)(Ir-Zr.boundAtMs)}`,
        xr = null === Zr.adapter ? "no adapter" : (0, zr.m)(Zr.adapter),
        mr = `${!0===Zr.indirectHangs?" ih":""}${!0===Zr.restoresSkipped?" nr":""}${ar?" rl":""}${jr?" ar":""}`,
        Nr = `${Er} ${(0,yr.e)()?"hidden":"visible"} ${pr}${mr} ${xr}`;
      if ("webgpu" !== rr || "lost" !== Sr && "frames_refused" !== Sr) return {
        detail: Nr,
        count: void 0
      };
      return {
        detail: Nr,
        count: {
          errorKind: "render_lost",
          error: new Error(Nr),
          code: (0, zr.v)(Er, null !== (Wr = Zr.boundAtMs) && void 0 !== Wr ? Wr : Ir, Ir).code,
          fields: {
            renderBackend: Vr.c.webgpu
          }
        }
      }
    }

    function dQ(rr, Sr, Qr) {
      const {
        count: Zr
      } = DQ("webgpu", rr, Sr, Qr);
      void 0 !== Zr && GS(Zr)
    }
    const sQ = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function uQ(rr) {
      var Sr;
      return null !== (Sr = rr instanceof Error ? rr.reason : void 0) && void 0 !== Sr ? Sr : ""
    }

    function rZ(rr, Sr, Zr) {
      var Wr, ar, jr, Ir, Er;
      let {
        from: pr,
        cause: xr = "lost",
        restoreLost: mr = !1,
        adapterRemembered: tr = !1,
        error: hr,
        context: nr = JQ,
        session: er = sQ
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, Kr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: yr,
        count: Br
      } = DQ(rr, xr, hr, nr, {
        restoreLost: mr,
        adapterRemembered: tr
      }, Kr), Tr = {
        reloadFrom: null !== pr && void 0 !== pr ? pr : "",
        losses: String(Sr),
        cause: xr,
        detail: yr,
        vendor: null !== (Wr = null === (ar = nr.adapter) || void 0 === ar ? void 0 : ar.vendor) && void 0 !== Wr ? Wr : "",
        architecture: null !== (jr = null === (Ir = nr.adapter) || void 0 === Ir ? void 0 : Ir.architecture) && void 0 !== jr ? jr : "",
        indirectHangs: String(nr.indirectHangs),
        restoresSkipped: String(nr.restoresSkipped),
        restoreLost: String(mr),
        adapterRemembered: String(tr),
        lossReason: uQ(hr),
        samples: String(er.samples),
        sunShadows: String(er.sunShadows),
        renderDistance: String(er.renderDistance),
        gpuFamily: null !== (Er = (0, fr.b)()) && void 0 !== Er ? Er : "",
        browser: (0, Nr.o)(),
        siteUsed: Yr.siteUsed,
        wasmBuild: Zr.wasm,
        clientVersion: Zr.client
      }, vr = "webgpu" !== rr && void 0 !== pr ? function(rr, Sr, Qr, Zr) {
        return `: ${rr}, ${Sr?"restore lost":"not restored"}, up ${(0,Ur.b)(FQ(Qr,Zr))}`
      }(pr, mr, nr.boundAtMs, Kr) : "", Or = `${bQ(rr,xr)}${vr}`, Lr = gS({
        kind: "recovered",
        code: "CORE-renderLost",
        site: dr,
        fatal: !1,
        message: Or,
        details: Tr,
        error: hr,
        countAs: Br
      });
      return VS("ga", (async () => {
        const {
          logError: Sr
        } = await Promise.resolve().then((() => Qr(4010))), Zr = `${zr.e["webgpu"===rr?"WebGPU":"WebGL2"]}\n Error: ${yr}`;
        Sr("warning", Zr), Sr("error", Zr)
      })), Lr
    }

    function SZ(rr, Sr) {
      var Qr, Zr;
      const Wr = null === rr.name ? "TEXTURE-sources" : null === rr.url ? "TEXTURE-nourl" : rr.error instanceof Rr.e ? `TEXTURE-${rr.error.status}` : "TEXTURE-network",
        ar = null === rr.name ? "terrain textures could not load" : `terrain texture ${rr.name} could not load`,
        jr = {
          texture: null !== (Qr = rr.name) && void 0 !== Qr ? Qr : "",
          url: null !== (Zr = rr.url) && void 0 !== Zr ? Zr : "",
          wasmBuild: Sr.wasm,
          clientVersion: Sr.client
        };
      return gS({
        kind: "terrainTexture",
        code: Wr,
        site: Br.J,
        fatal: !1,
        message: ar,
        details: jr,
        error: rr.error
      })
    }
    const QZ = {
      previewAnimations: {
        site: sr,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: rS,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function ZZ(rr, Sr, Qr, Zr) {
      const {
        site: Wr,
        prefix: ar,
        name: jr
      } = QZ[rr], {
        stage: Ir,
        error: fr
      } = Qr;
      return gS({
        kind: rr,
        code: "decode" === Ir ? null === fr ? `${ar}-decode` : `${ar}-trap` : fr instanceof Pr.e ? `${ar}-${fr.status}` : `${ar}-network`,
        site: Wr,
        fatal: !1,
        message: "decode" === Ir ? `${jr} did not decode` : `${jr} could not load`,
        details: {
          url: Sr,
          wasmBuild: Zr.wasm,
          clientVersion: Zr.client
        },
        error: fr
      })
    }
    const WZ = "staleBuild";

    function aZ(rr, Sr, Qr) {
      const Zr = {
          failedSite: rr.site,
          url: rr.url,
          from: rr.from,
          sameBuild: String(rr.from === Sr),
          reloadMs: String(Math.max(0, Date.now() - rr.at)),
          wasmBuild: Qr.wasm,
          clientVersion: Qr.client
        },
        Wr = `reloaded into a newer build after ${rr.site} failed to load: ${rr.error}`;
      return gS({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: WZ,
        fatal: !1,
        message: Wr,
        details: Zr
      })
    }
  },
  42646: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      h: () => Wr,
      l: () => jr,
      n: () => fr
    });
    var Zr = Qr(5617);
    const Wr = 3e4,
      ar = 900;

    function jr(rr, Sr) {
      const Qr = null === rr ? 0 : Sr - rr;
      return Qr <= ar ? Qr : 0
    }
    class Ir {
      constructor(rr) {
        this.jx = rr, this.waitedMs = 0, this.lastMs = null
      }
      frame(rr, Sr) {
        return !!Sr || (this.waitedMs += jr(this.lastMs, rr), this.lastMs = rr, !(this.waitedMs < Wr) && (this.jx(), !0))
      }
    }

    function fr(rr, Sr) {
      return 0 === (rr & Zr.V.ChunkRequested) ? "no_chunk_request" : 0 === (rr & Zr.V.ChunkStored) ? "chunk_not_stored" : 0 === (rr & Zr.V.MeshLanded) ? "not_meshed" : null === Sr ? "no_frame_drawn" : 0 === Sr.terrainParts ? "no_terrain_parts" : Sr.terrainCompiling > 0 ? "terrain_compiling" : Sr.terrainOpaque + Sr.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  42637: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => fr,
      e: () => jr,
      h: () => pr
    });
    var Zr = Qr(194),
      Wr = Qr(42646);
    const ar = ["view", "startup", "skipped"];

    function jr(rr) {
      return 0 === rr.clientWidth || 0 === rr.clientHeight || 0 === rr.width || 0 === rr.height
    }

    function Ir(rr) {
      if (null === rr) return "none";
      const [Sr, Qr, Zr, Wr] = rr, ar = [
        ["link", Sr],
        ["terrain", Qr],
        ["wI", Zr],
        ["other", Wr]
      ];
      let jr = "none",
        Ir = 0;
      for (const [fr, Er] of ar) Er > Ir && (jr = fr, Ir = Er);
      return jr
    }
    class fr {
      constructor(rr) {
        this.gap = rr, this.chunkAtMs = null, this.lastFrameMs = null, this.drawnMs = 0, this.frames = 0, this.visibleFromMs = null, this.undrawn = {
          view: 0,
          startup: 0,
          skipped: 0
        }, this.over = !1
      }
      get open() {
        return null !== this.chunkAtMs && !this.over
      }
      playerChunk(rr, Sr) {
        null !== this.chunkAtMs || this.over || (this.chunkAtMs = rr, Sr || this.pageShown(rr))
      }
      pageShown(rr) {
        this.open && null === this.visibleFromMs && (this.visibleFromMs = rr, this.gap.restart(rr))
      }
      animationFrame(rr, Sr, Qr) {
        !this.open || null === this.visibleFromMs || rr <= this.visibleFromMs || (this.gap.animationFrame(), "paced" === Sr ? this.gap.paced() : "skipped" === Sr ? this.undrawn.skipped++ : "none" === Sr && this.undrawn[Qr ? "startup" : "view"]++)
      }
      frame(rr) {
        this.open && (this.drawnMs += (0, Wr.l)(this.lastFrameMs, rr), this.lastFrameMs = rr, this.frames++)
      }
      shown() {
        this.over = !0, this.gap.stop()
      }
      end(rr, Sr) {
        if (null === this.chunkAtMs || this.over) return null;
        this.over = !0;
        const Qr = null === this.visibleFromMs ? null : this.gap.words(!1, Sr);
        return this.gap.stop(), {
          end: rr,
          waitedMs: Math.max(Sr - this.chunkAtMs, 0),
          visibleMs: null === this.visibleFromMs ? 0 : Math.max(Sr - this.visibleFromMs, 0),
          drawnMs: this.drawnMs,
          frames: this.frames,
          undrawn: {
            ...this.undrawn
          },
          page: Qr
        }
      }
    }

    function Er(rr) {
      return rr < 5e3 ? "brief" : rr < 15e3 ? "short" : rr < 6e4 ? "long" : "very_long"
    }

    function pr(rr, Sr) {
      var Qr, Wr;
      const jr = [...null === rr.page ? [] : rr.page.split(" "), ...ar.filter((Sr => rr.undrawn[Sr] > 0)).map((rr => `undrawn:${rr}`)), ...Sr.canvasEmpty ? ["canvas:empty"] : []],
        fr = [
          ["", `first view unshown, ${Sr.cause}, ended ${rr.end}`],
          [", ", 0 === rr.visibleMs ? "visible none" : `visible ${Er(rr.visibleMs)}`],
          [", ", 0 === rr.frames ? "no frames" : `drew ${Er(rr.drawnMs)}`], ...jr.map(((rr, Sr) => [0 === Sr ? ", " : " ", rr])), [", ", `waited ${Er(rr.waitedMs)}`],
          [", ", Sr.bound ? "bound" : "unbound"], ...Sr.preload ? [
            [", ", "preload"]
          ] : [],
          [", ", Sr.startupLoaded ? "startup in" : "startup out"],
          [", ", Sr.renderPending > 0 ? "render pending" : "render resolved"],
          [", ", `lacked ${Ir(Sr.wait)}${(null!==(Qr=null===(Wr=Sr.wait)||void 0===Wr?void 0:Wr[4])&&void 0!==Qr?Qr:0)>0?" gapped":""}`]
        ];
      let pr = "";
      for (const [ar, Ir] of fr) {
        const rr = pr + ar + Ir;
        if (rr.length > Zr.ob) break;
        pr = rr
      }
      return pr
    }
  },
  42451: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr,
      e: () => zr,
      f: () => tr,
      h: () => hr,
      i: () => mr,
      k: () => Nr,
      l: () => pr,
      n: () => xr,
      o: () => Ur
    });
    class Zr extends Error {
      constructor(rr) {
        super(`the join's code did not load: ${rr instanceof Error?rr.message:String(rr)}`, {
          cause: rr
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === rr || void 0 === rr ? void 0 : rr.request
      }
    }
    let Wr = null,
      ar = null,
      jr = null;
    const Ir = [];
    let fr = null;

    function Er(rr, Sr) {
      try {
        rr(Sr)
      } catch (Qr) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", Qr)
      }
    }

    function pr() {
      return fr
    }

    function xr(rr) {
      Ir.push(rr), null !== fr && Er(rr, fr)
    }

    function mr(rr) {
      return Wr ??= Promise.all([Qr.e(85), Qr.e(113), Qr.e(88), Qr.e(177), Qr.e(91), Qr.e(225), Qr.e(253), Qr.e(112), Qr.e(142), Qr.e(246), Qr.e(245), Qr.e(307), Qr.e(244), Qr.e(223), Qr.e(50), Qr.e(224), Qr.e(127), Qr.e(214), Qr.e(281), Qr.e(143), Qr.e(103), Qr.e(69)]).then((() => Qr(55089))).then((Sr => {
        Sr.loadAudio(rr), fr = Sr;
        for (const rr of Ir) Er(rr, Sr);
        return Sr
      })).catch((rr => {
        throw Wr = null, rr
      })), Wr
    }
    async function Nr(rr, Sr) {
      try {
        const Qr = await mr(rr);
        await Qr.loadClientGame(Sr)
      } catch (Qr) {
        throw new Zr(Qr)
      }
    }

    function Ur(rr, Sr) {
      ar = {
        running: rr,
        shell: Sr
      }
    }

    function tr() {
      return jr
    }
    async function hr(rr) {
      const Sr = ar;
      if ((null === Sr || void 0 === Sr ? void 0 : Sr.running) !== rr) throw new Error("the core's session has ended");
      const Qr = await mr(Sr.shell.audio).catch((rr => {
        throw new Zr(rr)
      }));
      if (null !== jr) return jr;
      if (ar !== Sr || rr.isStopped) throw new Error("the core stopped while the game code loaded");
      if (jr = Qr.startGameHost(rr, Sr.shell), null === jr) throw new Error("the core's shared tables didn't read, so the game can't start");
      return jr
    }

    function zr() {
      null !== jr && (null !== fr ? fr.endGameHost(jr) : jr.closeGame()), jr = null, ar = null
    }
  },
  42565: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr
    });
    const Zr = {
      extensions: ["ANGLE_instanced_arrays", "OES_vertex_array_object", "OES_element_index_uint", "OES_standard_derivatives"],
      limits: {
        MAX_VERTEX_ATTRIBS: 16,
        MAX_TEXTURE_SIZE: 2048,
        MAX_TEXTURE_IMAGE_UNITS: 8,
        MAX_VARYING_VECTORS: 8,
        MAX_VERTEX_UNIFORM_VECTORS: 128,
        MAX_FRAGMENT_UNIFORM_VECTORS: 34
      },
      vertexHighFloatBits: 23
    }
  },
  42654: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      C: () => xr,
      F: () => Ir,
      e: () => Er,
      g: () => ar,
      k: () => jr,
      o: () => Wr,
      q: () => Nr,
      s: () => pr,
      v: () => fr,
      y: () => mr
    });
    var Zr = Qr(1956);
    const Wr = new Uint8Array([12]),
      ar = 2e3,
      jr = 257;

    function Ir(rr) {
      const Sr = new Uint8Array(4);
      return new DataView(Sr.buffer).setUint32(0, rr, !0), Sr
    }
    class fr extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class Er extends Error {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(rr), this.stage = Sr, this.code = Qr, this.serverText = Zr, this.socketOpened = Wr, this.name = "JoinError"
      }
    }
    class pr extends Error {
      constructor(rr) {
        super(rr), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class xr extends Error {
      constructor(rr) {
        super((0, Zr.f)(rr), {
          cause: rr
        }), this.name = "TrafficCheckError"
      }
    }
    class mr extends Error {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(rr, {
          cause: Qr
        }), this.networkLost = Sr, this.httpStatus = Zr, this.name = "SeatRequestError"
      }
    }
    class Nr extends Error {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(rr), this.code = Sr, this.serverText = Qr, this.name = "MatchmakeError"
      }
    }
  },
  42663: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Nr,
      f: () => mr,
      j: () => Ur
    });
    var Zr = Qr(3677),
      Wr = Qr(2472),
      ar = Qr(40627),
      jr = Qr(38018),
      Ir = Qr(40632),
      fr = Qr(42654),
      Er = Qr(42670);
    const pr = "seat reservation expired.",
      xr = "early_leave";

    function mr(rr) {
      if (rr instanceof jr.c) return "expected";
      if (rr instanceof fr.y) return rr.networkLost ? "expected" : "unrecognised";
      if (rr instanceof fr.e) {
        if ("closed" === rr.stage && (0 === rr.code || (0, Wr.c)(rr.code))) return "expected";
        if ("roomError" === rr.stage && (rr.serverText === pr || rr.serverText === xr)) return "expected"
      }
      return rr instanceof fr.e || rr instanceof fr.q ? null === (0, Ir.i)(rr.code).name ? "unrecognised" : "known" : (0, Zr.d)(rr) ? "expected" : rr instanceof fr.C || rr instanceof Er.c ? "known" : "unrecognised"
    }

    function Nr(rr) {
      return rr instanceof jr.c ? "timedOut" : "expected" !== mr(rr) || (0, Zr.d)(rr) || rr instanceof fr.e && 1001 === rr.code ? void 0 : "failed"
    }

    function Ur(rr) {
      return rr instanceof fr.e && "attach" !== rr.stage ? (0, ar.b)(rr, "closed" !== rr.stage || rr.socketOpened ? "socket" : "socket_unopened") : rr instanceof fr.y ? {
        at: "seat_lost",
        code: rr.httpStatus
      } : rr instanceof fr.q || rr instanceof jr.c ? (0, ar.b)(rr, rr instanceof jr.c ? rr.leg : "seat") : void 0
    }
  },
  42680: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => fr,
      f: () => Er,
      j: () => Nr,
      n: () => xr
    });
    var Zr = Qr(2398),
      Wr = Qr(5610),
      ar = Qr(42684),
      jr = Qr(42691),
      Ir = Qr(37529);
    const fr = 395,
      Er = 2147483648,
      pr = new Uint8Array(0);
    class xr extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class mr extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class Nr {
      constructor(rr, Sr, Qr) {
        var Zr, Wr, jr, Ir;
        let fr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = rr, this.build = Sr, this.onFailure = Qr, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.sp = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (Zr = fr.fetchFile) && void 0 !== Zr ? Zr : rr => (0, ar.j)(rr), this.onWritten = null !== (Wr = fr.onWritten) && void 0 !== Wr ? Wr : null, this.onTaken = null !== (jr = fr.onTaken) && void 0 !== jr ? jr : null, this.onPackFileFailed = null !== (Ir = fr.onPackFileFailed) && void 0 !== Ir ? Ir : null, this.startupLeft = new Set(rr.startup);
        for (const ar of rr.startup) this.request(ar)
      }
      get startupDone() {
        return 0 === this.startupLeft.size
      }
      get waiting() {
        return this.ready.length
      }
      get asking() {
        return this.pending.size
      }
      get inFlight() {
        return this.pending.size - this.ready.length
      }
      get unanswered() {
        return this.written.size
      }
      get keptBytes() {
        return this.keptTotal
      }
      drawnUrl(rr) {
        return this.drawn.get(rr)
      }
      request(rr) {
        const Sr = this.pending.get(rr);
        if (!0 === (null === Sr || void 0 === Sr ? void 0 : Sr.ask)) return;
        const Qr = this.Yx(rr, !0);
        Qr.recheck = void 0 !== Sr;
        const Zr = this.drawn.get(rr);
        if (void 0 !== Zr) return Qr.wI = !0, Qr.recheck = !0, void this.fetch(rr, Qr, Zr);
        this.fetchWanted(rr, Qr)
      }
      async refresh() {
        const rr = ++this.refreshes,
          Sr = new Set;
        for (const jr of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const rr of jr) 0 === (rr & ar.g) && Sr.add(rr);
        const Qr = [...Sr];
        let Zr;
        try {
          Zr = await Promise.all(Qr.map((rr => this.wanted(rr))))
        } catch {
          return null
        }
        if (rr !== this.refreshes) return null;
        const Wr = {
          resent: 0,
          refetched: 0,
          delivered: Qr.filter((rr => this.drawn.has(rr))).length
        };
        return Qr.forEach(((rr, Sr) => {
          const {
            url: Qr,
            inPlaceOf: ar
          } = Zr[Sr], jr = this.pending.get(rr);
          if (void 0 !== jr) {
            if (jr.wI || void 0 === jr.url) return void(jr.recheck = !0);
            if (jr.url === Qr) return;
            Wr.refetched++;
            const Sr = this.Yx(rr, jr.ask);
            return Sr.recheck = jr.recheck, void this.fetch(rr, Sr, Qr, ar)
          }
          const Ir = this.written.get(rr);
          void 0 === Ir ? this.drawn.get(rr) !== (null !== Qr && void 0 !== Qr ? Qr : void 0) && (Wr.resent++, this.fetch(rr, this.Yx(rr, !1), Qr, ar)) : Ir.url !== (null !== Qr && void 0 !== Qr ? Qr : "") && (Ir.attempt.recheck = !0)
        })), Wr
      }
      taken(rr, Sr) {
        const Qr = new Set,
          Zr = new Set;
        for (const Wr of Array.from(Sr)) 0 === (Wr & Er) ? Qr.add(Wr) : Zr.add((Wr & ~Er) >>> 0);
        for (const [Wr, ar] of this.written) ar.seq > rr || (this.written.delete(Wr), Qr.has(ar.seq) ? this.refusedFile(Wr, ar) : this.takenFile(Wr, ar, !ar.empty && !Zr.has(ar.seq)))
      }
      takenFile(rr, Sr, Qr) {
        const {
          attempt: Zr
        } = Sr;
        if (Qr) {
          var Wr;
          this.drawn.set(rr, Sr.url), this.undrawn.delete(rr), void 0 !== Zr.inPlaceOf ? this.refusedPack.set(rr, Zr.inPlaceOf) : Zr.wI || this.refusedPack.delete(rr), null === (Wr = this.onTaken) || void 0 === Wr || Wr.call(this, rr, !0);
          const Qr = this.pending.get(rr);
          if (!0 === (null === Qr || void 0 === Qr ? void 0 : Qr.wI) && Qr.url !== Sr.url) {
            const Qr = this.Yx(rr, !0);
            Qr.wI = !0, Qr.recheck = !0, this.fetch(rr, Qr, Sr.url)
          }
        } else {
          var ar;
          this.drawn.has(rr) || this.undrawn.add(rr), null === (ar = this.onTaken) || void 0 === ar || ar.call(this, rr, !1)
        }
        Zr.recheck && this.resendIfChanged(rr)
      }
      refusedFile(rr, Sr) {
        var Qr, Zr;
        if (null === (Qr = this.onTaken) || void 0 === Qr || Qr.call(this, rr, !1), this.refusedPack.set(rr, Sr.url), this.pending.has(rr)) return void(null === (Zr = this.onPackFileFailed) || void 0 === Zr || Zr.call(this, rr, Ur(Sr.url)));
        const Wr = this.Yx(rr, Sr.attempt.ask);
        Wr.recheck = Sr.attempt.recheck, this.afterRefusal(rr, Wr, Sr.url)
      }
      async afterRefusal(rr, Sr, Qr) {
        var Zr;
        let Wr;
        try {
          Wr = await this.wanted(rr)
        } catch (ar) {
          return void(this.pending.get(rr) === Sr && this.giveUp(rr, Sr, Qr, ar))
        }
        this.pending.get(rr) === Sr && (Wr.inPlaceOf !== Qr ? Sr.ask || (null !== (Zr = Wr.url) && void 0 !== Zr ? Zr : void 0) !== this.drawn.get(rr) ? this.fetch(rr, Sr, Wr.url, Wr.inPlaceOf) : this.pending.delete(rr) : this.fallBack(rr, Sr, Qr, Ur(Qr)))
      }
      Yx(rr, Sr) {
        const Qr = {
          url: void 0,
          ask: Sr,
          wI: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(rr, Qr);
        for (let Zr = this.ready.length - 1; Zr >= 0; Zr--) this.ready[Zr].file === rr && this.ready.splice(Zr, 1);
        return Qr
      }
      async wanted(rr) {
        const Sr = await this.files.url(rr);
        return null !== Sr && this.refusedPack.get(rr) === Sr ? {
          url: await this.files.shippedUrl(rr),
          inPlaceOf: Sr
        } : {
          url: Sr,
          inPlaceOf: void 0
        }
      }
      fetchWanted(rr, Sr) {
        const Qr = this.files.url(rr);
        Qr instanceof Promise ? Qr.then((Qr => {
          this.fetchFound(rr, Sr, Qr)
        }), (Qr => {
          this.pending.get(rr) === Sr && this.giveUp(rr, Sr, "", Qr)
        })) : this.fetchFound(rr, Sr, Qr)
      }
      fetchFound(rr, Sr, Qr) {
        null !== Qr && this.refusedPack.get(rr) === Qr ? Promise.resolve(this.files.shippedUrl(rr)).then((Zr => {
          this.fetch(rr, Sr, Zr, Qr)
        }), (Zr => {
          this.pending.get(rr) === Sr && this.giveUp(rr, Sr, Qr, Zr)
        })) : this.fetch(rr, Sr, Qr)
      }
      fetch(rr, Sr, Qr, Zr) {
        this.pending.get(rr) === Sr && (Sr.url = Qr, Sr.inPlaceOf = Zr, null !== Qr ? this.load(rr, Sr, Qr) : this.buildFile(rr, Sr, "", pr))
      }
      load(rr, Sr, Qr) {
        const Zr = this.sp.get(rr);
        (null === Zr || void 0 === Zr ? void 0 : Zr.url) !== Qr ? this.fetchFile(Qr).then((Zr => {
          var Wr, ar;
          this.pending.get(rr) === Sr && (this.keptTotal += Zr.byteLength - (null !== (Wr = null === (ar = this.sp.get(rr)) || void 0 === ar ? void 0 : ar.glb.byteLength) && void 0 !== Wr ? Wr : 0), this.sp.set(rr, {
            url: Qr,
            glb: Zr
          }), this.buildFile(rr, Sr, Qr, Zr))
        }), (Zr => {
          this.pending.get(rr) === Sr && this.fallBack(rr, Sr, Qr, Zr)
        })) : this.buildFile(rr, Sr, Qr, Zr.glb)
      }
      buildFile(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const jr = Zr.byteLength > 0 && (0, ar.m)(Qr) ? (rr | ar.d) >>> 0 : rr;
        this.queueRecord(rr, Sr, Qr, Zr, this.build(jr, Zr), Wr)
      }
      queueRecord(rr, Sr, Qr, Zr, ar, Ir) {
        ar.then((ar => {
          if (this.pending.get(rr) !== Sr) return;
          if (Wr.t + (0, Wr.Ke)(ar.byteLength) > Wr.Pc) return void this.ringRefused(rr, Sr, Qr, new xr(`${tr(Qr)}'s record is ${ar.byteLength-jr.c} bytes, past the cmd ring's ${Wr.Pc}`), Ir);
          const fr = {
            file: rr,
            url: Qr,
            payload: ar,
            glb: Zr,
            attempt: Sr
          };
          Ir ? this.ready.unshift(fr) : this.ready.push(fr)
        }))
      }
      async fallBack(rr, Sr, Qr, Zr) {
        var Wr;
        let ar = null,
          jr = Zr;
        try {
          ar = await this.files.shippedUrl(rr)
        } catch (Ir) {
          jr = Ir
        }
        this.pending.get(rr) === Sr && (null !== ar && ar !== Qr ? (null === (Wr = this.onPackFileFailed) || void 0 === Wr || Wr.call(this, rr, Zr), Sr.ask || this.drawn.get(rr) !== ar ? (Sr.url = ar, Sr.inPlaceOf = Qr, this.load(rr, Sr, ar)) : this.pending.delete(rr)) : this.giveUp(rr, Sr, Qr, jr))
      }
      ringRefused(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, ar.m)(Qr) ? this.fallBack(rr, Sr, Qr, Zr): this.giveUp(rr, Sr, Qr, Zr, Wr)
      }
      giveUp(rr, Sr, Qr, Wr) {
        let ar = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: rr,
          url: tr(Qr),
          error: Wr,
          startup: this.startupLeft.has(rr)
        }), Sr.ask || !this.drawn.has(rr) ? (0, Zr.S)(Wr) ? this.queueRecord(rr, Sr, Qr, pr, Promise.resolve((0, jr.l)(rr, (0, Ir.l)(Wr))), ar) : this.buildFile(rr, Sr, Qr, pr, ar) : this.pending.delete(rr)
      }
      async resendIfChanged(rr) {
        var Sr;
        if (0 !== (rr & ar.g)) return;
        let Qr;
        try {
          Qr = await this.wanted(rr)
        } catch {
          return
        }(null !== (Sr = Qr.url) && void 0 !== Sr ? Sr : void 0) === this.drawn.get(rr) || this.pending.has(rr) || this.written.has(rr) || this.fetch(rr, this.Yx(rr, !1), Qr.url, Qr.inPlaceOf)
      }
      drain(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === rr) return;
        let Qr = 0,
          Zr = 0;
        for (; Zr < this.ready.length && Qr < 262144;) {
          const Ir = this.ready[Zr];
          if (this.written.has(Ir.file)) {
            Zr++;
            continue
          }
          const pr = this.nextSeq;
          new DataView(Ir.payload.buffer, Ir.payload.byteOffset, Ir.payload.byteLength).setUint32(jr.f, pr, !0);
          const mr = Ir.attempt.wI && Ir.glb.byteLength > 0 && this.drawn.get(Ir.file) === Ir.url;
          if (rr(fr, mr ? 1 : 0, Ir.payload)) {
            if (this.nextSeq = pr >= Er - 1 ? 1 : pr + 1, this.ready.splice(Zr, 1), Qr += Ir.payload.byteLength, this.pending.delete(Ir.file), this.startupLeft.delete(Ir.file), this.written.set(Ir.file, {
                seq: pr,
                url: Ir.url,
                empty: 0 === Ir.glb.byteLength,
                attempt: Ir.attempt
              }), Ir.glb.byteLength > 0) try {
              var Wr;
              null === (Wr = this.onWritten) || void 0 === Wr || Wr.call(this, Ir.file, Ir.glb)
            } catch (ar) {
              console.warn("ModelFeed: reading the file's images failed", ar)
            }
          } else {
            if (null === Sr || 0 === Ir.glb.byteLength || Sr(Ir.payload.byteLength)) return;
            this.ready.splice(Zr, 1);
            const rr = new xr(`${tr(Ir.url)}'s record is ${Ir.payload.byteLength-jr.c} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(Ir.file, Ir.attempt, Ir.url, rr, !0)
          }
        }
      }
    }

    function Ur(rr) {
      return new mr(`presentation refused ${tr(rr)}`)
    }

    function tr(rr) {
      return rr.startsWith("data:") ? `${rr.slice(0,Math.min(Math.max(rr.indexOf(","),5),64))},...` : rr
    }
  },
  42684: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      g: () => ar,
      j: () => pr,
      m: () => Ir,
      o: () => Er,
      r: () => fr
    });
    var Zr = Qr(2398),
      Wr = Qr(4413);
    const ar = 2147483648,
      jr = 1073741824;

    function Ir(rr) {
      return rr.startsWith("data:")
    }

    function fr(rr) {
      let {
        onTableFailed: Sr,
        packUrl: Qr
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Zr = Er();
      Zr.catch((rr => {
        null === Sr || void 0 === Sr || Sr(rr)
      }));
      const Wr = async Sr => (await Zr).fileUrl((Sr & ~ar) >>> 0, rr);
      return {
        startup: [],
        url: async rr => {
          if (Qr && 0 === (rr & ar)) {
            const Sr = await Zr,
              Wr = Sr.filePackName(rr),
              ar = null === Wr || "lifeform" === Sr.fileSource(rr) ? null : Qr(Wr);
            if (null !== ar) return ar
          }
          return Wr(rr)
        },
        shippedUrl: Wr
      }
    }

    function Er() {
      return Qr.e(50).then((() => Qr(45329)))
    }
    async function pr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return rr.startsWith("data:") ? (0, Wr.e)(rr.slice(rr.indexOf(",") + 1), Sr) : (0, Zr.K)(rr, {
        spare: Sr
      })
    }
  },
  42691: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => fr,
      f: () => Er,
      j: () => Ur,
      l: () => mr,
      o: () => xr,
      r: () => Nr
    });
    const Zr = 826427981,
      Wr = 1,
      ar = 2,
      jr = 44,
      Ir = 58,
      fr = 8,
      Er = 4;

    function pr(rr, Sr, Qr) {
      const Wr = (new TextEncoder).encode(Qr),
        ar = fr + 4 * (Sr.length + 2),
        jr = new Uint8Array(ar + (Wr.byteLength + 3 & -4)),
        Ir = new DataView(jr.buffer);
      return Ir.setUint32(0, rr, !0), Ir.setUint32(fr, Zr, !0), Sr.forEach(((rr, Sr) => {
        Ir.setUint32(fr + 4 * (Sr + 1), rr, !0)
      })), Ir.setUint32(ar - 4, Wr.byteLength, !0), jr.set(Wr, ar), jr
    }

    function xr(rr, Sr) {
      return pr(rr, [ar], Sr)
    }

    function mr(rr, Sr) {
      return pr(rr, [Wr, Ir], Sr)
    }

    function Nr(rr, Sr) {
      return pr(rr, [Wr, jr], Sr)
    }

    function Ur(rr) {
      const Sr = fr;
      if (rr.byteLength < Sr + 12) return !1;
      const Qr = new DataView(rr.buffer, rr.byteOffset, rr.byteLength);
      return Qr.getUint32(Sr, !0) === Zr && Qr.getUint32(Sr + 4, !0) === Wr && Qr.getUint32(Sr + 8, !0) === jr
    }
  },
  42574: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr,
      f: () => pr,
      h: () => jr,
      l: () => fr
    });
    var Zr = Qr(37529);
    class Wr extends Error {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${rr}: the module trapped${Qr?" in an earlier call":""}: ${String(Sr)}`, {
          cause: Sr
        }), this.site = rr, this.trap = Sr, this.earlier = Qr, this.name = "ModuleTrapError", Sr instanceof Error && void 0 !== Sr.stack && (this.stack = `${this.name}: ${this.message}\n${Sr.stack}`)
      }
    }
    const ar = new WeakMap;

    function jr(rr) {
      return ar.has(rr)
    }

    function Ir(rr, Sr) {
      ar.has(rr) || ar.set(rr, Sr)
    }

    function fr(rr, Sr) {
      return !!(0, Zr.k)(Sr) && (Ir(rr, Sr), !0)
    }
    const Er = [
      ["error", rr => rr.error],
      ["unhandledrejection", rr => rr.reason]
    ];

    function pr(rr, Sr, Qr) {
      let jr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return ar.has(rr) ? Promise.reject(new Wr(Sr, ar.get(rr), !0)) : new Promise(((ar, fr) => {
        const pr = Qr => {
            Ir(rr, Qr), Nr(), fr(new Wr(Sr, Qr))
          },
          xr = rr => {
            rr instanceof WebAssembly.RuntimeError ? pr(rr) : (Nr(), fr(rr))
          },
          mr = Er.map((rr => {
            let [Sr, Qr] = rr;
            return [Sr, rr => {
              const Sr = Qr(rr);
              (0, Zr.k)(Sr) && pr(Sr)
            }]
          })),
          Nr = () => {
            for (const [rr, Sr] of mr) null === jr || void 0 === jr || jr.removeEventListener(rr, Sr)
          };
        for (const [rr, Sr] of mr) null === jr || void 0 === jr || jr.addEventListener(rr, Sr);
        let Ur;
        try {
          Ur = Qr()
        } catch (tr) {
          return void xr(tr)
        }
        Ur.then((rr => {
          Nr(), ar(rr)
        }), xr)
      }))
    }
  },
  42598: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      B: () => lr,
      D: () => gr,
      F: () => Jr,
      H: () => Cr,
      I: () => ir,
      L: () => kr,
      M: () => Rr,
      P: () => Dr,
      d: () => Lr,
      e: () => Tr,
      f: () => Vr,
      g: () => Gr,
      j: () => Br,
      l: () => Or,
      o: () => Kr,
      p: () => Pr,
      s: () => qr,
      t: () => br,
      w: () => or,
      z: () => Mr
    });
    var Zr = Qr(215),
      Wr = Qr(26),
      ar = Qr(4820),
      jr = Qr(135),
      Ir = Qr(351),
      fr = Qr(43),
      Er = Qr(335),
      pr = Qr(42559),
      xr = Qr(42579),
      mr = Qr(38006),
      Nr = Qr(42603),
      Ur = (Qr(42589), Qr(42707)),
      tr = Qr(42619),
      hr = Qr(42581);
    const zr = "wasmJoinBuild";
    let Yr = null,
      nr = null,
      er = null;

    function Kr(rr) {
      er = rr
    }
    let yr = !1;

    function Br() {
      yr = !0
    }

    function Tr() {
      return yr
    }
    let vr = !1;

    function Or() {
      vr = !0
    }

    function Lr() {
      return vr
    }

    function lr() {
      return er
    }
    let Xr = null;

    function Pr(rr) {
      Xr = rr, (0, Ir.e)(rr)
    }
    const Hr = "wasmClientRenderLost";

    function qr() {
      fr.n.setItem(Hr, !0)
    }

    function Rr() {
      return !0 === fr.n.getItem(Hr)
    }

    function gr() {
      return Xr
    }

    function Cr() {
      if (null === Yr) {
        fr.j.removeItem("wasmLastPick"), fr.j.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, Ir.k)(), Yr = (0, Er.p)().then((() => (0, pr.F)(Nr.h))).then((rr => (null === rr || (0, pr.p)(rr) || (nr = Ur.c[rr.backend], Wr.c.followGameGpu("webgpu" === rr.backend ? rr.adapter : null), "webgpu" === rr.backend && (0, tr.d)()), rr)))
      }
      return Yr
    }

    function Mr() {
      return nr
    }

    function Gr(rr) {
      return rr ? rr.load() : Promise.resolve().then((function() {
        var rr = new Error("Cannot find module '@bloxd/wasm/client'");
        throw rr.code = "MODULE_NOT_FOUND", rr
      })).then((rr => rr.bloxdWasmClient))
    }

    function kr(rr) {
      fr.j.setItem(zr, rr)
    }

    function Ar(rr, Sr) {
      const Qr = fr.j.getItem(zr);
      return null === Qr ? function(rr) {
        if (void 0 !== (0, Zr.b)(rr, "webgpu") && (0, pr.D)()) return "webgpu";
        return !1 === (0, jr.v)() ? "webgl1" : "webgl"
      }(rr) : "none" === Qr ? null : "string" === typeof Qr && void 0 !== (0, Zr.b)(rr, Qr) ? Qr : (Sr && console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(Qr)}, is none of this client's: guessing WebGL2's`), "webgl")
    }
    async function Vr() {
      if (null === Nr.h) return Gr(null);
      const rr = Ar(Nr.h, !0);
      return null === rr ? null : Nr.h[rr]()
    }

    function ir() {
      null === Yr && null !== Nr.h && "webgl" === Ar(Nr.h, !1) && (0, hr.e)()
    }
    let wr = null,
      cr = null,
      Fr = null;

    function or() {
      return wr ??= Cr().then((async rr => {
        const Sr = null !== rr && !(0, pr.p)(rr),
          Qr = {
            indirectHangs: Sr && await (0, pr.P)(rr, window.location.search),
            storagePullBreaks: Sr && (0, pr.$)(rr, window.location.search),
            splitPassBreaks: Sr && (0, pr.X)(rr, window.location.search),
            earlySky: Sr && (0, pr.L)(rr, window.location.search),
            instancedTerrain: Sr ? (0, pr.S)(rr, window.location.search) : null,
            cellLight: Sr && await (0, ar.g)("cellLight"),
            framesAhead: (0, pr.l)(window.location.search, Sr ? rr : null),
            webGpuRestores: !Sr || (0, pr.bb)(rr, (0, mr.d)()),
            bufferCopiesCrash: Sr && (0, pr.K)(rr, window.location.search),
            firstVertex: Sr ? (0, xr.g)(rr.backend, window.location.search) : void 0
          };
        return cr = Qr.indirectHangs, Fr = !Qr.webGpuRestores, Qr
      })), wr
    }

    function br() {
      return cr
    }

    function Jr() {
      return Fr
    }
    async function Dr() {
      const rr = null === Yr ? null : await Yr;
      return null !== rr && (0, pr.p)(rr) && (Yr = null, wr = null, cr = null, Fr = null), Cr()
    }
  },
  42715: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => fr,
      h: () => Er
    });
    var Zr = Qr(37566),
      Wr = Qr(42550),
      ar = Qr(5116),
      jr = Qr(335),
      Ir = Qr(38006);
    async function fr(rr, Sr) {
      return await Promise.all([(0, ar.h)(void 0, !0), (0, jr.p)()]), (0, Zr.n)(rr, Wr.i, {
        ...Sr,
        memoryMaximumBytes: (0, Ir.o)()
      })
    }
    async function Er() {
      return await (0, ar.h)(void 0, !0), (0, Zr.q)((0, Ir.o)())
    }
  },
  42579: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      g: () => ar
    });
    var Zr = Qr(285);
    const Wr = "provokingVertex";

    function ar(rr, Sr) {
      if ("webgl" !== rr) return;
      const Qr = new URLSearchParams(Sr).get(Wr);
      return "first" === Qr || "last" !== Qr && null
    }
    const jr = new WeakSet;

    function Ir(rr, Sr) {
      var Qr, Wr;
      let ar = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Qr = null === (Wr = globalThis.navigator) || void 0 === Wr ? void 0 : Wr.userAgent) && void 0 !== Qr ? Qr : "";
      try {
        !1 === Sr || jr.has(rr) || (jr.add(rr), rr.addEventListener("webglcontextrestored", (() => {
          Ir(rr, Sr, ar)
        })));
        const Qr = rr.getContext("webgl2");
        if (null === Qr || Qr.isContextLost()) return !1;
        if (!(null !== Sr && void 0 !== Sr ? Sr : function(rr, Sr) {
            var Qr, Wr;
            const ar = rr.getExtension("WEBGL_debug_renderer_info");
            if (null === ar) return !1;
            return function(rr, Sr, Qr) {
              return Qr.includes("Windows") && "adreno_6" === (0, Zr.g)(rr, Sr)
            }(String(null !== (Qr = rr.getParameter(ar.UNMASKED_VENDOR_WEBGL)) && void 0 !== Qr ? Qr : ""), String(null !== (Wr = rr.getParameter(ar.UNMASKED_RENDERER_WEBGL)) && void 0 !== Wr ? Wr : ""), Sr)
          }(Qr, ar))) return !1;
        const Wr = Qr.getExtension("WEBGL_provoking_vertex");
        return null !== Wr && (Wr.provokingVertexWEBGL(Wr.FIRST_VERTEX_CONVENTION_WEBGL), console.info("WebGL2 draws flat varyings from the first vertex (WEBGL_provoking_vertex)"), !0)
      } catch (fr) {
        return console.warn("WebGL2's provoking vertex couldn't be set: flat varyings draw from the last vertex", fr), !1
      }
    }
  },
  42585: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Er,
      d: () => Ir,
      f: () => pr,
      j: () => jr
    });
    var Zr = Qr(374),
      Wr = Qr(703);
    let ar;

    function jr(rr) {
      var Sr;
      const Qr = ar;
      return ar = void 0, null !== (Sr = fr(rr)) && void 0 !== Sr ? Sr : Qr
    }

    function Ir(rr) {
      try {
        const Sr = fr(rr);
        void 0 !== Sr && (ar = Sr, (0, Wr.f)((0, Zr.p)(Sr.reason, Sr.message)))
      } catch (Sr) {
        console.warn("Couldn't keep the WebGPU loss's cause", Sr)
      }
    }

    function fr(rr) {
      var Sr;
      const Qr = null === rr || void 0 === rr || null === (Sr = rr.WIr) || void 0 === Sr ? void 0 : Sr.call(rr),
        Zr = null === rr || void 0 === rr ? void 0 : rr.ZIr();
      if (void 0 === Zr) return;
      const Wr = new Error(Zr);
      return void 0 !== Qr && (Wr.reason = Qr), Wr
    }

    function Er(rr) {
      return rr instanceof Error ? rr : void 0
    }

    function pr(rr, Sr) {
      return "lost" !== rr && "frames_refused" !== rr ? {} : (0, Zr.p)("frames_refused" === rr ? rr : null === Sr || void 0 === Sr ? void 0 : Sr.reason, null === Sr || void 0 === Sr ? void 0 : Sr.message)
    }
  },
  42617: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Lr,
      d: () => Br,
      h: () => yr,
      l: () => Kr,
      o: () => Or,
      q: () => Hr,
      u: () => Pr,
      w: () => qr
    });
    var Zr = Qr(5617),
      Wr = Qr(42619),
      ar = Qr(35296);
    const jr = 1,
      Ir = 18,
      fr = 19,
      Er = 20,
      pr = 21,
      xr = 22,
      mr = 23,
      Nr = {
        [jr]: "link",
        2: "draw",
        3: "draw base vertex",
        4: "draw no index buffer",
        7: "draw missing block",
        8: "draw small binding",
        9: "draw missing texture",
        10: "draw no texture storage",
        11: "draw missing sampler",
        12: "draw missing vertex buffer",
        13: "draw short constant",
        15: "draw no zero buffer",
        16: "draw feedback loop",
        [Ir]: "retry linked",
        [fr]: "fallback linked",
        [Er]: "fallback failed",
        [pr]: "link stalled",
        [xr]: "link left pending",
        [mr]: "moved to general",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function Ur(rr, Sr, Qr) {
      return rr === Ir ? "program retry" : rr === jr ? "program link" : rr === pr ? "program link stall" : rr === xr ? "program link pending" : rr === fr || rr === Er || rr === mr ? `program ${Sr} ${Qr}` : "program"
    }
    const tr = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain",
        5: "scene warm stuck"
      },
      hr = {
        0: "transform",
        1: "object",
        2: "instance batch",
        3: "material",
        4: "terrain part",
        5: "particle system",
        6: "geometry",
        7: "texture",
        9: "shader pack",
        10: "text plane",
        11: "object chunk"
      },
      zr = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      Yr = {
        11: "none read after view",
        12: "some read after view"
      },
      nr = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...Yr
      },
      er = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function Kr(rr, Sr) {
      return rr === Zr.o.RenderSerialLinks && void 0 !== Yr[Sr]
    }

    function yr(rr, Sr) {
      return rr === Zr.o.RenderInternal && (Sr >>> 8 & 255) === xr
    }

    function Br(rr, Sr) {
      return rr === Zr.o.RenderSerialLinks && void 0 !== er[15 & Sr]
    }
    const Tr = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function vr(rr, Sr) {
      var Qr;
      return null !== (Qr = rr[Sr]) && void 0 !== Qr ? Qr : (0, ar.b)(Sr)
    }

    function Or() {
      return (0, ar.b)((0, Wr.b)())
    }

    function Lr(rr, Sr) {
      switch (rr) {
        case Zr.o.RenderSceneRowNotDrawn:
          return {
            words: ` ${vr(hr,Sr)}`, instance: String(Sr), group: String(rr)
          };
        case Zr.o.RenderChunkMeshNotDrawn: {
          const Qr = 0 === (128 & Sr) ? "" : " shortage",
            Zr = Sr >>> 8;
          return {
            words: ` ${vr(zr,127&Sr)}${Qr}${0===Zr?"":` kind ${(0,ar.b)(Zr)}`}`,
            instance: String(Sr),
            group: String(rr)
          }
        }
        case Zr.o.RenderInternal: {
          const Qr = vr(tr, 255 & Sr),
            Zr = Sr >>> 8 & 255;
          if (0 === Zr) return {
            words: ` ${Qr}`,
            instance: String(Sr),
            group: String(rr)
          };
          const Wr = vr(Nr, Zr),
            jr = Sr >>> 16;
          return {
            words: ` ${Qr} ${Wr} program ${(0,ar.b)(jr)}`,
            instance: `${Qr} ${Wr} ${jr}`,
            group: Ur(Zr, Wr, Qr),
            gpuDetails: {
              programFailure: Wr,
              program: String(jr)
            }
          }
        }
        case Zr.o.RenderSerialLinks: {
          if (Br(rr, Sr)) {
            const rr = function(rr) {
              const Sr = (Sr, Qr) => (0, ar.b)(rr >>> Sr & (1 << Qr) - 1),
                Qr = rr >>> 30 & 1 ? " restored" : "";
              return `link census ${er[15&rr]} linked ${Sr(22,8)} failed ${Sr(4,6)} retried ${Sr(10,6)} fallback ${Sr(16,6)}${Qr}`
            }(Sr);
            return {
              words: ` ${rr}`,
              instance: String(15 & Sr),
              group: "link census",
              gpuDetails: {
                linkCensus: rr
              }
            }
          }
          const Qr = vr(nr, Sr);
          return {
            words: ` ${Qr}`,
            instance: String(Sr),
            group: String(rr),
            gpuDetails: {
              serialLinks: Qr
            }
          }
        }
        case Zr.o.RenderGlErrorAfterRestore: {
          const Qr = vr(Tr, 65535 & Sr),
            Zr = Sr >>> 16,
            Wr = 65535 !== Zr;
          return {
            words: ` ${Qr}${Wr?` program ${(0,ar.b)(Zr)}`:""}`,
            instance: String(Sr),
            group: String(rr),
            gpuDetails: Wr ? {
              glError: Qr,
              program: String(Zr)
            } : {
              glError: Qr
            }
          }
        }
        default:
          return null
      }
    }
    const lr = 2,
      Xr = new Map;

    function Pr(rr) {
      let {
        group: Sr,
        instance: Qr
      } = rr, Zr = Xr.get(Sr);
      return void 0 === Zr && (Zr = [], Xr.set(Sr, Zr)), !Zr.includes(Qr) && (Zr.length >= lr || (Zr.push(Qr), !1))
    }

    function Hr() {
      return Xr.size > 0
    }

    function qr() {
      Xr.clear()
    }
  },
  42603: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      h: () => ar
    });
    var Zr = Qr(42607);
    const Wr = new WeakSet;
    const ar = {
        webgpu: async () => (function() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === rr || Wr.has(rr.prototype)) return;
          Wr.add(rr.prototype);
          const Sr = rr.prototype.requestDevice;
          rr.prototype.requestDevice = function(rr) {
            var Qr;
            const Wr = null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.requiredLimits) && void 0 !== Qr ? Qr : {},
              ar = Object.keys(Wr).filter((rr => !(rr in this.limits)));
            if (0 === ar.length) return Sr.call(this, rr);
            const jr = Object.fromEntries(Object.entries(Wr).filter((rr => {
              let [Sr] = rr;
              return Sr in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${ar.join(", ")}`), (0, Zr.reportDroppedRequiredLimits)(ar), Sr.call(this, {
              ...rr,
              requiredLimits: jr
            })
          }
        }(), (await Qr.e(8).then((() => Qr(55103)))).bloxdWasmWebgpu),
        webgl: async () => (await Qr.e(6).then((() => Qr(55119)))).bloxdWasmWebgl,
        webgl1: async () => (await Qr.e(7).then((() => Qr(55130)))).bloxdWasmWebgl1
      },
      jr = async () => (await Qr.e(5).then((() => Qr(55136)))).compileAnimationPackInWasm
  },
  42670: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => zr,
      g: () => hr,
      h: () => Kr
    });
    var Zr = Qr(7604),
      Wr = Qr(34),
      ar = Qr(4983),
      jr = Qr(5617),
      Ir = Qr(7595),
      fr = Qr(42673);

    function Er(rr, Sr) {
      const Qr = (0, Ir.c)(Sr.variants);
      return rr.setShaderPack(Qr.variantFlags, Qr.hooks, Qr.moduleCodes, (0, fr.u)(Sr.layers), fr.k[Sr.policy], Sr.keepCircleShadows)
    }
    const pr = 0,
      xr = 1,
      mr = 2,
      Nr = "shaderPack:failedToCompile",
      Ur = new Set(["no_webgpu_api", "no_adapter", "compatibility_held", "software_adapter", "adapter_error", "start_no_adapter"]),
      tr = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function hr(rr, Sr, Qr) {
      var Zr;
      const Wr = null !== (Zr = null === rr || void 0 === rr ? void 0 : rr.reason) && void 0 !== Zr ? Zr : "none";
      return Ur.has(Wr) ? {
        messageKey: Sr ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === Wr && "override" === (null === rr || void 0 === rr ? void 0 : rr.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: tr.has(Wr) && !Qr ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class zr extends Error {
      constructor(rr) {
        super(`the shader pack can't run in this game: ${rr}`), this.messageKey = rr, this.name = "ShaderPackJoinError"
      }
    }
    const Yr = "strict";
    class nr {
      constructor(rr) {
        this.deps = rr, this.pagePack = void 0, this.loaded = null, this.policy = Yr, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = rr.load().catch((Sr => (rr.warn("the shader pack could not load: the game draws without it", Sr), {
          status: "none"
        }))).then((rr => (this.loaded = rr, "active" === rr.status && (this.handOverToPreviews(rr), null !== rr.harnessPolicy && (this.policy = rr.harnessPolicy, this.handOver())), rr)))
      }
      async join(rr) {
        this.leave();
        const Sr = this.game,
          [Qr, Wr] = await Promise.all([this.pagePack, this.policyOf(rr)]);
        if (Sr !== this.game || "none" === Qr.status) return null;
        const ar = "active" === Qr.status ? Qr.pack.variants : Qr.variants,
          jr = (0, Zr.g)(ar, Wr);
        if (jr && "active" === Qr.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (jr) {
          const rr = this.cantRun(Qr, Wr);
          if (null !== rr) return rr
        } else if ("blocked" === Qr.status || null === this.deps.core) return null;
        return this.policy = Wr, this.handOver(), jr && this.refused ? Nr : (this.joined = !0, this.offInThisGame = !jr, null)
      }
      async replay(rr) {
        const Sr = await this.join(rr);
        null === Sr ? this.playable() : this.deps.failInGame(Sr)
      }
      cantRun(rr, Sr) {
        const {
          core: Qr,
          noWebGpu: Zr
        } = this.deps;
        if ("blocked" === rr.status) {
          return "shaderPack:failedUnchecked" === rr.messageKey && null === Qr && Zr.noAdapter ? Zr.messageKey : rr.messageKey
        }
        return this.refused || this.failedPolicies.has(Sr) ? Nr : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var rr;
        return this.runsInJoinedGame() && "active" === (null === (rr = this.loaded) || void 0 === rr ? void 0 : rr.status) ? function(rr, Sr) {
          const Qr = rr.filter((rr => (0, Zr.g)([rr], Sr))),
            Wr = rr => Qr.some((Sr => Sr[rr]));
          return {
            sceneDepth: Wr("sceneDepth"),
            sunShadow: Wr("sunShadow"),
            airShadow: Wr("airShadow")
          }
        }(this.loaded.pack.variants, this.policy) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(Nr) : (null !== this.couldntRun ? this.notify(ar.b, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.policy) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(rr) {
        for (const {
            code: Sr,
            detail: Qr
          }
          of rr)
          if (Sr === jr.o.RenderShaderPackNotRun) switch (255 & Qr) {
            case pr:
              this.refused = !0, this.failed();
              break;
            case xr:
              this.failedPolicies.add(this.policy), this.failed();
              break;
            case mr:
              this.failedModelPolicies.add(this.policy), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(Nr) : this.failedWhileJoining = !0)
      }
      fail(rr) {
        this.leave(), this.deps.failInGame(rr)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(rr, Sr) {
        const Qr = this.game;
        this.deps.notify(rr, (() => Qr === this.game && this.joined), Sr)
      }
      handOver() {
        var rr;
        const {
          core: Sr
        } = this.deps;
        null !== Sr && "active" === (null === (rr = this.loaded) || void 0 === rr ? void 0 : rr.status) && (Er(Sr, {
          ...this.loaded.pack,
          policy: this.policy
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(rr) {
        let {
          pack: Sr,
          harnessPolicy: Qr
        } = rr;
        const {
          previews: Zr
        } = this.deps;
        null !== Zr && Er(Zr, {
          ...Sr,
          policy: null !== Qr && void 0 !== Qr ? Qr : Yr
        })
      }
      policyOf(rr) {
        return this.deps.policyOf(rr).catch((rr => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", rr), Yr)))
      }
    }
    const er = "wasmShaderPackNotice";

    function Kr(rr, Sr, Qr, Zr) {
      return Wr.i.subscribe(er, (rr => {
        let {
          translationKey: Sr,
          stillCurrent: Qr,
          reasonKey: Zr
        } = rr;
        Qr() && Wr.i.Jp("chat", (0, ar.j)(Sr, Zr))
      })), new nr({
        load: yr,
        policyOf: Br,
        core: rr,
        previews: Sr,
        noWebGpu: Qr,
        notify: (rr, Sr, Qr) => {
          const Zr = {
            translationKey: rr,
            stillCurrent: Sr,
            reasonKey: Qr
          };
          Wr.i.Jp(er, Zr, !0)
        },
        failInGame: rr => {
          Wr.i.Jp(ar.f, rr)
        },
        warn: Zr
      })
    }
    async function yr() {
      const [{
        shaderPackPage: rr,
        harnessShaderPackMode: Sr
      }, {
        shaderPackTextures: Zr
      }] = await Promise.all([Qr.e(138).then((() => Qr(40792))), Qr.e(139).then((() => Qr(7588)))]), Wr = await rr.load();
      return "active" !== Wr.status ? Wr : {
        status: "active",
        pack: {
          variants: Wr.pack.variants,
          layers: Zr().layers,
          keepCircleShadows: Wr.pack.keepCircleShadows
        },
        harnessPolicy: Sr()
      }
    }
    async function Br(rr) {
      var Sr;
      const [{
        shaderPackPage: Zr,
        harnessShaderPackMode: Wr
      }, {
        getShaderPackPolicy: ar
      }] = await Promise.all([Qr.e(138).then((() => Qr(40792))), Qr.e(108).then((() => Qr(45277)))]);
      return await Zr.load(), null !== (Sr = Wr()) && void 0 !== Sr ? Sr : ar(rr)
    }
  },
  42694: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir,
      h: () => hr,
      k: () => fr,
      o: () => Er,
      r: () => pr,
      v: () => mr
    });
    var Zr = Qr(37613),
      Wr = Qr(42699);
    const ar = "atlas:",
      jr = 3e4;
    class Ir extends Error {
      constructor(rr, Sr) {
        super(`fetching ${rr} answered HTTP ${Sr}`), this.url = rr, this.status = Sr, this.name = "TerrainTextureFetchError"
      }
    }

    function fr(rr) {
      if (!rr.startsWith(ar)) return null;
      const Sr = Number(rr.slice(ar.length));
      return Number.isInteger(Sr) && Sr >= 0 ? Sr : null
    }
    async function Er() {
      const rr = await Qr.e(235).then((() => Qr(35587)));
      return {
        atlasSheets: rr.blockAtlasUrls,
        texture: Sr => {
          var Qr, Zr, ar;
          return null !== (Qr = null !== (Zr = null !== (ar = rr.animatedBlockTextures[Sr]) && void 0 !== ar ? ar : rr.rotatedBlockTextures[Sr]) && void 0 !== Zr ? Zr : Wr.b[Sr]) && void 0 !== Qr ? Qr : null
        }
      }
    }
    async function pr(rr) {
      const Sr = new AbortController,
        Qr = setTimeout((() => {
          Sr.abort(new DOMException(`${rr} took over ${jr} ms`, "TimeoutError"))
        }), jr);
      let Zr;
      try {
        const Qr = await fetch(rr, {
          signal: Sr.signal
        });
        if (!Qr.ok) throw new Ir(rr, Qr.status);
        Zr = await Qr.blob()
      } finally {
        clearTimeout(Qr)
      }
      const Wr = await createImageBitmap(Zr, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return mr(Wr)
      } finally {
        Wr.close()
      }
    }
    const xr = 8192;

    function mr(rr) {
      const {
        width: Sr,
        height: Qr
      } = rr, Wr = Math.max(1, Math.min(Qr, xr)), ar = (0, Zr.g)(Sr, Wr, {
        willReadFrequently: !0
      });
      if (!ar) throw new Error("no 2D context to read the texture back");
      ar.globalCompositeOperation = "copy";
      const jr = new Uint8Array(Sr * Qr * 4);
      for (let Zr = 0; Zr < Qr; Zr += Wr) {
        const Ir = Math.min(Wr, Qr - Zr);
        ar.drawImage(rr, 0, Zr, Sr, Ir, 0, 0, Sr, Ir), jr.set(ar.getImageData(0, 0, Sr, Ir).data, Zr * Sr * 4)
      }
      return {
        width: Sr,
        height: Qr,
        pixels: jr
      }
    }
    async function Nr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pr;
      const Zr = [],
        Wr = await Promise.all(rr.map((async rr => {
          var Wr, jr;
          const Ir = null !== (Wr = null === (jr = Sr.decoded) || void 0 === jr ? void 0 : jr.call(Sr, rr)) && void 0 !== Wr ? Wr : null,
            Er = null === Ir ? function(rr, Sr) {
              if (rr.startsWith(ar)) {
                var Qr;
                const Zr = fr(rr);
                return null === Zr ? null : null !== (Qr = Sr.atlasSheets[Zr]) && void 0 !== Qr ? Qr : null
              }
              return Sr.texture(rr)
            }(rr, Sr) : null,
            pr = null !== Ir && void 0 !== Ir ? Ir : null === Er ? null : Qr(Er);
          if (null === pr) return Zr.push({
            name: rr,
            url: Er,
            error: new Error(`no URL for terrain texture ${rr}`)
          }), null;
          try {
            const Sr = await pr;
            if (Sr.pixels.byteLength !== Sr.width * Sr.height * 4) throw new Error(`decoded ${Sr.pixels.byteLength} bytes for ${Sr.width}x${Sr.height} texels`);
            return {
              name: rr,
              texture: Sr
            }
          } catch (xr) {
            return Zr.push({
              name: rr,
              url: Er,
              error: xr
            }), null
          }
        }))),
        jr = Wr.filter((rr => null !== rr)),
        Ir = new Uint32Array(2 * jr.length);
      jr.forEach(((rr, Sr) => {
        let {
          texture: Qr
        } = rr;
        Ir[2 * Sr] = Qr.width, Ir[2 * Sr + 1] = Qr.height
      }));
      return {
        handOver: {
          names: jr.map((rr => {
            let {
              name: Sr
            } = rr;
            return Sr
          })),
          textures: jr.map((rr => {
            let {
              texture: Sr
            } = rr;
            return Sr.pixels
          })),
          sizes: Ir
        },
        failures: Zr
      }
    }
    const Ur = [2e3, 1e4, 3e4, 6e4, 12e4];

    function tr() {}
    class hr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ur,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = rr, this.retryMs = Sr, this.keepBelow = Qr, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Er,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Zr = ++this.started,
          Wr = {
            decode: Qr.decode,
            wholeAtlas: Qr.wholeAtlas
          };
        return this.loadAndHandOver(Sr, Wr, rr, (() => {
          var rr;
          return Zr < this.landed || !1 === (null === (rr = Qr.wanted) || void 0 === rr ? void 0 : rr.call(Qr))
        }), {
          onTaken: (rr, Qr) => {
            this.landed = Zr, this.current = {
              mine: Zr,
              sources: Sr,
              load: Wr,
              sp: rr,
              failed: Qr
            }
          }
        })
      }
      restore(rr) {
        var Sr;
        const Qr = this.current;
        if (null === Qr) return Promise.resolve(null);
        if ((null === (Sr = this.restoring) || void 0 === Sr ? void 0 : Sr.mine) === Qr.mine) return this.restoring.done;
        const Zr = {
          mine: Qr.mine,
          done: this.restoreLanded(Qr, rr).finally((() => {
            this.restoring === Zr && (this.restoring = null)
          }))
        };
        return this.restoring = Zr, Zr.done
      }
      async restoreLanded(rr, Sr) {
        const Qr = () => this.landed !== rr.mine,
          {
            sp: Zr
          } = rr;
        if (null !== Zr) return this.stopped() ? null : this.core.setTerrainTextures(Zr.names, Zr.textures, Zr.sizes);
        let Wr = Sr;
        for (let ar = 0;; ar++) {
          const Sr = this.retryMs.at(ar),
            Zr = {
              allOrNothingExcept: void 0 === Sr ? void 0 : rr.failed
            },
            jr = await this.loadAndHandOver(rr.sources, rr.load, Wr, Qr, Zr);
          if (!1 !== jr || void 0 === Sr || this.stopped()) return jr;
          if (Wr = tr, await new Promise((rr => {
              setTimeout(rr, Sr)
            })), Qr()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const ar = this.core.terrainTextureNames();
        var jr;
        if (0 === ar.length) return null === (jr = Wr.onTaken) || void 0 === jr || jr.call(Wr, null, new Set), !0;
        let Ir, Er;
        try {
          Ir = await rr(), Er = await Nr(ar, Ir, Sr.decode)
        } catch (hr) {
          return Zr() ? null : (Qr({
            name: null,
            url: null,
            error: hr
          }), !1)
        }
        if (Zr() || this.stopped()) return null;
        for (const fr of Er.failures) Qr(fr);
        const pr = Wr.allOrNothingExcept;
        if (void 0 !== pr && Er.failures.some((rr => {
            let {
              name: Sr
            } = rr;
            return null === Sr || !pr.has(Sr)
          })) || !0 === Sr.wholeAtlas && Er.failures.some((rr => {
            let {
              name: Sr
            } = rr;
            return null === Sr || null !== fr(Sr)
          }))) return !1;
        const {
          handOver: xr
        } = Er, mr = function(rr) {
          return rr.textures.reduce(((rr, Sr) => rr + Sr.byteLength), 0)
        }(xr) < this.keepBelow, Ur = this.core.setTerrainTextures(xr.names, xr.textures, xr.sizes, mr ? void 0 : () => {
          !async function(rr, Sr) {
            await Sr;
            for (const {
                buffer: Zr
              }
              of rr) {
              const rr = Zr;
              var Qr;
              if (!rr.detached) null === (Qr = rr.transfer) || void 0 === Qr || Qr.call(rr, 0)
            }
          }(xr.textures, Ir.heldUntil)
        });
        if (Ur) {
          var tr;
          const rr = new Set(Er.failures.flatMap((rr => {
            let {
              name: Sr
            } = rr;
            return null === Sr ? [] : [Sr]
          })));
          null === (tr = Wr.onTaken) || void 0 === tr || tr.call(Wr, mr ? xr : null, rr)
        }
        return Ur
      }
    }
  },
  35408: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Er,
      h: () => xr,
      l: () => pr
    });
    var Zr = Qr(285),
      Wr = Qr(109),
      ar = Qr(135),
      jr = Qr(129),
      Ir = Qr(705);
    const fr = new Set(["mali_bifrost"]);

    function Er() {
      if (Ir.h) return;
      const rr = (0, Wr.pageOperatingSystem)();
      if ("android" !== rr && "windows" !== rr || (0, Ir.d)("webgl_default")) return;
      if ("windows" === rr) return rr => "qualcomm" === (0, Wr.normaliseGpuVendor)((0, jr.c)(rr).vendor);
      const Sr = (0, ar.q)(),
        Qr = null === Sr ? (0, Zr.p)() : (0, Zr.g)(Sr.vendor, Sr.renderer);
      return null !== Qr && fr.has(Qr) ? rr => (0, Zr.l)((0, jr.c)(rr).vendor, Qr) : void 0
    }

    function pr(rr, Sr) {
      return rr ? () => !0 : Sr()
    }
    async function xr(rr) {
      try {
        const Sr = pr(rr, Er),
          Qr = navigator.gpu;
        if (void 0 === Sr || void 0 === Qr) return !1;
        const Zr = await (0, jr.k)(Qr, {
          seed: !1,
          compatibility: Sr
        });
        return "string" !== typeof Zr && Zr.compatibility && !(0, jr.f)(Zr.adapter)
      } catch (Sr) {
        return console.error("WebGPU compatibility-mode adapter request failed.", Sr), !1
      }
    }
  },
  42619: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => fr,
      d: () => Er
    });
    var Zr = Qr(109),
      Wr = Qr(5126);
    const ar = "webgpuPipeline";

    function jr(rr) {
      return rr.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let Ir = null;

    function fr() {
      if (null === Ir) try {
        rr = (0, Zr.getBrowserName)(), Sr = (0, Zr.getBrowserVersion)(), Qr = (0, Zr.getOperatingSystem)(), Wr = (0, Zr.getOperatingSystemVersion)(), Ir = `${rr.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===Sr?"unknown":jr(Sr)}-${Qr}${void 0===Wr?"":`_${jr(Wr)}`}`
      } catch (ar) {
        console.warn("The user agent couldn't be read for its browser code", ar), Ir = "unknown"
      }
      var rr, Sr, Qr, Wr;
      return Ir
    }

    function Er() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const Sr = `WGPU-${fr()}`,
        Zr = (rr, Zr) => {
          const {
            reason: jr,
            message: Ir
          } = Zr, fr = String(Ir);
          if ((0, Wr.u)(jr, fr)) return;
          const Er = {
            pipeline: null !== rr && void 0 !== rr ? rr : "",
            reason: String(jr),
            browserMessage: fr
          };
          Promise.resolve().then((() => Qr(42607))).then((rr => {
            let {
              reportCrash: Qr
            } = rr;
            Qr({
              kind: "coreError",
              code: Sr,
              site: ar,
              fatal: !1,
              message: `${Er.pipeline} ${Er.reason}: ${Er.browserMessage}`,
              details: Er,
              error: Zr
            })
          })).catch((rr => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", rr)
          }))
        },
        jr = rr.createRenderPipelineAsync;
      rr.createRenderPipelineAsync = function(rr) {
        return jr.call(this, rr).catch((Sr => {
          throw Zr(rr.label, Sr), Sr
        }))
      };
      const Ir = rr.createComputePipelineAsync;
      rr.createComputePipelineAsync = function(rr) {
        return Ir.call(this, rr).catch((Sr => {
          throw Zr(rr.label, Sr), Sr
        }))
      }
    }
  },
  42581: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir,
      h: () => fr
    });
    var Zr = Qr(135);
    let Wr = !1;

    function ar() {
      let rr = null;
      try {
        return rr = document.createElement("canvas").getContext("webgl2"), null !== rr
      } catch {
        return !1
      } finally {
        try {
          var Sr, Qr;
          null === (Sr = rr) || void 0 === Sr || null === (Qr = Sr.getExtension("WEBGL_lose_context")) || void 0 === Qr || Qr.loseContext()
        } catch {}
      }
    }

    function jr() {
      "hidden" === document.visibilityState && (Wr = !1, document.removeEventListener("visibilitychange", jr))
    }

    function Ir() {
      Wr || "visible" !== document.visibilityState || !(0, Zr.u)() && !ar() || (Wr = !0, document.addEventListener("visibilitychange", jr))
    }

    function fr() {
      return Wr || ar()
    }
  },
  42555: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/bloxd_wasm_models_bg.65d2d7a0e42a4e1c694f.wasm"
  },
  42553: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/bloxd_wasm_workers_bg.5bded7162be9062b4193.wasm"
  },
  42550: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      i: () => Zr
    });
    const Zr = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new Qr.U(Qr(42553))
      }
    };
    const Wr = {
      name: "bloxd_wasm_models",
      url: function() {
        return new Qr.U(Qr(42555))
      }
    }
  },
  7595: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => er,
      g: () => Kr,
      i: () => Yr,
      k: () => zr
    });
    var Zr = Qr(7604);
    const Wr = 6,
      ar = 3,
      jr = 1,
      Ir = 2,
      fr = 4,
      Er = 8,
      pr = 16,
      xr = 32,
      mr = 64,
      Nr = 128,
      Ur = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function tr(rr) {
      if (!rr) return 0;
      const Sr = Ur.indexOf(rr);
      if (Sr <= 0) throw new Error(`"${rr}" is not a shader pack hook function`);
      return Sr
    }

    function hr(rr) {
      if (0 === rr) return null;
      const Sr = Ur[rr];
      if (void 0 === Sr) throw new Error(`${rr} is not a shader pack hook function id`);
      return Sr
    }

    function zr(rr) {
      const Sr = Zr.e.length;
      return {
        strict: rr >= Sr,
        program: Zr.e[rr % Sr]
      }
    }

    function Yr(rr) {
      return Number(rr.strict) * Zr.e.length + Zr.e.indexOf(rr.program)
    }

    function nr(rr) {
      return "" === rr ? [] : rr.split(" ")
    }

    function er(rr) {
      const Sr = {
        variantFlags: new Uint8Array(Wr),
        hooks: new Uint8Array(Wr * ar),
        moduleCodes: Array(Wr).fill(""),
        reads: Array(2 * Wr).fill("")
      };
      for (const Qr of rr) {
        const rr = Yr(Qr.key),
          Zr = (rr, Sr) => null === Qr.hooks.surface || Qr.reads.fragment.includes(rr) ? 0 : Sr;
        Sr.variantFlags[rr] = (Qr.sceneDepth ? jr : 0) | (Qr.movesVertices ? Ir : 0) | (Qr.sunShadow ? fr : 0) | (Qr.airShadow ? Er : 0) | (Qr.discards ? pr : 0) | Zr("localPosition", xr) | Zr("enchantSpeed", mr) | Zr("enchantTier", Nr), Sr.hooks[rr * ar] = tr(Qr.hooks.vertex), Sr.hooks[rr * ar + 1] = tr(Qr.hooks.surface), Sr.hooks[rr * ar + 2] = tr(Qr.hooks.light), Sr.moduleCodes[rr] = Qr.moduleCode, Sr.reads[2 * rr] = Qr.reads.vertex.join(" "), Sr.reads[2 * rr + 1] = Qr.reads.fragment.join(" ")
      }
      return Sr
    }

    function Kr(rr) {
      const {
        hooks: Sr,
        moduleCodes: Qr,
        reads: Zr
      } = rr;
      return Array.from(rr.variantFlags, ((rr, Wr) => {
        const xr = Wr * ar;
        return {
          key: zr(Wr),
          hooks: {
            vertex: hr(Sr[xr]),
            surface: hr(Sr[xr + 1]),
            light: hr(Sr[xr + 2])
          },
          moduleCode: Qr[Wr],
          sceneDepth: 0 !== (rr & jr),
          sunShadow: 0 !== (rr & fr),
          airShadow: 0 !== (rr & Er),
          movesVertices: 0 !== (rr & Ir),
          discards: 0 !== (rr & pr),
          reads: {
            vertex: nr(Zr[2 * Wr]),
            fragment: nr(Zr[2 * Wr + 1])
          }
        }
      }))
    }
  },
  42673: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      B: () => Ur,
      b: () => Wr,
      d: () => Zr,
      h: () => mr,
      i: () => pr,
      k: () => hr,
      m: () => ar,
      n: () => Ir,
      p: () => fr,
      q: () => jr,
      u: () => tr,
      x: () => Nr
    });
    const Zr = 3,
      Wr = 0,
      ar = 1,
      jr = 2,
      Ir = {
        uniform: 3,
        ZN: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      fr = 10,
      Er = "BloxdPackInputs",
      pr = "bloxdPackInputs",
      xr = [{
        name: "seconds",
        type: "f32",
        offset: 0
      }, {
        name: "lit",
        type: "u32",
        offset: 4
      }, {
        name: "renderOffset",
        type: "vec3i",
        offset: 16
      }, {
        name: "sunDirection",
        type: "vec3f",
        offset: 32
      }, {
        name: "eyePosition",
        type: "vec3f",
        offset: 48
      }, {
        name: "shadowDirection",
        type: "vec3f",
        offset: 64
      }],
      mr = 80;

    function Nr() {
      const rr = xr.map((rr => {
        let {
          name: Sr,
          type: Qr
        } = rr;
        return `    ${Sr}: ${Qr},\n`
      })).join("");
      return `struct ${Er} {\n${rr}}\n@group(${Zr}) @binding(${Wr}) var<uniform> ${pr}: ${Er};\n`
    }

    function Ur(rr, Sr) {
      const Qr = new DataView(rr, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, mr),
        [Zr, Wr, ar, jr, Ir, fr] = xr;
      Qr.setFloat32(Zr.offset, Sr.seconds, !0), Qr.setUint32(Wr.offset, Sr.lit ? 1 : 0, !0);
      for (let Er = 0; Er < 3; Er++) Qr.setInt32(ar.offset + 4 * Er, Sr.renderOffset[Er], !0), Qr.setFloat32(jr.offset + 4 * Er, Sr.crr[Er], !0), Qr.setFloat32(Ir.offset + 4 * Er, Sr.eyePosition[Er], !0), Qr.setFloat32(fr.offset + 4 * Er, Sr.shadowDirection[Er], !0)
    }

    function tr(rr) {
      const Sr = new Uint32Array(Math.max(1, rr.length));
      return rr.forEach(((rr, Qr) => {
        let {
          id: Zr,
          rotation: Wr
        } = rr;
        Sr[Qr] = 65535 & Zr | (3 & Wr) << 16
      })), Sr
    }
    const hr = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7604: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr,
      f: () => jr,
      g: () => Ir,
      k: () => Wr,
      n: () => ar
    });
    const Zr = ["terrain", "liquid", "model"];

    function Wr() {
      const rr = [];
      for (const Sr of [!1, !0])
        for (const Qr of Zr) rr.push({
          strict: Sr,
          program: Qr
        });
      return rr
    }

    function ar(rr) {
      return `${rr.strict?"strict":"allow"}.${rr.program}`
    }

    function jr(rr) {
      return !rr.hooks.vertex && !rr.hooks.surface && !rr.hooks.light
    }

    function Ir(rr, Sr) {
      return "off" !== Sr && (null === rr || rr.some((rr => rr.key.strict === ("strict" === Sr) && !jr(rr))))
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);