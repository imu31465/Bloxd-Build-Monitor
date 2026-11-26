export const id = 80;
export const ids = [80];
export const modules = {
  37131: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      noteJsEngine: () => MU,
      noteJsJoin: () => sU,
      noteWasmJoin: () => nU,
      noteWasmPick: () => vU,
      noteWebGpuLoss: () => mU,
      startWebGpuLossDebug: () => HU
    });
    var cU = zU(320),
      yU = zU(27),
      QU = zU(3064),
      AU = zU(3849),
      FU = zU(687),
      oU = zU(97),
      DU = zU(111),
      EU = zU(3073),
      YU = zU(42),
      NU = zU(123),
      IU = zU(316),
      pU = zU(670),
      aU = zU(3099),
      tU = zU(344),
      gU = zU(337),
      kU = zU(34784);
    const GU = 40,
      BU = 160;

    function ZU(UU, XU) {
      return `"${(UU.length>XU?`${UU.slice(0,XU)}...`:UU).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function RU(UU) {
      return UU ? "yes" : "no"
    }

    function PU(UU) {
      var XU;
      const zU = UU.storedRenderer;
      return [`loss holds ${RU(UU.lossHolds)}`, `stops packs ${RU(UU.lossStopsPack)}`, `any loss ${RU(UU.anyLoss)}`, `old intel ${RU(UU.oldIntelDriver)}`, `default off for packs ${RU(UU.defaultOffForPacks)}`, `default off reason ${null!==(XU=UU.defaultOffReason)&&void 0!==XU?XU:"none"}`, `setting ${UU.setting?"on":"off"} (stored ${null===UU.settingStored?"unset":UU.settingStored?"on":"off"})`, `renderer url ${null===UU.urlRenderer?"none":ZU(UU.urlRenderer,12)}, stored ${null===zU||void 0===zU?"none":ZU(String(zU),12)}`].join(", ")
    }

    function WU(UU) {
      if (null === UU) return "no renderer settled";
      const {
        requested: XU,
        choice: zU,
        source: cU,
        fallbackReason: yU
      } = UU;
      return `renderer requested ${XU}, runs ${zU}, from ${cU}${null===yU?"":`, fell back: ${ZU(yU,80)}`}`
    }

    function dU(UU, XU) {
      return UU ? `stopping packs: iOS, ${null!==XU&&void 0!==XU?XU:1} losses in a row within a day` : "stopping packs"
    }

    function LU(UU) {
      var XU, zU, cU;
      return `pick (wasm): backend ${null!==(XU=UU.backend)&&void 0!==XU?XU:"none"}, webgpu fallback ${null!==(zU=UU.reason)&&void 0!==zU?zU:"none"}, from ${null!==(cU=UU.source)&&void 0!==cU?cU:"none"}, storage pull breaks ${RU(UU.storagePullBreaks)}; packs run ${RU("webgpu"===UU.backend)}, else ${UU.noWebGpu}`
    }

    function eU(UU, XU, zU) {
      return `pack ${null===UU?"(name not read)":ZU(UU,GU)} ${XU}${null===zU?"":`, ${zU} variants`}`
    }
    const CU = "shaderPack:failedWebGpuOff",
      wU = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const UU = !this.noPackSaid;
          return this.noPackSaid = !0, UU
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let qU = null,
      OU = null,
      SU = 0;

    function rU(UU) {
      (0, aU.l)("webgpuloss", UU)
    }

    function uU() {
      return {
        lossHolds: (0, IU.D)(),
        lossStopsPack: (0, IU.M)(),
        anyLoss: (0, IU.l)(),
        oldIntelDriver: !0 === YU.k.getItem(NU.B),
        defaultOffForPacks: yU.e.isWebGpuDefaultOff(),
        defaultOffReason: yU.e.webGpuDefaultOffReason(),
        settingStored: YU.k.getItem(cU.vc),
        setting: yU.e.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: DU.currentUrl.getSearchParam(EU.c),
        storedRenderer: YU.k.getItem(EU.g)
      }
    }

    function fU(UU) {
      return function(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null === UU || void 0 === UU) return "none";
        if ("object" !== typeof UU) return `unreadable (${typeof UU})`;
        const yU = UU,
          QU = "number" === typeof yU.at ? yU.at : null,
          AU = ["browser " + (XU ? "this one" : "another"), null === QU ? "no time" : `set ${((zU-QU)/tU.j).toFixed(1)} h ago`, `losses ${"number"===typeof yU.losses?yU.losses:"unset (1)"}${null!==QU&&zU-QU<tU.h?", the last within a day":""}`, `first page ${"hidden"===yU.firstPage||"visible"===yU.firstPage?yU.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof yU.holdStep?yU.holdStep:"unset (1)"}${cU?" (not read on iOS: a kept loss holds its whole life)":""}`];
        if (void 0 !== yU.reason || void 0 !== yU.message) {
          const UU = "string" === typeof yU.reason ? ZU(yU.reason, gU.d) : "no reason";
          AU.push(`cause ${UU} ${!0===yU.causeSent?"reported":"unreported"}`)
        }
        return AU.join(", ")
      }(UU, function(UU) {
        try {
          return "object" === typeof UU && null !== UU && UU.browser === (0, IU.h)()
        } catch {
          return !1
        }
      }(UU), Date.now(), "ios" === (0, oU.getOperatingSystem)())
    }

    function iU() {
      const UU = (0, IU.q)().now;
      return "number" === typeof(null === UU || void 0 === UU ? void 0 : UU.losses) ? UU.losses : null
    }

    function HU() {
      const {
        atLoad: UU,
        now: XU,
        unreported: zU
      } = (0, IU.q)(), cU = JSON.stringify(UU) === JSON.stringify(XU) ? "cY" : `now ${fU(XU)}`;
      rU(`load (${FU.H?"wasm":"js"}, os ${(0,oU.getOperatingSystem)()}): stored loss ${fU(UU)}; ${cU}; cause kept apart ${function(UU,XU){if(null===UU||void 0===UU)return"none";const{reason:zU,at:cU}="object"===typeof UU?UU:{},yU="number"===typeof cU?`
        set $ {
          ((XU - cU) / tU.j).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof zU ? ZU(zU, gU.d) : "no reason"
        }, $ {
          yU
        }
        `}((0,pU.i)(),Date.now())}; unreported ${function(UU,XU){if(null===UU||void 0===UU||"object"!==typeof UU)return"none";const zU=UU;return XU.map((UU=>`${UU} ${"number"===typeof zU[UU]?zU[UU]:0}`)).join(", ")}(zU,IU.d)}; webgpu_loss_page ${IU.F}`), rU(`load: ${PU(uU())}; pack expected ${(0,AU.d)(oU.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function MU(UU) {
      qU = UU, rU(function(UU, XU, zU) {
        const cU = UU.setting ? "the setting is on" : (0, kU.d)(UU.packActive, UU.defaultOffForPacks) ? "the pack forces it" : UU.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${RU(UU.useWebGpu)} (${cU}); ${WU(XU)}; webgpu fallback ${null!==zU&&void 0!==zU?zU:"unset"}`
      }(UU, (0, QU.i)(), (0, oU.getWebGpuFallbackReason)()))
    }

    function vU(UU) {
      OU = UU, rU(LU(UU))
    }
    async function VU(UU, XU, cU, yU) {
      const QU = ++SU,
        AU = await async function(UU) {
          var XU, cU;
          const [{
            shaderPackPage: yU,
            harnessShaderPackMode: QU
          }, {
            getShaderPackPolicy: AU
          }, {
            packRunsIn: FU
          }] = await Promise.all([zU.e(128).then((() => zU(40071))), zU.e(106).then((() => zU(43968))), zU.e(152).then((() => zU(43974)))]), oU = await yU.load();
          if ("none" === oU.status) return null;
          const DU = null !== (XU = QU()) && void 0 !== XU ? XU : AU(UU),
            EU = "active" === oU.status ? oU.pack.variants : oU.variants,
            YU = FU(EU, DU);
          return {
            text: `${"active"===oU.status?eU(oU.pack.name,"active",EU.length):eU(null,`blocked (${oU.messageKey})`,null!==(cU=null===EU||void 0===EU?void 0:EU.length)&&void 0!==cU?cU:null)}; game policy ${DU}, runs in it ${YU?"yes":"no"}`,
            runs: YU
          }
        }(UU);
      if (null === AU) return void(wU.noPack() && rU(`join ${QU}: no shader pack on this page (further joins without one not logged)`));
      const FU = wU.join();
      if ("none" === FU) return;
      if ("cap" === FU) return void rU(`join ${QU}: further joins not logged`);
      const oU = function(UU) {
          switch (UU.status) {
            case "ok":
              return void 0 === UU.couldntRun ? "joined" : `joined without the pack: ${UU.couldntRun}`;
            case "QU":
              return "QU";
            case "failed":
              return `failed: ${UU.messageKey}`
          }
        }(XU),
        DU = ("ok" === XU.status ? XU.couldntRun : "failed" === XU.status ? XU.messageKey : void 0) === CU ? `; cause: ${yU()}` : "";
      "outcome" !== FU ? (rU(`join ${QU}: ${AU.text}`), AU.runs && (rU(`join ${QU}: needs WebGPU; ${cU()}`), rU(`join ${QU}: ${PU(uU())}`)), rU(`join ${QU}: ${oU}${DU}`)) : rU(`join ${QU}: ${oU}${DU}`)
    }

    function sU(UU, XU, zU) {
      var cU;
      const yU = null !== (cU = null === XU || void 0 === XU ? void 0 : XU.isRunning()) && void 0 !== cU && cU;
      return VU(UU, zU, (() => `Lite runtime ${null===XU?"no":"yes, running "+(yU?"yes":"no")}; ${WU((0,QU.i)())}`), (() => {
        return UU = qU, XU = uU(), zU = "ios" === (0, oU.getOperatingSystem)(), cU = iU(), null === UU ? "engine choice not seen" : UU.packActive ? (0, kU.d)(UU.packActive, UU.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : XU.lossStopsPack ? `a loss ${dU(zU,cU)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (XU.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var UU, XU, zU, cU
      }))
    }

    function nU(UU, XU, zU) {
      return VU(UU, null !== XU ? {
        status: "failed",
        messageKey: XU
      } : {
        status: "ok",
        couldntRun: null !== zU && void 0 !== zU ? zU : void 0
      }, (() => null === OU ? "pick not seen" : LU(OU)), (() => function(UU, XU, zU, cU) {
        var yU, QU, AU, FU;
        return null === UU ? "pick not seen" : "off_after_loss" === UU.reason ? `off after a loss, ${"pack"===UU.source?dU(zU,cU):`from ${null!==(FU=UU.source)&&void 0!==FU?FU:"none"}`}` : "not_requested" === UU.reason ? `not requested, from ${null!==(AU=UU.source)&&void 0!==AU?AU:"none"} (setting ${XU.setting?"on":"off"})` : `${null!==(yU=UU.reason)&&void 0!==yU?yU:"none"}, from ${null!==(QU=UU.source)&&void 0!==QU?QU:"none"}`
      }(OU, uU(), "ios" === (0, oU.getOperatingSystem)(), iU())))
    }

    function mU(UU, XU, zU) {
      const cU = wU.loss();
      if ("none" === cU) return;
      if ("cap" === cU) return void rU("further losses not logged");
      const yU = uU();
      rU(function(UU, XU, zU, cU) {
        return `loss (${UU}): ${XU}${null===zU?"":` ${ZU(zU,BU)}`}; ${cU}`
      }(UU, XU, zU, `stored ${fU((0,IU.q)().now)}; holds ${yU.lossHolds?"yes":"no"}, stops packs ${yU.lossStopsPack?"yes":"no"}`))
    }
  },
  34784: (UU, XU, zU) => {
    function cU(UU, XU) {
      return UU && !XU
    }
    zU.d(XU, {
      d: () => cU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);