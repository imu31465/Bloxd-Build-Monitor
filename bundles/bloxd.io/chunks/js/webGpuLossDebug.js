export const id = 65;
export const ids = [65];
export const modules = {
  35865: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      noteJsEngine: () => rb,
      noteJsJoin: () => lb,
      noteWasmJoin: () => tb,
      noteWasmPick: () => Kb,
      noteWebGpuLoss: () => wb,
      startWebGpuLossDebug: () => ub
    });
    var Ab = Ub(307),
      Mb = Ub(19),
      Tb = Ub(2564),
      Eb = Ub(3132),
      Yb = Ub(603),
      Bb = Ub(294),
      eb = Ub(101),
      vb = Ub(109),
      Lb = Ub(2572),
      Pb = Ub(31),
      Xb = Ub(119),
      jb = Ub(292),
      Rb = Ub(2621),
      kb = Ub(325),
      yb = Ub(8815);
    const Zb = 40,
      Db = 160;

    function zb(bb, ab) {
      return `"${(bb.length>ab?`${bb.slice(0,ab)}...`:bb).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function xb(bb) {
      return bb ? "yes" : "no"
    }

    function ib(bb) {
      var ab;
      const Ub = bb.storedRenderer;
      return [`loss holds ${xb(bb.lossHolds)}`, `stops packs ${xb(bb.lossStopsPack)}`, `any loss ${xb(bb.anyLoss)}`, `old intel ${xb(bb.oldIntelDriver)}`, `default off for packs ${xb(bb.defaultOffForPacks)}`, `default off reason ${null!==(ab=bb.defaultOffReason)&&void 0!==ab?ab:"none"}`, `setting ${bb.setting?"on":"off"} (stored ${null===bb.settingStored?"unset":bb.settingStored?"on":"off"})`, `renderer url ${null===bb.urlRenderer?"none":zb(bb.urlRenderer,12)}, stored ${null===Ub||void 0===Ub?"none":zb(String(Ub),12)}`, `hidden-loss arm ${bb.hiddenLossArm}`].join(", ")
    }

    function fb(bb) {
      if (null === bb) return "no renderer settled";
      const {
        requested: ab,
        choice: Ub,
        source: Ab,
        fallbackReason: Mb
      } = bb;
      return `renderer requested ${ab}, runs ${Ub}, from ${Ab}${null===Mb?"":`, fell back: ${zb(Mb,80)}`}`
    }

    function mb(bb, ab) {
      return bb ? `stopping packs: iOS, ${null!==ab&&void 0!==ab?ab:1} losses in a row within a day` : "stopping packs"
    }

    function pb(bb) {
      var ab, Ub, Ab;
      return `pick (wasm): backend ${null!==(ab=bb.backend)&&void 0!==ab?ab:"none"}, webgpu fallback ${null!==(Ub=bb.reason)&&void 0!==Ub?Ub:"none"}, from ${null!==(Ab=bb.source)&&void 0!==Ab?Ab:"none"}, storage pull breaks ${xb(bb.storagePullBreaks)}; packs run ${xb("webgpu"===bb.backend&&!bb.storagePullBreaks)}, else ${bb.noWebGpu}`
    }

    function Nb(bb, ab, Ub) {
      return `pack ${null===bb?"(name not read)":zb(bb,Zb)} ${ab}${null===Ub?"":`, ${Ub} variants`}`
    }
    const Wb = "shaderPack:failedWebGpuOff",
      Hb = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const bb = !this.noPackSaid;
          return this.noPackSaid = !0, bb
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let Ib = null,
      db = null,
      Fb = 0;

    function hb(bb) {
      (0, Rb.n)("webgpuloss", bb)
    }

    function Gb() {
      return {
        lossHolds: (0, jb.u)(),
        lossStopsPack: (0, jb.A)(),
        anyLoss: (0, jb.f)(),
        oldIntelDriver: !0 === Pb.f.getItem(Xb.M),
        defaultOffForPacks: Mb.c.isWebGpuDefaultOff(),
        defaultOffReason: Mb.c.webGpuDefaultOffReason(),
        settingStored: Pb.f.getItem(Ab.ic),
        setting: Mb.c.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: vb.currentUrl.getSearchParam(Lb.c),
        storedRenderer: Pb.f.getItem(Lb.g),
        hiddenLossArm: Bb.c.webgpu_hidden_loss_v1
      }
    }

    function Qb(bb) {
      return function(bb, ab, Ub) {
        if (null === bb || void 0 === bb) return "none";
        if ("object" !== typeof bb) return `unreadable (${typeof bb})`;
        const Ab = bb,
          Mb = "number" === typeof Ab.at ? Ab.at : null;
        return ["browser " + (ab ? "this one" : "another"), null === Mb ? "no time" : `set ${((Ub-Mb)/kb.j).toFixed(1)} h ago`, `losses ${"number"===typeof Ab.losses?Ab.losses:"unset (1)"}${null!==Mb&&Ub-Mb<kb.g?", the last within a day":""}`, `hidden-only ${"number"===typeof Ab.hiddenLosses?Ab.hiddenLosses:"no"}`, `first page ${"hidden"===Ab.firstPage||"visible"===Ab.firstPage?Ab.firstPage:"unset (visible)"}`].join(", ")
      }(bb, function(bb) {
        try {
          return "object" === typeof bb && null !== bb && bb.browser === (0, jb.c)()
        } catch {
          return !1
        }
      }(bb), Date.now())
    }

    function qb() {
      const bb = (0, jb.l)().now;
      return "number" === typeof(null === bb || void 0 === bb ? void 0 : bb.losses) ? bb.losses : null
    }

    function ub() {
      const {
        atLoad: bb,
        now: ab,
        unreported: Ub
      } = (0, jb.l)(), Ab = JSON.stringify(bb) === JSON.stringify(ab) ? "RX" : `now ${Qb(ab)}`;
      hb(`load (${Yb.o?"wasm":"js"}, os ${(0,eb.getOperatingSystem)()}): stored loss ${Qb(bb)}; ${Ab}; unreported ${function(bb){if(null===bb||void 0===bb||"object"!==typeof bb)return"none";const{hidden:ab,visible:Ub}=bb;return`
        hidden $ {
          "number" === typeof ab ? ab : 0
        }, visible $ {
          "number" === typeof Ub ? Ub : 0
        }
        `}(Ub)}; webgpu_loss_page ${jb.w}`), hb(`load: ${ib(Gb())}; pack expected ${(0,Eb.g)(eb.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function rb(bb) {
      Ib = bb, hb(function(bb, ab, Ub) {
        const Ab = bb.setting ? "the setting is on" : (0, yb.d)(bb.packActive, bb.defaultOffForPacks) ? "the pack forces it" : bb.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${xb(bb.useWebGpu)} (${Ab}); ${fb(ab)}; webgpu fallback ${null!==Ub&&void 0!==Ub?Ub:"unset"}`
      }(bb, (0, Tb.h)(), (0, eb.getWebGpuFallbackReason)()))
    }

    function Kb(bb) {
      db = bb, hb(pb(bb))
    }
    async function ob(bb, ab, Ab, Mb) {
      const Tb = ++Fb,
        Eb = await async function(bb) {
          var ab, Ab;
          const [{
            shaderPackPage: Mb,
            harnessShaderPackMode: Tb
          }, {
            getShaderPackPolicy: Eb
          }, {
            packRunsIn: Yb
          }] = await Promise.all([Ub.e(129).then((() => Ub(38489))), Ub.e(89).then((() => Ub(40370))), Ub.e(133).then((() => Ub(40379)))]), Bb = await Mb.load();
          if ("none" === Bb.status) return null;
          const eb = null !== (ab = Tb()) && void 0 !== ab ? ab : Eb(bb),
            vb = "active" === Bb.status ? Bb.pack.variants : Bb.variants,
            Lb = Yb(vb, eb);
          return {
            text: `${"active"===Bb.status?Nb(Bb.pack.name,"active",vb.length):Nb(null,`blocked (${Bb.messageKey})`,null!==(Ab=null===vb||void 0===vb?void 0:vb.length)&&void 0!==Ab?Ab:null)}; game policy ${eb}, runs in it ${Lb?"yes":"no"}`,
            runs: Lb
          }
        }(bb);
      if (null === Eb) return void(Hb.noPack() && hb(`join ${Tb}: no shader pack on this page (further joins without one not logged)`));
      const Yb = Hb.join();
      if ("none" === Yb) return;
      if ("cap" === Yb) return void hb(`join ${Tb}: further joins not logged`);
      const Bb = function(bb) {
          switch (bb.status) {
            case "ok":
              return void 0 === bb.couldntRun ? "joined" : `joined without the pack: ${bb.couldntRun}`;
            case "xU":
              return "xU";
            case "failed":
              return `failed: ${bb.messageKey}`
          }
        }(ab),
        eb = ("ok" === ab.status ? ab.couldntRun : "failed" === ab.status ? ab.messageKey : void 0) === Wb ? `; cause: ${Mb()}` : "";
      "outcome" !== Yb ? (hb(`join ${Tb}: ${Eb.text}`), Eb.runs && (hb(`join ${Tb}: needs WebGPU; ${Ab()}`), hb(`join ${Tb}: ${ib(Gb())}`)), hb(`join ${Tb}: ${Bb}${eb}`)) : hb(`join ${Tb}: ${Bb}${eb}`)
    }

    function lb(bb, ab, Ub) {
      var Ab;
      const Mb = null !== (Ab = null === ab || void 0 === ab ? void 0 : ab.isRunning()) && void 0 !== Ab && Ab;
      return ob(bb, Ub, (() => `Lite runtime ${null===ab?"no":"yes, running "+(Mb?"yes":"no")}; ${fb((0,Tb.h)())}`), (() => {
        return bb = Ib, ab = Gb(), Ub = "ios" === (0, eb.getOperatingSystem)(), Ab = qb(), null === bb ? "engine choice not seen" : bb.packActive ? (0, yb.d)(bb.packActive, bb.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : ab.lossStopsPack ? `a loss ${mb(Ub,Ab)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (ab.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var bb, ab, Ub, Ab
      }))
    }

    function tb(bb, ab, Ub) {
      return ob(bb, null !== ab ? {
        status: "failed",
        messageKey: ab
      } : {
        status: "ok",
        couldntRun: null !== Ub && void 0 !== Ub ? Ub : void 0
      }, (() => null === db ? "pick not seen" : pb(db)), (() => function(bb, ab, Ub, Ab) {
        var Mb, Tb, Eb, Yb;
        return null === bb ? "pick not seen" : "off_after_loss" === bb.reason ? `off after a loss, ${"pack"===bb.source?mb(Ub,Ab):`from ${null!==(Yb=bb.source)&&void 0!==Yb?Yb:"none"}`}` : "not_requested" === bb.reason ? `not requested, from ${null!==(Eb=bb.source)&&void 0!==Eb?Eb:"none"} (setting ${ab.setting?"on":"off"})` : `${null!==(Mb=bb.reason)&&void 0!==Mb?Mb:"none"}, from ${null!==(Tb=bb.source)&&void 0!==Tb?Tb:"none"}`
      }(db, Gb(), "ios" === (0, eb.getOperatingSystem)(), qb())))
    }

    function wb(bb, ab, Ub) {
      const Ab = Hb.loss();
      if ("none" === Ab) return;
      if ("cap" === Ab) return void hb("further losses not logged");
      const Mb = Gb();
      hb(function(bb, ab, Ub, Ab) {
        return `loss (${bb}): ${ab}${null===Ub?"":` ${zb(Ub,Db)}`}; ${Ab}`
      }(bb, ab, Ub, `stored ${Qb((0,jb.l)().now)}; holds ${Mb.lossHolds?"yes":"no"}, stops packs ${Mb.lossStopsPack?"yes":"no"}`))
    }
  },
  8815: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      return bb && !ab
    }
    Ub.d(ab, {
      d: () => Ab
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);