export const id = 65;
export const ids = [65];
export const modules = {
  36279: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      noteJsEngine: () => Lu,
      noteJsJoin: () => wu,
      noteWasmJoin: () => Zu,
      noteWasmPick: () => zu,
      noteWebGpuLoss: () => hu,
      startWebGpuLossDebug: () => cu
    });
    var Eu = yu(330),
      Ku = yu(27),
      Qu = yu(2653),
      mu = yu(3255),
      Ju = yu(624),
      Nu = yu(312),
      Xu = yu(106),
      Vu = yu(122),
      ru = yu(2655),
      Bu = yu(47),
      xu = yu(129),
      Su = yu(305),
      pu = yu(2707),
      Tu = yu(343),
      Wu = yu(8965);
    const ju = 40,
      Hu = 160;

    function du(uu, Ru) {
      return `"${(uu.length>Ru?`${uu.slice(0,Ru)}...`:uu).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function bu(uu) {
      return uu ? "yes" : "no"
    }

    function Cu(uu) {
      var Ru;
      const yu = uu.storedRenderer;
      return [`loss holds ${bu(uu.lossHolds)}`, `stops packs ${bu(uu.lossStopsPack)}`, `any loss ${bu(uu.anyLoss)}`, `old intel ${bu(uu.oldIntelDriver)}`, `default off for packs ${bu(uu.defaultOffForPacks)}`, `default off reason ${null!==(Ru=uu.defaultOffReason)&&void 0!==Ru?Ru:"none"}`, `setting ${uu.setting?"on":"off"} (stored ${null===uu.settingStored?"unset":uu.settingStored?"on":"off"})`, `renderer url ${null===uu.urlRenderer?"none":du(uu.urlRenderer,12)}, stored ${null===yu||void 0===yu?"none":du(String(yu),12)}`, `hidden-loss arm ${uu.hiddenLossArm}`].join(", ")
    }

    function ku(uu) {
      if (null === uu) return "no renderer settled";
      const {
        requested: Ru,
        choice: yu,
        source: Eu,
        fallbackReason: Ku
      } = uu;
      return `renderer requested ${Ru}, runs ${yu}, from ${Eu}${null===Ku?"":`, fell back: ${du(Ku,80)}`}`
    }

    function eu(uu, Ru) {
      return uu ? `stopping packs: iOS, ${null!==Ru&&void 0!==Ru?Ru:1} losses in a row within a day` : "stopping packs"
    }

    function Au(uu) {
      var Ru, yu, Eu;
      return `pick (wasm): backend ${null!==(Ru=uu.backend)&&void 0!==Ru?Ru:"none"}, webgpu fallback ${null!==(yu=uu.reason)&&void 0!==yu?yu:"none"}, from ${null!==(Eu=uu.source)&&void 0!==Eu?Eu:"none"}, storage pull breaks ${bu(uu.storagePullBreaks)}; packs run ${bu("webgpu"===uu.backend&&!uu.storagePullBreaks)}, else ${uu.noWebGpu}`
    }

    function Du(uu, Ru, yu) {
      return `pack ${null===uu?"(name not read)":du(uu,ju)} ${Ru}${null===yu?"":`, ${yu} variants`}`
    }
    const Mu = "shaderPack:failedWebGpuOff",
      Iu = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const uu = !this.noPackSaid;
          return this.noPackSaid = !0, uu
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let Gu = null,
      Uu = null,
      nu = 0;

    function su(uu) {
      (0, pu.i)("webgpuloss", uu)
    }

    function tu() {
      return {
        lossHolds: (0, Su.t)(),
        lossStopsPack: (0, Su.v)(),
        anyLoss: (0, Su.f)(),
        oldIntelDriver: !0 === Bu.i.getItem(xu.K),
        defaultOffForPacks: Ku.d.isWebGpuDefaultOff(),
        defaultOffReason: Ku.d.webGpuDefaultOffReason(),
        settingStored: Bu.i.getItem(Eu.pc),
        setting: Ku.d.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: Vu.currentUrl.getSearchParam(ru.b),
        storedRenderer: Bu.i.getItem(ru.f),
        hiddenLossArm: Nu.c.webgpu_hidden_loss_v1
      }
    }

    function lu(uu) {
      return function(uu, Ru, yu) {
        if (null === uu || void 0 === uu) return "none";
        if ("object" !== typeof uu) return `unreadable (${typeof uu})`;
        const Eu = uu,
          Ku = "number" === typeof Eu.at ? Eu.at : null;
        return ["browser " + (Ru ? "this one" : "another"), null === Ku ? "no time" : `set ${((yu-Ku)/Tu.j).toFixed(1)} h ago`, `losses ${"number"===typeof Eu.losses?Eu.losses:"unset (1)"}${null!==Ku&&yu-Ku<Tu.g?", the last within a day":""}`, `hidden-only ${"number"===typeof Eu.hiddenLosses?Eu.hiddenLosses:"no"}`, `first page ${"hidden"===Eu.firstPage||"visible"===Eu.firstPage?Eu.firstPage:"unset (visible)"}`].join(", ")
      }(uu, function(uu) {
        try {
          return "object" === typeof uu && null !== uu && uu.browser === (0, Su.b)()
        } catch {
          return !1
        }
      }(uu), Date.now())
    }

    function gu() {
      const uu = (0, Su.m)().now;
      return "number" === typeof(null === uu || void 0 === uu ? void 0 : uu.losses) ? uu.losses : null
    }

    function cu() {
      const {
        atLoad: uu,
        now: Ru,
        unreported: yu
      } = (0, Su.m)(), Eu = JSON.stringify(uu) === JSON.stringify(Ru) ? "kx" : `now ${lu(Ru)}`;
      su(`load (${Ju.q?"wasm":"js"}, os ${(0,Xu.getOperatingSystem)()}): stored loss ${lu(uu)}; ${Eu}; unreported ${function(uu){if(null===uu||void 0===uu||"object"!==typeof uu)return"none";const{hidden:Ru,visible:yu}=uu;return`
        hidden $ {
          "number" === typeof Ru ? Ru : 0
        }, visible $ {
          "number" === typeof yu ? yu : 0
        }
        `}(yu)}; webgpu_loss_page ${Su.u}`), su(`load: ${Cu(tu())}; pack expected ${(0,mu.h)(Xu.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function Lu(uu) {
      Gu = uu, su(function(uu, Ru, yu) {
        const Eu = uu.setting ? "the setting is on" : (0, Wu.e)(uu.packActive, uu.defaultOffForPacks) ? "the pack forces it" : uu.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${bu(uu.useWebGpu)} (${Eu}); ${ku(Ru)}; webgpu fallback ${null!==yu&&void 0!==yu?yu:"unset"}`
      }(uu, (0, Qu.f)(), (0, Xu.getWebGpuFallbackReason)()))
    }

    function zu(uu) {
      Uu = uu, su(Au(uu))
    }
    async function Fu(uu, Ru, Eu, Ku) {
      const Qu = ++nu,
        mu = await async function(uu) {
          var Ru, Eu;
          const [{
            shaderPackPage: Ku,
            harnessShaderPackMode: Qu
          }, {
            getShaderPackPolicy: mu
          }, {
            packRunsIn: Ju
          }] = await Promise.all([yu.e(129).then((() => yu(38963))), yu.e(89).then((() => yu(40860))), yu.e(133).then((() => yu(40869)))]), Nu = await Ku.load();
          if ("none" === Nu.status) return null;
          const Xu = null !== (Ru = Qu()) && void 0 !== Ru ? Ru : mu(uu),
            Vu = "active" === Nu.status ? Nu.pack.variants : Nu.variants,
            ru = Ju(Vu, Xu);
          return {
            text: `${"active"===Nu.status?Du(Nu.pack.name,"active",Vu.length):Du(null,`blocked (${Nu.messageKey})`,null!==(Eu=null===Vu||void 0===Vu?void 0:Vu.length)&&void 0!==Eu?Eu:null)}; game policy ${Xu}, runs in it ${ru?"yes":"no"}`,
            runs: ru
          }
        }(uu);
      if (null === mu) return void(Iu.noPack() && su(`join ${Qu}: no shader pack on this page (further joins without one not logged)`));
      const Ju = Iu.join();
      if ("none" === Ju) return;
      if ("cap" === Ju) return void su(`join ${Qu}: further joins not logged`);
      const Nu = function(uu) {
          switch (uu.status) {
            case "ok":
              return void 0 === uu.couldntRun ? "joined" : `joined without the pack: ${uu.couldntRun}`;
            case "Ty":
              return "Ty";
            case "failed":
              return `failed: ${uu.messageKey}`
          }
        }(Ru),
        Xu = ("ok" === Ru.status ? Ru.couldntRun : "failed" === Ru.status ? Ru.messageKey : void 0) === Mu ? `; cause: ${Ku()}` : "";
      "outcome" !== Ju ? (su(`join ${Qu}: ${mu.text}`), mu.runs && (su(`join ${Qu}: needs WebGPU; ${Eu()}`), su(`join ${Qu}: ${Cu(tu())}`)), su(`join ${Qu}: ${Nu}${Xu}`)) : su(`join ${Qu}: ${Nu}${Xu}`)
    }

    function wu(uu, Ru, yu) {
      var Eu;
      const Ku = null !== (Eu = null === Ru || void 0 === Ru ? void 0 : Ru.isRunning()) && void 0 !== Eu && Eu;
      return Fu(uu, yu, (() => `Lite runtime ${null===Ru?"no":"yes, running "+(Ku?"yes":"no")}; ${ku((0,Qu.f)())}`), (() => {
        return uu = Gu, Ru = tu(), yu = "ios" === (0, Xu.getOperatingSystem)(), Eu = gu(), null === uu ? "engine choice not seen" : uu.packActive ? (0, Wu.e)(uu.packActive, uu.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : Ru.lossStopsPack ? `a loss ${eu(yu,Eu)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (Ru.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var uu, Ru, yu, Eu
      }))
    }

    function Zu(uu, Ru, yu) {
      return Fu(uu, null !== Ru ? {
        status: "failed",
        messageKey: Ru
      } : {
        status: "ok",
        couldntRun: null !== yu && void 0 !== yu ? yu : void 0
      }, (() => null === Uu ? "pick not seen" : Au(Uu)), (() => function(uu, Ru, yu, Eu) {
        var Ku, Qu, mu, Ju;
        return null === uu ? "pick not seen" : "off_after_loss" === uu.reason ? `off after a loss, ${"pack"===uu.source?eu(yu,Eu):`from ${null!==(Ju=uu.source)&&void 0!==Ju?Ju:"none"}`}` : "not_requested" === uu.reason ? `not requested, from ${null!==(mu=uu.source)&&void 0!==mu?mu:"none"} (setting ${Ru.setting?"on":"off"})` : `${null!==(Ku=uu.reason)&&void 0!==Ku?Ku:"none"}, from ${null!==(Qu=uu.source)&&void 0!==Qu?Qu:"none"}`
      }(Uu, tu(), "ios" === (0, Xu.getOperatingSystem)(), gu())))
    }

    function hu(uu, Ru, yu) {
      const Eu = Iu.loss();
      if ("none" === Eu) return;
      if ("cap" === Eu) return void su("further losses not logged");
      const Ku = tu();
      su(function(uu, Ru, yu, Eu) {
        return `loss (${uu}): ${Ru}${null===yu?"":` ${du(yu,Hu)}`}; ${Eu}`
      }(uu, Ru, yu, `stored ${lu((0,Su.m)().now)}; holds ${Ku.lossHolds?"yes":"no"}, stops packs ${Ku.lossStopsPack?"yes":"no"}`))
    }
  },
  8965: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      return uu && !Ru
    }
    yu.d(Ru, {
      e: () => Eu
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);