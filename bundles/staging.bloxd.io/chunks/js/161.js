export const id = 161;
export const ids = [161];
export const modules = {
  35175: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      g: () => Vb
    });
    var eb = Mb(309),
      Hb = Mb(153),
      pb = Mb(35179);

    function Vb() {
      var bb, wb, Mb;
      return null !== (bb = (0, eb.o)(null !== (wb = null === (Mb = (0, Hb.n)()) || void 0 === Mb ? void 0 : Mb.renderer) && void 0 !== wb ? wb : null, (0, Hb.k)())) && void 0 !== bb ? bb : "unknown"
    }

    function gb(bb, wb, Mb, eb, Hb) {
      const Vb = null === wb ? "untimed" : `${Math.round(wb)} ms`;
      return `frames stalled, ${Mb}, gpu ${(0,pb.b)(Hb)}, blocking ${Vb}, drawn ${Math.round(bb)} ms apart, timers ${eb.timers}, timer gap ${Math.round(eb.longestGapMs)} ms`
    }
  },
  40381: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => lb
    });
    var eb = Mb(10278),
      Hb = Mb(37772),
      pb = Mb(40386);
    const Vb = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      gb = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function lb(bb, wb) {
      if (bb instanceof Hb.e) return {
        at: Vb[wb],
        code: 0
      };
      const Mb = (0, eb.e)(bb),
        lb = "number" === typeof Mb ? Mb : 0;
      return null !== (0, pb.g)(lb).name ? {
        at: "refused",
        code: lb
      } : {
        at: gb[wb],
        code: lb
      }
    }
  },
  10278: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      e: () => Vb,
      f: () => gb,
      g: () => Lb,
      j: () => lb
    });
    var eb = Mb(225),
      Hb = Mb(5472);

    function pb(bb) {
      return Vb(bb) === eb.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function Vb(bb) {
      return "object" === typeof bb && null !== bb ? bb.code : void 0
    }

    function gb(bb) {
      var wb;
      return null !== (wb = Object.keys(Hb.c).find((wb => Hb.c[wb] === bb))) && void 0 !== wb ? wb : null
    }

    function lb(bb) {
      return "notWhitelisted" === bb ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Lb = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  35179: (bb, wb, Mb) => {
    function eb(bb) {
      return String(bb).replace(/\d/g, (bb => String.fromCharCode(97 + Number(bb))))
    }
    Mb.d(wb, {
      b: () => eb
    })
  },
  40386: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      g: () => lb,
      k: () => Vb,
      m: () => Hb
    });
    var eb = Mb(225);

    function Hb(bb) {
      const wb = bb.endsWith(eb.g);
      return {
        text: (wb ? bb.slice(0, -eb.g.length) : bb) || null,
        dropsCache: wb
      }
    }
    const pb = "Either your internet isn't working or this is a bug.";

    function Vb(bb, wb) {
      const Mb = lb(bb);
      return null !== Mb.name && "" === eb.b[Mb.name].text && null !== wb ? wb : Mb.reason
    }
    const gb = "You were removed from the game.";

    function lb(bb) {
      var wb;
      let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Hb = null !== (wb = Object.keys(eb.b).find((wb => eb.b[wb].code === bb))) && void 0 !== wb ? wb : null;
      if (null === Hb) return {
        code: bb,
        name: Hb,
        reason: null !== Mb && void 0 !== Mb ? Mb : `${pb}\nCode: ${bb}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Vb,
        canReconnect: lb = !1
      } = eb.b[Hb], Lb = bb === eb.b.outdatedVersion.code || bb === eb.b.loadRecaptchaError.code;
      return {
        code: bb,
        name: Hb,
        reason: "" !== Vb ? Vb : null !== Mb && void 0 !== Mb ? Mb : bb === eb.b.gameOrPluginKick.code ? gb : `Code: ${bb}`,
        canReconnect: lb,
        automaticallyReconnect: bb === eb.b.customGameUpdated.code || bb === eb.b.duplicateLobbyNameError.code,
        requiresRefresh: Lb
      }
    }
  },
  42303: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb,
      e: () => Ib,
      i: () => Vb,
      j: () => Hb,
      m: () => gb,
      o: () => Lb
    });
    class eb extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Hb(bb) {
      return bb instanceof RangeError && /call stack/i.test(bb.message) || bb instanceof Error && "InternalError" === bb.name && /recursion/i.test(bb.message)
    }
    const pb = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Vb(bb) {
      var wb;
      return bb instanceof WebAssembly.RuntimeError || bb instanceof eb || Hb(bb) && pb.test(null !== (wb = bb.stack) && void 0 !== wb ? wb : "")
    }

    function gb(bb, wb) {
      if (Vb(bb)) throw bb;
      console.error(wb, bb)
    }

    function lb(bb, wb, Mb, Hb, pb) {
      if (wb % Hb !== 0 || wb + Mb > bb.byteLength) throw new eb(`${pb}: ${Mb} bytes at ${wb}, ${Hb}-aligned, outside ${bb.byteLength} bytes of memory`)
    }

    function Lb(bb, wb, Mb, eb, Hb) {
      return 0 === Mb ? null : (lb(wb, Mb, eb * bb.BYTES_PER_ELEMENT, bb.BYTES_PER_ELEMENT, Hb), new bb(wb, Mb, eb))
    }

    function Ib(bb, wb, Mb, eb, Hb) {
      return 0 === wb ? null : (lb(bb, wb, Mb, eb, Hb), new DataView(bb, wb, Mb))
    }
  },
  42375: (bb, wb, Mb) => {
    Mb.d(wb, {
      C: () => Mw,
      D: () => yb,
      F: () => Vw,
      H: () => pw,
      L: () => ew,
      M: () => lw,
      O: () => hw,
      S: () => gw,
      W: () => Hw,
      _: () => Lw,
      bb: () => Ab,
      c: () => Zb,
      d: () => zw,
      db: () => tw,
      f: () => Kw,
      hb: () => Fw,
      j: () => Ew,
      kb: () => Wb,
      m: () => mw,
      nb: () => Jb,
      q: () => Uw,
      s: () => sw,
      v: () => Bw,
      x: () => jw,
      z: () => bw
    });
    var eb = Mb(366),
      Hb = Mb(303),
      pb = Mb(309),
      Vb = Mb(26),
      gb = Mb(4060),
      lb = Mb(737),
      Lb = Mb(5363),
      Ib = Mb(4034),
      Ob = Mb(4843),
      Ub = Mb(110),
      tb = Mb(160),
      Cb = Mb(364),
      Eb = Mb(43),
      Fb = Mb(361),
      Bb = Mb(135),
      sb = Mb(689),
      mb = Mb(352),
      hb = Mb(153),
      zb = Mb(144),
      Xb = Mb(5685),
      xb = Mb(42379),
      jb = Mb(1848),
      Kb = Mb(42387),
      rb = Mb(42390),
      Rb = Mb(35285),
      Db = Mb(42399),
      cb = Mb(42401);
    const Yb = "bloxd-webgpuOffAfterLoss",
      Zb = "context:webgl",
      fb = "probe:threw";

    function Ab(bb) {
      return bb.includes("Web page caused context loss and was blocked")
    }

    function Wb() {
      const bb = document.createElement("canvas");
      let wb = "";
      bb.addEventListener("webglcontextcreationerror", (bb => {
        wb = bb.statusMessage
      }));
      try {
        var Mb, eb;
        null === (Mb = bb.getContext("webgl")) || void 0 === Mb || null === (eb = Mb.getExtension("WEBGL_lose_context")) || void 0 === eb || eb.loseContext()
      } catch (Hb) {
        return String(Hb)
      }
      return wb
    }

    function Jb(bb) {
      let wb;
      try {
        wb = bb.getContext("webgl", {
          powerPreference: hb.d
        })
      } catch {
        wb = null
      }
      if (null === wb) return null;
      let Mb = null;
      try {
        const bb = wb.getParameter(wb.MAX_TEXTURE_SIZE);
        Mb = "number" === typeof bb && bb > 0 ? bb : null
      } catch {
        Mb = null
      }
      try {
        var eb;
        null === (eb = wb.getExtension("WEBGL_lose_context")) || void 0 === eb || eb.loseContext()
      } catch {}
      return Mb
    }
    const Sb = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);

    function Nb() {
      return "ios" === (0, Ub.getOperatingSystem)() ? "ios" : "other"
    }
    const vb = "mali_valhall",
      Qb = new Set(["nvidia_pre_turing"]),
      Gb = new Set(["intel_gen7_8"]),
      qb = new Set(["powervr_rogue"]);

    function ab(bb, wb, Mb) {
      return Sb.has(bb) ? "android_arm" === bb && wb === vb && "mobileAndroid" !== Mb ? "webgpu_default" : "webgl_default" : null
    }

    function ib(bb) {
      return function(bb) {
        try {
          return bb()
        } catch {
          return null
        }
      }((() => {
        var wb, Mb, eb, Vb;
        const gb = null !== (wb = null === (Mb = bb.info) || void 0 === Mb ? void 0 : Mb.vendor) && void 0 !== wb ? wb : "";
        return "windows" === (0, Ub.getOperatingSystem)() && "" !== gb && "intel" !== (0, Ub.normaliseGpuVendor)(gb) ? null : ((0, Ub.seedGpuVendor)(gb), ab((0, Hb.k)(), (0, pb.i)(gb, null !== (eb = null === (Vb = bb.info) || void 0 === Vb ? void 0 : Vb.architecture) && void 0 !== eb ? eb : ""), tb.siteUsed))
      }))
    }

    function ub() {
      var bb;
      return {
        gpu: null !== (bb = navigator.gpu) && void 0 !== bb ? bb : null,
        webgl2: Db.e,
        webgl1: () => function(bb) {
          let wb, Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xb.e;
          try {
            wb = bb.getContext("webgl")
          } catch {
            wb = null
          }
          if (null === wb) return [Zb];
          const eb = [];
          try {
            for (const Hb of Mb.extensions) null === wb.getExtension(Hb) && eb.push(Hb);
            for (const [Hb, pb] of Object.entries(Mb.limits)) {
              const bb = wb[Hb],
                Mb = "number" === typeof bb ? wb.getParameter(bb) : null;
              ("number" !== typeof Mb || Mb < pb) && eb.push(`limit:${Hb}`)
            }
            const bb = wb.getShaderPrecisionFormat(wb.VERTEX_SHADER, wb.HIGH_FLOAT);
            (null === bb || bb.precision < Mb.vertexHighFloatBits) && eb.push("precision:vertex_high_float")
          } catch {
            eb.push(fb)
          }
          try {
            var Hb;
            null === (Hb = wb.getExtension("WEBGL_lose_context")) || void 0 === Hb || Hb.loseContext()
          } catch {}
          return eb
        }(document.createElement("canvas")),
        webgl1First: () => Pb((() => function(bb, wb) {
          if ("chrome_os" !== bb) return !1;
          const Mb = wb();
          return null !== Mb && qb.has((0, pb.k)(Mb.vendor, Mb.renderer))
        }((0, Ub.getOperatingSystem)(), hb.z))),
        offAfterLoss: bb => Pb((() => bb ? (0, Fb.E)() : Vb.c.isWebGpuOffAfterLoss())),
        fewWasmMemories: mb.c,
        oldIntelDriver: bb => Pb((() => (0, Bb.g)(bb))),
        intelGen9: bb => Pb((() => (0, Bb.p)(bb))),
        storeIntelGen9Verdict: bb => {
          Eb.i.setItem(Bb.C, bb)
        },
        gpuClassWebGlArm: ib,
        storeGpuClassVerdict: bb => {
          Eb.i.setItem(Bb.B, bb)
        },
        gpuClassOnWebGl: bb => (0, sb.c)(bb),
        webGlDefaultFamily: bb => Gb.has((0, pb.i)(bb.vendor, bb.architecture)),
        storeWebGlDefaultFamilyVerdict: bb => {
          Eb.i.setItem(Bb.L, bb)
        },
        override: () => db(),
        claimed: () => nb((0, lb.p)()),
        webGpuSetting: () => {
          const bb = Eb.i.getItem(eb.mc);
          return "boolean" === typeof bb ? bb : null
        },
        heldBack: () => sb.f,
        storeHoldbackSpared: bb => {
          Eb.i.setItem(Bb.z, bb)
        },
        intelGen9OnWebGl: () => sb.i,
        LC: () => Pb((() => (0, Ob.g)(Ub.featureFlags.settings.canUseShaderPacks))),
        windows: () => Pb((() => "windows" === (0, Ub.getOperatingSystem)())),
        defaultCompatibility: Rb.d
      }
    }

    function db() {
      let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, gb.m)("render") && "webgl1" === (0, gb.k)("renderer")) return "webgl1";
      const wb = [() => new URLSearchParams(window.location.search).get(Ib.c), () => Eb.i.getItem(Ib.e), () => {
        const wb = localStorage.getItem(Yb);
        return null !== wb && bb && localStorage.removeItem(Yb), "1" === wb ? "webgl2" : null
      }];
      for (const Mb of wb) {
        let bb = null;
        try {
          bb = nb(Mb())
        } catch {}
        if (null !== bb) return bb
      }
      return null
    }

    function Pb(bb) {
      try {
        return bb()
      } catch {
        return !1
      }
    }

    function nb(bb) {
      return "lite" === bb ? "webgpu" : "webgl2" === bb || "babylon" === bb ? "webgl" : null
    }

    function yb(bb) {
      return "none" === bb || "compatibility_mode" === bb
    }
    async function ob() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ub();
      const wb = await async function(bb) {
        const wb = kb(bb),
          {
            source: Mb
          } = wb,
          eb = !wb.asked,
          Hb = "gpu" in wb && wb.heldBack,
          Vb = function(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return Hb && !yb(bb) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: Mb
            } : {
              reason: bb,
              adapter: wb,
              source: Mb
            }
          };
        if (!("gpu" in wb)) return Vb(wb.refused);
        let gb;
        try {
          gb = await (0, jb.n)((0, zb.k)(wb.gpu, {
            compatibility: Tb(bb, wb)
          }), Xw, `requestAdapter didn't settle in ${Xw/1e3} s`)
        } catch {
          return Vb("adapter_error")
        }
        if ("string" === typeof gb) return Vb(gb);
        const {
          adapter: lb,
          compatibility: Lb
        } = gb, Ib = (0, zb.d)(lb);
        if ((0, zb.h)(lb)) return Vb("software_adapter", Ib);
        const Ob = bb.windows() && function(bb) {
          return Qb.has((0, pb.i)(bb.vendor, bb.architecture))
        }(Ib);
        if (bb.storeHoldbackSpared(Ob), Hb && !Ob) return Vb("webgl_holdback");
        const Ub = bb.intelGen9(lb);
        bb.storeIntelGen9Verdict(Ub);
        const tb = Ub ? null : bb.gpuClassWebGlArm(lb);
        bb.storeGpuClassVerdict(null !== tb && void 0 !== tb && tb);
        const Cb = bb.webGlDefaultFamily(Ib);
        if (bb.storeWebGlDefaultFamilyVerdict(Cb), eb && bb.oldIntelDriver(lb)) return Vb("old_intel_driver", Ib);
        if ("default" === Mb && Ub && bb.intelGen9OnWebGl()) return Vb("intel_gen9", Ib);
        if ("default" === Mb && null !== tb && bb.gpuClassOnWebGl(tb)) return Vb("gpu_class_webgl", Ib);
        if ("default" === Mb && Cb) return Vb("gpu_wasm_arm", Ib);
        return Vb(Lb ? "compatibility_mode" : "none", Ib)
      }(bb);
      if (yb(wb.reason)) return {
        backend: "webgpu",
        ...wb
      };
      const Mb = "webgl1" === bb.override(),
        eb = "not_requested" === wb.reason && ("override" === wb.source || "claim" === wb.source),
        Hb = !Mb && !eb && bb.webgl1First();
      if (!Mb && !Hb && bb.webgl2()) return {
        backend: "webgl",
        ...wb
      };
      const Vb = bb.webgl1();
      return 0 === Vb.length ? {
        backend: "webgl1",
        ...wb
      } : Hb && bb.webgl2() ? {
        backend: "webgl",
        ...wb
      } : {
        missing: Vb
      }
    }

    function Tb(bb, wb) {
      let {
        source: Mb,
        asked: eb
      } = wb;
      return eb || "default" === Mb ? (0, Rb.h)(eb, bb.defaultCompatibility) : void 0
    }

    function kb(bb) {
      const wb = bb.override(),
        Mb = bb.webGpuSetting(),
        eb = null === wb && !0 !== Mb && bb.LC(),
        Hb = null !== wb || null !== Mb || eb ? null : bb.claimed(),
        pb = null !== wb ? "override" : !0 === Mb ? "setting" : eb ? "pack" : !1 === Mb ? "setting" : null !== Hb ? "claim" : "default",
        Vb = function(bb) {
          return "override" === bb || "setting" === bb
        }(pb);
      if ("webgl" === wb || "webgl1" === wb || "webgl" === Hb || "setting" === pb && !1 === Mb) return {
        source: pb,
        asked: Vb,
        refused: "not_requested"
      };
      if (!bb.gpu) return {
        source: pb,
        asked: Vb,
        refused: "no_webgpu_api"
      };
      const gb = "default" === pb && bb.heldBack();
      if (gb && !bb.windows()) return {
        source: pb,
        asked: Vb,
        refused: "webgl_holdback"
      };
      const lb = Vb ? null : bb.offAfterLoss("pack" === pb) ? "off_after_loss" : bb.fewWasmMemories() ? "few_wasm_memories" : null;
      return null !== lb ? {
        source: pb,
        asked: Vb,
        refused: gb ? "webgl_holdback" : lb
      } : {
        source: pb,
        asked: Vb,
        heldBack: gb,
        gpu: bb.gpu
      }
    }

    function bw() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...ub(),
          override: () => db(!1)
        },
        wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ub.isWebKit,
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nb;
      try {
        if (!wb()) return !1;
        const eb = kb(bb);
        if (!("gpu" in eb) || eb.heldBack) return !1;
        const Hb = "default" === eb.source ? ab(Mb(), "apple", tb.siteUsed) : null;
        return null === Hb || !bb.gpuClassOnWebGl(Hb)
      } catch (eb) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", eb), !1
      }
    }
    let ww = !1;
    async function Mw(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ub();
      if (null === bb) return null;
      const Mb = await ob(wb);
      return ww = !("missing" in Mb) && "webgpu" === Mb.backend && "claim" === Mb.source, "missing" in Mb ? Mb : {
        ...Mb,
        load: bb[Mb.backend]
      }
    }
    async function ew(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ub().gpu,
        eb = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== bb.backend) return !1;
      const Hb = Ow(bb, wb, "indirectDraws", "off", "on");
      if (null !== Hb) return Hb;
      if (null !== bb.adapter && (0, Bb.s)(bb.adapter, eb)) return !0;
      if (null === Mb) return !1;
      try {
        var pb;
        const bb = await (0, jb.n)(Mb.requestAdapter({
          powerPreference: "low-power"
        }).then((async bb => (null !== bb && await (0, zb.f)(bb), bb))), Xw, `the low-power requestAdapter didn't settle in ${Xw/1e3} s`);
        return (0, Bb.s)(null !== (pb = null === bb || void 0 === bb ? void 0 : bb.info) && void 0 !== pb ? pb : {}, eb)
      } catch (Vb) {
        return Vb instanceof jb.h
      }
    }

    function Hw(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, Ub.pageOperatingSystem)();
      if ("webgpu" !== bb.backend) return !1;
      const Hb = Ow(bb, wb, "terrainFetch", "texture", "storage");
      return null !== Hb ? Hb : null !== bb.adapter && ((0, Bb.m)(bb.adapter, Mb) || (0, Bb.k)(bb.adapter, eb))
    }

    function pw(bb, wb) {
      if ("webgpu" !== bb.backend) return !1;
      const Mb = Ow(bb, wb, "skyOrder", "early", "last");
      return null !== Mb ? Mb : null !== bb.adapter && (0, pb.i)(bb.adapter.vendor, bb.adapter.architecture) === vb
    }

    function Vw(bb, wb) {
      if ("webgpu" !== bb.backend) return !1;
      const Mb = Ow(bb, wb, "uploadCopies", "off", "on");
      return null !== Mb ? Mb : null !== bb.adapter && "powervr_rogue" === (0, pb.i)(bb.adapter.vendor, bb.adapter.architecture)
    }

    function gw(bb, wb, Mb) {
      if ("webgpu" !== bb.backend) return !1;
      const eb = Ow(bb, wb, "sceneDepth", "off", "on");
      return null !== eb ? eb : null !== bb.adapter && (0, Bb.n)(bb.adapter, Mb)
    }

    function lw(bb, wb) {
      return "webgl" === bb.backend ? Ow(bb, wb, "instancedTerrain", "1", "0") : null
    }

    function Lw(bb, wb) {
      return "webgpu" !== bb.backend || wb && (null === bb.adapter || !(0, Fb.G)(bb.adapter))
    }

    function Iw(bb, wb, Mb, eb) {
      const Hb = new URLSearchParams(wb).get(Mb),
        pb = null !== Hb && void 0 !== Hb ? Hb : null === bb ? null : (0, lb.i)(Mb);
      return null !== pb && eb(pb) ? (ww ||= null === Hb && "webgpu" === (null === bb || void 0 === bb ? void 0 : bb.backend), pb) : null
    }

    function Ow(bb, wb, Mb, eb, Hb) {
      const pb = Iw(bb, wb, Mb, (bb => bb === eb || bb === Hb));
      return null === pb ? null : pb === eb
    }

    function Uw(bb) {
      return null !== bb && "missing" in bb
    }

    function tw(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Fw(),
        Mb = arguments.length > 2 ? arguments[2] : void 0;
      return wb ? function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vb.c,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const eb = "start_failed" === bb || "pipeline_failed" === bb,
            Hb = (0, cb.j)(bb, Mb),
            pb = wb.turnOffWebGpuAfterDeviceLoss(eb ? "visible" : (0, Fb.l)((0, Cb.k)()), eb, Hb);
          return ww && (0, lb.w)("webgpuLoss"), wb.isWebGpuOffAfterLoss() && "webgpu" === nb(Eb.i.getItem(Ib.e)) && Eb.i.removeItem(Ib.e), (0, gb.m)("webgpuloss") && (0, Lb.d)((wb => {
            var Mb;
            wb.noteWebGpuLoss("wasm", pb ? bb : `${bb}, which storage didn't keep`, null !== (Mb = Hb.message) && void 0 !== Mb ? Mb : null)
          })), pb
        } catch {
          return !1
        }
      }(bb, Vb.c, Mb) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const Cw = "framePacing";

    function Ew(bb, wb) {
      const Mb = Iw("webgpu" === (null === wb || void 0 === wb ? void 0 : wb.backend) ? wb : null, bb, Cw, (bb => /^\d{1,9}$/.test(bb)));
      return null === Mb ? void 0 : Number(Mb)
    }

    function Fw() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === nb(new URLSearchParams(bb).get(Ib.c))
      } catch {
        return !1
      }
    }

    function Bw(bb) {
      return !!sw(bb) || bb instanceof Error && !(bb instanceof WebAssembly.RuntimeError) && bb.message.startsWith(`${Xb.p.RenderSurfaceUnusable}:`)
    }

    function sw(bb) {
      const {
        name: wb,
        message: Mb
      } = null !== bb && void 0 !== bb ? bb : {};
      return "InvalidStateError" === wb && "string" === typeof Mb && Mb.startsWith("GPUDevice.")
    }

    function mw(bb) {
      const wb = bb;
      return "function" === typeof wb.kHb && "function" === typeof wb.bpb ? wb : null
    }

    function hw(bb) {
      return "function" === typeof bb.nF ? bb : null
    }
    const zw = "openRenderer";
    const Xw = 5e3,
      xw = 15e3;

    function jw(bb, wb, Mb, eb, Hb, pb) {
      return (0, jb.n)(function(bb, wb, Mb, eb, Hb, pb) {
        const Vb = (0, Kb.e)(bb, wb, (() => bb.nF(Mb, eb, Hb, pb.indirectHangs, pb.storagePullBreaks, pb.splitPassBreaks, pb.earlySky, pb.instancedTerrain, pb.cellLight, pb.framesAhead, pb.webGpuRestores, pb.bufferCopiesCrash))),
          {
            firstVertex: gb
          } = pb;
        return void 0 === gb ? Vb : Vb.then((bb => ((0, rb.e)(Mb, gb), bb)))
      }(bb, wb, Mb, eb, Hb, pb), xw, `${Xb.p.RenderSurfaceUnusable}: the renderer didn't open in ${xw/1e3} s`, rw)
    }
    async function Kw(bb, wb, Mb, eb, Hb, pb) {
      if ("function" !== typeof bb.uHb) throw new Error("this core has no set_renderer");
      const Vb = await jw(wb, zw, Mb, Hb, eb, pb);
      try {
        bb.uHb(Vb)
      } catch (gb) {
        throw rw(Vb), gb
      }
    }

    function rw(bb) {
      try {
        bb.free()
      } catch {}
    }
  },
  42519: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    const eb = {
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
  42437: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Cb,
      f: () => Eb,
      g: () => Ub,
      k: () => Ob
    });
    const eb = 2e3,
      Hb = "unavailable";
    let pb = () => Promise.resolve().then((() => Mb(1989))),
      Vb = null,
      gb = null,
      lb = Lb();

    function Lb() {
      let bb = () => {};
      return {
        promise: new Promise((wb => {
          bb = () => {
            wb(null)
          }
        })),
        resolve: bb
      }
    }

    function Ib() {
      if (null === Vb) {
        const bb = pb();
        Vb = bb, bb.then((wb => {
          Vb === bb && (gb = wb)
        }), (() => {
          Vb === bb && (Vb = null)
        }))
      }
      return Vb
    }

    function Ob() {
      Ib().catch((() => {}))
    }

    function Ub() {
      lb.resolve()
    }

    function tb(bb, wb, Mb, eb) {
      if (null === bb) return {
        errorKind: wb,
        fingerprint: Hb,
        dedupe: `${wb}|${eb}`
      };
      const {
        fingerprint: pb
      } = bb.clientErrorKey(wb, Mb, eb);
      return {
        errorKind: wb,
        fingerprint: pb,
        dedupe: pb
      }
    }

    function Cb(bb, wb, Mb, eb) {
      return null === gb ? eb ? (Ob(), tb(null, bb, wb, Mb)) : null : tb(gb, bb, wb, Mb)
    }
    async function Eb(bb, wb, Mb) {
      let Hb;
      const pb = new Promise((bb => {
        Hb = setTimeout((() => {
          bb(null)
        }), eb)
      }));
      try {
        return tb(await Promise.race([Ib(), pb, lb.promise]), bb, wb, Mb)
      } catch {
        return tb(null, bb, wb, Mb)
      } finally {
        clearTimeout(Hb)
      }
    }
  },
  42434: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      BUILT_IN_ANIMATIONS_SITE: () => bw,
      CAMERA_DIRECTOR_SITE: () => Vw,
      CORE_ERRORS_SITE: () => ab,
      EVENT_OVERFLOW_SITE: () => kb,
      FIRST_VIEW_SITE: () => ew,
      GraphicsLostError: () => HM,
      JOIN_SITE: () => ub,
      LEAVE_SITE: () => db,
      MAIN_THREAD_SITE: () => Hw,
      MODEL_FEED_SITE: () => Pb,
      MODEL_POOL_SITE: () => nb,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => Lw,
      NON_FATAL_REPORTS_PER_SESSION: () => Rw,
      PREVIEW_ANIMATIONS_SITE: () => Tb,
      RENDER_RELOAD_SITE: () => ob,
      REQUEST_DEVICE_SITE: () => pw,
      TEXTURE_NAMES_SITE: () => yb,
      TEXTURE_PACK_FEED_SITE: () => ww,
      TEXTURE_PACK_SWAP_SITE: () => Mw,
      TurnstilePageError: () => EM,
      WASM_LOAD_SITE: () => ib,
      countRenderLost: () => TM,
      crashError: () => Ww,
      crashReportsSettled: () => uw,
      deviceLossFields: () => ow,
      deviceLossWords: () => PM,
      flushCrashReports: () => aw,
      joinFailureCode: () => FM,
      loadRecoveryCode: () => LM,
      lokiTransport: () => Uw,
      modelFailureCode: () => xM,
      readTrap: () => bM,
      renderLoss: () => oM,
      renderReloadMessage: () => nM,
      reportCameraDirectorFault: () => aM,
      reportCoreErrors: () => nw,
      reportCrash: () => Jw,
      reportDataLoadFailure: () => He,
      reportDisconnect: () => zM,
      reportDroppedRequiredLimits: () => OM,
      reportEventOverflow: () => YM,
      reportFirstViewNoTerrain: () => NM,
      reportFirstViewUnshown: () => vM,
      reportLightFault: () => AM,
      reportLoadRecovery: () => IM,
      reportLoadReload: () => tM,
      reportMainStall: () => QM,
      reportMemoryShed: () => JM,
      reportModelFailure: () => jM,
      reportModelPoolFailure: () => KM,
      reportModelsModuleRetry: () => rM,
      reportNoBackendRetry: () => gM,
      reportPageJoinFailure: () => sM,
      reportReconnectGaveUp: () => XM,
      reportRenderRecovery: () => Qw,
      reportRenderReload: () => we,
      reportReplayFault: () => qM,
      reportStaleBuildReload: () => Ve,
      reportStoppedCore: () => MM,
      reportTerrainTextureFailure: () => Me,
      reportTexturePackFeedLoadFailure: () => DM,
      reportTexturePackKeptOut: () => cM,
      reportUnstreamedCoreLoad: () => CM,
      reportUnusedSeat: () => hM,
      reportWorkerLost: () => ZM,
      reportWorkerStartTimeout: () => GM,
      reportWorldgenGaveUp: () => WM,
      reportWorldgenLoadFailure: () => RM,
      reportWorldgenWorkerLost: () => fM,
      resetCrashReports: () => dw,
      setCrashAdPreload: () => zw,
      setCrashBackend: () => hw,
      setCrashScreen: () => Bw,
      setCrashTransport: () => Ew,
      showCrash: () => wM,
      showJoinFailure: () => BM,
      showUnsupported: () => pM,
      unknownSkyWords: () => Pw,
      unsupportedCrashScreen: () => VM,
      warmCrashCounts: () => Nw
    });
    var eb = Mb(1126),
      Hb = Mb(1455),
      pb = Mb(211),
      Vb = Mb(1447),
      gb = Mb(1400),
      lb = Mb(309),
      Lb = Mb(1992),
      Ib = Mb(5112),
      Ob = Mb(42437),
      Ub = Mb(5678),
      tb = Mb(42441),
      Cb = Mb(35179),
      Eb = Mb(2529),
      Fb = Mb(35175),
      Bb = Mb(5243),
      sb = Mb(160),
      mb = Mb(153),
      hb = Mb(2536),
      zb = Mb(37772),
      Xb = Mb(1848),
      xb = Mb(42454),
      jb = Mb(42465),
      Kb = Mb(42263),
      rb = Mb(42475),
      Rb = Mb(42481),
      Db = Mb(37764),
      cb = Mb(2463),
      Yb = Mb(2471),
      Zb = Mb(42493),
      fb = Mb(42472),
      Ab = Mb(42515),
      Wb = Mb(38062),
      Jb = Mb(698),
      Sb = Mb(4593),
      Nb = Mb(37398),
      vb = Mb(42387),
      Qb = Mb(37406),
      Gb = Mb(42525);
    const qb = "[bloxd-wasm-client]",
      ab = "coreErrors",
      ib = "wasmLoad",
      ub = "join",
      db = "leave",
      Pb = "modelFeed",
      nb = "modelWorkerPool",
      yb = "textureNames",
      ob = "renderReload",
      Tb = "previewAnimations",
      kb = "eventOverflow",
      bw = "builtInAnimations",
      ww = "texturePackFeed",
      Mw = "texturePackSwap",
      ew = "firstView",
      Hw = "mainThread",
      pw = "requestDevice",
      Vw = "cameraDirector",
      gw = 300,
      lw = 64,
      Lw = 8;
    let Iw = 0;
    const Ow = new Set,
      Uw = (bb, wb) => {
        const Mb = Xw[bb.kind],
          eb = {
            backend: sw,
            adPreload: mw
          };
        if (null === Mb) return void tw(bb, wb, eb, null);
        const Hb = (0, Ob.c)(Mb, bb.message, bb.code, bb.fatal);
        null === Hb ? qw("Loki", (async () => {
          tw(bb, wb, eb, await (0, Ob.f)(Mb, bb.message, bb.code))
        })) : tw(bb, wb, eb, Hb)
      };

    function tw(bb, wb, Mb, eb) {
      let {
        backend: Hb,
        adPreload: pb
      } = Mb;
      const {
        kind: Vb,
        code: lb,
        site: Ib,
        fatal: Ob,
        details: Ub
      } = bb;
      if (!Ob)
        if (null === eb || (0, Lb.d)(eb.errorKind) || Ow.has(eb.dedupe)) {
          if (Iw >= Lw) return;
          Iw++
        } else Ow.add(eb.dedupe);
      const tb = {
        ...Ub,
        kind: Vb,
        code: lb,
        site: Ib,
        fatal: String(Ob),
        backend: Hb
      };
      pb && (tb.adPreload = "true"), null !== eb && (tb.errorKind = eb.errorKind, tb.fingerprint = eb.fingerprint), wb instanceof Error && "string" === typeof wb.stack && (tb.causeStack = wb.stack.slice(0, 2e3)), (0, gb.mE)(Ww(bb, wb), tb)
    }
    let Cw = Uw;

    function Ew(bb) {
      const wb = Cw;
      return Cw = bb, wb
    }
    let Fw = () => {};

    function Bw(bb) {
      const wb = Fw;
      return Fw = bb, wb
    }
    let sw = "unpicked",
      mw = !1;

    function hw(bb) {
      sw = bb
    }

    function zw(bb) {
      mw = bb
    }
    const Xw = {
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
      xw = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        viewUnshown: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      jw = new Set(["unstreamedLoad"]),
      Kw = new Set(["linkCensus", "linksReadAfterView"]);
    let rw = !1;
    const Rw = 20,
      Dw = new Map;
    let Yw = 0,
      Zw = 0;
    const fw = new Set,
      Aw = new Set;

    function Ww(bb, wb) {
      const Mb = Object.assign(new Error(`${bb.code}: ${bb.message}`), {
        name: "WasmClientCrash",
        cause: null !== wb && void 0 !== wb ? wb : void 0
      });
      return wb instanceof Error && wb.stack && (Mb.stack = wb.stack), Mb
    }

    function Jw(bb) {
      var wb, eb;
      const {
        kind: Hb,
        code: pb,
        site: Vb,
        fatal: gb,
        message: lb,
        error: Lb
      } = bb, Ib = !1 !== bb.toTransport && !jw.has(Hb), Ob = !gb && Ib && !Kw.has(Hb), Ub = {
        kind: Hb,
        code: pb,
        site: Vb,
        fatal: gb,
        message: lb,
        details: null !== (wb = bb.details) && void 0 !== wb ? wb : {}
      }, tb = `${pb}@${Vb}${void 0===bb.instance?"":`#${bb.instance}`}${gb?"!":""}`, Cb = (null !== (eb = Dw.get(tb)) && void 0 !== eb ? eb : 0) + 1;
      if (Dw.set(tb, Cb), void 0 !== bb.countAs && 1 === Cb && vw(bb.countAs), Cb > 1 ? 0 === (Cb & Cb - 1) && Gw((() => {
          console.warn(`${qb} ${pb} at ${Vb} reported ${Cb} times`)
        })) : Ob && Yw >= Rw ? Gw((() => {
          console.warn(`${qb} ${Hb} ${pb} at ${Vb}: ${lb} (not sent: the session's ${Rw} went)`, Ub.details, null !== Lb && void 0 !== Lb ? Lb : "")
        })) : (Ob && Yw++, function(bb, wb, eb, Hb) {
          var pb, Vb;
          const {
            kind: gb,
            code: lb,
            site: Lb,
            fatal: Ib,
            message: Ob,
            details: Ub
          } = bb;
          Gw((() => {
            (Ib ? console.error : console.warn)(`${qb} ${gb} ${lb} at ${Lb}: ${Ob}`, Ub, null !== wb && void 0 !== wb ? wb : "")
          }));
          const tb = xw[gb],
            Cb = null !== (pb = null !== (Vb = Xw[gb]) && void 0 !== Vb ? Vb : tb) && void 0 !== pb ? pb : null;
          Hb || null === Cb || Sw((async () => {
            const {
              reportCappedWasmFailure: wb,
              reportUncappedWasmFailure: eb,
              reportWasmFailure: Hb
            } = await Mb.e(218).then((() => Mb(35167))), pb = Kw.has(gb) ? eb : void 0 === tb ? Hb : wb, Vb = function(bb) {
              let {
                kind: wb,
                site: Mb,
                fatal: eb,
                details: Hb
              } = bb;
              if ("crash" !== wb) return;
              return {
                ...Hb,
                site: Mb,
                fatal: String(eb)
              }
            }(bb);
            void 0 === Vb ? pb(Cb, Ob, lb) : pb(Cb, Ob, lb, Vb)
          }));
          eb && Gw((() => {
            Cw(bb, wb)
          }))
        }(Ub, Lb, Ib, void 0 !== bb.countAs)), gb) {
        var Eb;
        const wb = null !== (Eb = bb.screen) && void 0 !== Eb ? Eb : {
          text: (0, Wb.d)(Ub, !0),
          reload: !0,
          stillBlocked: null
        };
        Gw((() => {
          Fw(wb)
        }))
      }
      return Ub
    }

    function Sw(bb) {
      qw("counts", (async () => {
        const {
          peekVisitSessionId: wb
        } = await Promise.resolve().then((() => Mb(715)));
        null !== wb() && (await bb(), rw = !0)
      }))
    }

    function Nw() {
      Promise.all([Promise.resolve().then((() => Mb(715))), Mb.e(218).then((() => Mb(35167)))]).catch((bb => {
        console.warn(`${qb} the counts' modules didn't load ahead`, bb)
      }))
    }

    function vw(bb) {
      fw.has(bb.errorKind) || (fw.add(bb.errorKind), Sw((async () => {
        const {
          reportClientError: wb
        } = await Promise.resolve().then((() => Mb(1987)));
        wb(bb.errorKind, bb.error, bb.code, !0, void 0, bb.fields)
      })))
    }

    function Qw(bb, wb) {
      qw("render_lost", (async () => {
        const [{
          reportClientError: eb
        }, {
          CAPPED_COUNTS_VISIT_CAP: Hb
        }] = await Promise.all([Promise.resolve().then((() => Mb(1987))), Mb.e(218).then((() => Mb(35167)))]);
        eb("render_lost", wb, bb, !0, Hb)
      }))
    }

    function Gw(bb) {
      try {
        bb()
      } catch (wb) {
        try {
          console.warn(`${qb} could not send a report`, wb)
        } catch {}
      }
    }

    function qw(bb, wb) {
      try {
        const Mb = wb().catch((wb => {
          console.warn(`${qb} could not send the report to ${bb}`, wb)
        })).finally((() => {
          Aw.delete(Mb)
        }));
        Aw.add(Mb)
      } catch (Mb) {
        console.warn(`${qb} could not send the report to ${bb}`, Mb)
      }
    }
    async function aw(bb) {
      let wb;
      (0, Ob.g)();
      const Mb = new Promise((Mb => {
        wb = setTimeout(Mb, bb)
      }));
      await Promise.race([iw(), Mb]), clearTimeout(wb)
    }
    async function iw() {
      if (await Promise.allSettled([...Aw]), rw) try {
        const {
          flushClientAnalyticsEvents: bb
        } = await Promise.resolve().then((() => Mb(1672)));
        await bb()
      } catch (bb) {
        console.warn(`${qb} could not send the counts`, bb)
      }
    }
    async function uw() {
      for (; Aw.size > 0;) await Promise.allSettled([...Aw])
    }

    function dw() {
      Dw.clear(), Yw = 0, rw = !1, Iw = 0, Ow.clear(), Zw = 0, fw.clear(), (0, tb.t)()
    }

    function Pw(bb) {
      const wb = "object" === typeof bb && null !== bb ? bb.type : bb;
      return "string" !== typeof wb ? "sky not named" : `sky ${JSON.stringify(Array.from(wb).slice(0,lw).join(""))}`
    }

    function nw(bb, wb, Mb, eb) {
      Zw += wb;
      for (const {
          code: gb,
          detail: lb
        }
        of bb) {
        var Hb, pb, Vb;
        const bb = (0, Ub.ge)(gb),
          wb = (0, tb.j)(gb, lb),
          Lb = wb ? "CORE-RenderLinkPending" : `CORE-${bb}`,
          Ib = (0, tb.e)(gb, lb),
          Ob = null === eb || void 0 === eb ? void 0 : eb(gb, lb),
          Eb = void 0 !== (null === Ib || void 0 === Ib ? void 0 : Ib.gpuDetails),
          Fb = Eb ? null === (Hb = (0, mb.x)()) || void 0 === Hb ? void 0 : Hb.renderer : void 0,
          Bb = Eb ? ` ${(0,tb.o)()}` : "",
          sb = Array.from([Fb && `gpu ${(0,Cb.b)(Fb)}`, Ob].filter(Boolean).join("; ")).slice(0, gw).join(""),
          hb = `core error ${bb}${null!==(pb=null===Ib||void 0===Ib?void 0:Ib.words)&&void 0!==pb?pb:""}${Bb}${sb?`: ${sb}`:""}`,
          zb = {
            errorCode: String(gb),
            detail: String(lb),
            droppedBefore: String(Zw),
            wasmBuild: Mb.wasm,
            clientVersion: Mb.client,
            ...null === Ib || void 0 === Ib ? void 0 : Ib.gpuDetails,
            ...ow(gb, lb)
          };
        null !== Ib && (0, tb.r)(Ib) ? Gw((() => {
          console.warn(`${qb} coreError ${Lb}: ${hb} (not sent: the session's render warnings of its kind went)`, zb)
        })) : yw(gb) ? Gw((() => {
          console.warn(`${qb} coreError ${Lb}: ${hb} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, zb)
        })) : Jw({
          kind: wb ? "recovered" : kw(gb, lb),
          code: Lb,
          site: ab,
          fatal: !1,
          message: hb,
          details: zb,
          instance: null !== (Vb = null === Ib || void 0 === Ib ? void 0 : Ib.instance) && void 0 !== Vb ? Vb : Tw(gb, lb)
        })
      }
    }

    function yw(bb) {
      if (bb !== Ub.I.AudioUnknownSound && bb !== Ub.I.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: wb,
        lobbyName: Mb
      } = (0, Vb.e)();
      return null !== wb && (!!(0, eb.j)(wb) || bb === Ub.I.AudioUnknownSound && (0, Hb.e)(wb, Mb))
    }

    function ow(bb, wb) {
      if (bb !== Ub.I.RenderDeviceLost) return;
      const Mb = wb >>> Ub.Q.LINKS_IN_FLIGHT_SHIFT & Ub.Q.LINKS_IN_FLIGHT_MAX,
        eb = wb >>> Ub.Q.OLDEST_LINK_SHIFT & Ub.Q.OLDEST_LINK_MAX;
      return {
        linksInFlight: String(Mb),
        oldestLinkMs: String(eb * Ub.Q.OLDEST_LINK_UNIT_MS)
      }
    }

    function Tw(bb, wb) {
      return bb === Ub.I.RenderDeviceLost && 0 !== (wb & Ub.Q.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function kw(bb, wb) {
      return bb === Ub.I.JobsHeapGaveUp ? "meshHeap" : (0, tb.n)(bb, wb) ? "linksReadAfterView" : (0, tb.g)(bb, wb) ? "linkCensus" : "coreError"
    }

    function bM(bb) {
      return (0, Nb.k)(bb instanceof vb.d ? bb.trap : bb, cb.x, cb.Z)
    }

    function wM(bb, wb, Mb) {
      return eM(bb, wb, Mb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function MM(bb, wb, Mb) {
      return eM(bb, wb, Mb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function eM(bb, wb, Mb, eb, Hb) {
      let {
        memoryDetails: pb = {},
        memoryStep: Vb
      } = eb;
      const {
        code: gb,
        details: lb,
        message: Lb
      } = (0, xb.L)(bb, wb), Ib = [];
      Object.assign(lb, (0, Qb.g)(bb.error)), null !== Mb && (lb.trapKind = Mb.kind, null !== Mb.panic && (lb.panic = (0, Nb.h)(Mb.panic)), Mb.refusedBytes > 0 && (lb.refusedAllocation = String(Mb.refusedBytes)), Ib.push((0, Nb.o)(Mb.kind, Mb.refusedBytes))), void 0 !== Vb && Ib.push(`memory=${Vb}`);
      const Ob = bb.error instanceof HM;
      return Ob && (0, Jb.G)(), Jw({
        kind: "crash",
        code: gb,
        site: bb.site,
        fatal: Hb,
        message: [...Ib, Lb].join("; "),
        details: {
          ...lb,
          ...pb,
          ...void 0 === Vb ? {} : {
            memoryStep: Vb
          }
        },
        error: bb.error,
        screen: Ob ? VM("graphicsLost") : void 0
      })
    }
    class HM extends Error {}

    function pM(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return "download" !== bb && (0, Jb.G)(), Jw({
        kind: "unsupported",
        code: wb,
        site: ib,
        fatal: !0,
        message: Mb,
        details: {
          ...eb,
          cause: bb,
          status: wb
        },
        screen: VM(bb)
      })
    }

    function VM(bb) {
      const wb = (0, pb.x)(sb.siteUsed),
        Mb = (0, Wb.q)(bb, wb),
        eb = "noContext" === bb || "graphicsLost" === bb ? (0, Wb.l)(bb, wb) : null;
      return {
        text: Mb,
        reload: "general:tryAgain" === Mb.confirm,
        stillBlocked: eb
      }
    }

    function gM(bb, wb, Mb) {
      return Jw({
        kind: "recovered",
        code: "reprobed" === bb ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: ib,
        fatal: !1,
        message: Mb,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: wb,
          step: bb
        }
      })
    }
    const lM = 9;

    function LM(bb) {
      const wb = "recovered" === bb.outcome ? "recovered" : "gave_up",
        Mb = "load" === bb.step ? `wasm_load_${wb}${bb.oom?"_oom":""}` : `no_context_${wb}`;
      return "recovered" === bb.outcome ? `${Mb}_t${Math.min(bb.tries,lM)}` : "load" === bb.step ? `${Mb}_${bb.stage}` : Mb
    }

    function IM(bb) {
      const {
        step: wb,
        outcome: Mb,
        tries: eb,
        detail: Hb,
        details: pb = {}
      } = bb, Vb = "load" === bb.step ? {
        stage: bb.stage,
        ...bb.oom ? {
          oom: "true"
        } : {}
      } : {};
      return Jw({
        kind: "recovered",
        code: LM(bb),
        site: ib,
        fatal: !1,
        message: Hb,
        details: {
          ...pb,
          step: wb,
          outcome: Mb,
          tries: String(eb),
          ...Vb
        }
      })
    }

    function OM(bb) {
      return Jw({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: pw,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: bb.join(",")
        }
      })
    }
    const UM = "reload=wasm";

    function tM(bb, wb, Mb) {
      return Jw({
        kind: "unsupported",
        code: wb,
        site: ib,
        fatal: !1,
        message: [UM, Mb].join("; "),
        details: {
          cause: bb,
          status: wb,
          fallback: "wasmReload"
        }
      })
    }

    function CM() {
      const {
        code: bb,
        message: wb
      } = Sb.c;
      return Jw({
        kind: "unstreamedLoad",
        code: bb,
        site: ib,
        fatal: !1,
        message: wb
      })
    }
    class EM extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function FM(bb) {
      return bb instanceof rb.k ? 0 === bb.code ? "JOIN-matchmake" : `JOIN-${bb.code}` : bb instanceof rb.b ? 0 === bb.code ? `JOIN-${bb.stage}` : `JOIN-${bb.stage}-${bb.code}` : bb instanceof Kb.e ? "JOIN-gameCode" : bb instanceof EM ? "JOIN-turnstilePage" : bb instanceof rb.w ? "JOIN-trafficCheck" : bb instanceof zb.e ? "JOIN-timeout" : "JOIN-network"
    }

    function BM(bb, wb) {
      const Mb = (0, Qb.j)(bb),
        eb = {
          wasmBuild: wb.wasm,
          clientVersion: wb.client
        },
        Hb = bb instanceof EM ? {
          text: (0, Wb.m)(),
          reload: !1,
          stillBlocked: null
        } : void 0,
        pb = (0, Rb.d)(bb),
        Vb = "expected" !== pb;
      return Jw({
        kind: "join",
        code: FM(bb),
        site: ub,
        fatal: !0,
        message: Mb,
        details: eb,
        error: bb,
        screen: Hb,
        toTransport: Vb,
        instance: pb
      })
    }

    function sM(bb, wb, Mb) {
      var eb;
      const Hb = (0, Rb.d)(bb),
        pb = {
          cause: (bb instanceof rb.b || bb instanceof rb.k) && null !== (eb = bb.serverText) && void 0 !== eb ? eb : "",
          sinceJoinStart: (0, hb.e)(Mb.sinceJoinStartMs),
          game: Mb.game,
          ...(0, hb.l)(),
          wasmBuild: wb.wasm,
          clientVersion: wb.client
        };
      return Jw({
        kind: "pageJoin",
        code: FM(bb),
        site: ub,
        fatal: !1,
        message: (0, Qb.j)(bb),
        details: pb,
        error: bb,
        toTransport: "unrecognised" === Hb,
        instance: Hb
      })
    }
    const mM = {
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

    function hM(bb, wb) {
      let {
        unused: Mb,
        answered: eb,
        fW: Hb
      } = bb;
      const {
        code: pb,
        message: Vb
      } = mM[Mb], gb = {
        unused: Mb,
        answered: String(eb),
        fW: String(Hb),
        wasmBuild: wb.wasm,
        clientVersion: wb.client
      };
      return Jw({
        kind: "seat",
        code: pb,
        site: ub,
        fatal: !1,
        message: Vb,
        details: gb
      })
    }

    function zM(bb, wb, Mb) {
      var eb;
      let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (eb = bb.name) && void 0 !== eb ? eb : String(bb.code);
      const pb = {
          closeCode: String(bb.code),
          recognised: String(null !== bb.name),
          closeReason: Mb.closeReason,
          sinceJoined: (0, hb.e)(Mb.sinceJoinedMs),
          game: Mb.game,
          ...(0, hb.l)(),
          wasmBuild: wb.wasm,
          clientVersion: wb.client
        },
        Vb = null === bb.name && !(0, hb.g)(bb.code);
      return Jw({
        kind: "disconnect",
        code: Hb,
        site: db,
        fatal: !1,
        message: "Left room",
        details: pb,
        toTransport: Vb
      })
    }

    function XM(bb, wb) {
      const Mb = {
        ...(0, Eb.o)(bb),
        wasmBuild: wb.wasm,
        clientVersion: wb.client
      };
      return Jw({
        kind: "disconnect",
        code: `reconnect-${bb.reason}`,
        site: ub,
        fatal: !1,
        message: "Reconnect failed",
        details: Mb
      })
    }

    function xM(bb) {
      return bb.error instanceof Yb.g ? `MODEL-${bb.error.status}` : bb.error instanceof Zb.l ? "MODEL-ring" : "MODEL-network"
    }

    function jM(bb, wb) {
      const Mb = xM(bb),
        eb = `model file ${bb.file} ${bb.startup?"(startup) ":""}could not load`,
        Hb = {
          file: String(bb.file),
          url: bb.url,
          wasmBuild: wb.wasm,
          clientVersion: wb.client
        };
      return Jw({
        kind: bb.startup ? "model" : "modelLate",
        code: Mb,
        site: Pb,
        fatal: bb.startup,
        message: eb,
        details: Hb,
        error: bb.error
      })
    }

    function KM(bb, wb) {
      const Mb = {
        wasmBuild: wb.wasm,
        clientVersion: wb.client
      };
      return Jw({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: nb,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: Mb,
        error: bb
      })
    }

    function rM(bb, wb, Mb) {
      const eb = {
        delayMs: String(wb),
        wasmBuild: Mb.wasm,
        clientVersion: Mb.client
      };
      bb instanceof Yb.g && (eb.status = String(bb.status));
      return Jw({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: nb,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: eb,
        error: bb
      })
    }

    function RM(bb, wb) {
      const Mb = {
        wasmBuild: wb.wasm,
        clientVersion: wb.client
      };
      return Jw({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: xb.I,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: Mb,
        error: bb
      })
    }

    function DM(bb, wb) {
      const Mb = {
        wasmBuild: wb.wasm,
        clientVersion: wb.client
      };
      return Jw({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: ww,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: Mb,
        error: bb
      })
    }

    function cM(bb, wb, Mb, eb) {
      const Hb = {
        wasmBuild: eb.wasm,
        clientVersion: eb.client
      };
      return Jw({
        kind: "texturePackKeptOut",
        code: (0, Ib.e)("wasm", bb, wb),
        site: Mw,
        fatal: !1,
        message: wb.detail,
        details: Hb,
        error: Mb
      })
    }

    function YM(bb, wb) {
      const {
        frames: Mb,
        acks: eb,
        mask: Hb,
        outcome: pb
      } = bb, Vb = {
        frames: String(Mb),
        acks: String(eb),
        mask: String(Hb),
        outcome: null !== pb && void 0 !== pb ? pb : "resynced",
        wasmBuild: wb.wasm,
        clientVersion: wb.client
      };
      return Jw({
        kind: "recovered",
        code: "rejoined" === pb ? "CORE-eventOverflowRejoin" : "failed" === pb ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: kb,
        fatal: !1,
        message: `the event buffer refused records in ${Mb} frames`,
        details: Vb
      })
    }

    function ZM(bb, wb, Mb) {
      return Jw({
        kind: "recovered",
        code: "CORE-workerLost",
        site: bb,
        fatal: !1,
        message: `a ${bb} worker was lost`,
        details: {
          reason: wb,
          wasmBuild: Mb.wasm,
          clientVersion: Mb.client
        }
      })
    }

    function fM(bb, wb, Mb, eb) {
      const Hb = {
          reason: bb,
          pageBuild: eb.build,
          pageAgeMin: String(Math.floor(eb.ageMs / 6e4)),
          wasmBuild: Mb.wasm,
          clientVersion: Mb.client
        },
        pb = wb ? "a world-gen worker's code did not load" : "a world-gen worker was lost";
      return Jw({
        kind: "recovered",
        code: "CORE-worldgenWorkerLost",
        site: xb.I,
        fatal: !1,
        message: pb,
        details: Hb
      })
    }

    function AM(bb, wb, Mb) {
      const eb = {
        wasmBuild: Mb.wasm,
        clientVersion: Mb.client
      };
      return Jw({
        kind: "recovered",
        code: bb,
        site: xb.u,
        fatal: !1,
        message: wb,
        details: eb
      })
    }

    function WM(bb, wb) {
      const Mb = {
        lastReason: bb,
        wasmBuild: wb.wasm,
        clientVersion: wb.client
      };
      return Jw({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: xb.I,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: Mb
      })
    }

    function JM(bb, wb, Mb) {
      return Jw({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: xb.t,
        fatal: !1,
        message: `${(0,Db.B)(bb)}: the session shed load`,
        details: {
          cause: bb,
          ...wb,
          wasmBuild: Mb.wasm,
          clientVersion: Mb.client
        }
      })
    }

    function SM(bb, wb, Mb, eb) {
      var Hb, pb;
      return {
        game: bb,
        cause: wb,
        census: null === Mb ? "none" : JSON.stringify(Mb),
        gpu: null !== (Hb = null === (pb = (0, mb.x)()) || void 0 === pb ? void 0 : pb.renderer) && void 0 !== Hb ? Hb : "",
        browser: (0, tb.o)(),
        wasmBuild: eb.wasm,
        clientVersion: eb.client
      }
    }

    function NM(bb, wb, Mb, eb) {
      const Hb = (0, tb.p)(),
        pb = {
          ...SM(bb, wb, Mb, eb),
          renderWarned: String(Hb)
        },
        Vb = `first view drew no whole terrain in ${fb.d/1e3} s, ${wb}${Hb?", render warned":""}`;
      return Jw({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: ew,
        fatal: !1,
        message: Vb,
        details: pb
      })
    }

    function vM(bb, wb, Mb, eb, Hb) {
      const pb = {
          ...SM(bb, Mb.cause, eb, Hb),
          waitedMs: String(Math.round(wb.waitedMs)),
          visibleMs: String(Math.round(wb.visibleMs)),
          drawnMs: String(Math.round(wb.drawnMs)),
          frames: String(wb.frames),
          renderPending: String(Mb.renderPending),
          viewWait: null === Mb.wait ? "none" : Mb.wait.slice(0, 6).join(",")
        },
        Vb = (0, jb.f)(wb, Mb);
      return Jw({
        kind: "viewUnshown",
        code: "CORE-firstViewUnshown",
        site: ew,
        fatal: !1,
        message: Vb,
        details: pb
      })
    }

    function QM(bb, wb, Mb, eb, Hb) {
      const pb = (0, Fb.g)(),
        Vb = (0, Fb.d)(bb, wb, Mb, eb, pb),
        gb = {
          gpuModel: pb,
          wasmBuild: Hb.wasm,
          clientVersion: Hb.client
        };
      return Jw({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: Hw,
        fatal: !1,
        message: Vb,
        details: gb
      })
    }

    function GM(bb, wb, Mb) {
      return Jw({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: bb,
        fatal: !1,
        message: `a ${bb} worker did not start`,
        details: {
          waitedMs: String(Math.round(wb)),
          wasmBuild: Mb.wasm,
          clientVersion: Mb.client
        }
      })
    }

    function qM(bb, wb, Mb) {
      return Jw({
        kind: "recovered",
        code: "CORE-replayFault",
        site: bb,
        fatal: !1,
        message: `the replay's ${bb} failed`,
        details: {
          wasmBuild: Mb.wasm,
          clientVersion: Mb.client
        },
        error: wb
      })
    }

    function aM(bb, wb) {
      const Mb = {
          wasmBuild: wb.wasm,
          clientVersion: wb.client
        },
        eb = bb instanceof Error ? bb.message : String(bb);
      return Jw({
        kind: "recovered",
        code: "CORE-cameraDirector",
        site: Vw,
        fatal: !1,
        message: "the scripted camera's director threw",
        details: Mb,
        instance: eb,
        error: bb
      })
    }
    const iM = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function uM(bb) {
      if (0 === bb) return "none";
      const wb = [60, 600, 3600].find((wb => bb < wb));
      return void 0 === wb ? "ge3600" : `lt${wb}`
    }

    function dM(bb, wb) {
      return null === bb ? "unbound" : (0, Bb.i)(wb - bb)
    }

    function PM(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (bb & Ub.Q.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (bb & Ub.Q.LINKS_RUNNING) ? "links running" : "", `frames ${(0,Cb.b)(uM(bb&Ub.Q.FRAMES))}`, `up ${(0,Cb.b)(dM(wb,Mb))}`].filter(Boolean).join(", ")
    }

    function nM(bb, wb, Mb) {
      const eb = "lost" === wb && void 0 !== Mb ? ` (${Mb})` : "";
      return `the ${bb} ${iM[wb]}${eb}`
    }
    const yM = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function oM(bb, wb, Mb, eb) {
      var Hb;
      let {
        restoreLost: pb = !1,
        adapterRemembered: Vb = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const lb = null === Mb || void 0 === Mb ? void 0 : Mb.message,
        Lb = "pipeline_failed" === wb ? wb : Mb instanceof Xb.h ? "timeout" : (0, Bb.t)("frames_refused" === wb, "string" === typeof lb ? lb : ""),
        Ib = null === eb.boundAtMs ? "unbound" : `up${(0,Bb.g)(gb-eb.boundAtMs)}`,
        Ob = null === eb.adapter ? "no adapter" : (0, Bb.p)(eb.adapter),
        Ub = `${!0===eb.indirectHangs?" ih":""}${!0===eb.restoresSkipped?" nr":""}${pb?" rl":""}${Vb?" ar":""}`,
        tb = `${Lb} ${(0,Xb.k)()?"hidden":"visible"} ${Ib}${Ub} ${Ob}`;
      if ("webgpu" !== bb || "lost" !== wb && "frames_refused" !== wb) return {
        detail: tb,
        count: void 0
      };
      return {
        detail: tb,
        count: {
          errorKind: "render_lost",
          error: new Error(tb),
          code: (0, Bb.D)(Lb, null !== (Hb = eb.boundAtMs) && void 0 !== Hb ? Hb : gb, gb).code,
          fields: {
            renderBackend: Gb.b.webgpu
          }
        }
      }
    }

    function TM(bb, wb, Mb) {
      const {
        count: eb
      } = oM("webgpu", bb, wb, Mb);
      void 0 !== eb && vw(eb)
    }
    const kM = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function be(bb) {
      var wb;
      return null !== (wb = bb instanceof Error ? bb.reason : void 0) && void 0 !== wb ? wb : ""
    }

    function we(bb, wb, eb) {
      var Hb, pb, Vb, gb, Lb;
      let {
        from: Ib,
        cause: Ob = "lost",
        restoreLost: Ub = !1,
        adapterRemembered: Eb = !1,
        error: Fb,
        context: mb = yM,
        session: hb = kM
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, zb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: Xb,
        count: xb
      } = oM(bb, Ob, Fb, mb, {
        restoreLost: Ub,
        adapterRemembered: Eb
      }, zb), jb = {
        reloadFrom: null !== Ib && void 0 !== Ib ? Ib : "",
        losses: String(wb),
        cause: Ob,
        detail: Xb,
        vendor: null !== (Hb = null === (pb = mb.adapter) || void 0 === pb ? void 0 : pb.vendor) && void 0 !== Hb ? Hb : "",
        architecture: null !== (Vb = null === (gb = mb.adapter) || void 0 === gb ? void 0 : gb.architecture) && void 0 !== Vb ? Vb : "",
        indirectHangs: String(mb.indirectHangs),
        restoresSkipped: String(mb.restoresSkipped),
        restoreLost: String(Ub),
        adapterRemembered: String(Eb),
        lossReason: be(Fb),
        samples: String(hb.samples),
        sunShadows: String(hb.sunShadows),
        renderDistance: String(hb.renderDistance),
        gpuFamily: null !== (Lb = (0, lb.e)()) && void 0 !== Lb ? Lb : "",
        browser: (0, tb.o)(),
        siteUsed: sb.siteUsed,
        wasmBuild: eb.wasm,
        clientVersion: eb.client
      }, Kb = "webgpu" !== bb && void 0 !== Ib ? function(bb, wb, Mb, eb) {
        return `: ${bb}, ${wb?"restore lost":"not restored"}, up ${(0,Cb.b)(dM(Mb,eb))}`
      }(Ib, Ub, mb.boundAtMs, zb) : "", rb = `${nM(bb,Ob)}${Kb}`, Rb = Jw({
        kind: "recovered",
        code: "CORE-renderLost",
        site: ob,
        fatal: !1,
        message: rb,
        details: jb,
        error: Fb,
        countAs: xb
      });
      return qw("ga", (async () => {
        const {
          logError: wb
        } = await Promise.resolve().then((() => Mb(4155))), eb = `${Bb.d["webgpu"===bb?"WebGPU":"WebGL2"]}\n Error: ${Xb}`;
        wb("warning", eb), wb("error", eb)
      })), Rb
    }

    function Me(bb, wb) {
      var Mb, eb;
      const Hb = null === bb.name ? "TEXTURE-sources" : null === bb.url ? "TEXTURE-nourl" : bb.error instanceof Ab.c ? `TEXTURE-${bb.error.status}` : "TEXTURE-network",
        pb = null === bb.name ? "terrain textures could not load" : `terrain texture ${bb.name} could not load`,
        Vb = {
          texture: null !== (Mb = bb.name) && void 0 !== Mb ? Mb : "",
          url: null !== (eb = bb.url) && void 0 !== eb ? eb : "",
          wasmBuild: wb.wasm,
          clientVersion: wb.client
        };
      return Jw({
        kind: "terrainTexture",
        code: Hb,
        site: xb.H,
        fatal: !1,
        message: pb,
        details: Vb,
        error: bb.error
      })
    }
    const ee = {
      previewAnimations: {
        site: Tb,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: bw,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function He(bb, wb, Mb, eb) {
      const {
        site: Hb,
        prefix: pb,
        name: Vb
      } = ee[bb], {
        stage: gb,
        error: lb
      } = Mb;
      return Jw({
        kind: bb,
        code: "decode" === gb ? null === lb ? `${pb}-decode` : `${pb}-trap` : lb instanceof Yb.g ? `${pb}-${lb.status}` : `${pb}-network`,
        site: Hb,
        fatal: !1,
        message: "decode" === gb ? `${Vb} did not decode` : `${Vb} could not load`,
        details: {
          url: wb,
          wasmBuild: eb.wasm,
          clientVersion: eb.client
        },
        error: lb
      })
    }
    const pe = "staleBuild";

    function Ve(bb, wb, Mb) {
      const eb = {
          failedSite: bb.site,
          url: bb.url,
          from: bb.from,
          sameBuild: String(bb.from === wb),
          reloadMs: String(Math.max(0, Date.now() - bb.at)),
          wasmBuild: Mb.wasm,
          clientVersion: Mb.client
        },
        Hb = `reloaded into a newer build after ${bb.site} failed to load: ${bb.error}`;
      return Jw({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: pe,
        fatal: !1,
        message: Hb,
        details: eb
      })
    }
  },
  42472: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      d: () => Hb,
      g: () => Vb,
      h: () => lb
    });
    var eb = Mb(5685);
    const Hb = 3e4,
      pb = 900;

    function Vb(bb, wb) {
      const Mb = null === bb ? 0 : wb - bb;
      return Mb <= pb ? Mb : 0
    }
    class gb {
      constructor(bb) {
        this.bO = bb, this.waitedMs = 0, this.lastMs = null
      }
      frame(bb, wb) {
        return !!wb || (this.waitedMs += Vb(this.lastMs, bb), this.lastMs = bb, !(this.waitedMs < Hb) && (this.bO(), !0))
      }
    }

    function lb(bb, wb) {
      return 0 === (bb & eb.$.ChunkRequested) ? "no_chunk_request" : 0 === (bb & eb.$.ChunkStored) ? "chunk_not_stored" : 0 === (bb & eb.$.MeshLanded) ? "not_meshed" : null === wb ? "no_frame_drawn" : 0 === wb.terrainParts ? "no_terrain_parts" : wb.terrainCompiling > 0 ? "terrain_compiling" : wb.terrainOpaque + wb.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  42465: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => lb,
      e: () => Vb,
      f: () => Ib
    });
    var eb = Mb(214),
      Hb = Mb(42472);
    const pb = ["view", "startup", "skipped"];

    function Vb(bb) {
      return 0 === bb.clientWidth || 0 === bb.clientHeight || 0 === bb.width || 0 === bb.height
    }

    function gb(bb) {
      if (null === bb) return "none";
      const [wb, Mb, eb, Hb] = bb, pb = [
        ["link", wb],
        ["terrain", Mb],
        ["dg", eb],
        ["other", Hb]
      ];
      let Vb = "none",
        gb = 0;
      for (const [lb, Lb] of pb) Lb > gb && (Vb = lb, gb = Lb);
      return Vb
    }
    class lb {
      constructor(bb) {
        this.gap = bb, this.chunkAtMs = null, this.lastFrameMs = null, this.drawnMs = 0, this.frames = 0, this.visibleFromMs = null, this.undrawn = {
          view: 0,
          startup: 0,
          skipped: 0
        }, this.over = !1
      }
      get open() {
        return null !== this.chunkAtMs && !this.over
      }
      playerChunk(bb, wb) {
        null !== this.chunkAtMs || this.over || (this.chunkAtMs = bb, wb || this.pageShown(bb))
      }
      pageShown(bb) {
        this.open && null === this.visibleFromMs && (this.visibleFromMs = bb, this.gap.restart(bb))
      }
      animationFrame(bb, wb, Mb) {
        !this.open || null === this.visibleFromMs || bb <= this.visibleFromMs || (this.gap.animationFrame(), "paced" === wb ? this.gap.paced() : "skipped" === wb ? this.undrawn.skipped++ : "none" === wb && this.undrawn[Mb ? "startup" : "view"]++)
      }
      frame(bb) {
        this.open && (this.drawnMs += (0, Hb.g)(this.lastFrameMs, bb), this.lastFrameMs = bb, this.frames++)
      }
      shown() {
        this.over = !0, this.gap.stop()
      }
      end(bb, wb) {
        if (null === this.chunkAtMs || this.over) return null;
        this.over = !0;
        const Mb = null === this.visibleFromMs ? null : this.gap.words(!1, wb);
        return this.gap.stop(), {
          end: bb,
          waitedMs: Math.max(wb - this.chunkAtMs, 0),
          visibleMs: null === this.visibleFromMs ? 0 : Math.max(wb - this.visibleFromMs, 0),
          drawnMs: this.drawnMs,
          frames: this.frames,
          undrawn: {
            ...this.undrawn
          },
          page: Mb
        }
      }
    }

    function Lb(bb) {
      return bb < 5e3 ? "brief" : bb < 15e3 ? "short" : bb < 6e4 ? "long" : "very_long"
    }

    function Ib(bb, wb) {
      var Mb, Hb;
      const Vb = [...null === bb.page ? [] : bb.page.split(" "), ...pb.filter((wb => bb.undrawn[wb] > 0)).map((bb => `undrawn:${bb}`)), ...wb.canvasEmpty ? ["canvas:empty"] : []],
        lb = [
          ["", `first view unshown, ${wb.cause}, ended ${bb.end}`],
          [", ", 0 === bb.visibleMs ? "visible none" : `visible ${Lb(bb.visibleMs)}`],
          [", ", 0 === bb.frames ? "no frames" : `drew ${Lb(bb.drawnMs)}`], ...Vb.map(((bb, wb) => [0 === wb ? ", " : " ", bb])), [", ", `waited ${Lb(bb.waitedMs)}`],
          [", ", wb.bound ? "bound" : "unbound"], ...wb.preload ? [
            [", ", "preload"]
          ] : [],
          [", ", wb.startupLoaded ? "startup in" : "startup out"],
          [", ", wb.renderPending > 0 ? "render pending" : "render resolved"],
          [", ", `lacked ${gb(wb.wait)}${(null!==(Mb=null===(Hb=wb.wait)||void 0===Hb?void 0:Hb[4])&&void 0!==Mb?Mb:0)>0?" gapped":""}`]
        ];
      let Ib = "";
      for (const [pb, gb] of lb) {
        const bb = Ib + pb + gb;
        if (bb.length > eb.eb) break;
        Ib = bb
      }
      return Ib
    }
  },
  42263: (bb, wb, Mb) => {
    Mb.d(wb, {
      D: () => Ob,
      F: () => Cb,
      e: () => eb,
      i: () => Bb,
      m: () => Eb,
      p: () => Fb,
      s: () => Ub,
      w: () => tb,
      z: () => Ib
    });
    class eb extends Error {
      constructor(bb) {
        super(`the join's code did not load: ${bb instanceof Error?bb.message:String(bb)}`, {
          cause: bb
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === bb || void 0 === bb ? void 0 : bb.request
      }
    }
    let Hb = null,
      pb = null,
      Vb = null;
    const gb = [];
    let lb = null;

    function Lb(bb, wb) {
      try {
        bb(wb)
      } catch (Mb) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", Mb)
      }
    }

    function Ib() {
      return lb
    }

    function Ob(bb) {
      gb.push(bb), null !== lb && Lb(bb, lb)
    }

    function Ub(bb) {
      return Hb ??= Promise.all([Mb.e(85), Mb.e(113), Mb.e(88), Mb.e(177), Mb.e(91), Mb.e(225), Mb.e(253), Mb.e(112), Mb.e(142), Mb.e(246), Mb.e(245), Mb.e(307), Mb.e(244), Mb.e(223), Mb.e(50), Mb.e(224), Mb.e(127), Mb.e(214), Mb.e(281), Mb.e(143), Mb.e(103), Mb.e(69)]).then((() => Mb(54811))).then((wb => {
        wb.loadAudio(bb), lb = wb;
        for (const bb of gb) Lb(bb, wb);
        return wb
      })).catch((bb => {
        throw Hb = null, bb
      })), Hb
    }
    async function tb(bb, wb) {
      try {
        const Mb = await Ub(bb);
        await Mb.loadClientGame(wb)
      } catch (Mb) {
        throw new eb(Mb)
      }
    }

    function Cb(bb, wb) {
      pb = {
        running: bb,
        shell: wb
      }
    }

    function Eb() {
      return Vb
    }
    async function Fb(bb) {
      const wb = pb;
      if ((null === wb || void 0 === wb ? void 0 : wb.running) !== bb) throw new Error("the core's session has ended");
      const Mb = await Ub(wb.shell.audio).catch((bb => {
        throw new eb(bb)
      }));
      if (null !== Vb) return Vb;
      if (pb !== wb || bb.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Vb = Mb.startGameHost(bb, wb.shell), null === Vb) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Vb
    }

    function Bb() {
      null !== Vb && (null !== lb ? lb.endGameHost(Vb) : Vb.closeGame()), Vb = null, pb = null
    }
  },
  42379: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    const eb = {
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
  42475: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Lb,
      d: () => pb,
      f: () => Vb,
      g: () => Hb,
      k: () => tb,
      n: () => Ib,
      q: () => lb,
      s: () => Ub,
      w: () => Ob,
      z: () => gb
    });
    var eb = Mb(2014);
    const Hb = new Uint8Array([12]),
      pb = 2e3,
      Vb = 257;

    function gb(bb) {
      const wb = new Uint8Array(4);
      return new DataView(wb.buffer).setUint32(0, bb, !0), wb
    }
    class lb extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class Lb extends Error {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(bb), this.stage = wb, this.code = Mb, this.serverText = eb, this.socketOpened = Hb, this.name = "JoinError"
      }
    }
    class Ib extends Error {
      constructor(bb) {
        super(bb), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class Ob extends Error {
      constructor(bb) {
        super((0, eb.e)(bb), {
          cause: bb
        }), this.name = "TrafficCheckError"
      }
    }
    class Ub extends Error {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(bb, {
          cause: Mb
        }), this.networkLost = wb, this.httpStatus = eb, this.name = "SeatRequestError"
      }
    }
    class tb extends Error {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(bb), this.code = wb, this.serverText = Mb, this.name = "MatchmakeError"
      }
    }
  },
  42481: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => tb,
      d: () => Ub,
      h: () => Cb
    });
    var eb = Mb(3822),
      Hb = Mb(2536),
      pb = Mb(40381),
      Vb = Mb(37772),
      gb = Mb(40386),
      lb = Mb(42475),
      Lb = Mb(42486);
    const Ib = "seat reservation expired.",
      Ob = "early_leave";

    function Ub(bb) {
      if (bb instanceof Vb.e) return "expected";
      if (bb instanceof lb.s) return bb.networkLost ? "expected" : "unrecognised";
      if (bb instanceof lb.b) {
        if ("closed" === bb.stage && (0 === bb.code || (0, Hb.g)(bb.code))) return "expected";
        if ("roomError" === bb.stage && (bb.serverText === Ib || bb.serverText === Ob)) return "expected"
      }
      return bb instanceof lb.b || bb instanceof lb.k ? null === (0, gb.g)(bb.code).name ? "unrecognised" : "known" : (0, eb.e)(bb) ? "expected" : bb instanceof lb.w || bb instanceof Lb.b ? "known" : "unrecognised"
    }

    function tb(bb) {
      return bb instanceof Vb.e ? "timedOut" : "expected" !== Ub(bb) || (0, eb.e)(bb) || bb instanceof lb.b && 1001 === bb.code ? void 0 : "failed"
    }

    function Cb(bb) {
      return bb instanceof lb.b && "attach" !== bb.stage ? (0, pb.d)(bb, "closed" !== bb.stage || bb.socketOpened ? "socket" : "socket_unopened") : bb instanceof lb.s ? {
        at: "seat_lost",
        code: bb.httpStatus
      } : bb instanceof lb.k || bb instanceof Vb.e ? (0, pb.d)(bb, bb instanceof Vb.e ? bb.leg : "seat") : void 0
    }
  },
  42493: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => lb,
      f: () => Lb,
      i: () => tb,
      l: () => Ob
    });
    var eb = Mb(2471),
      Hb = Mb(5678),
      pb = Mb(42502),
      Vb = Mb(42509),
      gb = Mb(37406);
    const lb = 395,
      Lb = 2147483648,
      Ib = new Uint8Array(0);
    class Ob extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class Ub extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class tb {
      constructor(bb, wb, Mb) {
        var eb, Hb, Vb, gb;
        let lb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = bb, this.build = wb, this.onFailure = Mb, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.nI = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (eb = lb.fetchFile) && void 0 !== eb ? eb : bb => (0, pb.g)(bb), this.onWritten = null !== (Hb = lb.onWritten) && void 0 !== Hb ? Hb : null, this.onTaken = null !== (Vb = lb.onTaken) && void 0 !== Vb ? Vb : null, this.onPackFileFailed = null !== (gb = lb.onPackFileFailed) && void 0 !== gb ? gb : null, this.startupLeft = new Set(bb.startup);
        for (const pb of bb.startup) this.request(pb)
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
      drawnUrl(bb) {
        return this.drawn.get(bb)
      }
      request(bb) {
        const wb = this.pending.get(bb);
        if (!0 === (null === wb || void 0 === wb ? void 0 : wb.ask)) return;
        const Mb = this.LO(bb, !0);
        Mb.recheck = void 0 !== wb;
        const eb = this.drawn.get(bb);
        if (void 0 !== eb) return Mb.dg = !0, Mb.recheck = !0, void this.fetch(bb, Mb, eb);
        this.fetchWanted(bb, Mb)
      }
      async refresh() {
        const bb = ++this.refreshes,
          wb = new Set;
        for (const Vb of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const bb of Vb) 0 === (bb & pb.f) && wb.add(bb);
        const Mb = [...wb];
        let eb;
        try {
          eb = await Promise.all(Mb.map((bb => this.wanted(bb))))
        } catch {
          return null
        }
        if (bb !== this.refreshes) return null;
        const Hb = {
          resent: 0,
          refetched: 0,
          delivered: Mb.filter((bb => this.drawn.has(bb))).length
        };
        return Mb.forEach(((bb, wb) => {
          const {
            url: Mb,
            inPlaceOf: pb
          } = eb[wb], Vb = this.pending.get(bb);
          if (void 0 !== Vb) {
            if (Vb.dg || void 0 === Vb.url) return void(Vb.recheck = !0);
            if (Vb.url === Mb) return;
            Hb.refetched++;
            const wb = this.LO(bb, Vb.ask);
            return wb.recheck = Vb.recheck, void this.fetch(bb, wb, Mb, pb)
          }
          const gb = this.written.get(bb);
          void 0 === gb ? this.drawn.get(bb) !== (null !== Mb && void 0 !== Mb ? Mb : void 0) && (Hb.resent++, this.fetch(bb, this.LO(bb, !1), Mb, pb)) : gb.url !== (null !== Mb && void 0 !== Mb ? Mb : "") && (gb.attempt.recheck = !0)
        })), Hb
      }
      taken(bb, wb) {
        const Mb = new Set,
          eb = new Set;
        for (const Hb of Array.from(wb)) 0 === (Hb & Lb) ? Mb.add(Hb) : eb.add((Hb & ~Lb) >>> 0);
        for (const [Hb, pb] of this.written) pb.seq > bb || (this.written.delete(Hb), Mb.has(pb.seq) ? this.refusedFile(Hb, pb) : this.takenFile(Hb, pb, !pb.empty && !eb.has(pb.seq)))
      }
      takenFile(bb, wb, Mb) {
        const {
          attempt: eb
        } = wb;
        if (Mb) {
          var Hb;
          this.drawn.set(bb, wb.url), this.undrawn.delete(bb), void 0 !== eb.inPlaceOf ? this.refusedPack.set(bb, eb.inPlaceOf) : eb.dg || this.refusedPack.delete(bb), null === (Hb = this.onTaken) || void 0 === Hb || Hb.call(this, bb, !0);
          const Mb = this.pending.get(bb);
          if (!0 === (null === Mb || void 0 === Mb ? void 0 : Mb.dg) && Mb.url !== wb.url) {
            const Mb = this.LO(bb, !0);
            Mb.dg = !0, Mb.recheck = !0, this.fetch(bb, Mb, wb.url)
          }
        } else {
          var pb;
          this.drawn.has(bb) || this.undrawn.add(bb), null === (pb = this.onTaken) || void 0 === pb || pb.call(this, bb, !1)
        }
        eb.recheck && this.resendIfChanged(bb)
      }
      refusedFile(bb, wb) {
        var Mb, eb;
        if (null === (Mb = this.onTaken) || void 0 === Mb || Mb.call(this, bb, !1), this.refusedPack.set(bb, wb.url), this.pending.has(bb)) return void(null === (eb = this.onPackFileFailed) || void 0 === eb || eb.call(this, bb, Cb(wb.url)));
        const Hb = this.LO(bb, wb.attempt.ask);
        Hb.recheck = wb.attempt.recheck, this.afterRefusal(bb, Hb, wb.url)
      }
      async afterRefusal(bb, wb, Mb) {
        var eb;
        let Hb;
        try {
          Hb = await this.wanted(bb)
        } catch (pb) {
          return void(this.pending.get(bb) === wb && this.giveUp(bb, wb, Mb, pb))
        }
        this.pending.get(bb) === wb && (Hb.inPlaceOf !== Mb ? wb.ask || (null !== (eb = Hb.url) && void 0 !== eb ? eb : void 0) !== this.drawn.get(bb) ? this.fetch(bb, wb, Hb.url, Hb.inPlaceOf) : this.pending.delete(bb) : this.fallBack(bb, wb, Mb, Cb(Mb)))
      }
      LO(bb, wb) {
        const Mb = {
          url: void 0,
          ask: wb,
          dg: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(bb, Mb);
        for (let eb = this.ready.length - 1; eb >= 0; eb--) this.ready[eb].file === bb && this.ready.splice(eb, 1);
        return Mb
      }
      async wanted(bb) {
        const wb = await this.files.url(bb);
        return null !== wb && this.refusedPack.get(bb) === wb ? {
          url: await this.files.shippedUrl(bb),
          inPlaceOf: wb
        } : {
          url: wb,
          inPlaceOf: void 0
        }
      }
      fetchWanted(bb, wb) {
        const Mb = this.files.url(bb);
        Mb instanceof Promise ? Mb.then((Mb => {
          this.fetchFound(bb, wb, Mb)
        }), (Mb => {
          this.pending.get(bb) === wb && this.giveUp(bb, wb, "", Mb)
        })) : this.fetchFound(bb, wb, Mb)
      }
      fetchFound(bb, wb, Mb) {
        null !== Mb && this.refusedPack.get(bb) === Mb ? Promise.resolve(this.files.shippedUrl(bb)).then((eb => {
          this.fetch(bb, wb, eb, Mb)
        }), (eb => {
          this.pending.get(bb) === wb && this.giveUp(bb, wb, Mb, eb)
        })) : this.fetch(bb, wb, Mb)
      }
      fetch(bb, wb, Mb, eb) {
        this.pending.get(bb) === wb && (wb.url = Mb, wb.inPlaceOf = eb, null !== Mb ? this.load(bb, wb, Mb) : this.buildFile(bb, wb, "", Ib))
      }
      load(bb, wb, Mb) {
        const eb = this.nI.get(bb);
        (null === eb || void 0 === eb ? void 0 : eb.url) !== Mb ? this.fetchFile(Mb).then((eb => {
          var Hb, pb;
          this.pending.get(bb) === wb && (this.keptTotal += eb.byteLength - (null !== (Hb = null === (pb = this.nI.get(bb)) || void 0 === pb ? void 0 : pb.glb.byteLength) && void 0 !== Hb ? Hb : 0), this.nI.set(bb, {
            url: Mb,
            glb: eb
          }), this.buildFile(bb, wb, Mb, eb))
        }), (eb => {
          this.pending.get(bb) === wb && this.fallBack(bb, wb, Mb, eb)
        })) : this.buildFile(bb, wb, Mb, eb.glb)
      }
      buildFile(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Vb = eb.byteLength > 0 && (0, pb.i)(Mb) ? (bb | pb.b) >>> 0 : bb;
        this.queueRecord(bb, wb, Mb, eb, this.build(Vb, eb), Hb)
      }
      queueRecord(bb, wb, Mb, eb, pb, gb) {
        pb.then((pb => {
          if (this.pending.get(bb) !== wb) return;
          if (Hb.r + (0, Hb.Be)(pb.byteLength) > Hb.Gc) return void this.ringRefused(bb, wb, Mb, new Ob(`${Eb(Mb)}'s record is ${pb.byteLength-Vb.b} bytes, past the cmd ring's ${Hb.Gc}`), gb);
          const lb = {
            file: bb,
            url: Mb,
            payload: pb,
            glb: eb,
            attempt: wb
          };
          gb ? this.ready.unshift(lb) : this.ready.push(lb)
        }))
      }
      async fallBack(bb, wb, Mb, eb) {
        var Hb;
        let pb = null,
          Vb = eb;
        try {
          pb = await this.files.shippedUrl(bb)
        } catch (gb) {
          Vb = gb
        }
        this.pending.get(bb) === wb && (null !== pb && pb !== Mb ? (null === (Hb = this.onPackFileFailed) || void 0 === Hb || Hb.call(this, bb, eb), wb.ask || this.drawn.get(bb) !== pb ? (wb.url = pb, wb.inPlaceOf = Mb, this.load(bb, wb, pb)) : this.pending.delete(bb)) : this.giveUp(bb, wb, Mb, Vb))
      }
      ringRefused(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, pb.i)(Mb) ? this.fallBack(bb, wb, Mb, eb): this.giveUp(bb, wb, Mb, eb, Hb)
      }
      giveUp(bb, wb, Mb, Hb) {
        let pb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: bb,
          url: Eb(Mb),
          error: Hb,
          startup: this.startupLeft.has(bb)
        }), wb.ask || !this.drawn.has(bb) ? (0, eb.M)(Hb) ? this.queueRecord(bb, wb, Mb, Ib, Promise.resolve((0, Vb.m)(bb, (0, gb.j)(Hb))), pb) : this.buildFile(bb, wb, Mb, Ib, pb) : this.pending.delete(bb)
      }
      async resendIfChanged(bb) {
        var wb;
        if (0 !== (bb & pb.f)) return;
        let Mb;
        try {
          Mb = await this.wanted(bb)
        } catch {
          return
        }(null !== (wb = Mb.url) && void 0 !== wb ? wb : void 0) === this.drawn.get(bb) || this.pending.has(bb) || this.written.has(bb) || this.fetch(bb, this.LO(bb, !1), Mb.url, Mb.inPlaceOf)
      }
      drain(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === bb) return;
        let Mb = 0,
          eb = 0;
        for (; eb < this.ready.length && Mb < 262144;) {
          const gb = this.ready[eb];
          if (this.written.has(gb.file)) {
            eb++;
            continue
          }
          const Ib = this.nextSeq;
          new DataView(gb.payload.buffer, gb.payload.byteOffset, gb.payload.byteLength).setUint32(Vb.f, Ib, !0);
          const Ub = gb.attempt.dg && gb.glb.byteLength > 0 && this.drawn.get(gb.file) === gb.url;
          if (bb(lb, Ub ? 1 : 0, gb.payload)) {
            if (this.nextSeq = Ib >= Lb - 1 ? 1 : Ib + 1, this.ready.splice(eb, 1), Mb += gb.payload.byteLength, this.pending.delete(gb.file), this.startupLeft.delete(gb.file), this.written.set(gb.file, {
                seq: Ib,
                url: gb.url,
                empty: 0 === gb.glb.byteLength,
                attempt: gb.attempt
              }), gb.glb.byteLength > 0) try {
              var Hb;
              null === (Hb = this.onWritten) || void 0 === Hb || Hb.call(this, gb.file, gb.glb)
            } catch (pb) {
              console.warn("ModelFeed: reading the file's images failed", pb)
            }
          } else {
            if (null === wb || 0 === gb.glb.byteLength || wb(gb.payload.byteLength)) return;
            this.ready.splice(eb, 1);
            const bb = new Ob(`${Eb(gb.url)}'s record is ${gb.payload.byteLength-Vb.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(gb.file, gb.attempt, gb.url, bb, !0)
          }
        }
      }
    }

    function Cb(bb) {
      return new Ub(`presentation refused ${Eb(bb)}`)
    }

    function Eb(bb) {
      return bb.startsWith("data:") ? `${bb.slice(0,Math.min(Math.max(bb.indexOf(","),5),64))},...` : bb
    }
  },
  42502: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      f: () => pb,
      g: () => Ib,
      i: () => gb,
      j: () => Lb,
      n: () => lb
    });
    var eb = Mb(2471),
      Hb = Mb(4574);
    const pb = 2147483648,
      Vb = 1073741824;

    function gb(bb) {
      return bb.startsWith("data:")
    }

    function lb(bb) {
      let {
        onTableFailed: wb,
        packUrl: Mb
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const eb = Lb();
      eb.catch((bb => {
        null === wb || void 0 === wb || wb(bb)
      }));
      const Hb = async wb => (await eb).fileUrl((wb & ~pb) >>> 0, bb);
      return {
        startup: [],
        url: async bb => {
          if (Mb && 0 === (bb & pb)) {
            const wb = await eb,
              Hb = wb.filePackName(bb),
              pb = null === Hb || "lifeform" === wb.fileSource(bb) ? null : Mb(Hb);
            if (null !== pb) return pb
          }
          return Hb(bb)
        },
        shippedUrl: Hb
      }
    }

    function Lb() {
      return Mb.e(50).then((() => Mb(45181)))
    }
    async function Ib(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return bb.startsWith("data:") ? (0, Hb.c)(bb.slice(bb.indexOf(",") + 1), wb) : (0, eb.C)(bb, {
        spare: wb
      })
    }
  },
  42509: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => lb,
      f: () => Lb,
      j: () => Cb,
      m: () => Ub,
      o: () => Ob,
      p: () => tb
    });
    const eb = 826427981,
      Hb = 1,
      pb = 2,
      Vb = 44,
      gb = 58,
      lb = 8,
      Lb = 4;

    function Ib(bb, wb, Mb) {
      const Hb = (new TextEncoder).encode(Mb),
        pb = lb + 4 * (wb.length + 2),
        Vb = new Uint8Array(pb + (Hb.byteLength + 3 & -4)),
        gb = new DataView(Vb.buffer);
      return gb.setUint32(0, bb, !0), gb.setUint32(lb, eb, !0), wb.forEach(((bb, wb) => {
        gb.setUint32(lb + 4 * (wb + 1), bb, !0)
      })), gb.setUint32(pb - 4, Hb.byteLength, !0), Vb.set(Hb, pb), Vb
    }

    function Ob(bb, wb) {
      return Ib(bb, [pb], wb)
    }

    function Ub(bb, wb) {
      return Ib(bb, [Hb, gb], wb)
    }

    function tb(bb, wb) {
      return Ib(bb, [Hb, Vb], wb)
    }

    function Cb(bb) {
      const wb = lb;
      if (bb.byteLength < wb + 12) return !1;
      const Mb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      return Mb.getUint32(wb, !0) === eb && Mb.getUint32(wb + 4, !0) === Hb && Mb.getUint32(wb + 8, !0) === Vb
    }
  },
  42387: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      e: () => Ib,
      i: () => Vb,
      j: () => lb
    });
    var eb = Mb(37406);
    class Hb extends Error {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${bb}: the module trapped${Mb?" in an earlier call":""}: ${String(wb)}`, {
          cause: wb
        }), this.site = bb, this.trap = wb, this.earlier = Mb, this.name = "ModuleTrapError", wb instanceof Error && void 0 !== wb.stack && (this.stack = `${this.name}: ${this.message}\n${wb.stack}`)
      }
    }
    const pb = new WeakMap;

    function Vb(bb) {
      return pb.has(bb)
    }

    function gb(bb, wb) {
      pb.has(bb) || pb.set(bb, wb)
    }

    function lb(bb, wb) {
      return !!(0, eb.h)(wb) && (gb(bb, wb), !0)
    }
    const Lb = [
      ["error", bb => bb.error],
      ["unhandledrejection", bb => bb.reason]
    ];

    function Ib(bb, wb, Mb) {
      let Vb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return pb.has(bb) ? Promise.reject(new Hb(wb, pb.get(bb), !0)) : new Promise(((pb, lb) => {
        const Ib = Mb => {
            gb(bb, Mb), tb(), lb(new Hb(wb, Mb))
          },
          Ob = bb => {
            bb instanceof WebAssembly.RuntimeError ? Ib(bb) : (tb(), lb(bb))
          },
          Ub = Lb.map((bb => {
            let [wb, Mb] = bb;
            return [wb, bb => {
              const wb = Mb(bb);
              (0, eb.h)(wb) && Ib(wb)
            }]
          })),
          tb = () => {
            for (const [bb, wb] of Ub) null === Vb || void 0 === Vb || Vb.removeEventListener(bb, wb)
          };
        for (const [bb, wb] of Ub) null === Vb || void 0 === Vb || Vb.addEventListener(bb, wb);
        let Cb;
        try {
          Cb = Mb()
        } catch (Eb) {
          return void Ob(Eb)
        }
        Cb.then((bb => {
          tb(), pb(bb)
        }), Ob)
      }))
    }
  },
  42422: (bb, wb, Mb) => {
    Mb.d(wb, {
      B: () => db,
      D: () => Sb,
      E: () => Db,
      G: () => Wb,
      I: () => nb,
      J: () => Jb,
      K: () => qb,
      N: () => vb,
      O: () => Ab,
      P: () => yb,
      e: () => Rb,
      f: () => jb,
      i: () => Gb,
      j: () => Nb,
      m: () => xb,
      q: () => rb,
      r: () => zb,
      t: () => Yb,
      v: () => fb,
      x: () => Pb
    });
    var eb = Mb(236),
      Hb = Mb(26),
      pb = Mb(4950),
      Vb = Mb(153),
      gb = Mb(364),
      lb = Mb(43),
      Lb = Mb(352),
      Ib = Mb(42375),
      Ob = Mb(42390),
      Ub = Mb(37754),
      tb = Mb(42427),
      Cb = (Mb(42406), Mb(42525)),
      Eb = Mb(42450),
      Fb = Mb(42399);
    const Bb = "wasmJoinBuild";
    let sb = null,
      mb = null,
      hb = null;

    function zb(bb) {
      hb = bb
    }
    let Xb = !1;

    function xb() {
      Xb = !0
    }

    function jb() {
      return Xb
    }
    let Kb = !1;

    function rb() {
      Kb = !0
    }

    function Rb() {
      return Kb
    }

    function Db() {
      return hb
    }
    let cb = null;

    function Yb(bb) {
      cb = bb, (0, gb.e)(bb)
    }
    const Zb = "wasmClientRenderLost";

    function fb() {
      lb.j.setItem(Zb, !0)
    }

    function Ab() {
      return !0 === lb.j.getItem(Zb)
    }

    function Wb() {
      return cb
    }

    function Jb() {
      if (null === sb) {
        lb.i.removeItem("wasmLastPick"), lb.i.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, gb.n)(), sb = (0, Lb.l)().then((() => (0, Ib.C)(tb.e))).then((bb => (null === bb || (0, Ib.q)(bb) || (mb = Cb.b[bb.backend], Hb.c.followGameGpu("webgpu" === bb.backend ? bb.adapter : null), "webgpu" === bb.backend && (0, Eb.e)()), bb)))
      }
      return sb
    }

    function Sb() {
      return mb
    }

    function Nb(bb) {
      return bb ? bb.load() : Promise.resolve().then((function() {
        var bb = new Error("Cannot find module '@bloxd/wasm/client'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      })).then((bb => bb.bloxdWasmClient))
    }

    function vb(bb) {
      lb.i.setItem(Bb, bb)
    }

    function Qb(bb, wb) {
      const Mb = lb.i.getItem(Bb);
      return null === Mb ? function(bb) {
        if (void 0 !== (0, eb.c)(bb, "webgpu") && (0, Ib.z)()) return "webgpu";
        return !1 === (0, Vb.r)() ? "webgl1" : "webgl"
      }(bb) : "none" === Mb ? null : "string" === typeof Mb && void 0 !== (0, eb.c)(bb, Mb) ? Mb : (wb && console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(Mb)}, is none of this client's: guessing WebGL2's`), "webgl")
    }
    async function Gb() {
      if (null === tb.e) return Nb(null);
      const bb = Qb(tb.e, !0);
      return null === bb ? null : tb.e[bb]()
    }

    function qb() {
      null === sb && null !== tb.e && "webgl" === Qb(tb.e, !1) && (0, Fb.c)()
    }
    let ab = null,
      ib = null,
      ub = null;

    function db() {
      return ab ??= Jb().then((async bb => {
        const wb = null !== bb && !(0, Ib.q)(bb),
          Mb = {
            indirectHangs: wb && await (0, Ib.L)(bb, window.location.search),
            storagePullBreaks: wb && (0, Ib.W)(bb, window.location.search),
            splitPassBreaks: wb && (0, Ib.S)(bb, window.location.search),
            earlySky: wb && (0, Ib.H)(bb, window.location.search),
            instancedTerrain: wb ? (0, Ib.M)(bb, window.location.search) : null,
            cellLight: wb && await (0, pb.h)("cellLight"),
            framesAhead: (0, Ib.j)(window.location.search, wb ? bb : null),
            webGpuRestores: !wb || (0, Ib._)(bb, (0, Ub.b)()),
            bufferCopiesCrash: wb && (0, Ib.F)(bb, window.location.search),
            firstVertex: wb ? (0, Ob.h)(bb.backend, window.location.search) : void 0
          };
        return ib = Mb.indirectHangs, ub = !Mb.webGpuRestores, Mb
      })), ab
    }

    function Pb() {
      return ib
    }

    function nb() {
      return ub
    }
    async function yb() {
      const bb = null === sb ? null : await sb;
      return null !== bb && (0, Ib.q)(bb) && (sb = null, ab = null, ib = null, ub = null), Jb()
    }
  },
  42528: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => lb,
      g: () => Lb
    });
    var eb = Mb(37435),
      Hb = Mb(42353),
      pb = Mb(5235),
      Vb = Mb(352),
      gb = Mb(37754);
    async function lb(bb, wb) {
      return await Promise.all([(0, pb.e)(void 0, !0), (0, Vb.l)()]), (0, eb.o)(bb, Hb.h, {
        ...wb,
        memoryMaximumBytes: (0, gb.o)()
      })
    }
    async function Lb() {
      return await (0, pb.e)(void 0, !0), (0, eb.r)((0, gb.o)())
    }
  },
  42390: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => gb,
      h: () => pb
    });
    var eb = Mb(309);
    const Hb = "provokingVertex";

    function pb(bb, wb) {
      if ("webgl" !== bb) return;
      const Mb = new URLSearchParams(wb).get(Hb);
      return "first" === Mb || "last" !== Mb && null
    }
    const Vb = new WeakSet;

    function gb(bb, wb) {
      var Mb, Hb;
      let pb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Mb = null === (Hb = globalThis.navigator) || void 0 === Hb ? void 0 : Hb.userAgent) && void 0 !== Mb ? Mb : "";
      try {
        !1 === wb || Vb.has(bb) || (Vb.add(bb), bb.addEventListener("webglcontextrestored", (() => {
          gb(bb, wb, pb)
        })));
        const Mb = bb.getContext("webgl2");
        if (null === Mb || Mb.isContextLost()) return !1;
        if (!(null !== wb && void 0 !== wb ? wb : function(bb, wb) {
            var Mb, Hb;
            const pb = bb.getExtension("WEBGL_debug_renderer_info");
            if (null === pb) return !1;
            return function(bb, wb, Mb) {
              return Mb.includes("Windows") && "adreno_6" === (0, eb.k)(bb, wb)
            }(String(null !== (Mb = bb.getParameter(pb.UNMASKED_VENDOR_WEBGL)) && void 0 !== Mb ? Mb : ""), String(null !== (Hb = bb.getParameter(pb.UNMASKED_RENDERER_WEBGL)) && void 0 !== Hb ? Hb : ""), wb)
          }(Mb, pb))) return !1;
        const Hb = Mb.getExtension("WEBGL_provoking_vertex");
        return null !== Hb && (Hb.provokingVertexWEBGL(Hb.FIRST_VERTEX_CONVENTION_WEBGL), console.info("WebGL2 draws flat varyings from the first vertex (WEBGL_provoking_vertex)"), !0)
      } catch (lb) {
        return console.warn("WebGL2's provoking vertex couldn't be set: flat varyings draw from the last vertex", lb), !1
      }
    }
  },
  42401: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb,
      f: () => gb,
      j: () => Ib,
      l: () => Vb
    });
    var eb = Mb(375),
      Hb = Mb(681);
    let pb;

    function Vb(bb) {
      var wb;
      const Mb = pb;
      return pb = void 0, null !== (wb = lb(bb)) && void 0 !== wb ? wb : Mb
    }

    function gb(bb) {
      try {
        const wb = lb(bb);
        void 0 !== wb && (pb = wb, (0, Hb.g)((0, eb.p)(wb.reason, wb.message)))
      } catch (wb) {
        console.warn("Couldn't keep the WebGPU loss's cause", wb)
      }
    }

    function lb(bb) {
      var wb;
      const Mb = null === bb || void 0 === bb || null === (wb = bb.Lgb) || void 0 === wb ? void 0 : wb.call(bb),
        eb = null === bb || void 0 === bb ? void 0 : bb.lgb();
      if (void 0 === eb) return;
      const Hb = new Error(eb);
      return void 0 !== Mb && (Hb.reason = Mb), Hb
    }

    function Lb(bb) {
      return bb instanceof Error ? bb : void 0
    }

    function Ib(bb, wb) {
      return "lost" !== bb && "frames_refused" !== bb ? {} : (0, eb.p)("frames_refused" === bb ? bb : null === wb || void 0 === wb ? void 0 : wb.reason, null === wb || void 0 === wb ? void 0 : wb.message)
    }
  },
  42441: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Rb,
      g: () => xb,
      j: () => Xb,
      n: () => zb,
      o: () => rb,
      p: () => Zb,
      r: () => Yb,
      t: () => fb
    });
    var eb = Mb(5685),
      Hb = Mb(42450),
      pb = Mb(35179);
    const Vb = 1,
      gb = 18,
      lb = 19,
      Lb = 20,
      Ib = 21,
      Ob = 22,
      Ub = 23,
      tb = {
        [Vb]: "link",
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
        [gb]: "retry linked",
        [lb]: "fallback linked",
        [Lb]: "fallback failed",
        [Ib]: "link stalled",
        [Ob]: "link left pending",
        [Ub]: "moved to general",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function Cb(bb, wb, Mb) {
      return bb === gb ? "program retry" : bb === Vb ? "program link" : bb === Ib ? "program link stall" : bb === Ob ? "program link pending" : bb === lb || bb === Lb || bb === Ub ? `program ${wb} ${Mb}` : "program"
    }
    const Eb = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain",
        5: "scene warm stuck"
      },
      Fb = {
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
      Bb = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      sb = {
        11: "none read after view",
        12: "some read after view"
      },
      mb = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...sb
      },
      hb = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function zb(bb, wb) {
      return bb === eb.p.RenderSerialLinks && void 0 !== sb[wb]
    }

    function Xb(bb, wb) {
      return bb === eb.p.RenderInternal && (wb >>> 8 & 255) === Ob
    }

    function xb(bb, wb) {
      return bb === eb.p.RenderSerialLinks && void 0 !== hb[15 & wb]
    }
    const jb = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function Kb(bb, wb) {
      var Mb;
      return null !== (Mb = bb[wb]) && void 0 !== Mb ? Mb : (0, pb.b)(wb)
    }

    function rb() {
      return (0, pb.b)((0, Hb.c)())
    }

    function Rb(bb, wb) {
      switch (bb) {
        case eb.p.RenderSceneRowNotDrawn:
          return {
            words: ` ${Kb(Fb,wb)}`, instance: String(wb), group: String(bb)
          };
        case eb.p.RenderChunkMeshNotDrawn: {
          const Mb = 0 === (128 & wb) ? "" : " shortage",
            eb = wb >>> 8;
          return {
            words: ` ${Kb(Bb,127&wb)}${Mb}${0===eb?"":` kind ${(0,pb.b)(eb)}`}`,
            instance: String(wb),
            group: String(bb)
          }
        }
        case eb.p.RenderInternal: {
          const Mb = Kb(Eb, 255 & wb),
            eb = wb >>> 8 & 255;
          if (0 === eb) return {
            words: ` ${Mb}`,
            instance: String(wb),
            group: String(bb)
          };
          const Hb = Kb(tb, eb),
            Vb = wb >>> 16;
          return {
            words: ` ${Mb} ${Hb} program ${(0,pb.b)(Vb)}`,
            instance: `${Mb} ${Hb} ${Vb}`,
            group: Cb(eb, Hb, Mb),
            gpuDetails: {
              programFailure: Hb,
              program: String(Vb)
            }
          }
        }
        case eb.p.RenderSerialLinks: {
          if (xb(bb, wb)) {
            const bb = function(bb) {
              const wb = (wb, Mb) => (0, pb.b)(bb >>> wb & (1 << Mb) - 1),
                Mb = bb >>> 30 & 1 ? " restored" : "";
              return `link census ${hb[15&bb]} linked ${wb(22,8)} failed ${wb(4,6)} retried ${wb(10,6)} fallback ${wb(16,6)}${Mb}`
            }(wb);
            return {
              words: ` ${bb}`,
              instance: String(15 & wb),
              group: "link census",
              gpuDetails: {
                linkCensus: bb
              }
            }
          }
          const Mb = Kb(mb, wb);
          return {
            words: ` ${Mb}`,
            instance: String(wb),
            group: String(bb),
            gpuDetails: {
              serialLinks: Mb
            }
          }
        }
        case eb.p.RenderGlErrorAfterRestore: {
          const Mb = Kb(jb, 65535 & wb),
            eb = wb >>> 16,
            Hb = 65535 !== eb;
          return {
            words: ` ${Mb}${Hb?` program ${(0,pb.b)(eb)}`:""}`,
            instance: String(wb),
            group: String(bb),
            gpuDetails: Hb ? {
              glError: Mb,
              program: String(eb)
            } : {
              glError: Mb
            }
          }
        }
        default:
          return null
      }
    }
    const Db = 2,
      cb = new Map;

    function Yb(bb) {
      let {
        group: wb,
        instance: Mb
      } = bb, eb = cb.get(wb);
      return void 0 === eb && (eb = [], cb.set(wb, eb)), !eb.includes(Mb) && (eb.length >= Db || (eb.push(Mb), !1))
    }

    function Zb() {
      return cb.size > 0
    }

    function fb() {
      cb.clear()
    }
  },
  42427: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb,
      e: () => pb
    });
    var eb = Mb(42434);
    const Hb = new WeakSet;
    const pb = {
        webgpu: async () => (function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === bb || Hb.has(bb.prototype)) return;
          Hb.add(bb.prototype);
          const wb = bb.prototype.requestDevice;
          bb.prototype.requestDevice = function(bb) {
            var Mb;
            const Hb = null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.requiredLimits) && void 0 !== Mb ? Mb : {},
              pb = Object.keys(Hb).filter((bb => !(bb in this.limits)));
            if (0 === pb.length) return wb.call(this, bb);
            const Vb = Object.fromEntries(Object.entries(Hb).filter((bb => {
              let [wb] = bb;
              return wb in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${pb.join(", ")}`), (0, eb.reportDroppedRequiredLimits)(pb), wb.call(this, {
              ...bb,
              requiredLimits: Vb
            })
          }
        }(), (await Mb.e(8).then((() => Mb(54831)))).bloxdWasmWebgpu),
        webgl: async () => (await Mb.e(6).then((() => Mb(54837)))).bloxdWasmWebgl,
        webgl1: async () => (await Mb.e(7).then((() => Mb(54846)))).bloxdWasmWebgl1
      },
      Vb = async () => (await Mb.e(5).then((() => Mb(54858)))).compileAnimationPackInWasm
  },
  42486: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Bb,
      e: () => Fb,
      i: () => zb
    });
    var eb = Mb(7825),
      Hb = Mb(29),
      pb = Mb(5108),
      Vb = Mb(5685),
      gb = Mb(7821),
      lb = Mb(42488);

    function Lb(bb, wb) {
      const Mb = (0, gb.e)(wb.variants);
      return bb.setShaderPack(Mb.variantFlags, Mb.hooks, Mb.moduleCodes, (0, lb.B)(wb.layers), lb.p[wb.policy], wb.keepCircleShadows)
    }
    const Ib = 0,
      Ob = 1,
      Ub = 2,
      tb = "shaderPack:failedToCompile",
      Cb = new Set(["no_webgpu_api", "no_adapter", "compatibility_held", "software_adapter", "adapter_error", "start_no_adapter"]),
      Eb = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function Fb(bb, wb, Mb) {
      var eb;
      const Hb = null !== (eb = null === bb || void 0 === bb ? void 0 : bb.reason) && void 0 !== eb ? eb : "none";
      return Cb.has(Hb) ? {
        messageKey: wb ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === Hb && "override" === (null === bb || void 0 === bb ? void 0 : bb.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: Eb.has(Hb) && !Mb ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class Bb extends Error {
      constructor(bb) {
        super(`the shader pack can't run in this game: ${bb}`), this.messageKey = bb, this.name = "ShaderPackJoinError"
      }
    }
    const sb = "strict";
    class mb {
      constructor(bb) {
        this.deps = bb, this.pagePack = void 0, this.loaded = null, this.policy = sb, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = bb.load().catch((wb => (bb.warn("the shader pack could not load: the game draws without it", wb), {
          status: "none"
        }))).then((bb => (this.loaded = bb, "active" === bb.status && (this.handOverToPreviews(bb), null !== bb.harnessPolicy && (this.policy = bb.harnessPolicy, this.handOver())), bb)))
      }
      async join(bb) {
        this.leave();
        const wb = this.game,
          [Mb, Hb] = await Promise.all([this.pagePack, this.policyOf(bb)]);
        if (wb !== this.game || "none" === Mb.status) return null;
        const pb = "active" === Mb.status ? Mb.pack.variants : Mb.variants,
          Vb = (0, eb.i)(pb, Hb);
        if (Vb && "active" === Mb.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (Vb) {
          const bb = this.cantRun(Mb, Hb);
          if (null !== bb) return bb
        } else if ("blocked" === Mb.status || null === this.deps.core) return null;
        return this.policy = Hb, this.handOver(), Vb && this.refused ? tb : (this.joined = !0, this.offInThisGame = !Vb, null)
      }
      async replay(bb) {
        const wb = await this.join(bb);
        null === wb ? this.playable() : this.deps.failInGame(wb)
      }
      cantRun(bb, wb) {
        const {
          core: Mb,
          noWebGpu: eb
        } = this.deps;
        if ("blocked" === bb.status) {
          return "shaderPack:failedUnchecked" === bb.messageKey && null === Mb && eb.noAdapter ? eb.messageKey : bb.messageKey
        }
        return this.refused || this.failedPolicies.has(wb) ? tb : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var bb;
        return this.runsInJoinedGame() && "active" === (null === (bb = this.loaded) || void 0 === bb ? void 0 : bb.status) ? function(bb, wb) {
          const Mb = bb.filter((bb => (0, eb.i)([bb], wb))),
            Hb = bb => Mb.some((wb => wb[bb]));
          return {
            sceneDepth: Hb("sceneDepth"),
            sunShadow: Hb("sunShadow"),
            airShadow: Hb("airShadow")
          }
        }(this.loaded.pack.variants, this.policy) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(tb) : (null !== this.couldntRun ? this.notify(pb.d, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.policy) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(bb) {
        for (const {
            code: wb,
            detail: Mb
          }
          of bb)
          if (wb === Vb.p.RenderShaderPackNotRun) switch (255 & Mb) {
            case Ib:
              this.refused = !0, this.failed();
              break;
            case Ob:
              this.failedPolicies.add(this.policy), this.failed();
              break;
            case Ub:
              this.failedModelPolicies.add(this.policy), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(tb) : this.failedWhileJoining = !0)
      }
      fail(bb) {
        this.leave(), this.deps.failInGame(bb)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(bb, wb) {
        const Mb = this.game;
        this.deps.notify(bb, (() => Mb === this.game && this.joined), wb)
      }
      handOver() {
        var bb;
        const {
          core: wb
        } = this.deps;
        null !== wb && "active" === (null === (bb = this.loaded) || void 0 === bb ? void 0 : bb.status) && (Lb(wb, {
          ...this.loaded.pack,
          policy: this.policy
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(bb) {
        let {
          pack: wb,
          harnessPolicy: Mb
        } = bb;
        const {
          previews: eb
        } = this.deps;
        null !== eb && Lb(eb, {
          ...wb,
          policy: null !== Mb && void 0 !== Mb ? Mb : sb
        })
      }
      policyOf(bb) {
        return this.deps.policyOf(bb).catch((bb => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", bb), sb)))
      }
    }
    const hb = "wasmShaderPackNotice";

    function zb(bb, wb, Mb, eb) {
      return Hb.k.subscribe(hb, (bb => {
        let {
          translationKey: wb,
          stillCurrent: Mb,
          reasonKey: eb
        } = bb;
        Mb() && Hb.k.iI("chat", (0, pb.i)(wb, eb))
      })), new mb({
        load: Xb,
        policyOf: xb,
        core: bb,
        previews: wb,
        noWebGpu: Mb,
        notify: (bb, wb, Mb) => {
          const eb = {
            translationKey: bb,
            stillCurrent: wb,
            reasonKey: Mb
          };
          Hb.k.iI(hb, eb, !0)
        },
        failInGame: bb => {
          Hb.k.iI(pb.h, bb)
        },
        warn: eb
      })
    }
    async function Xb() {
      const [{
        shaderPackPage: bb,
        harnessShaderPackMode: wb
      }, {
        shaderPackTextures: eb
      }] = await Promise.all([Mb.e(138).then((() => Mb(40569))), Mb.e(139).then((() => Mb(7819)))]), Hb = await bb.load();
      return "active" !== Hb.status ? Hb : {
        status: "active",
        pack: {
          variants: Hb.pack.variants,
          layers: eb().layers,
          keepCircleShadows: Hb.pack.keepCircleShadows
        },
        harnessPolicy: wb()
      }
    }
    async function xb(bb) {
      var wb;
      const [{
        shaderPackPage: eb,
        harnessShaderPackMode: Hb
      }, {
        getShaderPackPolicy: pb
      }] = await Promise.all([Mb.e(138).then((() => Mb(40569))), Mb.e(108).then((() => Mb(45128)))]);
      return await eb.load(), null !== (wb = Hb()) && void 0 !== wb ? wb : pb(bb)
    }
  },
  42515: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb,
      e: () => Fb,
      f: () => lb,
      g: () => Lb,
      i: () => Ib,
      m: () => Ub
    });
    var eb = Mb(37455),
      Hb = Mb(42519);
    const pb = "atlas:",
      Vb = 3e4;
    class gb extends Error {
      constructor(bb, wb) {
        super(`fetching ${bb} answered HTTP ${wb}`), this.url = bb, this.status = wb, this.name = "TerrainTextureFetchError"
      }
    }

    function lb(bb) {
      if (!bb.startsWith(pb)) return null;
      const wb = Number(bb.slice(pb.length));
      return Number.isInteger(wb) && wb >= 0 ? wb : null
    }
    async function Lb() {
      const bb = await Mb.e(235).then((() => Mb(35425)));
      return {
        atlasSheets: bb.blockAtlasUrls,
        texture: wb => {
          var Mb, eb, pb;
          return null !== (Mb = null !== (eb = null !== (pb = bb.animatedBlockTextures[wb]) && void 0 !== pb ? pb : bb.rotatedBlockTextures[wb]) && void 0 !== eb ? eb : Hb.b[wb]) && void 0 !== Mb ? Mb : null
        }
      }
    }
    async function Ib(bb) {
      const wb = new AbortController,
        Mb = setTimeout((() => {
          wb.abort(new DOMException(`${bb} took over ${Vb} ms`, "TimeoutError"))
        }), Vb);
      let eb;
      try {
        const Mb = await fetch(bb, {
          signal: wb.signal
        });
        if (!Mb.ok) throw new gb(bb, Mb.status);
        eb = await Mb.blob()
      } finally {
        clearTimeout(Mb)
      }
      const Hb = await createImageBitmap(eb, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return Ub(Hb)
      } finally {
        Hb.close()
      }
    }
    const Ob = 8192;

    function Ub(bb) {
      const {
        width: wb,
        height: Mb
      } = bb, Hb = Math.max(1, Math.min(Mb, Ob)), pb = (0, eb.g)(wb, Hb, {
        willReadFrequently: !0
      });
      if (!pb) throw new Error("no 2D context to read the texture back");
      pb.globalCompositeOperation = "copy";
      const Vb = new Uint8Array(wb * Mb * 4);
      for (let eb = 0; eb < Mb; eb += Hb) {
        const gb = Math.min(Hb, Mb - eb);
        pb.drawImage(bb, 0, eb, wb, gb, 0, 0, wb, gb), Vb.set(pb.getImageData(0, 0, wb, gb).data, eb * wb * 4)
      }
      return {
        width: wb,
        height: Mb,
        pixels: Vb
      }
    }
    async function tb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ib;
      const eb = [],
        Hb = await Promise.all(bb.map((async bb => {
          var Hb, Vb;
          const gb = null !== (Hb = null === (Vb = wb.decoded) || void 0 === Vb ? void 0 : Vb.call(wb, bb)) && void 0 !== Hb ? Hb : null,
            Lb = null === gb ? function(bb, wb) {
              if (bb.startsWith(pb)) {
                var Mb;
                const eb = lb(bb);
                return null === eb ? null : null !== (Mb = wb.atlasSheets[eb]) && void 0 !== Mb ? Mb : null
              }
              return wb.texture(bb)
            }(bb, wb) : null,
            Ib = null !== gb && void 0 !== gb ? gb : null === Lb ? null : Mb(Lb);
          if (null === Ib) return eb.push({
            name: bb,
            url: Lb,
            error: new Error(`no URL for terrain texture ${bb}`)
          }), null;
          try {
            const wb = await Ib;
            if (wb.pixels.byteLength !== wb.width * wb.height * 4) throw new Error(`decoded ${wb.pixels.byteLength} bytes for ${wb.width}x${wb.height} texels`);
            return {
              name: bb,
              texture: wb
            }
          } catch (Ob) {
            return eb.push({
              name: bb,
              url: Lb,
              error: Ob
            }), null
          }
        }))),
        Vb = Hb.filter((bb => null !== bb)),
        gb = new Uint32Array(2 * Vb.length);
      Vb.forEach(((bb, wb) => {
        let {
          texture: Mb
        } = bb;
        gb[2 * wb] = Mb.width, gb[2 * wb + 1] = Mb.height
      }));
      return {
        handOver: {
          names: Vb.map((bb => {
            let {
              name: wb
            } = bb;
            return wb
          })),
          textures: Vb.map((bb => {
            let {
              texture: wb
            } = bb;
            return wb.pixels
          })),
          sizes: gb
        },
        failures: eb
      }
    }
    const Cb = [2e3, 1e4, 3e4, 6e4, 12e4];

    function Eb() {}
    class Fb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cb,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = bb, this.retryMs = wb, this.keepBelow = Mb, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lb,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const eb = ++this.started,
          Hb = {
            decode: Mb.decode,
            wholeAtlas: Mb.wholeAtlas
          };
        return this.loadAndHandOver(wb, Hb, bb, (() => {
          var bb;
          return eb < this.landed || !1 === (null === (bb = Mb.wanted) || void 0 === bb ? void 0 : bb.call(Mb))
        }), {
          onTaken: (bb, Mb) => {
            this.landed = eb, this.current = {
              mine: eb,
              sources: wb,
              load: Hb,
              nI: bb,
              failed: Mb
            }
          }
        })
      }
      restore(bb) {
        var wb;
        const Mb = this.current;
        if (null === Mb) return Promise.resolve(null);
        if ((null === (wb = this.restoring) || void 0 === wb ? void 0 : wb.mine) === Mb.mine) return this.restoring.done;
        const eb = {
          mine: Mb.mine,
          done: this.restoreLanded(Mb, bb).finally((() => {
            this.restoring === eb && (this.restoring = null)
          }))
        };
        return this.restoring = eb, eb.done
      }
      async restoreLanded(bb, wb) {
        const Mb = () => this.landed !== bb.mine,
          {
            nI: eb
          } = bb;
        if (null !== eb) return this.stopped() ? null : this.core.setTerrainTextures(eb.names, eb.textures, eb.sizes);
        let Hb = wb;
        for (let pb = 0;; pb++) {
          const wb = this.retryMs.at(pb),
            eb = {
              allOrNothingExcept: void 0 === wb ? void 0 : bb.failed
            },
            Vb = await this.loadAndHandOver(bb.sources, bb.load, Hb, Mb, eb);
          if (!1 !== Vb || void 0 === wb || this.stopped()) return Vb;
          if (Hb = Eb, await new Promise((bb => {
              setTimeout(bb, wb)
            })), Mb()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const pb = this.core.terrainTextureNames();
        var Vb;
        if (0 === pb.length) return null === (Vb = Hb.onTaken) || void 0 === Vb || Vb.call(Hb, null, new Set), !0;
        let gb, Lb;
        try {
          gb = await bb(), Lb = await tb(pb, gb, wb.decode)
        } catch (Fb) {
          return eb() ? null : (Mb({
            name: null,
            url: null,
            error: Fb
          }), !1)
        }
        if (eb() || this.stopped()) return null;
        for (const lb of Lb.failures) Mb(lb);
        const Ib = Hb.allOrNothingExcept;
        if (void 0 !== Ib && Lb.failures.some((bb => {
            let {
              name: wb
            } = bb;
            return null === wb || !Ib.has(wb)
          })) || !0 === wb.wholeAtlas && Lb.failures.some((bb => {
            let {
              name: wb
            } = bb;
            return null === wb || null !== lb(wb)
          }))) return !1;
        const {
          handOver: Ob
        } = Lb, Ub = function(bb) {
          return bb.textures.reduce(((bb, wb) => bb + wb.byteLength), 0)
        }(Ob) < this.keepBelow, Cb = this.core.setTerrainTextures(Ob.names, Ob.textures, Ob.sizes, Ub ? void 0 : () => {
          !async function(bb, wb) {
            await wb;
            for (const {
                buffer: eb
              }
              of bb) {
              const bb = eb;
              var Mb;
              if (!bb.detached) null === (Mb = bb.transfer) || void 0 === Mb || Mb.call(bb, 0)
            }
          }(Ob.textures, gb.heldUntil)
        });
        if (Cb) {
          var Eb;
          const bb = new Set(Lb.failures.flatMap((bb => {
            let {
              name: wb
            } = bb;
            return null === wb ? [] : [wb]
          })));
          null === (Eb = Hb.onTaken) || void 0 === Eb || Eb.call(Hb, Ub ? Ob : null, bb)
        }
        return Cb
      }
    }
  },
  35285: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb,
      g: () => Ob,
      h: () => Ib
    });
    var eb = Mb(309),
      Hb = Mb(110),
      pb = Mb(153),
      Vb = Mb(144),
      gb = Mb(689);
    const lb = new Set(["mali_bifrost"]);

    function Lb() {
      if (gb.f) return;
      const bb = (0, Hb.pageOperatingSystem)();
      if ("android" !== bb && "windows" !== bb || (0, gb.c)("webgl_default")) return;
      if ("windows" === bb) return bb => "qualcomm" === (0, Hb.normaliseGpuVendor)((0, Vb.d)(bb).vendor);
      const wb = (0, pb.n)(),
        Mb = null === wb ? (0, eb.x)() : (0, eb.k)(wb.vendor, wb.renderer);
      return null !== Mb && lb.has(Mb) ? bb => (0, eb.r)((0, Vb.d)(bb).vendor, Mb) : void 0
    }

    function Ib(bb, wb) {
      return bb ? () => !0 : wb()
    }
    async function Ob(bb) {
      try {
        const wb = Ib(bb, Lb),
          Mb = navigator.gpu;
        if (void 0 === wb || void 0 === Mb) return !1;
        const eb = await (0, Vb.k)(Mb, {
          seed: !1,
          compatibility: wb
        });
        return "string" !== typeof eb && eb.compatibility && !(0, Vb.h)(eb.adapter)
      } catch (wb) {
        return console.error("WebGPU compatibility-mode adapter request failed.", wb), !1
      }
    }
  },
  42450: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => lb,
      e: () => Lb
    });
    var eb = Mb(110),
      Hb = Mb(5243);
    const pb = "webgpuPipeline";

    function Vb(bb) {
      return bb.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let gb = null;

    function lb() {
      if (null === gb) try {
        bb = (0, eb.getBrowserName)(), wb = (0, eb.getBrowserVersion)(), Mb = (0, eb.getOperatingSystem)(), Hb = (0, eb.getOperatingSystemVersion)(), gb = `${bb.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===wb?"unknown":Vb(wb)}-${Mb}${void 0===Hb?"":`_${Vb(Hb)}`}`
      } catch (pb) {
        console.warn("The user agent couldn't be read for its browser code", pb), gb = "unknown"
      }
      var bb, wb, Mb, Hb;
      return gb
    }

    function Lb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const wb = `WGPU-${lb()}`,
        eb = (bb, eb) => {
          const {
            reason: Vb,
            message: gb
          } = eb, lb = String(gb);
          if ((0, Hb.B)(Vb, lb)) return;
          const Lb = {
            pipeline: null !== bb && void 0 !== bb ? bb : "",
            reason: String(Vb),
            browserMessage: lb
          };
          Promise.resolve().then((() => Mb(42434))).then((bb => {
            let {
              reportCrash: Mb
            } = bb;
            Mb({
              kind: "coreError",
              code: wb,
              site: pb,
              fatal: !1,
              message: `${Lb.pipeline} ${Lb.reason}: ${Lb.browserMessage}`,
              details: Lb,
              error: eb
            })
          })).catch((bb => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", bb)
          }))
        },
        Vb = bb.createRenderPipelineAsync;
      bb.createRenderPipelineAsync = function(bb) {
        return Vb.call(this, bb).catch((wb => {
          throw eb(bb.label, wb), wb
        }))
      };
      const gb = bb.createComputePipelineAsync;
      bb.createComputePipelineAsync = function(bb) {
        return gb.call(this, bb).catch((wb => {
          throw eb(bb.label, wb), wb
        }))
      }
    }
  },
  42399: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb,
      e: () => lb
    });
    var eb = Mb(153);
    let Hb = !1;

    function pb() {
      let bb = null;
      try {
        return bb = document.createElement("canvas").getContext("webgl2"), null !== bb
      } catch {
        return !1
      } finally {
        try {
          var wb, Mb;
          null === (wb = bb) || void 0 === wb || null === (Mb = wb.getExtension("WEBGL_lose_context")) || void 0 === Mb || Mb.loseContext()
        } catch {}
      }
    }

    function Vb() {
      "hidden" === document.visibilityState && (Hb = !1, document.removeEventListener("visibilitychange", Vb))
    }

    function gb() {
      Hb || "visible" !== document.visibilityState || !(0, eb.q)() && !pb() || (Hb = !0, document.addEventListener("visibilitychange", Vb))
    }

    function lb() {
      return Hb || pb()
    }
  },
  42366: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/bloxd_wasm_models_bg.fd4d14f832799978af36.wasm"
  },
  42361: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/bloxd_wasm_workers_bg.8e9546dac9305a8173d9.wasm"
  },
  42353: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      h: () => eb
    });
    const eb = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new Mb.U(Mb(42361))
      }
    };
    const Hb = {
      name: "bloxd_wasm_models",
      url: function() {
        return new Mb.U(Mb(42366))
      }
    }
  },
  7821: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => hb,
      i: () => zb,
      l: () => sb,
      n: () => Bb
    });
    var eb = Mb(7825);
    const Hb = 6,
      pb = 3,
      Vb = 1,
      gb = 2,
      lb = 4,
      Lb = 8,
      Ib = 16,
      Ob = 32,
      Ub = 64,
      tb = 128,
      Cb = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Eb(bb) {
      if (!bb) return 0;
      const wb = Cb.indexOf(bb);
      if (wb <= 0) throw new Error(`"${bb}" is not a shader pack hook function`);
      return wb
    }

    function Fb(bb) {
      if (0 === bb) return null;
      const wb = Cb[bb];
      if (void 0 === wb) throw new Error(`${bb} is not a shader pack hook function id`);
      return wb
    }

    function Bb(bb) {
      const wb = eb.d.length;
      return {
        strict: bb >= wb,
        program: eb.d[bb % wb]
      }
    }

    function sb(bb) {
      return Number(bb.strict) * eb.d.length + eb.d.indexOf(bb.program)
    }

    function mb(bb) {
      return "" === bb ? [] : bb.split(" ")
    }

    function hb(bb) {
      const wb = {
        variantFlags: new Uint8Array(Hb),
        hooks: new Uint8Array(Hb * pb),
        moduleCodes: Array(Hb).fill(""),
        reads: Array(2 * Hb).fill("")
      };
      for (const Mb of bb) {
        const bb = sb(Mb.key),
          eb = (bb, wb) => null === Mb.hooks.surface || Mb.reads.fragment.includes(bb) ? 0 : wb;
        wb.variantFlags[bb] = (Mb.sceneDepth ? Vb : 0) | (Mb.movesVertices ? gb : 0) | (Mb.sunShadow ? lb : 0) | (Mb.airShadow ? Lb : 0) | (Mb.discards ? Ib : 0) | eb("localPosition", Ob) | eb("enchantSpeed", Ub) | eb("enchantTier", tb), wb.hooks[bb * pb] = Eb(Mb.hooks.vertex), wb.hooks[bb * pb + 1] = Eb(Mb.hooks.surface), wb.hooks[bb * pb + 2] = Eb(Mb.hooks.light), wb.moduleCodes[bb] = Mb.moduleCode, wb.reads[2 * bb] = Mb.reads.vertex.join(" "), wb.reads[2 * bb + 1] = Mb.reads.fragment.join(" ")
      }
      return wb
    }

    function zb(bb) {
      const {
        hooks: wb,
        moduleCodes: Mb,
        reads: eb
      } = bb;
      return Array.from(bb.variantFlags, ((bb, Hb) => {
        const Ob = Hb * pb;
        return {
          key: Bb(Hb),
          hooks: {
            vertex: Fb(wb[Ob]),
            surface: Fb(wb[Ob + 1]),
            light: Fb(wb[Ob + 2])
          },
          moduleCode: Mb[Hb],
          sceneDepth: 0 !== (bb & Vb),
          sunShadow: 0 !== (bb & lb),
          airShadow: 0 !== (bb & Lb),
          movesVertices: 0 !== (bb & gb),
          discards: 0 !== (bb & Ib),
          reads: {
            vertex: mb(eb[2 * Hb]),
            fragment: mb(eb[2 * Hb + 1])
          }
        }
      }))
    }
  },
  42488: (bb, wb, Mb) => {
    Mb.d(wb, {
      B: () => Eb,
      C: () => tb,
      E: () => Cb,
      c: () => Hb,
      g: () => eb,
      j: () => Ub,
      l: () => Ib,
      p: () => Fb,
      r: () => pb,
      u: () => gb,
      v: () => lb,
      x: () => Vb
    });
    const eb = 3,
      Hb = 0,
      pb = 1,
      Vb = 2,
      gb = {
        uniform: 3,
        GU: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      lb = 10,
      Lb = "BloxdPackInputs",
      Ib = "bloxdPackInputs",
      Ob = [{
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
      Ub = 80;

    function tb() {
      const bb = Ob.map((bb => {
        let {
          name: wb,
          type: Mb
        } = bb;
        return `    ${wb}: ${Mb},\n`
      })).join("");
      return `struct ${Lb} {\n${bb}}\n@group(${eb}) @binding(${Hb}) var<uniform> ${Ib}: ${Lb};\n`
    }

    function Cb(bb, wb) {
      const Mb = new DataView(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Ub),
        [eb, Hb, pb, Vb, gb, lb] = Ob;
      Mb.setFloat32(eb.offset, wb.seconds, !0), Mb.setUint32(Hb.offset, wb.lit ? 1 : 0, !0);
      for (let Lb = 0; Lb < 3; Lb++) Mb.setInt32(pb.offset + 4 * Lb, wb.renderOffset[Lb], !0), Mb.setFloat32(Vb.offset + 4 * Lb, wb.jwb[Lb], !0), Mb.setFloat32(gb.offset + 4 * Lb, wb.eyePosition[Lb], !0), Mb.setFloat32(lb.offset + 4 * Lb, wb.shadowDirection[Lb], !0)
    }

    function Eb(bb) {
      const wb = new Uint32Array(Math.max(1, bb.length));
      return bb.forEach(((bb, Mb) => {
        let {
          id: eb,
          rotation: Hb
        } = bb;
        wb[Mb] = 65535 & eb | (3 & Hb) << 16
      })), wb
    }
    const Fb = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7825: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb,
      f: () => Vb,
      i: () => gb,
      l: () => Hb,
      o: () => pb
    });
    const eb = ["terrain", "liquid", "model"];

    function Hb() {
      const bb = [];
      for (const wb of [!1, !0])
        for (const Mb of eb) bb.push({
          strict: wb,
          program: Mb
        });
      return bb
    }

    function pb(bb) {
      return `${bb.strict?"strict":"allow"}.${bb.program}`
    }

    function Vb(bb) {
      return !bb.hooks.vertex && !bb.hooks.surface && !bb.hooks.light
    }

    function gb(bb, wb) {
      return "off" !== wb && (null === bb || bb.some((bb => bb.key.strict === ("strict" === wb) && !Vb(bb))))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);