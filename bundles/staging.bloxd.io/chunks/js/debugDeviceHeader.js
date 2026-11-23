export const id = 29;
export const ids = [29];
export const modules = {
  34029: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      debugDeviceLines: () => ek
    });
    var Xk = Ik(646),
      Tk = Ik(95),
      ik = Ik(129),
      yk = Ik(123),
      lk = Ik(3201);
    const ak = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function qk(kk) {
      if ("ios" === kk.os) return function(kk) {
        if (null !== kk.appIosVersion) return `${kk.appIosVersion} (the iOS app's)`;
        const Fk = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(kk.userAgent);
        if (Fk) return `${Fk[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: Ik,
          os: Xk
        } = kk.agent;
        if ("Safari" === Ik.name && Ik.version) return `${Ik.version} (Safari's version, which follows iOS)`;
        const Tk = Xk.version;
        if ("iOS" !== Xk.name || !Tk) return "? (a desktop user agent)";
        const [ik, yk = 0] = Tk.split(".").map(Number);
        return ik < 18 || 18 === ik && yk < 6 ? `${Tk} (user agent)` : `? (the user agent says ${Tk}, frozen from iOS 26)`
      }(kk);
      const Fk = kk.hintsPlatformVersion;
      if (Fk) return "windows" === kk.os ? `${Fk} (${function(kk){const Fk=parseInt(kk,10);if(Fk>=13)return"Windows 11";return Fk>=1?"Windows 10":"Windows 8.1 or older"}(Fk)}, client hints)` : `${Fk} (client hints)`;
      const Ik = kk.agent.os.version;
      return Ik ? ak.has(Ik) ? `${Ik} (user agent, which may be frozen)` : `${Ik} (user agent)` : "?"
    }

    function Lk(kk) {
      var Fk;
      const Ik = (null !== (Fk = kk.fullVersionList) && void 0 !== Fk ? Fk : []).filter((kk => {
        let {
          brand: Fk
        } = kk;
        return !/not.a.brand/i.test(Fk)
      })).map((kk => {
        let {
          brand: Fk,
          version: Ik
        } = kk;
        return `${Fk} ${Ik}`
      }));
      return `${kk.platform} ${kk.platformVersion||"?"}, ${Ik.join(", ")||"?"}, ${kk.architecture||"?"} ${kk.bitness||"?"}-bit, model ${kk.model||"?"}, mobile ${kk.mobile}`
    }
    let tk = "pending";
    const Zk = navigator.userAgentData;

    function jk() {
      const kk = (0, yk.p)(),
        Fk = null !== kk && void 0 !== kk ? kk : (0, yk.k)(),
        Ik = (0, yk.j)();
      return [Fk ? `webgl ${Fk.vendor} / ${Fk.renderer} (${kk?"the renderer's context":"a probe"})` : "webgl ?", Ik ? `webgpu adapter ${Ik.vendor||"?"}/${Ik.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function ek() {
      var kk, Fk, Ik, yk, ak, Zk;
      const ek = (0, Tk.getUserAgentDetails)(),
        wk = (0, Tk.getOperatingSystem)(),
        Hk = qk({
          os: wk,
          userAgent: navigator.userAgent,
          agent: ek,
          appIosVersion: lk.e,
          hintsPlatformVersion: "string" === typeof tk ? void 0 : tk.platformVersion
        }),
        Jk = (0, Xk.i)(navigator.platform, navigator.maxTouchPoints, ik.v);
      return [`os ${wk} ${Hk}; user agent's ${null!==(kk=ek.os.name)&&void 0!==kk?kk:"?"} ${null!==(Fk=ek.os.version)&&void 0!==Fk?Fk:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,Tk.getPlatformType)()}`, `browser ${null!==(Ik=ek.browser.name)&&void 0!==Ik?Ik:"?"} ${null!==(yk=ek.browser.version)&&void 0!==yk?yk:"?"}, engine ${null!==(ak=ek.engine.name)&&void 0!==ak?ak:"?"} ${null!==(Zk=ek.engine.version)&&void 0!==Zk?Zk:"?"}`, `client hints ${"string"===typeof tk?tk:Lk(tk)}`, `gpu ${jk()}`, `client ${Xk.o.client} (${Xk.o.reason})`, `surface site ${ik.v}, subsite ${ik.C}${ik.l?", iframed":""}, capped surface ${null!==Jk&&void 0!==Jk?Jk:"none"}`]
    }
    void 0 === Zk ? tk = "none (the browser has none)" : Zk.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((kk => {
      tk = kk
    }), (kk => {
      tk = `failed (${String(kk)})`
    }))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);