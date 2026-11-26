export const id = 80;
export const ids = [80];
export const modules = {
  37314: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      noteJsEngine: () => RH,
      noteJsJoin: () => FH,
      noteWasmJoin: () => DH,
      noteWasmPick: () => jH,
      noteWebGpuLoss: () => wH,
      startWebGpuLossDebug: () => NH
    });
    var AH = LH(304),
      rH = LH(15),
      SH = LH(3054),
      hH = LH(3831),
      tH = LH(642),
      zH = LH(81),
      CH = LH(92),
      EH = LH(3056),
      XH = LH(30),
      GH = LH(105),
      YH = LH(293),
      uH = LH(633),
      QH = LH(3105),
      WH = LH(317),
      MH = LH(314),
      xH = LH(34901);
    const vH = 40,
      PH = 160;

    function TH(HH, BH) {
      return `"${(HH.length>BH?`${HH.slice(0,BH)}...`:HH).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function UH(HH) {
      return HH ? "yes" : "no"
    }

    function VH(HH) {
      var BH;
      const LH = HH.storedRenderer;
      return [`loss holds ${UH(HH.lossHolds)}`, `stops packs ${UH(HH.lossStopsPack)}`, `any loss ${UH(HH.anyLoss)}`, `old intel ${UH(HH.oldIntelDriver)}`, `default off for packs ${UH(HH.defaultOffForPacks)}`, `default off reason ${null!==(BH=HH.defaultOffReason)&&void 0!==BH?BH:"none"}`, `setting ${HH.setting?"on":"off"} (stored ${null===HH.settingStored?"unset":HH.settingStored?"on":"off"})`, `renderer url ${null===HH.urlRenderer?"none":TH(HH.urlRenderer,12)}, stored ${null===LH||void 0===LH?"none":TH(String(LH),12)}`].join(", ")
    }

    function OH(HH) {
      if (null === HH) return "no renderer settled";
      const {
        requested: BH,
        choice: LH,
        source: AH,
        fallbackReason: rH
      } = HH;
      return `renderer requested ${BH}, runs ${LH}, from ${AH}${null===rH?"":`, fell back: ${TH(rH,80)}`}`
    }

    function bH(HH, BH) {
      return HH ? `stopping packs: iOS, ${null!==BH&&void 0!==BH?BH:1} losses in a row within a day` : "stopping packs"
    }

    function kH(HH) {
      var BH, LH, AH;
      return `pick (wasm): backend ${null!==(BH=HH.backend)&&void 0!==BH?BH:"none"}, webgpu fallback ${null!==(LH=HH.reason)&&void 0!==LH?LH:"none"}, from ${null!==(AH=HH.source)&&void 0!==AH?AH:"none"}, storage pull breaks ${UH(HH.storagePullBreaks)}; packs run ${UH("webgpu"===HH.backend)}, else ${HH.noWebGpu}`
    }

    function mH(HH, BH, LH) {
      return `pack ${null===HH?"(name not read)":TH(HH,vH)} ${BH}${null===LH?"":`, ${LH} variants`}`
    }
    const oH = "shaderPack:failedWebGpuOff",
      IH = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const HH = !this.noPackSaid;
          return this.noPackSaid = !0, HH
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let fH = null,
      lH = null,
      KH = 0;

    function cH(HH) {
      (0, QH.j)("webgpuloss", HH)
    }

    function eH() {
      return {
        lossHolds: (0, YH.x)(),
        lossStopsPack: (0, YH.E)(),
        anyLoss: (0, YH.l)(),
        oldIntelDriver: !0 === XH.e.getItem(GH.L),
        defaultOffForPacks: rH.c.isWebGpuDefaultOff(),
        defaultOffReason: rH.c.webGpuDefaultOffReason(),
        settingStored: XH.e.getItem(AH.zc),
        setting: rH.c.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: CH.currentUrl.getSearchParam(EH.e),
        storedRenderer: XH.e.getItem(EH.g)
      }
    }

    function qH(HH) {
      return function(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null === HH || void 0 === HH) return "none";
        if ("object" !== typeof HH) return `unreadable (${typeof HH})`;
        const rH = HH,
          SH = "number" === typeof rH.at ? rH.at : null,
          hH = ["browser " + (BH ? "this one" : "another"), null === SH ? "no time" : `set ${((LH-SH)/WH.l).toFixed(1)} h ago`, `losses ${"number"===typeof rH.losses?rH.losses:"unset (1)"}${null!==SH&&LH-SH<WH.j?", the last within a day":""}`, `first page ${"hidden"===rH.firstPage||"visible"===rH.firstPage?rH.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof rH.holdStep?rH.holdStep:"unset (1)"}${AH?" (not read on iOS: a kept loss holds its whole life)":""}`];
        if (void 0 !== rH.reason || void 0 !== rH.message) {
          const HH = "string" === typeof rH.reason ? TH(rH.reason, MH.e) : "no reason";
          hH.push(`cause ${HH} ${!0===rH.causeSent?"reported":"unreported"}`)
        }
        return hH.join(", ")
      }(HH, function(HH) {
        try {
          return "object" === typeof HH && null !== HH && HH.browser === (0, YH.j)()
        } catch {
          return !1
        }
      }(HH), Date.now(), "ios" === (0, zH.getOperatingSystem)())
    }

    function gH() {
      const HH = (0, YH.s)().now;
      return "number" === typeof(null === HH || void 0 === HH ? void 0 : HH.losses) ? HH.losses : null
    }

    function NH() {
      const {
        atLoad: HH,
        now: BH,
        unreported: LH
      } = (0, YH.s)(), AH = JSON.stringify(HH) === JSON.stringify(BH) ? "hX" : `now ${qH(BH)}`;
      cH(`load (${tH.K?"wasm":"js"}, os ${(0,zH.getOperatingSystem)()}): stored loss ${qH(HH)}; ${AH}; cause kept apart ${function(HH,BH){if(null===HH||void 0===HH)return"none";const{reason:LH,at:AH}="object"===typeof HH?HH:{},rH="number"===typeof AH?`
        set $ {
          ((BH - AH) / WH.l).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof LH ? TH(LH, MH.e) : "no reason"
        }, $ {
          rH
        }
        `}((0,uH.h)(),Date.now())}; unreported ${function(HH,BH){if(null===HH||void 0===HH||"object"!==typeof HH)return"none";const LH=HH;return BH.map((HH=>`${HH} ${"number"===typeof LH[HH]?LH[HH]:0}`)).join(", ")}(LH,YH.f)}; webgpu_loss_page ${YH.z}`), cH(`load: ${VH(eH())}; pack expected ${(0,hH.h)(zH.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function RH(HH) {
      fH = HH, cH(function(HH, BH, LH) {
        const AH = HH.setting ? "the setting is on" : (0, xH.c)(HH.packActive, HH.defaultOffForPacks) ? "the pack forces it" : HH.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${UH(HH.useWebGpu)} (${AH}); ${OH(BH)}; webgpu fallback ${null!==LH&&void 0!==LH?LH:"unset"}`
      }(HH, (0, SH.l)(), (0, zH.getWebGpuFallbackReason)()))
    }

    function jH(HH) {
      lH = HH, cH(kH(HH))
    }
    async function nH(HH, BH, AH, rH) {
      const SH = ++KH,
        hH = await async function(HH) {
          var BH, AH;
          const [{
            shaderPackPage: rH,
            harnessShaderPackMode: SH
          }, {
            getShaderPackPolicy: hH
          }, {
            packRunsIn: tH
          }] = await Promise.all([LH.e(130).then((() => LH(40182))), LH.e(106).then((() => LH(44779))), LH.e(154).then((() => LH(44787)))]), zH = await rH.load();
          if ("none" === zH.status) return null;
          const CH = null !== (BH = SH()) && void 0 !== BH ? BH : hH(HH),
            EH = "active" === zH.status ? zH.pack.variants : zH.variants,
            XH = tH(EH, CH);
          return {
            text: `${"active"===zH.status?mH(zH.pack.name,"active",EH.length):mH(null,`blocked (${zH.messageKey})`,null!==(AH=null===EH||void 0===EH?void 0:EH.length)&&void 0!==AH?AH:null)}; game policy ${CH}, runs in it ${XH?"yes":"no"}`,
            runs: XH
          }
        }(HH);
      if (null === hH) return void(IH.noPack() && cH(`join ${SH}: no shader pack on this page (further joins without one not logged)`));
      const tH = IH.join();
      if ("none" === tH) return;
      if ("cap" === tH) return void cH(`join ${SH}: further joins not logged`);
      const zH = function(HH) {
          switch (HH.status) {
            case "ok":
              return void 0 === HH.couldntRun ? "joined" : `joined without the pack: ${HH.couldntRun}`;
            case "xB":
              return "xB";
            case "failed":
              return `failed: ${HH.messageKey}`
          }
        }(BH),
        CH = ("ok" === BH.status ? BH.couldntRun : "failed" === BH.status ? BH.messageKey : void 0) === oH ? `; cause: ${rH()}` : "";
      "outcome" !== tH ? (cH(`join ${SH}: ${hH.text}`), hH.runs && (cH(`join ${SH}: needs WebGPU; ${AH()}`), cH(`join ${SH}: ${VH(eH())}`)), cH(`join ${SH}: ${zH}${CH}`)) : cH(`join ${SH}: ${zH}${CH}`)
    }

    function FH(HH, BH, LH) {
      var AH;
      const rH = null !== (AH = null === BH || void 0 === BH ? void 0 : BH.isRunning()) && void 0 !== AH && AH;
      return nH(HH, LH, (() => `Lite runtime ${null===BH?"no":"yes, running "+(rH?"yes":"no")}; ${OH((0,SH.l)())}`), (() => {
        return HH = fH, BH = eH(), LH = "ios" === (0, zH.getOperatingSystem)(), AH = gH(), null === HH ? "engine choice not seen" : HH.packActive ? (0, xH.c)(HH.packActive, HH.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : BH.lossStopsPack ? `a loss ${bH(LH,AH)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (BH.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var HH, BH, LH, AH
      }))
    }

    function DH(HH, BH, LH) {
      return nH(HH, null !== BH ? {
        status: "failed",
        messageKey: BH
      } : {
        status: "ok",
        couldntRun: null !== LH && void 0 !== LH ? LH : void 0
      }, (() => null === lH ? "pick not seen" : kH(lH)), (() => function(HH, BH, LH, AH) {
        var rH, SH, hH, tH;
        return null === HH ? "pick not seen" : "off_after_loss" === HH.reason ? `off after a loss, ${"pack"===HH.source?bH(LH,AH):`from ${null!==(tH=HH.source)&&void 0!==tH?tH:"none"}`}` : "not_requested" === HH.reason ? `not requested, from ${null!==(hH=HH.source)&&void 0!==hH?hH:"none"} (setting ${BH.setting?"on":"off"})` : `${null!==(rH=HH.reason)&&void 0!==rH?rH:"none"}, from ${null!==(SH=HH.source)&&void 0!==SH?SH:"none"}`
      }(lH, eH(), "ios" === (0, zH.getOperatingSystem)(), gH())))
    }

    function wH(HH, BH, LH) {
      const AH = IH.loss();
      if ("none" === AH) return;
      if ("cap" === AH) return void cH("further losses not logged");
      const rH = eH();
      cH(function(HH, BH, LH, AH) {
        return `loss (${HH}): ${BH}${null===LH?"":` ${TH(LH,PH)}`}; ${AH}`
      }(HH, BH, LH, `stored ${qH((0,YH.s)().now)}; holds ${rH.lossHolds?"yes":"no"}, stops packs ${rH.lossStopsPack?"yes":"no"}`))
    }
  },
  34901: (HH, BH, LH) => {
    function AH(HH, BH) {
      return HH && !BH
    }
    LH.d(BH, {
      c: () => AH
    })
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);