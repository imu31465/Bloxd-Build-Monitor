export const id = 65;
export const ids = [65];
export const modules = {
  35424: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      noteJsEngine: () => HT,
      noteJsJoin: () => ZT,
      noteWasmJoin: () => lT,
      noteWasmPick: () => nT,
      noteWebGpuLoss: () => sT,
      startWebGpuLossDebug: () => OT
    });
    var iT = IT(306),
      zT = IT(12),
      kT = IT(2482),
      WT = IT(3012),
      XT = IT(637),
      BT = IT(289),
      FT = IT(90),
      ST = IT(104),
      DT = IT(2486),
      LT = IT(26),
      xT = IT(120),
      cT = IT(282),
      KT = IT(2541),
      MT = IT(314),
      rT = IT(8664);
    const AT = 40,
      gT = 160;

    function hT(TT, oT) {
      return `"${(TT.length>oT?`${TT.slice(0,oT)}...`:TT).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function wT(TT) {
      return TT ? "yes" : "no"
    }

    function mT(TT) {
      var oT;
      const IT = TT.storedRenderer;
      return [`loss holds ${wT(TT.lossHolds)}`, `stops packs ${wT(TT.lossStopsPack)}`, `any loss ${wT(TT.anyLoss)}`, `old intel ${wT(TT.oldIntelDriver)}`, `default off for packs ${wT(TT.defaultOffForPacks)}`, `default off reason ${null!==(oT=TT.defaultOffReason)&&void 0!==oT?oT:"none"}`, `setting ${TT.setting?"on":"off"} (stored ${null===TT.settingStored?"unset":TT.settingStored?"on":"off"})`, `renderer url ${null===TT.urlRenderer?"none":hT(TT.urlRenderer,12)}, stored ${null===IT||void 0===IT?"none":hT(String(IT),12)}`, `hidden-loss arm ${TT.hiddenLossArm}`].join(", ")
    }

    function eT(TT) {
      if (null === TT) return "no renderer settled";
      const {
        requested: oT,
        choice: IT,
        source: iT,
        fallbackReason: zT
      } = TT;
      return `renderer requested ${oT}, runs ${IT}, from ${iT}${null===zT?"":`, fell back: ${hT(zT,80)}`}`
    }

    function RT(TT, oT) {
      return TT ? `stopping packs: iOS, ${null!==oT&&void 0!==oT?oT:1} losses in a row within a day` : "stopping packs"
    }

    function uT(TT) {
      var oT, IT, iT;
      return `pick (wasm): backend ${null!==(oT=TT.backend)&&void 0!==oT?oT:"none"}, webgpu fallback ${null!==(IT=TT.reason)&&void 0!==IT?IT:"none"}, from ${null!==(iT=TT.source)&&void 0!==iT?iT:"none"}, storage pull breaks ${wT(TT.storagePullBreaks)}; packs run ${wT("webgpu"===TT.backend&&!TT.storagePullBreaks)}, else ${TT.noWebGpu}`
    }

    function vT(TT, oT, IT) {
      return `pack ${null===TT?"(name not read)":hT(TT,AT)} ${oT}${null===IT?"":`, ${IT} variants`}`
    }
    const ET = "shaderPack:failedWebGpuOff",
      fT = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const TT = !this.noPackSaid;
          return this.noPackSaid = !0, TT
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let CT = null,
      jT = null,
      JT = 0;

    function UT(TT) {
      (0, KT.l)("webgpuloss", TT)
    }

    function aT() {
      return {
        lossHolds: (0, cT.u)(),
        lossStopsPack: (0, cT.C)(),
        anyLoss: (0, cT.h)(),
        oldIntelDriver: !0 === LT.e.getItem(xT.F),
        defaultOffForPacks: zT.c.isWebGpuDefaultOff(),
        defaultOffReason: zT.c.webGpuDefaultOffReason(),
        settingStored: LT.e.getItem(iT.hc),
        setting: zT.c.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: ST.currentUrl.getSearchParam(DT.d),
        storedRenderer: LT.e.getItem(DT.h),
        hiddenLossArm: BT.c.webgpu_hidden_loss_v1
      }
    }

    function YT(TT) {
      return function(TT, oT, IT) {
        if (null === TT || void 0 === TT) return "none";
        if ("object" !== typeof TT) return `unreadable (${typeof TT})`;
        const iT = TT,
          zT = "number" === typeof iT.at ? iT.at : null;
        return ["browser " + (oT ? "this one" : "another"), null === zT ? "no time" : `set ${((IT-zT)/MT.k).toFixed(1)} h ago`, `losses ${"number"===typeof iT.losses?iT.losses:"unset (1)"}${null!==zT&&IT-zT<MT.j?", the last within a day":""}`, `hidden-only ${"number"===typeof iT.hiddenLosses?iT.hiddenLosses:"no"}`, `first page ${"hidden"===iT.firstPage||"visible"===iT.firstPage?iT.firstPage:"unset (visible)"}`].join(", ")
      }(TT, function(TT) {
        try {
          return "object" === typeof TT && null !== TT && TT.browser === (0, cT.d)()
        } catch {
          return !1
        }
      }(TT), Date.now())
    }

    function QT() {
      const TT = (0, cT.m)().now;
      return "number" === typeof(null === TT || void 0 === TT ? void 0 : TT.losses) ? TT.losses : null
    }

    function OT() {
      const {
        atLoad: TT,
        now: oT,
        unreported: IT
      } = (0, cT.m)(), iT = JSON.stringify(TT) === JSON.stringify(oT) ? "qx" : `now ${YT(oT)}`;
      UT(`load (${XT.u?"wasm":"js"}, os ${(0,FT.getOperatingSystem)()}): stored loss ${YT(TT)}; ${iT}; unreported ${function(TT){if(null===TT||void 0===TT||"object"!==typeof TT)return"none";const{hidden:oT,visible:IT}=TT;return`
        hidden $ {
          "number" === typeof oT ? oT : 0
        }, visible $ {
          "number" === typeof IT ? IT : 0
        }
        `}(IT)}; webgpu_loss_page ${cT.y}`), UT(`load: ${mT(aT())}; pack expected ${(0,WT.i)(FT.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function HT(TT) {
      CT = TT, UT(function(TT, oT, IT) {
        const iT = TT.setting ? "the setting is on" : (0, rT.d)(TT.packActive, TT.defaultOffForPacks) ? "the pack forces it" : TT.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${wT(TT.useWebGpu)} (${iT}); ${eT(oT)}; webgpu fallback ${null!==IT&&void 0!==IT?IT:"unset"}`
      }(TT, (0, kT.h)(), (0, FT.getWebGpuFallbackReason)()))
    }

    function nT(TT) {
      jT = TT, UT(uT(TT))
    }
    async function qT(TT, oT, iT, zT) {
      const kT = ++JT,
        WT = await async function(TT) {
          var oT, iT;
          const [{
            shaderPackPage: zT,
            harnessShaderPackMode: kT
          }, {
            getShaderPackPolicy: WT
          }, {
            packRunsIn: XT
          }] = await Promise.all([IT.e(130).then((() => IT(38159))), IT.e(89).then((() => IT(39953))), IT.e(134).then((() => IT(39959)))]), BT = await zT.load();
          if ("none" === BT.status) return null;
          const FT = null !== (oT = kT()) && void 0 !== oT ? oT : WT(TT),
            ST = "active" === BT.status ? BT.pack.variants : BT.variants,
            DT = XT(ST, FT);
          return {
            text: `${"active"===BT.status?vT(BT.pack.name,"active",ST.length):vT(null,`blocked (${BT.messageKey})`,null!==(iT=null===ST||void 0===ST?void 0:ST.length)&&void 0!==iT?iT:null)}; game policy ${FT}, runs in it ${DT?"yes":"no"}`,
            runs: DT
          }
        }(TT);
      if (null === WT) return void(fT.noPack() && UT(`join ${kT}: no shader pack on this page (further joins without one not logged)`));
      const XT = fT.join();
      if ("none" === XT) return;
      if ("cap" === XT) return void UT(`join ${kT}: further joins not logged`);
      const BT = function(TT) {
          switch (TT.status) {
            case "ok":
              return void 0 === TT.couldntRun ? "joined" : `joined without the pack: ${TT.couldntRun}`;
            case "Jo":
              return "Jo";
            case "failed":
              return `failed: ${TT.messageKey}`
          }
        }(oT),
        FT = ("ok" === oT.status ? oT.couldntRun : "failed" === oT.status ? oT.messageKey : void 0) === ET ? `; cause: ${zT()}` : "";
      "outcome" !== XT ? (UT(`join ${kT}: ${WT.text}`), WT.runs && (UT(`join ${kT}: needs WebGPU; ${iT()}`), UT(`join ${kT}: ${mT(aT())}`)), UT(`join ${kT}: ${BT}${FT}`)) : UT(`join ${kT}: ${BT}${FT}`)
    }

    function ZT(TT, oT, IT) {
      var iT;
      const zT = null !== (iT = null === oT || void 0 === oT ? void 0 : oT.isRunning()) && void 0 !== iT && iT;
      return qT(TT, IT, (() => `Lite runtime ${null===oT?"no":"yes, running "+(zT?"yes":"no")}; ${eT((0,kT.h)())}`), (() => {
        return TT = CT, oT = aT(), IT = "ios" === (0, FT.getOperatingSystem)(), iT = QT(), null === TT ? "engine choice not seen" : TT.packActive ? (0, rT.d)(TT.packActive, TT.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : oT.lossStopsPack ? `a loss ${RT(IT,iT)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (oT.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var TT, oT, IT, iT
      }))
    }

    function lT(TT, oT, IT) {
      return qT(TT, null !== oT ? {
        status: "failed",
        messageKey: oT
      } : {
        status: "ok",
        couldntRun: null !== IT && void 0 !== IT ? IT : void 0
      }, (() => null === jT ? "pick not seen" : uT(jT)), (() => function(TT, oT, IT, iT) {
        var zT, kT, WT, XT;
        return null === TT ? "pick not seen" : "off_after_loss" === TT.reason ? `off after a loss, ${"pack"===TT.source?RT(IT,iT):`from ${null!==(XT=TT.source)&&void 0!==XT?XT:"none"}`}` : "not_requested" === TT.reason ? `not requested, from ${null!==(WT=TT.source)&&void 0!==WT?WT:"none"} (setting ${oT.setting?"on":"off"})` : `${null!==(zT=TT.reason)&&void 0!==zT?zT:"none"}, from ${null!==(kT=TT.source)&&void 0!==kT?kT:"none"}`
      }(jT, aT(), "ios" === (0, FT.getOperatingSystem)(), QT())))
    }

    function sT(TT, oT, IT) {
      const iT = fT.loss();
      if ("none" === iT) return;
      if ("cap" === iT) return void UT("further losses not logged");
      const zT = aT();
      UT(function(TT, oT, IT, iT) {
        return `loss (${TT}): ${oT}${null===IT?"":` ${hT(IT,gT)}`}; ${iT}`
      }(TT, oT, IT, `stored ${YT((0,cT.m)().now)}; holds ${zT.lossHolds?"yes":"no"}, stops packs ${zT.lossStopsPack?"yes":"no"}`))
    }
  },
  8664: (TT, oT, IT) => {
    function iT(TT, oT) {
      return TT && !oT
    }
    IT.d(oT, {
      d: () => iT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);