export const id = 68;
export const ids = [68];
export const modules = {
  35950: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      noteJsEngine: () => ak,
      noteJsJoin: () => Xk,
      noteWasmJoin: () => Bk,
      noteWasmPick: () => Wk,
      noteWebGpuLoss: () => ck,
      startWebGpuLossDebug: () => hk
    });
    var Dk = ik(302),
      fk = ik(22),
      Sk = ik(2719),
      bk = ik(3419),
      rk = ik(610),
      Pk = ik(284),
      mk = ik(99),
      Mk = ik(107),
      Kk = ik(2723),
      xk = ik(38),
      nk = ik(115),
      Uk = ik(280),
      Hk = ik(2752),
      wk = ik(314),
      lk = ik(33693);
    const pk = 40,
      yk = 160;

    function Yk(kk, ek) {
      return `"${(kk.length>ek?`${kk.slice(0,ek)}...`:kk).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function Lk(kk) {
      return kk ? "yes" : "no"
    }

    function Ck(kk) {
      var ek;
      const ik = kk.storedRenderer;
      return [`loss holds ${Lk(kk.lossHolds)}`, `stops packs ${Lk(kk.lossStopsPack)}`, `any loss ${Lk(kk.anyLoss)}`, `old intel ${Lk(kk.oldIntelDriver)}`, `default off for packs ${Lk(kk.defaultOffForPacks)}`, `default off reason ${null!==(ek=kk.defaultOffReason)&&void 0!==ek?ek:"none"}`, `setting ${kk.setting?"on":"off"} (stored ${null===kk.settingStored?"unset":kk.settingStored?"on":"off"})`, `renderer url ${null===kk.urlRenderer?"none":Yk(kk.urlRenderer,12)}, stored ${null===ik||void 0===ik?"none":Yk(String(ik),12)}`, `hidden-loss arm ${kk.hiddenLossArm}`].join(", ")
    }

    function Ak(kk) {
      if (null === kk) return "no renderer settled";
      const {
        requested: ek,
        choice: ik,
        source: Dk,
        fallbackReason: fk
      } = kk;
      return `renderer requested ${ek}, runs ${ik}, from ${Dk}${null===fk?"":`, fell back: ${Yk(fk,80)}`}`
    }

    function jk(kk, ek) {
      return kk ? `stopping packs: iOS, ${null!==ek&&void 0!==ek?ek:1} losses in a row within a day` : "stopping packs"
    }

    function sk(kk) {
      var ek, ik, Dk;
      return `pick (wasm): backend ${null!==(ek=kk.backend)&&void 0!==ek?ek:"none"}, webgpu fallback ${null!==(ik=kk.reason)&&void 0!==ik?ik:"none"}, from ${null!==(Dk=kk.source)&&void 0!==Dk?Dk:"none"}, storage pull breaks ${Lk(kk.storagePullBreaks)}; packs run ${Lk("webgpu"===kk.backend)}, else ${kk.noWebGpu}`
    }

    function dk(kk, ek, ik) {
      return `pack ${null===kk?"(name not read)":Yk(kk,pk)} ${ek}${null===ik?"":`, ${ik} variants`}`
    }
    const Vk = "shaderPack:failedWebGpuOff",
      Fk = new class {
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
    let uk = null,
      qk = null,
      Ik = 0;

    function zk(kk) {
      (0, Hk.l)("webgpuloss", kk)
    }

    function Qk() {
      return {
        lossHolds: (0, Uk.z)(),
        lossStopsPack: (0, Uk.F)(),
        anyLoss: (0, Uk.i)(),
        oldIntelDriver: !0 === xk.f.getItem(nk.H),
        defaultOffForPacks: fk.b.isWebGpuDefaultOff(),
        defaultOffReason: fk.b.webGpuDefaultOffReason(),
        settingStored: xk.f.getItem(Dk.jc),
        setting: fk.b.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: Mk.currentUrl.getSearchParam(Kk.e),
        storedRenderer: xk.f.getItem(Kk.h),
        hiddenLossArm: Pk.e.webgpu_hidden_loss_v1
      }
    }

    function vk(kk) {
      return function(kk, ek, ik) {
        if (null === kk || void 0 === kk) return "none";
        if ("object" !== typeof kk) return `unreadable (${typeof kk})`;
        const Dk = kk,
          fk = "number" === typeof Dk.at ? Dk.at : null;
        return ["browser " + (ek ? "this one" : "another"), null === fk ? "no time" : `set ${((ik-fk)/wk.j).toFixed(1)} h ago`, `losses ${"number"===typeof Dk.losses?Dk.losses:"unset (1)"}${null!==fk&&ik-fk<wk.g?", the last within a day":""}`, `hidden-only ${"number"===typeof Dk.hiddenLosses?Dk.hiddenLosses:"no"}`, `first page ${"hidden"===Dk.firstPage||"visible"===Dk.firstPage?Dk.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof Dk.holdStep?Dk.holdStep:"unset (1)"}`].join(", ")
      }(kk, function(kk) {
        try {
          return "object" === typeof kk && null !== kk && kk.browser === (0, Uk.f)()
        } catch {
          return !1
        }
      }(kk), Date.now())
    }

    function Ek() {
      const kk = (0, Uk.r)().now;
      return "number" === typeof(null === kk || void 0 === kk ? void 0 : kk.losses) ? kk.losses : null
    }

    function hk() {
      const {
        atLoad: kk,
        now: ek,
        unreported: ik
      } = (0, Uk.r)(), Dk = JSON.stringify(kk) === JSON.stringify(ek) ? "fU" : `now ${vk(ek)}`;
      zk(`load (${rk.s?"wasm":"js"}, os ${(0,mk.getOperatingSystem)()}): stored loss ${vk(kk)}; ${Dk}; unreported ${function(kk,ek){if(null===kk||void 0===kk||"object"!==typeof kk)return"none";const ik=kk;return ek.map((kk=>`${kk} ${"number"===typeof ik[kk]?ik[kk]:0}`)).join(", ")}(ik,Uk.e)}; webgpu_loss_page ${Uk.B}`), zk(`load: ${Ck(Qk())}; pack expected ${(0,bk.h)(mk.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function ak(kk) {
      uk = kk, zk(function(kk, ek, ik) {
        const Dk = kk.setting ? "the setting is on" : (0, lk.e)(kk.packActive, kk.defaultOffForPacks) ? "the pack forces it" : kk.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${Lk(kk.useWebGpu)} (${Dk}); ${Ak(ek)}; webgpu fallback ${null!==ik&&void 0!==ik?ik:"unset"}`
      }(kk, (0, Sk.m)(), (0, mk.getWebGpuFallbackReason)()))
    }

    function Wk(kk) {
      qk = kk, zk(sk(kk))
    }
    async function tk(kk, ek, Dk, fk) {
      const Sk = ++Ik,
        bk = await async function(kk) {
          var ek, Dk;
          const [{
            shaderPackPage: fk,
            harnessShaderPackMode: Sk
          }, {
            getShaderPackPolicy: bk
          }, {
            packRunsIn: rk
          }] = await Promise.all([ik.e(115).then((() => ik(38787))), ik.e(91).then((() => ik(40842))), ik.e(138).then((() => ik(40848)))]), Pk = await fk.load();
          if ("none" === Pk.status) return null;
          const mk = null !== (ek = Sk()) && void 0 !== ek ? ek : bk(kk),
            Mk = "active" === Pk.status ? Pk.pack.variants : Pk.variants,
            Kk = rk(Mk, mk);
          return {
            text: `${"active"===Pk.status?dk(Pk.pack.name,"active",Mk.length):dk(null,`blocked (${Pk.messageKey})`,null!==(Dk=null===Mk||void 0===Mk?void 0:Mk.length)&&void 0!==Dk?Dk:null)}; game policy ${mk}, runs in it ${Kk?"yes":"no"}`,
            runs: Kk
          }
        }(kk);
      if (null === bk) return void(Fk.noPack() && zk(`join ${Sk}: no shader pack on this page (further joins without one not logged)`));
      const rk = Fk.join();
      if ("none" === rk) return;
      if ("cap" === rk) return void zk(`join ${Sk}: further joins not logged`);
      const Pk = function(kk) {
          switch (kk.status) {
            case "ok":
              return void 0 === kk.couldntRun ? "joined" : `joined without the pack: ${kk.couldntRun}`;
            case "Ji":
              return "Ji";
            case "failed":
              return `failed: ${kk.messageKey}`
          }
        }(ek),
        mk = ("ok" === ek.status ? ek.couldntRun : "failed" === ek.status ? ek.messageKey : void 0) === Vk ? `; cause: ${fk()}` : "";
      "outcome" !== rk ? (zk(`join ${Sk}: ${bk.text}`), bk.runs && (zk(`join ${Sk}: needs WebGPU; ${Dk()}`), zk(`join ${Sk}: ${Ck(Qk())}`)), zk(`join ${Sk}: ${Pk}${mk}`)) : zk(`join ${Sk}: ${Pk}${mk}`)
    }

    function Xk(kk, ek, ik) {
      var Dk;
      const fk = null !== (Dk = null === ek || void 0 === ek ? void 0 : ek.isRunning()) && void 0 !== Dk && Dk;
      return tk(kk, ik, (() => `Lite runtime ${null===ek?"no":"yes, running "+(fk?"yes":"no")}; ${Ak((0,Sk.m)())}`), (() => {
        return kk = uk, ek = Qk(), ik = "ios" === (0, mk.getOperatingSystem)(), Dk = Ek(), null === kk ? "engine choice not seen" : kk.packActive ? (0, lk.e)(kk.packActive, kk.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : ek.lossStopsPack ? `a loss ${jk(ik,Dk)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (ek.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var kk, ek, ik, Dk
      }))
    }

    function Bk(kk, ek, ik) {
      return tk(kk, null !== ek ? {
        status: "failed",
        messageKey: ek
      } : {
        status: "ok",
        couldntRun: null !== ik && void 0 !== ik ? ik : void 0
      }, (() => null === qk ? "pick not seen" : sk(qk)), (() => function(kk, ek, ik, Dk) {
        var fk, Sk, bk, rk;
        return null === kk ? "pick not seen" : "off_after_loss" === kk.reason ? `off after a loss, ${"pack"===kk.source?jk(ik,Dk):`from ${null!==(rk=kk.source)&&void 0!==rk?rk:"none"}`}` : "not_requested" === kk.reason ? `not requested, from ${null!==(bk=kk.source)&&void 0!==bk?bk:"none"} (setting ${ek.setting?"on":"off"})` : `${null!==(fk=kk.reason)&&void 0!==fk?fk:"none"}, from ${null!==(Sk=kk.source)&&void 0!==Sk?Sk:"none"}`
      }(qk, Qk(), "ios" === (0, mk.getOperatingSystem)(), Ek())))
    }

    function ck(kk, ek, ik) {
      const Dk = Fk.loss();
      if ("none" === Dk) return;
      if ("cap" === Dk) return void zk("further losses not logged");
      const fk = Qk();
      zk(function(kk, ek, ik, Dk) {
        return `loss (${kk}): ${ek}${null===ik?"":` ${Yk(ik,yk)}`}; ${Dk}`
      }(kk, ek, ik, `stored ${vk((0,Uk.r)().now)}; holds ${fk.lossHolds?"yes":"no"}, stops packs ${fk.lossStopsPack?"yes":"no"}`))
    }
  },
  33693: (kk, ek, ik) => {
    function Dk(kk, ek) {
      return kk && !ek
    }
    ik.d(ek, {
      e: () => Dk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);