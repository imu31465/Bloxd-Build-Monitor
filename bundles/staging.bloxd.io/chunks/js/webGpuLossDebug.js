export const id = 66;
export const ids = [66];
export const modules = {
  36060: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      noteJsEngine: () => jQ,
      noteJsJoin: () => fQ,
      noteWasmJoin: () => VQ,
      noteWasmPick: () => aQ,
      noteWebGpuLoss: () => hQ,
      startWebGpuLossDebug: () => lQ
    });
    var LQ = wQ(307),
      qQ = wQ(17),
      oQ = wQ(2689),
      DQ = wQ(3318),
      kQ = wQ(634),
      vQ = wQ(291),
      mQ = wQ(96),
      uQ = wQ(106),
      HQ = wQ(2697),
      bQ = wQ(27),
      YQ = wQ(118),
      xQ = wQ(282),
      AQ = wQ(2753),
      tQ = wQ(317),
      eQ = wQ(9001);
    const MQ = 40,
      GQ = 160;

    function pQ(QQ, FQ) {
      return `"${(QQ.length>FQ?`${QQ.slice(0,FQ)}...`:QQ).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function cQ(QQ) {
      return QQ ? "yes" : "no"
    }

    function CQ(QQ) {
      var FQ;
      const wQ = QQ.storedRenderer;
      return [`loss holds ${cQ(QQ.lossHolds)}`, `stops packs ${cQ(QQ.lossStopsPack)}`, `any loss ${cQ(QQ.anyLoss)}`, `old intel ${cQ(QQ.oldIntelDriver)}`, `default off for packs ${cQ(QQ.defaultOffForPacks)}`, `default off reason ${null!==(FQ=QQ.defaultOffReason)&&void 0!==FQ?FQ:"none"}`, `setting ${QQ.setting?"on":"off"} (stored ${null===QQ.settingStored?"unset":QQ.settingStored?"on":"off"})`, `renderer url ${null===QQ.urlRenderer?"none":pQ(QQ.urlRenderer,12)}, stored ${null===wQ||void 0===wQ?"none":pQ(String(wQ),12)}`, `hidden-loss arm ${QQ.hiddenLossArm}`].join(", ")
    }

    function SQ(QQ) {
      if (null === QQ) return "no renderer settled";
      const {
        requested: FQ,
        choice: wQ,
        source: LQ,
        fallbackReason: qQ
      } = QQ;
      return `renderer requested ${FQ}, runs ${wQ}, from ${LQ}${null===qQ?"":`, fell back: ${pQ(qQ,80)}`}`
    }

    function iQ(QQ, FQ) {
      return QQ ? `stopping packs: iOS, ${null!==FQ&&void 0!==FQ?FQ:1} losses in a row within a day` : "stopping packs"
    }

    function WQ(QQ) {
      var FQ, wQ, LQ;
      return `pick (wasm): backend ${null!==(FQ=QQ.backend)&&void 0!==FQ?FQ:"none"}, webgpu fallback ${null!==(wQ=QQ.reason)&&void 0!==wQ?wQ:"none"}, from ${null!==(LQ=QQ.source)&&void 0!==LQ?LQ:"none"}, storage pull breaks ${cQ(QQ.storagePullBreaks)}; packs run ${cQ("webgpu"===QQ.backend&&!QQ.storagePullBreaks)}, else ${QQ.noWebGpu}`
    }

    function RQ(QQ, FQ, wQ) {
      return `pack ${null===QQ?"(name not read)":pQ(QQ,MQ)} ${FQ}${null===wQ?"":`, ${wQ} variants`}`
    }
    const OQ = "shaderPack:failedWebGpuOff",
      sQ = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const QQ = !this.noPackSaid;
          return this.noPackSaid = !0, QQ
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let rQ = null,
      IQ = null,
      UQ = 0;

    function NQ(QQ) {
      (0, AQ.m)("webgpuloss", QQ)
    }

    function TQ() {
      return {
        lossHolds: (0, xQ.r)(),
        lossStopsPack: (0, xQ.v)(),
        anyLoss: (0, xQ.g)(),
        oldIntelDriver: !0 === bQ.i.getItem(YQ.J),
        defaultOffForPacks: qQ.c.isWebGpuDefaultOff(),
        defaultOffReason: qQ.c.webGpuDefaultOffReason(),
        settingStored: bQ.i.getItem(LQ.lc),
        setting: qQ.c.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: uQ.currentUrl.getSearchParam(HQ.b),
        storedRenderer: bQ.i.getItem(HQ.e),
        hiddenLossArm: vQ.e.webgpu_hidden_loss_v1
      }
    }

    function KQ(QQ) {
      return function(QQ, FQ, wQ) {
        if (null === QQ || void 0 === QQ) return "none";
        if ("object" !== typeof QQ) return `unreadable (${typeof QQ})`;
        const LQ = QQ,
          qQ = "number" === typeof LQ.at ? LQ.at : null;
        return ["browser " + (FQ ? "this one" : "another"), null === qQ ? "no time" : `set ${((wQ-qQ)/tQ.n).toFixed(1)} h ago`, `losses ${"number"===typeof LQ.losses?LQ.losses:"unset (1)"}${null!==qQ&&wQ-qQ<tQ.j?", the last within a day":""}`, `hidden-only ${"number"===typeof LQ.hiddenLosses?LQ.hiddenLosses:"no"}`, `first page ${"hidden"===LQ.firstPage||"visible"===LQ.firstPage?LQ.firstPage:"unset (visible)"}`].join(", ")
      }(QQ, function(QQ) {
        try {
          return "object" === typeof QQ && null !== QQ && QQ.browser === (0, xQ.e)()
        } catch {
          return !1
        }
      }(QQ), Date.now())
    }

    function zQ() {
      const QQ = (0, xQ.m)().now;
      return "number" === typeof(null === QQ || void 0 === QQ ? void 0 : QQ.losses) ? QQ.losses : null
    }

    function lQ() {
      const {
        atLoad: QQ,
        now: FQ,
        unreported: wQ
      } = (0, xQ.m)(), LQ = JSON.stringify(QQ) === JSON.stringify(FQ) ? "iY" : `now ${KQ(FQ)}`;
      NQ(`load (${kQ.s?"wasm":"js"}, os ${(0,mQ.getOperatingSystem)()}): stored loss ${KQ(QQ)}; ${LQ}; unreported ${function(QQ){if(null===QQ||void 0===QQ||"object"!==typeof QQ)return"none";const{hidden:FQ,visible:wQ}=QQ;return`
        hidden $ {
          "number" === typeof FQ ? FQ : 0
        }, visible $ {
          "number" === typeof wQ ? wQ : 0
        }
        `}(wQ)}; webgpu_loss_page ${xQ.t}`), NQ(`load: ${CQ(TQ())}; pack expected ${(0,DQ.f)(mQ.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function jQ(QQ) {
      rQ = QQ, NQ(function(QQ, FQ, wQ) {
        const LQ = QQ.setting ? "the setting is on" : (0, eQ.e)(QQ.packActive, QQ.defaultOffForPacks) ? "the pack forces it" : QQ.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${cQ(QQ.useWebGpu)} (${LQ}); ${SQ(FQ)}; webgpu fallback ${null!==wQ&&void 0!==wQ?wQ:"unset"}`
      }(QQ, (0, oQ.i)(), (0, mQ.getWebGpuFallbackReason)()))
    }

    function aQ(QQ) {
      IQ = QQ, NQ(WQ(QQ))
    }
    async function XQ(QQ, FQ, LQ, qQ) {
      const oQ = ++UQ,
        DQ = await async function(QQ) {
          var FQ, LQ;
          const [{
            shaderPackPage: qQ,
            harnessShaderPackMode: oQ
          }, {
            getShaderPackPolicy: DQ
          }, {
            packRunsIn: kQ
          }] = await Promise.all([wQ.e(130).then((() => wQ(38741))), wQ.e(90).then((() => wQ(40660))), wQ.e(134).then((() => wQ(40664)))]), vQ = await qQ.load();
          if ("none" === vQ.status) return null;
          const mQ = null !== (FQ = oQ()) && void 0 !== FQ ? FQ : DQ(QQ),
            uQ = "active" === vQ.status ? vQ.pack.variants : vQ.variants,
            HQ = kQ(uQ, mQ);
          return {
            text: `${"active"===vQ.status?RQ(vQ.pack.name,"active",uQ.length):RQ(null,`blocked (${vQ.messageKey})`,null!==(LQ=null===uQ||void 0===uQ?void 0:uQ.length)&&void 0!==LQ?LQ:null)}; game policy ${mQ}, runs in it ${HQ?"yes":"no"}`,
            runs: HQ
          }
        }(QQ);
      if (null === DQ) return void(sQ.noPack() && NQ(`join ${oQ}: no shader pack on this page (further joins without one not logged)`));
      const kQ = sQ.join();
      if ("none" === kQ) return;
      if ("cap" === kQ) return void NQ(`join ${oQ}: further joins not logged`);
      const vQ = function(QQ) {
          switch (QQ.status) {
            case "ok":
              return void 0 === QQ.couldntRun ? "joined" : `joined without the pack: ${QQ.couldntRun}`;
            case "wF":
              return "wF";
            case "failed":
              return `failed: ${QQ.messageKey}`
          }
        }(FQ),
        mQ = ("ok" === FQ.status ? FQ.couldntRun : "failed" === FQ.status ? FQ.messageKey : void 0) === OQ ? `; cause: ${qQ()}` : "";
      "outcome" !== kQ ? (NQ(`join ${oQ}: ${DQ.text}`), DQ.runs && (NQ(`join ${oQ}: needs WebGPU; ${LQ()}`), NQ(`join ${oQ}: ${CQ(TQ())}`)), NQ(`join ${oQ}: ${vQ}${mQ}`)) : NQ(`join ${oQ}: ${vQ}${mQ}`)
    }

    function fQ(QQ, FQ, wQ) {
      var LQ;
      const qQ = null !== (LQ = null === FQ || void 0 === FQ ? void 0 : FQ.isRunning()) && void 0 !== LQ && LQ;
      return XQ(QQ, wQ, (() => `Lite runtime ${null===FQ?"no":"yes, running "+(qQ?"yes":"no")}; ${SQ((0,oQ.i)())}`), (() => {
        return QQ = rQ, FQ = TQ(), wQ = "ios" === (0, mQ.getOperatingSystem)(), LQ = zQ(), null === QQ ? "engine choice not seen" : QQ.packActive ? (0, eQ.e)(QQ.packActive, QQ.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : FQ.lossStopsPack ? `a loss ${iQ(wQ,LQ)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (FQ.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var QQ, FQ, wQ, LQ
      }))
    }

    function VQ(QQ, FQ, wQ) {
      return XQ(QQ, null !== FQ ? {
        status: "failed",
        messageKey: FQ
      } : {
        status: "ok",
        couldntRun: null !== wQ && void 0 !== wQ ? wQ : void 0
      }, (() => null === IQ ? "pick not seen" : WQ(IQ)), (() => function(QQ, FQ, wQ, LQ) {
        var qQ, oQ, DQ, kQ;
        return null === QQ ? "pick not seen" : "off_after_loss" === QQ.reason ? `off after a loss, ${"pack"===QQ.source?iQ(wQ,LQ):`from ${null!==(kQ=QQ.source)&&void 0!==kQ?kQ:"none"}`}` : "not_requested" === QQ.reason ? `not requested, from ${null!==(DQ=QQ.source)&&void 0!==DQ?DQ:"none"} (setting ${FQ.setting?"on":"off"})` : `${null!==(qQ=QQ.reason)&&void 0!==qQ?qQ:"none"}, from ${null!==(oQ=QQ.source)&&void 0!==oQ?oQ:"none"}`
      }(IQ, TQ(), "ios" === (0, mQ.getOperatingSystem)(), zQ())))
    }

    function hQ(QQ, FQ, wQ) {
      const LQ = sQ.loss();
      if ("none" === LQ) return;
      if ("cap" === LQ) return void NQ("further losses not logged");
      const qQ = TQ();
      NQ(function(QQ, FQ, wQ, LQ) {
        return `loss (${QQ}): ${FQ}${null===wQ?"":` ${pQ(wQ,GQ)}`}; ${LQ}`
      }(QQ, FQ, wQ, `stored ${KQ((0,xQ.m)().now)}; holds ${qQ.lossHolds?"yes":"no"}, stops packs ${qQ.lossStopsPack?"yes":"no"}`))
    }
  },
  9001: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      return QQ && !FQ
    }
    wQ.d(FQ, {
      e: () => LQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);