export const id = 161;
export const ids = [161];
export const modules = {
  34989: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      i: () => ZR
    });
    var yR = GR(279),
      tR = GR(132),
      uR = GR(34996);

    function ZR() {
      var RR, JR, GR;
      return null !== (RR = (0, yR.o)(null !== (JR = null === (GR = (0, tR.o)()) || void 0 === GR ? void 0 : GR.renderer) && void 0 !== JR ? JR : null, (0, tR.k)())) && void 0 !== RR ? RR : "unknown"
    }

    function qR(RR, JR, GR, yR, tR) {
      const ZR = null === JR ? "untimed" : `${Math.round(JR)} ms`;
      return `frames stalled, ${GR}, gpu ${(0,uR.e)(tR)}, blocking ${ZR}, drawn ${Math.round(RR)} ms apart, timers ${yR.timers}, timer gap ${Math.round(yR.longestGapMs)} ms`
    }
  },
  40310: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => iR
    });
    var yR = GR(10298),
      tR = GR(37640),
      uR = GR(40317);
    const ZR = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      qR = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function iR(RR, JR) {
      if (RR instanceof tR.g) return {
        at: ZR[JR],
        code: 0
      };
      const GR = (0, yR.h)(RR),
        iR = "number" === typeof GR ? GR : 0;
      return null !== (0, uR.e)(iR).name ? {
        at: "refused",
        code: iR
      } : {
        at: qR[JR],
        code: iR
      }
    }
  },
  10298: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      h: () => ZR,
      k: () => qR,
      n: () => fR,
      p: () => iR
    });
    var yR = GR(203),
      tR = GR(5425);

    function uR(RR) {
      return ZR(RR) === yR.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function ZR(RR) {
      return "object" === typeof RR && null !== RR ? RR.code : void 0
    }

    function qR(RR) {
      var JR;
      return null !== (JR = Object.keys(tR.d).find((JR => tR.d[JR] === RR))) && void 0 !== JR ? JR : null
    }

    function iR(RR) {
      return "notWhitelisted" === RR ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const fR = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  34996: (RR, JR, GR) => {
    function yR(RR) {
      return String(RR).replace(/\d/g, (RR => String.fromCharCode(97 + Number(RR))))
    }
    GR.d(JR, {
      e: () => yR
    })
  },
  40317: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => iR,
      f: () => ZR,
      h: () => tR
    });
    var yR = GR(203);

    function tR(RR) {
      const JR = RR.endsWith(yR.k);
      return {
        text: (JR ? RR.slice(0, -yR.k.length) : RR) || null,
        dropsCache: JR
      }
    }
    const uR = "Either your internet isn't working or this is a bug.";

    function ZR(RR, JR) {
      const GR = iR(RR);
      return null !== GR.name && "" === yR.e[GR.name].text && null !== JR ? JR : GR.reason
    }
    const qR = "You were removed from the game.";

    function iR(RR) {
      var JR;
      let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const tR = null !== (JR = Object.keys(yR.e).find((JR => yR.e[JR].code === RR))) && void 0 !== JR ? JR : null;
      if (null === tR) return {
        code: RR,
        name: tR,
        reason: null !== GR && void 0 !== GR ? GR : `${uR}\nCode: ${RR}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: ZR,
        canReconnect: iR = !1
      } = yR.e[tR], fR = RR === yR.e.outdatedVersion.code || RR === yR.e.loadRecaptchaError.code;
      return {
        code: RR,
        name: tR,
        reason: "" !== ZR ? ZR : null !== GR && void 0 !== GR ? GR : RR === yR.e.gameOrPluginKick.code ? qR : `Code: ${RR}`,
        canReconnect: iR,
        automaticallyReconnect: RR === yR.e.customGameUpdated.code || RR === yR.e.duplicateLobbyNameError.code,
        requiresRefresh: fR
      }
    }
  },
  42170: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR,
      f: () => VR,
      h: () => ZR,
      i: () => tR,
      j: () => qR,
      l: () => fR
    });
    class yR extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function tR(RR) {
      return RR instanceof RangeError && /call stack/i.test(RR.message) || RR instanceof Error && "InternalError" === RR.name && /recursion/i.test(RR.message)
    }
    const uR = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function ZR(RR) {
      var JR;
      return RR instanceof WebAssembly.RuntimeError || RR instanceof yR || tR(RR) && uR.test(null !== (JR = RR.stack) && void 0 !== JR ? JR : "")
    }

    function qR(RR, JR) {
      if (ZR(RR)) throw RR;
      console.error(JR, RR)
    }

    function iR(RR, JR, GR, tR, uR) {
      if (JR % tR !== 0 || JR + GR > RR.byteLength) throw new yR(`${uR}: ${GR} bytes at ${JR}, ${tR}-aligned, outside ${RR.byteLength} bytes of memory`)
    }

    function fR(RR, JR, GR, yR, tR) {
      return 0 === GR ? null : (iR(JR, GR, yR * RR.BYTES_PER_ELEMENT, RR.BYTES_PER_ELEMENT, tR), new RR(JR, GR, yR))
    }

    function VR(RR, JR, GR, yR, tR) {
      return 0 === JR ? null : (iR(RR, JR, GR, yR, tR), new DataView(RR, JR, GR))
    }
  },
  42230: (RR, JR, GR) => {
    GR.d(JR, {
      A: () => GJ,
      B: () => FR,
      C: () => ZJ,
      D: () => uJ,
      G: () => yJ,
      I: () => iJ,
      M: () => AJ,
      N: () => qJ,
      Q: () => tJ,
      R: () => fJ,
      T: () => DR,
      W: () => rJ,
      _: () => LJ,
      ab: () => HR,
      b: () => xR,
      cb: () => oR,
      e: () => CJ,
      i: () => lJ,
      j: () => aJ,
      n: () => WJ,
      o: () => wJ,
      s: () => UJ,
      t: () => nJ,
      v: () => BJ,
      y: () => RJ
    });
    var yR = GR(359),
      tR = GR(277),
      uR = GR(279),
      ZR = GR(25),
      qR = GR(3960),
      iR = GR(743),
      fR = GR(5323),
      VR = GR(3935),
      KR = GR(4776),
      wR = GR(103),
      rR = GR(134),
      eR = GR(350),
      aR = GR(46),
      LR = GR(342),
      nR = GR(123),
      UR = GR(706),
      WR = GR(327),
      AR = GR(132),
      CR = GR(127),
      XR = GR(5685),
      MR = GR(42237),
      BR = GR(1825),
      lR = GR(42239),
      pR = GR(42247),
      gR = GR(35094),
      bR = GR(42255),
      vR = GR(42259);
    const OR = "bloxd-webgpuOffAfterLoss",
      xR = "context:webgl",
      NR = "probe:threw";

    function DR(RR) {
      return RR.includes("Web page caused context loss and was blocked")
    }

    function HR() {
      const RR = document.createElement("canvas");
      let JR = "";
      RR.addEventListener("webglcontextcreationerror", (RR => {
        JR = RR.statusMessage
      }));
      try {
        var GR, yR;
        null === (GR = RR.getContext("webgl")) || void 0 === GR || null === (yR = GR.getExtension("WEBGL_lose_context")) || void 0 === yR || yR.loseContext()
      } catch (tR) {
        return String(tR)
      }
      return JR
    }

    function oR(RR) {
      let JR;
      try {
        JR = RR.getContext("webgl", {
          powerPreference: AR.b
        })
      } catch {
        JR = null
      }
      if (null === JR) return null;
      let GR = null;
      try {
        const RR = JR.getParameter(JR.MAX_TEXTURE_SIZE);
        GR = "number" === typeof RR && RR > 0 ? RR : null
      } catch {
        GR = null
      }
      try {
        var yR;
        null === (yR = JR.getExtension("WEBGL_lose_context")) || void 0 === yR || yR.loseContext()
      } catch {}
      return GR
    }
    const cR = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);

    function PR() {
      return "ios" === (0, wR.getOperatingSystem)() ? "ios" : "other"
    }
    const IR = "mali_valhall",
      mR = new Set(["nvidia_pre_turing"]),
      zR = new Set(["intel_gen7_8"]),
      SR = new Set(["powervr_rogue"]);

    function jR(RR, JR, GR) {
      return cR.has(RR) ? "android_arm" === RR && JR === IR && "mobileAndroid" !== GR ? "webgpu_default" : "webgl_default" : null
    }

    function dR(RR) {
      return function(RR) {
        try {
          return RR()
        } catch {
          return null
        }
      }((() => {
        var JR, GR, yR, ZR;
        const qR = null !== (JR = null === (GR = RR.info) || void 0 === GR ? void 0 : GR.vendor) && void 0 !== JR ? JR : "";
        return "windows" === (0, wR.getOperatingSystem)() && "" !== qR && "intel" !== (0, wR.normaliseGpuVendor)(qR) ? null : ((0, wR.seedGpuVendor)(qR), jR((0, tR.g)(), (0, uR.h)(qR, null !== (yR = null === (ZR = RR.info) || void 0 === ZR ? void 0 : ZR.architecture) && void 0 !== yR ? yR : ""), rR.siteUsed))
      }))
    }

    function ER() {
      var RR;
      return {
        gpu: null !== (RR = navigator.gpu) && void 0 !== RR ? RR : null,
        webgl2: bR.c,
        webgl1: () => function(RR) {
          let JR, GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MR.d;
          try {
            JR = RR.getContext("webgl")
          } catch {
            JR = null
          }
          if (null === JR) return [xR];
          const yR = [];
          try {
            for (const tR of GR.extensions) null === JR.getExtension(tR) && yR.push(tR);
            for (const [tR, uR] of Object.entries(GR.limits)) {
              const RR = JR[tR],
                GR = "number" === typeof RR ? JR.getParameter(RR) : null;
              ("number" !== typeof GR || GR < uR) && yR.push(`limit:${tR}`)
            }
            const RR = JR.getShaderPrecisionFormat(JR.VERTEX_SHADER, JR.HIGH_FLOAT);
            (null === RR || RR.precision < GR.vertexHighFloatBits) && yR.push("precision:vertex_high_float")
          } catch {
            yR.push(NR)
          }
          try {
            var tR;
            null === (tR = JR.getExtension("WEBGL_lose_context")) || void 0 === tR || tR.loseContext()
          } catch {}
          return yR
        }(document.createElement("canvas")),
        webgl1First: () => kR((() => function(RR, JR) {
          if ("chrome_os" !== RR) return !1;
          const GR = JR();
          return null !== GR && SR.has((0, uR.k)(GR.vendor, GR.renderer))
        }((0, wR.getOperatingSystem)(), AR.B))),
        offAfterLoss: RR => kR((() => RR ? (0, LR.F)() : ZR.d.isWebGpuOffAfterLoss())),
        fewWasmMemories: WR.d,
        oldIntelDriver: RR => kR((() => (0, nR.g)(RR))),
        intelGen9: RR => kR((() => (0, nR.r)(RR))),
        storeIntelGen9Verdict: RR => {
          aR.i.setItem(nR.F, RR)
        },
        gpuClassWebGlArm: dR,
        storeGpuClassVerdict: RR => {
          aR.i.setItem(nR.E, RR)
        },
        gpuClassOnWebGl: RR => (0, UR.c)(RR),
        webGlDefaultFamily: RR => zR.has((0, uR.h)(RR.vendor, RR.architecture)),
        storeWebGlDefaultFamilyVerdict: RR => {
          aR.i.setItem(nR.P, RR)
        },
        override: () => YR(),
        claimed: () => QR((0, iR.j)()),
        webGpuSetting: () => {
          const RR = aR.i.getItem(yR.jc);
          return "boolean" === typeof RR ? RR : null
        },
        heldBack: () => UR.e,
        storeHoldbackSpared: RR => {
          aR.i.setItem(nR.A, RR)
        },
        intelGen9OnWebGl: () => UR.f,
        Be: () => kR((() => (0, KR.h)(wR.featureFlags.settings.canUseShaderPacks))),
        windows: () => kR((() => "windows" === (0, wR.getOperatingSystem)())),
        defaultCompatibility: gR.d
      }
    }

    function YR() {
      let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if ((0, qR.n)("render") && "webgl1" === (0, qR.l)("renderer")) return "webgl1";
      const JR = [() => new URLSearchParams(window.location.search).get(VR.b), () => aR.i.getItem(VR.e), () => {
        const JR = localStorage.getItem(OR);
        return null !== JR && RR && localStorage.removeItem(OR), "1" === JR ? "webgl2" : null
      }];
      for (const GR of JR) {
        let RR = null;
        try {
          RR = QR(GR())
        } catch {}
        if (null !== RR) return RR
      }
      return null
    }

    function kR(RR) {
      try {
        return RR()
      } catch {
        return !1
      }
    }

    function QR(RR) {
      return "lite" === RR ? "webgpu" : "webgl2" === RR || "babylon" === RR ? "webgl" : null
    }

    function FR(RR) {
      return "none" === RR || "compatibility_mode" === RR
    }
    async function TR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ER();
      const JR = await async function(RR) {
        const JR = hR(RR),
          {
            source: GR
          } = JR,
          yR = !JR.asked,
          tR = "gpu" in JR && JR.heldBack,
          ZR = function(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return tR && !FR(RR) ? {
              reason: "webgl_holdback",
              adapter: null,
              source: GR
            } : {
              reason: RR,
              adapter: JR,
              source: GR
            }
          };
        if (!("gpu" in JR)) return ZR(JR.refused);
        let qR;
        try {
          qR = await (0, BR.k)((0, CR.i)(JR.gpu, {
            compatibility: sR(RR, JR)
          }), XJ, `requestAdapter didn't settle in ${XJ/1e3} s`)
        } catch {
          return ZR("adapter_error")
        }
        if ("string" === typeof qR) return ZR(qR);
        const {
          adapter: iR,
          compatibility: fR
        } = qR, VR = (0, CR.b)(iR);
        if ((0, CR.e)(iR)) return ZR("software_adapter", VR);
        const KR = RR.windows() && function(RR) {
          return mR.has((0, uR.h)(RR.vendor, RR.architecture))
        }(VR);
        if (RR.storeHoldbackSpared(KR), tR && !KR) return ZR("webgl_holdback");
        const wR = RR.intelGen9(iR);
        RR.storeIntelGen9Verdict(wR);
        const rR = wR ? null : RR.gpuClassWebGlArm(iR);
        RR.storeGpuClassVerdict(null !== rR && void 0 !== rR && rR);
        const eR = RR.webGlDefaultFamily(VR);
        if (RR.storeWebGlDefaultFamilyVerdict(eR), yR && RR.oldIntelDriver(iR)) return ZR("old_intel_driver", VR);
        if ("default" === GR && wR && RR.intelGen9OnWebGl()) return ZR("intel_gen9", VR);
        if ("default" === GR && null !== rR && RR.gpuClassOnWebGl(rR)) return ZR("gpu_class_webgl", VR);
        if ("default" === GR && eR) return ZR("gpu_wasm_arm", VR);
        return ZR(fR ? "compatibility_mode" : "none", VR)
      }(RR);
      if (FR(JR.reason)) return {
        backend: "webgpu",
        ...JR
      };
      const GR = "webgl1" === RR.override(),
        yR = "not_requested" === JR.reason && ("override" === JR.source || "claim" === JR.source),
        tR = !GR && !yR && RR.webgl1First();
      if (!GR && !tR && RR.webgl2()) return {
        backend: "webgl",
        ...JR
      };
      const ZR = RR.webgl1();
      return 0 === ZR.length ? {
        backend: "webgl1",
        ...JR
      } : tR && RR.webgl2() ? {
        backend: "webgl",
        ...JR
      } : {
        missing: ZR
      }
    }

    function sR(RR, JR) {
      let {
        source: GR,
        asked: yR
      } = JR;
      return yR || "default" === GR ? (0, gR.i)(yR, RR.defaultCompatibility) : void 0
    }

    function hR(RR) {
      const JR = RR.override(),
        GR = RR.webGpuSetting(),
        yR = null === JR && !0 !== GR && RR.Be(),
        tR = null !== JR || null !== GR || yR ? null : RR.claimed(),
        uR = null !== JR ? "override" : !0 === GR ? "setting" : yR ? "pack" : !1 === GR ? "setting" : null !== tR ? "claim" : "default",
        ZR = function(RR) {
          return "override" === RR || "setting" === RR
        }(uR);
      if ("webgl" === JR || "webgl1" === JR || "webgl" === tR || "setting" === uR && !1 === GR) return {
        source: uR,
        asked: ZR,
        refused: "not_requested"
      };
      if (!RR.gpu) return {
        source: uR,
        asked: ZR,
        refused: "no_webgpu_api"
      };
      const qR = "default" === uR && RR.heldBack();
      if (qR && !RR.windows()) return {
        source: uR,
        asked: ZR,
        refused: "webgl_holdback"
      };
      const iR = ZR ? null : RR.offAfterLoss("pack" === uR) ? "off_after_loss" : RR.fewWasmMemories() ? "few_wasm_memories" : null;
      return null !== iR ? {
        source: uR,
        asked: ZR,
        refused: qR ? "webgl_holdback" : iR
      } : {
        source: uR,
        asked: ZR,
        heldBack: qR,
        gpu: RR.gpu
      }
    }

    function RJ() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          ...ER(),
          override: () => YR(!1)
        },
        JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wR.isWebKit,
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : PR;
      try {
        if (!JR()) return !1;
        const yR = hR(RR);
        if (!("gpu" in yR) || yR.heldBack) return !1;
        const tR = "default" === yR.source ? jR(GR(), "apple", rR.siteUsed) : null;
        return null === tR || !RR.gpuClassOnWebGl(tR)
      } catch (yR) {
        return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", yR), !1
      }
    }
    let JJ = !1;
    async function GJ(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ER();
      if (null === RR) return null;
      const GR = await TR(JR);
      return JJ = !("missing" in GR) && "webgpu" === GR.backend && "claim" === GR.source, "missing" in GR ? GR : {
        ...GR,
        load: RR[GR.backend]
      }
    }
    async function yJ(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ER().gpu,
        yR = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== RR.backend) return !1;
      const tR = KJ(RR, JR, "indirectDraws", "off", "on");
      if (null !== tR) return tR;
      if (null !== RR.adapter && (0, nR.s)(RR.adapter, yR)) return !0;
      if (null === GR) return !1;
      try {
        var uR;
        const RR = await (0, BR.k)(GR.requestAdapter({
          powerPreference: "low-power"
        }).then((async RR => (null !== RR && await (0, CR.c)(RR), RR))), XJ, `the low-power requestAdapter didn't settle in ${XJ/1e3} s`);
        return (0, nR.s)(null !== (uR = null === RR || void 0 === RR ? void 0 : RR.info) && void 0 !== uR ? uR : {}, yR)
      } catch (ZR) {
        return ZR instanceof BR.g
      }
    }

    function tJ(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, wR.pageOperatingSystem)();
      if ("webgpu" !== RR.backend) return !1;
      const tR = KJ(RR, JR, "terrainFetch", "texture", "storage");
      return null !== tR ? tR : null !== RR.adapter && ((0, nR.m)(RR.adapter, GR) || (0, nR.i)(RR.adapter, yR))
    }

    function uJ(RR, JR) {
      if ("webgpu" !== RR.backend) return !1;
      const GR = KJ(RR, JR, "skyOrder", "early", "last");
      return null !== GR ? GR : null !== RR.adapter && (0, uR.h)(RR.adapter.vendor, RR.adapter.architecture) === IR
    }

    function ZJ(RR, JR) {
      if ("webgpu" !== RR.backend) return !1;
      const GR = KJ(RR, JR, "uploadCopies", "off", "on");
      return null !== GR ? GR : null !== RR.adapter && "powervr_rogue" === (0, uR.h)(RR.adapter.vendor, RR.adapter.architecture)
    }

    function qJ(RR, JR, GR) {
      if ("webgpu" !== RR.backend) return !1;
      const yR = KJ(RR, JR, "sceneDepth", "off", "on");
      return null !== yR ? yR : null !== RR.adapter && (0, nR.n)(RR.adapter, GR)
    }

    function iJ(RR, JR) {
      return "webgl" === RR.backend ? KJ(RR, JR, "instancedTerrain", "1", "0") : null
    }

    function fJ(RR, JR) {
      return "webgpu" !== RR.backend || JR && (null === RR.adapter || !(0, LR.J)(RR.adapter))
    }

    function VJ(RR, JR, GR, yR) {
      const tR = new URLSearchParams(JR).get(GR),
        uR = null !== tR && void 0 !== tR ? tR : null === RR ? null : (0, iR.e)(GR);
      return null !== uR && yR(uR) ? (JJ ||= null === tR && "webgpu" === (null === RR || void 0 === RR ? void 0 : RR.backend), uR) : null
    }

    function KJ(RR, JR, GR, yR, tR) {
      const uR = VJ(RR, JR, GR, (RR => RR === yR || RR === tR));
      return null === uR ? null : uR === yR
    }

    function wJ(RR) {
      return null !== RR && "missing" in RR
    }

    function rJ(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !LJ(),
        GR = arguments.length > 2 ? arguments[2] : void 0;
      return JR ? function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZR.d,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const yR = "start_failed" === RR || "pipeline_failed" === RR,
            tR = (0, vR.i)(RR, GR),
            uR = JR.turnOffWebGpuAfterDeviceLoss(yR ? "visible" : (0, LR.k)((0, eR.f)()), yR, tR);
          return JJ && (0, iR.t)("webgpuLoss"), JR.isWebGpuOffAfterLoss() && "webgpu" === QR(aR.i.getItem(VR.e)) && aR.i.removeItem(VR.e), (0, qR.n)("webgpuloss") && (0, fR.d)((JR => {
            var GR;
            JR.noteWebGpuLoss("wasm", uR ? RR : `${RR}, which storage didn't keep`, null !== (GR = tR.message) && void 0 !== GR ? GR : null)
          })), uR
        } catch {
          return !1
        }
      }(RR, ZR.d, GR) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const eJ = "framePacing";

    function aJ(RR, JR) {
      const GR = VJ("webgpu" === (null === JR || void 0 === JR ? void 0 : JR.backend) ? JR : null, RR, eJ, (RR => /^\d{1,9}$/.test(RR)));
      return null === GR ? void 0 : Number(GR)
    }

    function LJ() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === QR(new URLSearchParams(RR).get(VR.b))
      } catch {
        return !1
      }
    }

    function nJ(RR) {
      return !!UJ(RR) || RR instanceof Error && !(RR instanceof WebAssembly.RuntimeError) && RR.message.startsWith(`${XR.p.RenderSurfaceUnusable}:`)
    }

    function UJ(RR) {
      const {
        name: JR,
        message: GR
      } = null !== RR && void 0 !== RR ? RR : {};
      return "InvalidStateError" === JR && "string" === typeof GR && GR.startsWith("GPUDevice.")
    }

    function WJ(RR) {
      const JR = RR;
      return "function" === typeof JR.StR && "function" === typeof JR.jtR ? JR : null
    }

    function AJ(RR) {
      return "function" === typeof RR.fn ? RR : null
    }
    const CJ = "openRenderer";
    const XJ = 5e3,
      MJ = 15e3;

    function BJ(RR, JR, GR, yR, tR, uR) {
      return (0, BR.k)(function(RR, JR, GR, yR, tR, uR) {
        const ZR = (0, lR.f)(RR, JR, (() => RR.fn(GR, yR, tR, uR.indirectHangs, uR.storagePullBreaks, uR.splitPassBreaks, uR.earlySky, uR.instancedTerrain, uR.cellLight, uR.framesAhead, uR.webGpuRestores, uR.bufferCopiesCrash))),
          {
            firstVertex: qR
          } = uR;
        return void 0 === qR ? ZR : ZR.then((RR => ((0, pR.b)(GR, qR), RR)))
      }(RR, JR, GR, yR, tR, uR), MJ, `${XR.p.RenderSurfaceUnusable}: the renderer didn't open in ${MJ/1e3} s`, pJ)
    }
    async function lJ(RR, JR, GR, yR, tR, uR) {
      if ("function" !== typeof RR.HtR) throw new Error("this core has no set_renderer");
      const ZR = await BJ(JR, CJ, GR, tR, yR, uR);
      try {
        RR.HtR(ZR)
      } catch (qR) {
        throw pJ(ZR), qR
      }
    }

    function pJ(RR) {
      try {
        RR.free()
      } catch {}
    }
  },
  42369: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR
    });
    const yR = {
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
  42294: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => eR,
      c: () => aR,
      f: () => wR,
      h: () => KR
    });
    const yR = 2e3,
      tR = "unavailable";
    let uR = () => Promise.resolve().then((() => GR(1974))),
      ZR = null,
      qR = null,
      iR = fR();

    function fR() {
      let RR = () => {};
      return {
        promise: new Promise((JR => {
          RR = () => {
            JR(null)
          }
        })),
        resolve: RR
      }
    }

    function VR() {
      if (null === ZR) {
        const RR = uR();
        ZR = RR, RR.then((JR => {
          ZR === RR && (qR = JR)
        }), (() => {
          ZR === RR && (ZR = null)
        }))
      }
      return ZR
    }

    function KR() {
      VR().catch((() => {}))
    }

    function wR() {
      iR.resolve()
    }

    function rR(RR, JR, GR, yR) {
      if (null === RR) return {
        errorKind: JR,
        fingerprint: tR,
        dedupe: `${JR}|${yR}`
      };
      const {
        fingerprint: uR
      } = RR.clientErrorKey(JR, GR, yR);
      return {
        errorKind: JR,
        fingerprint: uR,
        dedupe: uR
      }
    }

    function eR(RR, JR, GR, yR) {
      return null === qR ? yR ? (KR(), rR(null, RR, JR, GR)) : null : rR(qR, RR, JR, GR)
    }
    async function aR(RR, JR, GR) {
      let tR;
      const uR = new Promise((RR => {
        tR = setTimeout((() => {
          RR(null)
        }), yR)
      }));
      try {
        return rR(await Promise.race([VR(), uR, iR.promise]), RR, JR, GR)
      } catch {
        return rR(null, RR, JR, GR)
      } finally {
        clearTimeout(tR)
      }
    }
  },
  42288: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      BUILT_IN_ANIMATIONS_SITE: () => RJ,
      CAMERA_DIRECTOR_SITE: () => ZJ,
      CORE_ERRORS_SITE: () => jR,
      EVENT_OVERFLOW_SITE: () => hR,
      FIRST_VIEW_SITE: () => yJ,
      GraphicsLostError: () => yG,
      JOIN_SITE: () => ER,
      LEAVE_SITE: () => YR,
      MAIN_THREAD_SITE: () => tJ,
      MODEL_FEED_SITE: () => kR,
      MODEL_POOL_SITE: () => QR,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => fJ,
      NON_FATAL_REPORTS_PER_SESSION: () => gJ,
      PREVIEW_ANIMATIONS_SITE: () => sR,
      RENDER_RELOAD_SITE: () => TR,
      REQUEST_DEVICE_SITE: () => uJ,
      TEXTURE_NAMES_SITE: () => FR,
      TEXTURE_PACK_FEED_SITE: () => JJ,
      TEXTURE_PACK_SWAP_SITE: () => GJ,
      TurnstilePageError: () => eG,
      WASM_LOAD_SITE: () => dR,
      countRenderLost: () => TG,
      crashError: () => DJ,
      crashReportsSettled: () => dJ,
      deviceLossFields: () => FJ,
      deviceLossWords: () => YG,
      flushCrashReports: () => SJ,
      joinFailureCode: () => aG,
      loadRecoveryCode: () => iG,
      lokiTransport: () => wJ,
      modelFailureCode: () => XG,
      readTrap: () => hJ,
      renderLoss: () => FG,
      renderReloadMessage: () => kG,
      reportCameraDirectorFault: () => SG,
      reportCoreErrors: () => kJ,
      reportCrash: () => HJ,
      reportDataLoadFailure: () => yy,
      reportDisconnect: () => AG,
      reportDroppedRequiredLimits: () => VG,
      reportEventOverflow: () => vG,
      reportFirstViewNoTerrain: () => cG,
      reportFirstViewUnshown: () => PG,
      reportLightFault: () => NG,
      reportLoadRecovery: () => fG,
      reportLoadReload: () => wG,
      reportMainStall: () => IG,
      reportMemoryShed: () => HG,
      reportModelFailure: () => MG,
      reportModelPoolFailure: () => BG,
      reportModelsModuleRetry: () => lG,
      reportNoBackendRetry: () => ZG,
      reportPageJoinFailure: () => nG,
      reportReconnectGaveUp: () => CG,
      reportRenderRecovery: () => IJ,
      reportRenderReload: () => Ry,
      reportReplayFault: () => zG,
      reportStaleBuildReload: () => uy,
      reportStoppedCore: () => JG,
      reportTerrainTextureFailure: () => Jy,
      reportTexturePackFeedLoadFailure: () => gG,
      reportTexturePackKeptOut: () => bG,
      reportUnstreamedCoreLoad: () => rG,
      reportUnusedSeat: () => WG,
      reportWorkerLost: () => OG,
      reportWorkerStartTimeout: () => mG,
      reportWorldgenGaveUp: () => DG,
      reportWorldgenLoadFailure: () => pG,
      reportWorldgenWorkerLost: () => xG,
      resetCrashReports: () => EJ,
      setCrashAdPreload: () => CJ,
      setCrashBackend: () => AJ,
      setCrashScreen: () => nJ,
      setCrashTransport: () => aJ,
      showCrash: () => RG,
      showJoinFailure: () => LG,
      showUnsupported: () => tG,
      unknownSkyWords: () => YJ,
      unsupportedCrashScreen: () => uG,
      warmCrashCounts: () => cJ
    });
    var yR = GR(1127),
      tR = GR(1459),
      uR = GR(182),
      ZR = GR(1449),
      qR = GR(1406),
      iR = GR(279),
      fR = GR(1976),
      VR = GR(5081),
      KR = GR(42294),
      wR = GR(5676),
      rR = GR(42300),
      eR = GR(34996),
      aR = GR(2513),
      LR = GR(34989),
      nR = GR(5201),
      UR = GR(134),
      WR = GR(132),
      AR = GR(2521),
      CR = GR(37640),
      XR = GR(1825),
      MR = GR(42310),
      BR = GR(42322),
      lR = GR(42118),
      pR = GR(42329),
      gR = GR(42331),
      bR = GR(37633),
      vR = GR(2448),
      OR = GR(2457),
      xR = GR(42344),
      NR = GR(42325),
      DR = GR(42364),
      HR = GR(37958),
      oR = GR(709),
      cR = GR(4498),
      PR = GR(37169),
      IR = GR(42239),
      mR = GR(37183),
      zR = GR(42374);
    const SR = "[bloxd-wasm-client]",
      jR = "coreErrors",
      dR = "wasmLoad",
      ER = "join",
      YR = "leave",
      kR = "modelFeed",
      QR = "modelWorkerPool",
      FR = "textureNames",
      TR = "renderReload",
      sR = "previewAnimations",
      hR = "eventOverflow",
      RJ = "builtInAnimations",
      JJ = "texturePackFeed",
      GJ = "texturePackSwap",
      yJ = "firstView",
      tJ = "mainThread",
      uJ = "requestDevice",
      ZJ = "cameraDirector",
      qJ = 300,
      iJ = 64,
      fJ = 8;
    let VJ = 0;
    const KJ = new Set,
      wJ = (RR, JR) => {
        const GR = XJ[RR.kind],
          yR = {
            backend: UJ,
            adPreload: WJ
          };
        if (null === GR) return void rJ(RR, JR, yR, null);
        const tR = (0, KR.b)(GR, RR.message, RR.code, RR.fatal);
        null === tR ? zJ("Loki", (async () => {
          rJ(RR, JR, yR, await (0, KR.c)(GR, RR.message, RR.code))
        })) : rJ(RR, JR, yR, tR)
      };

    function rJ(RR, JR, GR, yR) {
      let {
        backend: tR,
        adPreload: uR
      } = GR;
      const {
        kind: ZR,
        code: iR,
        site: VR,
        fatal: KR,
        details: wR
      } = RR;
      if (!KR)
        if (null === yR || (0, fR.b)(yR.errorKind) || KJ.has(yR.dedupe)) {
          if (VJ >= fJ) return;
          VJ++
        } else KJ.add(yR.dedupe);
      const rR = {
        ...wR,
        kind: ZR,
        code: iR,
        site: VR,
        fatal: String(KR),
        backend: tR
      };
      uR && (rR.adPreload = "true"), null !== yR && (rR.errorKind = yR.errorKind, rR.fingerprint = yR.fingerprint), JR instanceof Error && "string" === typeof JR.stack && (rR.causeStack = JR.stack.slice(0, 2e3)), (0, qR.ma)(DJ(RR, JR), rR)
    }
    let eJ = wJ;

    function aJ(RR) {
      const JR = eJ;
      return eJ = RR, JR
    }
    let LJ = () => {};

    function nJ(RR) {
      const JR = LJ;
      return LJ = RR, JR
    }
    let UJ = "unpicked",
      WJ = !1;

    function AJ(RR) {
      UJ = RR
    }

    function CJ(RR) {
      WJ = RR
    }
    const XJ = {
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
      MJ = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        viewUnshown: "wasm_load",
        mainStall: "wasm_load",
        texturePackKeptOut: "texture_pack"
      },
      BJ = new Set(["unstreamedLoad"]),
      lJ = new Set(["linkCensus", "linksReadAfterView"]);
    let pJ = !1;
    const gJ = 20,
      bJ = new Map;
    let vJ = 0,
      OJ = 0;
    const xJ = new Set,
      NJ = new Set;

    function DJ(RR, JR) {
      const GR = Object.assign(new Error(`${RR.code}: ${RR.message}`), {
        name: "WasmClientCrash",
        cause: null !== JR && void 0 !== JR ? JR : void 0
      });
      return JR instanceof Error && JR.stack && (GR.stack = JR.stack), GR
    }

    function HJ(RR) {
      var JR, yR;
      const {
        kind: tR,
        code: uR,
        site: ZR,
        fatal: qR,
        message: iR,
        error: fR
      } = RR, VR = !1 !== RR.toTransport && !BJ.has(tR), KR = !qR && VR && !lJ.has(tR), wR = {
        kind: tR,
        code: uR,
        site: ZR,
        fatal: qR,
        message: iR,
        details: null !== (JR = RR.details) && void 0 !== JR ? JR : {}
      }, rR = `${uR}@${ZR}${void 0===RR.instance?"":`#${RR.instance}`}${qR?"!":""}`, eR = (null !== (yR = bJ.get(rR)) && void 0 !== yR ? yR : 0) + 1;
      if (bJ.set(rR, eR), void 0 !== RR.countAs && 1 === eR && PJ(RR.countAs), eR > 1 ? 0 === (eR & eR - 1) && mJ((() => {
          console.warn(`${SR} ${uR} at ${ZR} reported ${eR} times`)
        })) : KR && vJ >= gJ ? mJ((() => {
          console.warn(`${SR} ${tR} ${uR} at ${ZR}: ${iR} (not sent: the session's ${gJ} went)`, wR.details, null !== fR && void 0 !== fR ? fR : "")
        })) : (KR && vJ++, function(RR, JR, yR, tR) {
          var uR, ZR;
          const {
            kind: qR,
            code: iR,
            site: fR,
            fatal: VR,
            message: KR,
            details: wR
          } = RR;
          mJ((() => {
            (VR ? console.error : console.warn)(`${SR} ${qR} ${iR} at ${fR}: ${KR}`, wR, null !== JR && void 0 !== JR ? JR : "")
          }));
          const rR = MJ[qR],
            eR = null !== (uR = null !== (ZR = XJ[qR]) && void 0 !== ZR ? ZR : rR) && void 0 !== uR ? uR : null;
          tR || null === eR || oJ((async () => {
            const {
              reportCappedWasmFailure: JR,
              reportUncappedWasmFailure: yR,
              reportWasmFailure: tR
            } = await GR.e(218).then((() => GR(34980))), uR = lJ.has(qR) ? yR : void 0 === rR ? tR : JR, ZR = function(RR) {
              let {
                kind: JR,
                site: GR,
                fatal: yR,
                details: tR
              } = RR;
              if ("crash" !== JR) return;
              return {
                ...tR,
                site: GR,
                fatal: String(yR)
              }
            }(RR);
            void 0 === ZR ? uR(eR, KR, iR) : uR(eR, KR, iR, ZR)
          }));
          yR && mJ((() => {
            eJ(RR, JR)
          }))
        }(wR, fR, VR, void 0 !== RR.countAs)), qR) {
        var aR;
        const JR = null !== (aR = RR.screen) && void 0 !== aR ? aR : {
          text: (0, HR.e)(wR, !0),
          reload: !0,
          stillBlocked: null
        };
        mJ((() => {
          LJ(JR)
        }))
      }
      return wR
    }

    function oJ(RR) {
      zJ("counts", (async () => {
        const {
          peekVisitSessionId: JR
        } = await Promise.resolve().then((() => GR(726)));
        null !== JR() && (await RR(), pJ = !0)
      }))
    }

    function cJ() {
      Promise.all([Promise.resolve().then((() => GR(726))), GR.e(218).then((() => GR(34980)))]).catch((RR => {
        console.warn(`${SR} the counts' modules didn't load ahead`, RR)
      }))
    }

    function PJ(RR) {
      xJ.has(RR.errorKind) || (xJ.add(RR.errorKind), oJ((async () => {
        const {
          reportClientError: JR
        } = await Promise.resolve().then((() => GR(1972)));
        JR(RR.errorKind, RR.error, RR.code, !0, void 0, RR.fields)
      })))
    }

    function IJ(RR, JR) {
      zJ("render_lost", (async () => {
        const [{
          reportClientError: yR
        }, {
          CAPPED_COUNTS_VISIT_CAP: tR
        }] = await Promise.all([Promise.resolve().then((() => GR(1972))), GR.e(218).then((() => GR(34980)))]);
        yR("render_lost", JR, RR, !0, tR)
      }))
    }

    function mJ(RR) {
      try {
        RR()
      } catch (JR) {
        try {
          console.warn(`${SR} could not send a report`, JR)
        } catch {}
      }
    }

    function zJ(RR, JR) {
      try {
        const GR = JR().catch((JR => {
          console.warn(`${SR} could not send the report to ${RR}`, JR)
        })).finally((() => {
          NJ.delete(GR)
        }));
        NJ.add(GR)
      } catch (GR) {
        console.warn(`${SR} could not send the report to ${RR}`, GR)
      }
    }
    async function SJ(RR) {
      let JR;
      (0, KR.f)();
      const GR = new Promise((GR => {
        JR = setTimeout(GR, RR)
      }));
      await Promise.race([jJ(), GR]), clearTimeout(JR)
    }
    async function jJ() {
      if (await Promise.allSettled([...NJ]), pJ) try {
        const {
          flushClientAnalyticsEvents: RR
        } = await Promise.resolve().then((() => GR(1642)));
        await RR()
      } catch (RR) {
        console.warn(`${SR} could not send the counts`, RR)
      }
    }
    async function dJ() {
      for (; NJ.size > 0;) await Promise.allSettled([...NJ])
    }

    function EJ() {
      bJ.clear(), vJ = 0, pJ = !1, VJ = 0, KJ.clear(), OJ = 0, xJ.clear(), (0, rR.r)()
    }

    function YJ(RR) {
      const JR = "object" === typeof RR && null !== RR ? RR.type : RR;
      return "string" !== typeof JR ? "sky not named" : `sky ${JSON.stringify(Array.from(JR).slice(0,iJ).join(""))}`
    }

    function kJ(RR, JR, GR, yR) {
      OJ += JR;
      for (const {
          code: qR,
          detail: iR
        }
        of RR) {
        var tR, uR, ZR;
        const RR = (0, wR.ge)(qR),
          JR = (0, rR.e)(qR, iR),
          fR = JR ? "CORE-RenderLinkPending" : `CORE-${RR}`,
          VR = (0, rR.b)(qR, iR),
          KR = null === yR || void 0 === yR ? void 0 : yR(qR, iR),
          aR = void 0 !== (null === VR || void 0 === VR ? void 0 : VR.gpuDetails),
          LR = aR ? null === (tR = (0, WR.y)()) || void 0 === tR ? void 0 : tR.renderer : void 0,
          nR = aR ? ` ${(0,rR.h)()}` : "",
          UR = Array.from([LR && `gpu ${(0,eR.e)(LR)}`, KR].filter(Boolean).join("; ")).slice(0, qJ).join(""),
          AR = `core error ${RR}${null!==(uR=null===VR||void 0===VR?void 0:VR.words)&&void 0!==uR?uR:""}${nR}${UR?`: ${UR}`:""}`,
          CR = {
            errorCode: String(qR),
            detail: String(iR),
            droppedBefore: String(OJ),
            wasmBuild: GR.wasm,
            clientVersion: GR.client,
            ...null === VR || void 0 === VR ? void 0 : VR.gpuDetails,
            ...FJ(qR, iR)
          };
        null !== VR && (0, rR.p)(VR) ? mJ((() => {
          console.warn(`${SR} coreError ${fR}: ${AR} (not sent: the session's render warnings of its kind went)`, CR)
        })) : QJ(qR) ? mJ((() => {
          console.warn(`${SR} coreError ${fR}: ${AR} (not sent: World Code's own sound or clip name, a warning as in the JS client)`, CR)
        })) : HJ({
          kind: JR ? "recovered" : sJ(qR, iR),
          code: fR,
          site: jR,
          fatal: !1,
          message: AR,
          details: CR,
          instance: null !== (ZR = null === VR || void 0 === VR ? void 0 : VR.instance) && void 0 !== ZR ? ZR : TJ(qR, iR)
        })
      }
    }

    function QJ(RR) {
      if (RR !== wR.K.AudioUnknownSound && RR !== wR.K.PresentationClipUnplayable) return !1;
      const {
        gameNameWithVariation: JR,
        lobbyName: GR
      } = (0, ZR.d)();
      return null !== JR && (!!(0, yR.n)(JR) || RR === wR.K.AudioUnknownSound && (0, tR.i)(JR, GR))
    }

    function FJ(RR, JR) {
      if (RR !== wR.K.RenderDeviceLost) return;
      const GR = JR >>> wR.N.LINKS_IN_FLIGHT_SHIFT & wR.N.LINKS_IN_FLIGHT_MAX,
        yR = JR >>> wR.N.OLDEST_LINK_SHIFT & wR.N.OLDEST_LINK_MAX;
      return {
        linksInFlight: String(GR),
        oldestLinkMs: String(yR * wR.N.OLDEST_LINK_UNIT_MS)
      }
    }

    function TJ(RR, JR) {
      return RR === wR.K.RenderDeviceLost && 0 !== (JR & wR.N.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function sJ(RR, JR) {
      return RR === wR.K.JobsHeapGaveUp ? "meshHeap" : (0, rR.f)(RR, JR) ? "linksReadAfterView" : (0, rR.c)(RR, JR) ? "linkCensus" : "coreError"
    }

    function hJ(RR) {
      return (0, PR.h)(RR instanceof IR.e ? RR.trap : RR, vR.x, vR.Z)
    }

    function RG(RR, JR, GR) {
      return GG(RR, JR, GR, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function JG(RR, JR, GR) {
      return GG(RR, JR, GR, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function GG(RR, JR, GR, yR, tR) {
      let {
        memoryDetails: uR = {},
        memoryStep: ZR
      } = yR;
      const {
        code: qR,
        details: iR,
        message: fR
      } = (0, MR.G)(RR, JR), VR = [];
      Object.assign(iR, (0, mR.h)(RR.error)), null !== GR && (iR.trapKind = GR.kind, null !== GR.panic && (iR.panic = (0, PR.e)(GR.panic)), GR.refusedBytes > 0 && (iR.refusedAllocation = String(GR.refusedBytes)), VR.push((0, PR.k)(GR.kind, GR.refusedBytes))), void 0 !== ZR && VR.push(`memory=${ZR}`);
      const KR = RR.error instanceof yG;
      return KR && (0, oR.E)(), HJ({
        kind: "crash",
        code: qR,
        site: RR.site,
        fatal: tR,
        message: [...VR, fR].join("; "),
        details: {
          ...iR,
          ...uR,
          ...void 0 === ZR ? {} : {
            memoryStep: ZR
          }
        },
        error: RR.error,
        screen: KR ? uG("graphicsLost") : void 0
      })
    }
    class yG extends Error {}

    function tG(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return "download" !== RR && (0, oR.E)(), HJ({
        kind: "unsupported",
        code: JR,
        site: dR,
        fatal: !0,
        message: GR,
        details: {
          ...yR,
          cause: RR,
          status: JR
        },
        screen: uG(RR)
      })
    }

    function uG(RR) {
      const JR = (0, uR.r)(UR.siteUsed),
        GR = (0, HR.t)(RR, JR),
        yR = "noContext" === RR || "graphicsLost" === RR ? (0, HR.k)(RR, JR) : null;
      return {
        text: GR,
        reload: "general:tryAgain" === GR.confirm,
        stillBlocked: yR
      }
    }

    function ZG(RR, JR, GR) {
      return HJ({
        kind: "recovered",
        code: "reprobed" === RR ? "no_backend_reprobed" : "no_backend_wasm_reload",
        site: dR,
        fatal: !1,
        message: GR,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          decline: JR,
          step: RR
        }
      })
    }
    const qG = 9;

    function iG(RR) {
      const JR = "recovered" === RR.outcome ? "recovered" : "gave_up",
        GR = "load" === RR.step ? `wasm_load_${JR}${RR.oom?"_oom":""}` : `no_context_${JR}`;
      return "recovered" === RR.outcome ? `${GR}_t${Math.min(RR.tries,qG)}` : "load" === RR.step ? `${GR}_${RR.stage}` : GR
    }

    function fG(RR) {
      const {
        step: JR,
        outcome: GR,
        tries: yR,
        detail: tR,
        details: uR = {}
      } = RR, ZR = "load" === RR.step ? {
        stage: RR.stage,
        ...RR.oom ? {
          oom: "true"
        } : {}
      } : {};
      return HJ({
        kind: "recovered",
        code: iG(RR),
        site: dR,
        fatal: !1,
        message: tR,
        details: {
          ...uR,
          step: JR,
          outcome: GR,
          tries: String(yR),
          ...ZR
        }
      })
    }

    function VG(RR) {
      return HJ({
        kind: "recovered",
        code: "WEBGPU-unknownLimits",
        site: uJ,
        fatal: !1,
        message: "WebGPU dropped required limits the browser doesn't name",
        details: {
          limits: RR.join(",")
        }
      })
    }
    const KG = "reload=wasm";

    function wG(RR, JR, GR) {
      return HJ({
        kind: "unsupported",
        code: JR,
        site: dR,
        fatal: !1,
        message: [KG, GR].join("; "),
        details: {
          cause: RR,
          status: JR,
          fallback: "wasmReload"
        }
      })
    }

    function rG() {
      const {
        code: RR,
        message: JR
      } = cR.d;
      return HJ({
        kind: "unstreamedLoad",
        code: RR,
        site: dR,
        fatal: !1,
        message: JR
      })
    }
    class eG extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function aG(RR) {
      return RR instanceof pR.m ? 0 === RR.code ? "JOIN-matchmake" : `JOIN-${RR.code}` : RR instanceof pR.b ? 0 === RR.code ? `JOIN-${RR.stage}` : `JOIN-${RR.stage}-${RR.code}` : RR instanceof lR.e ? "JOIN-gameCode" : RR instanceof eG ? "JOIN-turnstilePage" : RR instanceof pR.z ? "JOIN-trafficCheck" : RR instanceof CR.g ? "JOIN-timeout" : "JOIN-network"
    }

    function LG(RR, JR) {
      const GR = (0, mR.k)(RR),
        yR = {
          wasmBuild: JR.wasm,
          clientVersion: JR.client
        },
        tR = RR instanceof eG ? {
          text: (0, HR.n)(),
          reload: !1,
          stillBlocked: null
        } : void 0,
        uR = (0, gR.c)(RR),
        ZR = "expected" !== uR;
      return HJ({
        kind: "join",
        code: aG(RR),
        site: ER,
        fatal: !0,
        message: GR,
        details: yR,
        error: RR,
        screen: tR,
        toTransport: ZR,
        instance: uR
      })
    }

    function nG(RR, JR, GR) {
      var yR;
      const tR = (0, gR.c)(RR),
        uR = {
          cause: (RR instanceof pR.b || RR instanceof pR.m) && null !== (yR = RR.serverText) && void 0 !== yR ? yR : "",
          sinceJoinStart: (0, AR.c)(GR.sinceJoinStartMs),
          game: GR.game,
          ...(0, AR.j)(),
          wasmBuild: JR.wasm,
          clientVersion: JR.client
        };
      return HJ({
        kind: "pageJoin",
        code: aG(RR),
        site: ER,
        fatal: !1,
        message: (0, mR.k)(RR),
        details: uR,
        error: RR,
        toTransport: "unrecognised" === tR,
        instance: tR
      })
    }
    const UG = {
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

    function WG(RR, JR) {
      let {
        unused: GR,
        answered: yR,
        mD: tR
      } = RR;
      const {
        code: uR,
        message: ZR
      } = UG[GR], qR = {
        unused: GR,
        answered: String(yR),
        mD: String(tR),
        wasmBuild: JR.wasm,
        clientVersion: JR.client
      };
      return HJ({
        kind: "seat",
        code: uR,
        site: ER,
        fatal: !1,
        message: ZR,
        details: qR
      })
    }

    function AG(RR, JR, GR) {
      var yR;
      let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (yR = RR.name) && void 0 !== yR ? yR : String(RR.code);
      const uR = {
          closeCode: String(RR.code),
          recognised: String(null !== RR.name),
          closeReason: GR.closeReason,
          sinceJoined: (0, AR.c)(GR.sinceJoinedMs),
          game: GR.game,
          ...(0, AR.j)(),
          wasmBuild: JR.wasm,
          clientVersion: JR.client
        },
        ZR = null === RR.name && !(0, AR.f)(RR.code);
      return HJ({
        kind: "disconnect",
        code: tR,
        site: YR,
        fatal: !1,
        message: "Left room",
        details: uR,
        toTransport: ZR
      })
    }

    function CG(RR, JR) {
      const GR = {
        ...(0, aR.q)(RR),
        wasmBuild: JR.wasm,
        clientVersion: JR.client
      };
      return HJ({
        kind: "disconnect",
        code: `reconnect-${RR.reason}`,
        site: ER,
        fatal: !1,
        message: "Reconnect failed",
        details: GR
      })
    }

    function XG(RR) {
      return RR.error instanceof OR.f ? `MODEL-${RR.error.status}` : RR.error instanceof xR.h ? "MODEL-ring" : "MODEL-network"
    }

    function MG(RR, JR) {
      const GR = XG(RR),
        yR = `model file ${RR.file} ${RR.startup?"(startup) ":""}could not load`,
        tR = {
          file: String(RR.file),
          url: RR.url,
          wasmBuild: JR.wasm,
          clientVersion: JR.client
        };
      return HJ({
        kind: RR.startup ? "model" : "modelLate",
        code: GR,
        site: kR,
        fatal: RR.startup,
        message: yR,
        details: tR,
        error: RR.error
      })
    }

    function BG(RR, JR) {
      const GR = {
        wasmBuild: JR.wasm,
        clientVersion: JR.client
      };
      return HJ({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: QR,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: GR,
        error: RR
      })
    }

    function lG(RR, JR, GR) {
      const yR = {
        delayMs: String(JR),
        wasmBuild: GR.wasm,
        clientVersion: GR.client
      };
      RR instanceof OR.f && (yR.status = String(RR.status));
      return HJ({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: QR,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: yR,
        error: RR
      })
    }

    function pG(RR, JR) {
      const GR = {
        wasmBuild: JR.wasm,
        clientVersion: JR.client
      };
      return HJ({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: MR.B,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: GR,
        error: RR
      })
    }

    function gG(RR, JR) {
      const GR = {
        wasmBuild: JR.wasm,
        clientVersion: JR.client
      };
      return HJ({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: JJ,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: GR,
        error: RR
      })
    }

    function bG(RR, JR, GR, yR) {
      const tR = {
        wasmBuild: yR.wasm,
        clientVersion: yR.client
      };
      return HJ({
        kind: "texturePackKeptOut",
        code: (0, VR.g)("wasm", RR, JR),
        site: GJ,
        fatal: !1,
        message: JR.detail,
        details: tR,
        error: GR
      })
    }

    function vG(RR, JR) {
      const {
        frames: GR,
        acks: yR,
        mask: tR,
        outcome: uR
      } = RR, ZR = {
        frames: String(GR),
        acks: String(yR),
        mask: String(tR),
        outcome: null !== uR && void 0 !== uR ? uR : "resynced",
        wasmBuild: JR.wasm,
        clientVersion: JR.client
      };
      return HJ({
        kind: "recovered",
        code: "rejoined" === uR ? "CORE-eventOverflowRejoin" : "failed" === uR ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: hR,
        fatal: !1,
        message: `the event buffer refused records in ${GR} frames`,
        details: ZR
      })
    }

    function OG(RR, JR, GR) {
      return HJ({
        kind: "recovered",
        code: "CORE-workerLost",
        site: RR,
        fatal: !1,
        message: `a ${RR} worker was lost`,
        details: {
          reason: JR,
          wasmBuild: GR.wasm,
          clientVersion: GR.client
        }
      })
    }

    function xG(RR, JR, GR, yR) {
      const tR = {
          reason: RR,
          pageBuild: yR.build,
          pageAgeMin: String(Math.floor(yR.ageMs / 6e4)),
          wasmBuild: GR.wasm,
          clientVersion: GR.client
        },
        uR = JR ? "a world-gen worker's code did not load" : "a world-gen worker was lost";
      return HJ({
        kind: "recovered",
        code: "CORE-worldgenWorkerLost",
        site: MR.B,
        fatal: !1,
        message: uR,
        details: tR
      })
    }

    function NG(RR, JR, GR) {
      const yR = {
        wasmBuild: GR.wasm,
        clientVersion: GR.client
      };
      return HJ({
        kind: "recovered",
        code: RR,
        site: MR.p,
        fatal: !1,
        message: JR,
        details: yR
      })
    }

    function DG(RR, JR) {
      const GR = {
        lastReason: RR,
        wasmBuild: JR.wasm,
        clientVersion: JR.client
      };
      return HJ({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: MR.B,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: GR
      })
    }

    function HG(RR, JR, GR) {
      return HJ({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: MR.n,
        fatal: !1,
        message: `${(0,bR.D)(RR)}: the session shed load`,
        details: {
          cause: RR,
          ...JR,
          wasmBuild: GR.wasm,
          clientVersion: GR.client
        }
      })
    }

    function oG(RR, JR, GR, yR) {
      var tR, uR;
      return {
        game: RR,
        cause: JR,
        census: null === GR ? "none" : JSON.stringify(GR),
        gpu: null !== (tR = null === (uR = (0, WR.y)()) || void 0 === uR ? void 0 : uR.renderer) && void 0 !== tR ? tR : "",
        browser: (0, rR.h)(),
        wasmBuild: yR.wasm,
        clientVersion: yR.client
      }
    }

    function cG(RR, JR, GR, yR) {
      const tR = (0, rR.l)(),
        uR = {
          ...oG(RR, JR, GR, yR),
          renderWarned: String(tR)
        },
        ZR = `first view drew no whole terrain in ${NR.f/1e3} s, ${JR}${tR?", render warned":""}`;
      return HJ({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: yJ,
        fatal: !1,
        message: ZR,
        details: uR
      })
    }

    function PG(RR, JR, GR, yR, tR) {
      const uR = {
          ...oG(RR, GR.cause, yR, tR),
          waitedMs: String(Math.round(JR.waitedMs)),
          visibleMs: String(Math.round(JR.visibleMs)),
          drawnMs: String(Math.round(JR.drawnMs)),
          frames: String(JR.frames),
          renderPending: String(GR.renderPending),
          viewWait: null === GR.wait ? "none" : GR.wait.slice(0, 6).join(",")
        },
        ZR = (0, BR.g)(JR, GR);
      return HJ({
        kind: "viewUnshown",
        code: "CORE-firstViewUnshown",
        site: yJ,
        fatal: !1,
        message: ZR,
        details: uR
      })
    }

    function IG(RR, JR, GR, yR, tR) {
      const uR = (0, LR.i)(),
        ZR = (0, LR.e)(RR, JR, GR, yR, uR),
        qR = {
          gpuModel: uR,
          wasmBuild: tR.wasm,
          clientVersion: tR.client
        };
      return HJ({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: tJ,
        fatal: !1,
        message: ZR,
        details: qR
      })
    }

    function mG(RR, JR, GR) {
      return HJ({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: RR,
        fatal: !1,
        message: `a ${RR} worker did not start`,
        details: {
          waitedMs: String(Math.round(JR)),
          wasmBuild: GR.wasm,
          clientVersion: GR.client
        }
      })
    }

    function zG(RR, JR, GR) {
      return HJ({
        kind: "recovered",
        code: "CORE-replayFault",
        site: RR,
        fatal: !1,
        message: `the replay's ${RR} failed`,
        details: {
          wasmBuild: GR.wasm,
          clientVersion: GR.client
        },
        error: JR
      })
    }

    function SG(RR, JR) {
      const GR = {
          wasmBuild: JR.wasm,
          clientVersion: JR.client
        },
        yR = RR instanceof Error ? RR.message : String(RR);
      return HJ({
        kind: "recovered",
        code: "CORE-cameraDirector",
        site: ZJ,
        fatal: !1,
        message: "the scripted camera's director threw",
        details: GR,
        instance: yR,
        error: RR
      })
    }
    const jG = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function dG(RR) {
      if (0 === RR) return "none";
      const JR = [60, 600, 3600].find((JR => RR < JR));
      return void 0 === JR ? "ge3600" : `lt${JR}`
    }

    function EG(RR, JR) {
      return null === RR ? "unbound" : (0, nR.i)(JR - RR)
    }

    function YG(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
      return [0 !== (RR & wR.N.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (RR & wR.N.LINKS_RUNNING) ? "links running" : "", `frames ${(0,eR.e)(dG(RR&wR.N.FRAMES))}`, `up ${(0,eR.e)(EG(JR,GR))}`].filter(Boolean).join(", ")
    }

    function kG(RR, JR, GR) {
      const yR = "lost" === JR && void 0 !== GR ? ` (${GR})` : "";
      return `the ${RR} ${jG[JR]}${yR}`
    }
    const QG = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };

    function FG(RR, JR, GR, yR) {
      var tR;
      let {
        restoreLost: uR = !1,
        adapterRemembered: ZR = !1
      } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, qR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
      const iR = null === GR || void 0 === GR ? void 0 : GR.message,
        fR = "pipeline_failed" === JR ? JR : GR instanceof XR.g ? "timeout" : (0, nR.r)("frames_refused" === JR, "string" === typeof iR ? iR : ""),
        VR = null === yR.boundAtMs ? "unbound" : `up${(0,nR.f)(qR-yR.boundAtMs)}`,
        KR = null === yR.adapter ? "no adapter" : (0, nR.n)(yR.adapter),
        wR = `${!0===yR.indirectHangs?" ih":""}${!0===yR.restoresSkipped?" nr":""}${uR?" rl":""}${ZR?" ar":""}`,
        rR = `${fR} ${(0,XR.h)()?"hidden":"visible"} ${VR}${wR} ${KR}`;
      if ("webgpu" !== RR || "lost" !== JR && "frames_refused" !== JR) return {
        detail: rR,
        count: void 0
      };
      return {
        detail: rR,
        count: {
          errorKind: "render_lost",
          error: new Error(rR),
          code: (0, nR.z)(fR, null !== (tR = yR.boundAtMs) && void 0 !== tR ? tR : qR, qR).code,
          fields: {
            renderBackend: zR.d.webgpu
          }
        }
      }
    }

    function TG(RR, JR, GR) {
      const {
        count: yR
      } = FG("webgpu", RR, JR, GR);
      void 0 !== yR && PJ(yR)
    }
    const sG = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function hG(RR) {
      var JR;
      return null !== (JR = RR instanceof Error ? RR.reason : void 0) && void 0 !== JR ? JR : ""
    }

    function Ry(RR, JR, yR) {
      var tR, uR, ZR, qR, fR;
      let {
        from: VR,
        cause: KR = "lost",
        restoreLost: wR = !1,
        adapterRemembered: aR = !1,
        error: LR,
        context: WR = QG,
        session: AR = sG
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, CR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
      const {
        detail: XR,
        count: MR
      } = FG(RR, KR, LR, WR, {
        restoreLost: wR,
        adapterRemembered: aR
      }, CR), BR = {
        reloadFrom: null !== VR && void 0 !== VR ? VR : "",
        losses: String(JR),
        cause: KR,
        detail: XR,
        vendor: null !== (tR = null === (uR = WR.adapter) || void 0 === uR ? void 0 : uR.vendor) && void 0 !== tR ? tR : "",
        architecture: null !== (ZR = null === (qR = WR.adapter) || void 0 === qR ? void 0 : qR.architecture) && void 0 !== ZR ? ZR : "",
        indirectHangs: String(WR.indirectHangs),
        restoresSkipped: String(WR.restoresSkipped),
        restoreLost: String(wR),
        adapterRemembered: String(aR),
        lossReason: hG(LR),
        samples: String(AR.samples),
        sunShadows: String(AR.sunShadows),
        renderDistance: String(AR.renderDistance),
        gpuFamily: null !== (fR = (0, iR.d)()) && void 0 !== fR ? fR : "",
        browser: (0, rR.h)(),
        siteUsed: UR.siteUsed,
        wasmBuild: yR.wasm,
        clientVersion: yR.client
      }, lR = "webgpu" !== RR && void 0 !== VR ? function(RR, JR, GR, yR) {
        return `: ${RR}, ${JR?"restore lost":"not restored"}, up ${(0,eR.e)(EG(GR,yR))}`
      }(VR, wR, WR.boundAtMs, CR) : "", pR = `${kG(RR,KR)}${lR}`, gR = HJ({
        kind: "recovered",
        code: "CORE-renderLost",
        site: TR,
        fatal: !1,
        message: pR,
        details: BR,
        error: LR,
        countAs: MR
      });
      return zJ("ga", (async () => {
        const {
          logError: JR
        } = await Promise.resolve().then((() => GR(4053))), yR = `${nR.b["webgpu"===RR?"WebGPU":"WebGL2"]}\n Error: ${XR}`;
        JR("warning", yR), JR("error", yR)
      })), gR
    }

    function Jy(RR, JR) {
      var GR, yR;
      const tR = null === RR.name ? "TEXTURE-sources" : null === RR.url ? "TEXTURE-nourl" : RR.error instanceof DR.e ? `TEXTURE-${RR.error.status}` : "TEXTURE-network",
        uR = null === RR.name ? "terrain textures could not load" : `terrain texture ${RR.name} could not load`,
        ZR = {
          texture: null !== (GR = RR.name) && void 0 !== GR ? GR : "",
          url: null !== (yR = RR.url) && void 0 !== yR ? yR : "",
          wasmBuild: JR.wasm,
          clientVersion: JR.client
        };
      return HJ({
        kind: "terrainTexture",
        code: tR,
        site: MR.x,
        fatal: !1,
        message: uR,
        details: ZR,
        error: RR.error
      })
    }
    const Gy = {
      previewAnimations: {
        site: sR,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: RJ,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function yy(RR, JR, GR, yR) {
      const {
        site: tR,
        prefix: uR,
        name: ZR
      } = Gy[RR], {
        stage: qR,
        error: iR
      } = GR;
      return HJ({
        kind: RR,
        code: "decode" === qR ? null === iR ? `${uR}-decode` : `${uR}-trap` : iR instanceof OR.f ? `${uR}-${iR.status}` : `${uR}-network`,
        site: tR,
        fatal: !1,
        message: "decode" === qR ? `${ZR} did not decode` : `${ZR} could not load`,
        details: {
          url: JR,
          wasmBuild: yR.wasm,
          clientVersion: yR.client
        },
        error: iR
      })
    }
    const ty = "staleBuild";

    function uy(RR, JR, GR) {
      const yR = {
          failedSite: RR.site,
          url: RR.url,
          from: RR.from,
          sameBuild: String(RR.from === JR),
          reloadMs: String(Math.max(0, Date.now() - RR.at)),
          wasmBuild: GR.wasm,
          clientVersion: GR.client
        },
        tR = `reloaded into a newer build after ${RR.site} failed to load: ${RR.error}`;
      return HJ({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: ty,
        fatal: !1,
        message: tR,
        details: yR
      })
    }
  },
  42325: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR,
      f: () => tR,
      h: () => ZR,
      l: () => iR
    });
    var yR = GR(5685);
    const tR = 3e4,
      uR = 900;

    function ZR(RR, JR) {
      const GR = null === RR ? 0 : JR - RR;
      return GR <= uR ? GR : 0
    }
    class qR {
      constructor(RR) {
        this.fK = RR, this.waitedMs = 0, this.lastMs = null
      }
      frame(RR, JR) {
        return !!JR || (this.waitedMs += ZR(this.lastMs, RR), this.lastMs = RR, !(this.waitedMs < tR) && (this.fK(), !0))
      }
    }

    function iR(RR, JR) {
      return 0 === (RR & yR.ab.ChunkRequested) ? "no_chunk_request" : 0 === (RR & yR.ab.ChunkStored) ? "chunk_not_stored" : 0 === (RR & yR.ab.MeshLanded) ? "not_meshed" : null === JR ? "no_frame_drawn" : 0 === JR.terrainParts ? "no_terrain_parts" : JR.terrainCompiling > 0 ? "terrain_compiling" : JR.terrainOpaque + JR.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  42322: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => iR,
      e: () => ZR,
      g: () => VR
    });
    var yR = GR(188),
      tR = GR(42325);
    const uR = ["view", "startup", "skipped"];

    function ZR(RR) {
      return 0 === RR.clientWidth || 0 === RR.clientHeight || 0 === RR.width || 0 === RR.height
    }

    function qR(RR) {
      if (null === RR) return "none";
      const [JR, GR, yR, tR] = RR, uR = [
        ["link", JR],
        ["terrain", GR],
        ["Qq", yR],
        ["other", tR]
      ];
      let ZR = "none",
        qR = 0;
      for (const [iR, fR] of uR) fR > qR && (ZR = iR, qR = fR);
      return ZR
    }
    class iR {
      constructor(RR) {
        this.gap = RR, this.chunkAtMs = null, this.lastFrameMs = null, this.drawnMs = 0, this.frames = 0, this.visibleFromMs = null, this.undrawn = {
          view: 0,
          startup: 0,
          skipped: 0
        }, this.over = !1
      }
      get open() {
        return null !== this.chunkAtMs && !this.over
      }
      playerChunk(RR, JR) {
        null !== this.chunkAtMs || this.over || (this.chunkAtMs = RR, JR || this.pageShown(RR))
      }
      pageShown(RR) {
        this.open && null === this.visibleFromMs && (this.visibleFromMs = RR, this.gap.restart(RR))
      }
      animationFrame(RR, JR, GR) {
        !this.open || null === this.visibleFromMs || RR <= this.visibleFromMs || (this.gap.animationFrame(), "paced" === JR ? this.gap.paced() : "skipped" === JR ? this.undrawn.skipped++ : "none" === JR && this.undrawn[GR ? "startup" : "view"]++)
      }
      frame(RR) {
        this.open && (this.drawnMs += (0, tR.h)(this.lastFrameMs, RR), this.lastFrameMs = RR, this.frames++)
      }
      shown() {
        this.over = !0, this.gap.stop()
      }
      end(RR, JR) {
        if (null === this.chunkAtMs || this.over) return null;
        this.over = !0;
        const GR = null === this.visibleFromMs ? null : this.gap.words(!1, JR);
        return this.gap.stop(), {
          end: RR,
          waitedMs: Math.max(JR - this.chunkAtMs, 0),
          visibleMs: null === this.visibleFromMs ? 0 : Math.max(JR - this.visibleFromMs, 0),
          drawnMs: this.drawnMs,
          frames: this.frames,
          undrawn: {
            ...this.undrawn
          },
          page: GR
        }
      }
    }

    function fR(RR) {
      return RR < 5e3 ? "brief" : RR < 15e3 ? "short" : RR < 6e4 ? "long" : "very_long"
    }

    function VR(RR, JR) {
      var GR, tR;
      const ZR = [...null === RR.page ? [] : RR.page.split(" "), ...uR.filter((JR => RR.undrawn[JR] > 0)).map((RR => `undrawn:${RR}`)), ...JR.canvasEmpty ? ["canvas:empty"] : []],
        iR = [
          ["", `first view unshown, ${JR.cause}, ended ${RR.end}`],
          [", ", 0 === RR.visibleMs ? "visible none" : `visible ${fR(RR.visibleMs)}`],
          [", ", 0 === RR.frames ? "no frames" : `drew ${fR(RR.drawnMs)}`], ...ZR.map(((RR, JR) => [0 === JR ? ", " : " ", RR])), [", ", `waited ${fR(RR.waitedMs)}`],
          [", ", JR.bound ? "bound" : "unbound"], ...JR.preload ? [
            [", ", "preload"]
          ] : [],
          [", ", JR.startupLoaded ? "startup in" : "startup out"],
          [", ", JR.renderPending > 0 ? "render pending" : "render resolved"],
          [", ", `lacked ${qR(JR.wait)}${(null!==(GR=null===(tR=JR.wait)||void 0===tR?void 0:tR[4])&&void 0!==GR?GR:0)>0?" gapped":""}`]
        ];
      let VR = "";
      for (const [uR, qR] of iR) {
        const RR = VR + uR + qR;
        if (RR.length > yR.gb) break;
        VR = RR
      }
      return VR
    }
  },
  42118: (RR, JR, GR) => {
    GR.d(JR, {
      C: () => eR,
      e: () => yR,
      i: () => nR,
      l: () => aR,
      m: () => LR,
      p: () => wR,
      s: () => rR,
      u: () => VR,
      y: () => KR
    });
    class yR extends Error {
      constructor(RR) {
        super(`the join's code did not load: ${RR instanceof Error?RR.message:String(RR)}`, {
          cause: RR
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === RR || void 0 === RR ? void 0 : RR.request
      }
    }
    let tR = null,
      uR = null,
      ZR = null;
    const qR = [];
    let iR = null;

    function fR(RR, JR) {
      try {
        RR(JR)
      } catch (GR) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", GR)
      }
    }

    function VR() {
      return iR
    }

    function KR(RR) {
      qR.push(RR), null !== iR && fR(RR, iR)
    }

    function wR(RR) {
      return tR ??= Promise.all([GR.e(85), GR.e(113), GR.e(88), GR.e(177), GR.e(91), GR.e(224), GR.e(252), GR.e(112), GR.e(142), GR.e(245), GR.e(244), GR.e(306), GR.e(243), GR.e(222), GR.e(50), GR.e(223), GR.e(127), GR.e(214), GR.e(280), GR.e(143), GR.e(103), GR.e(69)]).then((() => GR(54578))).then((JR => {
        JR.loadAudio(RR), iR = JR;
        for (const RR of qR) fR(RR, JR);
        return JR
      })).catch((RR => {
        throw tR = null, RR
      })), tR
    }
    async function rR(RR, JR) {
      try {
        const GR = await wR(RR);
        await GR.loadClientGame(JR)
      } catch (GR) {
        throw new yR(GR)
      }
    }

    function eR(RR, JR) {
      uR = {
        running: RR,
        shell: JR
      }
    }

    function aR() {
      return ZR
    }
    async function LR(RR) {
      const JR = uR;
      if ((null === JR || void 0 === JR ? void 0 : JR.running) !== RR) throw new Error("the core's session has ended");
      const GR = await wR(JR.shell.audio).catch((RR => {
        throw new yR(RR)
      }));
      if (null !== ZR) return ZR;
      if (uR !== JR || RR.isStopped) throw new Error("the core stopped while the game code loaded");
      if (ZR = GR.startGameHost(RR, JR.shell), null === ZR) throw new Error("the core's shared tables didn't read, so the game can't start");
      return ZR
    }

    function nR() {
      null !== ZR && (null !== iR ? iR.endGameHost(ZR) : ZR.closeGame()), ZR = null, uR = null
    }
  },
  42237: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    const yR = {
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
  42329: (RR, JR, GR) => {
    GR.d(JR, {
      A: () => qR,
      b: () => fR,
      e: () => uR,
      f: () => ZR,
      j: () => tR,
      m: () => rR,
      p: () => VR,
      s: () => iR,
      v: () => wR,
      z: () => KR
    });
    var yR = GR(2007);
    const tR = new Uint8Array([12]),
      uR = 2e3,
      ZR = 257;

    function qR(RR) {
      const JR = new Uint8Array(4);
      return new DataView(JR.buffer).setUint32(0, RR, !0), JR
    }
    class iR extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class fR extends Error {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        super(RR), this.stage = JR, this.code = GR, this.serverText = yR, this.socketOpened = tR, this.name = "JoinError"
      }
    }
    class VR extends Error {
      constructor(RR) {
        super(RR), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class KR extends Error {
      constructor(RR) {
        super((0, yR.g)(RR), {
          cause: RR
        }), this.name = "TrafficCheckError"
      }
    }
    class wR extends Error {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        super(RR, {
          cause: GR
        }), this.networkLost = JR, this.httpStatus = yR, this.name = "SeatRequestError"
      }
    }
    class rR extends Error {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(RR), this.code = JR, this.serverText = GR, this.name = "MatchmakeError"
      }
    }
  },
  42331: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => rR,
      c: () => wR,
      g: () => eR
    });
    var yR = GR(3731),
      tR = GR(2521),
      uR = GR(40310),
      ZR = GR(37640),
      qR = GR(40317),
      iR = GR(42329),
      fR = GR(42335);
    const VR = "seat reservation expired.",
      KR = "early_leave";

    function wR(RR) {
      if (RR instanceof ZR.g) return "expected";
      if (RR instanceof iR.v) return RR.networkLost ? "expected" : "unrecognised";
      if (RR instanceof iR.b) {
        if ("closed" === RR.stage && (0 === RR.code || (0, tR.f)(RR.code))) return "expected";
        if ("roomError" === RR.stage && (RR.serverText === VR || RR.serverText === KR)) return "expected"
      }
      return RR instanceof iR.b || RR instanceof iR.m ? null === (0, qR.e)(RR.code).name ? "unrecognised" : "known" : (0, yR.e)(RR) ? "expected" : RR instanceof iR.z || RR instanceof fR.c ? "known" : "unrecognised"
    }

    function rR(RR) {
      return RR instanceof ZR.g ? "timedOut" : "expected" !== wR(RR) || (0, yR.e)(RR) || RR instanceof iR.b && 1001 === RR.code ? void 0 : "failed"
    }

    function eR(RR) {
      return RR instanceof iR.b && "attach" !== RR.stage ? (0, uR.c)(RR, "closed" !== RR.stage || RR.socketOpened ? "socket" : "socket_unopened") : RR instanceof iR.v ? {
        at: "seat_lost",
        code: RR.httpStatus
      } : RR instanceof iR.m || RR instanceof ZR.g ? (0, uR.c)(RR, RR instanceof ZR.g ? RR.leg : "seat") : void 0
    }
  },
  42344: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => iR,
      d: () => fR,
      e: () => rR,
      h: () => KR
    });
    var yR = GR(2457),
      tR = GR(5676),
      uR = GR(42352),
      ZR = GR(42357),
      qR = GR(37183);
    const iR = 395,
      fR = 2147483648,
      VR = new Uint8Array(0);
    class KR extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class wR extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class rR {
      constructor(RR, JR, GR) {
        var yR, tR, ZR, qR;
        let iR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = RR, this.build = JR, this.onFailure = GR, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.tK = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (yR = iR.fetchFile) && void 0 !== yR ? yR : RR => (0, uR.f)(RR), this.onWritten = null !== (tR = iR.onWritten) && void 0 !== tR ? tR : null, this.onTaken = null !== (ZR = iR.onTaken) && void 0 !== ZR ? ZR : null, this.onPackFileFailed = null !== (qR = iR.onPackFileFailed) && void 0 !== qR ? qR : null, this.startupLeft = new Set(RR.startup);
        for (const uR of RR.startup) this.request(uR)
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
      drawnUrl(RR) {
        return this.drawn.get(RR)
      }
      request(RR) {
        const JR = this.pending.get(RR);
        if (!0 === (null === JR || void 0 === JR ? void 0 : JR.ask)) return;
        const GR = this.UK(RR, !0);
        GR.recheck = void 0 !== JR;
        const yR = this.drawn.get(RR);
        if (void 0 !== yR) return GR.Qq = !0, GR.recheck = !0, void this.fetch(RR, GR, yR);
        this.fetchWanted(RR, GR)
      }
      async refresh() {
        const RR = ++this.refreshes,
          JR = new Set;
        for (const ZR of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const RR of ZR) 0 === (RR & uR.d) && JR.add(RR);
        const GR = [...JR];
        let yR;
        try {
          yR = await Promise.all(GR.map((RR => this.wanted(RR))))
        } catch {
          return null
        }
        if (RR !== this.refreshes) return null;
        const tR = {
          resent: 0,
          refetched: 0,
          delivered: GR.filter((RR => this.drawn.has(RR))).length
        };
        return GR.forEach(((RR, JR) => {
          const {
            url: GR,
            inPlaceOf: uR
          } = yR[JR], ZR = this.pending.get(RR);
          if (void 0 !== ZR) {
            if (ZR.Qq || void 0 === ZR.url) return void(ZR.recheck = !0);
            if (ZR.url === GR) return;
            tR.refetched++;
            const JR = this.UK(RR, ZR.ask);
            return JR.recheck = ZR.recheck, void this.fetch(RR, JR, GR, uR)
          }
          const qR = this.written.get(RR);
          void 0 === qR ? this.drawn.get(RR) !== (null !== GR && void 0 !== GR ? GR : void 0) && (tR.resent++, this.fetch(RR, this.UK(RR, !1), GR, uR)) : qR.url !== (null !== GR && void 0 !== GR ? GR : "") && (qR.attempt.recheck = !0)
        })), tR
      }
      taken(RR, JR) {
        const GR = new Set,
          yR = new Set;
        for (const tR of Array.from(JR)) 0 === (tR & fR) ? GR.add(tR) : yR.add((tR & ~fR) >>> 0);
        for (const [tR, uR] of this.written) uR.seq > RR || (this.written.delete(tR), GR.has(uR.seq) ? this.refusedFile(tR, uR) : this.takenFile(tR, uR, !uR.empty && !yR.has(uR.seq)))
      }
      takenFile(RR, JR, GR) {
        const {
          attempt: yR
        } = JR;
        if (GR) {
          var tR;
          this.drawn.set(RR, JR.url), this.undrawn.delete(RR), void 0 !== yR.inPlaceOf ? this.refusedPack.set(RR, yR.inPlaceOf) : yR.Qq || this.refusedPack.delete(RR), null === (tR = this.onTaken) || void 0 === tR || tR.call(this, RR, !0);
          const GR = this.pending.get(RR);
          if (!0 === (null === GR || void 0 === GR ? void 0 : GR.Qq) && GR.url !== JR.url) {
            const GR = this.UK(RR, !0);
            GR.Qq = !0, GR.recheck = !0, this.fetch(RR, GR, JR.url)
          }
        } else {
          var uR;
          this.drawn.has(RR) || this.undrawn.add(RR), null === (uR = this.onTaken) || void 0 === uR || uR.call(this, RR, !1)
        }
        yR.recheck && this.resendIfChanged(RR)
      }
      refusedFile(RR, JR) {
        var GR, yR;
        if (null === (GR = this.onTaken) || void 0 === GR || GR.call(this, RR, !1), this.refusedPack.set(RR, JR.url), this.pending.has(RR)) return void(null === (yR = this.onPackFileFailed) || void 0 === yR || yR.call(this, RR, eR(JR.url)));
        const tR = this.UK(RR, JR.attempt.ask);
        tR.recheck = JR.attempt.recheck, this.afterRefusal(RR, tR, JR.url)
      }
      async afterRefusal(RR, JR, GR) {
        var yR;
        let tR;
        try {
          tR = await this.wanted(RR)
        } catch (uR) {
          return void(this.pending.get(RR) === JR && this.giveUp(RR, JR, GR, uR))
        }
        this.pending.get(RR) === JR && (tR.inPlaceOf !== GR ? JR.ask || (null !== (yR = tR.url) && void 0 !== yR ? yR : void 0) !== this.drawn.get(RR) ? this.fetch(RR, JR, tR.url, tR.inPlaceOf) : this.pending.delete(RR) : this.fallBack(RR, JR, GR, eR(GR)))
      }
      UK(RR, JR) {
        const GR = {
          url: void 0,
          ask: JR,
          Qq: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(RR, GR);
        for (let yR = this.ready.length - 1; yR >= 0; yR--) this.ready[yR].file === RR && this.ready.splice(yR, 1);
        return GR
      }
      async wanted(RR) {
        const JR = await this.files.url(RR);
        return null !== JR && this.refusedPack.get(RR) === JR ? {
          url: await this.files.shippedUrl(RR),
          inPlaceOf: JR
        } : {
          url: JR,
          inPlaceOf: void 0
        }
      }
      fetchWanted(RR, JR) {
        const GR = this.files.url(RR);
        GR instanceof Promise ? GR.then((GR => {
          this.fetchFound(RR, JR, GR)
        }), (GR => {
          this.pending.get(RR) === JR && this.giveUp(RR, JR, "", GR)
        })) : this.fetchFound(RR, JR, GR)
      }
      fetchFound(RR, JR, GR) {
        null !== GR && this.refusedPack.get(RR) === GR ? Promise.resolve(this.files.shippedUrl(RR)).then((yR => {
          this.fetch(RR, JR, yR, GR)
        }), (yR => {
          this.pending.get(RR) === JR && this.giveUp(RR, JR, GR, yR)
        })) : this.fetch(RR, JR, GR)
      }
      fetch(RR, JR, GR, yR) {
        this.pending.get(RR) === JR && (JR.url = GR, JR.inPlaceOf = yR, null !== GR ? this.load(RR, JR, GR) : this.buildFile(RR, JR, "", VR))
      }
      load(RR, JR, GR) {
        const yR = this.tK.get(RR);
        (null === yR || void 0 === yR ? void 0 : yR.url) !== GR ? this.fetchFile(GR).then((yR => {
          var tR, uR;
          this.pending.get(RR) === JR && (this.keptTotal += yR.byteLength - (null !== (tR = null === (uR = this.tK.get(RR)) || void 0 === uR ? void 0 : uR.glb.byteLength) && void 0 !== tR ? tR : 0), this.tK.set(RR, {
            url: GR,
            glb: yR
          }), this.buildFile(RR, JR, GR, yR))
        }), (yR => {
          this.pending.get(RR) === JR && this.fallBack(RR, JR, GR, yR)
        })) : this.buildFile(RR, JR, GR, yR.glb)
      }
      buildFile(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const ZR = yR.byteLength > 0 && (0, uR.h)(GR) ? (RR | uR.b) >>> 0 : RR;
        this.queueRecord(RR, JR, GR, yR, this.build(ZR, yR), tR)
      }
      queueRecord(RR, JR, GR, yR, uR, qR) {
        uR.then((uR => {
          if (this.pending.get(RR) !== JR) return;
          if (tR.w + (0, tR.ve)(uR.byteLength) > tR.Nc) return void this.ringRefused(RR, JR, GR, new KR(`${aR(GR)}'s record is ${uR.byteLength-ZR.e} bytes, past the cmd ring's ${tR.Nc}`), qR);
          const iR = {
            file: RR,
            url: GR,
            payload: uR,
            glb: yR,
            attempt: JR
          };
          qR ? this.ready.unshift(iR) : this.ready.push(iR)
        }))
      }
      async fallBack(RR, JR, GR, yR) {
        var tR;
        let uR = null,
          ZR = yR;
        try {
          uR = await this.files.shippedUrl(RR)
        } catch (qR) {
          ZR = qR
        }
        this.pending.get(RR) === JR && (null !== uR && uR !== GR ? (null === (tR = this.onPackFileFailed) || void 0 === tR || tR.call(this, RR, yR), JR.ask || this.drawn.get(RR) !== uR ? (JR.url = uR, JR.inPlaceOf = GR, this.load(RR, JR, uR)) : this.pending.delete(RR)) : this.giveUp(RR, JR, GR, ZR))
      }
      ringRefused(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, uR.h)(GR) ? this.fallBack(RR, JR, GR, yR): this.giveUp(RR, JR, GR, yR, tR)
      }
      giveUp(RR, JR, GR, tR) {
        let uR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: RR,
          url: aR(GR),
          error: tR,
          startup: this.startupLeft.has(RR)
        }), JR.ask || !this.drawn.has(RR) ? (0, yR.L)(tR) ? this.queueRecord(RR, JR, GR, VR, Promise.resolve((0, ZR.m)(RR, (0, qR.k)(tR))), uR) : this.buildFile(RR, JR, GR, VR, uR) : this.pending.delete(RR)
      }
      async resendIfChanged(RR) {
        var JR;
        if (0 !== (RR & uR.d)) return;
        let GR;
        try {
          GR = await this.wanted(RR)
        } catch {
          return
        }(null !== (JR = GR.url) && void 0 !== JR ? JR : void 0) === this.drawn.get(RR) || this.pending.has(RR) || this.written.has(RR) || this.fetch(RR, this.UK(RR, !1), GR.url, GR.inPlaceOf)
      }
      drain(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === RR) return;
        let GR = 0,
          yR = 0;
        for (; yR < this.ready.length && GR < 262144;) {
          const qR = this.ready[yR];
          if (this.written.has(qR.file)) {
            yR++;
            continue
          }
          const VR = this.nextSeq;
          new DataView(qR.payload.buffer, qR.payload.byteOffset, qR.payload.byteLength).setUint32(ZR.h, VR, !0);
          const wR = qR.attempt.Qq && qR.glb.byteLength > 0 && this.drawn.get(qR.file) === qR.url;
          if (RR(iR, wR ? 1 : 0, qR.payload)) {
            if (this.nextSeq = VR >= fR - 1 ? 1 : VR + 1, this.ready.splice(yR, 1), GR += qR.payload.byteLength, this.pending.delete(qR.file), this.startupLeft.delete(qR.file), this.written.set(qR.file, {
                seq: VR,
                url: qR.url,
                empty: 0 === qR.glb.byteLength,
                attempt: qR.attempt
              }), qR.glb.byteLength > 0) try {
              var tR;
              null === (tR = this.onWritten) || void 0 === tR || tR.call(this, qR.file, qR.glb)
            } catch (uR) {
              console.warn("ModelFeed: reading the file's images failed", uR)
            }
          } else {
            if (null === JR || 0 === qR.glb.byteLength || JR(qR.payload.byteLength)) return;
            this.ready.splice(yR, 1);
            const RR = new KR(`${aR(qR.url)}'s record is ${qR.payload.byteLength-ZR.e} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(qR.file, qR.attempt, qR.url, RR, !0)
          }
        }
      }
    }

    function eR(RR) {
      return new wR(`presentation refused ${aR(RR)}`)
    }

    function aR(RR) {
      return RR.startsWith("data:") ? `${RR.slice(0,Math.min(Math.max(RR.indexOf(","),5),64))},...` : RR
    }
  },
  42352: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      d: () => uR,
      f: () => VR,
      h: () => qR,
      j: () => fR,
      m: () => iR
    });
    var yR = GR(2457),
      tR = GR(4479);
    const uR = 2147483648,
      ZR = 1073741824;

    function qR(RR) {
      return RR.startsWith("data:")
    }

    function iR(RR) {
      let {
        onTableFailed: JR,
        packUrl: GR
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const yR = fR();
      yR.catch((RR => {
        null === JR || void 0 === JR || JR(RR)
      }));
      const tR = async JR => (await yR).fileUrl((JR & ~uR) >>> 0, RR);
      return {
        startup: [],
        url: async RR => {
          if (GR && 0 === (RR & uR)) {
            const JR = await yR,
              tR = JR.filePackName(RR),
              uR = null === tR || "lifeform" === JR.fileSource(RR) ? null : GR(tR);
            if (null !== uR) return uR
          }
          return tR(RR)
        },
        shippedUrl: tR
      }
    }

    function fR() {
      return GR.e(50).then((() => GR(45021)))
    }
    async function VR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return RR.startsWith("data:") ? (0, tR.c)(RR.slice(RR.indexOf(",") + 1), JR) : (0, yR.B)(RR, {
        spare: JR
      })
    }
  },
  42357: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR,
      h: () => fR,
      k: () => eR,
      m: () => wR,
      q: () => KR,
      t: () => rR
    });
    const yR = 826427981,
      tR = 1,
      uR = 2,
      ZR = 44,
      qR = 58,
      iR = 8,
      fR = 4;

    function VR(RR, JR, GR) {
      const tR = (new TextEncoder).encode(GR),
        uR = iR + 4 * (JR.length + 2),
        ZR = new Uint8Array(uR + (tR.byteLength + 3 & -4)),
        qR = new DataView(ZR.buffer);
      return qR.setUint32(0, RR, !0), qR.setUint32(iR, yR, !0), JR.forEach(((RR, JR) => {
        qR.setUint32(iR + 4 * (JR + 1), RR, !0)
      })), qR.setUint32(uR - 4, tR.byteLength, !0), ZR.set(tR, uR), ZR
    }

    function KR(RR, JR) {
      return VR(RR, [uR], JR)
    }

    function wR(RR, JR) {
      return VR(RR, [tR, qR], JR)
    }

    function rR(RR, JR) {
      return VR(RR, [tR, ZR], JR)
    }

    function eR(RR) {
      const JR = iR;
      if (RR.byteLength < JR + 12) return !1;
      const GR = new DataView(RR.buffer, RR.byteOffset, RR.byteLength);
      return GR.getUint32(JR, !0) === yR && GR.getUint32(JR + 4, !0) === tR && GR.getUint32(JR + 8, !0) === ZR
    }
  },
  42239: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      f: () => VR,
      j: () => ZR,
      n: () => iR
    });
    var yR = GR(37183);
    class tR extends Error {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${RR}: the module trapped${GR?" in an earlier call":""}: ${String(JR)}`, {
          cause: JR
        }), this.site = RR, this.trap = JR, this.earlier = GR, this.name = "ModuleTrapError", JR instanceof Error && void 0 !== JR.stack && (this.stack = `${this.name}: ${this.message}\n${JR.stack}`)
      }
    }
    const uR = new WeakMap;

    function ZR(RR) {
      return uR.has(RR)
    }

    function qR(RR, JR) {
      uR.has(RR) || uR.set(RR, JR)
    }

    function iR(RR, JR) {
      return !!(0, yR.i)(JR) && (qR(RR, JR), !0)
    }
    const fR = [
      ["error", RR => RR.error],
      ["unhandledrejection", RR => RR.reason]
    ];

    function VR(RR, JR, GR) {
      let ZR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return uR.has(RR) ? Promise.reject(new tR(JR, uR.get(RR), !0)) : new Promise(((uR, iR) => {
        const VR = GR => {
            qR(RR, GR), rR(), iR(new tR(JR, GR))
          },
          KR = RR => {
            RR instanceof WebAssembly.RuntimeError ? VR(RR) : (rR(), iR(RR))
          },
          wR = fR.map((RR => {
            let [JR, GR] = RR;
            return [JR, RR => {
              const JR = GR(RR);
              (0, yR.i)(JR) && VR(JR)
            }]
          })),
          rR = () => {
            for (const [RR, JR] of wR) null === ZR || void 0 === ZR || ZR.removeEventListener(RR, JR)
          };
        for (const [RR, JR] of wR) null === ZR || void 0 === ZR || ZR.addEventListener(RR, JR);
        let eR;
        try {
          eR = GR()
        } catch (aR) {
          return void KR(aR)
        }
        eR.then((RR => {
          rR(), uR(RR)
        }), KR)
      }))
    }
  },
  42281: (RR, JR, GR) => {
    GR.d(JR, {
      A: () => OR,
      D: () => NR,
      H: () => kR,
      J: () => YR,
      M: () => cR,
      O: () => bR,
      Q: () => HR,
      S: () => QR,
      W: () => oR,
      _: () => SR,
      bb: () => IR,
      c: () => gR,
      db: () => DR,
      fb: () => FR,
      g: () => BR,
      j: () => zR,
      n: () => PR,
      r: () => MR,
      t: () => pR,
      x: () => CR
    });
    var yR = GR(216),
      tR = GR(25),
      uR = GR(4913),
      ZR = GR(132),
      qR = GR(350),
      iR = GR(46),
      fR = GR(327),
      VR = GR(42230),
      KR = GR(42247),
      wR = GR(37622),
      rR = GR(42283),
      eR = (GR(42265), GR(42374)),
      aR = GR(42306),
      LR = GR(42255);
    const nR = "wasmJoinBuild";
    let UR = null,
      WR = null,
      AR = null;

    function CR(RR) {
      AR = RR
    }
    let XR = !1;

    function MR() {
      XR = !0
    }

    function BR() {
      return XR
    }
    let lR = !1;

    function pR() {
      lR = !0
    }

    function gR() {
      return lR
    }

    function bR() {
      return AR
    }
    let vR = null;

    function OR(RR) {
      vR = RR, (0, qR.b)(RR)
    }
    const xR = "wasmClientRenderLost";

    function NR() {
      iR.k.setItem(xR, !0)
    }

    function DR() {
      return !0 === iR.k.getItem(xR)
    }

    function HR() {
      return vR
    }

    function oR() {
      if (null === UR) {
        iR.i.removeItem("wasmLastPick"), iR.i.removeItem("wasmGuessVerdict");
        try {
          localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
        } catch {}(0, qR.g)(), UR = (0, fR.k)().then((() => (0, VR.A)(rR.e))).then((RR => (null === RR || (0, VR.o)(RR) || (WR = eR.d[RR.backend], tR.d.followGameGpu("webgpu" === RR.backend ? RR.adapter : null), "webgpu" === RR.backend && (0, aR.g)()), RR)))
      }
      return UR
    }

    function cR() {
      return WR
    }

    function PR(RR) {
      return RR ? RR.load() : Promise.resolve().then((function() {
        var RR = new Error("Cannot find module '@bloxd/wasm/client'");
        throw RR.code = "MODULE_NOT_FOUND", RR
      })).then((RR => RR.bloxdWasmClient))
    }

    function IR(RR) {
      iR.i.setItem(nR, RR)
    }

    function mR(RR, JR) {
      const GR = iR.i.getItem(nR);
      return null === GR ? function(RR) {
        if (void 0 !== (0, yR.b)(RR, "webgpu") && (0, VR.y)()) return "webgpu";
        return !1 === (0, ZR.t)() ? "webgl1" : "webgl"
      }(RR) : "none" === GR ? null : "string" === typeof GR && void 0 !== (0, yR.b)(RR, GR) ? GR : (JR && console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(GR)}, is none of this client's: guessing WebGL2's`), "webgl")
    }
    async function zR() {
      if (null === rR.e) return PR(null);
      const RR = mR(rR.e, !0);
      return null === RR ? null : rR.e[RR]()
    }

    function SR() {
      null === UR && null !== rR.e && "webgl" === mR(rR.e, !1) && (0, LR.b)()
    }
    let jR = null,
      dR = null,
      ER = null;

    function YR() {
      return jR ??= oR().then((async RR => {
        const JR = null !== RR && !(0, VR.o)(RR),
          GR = {
            indirectHangs: JR && await (0, VR.G)(RR, window.location.search),
            storagePullBreaks: JR && (0, VR.Q)(RR, window.location.search),
            splitPassBreaks: JR && (0, VR.N)(RR, window.location.search),
            earlySky: JR && (0, VR.D)(RR, window.location.search),
            instancedTerrain: JR ? (0, VR.I)(RR, window.location.search) : null,
            cellLight: JR && await (0, uR.i)("cellLight"),
            framesAhead: (0, VR.j)(window.location.search, JR ? RR : null),
            webGpuRestores: !JR || (0, VR.R)(RR, (0, wR.e)()),
            bufferCopiesCrash: JR && (0, VR.C)(RR, window.location.search),
            firstVertex: JR ? (0, KR.d)(RR.backend, window.location.search) : void 0
          };
        return dR = GR.indirectHangs, ER = !GR.webGpuRestores, GR
      })), jR
    }

    function kR() {
      return dR
    }

    function QR() {
      return ER
    }
    async function FR() {
      const RR = null === UR ? null : await UR;
      return null !== RR && (0, VR.o)(RR) && (UR = null, jR = null, dR = null, ER = null), oR()
    }
  },
  42379: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR,
      h: () => fR
    });
    var yR = GR(37213),
      tR = GR(42212),
      uR = GR(5191),
      ZR = GR(327),
      qR = GR(37622);
    async function iR(RR, JR) {
      return await Promise.all([(0, uR.h)(void 0, !0), (0, ZR.k)()]), (0, yR.r)(RR, tR.d, {
        ...JR,
        memoryMaximumBytes: (0, qR.r)()
      })
    }
    async function fR() {
      return await (0, uR.h)(void 0, !0), (0, yR.s)((0, qR.r)())
    }
  },
  42247: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      d: () => uR
    });
    var yR = GR(279);
    const tR = "provokingVertex";

    function uR(RR, JR) {
      if ("webgl" !== RR) return;
      const GR = new URLSearchParams(JR).get(tR);
      return "first" === GR || "last" !== GR && null
    }
    const ZR = new WeakSet;

    function qR(RR, JR) {
      var GR, tR;
      let uR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (GR = null === (tR = globalThis.navigator) || void 0 === tR ? void 0 : tR.userAgent) && void 0 !== GR ? GR : "";
      try {
        !1 === JR || ZR.has(RR) || (ZR.add(RR), RR.addEventListener("webglcontextrestored", (() => {
          qR(RR, JR, uR)
        })));
        const GR = RR.getContext("webgl2");
        if (null === GR || GR.isContextLost()) return !1;
        if (!(null !== JR && void 0 !== JR ? JR : function(RR, JR) {
            var GR, tR;
            const uR = RR.getExtension("WEBGL_debug_renderer_info");
            if (null === uR) return !1;
            return function(RR, JR, GR) {
              return GR.includes("Windows") && "adreno_6" === (0, yR.k)(RR, JR)
            }(String(null !== (GR = RR.getParameter(uR.UNMASKED_VENDOR_WEBGL)) && void 0 !== GR ? GR : ""), String(null !== (tR = RR.getParameter(uR.UNMASKED_RENDERER_WEBGL)) && void 0 !== tR ? tR : ""), JR)
          }(GR, uR))) return !1;
        const tR = GR.getExtension("WEBGL_provoking_vertex");
        return null !== tR && (tR.provokingVertexWEBGL(tR.FIRST_VERTEX_CONVENTION_WEBGL), console.info("WebGL2 draws flat varyings from the first vertex (WEBGL_provoking_vertex)"), !0)
      } catch (iR) {
        return console.warn("WebGL2's provoking vertex couldn't be set: flat varyings draw from the last vertex", iR), !1
      }
    }
  },
  42259: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => fR,
      e: () => qR,
      i: () => VR,
      l: () => ZR
    });
    var yR = GR(371),
      tR = GR(704);
    let uR;

    function ZR(RR) {
      var JR;
      const GR = uR;
      return uR = void 0, null !== (JR = iR(RR)) && void 0 !== JR ? JR : GR
    }

    function qR(RR) {
      try {
        const JR = iR(RR);
        void 0 !== JR && (uR = JR, (0, tR.h)((0, yR.q)(JR.reason, JR.message)))
      } catch (JR) {
        console.warn("Couldn't keep the WebGPU loss's cause", JR)
      }
    }

    function iR(RR) {
      var JR;
      const GR = null === RR || void 0 === RR || null === (JR = RR.TZR) || void 0 === JR ? void 0 : JR.call(RR),
        yR = null === RR || void 0 === RR ? void 0 : RR.FZR();
      if (void 0 === yR) return;
      const tR = new Error(yR);
      return void 0 !== GR && (tR.reason = GR), tR
    }

    function fR(RR) {
      return RR instanceof Error ? RR : void 0
    }

    function VR(RR, JR) {
      return "lost" !== RR && "frames_refused" !== RR ? {} : (0, yR.q)("frames_refused" === RR ? RR : null === JR || void 0 === JR ? void 0 : JR.reason, null === JR || void 0 === JR ? void 0 : JR.message)
    }
  },
  42300: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => gR,
      c: () => MR,
      e: () => XR,
      f: () => CR,
      h: () => pR,
      l: () => xR,
      p: () => OR,
      r: () => NR
    });
    var yR = GR(5685),
      tR = GR(42306),
      uR = GR(34996);
    const ZR = 1,
      qR = 18,
      iR = 19,
      fR = 20,
      VR = 21,
      KR = 22,
      wR = 23,
      rR = {
        [ZR]: "link",
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
        [qR]: "retry linked",
        [iR]: "fallback linked",
        [fR]: "fallback failed",
        [VR]: "link stalled",
        [KR]: "link left pending",
        [wR]: "moved to general",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function eR(RR, JR, GR) {
      return RR === qR ? "program retry" : RR === ZR ? "program link" : RR === VR ? "program link stall" : RR === KR ? "program link pending" : RR === iR || RR === fR || RR === wR ? `program ${JR} ${GR}` : "program"
    }
    const aR = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain",
        5: "scene warm stuck"
      },
      LR = {
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
      nR = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      UR = {
        11: "none read after view",
        12: "some read after view"
      },
      WR = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld",
        ...UR
      },
      AR = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function CR(RR, JR) {
      return RR === yR.p.RenderSerialLinks && void 0 !== UR[JR]
    }

    function XR(RR, JR) {
      return RR === yR.p.RenderInternal && (JR >>> 8 & 255) === KR
    }

    function MR(RR, JR) {
      return RR === yR.p.RenderSerialLinks && void 0 !== AR[15 & JR]
    }
    const BR = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function lR(RR, JR) {
      var GR;
      return null !== (GR = RR[JR]) && void 0 !== GR ? GR : (0, uR.e)(JR)
    }

    function pR() {
      return (0, uR.e)((0, tR.e)())
    }

    function gR(RR, JR) {
      switch (RR) {
        case yR.p.RenderSceneRowNotDrawn:
          return {
            words: ` ${lR(LR,JR)}`, instance: String(JR), group: String(RR)
          };
        case yR.p.RenderChunkMeshNotDrawn: {
          const GR = 0 === (128 & JR) ? "" : " shortage",
            yR = JR >>> 8;
          return {
            words: ` ${lR(nR,127&JR)}${GR}${0===yR?"":` kind ${(0,uR.e)(yR)}`}`,
            instance: String(JR),
            group: String(RR)
          }
        }
        case yR.p.RenderInternal: {
          const GR = lR(aR, 255 & JR),
            yR = JR >>> 8 & 255;
          if (0 === yR) return {
            words: ` ${GR}`,
            instance: String(JR),
            group: String(RR)
          };
          const tR = lR(rR, yR),
            ZR = JR >>> 16;
          return {
            words: ` ${GR} ${tR} program ${(0,uR.e)(ZR)}`,
            instance: `${GR} ${tR} ${ZR}`,
            group: eR(yR, tR, GR),
            gpuDetails: {
              programFailure: tR,
              program: String(ZR)
            }
          }
        }
        case yR.p.RenderSerialLinks: {
          if (MR(RR, JR)) {
            const RR = function(RR) {
              const JR = (JR, GR) => (0, uR.e)(RR >>> JR & (1 << GR) - 1),
                GR = RR >>> 30 & 1 ? " restored" : "";
              return `link census ${AR[15&RR]} linked ${JR(22,8)} failed ${JR(4,6)} retried ${JR(10,6)} fallback ${JR(16,6)}${GR}`
            }(JR);
            return {
              words: ` ${RR}`,
              instance: String(15 & JR),
              group: "link census",
              gpuDetails: {
                linkCensus: RR
              }
            }
          }
          const GR = lR(WR, JR);
          return {
            words: ` ${GR}`,
            instance: String(JR),
            group: String(RR),
            gpuDetails: {
              serialLinks: GR
            }
          }
        }
        case yR.p.RenderGlErrorAfterRestore: {
          const GR = lR(BR, 65535 & JR),
            yR = JR >>> 16,
            tR = 65535 !== yR;
          return {
            words: ` ${GR}${tR?` program ${(0,uR.e)(yR)}`:""}`,
            instance: String(JR),
            group: String(RR),
            gpuDetails: tR ? {
              glError: GR,
              program: String(yR)
            } : {
              glError: GR
            }
          }
        }
        default:
          return null
      }
    }
    const bR = 2,
      vR = new Map;

    function OR(RR) {
      let {
        group: JR,
        instance: GR
      } = RR, yR = vR.get(JR);
      return void 0 === yR && (yR = [], vR.set(JR, yR)), !yR.includes(GR) && (yR.length >= bR || (yR.push(GR), !1))
    }

    function xR() {
      return vR.size > 0
    }

    function NR() {
      vR.clear()
    }
  },
  42283: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR,
      e: () => uR
    });
    var yR = GR(42288);
    const tR = new WeakSet;
    const uR = {
        webgpu: async () => (function() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis.GPUAdapter;
          if (void 0 === RR || tR.has(RR.prototype)) return;
          tR.add(RR.prototype);
          const JR = RR.prototype.requestDevice;
          RR.prototype.requestDevice = function(RR) {
            var GR;
            const tR = null !== (GR = null === RR || void 0 === RR ? void 0 : RR.requiredLimits) && void 0 !== GR ? GR : {},
              uR = Object.keys(tR).filter((RR => !(RR in this.limits)));
            if (0 === uR.length) return JR.call(this, RR);
            const ZR = Object.fromEntries(Object.entries(tR).filter((RR => {
              let [JR] = RR;
              return JR in this.limits
            })));
            return console.warn(`WebGPU: dropped required limits this browser doesn't name: ${uR.join(", ")}`), (0, yR.reportDroppedRequiredLimits)(uR), JR.call(this, {
              ...RR,
              requiredLimits: ZR
            })
          }
        }(), (await GR.e(8).then((() => GR(54594)))).bloxdWasmWebgpu),
        webgl: async () => (await GR.e(6).then((() => GR(54605)))).bloxdWasmWebgl,
        webgl1: async () => (await GR.e(7).then((() => GR(54617)))).bloxdWasmWebgl1
      },
      ZR = async () => (await GR.e(5).then((() => GR(54630)))).compileAnimationPackInWasm
  },
  42335: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => nR,
      g: () => LR,
      i: () => CR
    });
    var yR = GR(7786),
      tR = GR(32),
      uR = GR(5064),
      ZR = GR(5685),
      qR = GR(7777),
      iR = GR(42342);

    function fR(RR, JR) {
      const GR = (0, qR.d)(JR.variants);
      return RR.setShaderPack(GR.variantFlags, GR.hooks, GR.moduleCodes, (0, iR.y)(JR.layers), iR.k[JR.policy], JR.keepCircleShadows)
    }
    const VR = 0,
      KR = 1,
      wR = 2,
      rR = "shaderPack:failedToCompile",
      eR = new Set(["no_webgpu_api", "no_adapter", "compatibility_held", "software_adapter", "adapter_error", "start_no_adapter"]),
      aR = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "gpu_wasm_arm"]);

    function LR(RR, JR, GR) {
      var yR;
      const tR = null !== (yR = null === RR || void 0 === RR ? void 0 : RR.reason) && void 0 !== yR ? yR : "none";
      return eR.has(tR) ? {
        messageKey: JR ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === tR && "override" === (null === RR || void 0 === RR ? void 0 : RR.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: aR.has(tR) && !GR ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class nR extends Error {
      constructor(RR) {
        super(`the shader pack can't run in this game: ${RR}`), this.messageKey = RR, this.name = "ShaderPackJoinError"
      }
    }
    const UR = "strict";
    class WR {
      constructor(RR) {
        this.deps = RR, this.pagePack = void 0, this.loaded = null, this.policy = UR, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = RR.load().catch((JR => (RR.warn("the shader pack could not load: the game draws without it", JR), {
          status: "none"
        }))).then((RR => (this.loaded = RR, "active" === RR.status && (this.handOverToPreviews(RR), null !== RR.harnessPolicy && (this.policy = RR.harnessPolicy, this.handOver())), RR)))
      }
      async join(RR) {
        this.leave();
        const JR = this.game,
          [GR, tR] = await Promise.all([this.pagePack, this.policyOf(RR)]);
        if (JR !== this.game || "none" === GR.status) return null;
        const uR = "active" === GR.status ? GR.pack.variants : GR.variants,
          ZR = (0, yR.i)(uR, tR);
        if (ZR && "active" === GR.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (ZR) {
          const RR = this.cantRun(GR, tR);
          if (null !== RR) return RR
        } else if ("blocked" === GR.status || null === this.deps.core) return null;
        return this.policy = tR, this.handOver(), ZR && this.refused ? rR : (this.joined = !0, this.offInThisGame = !ZR, null)
      }
      async replay(RR) {
        const JR = await this.join(RR);
        null === JR ? this.playable() : this.deps.failInGame(JR)
      }
      cantRun(RR, JR) {
        const {
          core: GR,
          noWebGpu: yR
        } = this.deps;
        if ("blocked" === RR.status) {
          return "shaderPack:failedUnchecked" === RR.messageKey && null === GR && yR.noAdapter ? yR.messageKey : RR.messageKey
        }
        return this.refused || this.failedPolicies.has(JR) ? rR : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var RR;
        return this.runsInJoinedGame() && "active" === (null === (RR = this.loaded) || void 0 === RR ? void 0 : RR.status) ? function(RR, JR) {
          const GR = RR.filter((RR => (0, yR.i)([RR], JR))),
            tR = RR => GR.some((JR => JR[RR]));
          return {
            sceneDepth: tR("sceneDepth"),
            sunShadow: tR("sunShadow"),
            airShadow: tR("airShadow")
          }
        }(this.loaded.pack.variants, this.policy) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(rR) : (null !== this.couldntRun ? this.notify(uR.c, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.policy) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(RR) {
        for (const {
            code: JR,
            detail: GR
          }
          of RR)
          if (JR === ZR.p.RenderShaderPackNotRun) switch (255 & GR) {
            case VR:
              this.refused = !0, this.failed();
              break;
            case KR:
              this.failedPolicies.add(this.policy), this.failed();
              break;
            case wR:
              this.failedModelPolicies.add(this.policy), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(rR) : this.failedWhileJoining = !0)
      }
      fail(RR) {
        this.leave(), this.deps.failInGame(RR)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(RR, JR) {
        const GR = this.game;
        this.deps.notify(RR, (() => GR === this.game && this.joined), JR)
      }
      handOver() {
        var RR;
        const {
          core: JR
        } = this.deps;
        null !== JR && "active" === (null === (RR = this.loaded) || void 0 === RR ? void 0 : RR.status) && (fR(JR, {
          ...this.loaded.pack,
          policy: this.policy
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(RR) {
        let {
          pack: JR,
          harnessPolicy: GR
        } = RR;
        const {
          previews: yR
        } = this.deps;
        null !== yR && fR(yR, {
          ...JR,
          policy: null !== GR && void 0 !== GR ? GR : UR
        })
      }
      policyOf(RR) {
        return this.deps.policyOf(RR).catch((RR => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", RR), UR)))
      }
    }
    const AR = "wasmShaderPackNotice";

    function CR(RR, JR, GR, yR) {
      return tR.n.subscribe(AR, (RR => {
        let {
          translationKey: JR,
          stillCurrent: GR,
          reasonKey: yR
        } = RR;
        GR() && tR.n.JK("chat", (0, uR.f)(JR, yR))
      })), new WR({
        load: XR,
        policyOf: MR,
        core: RR,
        previews: JR,
        noWebGpu: GR,
        notify: (RR, JR, GR) => {
          const yR = {
            translationKey: RR,
            stillCurrent: JR,
            reasonKey: GR
          };
          tR.n.JK(AR, yR, !0)
        },
        failInGame: RR => {
          tR.n.JK(uR.d, RR)
        },
        warn: yR
      })
    }
    async function XR() {
      const [{
        shaderPackPage: RR,
        harnessShaderPackMode: JR
      }, {
        shaderPackTextures: yR
      }] = await Promise.all([GR.e(138).then((() => GR(40495))), GR.e(139).then((() => GR(7773)))]), tR = await RR.load();
      return "active" !== tR.status ? tR : {
        status: "active",
        pack: {
          variants: tR.pack.variants,
          layers: yR().layers,
          keepCircleShadows: tR.pack.keepCircleShadows
        },
        harnessPolicy: JR()
      }
    }
    async function MR(RR) {
      var JR;
      const [{
        shaderPackPage: yR,
        harnessShaderPackMode: tR
      }, {
        getShaderPackPolicy: uR
      }] = await Promise.all([GR.e(138).then((() => GR(40495))), GR.e(108).then((() => GR(44974)))]);
      return await yR.load(), null !== (JR = tR()) && void 0 !== JR ? JR : uR(RR)
    }
  },
  42364: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      g: () => LR,
      k: () => iR,
      o: () => fR,
      s: () => VR,
      w: () => wR
    });
    var yR = GR(37256),
      tR = GR(42369);
    const uR = "atlas:",
      ZR = 3e4;
    class qR extends Error {
      constructor(RR, JR) {
        super(`fetching ${RR} answered HTTP ${JR}`), this.url = RR, this.status = JR, this.name = "TerrainTextureFetchError"
      }
    }

    function iR(RR) {
      if (!RR.startsWith(uR)) return null;
      const JR = Number(RR.slice(uR.length));
      return Number.isInteger(JR) && JR >= 0 ? JR : null
    }
    async function fR() {
      const RR = await GR.e(234).then((() => GR(35257)));
      return {
        atlasSheets: RR.blockAtlasUrls,
        texture: JR => {
          var GR, yR, uR;
          return null !== (GR = null !== (yR = null !== (uR = RR.animatedBlockTextures[JR]) && void 0 !== uR ? uR : RR.rotatedBlockTextures[JR]) && void 0 !== yR ? yR : tR.b[JR]) && void 0 !== GR ? GR : null
        }
      }
    }
    async function VR(RR) {
      const JR = new AbortController,
        GR = setTimeout((() => {
          JR.abort(new DOMException(`${RR} took over ${ZR} ms`, "TimeoutError"))
        }), ZR);
      let yR;
      try {
        const GR = await fetch(RR, {
          signal: JR.signal
        });
        if (!GR.ok) throw new qR(RR, GR.status);
        yR = await GR.blob()
      } finally {
        clearTimeout(GR)
      }
      const tR = await createImageBitmap(yR, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return wR(tR)
      } finally {
        tR.close()
      }
    }
    const KR = 8192;

    function wR(RR) {
      const {
        width: JR,
        height: GR
      } = RR, tR = Math.max(1, Math.min(GR, KR)), uR = (0, yR.e)(JR, tR, {
        willReadFrequently: !0
      });
      if (!uR) throw new Error("no 2D context to read the texture back");
      uR.globalCompositeOperation = "copy";
      const ZR = new Uint8Array(JR * GR * 4);
      for (let yR = 0; yR < GR; yR += tR) {
        const qR = Math.min(tR, GR - yR);
        uR.drawImage(RR, 0, yR, JR, qR, 0, 0, JR, qR), ZR.set(uR.getImageData(0, 0, JR, qR).data, yR * JR * 4)
      }
      return {
        width: JR,
        height: GR,
        pixels: ZR
      }
    }
    async function rR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VR;
      const yR = [],
        tR = await Promise.all(RR.map((async RR => {
          var tR, ZR;
          const qR = null !== (tR = null === (ZR = JR.decoded) || void 0 === ZR ? void 0 : ZR.call(JR, RR)) && void 0 !== tR ? tR : null,
            fR = null === qR ? function(RR, JR) {
              if (RR.startsWith(uR)) {
                var GR;
                const yR = iR(RR);
                return null === yR ? null : null !== (GR = JR.atlasSheets[yR]) && void 0 !== GR ? GR : null
              }
              return JR.texture(RR)
            }(RR, JR) : null,
            VR = null !== qR && void 0 !== qR ? qR : null === fR ? null : GR(fR);
          if (null === VR) return yR.push({
            name: RR,
            url: fR,
            error: new Error(`no URL for terrain texture ${RR}`)
          }), null;
          try {
            const JR = await VR;
            if (JR.pixels.byteLength !== JR.width * JR.height * 4) throw new Error(`decoded ${JR.pixels.byteLength} bytes for ${JR.width}x${JR.height} texels`);
            return {
              name: RR,
              texture: JR
            }
          } catch (KR) {
            return yR.push({
              name: RR,
              url: fR,
              error: KR
            }), null
          }
        }))),
        ZR = tR.filter((RR => null !== RR)),
        qR = new Uint32Array(2 * ZR.length);
      ZR.forEach(((RR, JR) => {
        let {
          texture: GR
        } = RR;
        qR[2 * JR] = GR.width, qR[2 * JR + 1] = GR.height
      }));
      return {
        handOver: {
          names: ZR.map((RR => {
            let {
              name: JR
            } = RR;
            return JR
          })),
          textures: ZR.map((RR => {
            let {
              texture: JR
            } = RR;
            return JR.pixels
          })),
          sizes: qR
        },
        failures: yR
      }
    }
    const eR = [2e3, 1e4, 3e4, 6e4, 12e4];

    function aR() {}
    class LR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = RR, this.retryMs = JR, this.keepBelow = GR, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fR,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const yR = ++this.started,
          tR = {
            decode: GR.decode,
            wholeAtlas: GR.wholeAtlas
          };
        return this.loadAndHandOver(JR, tR, RR, (() => {
          var RR;
          return yR < this.landed || !1 === (null === (RR = GR.wanted) || void 0 === RR ? void 0 : RR.call(GR))
        }), {
          onTaken: (RR, GR) => {
            this.landed = yR, this.current = {
              mine: yR,
              sources: JR,
              load: tR,
              tK: RR,
              failed: GR
            }
          }
        })
      }
      restore(RR) {
        var JR;
        const GR = this.current;
        if (null === GR) return Promise.resolve(null);
        if ((null === (JR = this.restoring) || void 0 === JR ? void 0 : JR.mine) === GR.mine) return this.restoring.done;
        const yR = {
          mine: GR.mine,
          done: this.restoreLanded(GR, RR).finally((() => {
            this.restoring === yR && (this.restoring = null)
          }))
        };
        return this.restoring = yR, yR.done
      }
      async restoreLanded(RR, JR) {
        const GR = () => this.landed !== RR.mine,
          {
            tK: yR
          } = RR;
        if (null !== yR) return this.stopped() ? null : this.core.setTerrainTextures(yR.names, yR.textures, yR.sizes);
        let tR = JR;
        for (let uR = 0;; uR++) {
          const JR = this.retryMs.at(uR),
            yR = {
              allOrNothingExcept: void 0 === JR ? void 0 : RR.failed
            },
            ZR = await this.loadAndHandOver(RR.sources, RR.load, tR, GR, yR);
          if (!1 !== ZR || void 0 === JR || this.stopped()) return ZR;
          if (tR = aR, await new Promise((RR => {
              setTimeout(RR, JR)
            })), GR()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const uR = this.core.terrainTextureNames();
        var ZR;
        if (0 === uR.length) return null === (ZR = tR.onTaken) || void 0 === ZR || ZR.call(tR, null, new Set), !0;
        let qR, fR;
        try {
          qR = await RR(), fR = await rR(uR, qR, JR.decode)
        } catch (LR) {
          return yR() ? null : (GR({
            name: null,
            url: null,
            error: LR
          }), !1)
        }
        if (yR() || this.stopped()) return null;
        for (const iR of fR.failures) GR(iR);
        const VR = tR.allOrNothingExcept;
        if (void 0 !== VR && fR.failures.some((RR => {
            let {
              name: JR
            } = RR;
            return null === JR || !VR.has(JR)
          })) || !0 === JR.wholeAtlas && fR.failures.some((RR => {
            let {
              name: JR
            } = RR;
            return null === JR || null !== iR(JR)
          }))) return !1;
        const {
          handOver: KR
        } = fR, wR = function(RR) {
          return RR.textures.reduce(((RR, JR) => RR + JR.byteLength), 0)
        }(KR) < this.keepBelow, eR = this.core.setTerrainTextures(KR.names, KR.textures, KR.sizes, wR ? void 0 : () => {
          !async function(RR, JR) {
            await JR;
            for (const {
                buffer: yR
              }
              of RR) {
              const RR = yR;
              var GR;
              if (!RR.detached) null === (GR = RR.transfer) || void 0 === GR || GR.call(RR, 0)
            }
          }(KR.textures, qR.heldUntil)
        });
        if (eR) {
          var aR;
          const RR = new Set(fR.failures.flatMap((RR => {
            let {
              name: JR
            } = RR;
            return null === JR ? [] : [JR]
          })));
          null === (aR = tR.onTaken) || void 0 === aR || aR.call(tR, wR ? KR : null, RR)
        }
        return eR
      }
    }
  },
  35094: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => fR,
      f: () => KR,
      i: () => VR
    });
    var yR = GR(279),
      tR = GR(103),
      uR = GR(132),
      ZR = GR(127),
      qR = GR(706);
    const iR = new Set(["mali_bifrost"]);

    function fR() {
      if (qR.e) return;
      const RR = (0, tR.pageOperatingSystem)();
      if ("android" !== RR && "windows" !== RR || (0, qR.c)("webgl_default")) return;
      if ("windows" === RR) return RR => "qualcomm" === (0, tR.normaliseGpuVendor)((0, ZR.b)(RR).vendor);
      const JR = (0, uR.o)(),
        GR = null === JR ? (0, yR.u)() : (0, yR.k)(JR.vendor, JR.renderer);
      return null !== GR && iR.has(GR) ? RR => (0, yR.q)((0, ZR.b)(RR).vendor, GR) : void 0
    }

    function VR(RR, JR) {
      return RR ? () => !0 : JR()
    }
    async function KR(RR) {
      try {
        const JR = VR(RR, fR),
          GR = navigator.gpu;
        if (void 0 === JR || void 0 === GR) return !1;
        const yR = await (0, ZR.i)(GR, {
          seed: !1,
          compatibility: JR
        });
        return "string" !== typeof yR && yR.compatibility && !(0, ZR.e)(yR.adapter)
      } catch (JR) {
        return console.error("WebGPU compatibility-mode adapter request failed.", JR), !1
      }
    }
  },
  42306: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR,
      g: () => fR
    });
    var yR = GR(103),
      tR = GR(5201);
    const uR = "webgpuPipeline";

    function ZR(RR) {
      return RR.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let qR = null;

    function iR() {
      if (null === qR) try {
        RR = (0, yR.getBrowserName)(), JR = (0, yR.getBrowserVersion)(), GR = (0, yR.getOperatingSystem)(), tR = (0, yR.getOperatingSystemVersion)(), qR = `${RR.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===JR?"unknown":ZR(JR)}-${GR}${void 0===tR?"":`_${ZR(tR)}`}`
      } catch (uR) {
        console.warn("The user agent couldn't be read for its browser code", uR), qR = "unknown"
      }
      var RR, JR, GR, tR;
      return qR
    }

    function fR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const JR = `WGPU-${iR()}`,
        yR = (RR, yR) => {
          const {
            reason: ZR,
            message: qR
          } = yR, iR = String(qR);
          if ((0, tR.v)(ZR, iR)) return;
          const fR = {
            pipeline: null !== RR && void 0 !== RR ? RR : "",
            reason: String(ZR),
            browserMessage: iR
          };
          Promise.resolve().then((() => GR(42288))).then((RR => {
            let {
              reportCrash: GR
            } = RR;
            GR({
              kind: "coreError",
              code: JR,
              site: uR,
              fatal: !1,
              message: `${fR.pipeline} ${fR.reason}: ${fR.browserMessage}`,
              details: fR,
              error: yR
            })
          })).catch((RR => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", RR)
          }))
        },
        ZR = RR.createRenderPipelineAsync;
      RR.createRenderPipelineAsync = function(RR) {
        return ZR.call(this, RR).catch((JR => {
          throw yR(RR.label, JR), JR
        }))
      };
      const qR = RR.createComputePipelineAsync;
      RR.createComputePipelineAsync = function(RR) {
        return qR.call(this, RR).catch((JR => {
          throw yR(RR.label, JR), JR
        }))
      }
    }
  },
  42255: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      c: () => iR
    });
    var yR = GR(132);
    let tR = !1;

    function uR() {
      let RR = null;
      try {
        return RR = document.createElement("canvas").getContext("webgl2"), null !== RR
      } catch {
        return !1
      } finally {
        try {
          var JR, GR;
          null === (JR = RR) || void 0 === JR || null === (GR = JR.getExtension("WEBGL_lose_context")) || void 0 === GR || GR.loseContext()
        } catch {}
      }
    }

    function ZR() {
      "hidden" === document.visibilityState && (tR = !1, document.removeEventListener("visibilitychange", ZR))
    }

    function qR() {
      tR || "visible" !== document.visibilityState || !(0, yR.r)() && !uR() || (tR = !0, document.addEventListener("visibilitychange", ZR))
    }

    function iR() {
      return tR || uR()
    }
  },
  42223: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/bloxd_wasm_models_bg.c167c820e95fdd32ea75.wasm"
  },
  42219: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/bloxd_wasm_workers_bg.d0ee27575a6e7e3f1fa4.wasm"
  },
  42212: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR,
      d: () => yR
    });
    const yR = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new GR.U(GR(42219))
      }
    };
    const tR = {
      name: "bloxd_wasm_models",
      url: function() {
        return new GR.U(GR(42223))
      }
    }
  },
  7777: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => AR,
      e: () => CR,
      h: () => UR,
      i: () => nR
    });
    var yR = GR(7786);
    const tR = 6,
      uR = 3,
      ZR = 1,
      qR = 2,
      iR = 4,
      fR = 8,
      VR = 16,
      KR = 32,
      wR = 64,
      rR = 128,
      eR = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function aR(RR) {
      if (!RR) return 0;
      const JR = eR.indexOf(RR);
      if (JR <= 0) throw new Error(`"${RR}" is not a shader pack hook function`);
      return JR
    }

    function LR(RR) {
      if (0 === RR) return null;
      const JR = eR[RR];
      if (void 0 === JR) throw new Error(`${RR} is not a shader pack hook function id`);
      return JR
    }

    function nR(RR) {
      const JR = yR.c.length;
      return {
        strict: RR >= JR,
        program: yR.c[RR % JR]
      }
    }

    function UR(RR) {
      return Number(RR.strict) * yR.c.length + yR.c.indexOf(RR.program)
    }

    function WR(RR) {
      return "" === RR ? [] : RR.split(" ")
    }

    function AR(RR) {
      const JR = {
        variantFlags: new Uint8Array(tR),
        hooks: new Uint8Array(tR * uR),
        moduleCodes: Array(tR).fill(""),
        reads: Array(2 * tR).fill("")
      };
      for (const GR of RR) {
        const RR = UR(GR.key),
          yR = (RR, JR) => null === GR.hooks.surface || GR.reads.fragment.includes(RR) ? 0 : JR;
        JR.variantFlags[RR] = (GR.sceneDepth ? ZR : 0) | (GR.movesVertices ? qR : 0) | (GR.sunShadow ? iR : 0) | (GR.airShadow ? fR : 0) | (GR.discards ? VR : 0) | yR("localPosition", KR) | yR("enchantSpeed", wR) | yR("enchantTier", rR), JR.hooks[RR * uR] = aR(GR.hooks.vertex), JR.hooks[RR * uR + 1] = aR(GR.hooks.surface), JR.hooks[RR * uR + 2] = aR(GR.hooks.light), JR.moduleCodes[RR] = GR.moduleCode, JR.reads[2 * RR] = GR.reads.vertex.join(" "), JR.reads[2 * RR + 1] = GR.reads.fragment.join(" ")
      }
      return JR
    }

    function CR(RR) {
      const {
        hooks: JR,
        moduleCodes: GR,
        reads: yR
      } = RR;
      return Array.from(RR.variantFlags, ((RR, tR) => {
        const KR = tR * uR;
        return {
          key: nR(tR),
          hooks: {
            vertex: LR(JR[KR]),
            surface: LR(JR[KR + 1]),
            light: LR(JR[KR + 2])
          },
          moduleCode: GR[tR],
          sceneDepth: 0 !== (RR & ZR),
          sunShadow: 0 !== (RR & iR),
          airShadow: 0 !== (RR & fR),
          movesVertices: 0 !== (RR & qR),
          discards: 0 !== (RR & VR),
          reads: {
            vertex: WR(yR[2 * tR]),
            fragment: WR(yR[2 * tR + 1])
          }
        }
      }))
    }
  },
  42342: (RR, JR, GR) => {
    GR.d(JR, {
      C: () => rR,
      G: () => eR,
      b: () => tR,
      e: () => yR,
      i: () => wR,
      j: () => VR,
      k: () => LR,
      n: () => uR,
      o: () => qR,
      r: () => iR,
      v: () => ZR,
      y: () => aR
    });
    const yR = 3,
      tR = 0,
      uR = 1,
      ZR = 2,
      qR = {
        uniform: 3,
        Rr: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      iR = 10,
      fR = "BloxdPackInputs",
      VR = "bloxdPackInputs",
      KR = [{
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
      wR = 80;

    function rR() {
      const RR = KR.map((RR => {
        let {
          name: JR,
          type: GR
        } = RR;
        return `    ${JR}: ${GR},\n`
      })).join("");
      return `struct ${fR} {\n${RR}}\n@group(${yR}) @binding(${tR}) var<uniform> ${VR}: ${fR};\n`
    }

    function eR(RR, JR) {
      const GR = new DataView(RR, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, wR),
        [yR, tR, uR, ZR, qR, iR] = KR;
      GR.setFloat32(yR.offset, JR.seconds, !0), GR.setUint32(tR.offset, JR.lit ? 1 : 0, !0);
      for (let fR = 0; fR < 3; fR++) GR.setInt32(uR.offset + 4 * fR, JR.renderOffset[fR], !0), GR.setFloat32(ZR.offset + 4 * fR, JR.AJR[fR], !0), GR.setFloat32(qR.offset + 4 * fR, JR.eyePosition[fR], !0), GR.setFloat32(iR.offset + 4 * fR, JR.shadowDirection[fR], !0)
    }

    function aR(RR) {
      const JR = new Uint32Array(Math.max(1, RR.length));
      return RR.forEach(((RR, GR) => {
        let {
          id: yR,
          rotation: tR
        } = RR;
        JR[GR] = 65535 & yR | (3 & tR) << 16
      })), JR
    }
    const LR = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  7786: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR,
      e: () => ZR,
      i: () => qR,
      l: () => tR,
      n: () => uR
    });
    const yR = ["terrain", "liquid", "model"];

    function tR() {
      const RR = [];
      for (const JR of [!1, !0])
        for (const GR of yR) RR.push({
          strict: JR,
          program: GR
        });
      return RR
    }

    function uR(RR) {
      return `${RR.strict?"strict":"allow"}.${RR.program}`
    }

    function ZR(RR) {
      return !RR.hooks.vertex && !RR.hooks.surface && !RR.hooks.light
    }

    function qR(RR, JR) {
      return "off" !== JR && (null === RR || RR.some((RR => RR.key.strict === ("strict" === JR) && !ZR(RR))))
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);