export const id = 69;
export const ids = [69];
export const modules = {
  36496: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      noteJsEngine: () => VT,
      noteJsJoin: () => rT,
      noteWasmJoin: () => KT,
      noteWasmPick: () => uT,
      noteWebGpuLoss: () => ST,
      startWebGpuLossDebug: () => PT
    });
    var WT = mT(351),
      zT = mT(25),
      MT = mT(2891),
      gT = mT(3551),
      nT = mT(681),
      HT = mT(102),
      kT = mT(108),
      jT = mT(2893),
      lT = mT(44),
      LT = mT(117),
      pT = mT(340),
      BT = mT(675),
      ZT = mT(2929),
      cT = mT(366),
      vT = mT(363),
      fT = mT(34198);
    const qT = 40,
      iT = 160;

    function bT(TT, UT) {
      return `"${(TT.length>UT?`${TT.slice(0,UT)}...`:TT).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function OT(TT) {
      return TT ? "yes" : "no"
    }

    function eT(TT) {
      var UT;
      const mT = TT.storedRenderer;
      return [`loss holds ${OT(TT.lossHolds)}`, `stops packs ${OT(TT.lossStopsPack)}`, `any loss ${OT(TT.anyLoss)}`, `old intel ${OT(TT.oldIntelDriver)}`, `default off for packs ${OT(TT.defaultOffForPacks)}`, `default off reason ${null!==(UT=TT.defaultOffReason)&&void 0!==UT?UT:"none"}`, `setting ${TT.setting?"on":"off"} (stored ${null===TT.settingStored?"unset":TT.settingStored?"on":"off"})`, `renderer url ${null===TT.urlRenderer?"none":bT(TT.urlRenderer,12)}, stored ${null===mT||void 0===mT?"none":bT(String(mT),12)}`].join(", ")
    }

    function YT(TT) {
      if (null === TT) return "no renderer settled";
      const {
        requested: UT,
        choice: mT,
        source: WT,
        fallbackReason: zT
      } = TT;
      return `renderer requested ${UT}, runs ${mT}, from ${WT}${null===zT?"":`, fell back: ${bT(zT,80)}`}`
    }

    function JT(TT, UT) {
      return TT ? `stopping packs: iOS, ${null!==UT&&void 0!==UT?UT:1} losses in a row within a day` : "stopping packs"
    }

    function xT(TT) {
      var UT, mT, WT;
      return `pick (wasm): backend ${null!==(UT=TT.backend)&&void 0!==UT?UT:"none"}, webgpu fallback ${null!==(mT=TT.reason)&&void 0!==mT?mT:"none"}, from ${null!==(WT=TT.source)&&void 0!==WT?WT:"none"}, storage pull breaks ${OT(TT.storagePullBreaks)}; packs run ${OT("webgpu"===TT.backend)}, else ${TT.noWebGpu}`
    }

    function dT(TT, UT, mT) {
      return `pack ${null===TT?"(name not read)":bT(TT,qT)} ${UT}${null===mT?"":`, ${mT} variants`}`
    }
    const wT = "shaderPack:failedWebGpuOff",
      tT = new class {
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
    let aT = null,
      yT = null,
      XT = 0;

    function IT(TT) {
      (0, ZT.m)("webgpuloss", TT)
    }

    function QT() {
      return {
        lossHolds: (0, pT.u)(),
        lossStopsPack: (0, pT.z)(),
        anyLoss: (0, pT.h)(),
        oldIntelDriver: !0 === lT.l.getItem(LT.E),
        defaultOffForPacks: zT.b.isWebGpuDefaultOff(),
        defaultOffReason: zT.b.webGpuDefaultOffReason(),
        settingStored: lT.l.getItem(WT.ac),
        setting: zT.b.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: kT.currentUrl.getSearchParam(jT.c),
        storedRenderer: lT.l.getItem(jT.e)
      }
    }

    function sT(TT) {
      return function(TT, UT, mT) {
        if (null === TT || void 0 === TT) return "none";
        if ("object" !== typeof TT) return `unreadable (${typeof TT})`;
        const WT = TT,
          zT = "number" === typeof WT.at ? WT.at : null,
          MT = ["browser " + (UT ? "this one" : "another"), null === zT ? "no time" : `set ${((mT-zT)/cT.o).toFixed(1)} h ago`, `losses ${"number"===typeof WT.losses?WT.losses:"unset (1)"}${null!==zT&&mT-zT<cT.k?", the last within a day":""}`, `first page ${"hidden"===WT.firstPage||"visible"===WT.firstPage?WT.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof WT.holdStep?WT.holdStep:"unset (1)"}`];
        if (void 0 !== WT.reason || void 0 !== WT.message) {
          const TT = "string" === typeof WT.reason ? bT(WT.reason, vT.d) : "no reason";
          MT.push(`cause ${TT} ${!0===WT.causeSent?"reported":"unreported"}`)
        }
        return MT.join(", ")
      }(TT, function(TT) {
        try {
          return "object" === typeof TT && null !== TT && TT.browser === (0, pT.f)()
        } catch {
          return !1
        }
      }(TT), Date.now())
    }

    function FT() {
      const TT = (0, pT.l)().now;
      return "number" === typeof(null === TT || void 0 === TT ? void 0 : TT.losses) ? TT.losses : null
    }

    function PT() {
      const {
        atLoad: TT,
        now: UT,
        unreported: mT
      } = (0, pT.l)(), WT = JSON.stringify(TT) === JSON.stringify(UT) ? "Jp" : `now ${sT(UT)}`;
      IT(`load (${nT.B?"wasm":"js"}, os ${(0,HT.getOperatingSystem)()}): stored loss ${sT(TT)}; ${WT}; cause kept apart ${function(TT,UT){if(null===TT||void 0===TT)return"none";const{reason:mT,at:WT}="object"===typeof TT?TT:{},zT="number"===typeof WT?`
        set $ {
          ((UT - WT) / cT.o).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof mT ? bT(mT, vT.d) : "no reason"
        }, $ {
          zT
        }
        `}((0,BT.g)(),Date.now())}; unreported ${function(TT,UT){if(null===TT||void 0===TT||"object"!==typeof TT)return"none";const mT=TT;return UT.map((TT=>`${TT} ${"number"===typeof mT[TT]?mT[TT]:0}`)).join(", ")}(mT,pT.e)}; webgpu_loss_page ${pT.v}`), IT(`load: ${eT(QT())}; pack expected ${(0,gT.i)(HT.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function VT(TT) {
      aT = TT, IT(function(TT, UT, mT) {
        const WT = TT.setting ? "the setting is on" : (0, fT.c)(TT.packActive, TT.defaultOffForPacks) ? "the pack forces it" : TT.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${OT(TT.useWebGpu)} (${WT}); ${YT(UT)}; webgpu fallback ${null!==mT&&void 0!==mT?mT:"unset"}`
      }(TT, (0, MT.j)(), (0, HT.getWebGpuFallbackReason)()))
    }

    function uT(TT) {
      yT = TT, IT(xT(TT))
    }
    async function CT(TT, UT, WT, zT) {
      const MT = ++XT,
        gT = await async function(TT) {
          var UT, WT;
          const [{
            shaderPackPage: zT,
            harnessShaderPackMode: MT
          }, {
            getShaderPackPolicy: gT
          }, {
            packRunsIn: nT
          }] = await Promise.all([mT.e(117).then((() => mT(39343))), mT.e(93).then((() => mT(41427))), mT.e(141).then((() => mT(41429)))]), HT = await zT.load();
          if ("none" === HT.status) return null;
          const kT = null !== (UT = MT()) && void 0 !== UT ? UT : gT(TT),
            jT = "active" === HT.status ? HT.pack.variants : HT.variants,
            lT = nT(jT, kT);
          return {
            text: `${"active"===HT.status?dT(HT.pack.name,"active",jT.length):dT(null,`blocked (${HT.messageKey})`,null!==(WT=null===jT||void 0===jT?void 0:jT.length)&&void 0!==WT?WT:null)}; game policy ${kT}, runs in it ${lT?"yes":"no"}`,
            runs: lT
          }
        }(TT);
      if (null === gT) return void(tT.noPack() && IT(`join ${MT}: no shader pack on this page (further joins without one not logged)`));
      const nT = tT.join();
      if ("none" === nT) return;
      if ("cap" === nT) return void IT(`join ${MT}: further joins not logged`);
      const HT = function(TT) {
          switch (TT.status) {
            case "ok":
              return void 0 === TT.couldntRun ? "joined" : `joined without the pack: ${TT.couldntRun}`;
            case "Km":
              return "Km";
            case "failed":
              return `failed: ${TT.messageKey}`
          }
        }(UT),
        kT = ("ok" === UT.status ? UT.couldntRun : "failed" === UT.status ? UT.messageKey : void 0) === wT ? `; cause: ${zT()}` : "";
      "outcome" !== nT ? (IT(`join ${MT}: ${gT.text}`), gT.runs && (IT(`join ${MT}: needs WebGPU; ${WT()}`), IT(`join ${MT}: ${eT(QT())}`)), IT(`join ${MT}: ${HT}${kT}`)) : IT(`join ${MT}: ${HT}${kT}`)
    }

    function rT(TT, UT, mT) {
      var WT;
      const zT = null !== (WT = null === UT || void 0 === UT ? void 0 : UT.isRunning()) && void 0 !== WT && WT;
      return CT(TT, mT, (() => `Lite runtime ${null===UT?"no":"yes, running "+(zT?"yes":"no")}; ${YT((0,MT.j)())}`), (() => {
        return TT = aT, UT = QT(), mT = "ios" === (0, HT.getOperatingSystem)(), WT = FT(), null === TT ? "engine choice not seen" : TT.packActive ? (0, fT.c)(TT.packActive, TT.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : UT.lossStopsPack ? `a loss ${JT(mT,WT)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (UT.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var TT, UT, mT, WT
      }))
    }

    function KT(TT, UT, mT) {
      return CT(TT, null !== UT ? {
        status: "failed",
        messageKey: UT
      } : {
        status: "ok",
        couldntRun: null !== mT && void 0 !== mT ? mT : void 0
      }, (() => null === yT ? "pick not seen" : xT(yT)), (() => function(TT, UT, mT, WT) {
        var zT, MT, gT, nT;
        return null === TT ? "pick not seen" : "off_after_loss" === TT.reason ? `off after a loss, ${"pack"===TT.source?JT(mT,WT):`from ${null!==(nT=TT.source)&&void 0!==nT?nT:"none"}`}` : "not_requested" === TT.reason ? `not requested, from ${null!==(gT=TT.source)&&void 0!==gT?gT:"none"} (setting ${UT.setting?"on":"off"})` : `${null!==(zT=TT.reason)&&void 0!==zT?zT:"none"}, from ${null!==(MT=TT.source)&&void 0!==MT?MT:"none"}`
      }(yT, QT(), "ios" === (0, HT.getOperatingSystem)(), FT())))
    }

    function ST(TT, UT, mT) {
      const WT = tT.loss();
      if ("none" === WT) return;
      if ("cap" === WT) return void IT("further losses not logged");
      const zT = QT();
      IT(function(TT, UT, mT, WT) {
        return `loss (${TT}): ${UT}${null===mT?"":` ${bT(mT,iT)}`}; ${WT}`
      }(TT, UT, mT, `stored ${sT((0,pT.l)().now)}; holds ${zT.lossHolds?"yes":"no"}, stops packs ${zT.lossStopsPack?"yes":"no"}`))
    }
  },
  34198: (TT, UT, mT) => {
    function WT(TT, UT) {
      return TT && !UT
    }
    mT.d(UT, {
      c: () => WT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);