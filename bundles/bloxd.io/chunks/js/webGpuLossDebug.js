export const id = 65;
export const ids = [65];
export const modules = {
  35934: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      noteJsEngine: () => hz,
      noteJsJoin: () => iz,
      noteWasmJoin: () => Lz,
      noteWasmPick: () => Qz,
      noteWebGpuLoss: () => lz,
      startWebGpuLossDebug: () => dz
    });
    var Fz = sz(308),
      Wz = sz(30),
      Xz = sz(2572),
      Oz = sz(3133),
      oz = sz(601),
      vz = sz(292),
      Uz = sz(106),
      Kz = sz(116),
      uz = sz(2579),
      Nz = sz(44),
      bz = sz(123),
      wz = sz(290),
      Dz = sz(2637),
      gz = sz(321),
      Hz = sz(8752);
    const Bz = 40,
      Pz = 160;

    function rz(zz, tz) {
      return `"${(zz.length>tz?`${zz.slice(0,tz)}...`:zz).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function Yz(zz) {
      return zz ? "yes" : "no"
    }

    function xz(zz) {
      var tz;
      const sz = zz.storedRenderer;
      return [`loss holds ${Yz(zz.lossHolds)}`, `stops packs ${Yz(zz.lossStopsPack)}`, `any loss ${Yz(zz.anyLoss)}`, `old intel ${Yz(zz.oldIntelDriver)}`, `default off for packs ${Yz(zz.defaultOffForPacks)}`, `default off reason ${null!==(tz=zz.defaultOffReason)&&void 0!==tz?tz:"none"}`, `setting ${zz.setting?"on":"off"} (stored ${null===zz.settingStored?"unset":zz.settingStored?"on":"off"})`, `renderer url ${null===zz.urlRenderer?"none":rz(zz.urlRenderer,12)}, stored ${null===sz||void 0===sz?"none":rz(String(sz),12)}`, `hidden-loss arm ${zz.hiddenLossArm}`].join(", ")
    }

    function mz(zz) {
      if (null === zz) return "no renderer settled";
      const {
        requested: tz,
        choice: sz,
        source: Fz,
        fallbackReason: Wz
      } = zz;
      return `renderer requested ${tz}, runs ${sz}, from ${Fz}${null===Wz?"":`, fell back: ${rz(Wz,80)}`}`
    }

    function Jz(zz, tz) {
      return zz ? `stopping packs: iOS, ${null!==tz&&void 0!==tz?tz:1} losses in a row within a day` : "stopping packs"
    }

    function Iz(zz) {
      var tz, sz, Fz;
      return `pick (wasm): backend ${null!==(tz=zz.backend)&&void 0!==tz?tz:"none"}, webgpu fallback ${null!==(sz=zz.reason)&&void 0!==sz?sz:"none"}, from ${null!==(Fz=zz.source)&&void 0!==Fz?Fz:"none"}, storage pull breaks ${Yz(zz.storagePullBreaks)}; packs run ${Yz("webgpu"===zz.backend&&!zz.storagePullBreaks)}, else ${zz.noWebGpu}`
    }

    function Cz(zz, tz, sz) {
      return `pack ${null===zz?"(name not read)":rz(zz,Bz)} ${tz}${null===sz?"":`, ${sz} variants`}`
    }
    const ez = "shaderPack:failedWebGpuOff",
      Zz = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const zz = !this.noPackSaid;
          return this.noPackSaid = !0, zz
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let Gz = null,
      Tz = null,
      cz = 0;

    function jz(zz) {
      (0, Dz.g)("webgpuloss", zz)
    }

    function Az() {
      return {
        lossHolds: (0, wz.v)(),
        lossStopsPack: (0, wz.z)(),
        anyLoss: (0, wz.g)(),
        oldIntelDriver: !0 === Nz.f.getItem(bz.D),
        defaultOffForPacks: Wz.b.isWebGpuDefaultOff(),
        defaultOffReason: Wz.b.webGpuDefaultOffReason(),
        settingStored: Nz.f.getItem(Fz.ec),
        setting: Wz.b.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: Kz.currentUrl.getSearchParam(uz.d),
        storedRenderer: Nz.f.getItem(uz.h),
        hiddenLossArm: vz.b.webgpu_hidden_loss_v1
      }
    }

    function yz(zz) {
      return function(zz, tz, sz) {
        if (null === zz || void 0 === zz) return "none";
        if ("object" !== typeof zz) return `unreadable (${typeof zz})`;
        const Fz = zz,
          Wz = "number" === typeof Fz.at ? Fz.at : null;
        return ["browser " + (tz ? "this one" : "another"), null === Wz ? "no time" : `set ${((sz-Wz)/gz.j).toFixed(1)} h ago`, `losses ${"number"===typeof Fz.losses?Fz.losses:"unset (1)"}${null!==Wz&&sz-Wz<gz.h?", the last within a day":""}`, `hidden-only ${"number"===typeof Fz.hiddenLosses?Fz.hiddenLosses:"no"}`, `first page ${"hidden"===Fz.firstPage||"visible"===Fz.firstPage?Fz.firstPage:"unset (visible)"}`].join(", ")
      }(zz, function(zz) {
        try {
          return "object" === typeof zz && null !== zz && zz.browser === (0, wz.e)()
        } catch {
          return !1
        }
      }(zz), Date.now())
    }

    function Mz() {
      const zz = (0, wz.m)().now;
      return "number" === typeof(null === zz || void 0 === zz ? void 0 : zz.losses) ? zz.losses : null
    }

    function dz() {
      const {
        atLoad: zz,
        now: tz,
        unreported: sz
      } = (0, wz.m)(), Fz = JSON.stringify(zz) === JSON.stringify(tz) ? "Ow" : `now ${yz(tz)}`;
      jz(`load (${oz.p?"wasm":"js"}, os ${(0,Uz.getOperatingSystem)()}): stored loss ${yz(zz)}; ${Fz}; unreported ${function(zz){if(null===zz||void 0===zz||"object"!==typeof zz)return"none";const{hidden:tz,visible:sz}=zz;return`
        hidden $ {
          "number" === typeof tz ? tz : 0
        }, visible $ {
          "number" === typeof sz ? sz : 0
        }
        `}(sz)}; webgpu_loss_page ${wz.w}`), jz(`load: ${xz(Az())}; pack expected ${(0,Oz.f)(Uz.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function hz(zz) {
      Gz = zz, jz(function(zz, tz, sz) {
        const Fz = zz.setting ? "the setting is on" : (0, Hz.d)(zz.packActive, zz.defaultOffForPacks) ? "the pack forces it" : zz.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${Yz(zz.useWebGpu)} (${Fz}); ${mz(tz)}; webgpu fallback ${null!==sz&&void 0!==sz?sz:"unset"}`
      }(zz, (0, Xz.g)(), (0, Uz.getWebGpuFallbackReason)()))
    }

    function Qz(zz) {
      Tz = zz, jz(Iz(zz))
    }
    async function kz(zz, tz, Fz, Wz) {
      const Xz = ++cz,
        Oz = await async function(zz) {
          var tz, Fz;
          const [{
            shaderPackPage: Wz,
            harnessShaderPackMode: Xz
          }, {
            getShaderPackPolicy: Oz
          }, {
            packRunsIn: oz
          }] = await Promise.all([sz.e(129).then((() => sz(38610))), sz.e(89).then((() => sz(40382))), sz.e(133).then((() => sz(40390)))]), vz = await Wz.load();
          if ("none" === vz.status) return null;
          const Uz = null !== (tz = Xz()) && void 0 !== tz ? tz : Oz(zz),
            Kz = "active" === vz.status ? vz.pack.variants : vz.variants,
            uz = oz(Kz, Uz);
          return {
            text: `${"active"===vz.status?Cz(vz.pack.name,"active",Kz.length):Cz(null,`blocked (${vz.messageKey})`,null!==(Fz=null===Kz||void 0===Kz?void 0:Kz.length)&&void 0!==Fz?Fz:null)}; game policy ${Uz}, runs in it ${uz?"yes":"no"}`,
            runs: uz
          }
        }(zz);
      if (null === Oz) return void(Zz.noPack() && jz(`join ${Xz}: no shader pack on this page (further joins without one not logged)`));
      const oz = Zz.join();
      if ("none" === oz) return;
      if ("cap" === oz) return void jz(`join ${Xz}: further joins not logged`);
      const vz = function(zz) {
          switch (zz.status) {
            case "ok":
              return void 0 === zz.couldntRun ? "joined" : `joined without the pack: ${zz.couldntRun}`;
            case "ds":
              return "ds";
            case "failed":
              return `failed: ${zz.messageKey}`
          }
        }(tz),
        Uz = ("ok" === tz.status ? tz.couldntRun : "failed" === tz.status ? tz.messageKey : void 0) === ez ? `; cause: ${Wz()}` : "";
      "outcome" !== oz ? (jz(`join ${Xz}: ${Oz.text}`), Oz.runs && (jz(`join ${Xz}: needs WebGPU; ${Fz()}`), jz(`join ${Xz}: ${xz(Az())}`)), jz(`join ${Xz}: ${vz}${Uz}`)) : jz(`join ${Xz}: ${vz}${Uz}`)
    }

    function iz(zz, tz, sz) {
      var Fz;
      const Wz = null !== (Fz = null === tz || void 0 === tz ? void 0 : tz.isRunning()) && void 0 !== Fz && Fz;
      return kz(zz, sz, (() => `Lite runtime ${null===tz?"no":"yes, running "+(Wz?"yes":"no")}; ${mz((0,Xz.g)())}`), (() => {
        return zz = Gz, tz = Az(), sz = "ios" === (0, Uz.getOperatingSystem)(), Fz = Mz(), null === zz ? "engine choice not seen" : zz.packActive ? (0, Hz.d)(zz.packActive, zz.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : tz.lossStopsPack ? `a loss ${Jz(sz,Fz)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (tz.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var zz, tz, sz, Fz
      }))
    }

    function Lz(zz, tz, sz) {
      return kz(zz, null !== tz ? {
        status: "failed",
        messageKey: tz
      } : {
        status: "ok",
        couldntRun: null !== sz && void 0 !== sz ? sz : void 0
      }, (() => null === Tz ? "pick not seen" : Iz(Tz)), (() => function(zz, tz, sz, Fz) {
        var Wz, Xz, Oz, oz;
        return null === zz ? "pick not seen" : "off_after_loss" === zz.reason ? `off after a loss, ${"pack"===zz.source?Jz(sz,Fz):`from ${null!==(oz=zz.source)&&void 0!==oz?oz:"none"}`}` : "not_requested" === zz.reason ? `not requested, from ${null!==(Oz=zz.source)&&void 0!==Oz?Oz:"none"} (setting ${tz.setting?"on":"off"})` : `${null!==(Wz=zz.reason)&&void 0!==Wz?Wz:"none"}, from ${null!==(Xz=zz.source)&&void 0!==Xz?Xz:"none"}`
      }(Tz, Az(), "ios" === (0, Uz.getOperatingSystem)(), Mz())))
    }

    function lz(zz, tz, sz) {
      const Fz = Zz.loss();
      if ("none" === Fz) return;
      if ("cap" === Fz) return void jz("further losses not logged");
      const Wz = Az();
      jz(function(zz, tz, sz, Fz) {
        return `loss (${zz}): ${tz}${null===sz?"":` ${rz(sz,Pz)}`}; ${Fz}`
      }(zz, tz, sz, `stored ${yz((0,wz.m)().now)}; holds ${Wz.lossHolds?"yes":"no"}, stops packs ${Wz.lossStopsPack?"yes":"no"}`))
    }
  },
  8752: (zz, tz, sz) => {
    function Fz(zz, tz) {
      return zz && !tz
    }
    sz.d(tz, {
      d: () => Fz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);