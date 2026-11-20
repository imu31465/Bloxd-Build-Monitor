export const id = 65;
export const ids = [65];
export const modules = {
  36157: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      noteJsEngine: () => zk,
      noteJsJoin: () => qk,
      noteWasmJoin: () => Ck,
      noteWasmPick: () => Pk,
      noteWebGpuLoss: () => Zk,
      startWebGpuLossDebug: () => Dk
    });
    var Rk = Bk(279),
      tk = Bk(22),
      ak = Bk(2647),
      Xk = Bk(3255),
      bk = Bk(624),
      wk = Bk(271),
      dk = Bk(98),
      sk = Bk(109),
      Vk = Bk(2654),
      Jk = Bk(42),
      Ak = Bk(117),
      ek = Bk(267),
      yk = Bk(2711),
      fk = Bk(291),
      mk = Bk(8910);
    const Wk = 40,
      vk = 160;

    function ik(kk, Fk) {
      return `"${(kk.length>Fk?`${kk.slice(0,Fk)}...`:kk).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function Yk(kk) {
      return kk ? "yes" : "no"
    }

    function Lk(kk) {
      var Fk;
      const Bk = kk.storedRenderer;
      return [`loss holds ${Yk(kk.lossHolds)}`, `stops packs ${Yk(kk.lossStopsPack)}`, `any loss ${Yk(kk.anyLoss)}`, `old intel ${Yk(kk.oldIntelDriver)}`, `default off for packs ${Yk(kk.defaultOffForPacks)}`, `default off reason ${null!==(Fk=kk.defaultOffReason)&&void 0!==Fk?Fk:"none"}`, `setting ${kk.setting?"on":"off"} (stored ${null===kk.settingStored?"unset":kk.settingStored?"on":"off"})`, `renderer url ${null===kk.urlRenderer?"none":ik(kk.urlRenderer,12)}, stored ${null===Bk||void 0===Bk?"none":ik(String(Bk),12)}`, `hidden-loss arm ${kk.hiddenLossArm}`].join(", ")
    }

    function Ok(kk) {
      if (null === kk) return "no renderer settled";
      const {
        requested: Fk,
        choice: Bk,
        source: Rk,
        fallbackReason: tk
      } = kk;
      return `renderer requested ${Fk}, runs ${Bk}, from ${Rk}${null===tk?"":`, fell back: ${ik(tk,80)}`}`
    }

    function Ek(kk, Fk) {
      return kk ? `stopping packs: iOS, ${null!==Fk&&void 0!==Fk?Fk:1} losses in a row within a day` : "stopping packs"
    }

    function Sk(kk) {
      var Fk, Bk, Rk;
      return `pick (wasm): backend ${null!==(Fk=kk.backend)&&void 0!==Fk?Fk:"none"}, webgpu fallback ${null!==(Bk=kk.reason)&&void 0!==Bk?Bk:"none"}, from ${null!==(Rk=kk.source)&&void 0!==Rk?Rk:"none"}, storage pull breaks ${Yk(kk.storagePullBreaks)}; packs run ${Yk("webgpu"===kk.backend&&!kk.storagePullBreaks)}, else ${kk.noWebGpu}`
    }

    function Nk(kk, Fk, Bk) {
      return `pack ${null===kk?"(name not read)":ik(kk,Wk)} ${Fk}${null===Bk?"":`, ${Bk} variants`}`
    }
    const Hk = "shaderPack:failedWebGpuOff",
      uk = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const kk = !this.noPackSaid;
          return this.noPackSaid = !0, kk
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let Mk = null,
      gk = null,
      Uk = 0;

    function ck(kk) {
      (0, yk.k)("webgpuloss", kk)
    }

    function Gk() {
      return {
        lossHolds: (0, ek.m)(),
        lossStopsPack: (0, ek.o)(),
        anyLoss: (0, ek.c)(),
        oldIntelDriver: !0 === Jk.i.getItem(Ak.K),
        defaultOffForPacks: tk.c.isWebGpuDefaultOff(),
        defaultOffReason: tk.c.webGpuDefaultOffReason(),
        settingStored: Jk.i.getItem(Rk.dc),
        setting: tk.c.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: sk.currentUrl.getSearchParam(Vk.d),
        storedRenderer: Jk.i.getItem(Vk.h),
        hiddenLossArm: wk.d.webgpu_hidden_loss_v1
      }
    }

    function Tk(kk) {
      return function(kk, Fk, Bk) {
        if (null === kk || void 0 === kk) return "none";
        if ("object" !== typeof kk) return `unreadable (${typeof kk})`;
        const Rk = kk,
          tk = "number" === typeof Rk.at ? Rk.at : null;
        return ["browser " + (Fk ? "this one" : "another"), null === tk ? "no time" : `set ${((Bk-tk)/fk.j).toFixed(1)} h ago`, `losses ${"number"===typeof Rk.losses?Rk.losses:"unset (1)"}${null!==tk&&Bk-tk<fk.f?", the last within a day":""}`, `hidden-only ${"number"===typeof Rk.hiddenLosses?Rk.hiddenLosses:"no"}`, `first page ${"hidden"===Rk.firstPage||"visible"===Rk.firstPage?Rk.firstPage:"unset (visible)"}`].join(", ")
      }(kk, function(kk) {
        try {
          return "object" === typeof kk && null !== kk && kk.browser === (0, ek.b)()
        } catch {
          return !1
        }
      }(kk), Date.now())
    }

    function rk() {
      const kk = (0, ek.f)().now;
      return "number" === typeof(null === kk || void 0 === kk ? void 0 : kk.losses) ? kk.losses : null
    }

    function Dk() {
      const {
        atLoad: kk,
        now: Fk,
        unreported: Bk
      } = (0, ek.f)(), Rk = JSON.stringify(kk) === JSON.stringify(Fk) ? "lA" : `now ${Tk(Fk)}`;
      ck(`load (${bk.p?"wasm":"js"}, os ${(0,dk.getOperatingSystem)()}): stored loss ${Tk(kk)}; ${Rk}; unreported ${function(kk){if(null===kk||void 0===kk||"object"!==typeof kk)return"none";const{hidden:Fk,visible:Bk}=kk;return`
        hidden $ {
          "number" === typeof Fk ? Fk : 0
        }, visible $ {
          "number" === typeof Bk ? Bk : 0
        }
        `}(Bk)}; webgpu_loss_page ${ek.n}`), ck(`load: ${Lk(Gk())}; pack expected ${(0,Xk.c)(dk.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function zk(kk) {
      Mk = kk, ck(function(kk, Fk, Bk) {
        const Rk = kk.setting ? "the setting is on" : (0, mk.d)(kk.packActive, kk.defaultOffForPacks) ? "the pack forces it" : kk.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${Yk(kk.useWebGpu)} (${Rk}); ${Ok(Fk)}; webgpu fallback ${null!==Bk&&void 0!==Bk?Bk:"unset"}`
      }(kk, (0, ak.k)(), (0, dk.getWebGpuFallbackReason)()))
    }

    function Pk(kk) {
      gk = kk, ck(Sk(kk))
    }
    async function hk(kk, Fk, Rk, tk) {
      const ak = ++Uk,
        Xk = await async function(kk) {
          var Fk, Rk;
          const [{
            shaderPackPage: tk,
            harnessShaderPackMode: ak
          }, {
            getShaderPackPolicy: Xk
          }, {
            packRunsIn: bk
          }] = await Promise.all([Bk.e(129).then((() => Bk(38817))), Bk.e(89).then((() => Bk(40709))), Bk.e(133).then((() => Bk(40714)))]), wk = await tk.load();
          if ("none" === wk.status) return null;
          const dk = null !== (Fk = ak()) && void 0 !== Fk ? Fk : Xk(kk),
            sk = "active" === wk.status ? wk.pack.variants : wk.variants,
            Vk = bk(sk, dk);
          return {
            text: `${"active"===wk.status?Nk(wk.pack.name,"active",sk.length):Nk(null,`blocked (${wk.messageKey})`,null!==(Rk=null===sk||void 0===sk?void 0:sk.length)&&void 0!==Rk?Rk:null)}; game policy ${dk}, runs in it ${Vk?"yes":"no"}`,
            runs: Vk
          }
        }(kk);
      if (null === Xk) return void(uk.noPack() && ck(`join ${ak}: no shader pack on this page (further joins without one not logged)`));
      const bk = uk.join();
      if ("none" === bk) return;
      if ("cap" === bk) return void ck(`join ${ak}: further joins not logged`);
      const wk = function(kk) {
          switch (kk.status) {
            case "ok":
              return void 0 === kk.couldntRun ? "joined" : `joined without the pack: ${kk.couldntRun}`;
            case "yB":
              return "yB";
            case "failed":
              return `failed: ${kk.messageKey}`
          }
        }(Fk),
        dk = ("ok" === Fk.status ? Fk.couldntRun : "failed" === Fk.status ? Fk.messageKey : void 0) === Hk ? `; cause: ${tk()}` : "";
      "outcome" !== bk ? (ck(`join ${ak}: ${Xk.text}`), Xk.runs && (ck(`join ${ak}: needs WebGPU; ${Rk()}`), ck(`join ${ak}: ${Lk(Gk())}`)), ck(`join ${ak}: ${wk}${dk}`)) : ck(`join ${ak}: ${wk}${dk}`)
    }

    function qk(kk, Fk, Bk) {
      var Rk;
      const tk = null !== (Rk = null === Fk || void 0 === Fk ? void 0 : Fk.isRunning()) && void 0 !== Rk && Rk;
      return hk(kk, Bk, (() => `Lite runtime ${null===Fk?"no":"yes, running "+(tk?"yes":"no")}; ${Ok((0,ak.k)())}`), (() => {
        return kk = Mk, Fk = Gk(), Bk = "ios" === (0, dk.getOperatingSystem)(), Rk = rk(), null === kk ? "engine choice not seen" : kk.packActive ? (0, mk.d)(kk.packActive, kk.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : Fk.lossStopsPack ? `a loss ${Ek(Bk,Rk)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (Fk.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var kk, Fk, Bk, Rk
      }))
    }

    function Ck(kk, Fk, Bk) {
      return hk(kk, null !== Fk ? {
        status: "failed",
        messageKey: Fk
      } : {
        status: "ok",
        couldntRun: null !== Bk && void 0 !== Bk ? Bk : void 0
      }, (() => null === gk ? "pick not seen" : Sk(gk)), (() => function(kk, Fk, Bk, Rk) {
        var tk, ak, Xk, bk;
        return null === kk ? "pick not seen" : "off_after_loss" === kk.reason ? `off after a loss, ${"pack"===kk.source?Ek(Bk,Rk):`from ${null!==(bk=kk.source)&&void 0!==bk?bk:"none"}`}` : "not_requested" === kk.reason ? `not requested, from ${null!==(Xk=kk.source)&&void 0!==Xk?Xk:"none"} (setting ${Fk.setting?"on":"off"})` : `${null!==(tk=kk.reason)&&void 0!==tk?tk:"none"}, from ${null!==(ak=kk.source)&&void 0!==ak?ak:"none"}`
      }(gk, Gk(), "ios" === (0, dk.getOperatingSystem)(), rk())))
    }

    function Zk(kk, Fk, Bk) {
      const Rk = uk.loss();
      if ("none" === Rk) return;
      if ("cap" === Rk) return void ck("further losses not logged");
      const tk = Gk();
      ck(function(kk, Fk, Bk, Rk) {
        return `loss (${kk}): ${Fk}${null===Bk?"":` ${ik(Bk,vk)}`}; ${Rk}`
      }(kk, Fk, Bk, `stored ${Tk((0,ek.f)().now)}; holds ${tk.lossHolds?"yes":"no"}, stops packs ${tk.lossStopsPack?"yes":"no"}`))
    }
  },
  8910: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      return kk && !Fk
    }
    Bk.d(Fk, {
      d: () => Rk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);