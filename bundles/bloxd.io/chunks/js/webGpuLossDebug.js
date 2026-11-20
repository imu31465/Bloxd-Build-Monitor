export const id = 66;
export const ids = [66];
export const modules = {
  36225: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      noteJsEngine: () => uT,
      noteJsJoin: () => LT,
      noteWasmJoin: () => RT,
      noteWasmPick: () => XT,
      noteWebGpuLoss: () => gT,
      startWebGpuLossDebug: () => ZT
    });
    var lT = cT(328),
      MT = cT(31),
      KT = cT(2803),
      OT = cT(3383),
      yT = cT(636),
      fT = cT(314),
      xT = cT(118),
      IT = cT(127),
      AT = cT(2810),
      CT = cT(47),
      jT = cT(141),
      vT = cT(307),
      tT = cT(2853),
      hT = cT(339),
      NT = cT(9266);
    const QT = 40,
      ST = 160;

    function DT(TT, kT) {
      return `"${(TT.length>kT?`${TT.slice(0,kT)}...`:TT).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function aT(TT) {
      return TT ? "yes" : "no"
    }

    function FT(TT) {
      var kT;
      const cT = TT.storedRenderer;
      return [`loss holds ${aT(TT.lossHolds)}`, `stops packs ${aT(TT.lossStopsPack)}`, `any loss ${aT(TT.anyLoss)}`, `old intel ${aT(TT.oldIntelDriver)}`, `default off for packs ${aT(TT.defaultOffForPacks)}`, `default off reason ${null!==(kT=TT.defaultOffReason)&&void 0!==kT?kT:"none"}`, `setting ${TT.setting?"on":"off"} (stored ${null===TT.settingStored?"unset":TT.settingStored?"on":"off"})`, `renderer url ${null===TT.urlRenderer?"none":DT(TT.urlRenderer,12)}, stored ${null===cT||void 0===cT?"none":DT(String(cT),12)}`, `hidden-loss arm ${TT.hiddenLossArm}`].join(", ")
    }

    function rT(TT) {
      if (null === TT) return "no renderer settled";
      const {
        requested: kT,
        choice: cT,
        source: lT,
        fallbackReason: MT
      } = TT;
      return `renderer requested ${kT}, runs ${cT}, from ${lT}${null===MT?"":`, fell back: ${DT(MT,80)}`}`
    }

    function PT(TT, kT) {
      return TT ? `stopping packs: iOS, ${null!==kT&&void 0!==kT?kT:1} losses in a row within a day` : "stopping packs"
    }

    function wT(TT) {
      var kT, cT, lT;
      return `pick (wasm): backend ${null!==(kT=TT.backend)&&void 0!==kT?kT:"none"}, webgpu fallback ${null!==(cT=TT.reason)&&void 0!==cT?cT:"none"}, from ${null!==(lT=TT.source)&&void 0!==lT?lT:"none"}, storage pull breaks ${aT(TT.storagePullBreaks)}; packs run ${aT("webgpu"===TT.backend&&!TT.storagePullBreaks)}, else ${TT.noWebGpu}`
    }

    function mT(TT, kT, cT) {
      return `pack ${null===TT?"(name not read)":DT(TT,QT)} ${kT}${null===cT?"":`, ${cT} variants`}`
    }
    const bT = "shaderPack:failedWebGpuOff",
      zT = new class {
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
    let JT = null,
      oT = null,
      HT = 0;

    function eT(TT) {
      (0, tT.k)("webgpuloss", TT)
    }

    function GT() {
      return {
        lossHolds: (0, vT.r)(),
        lossStopsPack: (0, vT.u)(),
        anyLoss: (0, vT.g)(),
        oldIntelDriver: !0 === CT.e.getItem(jT.K),
        defaultOffForPacks: MT.e.isWebGpuDefaultOff(),
        defaultOffReason: MT.e.webGpuDefaultOffReason(),
        settingStored: CT.e.getItem(lT.Sb),
        setting: MT.e.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: IT.currentUrl.getSearchParam(AT.d),
        storedRenderer: CT.e.getItem(AT.f),
        hiddenLossArm: fT.d.webgpu_hidden_loss_v1
      }
    }

    function VT(TT) {
      return function(TT, kT, cT) {
        if (null === TT || void 0 === TT) return "none";
        if ("object" !== typeof TT) return `unreadable (${typeof TT})`;
        const lT = TT,
          MT = "number" === typeof lT.at ? lT.at : null;
        return ["browser " + (kT ? "this one" : "another"), null === MT ? "no time" : `set ${((cT-MT)/hT.j).toFixed(1)} h ago`, `losses ${"number"===typeof lT.losses?lT.losses:"unset (1)"}${null!==MT&&cT-MT<hT.i?", the last within a day":""}`, `hidden-only ${"number"===typeof lT.hiddenLosses?lT.hiddenLosses:"no"}`, `first page ${"hidden"===lT.firstPage||"visible"===lT.firstPage?lT.firstPage:"unset (visible)"}`].join(", ")
      }(TT, function(TT) {
        try {
          return "object" === typeof TT && null !== TT && TT.browser === (0, vT.e)()
        } catch {
          return !1
        }
      }(TT), Date.now())
    }

    function ET() {
      const TT = (0, vT.m)().now;
      return "number" === typeof(null === TT || void 0 === TT ? void 0 : TT.losses) ? TT.losses : null
    }

    function ZT() {
      const {
        atLoad: TT,
        now: kT,
        unreported: cT
      } = (0, vT.m)(), lT = JSON.stringify(TT) === JSON.stringify(kT) ? "wj" : `now ${VT(kT)}`;
      eT(`load (${yT.x?"wasm":"js"}, os ${(0,xT.getOperatingSystem)()}): stored loss ${VT(TT)}; ${lT}; unreported ${function(TT){if(null===TT||void 0===TT||"object"!==typeof TT)return"none";const{hidden:kT,visible:cT}=TT;return`
        hidden $ {
          "number" === typeof kT ? kT : 0
        }, visible $ {
          "number" === typeof cT ? cT : 0
        }
        `}(cT)}; webgpu_loss_page ${vT.t}`), eT(`load: ${FT(GT())}; pack expected ${(0,OT.g)(xT.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function uT(TT) {
      JT = TT, eT(function(TT, kT, cT) {
        const lT = TT.setting ? "the setting is on" : (0, NT.d)(TT.packActive, TT.defaultOffForPacks) ? "the pack forces it" : TT.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${aT(TT.useWebGpu)} (${lT}); ${rT(kT)}; webgpu fallback ${null!==cT&&void 0!==cT?cT:"unset"}`
      }(TT, (0, KT.f)(), (0, xT.getWebGpuFallbackReason)()))
    }

    function XT(TT) {
      oT = TT, eT(wT(TT))
    }
    async function dT(TT, kT, lT, MT) {
      const KT = ++HT,
        OT = await async function(TT) {
          var kT, lT;
          const [{
            shaderPackPage: MT,
            harnessShaderPackMode: KT
          }, {
            getShaderPackPolicy: OT
          }, {
            packRunsIn: yT
          }] = await Promise.all([cT.e(129).then((() => cT(39e3))), cT.e(90).then((() => cT(40906))), cT.e(133).then((() => cT(40911)))]), fT = await MT.load();
          if ("none" === fT.status) return null;
          const xT = null !== (kT = KT()) && void 0 !== kT ? kT : OT(TT),
            IT = "active" === fT.status ? fT.pack.variants : fT.variants,
            AT = yT(IT, xT);
          return {
            text: `${"active"===fT.status?mT(fT.pack.name,"active",IT.length):mT(null,`blocked (${fT.messageKey})`,null!==(lT=null===IT||void 0===IT?void 0:IT.length)&&void 0!==lT?lT:null)}; game policy ${xT}, runs in it ${AT?"yes":"no"}`,
            runs: AT
          }
        }(TT);
      if (null === OT) return void(zT.noPack() && eT(`join ${KT}: no shader pack on this page (further joins without one not logged)`));
      const yT = zT.join();
      if ("none" === yT) return;
      if ("cap" === yT) return void eT(`join ${KT}: further joins not logged`);
      const fT = function(TT) {
          switch (TT.status) {
            case "ok":
              return void 0 === TT.couldntRun ? "joined" : `joined without the pack: ${TT.couldntRun}`;
            case "KT":
              return "KT";
            case "failed":
              return `failed: ${TT.messageKey}`
          }
        }(kT),
        xT = ("ok" === kT.status ? kT.couldntRun : "failed" === kT.status ? kT.messageKey : void 0) === bT ? `; cause: ${MT()}` : "";
      "outcome" !== yT ? (eT(`join ${KT}: ${OT.text}`), OT.runs && (eT(`join ${KT}: needs WebGPU; ${lT()}`), eT(`join ${KT}: ${FT(GT())}`)), eT(`join ${KT}: ${fT}${xT}`)) : eT(`join ${KT}: ${fT}${xT}`)
    }

    function LT(TT, kT, cT) {
      var lT;
      const MT = null !== (lT = null === kT || void 0 === kT ? void 0 : kT.isRunning()) && void 0 !== lT && lT;
      return dT(TT, cT, (() => `Lite runtime ${null===kT?"no":"yes, running "+(MT?"yes":"no")}; ${rT((0,KT.f)())}`), (() => {
        return TT = JT, kT = GT(), cT = "ios" === (0, xT.getOperatingSystem)(), lT = ET(), null === TT ? "engine choice not seen" : TT.packActive ? (0, NT.d)(TT.packActive, TT.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : kT.lossStopsPack ? `a loss ${PT(cT,lT)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (kT.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var TT, kT, cT, lT
      }))
    }

    function RT(TT, kT, cT) {
      return dT(TT, null !== kT ? {
        status: "failed",
        messageKey: kT
      } : {
        status: "ok",
        couldntRun: null !== cT && void 0 !== cT ? cT : void 0
      }, (() => null === oT ? "pick not seen" : wT(oT)), (() => function(TT, kT, cT, lT) {
        var MT, KT, OT, yT;
        return null === TT ? "pick not seen" : "off_after_loss" === TT.reason ? `off after a loss, ${"pack"===TT.source?PT(cT,lT):`from ${null!==(yT=TT.source)&&void 0!==yT?yT:"none"}`}` : "not_requested" === TT.reason ? `not requested, from ${null!==(OT=TT.source)&&void 0!==OT?OT:"none"} (setting ${kT.setting?"on":"off"})` : `${null!==(MT=TT.reason)&&void 0!==MT?MT:"none"}, from ${null!==(KT=TT.source)&&void 0!==KT?KT:"none"}`
      }(oT, GT(), "ios" === (0, xT.getOperatingSystem)(), ET())))
    }

    function gT(TT, kT, cT) {
      const lT = zT.loss();
      if ("none" === lT) return;
      if ("cap" === lT) return void eT("further losses not logged");
      const MT = GT();
      eT(function(TT, kT, cT, lT) {
        return `loss (${TT}): ${kT}${null===cT?"":` ${DT(cT,ST)}`}; ${lT}`
      }(TT, kT, cT, `stored ${VT((0,vT.m)().now)}; holds ${MT.lossHolds?"yes":"no"}, stops packs ${MT.lossStopsPack?"yes":"no"}`))
    }
  },
  9266: (TT, kT, cT) => {
    function lT(TT, kT) {
      return TT && !kT
    }
    cT.d(kT, {
      d: () => lT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);