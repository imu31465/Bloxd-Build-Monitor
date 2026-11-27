export const id = 161;
export const ids = [161];
export const modules = {
  35086: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      c: () => PW
    });
    var mW = OW(248),
      EW = OW(131),
      NW = OW(35089);

    function PW() {
      var WW, iW, OW;
      return null !== (WW = (0, mW.m)(null !== (iW = null === (OW = (0, EW.j)()) || void 0 === OW ? void 0 : OW.renderer) && void 0 !== iW ? iW : null, (0, EW.f)())) && void 0 !== WW ? WW : "unknown"
    }

    function LW(WW, iW, OW, mW, EW) {
      const PW = null === iW ? "untimed" : `${Math.round(iW)} ms`;
      return `frames stalled, ${OW}, gpu ${(0,NW.d)(EW)}, blocking ${PW}, drawn ${Math.round(WW)} ms apart, timers ${mW.timers}, timer gap ${Math.round(mW.longestGapMs)} ms`
    }
  },
  40267: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => cW
    });
    var mW = OW(10181),
      EW = OW(37727),
      NW = OW(40269);
    const PW = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      LW = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function cW(WW, iW) {
      if (WW instanceof EW.c) return {
        at: PW[iW],
        code: 0
      };
      const OW = (0, mW.f)(WW),
        cW = "number" === typeof OW ? OW : 0;
      return null !== (0, NW.i)(cW).name ? {
        at: "refused",
        code: cW
      } : {
        at: LW[iW],
        code: cW
      }
    }
  },
  10181: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      f: () => PW,
      h: () => LW,
      k: () => wW,
      n: () => cW
    });
    var mW = OW(182),
      EW = OW(5318);

    function NW(WW) {
      return PW(WW) === mW.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function PW(WW) {
      return "object" === typeof WW && null !== WW ? WW.code : void 0
    }

    function LW(WW) {
      var iW;
      return null !== (iW = Object.keys(EW.d).find((iW => EW.d[iW] === WW))) && void 0 !== iW ? iW : null
    }

    function cW(WW) {
      return "notWhitelisted" === WW ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const wW = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  35089: (WW, iW, OW) => {
    function mW(WW) {
      return String(WW).replace(/\d/g, (WW => String.fromCharCode(97 + Number(WW))))
    }
    OW.d(iW, {
      d: () => mW
    })
  },
  40269: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      i: () => cW,
      k: () => PW,
      n: () => EW
    });
    var mW = OW(182);

    function EW(WW) {
      const iW = WW.endsWith(mW.j);
      return {
        text: (iW ? WW.slice(0, -mW.j.length) : WW) || null,
        dropsCache: iW
      }
    }
    const NW = "Either your internet isn't working or this is a bug.";

    function PW(WW, iW) {
      const OW = cW(WW);
      return null !== OW.name && "" === mW.e[OW.name].text && null !== iW ? iW : OW.reason
    }
    const LW = "You were removed from the game.";

    function cW(WW) {
      var iW;
      let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const EW = null !== (iW = Object.keys(mW.e).find((iW => mW.e[iW].code === WW))) && void 0 !== iW ? iW : null;
      if (null === EW) return {
        code: WW,
        name: EW,
        reason: null !== OW && void 0 !== OW ? OW : `${NW}\nCode: ${WW}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: PW,
        canReconnect: cW = !1
      } = mW.e[EW], wW = WW === mW.e.outdatedVersion.code || WW === mW.e.loadRecaptchaError.code;
      return {
        code: WW,
        name: EW,
        reason: "" !== PW ? PW : null !== OW && void 0 !== OW ? OW : WW === mW.e.gameOrPluginKick.code ? LW : `Code: ${WW}`,
        canReconnect: cW,
        automaticallyReconnect: WW === mW.e.customGameUpdated.code || WW === mW.e.duplicateLobbyNameError.code,
        requiresRefresh: wW
      }
    }
  },
  42158: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW,
      g: () => tW,
      j: () => PW,
      m: () => EW,
      n: () => LW,
      p: () => wW
    });
    class mW extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function EW(WW) {
      return WW instanceof RangeError && /call stack/i.test(WW.message) || WW instanceof Error && "InternalError" === WW.name && /recursion/i.test(WW.message)
    }
    const NW = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function PW(WW) {
      var iW;
      return WW instanceof WebAssembly.RuntimeError || WW instanceof mW || EW(WW) && NW.test(null !== (iW = WW.stack) && void 0 !== iW ? iW : "")
    }

    function LW(WW, iW) {
      if (PW(WW)) throw WW;
      console.error(iW, WW)
    }

    function cW(WW, iW, OW, EW, NW) {
      if (iW % EW !== 0 || iW + OW > WW.byteLength) throw new mW(`${NW}: ${OW} bytes at ${iW}, ${EW}-aligned, outside ${WW.byteLength} bytes of memory`)
    }

    function wW(WW, iW, OW, mW, EW) {
      return 0 === OW ? null : (cW(iW, OW, mW * WW.BYTES_PER_ELEMENT, WW.BYTES_PER_ELEMENT, EW), new WW(iW, OW, mW))
    }

    function tW(WW, iW, OW, mW, EW) {
      return 0 === iW ? null : (cW(WW, iW, OW, mW, EW), new DataView(WW, iW, OW))
    }
  },
  42216: (WW, iW, OW) => {
    OW.d(iW, {
      $: () => vW,
      B: () => Oi,
      C: () => rW,
      E: () => Pi,
      G: () => Ni,
      J: () => mi,
      K: () => ci,
      M: () => Mi,
      P: () => Li,
      Q: () => Ei,
      U: () => wi,
      V: () => eW,
      Z: () => li,
      _: () => ji,
      bb: () => gW,
      d: () => oW,
      g: () => Ki,
      h: () => Ti,
      j: () => bi,
      n: () => si,
      r: () => xi,
      s: () => ki,
      u: () => Ui,
      x: () => yi,
      z: () => Wi
    });
    var mW = OW(327),
      EW = OW(243),
      NW = OW(248),
      PW = OW(25),
      LW = OW(3866),
      cW = OW(698),
      wW = OW(5223),
      tW = OW(3837),
      ZW = OW(4666),
      xW = OW(100),
      lW = OW(136),
      AW = OW(324),
      bW = OW(39),
      jW = OW(315),
      UW = OW(119),
      kW = OW(669),
      sW = OW(299),
      MW = OW(131),
      KW = OW(128),
      SW = OW(5551),
      YW = OW(42222),
      yW = OW(1755),
      TW = OW(42225),
      JW = OW(42228),
      hW = OW(35175),
      HW = OW(42235),
      nW = OW(42240);
    const uW = "bloxd-webgpuOffAfterLoss",
      oW = "context:webgl",
      dW = "probe:threw";

    function eW(WW) {
      return WW.includes("Web page caused context loss and was blocked")
    }

    function vW() {
      const WW = document.createElement("canvas");
      let iW = "";
      WW.addEventListener("webglcontextcreationerror", (WW => {
        iW = WW.statusMessage
      }));
      try {
        var OW, mW;
        null === (OW = WW.getContext("webgl")) || void 0 === OW || null === (mW = OW.getExtension("WEBGL_lose_context")) || void 0 === mW || mW.loseContext()
      } catch (EW) {
        return String(EW)
      }
      return iW
    }

    function gW(WW) {
      let iW;
      try {
        iW = WW.getContext("webgl", {
          powerPreference: MW.b
        })
      } catch {
        iW = null
      }
      if (null === iW) return null;
      let OW = null;
      try {
        const WW = iW.getParameter(iW.MAX_TEXTURE_SIZE);
        OW = "number" === typeof WW && WW > 0 ? WW : null
      } catch {
        OW = null
      }
      try {
        var mW;
        null === (mW = iW.getExtension("WEBGL_lose_context")) || void 0 === mW || mW.loseContext()
      } catch {}
      return OW
    }
    const DW = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);

    function VW() {
      return "ios" === (0, xW.getOperatingSystem)() ? "ios" : "other"
    }
    const pW = "mali_valhall",
      fW = new Set(["nvidia_pre_turing"]),
      CW = new Set(["intel_gen7_8"]),
      XW = new Set(["powervr_rogue"]);

    function BW(WW, iW, OW) {
      return DW.has(WW) ? "android_arm" === WW && iW === pW && "mobileAndroid" !== OW ? "webgpu_default" : "webgl_default" : null
    }

    function qW(WW) {
      return function(WW) {
        try {
          return WW()
        } catch {
          return null
        }
      }((() => {
        var iW, OW, mW, PW;
        const LW = null !== (iW = null === (OW = WW.info) || void 0 === OW ? void 0 : OW.vendor) && void 0 !== iW ? iW : "";
        return "windows" === (0, xW.getOperatingSystem)() && "" !== LW && "intel" !== (0, xW.normaliseGpuVendor)(LW) ? null : ((0, xW.seedGpuVendor)(LW), BW((0, EW.i)(), (0, NW.f)(LW, null !== (mW = null === (PW = WW.info) || void 0 === PW ? void 0 : PW.architecture) && void 0 !== mW ? mW : ""), lW.siteUsed))
      }))
    }

    function RW() {
      var WW;
      return {
        gpu: null !== (WW = navigator.gpu) && void 0 !== WW ? WW : null,
        webgl2: HW.f,
        webgl1: () => function(WW) {
          let iW, OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YW.d;
          try {
            iW = WW.getContext("webgl")
          } catch {
            iW = null
          }
          if (null === iW) return [oW];
          const mW = [];
          try {
            for (const EW of OW.extensions) null === iW.getExtension(EW) && mW.push(EW);
            for (const [EW, NW] of Object.entries(OW.limits)) {
              const WW = iW[EW],
                OW = "number" === typeof WW ? iW.getParameter(WW) : null;
              ("number" !== typeof OW || OW < NW) && mW.push(`limit:${EW}`)
            }
            const WW = iW.getShaderPrecisionFormat(iW.VERTEX_SHADER, iW.HIGH_FLOAT);
            (null === WW || WW.precision < OW.vertexHighFloatBits) && mW.push("precision:vertex_high_float")
          } catch {
            mW.push(dW)
          }
          try {
            var EW;
            null === (EW = iW.getExtension("WEBGL_lose_context")) || void 0 === EW || EW.loseContext()
          } catch {}
          return mW
        }(document.createElement("canvas")),
        webgl1First: () => IW((() => function(WW, iW) {
          if ("chrome_os" !== WW) return !1;
          const OW = iW();
          return null !== OW && XW.has((0, NW.i)(OW.vendor, OW.renderer))
        }((0, xW.getOperatingSystem)(), MW.w))),
        offAfterLoss: WW => IW((() => WW ? (0, jW.H)() : PW.d.isWebGpuOffAfterLoss())),
        fewWasmMemories: sW.e,
        oldIntelDriver: WW => IW((() => (0, UW.d)(WW))),
        intelGen9: WW => IW((() => (0, UW.m)(WW))),
        storeIntelGen9Verdict: WW => {
          bW.i.setItem(UW.z, WW)
        },
        gpuClassWebGlArm: qW,
        storeGpuClassVerdict: WW => {
          bW.i.setItem(UW.x, WW)
        },
        gpuClassOnWebGl: WW => (0, kW.c)(WW),
        webGlDefaultFamily: WW => CW.has((0, NW.f)(WW.vendor, WW.architecture)),
        storeWebGlDefaultFamilyVerdict: WW => {
          bW.i.setItem(UW.F, WW)
        },
        override: () => GW(),
        claimed: () => aW((0, cW.m)()),
        webGpuSetting: () => {
          const WW = bW.i.getItem(mW.pc);
          return "boolean" === typeof WW ? WW : null
        },
        heldBack: () => kW.g,
        storeHoldbackSpared: WW => {
          bW.i.setItem(UW.t, WW)
        },
        intelGen9OnWebGl: () => kW.i,
        kA: () => IW((() => (0, ZW.c)(xW.featureFlags.settings.canUseShaderPacks))),
        windows: () => IW((() => "windows" === (0, xW.getOperatingSystem)())),
        defaultCompatibility: hW.c
      }
    }

    function GW() {
      let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, LW.t)("render") && "webgl1" === (0, LW.p)("renderer")) return "webgl1";
      const iW = [() => new URLSearchParams(window.location.search).get(tW.e), () => bW.i.getItem(tW.h), () => {
        const iW = localStorage.getItem(uW);
        return null !== iW && WW && localStorage.removeItem(uW), "1" === iW ? "webgl2" : null
      }];
      for (const OW of iW) {
        let WW = null;
        try {
          WW = aW(OW())
        } catch {}
        if (null !== WW) return WW
      }
      return null
    }

    function IW(WW) {
      try {
        return WW()
      } catch {
        return !1
      }
    }

    function aW(WW) {
      return "lite" === WW ? "webgpu" : "webgl2" === WW || "babylon" === WW ? "webgl" : null
    }

    function rW(WW) {
      return "none" === WW || "compatibility_mode" === WW
    }
    async function zW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RW();
      const iW = await async function(WW) {
        const iW = QW(WW),
          {
            source: OW
          } = iW,
          mW = !iW.asked,
          EW = "gpu" in iW && iW.heldBack,
          PW = function(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return EW && !rW(WW) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: OW
            } : {
              reason: WW,
              adapter: iW,
              source: OW
            }
          };
        if (!("gpu" in iW)) return PW(iW.refused);
        let LW;
        try {
          LW = await (0, yW.o)((0, KW.i)(iW.gpu, {
            compatibility: FW(WW, iW)
          }), Si, `requestAdapter didn't settle in ${Si/1e3} s`)
        } catch {
          return PW("adapter_error")
        }
        if ("string" === typeof LW) return PW(LW);
        const {
          adapter: cW,
          compatibility: wW
        } = LW, tW = (0, KW.b)(cW);
        if ((0, KW.e)(cW)) return PW("software_adapter", tW);
        const ZW = WW.windows() && function(WW) {
          return fW.has((0, NW.f)(WW.vendor, WW.architecture))
        }(tW);
        if (WW.storeHoldbackSpared(ZW), EW && !ZW) return PW("webgl_holdback");
        const xW = WW.intelGen9(cW);
        WW.storeIntelGen9Verdict(xW);
        const lW = xW ? null : WW.gpuClassWebGlArm(cW);
        WW.storeGpuClassVerdict(null !== lW && void 0 !== lW && lW);
        const AW = WW.webGlDefaultFamily(tW);
        if (WW.storeWebGlDefaultFamilyVerdict(AW), mW && WW.oldIntelDriver(cW)) return PW("old_intel_driver", tW);
        if ("default" === OW && xW && WW.intelGen9OnWebGl()) return PW("intel_gen9", tW);
        if ("default" === OW && null !== lW && WW.gpuClassOnWebGl(lW)) return PW("gpu_class_webgl", tW);
        if ("default" === OW && AW) return PW("gpu_wasm_arm", tW);
        return PW(wW ? "compatibility_mode" : "none", tW)
      }(WW);
      if (rW(iW.reason)) return {
        backend: "webgpu",
        ...iW
      };
      const OW = "webgl1" === WW.override(),
        mW = "not_requested" === iW.reason && ("override" === iW.source || "claim" === iW.source),
        EW = !OW && !mW && WW.webgl1First();
      if (!OW && !EW && WW.webgl2()) return {
        backend: "webgl",
        ...iW
      };
      const PW = WW.webgl1();
      return 0 === PW.length ? {
        backend: "webgl1",
        ...iW
      } : EW && WW.webgl2() ? {
        backend: "webgl",
        ...iW
      } : {
        missing: PW
      }
    }

    function FW(WW, iW) {
      let {
        source: OW,
        asked: mW
      } = iW;
      return mW || "default" === OW ? (0, hW.k)(mW, WW.defaultCompatibility) : void 0
    }

    function QW(WW) {
      const iW = WW.override(),
        OW = WW.webGpuSetting(),
        mW = null === iW && !0 !== OW && WW.kA(),
        EW = null !== iW || null !== OW || mW ? null : WW.claimed(),
        NW = null !== iW ? "override" : !0 === OW ? "setting" : mW ? "pack" : !1 === OW ? "setting" : null !== EW ? "claim" : "default",
        PW = function(WW) {
          return "override" === WW || "setting" === WW
        }(NW);
      if ("webgl" === iW || "webgl1" === iW || "webgl" === EW || "setting" === NW && !1 === OW) return {
        source: NW,
        asked: PW,
        refused: "not_requested"
      };
      if (!WW.gpu) return {
        source: NW,
        asked: PW,
        refused: "no_webgpu_api"
      };
      const LW = "default" === NW && WW.heldBack();
      if (LW && !WW.windows()) return {
        source: NW,
        asked: PW,
        refused: "webgl_holdback"
      };
      const cW = PW ? null : WW.offAfterLoss("pack" === NW) ? "off_after_loss" : WW.fewWasmMemories() ? "few_wasm_memories" : null;
      return null !== cW ? {
        source: NW,
        asked: PW,
        refused: LW ? "webgl_holdback" : cW
      } : {
        source: NW,
        asked: PW,
        heldBack: LW,
        gpu: WW.gpu
      }
    }

    function Wi() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...RW(),
          override: () => GW(!1)
        },
        iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xW.isWebKit,
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VW;
      try {
        if (!iW()) return !1;
        const mW = QW(WW);
        if (!("gpu" in mW) || mW.heldBack) return !1;
        const EW = "default" === mW.source ? BW(OW(), "apple", lW.siteUsed) : null;
        return null === EW || !WW.gpuClassOnWebGl(EW)
      } catch (mW) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", mW), !1
      }
    }
    let ii = !1;
    async function Oi(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RW();
      if (null === WW) return null;
      const OW = await zW(iW);
      return ii = !("missing" in OW) && "webgpu" === OW.backend && "claim" === OW.source, "missing" in OW ? OW : {
        ...OW,
        load: WW[OW.backend]
      }
    }
    async function mi(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RW().gpu,
        mW = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== WW.backend) return !1;
      const EW = Zi(WW, iW, "indirectDraws", "off", "on");
      if (null !== EW) return EW;
      if (null !== WW.adapter && (0, UW.n)(WW.adapter, mW)) return !0;
      if (null === OW) return !1;
      try {
        var NW;
        const WW = await (0, yW.o)(OW.requestAdapter({
          powerPreference: "low-power"
        }).then((async WW => (null !== WW && await (0, KW.c)(WW), WW))), Si, `the low-power requestAdapter didn't settle in ${Si/1e3} s`);
        return (0, UW.n)(null !== (NW = null === WW || void 0 === WW ? void 0 : WW.info) && void 0 !== NW ? NW : {}, mW)
      } catch (PW) {
        return PW instanceof yW.g
      }
    }

    function Ei(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, xW.pageOperatingSystem)();
      if ("webgpu" !== WW.backend) return !1;
      const EW = Zi(WW, iW, "terrainFetch", "texture", "storage");
      return null !== EW ? EW : null !== WW.adapter && ((0, UW.i)(WW.adapter, OW) || (0, UW.f)(WW.adapter, mW))
    }

    function Ni(WW, iW) {
      if ("webgpu" !== WW.backend) return !1;
      const OW = Zi(WW, iW, "skyOrder", "early", "last");
      return null !== OW ? OW : null !== WW.adapter && (0, NW.f)(WW.adapter.vendor, WW.adapter.architecture) === pW
    }

    function Pi(WW, iW) {
      if ("webgpu" !== WW.backend) return !1;
      const OW = Zi(WW, iW, "uploadCopies", "off", "on");
      return null !== OW ? OW : null !== WW.adapter && "powervr_rogue" === (0, NW.f)(WW.adapter.vendor, WW.adapter.architecture)
    }

    function Li(WW, iW, OW) {
      if ("webgpu" !== WW.backend) return !1;
      const mW = Zi(WW, iW, "sceneDepth", "off", "on");
      return null !== mW ? mW : null !== WW.adapter && (0, UW.j)(WW.adapter, OW)
    }

    function ci(WW, iW) {
      return "webgl" === WW.backend ? Zi(WW, iW, "instancedTerrain", "1", "0") : null
    }

    function wi(WW, iW) {
      return "webgpu" !== WW.backend || iW && (null === WW.adapter || !(0, jW.L)(WW.adapter))
    }

    function ti(WW, iW, OW, mW) {
      const EW = new URLSearchParams(iW).get(OW),
        NW = null !== EW && void 0 !== EW ? EW : null === WW ? null : (0, cW.e)(OW);
      return null !== NW && mW(NW) ? (ii ||= null === EW && "webgpu" === (null === WW || void 0 === WW ? void 0 : WW.backend), NW) : null
    }

    function Zi(WW, iW, OW, mW, EW) {
      const NW = ti(WW, iW, OW, (WW => WW === mW || WW === EW));
      return null === NW ? null : NW === mW
    }

    function xi(WW) {
      return null !== WW && "missing" in WW
    }

    function li(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !ji(),
        OW = arguments.length > 2 ? arguments[2] : void 0;
      return iW ? function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW.d,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const mW = "start_failed" === WW || "pipeline_failed" === WW,
            EW = (0, nW.k)(WW, OW),
            NW = iW.turnOffWebGpuAfterDeviceLoss(mW ? "visible" : (0, jW.m)((0, AW.g)()), mW, EW);
          return ii && (0, cW.u)("webgpuLoss"), iW.isWebGpuOffAfterLoss() && "webgpu" === aW(bW.i.getItem(tW.h)) && bW.i.removeItem(tW.h), (0, LW.t)("webgpuloss") && (0, wW.d)((iW => {
            var OW;
            iW.noteWebGpuLoss("wasm", NW ? WW : `${WW}, which storage didn't keep`, null !== (OW = EW.message) && void 0 !== OW ? OW : null)
          })), NW
        } catch {
          return !1
        }
      }(WW, PW.d, OW) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const Ai = "framePacing";

    function bi(WW, iW) {
      const OW = ti("webgpu" === (null === iW || void 0 === iW ? void 0 : iW.backend) ? iW : null, WW, Ai, (WW => /^\d{1,9}$/.test(WW)));
      return null === OW ? void 0 : Number(OW)
    }

    function ji() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === aW(new URLSearchParams(WW).get(tW.e))
      } catch {
        return !1
      }
    }

    function Ui(WW) {
      return !!ki(WW) || WW instanceof Error && !(WW instanceof WebAssembly.RuntimeError) && WW.message.startsWith(`${SW.o.RenderSurfaceUnusable}:`)
    }

    function ki(WW) {
      const {
        name: iW,
        message: OW
      } = null !== WW && void 0 !== WW ? WW : {};
      return "InvalidStateError" === iW && "string" === typeof OW && OW.startsWith("GPUDevice.")
    }

    function si(WW) {
      const iW = WW;
      return "function" === typeof iW.OEW && "function" === typeof iW.mEW ? iW : null
    }

    function Mi(WW) {
      return "function" === typeof WW.wU ? WW : null
    }
    const Ki = "openRenderer";
    const Si = 5e3,
      Yi = 15e3;

    function yi(WW, iW, OW, mW, EW, NW) {
      return (0, yW.o)(function(WW, iW, OW, mW, EW, NW) {
        const PW = (0, TW.f)(WW, iW, (() => WW.wU(OW, mW, EW, NW.indirectHangs, NW.storagePullBreaks, NW.splitPassBreaks, NW.earlySky, NW.instancedTerrain, NW.cellLight, NW.framesAhead, NW.webGpuRestores, NW.bufferCopiesCrash))),
          {
            firstVertex: LW
          } = NW;
        return void 0 === LW ? PW : PW.then((WW => ((0, JW.b)(OW, LW), WW)))
      }(WW, iW, OW, mW, EW, NW), Yi, `${SW.o.RenderSurfaceUnusable}: the renderer didn't open in ${Yi/1e3} s`, Ji)
    }
    async function Ti(WW, iW, OW, mW, EW, NW) {
      if ("function" !== typeof WW.amW) throw new Error("this core has no set_renderer");
      const PW = await yi(iW, Ki, OW, EW, mW, NW);
      try {
        WW.amW(PW)
      } catch (LW) {
        throw Ji(PW), LW
      }
    }

    function Ji(WW) {
      try {
        WW.free()
      } catch {}
    }
  },
  42356: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    const mW = {
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
  42270: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => AW,
      d: () => bW,
      e: () => xW,
      g: () => ZW
    });
    const mW = 2e3,
      EW = "unavailable";
    let NW = () => Promise.resolve().then((() => OW(1896))),
      PW = null,
      LW = null,
      cW = wW();

    function wW() {
      let WW = () => {};
      return {
        promise: new Promise((iW => {
          WW = () => {
            iW(null)
          }
        })),
        resolve: WW
      }
    }

    function tW() {
      if (null === PW) {
        const WW = NW();
        PW = WW, WW.then((iW => {
          PW === WW && (LW = iW)
        }), (() => {
          PW === WW && (PW = null)
        }))
      }
      return PW
    }

    function ZW() {
      tW().catch((() => {}))
    }

    function xW() {
      cW.resolve()
    }

    function lW(WW, iW, OW, mW) {
      if (null === WW) return {
        errorKind: iW,
        fingerprint: EW,
        dedupe: `${iW}|${mW}`
      };
      const {
        fingerprint: NW
      } = WW.clientErrorKey(iW, OW, mW);
      return {
        errorKind: iW,
        fingerprint: NW,
        dedupe: NW
      }
    }

    function AW(WW, iW, OW, mW) {
      return null === LW ? mW ? (ZW(), lW(null, WW, iW, OW)) : null : lW(LW, WW, iW, OW)
    }
    async function bW(WW, iW, OW) {
      let EW;
      const NW = new Promise((WW => {
        EW = setTimeout((() => {
          WW(null)
        }), mW)
      }));
      try {
        return lW(await Promise.race([tW(), NW, cW.promise]), WW, iW, OW)
      } catch {
        return lW(null, WW, iW, OW)
      } finally {
        clearTimeout(EW)
      }
    }
  },
  42266: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      BUILT_IN_ANIMATIONS_SITE: () => Wi,
      CAMERA_DIRECTOR_SITE: () => Pi,
      CORE_ERRORS_SITE: () => BW,
      EVENT_OVERFLOW_SITE: () => QW,
      FIRST_VIEW_SITE: () => mi,
      GraphicsLostError: () => NO,
      JOIN_SITE: () => RW,
      LEAVE_SITE: () => GW,
      MAIN_THREAD_SITE: () => Ei,
      MODEL_FEED_SITE: () => IW,
      MODEL_POOL_SITE: () => aW,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => wi,
      NON_FATAL_REPORTS_PER_SESSION: () => Hi,
      PREVIEW_ANIMATIONS_SITE: () => FW,
      RENDER_RELOAD_SITE: () => zW,
      REQUEST_DEVICE_SITE: () => Ni,
      TEXTURE_NAMES_SITE: () => rW,
      TEXTURE_PACK_FEED_SITE: () => ii,
      TEXTURE_PACK_SWAP_SITE: () => Oi,
      TurnstilePageError: () => jO,
      WASM_LOAD_SITE: () => qW,
      countRenderLost: () => QO,
      crashError: () => vi,
      crashReportsSettled: () => Gi,
      deviceLossFields: () => Fi,
      deviceLossWords: () => aO,
      flushCrashReports: () => qi,
      joinFailureCode: () => UO,
      loadRecoveryCode: () => tO,
      lokiTransport: () => xi,
      modelFailureCode: () => yO,
      readTrap: () => iO,
      renderLoss: () => FO,
      renderReloadMessage: () => rO,
      reportCameraDirectorFault: () => qO,
      reportCoreErrors: () => ri,
      reportCrash: () => gi,
      reportDataLoadFailure: () => Nm,
      reportDisconnect: () => SO,
      reportDroppedRequiredLimits: () => xO,
      reportEventOverflow: () => oO,
      reportFirstViewNoTerrain: () => pO,
      reportFirstViewUnshown: () => fO,
      reportLightFault: () => vO,
      reportLoadRecovery: () => ZO,
      reportLoadReload: () => AO,
      reportMainStall: () => CO,
      reportMemoryShed: () => DO,
      reportModelFailure: () => TO,
      reportModelPoolFailure: () => JO,
      reportModelsModuleRetry: () => hO,
      reportNoBackendRetry: () => cO,
      reportPageJoinFailure: () => sO,
      reportReconnectGaveUp: () => YO,
      reportRenderRecovery: () => Ci,
      reportRenderReload: () => Om,
      reportReplayFault: () => BO,
      reportStaleBuildReload: () => Lm,
      reportStoppedCore: () => mO,
      reportTerrainTextureFailure: () => mm,
      reportTexturePackFeedLoadFailure: () => nO,
      reportTexturePackKeptOut: () => uO,
      reportUnstreamedCoreLoad: () => bO,
      reportUnusedSeat: () => KO,
      reportWorkerLost: () => dO,
      reportWorkerStartTimeout: () => XO,
      reportWorldgenGaveUp: () => gO,
      reportWorldgenLoadFailure: () => HO,
      reportWorldgenWorkerLost: () => eO,
      resetCrashReports: () => Ii,
      setCrashAdPreload: () => Ki,
      setCrashBackend: () => Mi,
      setCrashScreen: () => Ui,
      setCrashTransport: () => bi,
      showCrash: () => OO,
      showJoinFailure: () => kO,
      showUnsupported: () => PO,
      unknownSkyWords: () => ai,
      unsupportedCrashScreen: () => LO,
      warmCrashCounts: () => Vi
    });
    var mW = OW(1052),
      EW = OW(1365),
      NW = OW(169),
      PW = OW(1351),
      LW = OW(1303),
      cW = OW(248),
      wW = OW(1904),
      tW = OW(4981),
      ZW = OW(42270),
      xW = OW(5546),
      lW = OW(42272),
      AW = OW(35089),
      bW = OW(2458),
      jW = OW(35086),
      UW = OW(5096),
      kW = OW(136),
      sW = OW(131),
      MW = OW(2464),
      KW = OW(37727),
      SW = OW(1755),
      YW = OW(42281),
      yW = OW(42292),
      TW = OW(42109),
      JW = OW(42307),
      hW = OW(42309),
      HW = OW(37724),
      nW = OW(2381),
      uW = OW(2388),
      oW = OW(42330),
      dW = OW(42301),
      eW = OW(42348),
      vW = OW(37998),
      gW = OW(671),
      DW = OW(4417),
      VW = OW(37257),
      pW = OW(42225),
      fW = OW(37265),
      CW = OW(42358);
    const XW = "[bloxd-wasm-client]",
      BW = "coreErrors",
      qW = "wasmLoad",
      RW = "join",
      GW = "leave",
      IW = "modelFeed",
      aW = "modelWorkerPool",
      rW = "textureNames",
      zW = "renderReload",
      FW = "previewAnimations",
      QW = "eventOverflow",
      Wi = "builtInAnimations",
      ii = "texturePackFeed",
      Oi = "texturePackSwap",
      mi = "firstView",
      Ei = "mainThread",
      Ni = "requestDevice",
      Pi = "cameraDirector",
      Li = 300,
      ci = 64,
      wi = 8;
    let ti = 0;
    const Zi = new Set,
      xi = (WW, iW) => {
        const OW = Si[WW.kind],
          mW = {
            backend: ki,
            adPreload: si
          };
        if (null === OW) return void li(WW, iW, mW, null);
        const EW = (0, ZW.c)(OW, WW.message, WW.code, WW.fatal);
        null === EW ? Bi("Loki", (async () => {
          li(WW, iW, mW, await (0, ZW.d)(OW, WW.message, WW.code))
        })) : li(WW, iW, mW, EW)
      };

    function li(WW, iW, OW, mW) {
      let {
        backend: EW,
        adPreload: NW
      } = OW;
      const {
        kind: PW,
        code: cW,
        site: tW,
        fatal: ZW,
        details: xW
      } = WW;
      if (!ZW)
        if (null === mW || (0, wW.d)(mW.errorKind) || Zi.has(mW.dedupe)) {
          if (ti >= wi) return;
          ti++
        } else Zi.add(mW.dedupe);
      const lW = {
        ...xW,
        kind: PW,
        code: cW,
        site: tW,
        fatal: String(ZW),
        backend: EW
      };
      NW && (lW.adPreload = "true"), null !== mW && (lW.errorKind = mW.errorKind, lW.fingerprint = mW.fingerprint), iW instanceof Error && "string" === typeof iW.stack && (lW.causeStack = iW.stack.slice(0, 2e3)), (0, LW.ub)(vi(WW, iW), lW)
    }
    let Ai = xi;

    function bi(WW) {
      const iW = Ai;
      return Ai = WW, iW
    }
    let ji = () => {};

    function Ui(WW) {
      const iW = ji;
      return ji = WW, iW
    }
    let ki = "unpicked",
      si = !1;

    function Mi(WW) {
      ki = WW
    }

    function Ki(WW) {
      si = WW
    }
    const Si = {
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
      Yi = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        viewUnshown: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      yi = new Set(["unstreamedLoad"]),
      Ti = new Set(["linkCensus", "linksReadAfterView"]);
    let Ji = !1;
    const Hi = 20,
      ni = new Map;
    let ui = 0,
      oi = 0;
    const di = new Set,
      ei = new Set;

    function vi(WW, iW) {
      const OW = Object.assign(new Error(`${WW.code}: ${WW.message}`), {
        name: "WasmClientCrash",
        cause: null !== iW && void 0 !== iW ? iW : void 0
      });
      return iW instanceof Error && iW.stack && (OW.stack = iW.stack), OW
    }

    function gi(WW) {
      var iW, mW;
      const {
        kind: EW,
        code: NW,
        site: PW,
        fatal: LW,
        message: cW,
        error: wW
      } = WW, tW = !1 !== WW.toTransport && !yi.has(EW), ZW = !LW && tW && !Ti.has(EW), xW = {
        kind: EW,
        code: NW,
        site: PW,
        fatal: LW,
        message: cW,
        details: null !== (iW = WW.details) && void 0 !== iW ? iW : {}
      }, lW = `${NW}@${PW}${void 0===WW.instance?"":`#${WW.instance}`}${LW?"!":""}`, AW = (null !== (mW = ni.get(lW)) && void 0 !== mW ? mW : 0) + 1;
      if (ni.set(lW, AW), void 0 !== WW.countAs && 1 === AW && fi(WW.countAs), AW > 1 ? 0 === (AW & AW - 1) && Xi((() => {
          console.warn(`${XW} ${NW} at ${PW} reported ${AW} times`)
        })) : ZW && ui >= Hi ? Xi((() => {
          console.warn(`${XW} ${EW} ${NW} at ${PW}: ${cW} (not sent: the session's ${Hi} went)`, xW.details, null !== wW && void 0 !== wW ? wW : "")
        })) : (ZW && ui++, function(WW, iW, mW, EW) {
          var NW, PW;
          const {
            kind: LW,
            code: cW,
            site: wW,
            fatal: tW,
            message: ZW,
            details: xW
          } = WW;
          Xi((() => {
            (tW ? console.error : console.warn)(`${XW} ${LW} ${cW} at ${wW}: ${ZW}`, xW, null !== iW && void 0 !== iW ? iW : "")
          }));
          const lW = Yi[LW],
            AW = null !== (NW = null !== (PW = Si[LW]) && void 0 !== PW ? PW : lW) && void 0 !== NW ? NW : null;
          EW || null === AW || Di((async () => {
            const {
              reportCappedWasmFailure: iW,
              reportUncappedWasmFailure: mW,
              reportWasmFailure: EW
            } = await OW.e(218).then((() => OW(35078))), NW = Ti.has(LW) ? mW : void 0 === lW ? EW : iW, PW = function(WW) {
              let {
                kind: iW,
                site: OW,
                fatal: mW,
                details: EW
              } = WW;
              if ("crash" !== iW) return;
              return {
                ...EW,
                site: OW,
                fatal: String(mW)
              }
            }(WW);
            void 0 === PW ? NW(AW, ZW, cW) : NW(AW, ZW, cW, PW)
          }));
          mW && Xi((() => {
            Ai(WW, iW)
          }))
        }(xW, wW, tW, void 0 !== WW.countAs)), LW) {
        var bW;
        const iW = null !== (bW = WW.screen) && void 0 !== bW ? bW : {
          text: (0, vW.e)(xW, !0),
          reload: !0,
          stillBlocked: null
        };
        Xi((() => {
          ji(iW)
        }))
      }
      return xW
    }

    function Di(WW) {
      Bi("counts", (async () => {
        const {
          peekVisitSessionId: iW
        } = await Promise.resolve().then((() => OW(683)));
        null !== iW() && (await WW(), Ji = !0)
      }))
    }

    function Vi() {
      Promise.all([Promise.resolve().then((() => OW(683))), OW.e(218).then((() => OW(35078)))]).catch((WW => {
        console.warn(`${XW} the counts' modules didn't load ahead`, WW)
      }))
    }

    function fi(WW) {
      di.has(WW.errorKind) || (di.add(WW.errorKind), Di((async () => {
        const {
          reportClientError: iW
        } = await Promise.resolve().then((() => OW(1888)));
        iW(WW.errorKind, WW.error, WW.code, !0, void 0, WW.fields)
      })))
    }

    function Ci(WW, iW) {
      Bi("render_lost", (async () => {
        const [{
          reportClientError: mW
        }, {
          CAPPED_COUNTS_VISIT_CAP: EW
        }] = await Promise.all([Promise.resolve().then((() => OW(1888))), OW.e(218).then((() => OW(35078)))]);
        mW("render_lost", iW, WW, !0, EW)
      }))
    }

    function Xi(WW) {
      try {
        WW()
      } catch (iW) {
        try {
          console.warn(`${XW} could not send a report`, iW)
        } catch {}
      }
    }

    function Bi(WW, iW) {
      try {
        const OW = iW().catch((iW => {
          console.warn(`${XW} could not send the report to ${WW}`, iW)
        })).finally((() => {
          ei.delete(OW)
        }));
        ei.add(OW)
      } catch (OW) {
        console.warn(`${XW} could not send the report to ${WW}`, OW)
      }
    }
    async function qi(WW) {
      let iW;
      (0, ZW.e)();
      const OW = new Promise((OW => {
        iW = setTimeout(OW, WW)
      }));
      await Promise.race([Ri(), OW]), clearTimeout(iW)
    }
    async function Ri() {
      if (await Promise.allSettled([...ei]), Ji) try {
        const {
          flushClientAnalyticsEvents: WW
        } = await Promise.resolve().then((() => OW(1576)));
        await WW()
      } catch (WW) {
        console.warn(`${XW} could not send the counts`, WW)
      }
    }
    async function Gi() {
      for (; ei.size > 0;) await Promise.allSettled([...ei])
    }

    function Ii() {
      ni.clear(), ui = 0, Ji = !1, ti = 0, Zi.clear(), oi = 0, di.clear(), (0, lW.u)()
    }

    function ai(WW) {
      const iW = "object" === typeof WW && null !== WW ? WW.type : WW;
      return "string" !== typeof iW ? "sky not named" : `sky ${JSON.stringify(Array.from(iW).slice(0,ci).join(""))}`
    }

    function ri(WW, iW, OW, mW) {
      oi += iW;
      for (const {
          code: LW,
          detail: cW
        }
        of WW) {
        var EW, NW, PW;
        const WW = (0, xW.de)(LW),
          iW = (0, lW.i)(LW, cW),
          wW = iW ? "CORE-RenderLinkPending" : `CORE-${WW}`,
          tW = (0, lW.b)(LW, cW),
          ZW = null === mW || void 0 === mW ? void 0 : mW(LW, cW),
          bW = void 0 !== (null === tW || void 0 === tW ? void 0 : tW.gpuDetails),
          jW = bW ? null === (EW = (0, sW.t)()) || void 0 === EW ? void 0 : EW.renderer : void 0,
          UW = bW ? ` ${(0,lW.o)()}` : "",
          kW = Array.from([jW && `gpu ${(0,AW.d)(jW)}`, ZW].filter(Boolean).join("; ")).slice(0, Li).join(""),
          MW = `core error ${WW}${null!==(NW=null===tW||void 0===tW?void 0:tW.words)&&void 0!==NW?NW:""}${UW}${kW?`: ${kW}`:""}`,
          KW = {
            errorCode: String(LW),
            detail: String(cW),
            droppedBefore: String(oi),
            wasmBuild: OW.wasm,
            clientVersion: OW.client,
            ...null === tW || void 0 === tW ? void 0 : tW.gpuDetails,
            ...Fi(LW, cW)
          };
        null !== tW && (0, lW.s)(tW) ? Xi((() => {
          console.warn(`${XW} coreError ${wW}: ${MW} (not sent: the session's render warnings of its kind went)`, KW)
        })) : zi(LW) ? Xi((() => {
          console.warn(`${XW} coreError ${wW}: ${MW} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, KW)
        })) : gi({
          kind: iW ? "recovered" : WO(LW, cW),
          code: wW,
          site: BW,
          fatal: !1,
          message: MW,
          details: KW,
          instance: null !== (PW = null === tW || void 0 === tW ? void 0 : tW.instance) && void 0 !== PW ? PW : Qi(LW, cW)
        })
      }
    }

    function zi(WW) {
      if (WW !== xW.D.AudioUnknownSound && WW !== xW.D.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: iW,
        lobbyName: OW
      } = (0, PW.d)();
      return null !== iW && (!!(0, mW.i)(iW) || WW === xW.D.AudioUnknownSound && (0, EW.g)(iW, OW))
    }

    function Fi(WW, iW) {
      if (WW !== xW.D.RenderDeviceLost) return;
      const OW = iW >>> xW.K.LINKS_IN_FLIGHT_SHIFT & xW.K.LINKS_IN_FLIGHT_MAX,
        mW = iW >>> xW.K.OLDEST_LINK_SHIFT & xW.K.OLDEST_LINK_MAX;
      return {
        linksInFlight: String(OW),
        oldestLinkMs: String(mW * xW.K.OLDEST_LINK_UNIT_MS)
      }
    }

    function Qi(WW, iW) {
      return WW === xW.D.RenderDeviceLost && 0 !== (iW & xW.K.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function WO(WW, iW) {
      return WW === xW.D.JobsHeapGaveUp ? "meshHeap" : (0, lW.l)(WW, iW) ? "linksReadAfterView" : (0, lW.e)(WW, iW) ? "linkCensus" : "coreError"
    }

    function iO(WW) {
      return (0, VW.l)(WW instanceof pW.e ? WW.trap : WW, nW.H, nW.eb)
    }

    function OO(WW, iW, OW) {
      return EO(WW, iW, OW, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function mO(WW, iW, OW) {
      return EO(WW, iW, OW, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function EO(WW, iW, OW, mW, EW) {
      let {
        memoryDetails: NW = {},
        memoryStep: PW
      } = mW;
      const {
        code: LW,
        details: cW,
        message: wW
      } = (0, YW.J)(WW, iW), tW = [];
      Object.assign(cW, (0, fW.e)(WW.error)), null !== OW && (cW.trapKind = OW.kind, null !== OW.panic && (cW.panic = (0, VW.h)(OW.panic)), OW.refusedBytes > 0 && (cW.refusedAllocation = String(OW.refusedBytes)), tW.push((0, VW.o)(OW.kind, OW.refusedBytes))), void 0 !== PW && tW.push(`memory=${PW}`);
      const ZW = WW.error instanceof NO;
      return ZW && (0, gW.H)(), gi({
        kind: "crash",
        code: LW,
        site: WW.site,
        fatal: EW,
        message: [...tW, wW].join("; "),
        details: {
          ...cW,
          ...NW,
          ...void 0 === PW ? {} : {
            memoryStep: PW
          }
        },
        error: WW.error,
        screen: ZW ? LO("graphicsLost") : void 0
      })
    }
    class NO extends Error {}

    function PO(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return "download" !== WW && (0, gW.H)(), gi({
        kind: "unsupported",
        code: iW,
        site: qW,
        fatal: !0,
        message: OW,
        details: {
          ...mW,
          cause: WW,
          status: iW
        },
        screen: LO(WW)
      })
    }

    function LO(WW) {
      const iW = (0, NW.t)(kW.siteUsed),
        OW = (0, vW.m)(WW, iW),
        mW = "noContext" === WW || "graphicsLost" === WW ? (0, vW.h)(WW, iW) : null;
      return {
        text: OW,
        reload: "general:tryAgain" === OW.confirm,
        stillBlocked: mW
      }
    }

    function cO(WW, iW, OW) {
      return gi({
        kind: "recovered",
        code: "reprobed" === WW ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: qW,
        fatal: !1,
        message: OW,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: iW,
          step: WW
        }
      })
    }
    const wO = 9;

    function tO(WW) {
      const iW = "recovered" === WW.outcome ? "recovered" : "gave_up",
        OW = "load" === WW.step ? `wasm_load_${iW}${WW.oom?"_oom":""}` : `no_context_${iW}`;
      return "recovered" === WW.outcome ? `${OW}_t${Math.min(WW.tries,wO)}` : "load" === WW.step ? `${OW}_${WW.stage}` : OW
    }

    function ZO(WW) {
      const {
        step: iW,
        outcome: OW,
        tries: mW,
        detail: EW,
        details: NW = {}
      } = WW, PW = "load" === WW.step ? {
        stage: WW.stage,
        ...WW.oom ? {
          oom: "true"
        } : {}
      } : {};
      return gi({
        kind: "recovered",
        code: tO(WW),
        site: qW,
        fatal: !1,
        message: EW,
        details: {
          ...NW,
          step: iW,
          outcome: OW,
          tries: String(mW),
          ...PW
        }
      })
    }

    function xO(WW) {
      return gi({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: Ni,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: WW.join(",")
        }
      })
    }
    const lO = "reload=wasm";

    function AO(WW, iW, OW) {
      return gi({
        kind: "unsupported",
        code: iW,
        site: qW,
        fatal: !1,
        message: [lO, OW].join("; "),
        details: {
          cause: WW,
          status: iW,
          fallback: "wasmReload"
        }
      })
    }

    function bO() {
      const {
        code: WW,
        message: iW
      } = DW.e;
      return gi({
        kind: "unstreamedLoad",
        code: WW,
        site: qW,
        fatal: !1,
        message: iW
      })
    }
    class jO extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function UO(WW) {
      return WW instanceof JW.n ? 0 === WW.code ? "JOIN-matchmake" : `JOIN-${WW.code}` : WW instanceof JW.c ? 0 === WW.code ? `JOIN-${WW.stage}` : `JOIN-${WW.stage}-${WW.code}` : WW instanceof TW.b ? "JOIN-gameCode" : WW instanceof jO ? "JOIN-turnstilePage" : WW instanceof JW.z ? "JOIN-trafficCheck" : WW instanceof KW.c ? "JOIN-timeout" : "JOIN-network"
    }

    function kO(WW, iW) {
      const OW = (0, fW.m)(WW),
        mW = {
          wasmBuild: iW.wasm,
          clientVersion: iW.client
        },
        EW = WW instanceof jO ? {
          text: (0, vW.i)(),
          reload: !1,
          stillBlocked: null
        } : void 0,
        NW = (0, hW.e)(WW),
        PW = "expected" !== NW;
      return gi({
        kind: "join",
        code: UO(WW),
        site: RW,
        fatal: !0,
        message: OW,
        details: mW,
        error: WW,
        screen: EW,
        toTransport: PW,
        instance: NW
      })
    }

    function sO(WW, iW, OW) {
      var mW;
      const EW = (0, hW.e)(WW),
        NW = {
          cause: (WW instanceof JW.c || WW instanceof JW.n) && null !== (mW = WW.serverText) && void 0 !== mW ? mW : "",
          sinceJoinStart: (0, MW.e)(OW.sinceJoinStartMs),
          game: OW.game,
          ...(0, MW.j)(),
          wasmBuild: iW.wasm,
          clientVersion: iW.client
        };
      return gi({
        kind: "pageJoin",
        code: UO(WW),
        site: RW,
        fatal: !1,
        message: (0, fW.m)(WW),
        details: NW,
        error: WW,
        toTransport: "unrecognised" === EW,
        instance: EW
      })
    }
    const MO = {
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

    function KO(WW, iW) {
      let {
        unused: OW,
        answered: mW,
        sH: EW
      } = WW;
      const {
        code: NW,
        message: PW
      } = MO[OW], LW = {
        unused: OW,
        answered: String(mW),
        sH: String(EW),
        wasmBuild: iW.wasm,
        clientVersion: iW.client
      };
      return gi({
        kind: "seat",
        code: NW,
        site: RW,
        fatal: !1,
        message: PW,
        details: LW
      })
    }

    function SO(WW, iW, OW) {
      var mW;
      let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (mW = WW.name) && void 0 !== mW ? mW : String(WW.code);
      const NW = {
          closeCode: String(WW.code),
          recognised: String(null !== WW.name),
          closeReason: OW.closeReason,
          sinceJoined: (0, MW.e)(OW.sinceJoinedMs),
          game: OW.game,
          ...(0, MW.j)(),
          wasmBuild: iW.wasm,
          clientVersion: iW.client
        },
        PW = null === WW.name && !(0, MW.f)(WW.code);
      return gi({
        kind: "disconnect",
        code: EW,
        site: GW,
        fatal: !1,
        message: "Left room",
        details: NW,
        toTransport: PW
      })
    }

    function YO(WW, iW) {
      const OW = {
        ...(0, bW.q)(WW),
        wasmBuild: iW.wasm,
        clientVersion: iW.client
      };
      return gi({
        kind: "disconnect",
        code: `reconnect-${WW.reason}`,
        site: RW,
        fatal: !1,
        message: "Reconnect failed",
        details: OW
      })
    }

    function yO(WW) {
      return WW.error instanceof uW.h ? `MODEL-${WW.error.status}` : WW.error instanceof oW.h ? "MODEL-ring" : "MODEL-network"
    }

    function TO(WW, iW) {
      const OW = yO(WW),
        mW = `model file ${WW.file} ${WW.startup?"(startup) ":""}could not load`,
        EW = {
          file: String(WW.file),
          url: WW.url,
          wasmBuild: iW.wasm,
          clientVersion: iW.client
        };
      return gi({
        kind: WW.startup ? "model" : "modelLate",
        code: OW,
        site: IW,
        fatal: WW.startup,
        message: mW,
        details: EW,
        error: WW.error
      })
    }

    function JO(WW, iW) {
      const OW = {
        wasmBuild: iW.wasm,
        clientVersion: iW.client
      };
      return gi({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: aW,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: OW,
        error: WW
      })
    }

    function hO(WW, iW, OW) {
      const mW = {
        delayMs: String(iW),
        wasmBuild: OW.wasm,
        clientVersion: OW.client
      };
      WW instanceof uW.h && (mW.status = String(WW.status));
      return gi({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: aW,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: mW,
        error: WW
      })
    }

    function HO(WW, iW) {
      const OW = {
        wasmBuild: iW.wasm,
        clientVersion: iW.client
      };
      return gi({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: YW.F,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: OW,
        error: WW
      })
    }

    function nO(WW, iW) {
      const OW = {
        wasmBuild: iW.wasm,
        clientVersion: iW.client
      };
      return gi({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: ii,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: OW,
        error: WW
      })
    }

    function uO(WW, iW, OW, mW) {
      const EW = {
        wasmBuild: mW.wasm,
        clientVersion: mW.client
      };
      return gi({
        kind: "texturePackKeptOut",
        code: (0, tW.e)("wasm", WW, iW),
        site: Oi,
        fatal: !1,
        message: iW.detail,
        details: EW,
        error: OW
      })
    }

    function oO(WW, iW) {
      const {
        frames: OW,
        acks: mW,
        mask: EW,
        outcome: NW
      } = WW, PW = {
        frames: String(OW),
        acks: String(mW),
        mask: String(EW),
        outcome: null !== NW && void 0 !== NW ? NW : "resynced",
        wasmBuild: iW.wasm,
        clientVersion: iW.client
      };
      return gi({
        kind: "recovered",
        code: "rejoined" === NW ? "CORE-eventOverflowRejoin" : "failed" === NW ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: QW,
        fatal: !1,
        message: `the event buffer refused records in ${OW} frames`,
        details: PW
      })
    }

    function dO(WW, iW, OW) {
      return gi({
        kind: "recovered",
        code: "CORE-workerLost",
        site: WW,
        fatal: !1,
        message: `a ${WW} worker was lost`,
        details: {
          reason: iW,
          wasmBuild: OW.wasm,
          clientVersion: OW.client
        }
      })
    }

    function eO(WW, iW, OW, mW) {
      const EW = {
          reason: WW,
          pageBuild: mW.build,
          pageAgeMin: String(Math.floor(mW.ageMs / 6e4)),
          wasmBuild: OW.wasm,
          clientVersion: OW.client
        },
        NW = iW ? "a world-gen worker's code did not load" : "a world-gen worker was lost";
      return gi({
        kind: "recovered",
        code: "CORE-worldgenWorkerLost",
        site: YW.F,
        fatal: !1,
        message: NW,
        details: EW
      })
    }

    function vO(WW, iW, OW) {
      const mW = {
        wasmBuild: OW.wasm,
        clientVersion: OW.client
      };
      return gi({
        kind: "recovered",
        code: WW,
        site: YW.q,
        fatal: !1,
        message: iW,
        details: mW
      })
    }

    function gO(WW, iW) {
      const OW = {
        lastReason: WW,
        wasmBuild: iW.wasm,
        clientVersion: iW.client
      };
      return gi({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: YW.F,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: OW
      })
    }

    function DO(WW, iW, OW) {
      return gi({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: YW.m,
        fatal: !1,
        message: `${(0,HW.w)(WW)}: the session shed load`,
        details: {
          cause: WW,
          ...iW,
          wasmBuild: OW.wasm,
          clientVersion: OW.client
        }
      })
    }

    function VO(WW, iW, OW, mW) {
      var EW, NW;
      return {
        game: WW,
        cause: iW,
        census: null === OW ? "none" : JSON.stringify(OW),
        gpu: null !== (EW = null === (NW = (0, sW.t)()) || void 0 === NW ? void 0 : NW.renderer) && void 0 !== EW ? EW : "",
        browser: (0, lW.o)(),
        wasmBuild: mW.wasm,
        clientVersion: mW.client
      }
    }

    function pO(WW, iW, OW, mW) {
      const EW = (0, lW.r)(),
        NW = {
          ...VO(WW, iW, OW, mW),
          renderWarned: String(EW)
        },
        PW = `first view drew no whole terrain in ${dW.f/1e3} s, ${iW}${EW?", render warned":""}`;
      return gi({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: mi,
        fatal: !1,
        message: PW,
        details: NW
      })
    }

    function fO(WW, iW, OW, mW, EW) {
      const NW = {
          ...VO(WW, OW.cause, mW, EW),
          waitedMs: String(Math.round(iW.waitedMs)),
          visibleMs: String(Math.round(iW.visibleMs)),
          drawnMs: String(Math.round(iW.drawnMs)),
          frames: String(iW.frames),
          renderPending: String(OW.renderPending),
          viewWait: null === OW.wait ? "none" : OW.wait.slice(0, 6).join(",")
        },
        PW = (0, yW.g)(iW, OW);
      return gi({
        kind: "viewUnshown",
        code: "CORE-firstViewUnshown",
        site: mi,
        fatal: !1,
        message: PW,
        details: NW
      })
    }

    function CO(WW, iW, OW, mW, EW) {
      const NW = (0, jW.c)(),
        PW = (0, jW.b)(WW, iW, OW, mW, NW),
        LW = {
          gpuModel: NW,
          wasmBuild: EW.wasm,
          clientVersion: EW.client
        };
      return gi({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: Ei,
        fatal: !1,
        message: PW,
        details: LW
      })
    }

    function XO(WW, iW, OW) {
      return gi({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: WW,
        fatal: !1,
        message: `a ${WW} worker did not start`,
        details: {
          waitedMs: String(Math.round(iW)),
          wasmBuild: OW.wasm,
          clientVersion: OW.client
        }
      })
    }

    function BO(WW, iW, OW) {
      return gi({
        kind: "recovered",
        code: "CORE-replayFault",
        site: WW,
        fatal: !1,
        message: `the replay's ${WW} failed`,
        details: {
          wasmBuild: OW.wasm,
          clientVersion: OW.client
        },
        error: iW
      })
    }

    function qO(WW, iW) {
      const OW = {
          wasmBuild: iW.wasm,
          clientVersion: iW.client
        },
        mW = WW instanceof Error ? WW.message : String(WW);
      return gi({
        kind: "recovered",
        code: "CORE-cameraDirector",
        site: Pi,
        fatal: !1,
        message: "the scripted camera's director threw",
        details: OW,
        instance: mW,
        error: WW
      })
    }
    const RO = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function GO(WW) {
      if (0 === WW) return "none";
      const iW = [60, 600, 3600].find((iW => WW < iW));
      return void 0 === iW ? "ge3600" : `lt${iW}`
    }

    function IO(WW, iW) {
      return null === WW ? "unbound" : (0, UW.h)(iW - WW)
    }

    function aO(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (WW & xW.K.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (WW & xW.K.LINKS_RUNNING) ? "links running" : "", `frames ${(0,AW.d)(GO(WW&xW.K.FRAMES))}`, `up ${(0,AW.d)(IO(iW,OW))}`].filter(Boolean).join(", ")
    }

    function rO(WW, iW, OW) {
      const mW = "lost" === iW && void 0 !== OW ? ` (${OW})` : "";
      return `the ${WW} ${RO[iW]}${mW}`
    }
    const zO = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function FO(WW, iW, OW, mW) {
      var EW;
      let {
        restoreLost: NW = !1,
        adapterRemembered: PW = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, LW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const cW = null === OW || void 0 === OW ? void 0 : OW.message,
        wW = "pipeline_failed" === iW ? iW : OW instanceof SW.g ? "timeout" : (0, UW.p)("frames_refused" === iW, "string" === typeof cW ? cW : ""),
        tW = null === mW.boundAtMs ? "unbound" : `up${(0,UW.e)(LW-mW.boundAtMs)}`,
        ZW = null === mW.adapter ? "no adapter" : (0, UW.l)(mW.adapter),
        xW = `${!0===mW.indirectHangs?" ih":""}${!0===mW.restoresSkipped?" nr":""}${NW?" rl":""}${PW?" ar":""}`,
        lW = `${wW} ${(0,SW.k)()?"hidden":"visible"} ${tW}${xW} ${ZW}`;
      if ("webgpu" !== WW || "lost" !== iW && "frames_refused" !== iW) return {
        detail: lW,
        count: void 0
      };
      return {
        detail: lW,
        count: {
          errorKind: "render_lost",
          error: new Error(lW),
          code: (0, UW.y)(wW, null !== (EW = mW.boundAtMs) && void 0 !== EW ? EW : LW, LW).code,
          fields: {
            renderBackend: CW.e.webgpu
          }
        }
      }
    }

    function QO(WW, iW, OW) {
      const {
        count: mW
      } = FO("webgpu", WW, iW, OW);
      void 0 !== mW && fi(mW)
    }
    const Wm = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function im(WW) {
      var iW;
      return null !== (iW = WW instanceof Error ? WW.reason : void 0) && void 0 !== iW ? iW : ""
    }

    function Om(WW, iW, mW) {
      var EW, NW, PW, LW, wW;
      let {
        from: tW,
        cause: ZW = "lost",
        restoreLost: xW = !1,
        adapterRemembered: bW = !1,
        error: jW,
        context: sW = zO,
        session: MW = Wm
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, KW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: SW,
        count: YW
      } = FO(WW, ZW, jW, sW, {
        restoreLost: xW,
        adapterRemembered: bW
      }, KW), yW = {
        reloadFrom: null !== tW && void 0 !== tW ? tW : "",
        losses: String(iW),
        cause: ZW,
        detail: SW,
        vendor: null !== (EW = null === (NW = sW.adapter) || void 0 === NW ? void 0 : NW.vendor) && void 0 !== EW ? EW : "",
        architecture: null !== (PW = null === (LW = sW.adapter) || void 0 === LW ? void 0 : LW.architecture) && void 0 !== PW ? PW : "",
        indirectHangs: String(sW.indirectHangs),
        restoresSkipped: String(sW.restoresSkipped),
        restoreLost: String(xW),
        adapterRemembered: String(bW),
        lossReason: im(jW),
        samples: String(MW.samples),
        sunShadows: String(MW.sunShadows),
        renderDistance: String(MW.renderDistance),
        gpuFamily: null !== (wW = (0, cW.d)()) && void 0 !== wW ? wW : "",
        browser: (0, lW.o)(),
        siteUsed: kW.siteUsed,
        wasmBuild: mW.wasm,
        clientVersion: mW.client
      }, TW = "webgpu" !== WW && void 0 !== tW ? function(WW, iW, OW, mW) {
        return `: ${WW}, ${iW?"restore lost":"not restored"}, up ${(0,AW.d)(IO(OW,mW))}`
      }(tW, xW, sW.boundAtMs, KW) : "", JW = `${rO(WW,ZW)}${TW}`, hW = gi({
        kind: "recovered",
        code: "CORE-renderLost",
        site: zW,
        fatal: !1,
        message: JW,
        details: yW,
        error: jW,
        countAs: YW
      });
      return Bi("ga", (async () => {
        const {
          logError: iW
        } = await Promise.resolve().then((() => OW(3960))), mW = `${UW.c["webgpu"===WW?"WebGPU":"WebGL2"]}\n Error: ${SW}`;
        iW("warning", mW), iW("error", mW)
      })), hW
    }

    function mm(WW, iW) {
      var OW, mW;
      const EW = null === WW.name ? "TEXTURE-sources" : null === WW.url ? "TEXTURE-nourl" : WW.error instanceof eW.b ? `TEXTURE-${WW.error.status}` : "TEXTURE-network",
        NW = null === WW.name ? "terrain textures could not load" : `terrain texture ${WW.name} could not load`,
        PW = {
          texture: null !== (OW = WW.name) && void 0 !== OW ? OW : "",
          url: null !== (mW = WW.url) && void 0 !== mW ? mW : "",
          wasmBuild: iW.wasm,
          clientVersion: iW.client
        };
      return gi({
        kind: "terrainTexture",
        code: EW,
        site: YW.C,
        fatal: !1,
        message: NW,
        details: PW,
        error: WW.error
      })
    }
    const Em = {
      previewAnimations: {
        site: FW,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: Wi,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Nm(WW, iW, OW, mW) {
      const {
        site: EW,
        prefix: NW,
        name: PW
      } = Em[WW], {
        stage: LW,
        error: cW
      } = OW;
      return gi({
        kind: WW,
        code: "decode" === LW ? null === cW ? `${NW}-decode` : `${NW}-trap` : cW instanceof uW.h ? `${NW}-${cW.status}` : `${NW}-network`,
        site: EW,
        fatal: !1,
        message: "decode" === LW ? `${PW} did not decode` : `${PW} could not load`,
        details: {
          url: iW,
          wasmBuild: mW.wasm,
          clientVersion: mW.client
        },
        error: cW
      })
    }
    const Pm = "staleBuild";

    function Lm(WW, iW, OW) {
      const mW = {
          failedSite: WW.site,
          url: WW.url,
          from: WW.from,
          sameBuild: String(WW.from === iW),
          reloadMs: String(Math.max(0, Date.now() - WW.at)),
          wasmBuild: OW.wasm,
          clientVersion: OW.client
        },
        EW = `reloaded into a newer build after ${WW.site} failed to load: ${WW.error}`;
      return gi({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: Pm,
        fatal: !1,
        message: EW,
        details: mW
      })
    }
  },
  42301: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => LW,
      f: () => EW,
      j: () => PW,
      m: () => cW
    });
    var mW = OW(5551);
    const EW = 3e4,
      NW = 900;

    function PW(WW, iW) {
      const OW = null === WW ? 0 : iW - WW;
      return OW <= NW ? OW : 0
    }
    class LW {
      constructor(WW) {
        this.wZ = WW, this.waitedMs = 0, this.lastMs = null
      }
      frame(WW, iW) {
        return !!iW || (this.waitedMs += PW(this.lastMs, WW), this.lastMs = WW, !(this.waitedMs < EW) && (this.wZ(), !0))
      }
    }

    function cW(WW, iW) {
      return 0 === (WW & mW.Y.ChunkRequested) ? "no_chunk_request" : 0 === (WW & mW.Y.ChunkStored) ? "chunk_not_stored" : 0 === (WW & mW.Y.MeshLanded) ? "not_meshed" : null === iW ? "no_frame_drawn" : 0 === iW.terrainParts ? "no_terrain_parts" : iW.terrainCompiling > 0 ? "terrain_compiling" : iW.terrainOpaque + iW.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  42292: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => cW,
      f: () => PW,
      g: () => tW
    });
    var mW = OW(172),
      EW = OW(42301);
    const NW = ["view", "startup", "skipped"];

    function PW(WW) {
      return 0 === WW.clientWidth || 0 === WW.clientHeight || 0 === WW.width || 0 === WW.height
    }

    function LW(WW) {
      if (null === WW) return "none";
      const [iW, OW, mW, EW] = WW, NW = [
        ["link", iW],
        ["terrain", OW],
        ["BL", mW],
        ["other", EW]
      ];
      let PW = "none",
        LW = 0;
      for (const [cW, wW] of NW) wW > LW && (PW = cW, LW = wW);
      return PW
    }
    class cW {
      constructor(WW) {
        this.gap = WW, this.chunkAtMs = null, this.lastFrameMs = null, this.drawnMs = 0, this.frames = 0, this.visibleFromMs = null, this.undrawn = {
          view: 0,
          startup: 0,
          skipped: 0
        }, this.over = !1
      }
      get open() {
        return null !== this.chunkAtMs && !this.over
      }
      playerChunk(WW, iW) {
        null !== this.chunkAtMs || this.over || (this.chunkAtMs = WW, iW || this.pageShown(WW))
      }
      pageShown(WW) {
        this.open && null === this.visibleFromMs && (this.visibleFromMs = WW, this.gap.restart(WW))
      }
      animationFrame(WW, iW, OW) {
        !this.open || null === this.visibleFromMs || WW <= this.visibleFromMs || (this.gap.animationFrame(), "paced" === iW ? this.gap.paced() : "skipped" === iW ? this.undrawn.skipped++ : "none" === iW && this.undrawn[OW ? "startup" : "view"]++)
      }
      frame(WW) {
        this.open && (this.drawnMs += (0, EW.j)(this.lastFrameMs, WW), this.lastFrameMs = WW, this.frames++)
      }
      shown() {
        this.over = !0, this.gap.stop()
      }
      end(WW, iW) {
        if (null === this.chunkAtMs || this.over) return null;
        this.over = !0;
        const OW = null === this.visibleFromMs ? null : this.gap.words(!1, iW);
        return this.gap.stop(), {
          end: WW,
          waitedMs: Math.max(iW - this.chunkAtMs, 0),
          visibleMs: null === this.visibleFromMs ? 0 : Math.max(iW - this.visibleFromMs, 0),
          drawnMs: this.drawnMs,
          frames: this.frames,
          undrawn: {
            ...this.undrawn
          },
          page: OW
        }
      }
    }

    function wW(WW) {
      return WW < 5e3 ? "brief" : WW < 15e3 ? "short" : WW < 6e4 ? "long" : "very_long"
    }

    function tW(WW, iW) {
      var OW, EW;
      const PW = [...null === WW.page ? [] : WW.page.split(" "), ...NW.filter((iW => WW.undrawn[iW] > 0)).map((WW => `undrawn:${WW}`)), ...iW.canvasEmpty ? ["canvas:empty"] : []],
        cW = [
          ["", `first view unshown, ${iW.cause}, ended ${WW.end}`],
          [", ", 0 === WW.visibleMs ? "visible none" : `visible ${wW(WW.visibleMs)}`],
          [", ", 0 === WW.frames ? "no frames" : `drew ${wW(WW.drawnMs)}`], ...PW.map(((WW, iW) => [0 === iW ? ", " : " ", WW])), [", ", `waited ${wW(WW.waitedMs)}`],
          [", ", iW.bound ? "bound" : "unbound"], ...iW.preload ? [
            [", ", "preload"]
          ] : [],
          [", ", iW.startupLoaded ? "startup in" : "startup out"],
          [", ", iW.renderPending > 0 ? "render pending" : "render resolved"],
          [", ", `lacked ${LW(iW.wait)}${(null!==(OW=null===(EW=iW.wait)||void 0===EW?void 0:EW[4])&&void 0!==OW?OW:0)>0?" gapped":""}`]
        ];
      let tW = "";
      for (const [NW, LW] of cW) {
        const WW = tW + NW + LW;
        if (WW.length > mW.bb) break;
        tW = WW
      }
      return tW
    }
  },
  42109: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW,
      e: () => UW,
      f: () => bW,
      h: () => jW,
      l: () => xW,
      o: () => lW,
      p: () => tW,
      t: () => ZW,
      x: () => AW
    });
    class mW extends Error {
      constructor(WW) {
        super(`the join's code did not load: ${WW instanceof Error?WW.message:String(WW)}`, {
          cause: WW
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === WW || void 0 === WW ? void 0 : WW.request
      }
    }
    let EW = null,
      NW = null,
      PW = null;
    const LW = [];
    let cW = null;

    function wW(WW, iW) {
      try {
        WW(iW)
      } catch (OW) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", OW)
      }
    }

    function tW() {
      return cW
    }

    function ZW(WW) {
      LW.push(WW), null !== cW && wW(WW, cW)
    }

    function xW(WW) {
      return EW ??= Promise.all([OW.e(85), OW.e(113), OW.e(88), OW.e(177), OW.e(91), OW.e(224), OW.e(252), OW.e(112), OW.e(142), OW.e(245), OW.e(244), OW.e(306), OW.e(243), OW.e(222), OW.e(50), OW.e(223), OW.e(127), OW.e(214), OW.e(280), OW.e(143), OW.e(103), OW.e(69)]).then((() => OW(54728))).then((iW => {
        iW.loadAudio(WW), cW = iW;
        for (const WW of LW) wW(WW, iW);
        return iW
      })).catch((WW => {
        throw EW = null, WW
      })), EW
    }
    async function lW(WW, iW) {
      try {
        const OW = await xW(WW);
        await OW.loadClientGame(iW)
      } catch (OW) {
        throw new mW(OW)
      }
    }

    function AW(WW, iW) {
      NW = {
        running: WW,
        shell: iW
      }
    }

    function bW() {
      return PW
    }
    async function jW(WW) {
      const iW = NW;
      if ((null === iW || void 0 === iW ? void 0 : iW.running) !== WW) throw new Error("the core's session has ended");
      const OW = await xW(iW.shell.audio).catch((WW => {
        throw new mW(WW)
      }));
      if (null !== PW) return PW;
      if (NW !== iW || WW.isStopped) throw new Error("the core stopped while the game code loaded");
      if (PW = OW.startGameHost(WW, iW.shell), null === PW) throw new Error("the core's shared tables didn't read, so the game can't start");
      return PW
    }

    function UW() {
      null !== PW && (null !== cW ? cW.endGameHost(PW) : PW.closeGame()), PW = null, NW = null
    }
  },
  42222: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW
    });
    const mW = {
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
  42307: (WW, iW, OW) => {
    OW.d(iW, {
      B: () => LW,
      c: () => wW,
      e: () => NW,
      f: () => PW,
      j: () => EW,
      n: () => lW,
      p: () => tW,
      t: () => cW,
      v: () => xW,
      z: () => ZW
    });
    var mW = OW(1930);
    const EW = new Uint8Array([12]),
      NW = 2e3,
      PW = 257;

    function LW(WW) {
      const iW = new Uint8Array(4);
      return new DataView(iW.buffer).setUint32(0, WW, !0), iW
    }
    class cW extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class wW extends Error {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(WW), this.stage = iW, this.code = OW, this.serverText = mW, this.socketOpened = EW, this.name = "JoinError"
      }
    }
    class tW extends Error {
      constructor(WW) {
        super(WW), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class ZW extends Error {
      constructor(WW) {
        super((0, mW.f)(WW), {
          cause: WW
        }), this.name = "TrafficCheckError"
      }
    }
    class xW extends Error {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(WW, {
          cause: OW
        }), this.networkLost = iW, this.httpStatus = mW, this.name = "SeatRequestError"
      }
    }
    class lW extends Error {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(WW), this.code = iW, this.serverText = OW, this.name = "MatchmakeError"
      }
    }
  },
  42309: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => lW,
      e: () => xW,
      f: () => AW
    });
    var mW = OW(3637),
      EW = OW(2464),
      NW = OW(40267),
      PW = OW(37727),
      LW = OW(40269),
      cW = OW(42307),
      wW = OW(42316);
    const tW = "seat reservation expired.",
      ZW = "early_leave";

    function xW(WW) {
      if (WW instanceof PW.c) return "expected";
      if (WW instanceof cW.v) return WW.networkLost ? "expected" : "unrecognised";
      if (WW instanceof cW.c) {
        if ("closed" === WW.stage && (0 === WW.code || (0, EW.f)(WW.code))) return "expected";
        if ("roomError" === WW.stage && (WW.serverText === tW || WW.serverText === ZW)) return "expected"
      }
      return WW instanceof cW.c || WW instanceof cW.n ? null === (0, LW.i)(WW.code).name ? "unrecognised" : "known" : (0, mW.e)(WW) ? "expected" : WW instanceof cW.z || WW instanceof wW.b ? "known" : "unrecognised"
    }

    function lW(WW) {
      return WW instanceof PW.c ? "timedOut" : "expected" !== xW(WW) || (0, mW.e)(WW) || WW instanceof cW.c && 1001 === WW.code ? void 0 : "failed"
    }

    function AW(WW) {
      return WW instanceof cW.c && "attach" !== WW.stage ? (0, NW.b)(WW, "closed" !== WW.stage || WW.socketOpened ? "socket" : "socket_unopened") : WW instanceof cW.v ? {
        at: "seat_lost",
        code: WW.httpStatus
      } : WW instanceof cW.n || WW instanceof PW.c ? (0, NW.b)(WW, WW instanceof PW.c ? WW.leg : "seat") : void 0
    }
  },
  42330: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => cW,
      c: () => wW,
      f: () => lW,
      h: () => ZW
    });
    var mW = OW(2388),
      EW = OW(5546),
      NW = OW(42339),
      PW = OW(42344),
      LW = OW(37265);
    const cW = 395,
      wW = 2147483648,
      tW = new Uint8Array(0);
    class ZW extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class xW extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class lW {
      constructor(WW, iW, OW) {
        var mW, EW, PW, LW;
        let cW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = WW, this.build = iW, this.onFailure = OW, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.EZ = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (mW = cW.fetchFile) && void 0 !== mW ? mW : WW => (0, NW.h)(WW), this.onWritten = null !== (EW = cW.onWritten) && void 0 !== EW ? EW : null, this.onTaken = null !== (PW = cW.onTaken) && void 0 !== PW ? PW : null, this.onPackFileFailed = null !== (LW = cW.onPackFileFailed) && void 0 !== LW ? LW : null, this.startupLeft = new Set(WW.startup);
        for (const NW of WW.startup) this.request(NW)
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
      drawnUrl(WW) {
        return this.drawn.get(WW)
      }
      request(WW) {
        const iW = this.pending.get(WW);
        if (!0 === (null === iW || void 0 === iW ? void 0 : iW.ask)) return;
        const OW = this.kZ(WW, !0);
        OW.recheck = void 0 !== iW;
        const mW = this.drawn.get(WW);
        if (void 0 !== mW) return OW.BL = !0, OW.recheck = !0, void this.fetch(WW, OW, mW);
        this.fetchWanted(WW, OW)
      }
      async refresh() {
        const WW = ++this.refreshes,
          iW = new Set;
        for (const PW of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const WW of PW) 0 === (WW & NW.d) && iW.add(WW);
        const OW = [...iW];
        let mW;
        try {
          mW = await Promise.all(OW.map((WW => this.wanted(WW))))
        } catch {
          return null
        }
        if (WW !== this.refreshes) return null;
        const EW = {
          resent: 0,
          refetched: 0,
          delivered: OW.filter((WW => this.drawn.has(WW))).length
        };
        return OW.forEach(((WW, iW) => {
          const {
            url: OW,
            inPlaceOf: NW
          } = mW[iW], PW = this.pending.get(WW);
          if (void 0 !== PW) {
            if (PW.BL || void 0 === PW.url) return void(PW.recheck = !0);
            if (PW.url === OW) return;
            EW.refetched++;
            const iW = this.kZ(WW, PW.ask);
            return iW.recheck = PW.recheck, void this.fetch(WW, iW, OW, NW)
          }
          const LW = this.written.get(WW);
          void 0 === LW ? this.drawn.get(WW) !== (null !== OW && void 0 !== OW ? OW : void 0) && (EW.resent++, this.fetch(WW, this.kZ(WW, !1), OW, NW)) : LW.url !== (null !== OW && void 0 !== OW ? OW : "") && (LW.attempt.recheck = !0)
        })), EW
      }
      taken(WW, iW) {
        const OW = new Set,
          mW = new Set;
        for (const EW of Array.from(iW)) 0 === (EW & wW) ? OW.add(EW) : mW.add((EW & ~wW) >>> 0);
        for (const [EW, NW] of this.written) NW.seq > WW || (this.written.delete(EW), OW.has(NW.seq) ? this.refusedFile(EW, NW) : this.takenFile(EW, NW, !NW.empty && !mW.has(NW.seq)))
      }
      takenFile(WW, iW, OW) {
        const {
          attempt: mW
        } = iW;
        if (OW) {
          var EW;
          this.drawn.set(WW, iW.url), this.undrawn.delete(WW), void 0 !== mW.inPlaceOf ? this.refusedPack.set(WW, mW.inPlaceOf) : mW.BL || this.refusedPack.delete(WW), null === (EW = this.onTaken) || void 0 === EW || EW.call(this, WW, !0);
          const OW = this.pending.get(WW);
          if (!0 === (null === OW || void 0 === OW ? void 0 : OW.BL) && OW.url !== iW.url) {
            const OW = this.kZ(WW, !0);
            OW.BL = !0, OW.recheck = !0, this.fetch(WW, OW, iW.url)
          }
        } else {
          var NW;
          this.drawn.has(WW) || this.undrawn.add(WW), null === (NW = this.onTaken) || void 0 === NW || NW.call(this, WW, !1)
        }
        mW.recheck && this.resendIfChanged(WW)
      }
      refusedFile(WW, iW) {
        var OW, mW;
        if (null === (OW = this.onTaken) || void 0 === OW || OW.call(this, WW, !1), this.refusedPack.set(WW, iW.url), this.pending.has(WW)) return void(null === (mW = this.onPackFileFailed) || void 0 === mW || mW.call(this, WW, AW(iW.url)));
        const EW = this.kZ(WW, iW.attempt.ask);
        EW.recheck = iW.attempt.recheck, this.afterRefusal(WW, EW, iW.url)
      }
      async afterRefusal(WW, iW, OW) {
        var mW;
        let EW;
        try {
          EW = await this.wanted(WW)
        } catch (NW) {
          return void(this.pending.get(WW) === iW && this.giveUp(WW, iW, OW, NW))
        }
        this.pending.get(WW) === iW && (EW.inPlaceOf !== OW ? iW.ask || (null !== (mW = EW.url) && void 0 !== mW ? mW : void 0) !== this.drawn.get(WW) ? this.fetch(WW, iW, EW.url, EW.inPlaceOf) : this.pending.delete(WW) : this.fallBack(WW, iW, OW, AW(OW)))
      }
      kZ(WW, iW) {
        const OW = {
          url: void 0,
          ask: iW,
          BL: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(WW, OW);
        for (let mW = this.ready.length - 1; mW >= 0; mW--) this.ready[mW].file === WW && this.ready.splice(mW, 1);
        return OW
      }
      async wanted(WW) {
        const iW = await this.files.url(WW);
        return null !== iW && this.refusedPack.get(WW) === iW ? {
          url: await this.files.shippedUrl(WW),
          inPlaceOf: iW
        } : {
          url: iW,
          inPlaceOf: void 0
        }
      }
      fetchWanted(WW, iW) {
        const OW = this.files.url(WW);
        OW instanceof Promise ? OW.then((OW => {
          this.fetchFound(WW, iW, OW)
        }), (OW => {
          this.pending.get(WW) === iW && this.giveUp(WW, iW, "", OW)
        })) : this.fetchFound(WW, iW, OW)
      }
      fetchFound(WW, iW, OW) {
        null !== OW && this.refusedPack.get(WW) === OW ? Promise.resolve(this.files.shippedUrl(WW)).then((mW => {
          this.fetch(WW, iW, mW, OW)
        }), (mW => {
          this.pending.get(WW) === iW && this.giveUp(WW, iW, OW, mW)
        })) : this.fetch(WW, iW, OW)
      }
      fetch(WW, iW, OW, mW) {
        this.pending.get(WW) === iW && (iW.url = OW, iW.inPlaceOf = mW, null !== OW ? this.load(WW, iW, OW) : this.buildFile(WW, iW, "", tW))
      }
      load(WW, iW, OW) {
        const mW = this.EZ.get(WW);
        (null === mW || void 0 === mW ? void 0 : mW.url) !== OW ? this.fetchFile(OW).then((mW => {
          var EW, NW;
          this.pending.get(WW) === iW && (this.keptTotal += mW.byteLength - (null !== (EW = null === (NW = this.EZ.get(WW)) || void 0 === NW ? void 0 : NW.glb.byteLength) && void 0 !== EW ? EW : 0), this.EZ.set(WW, {
            url: OW,
            glb: mW
          }), this.buildFile(WW, iW, OW, mW))
        }), (mW => {
          this.pending.get(WW) === iW && this.fallBack(WW, iW, OW, mW)
        })) : this.buildFile(WW, iW, OW, mW.glb)
      }
      buildFile(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const PW = mW.byteLength > 0 && (0, NW.i)(OW) ? (WW | NW.c) >>> 0 : WW;
        this.queueRecord(WW, iW, OW, mW, this.build(PW, mW), EW)
      }
      queueRecord(WW, iW, OW, mW, NW, LW) {
        NW.then((NW => {
          if (this.pending.get(WW) !== iW) return;
          if (EW.o + (0, EW.xe)(NW.byteLength) > EW.Oc) return void this.ringRefused(WW, iW, OW, new ZW(`${bW(OW)}'s record is ${NW.byteLength-PW.b} bytes, past the cmd ring's ${EW.Oc}`), LW);
          const cW = {
            file: WW,
            url: OW,
            payload: NW,
            glb: mW,
            attempt: iW
          };
          LW ? this.ready.unshift(cW) : this.ready.push(cW)
        }))
      }
      async fallBack(WW, iW, OW, mW) {
        var EW;
        let NW = null,
          PW = mW;
        try {
          NW = await this.files.shippedUrl(WW)
        } catch (LW) {
          PW = LW
        }
        this.pending.get(WW) === iW && (null !== NW && NW !== OW ? (null === (EW = this.onPackFileFailed) || void 0 === EW || EW.call(this, WW, mW), iW.ask || this.drawn.get(WW) !== NW ? (iW.url = NW, iW.inPlaceOf = OW, this.load(WW, iW, NW)) : this.pending.delete(WW)) : this.giveUp(WW, iW, OW, PW))
      }
      ringRefused(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, NW.i)(OW) ? this.fallBack(WW, iW, OW, mW): this.giveUp(WW, iW, OW, mW, EW)
      }
      giveUp(WW, iW, OW, EW) {
        let NW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: WW,
          url: bW(OW),
          error: EW,
          startup: this.startupLeft.has(WW)
        }), iW.ask || !this.drawn.has(WW) ? (0, mW.N)(EW) ? this.queueRecord(WW, iW, OW, tW, Promise.resolve((0, PW.i)(WW, (0, LW.m)(EW))), NW) : this.buildFile(WW, iW, OW, tW, NW) : this.pending.delete(WW)
      }
      async resendIfChanged(WW) {
        var iW;
        if (0 !== (WW & NW.d)) return;
        let OW;
        try {
          OW = await this.wanted(WW)
        } catch {
          return
        }(null !== (iW = OW.url) && void 0 !== iW ? iW : void 0) === this.drawn.get(WW) || this.pending.has(WW) || this.written.has(WW) || this.fetch(WW, this.kZ(WW, !1), OW.url, OW.inPlaceOf)
      }
      drain(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === WW) return;
        let OW = 0,
          mW = 0;
        for (; mW < this.ready.length && OW < 262144;) {
          const LW = this.ready[mW];
          if (this.written.has(LW.file)) {
            mW++;
            continue
          }
          const tW = this.nextSeq;
          new DataView(LW.payload.buffer, LW.payload.byteOffset, LW.payload.byteLength).setUint32(PW.d, tW, !0);
          const xW = LW.attempt.BL && LW.glb.byteLength > 0 && this.drawn.get(LW.file) === LW.url;
          if (WW(cW, xW ? 1 : 0, LW.payload)) {
            if (this.nextSeq = tW >= wW - 1 ? 1 : tW + 1, this.ready.splice(mW, 1), OW += LW.payload.byteLength, this.pending.delete(LW.file), this.startupLeft.delete(LW.file), this.written.set(LW.file, {
                seq: tW,
                url: LW.url,
                empty: 0 === LW.glb.byteLength,
                attempt: LW.attempt
              }), LW.glb.byteLength > 0) try {
              var EW;
              null === (EW = this.onWritten) || void 0 === EW || EW.call(this, LW.file, LW.glb)
            } catch (NW) {
              console.warn("ModelFeed: reading the file's images failed", NW)
            }
          } else {
            if (null === iW || 0 === LW.glb.byteLength || iW(LW.payload.byteLength)) return;
            this.ready.splice(mW, 1);
            const WW = new ZW(`${bW(LW.url)}'s record is ${LW.payload.byteLength-PW.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(LW.file, LW.attempt, LW.url, WW, !0)
          }
        }
      }
    }

    function AW(WW) {
      return new xW(`presentation refused ${bW(WW)}`)
    }

    function bW(WW) {
      return WW.startsWith("data:") ? `${WW.slice(0,Math.min(Math.max(WW.indexOf(","),5),64))},...` : WW
    }
  },
  42339: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW,
      d: () => NW,
      h: () => tW,
      i: () => LW,
      l: () => wW,
      p: () => cW
    });
    var mW = OW(2388),
      EW = OW(4390);
    const NW = 2147483648,
      PW = 1073741824;

    function LW(WW) {
      return WW.startsWith("data:")
    }

    function cW(WW) {
      let {
        onTableFailed: iW,
        packUrl: OW
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const mW = wW();
      mW.catch((WW => {
        null === iW || void 0 === iW || iW(WW)
      }));
      const EW = async iW => (await mW).fileUrl((iW & ~NW) >>> 0, WW);
      return {
        startup: [],
        url: async WW => {
          if (OW && 0 === (WW & NW)) {
            const iW = await mW,
              EW = iW.filePackName(WW),
              NW = null === EW || "lifeform" === iW.fileSource(WW) ? null : OW(EW);
            if (null !== NW) return NW
          }
          return EW(WW)
        },
        shippedUrl: EW
      }
    }

    function wW() {
      return OW.e(50).then((() => OW(44924)))
    }
    async function tW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return WW.startsWith("data:") ? (0, EW.c)(WW.slice(WW.indexOf(",") + 1), iW) : (0, mW.C)(WW, {
        spare: iW
      })
    }
  },
  42344: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => cW,
      d: () => wW,
      e: () => AW,
      i: () => xW,
      j: () => ZW,
      l: () => lW
    });
    const mW = 826427981,
      EW = 1,
      NW = 2,
      PW = 44,
      LW = 58,
      cW = 8,
      wW = 4;

    function tW(WW, iW, OW) {
      const EW = (new TextEncoder).encode(OW),
        NW = cW + 4 * (iW.length + 2),
        PW = new Uint8Array(NW + (EW.byteLength + 3 & -4)),
        LW = new DataView(PW.buffer);
      return LW.setUint32(0, WW, !0), LW.setUint32(cW, mW, !0), iW.forEach(((WW, iW) => {
        LW.setUint32(cW + 4 * (iW + 1), WW, !0)
      })), LW.setUint32(NW - 4, EW.byteLength, !0), PW.set(EW, NW), PW
    }

    function ZW(WW, iW) {
      return tW(WW, [NW], iW)
    }

    function xW(WW, iW) {
      return tW(WW, [EW, LW], iW)
    }

    function lW(WW, iW) {
      return tW(WW, [EW, PW], iW)
    }

    function AW(WW) {
      const iW = cW;
      if (WW.byteLength < iW + 12) return !1;
      const OW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
      return OW.getUint32(iW, !0) === mW && OW.getUint32(iW + 4, !0) === EW && OW.getUint32(iW + 8, !0) === PW
    }
  },
  42225: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      f: () => tW,
      i: () => PW,
      k: () => cW
    });
    var mW = OW(37265);
    class EW extends Error {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${WW}: the module trapped${OW?" in an earlier call":""}: ${String(iW)}`, {
          cause: iW
        }), this.site = WW, this.trap = iW, this.earlier = OW, this.name = "ModuleTrapError", iW instanceof Error && void 0 !== iW.stack && (this.stack = `${this.name}: ${this.message}\n${iW.stack}`)
      }
    }
    const NW = new WeakMap;

    function PW(WW) {
      return NW.has(WW)
    }

    function LW(WW, iW) {
      NW.has(WW) || NW.set(WW, iW)
    }

    function cW(WW, iW) {
      return !!(0, mW.i)(iW) && (LW(WW, iW), !0)
    }
    const wW = [
      ["error", WW => WW.error],
      ["unhandledrejection", WW => WW.reason]
    ];

    function tW(WW, iW, OW) {
      let PW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return NW.has(WW) ? Promise.reject(new EW(iW, NW.get(WW), !0)) : new Promise(((NW, cW) => {
        const tW = OW => {
            LW(WW, OW), lW(), cW(new EW(iW, OW))
          },
          ZW = WW => {
            WW instanceof WebAssembly.RuntimeError ? tW(WW) : (lW(), cW(WW))
          },
          xW = wW.map((WW => {
            let [iW, OW] = WW;
            return [iW, WW => {
              const iW = OW(WW);
              (0, mW.i)(iW) && tW(iW)
            }]
          })),
          lW = () => {
            for (const [WW, iW] of xW) null === PW || void 0 === PW || PW.removeEventListener(WW, iW)
          };
        for (const [WW, iW] of xW) null === PW || void 0 === PW || PW.addEventListener(WW, iW);
        let AW;
        try {
          AW = OW()
        } catch (bW) {
          return void ZW(bW)
        }
        AW.then((WW => {
          lW(), NW(WW)
        }), ZW)
      }))
    }
  },
  42255: (WW, iW, OW) => {
    OW.d(iW, {
      B: () => DW,
      F: () => HW,
      G: () => vW,
      H: () => aW,
      J: () => gW,
      K: () => XW,
      L: () => pW,
      O: () => eW,
      R: () => rW,
      c: () => hW,
      g: () => yW,
      h: () => CW,
      k: () => VW,
      n: () => YW,
      o: () => JW,
      r: () => KW,
      u: () => uW,
      x: () => dW,
      y: () => IW,
      z: () => GW
    });
    var mW = OW(192),
      EW = OW(25),
      NW = OW(4802),
      PW = OW(131),
      LW = OW(324),
      cW = OW(39),
      wW = OW(299),
      tW = OW(42216),
      ZW = OW(42228),
      xW = OW(37711),
      lW = OW(42259),
      AW = (OW(42244), OW(42358)),
      bW = OW(42275),
      jW = OW(42235);
    const UW = "wasmJoinBuild";
    let kW = null,
      sW = null,
      MW = null;

    function KW(WW) {
      MW = WW
    }
    let SW = !1;

    function YW() {
      SW = !0
    }

    function yW() {
      return SW
    }
    let TW = !1;

    function JW() {
      TW = !0
    }

    function hW() {
      return TW
    }

    function HW() {
      return MW
    }
    let nW = null;

    function uW(WW) {
      nW = WW, (0, LW.c)(WW)
    }
    const oW = "wasmClientRenderLost";

    function dW() {
      cW.j.setItem(oW, !0)
    }

    function eW() {
      return !0 === cW.j.getItem(oW)
    }

    function vW() {
      return nW
    }

    function gW() {
      if (null === kW) {
        cW.i.removeItem("wasmLastPick"), cW.i.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, LW.j)(), kW = (0, wW.p)().then((() => (0, tW.B)(lW.g))).then((WW => (null === WW || (0, tW.r)(WW) || (sW = AW.e[WW.backend], EW.d.followGameGpu("webgpu" === WW.backend ? WW.adapter : null), "webgpu" === WW.backend && (0, bW.d)()), WW)))
      }
      return kW
    }

    function DW() {
      return sW
    }

    function VW(WW) {
      return WW ? WW.load() : Promise.resolve().then((function() {
        var WW = new Error("Cannot find module '@bloxd/wasm/client'");
        throw WW.code = "MODULE_NOT_FOUND", WW
      })).then((WW => WW.bloxdWasmClient))
    }

    function pW(WW) {
      cW.i.setItem(UW, WW)
    }

    function fW(WW, iW) {
      const OW = cW.i.getItem(UW);
      return null === OW ? function(WW) {
        if (void 0 !== (0, mW.c)(WW, "webgpu") && (0, tW.z)()) return "webgpu";
        return !1 === (0, PW.p)() ? "webgl1" : "webgl"
      }(WW) : "none" === OW ? null : "string" === typeof OW && void 0 !== (0, mW.c)(WW, OW) ? OW : (iW && console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(OW)}, is none of this client's: guessing WebGL2's`), "webgl")
    }
    async function CW() {
      if (null === lW.g) return VW(null);
      const WW = fW(lW.g, !0);
      return null === WW ? null : lW.g[WW]()
    }

    function XW() {
      null === kW && null !== lW.g && "webgl" === fW(lW.g, !1) && (0, jW.b)()
    }
    let BW = null,
      qW = null,
      RW = null;

    function GW() {
      return BW ??= gW().then((async WW => {
        const iW = null !== WW && !(0, tW.r)(WW),
          OW = {
            indirectHangs: iW && await (0, tW.J)(WW, window.location.search),
            storagePullBreaks: iW && (0, tW.Q)(WW, window.location.search),
            splitPassBreaks: iW && (0, tW.P)(WW, window.location.search),
            earlySky: iW && (0, tW.G)(WW, window.location.search),
            instancedTerrain: iW ? (0, tW.K)(WW, window.location.search) : null,
            cellLight: iW && await (0, NW.h)("cellLight"),
            framesAhead: (0, tW.j)(window.location.search, iW ? WW : null),
            webGpuRestores: !iW || (0, tW.U)(WW, (0, xW.c)()),
            bufferCopiesCrash: iW && (0, tW.E)(WW, window.location.search),
            firstVertex: iW ? (0, ZW.c)(WW.backend, window.location.search) : void 0
          };
        return qW = OW.indirectHangs, RW = !OW.webGpuRestores, OW
      })), BW
    }

    function IW() {
      return qW
    }

    function aW() {
      return RW
    }
    async function rW() {
      const WW = null === kW ? null : await kW;
      return null !== WW && (0, tW.r)(WW) && (kW = null, BW = null, qW = null, RW = null), gW()
    }
  },
  42362: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => cW,
      g: () => wW
    });
    var mW = OW(37297),
      EW = OW(42202),
      NW = OW(5089),
      PW = OW(299),
      LW = OW(37711);
    async function cW(WW, iW) {
      return await Promise.all([(0, NW.h)(void 0, !0), (0, PW.p)()]), (0, mW.o)(WW, EW.d, {
        ...iW,
        memoryMaximumBytes: (0, LW.m)()
      })
    }
    async function wW() {
      return await (0, NW.h)(void 0, !0), (0, mW.s)((0, LW.m)())
    }
  },
  42228: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      c: () => NW
    });
    var mW = OW(248);
    const EW = "provokingVertex";

    function NW(WW, iW) {
      if ("webgl" !== WW) return;
      const OW = new URLSearchParams(iW).get(EW);
      return "first" === OW || "last" !== OW && null
    }
    const PW = new WeakSet;

    function LW(WW, iW) {
      var OW, EW;
      let NW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (OW = null === (EW = globalThis.navigator) || void 0 === EW ? void 0 : EW.userAgent) && void 0 !== OW ? OW : "";
      try {
        !1 === iW || PW.has(WW) || (PW.add(WW), WW.addEventListener("webglcontextrestored", (() => {
          LW(WW, iW, NW)
        })));
        const OW = WW.getContext("webgl2");
        if (null === OW || OW.isContextLost()) return !1;
        if (!(null !== iW && void 0 !== iW ? iW : function(WW, iW) {
            var OW, EW;
            const NW = WW.getExtension("WEBGL_debug_renderer_info");
            if (null === NW) return !1;
            return function(WW, iW, OW) {
              return OW.includes("Windows") && "adreno_6" === (0, mW.i)(WW, iW)
            }(String(null !== (OW = WW.getParameter(NW.UNMASKED_VENDOR_WEBGL)) && void 0 !== OW ? OW : ""), String(null !== (EW = WW.getParameter(NW.UNMASKED_RENDERER_WEBGL)) && void 0 !== EW ? EW : ""), iW)
          }(OW, NW))) return !1;
        const EW = OW.getExtension("WEBGL_provoking_vertex");
        return null !== EW && (EW.provokingVertexWEBGL(EW.FIRST_VERTEX_CONVENTION_WEBGL), console.info("WebGL2 draws flat varyings from the first vertex (WEBGL_provoking_vertex)"), !0)
      } catch (cW) {
        return console.warn("WebGL2's provoking vertex couldn't be set: flat varyings draw from the last vertex", cW), !1
      }
    }
  },
  42240: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => wW,
      h: () => LW,
      k: () => tW,
      n: () => PW
    });
    var mW = OW(339),
      EW = OW(662);
    let NW;

    function PW(WW) {
      var iW;
      const OW = NW;
      return NW = void 0, null !== (iW = cW(WW)) && void 0 !== iW ? iW : OW
    }

    function LW(WW) {
      try {
        const iW = cW(WW);
        void 0 !== iW && (NW = iW, (0, EW.g)((0, mW.l)(iW.reason, iW.message)))
      } catch (iW) {
        console.warn("Couldn't keep the WebGPU loss's cause", iW)
      }
    }

    function cW(WW) {
      var iW;
      const OW = null === WW || void 0 === WW || null === (iW = WW.ZPW) || void 0 === iW ? void 0 : iW.call(WW),
        mW = null === WW || void 0 === WW ? void 0 : WW.tPW();
      if (void 0 === mW) return;
      const EW = new Error(mW);
      return void 0 !== OW && (EW.reason = OW), EW
    }

    function wW(WW) {
      return WW instanceof Error ? WW : void 0
    }

    function tW(WW, iW) {
      return "lost" !== WW && "frames_refused" !== WW ? {} : (0, mW.l)("frames_refused" === WW ? WW : null === iW || void 0 === iW ? void 0 : iW.reason, null === iW || void 0 === iW ? void 0 : iW.message)
    }
  },
  42272: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => hW,
      e: () => YW,
      i: () => SW,
      l: () => KW,
      o: () => JW,
      r: () => oW,
      s: () => uW,
      u: () => dW
    });
    var mW = OW(5551),
      EW = OW(42275),
      NW = OW(35089);
    const PW = 1,
      LW = 18,
      cW = 19,
      wW = 20,
      tW = 21,
      ZW = 22,
      xW = 23,
      lW = {
        [PW]: "link",
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
        [LW]: "retry linked",
        [cW]: "fallback linked",
        [wW]: "fallback failed",
        [tW]: "link stalled",
        [ZW]: "link left pending",
        [xW]: "moved to general",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function AW(WW, iW, OW) {
      return WW === LW ? "program retry" : WW === PW ? "program link" : WW === tW ? "program link stall" : WW === ZW ? "program link pending" : WW === cW || WW === wW || WW === xW ? `program ${iW} ${OW}` : "program"
    }
    const bW = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain",
        5: "scene warm stuck"
      },
      jW = {
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
      UW = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      kW = {
        11: "none read after view",
        12: "some read after view"
      },
      sW = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...kW
      },
      MW = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function KW(WW, iW) {
      return WW === mW.o.RenderSerialLinks && void 0 !== kW[iW]
    }

    function SW(WW, iW) {
      return WW === mW.o.RenderInternal && (iW >>> 8 & 255) === ZW
    }

    function YW(WW, iW) {
      return WW === mW.o.RenderSerialLinks && void 0 !== MW[15 & iW]
    }
    const yW = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function TW(WW, iW) {
      var OW;
      return null !== (OW = WW[iW]) && void 0 !== OW ? OW : (0, NW.d)(iW)
    }

    function JW() {
      return (0, NW.d)((0, EW.c)())
    }

    function hW(WW, iW) {
      switch (WW) {
        case mW.o.RenderSceneRowNotDrawn:
          return {
            words: ` ${TW(jW,iW)}`, instance: String(iW), group: String(WW)
          };
        case mW.o.RenderChunkMeshNotDrawn: {
          const OW = 0 === (128 & iW) ? "" : " shortage",
            mW = iW >>> 8;
          return {
            words: ` ${TW(UW,127&iW)}${OW}${0===mW?"":` kind ${(0,NW.d)(mW)}`}`,
            instance: String(iW),
            group: String(WW)
          }
        }
        case mW.o.RenderInternal: {
          const OW = TW(bW, 255 & iW),
            mW = iW >>> 8 & 255;
          if (0 === mW) return {
            words: ` ${OW}`,
            instance: String(iW),
            group: String(WW)
          };
          const EW = TW(lW, mW),
            PW = iW >>> 16;
          return {
            words: ` ${OW} ${EW} program ${(0,NW.d)(PW)}`,
            instance: `${OW} ${EW} ${PW}`,
            group: AW(mW, EW, OW),
            gpuDetails: {
              programFailure: EW,
              program: String(PW)
            }
          }
        }
        case mW.o.RenderSerialLinks: {
          if (YW(WW, iW)) {
            const WW = function(WW) {
              const iW = (iW, OW) => (0, NW.d)(WW >>> iW & (1 << OW) - 1),
                OW = WW >>> 30 & 1 ? " restored" : "";
              return `link census ${MW[15&WW]} linked ${iW(22,8)} failed ${iW(4,6)} retried ${iW(10,6)} fallback ${iW(16,6)}${OW}`
            }(iW);
            return {
              words: ` ${WW}`,
              instance: String(15 & iW),
              group: "link census",
              gpuDetails: {
                linkCensus: WW
              }
            }
          }
          const OW = TW(sW, iW);
          return {
            words: ` ${OW}`,
            instance: String(iW),
            group: String(WW),
            gpuDetails: {
              serialLinks: OW
            }
          }
        }
        case mW.o.RenderGlErrorAfterRestore: {
          const OW = TW(yW, 65535 & iW),
            mW = iW >>> 16,
            EW = 65535 !== mW;
          return {
            words: ` ${OW}${EW?` program ${(0,NW.d)(mW)}`:""}`,
            instance: String(iW),
            group: String(WW),
            gpuDetails: EW ? {
              glError: OW,
              program: String(mW)
            } : {
              glError: OW
            }
          }
        }
        default:
          return null
      }
    }
    const HW = 2,
      nW = new Map;

    function uW(WW) {
      let {
        group: iW,
        instance: OW
      } = WW, mW = nW.get(iW);
      return void 0 === mW && (mW = [], nW.set(iW, mW)), !mW.includes(OW) && (mW.length >= HW || (mW.push(OW), !1))
    }

    function oW() {
      return nW.size > 0
    }

    function dW() {
      nW.clear()
    }
  },
  42259: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW,
      g: () => NW
    });
    var mW = OW(42266);
    const EW = new WeakSet;
    const NW = {
        webgpu: async () => (function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === WW || EW.has(WW.prototype)) return;
          EW.add(WW.prototype);
          const iW = WW.prototype.requestDevice;
          WW.prototype.requestDevice = function(WW) {
            var OW;
            const EW = null !== (OW = null === WW || void 0 === WW ? void 0 : WW.requiredLimits) && void 0 !== OW ? OW : {},
              NW = Object.keys(EW).filter((WW => !(WW in this.limits)));
            if (0 === NW.length) return iW.call(this, WW);
            const PW = Object.fromEntries(Object.entries(EW).filter((WW => {
              let [iW] = WW;
              return iW in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${NW.join(", ")}`), (0, mW.reportDroppedRequiredLimits)(NW), iW.call(this, {
              ...WW,
              requiredLimits: PW
            })
          }
        }(), (await OW.e(8).then((() => OW(54749)))).bloxdWasmWebgpu),
        webgl: async () => (await OW.e(6).then((() => OW(54761)))).bloxdWasmWebgl,
        webgl1: async () => (await OW.e(7).then((() => OW(54775)))).bloxdWasmWebgl1
      },
      PW = async () => (await OW.e(5).then((() => OW(54787)))).compileAnimationPackInWasm
  },
  42316: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => UW,
      c: () => jW,
      d: () => KW
    });
    var mW = OW(7646),
      EW = OW(27),
      NW = OW(4970),
      PW = OW(5551),
      LW = OW(7639),
      cW = OW(42321);

    function wW(WW, iW) {
      const OW = (0, LW.e)(iW.variants);
      return WW.setShaderPack(OW.variantFlags, OW.hooks, OW.moduleCodes, (0, cW.x)(iW.layers), cW.l[iW.policy], iW.keepCircleShadows)
    }
    const tW = 0,
      ZW = 1,
      xW = 2,
      lW = "shaderPack:failedToCompile",
      AW = new Set(["no_webgpu_api", "no_adapter", "compatibility_held", "software_adapter", "adapter_error", "start_no_adapter"]),
      bW = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function jW(WW, iW, OW) {
      var mW;
      const EW = null !== (mW = null === WW || void 0 === WW ? void 0 : WW.reason) && void 0 !== mW ? mW : "none";
      return AW.has(EW) ? {
        messageKey: iW ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === EW && "override" === (null === WW || void 0 === WW ? void 0 : WW.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: bW.has(EW) && !OW ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class UW extends Error {
      constructor(WW) {
        super(`the shader pack can't run in this game: ${WW}`), this.messageKey = WW, this.name = "ShaderPackJoinError"
      }
    }
    const kW = "strict";
    class sW {
      constructor(WW) {
        this.deps = WW, this.pagePack = void 0, this.loaded = null, this.policy = kW, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = WW.load().catch((iW => (WW.warn("the shader pack could not load: the game draws without it", iW), {
          status: "none"
        }))).then((WW => (this.loaded = WW, "active" === WW.status && (this.handOverToPreviews(WW), null !== WW.harnessPolicy && (this.policy = WW.harnessPolicy, this.handOver())), WW)))
      }
      async join(WW) {
        this.leave();
        const iW = this.game,
          [OW, EW] = await Promise.all([this.pagePack, this.policyOf(WW)]);
        if (iW !== this.game || "none" === OW.status) return null;
        const NW = "active" === OW.status ? OW.pack.variants : OW.variants,
          PW = (0, mW.j)(NW, EW);
        if (PW && "active" === OW.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (PW) {
          const WW = this.cantRun(OW, EW);
          if (null !== WW) return WW
        } else if ("blocked" === OW.status || null === this.deps.core) return null;
        return this.policy = EW, this.handOver(), PW && this.refused ? lW : (this.joined = !0, this.offInThisGame = !PW, null)
      }
      async replay(WW) {
        const iW = await this.join(WW);
        null === iW ? this.playable() : this.deps.failInGame(iW)
      }
      cantRun(WW, iW) {
        const {
          core: OW,
          noWebGpu: mW
        } = this.deps;
        if ("blocked" === WW.status) {
          return "shaderPack:failedUnchecked" === WW.messageKey && null === OW && mW.noAdapter ? mW.messageKey : WW.messageKey
        }
        return this.refused || this.failedPolicies.has(iW) ? lW : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var WW;
        return this.runsInJoinedGame() && "active" === (null === (WW = this.loaded) || void 0 === WW ? void 0 : WW.status) ? function(WW, iW) {
          const OW = WW.filter((WW => (0, mW.j)([WW], iW))),
            EW = WW => OW.some((iW => iW[WW]));
          return {
            sceneDepth: EW("sceneDepth"),
            sunShadow: EW("sunShadow"),
            airShadow: EW("airShadow")
          }
        }(this.loaded.pack.variants, this.policy) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(lW) : (null !== this.couldntRun ? this.notify(NW.e, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.policy) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(WW) {
        for (const {
            code: iW,
            detail: OW
          }
          of WW)
          if (iW === PW.o.RenderShaderPackNotRun) switch (255 & OW) {
            case tW:
              this.refused = !0, this.failed();
              break;
            case ZW:
              this.failedPolicies.add(this.policy), this.failed();
              break;
            case xW:
              this.failedModelPolicies.add(this.policy), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(lW) : this.failedWhileJoining = !0)
      }
      fail(WW) {
        this.leave(), this.deps.failInGame(WW)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(WW, iW) {
        const OW = this.game;
        this.deps.notify(WW, (() => OW === this.game && this.joined), iW)
      }
      handOver() {
        var WW;
        const {
          core: iW
        } = this.deps;
        null !== iW && "active" === (null === (WW = this.loaded) || void 0 === WW ? void 0 : WW.status) && (wW(iW, {
          ...this.loaded.pack,
          policy: this.policy
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(WW) {
        let {
          pack: iW,
          harnessPolicy: OW
        } = WW;
        const {
          previews: mW
        } = this.deps;
        null !== mW && wW(mW, {
          ...iW,
          policy: null !== OW && void 0 !== OW ? OW : kW
        })
      }
      policyOf(WW) {
        return this.deps.policyOf(WW).catch((WW => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", WW), kW)))
      }
    }
    const MW = "wasmShaderPackNotice";

    function KW(WW, iW, OW, mW) {
      return EW.l.subscribe(MW, (WW => {
        let {
          translationKey: iW,
          stillCurrent: OW,
          reasonKey: mW
        } = WW;
        OW() && EW.l.iZ("chat", (0, NW.j)(iW, mW))
      })), new sW({
        load: SW,
        policyOf: YW,
        core: WW,
        previews: iW,
        noWebGpu: OW,
        notify: (WW, iW, OW) => {
          const mW = {
            translationKey: WW,
            stillCurrent: iW,
            reasonKey: OW
          };
          EW.l.iZ(MW, mW, !0)
        },
        failInGame: WW => {
          EW.l.iZ(NW.f, WW)
        },
        warn: mW
      })
    }
    async function SW() {
      const [{
        shaderPackPage: WW,
        harnessShaderPackMode: iW
      }, {
        shaderPackTextures: mW
      }] = await Promise.all([OW.e(138).then((() => OW(40448))), OW.e(139).then((() => OW(7637)))]), EW = await WW.load();
      return "active" !== EW.status ? EW : {
        status: "active",
        pack: {
          variants: EW.pack.variants,
          layers: mW().layers,
          keepCircleShadows: EW.pack.keepCircleShadows
        },
        harnessPolicy: iW()
      }
    }
    async function YW(WW) {
      var iW;
      const [{
        shaderPackPage: mW,
        harnessShaderPackMode: EW
      }, {
        getShaderPackPolicy: NW
      }] = await Promise.all([OW.e(138).then((() => OW(40448))), OW.e(108).then((() => OW(44879)))]);
      return await mW.load(), null !== (iW = EW()) && void 0 !== iW ? iW : NW(WW)
    }
  },
  42348: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      e: () => jW,
      f: () => cW,
      j: () => wW,
      l: () => tW,
      m: () => xW
    });
    var mW = OW(37343),
      EW = OW(42356);
    const NW = "atlas:",
      PW = 3e4;
    class LW extends Error {
      constructor(WW, iW) {
        super(`fetching ${WW} answered HTTP ${iW}`), this.url = WW, this.status = iW, this.name = "TerrainTextureFetchError"
      }
    }

    function cW(WW) {
      if (!WW.startsWith(NW)) return null;
      const iW = Number(WW.slice(NW.length));
      return Number.isInteger(iW) && iW >= 0 ? iW : null
    }
    async function wW() {
      const WW = await OW.e(234).then((() => OW(35332)));
      return {
        atlasSheets: WW.blockAtlasUrls,
        texture: iW => {
          var OW, mW, NW;
          return null !== (OW = null !== (mW = null !== (NW = WW.animatedBlockTextures[iW]) && void 0 !== NW ? NW : WW.rotatedBlockTextures[iW]) && void 0 !== mW ? mW : EW.e[iW]) && void 0 !== OW ? OW : null
        }
      }
    }
    async function tW(WW) {
      const iW = new AbortController,
        OW = setTimeout((() => {
          iW.abort(new DOMException(`${WW} took over ${PW} ms`, "TimeoutError"))
        }), PW);
      let mW;
      try {
        const OW = await fetch(WW, {
          signal: iW.signal
        });
        if (!OW.ok) throw new LW(WW, OW.status);
        mW = await OW.blob()
      } finally {
        clearTimeout(OW)
      }
      const EW = await createImageBitmap(mW, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return xW(EW)
      } finally {
        EW.close()
      }
    }
    const ZW = 8192;

    function xW(WW) {
      const {
        width: iW,
        height: OW
      } = WW, EW = Math.max(1, Math.min(OW, ZW)), NW = (0, mW.g)(iW, EW, {
        willReadFrequently: !0
      });
      if (!NW) throw new Error("no 2D context to read the texture back");
      NW.globalCompositeOperation = "copy";
      const PW = new Uint8Array(iW * OW * 4);
      for (let mW = 0; mW < OW; mW += EW) {
        const LW = Math.min(EW, OW - mW);
        NW.drawImage(WW, 0, mW, iW, LW, 0, 0, iW, LW), PW.set(NW.getImageData(0, 0, iW, LW).data, mW * iW * 4)
      }
      return {
        width: iW,
        height: OW,
        pixels: PW
      }
    }
    async function lW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tW;
      const mW = [],
        EW = await Promise.all(WW.map((async WW => {
          var EW, PW;
          const LW = null !== (EW = null === (PW = iW.decoded) || void 0 === PW ? void 0 : PW.call(iW, WW)) && void 0 !== EW ? EW : null,
            wW = null === LW ? function(WW, iW) {
              if (WW.startsWith(NW)) {
                var OW;
                const mW = cW(WW);
                return null === mW ? null : null !== (OW = iW.atlasSheets[mW]) && void 0 !== OW ? OW : null
              }
              return iW.texture(WW)
            }(WW, iW) : null,
            tW = null !== LW && void 0 !== LW ? LW : null === wW ? null : OW(wW);
          if (null === tW) return mW.push({
            name: WW,
            url: wW,
            error: new Error(`no URL for terrain texture ${WW}`)
          }), null;
          try {
            const iW = await tW;
            if (iW.pixels.byteLength !== iW.width * iW.height * 4) throw new Error(`decoded ${iW.pixels.byteLength} bytes for ${iW.width}x${iW.height} texels`);
            return {
              name: WW,
              texture: iW
            }
          } catch (ZW) {
            return mW.push({
              name: WW,
              url: wW,
              error: ZW
            }), null
          }
        }))),
        PW = EW.filter((WW => null !== WW)),
        LW = new Uint32Array(2 * PW.length);
      PW.forEach(((WW, iW) => {
        let {
          texture: OW
        } = WW;
        LW[2 * iW] = OW.width, LW[2 * iW + 1] = OW.height
      }));
      return {
        handOver: {
          names: PW.map((WW => {
            let {
              name: iW
            } = WW;
            return iW
          })),
          textures: PW.map((WW => {
            let {
              texture: iW
            } = WW;
            return iW.pixels
          })),
          sizes: LW
        },
        failures: mW
      }
    }
    const AW = [2e3, 1e4, 3e4, 6e4, 12e4];

    function bW() {}
    class jW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AW,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = WW, this.retryMs = iW, this.keepBelow = OW, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wW,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const mW = ++this.started,
          EW = {
            decode: OW.decode,
            wholeAtlas: OW.wholeAtlas
          };
        return this.loadAndHandOver(iW, EW, WW, (() => {
          var WW;
          return mW < this.landed || !1 === (null === (WW = OW.wanted) || void 0 === WW ? void 0 : WW.call(OW))
        }), {
          onTaken: (WW, OW) => {
            this.landed = mW, this.current = {
              mine: mW,
              sources: iW,
              load: EW,
              EZ: WW,
              failed: OW
            }
          }
        })
      }
      restore(WW) {
        var iW;
        const OW = this.current;
        if (null === OW) return Promise.resolve(null);
        if ((null === (iW = this.restoring) || void 0 === iW ? void 0 : iW.mine) === OW.mine) return this.restoring.done;
        const mW = {
          mine: OW.mine,
          done: this.restoreLanded(OW, WW).finally((() => {
            this.restoring === mW && (this.restoring = null)
          }))
        };
        return this.restoring = mW, mW.done
      }
      async restoreLanded(WW, iW) {
        const OW = () => this.landed !== WW.mine,
          {
            EZ: mW
          } = WW;
        if (null !== mW) return this.stopped() ? null : this.core.setTerrainTextures(mW.names, mW.textures, mW.sizes);
        let EW = iW;
        for (let NW = 0;; NW++) {
          const iW = this.retryMs.at(NW),
            mW = {
              allOrNothingExcept: void 0 === iW ? void 0 : WW.failed
            },
            PW = await this.loadAndHandOver(WW.sources, WW.load, EW, OW, mW);
          if (!1 !== PW || void 0 === iW || this.stopped()) return PW;
          if (EW = bW, await new Promise((WW => {
              setTimeout(WW, iW)
            })), OW()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const NW = this.core.terrainTextureNames();
        var PW;
        if (0 === NW.length) return null === (PW = EW.onTaken) || void 0 === PW || PW.call(EW, null, new Set), !0;
        let LW, wW;
        try {
          LW = await WW(), wW = await lW(NW, LW, iW.decode)
        } catch (jW) {
          return mW() ? null : (OW({
            name: null,
            url: null,
            error: jW
          }), !1)
        }
        if (mW() || this.stopped()) return null;
        for (const cW of wW.failures) OW(cW);
        const tW = EW.allOrNothingExcept;
        if (void 0 !== tW && wW.failures.some((WW => {
            let {
              name: iW
            } = WW;
            return null === iW || !tW.has(iW)
          })) || !0 === iW.wholeAtlas && wW.failures.some((WW => {
            let {
              name: iW
            } = WW;
            return null === iW || null !== cW(iW)
          }))) return !1;
        const {
          handOver: ZW
        } = wW, xW = function(WW) {
          return WW.textures.reduce(((WW, iW) => WW + iW.byteLength), 0)
        }(ZW) < this.keepBelow, AW = this.core.setTerrainTextures(ZW.names, ZW.textures, ZW.sizes, xW ? void 0 : () => {
          !async function(WW, iW) {
            await iW;
            for (const {
                buffer: mW
              }
              of WW) {
              const WW = mW;
              var OW;
              if (!WW.detached) null === (OW = WW.transfer) || void 0 === OW || OW.call(WW, 0)
            }
          }(ZW.textures, LW.heldUntil)
        });
        if (AW) {
          var bW;
          const WW = new Set(wW.failures.flatMap((WW => {
            let {
              name: iW
            } = WW;
            return null === iW ? [] : [iW]
          })));
          null === (bW = EW.onTaken) || void 0 === bW || bW.call(EW, xW ? ZW : null, WW)
        }
        return AW
      }
    }
  },
  35175: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW,
      g: () => ZW,
      k: () => tW
    });
    var mW = OW(248),
      EW = OW(100),
      NW = OW(131),
      PW = OW(128),
      LW = OW(669);
    const cW = new Set(["mali_bifrost"]);

    function wW() {
      if (LW.g) return;
      const WW = (0, EW.pageOperatingSystem)();
      if ("android" !== WW && "windows" !== WW || (0, LW.c)("webgl_default")) return;
      if ("windows" === WW) return WW => "qualcomm" === (0, EW.normaliseGpuVendor)((0, PW.b)(WW).vendor);
      const iW = (0, NW.j)(),
        OW = null === iW ? (0, mW.t)() : (0, mW.i)(iW.vendor, iW.renderer);
      return null !== OW && cW.has(OW) ? WW => (0, mW.p)((0, PW.b)(WW).vendor, OW) : void 0
    }

    function tW(WW, iW) {
      return WW ? () => !0 : iW()
    }
    async function ZW(WW) {
      try {
        const iW = tW(WW, wW),
          OW = navigator.gpu;
        if (void 0 === iW || void 0 === OW) return !1;
        const mW = await (0, PW.i)(OW, {
          seed: !1,
          compatibility: iW
        });
        return "string" !== typeof mW && mW.compatibility && !(0, PW.e)(mW.adapter)
      } catch (iW) {
        return console.error("WebGPU compatibility-mode adapter request failed.", iW), !1
      }
    }
  },
  42275: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => cW,
      d: () => wW
    });
    var mW = OW(100),
      EW = OW(5096);
    const NW = "webgpuPipeline";

    function PW(WW) {
      return WW.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let LW = null;

    function cW() {
      if (null === LW) try {
        WW = (0, mW.getBrowserName)(), iW = (0, mW.getBrowserVersion)(), OW = (0, mW.getOperatingSystem)(), EW = (0, mW.getOperatingSystemVersion)(), LW = `${WW.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===iW?"unknown":PW(iW)}-${OW}${void 0===EW?"":`_${PW(EW)}`}`
      } catch (NW) {
        console.warn("The user agent couldn't be read for its browser code", NW), LW = "unknown"
      }
      var WW, iW, OW, EW;
      return LW
    }

    function wW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const iW = `WGPU-${cW()}`,
        mW = (WW, mW) => {
          const {
            reason: PW,
            message: LW
          } = mW, cW = String(LW);
          if ((0, EW.u)(PW, cW)) return;
          const wW = {
            pipeline: null !== WW && void 0 !== WW ? WW : "",
            reason: String(PW),
            browserMessage: cW
          };
          Promise.resolve().then((() => OW(42266))).then((WW => {
            let {
              reportCrash: OW
            } = WW;
            OW({
              kind: "coreError",
              code: iW,
              site: NW,
              fatal: !1,
              message: `${wW.pipeline} ${wW.reason}: ${wW.browserMessage}`,
              details: wW,
              error: mW
            })
          })).catch((WW => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", WW)
          }))
        },
        PW = WW.createRenderPipelineAsync;
      WW.createRenderPipelineAsync = function(WW) {
        return PW.call(this, WW).catch((iW => {
          throw mW(WW.label, iW), iW
        }))
      };
      const LW = WW.createComputePipelineAsync;
      WW.createComputePipelineAsync = function(WW) {
        return LW.call(this, WW).catch((iW => {
          throw mW(WW.label, iW), iW
        }))
      }
    }
  },
  42235: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      f: () => cW
    });
    var mW = OW(131);
    let EW = !1;

    function NW() {
      let WW = null;
      try {
        return WW = document.createElement("canvas").getContext("webgl2"), null !== WW
      } catch {
        return !1
      } finally {
        try {
          var iW, OW;
          null === (iW = WW) || void 0 === iW || null === (OW = iW.getExtension("WEBGL_lose_context")) || void 0 === OW || OW.loseContext()
        } catch {}
      }
    }

    function PW() {
      "hidden" === document.visibilityState && (EW = !1, document.removeEventListener("visibilitychange", PW))
    }

    function LW() {
      EW || "visible" !== document.visibilityState || !(0, mW.m)() && !NW() || (EW = !0, document.addEventListener("visibilitychange", PW))
    }

    function cW() {
      return EW || NW()
    }
  },
  42210: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bloxd_wasm_models_bg.78d91793af0644e887d8.wasm"
  },
  42205: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bloxd_wasm_workers_bg.f45dc0780f611f9752e4.wasm"
  },
  42202: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW,
      d: () => mW
    });
    const mW = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new OW.U(OW(42205))
      }
    };
    const EW = {
      name: "bloxd_wasm_models",
      url: function() {
        return new OW.U(OW(42210))
      }
    }
  },
  7639: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => MW,
      i: () => KW,
      l: () => kW,
      m: () => UW
    });
    var mW = OW(7646);
    const EW = 6,
      NW = 3,
      PW = 1,
      LW = 2,
      cW = 4,
      wW = 8,
      tW = 16,
      ZW = 32,
      xW = 64,
      lW = 128,
      AW = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function bW(WW) {
      if (!WW) return 0;
      const iW = AW.indexOf(WW);
      if (iW <= 0) throw new Error(`"${WW}" is not a shader pack hook function`);
      return iW
    }

    function jW(WW) {
      if (0 === WW) return null;
      const iW = AW[WW];
      if (void 0 === iW) throw new Error(`${WW} is not a shader pack hook function id`);
      return iW
    }

    function UW(WW) {
      const iW = mW.e.length;
      return {
        strict: WW >= iW,
        program: mW.e[WW % iW]
      }
    }

    function kW(WW) {
      return Number(WW.strict) * mW.e.length + mW.e.indexOf(WW.program)
    }

    function sW(WW) {
      return "" === WW ? [] : WW.split(" ")
    }

    function MW(WW) {
      const iW = {
        variantFlags: new Uint8Array(EW),
        hooks: new Uint8Array(EW * NW),
        moduleCodes: Array(EW).fill(""),
        reads: Array(2 * EW).fill("")
      };
      for (const OW of WW) {
        const WW = kW(OW.key),
          mW = (WW, iW) => null === OW.hooks.surface || OW.reads.fragment.includes(WW) ? 0 : iW;
        iW.variantFlags[WW] = (OW.sceneDepth ? PW : 0) | (OW.movesVertices ? LW : 0) | (OW.sunShadow ? cW : 0) | (OW.airShadow ? wW : 0) | (OW.discards ? tW : 0) | mW("localPosition", ZW) | mW("enchantSpeed", xW) | mW("enchantTier", lW), iW.hooks[WW * NW] = bW(OW.hooks.vertex), iW.hooks[WW * NW + 1] = bW(OW.hooks.surface), iW.hooks[WW * NW + 2] = bW(OW.hooks.light), iW.moduleCodes[WW] = OW.moduleCode, iW.reads[2 * WW] = OW.reads.vertex.join(" "), iW.reads[2 * WW + 1] = OW.reads.fragment.join(" ")
      }
      return iW
    }

    function KW(WW) {
      const {
        hooks: iW,
        moduleCodes: OW,
        reads: mW
      } = WW;
      return Array.from(WW.variantFlags, ((WW, EW) => {
        const ZW = EW * NW;
        return {
          key: UW(EW),
          hooks: {
            vertex: jW(iW[ZW]),
            surface: jW(iW[ZW + 1]),
            light: jW(iW[ZW + 2])
          },
          moduleCode: OW[EW],
          sceneDepth: 0 !== (WW & PW),
          sunShadow: 0 !== (WW & cW),
          airShadow: 0 !== (WW & wW),
          movesVertices: 0 !== (WW & LW),
          discards: 0 !== (WW & tW),
          reads: {
            vertex: sW(mW[2 * EW]),
            fragment: sW(mW[2 * EW + 1])
          }
        }
      }))
    }
  },
  42321: (WW, iW, OW) => {
    OW.d(iW, {
      D: () => AW,
      e: () => EW,
      f: () => mW,
      g: () => xW,
      j: () => tW,
      l: () => jW,
      m: () => NW,
      o: () => LW,
      q: () => cW,
      t: () => PW,
      x: () => bW,
      z: () => lW
    });
    const mW = 3,
      EW = 0,
      NW = 1,
      PW = 2,
      LW = {
        uniform: 3,
        El: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      cW = 10,
      wW = "BloxdPackInputs",
      tW = "bloxdPackInputs",
      ZW = [{
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
      xW = 80;

    function lW() {
      const WW = ZW.map((WW => {
        let {
          name: iW,
          type: OW
        } = WW;
        return `    ${iW}: ${OW},\n`
      })).join("");
      return `struct ${wW} {\n${WW}}\n@group(${mW}) @binding(${EW}) var<uniform> ${tW}: ${wW};\n`
    }

    function AW(WW, iW) {
      const OW = new DataView(WW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, xW),
        [mW, EW, NW, PW, LW, cW] = ZW;
      OW.setFloat32(mW.offset, iW.seconds, !0), OW.setUint32(EW.offset, iW.lit ? 1 : 0, !0);
      for (let wW = 0; wW < 3; wW++) OW.setInt32(NW.offset + 4 * wW, iW.renderOffset[wW], !0), OW.setFloat32(PW.offset + 4 * wW, iW.vWW[wW], !0), OW.setFloat32(LW.offset + 4 * wW, iW.eyePosition[wW], !0), OW.setFloat32(cW.offset + 4 * wW, iW.shadowDirection[wW], !0)
    }

    function bW(WW) {
      const iW = new Uint32Array(Math.max(1, WW.length));
      return WW.forEach(((WW, OW) => {
        let {
          id: mW,
          rotation: EW
        } = WW;
        iW[OW] = 65535 & mW | (3 & EW) << 16
      })), iW
    }
    const jW = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7646: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW,
      g: () => PW,
      j: () => LW,
      n: () => EW,
      p: () => NW
    });
    const mW = ["terrain", "liquid", "model"];

    function EW() {
      const WW = [];
      for (const iW of [!1, !0])
        for (const OW of mW) WW.push({
          strict: iW,
          program: OW
        });
      return WW
    }

    function NW(WW) {
      return `${WW.strict?"strict":"allow"}.${WW.program}`
    }

    function PW(WW) {
      return !WW.hooks.vertex && !WW.hooks.surface && !WW.hooks.light
    }

    function LW(WW, iW) {
      return "off" !== iW && (null === WW || WW.some((WW => WW.key.strict === ("strict" === iW) && !PW(WW))))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);