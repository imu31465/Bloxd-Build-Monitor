export const id = 71;
export const ids = [71];
export const modules = {
  36729: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      noteJsEngine: () => fQ,
      noteJsJoin: () => oQ,
      noteWasmJoin: () => eQ,
      noteWasmPick: () => SQ,
      noteWebGpuLoss: () => nQ,
      startWebGpuLossDebug: () => kQ
    });
    var wQ = XQ(382),
      qQ = XQ(26),
      TQ = XQ(3007),
      zQ = XQ(3716),
      sQ = XQ(691),
      FQ = XQ(105),
      PQ = XQ(121),
      gQ = XQ(3012),
      JQ = XQ(43),
      rQ = XQ(134),
      IQ = XQ(367),
      jQ = XQ(684),
      BQ = XQ(3045),
      yQ = XQ(402),
      VQ = XQ(400),
      DQ = XQ(34426);
    const pQ = 40,
      GQ = 160;

    function UQ(QQ, WQ) {
      return `"${(QQ.length>WQ?`${QQ.slice(0,WQ)}...`:QQ).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function bQ(QQ) {
      return QQ ? "yes" : "no"
    }

    function vQ(QQ) {
      var WQ;
      const XQ = QQ.storedRenderer;
      return [`loss holds ${bQ(QQ.lossHolds)}`, `stops packs ${bQ(QQ.lossStopsPack)}`, `any loss ${bQ(QQ.anyLoss)}`, `old intel ${bQ(QQ.oldIntelDriver)}`, `default off for packs ${bQ(QQ.defaultOffForPacks)}`, `default off reason ${null!==(WQ=QQ.defaultOffReason)&&void 0!==WQ?WQ:"none"}`, `setting ${QQ.setting?"on":"off"} (stored ${null===QQ.settingStored?"unset":QQ.settingStored?"on":"off"})`, `renderer url ${null===QQ.urlRenderer?"none":UQ(QQ.urlRenderer,12)}, stored ${null===XQ||void 0===XQ?"none":UQ(String(XQ),12)}`].join(", ")
    }

    function dQ(QQ) {
      if (null === QQ) return "no renderer settled";
      const {
        requested: WQ,
        choice: XQ,
        source: wQ,
        fallbackReason: qQ
      } = QQ;
      return `renderer requested ${WQ}, runs ${XQ}, from ${wQ}${null===qQ?"":`, fell back: ${UQ(qQ,80)}`}`
    }

    function HQ(QQ, WQ) {
      return QQ ? `stopping packs: iOS, ${null!==WQ&&void 0!==WQ?WQ:1} losses in a row within a day` : "stopping packs"
    }

    function aQ(QQ) {
      var WQ, XQ, wQ;
      return `pick (wasm): backend ${null!==(WQ=QQ.backend)&&void 0!==WQ?WQ:"none"}, webgpu fallback ${null!==(XQ=QQ.reason)&&void 0!==XQ?XQ:"none"}, from ${null!==(wQ=QQ.source)&&void 0!==wQ?wQ:"none"}, storage pull breaks ${bQ(QQ.storagePullBreaks)}; packs run ${bQ("webgpu"===QQ.backend)}, else ${QQ.noWebGpu}`
    }

    function lQ(QQ, WQ, XQ) {
      return `pack ${null===QQ?"(name not read)":UQ(QQ,pQ)} ${WQ}${null===XQ?"":`, ${XQ} variants`}`
    }
    const hQ = "shaderPack:failedWebGpuOff",
      iQ = new class {
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
    let cQ = null,
      AQ = null,
      RQ = 0;

    function EQ(QQ) {
      (0, BQ.j)("webgpuloss", QQ)
    }

    function CQ() {
      return {
        lossHolds: (0, IQ.z)(),
        lossStopsPack: (0, IQ.D)(),
        anyLoss: (0, IQ.j)(),
        oldIntelDriver: !0 === JQ.i.getItem(rQ.B),
        defaultOffForPacks: qQ.b.isWebGpuDefaultOff(),
        defaultOffReason: qQ.b.webGpuDefaultOffReason(),
        settingStored: JQ.i.getItem(wQ.mc),
        setting: qQ.b.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: PQ.currentUrl.getSearchParam(gQ.c),
        storedRenderer: JQ.i.getItem(gQ.d)
      }
    }

    function uQ(QQ) {
      return function(QQ, WQ, XQ) {
        if (null === QQ || void 0 === QQ) return "none";
        if ("object" !== typeof QQ) return `unreadable (${typeof QQ})`;
        const wQ = QQ,
          qQ = "number" === typeof wQ.at ? wQ.at : null,
          TQ = ["browser " + (WQ ? "this one" : "another"), null === qQ ? "no time" : `set ${((XQ-qQ)/yQ.k).toFixed(1)} h ago`, `losses ${"number"===typeof wQ.losses?wQ.losses:"unset (1)"}${null!==qQ&&XQ-qQ<yQ.i?", the last within a day":""}`, `first page ${"hidden"===wQ.firstPage||"visible"===wQ.firstPage?wQ.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof wQ.holdStep?wQ.holdStep:"unset (1)"}`];
        if (void 0 !== wQ.reason || void 0 !== wQ.message) {
          const QQ = "string" === typeof wQ.reason ? UQ(wQ.reason, VQ.b) : "no reason";
          TQ.push(`cause ${QQ} ${!0===wQ.causeSent?"reported":"unreported"}`)
        }
        return TQ.join(", ")
      }(QQ, function(QQ) {
        try {
          return "object" === typeof QQ && null !== QQ && QQ.browser === (0, IQ.f)()
        } catch {
          return !1
        }
      }(QQ), Date.now())
    }

    function LQ() {
      const QQ = (0, IQ.s)().now;
      return "number" === typeof(null === QQ || void 0 === QQ ? void 0 : QQ.losses) ? QQ.losses : null
    }

    function kQ() {
      const {
        atLoad: QQ,
        now: WQ,
        unreported: XQ
      } = (0, IQ.s)(), wQ = JSON.stringify(QQ) === JSON.stringify(WQ) ? "HI" : `now ${uQ(WQ)}`;
      EQ(`load (${sQ.x?"wasm":"js"}, os ${(0,FQ.getOperatingSystem)()}): stored loss ${uQ(QQ)}; ${wQ}; cause kept apart ${function(QQ,WQ){if(null===QQ||void 0===QQ)return"none";const{reason:XQ,at:wQ}="object"===typeof QQ?QQ:{},qQ="number"===typeof wQ?`
        set $ {
          ((WQ - wQ) / yQ.k).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof XQ ? UQ(XQ, VQ.b) : "no reason"
        }, $ {
          qQ
        }
        `}((0,jQ.m)(),Date.now())}; unreported ${function(QQ,WQ){if(null===QQ||void 0===QQ||"object"!==typeof QQ)return"none";const XQ=QQ;return WQ.map((QQ=>`${QQ} ${"number"===typeof XQ[QQ]?XQ[QQ]:0}`)).join(", ")}(XQ,IQ.d)}; webgpu_loss_page ${IQ.A}`), EQ(`load: ${vQ(CQ())}; pack expected ${(0,zQ.f)(FQ.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function fQ(QQ) {
      cQ = QQ, EQ(function(QQ, WQ, XQ) {
        const wQ = QQ.setting ? "the setting is on" : (0, DQ.d)(QQ.packActive, QQ.defaultOffForPacks) ? "the pack forces it" : QQ.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${bQ(QQ.useWebGpu)} (${wQ}); ${dQ(WQ)}; webgpu fallback ${null!==XQ&&void 0!==XQ?XQ:"unset"}`
      }(QQ, (0, TQ.l)(), (0, FQ.getWebGpuFallbackReason)()))
    }

    function SQ(QQ) {
      AQ = QQ, EQ(aQ(QQ))
    }
    async function tQ(QQ, WQ, wQ, qQ) {
      const TQ = ++RQ,
        zQ = await async function(QQ) {
          var WQ, wQ;
          const [{
            shaderPackPage: qQ,
            harnessShaderPackMode: TQ
          }, {
            getShaderPackPolicy: zQ
          }, {
            packRunsIn: sQ
          }] = await Promise.all([XQ.e(119).then((() => XQ(39494))), XQ.e(96).then((() => XQ(41505))), XQ.e(143).then((() => XQ(41513)))]), FQ = await qQ.load();
          if ("none" === FQ.status) return null;
          const PQ = null !== (WQ = TQ()) && void 0 !== WQ ? WQ : zQ(QQ),
            gQ = "active" === FQ.status ? FQ.pack.variants : FQ.variants,
            JQ = sQ(gQ, PQ);
          return {
            text: `${"active"===FQ.status?lQ(FQ.pack.name,"active",gQ.length):lQ(null,`blocked (${FQ.messageKey})`,null!==(wQ=null===gQ||void 0===gQ?void 0:gQ.length)&&void 0!==wQ?wQ:null)}; game policy ${PQ}, runs in it ${JQ?"yes":"no"}`,
            runs: JQ
          }
        }(QQ);
      if (null === zQ) return void(iQ.noPack() && EQ(`join ${TQ}: no shader pack on this page (further joins without one not logged)`));
      const sQ = iQ.join();
      if ("none" === sQ) return;
      if ("cap" === sQ) return void EQ(`join ${TQ}: further joins not logged`);
      const FQ = function(QQ) {
          switch (QQ.status) {
            case "ok":
              return void 0 === QQ.couldntRun ? "joined" : `joined without the pack: ${QQ.couldntRun}`;
            case "fX":
              return "fX";
            case "failed":
              return `failed: ${QQ.messageKey}`
          }
        }(WQ),
        PQ = ("ok" === WQ.status ? WQ.couldntRun : "failed" === WQ.status ? WQ.messageKey : void 0) === hQ ? `; cause: ${qQ()}` : "";
      "outcome" !== sQ ? (EQ(`join ${TQ}: ${zQ.text}`), zQ.runs && (EQ(`join ${TQ}: needs WebGPU; ${wQ()}`), EQ(`join ${TQ}: ${vQ(CQ())}`)), EQ(`join ${TQ}: ${FQ}${PQ}`)) : EQ(`join ${TQ}: ${FQ}${PQ}`)
    }

    function oQ(QQ, WQ, XQ) {
      var wQ;
      const qQ = null !== (wQ = null === WQ || void 0 === WQ ? void 0 : WQ.isRunning()) && void 0 !== wQ && wQ;
      return tQ(QQ, XQ, (() => `Lite runtime ${null===WQ?"no":"yes, running "+(qQ?"yes":"no")}; ${dQ((0,TQ.l)())}`), (() => {
        return QQ = cQ, WQ = CQ(), XQ = "ios" === (0, FQ.getOperatingSystem)(), wQ = LQ(), null === QQ ? "engine choice not seen" : QQ.packActive ? (0, DQ.d)(QQ.packActive, QQ.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : WQ.lossStopsPack ? `a loss ${HQ(XQ,wQ)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (WQ.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var QQ, WQ, XQ, wQ
      }))
    }

    function eQ(QQ, WQ, XQ) {
      return tQ(QQ, null !== WQ ? {
        status: "failed",
        messageKey: WQ
      } : {
        status: "ok",
        couldntRun: null !== XQ && void 0 !== XQ ? XQ : void 0
      }, (() => null === AQ ? "pick not seen" : aQ(AQ)), (() => function(QQ, WQ, XQ, wQ) {
        var qQ, TQ, zQ, sQ;
        return null === QQ ? "pick not seen" : "off_after_loss" === QQ.reason ? `off after a loss, ${"pack"===QQ.source?HQ(XQ,wQ):`from ${null!==(sQ=QQ.source)&&void 0!==sQ?sQ:"none"}`}` : "not_requested" === QQ.reason ? `not requested, from ${null!==(zQ=QQ.source)&&void 0!==zQ?zQ:"none"} (setting ${WQ.setting?"on":"off"})` : `${null!==(qQ=QQ.reason)&&void 0!==qQ?qQ:"none"}, from ${null!==(TQ=QQ.source)&&void 0!==TQ?TQ:"none"}`
      }(AQ, CQ(), "ios" === (0, FQ.getOperatingSystem)(), LQ())))
    }

    function nQ(QQ, WQ, XQ) {
      const wQ = iQ.loss();
      if ("none" === wQ) return;
      if ("cap" === wQ) return void EQ("further losses not logged");
      const qQ = CQ();
      EQ(function(QQ, WQ, XQ, wQ) {
        return `loss (${QQ}): ${WQ}${null===XQ?"":` ${UQ(XQ,GQ)}`}; ${wQ}`
      }(QQ, WQ, XQ, `stored ${uQ((0,IQ.s)().now)}; holds ${qQ.lossHolds?"yes":"no"}, stops packs ${qQ.lossStopsPack?"yes":"no"}`))
    }
  },
  34426: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      return QQ && !WQ
    }
    XQ.d(WQ, {
      d: () => wQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);