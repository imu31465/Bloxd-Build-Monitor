export const id = 80;
export const ids = [80];
export const modules = {
  37209: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      noteJsEngine: () => ve,
      noteJsJoin: () => le,
      noteWasmJoin: () => Se,
      noteWasmPick: () => ue,
      noteWebGpuLoss: () => ne,
      startWebGpuLossDebug: () => Ce
    });
    var ye = He(335),
      be = He(18),
      Me = He(2987),
      Ke = He(3808),
      Ue = He(645),
      Fe = He(97),
      Je = He(103),
      oe = He(2996),
      Re = He(35),
      ke = He(115),
      qe = He(325),
      fe = He(634),
      Te = He(3037),
      pe = He(347),
      Xe = He(345),
      ze = He(34786);
    const Be = 40,
      Ee = 160;

    function ge(ee, ie) {
      return `"${(ee.length>ie?`${ee.slice(0,ie)}...`:ee).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function Oe(ee) {
      return ee ? "yes" : "no"
    }

    function de(ee) {
      var ie;
      const He = ee.storedRenderer;
      return [`loss holds ${Oe(ee.lossHolds)}`, `stops packs ${Oe(ee.lossStopsPack)}`, `any loss ${Oe(ee.anyLoss)}`, `old intel ${Oe(ee.oldIntelDriver)}`, `default off for packs ${Oe(ee.defaultOffForPacks)}`, `default off reason ${null!==(ie=ee.defaultOffReason)&&void 0!==ie?ie:"none"}`, `setting ${ee.setting?"on":"off"} (stored ${null===ee.settingStored?"unset":ee.settingStored?"on":"off"})`, `renderer url ${null===ee.urlRenderer?"none":ge(ee.urlRenderer,12)}, stored ${null===He||void 0===He?"none":ge(String(He),12)}`].join(", ")
    }

    function We(ee) {
      if (null === ee) return "no renderer settled";
      const {
        requested: ie,
        choice: He,
        source: ye,
        fallbackReason: be
      } = ee;
      return `renderer requested ${ie}, runs ${He}, from ${ye}${null===be?"":`, fell back: ${ge(be,80)}`}`
    }

    function te(ee, ie) {
      return ee ? `stopping packs: iOS, ${null!==ie&&void 0!==ie?ie:1} losses in a row within a day` : "stopping packs"
    }

    function Ze(ee) {
      var ie, He, ye;
      return `pick (wasm): backend ${null!==(ie=ee.backend)&&void 0!==ie?ie:"none"}, webgpu fallback ${null!==(He=ee.reason)&&void 0!==He?He:"none"}, from ${null!==(ye=ee.source)&&void 0!==ye?ye:"none"}, storage pull breaks ${Oe(ee.storagePullBreaks)}; packs run ${Oe("webgpu"===ee.backend)}, else ${ee.noWebGpu}`
    }

    function we(ee, ie, He) {
      return `pack ${null===ee?"(name not read)":ge(ee,Be)} ${ie}${null===He?"":`, ${He} variants`}`
    }
    const De = "shaderPack:failedWebGpuOff",
      Pe = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const ee = !this.noPackSaid;
          return this.noPackSaid = !0, ee
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let Ae = null,
      Ye = null,
      Ve = 0;

    function ae(ee) {
      (0, Te.m)("webgpuloss", ee)
    }

    function ce() {
      return {
        lossHolds: (0, qe.C)(),
        lossStopsPack: (0, qe.H)(),
        anyLoss: (0, qe.m)(),
        oldIntelDriver: !0 === Re.i.getItem(ke.H),
        defaultOffForPacks: be.e.isWebGpuDefaultOff(),
        defaultOffReason: be.e.webGpuDefaultOffReason(),
        settingStored: Re.i.getItem(ye.nc),
        setting: be.e.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: Je.currentUrl.getSearchParam(oe.e),
        storedRenderer: Re.i.getItem(oe.h)
      }
    }

    function xe(ee) {
      return function(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null === ee || void 0 === ee) return "none";
        if ("object" !== typeof ee) return `unreadable (${typeof ee})`;
        const be = ee,
          Me = "number" === typeof be.at ? be.at : null,
          Ke = ["browser " + (ie ? "this one" : "another"), null === Me ? "no time" : `set ${((He-Me)/pe.l).toFixed(1)} h ago`, `losses ${"number"===typeof be.losses?be.losses:"unset (1)"}${null!==Me&&He-Me<pe.h?", the last within a day":""}`, `first page ${"hidden"===be.firstPage||"visible"===be.firstPage?be.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof be.holdStep?be.holdStep:"unset (1)"}${ye?" (not read on iOS: a kept loss holds its whole life)":""}`];
        if (void 0 !== be.reason || void 0 !== be.message) {
          const ee = "string" === typeof be.reason ? ge(be.reason, Xe.d) : "no reason";
          Ke.push(`cause ${ee} ${!0===be.causeSent?"reported":"unreported"}`)
        }
        return Ke.join(", ")
      }(ee, function(ee) {
        try {
          return "object" === typeof ee && null !== ee && ee.browser === (0, qe.i)()
        } catch {
          return !1
        }
      }(ee), Date.now(), "ios" === (0, Fe.getOperatingSystem)())
    }

    function Le() {
      const ee = (0, qe.s)().now;
      return "number" === typeof(null === ee || void 0 === ee ? void 0 : ee.losses) ? ee.losses : null
    }

    function Ce() {
      const {
        atLoad: ee,
        now: ie,
        unreported: He
      } = (0, qe.s)(), ye = JSON.stringify(ee) === JSON.stringify(ie) ? "KR" : `now ${xe(ie)}`;
      ae(`load (${Ue.I?"wasm":"js"}, os ${(0,Fe.getOperatingSystem)()}): stored loss ${xe(ee)}; ${ye}; cause kept apart ${function(ee,ie){if(null===ee||void 0===ee)return"none";const{reason:He,at:ye}="object"===typeof ee?ee:{},be="number"===typeof ye?`
        set $ {
          ((ie - ye) / pe.l).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof He ? ge(He, Xe.d) : "no reason"
        }, $ {
          be
        }
        `}((0,fe.j)(),Date.now())}; unreported ${function(ee,ie){if(null===ee||void 0===ee||"object"!==typeof ee)return"none";const He=ee;return ie.map((ee=>`${ee} ${"number"===typeof He[ee]?He[ee]:0}`)).join(", ")}(He,qe.e)}; webgpu_loss_page ${qe.D}`), ae(`load: ${de(ce())}; pack expected ${(0,Ke.f)(Fe.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function ve(ee) {
      Ae = ee, ae(function(ee, ie, He) {
        const ye = ee.setting ? "the setting is on" : (0, ze.b)(ee.packActive, ee.defaultOffForPacks) ? "the pack forces it" : ee.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${Oe(ee.useWebGpu)} (${ye}); ${We(ie)}; webgpu fallback ${null!==He&&void 0!==He?He:"unset"}`
      }(ee, (0, Me.i)(), (0, Fe.getWebGpuFallbackReason)()))
    }

    function ue(ee) {
      Ye = ee, ae(Ze(ee))
    }
    async function me(ee, ie, ye, be) {
      const Me = ++Ve,
        Ke = await async function(ee) {
          var ie, ye;
          const [{
            shaderPackPage: be,
            harnessShaderPackMode: Me
          }, {
            getShaderPackPolicy: Ke
          }, {
            packRunsIn: Ue
          }] = await Promise.all([He.e(130).then((() => He(40056))), He.e(106).then((() => He(44463))), He.e(154).then((() => He(44465)))]), Fe = await be.load();
          if ("none" === Fe.status) return null;
          const Je = null !== (ie = Me()) && void 0 !== ie ? ie : Ke(ee),
            oe = "active" === Fe.status ? Fe.pack.variants : Fe.variants,
            Re = Ue(oe, Je);
          return {
            text: `${"active"===Fe.status?we(Fe.pack.name,"active",oe.length):we(null,`blocked (${Fe.messageKey})`,null!==(ye=null===oe||void 0===oe?void 0:oe.length)&&void 0!==ye?ye:null)}; game policy ${Je}, runs in it ${Re?"yes":"no"}`,
            runs: Re
          }
        }(ee);
      if (null === Ke) return void(Pe.noPack() && ae(`join ${Me}: no shader pack on this page (further joins without one not logged)`));
      const Ue = Pe.join();
      if ("none" === Ue) return;
      if ("cap" === Ue) return void ae(`join ${Me}: further joins not logged`);
      const Fe = function(ee) {
          switch (ee.status) {
            case "ok":
              return void 0 === ee.couldntRun ? "joined" : `joined without the pack: ${ee.couldntRun}`;
            case "Ce":
              return "Ce";
            case "failed":
              return `failed: ${ee.messageKey}`
          }
        }(ie),
        Je = ("ok" === ie.status ? ie.couldntRun : "failed" === ie.status ? ie.messageKey : void 0) === De ? `; cause: ${be()}` : "";
      "outcome" !== Ue ? (ae(`join ${Me}: ${Ke.text}`), Ke.runs && (ae(`join ${Me}: needs WebGPU; ${ye()}`), ae(`join ${Me}: ${de(ce())}`)), ae(`join ${Me}: ${Fe}${Je}`)) : ae(`join ${Me}: ${Fe}${Je}`)
    }

    function le(ee, ie, He) {
      var ye;
      const be = null !== (ye = null === ie || void 0 === ie ? void 0 : ie.isRunning()) && void 0 !== ye && ye;
      return me(ee, He, (() => `Lite runtime ${null===ie?"no":"yes, running "+(be?"yes":"no")}; ${We((0,Me.i)())}`), (() => {
        return ee = Ae, ie = ce(), He = "ios" === (0, Fe.getOperatingSystem)(), ye = Le(), null === ee ? "engine choice not seen" : ee.packActive ? (0, ze.b)(ee.packActive, ee.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : ie.lossStopsPack ? `a loss ${te(He,ye)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (ie.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var ee, ie, He, ye
      }))
    }

    function Se(ee, ie, He) {
      return me(ee, null !== ie ? {
        status: "failed",
        messageKey: ie
      } : {
        status: "ok",
        couldntRun: null !== He && void 0 !== He ? He : void 0
      }, (() => null === Ye ? "pick not seen" : Ze(Ye)), (() => function(ee, ie, He, ye) {
        var be, Me, Ke, Ue;
        return null === ee ? "pick not seen" : "off_after_loss" === ee.reason ? `off after a loss, ${"pack"===ee.source?te(He,ye):`from ${null!==(Ue=ee.source)&&void 0!==Ue?Ue:"none"}`}` : "not_requested" === ee.reason ? `not requested, from ${null!==(Ke=ee.source)&&void 0!==Ke?Ke:"none"} (setting ${ie.setting?"on":"off"})` : `${null!==(be=ee.reason)&&void 0!==be?be:"none"}, from ${null!==(Me=ee.source)&&void 0!==Me?Me:"none"}`
      }(Ye, ce(), "ios" === (0, Fe.getOperatingSystem)(), Le())))
    }

    function ne(ee, ie, He) {
      const ye = Pe.loss();
      if ("none" === ye) return;
      if ("cap" === ye) return void ae("further losses not logged");
      const be = ce();
      ae(function(ee, ie, He, ye) {
        return `loss (${ee}): ${ie}${null===He?"":` ${ge(He,Ee)}`}; ${ye}`
      }(ee, ie, He, `stored ${xe((0,qe.s)().now)}; holds ${be.lossHolds?"yes":"no"}, stops packs ${be.lossStopsPack?"yes":"no"}`))
    }
  },
  34786: (ee, ie, He) => {
    function ye(ee, ie) {
      return ee && !ie
    }
    He.d(ie, {
      b: () => ye
    })
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);