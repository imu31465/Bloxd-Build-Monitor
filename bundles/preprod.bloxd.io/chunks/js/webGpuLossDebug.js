export const id = 80;
export const ids = [80];
export const modules = {
  37376: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      noteJsEngine: () => YM,
      noteJsJoin: () => xM,
      noteWasmJoin: () => vM,
      noteWasmPick: () => NM,
      noteWebGpuLoss: () => FM,
      startWebGpuLossDebug: () => fM
    });
    var OM = iM(313),
      SM = iM(19),
      jM = iM(3085),
      aM = iM(3855),
      PM = iM(656),
      nM = iM(83),
      QM = iM(94),
      zM = iM(3090),
      LM = iM(30),
      mM = iM(106),
      HM = iM(308),
      hM = iM(643),
      JM = iM(3122),
      dM = iM(332),
      yM = iM(327),
      lM = iM(34954);
    const EM = 40,
      UM = 160;

    function GM(MM, rM) {
      return `"${(MM.length>rM?`${MM.slice(0,rM)}...`:MM).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function CM(MM) {
      return MM ? "yes" : "no"
    }

    function eM(MM) {
      var rM;
      const iM = MM.storedRenderer;
      return [`loss holds ${CM(MM.lossHolds)}`, `stops packs ${CM(MM.lossStopsPack)}`, `any loss ${CM(MM.anyLoss)}`, `old intel ${CM(MM.oldIntelDriver)}`, `default off for packs ${CM(MM.defaultOffForPacks)}`, `default off reason ${null!==(rM=MM.defaultOffReason)&&void 0!==rM?rM:"none"}`, `setting ${MM.setting?"on":"off"} (stored ${null===MM.settingStored?"unset":MM.settingStored?"on":"off"})`, `renderer url ${null===MM.urlRenderer?"none":GM(MM.urlRenderer,12)}, stored ${null===iM||void 0===iM?"none":GM(String(iM),12)}`].join(", ")
    }

    function bM(MM) {
      if (null === MM) return "no renderer settled";
      const {
        requested: rM,
        choice: iM,
        source: OM,
        fallbackReason: SM
      } = MM;
      return `renderer requested ${rM}, runs ${iM}, from ${OM}${null===SM?"":`, fell back: ${GM(SM,80)}`}`
    }

    function wM(MM, rM) {
      return MM ? `stopping packs: iOS, ${null!==rM&&void 0!==rM?rM:1} losses in a row within a day` : "stopping packs"
    }

    function tM(MM) {
      var rM, iM, OM;
      return `pick (wasm): backend ${null!==(rM=MM.backend)&&void 0!==rM?rM:"none"}, webgpu fallback ${null!==(iM=MM.reason)&&void 0!==iM?iM:"none"}, from ${null!==(OM=MM.source)&&void 0!==OM?OM:"none"}, storage pull breaks ${CM(MM.storagePullBreaks)}; packs run ${CM("webgpu"===MM.backend)}, else ${MM.noWebGpu}`
    }

    function gM(MM, rM, iM) {
      return `pack ${null===MM?"(name not read)":GM(MM,EM)} ${rM}${null===iM?"":`, ${iM} variants`}`
    }
    const uM = "shaderPack:failedWebGpuOff",
      RM = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const MM = !this.noPackSaid;
          return this.noPackSaid = !0, MM
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let pM = null,
      WM = null,
      sM = 0;

    function DM(MM) {
      (0, JM.k)("webgpuloss", MM)
    }

    function kM() {
      return {
        lossHolds: (0, HM.y)(),
        lossStopsPack: (0, HM.D)(),
        anyLoss: (0, HM.k)(),
        oldIntelDriver: !0 === LM.g.getItem(mM.N),
        defaultOffForPacks: SM.d.isWebGpuDefaultOff(),
        defaultOffReason: SM.d.webGpuDefaultOffReason(),
        settingStored: LM.g.getItem(OM.fc),
        setting: SM.d.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: QM.currentUrl.getSearchParam(zM.d),
        storedRenderer: LM.g.getItem(zM.h)
      }
    }

    function ZM(MM) {
      return function(MM, rM, iM) {
        if (null === MM || void 0 === MM) return "none";
        if ("object" !== typeof MM) return `unreadable (${typeof MM})`;
        const OM = MM,
          SM = "number" === typeof OM.at ? OM.at : null,
          jM = ["browser " + (rM ? "this one" : "another"), null === SM ? "no time" : `set ${((iM-SM)/dM.m).toFixed(1)} h ago`, `losses ${"number"===typeof OM.losses?OM.losses:"unset (1)"}${null!==SM&&iM-SM<dM.i?", the last within a day":""}`, `first page ${"hidden"===OM.firstPage||"visible"===OM.firstPage?OM.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof OM.holdStep?OM.holdStep:"unset (1)"}`];
        if (void 0 !== OM.reason || void 0 !== OM.message) {
          const MM = "string" === typeof OM.reason ? GM(OM.reason, yM.b) : "no reason";
          jM.push(`cause ${MM} ${!0===OM.causeSent?"reported":"unreported"}`)
        }
        return jM.join(", ")
      }(MM, function(MM) {
        try {
          return "object" === typeof MM && null !== MM && MM.browser === (0, HM.j)()
        } catch {
          return !1
        }
      }(MM), Date.now())
    }

    function oM() {
      const MM = (0, HM.n)().now;
      return "number" === typeof(null === MM || void 0 === MM ? void 0 : MM.losses) ? MM.losses : null
    }

    function fM() {
      const {
        atLoad: MM,
        now: rM,
        unreported: iM
      } = (0, HM.n)(), OM = JSON.stringify(MM) === JSON.stringify(rM) ? "ML" : `now ${ZM(rM)}`;
      DM(`load (${PM.H?"wasm":"js"}, os ${(0,nM.getOperatingSystem)()}): stored loss ${ZM(MM)}; ${OM}; cause kept apart ${function(MM,rM){if(null===MM||void 0===MM)return"none";const{reason:iM,at:OM}="object"===typeof MM?MM:{},SM="number"===typeof OM?`
        set $ {
          ((rM - OM) / dM.m).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof iM ? GM(iM, yM.b) : "no reason"
        }, $ {
          SM
        }
        `}((0,hM.h)(),Date.now())}; unreported ${function(MM,rM){if(null===MM||void 0===MM||"object"!==typeof MM)return"none";const iM=MM;return rM.map((MM=>`${MM} ${"number"===typeof iM[MM]?iM[MM]:0}`)).join(", ")}(iM,HM.g)}; webgpu_loss_page ${HM.A}`), DM(`load: ${eM(kM())}; pack expected ${(0,aM.d)(nM.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function YM(MM) {
      pM = MM, DM(function(MM, rM, iM) {
        const OM = MM.setting ? "the setting is on" : (0, lM.e)(MM.packActive, MM.defaultOffForPacks) ? "the pack forces it" : MM.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${CM(MM.useWebGpu)} (${OM}); ${bM(rM)}; webgpu fallback ${null!==iM&&void 0!==iM?iM:"unset"}`
      }(MM, (0, jM.i)(), (0, nM.getWebGpuFallbackReason)()))
    }

    function NM(MM) {
      WM = MM, DM(tM(MM))
    }
    async function AM(MM, rM, OM, SM) {
      const jM = ++sM,
        aM = await async function(MM) {
          var rM, OM;
          const [{
            shaderPackPage: SM,
            harnessShaderPackMode: jM
          }, {
            getShaderPackPolicy: aM
          }, {
            packRunsIn: PM
          }] = await Promise.all([iM.e(129).then((() => iM(40300))), iM.e(106).then((() => iM(43937))), iM.e(154).then((() => iM(43945)))]), nM = await SM.load();
          if ("none" === nM.status) return null;
          const QM = null !== (rM = jM()) && void 0 !== rM ? rM : aM(MM),
            zM = "active" === nM.status ? nM.pack.variants : nM.variants,
            LM = PM(zM, QM);
          return {
            text: `${"active"===nM.status?gM(nM.pack.name,"active",zM.length):gM(null,`blocked (${nM.messageKey})`,null!==(OM=null===zM||void 0===zM?void 0:zM.length)&&void 0!==OM?OM:null)}; game policy ${QM}, runs in it ${LM?"yes":"no"}`,
            runs: LM
          }
        }(MM);
      if (null === aM) return void(RM.noPack() && DM(`join ${jM}: no shader pack on this page (further joins without one not logged)`));
      const PM = RM.join();
      if ("none" === PM) return;
      if ("cap" === PM) return void DM(`join ${jM}: further joins not logged`);
      const nM = function(MM) {
          switch (MM.status) {
            case "ok":
              return void 0 === MM.couldntRun ? "joined" : `joined without the pack: ${MM.couldntRun}`;
            case "Ti":
              return "Ti";
            case "failed":
              return `failed: ${MM.messageKey}`
          }
        }(rM),
        QM = ("ok" === rM.status ? rM.couldntRun : "failed" === rM.status ? rM.messageKey : void 0) === uM ? `; cause: ${SM()}` : "";
      "outcome" !== PM ? (DM(`join ${jM}: ${aM.text}`), aM.runs && (DM(`join ${jM}: needs WebGPU; ${OM()}`), DM(`join ${jM}: ${eM(kM())}`)), DM(`join ${jM}: ${nM}${QM}`)) : DM(`join ${jM}: ${nM}${QM}`)
    }

    function xM(MM, rM, iM) {
      var OM;
      const SM = null !== (OM = null === rM || void 0 === rM ? void 0 : rM.isRunning()) && void 0 !== OM && OM;
      return AM(MM, iM, (() => `Lite runtime ${null===rM?"no":"yes, running "+(SM?"yes":"no")}; ${bM((0,jM.i)())}`), (() => {
        return MM = pM, rM = kM(), iM = "ios" === (0, nM.getOperatingSystem)(), OM = oM(), null === MM ? "engine choice not seen" : MM.packActive ? (0, lM.e)(MM.packActive, MM.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : rM.lossStopsPack ? `a loss ${wM(iM,OM)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (rM.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var MM, rM, iM, OM
      }))
    }

    function vM(MM, rM, iM) {
      return AM(MM, null !== rM ? {
        status: "failed",
        messageKey: rM
      } : {
        status: "ok",
        couldntRun: null !== iM && void 0 !== iM ? iM : void 0
      }, (() => null === WM ? "pick not seen" : tM(WM)), (() => function(MM, rM, iM, OM) {
        var SM, jM, aM, PM;
        return null === MM ? "pick not seen" : "off_after_loss" === MM.reason ? `off after a loss, ${"pack"===MM.source?wM(iM,OM):`from ${null!==(PM=MM.source)&&void 0!==PM?PM:"none"}`}` : "not_requested" === MM.reason ? `not requested, from ${null!==(aM=MM.source)&&void 0!==aM?aM:"none"} (setting ${rM.setting?"on":"off"})` : `${null!==(SM=MM.reason)&&void 0!==SM?SM:"none"}, from ${null!==(jM=MM.source)&&void 0!==jM?jM:"none"}`
      }(WM, kM(), "ios" === (0, nM.getOperatingSystem)(), oM())))
    }

    function FM(MM, rM, iM) {
      const OM = RM.loss();
      if ("none" === OM) return;
      if ("cap" === OM) return void DM("further losses not logged");
      const SM = kM();
      DM(function(MM, rM, iM, OM) {
        return `loss (${MM}): ${rM}${null===iM?"":` ${GM(iM,UM)}`}; ${OM}`
      }(MM, rM, iM, `stored ${ZM((0,HM.n)().now)}; holds ${SM.lossHolds?"yes":"no"}, stops packs ${SM.lossStopsPack?"yes":"no"}`))
    }
  },
  34954: (MM, rM, iM) => {
    function OM(MM, rM) {
      return MM && !rM
    }
    iM.d(rM, {
      e: () => OM
    })
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);