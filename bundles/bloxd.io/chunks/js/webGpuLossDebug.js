export const id = 81;
export const ids = [81];
export const modules = {
  38042: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      noteJsEngine: () => cd,
      noteJsJoin: () => ed,
      noteWasmJoin: () => Id,
      noteWasmPick: () => jd,
      noteWebGpuLoss: () => ld,
      startWebGpuLossDebug: () => zd
    });
    var Wd = md(387),
      Fd = md(29),
      Rd = md(3868),
      Xd = md(4674),
      Kd = md(732),
      hd = md(107),
      vd = md(118),
      Qd = md(3876),
      td = md(46),
      od = md(132),
      Nd = md(364),
      qd = md(373),
      Hd = md(720),
      yd = md(3903),
      bd = md(405),
      Td = md(399),
      pd = md(35465);
    const Yd = 40,
      gd = 160;

    function wd(dd, Od) {
      return `"${(dd.length>Od?`${dd.slice(0,Od)}...`:dd).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function Ed(dd) {
      return dd ? "yes" : "no"
    }

    function Jd(dd) {
      var Od;
      const md = dd.storedRenderer;
      return [`loss holds ${Ed(dd.lossHolds)}`, `stops packs ${Ed(dd.lossStopsPack)}`, `any loss ${Ed(dd.anyLoss)}`, `old intel ${Ed(dd.oldIntelDriver)}`, `few wasm memories ${Ed(dd.fewWasmMemories)}`, `default off for packs ${Ed(dd.defaultOffForPacks)}`, `default off reason ${null!==(Od=dd.defaultOffReason)&&void 0!==Od?Od:"none"}`, `setting ${dd.setting?"on":"off"} (stored ${null===dd.settingStored?"unset":dd.settingStored?"on":"off"})`, `renderer url ${null===dd.urlRenderer?"none":wd(dd.urlRenderer,12)}, stored ${null===md||void 0===md?"none":wd(String(md),12)}`].join(", ")
    }

    function Ud(dd) {
      if (null === dd) return "no renderer settled";
      const {
        requested: Od,
        choice: md,
        source: Wd,
        fallbackReason: Fd
      } = dd;
      return `renderer requested ${Od}, runs ${md}, from ${Wd}${null===Fd?"":`, fell back: ${wd(Fd,80)}`}`
    }

    function xd(dd, Od) {
      return dd ? `stopping packs: iOS, ${null!==Od&&void 0!==Od?Od:1} losses in a row within a day` : "stopping packs"
    }

    function Bd(dd) {
      var Od, md, Wd;
      return `pick (wasm): backend ${null!==(Od=dd.backend)&&void 0!==Od?Od:"none"}, webgpu fallback ${null!==(md=dd.reason)&&void 0!==md?md:"none"}, from ${null!==(Wd=dd.source)&&void 0!==Wd?Wd:"none"}, storage pull breaks ${Ed(dd.storagePullBreaks)}; packs run ${Ed("webgpu"===dd.backend)}, else ${dd.noWebGpu}`
    }

    function Sd(dd, Od, md) {
      return `pack ${null===dd?"(name not read)":wd(dd,Yd)} ${Od}${null===md?"":`, ${md} variants`}`
    }
    const sd = "shaderPack:failedWebGpuOff",
      ud = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const dd = !this.noPackSaid;
          return this.noPackSaid = !0, dd
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let Vd = null,
      Ad = null,
      rd = 0;

    function Gd(dd) {
      (0, yd.k)("webgpuloss", dd)
    }

    function nd() {
      return {
        lossHolds: (0, qd.B)(),
        lossStopsPack: (0, qd.J)(),
        anyLoss: (0, qd.f)(),
        oldIntelDriver: !0 === td.k.getItem(od.J),
        fewWasmMemories: (0, Nd.h)(),
        defaultOffForPacks: Fd.e.isWebGpuDefaultOff(),
        defaultOffReason: Fd.e.webGpuDefaultOffReason(),
        settingStored: td.k.getItem(Wd.kc),
        setting: Fd.e.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: vd.currentUrl.getSearchParam(Qd.b),
        storedRenderer: td.k.getItem(Qd.d)
      }
    }

    function Ld(dd) {
      return function(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null === dd || void 0 === dd) return "none";
        if ("object" !== typeof dd) return `unreadable (${typeof dd})`;
        const Fd = dd,
          Rd = "number" === typeof Fd.at ? Fd.at : null,
          Xd = ["browser " + (Od ? "this one" : "another"), null === Rd ? "no time" : `set ${((md-Rd)/bd.g).toFixed(1)} h ago`, `losses ${"number"===typeof Fd.losses?Fd.losses:"unset (1)"}${null!==Rd&&md-Rd<bd.f?", the last within a day":""}`, `first page ${"hidden"===Fd.firstPage||"visible"===Fd.firstPage?Fd.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof Fd.holdStep?Fd.holdStep:"unset (1)"}${Wd?" (not read on iOS: a kept loss holds its whole life)":""}`];
        if (void 0 !== Fd.reason || void 0 !== Fd.message) {
          const dd = "string" === typeof Fd.reason ? wd(Fd.reason, Td.b) : "no reason";
          Xd.push(`cause ${dd} ${!0===Fd.causeSent?"reported":"unreported"}`)
        }
        return Xd.join(", ")
      }(dd, function(dd) {
        try {
          return "object" === typeof dd && null !== dd && dd.browser === (0, qd.e)()
        } catch {
          return !1
        }
      }(dd), Date.now(), "ios" === (0, hd.getOperatingSystem)())
    }

    function Pd() {
      const dd = (0, qd.o)().now;
      return "number" === typeof(null === dd || void 0 === dd ? void 0 : dd.losses) ? dd.losses : null
    }

    function zd() {
      const {
        atLoad: dd,
        now: Od,
        unreported: md
      } = (0, qd.o)(), Wd = JSON.stringify(dd) === JSON.stringify(Od) ? "kQ" : `now ${Ld(Od)}`;
      Gd(`load (${Kd.G?"wasm":"js"}, os ${(0,hd.getOperatingSystem)()}): stored loss ${Ld(dd)}; ${Wd}; cause kept apart ${function(dd,Od){if(null===dd||void 0===dd)return"none";const{reason:md,at:Wd}="object"===typeof dd?dd:{},Fd="number"===typeof Wd?`
        set $ {
          ((Od - Wd) / bd.g).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof md ? wd(md, Td.b) : "no reason"
        }, $ {
          Fd
        }
        `}((0,Hd.i)(),Date.now())}; unreported ${function(dd,Od){if(null===dd||void 0===dd||"object"!==typeof dd)return"none";const md=dd;return Od.map((dd=>`${dd} ${"number"===typeof md[dd]?md[dd]:0}`)).join(", ")}(md,qd.d)}; webgpu_loss_page ${qd.F}`), Gd(`load: ${Jd(nd())}; pack expected ${(0,Xd.e)(hd.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function cd(dd) {
      Vd = dd, Gd(function(dd, Od, md) {
        const Wd = dd.setting ? "the setting is on" : (0, pd.e)(dd.packActive, dd.defaultOffForPacks) ? "the pack forces it" : dd.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${Ed(dd.useWebGpu)} (${Wd}); ${Ud(Od)}; webgpu fallback ${null!==md&&void 0!==md?md:"unset"}`
      }(dd, (0, Rd.j)(), (0, hd.getWebGpuFallbackReason)()))
    }

    function jd(dd) {
      Ad = dd, Gd(Bd(dd))
    }
    async function Dd(dd, Od, Wd, Fd) {
      const Rd = ++rd,
        Xd = await async function(dd) {
          var Od, Wd;
          const [{
            shaderPackPage: Fd,
            harnessShaderPackMode: Rd
          }, {
            getShaderPackPolicy: Xd
          }, {
            packRunsIn: Kd
          }] = await Promise.all([md.e(138).then((() => md(40819))), md.e(108).then((() => md(45310))), md.e(162).then((() => md(45318)))]), hd = await Fd.load();
          if ("none" === hd.status) return null;
          const vd = null !== (Od = Rd()) && void 0 !== Od ? Od : Xd(dd),
            Qd = "active" === hd.status ? hd.pack.variants : hd.variants,
            td = Kd(Qd, vd);
          return {
            text: `${"active"===hd.status?Sd(hd.pack.name,"active",Qd.length):Sd(null,`blocked (${hd.messageKey})`,null!==(Wd=null===Qd||void 0===Qd?void 0:Qd.length)&&void 0!==Wd?Wd:null)}; game policy ${vd}, runs in it ${td?"yes":"no"}`,
            runs: td
          }
        }(dd);
      if (null === Xd) return void(ud.noPack() && Gd(`join ${Rd}: no shader pack on this page (further joins without one not logged)`));
      const Kd = ud.join();
      if ("none" === Kd) return;
      if ("cap" === Kd) return void Gd(`join ${Rd}: further joins not logged`);
      const hd = function(dd) {
          switch (dd.status) {
            case "ok":
              return void 0 === dd.couldntRun ? "joined" : `joined without the pack: ${dd.couldntRun}`;
            case "Ad":
              return "Ad";
            case "failed":
              return `failed: ${dd.messageKey}`
          }
        }(Od),
        vd = ("ok" === Od.status ? Od.couldntRun : "failed" === Od.status ? Od.messageKey : void 0) === sd ? `; cause: ${Fd()}` : "";
      "outcome" !== Kd ? (Gd(`join ${Rd}: ${Xd.text}`), Xd.runs && (Gd(`join ${Rd}: needs WebGPU; ${Wd()}`), Gd(`join ${Rd}: ${Jd(nd())}`)), Gd(`join ${Rd}: ${hd}${vd}`)) : Gd(`join ${Rd}: ${hd}${vd}`)
    }

    function ed(dd, Od, md) {
      var Wd;
      const Fd = null !== (Wd = null === Od || void 0 === Od ? void 0 : Od.isRunning()) && void 0 !== Wd && Wd;
      return Dd(dd, md, (() => `Lite runtime ${null===Od?"no":"yes, running "+(Fd?"yes":"no")}; ${Ud((0,Rd.j)())}`), (() => function(dd, Od, md, Wd) {
        if (null === dd) return "engine choice not seen";
        if (!dd.packActive) return "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (Od.lossStopsPack ? "" : " (one that doesn't stop packs)");
        if ((0, pd.e)(dd.packActive, dd.defaultOffForPacks)) return "the pack forced WebGPU, yet nothing asked for a renderer: unexpected";
        if (!Od.lossStopsPack) return (Od.oldIntelDriver ? "old Intel driver verdict" : "few wasm memories or old Intel driver verdict, since cleared") + ", worded off as a loss is stored";
        return `a loss ${xd(md,Wd)}`
      }(Vd, nd(), "ios" === (0, hd.getOperatingSystem)(), Pd())))
    }

    function Id(dd, Od, md) {
      return Dd(dd, null !== Od ? {
        status: "failed",
        messageKey: Od
      } : {
        status: "ok",
        couldntRun: null !== md && void 0 !== md ? md : void 0
      }, (() => null === Ad ? "pick not seen" : Bd(Ad)), (() => function(dd, Od, md, Wd) {
        var Fd, Rd, Xd, Kd;
        return null === dd ? "pick not seen" : "off_after_loss" === dd.reason ? `off after a loss, ${"pack"===dd.source?xd(md,Wd):`from ${null!==(Kd=dd.source)&&void 0!==Kd?Kd:"none"}`}` : "not_requested" === dd.reason ? `not requested, from ${null!==(Xd=dd.source)&&void 0!==Xd?Xd:"none"} (setting ${Od.setting?"on":"off"})` : `${null!==(Fd=dd.reason)&&void 0!==Fd?Fd:"none"}, from ${null!==(Rd=dd.source)&&void 0!==Rd?Rd:"none"}`
      }(Ad, nd(), "ios" === (0, hd.getOperatingSystem)(), Pd())))
    }

    function ld(dd, Od, md) {
      const Wd = ud.loss();
      if ("none" === Wd) return;
      if ("cap" === Wd) return void Gd("further losses not logged");
      const Fd = nd();
      Gd(function(dd, Od, md, Wd) {
        return `loss (${dd}): ${Od}${null===md?"":` ${wd(md,gd)}`}; ${Wd}`
      }(dd, Od, md, `stored ${Ld((0,qd.o)().now)}; holds ${Fd.lossHolds?"yes":"no"}, stops packs ${Fd.lossStopsPack?"yes":"no"}`))
    }
  },
  35465: (dd, Od, md) => {
    function Wd(dd, Od) {
      return dd && !Od
    }
    md.d(Od, {
      e: () => Wd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);