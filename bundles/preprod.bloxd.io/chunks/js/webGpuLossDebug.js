export const id = 69;
export const ids = [69];
export const modules = {
  36647: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      noteJsEngine: () => bp,
      noteJsJoin: () => np,
      noteWasmJoin: () => Fp,
      noteWasmPick: () => hp,
      noteWebGpuLoss: () => gp,
      startWebGpuLossDebug: () => fp
    });
    var Op = cp(322),
      op = cp(25),
      Ip = cp(2860),
      Sp = cp(3564),
      xp = cp(657),
      Lp = cp(104),
      Yp = cp(108),
      Dp = cp(2865),
      Ap = cp(44),
      Pp = cp(118),
      Wp = cp(314),
      yp = cp(650),
      Up = cp(2908),
      wp = cp(337),
      vp = cp(335),
      tp = cp(34354);
    const Hp = 40,
      dp = 160;

    function ep(pp, ip) {
      return `"${(pp.length>ip?`${pp.slice(0,ip)}...`:pp).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function jp(pp) {
      return pp ? "yes" : "no"
    }

    function kp(pp) {
      var ip;
      const cp = pp.storedRenderer;
      return [`loss holds ${jp(pp.lossHolds)}`, `stops packs ${jp(pp.lossStopsPack)}`, `any loss ${jp(pp.anyLoss)}`, `old intel ${jp(pp.oldIntelDriver)}`, `default off for packs ${jp(pp.defaultOffForPacks)}`, `default off reason ${null!==(ip=pp.defaultOffReason)&&void 0!==ip?ip:"none"}`, `setting ${pp.setting?"on":"off"} (stored ${null===pp.settingStored?"unset":pp.settingStored?"on":"off"})`, `renderer url ${null===pp.urlRenderer?"none":ep(pp.urlRenderer,12)}, stored ${null===cp||void 0===cp?"none":ep(String(cp),12)}`].join(", ")
    }

    function mp(pp) {
      if (null === pp) return "no renderer settled";
      const {
        requested: ip,
        choice: cp,
        source: Op,
        fallbackReason: op
      } = pp;
      return `renderer requested ${ip}, runs ${cp}, from ${Op}${null===op?"":`, fell back: ${ep(op,80)}`}`
    }

    function Rp(pp, ip) {
      return pp ? `stopping packs: iOS, ${null!==ip&&void 0!==ip?ip:1} losses in a row within a day` : "stopping packs"
    }

    function qp(pp) {
      var ip, cp, Op;
      return `pick (wasm): backend ${null!==(ip=pp.backend)&&void 0!==ip?ip:"none"}, webgpu fallback ${null!==(cp=pp.reason)&&void 0!==cp?cp:"none"}, from ${null!==(Op=pp.source)&&void 0!==Op?Op:"none"}, storage pull breaks ${jp(pp.storagePullBreaks)}; packs run ${jp("webgpu"===pp.backend)}, else ${pp.noWebGpu}`
    }

    function Mp(pp, ip, cp) {
      return `pack ${null===pp?"(name not read)":ep(pp,Hp)} ${ip}${null===cp?"":`, ${cp} variants`}`
    }
    const Cp = "shaderPack:failedWebGpuOff",
      Ep = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const pp = !this.noPackSaid;
          return this.noPackSaid = !0, pp
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let Xp = null,
      lp = null,
      Qp = 0;

    function Jp(pp) {
      (0, Up.n)("webgpuloss", pp)
    }

    function Bp() {
      return {
        lossHolds: (0, Wp.y)(),
        lossStopsPack: (0, Wp.E)(),
        anyLoss: (0, Wp.f)(),
        oldIntelDriver: !0 === Ap.h.getItem(Pp.D),
        defaultOffForPacks: op.c.isWebGpuDefaultOff(),
        defaultOffReason: op.c.webGpuDefaultOffReason(),
        settingStored: Ap.h.getItem(Op.tc),
        setting: op.c.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: Yp.currentUrl.getSearchParam(Dp.c),
        storedRenderer: Ap.h.getItem(Dp.g)
      }
    }

    function Np(pp) {
      return function(pp, ip, cp) {
        if (null === pp || void 0 === pp) return "none";
        if ("object" !== typeof pp) return `unreadable (${typeof pp})`;
        const Op = pp,
          op = "number" === typeof Op.at ? Op.at : null,
          Ip = ["browser " + (ip ? "this one" : "another"), null === op ? "no time" : `set ${((cp-op)/wp.m).toFixed(1)} h ago`, `losses ${"number"===typeof Op.losses?Op.losses:"unset (1)"}${null!==op&&cp-op<wp.i?", the last within a day":""}`, `first page ${"hidden"===Op.firstPage||"visible"===Op.firstPage?Op.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof Op.holdStep?Op.holdStep:"unset (1)"}`];
        if (void 0 !== Op.reason || void 0 !== Op.message) {
          const pp = "string" === typeof Op.reason ? ep(Op.reason, vp.d) : "no reason";
          Ip.push(`cause ${pp} ${!0===Op.causeSent?"reported":"unreported"}`)
        }
        return Ip.join(", ")
      }(pp, function(pp) {
        try {
          return "object" === typeof pp && null !== pp && pp.browser === (0, Wp.c)()
        } catch {
          return !1
        }
      }(pp), Date.now())
    }

    function Tp() {
      const pp = (0, Wp.p)().now;
      return "number" === typeof(null === pp || void 0 === pp ? void 0 : pp.losses) ? pp.losses : null
    }

    function fp() {
      const {
        atLoad: pp,
        now: ip,
        unreported: cp
      } = (0, Wp.p)(), Op = JSON.stringify(pp) === JSON.stringify(ip) ? "aW" : `now ${Np(ip)}`;
      Jp(`load (${xp.z?"wasm":"js"}, os ${(0,Lp.getOperatingSystem)()}): stored loss ${Np(pp)}; ${Op}; cause kept apart ${function(pp,ip){if(null===pp||void 0===pp)return"none";const{reason:cp,at:Op}="object"===typeof pp?pp:{},op="number"===typeof Op?`
        set $ {
          ((ip - Op) / wp.m).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof cp ? ep(cp, vp.d) : "no reason"
        }, $ {
          op
        }
        `}((0,yp.f)(),Date.now())}; unreported ${function(pp,ip){if(null===pp||void 0===pp||"object"!==typeof pp)return"none";const cp=pp;return ip.map((pp=>`${pp} ${"number"===typeof cp[pp]?cp[pp]:0}`)).join(", ")}(cp,Wp.b)}; webgpu_loss_page ${Wp.C}`), Jp(`load: ${kp(Bp())}; pack expected ${(0,Sp.e)(Lp.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function bp(pp) {
      Xp = pp, Jp(function(pp, ip, cp) {
        const Op = pp.setting ? "the setting is on" : (0, tp.c)(pp.packActive, pp.defaultOffForPacks) ? "the pack forces it" : pp.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${jp(pp.useWebGpu)} (${Op}); ${mp(ip)}; webgpu fallback ${null!==cp&&void 0!==cp?cp:"unset"}`
      }(pp, (0, Ip.j)(), (0, Lp.getWebGpuFallbackReason)()))
    }

    function hp(pp) {
      lp = pp, Jp(qp(pp))
    }
    async function ap(pp, ip, Op, op) {
      const Ip = ++Qp,
        Sp = await async function(pp) {
          var ip, Op;
          const [{
            shaderPackPage: op,
            harnessShaderPackMode: Ip
          }, {
            getShaderPackPolicy: Sp
          }, {
            packRunsIn: xp
          }] = await Promise.all([cp.e(117).then((() => cp(39396))), cp.e(93).then((() => cp(41507))), cp.e(141).then((() => cp(41515)))]), Lp = await op.load();
          if ("none" === Lp.status) return null;
          const Yp = null !== (ip = Ip()) && void 0 !== ip ? ip : Sp(pp),
            Dp = "active" === Lp.status ? Lp.pack.variants : Lp.variants,
            Ap = xp(Dp, Yp);
          return {
            text: `${"active"===Lp.status?Mp(Lp.pack.name,"active",Dp.length):Mp(null,`blocked (${Lp.messageKey})`,null!==(Op=null===Dp||void 0===Dp?void 0:Dp.length)&&void 0!==Op?Op:null)}; game policy ${Yp}, runs in it ${Ap?"yes":"no"}`,
            runs: Ap
          }
        }(pp);
      if (null === Sp) return void(Ep.noPack() && Jp(`join ${Ip}: no shader pack on this page (further joins without one not logged)`));
      const xp = Ep.join();
      if ("none" === xp) return;
      if ("cap" === xp) return void Jp(`join ${Ip}: further joins not logged`);
      const Lp = function(pp) {
          switch (pp.status) {
            case "ok":
              return void 0 === pp.couldntRun ? "joined" : `joined without the pack: ${pp.couldntRun}`;
            case "OO":
              return "OO";
            case "failed":
              return `failed: ${pp.messageKey}`
          }
        }(ip),
        Yp = ("ok" === ip.status ? ip.couldntRun : "failed" === ip.status ? ip.messageKey : void 0) === Cp ? `; cause: ${op()}` : "";
      "outcome" !== xp ? (Jp(`join ${Ip}: ${Sp.text}`), Sp.runs && (Jp(`join ${Ip}: needs WebGPU; ${Op()}`), Jp(`join ${Ip}: ${kp(Bp())}`)), Jp(`join ${Ip}: ${Lp}${Yp}`)) : Jp(`join ${Ip}: ${Lp}${Yp}`)
    }

    function np(pp, ip, cp) {
      var Op;
      const op = null !== (Op = null === ip || void 0 === ip ? void 0 : ip.isRunning()) && void 0 !== Op && Op;
      return ap(pp, cp, (() => `Lite runtime ${null===ip?"no":"yes, running "+(op?"yes":"no")}; ${mp((0,Ip.j)())}`), (() => {
        return pp = Xp, ip = Bp(), cp = "ios" === (0, Lp.getOperatingSystem)(), Op = Tp(), null === pp ? "engine choice not seen" : pp.packActive ? (0, tp.c)(pp.packActive, pp.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : ip.lossStopsPack ? `a loss ${Rp(cp,Op)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (ip.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var pp, ip, cp, Op
      }))
    }

    function Fp(pp, ip, cp) {
      return ap(pp, null !== ip ? {
        status: "failed",
        messageKey: ip
      } : {
        status: "ok",
        couldntRun: null !== cp && void 0 !== cp ? cp : void 0
      }, (() => null === lp ? "pick not seen" : qp(lp)), (() => function(pp, ip, cp, Op) {
        var op, Ip, Sp, xp;
        return null === pp ? "pick not seen" : "off_after_loss" === pp.reason ? `off after a loss, ${"pack"===pp.source?Rp(cp,Op):`from ${null!==(xp=pp.source)&&void 0!==xp?xp:"none"}`}` : "not_requested" === pp.reason ? `not requested, from ${null!==(Sp=pp.source)&&void 0!==Sp?Sp:"none"} (setting ${ip.setting?"on":"off"})` : `${null!==(op=pp.reason)&&void 0!==op?op:"none"}, from ${null!==(Ip=pp.source)&&void 0!==Ip?Ip:"none"}`
      }(lp, Bp(), "ios" === (0, Lp.getOperatingSystem)(), Tp())))
    }

    function gp(pp, ip, cp) {
      const Op = Ep.loss();
      if ("none" === Op) return;
      if ("cap" === Op) return void Jp("further losses not logged");
      const op = Bp();
      Jp(function(pp, ip, cp, Op) {
        return `loss (${pp}): ${ip}${null===cp?"":` ${ep(cp,dp)}`}; ${Op}`
      }(pp, ip, cp, `stored ${Np((0,Wp.p)().now)}; holds ${op.lossHolds?"yes":"no"}, stops packs ${op.lossStopsPack?"yes":"no"}`))
    }
  },
  34354: (pp, ip, cp) => {
    function Op(pp, ip) {
      return pp && !ip
    }
    cp.d(ip, {
      c: () => Op
    })
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);