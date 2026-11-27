export const id = 81;
export const ids = [81];
export const modules = {
  37580: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      noteJsEngine: () => mR,
      noteJsJoin: () => jR,
      noteWasmJoin: () => dR,
      noteWasmPick: () => zR,
      noteWebGpuLoss: () => ER,
      startWebGpuLossDebug: () => IR
    });
    var yR = GR(359),
      tR = GR(25),
      uR = GR(3933),
      ZR = GR(4776),
      qR = GR(709),
      iR = GR(103),
      fR = GR(112),
      VR = GR(3935),
      KR = GR(46),
      wR = GR(123),
      rR = GR(327),
      eR = GR(342),
      aR = GR(704),
      LR = GR(3960),
      nR = GR(377),
      UR = GR(371),
      WR = GR(35064);
    const AR = 40,
      CR = 160;

    function XR(RR, JR) {
      return `"${(RR.length>JR?`${RR.slice(0,JR)}...`:RR).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function MR(RR) {
      return RR ? "yes" : "no"
    }

    function BR(RR) {
      var JR;
      const GR = RR.storedRenderer;
      return [`loss holds ${MR(RR.lossHolds)}`, `stops packs ${MR(RR.lossStopsPack)}`, `any loss ${MR(RR.anyLoss)}`, `old intel ${MR(RR.oldIntelDriver)}`, `few wasm memories ${MR(RR.fewWasmMemories)}`, `default off for packs ${MR(RR.defaultOffForPacks)}`, `default off reason ${null!==(JR=RR.defaultOffReason)&&void 0!==JR?JR:"none"}`, `setting ${RR.setting?"on":"off"} (stored ${null===RR.settingStored?"unset":RR.settingStored?"on":"off"})`, `renderer url ${null===RR.urlRenderer?"none":XR(RR.urlRenderer,12)}, stored ${null===GR||void 0===GR?"none":XR(String(GR),12)}`].join(", ")
    }

    function lR(RR) {
      if (null === RR) return "no renderer settled";
      const {
        requested: JR,
        choice: GR,
        source: yR,
        fallbackReason: tR
      } = RR;
      return `renderer requested ${JR}, runs ${GR}, from ${yR}${null===tR?"":`, fell back: ${XR(tR,80)}`}`
    }

    function pR(RR, JR) {
      return RR ? `stopping packs: iOS, ${null!==JR&&void 0!==JR?JR:1} losses in a row within a day` : "stopping packs"
    }

    function gR(RR) {
      var JR, GR, yR;
      return `pick (wasm): backend ${null!==(JR=RR.backend)&&void 0!==JR?JR:"none"}, webgpu fallback ${null!==(GR=RR.reason)&&void 0!==GR?GR:"none"}, from ${null!==(yR=RR.source)&&void 0!==yR?yR:"none"}, storage pull breaks ${MR(RR.storagePullBreaks)}; packs run ${MR("webgpu"===RR.backend)}, else ${RR.noWebGpu}`
    }

    function bR(RR, JR, GR) {
      return `pack ${null===RR?"(name not read)":XR(RR,AR)} ${JR}${null===GR?"":`, ${GR} variants`}`
    }
    const vR = "shaderPack:failedWebGpuOff",
      OR = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const RR = !this.noPackSaid;
          return this.noPackSaid = !0, RR
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let xR = null,
      NR = null,
      DR = 0;

    function HR(RR) {
      (0, LR.k)("webgpuloss", RR)
    }

    function oR() {
      return {
        lossHolds: (0, eR.y)(),
        lossStopsPack: (0, eR.F)(),
        anyLoss: (0, eR.j)(),
        oldIntelDriver: !0 === KR.i.getItem(wR.J),
        fewWasmMemories: (0, rR.d)(),
        defaultOffForPacks: tR.d.isWebGpuDefaultOff(),
        defaultOffReason: tR.d.webGpuDefaultOffReason(),
        settingStored: KR.i.getItem(yR.jc),
        setting: tR.d.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: fR.currentUrl.getSearchParam(VR.b),
        storedRenderer: KR.i.getItem(VR.e)
      }
    }

    function cR(RR) {
      return function(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null === RR || void 0 === RR) return "none";
        if ("object" !== typeof RR) return `unreadable (${typeof RR})`;
        const tR = RR,
          uR = "number" === typeof tR.at ? tR.at : null,
          ZR = ["browser " + (JR ? "this one" : "another"), null === uR ? "no time" : `set ${((GR-uR)/nR.m).toFixed(1)} h ago`, `losses ${"number"===typeof tR.losses?tR.losses:"unset (1)"}${null!==uR&&GR-uR<nR.i?", the last within a day":""}`, `first page ${"hidden"===tR.firstPage||"visible"===tR.firstPage?tR.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof tR.holdStep?tR.holdStep:"unset (1)"}${yR?" (not read on iOS: a kept loss holds its whole life)":""}`];
        if (void 0 !== tR.reason || void 0 !== tR.message) {
          const RR = "string" === typeof tR.reason ? XR(tR.reason, UR.c) : "no reason";
          ZR.push(`cause ${RR} ${!0===tR.causeSent?"reported":"unreported"}`)
        }
        return ZR.join(", ")
      }(RR, function(RR) {
        try {
          return "object" === typeof RR && null !== RR && RR.browser === (0, eR.h)()
        } catch {
          return !1
        }
      }(RR), Date.now(), "ios" === (0, iR.getOperatingSystem)())
    }

    function PR() {
      const RR = (0, eR.n)().now;
      return "number" === typeof(null === RR || void 0 === RR ? void 0 : RR.losses) ? RR.losses : null
    }

    function IR() {
      const {
        atLoad: RR,
        now: JR,
        unreported: GR
      } = (0, eR.n)(), yR = JSON.stringify(RR) === JSON.stringify(JR) ? "tK" : `now ${cR(JR)}`;
      HR(`load (${qR.G?"wasm":"js"}, os ${(0,iR.getOperatingSystem)()}): stored loss ${cR(RR)}; ${yR}; cause kept apart ${function(RR,JR){if(null===RR||void 0===RR)return"none";const{reason:GR,at:yR}="object"===typeof RR?RR:{},tR="number"===typeof yR?`
        set $ {
          ((JR - yR) / nR.m).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof GR ? XR(GR, UR.c) : "no reason"
        }, $ {
          tR
        }
        `}((0,aR.i)(),Date.now())}; unreported ${function(RR,JR){if(null===RR||void 0===RR||"object"!==typeof RR)return"none";const GR=RR;return JR.map((RR=>`${RR} ${"number"===typeof GR[RR]?GR[RR]:0}`)).join(", ")}(GR,eR.e)}; webgpu_loss_page ${eR.A}`), HR(`load: ${BR(oR())}; pack expected ${(0,ZR.h)(iR.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function mR(RR) {
      xR = RR, HR(function(RR, JR, GR) {
        const yR = RR.setting ? "the setting is on" : (0, WR.b)(RR.packActive, RR.defaultOffForPacks) ? "the pack forces it" : RR.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${MR(RR.useWebGpu)} (${yR}); ${lR(JR)}; webgpu fallback ${null!==GR&&void 0!==GR?GR:"unset"}`
      }(RR, (0, uR.j)(), (0, iR.getWebGpuFallbackReason)()))
    }

    function zR(RR) {
      NR = RR, HR(gR(RR))
    }
    async function SR(RR, JR, yR, tR) {
      const uR = ++DR,
        ZR = await async function(RR) {
          var JR, yR;
          const [{
            shaderPackPage: tR,
            harnessShaderPackMode: uR
          }, {
            getShaderPackPolicy: ZR
          }, {
            packRunsIn: qR
          }] = await Promise.all([GR.e(138).then((() => GR(40495))), GR.e(108).then((() => GR(44974))), GR.e(162).then((() => GR(44983)))]), iR = await tR.load();
          if ("none" === iR.status) return null;
          const fR = null !== (JR = uR()) && void 0 !== JR ? JR : ZR(RR),
            VR = "active" === iR.status ? iR.pack.variants : iR.variants,
            KR = qR(VR, fR);
          return {
            text: `${"active"===iR.status?bR(iR.pack.name,"active",VR.length):bR(null,`blocked (${iR.messageKey})`,null!==(yR=null===VR||void 0===VR?void 0:VR.length)&&void 0!==yR?yR:null)}; game policy ${fR}, runs in it ${KR?"yes":"no"}`,
            runs: KR
          }
        }(RR);
      if (null === ZR) return void(OR.noPack() && HR(`join ${uR}: no shader pack on this page (further joins without one not logged)`));
      const qR = OR.join();
      if ("none" === qR) return;
      if ("cap" === qR) return void HR(`join ${uR}: further joins not logged`);
      const iR = function(RR) {
          switch (RR.status) {
            case "ok":
              return void 0 === RR.couldntRun ? "joined" : `joined without the pack: ${RR.couldntRun}`;
            case "xR":
              return "xR";
            case "failed":
              return `failed: ${RR.messageKey}`
          }
        }(JR),
        fR = ("ok" === JR.status ? JR.couldntRun : "failed" === JR.status ? JR.messageKey : void 0) === vR ? `; cause: ${tR()}` : "";
      "outcome" !== qR ? (HR(`join ${uR}: ${ZR.text}`), ZR.runs && (HR(`join ${uR}: needs WebGPU; ${yR()}`), HR(`join ${uR}: ${BR(oR())}`)), HR(`join ${uR}: ${iR}${fR}`)) : HR(`join ${uR}: ${iR}${fR}`)
    }

    function jR(RR, JR, GR) {
      var yR;
      const tR = null !== (yR = null === JR || void 0 === JR ? void 0 : JR.isRunning()) && void 0 !== yR && yR;
      return SR(RR, GR, (() => `Lite runtime ${null===JR?"no":"yes, running "+(tR?"yes":"no")}; ${lR((0,uR.j)())}`), (() => function(RR, JR, GR, yR) {
        if (null === RR) return "engine choice not seen";
        if (!RR.packActive) return "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (JR.lossStopsPack ? "" : " (one that doesn't stop packs)");
        if ((0, WR.b)(RR.packActive, RR.defaultOffForPacks)) return "the pack forced WebGPU, yet nothing asked for a renderer: unexpected";
        if (!JR.lossStopsPack) return (JR.oldIntelDriver ? "old Intel driver verdict" : "few wasm memories or old Intel driver verdict, since cleared") + ", worded off as a loss is stored";
        return `a loss ${pR(GR,yR)}`
      }(xR, oR(), "ios" === (0, iR.getOperatingSystem)(), PR())))
    }

    function dR(RR, JR, GR) {
      return SR(RR, null !== JR ? {
        status: "failed",
        messageKey: JR
      } : {
        status: "ok",
        couldntRun: null !== GR && void 0 !== GR ? GR : void 0
      }, (() => null === NR ? "pick not seen" : gR(NR)), (() => function(RR, JR, GR, yR) {
        var tR, uR, ZR, qR;
        return null === RR ? "pick not seen" : "off_after_loss" === RR.reason ? `off after a loss, ${"pack"===RR.source?pR(GR,yR):`from ${null!==(qR=RR.source)&&void 0!==qR?qR:"none"}`}` : "not_requested" === RR.reason ? `not requested, from ${null!==(ZR=RR.source)&&void 0!==ZR?ZR:"none"} (setting ${JR.setting?"on":"off"})` : `${null!==(tR=RR.reason)&&void 0!==tR?tR:"none"}, from ${null!==(uR=RR.source)&&void 0!==uR?uR:"none"}`
      }(NR, oR(), "ios" === (0, iR.getOperatingSystem)(), PR())))
    }

    function ER(RR, JR, GR) {
      const yR = OR.loss();
      if ("none" === yR) return;
      if ("cap" === yR) return void HR("further losses not logged");
      const tR = oR();
      HR(function(RR, JR, GR, yR) {
        return `loss (${RR}): ${JR}${null===GR?"":` ${XR(GR,CR)}`}; ${yR}`
      }(RR, JR, GR, `stored ${cR((0,eR.n)().now)}; holds ${tR.lossHolds?"yes":"no"}, stops packs ${tR.lossStopsPack?"yes":"no"}`))
    }
  },
  35064: (RR, JR, GR) => {
    function yR(RR, JR) {
      return RR && !JR
    }
    GR.d(JR, {
      b: () => yR
    })
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);