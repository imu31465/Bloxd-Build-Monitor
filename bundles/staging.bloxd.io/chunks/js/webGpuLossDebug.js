export const id = 81;
export const ids = [81];
export const modules = {
  37668: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      noteJsEngine: () => fW,
      noteJsJoin: () => BW,
      noteWasmJoin: () => qW,
      noteWasmPick: () => CW,
      noteWebGpuLoss: () => RW,
      startWebGpuLossDebug: () => pW
    });
    var mW = OW(327),
      EW = OW(25),
      NW = OW(3831),
      PW = OW(4666),
      LW = OW(671),
      cW = OW(100),
      wW = OW(109),
      tW = OW(3837),
      ZW = OW(39),
      xW = OW(119),
      lW = OW(299),
      AW = OW(315),
      bW = OW(662),
      jW = OW(3866),
      UW = OW(344),
      kW = OW(339),
      sW = OW(35150);
    const MW = 40,
      KW = 160;

    function SW(WW, iW) {
      return `"${(WW.length>iW?`${WW.slice(0,iW)}...`:WW).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function YW(WW) {
      return WW ? "yes" : "no"
    }

    function yW(WW) {
      var iW;
      const OW = WW.storedRenderer;
      return [`loss holds ${YW(WW.lossHolds)}`, `stops packs ${YW(WW.lossStopsPack)}`, `any loss ${YW(WW.anyLoss)}`, `old intel ${YW(WW.oldIntelDriver)}`, `few wasm memories ${YW(WW.fewWasmMemories)}`, `default off for packs ${YW(WW.defaultOffForPacks)}`, `default off reason ${null!==(iW=WW.defaultOffReason)&&void 0!==iW?iW:"none"}`, `setting ${WW.setting?"on":"off"} (stored ${null===WW.settingStored?"unset":WW.settingStored?"on":"off"})`, `renderer url ${null===WW.urlRenderer?"none":SW(WW.urlRenderer,12)}, stored ${null===OW||void 0===OW?"none":SW(String(OW),12)}`].join(", ")
    }

    function TW(WW) {
      if (null === WW) return "no renderer settled";
      const {
        requested: iW,
        choice: OW,
        source: mW,
        fallbackReason: EW
      } = WW;
      return `renderer requested ${iW}, runs ${OW}, from ${mW}${null===EW?"":`, fell back: ${SW(EW,80)}`}`
    }

    function JW(WW, iW) {
      return WW ? `stopping packs: iOS, ${null!==iW&&void 0!==iW?iW:1} losses in a row within a day` : "stopping packs"
    }

    function hW(WW) {
      var iW, OW, mW;
      return `pick (wasm): backend ${null!==(iW=WW.backend)&&void 0!==iW?iW:"none"}, webgpu fallback ${null!==(OW=WW.reason)&&void 0!==OW?OW:"none"}, from ${null!==(mW=WW.source)&&void 0!==mW?mW:"none"}, storage pull breaks ${YW(WW.storagePullBreaks)}; packs run ${YW("webgpu"===WW.backend)}, else ${WW.noWebGpu}`
    }

    function HW(WW, iW, OW) {
      return `pack ${null===WW?"(name not read)":SW(WW,MW)} ${iW}${null===OW?"":`, ${OW} variants`}`
    }
    const nW = "shaderPack:failedWebGpuOff",
      uW = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const WW = !this.noPackSaid;
          return this.noPackSaid = !0, WW
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let oW = null,
      dW = null,
      eW = 0;

    function vW(WW) {
      (0, jW.m)("webgpuloss", WW)
    }

    function gW() {
      return {
        lossHolds: (0, AW.A)(),
        lossStopsPack: (0, AW.H)(),
        anyLoss: (0, AW.l)(),
        oldIntelDriver: !0 === ZW.i.getItem(xW.A),
        fewWasmMemories: (0, lW.e)(),
        defaultOffForPacks: EW.d.isWebGpuDefaultOff(),
        defaultOffReason: EW.d.webGpuDefaultOffReason(),
        settingStored: ZW.i.getItem(mW.pc),
        setting: EW.d.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: wW.currentUrl.getSearchParam(tW.e),
        storedRenderer: ZW.i.getItem(tW.h)
      }
    }

    function DW(WW) {
      return function(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null === WW || void 0 === WW) return "none";
        if ("object" !== typeof WW) return `unreadable (${typeof WW})`;
        const EW = WW,
          NW = "number" === typeof EW.at ? EW.at : null,
          PW = ["browser " + (iW ? "this one" : "another"), null === NW ? "no time" : `set ${((OW-NW)/UW.m).toFixed(1)} h ago`, `losses ${"number"===typeof EW.losses?EW.losses:"unset (1)"}${null!==NW&&OW-NW<UW.k?", the last within a day":""}`, `first page ${"hidden"===EW.firstPage||"visible"===EW.firstPage?EW.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof EW.holdStep?EW.holdStep:"unset (1)"}${mW?" (not read on iOS: a kept loss holds its whole life)":""}`];
        if (void 0 !== EW.reason || void 0 !== EW.message) {
          const WW = "string" === typeof EW.reason ? SW(EW.reason, kW.c) : "no reason";
          PW.push(`cause ${WW} ${!0===EW.causeSent?"reported":"unreported"}`)
        }
        return PW.join(", ")
      }(WW, function(WW) {
        try {
          return "object" === typeof WW && null !== WW && WW.browser === (0, AW.h)()
        } catch {
          return !1
        }
      }(WW), Date.now(), "ios" === (0, cW.getOperatingSystem)())
    }

    function VW() {
      const WW = (0, AW.t)().now;
      return "number" === typeof(null === WW || void 0 === WW ? void 0 : WW.losses) ? WW.losses : null
    }

    function pW() {
      const {
        atLoad: WW,
        now: iW,
        unreported: OW
      } = (0, AW.t)(), mW = JSON.stringify(WW) === JSON.stringify(iW) ? "EZ" : `now ${DW(iW)}`;
      vW(`load (${LW.K?"wasm":"js"}, os ${(0,cW.getOperatingSystem)()}): stored loss ${DW(WW)}; ${mW}; cause kept apart ${function(WW,iW){if(null===WW||void 0===WW)return"none";const{reason:OW,at:mW}="object"===typeof WW?WW:{},EW="number"===typeof mW?`
        set $ {
          ((iW - mW) / UW.m).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof OW ? SW(OW, kW.c) : "no reason"
        }, $ {
          EW
        }
        `}((0,bW.i)(),Date.now())}; unreported ${function(WW,iW){if(null===WW||void 0===WW||"object"!==typeof WW)return"none";const OW=WW;return iW.map((WW=>`${WW} ${"number"===typeof OW[WW]?OW[WW]:0}`)).join(", ")}(OW,AW.d)}; webgpu_loss_page ${AW.C}`), vW(`load: ${yW(gW())}; pack expected ${(0,PW.c)(cW.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function fW(WW) {
      oW = WW, vW(function(WW, iW, OW) {
        const mW = WW.setting ? "the setting is on" : (0, sW.c)(WW.packActive, WW.defaultOffForPacks) ? "the pack forces it" : WW.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${YW(WW.useWebGpu)} (${mW}); ${TW(iW)}; webgpu fallback ${null!==OW&&void 0!==OW?OW:"unset"}`
      }(WW, (0, NW.g)(), (0, cW.getWebGpuFallbackReason)()))
    }

    function CW(WW) {
      dW = WW, vW(hW(WW))
    }
    async function XW(WW, iW, mW, EW) {
      const NW = ++eW,
        PW = await async function(WW) {
          var iW, mW;
          const [{
            shaderPackPage: EW,
            harnessShaderPackMode: NW
          }, {
            getShaderPackPolicy: PW
          }, {
            packRunsIn: LW
          }] = await Promise.all([OW.e(138).then((() => OW(40448))), OW.e(108).then((() => OW(44879))), OW.e(162).then((() => OW(44886)))]), cW = await EW.load();
          if ("none" === cW.status) return null;
          const wW = null !== (iW = NW()) && void 0 !== iW ? iW : PW(WW),
            tW = "active" === cW.status ? cW.pack.variants : cW.variants,
            ZW = LW(tW, wW);
          return {
            text: `${"active"===cW.status?HW(cW.pack.name,"active",tW.length):HW(null,`blocked (${cW.messageKey})`,null!==(mW=null===tW||void 0===tW?void 0:tW.length)&&void 0!==mW?mW:null)}; game policy ${wW}, runs in it ${ZW?"yes":"no"}`,
            runs: ZW
          }
        }(WW);
      if (null === PW) return void(uW.noPack() && vW(`join ${NW}: no shader pack on this page (further joins without one not logged)`));
      const LW = uW.join();
      if ("none" === LW) return;
      if ("cap" === LW) return void vW(`join ${NW}: further joins not logged`);
      const cW = function(WW) {
          switch (WW.status) {
            case "ok":
              return void 0 === WW.couldntRun ? "joined" : `joined without the pack: ${WW.couldntRun}`;
            case "uW":
              return "uW";
            case "failed":
              return `failed: ${WW.messageKey}`
          }
        }(iW),
        wW = ("ok" === iW.status ? iW.couldntRun : "failed" === iW.status ? iW.messageKey : void 0) === nW ? `; cause: ${EW()}` : "";
      "outcome" !== LW ? (vW(`join ${NW}: ${PW.text}`), PW.runs && (vW(`join ${NW}: needs WebGPU; ${mW()}`), vW(`join ${NW}: ${yW(gW())}`)), vW(`join ${NW}: ${cW}${wW}`)) : vW(`join ${NW}: ${cW}${wW}`)
    }

    function BW(WW, iW, OW) {
      var mW;
      const EW = null !== (mW = null === iW || void 0 === iW ? void 0 : iW.isRunning()) && void 0 !== mW && mW;
      return XW(WW, OW, (() => `Lite runtime ${null===iW?"no":"yes, running "+(EW?"yes":"no")}; ${TW((0,NW.g)())}`), (() => function(WW, iW, OW, mW) {
        if (null === WW) return "engine choice not seen";
        if (!WW.packActive) return "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (iW.lossStopsPack ? "" : " (one that doesn't stop packs)");
        if ((0, sW.c)(WW.packActive, WW.defaultOffForPacks)) return "the pack forced WebGPU, yet nothing asked for a renderer: unexpected";
        if (!iW.lossStopsPack) return (iW.oldIntelDriver ? "old Intel driver verdict" : "few wasm memories or old Intel driver verdict, since cleared") + ", worded off as a loss is stored";
        return `a loss ${JW(OW,mW)}`
      }(oW, gW(), "ios" === (0, cW.getOperatingSystem)(), VW())))
    }

    function qW(WW, iW, OW) {
      return XW(WW, null !== iW ? {
        status: "failed",
        messageKey: iW
      } : {
        status: "ok",
        couldntRun: null !== OW && void 0 !== OW ? OW : void 0
      }, (() => null === dW ? "pick not seen" : hW(dW)), (() => function(WW, iW, OW, mW) {
        var EW, NW, PW, LW;
        return null === WW ? "pick not seen" : "off_after_loss" === WW.reason ? `off after a loss, ${"pack"===WW.source?JW(OW,mW):`from ${null!==(LW=WW.source)&&void 0!==LW?LW:"none"}`}` : "not_requested" === WW.reason ? `not requested, from ${null!==(PW=WW.source)&&void 0!==PW?PW:"none"} (setting ${iW.setting?"on":"off"})` : `${null!==(EW=WW.reason)&&void 0!==EW?EW:"none"}, from ${null!==(NW=WW.source)&&void 0!==NW?NW:"none"}`
      }(dW, gW(), "ios" === (0, cW.getOperatingSystem)(), VW())))
    }

    function RW(WW, iW, OW) {
      const mW = uW.loss();
      if ("none" === mW) return;
      if ("cap" === mW) return void vW("further losses not logged");
      const EW = gW();
      vW(function(WW, iW, OW, mW) {
        return `loss (${WW}): ${iW}${null===OW?"":` ${SW(OW,KW)}`}; ${mW}`
      }(WW, iW, OW, `stored ${DW((0,AW.t)().now)}; holds ${EW.lossHolds?"yes":"no"}, stops packs ${EW.lossStopsPack?"yes":"no"}`))
    }
  },
  35150: (WW, iW, OW) => {
    function mW(WW, iW) {
      return WW && !iW
    }
    OW.d(iW, {
      c: () => mW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);