export const id = 161;
export const ids = [161];
export const modules = {
  35381: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd,
      f: () => Xd
    });
    var Wd = md(310),
      Fd = md(145),
      Rd = md(35387);

    function Xd() {
      var dd, Od, md;
      return null !== (dd = (0, Wd.n)(null !== (Od = null === (md = (0, Fd.p)()) || void 0 === md ? void 0 : md.renderer) && void 0 !== Od ? Od : null, (0, Fd.l)())) && void 0 !== dd ? dd : "unknown"
    }

    function Kd(dd, Od, md, Wd, Fd) {
      const Xd = null === Od ? "untimed" : `${Math.round(Od)} ms`;
      return `frames stalled, ${md}, gpu ${(0,Rd.d)(Fd)}, blocking ${Xd}, drawn ${Math.round(dd)} ms apart, timers ${Wd.timers}, timer gap ${Math.round(Wd.longestGapMs)} ms`
    }
  },
  40634: (dd, Od, md) => {
    md.d(Od, {
      b: () => hd
    });
    var Wd = md(10092),
      Fd = md(38109),
      Rd = md(40638);
    const Xd = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      Kd = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function hd(dd, Od) {
      if (dd instanceof Fd.i) return {
        at: Xd[Od],
        code: 0
      };
      const md = (0, Wd.f)(dd),
        hd = "number" === typeof md ? md : 0;
      return null !== (0, Rd.f)(hd).name ? {
        at: "refused",
        code: hd
      } : {
        at: Kd[Od],
        code: hd
      }
    }
  },
  10092: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      f: () => Xd,
      h: () => Kd,
      i: () => vd,
      j: () => hd
    });
    var Wd = md(218),
      Fd = md(5294);

    function Rd(dd) {
      return Xd(dd) === Wd.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function Xd(dd) {
      return "object" === typeof dd && null !== dd ? dd.code : void 0
    }

    function Kd(dd) {
      var Od;
      return null !== (Od = Object.keys(Fd.e).find((Od => Fd.e[Od] === dd))) && void 0 !== Od ? Od : null
    }

    function hd(dd) {
      return "notWhitelisted" === dd ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const vd = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  35387: (dd, Od, md) => {
    function Wd(dd) {
      return String(dd).replace(/\d/g, (dd => String.fromCharCode(97 + Number(dd))))
    }
    md.d(Od, {
      d: () => Wd
    })
  },
  40638: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      f: () => hd,
      i: () => Xd,
      m: () => Fd
    });
    var Wd = md(218);

    function Fd(dd) {
      const Od = dd.endsWith(Wd.m);
      return {
        text: (Od ? dd.slice(0, -Wd.m.length) : dd) || null,
        dropsCache: Od
      }
    }
    const Rd = "Either your internet isn't working or this is a bug.";

    function Xd(dd, Od) {
      const md = hd(dd);
      return null !== md.name && "" === Wd.e[md.name].text && null !== Od ? Od : md.reason
    }
    const Kd = "You were removed from the game.";

    function hd(dd) {
      var Od;
      let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Fd = null !== (Od = Object.keys(Wd.e).find((Od => Wd.e[Od].code === dd))) && void 0 !== Od ? Od : null;
      if (null === Fd) return {
        code: dd,
        name: Fd,
        reason: null !== md && void 0 !== md ? md : `${Rd}\nCode: ${dd}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Xd,
        canReconnect: hd = !1
      } = Wd.e[Fd], vd = dd === Wd.e.outdatedVersion.code || dd === Wd.e.loadRecaptchaError.code;
      return {
        code: dd,
        name: Fd,
        reason: "" !== Xd ? Xd : null !== md && void 0 !== md ? md : dd === Wd.e.gameOrPluginKick.code ? Kd : `Code: ${dd}`,
        canReconnect: hd,
        automaticallyReconnect: dd === Wd.e.customGameUpdated.code || dd === Wd.e.duplicateLobbyNameError.code,
        requiresRefresh: vd
      }
    }
  },
  42609: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd,
      f: () => Qd,
      j: () => Xd,
      n: () => Fd,
      p: () => Kd,
      t: () => vd
    });
    class Wd extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Fd(dd) {
      return dd instanceof RangeError && /call stack/i.test(dd.message) || dd instanceof Error && "InternalError" === dd.name && /recursion/i.test(dd.message)
    }
    const Rd = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Xd(dd) {
      var Od;
      return dd instanceof WebAssembly.RuntimeError || dd instanceof Wd || Fd(dd) && Rd.test(null !== (Od = dd.stack) && void 0 !== Od ? Od : "")
    }

    function Kd(dd, Od) {
      if (Xd(dd)) throw dd;
      console.error(Od, dd)
    }

    function hd(dd, Od, md, Fd, Rd) {
      if (Od % Fd !== 0 || Od + md > dd.byteLength) throw new Wd(`${Rd}: ${md} bytes at ${Od}, ${Fd}-aligned, outside ${dd.byteLength} bytes of memory`)
    }

    function vd(dd, Od, md, Wd, Fd) {
      return 0 === md ? null : (hd(Od, md, Wd * dd.BYTES_PER_ELEMENT, dd.BYTES_PER_ELEMENT, Fd), new dd(Od, md, Wd))
    }

    function Qd(dd, Od, md, Wd, Fd) {
      return 0 === Od ? null : (hd(dd, Od, md, Wd, Fd), new DataView(dd, Od, md))
    }
  },
  42658: (dd, Od, md) => {
    md.d(Od, {
      $: () => HO,
      A: () => mO,
      E: () => FO,
      F: () => fd,
      I: () => hO,
      L: () => KO,
      N: () => RO,
      P: () => QO,
      S: () => wO,
      T: () => vO,
      V: () => XO,
      X: () => tO,
      _: () => rd,
      ab: () => TO,
      d: () => Vd,
      eb: () => Gd,
      f: () => aO,
      gb: () => nd,
      h: () => xO,
      i: () => bO,
      l: () => gO,
      p: () => qO,
      t: () => YO,
      w: () => pO,
      z: () => UO
    });
    var Wd = md(387),
      Fd = md(302),
      Rd = md(310),
      Xd = md(29),
      Kd = md(3903),
      hd = md(763),
      vd = md(5173),
      Qd = md(3876),
      td = md(4674),
      od = md(107),
      Nd = md(151),
      qd = md(382),
      Hd = md(46),
      yd = md(373),
      bd = md(132),
      Td = md(725),
      pd = md(364),
      Yd = md(145),
      gd = md(141),
      wd = md(5571),
      Ed = md(42661),
      Jd = md(1786),
      Ud = md(42663),
      xd = md(42665),
      Bd = md(35490),
      Sd = md(42673),
      sd = md(42677);
    const ud = "bloxd-webgpuOffAfterLoss",
      Vd = "context:webgl",
      Ad = "probe:threw";

    function rd(dd) {
      return dd.includes("Web page caused context loss and was blocked")
    }

    function Gd() {
      const dd = document.createElement("canvas");
      let Od = "";
      dd.addEventListener("webglcontextcreationerror", (dd => {
        Od = dd.statusMessage
      }));
      try {
        var md, Wd;
        null === (md = dd.getContext("webgl")) || void 0 === md || null === (Wd = md.getExtension("WEBGL_lose_context")) || void 0 === Wd || Wd.loseContext()
      } catch (Fd) {
        return String(Fd)
      }
      return Od
    }

    function nd(dd) {
      let Od;
      try {
        Od = dd.getContext("webgl", {
          powerPreference: Yd.d
        })
      } catch {
        Od = null
      }
      if (null === Od) return null;
      let md = null;
      try {
        const dd = Od.getParameter(Od.MAX_TEXTURE_SIZE);
        md = "number" === typeof dd && dd > 0 ? dd : null
      } catch {
        md = null
      }
      try {
        var Wd;
        null === (Wd = Od.getExtension("WEBGL_lose_context")) || void 0 === Wd || Wd.loseContext()
      } catch {}
      return md
    }
    const Ld = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);

    function Pd() {
      return "ios" === (0, od.getOperatingSystem)() ? "ios" : "other"
    }
    const zd = "mali_valhall",
      cd = new Set(["nvidia_pre_turing"]),
      jd = new Set(["intel_gen7_8"]),
      Dd = new Set(["powervr_rogue"]);

    function ed(dd, Od, md) {
      return Ld.has(dd) ? "android_arm" === dd && Od === zd && "mobileAndroid" !== md ? "webgpu_default" : "webgl_default" : null
    }

    function Id(dd) {
      return function(dd) {
        try {
          return dd()
        } catch {
          return null
        }
      }((() => {
        var Od, md, Wd, Xd;
        const Kd = null !== (Od = null === (md = dd.info) || void 0 === md ? void 0 : md.vendor) && void 0 !== Od ? Od : "";
        return "windows" === (0, od.getOperatingSystem)() && "" !== Kd && "intel" !== (0, od.normaliseGpuVendor)(Kd) ? null : ((0, od.seedGpuVendor)(Kd), ed((0, Fd.g)(), (0, Rd.g)(Kd, null !== (Wd = null === (Xd = dd.info) || void 0 === Xd ? void 0 : Xd.architecture) && void 0 !== Wd ? Wd : ""), Nd.siteUsed))
      }))
    }

    function ld() {
      var dd;
      return {
        gpu: null !== (dd = navigator.gpu) && void 0 !== dd ? dd : null,
        webgl2: Sd.h,
        webgl1: () => function(dd) {
          let Od, md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ed.b;
          try {
            Od = dd.getContext("webgl")
          } catch {
            Od = null
          }
          if (null === Od) return [Vd];
          const Wd = [];
          try {
            for (const Fd of md.extensions) null === Od.getExtension(Fd) && Wd.push(Fd);
            for (const [Fd, Rd] of Object.entries(md.limits)) {
              const dd = Od[Fd],
                md = "number" === typeof dd ? Od.getParameter(dd) : null;
              ("number" !== typeof md || md < Rd) && Wd.push(`limit:${Fd}`)
            }
            const dd = Od.getShaderPrecisionFormat(Od.VERTEX_SHADER, Od.HIGH_FLOAT);
            (null === dd || dd.precision < md.vertexHighFloatBits) && Wd.push("precision:vertex_high_float")
          } catch {
            Wd.push(Ad)
          }
          try {
            var Fd;
            null === (Fd = Od.getExtension("WEBGL_lose_context")) || void 0 === Fd || Fd.loseContext()
          } catch {}
          return Wd
        }(document.createElement("canvas")),
        webgl1First: () => Zd((() => function(dd, Od) {
          if ("chrome_os" !== dd) return !1;
          const md = Od();
          return null !== md && Dd.has((0, Rd.j)(md.vendor, md.renderer))
        }((0, od.getOperatingSystem)(), Yd.A))),
        offAfterLoss: dd => Zd((() => dd ? (0, yd.J)() : Xd.e.isWebGpuOffAfterLoss())),
        fewWasmMemories: pd.h,
        oldIntelDriver: dd => Zd((() => (0, bd.c)(dd))),
        intelGen9: dd => Zd((() => (0, bd.o)(dd))),
        storeIntelGen9Verdict: dd => {
          Hd.k.setItem(bd.F, dd)
        },
        gpuClassWebGlArm: Id,
        storeGpuClassVerdict: dd => {
          Hd.k.setItem(bd.C, dd)
        },
        gpuClassOnWebGl: dd => (0, Td.b)(dd),
        webGlDefaultFamily: dd => jd.has((0, Rd.g)(dd.vendor, dd.architecture)),
        storeWebGlDefaultFamilyVerdict: dd => {
          Hd.k.setItem(bd.P, dd)
        },
        override: () => Cd(),
        claimed: () => kd((0, hd.k)()),
        webGpuSetting: () => {
          const dd = Hd.k.getItem(Wd.kc);
          return "boolean" === typeof dd ? dd : null
        },
        heldBack: () => Td.e,
        storeHoldbackSpared: dd => {
          Hd.k.setItem(bd.A, dd)
        },
        intelGen9OnWebGl: () => Td.f,
        Jq: () => Zd((() => (0, td.e)(od.featureFlags.settings.canUseShaderPacks))),
        windows: () => Zd((() => "windows" === (0, od.getOperatingSystem)())),
        defaultCompatibility: Bd.b
      }
    }

    function Cd() {
      let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, Kd.o)("render") && "webgl1" === (0, Kd.m)("renderer")) return "webgl1";
      const Od = [() => new URLSearchParams(window.location.search).get(Qd.b), () => Hd.k.getItem(Qd.d), () => {
        const Od = localStorage.getItem(ud);
        return null !== Od && dd && localStorage.removeItem(ud), "1" === Od ? "webgl2" : null
      }];
      for (const md of Od) {
        let dd = null;
        try {
          dd = kd(md())
        } catch {}
        if (null !== dd) return dd
      }
      return null
    }

    function Zd(dd) {
      try {
        return dd()
      } catch {
        return !1
      }
    }

    function kd(dd) {
      return "lite" === dd ? "webgpu" : "webgl2" === dd || "babylon" === dd ? "webgl" : null
    }

    function fd(dd) {
      return "none" === dd || "compatibility_mode" === dd
    }
    async function Md() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ld();
      const Od = await async function(dd) {
        const Od = OO(dd),
          {
            source: md
          } = Od,
          Wd = !Od.asked,
          Fd = "gpu" in Od && Od.heldBack,
          Xd = function(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return Fd && !fd(dd) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: md
            } : {
              reason: dd,
              adapter: Od,
              source: md
            }
          };
        if (!("gpu" in Od)) return Xd(Od.refused);
        let Kd;
        try {
          Kd = await (0, Jd.k)((0, gd.o)(Od.gpu, {
            compatibility: dO(dd, Od)
          }), EO, `requestAdapter didn't settle in ${EO/1e3} s`)
        } catch {
          return Xd("adapter_error")
        }
        if ("string" === typeof Kd) return Xd(Kd);
        const {
          adapter: hd,
          compatibility: vd
        } = Kd, Qd = (0, gd.d)(hd);
        if ((0, gd.k)(hd)) return Xd("software_adapter", Qd);
        const td = dd.windows() && function(dd) {
          return cd.has((0, Rd.g)(dd.vendor, dd.architecture))
        }(Qd);
        if (dd.storeHoldbackSpared(td), Fd && !td) return Xd("webgl_holdback");
        const od = dd.intelGen9(hd);
        dd.storeIntelGen9Verdict(od);
        const Nd = od ? null : dd.gpuClassWebGlArm(hd);
        dd.storeGpuClassVerdict(null !== Nd && void 0 !== Nd && Nd);
        const qd = dd.webGlDefaultFamily(Qd);
        if (dd.storeWebGlDefaultFamilyVerdict(qd), Wd && dd.oldIntelDriver(hd)) return Xd("old_intel_driver", Qd);
        if ("default" === md && od && dd.intelGen9OnWebGl()) return Xd("intel_gen9", Qd);
        if ("default" === md && null !== Nd && dd.gpuClassOnWebGl(Nd)) return Xd("gpu_class_webgl", Qd);
        if ("default" === md && qd) return Xd("gpu_wasm_arm", Qd);
        return Xd(vd ? "compatibility_mode" : "none", Qd)
      }(dd);
      if (fd(Od.reason)) return {
        backend: "webgpu",
        ...Od
      };
      const md = "webgl1" === dd.override(),
        Wd = "not_requested" === Od.reason && ("override" === Od.source || "claim" === Od.source),
        Fd = !md && !Wd && dd.webgl1First();
      if (!md && !Fd && dd.webgl2()) return {
        backend: "webgl",
        ...Od
      };
      const Xd = dd.webgl1();
      return 0 === Xd.length ? {
        backend: "webgl1",
        ...Od
      } : Fd && dd.webgl2() ? {
        backend: "webgl",
        ...Od
      } : {
        missing: Xd
      }
    }

    function dO(dd, Od) {
      let {
        source: md,
        asked: Wd
      } = Od;
      return Wd || "default" === md ? (0, Bd.e)(Wd, dd.defaultCompatibility) : void 0
    }

    function OO(dd) {
      const Od = dd.override(),
        md = dd.webGpuSetting(),
        Wd = null === Od && !0 !== md && dd.Jq(),
        Fd = null !== Od || null !== md || Wd ? null : dd.claimed(),
        Rd = null !== Od ? "override" : !0 === md ? "setting" : Wd ? "pack" : !1 === md ? "setting" : null !== Fd ? "claim" : "default",
        Xd = function(dd) {
          return "override" === dd || "setting" === dd
        }(Rd);
      if ("webgl" === Od || "webgl1" === Od || "webgl" === Fd || "setting" === Rd && !1 === md) return {
        source: Rd,
        asked: Xd,
        refused: "not_requested"
      };
      if (!dd.gpu) return {
        source: Rd,
        asked: Xd,
        refused: "no_webgpu_api"
      };
      const Kd = "default" === Rd && dd.heldBack();
      if (Kd && !dd.windows()) return {
        source: Rd,
        asked: Xd,
        refused: "webgl_holdback"
      };
      const hd = Xd ? null : dd.offAfterLoss("pack" === Rd) ? "off_after_loss" : dd.fewWasmMemories() ? "few_wasm_memories" : null;
      return null !== hd ? {
        source: Rd,
        asked: Xd,
        refused: Kd ? "webgl_holdback" : hd
      } : {
        source: Rd,
        asked: Xd,
        heldBack: Kd,
        gpu: dd.gpu
      }
    }

    function mO() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...ld(),
          override: () => Cd(!1)
        },
        Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : od.isWebKit,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pd;
      try {
        if (!Od()) return !1;
        const Wd = OO(dd);
        if (!("gpu" in Wd) || Wd.heldBack) return !1;
        const Fd = "default" === Wd.source ? ed(md(), "apple", Nd.siteUsed) : null;
        return null === Fd || !dd.gpuClassOnWebGl(Fd)
      } catch (Wd) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", Wd), !1
      }
    }
    let WO = !1;
    async function FO(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ld();
      if (null === dd) return null;
      const md = await Md(Od);
      return WO = !("missing" in md) && "webgpu" === md.backend && "claim" === md.source, "missing" in md ? md : {
        ...md,
        load: dd[md.backend]
      }
    }
    async function RO(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ld().gpu,
        Wd = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== dd.backend) return !1;
      const Fd = NO(dd, Od, "indirectDraws", "off", "on");
      if (null !== Fd) return Fd;
      if (null !== dd.adapter && (0, bd.q)(dd.adapter, Wd)) return !0;
      if (null === md) return !1;
      try {
        var Rd;
        const dd = await (0, Jd.k)(md.requestAdapter({
          powerPreference: "low-power"
        }).then((async dd => (null !== dd && await (0, gd.g)(dd), dd))), EO, `the low-power requestAdapter didn't settle in ${EO/1e3} s`);
        return (0, bd.q)(null !== (Rd = null === dd || void 0 === dd ? void 0 : dd.info) && void 0 !== Rd ? Rd : {}, Wd)
      } catch (Xd) {
        return Xd instanceof Jd.f
      }
    }

    function XO(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, od.pageOperatingSystem)();
      if ("webgpu" !== dd.backend) return !1;
      const Fd = NO(dd, Od, "terrainFetch", "texture", "storage");
      return null !== Fd ? Fd : null !== dd.adapter && ((0, bd.j)(dd.adapter, md) || (0, bd.f)(dd.adapter, Wd))
    }

    function KO(dd, Od) {
      if ("webgpu" !== dd.backend) return !1;
      const md = NO(dd, Od, "skyOrder", "early", "last");
      return null !== md ? md : null !== dd.adapter && (0, Rd.g)(dd.adapter.vendor, dd.adapter.architecture) === zd
    }

    function hO(dd, Od) {
      if ("webgpu" !== dd.backend) return !1;
      const md = NO(dd, Od, "uploadCopies", "off", "on");
      return null !== md ? md : null !== dd.adapter && "powervr_rogue" === (0, Rd.g)(dd.adapter.vendor, dd.adapter.architecture)
    }

    function vO(dd, Od, md) {
      if ("webgpu" !== dd.backend) return !1;
      const Wd = NO(dd, Od, "sceneDepth", "off", "on");
      return null !== Wd ? Wd : null !== dd.adapter && (0, bd.k)(dd.adapter, md)
    }

    function QO(dd, Od) {
      return "webgl" === dd.backend ? NO(dd, Od, "instancedTerrain", "1", "0") : null
    }

    function tO(dd, Od) {
      return "webgpu" !== dd.backend || Od && (null === dd.adapter || !(0, yd.N)(dd.adapter))
    }

    function oO(dd, Od, md, Wd) {
      const Fd = new URLSearchParams(Od).get(md),
        Rd = null !== Fd && void 0 !== Fd ? Fd : null === dd ? null : (0, hd.g)(md);
      return null !== Rd && Wd(Rd) ? (WO ||= null === Fd && "webgpu" === (null === dd || void 0 === dd ? void 0 : dd.backend), Rd) : null
    }

    function NO(dd, Od, md, Wd, Fd) {
      const Rd = oO(dd, Od, md, (dd => dd === Wd || dd === Fd));
      return null === Rd ? null : Rd === Wd
    }

    function qO(dd) {
      return null !== dd && "missing" in dd
    }

    function HO(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !TO(),
        md = arguments.length > 2 ? arguments[2] : void 0;
      return Od ? function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xd.e,
          md = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const Wd = "start_failed" === dd || "pipeline_failed" === dd,
            Fd = (0, sd.j)(dd, md),
            Rd = Od.turnOffWebGpuAfterDeviceLoss(Wd ? "visible" : (0, yd.g)((0, qd.i)()), Wd, Fd);
          return WO && (0, hd.u)("webgpuLoss"), Od.isWebGpuOffAfterLoss() && "webgpu" === kd(Hd.k.getItem(Qd.d)) && Hd.k.removeItem(Qd.d), (0, Kd.o)("webgpuloss") && (0, vd.e)((Od => {
            var md;
            Od.noteWebGpuLoss("wasm", Rd ? dd : `${dd}, which storage didn't keep`, null !== (md = Fd.message) && void 0 !== md ? md : null)
          })), Rd
        } catch {
          return !1
        }
      }(dd, Xd.e, md) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const yO = "framePacing";

    function bO(dd, Od) {
      const md = oO("webgpu" === (null === Od || void 0 === Od ? void 0 : Od.backend) ? Od : null, dd, yO, (dd => /^\d{1,9}$/.test(dd)));
      return null === md ? void 0 : Number(md)
    }

    function TO() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === kd(new URLSearchParams(dd).get(Qd.b))
      } catch {
        return !1
      }
    }

    function pO(dd) {
      return !!YO(dd) || dd instanceof Error && !(dd instanceof WebAssembly.RuntimeError) && dd.message.startsWith(`${wd.p.RenderSurfaceUnusable}:`)
    }

    function YO(dd) {
      const {
        name: Od,
        message: md
      } = null !== dd && void 0 !== dd ? dd : {};
      return "InvalidStateError" === Od && "string" === typeof md && md.startsWith("GPUDevice.")
    }

    function gO(dd) {
      const Od = dd;
      return "function" === typeof Od.fFd && "function" === typeof Od.MFd ? Od : null
    }

    function wO(dd) {
      return "function" === typeof dd.qb ? dd : null
    }
    const aO = "openRenderer";
    const EO = 5e3,
      JO = 15e3;

    function UO(dd, Od, md, Wd, Fd, Rd) {
      return (0, Jd.k)(function(dd, Od, md, Wd, Fd, Rd) {
        const Xd = (0, Ud.f)(dd, Od, (() => dd.qb(md, Wd, Fd, Rd.indirectHangs, Rd.storagePullBreaks, Rd.splitPassBreaks, Rd.earlySky, Rd.instancedTerrain, Rd.cellLight, Rd.framesAhead, Rd.webGpuRestores, Rd.bufferCopiesCrash))),
          {
            firstVertex: Kd
          } = Rd;
        return void 0 === Kd ? Xd : Xd.then((dd => ((0, xd.d)(md, Kd), dd)))
      }(dd, Od, md, Wd, Fd, Rd), JO, `${wd.p.RenderSurfaceUnusable}: the renderer didn't open in ${JO/1e3} s`, BO)
    }
    async function xO(dd, Od, md, Wd, Fd, Rd) {
      if ("function" !== typeof dd.DFd) throw new Error("this core has no set_renderer");
      const Xd = await UO(Od, aO, md, Fd, Wd, Rd);
      try {
        dd.DFd(Xd)
      } catch (Kd) {
        throw BO(Xd), Kd
      }
    }

    function BO(dd) {
      try {
        dd.free()
      } catch {}
    }
  },
  42804: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    const Wd = {
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
  42713: (dd, Od, md) => {
    md.d(Od, {
      b: () => qd,
      d: () => Hd,
      f: () => od,
      g: () => td
    });
    const Wd = 2e3,
      Fd = "unavailable";
    let Rd = () => Promise.resolve().then((() => md(1922))),
      Xd = null,
      Kd = null,
      hd = vd();

    function vd() {
      let dd = () => {};
      return {
        promise: new Promise((Od => {
          dd = () => {
            Od(null)
          }
        })),
        resolve: dd
      }
    }

    function Qd() {
      if (null === Xd) {
        const dd = Rd();
        Xd = dd, dd.then((Od => {
          Xd === dd && (Kd = Od)
        }), (() => {
          Xd === dd && (Xd = null)
        }))
      }
      return Xd
    }

    function td() {
      Qd().catch((() => {}))
    }

    function od() {
      hd.resolve()
    }

    function Nd(dd, Od, md, Wd) {
      if (null === dd) return {
        errorKind: Od,
        fingerprint: Fd,
        dedupe: `${Od}|${Wd}`
      };
      const {
        fingerprint: Rd
      } = dd.clientErrorKey(Od, md, Wd);
      return {
        errorKind: Od,
        fingerprint: Rd,
        dedupe: Rd
      }
    }

    function qd(dd, Od, md, Wd) {
      return null === Kd ? Wd ? (td(), Nd(null, dd, Od, md)) : null : Nd(Kd, dd, Od, md)
    }
    async function Hd(dd, Od, md) {
      let Fd;
      const Rd = new Promise((dd => {
        Fd = setTimeout((() => {
          dd(null)
        }), Wd)
      }));
      try {
        return Nd(await Promise.race([Qd(), Rd, hd.promise]), dd, Od, md)
      } catch {
        return Nd(null, dd, Od, md)
      } finally {
        clearTimeout(Fd)
      }
    }
  },
  42709: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      BUILT_IN_ANIMATIONS_SITE: () => mO,
      CAMERA_DIRECTOR_SITE: () => hO,
      CORE_ERRORS_SITE: () => ed,
      EVENT_OVERFLOW_SITE: () => OO,
      FIRST_VIEW_SITE: () => RO,
      GraphicsLostError: () => Rm,
      JOIN_SITE: () => ld,
      LEAVE_SITE: () => Cd,
      MAIN_THREAD_SITE: () => XO,
      MODEL_FEED_SITE: () => Zd,
      MODEL_POOL_SITE: () => kd,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => tO,
      NON_FATAL_REPORTS_PER_SESSION: () => SO,
      PREVIEW_ANIMATIONS_SITE: () => dO,
      RENDER_RELOAD_SITE: () => Md,
      REQUEST_DEVICE_SITE: () => KO,
      TEXTURE_NAMES_SITE: () => fd,
      TEXTURE_PACK_FEED_SITE: () => WO,
      TEXTURE_PACK_SWAP_SITE: () => FO,
      TurnstilePageError: () => bm,
      WASM_LOAD_SITE: () => Id,
      countRenderLost: () => dW,
      crashError: () => rO,
      crashReportsSettled: () => IO,
      deviceLossFields: () => fO,
      deviceLossWords: () => Zm,
      flushCrashReports: () => DO,
      joinFailureCode: () => Tm,
      loadRecoveryCode: () => tm,
      lokiTransport: () => qO,
      modelFailureCode: () => Jm,
      readTrap: () => Om,
      renderLoss: () => Mm,
      renderReloadMessage: () => km,
      reportCameraDirectorFault: () => em,
      reportCoreErrors: () => ZO,
      reportCrash: () => GO,
      reportDataLoadFailure: () => XW,
      reportDisconnect: () => am,
      reportDroppedRequiredLimits: () => Nm,
      reportEventOverflow: () => Vm,
      reportFirstViewNoTerrain: () => Pm,
      reportFirstViewUnshown: () => zm,
      reportLightFault: () => rm,
      reportLoadRecovery: () => om,
      reportLoadReload: () => Hm,
      reportMainStall: () => cm,
      reportMemoryShed: () => nm,
      reportModelFailure: () => Um,
      reportModelPoolFailure: () => xm,
      reportModelsModuleRetry: () => Bm,
      reportNoBackendRetry: () => hm,
      reportPageJoinFailure: () => Ym,
      reportReconnectGaveUp: () => Em,
      reportRenderRecovery: () => zO,
      reportRenderReload: () => WW,
      reportReplayFault: () => Dm,
      reportStaleBuildReload: () => hW,
      reportStoppedCore: () => Wm,
      reportTerrainTextureFailure: () => FW,
      reportTexturePackFeedLoadFailure: () => sm,
      reportTexturePackKeptOut: () => um,
      reportUnstreamedCoreLoad: () => ym,
      reportUnusedSeat: () => wm,
      reportWorkerLost: () => im,
      reportWorkerStartTimeout: () => jm,
      reportWorldgenGaveUp: () => Gm,
      reportWorldgenLoadFailure: () => Sm,
      reportWorldgenWorkerLost: () => Am,
      resetCrashReports: () => lO,
      setCrashAdPreload: () => aO,
      setCrashBackend: () => wO,
      setCrashScreen: () => pO,
      setCrashTransport: () => bO,
      showCrash: () => mm,
      showJoinFailure: () => pm,
      showUnsupported: () => Xm,
      unknownSkyWords: () => CO,
      unsupportedCrashScreen: () => Km,
      warmCrashCounts: () => LO
    });
    var Wd = md(1122),
      Fd = md(1424),
      Rd = md(202),
      Xd = md(1415),
      Kd = md(1368),
      hd = md(310),
      vd = md(1925),
      Qd = md(4948),
      td = md(42713),
      od = md(5568),
      Nd = md(42721),
      qd = md(35387),
      Hd = md(2482),
      yd = md(35381),
      bd = md(5064),
      Td = md(151),
      pd = md(145),
      Yd = md(2484),
      gd = md(38109),
      wd = md(1786),
      Ed = md(42733),
      Jd = md(42743),
      Ud = md(42552),
      xd = md(42758),
      Bd = md(42761),
      Sd = md(38102),
      sd = md(2421),
      ud = md(2425),
      Vd = md(42772),
      Ad = md(42751),
      rd = md(42797),
      Gd = md(38397),
      nd = md(732),
      Ld = md(4447),
      Pd = md(37644),
      zd = md(42663),
      cd = md(37659),
      jd = md(42807);
    const Dd = "[bloxd-wasm-client]",
      ed = "coreErrors",
      Id = "wasmLoad",
      ld = "join",
      Cd = "leave",
      Zd = "modelFeed",
      kd = "modelWorkerPool",
      fd = "textureNames",
      Md = "renderReload",
      dO = "previewAnimations",
      OO = "eventOverflow",
      mO = "builtInAnimations",
      WO = "texturePackFeed",
      FO = "texturePackSwap",
      RO = "firstView",
      XO = "mainThread",
      KO = "requestDevice",
      hO = "cameraDirector",
      vO = 300,
      QO = 64,
      tO = 8;
    let oO = 0;
    const NO = new Set,
      qO = (dd, Od) => {
        const md = EO[dd.kind],
          Wd = {
            backend: YO,
            adPreload: gO
          };
        if (null === md) return void HO(dd, Od, Wd, null);
        const Fd = (0, td.b)(md, dd.message, dd.code, dd.fatal);
        null === Fd ? jO("Loki", (async () => {
          HO(dd, Od, Wd, await (0, td.d)(md, dd.message, dd.code))
        })) : HO(dd, Od, Wd, Fd)
      };

    function HO(dd, Od, md, Wd) {
      let {
        backend: Fd,
        adPreload: Rd
      } = md;
      const {
        kind: Xd,
        code: hd,
        site: Qd,
        fatal: td,
        details: od
      } = dd;
      if (!td)
        if (null === Wd || (0, vd.d)(Wd.errorKind) || NO.has(Wd.dedupe)) {
          if (oO >= tO) return;
          oO++
        } else NO.add(Wd.dedupe);
      const Nd = {
        ...od,
        kind: Xd,
        code: hd,
        site: Qd,
        fatal: String(td),
        backend: Fd
      };
      Rd && (Nd.adPreload = "true"), null !== Wd && (Nd.errorKind = Wd.errorKind, Nd.fingerprint = Wd.fingerprint), Od instanceof Error && "string" === typeof Od.stack && (Nd.causeStack = Od.stack.slice(0, 2e3)), (0, Kd.rH)(rO(dd, Od), Nd)
    }
    let yO = qO;

    function bO(dd) {
      const Od = yO;
      return yO = dd, Od
    }
    let TO = () => {};

    function pO(dd) {
      const Od = TO;
      return TO = dd, Od
    }
    let YO = "unpicked",
      gO = !1;

    function wO(dd) {
      YO = dd
    }

    function aO(dd) {
      gO = dd
    }
    const EO = {
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
      JO = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        viewUnshown: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      UO = new Set(["unstreamedLoad"]),
      xO = new Set(["linkCensus", "linksReadAfterView"]);
    let BO = !1;
    const SO = 20,
      sO = new Map;
    let uO = 0,
      VO = 0;
    const iO = new Set,
      AO = new Set;

    function rO(dd, Od) {
      const md = Object.assign(new Error(`${dd.code}: ${dd.message}`), {
        name: "WasmClientCrash",
        cause: null !== Od && void 0 !== Od ? Od : void 0
      });
      return Od instanceof Error && Od.stack && (md.stack = Od.stack), md
    }

    function GO(dd) {
      var Od, Wd;
      const {
        kind: Fd,
        code: Rd,
        site: Xd,
        fatal: Kd,
        message: hd,
        error: vd
      } = dd, Qd = !1 !== dd.toTransport && !UO.has(Fd), td = !Kd && Qd && !xO.has(Fd), od = {
        kind: Fd,
        code: Rd,
        site: Xd,
        fatal: Kd,
        message: hd,
        details: null !== (Od = dd.details) && void 0 !== Od ? Od : {}
      }, Nd = `${Rd}@${Xd}${void 0===dd.instance?"":`#${dd.instance}`}${Kd?"!":""}`, qd = (null !== (Wd = sO.get(Nd)) && void 0 !== Wd ? Wd : 0) + 1;
      if (sO.set(Nd, qd), void 0 !== dd.countAs && 1 === qd && PO(dd.countAs), qd > 1 ? 0 === (qd & qd - 1) && cO((() => {
          console.warn(`${Dd} ${Rd} at ${Xd} reported ${qd} times`)
        })) : td && uO >= SO ? cO((() => {
          console.warn(`${Dd} ${Fd} ${Rd} at ${Xd}: ${hd} (not sent: the session's ${SO} went)`, od.details, null !== vd && void 0 !== vd ? vd : "")
        })) : (td && uO++, function(dd, Od, Wd, Fd) {
          var Rd, Xd;
          const {
            kind: Kd,
            code: hd,
            site: vd,
            fatal: Qd,
            message: td,
            details: od
          } = dd;
          cO((() => {
            (Qd ? console.error : console.warn)(`${Dd} ${Kd} ${hd} at ${vd}: ${td}`, od, null !== Od && void 0 !== Od ? Od : "")
          }));
          const Nd = JO[Kd],
            qd = null !== (Rd = null !== (Xd = EO[Kd]) && void 0 !== Xd ? Xd : Nd) && void 0 !== Rd ? Rd : null;
          Fd || null === qd || nO((async () => {
            const {
              reportCappedWasmFailure: Od,
              reportUncappedWasmFailure: Wd,
              reportWasmFailure: Fd
            } = await md.e(218).then((() => md(35375))), Rd = xO.has(Kd) ? Wd : void 0 === Nd ? Fd : Od, Xd = function(dd) {
              let {
                kind: Od,
                site: md,
                fatal: Wd,
                details: Fd
              } = dd;
              if ("crash" !== Od) return;
              return {
                ...Fd,
                site: md,
                fatal: String(Wd)
              }
            }(dd);
            void 0 === Xd ? Rd(qd, td, hd) : Rd(qd, td, hd, Xd)
          }));
          Wd && cO((() => {
            yO(dd, Od)
          }))
        }(od, vd, Qd, void 0 !== dd.countAs)), Kd) {
        var Hd;
        const Od = null !== (Hd = dd.screen) && void 0 !== Hd ? Hd : {
          text: (0, Gd.f)(od, !0),
          reload: !0,
          stillBlocked: null
        };
        cO((() => {
          TO(Od)
        }))
      }
      return od
    }

    function nO(dd) {
      jO("counts", (async () => {
        const {
          peekVisitSessionId: Od
        } = await Promise.resolve().then((() => md(747)));
        null !== Od() && (await dd(), BO = !0)
      }))
    }

    function LO() {
      Promise.all([Promise.resolve().then((() => md(747))), md.e(218).then((() => md(35375)))]).catch((dd => {
        console.warn(`${Dd} the counts' modules didn't load ahead`, dd)
      }))
    }

    function PO(dd) {
      iO.has(dd.errorKind) || (iO.add(dd.errorKind), nO((async () => {
        const {
          reportClientError: Od
        } = await Promise.resolve().then((() => md(1916)));
        Od(dd.errorKind, dd.error, dd.code, !0, void 0, dd.fields)
      })))
    }

    function zO(dd, Od) {
      jO("render_lost", (async () => {
        const [{
          reportClientError: Wd
        }, {
          CAPPED_COUNTS_VISIT_CAP: Fd
        }] = await Promise.all([Promise.resolve().then((() => md(1916))), md.e(218).then((() => md(35375)))]);
        Wd("render_lost", Od, dd, !0, Fd)
      }))
    }

    function cO(dd) {
      try {
        dd()
      } catch (Od) {
        try {
          console.warn(`${Dd} could not send a report`, Od)
        } catch {}
      }
    }

    function jO(dd, Od) {
      try {
        const md = Od().catch((Od => {
          console.warn(`${Dd} could not send the report to ${dd}`, Od)
        })).finally((() => {
          AO.delete(md)
        }));
        AO.add(md)
      } catch (md) {
        console.warn(`${Dd} could not send the report to ${dd}`, md)
      }
    }
    async function DO(dd) {
      let Od;
      (0, td.f)();
      const md = new Promise((md => {
        Od = setTimeout(md, dd)
      }));
      await Promise.race([eO(), md]), clearTimeout(Od)
    }
    async function eO() {
      if (await Promise.allSettled([...AO]), BO) try {
        const {
          flushClientAnalyticsEvents: dd
        } = await Promise.resolve().then((() => md(1620)));
        await dd()
      } catch (dd) {
        console.warn(`${Dd} could not send the counts`, dd)
      }
    }
    async function IO() {
      for (; AO.size > 0;) await Promise.allSettled([...AO])
    }

    function lO() {
      sO.clear(), uO = 0, BO = !1, oO = 0, NO.clear(), VO = 0, iO.clear(), (0, Nd.t)()
    }

    function CO(dd) {
      const Od = "object" === typeof dd && null !== dd ? dd.type : dd;
      return "string" !== typeof Od ? "sky not named" : `sky ${JSON.stringify(Array.from(Od).slice(0,QO).join(""))}`
    }

    function ZO(dd, Od, md, Wd) {
      VO += Od;
      for (const {
          code: Kd,
          detail: hd
        }
        of dd) {
        var Fd, Rd, Xd;
        const dd = (0, od.ae)(Kd),
          Od = (0, Nd.h)(Kd, hd),
          vd = Od ? "CORE-RenderLinkPending" : `CORE-${dd}`,
          Qd = (0, Nd.d)(Kd, hd),
          td = null === Wd || void 0 === Wd ? void 0 : Wd(Kd, hd),
          Hd = void 0 !== (null === Qd || void 0 === Qd ? void 0 : Qd.gpuDetails),
          yd = Hd ? null === (Fd = (0, pd.y)()) || void 0 === Fd ? void 0 : Fd.renderer : void 0,
          bd = Hd ? ` ${(0,Nd.m)()}` : "",
          Td = Array.from([yd && `gpu ${(0,qd.d)(yd)}`, td].filter(Boolean).join("; ")).slice(0, vO).join(""),
          Yd = `core error ${dd}${null!==(Rd=null===Qd||void 0===Qd?void 0:Qd.words)&&void 0!==Rd?Rd:""}${bd}${Td?`: ${Td}`:""}`,
          gd = {
            errorCode: String(Kd),
            detail: String(hd),
            droppedBefore: String(VO),
            wasmBuild: md.wasm,
            clientVersion: md.client,
            ...null === Qd || void 0 === Qd ? void 0 : Qd.gpuDetails,
            ...fO(Kd, hd)
          };
        null !== Qd && (0, Nd.s)(Qd) ? cO((() => {
          console.warn(`${Dd} coreError ${vd}: ${Yd} (not sent: the session's render warnings of its kind went)`, gd)
        })) : kO(Kd) ? cO((() => {
          console.warn(`${Dd} coreError ${vd}: ${Yd} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, gd)
        })) : GO({
          kind: Od ? "recovered" : dm(Kd, hd),
          code: vd,
          site: ed,
          fatal: !1,
          message: Yd,
          details: gd,
          instance: null !== (Xd = null === Qd || void 0 === Qd ? void 0 : Qd.instance) && void 0 !== Xd ? Xd : MO(Kd, hd)
        })
      }
    }

    function kO(dd) {
      if (dd !== od.F.AudioUnknownSound && dd !== od.F.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: Od,
        lobbyName: md
      } = (0, Xd.b)();
      return null !== Od && (!!(0, Wd.k)(Od) || dd === od.F.AudioUnknownSound && (0, Fd.i)(Od, md))
    }

    function fO(dd, Od) {
      if (dd !== od.F.RenderDeviceLost) return;
      const md = Od >>> od.O.LINKS_IN_FLIGHT_SHIFT & od.O.LINKS_IN_FLIGHT_MAX,
        Wd = Od >>> od.O.OLDEST_LINK_SHIFT & od.O.OLDEST_LINK_MAX;
      return {
        linksInFlight: String(md),
        oldestLinkMs: String(Wd * od.O.OLDEST_LINK_UNIT_MS)
      }
    }

    function MO(dd, Od) {
      return dd === od.F.RenderDeviceLost && 0 !== (Od & od.O.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function dm(dd, Od) {
      return dd === od.F.JobsHeapGaveUp ? "meshHeap" : (0, Nd.k)(dd, Od) ? "linksReadAfterView" : (0, Nd.g)(dd, Od) ? "linkCensus" : "coreError"
    }

    function Om(dd) {
      return (0, Pd.m)(dd instanceof zd.e ? dd.trap : dd, sd.B, sd.hb)
    }

    function mm(dd, Od, md) {
      return Fm(dd, Od, md, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function Wm(dd, Od, md) {
      return Fm(dd, Od, md, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function Fm(dd, Od, md, Wd, Fd) {
      let {
        memoryDetails: Rd = {},
        memoryStep: Xd
      } = Wd;
      const {
        code: Kd,
        details: hd,
        message: vd
      } = (0, Ed.I)(dd, Od), Qd = [];
      Object.assign(hd, (0, cd.e)(dd.error)), null !== md && (hd.trapKind = md.kind, null !== md.panic && (hd.panic = (0, Pd.l)(md.panic)), md.refusedBytes > 0 && (hd.refusedAllocation = String(md.refusedBytes)), Qd.push((0, Pd.q)(md.kind, md.refusedBytes))), void 0 !== Xd && Qd.push(`memory=${Xd}`);
      const td = dd.error instanceof Rm;
      return td && (0, nd.F)(), GO({
        kind: "crash",
        code: Kd,
        site: dd.site,
        fatal: Fd,
        message: [...Qd, vd].join("; "),
        details: {
          ...hd,
          ...Rd,
          ...void 0 === Xd ? {} : {
            memoryStep: Xd
          }
        },
        error: dd.error,
        screen: td ? Km("graphicsLost") : void 0
      })
    }
    class Rm extends Error {}

    function Xm(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return "download" !== dd && (0, nd.F)(), GO({
        kind: "unsupported",
        code: Od,
        site: Id,
        fatal: !0,
        message: md,
        details: {
          ...Wd,
          cause: dd,
          status: Od
        },
        screen: Km(dd)
      })
    }

    function Km(dd) {
      const Od = (0, Rd.q)(Td.siteUsed),
        md = (0, Gd.v)(dd, Od),
        Wd = "noContext" === dd || "graphicsLost" === dd ? (0, Gd.o)(dd, Od) : null;
      return {
        text: md,
        reload: "general:tryAgain" === md.confirm,
        stillBlocked: Wd
      }
    }

    function hm(dd, Od, md) {
      return GO({
        kind: "recovered",
        code: "reprobed" === dd ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: Id,
        fatal: !1,
        message: md,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: Od,
          step: dd
        }
      })
    }
    const Qm = 9;

    function tm(dd) {
      const Od = "recovered" === dd.outcome ? "recovered" : "gave_up",
        md = "load" === dd.step ? `wasm_load_${Od}${dd.oom?"_oom":""}` : `no_context_${Od}`;
      return "recovered" === dd.outcome ? `${md}_t${Math.min(dd.tries,Qm)}` : "load" === dd.step ? `${md}_${dd.stage}` : md
    }

    function om(dd) {
      const {
        step: Od,
        outcome: md,
        tries: Wd,
        detail: Fd,
        details: Rd = {}
      } = dd, Xd = "load" === dd.step ? {
        stage: dd.stage,
        ...dd.oom ? {
          oom: "true"
        } : {}
      } : {};
      return GO({
        kind: "recovered",
        code: tm(dd),
        site: Id,
        fatal: !1,
        message: Fd,
        details: {
          ...Rd,
          step: Od,
          outcome: md,
          tries: String(Wd),
          ...Xd
        }
      })
    }

    function Nm(dd) {
      return GO({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: KO,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: dd.join(",")
        }
      })
    }
    const qm = "reload=wasm";

    function Hm(dd, Od, md) {
      return GO({
        kind: "unsupported",
        code: Od,
        site: Id,
        fatal: !1,
        message: [qm, md].join("; "),
        details: {
          cause: dd,
          status: Od,
          fallback: "wasmReload"
        }
      })
    }

    function ym() {
      const {
        code: dd,
        message: Od
      } = Ld.c;
      return GO({
        kind: "unstreamedLoad",
        code: dd,
        site: Id,
        fatal: !1,
        message: Od
      })
    }
    class bm extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function Tm(dd) {
      return dd instanceof xd.n ? 0 === dd.code ? "JOIN-matchmake" : `JOIN-${dd.code}` : dd instanceof xd.e ? 0 === dd.code ? `JOIN-${dd.stage}` : `JOIN-${dd.stage}-${dd.code}` : dd instanceof Ud.e ? "JOIN-gameCode" : dd instanceof bm ? "JOIN-turnstilePage" : dd instanceof xd.v ? "JOIN-trafficCheck" : dd instanceof gd.i ? "JOIN-timeout" : "JOIN-network"
    }

    function pm(dd, Od) {
      const md = (0, cd.h)(dd),
        Wd = {
          wasmBuild: Od.wasm,
          clientVersion: Od.client
        },
        Fd = dd instanceof bm ? {
          text: (0, Gd.q)(),
          reload: !1,
          stillBlocked: null
        } : void 0,
        Rd = (0, Bd.f)(dd),
        Xd = "expected" !== Rd;
      return GO({
        kind: "join",
        code: Tm(dd),
        site: ld,
        fatal: !0,
        message: md,
        details: Wd,
        error: dd,
        screen: Fd,
        toTransport: Xd,
        instance: Rd
      })
    }

    function Ym(dd, Od, md) {
      var Wd;
      const Fd = (0, Bd.f)(dd),
        Rd = {
          cause: (dd instanceof xd.e || dd instanceof xd.n) && null !== (Wd = dd.serverText) && void 0 !== Wd ? Wd : "",
          sinceJoinStart: (0, Yd.d)(md.sinceJoinStartMs),
          game: md.game,
          ...(0, Yd.o)(),
          wasmBuild: Od.wasm,
          clientVersion: Od.client
        };
      return GO({
        kind: "pageJoin",
        code: Tm(dd),
        site: ld,
        fatal: !1,
        message: (0, cd.h)(dd),
        details: Rd,
        error: dd,
        toTransport: "unrecognised" === Fd,
        instance: Fd
      })
    }
    const gm = {
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

    function wm(dd, Od) {
      let {
        unused: md,
        answered: Wd,
        XV: Fd
      } = dd;
      const {
        code: Rd,
        message: Xd
      } = gm[md], Kd = {
        unused: md,
        answered: String(Wd),
        XV: String(Fd),
        wasmBuild: Od.wasm,
        clientVersion: Od.client
      };
      return GO({
        kind: "seat",
        code: Rd,
        site: ld,
        fatal: !1,
        message: Xd,
        details: Kd
      })
    }

    function am(dd, Od, md) {
      var Wd;
      let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (Wd = dd.name) && void 0 !== Wd ? Wd : String(dd.code);
      const Rd = {
          closeCode: String(dd.code),
          recognised: String(null !== dd.name),
          closeReason: md.closeReason,
          sinceJoined: (0, Yd.d)(md.sinceJoinedMs),
          game: md.game,
          ...(0, Yd.o)(),
          wasmBuild: Od.wasm,
          clientVersion: Od.client
        },
        Xd = null === dd.name && !(0, Yd.g)(dd.code);
      return GO({
        kind: "disconnect",
        code: Fd,
        site: Cd,
        fatal: !1,
        message: "Left room",
        details: Rd,
        toTransport: Xd
      })
    }

    function Em(dd, Od) {
      const md = {
        ...(0, Hd.o)(dd),
        wasmBuild: Od.wasm,
        clientVersion: Od.client
      };
      return GO({
        kind: "disconnect",
        code: `reconnect-${dd.reason}`,
        site: ld,
        fatal: !1,
        message: "Reconnect failed",
        details: md
      })
    }

    function Jm(dd) {
      return dd.error instanceof ud.e ? `MODEL-${dd.error.status}` : dd.error instanceof Vd.l ? "MODEL-ring" : "MODEL-network"
    }

    function Um(dd, Od) {
      const md = Jm(dd),
        Wd = `model file ${dd.file} ${dd.startup?"(startup) ":""}could not load`,
        Fd = {
          file: String(dd.file),
          url: dd.url,
          wasmBuild: Od.wasm,
          clientVersion: Od.client
        };
      return GO({
        kind: dd.startup ? "model" : "modelLate",
        code: md,
        site: Zd,
        fatal: dd.startup,
        message: Wd,
        details: Fd,
        error: dd.error
      })
    }

    function xm(dd, Od) {
      const md = {
        wasmBuild: Od.wasm,
        clientVersion: Od.client
      };
      return GO({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: kd,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: md,
        error: dd
      })
    }

    function Bm(dd, Od, md) {
      const Wd = {
        delayMs: String(Od),
        wasmBuild: md.wasm,
        clientVersion: md.client
      };
      dd instanceof ud.e && (Wd.status = String(dd.status));
      return GO({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: kd,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: Wd,
        error: dd
      })
    }

    function Sm(dd, Od) {
      const md = {
        wasmBuild: Od.wasm,
        clientVersion: Od.client
      };
      return GO({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: Ed.D,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: md,
        error: dd
      })
    }

    function sm(dd, Od) {
      const md = {
        wasmBuild: Od.wasm,
        clientVersion: Od.client
      };
      return GO({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: WO,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: md,
        error: dd
      })
    }

    function um(dd, Od, md, Wd) {
      const Fd = {
        wasmBuild: Wd.wasm,
        clientVersion: Wd.client
      };
      return GO({
        kind: "texturePackKeptOut",
        code: (0, Qd.h)("wasm", dd, Od),
        site: FO,
        fatal: !1,
        message: Od.detail,
        details: Fd,
        error: md
      })
    }

    function Vm(dd, Od) {
      const {
        frames: md,
        acks: Wd,
        mask: Fd,
        outcome: Rd
      } = dd, Xd = {
        frames: String(md),
        acks: String(Wd),
        mask: String(Fd),
        outcome: null !== Rd && void 0 !== Rd ? Rd : "resynced",
        wasmBuild: Od.wasm,
        clientVersion: Od.client
      };
      return GO({
        kind: "recovered",
        code: "rejoined" === Rd ? "CORE-eventOverflowRejoin" : "failed" === Rd ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: OO,
        fatal: !1,
        message: `the event buffer refused records in ${md} frames`,
        details: Xd
      })
    }

    function im(dd, Od, md) {
      return GO({
        kind: "recovered",
        code: "CORE-workerLost",
        site: dd,
        fatal: !1,
        message: `a ${dd} worker was lost`,
        details: {
          reason: Od,
          wasmBuild: md.wasm,
          clientVersion: md.client
        }
      })
    }

    function Am(dd, Od, md, Wd) {
      const Fd = {
          reason: dd,
          pageBuild: Wd.build,
          pageAgeMin: String(Math.floor(Wd.ageMs / 6e4)),
          wasmBuild: md.wasm,
          clientVersion: md.client
        },
        Rd = Od ? "a world-gen worker's code did not load" : "a world-gen worker was lost";
      return GO({
        kind: "recovered",
        code: "CORE-worldgenWorkerLost",
        site: Ed.D,
        fatal: !1,
        message: Rd,
        details: Fd
      })
    }

    function rm(dd, Od, md) {
      const Wd = {
        wasmBuild: md.wasm,
        clientVersion: md.client
      };
      return GO({
        kind: "recovered",
        code: dd,
        site: Ed.q,
        fatal: !1,
        message: Od,
        details: Wd
      })
    }

    function Gm(dd, Od) {
      const md = {
        lastReason: dd,
        wasmBuild: Od.wasm,
        clientVersion: Od.client
      };
      return GO({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: Ed.D,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: md
      })
    }

    function nm(dd, Od, md) {
      return GO({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: Ed.p,
        fatal: !1,
        message: `${(0,Sd.E)(dd)}: the session shed load`,
        details: {
          cause: dd,
          ...Od,
          wasmBuild: md.wasm,
          clientVersion: md.client
        }
      })
    }

    function Lm(dd, Od, md, Wd) {
      var Fd, Rd;
      return {
        game: dd,
        cause: Od,
        census: null === md ? "none" : JSON.stringify(md),
        gpu: null !== (Fd = null === (Rd = (0, pd.y)()) || void 0 === Rd ? void 0 : Rd.renderer) && void 0 !== Fd ? Fd : "",
        browser: (0, Nd.m)(),
        wasmBuild: Wd.wasm,
        clientVersion: Wd.client
      }
    }

    function Pm(dd, Od, md, Wd) {
      const Fd = (0, Nd.p)(),
        Rd = {
          ...Lm(dd, Od, md, Wd),
          renderWarned: String(Fd)
        },
        Xd = `first view drew no whole terrain in ${Ad.e/1e3} s, ${Od}${Fd?", render warned":""}`;
      return GO({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: RO,
        fatal: !1,
        message: Xd,
        details: Rd
      })
    }

    function zm(dd, Od, md, Wd, Fd) {
      const Rd = {
          ...Lm(dd, md.cause, Wd, Fd),
          waitedMs: String(Math.round(Od.waitedMs)),
          visibleMs: String(Math.round(Od.visibleMs)),
          drawnMs: String(Math.round(Od.drawnMs)),
          frames: String(Od.frames),
          renderPending: String(md.renderPending),
          viewWait: null === md.wait ? "none" : md.wait.slice(0, 6).join(",")
        },
        Xd = (0, Jd.i)(Od, md);
      return GO({
        kind: "viewUnshown",
        code: "CORE-firstViewUnshown",
        site: RO,
        fatal: !1,
        message: Xd,
        details: Rd
      })
    }

    function cm(dd, Od, md, Wd, Fd) {
      const Rd = (0, yd.f)(),
        Xd = (0, yd.e)(dd, Od, md, Wd, Rd),
        Kd = {
          gpuModel: Rd,
          wasmBuild: Fd.wasm,
          clientVersion: Fd.client
        };
      return GO({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: XO,
        fatal: !1,
        message: Xd,
        details: Kd
      })
    }

    function jm(dd, Od, md) {
      return GO({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: dd,
        fatal: !1,
        message: `a ${dd} worker did not start`,
        details: {
          waitedMs: String(Math.round(Od)),
          wasmBuild: md.wasm,
          clientVersion: md.client
        }
      })
    }

    function Dm(dd, Od, md) {
      return GO({
        kind: "recovered",
        code: "CORE-replayFault",
        site: dd,
        fatal: !1,
        message: `the replay's ${dd} failed`,
        details: {
          wasmBuild: md.wasm,
          clientVersion: md.client
        },
        error: Od
      })
    }

    function em(dd, Od) {
      const md = {
          wasmBuild: Od.wasm,
          clientVersion: Od.client
        },
        Wd = dd instanceof Error ? dd.message : String(dd);
      return GO({
        kind: "recovered",
        code: "CORE-cameraDirector",
        site: hO,
        fatal: !1,
        message: "the scripted camera's director threw",
        details: md,
        instance: Wd,
        error: dd
      })
    }
    const Im = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function lm(dd) {
      if (0 === dd) return "none";
      const Od = [60, 600, 3600].find((Od => dd < Od));
      return void 0 === Od ? "ge3600" : `lt${Od}`
    }

    function Cm(dd, Od) {
      return null === dd ? "unbound" : (0, bd.e)(Od - dd)
    }

    function Zm(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (dd & od.O.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (dd & od.O.LINKS_RUNNING) ? "links running" : "", `frames ${(0,qd.d)(lm(dd&od.O.FRAMES))}`, `up ${(0,qd.d)(Cm(Od,md))}`].filter(Boolean).join(", ")
    }

    function km(dd, Od, md) {
      const Wd = "lost" === Od && void 0 !== md ? ` (${md})` : "";
      return `the ${dd} ${Im[Od]}${Wd}`
    }
    const fm = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function Mm(dd, Od, md, Wd) {
      var Fd;
      let {
        restoreLost: Rd = !1,
        adapterRemembered: Xd = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, Kd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const hd = null === md || void 0 === md ? void 0 : md.message,
        vd = "pipeline_failed" === Od ? Od : md instanceof wd.f ? "timeout" : (0, bd.i)("frames_refused" === Od, "string" === typeof hd ? hd : ""),
        Qd = null === Wd.boundAtMs ? "unbound" : `up${(0,bd.d)(Kd-Wd.boundAtMs)}`,
        td = null === Wd.adapter ? "no adapter" : (0, bd.h)(Wd.adapter),
        od = `${!0===Wd.indirectHangs?" ih":""}${!0===Wd.restoresSkipped?" nr":""}${Rd?" rl":""}${Xd?" ar":""}`,
        Nd = `${vd} ${(0,wd.i)()?"hidden":"visible"} ${Qd}${od} ${td}`;
      if ("webgpu" !== dd || "lost" !== Od && "frames_refused" !== Od) return {
        detail: Nd,
        count: void 0
      };
      return {
        detail: Nd,
        count: {
          errorKind: "render_lost",
          error: new Error(Nd),
          code: (0, bd.u)(vd, null !== (Fd = Wd.boundAtMs) && void 0 !== Fd ? Fd : Kd, Kd).code,
          fields: {
            renderBackend: jd.e.webgpu
          }
        }
      }
    }

    function dW(dd, Od, md) {
      const {
        count: Wd
      } = Mm("webgpu", dd, Od, md);
      void 0 !== Wd && PO(Wd)
    }
    const OW = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function mW(dd) {
      var Od;
      return null !== (Od = dd instanceof Error ? dd.reason : void 0) && void 0 !== Od ? Od : ""
    }

    function WW(dd, Od, Wd) {
      var Fd, Rd, Xd, Kd, vd;
      let {
        from: Qd,
        cause: td = "lost",
        restoreLost: od = !1,
        adapterRemembered: Hd = !1,
        error: yd,
        context: pd = fm,
        session: Yd = OW
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, gd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: wd,
        count: Ed
      } = Mm(dd, td, yd, pd, {
        restoreLost: od,
        adapterRemembered: Hd
      }, gd), Jd = {
        reloadFrom: null !== Qd && void 0 !== Qd ? Qd : "",
        losses: String(Od),
        cause: td,
        detail: wd,
        vendor: null !== (Fd = null === (Rd = pd.adapter) || void 0 === Rd ? void 0 : Rd.vendor) && void 0 !== Fd ? Fd : "",
        architecture: null !== (Xd = null === (Kd = pd.adapter) || void 0 === Kd ? void 0 : Kd.architecture) && void 0 !== Xd ? Xd : "",
        indirectHangs: String(pd.indirectHangs),
        restoresSkipped: String(pd.restoresSkipped),
        restoreLost: String(od),
        adapterRemembered: String(Hd),
        lossReason: mW(yd),
        samples: String(Yd.samples),
        sunShadows: String(Yd.sunShadows),
        renderDistance: String(Yd.renderDistance),
        gpuFamily: null !== (vd = (0, hd.d)()) && void 0 !== vd ? vd : "",
        browser: (0, Nd.m)(),
        siteUsed: Td.siteUsed,
        wasmBuild: Wd.wasm,
        clientVersion: Wd.client
      }, Ud = "webgpu" !== dd && void 0 !== Qd ? function(dd, Od, md, Wd) {
        return `: ${dd}, ${Od?"restore lost":"not restored"}, up ${(0,qd.d)(Cm(md,Wd))}`
      }(Qd, od, pd.boundAtMs, gd) : "", xd = `${km(dd,td)}${Ud}`, Bd = GO({
        kind: "recovered",
        code: "CORE-renderLost",
        site: Md,
        fatal: !1,
        message: xd,
        details: Jd,
        error: yd,
        countAs: Ed
      });
      return jO("ga", (async () => {
        const {
          logError: Od
        } = await Promise.resolve().then((() => md(3986))), Wd = `${bd.c["webgpu"===dd?"WebGPU":"WebGL2"]}\n Error: ${wd}`;
        Od("warning", Wd), Od("error", Wd)
      })), Bd
    }

    function FW(dd, Od) {
      var md, Wd;
      const Fd = null === dd.name ? "TEXTURE-sources" : null === dd.url ? "TEXTURE-nourl" : dd.error instanceof rd.b ? `TEXTURE-${dd.error.status}` : "TEXTURE-network",
        Rd = null === dd.name ? "terrain textures could not load" : `terrain texture ${dd.name} could not load`,
        Xd = {
          texture: null !== (md = dd.name) && void 0 !== md ? md : "",
          url: null !== (Wd = dd.url) && void 0 !== Wd ? Wd : "",
          wasmBuild: Od.wasm,
          clientVersion: Od.client
        };
      return GO({
        kind: "terrainTexture",
        code: Fd,
        site: Ed.B,
        fatal: !1,
        message: Rd,
        details: Xd,
        error: dd.error
      })
    }
    const RW = {
      previewAnimations: {
        site: dO,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: mO,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function XW(dd, Od, md, Wd) {
      const {
        site: Fd,
        prefix: Rd,
        name: Xd
      } = RW[dd], {
        stage: Kd,
        error: hd
      } = md;
      return GO({
        kind: dd,
        code: "decode" === Kd ? null === hd ? `${Rd}-decode` : `${Rd}-trap` : hd instanceof ud.e ? `${Rd}-${hd.status}` : `${Rd}-network`,
        site: Fd,
        fatal: !1,
        message: "decode" === Kd ? `${Xd} did not decode` : `${Xd} could not load`,
        details: {
          url: Od,
          wasmBuild: Wd.wasm,
          clientVersion: Wd.client
        },
        error: hd
      })
    }
    const KW = "staleBuild";

    function hW(dd, Od, md) {
      const Wd = {
          failedSite: dd.site,
          url: dd.url,
          from: dd.from,
          sameBuild: String(dd.from === Od),
          reloadMs: String(Math.max(0, Date.now() - dd.at)),
          wasmBuild: md.wasm,
          clientVersion: md.client
        },
        Fd = `reloaded into a newer build after ${dd.site} failed to load: ${dd.error}`;
      return GO({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: KW,
        fatal: !1,
        message: Fd,
        details: Wd
      })
    }
  },
  42751: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      e: () => Fd,
      g: () => Xd,
      k: () => hd
    });
    var Wd = md(5571);
    const Fd = 3e4,
      Rd = 900;

    function Xd(dd, Od) {
      const md = null === dd ? 0 : Od - dd;
      return md <= Rd ? md : 0
    }
    class Kd {
      constructor(dd) {
        this.Wt = dd, this.waitedMs = 0, this.lastMs = null
      }
      frame(dd, Od) {
        return !!Od || (this.waitedMs += Xd(this.lastMs, dd), this.lastMs = dd, !(this.waitedMs < Fd) && (this.Wt(), !0))
      }
    }

    function hd(dd, Od) {
      return 0 === (dd & Wd.X.ChunkRequested) ? "no_chunk_request" : 0 === (dd & Wd.X.ChunkStored) ? "chunk_not_stored" : 0 === (dd & Wd.X.MeshLanded) ? "not_meshed" : null === Od ? "no_frame_drawn" : 0 === Od.terrainParts ? "no_terrain_parts" : Od.terrainCompiling > 0 ? "terrain_compiling" : Od.terrainOpaque + Od.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  42743: (dd, Od, md) => {
    md.d(Od, {
      d: () => hd,
      e: () => Xd,
      i: () => Qd
    });
    var Wd = md(210),
      Fd = md(42751);
    const Rd = ["view", "startup", "skipped"];

    function Xd(dd) {
      return 0 === dd.clientWidth || 0 === dd.clientHeight || 0 === dd.width || 0 === dd.height
    }

    function Kd(dd) {
      if (null === dd) return "none";
      const [Od, md, Wd, Fd] = dd, Rd = [
        ["link", Od],
        ["terrain", md],
        ["jK", Wd],
        ["other", Fd]
      ];
      let Xd = "none",
        Kd = 0;
      for (const [hd, vd] of Rd) vd > Kd && (Xd = hd, Kd = vd);
      return Xd
    }
    class hd {
      constructor(dd) {
        this.gap = dd, this.chunkAtMs = null, this.lastFrameMs = null, this.drawnMs = 0, this.frames = 0, this.visibleFromMs = null, this.undrawn = {
          view: 0,
          startup: 0,
          skipped: 0
        }, this.over = !1
      }
      get open() {
        return null !== this.chunkAtMs && !this.over
      }
      playerChunk(dd, Od) {
        null !== this.chunkAtMs || this.over || (this.chunkAtMs = dd, Od || this.pageShown(dd))
      }
      pageShown(dd) {
        this.open && null === this.visibleFromMs && (this.visibleFromMs = dd, this.gap.restart(dd))
      }
      animationFrame(dd, Od, md) {
        !this.open || null === this.visibleFromMs || dd <= this.visibleFromMs || (this.gap.animationFrame(), "paced" === Od ? this.gap.paced() : "skipped" === Od ? this.undrawn.skipped++ : "none" === Od && this.undrawn[md ? "startup" : "view"]++)
      }
      frame(dd) {
        this.open && (this.drawnMs += (0, Fd.g)(this.lastFrameMs, dd), this.lastFrameMs = dd, this.frames++)
      }
      shown() {
        this.over = !0, this.gap.stop()
      }
      end(dd, Od) {
        if (null === this.chunkAtMs || this.over) return null;
        this.over = !0;
        const md = null === this.visibleFromMs ? null : this.gap.words(!1, Od);
        return this.gap.stop(), {
          end: dd,
          waitedMs: Math.max(Od - this.chunkAtMs, 0),
          visibleMs: null === this.visibleFromMs ? 0 : Math.max(Od - this.visibleFromMs, 0),
          drawnMs: this.drawnMs,
          frames: this.frames,
          undrawn: {
            ...this.undrawn
          },
          page: md
        }
      }
    }

    function vd(dd) {
      return dd < 5e3 ? "brief" : dd < 15e3 ? "short" : dd < 6e4 ? "long" : "very_long"
    }

    function Qd(dd, Od) {
      var md, Fd;
      const Xd = [...null === dd.page ? [] : dd.page.split(" "), ...Rd.filter((Od => dd.undrawn[Od] > 0)).map((dd => `undrawn:${dd}`)), ...Od.canvasEmpty ? ["canvas:empty"] : []],
        hd = [
          ["", `first view unshown, ${Od.cause}, ended ${dd.end}`],
          [", ", 0 === dd.visibleMs ? "visible none" : `visible ${vd(dd.visibleMs)}`],
          [", ", 0 === dd.frames ? "no frames" : `drew ${vd(dd.drawnMs)}`], ...Xd.map(((dd, Od) => [0 === Od ? ", " : " ", dd])), [", ", `waited ${vd(dd.waitedMs)}`],
          [", ", Od.bound ? "bound" : "unbound"], ...Od.preload ? [
            [", ", "preload"]
          ] : [],
          [", ", Od.startupLoaded ? "startup in" : "startup out"],
          [", ", Od.renderPending > 0 ? "render pending" : "render resolved"],
          [", ", `lacked ${Kd(Od.wait)}${(null!==(md=null===(Fd=Od.wait)||void 0===Fd?void 0:Fd[4])&&void 0!==md?md:0)>0?" gapped":""}`]
        ];
      let Qd = "";
      for (const [Rd, Kd] of hd) {
        const dd = Qd + Rd + Kd;
        if (dd.length > Wd.fb) break;
        Qd = dd
      }
      return Qd
    }
  },
  42552: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd,
      h: () => bd,
      l: () => Hd,
      p: () => yd,
      q: () => od,
      t: () => Nd,
      u: () => Qd,
      w: () => td,
      x: () => qd
    });
    class Wd extends Error {
      constructor(dd) {
        super(`the join's code did not load: ${dd instanceof Error?dd.message:String(dd)}`, {
          cause: dd
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === dd || void 0 === dd ? void 0 : dd.request
      }
    }
    let Fd = null,
      Rd = null,
      Xd = null;
    const Kd = [];
    let hd = null;

    function vd(dd, Od) {
      try {
        dd(Od)
      } catch (md) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", md)
      }
    }

    function Qd() {
      return hd
    }

    function td(dd) {
      Kd.push(dd), null !== hd && vd(dd, hd)
    }

    function od(dd) {
      return Fd ??= Promise.all([md.e(85), md.e(113), md.e(88), md.e(177), md.e(91), md.e(225), md.e(253), md.e(112), md.e(142), md.e(246), md.e(245), md.e(307), md.e(244), md.e(223), md.e(50), md.e(224), md.e(127), md.e(214), md.e(281), md.e(143), md.e(103), md.e(69)]).then((() => md(55013))).then((Od => {
        Od.loadAudio(dd), hd = Od;
        for (const dd of Kd) vd(dd, Od);
        return Od
      })).catch((dd => {
        throw Fd = null, dd
      })), Fd
    }
    async function Nd(dd, Od) {
      try {
        const md = await od(dd);
        await md.loadClientGame(Od)
      } catch (md) {
        throw new Wd(md)
      }
    }

    function qd(dd, Od) {
      Rd = {
        running: dd,
        shell: Od
      }
    }

    function Hd() {
      return Xd
    }
    async function yd(dd) {
      const Od = Rd;
      if ((null === Od || void 0 === Od ? void 0 : Od.running) !== dd) throw new Error("the core's session has ended");
      const md = await od(Od.shell.audio).catch((dd => {
        throw new Wd(dd)
      }));
      if (null !== Xd) return Xd;
      if (Rd !== Od || dd.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Xd = md.startGameHost(dd, Od.shell), null === Xd) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Xd
    }

    function bd() {
      null !== Xd && (null !== hd ? hd.endGameHost(Xd) : Xd.closeGame()), Xd = null, Rd = null
    }
  },
  42661: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    const Wd = {
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
  42758: (dd, Od, md) => {
    md.d(Od, {
      e: () => vd,
      h: () => Rd,
      k: () => Xd,
      m: () => Fd,
      n: () => Nd,
      o: () => Qd,
      p: () => hd,
      r: () => od,
      v: () => td,
      x: () => Kd
    });
    var Wd = md(1951);
    const Fd = new Uint8Array([12]),
      Rd = 2e3,
      Xd = 257;

    function Kd(dd) {
      const Od = new Uint8Array(4);
      return new DataView(Od.buffer).setUint32(0, dd, !0), Od
    }
    class hd extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class vd extends Error {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(dd), this.stage = Od, this.code = md, this.serverText = Wd, this.socketOpened = Fd, this.name = "JoinError"
      }
    }
    class Qd extends Error {
      constructor(dd) {
        super(dd), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class td extends Error {
      constructor(dd) {
        super((0, Wd.d)(dd), {
          cause: dd
        }), this.name = "TrafficCheckError"
      }
    }
    class od extends Error {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(dd, {
          cause: md
        }), this.networkLost = Od, this.httpStatus = Wd, this.name = "SeatRequestError"
      }
    }
    class Nd extends Error {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(dd), this.code = Od, this.serverText = md, this.name = "MatchmakeError"
      }
    }
  },
  42761: (dd, Od, md) => {
    md.d(Od, {
      c: () => Nd,
      f: () => od,
      i: () => qd
    });
    var Wd = md(3697),
      Fd = md(2484),
      Rd = md(40634),
      Xd = md(38109),
      Kd = md(40638),
      hd = md(42758),
      vd = md(42763);
    const Qd = "seat reservation expired.",
      td = "early_leave";

    function od(dd) {
      if (dd instanceof Xd.i) return "expected";
      if (dd instanceof hd.r) return dd.networkLost ? "expected" : "unrecognised";
      if (dd instanceof hd.e) {
        if ("closed" === dd.stage && (0 === dd.code || (0, Fd.g)(dd.code))) return "expected";
        if ("roomError" === dd.stage && (dd.serverText === Qd || dd.serverText === td)) return "expected"
      }
      return dd instanceof hd.e || dd instanceof hd.n ? null === (0, Kd.f)(dd.code).name ? "unrecognised" : "known" : (0, Wd.f)(dd) ? "expected" : dd instanceof hd.v || dd instanceof vd.e ? "known" : "unrecognised"
    }

    function Nd(dd) {
      return dd instanceof Xd.i ? "timedOut" : "expected" !== od(dd) || (0, Wd.f)(dd) || dd instanceof hd.e && 1001 === dd.code ? void 0 : "failed"
    }

    function qd(dd) {
      return dd instanceof hd.e && "attach" !== dd.stage ? (0, Rd.b)(dd, "closed" !== dd.stage || dd.socketOpened ? "socket" : "socket_unopened") : dd instanceof hd.r ? {
        at: "seat_lost",
        code: dd.httpStatus
      } : dd instanceof hd.n || dd instanceof Xd.i ? (0, Rd.b)(dd, dd instanceof Xd.i ? dd.leg : "seat") : void 0
    }
  },
  42772: (dd, Od, md) => {
    md.d(Od, {
      c: () => hd,
      e: () => vd,
      h: () => Nd,
      l: () => td
    });
    var Wd = md(2425),
      Fd = md(5568),
      Rd = md(42779),
      Xd = md(42788),
      Kd = md(37659);
    const hd = 395,
      vd = 2147483648,
      Qd = new Uint8Array(0);
    class td extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class od extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class Nd {
      constructor(dd, Od, md) {
        var Wd, Fd, Xd, Kd;
        let hd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = dd, this.build = Od, this.onFailure = md, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.kQ = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (Wd = hd.fetchFile) && void 0 !== Wd ? Wd : dd => (0, Rd.i)(dd), this.onWritten = null !== (Fd = hd.onWritten) && void 0 !== Fd ? Fd : null, this.onTaken = null !== (Xd = hd.onTaken) && void 0 !== Xd ? Xd : null, this.onPackFileFailed = null !== (Kd = hd.onPackFileFailed) && void 0 !== Kd ? Kd : null, this.startupLeft = new Set(dd.startup);
        for (const Rd of dd.startup) this.request(Rd)
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
      drawnUrl(dd) {
        return this.drawn.get(dd)
      }
      request(dd) {
        const Od = this.pending.get(dd);
        if (!0 === (null === Od || void 0 === Od ? void 0 : Od.ask)) return;
        const md = this.ot(dd, !0);
        md.recheck = void 0 !== Od;
        const Wd = this.drawn.get(dd);
        if (void 0 !== Wd) return md.jK = !0, md.recheck = !0, void this.fetch(dd, md, Wd);
        this.fetchWanted(dd, md)
      }
      async refresh() {
        const dd = ++this.refreshes,
          Od = new Set;
        for (const Xd of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const dd of Xd) 0 === (dd & Rd.g) && Od.add(dd);
        const md = [...Od];
        let Wd;
        try {
          Wd = await Promise.all(md.map((dd => this.wanted(dd))))
        } catch {
          return null
        }
        if (dd !== this.refreshes) return null;
        const Fd = {
          resent: 0,
          refetched: 0,
          delivered: md.filter((dd => this.drawn.has(dd))).length
        };
        return md.forEach(((dd, Od) => {
          const {
            url: md,
            inPlaceOf: Rd
          } = Wd[Od], Xd = this.pending.get(dd);
          if (void 0 !== Xd) {
            if (Xd.jK || void 0 === Xd.url) return void(Xd.recheck = !0);
            if (Xd.url === md) return;
            Fd.refetched++;
            const Od = this.ot(dd, Xd.ask);
            return Od.recheck = Xd.recheck, void this.fetch(dd, Od, md, Rd)
          }
          const Kd = this.written.get(dd);
          void 0 === Kd ? this.drawn.get(dd) !== (null !== md && void 0 !== md ? md : void 0) && (Fd.resent++, this.fetch(dd, this.ot(dd, !1), md, Rd)) : Kd.url !== (null !== md && void 0 !== md ? md : "") && (Kd.attempt.recheck = !0)
        })), Fd
      }
      taken(dd, Od) {
        const md = new Set,
          Wd = new Set;
        for (const Fd of Array.from(Od)) 0 === (Fd & vd) ? md.add(Fd) : Wd.add((Fd & ~vd) >>> 0);
        for (const [Fd, Rd] of this.written) Rd.seq > dd || (this.written.delete(Fd), md.has(Rd.seq) ? this.refusedFile(Fd, Rd) : this.takenFile(Fd, Rd, !Rd.empty && !Wd.has(Rd.seq)))
      }
      takenFile(dd, Od, md) {
        const {
          attempt: Wd
        } = Od;
        if (md) {
          var Fd;
          this.drawn.set(dd, Od.url), this.undrawn.delete(dd), void 0 !== Wd.inPlaceOf ? this.refusedPack.set(dd, Wd.inPlaceOf) : Wd.jK || this.refusedPack.delete(dd), null === (Fd = this.onTaken) || void 0 === Fd || Fd.call(this, dd, !0);
          const md = this.pending.get(dd);
          if (!0 === (null === md || void 0 === md ? void 0 : md.jK) && md.url !== Od.url) {
            const md = this.ot(dd, !0);
            md.jK = !0, md.recheck = !0, this.fetch(dd, md, Od.url)
          }
        } else {
          var Rd;
          this.drawn.has(dd) || this.undrawn.add(dd), null === (Rd = this.onTaken) || void 0 === Rd || Rd.call(this, dd, !1)
        }
        Wd.recheck && this.resendIfChanged(dd)
      }
      refusedFile(dd, Od) {
        var md, Wd;
        if (null === (md = this.onTaken) || void 0 === md || md.call(this, dd, !1), this.refusedPack.set(dd, Od.url), this.pending.has(dd)) return void(null === (Wd = this.onPackFileFailed) || void 0 === Wd || Wd.call(this, dd, qd(Od.url)));
        const Fd = this.ot(dd, Od.attempt.ask);
        Fd.recheck = Od.attempt.recheck, this.afterRefusal(dd, Fd, Od.url)
      }
      async afterRefusal(dd, Od, md) {
        var Wd;
        let Fd;
        try {
          Fd = await this.wanted(dd)
        } catch (Rd) {
          return void(this.pending.get(dd) === Od && this.giveUp(dd, Od, md, Rd))
        }
        this.pending.get(dd) === Od && (Fd.inPlaceOf !== md ? Od.ask || (null !== (Wd = Fd.url) && void 0 !== Wd ? Wd : void 0) !== this.drawn.get(dd) ? this.fetch(dd, Od, Fd.url, Fd.inPlaceOf) : this.pending.delete(dd) : this.fallBack(dd, Od, md, qd(md)))
      }
      ot(dd, Od) {
        const md = {
          url: void 0,
          ask: Od,
          jK: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(dd, md);
        for (let Wd = this.ready.length - 1; Wd >= 0; Wd--) this.ready[Wd].file === dd && this.ready.splice(Wd, 1);
        return md
      }
      async wanted(dd) {
        const Od = await this.files.url(dd);
        return null !== Od && this.refusedPack.get(dd) === Od ? {
          url: await this.files.shippedUrl(dd),
          inPlaceOf: Od
        } : {
          url: Od,
          inPlaceOf: void 0
        }
      }
      fetchWanted(dd, Od) {
        const md = this.files.url(dd);
        md instanceof Promise ? md.then((md => {
          this.fetchFound(dd, Od, md)
        }), (md => {
          this.pending.get(dd) === Od && this.giveUp(dd, Od, "", md)
        })) : this.fetchFound(dd, Od, md)
      }
      fetchFound(dd, Od, md) {
        null !== md && this.refusedPack.get(dd) === md ? Promise.resolve(this.files.shippedUrl(dd)).then((Wd => {
          this.fetch(dd, Od, Wd, md)
        }), (Wd => {
          this.pending.get(dd) === Od && this.giveUp(dd, Od, md, Wd)
        })) : this.fetch(dd, Od, md)
      }
      fetch(dd, Od, md, Wd) {
        this.pending.get(dd) === Od && (Od.url = md, Od.inPlaceOf = Wd, null !== md ? this.load(dd, Od, md) : this.buildFile(dd, Od, "", Qd))
      }
      load(dd, Od, md) {
        const Wd = this.kQ.get(dd);
        (null === Wd || void 0 === Wd ? void 0 : Wd.url) !== md ? this.fetchFile(md).then((Wd => {
          var Fd, Rd;
          this.pending.get(dd) === Od && (this.keptTotal += Wd.byteLength - (null !== (Fd = null === (Rd = this.kQ.get(dd)) || void 0 === Rd ? void 0 : Rd.glb.byteLength) && void 0 !== Fd ? Fd : 0), this.kQ.set(dd, {
            url: md,
            glb: Wd
          }), this.buildFile(dd, Od, md, Wd))
        }), (Wd => {
          this.pending.get(dd) === Od && this.fallBack(dd, Od, md, Wd)
        })) : this.buildFile(dd, Od, md, Wd.glb)
      }
      buildFile(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Xd = Wd.byteLength > 0 && (0, Rd.l)(md) ? (dd | Rd.e) >>> 0 : dd;
        this.queueRecord(dd, Od, md, Wd, this.build(Xd, Wd), Fd)
      }
      queueRecord(dd, Od, md, Wd, Rd, Kd) {
        Rd.then((Rd => {
          if (this.pending.get(dd) !== Od) return;
          if (Fd.p + (0, Fd.ve)(Rd.byteLength) > Fd.Ic) return void this.ringRefused(dd, Od, md, new td(`${Hd(md)}'s record is ${Rd.byteLength-Xd.d} bytes, past the cmd ring's ${Fd.Ic}`), Kd);
          const hd = {
            file: dd,
            url: md,
            payload: Rd,
            glb: Wd,
            attempt: Od
          };
          Kd ? this.ready.unshift(hd) : this.ready.push(hd)
        }))
      }
      async fallBack(dd, Od, md, Wd) {
        var Fd;
        let Rd = null,
          Xd = Wd;
        try {
          Rd = await this.files.shippedUrl(dd)
        } catch (Kd) {
          Xd = Kd
        }
        this.pending.get(dd) === Od && (null !== Rd && Rd !== md ? (null === (Fd = this.onPackFileFailed) || void 0 === Fd || Fd.call(this, dd, Wd), Od.ask || this.drawn.get(dd) !== Rd ? (Od.url = Rd, Od.inPlaceOf = md, this.load(dd, Od, Rd)) : this.pending.delete(dd)) : this.giveUp(dd, Od, md, Xd))
      }
      ringRefused(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, Rd.l)(md) ? this.fallBack(dd, Od, md, Wd): this.giveUp(dd, Od, md, Wd, Fd)
      }
      giveUp(dd, Od, md, Fd) {
        let Rd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: dd,
          url: Hd(md),
          error: Fd,
          startup: this.startupLeft.has(dd)
        }), Od.ask || !this.drawn.has(dd) ? (0, Wd.R)(Fd) ? this.queueRecord(dd, Od, md, Qd, Promise.resolve((0, Xd.n)(dd, (0, Kd.h)(Fd))), Rd) : this.buildFile(dd, Od, md, Qd, Rd) : this.pending.delete(dd)
      }
      async resendIfChanged(dd) {
        var Od;
        if (0 !== (dd & Rd.g)) return;
        let md;
        try {
          md = await this.wanted(dd)
        } catch {
          return
        }(null !== (Od = md.url) && void 0 !== Od ? Od : void 0) === this.drawn.get(dd) || this.pending.has(dd) || this.written.has(dd) || this.fetch(dd, this.ot(dd, !1), md.url, md.inPlaceOf)
      }
      drain(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === dd) return;
        let md = 0,
          Wd = 0;
        for (; Wd < this.ready.length && md < 262144;) {
          const Kd = this.ready[Wd];
          if (this.written.has(Kd.file)) {
            Wd++;
            continue
          }
          const Qd = this.nextSeq;
          new DataView(Kd.payload.buffer, Kd.payload.byteOffset, Kd.payload.byteLength).setUint32(Xd.h, Qd, !0);
          const od = Kd.attempt.jK && Kd.glb.byteLength > 0 && this.drawn.get(Kd.file) === Kd.url;
          if (dd(hd, od ? 1 : 0, Kd.payload)) {
            if (this.nextSeq = Qd >= vd - 1 ? 1 : Qd + 1, this.ready.splice(Wd, 1), md += Kd.payload.byteLength, this.pending.delete(Kd.file), this.startupLeft.delete(Kd.file), this.written.set(Kd.file, {
                seq: Qd,
                url: Kd.url,
                empty: 0 === Kd.glb.byteLength,
                attempt: Kd.attempt
              }), Kd.glb.byteLength > 0) try {
              var Fd;
              null === (Fd = this.onWritten) || void 0 === Fd || Fd.call(this, Kd.file, Kd.glb)
            } catch (Rd) {
              console.warn("ModelFeed: reading the file's images failed", Rd)
            }
          } else {
            if (null === Od || 0 === Kd.glb.byteLength || Od(Kd.payload.byteLength)) return;
            this.ready.splice(Wd, 1);
            const dd = new td(`${Hd(Kd.url)}'s record is ${Kd.payload.byteLength-Xd.d} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(Kd.file, Kd.attempt, Kd.url, dd, !0)
          }
        }
      }
    }

    function qd(dd) {
      return new od(`presentation refused ${Hd(dd)}`)
    }

    function Hd(dd) {
      return dd.startsWith("data:") ? `${dd.slice(0,Math.min(Math.max(dd.indexOf(","),5),64))},...` : dd
    }
  },
  42779: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd,
      g: () => Rd,
      i: () => Qd,
      l: () => Kd,
      n: () => vd,
      o: () => hd
    });
    var Wd = md(2425),
      Fd = md(4421);
    const Rd = 2147483648,
      Xd = 1073741824;

    function Kd(dd) {
      return dd.startsWith("data:")
    }

    function hd(dd) {
      let {
        onTableFailed: Od,
        packUrl: md
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Wd = vd();
      Wd.catch((dd => {
        null === Od || void 0 === Od || Od(dd)
      }));
      const Fd = async Od => (await Wd).fileUrl((Od & ~Rd) >>> 0, dd);
      return {
        startup: [],
        url: async dd => {
          if (md && 0 === (dd & Rd)) {
            const Od = await Wd,
              Fd = Od.filePackName(dd),
              Rd = null === Fd || "lifeform" === Od.fileSource(dd) ? null : md(Fd);
            if (null !== Rd) return Rd
          }
          return Fd(dd)
        },
        shippedUrl: Fd
      }
    }

    function vd() {
      return md.e(50).then((() => md(45365)))
    }
    async function Qd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return dd.startsWith("data:") ? (0, Fd.b)(dd.slice(dd.indexOf(",") + 1), Od) : (0, Wd.J)(dd, {
        spare: Od
      })
    }
  },
  42788: (dd, Od, md) => {
    md.d(Od, {
      d: () => hd,
      h: () => vd,
      j: () => qd,
      n: () => od,
      q: () => td,
      r: () => Nd
    });
    const Wd = 826427981,
      Fd = 1,
      Rd = 2,
      Xd = 44,
      Kd = 58,
      hd = 8,
      vd = 4;

    function Qd(dd, Od, md) {
      const Fd = (new TextEncoder).encode(md),
        Rd = hd + 4 * (Od.length + 2),
        Xd = new Uint8Array(Rd + (Fd.byteLength + 3 & -4)),
        Kd = new DataView(Xd.buffer);
      return Kd.setUint32(0, dd, !0), Kd.setUint32(hd, Wd, !0), Od.forEach(((dd, Od) => {
        Kd.setUint32(hd + 4 * (Od + 1), dd, !0)
      })), Kd.setUint32(Rd - 4, Fd.byteLength, !0), Xd.set(Fd, Rd), Xd
    }

    function td(dd, Od) {
      return Qd(dd, [Rd], Od)
    }

    function od(dd, Od) {
      return Qd(dd, [Fd, Kd], Od)
    }

    function Nd(dd, Od) {
      return Qd(dd, [Fd, Xd], Od)
    }

    function qd(dd) {
      const Od = hd;
      if (dd.byteLength < Od + 12) return !1;
      const md = new DataView(dd.buffer, dd.byteOffset, dd.byteLength);
      return md.getUint32(Od, !0) === Wd && md.getUint32(Od + 4, !0) === Fd && md.getUint32(Od + 8, !0) === Xd
    }
  },
  42663: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd,
      f: () => Qd,
      h: () => Xd,
      k: () => hd
    });
    var Wd = md(37659);
    class Fd extends Error {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${dd}: the module trapped${md?" in an earlier call":""}: ${String(Od)}`, {
          cause: Od
        }), this.site = dd, this.trap = Od, this.earlier = md, this.name = "ModuleTrapError", Od instanceof Error && void 0 !== Od.stack && (this.stack = `${this.name}: ${this.message}\n${Od.stack}`)
      }
    }
    const Rd = new WeakMap;

    function Xd(dd) {
      return Rd.has(dd)
    }

    function Kd(dd, Od) {
      Rd.has(dd) || Rd.set(dd, Od)
    }

    function hd(dd, Od) {
      return !!(0, Wd.f)(Od) && (Kd(dd, Od), !0)
    }
    const vd = [
      ["error", dd => dd.error],
      ["unhandledrejection", dd => dd.reason]
    ];

    function Qd(dd, Od, md) {
      let Xd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return Rd.has(dd) ? Promise.reject(new Fd(Od, Rd.get(dd), !0)) : new Promise(((Rd, hd) => {
        const Qd = md => {
            Kd(dd, md), Nd(), hd(new Fd(Od, md))
          },
          td = dd => {
            dd instanceof WebAssembly.RuntimeError ? Qd(dd) : (Nd(), hd(dd))
          },
          od = vd.map((dd => {
            let [Od, md] = dd;
            return [Od, dd => {
              const Od = md(dd);
              (0, Wd.f)(Od) && Qd(Od)
            }]
          })),
          Nd = () => {
            for (const [dd, Od] of od) null === Xd || void 0 === Xd || Xd.removeEventListener(dd, Od)
          };
        for (const [dd, Od] of od) null === Xd || void 0 === Xd || Xd.addEventListener(dd, Od);
        let qd;
        try {
          qd = md()
        } catch (Hd) {
          return void td(Hd)
        }
        qd.then((dd => {
          Nd(), Rd(dd)
        }), td)
      }))
    }
  },
  42693: (dd, Od, md) => {
    md.d(Od, {
      C: () => Cd,
      E: () => Ld,
      G: () => Sd,
      H: () => Gd,
      I: () => kd,
      J: () => nd,
      K: () => Dd,
      O: () => zd,
      S: () => rd,
      V: () => fd,
      b: () => Bd,
      f: () => Jd,
      h: () => jd,
      j: () => Pd,
      n: () => Ed,
      r: () => xd,
      s: () => gd,
      t: () => ud,
      w: () => Ad,
      z: () => Zd
    });
    var Wd = md(231),
      Fd = md(29),
      Rd = md(4802),
      Xd = md(145),
      Kd = md(382),
      hd = md(46),
      vd = md(364),
      Qd = md(42658),
      td = md(42665),
      od = md(38087),
      Nd = md(42701),
      qd = (md(42685), md(42807)),
      Hd = md(42729),
      yd = md(42673);
    const bd = "wasmJoinBuild";
    let Td = null,
      pd = null,
      Yd = null;

    function gd(dd) {
      Yd = dd
    }
    let wd = !1;

    function Ed() {
      wd = !0
    }

    function Jd() {
      return wd
    }
    let Ud = !1;

    function xd() {
      Ud = !0
    }

    function Bd() {
      return Ud
    }

    function Sd() {
      return Yd
    }
    let sd = null;

    function ud(dd) {
      sd = dd, (0, Kd.e)(dd)
    }
    const Vd = "wasmClientRenderLost";

    function Ad() {
      hd.o.setItem(Vd, !0)
    }

    function rd() {
      return !0 === hd.o.getItem(Vd)
    }

    function Gd() {
      return sd
    }

    function nd() {
      if (null === Td) {
        hd.k.removeItem("wasmLastPick"), hd.k.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, Kd.j)(), Td = (0, vd.p)().then((() => (0, Qd.E)(Nd.g))).then((dd => (null === dd || (0, Qd.p)(dd) || (pd = qd.e[dd.backend], Fd.e.followGameGpu("webgpu" === dd.backend ? dd.adapter : null), "webgpu" === dd.backend && (0, Hd.e)()), dd)))
      }
      return Td
    }

    function Ld() {
      return pd
    }

    function Pd(dd) {
      return dd ? dd.load() : Promise.resolve().then((function() {
        var dd = new Error("Cannot find module '@bloxd/wasm/client'");
        throw dd.code = "MODULE_NOT_FOUND", dd
      })).then((dd => dd.bloxdWasmClient))
    }

    function zd(dd) {
      hd.k.setItem(bd, dd)
    }

    function cd(dd, Od) {
      const md = hd.k.getItem(bd);
      return null === md ? function(dd) {
        if (void 0 !== (0, Wd.b)(dd, "webgpu") && (0, Qd.A)()) return "webgpu";
        return !1 === (0, Xd.t)() ? "webgl1" : "webgl"
      }(dd) : "none" === md ? null : "string" === typeof md && void 0 !== (0, Wd.b)(dd, md) ? md : (Od && console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(md)}, is none of this client's: guessing WebGL2's`), "webgl")
    }
    async function jd() {
      if (null === Nd.g) return Pd(null);
      const dd = cd(Nd.g, !0);
      return null === dd ? null : Nd.g[dd]()
    }

    function Dd() {
      null === Td && null !== Nd.g && "webgl" === cd(Nd.g, !1) && (0, yd.e)()
    }
    let ed = null,
      Id = null,
      ld = null;

    function Cd() {
      return ed ??= nd().then((async dd => {
        const Od = null !== dd && !(0, Qd.p)(dd),
          md = {
            indirectHangs: Od && await (0, Qd.N)(dd, window.location.search),
            storagePullBreaks: Od && (0, Qd.V)(dd, window.location.search),
            splitPassBreaks: Od && (0, Qd.T)(dd, window.location.search),
            earlySky: Od && (0, Qd.L)(dd, window.location.search),
            instancedTerrain: Od ? (0, Qd.P)(dd, window.location.search) : null,
            cellLight: Od && await (0, Rd.g)("cellLight"),
            framesAhead: (0, Qd.i)(window.location.search, Od ? dd : null),
            webGpuRestores: !Od || (0, Qd.X)(dd, (0, od.c)()),
            bufferCopiesCrash: Od && (0, Qd.I)(dd, window.location.search),
            firstVertex: Od ? (0, td.h)(dd.backend, window.location.search) : void 0
          };
        return Id = md.indirectHangs, ld = !md.webGpuRestores, md
      })), ed
    }

    function Zd() {
      return Id
    }

    function kd() {
      return ld
    }
    async function fd() {
      const dd = null === Td ? null : await Td;
      return null !== dd && (0, Qd.p)(dd) && (Td = null, ed = null, Id = null, ld = null), nd()
    }
  },
  42811: (dd, Od, md) => {
    md.d(Od, {
      d: () => hd,
      e: () => vd
    });
    var Wd = md(37688),
      Fd = md(42640),
      Rd = md(5055),
      Xd = md(364),
      Kd = md(38087);
    async function hd(dd, Od) {
      return await Promise.all([(0, Rd.g)(void 0, !0), (0, Xd.p)()]), (0, Wd.l)(dd, Fd.e, {
        ...Od,
        memoryMaximumBytes: (0, Kd.l)()
      })
    }
    async function vd() {
      return await (0, Rd.g)(void 0, !0), (0, Wd.n)((0, Kd.l)())
    }
  },
  42665: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      h: () => Rd
    });
    var Wd = md(310);
    const Fd = "provokingVertex";

    function Rd(dd, Od) {
      if ("webgl" !== dd) return;
      const md = new URLSearchParams(Od).get(Fd);
      return "first" === md || "last" !== md && null
    }
    const Xd = new WeakSet;

    function Kd(dd, Od) {
      var md, Fd;
      let Rd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (md = null === (Fd = globalThis.navigator) || void 0 === Fd ? void 0 : Fd.userAgent) && void 0 !== md ? md : "";
      try {
        !1 === Od || Xd.has(dd) || (Xd.add(dd), dd.addEventListener("webglcontextrestored", (() => {
          Kd(dd, Od, Rd)
        })));
        const md = dd.getContext("webgl2");
        if (null === md || md.isContextLost()) return !1;
        if (!(null !== Od && void 0 !== Od ? Od : function(dd, Od) {
            var md, Fd;
            const Rd = dd.getExtension("WEBGL_debug_renderer_info");
            if (null === Rd) return !1;
            return function(dd, Od, md) {
              return md.includes("Windows") && "adreno_6" === (0, Wd.j)(dd, Od)
            }(String(null !== (md = dd.getParameter(Rd.UNMASKED_VENDOR_WEBGL)) && void 0 !== md ? md : ""), String(null !== (Fd = dd.getParameter(Rd.UNMASKED_RENDERER_WEBGL)) && void 0 !== Fd ? Fd : ""), Od)
          }(md, Rd))) return !1;
        const Fd = md.getExtension("WEBGL_provoking_vertex");
        return null !== Fd && (Fd.provokingVertexWEBGL(Fd.FIRST_VERTEX_CONVENTION_WEBGL), console.info("WebGL2 draws flat varyings from the first vertex (WEBGL_provoking_vertex)"), !0)
      } catch (hd) {
        return console.warn("WebGL2's provoking vertex couldn't be set: flat varyings draw from the last vertex", hd), !1
      }
    }
  },
  42677: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd,
      g: () => Kd,
      j: () => Qd,
      k: () => Xd
    });
    var Wd = md(399),
      Fd = md(720);
    let Rd;

    function Xd(dd) {
      var Od;
      const md = Rd;
      return Rd = void 0, null !== (Od = hd(dd)) && void 0 !== Od ? Od : md
    }

    function Kd(dd) {
      try {
        const Od = hd(dd);
        void 0 !== Od && (Rd = Od, (0, Fd.f)((0, Wd.n)(Od.reason, Od.message)))
      } catch (Od) {
        console.warn("Couldn't keep the WebGPU loss's cause", Od)
      }
    }

    function hd(dd) {
      var Od;
      const md = null === dd || void 0 === dd || null === (Od = dd.KKd) || void 0 === Od ? void 0 : Od.call(dd),
        Wd = null === dd || void 0 === dd ? void 0 : dd.XKd();
      if (void 0 === Wd) return;
      const Fd = new Error(Wd);
      return void 0 !== md && (Fd.reason = md), Fd
    }

    function vd(dd) {
      return dd instanceof Error ? dd : void 0
    }

    function Qd(dd, Od) {
      return "lost" !== dd && "frames_refused" !== dd ? {} : (0, Wd.n)("frames_refused" === dd ? dd : null === Od || void 0 === Od ? void 0 : Od.reason, null === Od || void 0 === Od ? void 0 : Od.message)
    }
  },
  42721: (dd, Od, md) => {
    md.d(Od, {
      d: () => Bd,
      g: () => Ed,
      h: () => wd,
      k: () => gd,
      m: () => xd,
      p: () => Vd,
      s: () => ud,
      t: () => Ad
    });
    var Wd = md(5571),
      Fd = md(42729),
      Rd = md(35387);
    const Xd = 1,
      Kd = 18,
      hd = 19,
      vd = 20,
      Qd = 21,
      td = 22,
      od = 23,
      Nd = {
        [Xd]: "link",
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
        [Kd]: "retry linked",
        [hd]: "fallback linked",
        [vd]: "fallback failed",
        [Qd]: "link stalled",
        [td]: "link left pending",
        [od]: "moved to general",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function qd(dd, Od, md) {
      return dd === Kd ? "program retry" : dd === Xd ? "program link" : dd === Qd ? "program link stall" : dd === td ? "program link pending" : dd === hd || dd === vd || dd === od ? `program ${Od} ${md}` : "program"
    }
    const Hd = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain",
        5: "scene warm stuck"
      },
      yd = {
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
      bd = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      Td = {
        11: "none read after view",
        12: "some read after view"
      },
      pd = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...Td
      },
      Yd = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function gd(dd, Od) {
      return dd === Wd.p.RenderSerialLinks && void 0 !== Td[Od]
    }

    function wd(dd, Od) {
      return dd === Wd.p.RenderInternal && (Od >>> 8 & 255) === td
    }

    function Ed(dd, Od) {
      return dd === Wd.p.RenderSerialLinks && void 0 !== Yd[15 & Od]
    }
    const Jd = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function Ud(dd, Od) {
      var md;
      return null !== (md = dd[Od]) && void 0 !== md ? md : (0, Rd.d)(Od)
    }

    function xd() {
      return (0, Rd.d)((0, Fd.b)())
    }

    function Bd(dd, Od) {
      switch (dd) {
        case Wd.p.RenderSceneRowNotDrawn:
          return {
            words: ` ${Ud(yd,Od)}`, instance: String(Od), group: String(dd)
          };
        case Wd.p.RenderChunkMeshNotDrawn: {
          const md = 0 === (128 & Od) ? "" : " shortage",
            Wd = Od >>> 8;
          return {
            words: ` ${Ud(bd,127&Od)}${md}${0===Wd?"":` kind ${(0,Rd.d)(Wd)}`}`,
            instance: String(Od),
            group: String(dd)
          }
        }
        case Wd.p.RenderInternal: {
          const md = Ud(Hd, 255 & Od),
            Wd = Od >>> 8 & 255;
          if (0 === Wd) return {
            words: ` ${md}`,
            instance: String(Od),
            group: String(dd)
          };
          const Fd = Ud(Nd, Wd),
            Xd = Od >>> 16;
          return {
            words: ` ${md} ${Fd} program ${(0,Rd.d)(Xd)}`,
            instance: `${md} ${Fd} ${Xd}`,
            group: qd(Wd, Fd, md),
            gpuDetails: {
              programFailure: Fd,
              program: String(Xd)
            }
          }
        }
        case Wd.p.RenderSerialLinks: {
          if (Ed(dd, Od)) {
            const dd = function(dd) {
              const Od = (Od, md) => (0, Rd.d)(dd >>> Od & (1 << md) - 1),
                md = dd >>> 30 & 1 ? " restored" : "";
              return `link census ${Yd[15&dd]} linked ${Od(22,8)} failed ${Od(4,6)} retried ${Od(10,6)} fallback ${Od(16,6)}${md}`
            }(Od);
            return {
              words: ` ${dd}`,
              instance: String(15 & Od),
              group: "link census",
              gpuDetails: {
                linkCensus: dd
              }
            }
          }
          const md = Ud(pd, Od);
          return {
            words: ` ${md}`,
            instance: String(Od),
            group: String(dd),
            gpuDetails: {
              serialLinks: md
            }
          }
        }
        case Wd.p.RenderGlErrorAfterRestore: {
          const md = Ud(Jd, 65535 & Od),
            Wd = Od >>> 16,
            Fd = 65535 !== Wd;
          return {
            words: ` ${md}${Fd?` program ${(0,Rd.d)(Wd)}`:""}`,
            instance: String(Od),
            group: String(dd),
            gpuDetails: Fd ? {
              glError: md,
              program: String(Wd)
            } : {
              glError: md
            }
          }
        }
        default:
          return null
      }
    }
    const Sd = 2,
      sd = new Map;

    function ud(dd) {
      let {
        group: Od,
        instance: md
      } = dd, Wd = sd.get(Od);
      return void 0 === Wd && (Wd = [], sd.set(Od, Wd)), !Wd.includes(md) && (Wd.length >= Sd || (Wd.push(md), !1))
    }

    function Vd() {
      return sd.size > 0
    }

    function Ad() {
      sd.clear()
    }
  },
  42701: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      g: () => Rd
    });
    var Wd = md(42709);
    const Fd = new WeakSet;
    const Rd = {
        webgpu: async () => (function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === dd || Fd.has(dd.prototype)) return;
          Fd.add(dd.prototype);
          const Od = dd.prototype.requestDevice;
          dd.prototype.requestDevice = function(dd) {
            var md;
            const Fd = null !== (md = null === dd || void 0 === dd ? void 0 : dd.requiredLimits) && void 0 !== md ? md : {},
              Rd = Object.keys(Fd).filter((dd => !(dd in this.limits)));
            if (0 === Rd.length) return Od.call(this, dd);
            const Xd = Object.fromEntries(Object.entries(Fd).filter((dd => {
              let [Od] = dd;
              return Od in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${Rd.join(", ")}`), (0, Wd.reportDroppedRequiredLimits)(Rd), Od.call(this, {
              ...dd,
              requiredLimits: Xd
            })
          }
        }(), (await md.e(8).then((() => md(55031)))).bloxdWasmWebgpu),
        webgl: async () => (await md.e(6).then((() => md(55035)))).bloxdWasmWebgl,
        webgl1: async () => (await md.e(7).then((() => md(55046)))).bloxdWasmWebgl1
      },
      Xd = async () => (await md.e(5).then((() => md(55056)))).compileAnimationPackInWasm
  },
  42763: (dd, Od, md) => {
    md.d(Od, {
      e: () => bd,
      i: () => yd,
      j: () => gd
    });
    var Wd = md(7592),
      Fd = md(32),
      Rd = md(4940),
      Xd = md(5571),
      Kd = md(7586),
      hd = md(42770);

    function vd(dd, Od) {
      const md = (0, Kd.e)(Od.variants);
      return dd.setShaderPack(md.variantFlags, md.hooks, md.moduleCodes, (0, hd.w)(Od.layers), hd.l[Od.policy], Od.keepCircleShadows)
    }
    const Qd = 0,
      td = 1,
      od = 2,
      Nd = "shaderPack:failedToCompile",
      qd = new Set(["no_webgpu_api", "no_adapter", "compatibility_held", "software_adapter", "adapter_error", "start_no_adapter"]),
      Hd = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function yd(dd, Od, md) {
      var Wd;
      const Fd = null !== (Wd = null === dd || void 0 === dd ? void 0 : dd.reason) && void 0 !== Wd ? Wd : "none";
      return qd.has(Fd) ? {
        messageKey: Od ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === Fd && "override" === (null === dd || void 0 === dd ? void 0 : dd.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: Hd.has(Fd) && !md ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class bd extends Error {
      constructor(dd) {
        super(`the shader pack can't run in this game: ${dd}`), this.messageKey = dd, this.name = "ShaderPackJoinError"
      }
    }
    const Td = "strict";
    class pd {
      constructor(dd) {
        this.deps = dd, this.pagePack = void 0, this.loaded = null, this.policy = Td, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = dd.load().catch((Od => (dd.warn("the shader pack could not load: the game draws without it", Od), {
          status: "none"
        }))).then((dd => (this.loaded = dd, "active" === dd.status && (this.handOverToPreviews(dd), null !== dd.harnessPolicy && (this.policy = dd.harnessPolicy, this.handOver())), dd)))
      }
      async join(dd) {
        this.leave();
        const Od = this.game,
          [md, Fd] = await Promise.all([this.pagePack, this.policyOf(dd)]);
        if (Od !== this.game || "none" === md.status) return null;
        const Rd = "active" === md.status ? md.pack.variants : md.variants,
          Xd = (0, Wd.k)(Rd, Fd);
        if (Xd && "active" === md.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (Xd) {
          const dd = this.cantRun(md, Fd);
          if (null !== dd) return dd
        } else if ("blocked" === md.status || null === this.deps.core) return null;
        return this.policy = Fd, this.handOver(), Xd && this.refused ? Nd : (this.joined = !0, this.offInThisGame = !Xd, null)
      }
      async replay(dd) {
        const Od = await this.join(dd);
        null === Od ? this.playable() : this.deps.failInGame(Od)
      }
      cantRun(dd, Od) {
        const {
          core: md,
          noWebGpu: Wd
        } = this.deps;
        if ("blocked" === dd.status) {
          return "shaderPack:failedUnchecked" === dd.messageKey && null === md && Wd.noAdapter ? Wd.messageKey : dd.messageKey
        }
        return this.refused || this.failedPolicies.has(Od) ? Nd : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var dd;
        return this.runsInJoinedGame() && "active" === (null === (dd = this.loaded) || void 0 === dd ? void 0 : dd.status) ? function(dd, Od) {
          const md = dd.filter((dd => (0, Wd.k)([dd], Od))),
            Fd = dd => md.some((Od => Od[dd]));
          return {
            sceneDepth: Fd("sceneDepth"),
            sunShadow: Fd("sunShadow"),
            airShadow: Fd("airShadow")
          }
        }(this.loaded.pack.variants, this.policy) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(Nd) : (null !== this.couldntRun ? this.notify(Rd.d, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.policy) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(dd) {
        for (const {
            code: Od,
            detail: md
          }
          of dd)
          if (Od === Xd.p.RenderShaderPackNotRun) switch (255 & md) {
            case Qd:
              this.refused = !0, this.failed();
              break;
            case td:
              this.failedPolicies.add(this.policy), this.failed();
              break;
            case od:
              this.failedModelPolicies.add(this.policy), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(Nd) : this.failedWhileJoining = !0)
      }
      fail(dd) {
        this.leave(), this.deps.failInGame(dd)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(dd, Od) {
        const md = this.game;
        this.deps.notify(dd, (() => md === this.game && this.joined), Od)
      }
      handOver() {
        var dd;
        const {
          core: Od
        } = this.deps;
        null !== Od && "active" === (null === (dd = this.loaded) || void 0 === dd ? void 0 : dd.status) && (vd(Od, {
          ...this.loaded.pack,
          policy: this.policy
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(dd) {
        let {
          pack: Od,
          harnessPolicy: md
        } = dd;
        const {
          previews: Wd
        } = this.deps;
        null !== Wd && vd(Wd, {
          ...Od,
          policy: null !== md && void 0 !== md ? md : Td
        })
      }
      policyOf(dd) {
        return this.deps.policyOf(dd).catch((dd => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", dd), Td)))
      }
    }
    const Yd = "wasmShaderPackNotice";

    function gd(dd, Od, md, Wd) {
      return Fd.j.subscribe(Yd, (dd => {
        let {
          translationKey: Od,
          stillCurrent: md,
          reasonKey: Wd
        } = dd;
        md() && Fd.j.lQ("chat", (0, Rd.i)(Od, Wd))
      })), new pd({
        load: wd,
        policyOf: Ed,
        core: dd,
        previews: Od,
        noWebGpu: md,
        notify: (dd, Od, md) => {
          const Wd = {
            translationKey: dd,
            stillCurrent: Od,
            reasonKey: md
          };
          Fd.j.lQ(Yd, Wd, !0)
        },
        failInGame: dd => {
          Fd.j.lQ(Rd.h, dd)
        },
        warn: Wd
      })
    }
    async function wd() {
      const [{
        shaderPackPage: dd,
        harnessShaderPackMode: Od
      }, {
        shaderPackTextures: Wd
      }] = await Promise.all([md.e(138).then((() => md(40819))), md.e(139).then((() => md(7583)))]), Fd = await dd.load();
      return "active" !== Fd.status ? Fd : {
        status: "active",
        pack: {
          variants: Fd.pack.variants,
          layers: Wd().layers,
          keepCircleShadows: Fd.pack.keepCircleShadows
        },
        harnessPolicy: Od()
      }
    }
    async function Ed(dd) {
      var Od;
      const [{
        shaderPackPage: Wd,
        harnessShaderPackMode: Fd
      }, {
        getShaderPackPolicy: Rd
      }] = await Promise.all([md.e(138).then((() => md(40819))), md.e(108).then((() => md(45310)))]);
      return await Wd.load(), null !== (Od = Fd()) && void 0 !== Od ? Od : Rd(dd)
    }
  },
  42797: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      f: () => yd,
      i: () => hd,
      l: () => vd,
      m: () => Qd,
      n: () => od
    });
    var Wd = md(37729),
      Fd = md(42804);
    const Rd = "atlas:",
      Xd = 3e4;
    class Kd extends Error {
      constructor(dd, Od) {
        super(`fetching ${dd} answered HTTP ${Od}`), this.url = dd, this.status = Od, this.name = "TerrainTextureFetchError"
      }
    }

    function hd(dd) {
      if (!dd.startsWith(Rd)) return null;
      const Od = Number(dd.slice(Rd.length));
      return Number.isInteger(Od) && Od >= 0 ? Od : null
    }
    async function vd() {
      const dd = await md.e(235).then((() => md(35669)));
      return {
        atlasSheets: dd.blockAtlasUrls,
        texture: Od => {
          var md, Wd, Rd;
          return null !== (md = null !== (Wd = null !== (Rd = dd.animatedBlockTextures[Od]) && void 0 !== Rd ? Rd : dd.rotatedBlockTextures[Od]) && void 0 !== Wd ? Wd : Fd.b[Od]) && void 0 !== md ? md : null
        }
      }
    }
    async function Qd(dd) {
      const Od = new AbortController,
        md = setTimeout((() => {
          Od.abort(new DOMException(`${dd} took over ${Xd} ms`, "TimeoutError"))
        }), Xd);
      let Wd;
      try {
        const md = await fetch(dd, {
          signal: Od.signal
        });
        if (!md.ok) throw new Kd(dd, md.status);
        Wd = await md.blob()
      } finally {
        clearTimeout(md)
      }
      const Fd = await createImageBitmap(Wd, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return od(Fd)
      } finally {
        Fd.close()
      }
    }
    const td = 8192;

    function od(dd) {
      const {
        width: Od,
        height: md
      } = dd, Fd = Math.max(1, Math.min(md, td)), Rd = (0, Wd.i)(Od, Fd, {
        willReadFrequently: !0
      });
      if (!Rd) throw new Error("no 2D context to read the texture back");
      Rd.globalCompositeOperation = "copy";
      const Xd = new Uint8Array(Od * md * 4);
      for (let Wd = 0; Wd < md; Wd += Fd) {
        const Kd = Math.min(Fd, md - Wd);
        Rd.drawImage(dd, 0, Wd, Od, Kd, 0, 0, Od, Kd), Xd.set(Rd.getImageData(0, 0, Od, Kd).data, Wd * Od * 4)
      }
      return {
        width: Od,
        height: md,
        pixels: Xd
      }
    }
    async function Nd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Qd;
      const Wd = [],
        Fd = await Promise.all(dd.map((async dd => {
          var Fd, Xd;
          const Kd = null !== (Fd = null === (Xd = Od.decoded) || void 0 === Xd ? void 0 : Xd.call(Od, dd)) && void 0 !== Fd ? Fd : null,
            vd = null === Kd ? function(dd, Od) {
              if (dd.startsWith(Rd)) {
                var md;
                const Wd = hd(dd);
                return null === Wd ? null : null !== (md = Od.atlasSheets[Wd]) && void 0 !== md ? md : null
              }
              return Od.texture(dd)
            }(dd, Od) : null,
            Qd = null !== Kd && void 0 !== Kd ? Kd : null === vd ? null : md(vd);
          if (null === Qd) return Wd.push({
            name: dd,
            url: vd,
            error: new Error(`no URL for terrain texture ${dd}`)
          }), null;
          try {
            const Od = await Qd;
            if (Od.pixels.byteLength !== Od.width * Od.height * 4) throw new Error(`decoded ${Od.pixels.byteLength} bytes for ${Od.width}x${Od.height} texels`);
            return {
              name: dd,
              texture: Od
            }
          } catch (td) {
            return Wd.push({
              name: dd,
              url: vd,
              error: td
            }), null
          }
        }))),
        Xd = Fd.filter((dd => null !== dd)),
        Kd = new Uint32Array(2 * Xd.length);
      Xd.forEach(((dd, Od) => {
        let {
          texture: md
        } = dd;
        Kd[2 * Od] = md.width, Kd[2 * Od + 1] = md.height
      }));
      return {
        handOver: {
          names: Xd.map((dd => {
            let {
              name: Od
            } = dd;
            return Od
          })),
          textures: Xd.map((dd => {
            let {
              texture: Od
            } = dd;
            return Od.pixels
          })),
          sizes: Kd
        },
        failures: Wd
      }
    }
    const qd = [2e3, 1e4, 3e4, 6e4, 12e4];

    function Hd() {}
    class yd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qd,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = dd, this.retryMs = Od, this.keepBelow = md, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vd,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Wd = ++this.started,
          Fd = {
            decode: md.decode,
            wholeAtlas: md.wholeAtlas
          };
        return this.loadAndHandOver(Od, Fd, dd, (() => {
          var dd;
          return Wd < this.landed || !1 === (null === (dd = md.wanted) || void 0 === dd ? void 0 : dd.call(md))
        }), {
          onTaken: (dd, md) => {
            this.landed = Wd, this.current = {
              mine: Wd,
              sources: Od,
              load: Fd,
              kQ: dd,
              failed: md
            }
          }
        })
      }
      restore(dd) {
        var Od;
        const md = this.current;
        if (null === md) return Promise.resolve(null);
        if ((null === (Od = this.restoring) || void 0 === Od ? void 0 : Od.mine) === md.mine) return this.restoring.done;
        const Wd = {
          mine: md.mine,
          done: this.restoreLanded(md, dd).finally((() => {
            this.restoring === Wd && (this.restoring = null)
          }))
        };
        return this.restoring = Wd, Wd.done
      }
      async restoreLanded(dd, Od) {
        const md = () => this.landed !== dd.mine,
          {
            kQ: Wd
          } = dd;
        if (null !== Wd) return this.stopped() ? null : this.core.setTerrainTextures(Wd.names, Wd.textures, Wd.sizes);
        let Fd = Od;
        for (let Rd = 0;; Rd++) {
          const Od = this.retryMs.at(Rd),
            Wd = {
              allOrNothingExcept: void 0 === Od ? void 0 : dd.failed
            },
            Xd = await this.loadAndHandOver(dd.sources, dd.load, Fd, md, Wd);
          if (!1 !== Xd || void 0 === Od || this.stopped()) return Xd;
          if (Fd = Hd, await new Promise((dd => {
              setTimeout(dd, Od)
            })), md()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const Rd = this.core.terrainTextureNames();
        var Xd;
        if (0 === Rd.length) return null === (Xd = Fd.onTaken) || void 0 === Xd || Xd.call(Fd, null, new Set), !0;
        let Kd, vd;
        try {
          Kd = await dd(), vd = await Nd(Rd, Kd, Od.decode)
        } catch (yd) {
          return Wd() ? null : (md({
            name: null,
            url: null,
            error: yd
          }), !1)
        }
        if (Wd() || this.stopped()) return null;
        for (const hd of vd.failures) md(hd);
        const Qd = Fd.allOrNothingExcept;
        if (void 0 !== Qd && vd.failures.some((dd => {
            let {
              name: Od
            } = dd;
            return null === Od || !Qd.has(Od)
          })) || !0 === Od.wholeAtlas && vd.failures.some((dd => {
            let {
              name: Od
            } = dd;
            return null === Od || null !== hd(Od)
          }))) return !1;
        const {
          handOver: td
        } = vd, od = function(dd) {
          return dd.textures.reduce(((dd, Od) => dd + Od.byteLength), 0)
        }(td) < this.keepBelow, qd = this.core.setTerrainTextures(td.names, td.textures, td.sizes, od ? void 0 : () => {
          !async function(dd, Od) {
            await Od;
            for (const {
                buffer: Wd
              }
              of dd) {
              const dd = Wd;
              var md;
              if (!dd.detached) null === (md = dd.transfer) || void 0 === md || md.call(dd, 0)
            }
          }(td.textures, Kd.heldUntil)
        });
        if (qd) {
          var Hd;
          const dd = new Set(vd.failures.flatMap((dd => {
            let {
              name: Od
            } = dd;
            return null === Od ? [] : [Od]
          })));
          null === (Hd = Fd.onTaken) || void 0 === Hd || Hd.call(Fd, od ? td : null, dd)
        }
        return qd
      }
    }
  },
  35490: (dd, Od, md) => {
    md.d(Od, {
      b: () => vd,
      d: () => td,
      e: () => Qd
    });
    var Wd = md(310),
      Fd = md(107),
      Rd = md(145),
      Xd = md(141),
      Kd = md(725);
    const hd = new Set(["mali_bifrost"]);

    function vd() {
      if (Kd.e) return;
      const dd = (0, Fd.pageOperatingSystem)();
      if ("android" !== dd && "windows" !== dd || (0, Kd.b)("webgl_default")) return;
      if ("windows" === dd) return dd => "qualcomm" === (0, Fd.normaliseGpuVendor)((0, Xd.d)(dd).vendor);
      const Od = (0, Rd.p)(),
        md = null === Od ? (0, Wd.v)() : (0, Wd.j)(Od.vendor, Od.renderer);
      return null !== md && hd.has(md) ? dd => (0, Wd.q)((0, Xd.d)(dd).vendor, md) : void 0
    }

    function Qd(dd, Od) {
      return dd ? () => !0 : Od()
    }
    async function td(dd) {
      try {
        const Od = Qd(dd, vd),
          md = navigator.gpu;
        if (void 0 === Od || void 0 === md) return !1;
        const Wd = await (0, Xd.o)(md, {
          seed: !1,
          compatibility: Od
        });
        return "string" !== typeof Wd && Wd.compatibility && !(0, Xd.k)(Wd.adapter)
      } catch (Od) {
        return console.error("WebGPU compatibility-mode adapter request failed.", Od), !1
      }
    }
  },
  42729: (dd, Od, md) => {
    md.d(Od, {
      b: () => hd,
      e: () => vd
    });
    var Wd = md(107),
      Fd = md(5064);
    const Rd = "webgpuPipeline";

    function Xd(dd) {
      return dd.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let Kd = null;

    function hd() {
      if (null === Kd) try {
        dd = (0, Wd.getBrowserName)(), Od = (0, Wd.getBrowserVersion)(), md = (0, Wd.getOperatingSystem)(), Fd = (0, Wd.getOperatingSystemVersion)(), Kd = `${dd.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===Od?"unknown":Xd(Od)}-${md}${void 0===Fd?"":`_${Xd(Fd)}`}`
      } catch (Rd) {
        console.warn("The user agent couldn't be read for its browser code", Rd), Kd = "unknown"
      }
      var dd, Od, md, Fd;
      return Kd
    }

    function vd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const Od = `WGPU-${hd()}`,
        Wd = (dd, Wd) => {
          const {
            reason: Xd,
            message: Kd
          } = Wd, hd = String(Kd);
          if ((0, Fd.q)(Xd, hd)) return;
          const vd = {
            pipeline: null !== dd && void 0 !== dd ? dd : "",
            reason: String(Xd),
            browserMessage: hd
          };
          Promise.resolve().then((() => md(42709))).then((dd => {
            let {
              reportCrash: md
            } = dd;
            md({
              kind: "coreError",
              code: Od,
              site: Rd,
              fatal: !1,
              message: `${vd.pipeline} ${vd.reason}: ${vd.browserMessage}`,
              details: vd,
              error: Wd
            })
          })).catch((dd => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", dd)
          }))
        },
        Xd = dd.createRenderPipelineAsync;
      dd.createRenderPipelineAsync = function(dd) {
        return Xd.call(this, dd).catch((Od => {
          throw Wd(dd.label, Od), Od
        }))
      };
      const Kd = dd.createComputePipelineAsync;
      dd.createComputePipelineAsync = function(dd) {
        return Kd.call(this, dd).catch((Od => {
          throw Wd(dd.label, Od), Od
        }))
      }
    }
  },
  42673: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd,
      h: () => hd
    });
    var Wd = md(145);
    let Fd = !1;

    function Rd() {
      let dd = null;
      try {
        return dd = document.createElement("canvas").getContext("webgl2"), null !== dd
      } catch {
        return !1
      } finally {
        try {
          var Od, md;
          null === (Od = dd) || void 0 === Od || null === (md = Od.getExtension("WEBGL_lose_context")) || void 0 === md || md.loseContext()
        } catch {}
      }
    }

    function Xd() {
      "hidden" === document.visibilityState && (Fd = !1, document.removeEventListener("visibilitychange", Xd))
    }

    function Kd() {
      Fd || "visible" !== document.visibilityState || !(0, Wd.q)() && !Rd() || (Fd = !0, document.addEventListener("visibilitychange", Xd))
    }

    function hd() {
      return Fd || Rd()
    }
  },
  42656: (dd, Od, md) => {
    dd.exports = md.p + "static/media/bloxd_wasm_models_bg.bcb5a039647a5110be86.wasm"
  },
  42649: (dd, Od, md) => {
    dd.exports = md.p + "static/media/bloxd_wasm_workers_bg.90b05c84385377d1ddee.wasm"
  },
  42640: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd,
      e: () => Wd
    });
    const Wd = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new md.U(md(42649))
      }
    };
    const Fd = {
      name: "bloxd_wasm_models",
      url: function() {
        return new md.U(md(42656))
      }
    }
  },
  7586: (dd, Od, md) => {
    md.d(Od, {
      e: () => Yd,
      f: () => gd,
      g: () => Td,
      j: () => bd
    });
    var Wd = md(7592);
    const Fd = 6,
      Rd = 3,
      Xd = 1,
      Kd = 2,
      hd = 4,
      vd = 8,
      Qd = 16,
      td = 32,
      od = 64,
      Nd = 128,
      qd = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Hd(dd) {
      if (!dd) return 0;
      const Od = qd.indexOf(dd);
      if (Od <= 0) throw new Error(`"${dd}" is not a shader pack hook function`);
      return Od
    }

    function yd(dd) {
      if (0 === dd) return null;
      const Od = qd[dd];
      if (void 0 === Od) throw new Error(`${dd} is not a shader pack hook function id`);
      return Od
    }

    function bd(dd) {
      const Od = Wd.c.length;
      return {
        strict: dd >= Od,
        program: Wd.c[dd % Od]
      }
    }

    function Td(dd) {
      return Number(dd.strict) * Wd.c.length + Wd.c.indexOf(dd.program)
    }

    function pd(dd) {
      return "" === dd ? [] : dd.split(" ")
    }

    function Yd(dd) {
      const Od = {
        variantFlags: new Uint8Array(Fd),
        hooks: new Uint8Array(Fd * Rd),
        moduleCodes: Array(Fd).fill(""),
        reads: Array(2 * Fd).fill("")
      };
      for (const md of dd) {
        const dd = Td(md.key),
          Wd = (dd, Od) => null === md.hooks.surface || md.reads.fragment.includes(dd) ? 0 : Od;
        Od.variantFlags[dd] = (md.sceneDepth ? Xd : 0) | (md.movesVertices ? Kd : 0) | (md.sunShadow ? hd : 0) | (md.airShadow ? vd : 0) | (md.discards ? Qd : 0) | Wd("localPosition", td) | Wd("enchantSpeed", od) | Wd("enchantTier", Nd), Od.hooks[dd * Rd] = Hd(md.hooks.vertex), Od.hooks[dd * Rd + 1] = Hd(md.hooks.surface), Od.hooks[dd * Rd + 2] = Hd(md.hooks.light), Od.moduleCodes[dd] = md.moduleCode, Od.reads[2 * dd] = md.reads.vertex.join(" "), Od.reads[2 * dd + 1] = md.reads.fragment.join(" ")
      }
      return Od
    }

    function gd(dd) {
      const {
        hooks: Od,
        moduleCodes: md,
        reads: Wd
      } = dd;
      return Array.from(dd.variantFlags, ((dd, Fd) => {
        const td = Fd * Rd;
        return {
          key: bd(Fd),
          hooks: {
            vertex: yd(Od[td]),
            surface: yd(Od[td + 1]),
            light: yd(Od[td + 2])
          },
          moduleCode: md[Fd],
          sceneDepth: 0 !== (dd & Xd),
          sunShadow: 0 !== (dd & hd),
          airShadow: 0 !== (dd & vd),
          movesVertices: 0 !== (dd & Kd),
          discards: 0 !== (dd & Qd),
          reads: {
            vertex: pd(Wd[2 * Fd]),
            fragment: pd(Wd[2 * Fd + 1])
          }
        }
      }))
    }
  },
  42770: (dd, Od, md) => {
    md.d(Od, {
      D: () => qd,
      c: () => Fd,
      e: () => Wd,
      i: () => od,
      k: () => Qd,
      l: () => yd,
      n: () => Rd,
      p: () => Kd,
      r: () => hd,
      s: () => Xd,
      w: () => Hd,
      z: () => Nd
    });
    const Wd = 3,
      Fd = 0,
      Rd = 1,
      Xd = 2,
      Kd = {
        uniform: 3,
        QN: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      hd = 10,
      vd = "BloxdPackInputs",
      Qd = "bloxdPackInputs",
      td = [{
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
      od = 80;

    function Nd() {
      const dd = td.map((dd => {
        let {
          name: Od,
          type: md
        } = dd;
        return `    ${Od}: ${md},\n`
      })).join("");
      return `struct ${vd} {\n${dd}}\n@group(${Wd}) @binding(${Fd}) var<uniform> ${Qd}: ${vd};\n`
    }

    function qd(dd, Od) {
      const md = new DataView(dd, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, od),
        [Wd, Fd, Rd, Xd, Kd, hd] = td;
      md.setFloat32(Wd.offset, Od.seconds, !0), md.setUint32(Fd.offset, Od.lit ? 1 : 0, !0);
      for (let vd = 0; vd < 3; vd++) md.setInt32(Rd.offset + 4 * vd, Od.renderOffset[vd], !0), md.setFloat32(Xd.offset + 4 * vd, Od.TOd[vd], !0), md.setFloat32(Kd.offset + 4 * vd, Od.eyePosition[vd], !0), md.setFloat32(hd.offset + 4 * vd, Od.shadowDirection[vd], !0)
    }

    function Hd(dd) {
      const Od = new Uint32Array(Math.max(1, dd.length));
      return dd.forEach(((dd, md) => {
        let {
          id: Wd,
          rotation: Fd
        } = dd;
        Od[md] = 65535 & Wd | (3 & Fd) << 16
      })), Od
    }
    const yd = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7592: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      g: () => Xd,
      k: () => Kd,
      m: () => Fd,
      q: () => Rd
    });
    const Wd = ["terrain", "liquid", "model"];

    function Fd() {
      const dd = [];
      for (const Od of [!1, !0])
        for (const md of Wd) dd.push({
          strict: Od,
          program: md
        });
      return dd
    }

    function Rd(dd) {
      return `${dd.strict?"strict":"allow"}.${dd.program}`
    }

    function Xd(dd) {
      return !dd.hooks.vertex && !dd.hooks.surface && !dd.hooks.light
    }

    function Kd(dd, Od) {
      return "off" !== Od && (null === dd || dd.some((dd => dd.key.strict === ("strict" === Od) && !Xd(dd))))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);