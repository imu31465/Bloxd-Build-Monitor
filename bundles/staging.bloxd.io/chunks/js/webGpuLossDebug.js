export const id = 68;
export const ids = [68];
export const modules = {
  36415: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      noteJsEngine: () => Ck,
      noteJsJoin: () => Wk,
      noteWasmJoin: () => fk,
      noteWasmPick: () => Nk,
      noteWebGpuLoss: () => Bk,
      startWebGpuLossDebug: () => Uk
    });
    var Xk = Ik(318),
      Tk = Ik(25),
      ik = Ik(2717),
      yk = Ik(3396),
      lk = Ik(646),
      ak = Ik(95),
      qk = Ik(104),
      Lk = Ik(2719),
      tk = Ik(41),
      Zk = Ik(113),
      jk = Ik(309),
      ek = Ik(2744),
      wk = Ik(337),
      Hk = Ik(34083);
    const Jk = 40,
      xk = 160;

    function Pk(kk, Fk) {
      return `"${(kk.length>Fk?`${kk.slice(0,Fk)}...`:kk).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function Kk(kk) {
      return kk ? "yes" : "no"
    }

    function Qk(kk) {
      var Fk;
      const Ik = kk.storedRenderer;
      return [`loss holds ${Kk(kk.lossHolds)}`, `stops packs ${Kk(kk.lossStopsPack)}`, `any loss ${Kk(kk.anyLoss)}`, `old intel ${Kk(kk.oldIntelDriver)}`, `default off for packs ${Kk(kk.defaultOffForPacks)}`, `default off reason ${null!==(Fk=kk.defaultOffReason)&&void 0!==Fk?Fk:"none"}`, `setting ${kk.setting?"on":"off"} (stored ${null===kk.settingStored?"unset":kk.settingStored?"on":"off"})`, `renderer url ${null===kk.urlRenderer?"none":Pk(kk.urlRenderer,12)}, stored ${null===Ik||void 0===Ik?"none":Pk(String(Ik),12)}`].join(", ")
    }

    function sk(kk) {
      if (null === kk) return "no renderer settled";
      const {
        requested: Fk,
        choice: Ik,
        source: Xk,
        fallbackReason: Tk
      } = kk;
      return `renderer requested ${Fk}, runs ${Ik}, from ${Xk}${null===Tk?"":`, fell back: ${Pk(Tk,80)}`}`
    }

    function Vk(kk, Fk) {
      return kk ? `stopping packs: iOS, ${null!==Fk&&void 0!==Fk?Fk:1} losses in a row within a day` : "stopping packs"
    }

    function zk(kk) {
      var Fk, Ik, Xk;
      return `pick (wasm): backend ${null!==(Fk=kk.backend)&&void 0!==Fk?Fk:"none"}, webgpu fallback ${null!==(Ik=kk.reason)&&void 0!==Ik?Ik:"none"}, from ${null!==(Xk=kk.source)&&void 0!==Xk?Xk:"none"}, storage pull breaks ${Kk(kk.storagePullBreaks)}; packs run ${Kk("webgpu"===kk.backend)}, else ${kk.noWebGpu}`
    }

    function Sk(kk, Fk, Ik) {
      return `pack ${null===kk?"(name not read)":Pk(kk,Jk)} ${Fk}${null===Ik?"":`, ${Ik} variants`}`
    }
    const vk = "shaderPack:failedWebGpuOff",
      Ek = new class {
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
    let Ok = null,
      nk = null,
      Gk = 0;

    function pk(kk) {
      (0, ek.g)("webgpuloss", kk)
    }

    function uk() {
      return {
        lossHolds: (0, jk.B)(),
        lossStopsPack: (0, jk.H)(),
        anyLoss: (0, jk.l)(),
        oldIntelDriver: !0 === tk.j.getItem(Zk.M),
        defaultOffForPacks: Tk.d.isWebGpuDefaultOff(),
        defaultOffReason: Tk.d.webGpuDefaultOffReason(),
        settingStored: tk.j.getItem(Xk.tc),
        setting: Tk.d.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: qk.currentUrl.getSearchParam(Lk.c),
        storedRenderer: tk.j.getItem(Lk.e)
      }
    }

    function bk(kk) {
      return function(kk, Fk, Ik) {
        if (null === kk || void 0 === kk) return "none";
        if ("object" !== typeof kk) return `unreadable (${typeof kk})`;
        const Xk = kk,
          Tk = "number" === typeof Xk.at ? Xk.at : null;
        return ["browser " + (Fk ? "this one" : "another"), null === Tk ? "no time" : `set ${((Ik-Tk)/wk.j).toFixed(1)} h ago`, `losses ${"number"===typeof Xk.losses?Xk.losses:"unset (1)"}${null!==Tk&&Ik-Tk<wk.i?", the last within a day":""}`, `first page ${"hidden"===Xk.firstPage||"visible"===Xk.firstPage?Xk.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof Xk.holdStep?Xk.holdStep:"unset (1)"}`].join(", ")
      }(kk, function(kk) {
        try {
          return "object" === typeof kk && null !== kk && kk.browser === (0, jk.h)()
        } catch {
          return !1
        }
      }(kk), Date.now())
    }

    function Rk() {
      const kk = (0, jk.s)().now;
      return "number" === typeof(null === kk || void 0 === kk ? void 0 : kk.losses) ? kk.losses : null
    }

    function Uk() {
      const {
        atLoad: kk,
        now: Fk,
        unreported: Ik
      } = (0, jk.s)(), Xk = JSON.stringify(kk) === JSON.stringify(Fk) ? "Gj" : `now ${bk(Fk)}`;
      pk(`load (${lk.x?"wasm":"js"}, os ${(0,ak.getOperatingSystem)()}): stored loss ${bk(kk)}; ${Xk}; unreported ${function(kk,Fk){if(null===kk||void 0===kk||"object"!==typeof kk)return"none";const Ik=kk;return Fk.map((kk=>`${kk} ${"number"===typeof Ik[kk]?Ik[kk]:0}`)).join(", ")}(Ik,jk.d)}; webgpu_loss_page ${jk.C}`), pk(`load: ${Qk(uk())}; pack expected ${(0,yk.h)(ak.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function Ck(kk) {
      Ok = kk, pk(function(kk, Fk, Ik) {
        const Xk = kk.setting ? "the setting is on" : (0, Hk.c)(kk.packActive, kk.defaultOffForPacks) ? "the pack forces it" : kk.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${Kk(kk.useWebGpu)} (${Xk}); ${sk(Fk)}; webgpu fallback ${null!==Ik&&void 0!==Ik?Ik:"unset"}`
      }(kk, (0, ik.e)(), (0, ak.getWebGpuFallbackReason)()))
    }

    function Nk(kk) {
      nk = kk, pk(zk(kk))
    }
    async function ck(kk, Fk, Xk, Tk) {
      const ik = ++Gk,
        yk = await async function(kk) {
          var Fk, Xk;
          const [{
            shaderPackPage: Tk,
            harnessShaderPackMode: ik
          }, {
            getShaderPackPolicy: yk
          }, {
            packRunsIn: lk
          }] = await Promise.all([Ik.e(115).then((() => Ik(39224))), Ik.e(91).then((() => Ik(41266))), Ik.e(138).then((() => Ik(41273)))]), ak = await Tk.load();
          if ("none" === ak.status) return null;
          const qk = null !== (Fk = ik()) && void 0 !== Fk ? Fk : yk(kk),
            Lk = "active" === ak.status ? ak.pack.variants : ak.variants,
            tk = lk(Lk, qk);
          return {
            text: `${"active"===ak.status?Sk(ak.pack.name,"active",Lk.length):Sk(null,`blocked (${ak.messageKey})`,null!==(Xk=null===Lk||void 0===Lk?void 0:Lk.length)&&void 0!==Xk?Xk:null)}; game policy ${qk}, runs in it ${tk?"yes":"no"}`,
            runs: tk
          }
        }(kk);
      if (null === yk) return void(Ek.noPack() && pk(`join ${ik}: no shader pack on this page (further joins without one not logged)`));
      const lk = Ek.join();
      if ("none" === lk) return;
      if ("cap" === lk) return void pk(`join ${ik}: further joins not logged`);
      const ak = function(kk) {
          switch (kk.status) {
            case "ok":
              return void 0 === kk.couldntRun ? "joined" : `joined without the pack: ${kk.couldntRun}`;
            case "iI":
              return "iI";
            case "failed":
              return `failed: ${kk.messageKey}`
          }
        }(Fk),
        qk = ("ok" === Fk.status ? Fk.couldntRun : "failed" === Fk.status ? Fk.messageKey : void 0) === vk ? `; cause: ${Tk()}` : "";
      "outcome" !== lk ? (pk(`join ${ik}: ${yk.text}`), yk.runs && (pk(`join ${ik}: needs WebGPU; ${Xk()}`), pk(`join ${ik}: ${Qk(uk())}`)), pk(`join ${ik}: ${ak}${qk}`)) : pk(`join ${ik}: ${ak}${qk}`)
    }

    function Wk(kk, Fk, Ik) {
      var Xk;
      const Tk = null !== (Xk = null === Fk || void 0 === Fk ? void 0 : Fk.isRunning()) && void 0 !== Xk && Xk;
      return ck(kk, Ik, (() => `Lite runtime ${null===Fk?"no":"yes, running "+(Tk?"yes":"no")}; ${sk((0,ik.e)())}`), (() => {
        return kk = Ok, Fk = uk(), Ik = "ios" === (0, ak.getOperatingSystem)(), Xk = Rk(), null === kk ? "engine choice not seen" : kk.packActive ? (0, Hk.c)(kk.packActive, kk.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : Fk.lossStopsPack ? `a loss ${Vk(Ik,Xk)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (Fk.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var kk, Fk, Ik, Xk
      }))
    }

    function fk(kk, Fk, Ik) {
      return ck(kk, null !== Fk ? {
        status: "failed",
        messageKey: Fk
      } : {
        status: "ok",
        couldntRun: null !== Ik && void 0 !== Ik ? Ik : void 0
      }, (() => null === nk ? "pick not seen" : zk(nk)), (() => function(kk, Fk, Ik, Xk) {
        var Tk, ik, yk, lk;
        return null === kk ? "pick not seen" : "off_after_loss" === kk.reason ? `off after a loss, ${"pack"===kk.source?Vk(Ik,Xk):`from ${null!==(lk=kk.source)&&void 0!==lk?lk:"none"}`}` : "not_requested" === kk.reason ? `not requested, from ${null!==(yk=kk.source)&&void 0!==yk?yk:"none"} (setting ${Fk.setting?"on":"off"})` : `${null!==(Tk=kk.reason)&&void 0!==Tk?Tk:"none"}, from ${null!==(ik=kk.source)&&void 0!==ik?ik:"none"}`
      }(nk, uk(), "ios" === (0, ak.getOperatingSystem)(), Rk())))
    }

    function Bk(kk, Fk, Ik) {
      const Xk = Ek.loss();
      if ("none" === Xk) return;
      if ("cap" === Xk) return void pk("further losses not logged");
      const Tk = uk();
      pk(function(kk, Fk, Ik, Xk) {
        return `loss (${kk}): ${Fk}${null===Ik?"":` ${Pk(Ik,xk)}`}; ${Xk}`
      }(kk, Fk, Ik, `stored ${bk((0,jk.s)().now)}; holds ${Tk.lossHolds?"yes":"no"}, stops packs ${Tk.lossStopsPack?"yes":"no"}`))
    }
  },
  34083: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      return kk && !Fk
    }
    Ik.d(Fk, {
      c: () => Xk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);