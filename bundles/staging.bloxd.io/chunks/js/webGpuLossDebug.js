export const id = 68;
export const ids = [68];
export const modules = {
  36307: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      noteJsEngine: () => cC,
      noteJsJoin: () => sC,
      noteWasmJoin: () => TC,
      noteWasmPick: () => uC,
      noteWebGpuLoss: () => aC,
      startWebGpuLossDebug: () => XC
    });
    var QC = ZC(310),
      wC = ZC(20),
      bC = ZC(2770),
      nC = ZC(3432),
      fC = ZC(615),
      oC = ZC(77),
      qC = ZC(88),
      FC = ZC(2776),
      WC = ZC(38),
      NC = ZC(94),
      MC = ZC(296),
      gC = ZC(2800),
      SC = ZC(326),
      pC = ZC(34076);
    const PC = 40,
      GC = 160;

    function RC(CC, zC) {
      return `"${(CC.length>zC?`${CC.slice(0,zC)}...`:CC).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function AC(CC) {
      return CC ? "yes" : "no"
    }

    function xC(CC) {
      var zC;
      const ZC = CC.storedRenderer;
      return [`loss holds ${AC(CC.lossHolds)}`, `stops packs ${AC(CC.lossStopsPack)}`, `any loss ${AC(CC.anyLoss)}`, `old intel ${AC(CC.oldIntelDriver)}`, `default off for packs ${AC(CC.defaultOffForPacks)}`, `default off reason ${null!==(zC=CC.defaultOffReason)&&void 0!==zC?zC:"none"}`, `setting ${CC.setting?"on":"off"} (stored ${null===CC.settingStored?"unset":CC.settingStored?"on":"off"})`, `renderer url ${null===CC.urlRenderer?"none":RC(CC.urlRenderer,12)}, stored ${null===ZC||void 0===ZC?"none":RC(String(ZC),12)}`].join(", ")
    }

    function JC(CC) {
      if (null === CC) return "no renderer settled";
      const {
        requested: zC,
        choice: ZC,
        source: QC,
        fallbackReason: wC
      } = CC;
      return `renderer requested ${zC}, runs ${ZC}, from ${QC}${null===wC?"":`, fell back: ${RC(wC,80)}`}`
    }

    function IC(CC, zC) {
      return CC ? `stopping packs: iOS, ${null!==zC&&void 0!==zC?zC:1} losses in a row within a day` : "stopping packs"
    }

    function iC(CC) {
      var zC, ZC, QC;
      return `pick (wasm): backend ${null!==(zC=CC.backend)&&void 0!==zC?zC:"none"}, webgpu fallback ${null!==(ZC=CC.reason)&&void 0!==ZC?ZC:"none"}, from ${null!==(QC=CC.source)&&void 0!==QC?QC:"none"}, storage pull breaks ${AC(CC.storagePullBreaks)}; packs run ${AC("webgpu"===CC.backend)}, else ${CC.noWebGpu}`
    }

    function vC(CC, zC, ZC) {
      return `pack ${null===CC?"(name not read)":RC(CC,PC)} ${zC}${null===ZC?"":`, ${ZC} variants`}`
    }
    const eC = "shaderPack:failedWebGpuOff",
      hC = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const CC = !this.noPackSaid;
          return this.noPackSaid = !0, CC
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let KC = null,
      YC = null,
      dC = 0;

    function mC(CC) {
      (0, gC.i)("webgpuloss", CC)
    }

    function HC() {
      return {
        lossHolds: (0, MC.B)(),
        lossStopsPack: (0, MC.H)(),
        anyLoss: (0, MC.k)(),
        oldIntelDriver: !0 === WC.i.getItem(NC.L),
        defaultOffForPacks: wC.b.isWebGpuDefaultOff(),
        defaultOffReason: wC.b.webGpuDefaultOffReason(),
        settingStored: WC.i.getItem(QC.hc),
        setting: wC.b.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: qC.currentUrl.getSearchParam(FC.b),
        storedRenderer: WC.i.getItem(FC.e)
      }
    }

    function EC(CC) {
      return function(CC, zC, ZC) {
        if (null === CC || void 0 === CC) return "none";
        if ("object" !== typeof CC) return `unreadable (${typeof CC})`;
        const QC = CC,
          wC = "number" === typeof QC.at ? QC.at : null;
        return ["browser " + (zC ? "this one" : "another"), null === wC ? "no time" : `set ${((ZC-wC)/SC.g).toFixed(1)} h ago`, `losses ${"number"===typeof QC.losses?QC.losses:"unset (1)"}${null!==wC&&ZC-wC<SC.e?", the last within a day":""}`, `first page ${"hidden"===QC.firstPage||"visible"===QC.firstPage?QC.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof QC.holdStep?QC.holdStep:"unset (1)"}`].join(", ")
      }(CC, function(CC) {
        try {
          return "object" === typeof CC && null !== CC && CC.browser === (0, MC.h)()
        } catch {
          return !1
        }
      }(CC), Date.now())
    }

    function lC() {
      const CC = (0, MC.s)().now;
      return "number" === typeof(null === CC || void 0 === CC ? void 0 : CC.losses) ? CC.losses : null
    }

    function XC() {
      const {
        atLoad: CC,
        now: zC,
        unreported: ZC
      } = (0, MC.s)(), QC = JSON.stringify(CC) === JSON.stringify(zC) ? "lM" : `now ${EC(zC)}`;
      mC(`load (${fC.z?"wasm":"js"}, os ${(0,oC.getOperatingSystem)()}): stored loss ${EC(CC)}; ${QC}; unreported ${function(CC,zC){if(null===CC||void 0===CC||"object"!==typeof CC)return"none";const ZC=CC;return zC.map((CC=>`${CC} ${"number"===typeof ZC[CC]?ZC[CC]:0}`)).join(", ")}(ZC,MC.b)}; webgpu_loss_page ${MC.D}`), mC(`load: ${xC(HC())}; pack expected ${(0,nC.e)(oC.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function cC(CC) {
      KC = CC, mC(function(CC, zC, ZC) {
        const QC = CC.setting ? "the setting is on" : (0, pC.b)(CC.packActive, CC.defaultOffForPacks) ? "the pack forces it" : CC.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${AC(CC.useWebGpu)} (${QC}); ${JC(zC)}; webgpu fallback ${null!==ZC&&void 0!==ZC?ZC:"unset"}`
      }(CC, (0, bC.i)(), (0, oC.getWebGpuFallbackReason)()))
    }

    function uC(CC) {
      YC = CC, mC(iC(CC))
    }
    async function rC(CC, zC, QC, wC) {
      const bC = ++dC,
        nC = await async function(CC) {
          var zC, QC;
          const [{
            shaderPackPage: wC,
            harnessShaderPackMode: bC
          }, {
            getShaderPackPolicy: nC
          }, {
            packRunsIn: fC
          }] = await Promise.all([ZC.e(115).then((() => ZC(39051))), ZC.e(91).then((() => ZC(41087))), ZC.e(138).then((() => ZC(41090)))]), oC = await wC.load();
          if ("none" === oC.status) return null;
          const qC = null !== (zC = bC()) && void 0 !== zC ? zC : nC(CC),
            FC = "active" === oC.status ? oC.pack.variants : oC.variants,
            WC = fC(FC, qC);
          return {
            text: `${"active"===oC.status?vC(oC.pack.name,"active",FC.length):vC(null,`blocked (${oC.messageKey})`,null!==(QC=null===FC||void 0===FC?void 0:FC.length)&&void 0!==QC?QC:null)}; game policy ${qC}, runs in it ${WC?"yes":"no"}`,
            runs: WC
          }
        }(CC);
      if (null === nC) return void(hC.noPack() && mC(`join ${bC}: no shader pack on this page (further joins without one not logged)`));
      const fC = hC.join();
      if ("none" === fC) return;
      if ("cap" === fC) return void mC(`join ${bC}: further joins not logged`);
      const oC = function(CC) {
          switch (CC.status) {
            case "ok":
              return void 0 === CC.couldntRun ? "joined" : `joined without the pack: ${CC.couldntRun}`;
            case "wZ":
              return "wZ";
            case "failed":
              return `failed: ${CC.messageKey}`
          }
        }(zC),
        qC = ("ok" === zC.status ? zC.couldntRun : "failed" === zC.status ? zC.messageKey : void 0) === eC ? `; cause: ${wC()}` : "";
      "outcome" !== fC ? (mC(`join ${bC}: ${nC.text}`), nC.runs && (mC(`join ${bC}: needs WebGPU; ${QC()}`), mC(`join ${bC}: ${xC(HC())}`)), mC(`join ${bC}: ${oC}${qC}`)) : mC(`join ${bC}: ${oC}${qC}`)
    }

    function sC(CC, zC, ZC) {
      var QC;
      const wC = null !== (QC = null === zC || void 0 === zC ? void 0 : zC.isRunning()) && void 0 !== QC && QC;
      return rC(CC, ZC, (() => `Lite runtime ${null===zC?"no":"yes, running "+(wC?"yes":"no")}; ${JC((0,bC.i)())}`), (() => {
        return CC = KC, zC = HC(), ZC = "ios" === (0, oC.getOperatingSystem)(), QC = lC(), null === CC ? "engine choice not seen" : CC.packActive ? (0, pC.b)(CC.packActive, CC.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : zC.lossStopsPack ? `a loss ${IC(ZC,QC)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (zC.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var CC, zC, ZC, QC
      }))
    }

    function TC(CC, zC, ZC) {
      return rC(CC, null !== zC ? {
        status: "failed",
        messageKey: zC
      } : {
        status: "ok",
        couldntRun: null !== ZC && void 0 !== ZC ? ZC : void 0
      }, (() => null === YC ? "pick not seen" : iC(YC)), (() => function(CC, zC, ZC, QC) {
        var wC, bC, nC, fC;
        return null === CC ? "pick not seen" : "off_after_loss" === CC.reason ? `off after a loss, ${"pack"===CC.source?IC(ZC,QC):`from ${null!==(fC=CC.source)&&void 0!==fC?fC:"none"}`}` : "not_requested" === CC.reason ? `not requested, from ${null!==(nC=CC.source)&&void 0!==nC?nC:"none"} (setting ${zC.setting?"on":"off"})` : `${null!==(wC=CC.reason)&&void 0!==wC?wC:"none"}, from ${null!==(bC=CC.source)&&void 0!==bC?bC:"none"}`
      }(YC, HC(), "ios" === (0, oC.getOperatingSystem)(), lC())))
    }

    function aC(CC, zC, ZC) {
      const QC = hC.loss();
      if ("none" === QC) return;
      if ("cap" === QC) return void mC("further losses not logged");
      const wC = HC();
      mC(function(CC, zC, ZC, QC) {
        return `loss (${CC}): ${zC}${null===ZC?"":` ${RC(ZC,GC)}`}; ${QC}`
      }(CC, zC, ZC, `stored ${EC((0,MC.s)().now)}; holds ${wC.lossHolds?"yes":"no"}, stops packs ${wC.lossStopsPack?"yes":"no"}`))
    }
  },
  34076: (CC, zC, ZC) => {
    function QC(CC, zC) {
      return CC && !zC
    }
    ZC.d(zC, {
      b: () => QC
    })
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);