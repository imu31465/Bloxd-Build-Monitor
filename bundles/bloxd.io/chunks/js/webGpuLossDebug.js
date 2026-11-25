export const id = 69;
export const ids = [69];
export const modules = {
  36803: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      noteJsEngine: () => Su,
      noteJsJoin: () => Bu,
      noteWasmJoin: () => Lu,
      noteWasmPick: () => Iu,
      noteWebGpuLoss: () => tu,
      startWebGpuLossDebug: () => Wu
    });
    var su = ju(337),
      Uu = ju(22),
      Zu = ju(2908),
      Xu = ju(3651),
      lu = ju(680),
      qu = ju(91),
      fu = ju(103),
      Cu = ju(2916),
      bu = ju(31),
      cu = ju(115),
      Nu = ju(326),
      Ou = ju(669),
      Yu = ju(2943),
      hu = ju(349),
      Du = ju(345),
      gu = ju(34483);
    const Mu = 40,
      eu = 160;

    function Gu(uu, Eu) {
      return `"${(uu.length>Eu?`${uu.slice(0,Eu)}...`:uu).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function pu(uu) {
      return uu ? "yes" : "no"
    }

    function wu(uu) {
      var Eu;
      const ju = uu.storedRenderer;
      return [`loss holds ${pu(uu.lossHolds)}`, `stops packs ${pu(uu.lossStopsPack)}`, `any loss ${pu(uu.anyLoss)}`, `old intel ${pu(uu.oldIntelDriver)}`, `default off for packs ${pu(uu.defaultOffForPacks)}`, `default off reason ${null!==(Eu=uu.defaultOffReason)&&void 0!==Eu?Eu:"none"}`, `setting ${uu.setting?"on":"off"} (stored ${null===uu.settingStored?"unset":uu.settingStored?"on":"off"})`, `renderer url ${null===uu.urlRenderer?"none":Gu(uu.urlRenderer,12)}, stored ${null===ju||void 0===ju?"none":Gu(String(ju),12)}`].join(", ")
    }

    function Ju(uu) {
      if (null === uu) return "no renderer settled";
      const {
        requested: Eu,
        choice: ju,
        source: su,
        fallbackReason: Uu
      } = uu;
      return `renderer requested ${Eu}, runs ${ju}, from ${su}${null===Uu?"":`, fell back: ${Gu(Uu,80)}`}`
    }

    function du(uu, Eu) {
      return uu ? `stopping packs: iOS, ${null!==Eu&&void 0!==Eu?Eu:1} losses in a row within a day` : "stopping packs"
    }

    function au(uu) {
      var Eu, ju, su;
      return `pick (wasm): backend ${null!==(Eu=uu.backend)&&void 0!==Eu?Eu:"none"}, webgpu fallback ${null!==(ju=uu.reason)&&void 0!==ju?ju:"none"}, from ${null!==(su=uu.source)&&void 0!==su?su:"none"}, storage pull breaks ${pu(uu.storagePullBreaks)}; packs run ${pu("webgpu"===uu.backend)}, else ${uu.noWebGpu}`
    }

    function Pu(uu, Eu, ju) {
      return `pack ${null===uu?"(name not read)":Gu(uu,Mu)} ${Eu}${null===ju?"":`, ${ju} variants`}`
    }
    const ou = "shaderPack:failedWebGpuOff",
      ku = new class {
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
    let mu = null,
      vu = null,
      Ku = 0;

    function Vu(uu) {
      (0, Yu.k)("webgpuloss", uu)
    }

    function ru() {
      return {
        lossHolds: (0, Nu.y)(),
        lossStopsPack: (0, Nu.D)(),
        anyLoss: (0, Nu.g)(),
        oldIntelDriver: !0 === bu.k.getItem(cu.L),
        defaultOffForPacks: Uu.d.isWebGpuDefaultOff(),
        defaultOffReason: Uu.d.webGpuDefaultOffReason(),
        settingStored: bu.k.getItem(su.jc),
        setting: Uu.d.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: fu.currentUrl.getSearchParam(Cu.e),
        storedRenderer: bu.k.getItem(Cu.f)
      }
    }

    function Qu(uu) {
      return function(uu, Eu, ju) {
        if (null === uu || void 0 === uu) return "none";
        if ("object" !== typeof uu) return `unreadable (${typeof uu})`;
        const su = uu,
          Uu = "number" === typeof su.at ? su.at : null,
          Zu = ["browser " + (Eu ? "this one" : "another"), null === Uu ? "no time" : `set ${((ju-Uu)/hu.i).toFixed(1)} h ago`, `losses ${"number"===typeof su.losses?su.losses:"unset (1)"}${null!==Uu&&ju-Uu<hu.h?", the last within a day":""}`, `first page ${"hidden"===su.firstPage||"visible"===su.firstPage?su.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof su.holdStep?su.holdStep:"unset (1)"}`];
        if (void 0 !== su.reason || void 0 !== su.message) {
          const uu = "string" === typeof su.reason ? Gu(su.reason, Du.e) : "no reason";
          Zu.push(`cause ${uu} ${!0===su.causeSent?"reported":"unreported"}`)
        }
        return Zu.join(", ")
      }(uu, function(uu) {
        try {
          return "object" === typeof uu && null !== uu && uu.browser === (0, Nu.e)()
        } catch {
          return !1
        }
      }(uu), Date.now())
    }

    function iu() {
      const uu = (0, Nu.n)().now;
      return "number" === typeof(null === uu || void 0 === uu ? void 0 : uu.losses) ? uu.losses : null
    }

    function Wu() {
      const {
        atLoad: uu,
        now: Eu,
        unreported: ju
      } = (0, Nu.n)(), su = JSON.stringify(uu) === JSON.stringify(Eu) ? "oN" : `now ${Qu(Eu)}`;
      Vu(`load (${lu.y?"wasm":"js"}, os ${(0,qu.getOperatingSystem)()}): stored loss ${Qu(uu)}; ${su}; cause kept apart ${function(uu,Eu){if(null===uu||void 0===uu)return"none";const{reason:ju,at:su}="object"===typeof uu?uu:{},Uu="number"===typeof su?`
        set $ {
          ((Eu - su) / hu.i).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof ju ? Gu(ju, Du.e) : "no reason"
        }, $ {
          Uu
        }
        `}((0,Ou.k)(),Date.now())}; unreported ${function(uu,Eu){if(null===uu||void 0===uu||"object"!==typeof uu)return"none";const ju=uu;return Eu.map((uu=>`${uu} ${"number"===typeof ju[uu]?ju[uu]:0}`)).join(", ")}(ju,Nu.d)}; webgpu_loss_page ${Nu.z}`), Vu(`load: ${wu(ru())}; pack expected ${(0,Xu.d)(qu.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function Su(uu) {
      mu = uu, Vu(function(uu, Eu, ju) {
        const su = uu.setting ? "the setting is on" : (0, gu.c)(uu.packActive, uu.defaultOffForPacks) ? "the pack forces it" : uu.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${pu(uu.useWebGpu)} (${su}); ${Ju(Eu)}; webgpu fallback ${null!==ju&&void 0!==ju?ju:"unset"}`
      }(uu, (0, Zu.i)(), (0, qu.getWebGpuFallbackReason)()))
    }

    function Iu(uu) {
      vu = uu, Vu(au(uu))
    }
    async function Fu(uu, Eu, su, Uu) {
      const Zu = ++Ku,
        Xu = await async function(uu) {
          var Eu, su;
          const [{
            shaderPackPage: Uu,
            harnessShaderPackMode: Zu
          }, {
            getShaderPackPolicy: Xu
          }, {
            packRunsIn: lu
          }] = await Promise.all([ju.e(117).then((() => ju(39525))), ju.e(93).then((() => ju(41498))), ju.e(141).then((() => ju(41507)))]), qu = await Uu.load();
          if ("none" === qu.status) return null;
          const fu = null !== (Eu = Zu()) && void 0 !== Eu ? Eu : Xu(uu),
            Cu = "active" === qu.status ? qu.pack.variants : qu.variants,
            bu = lu(Cu, fu);
          return {
            text: `${"active"===qu.status?Pu(qu.pack.name,"active",Cu.length):Pu(null,`blocked (${qu.messageKey})`,null!==(su=null===Cu||void 0===Cu?void 0:Cu.length)&&void 0!==su?su:null)}; game policy ${fu}, runs in it ${bu?"yes":"no"}`,
            runs: bu
          }
        }(uu);
      if (null === Xu) return void(ku.noPack() && Vu(`join ${Zu}: no shader pack on this page (further joins without one not logged)`));
      const lu = ku.join();
      if ("none" === lu) return;
      if ("cap" === lu) return void Vu(`join ${Zu}: further joins not logged`);
      const qu = function(uu) {
          switch (uu.status) {
            case "ok":
              return void 0 === uu.couldntRun ? "joined" : `joined without the pack: ${uu.couldntRun}`;
            case "Lj":
              return "Lj";
            case "failed":
              return `failed: ${uu.messageKey}`
          }
        }(Eu),
        fu = ("ok" === Eu.status ? Eu.couldntRun : "failed" === Eu.status ? Eu.messageKey : void 0) === ou ? `; cause: ${Uu()}` : "";
      "outcome" !== lu ? (Vu(`join ${Zu}: ${Xu.text}`), Xu.runs && (Vu(`join ${Zu}: needs WebGPU; ${su()}`), Vu(`join ${Zu}: ${wu(ru())}`)), Vu(`join ${Zu}: ${qu}${fu}`)) : Vu(`join ${Zu}: ${qu}${fu}`)
    }

    function Bu(uu, Eu, ju) {
      var su;
      const Uu = null !== (su = null === Eu || void 0 === Eu ? void 0 : Eu.isRunning()) && void 0 !== su && su;
      return Fu(uu, ju, (() => `Lite runtime ${null===Eu?"no":"yes, running "+(Uu?"yes":"no")}; ${Ju((0,Zu.i)())}`), (() => {
        return uu = mu, Eu = ru(), ju = "ios" === (0, qu.getOperatingSystem)(), su = iu(), null === uu ? "engine choice not seen" : uu.packActive ? (0, gu.c)(uu.packActive, uu.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : Eu.lossStopsPack ? `a loss ${du(ju,su)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (Eu.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var uu, Eu, ju, su
      }))
    }

    function Lu(uu, Eu, ju) {
      return Fu(uu, null !== Eu ? {
        status: "failed",
        messageKey: Eu
      } : {
        status: "ok",
        couldntRun: null !== ju && void 0 !== ju ? ju : void 0
      }, (() => null === vu ? "pick not seen" : au(vu)), (() => function(uu, Eu, ju, su) {
        var Uu, Zu, Xu, lu;
        return null === uu ? "pick not seen" : "off_after_loss" === uu.reason ? `off after a loss, ${"pack"===uu.source?du(ju,su):`from ${null!==(lu=uu.source)&&void 0!==lu?lu:"none"}`}` : "not_requested" === uu.reason ? `not requested, from ${null!==(Xu=uu.source)&&void 0!==Xu?Xu:"none"} (setting ${Eu.setting?"on":"off"})` : `${null!==(Uu=uu.reason)&&void 0!==Uu?Uu:"none"}, from ${null!==(Zu=uu.source)&&void 0!==Zu?Zu:"none"}`
      }(vu, ru(), "ios" === (0, qu.getOperatingSystem)(), iu())))
    }

    function tu(uu, Eu, ju) {
      const su = ku.loss();
      if ("none" === su) return;
      if ("cap" === su) return void Vu("further losses not logged");
      const Uu = ru();
      Vu(function(uu, Eu, ju, su) {
        return `loss (${uu}): ${Eu}${null===ju?"":` ${Gu(ju,eu)}`}; ${su}`
      }(uu, Eu, ju, `stored ${Qu((0,Nu.n)().now)}; holds ${Uu.lossHolds?"yes":"no"}, stops packs ${Uu.lossStopsPack?"yes":"no"}`))
    }
  },
  34483: (uu, Eu, ju) => {
    function su(uu, Eu) {
      return uu && !Eu
    }
    ju.d(Eu, {
      c: () => su
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);