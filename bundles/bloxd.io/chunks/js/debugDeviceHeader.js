export const id = 29;
export const ids = [29];
export const modules = {
  8881: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      debugDeviceLines: () => ek
    });
    var Rk = Bk(624),
      tk = Bk(98),
      ak = Bk(132),
      Xk = Bk(130),
      bk = Bk(4135);
    const wk = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function dk(kk) {
      if ("ios" === kk.os) return function(kk) {
        if (null !== kk.appIosVersion) return `${kk.appIosVersion} (the iOS app's)`;
        const Fk = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(kk.userAgent);
        if (Fk) return `${Fk[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: Bk,
          os: Rk
        } = kk.agent;
        if ("Safari" === Bk.name && Bk.version) return `${Bk.version} (Safari's version, which follows iOS)`;
        const tk = Rk.version;
        if ("iOS" !== Rk.name || !tk) return "? (a desktop user agent)";
        const [ak, Xk = 0] = tk.split(".").map(Number);
        return ak < 18 || 18 === ak && Xk < 6 ? `${tk} (user agent)` : `? (the user agent says ${tk}, frozen from iOS 26)`
      }(kk);
      const Fk = kk.hintsPlatformVersion;
      if (Fk) return "windows" === kk.os ? `${Fk} (${function(kk){const Fk=parseInt(kk,10);if(Fk>=13)return"Windows 11";return Fk>=1?"Windows 10":"Windows 8.1 or older"}(Fk)}, client hints)` : `${Fk} (client hints)`;
      const Bk = kk.agent.os.version;
      return Bk ? wk.has(Bk) ? `${Bk} (user agent, which may be frozen)` : `${Bk} (user agent)` : "?"
    }

    function sk(kk) {
      var Fk;
      const Bk = (null !== (Fk = kk.fullVersionList) && void 0 !== Fk ? Fk : []).filter((kk => {
        let {
          brand: Fk
        } = kk;
        return !/not.a.brand/i.test(Fk)
      })).map((kk => {
        let {
          brand: Fk,
          version: Bk
        } = kk;
        return `${Fk} ${Bk}`
      }));
      return `${kk.platform} ${kk.platformVersion||"?"}, ${Bk.join(", ")||"?"}, ${kk.architecture||"?"} ${kk.bitness||"?"}-bit, model ${kk.model||"?"}, mobile ${kk.mobile}`
    }
    let Vk = "pending";
    const Jk = navigator.userAgentData;

    function Ak() {
      const kk = (0, Xk.o)(),
        Fk = null !== kk && void 0 !== kk ? kk : (0, Xk.j)(),
        Bk = (0, Xk.f)();
      return [Fk ? `webgl ${Fk.vendor} / ${Fk.renderer} (${kk?"the renderer's context":"a probe"})` : "webgl ?", Bk ? `webgpu adapter ${Bk.vendor||"?"}/${Bk.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function ek() {
      var kk, Fk, Bk, Xk, wk, Jk;
      const ek = (0, tk.getUserAgentDetails)(),
        yk = (0, tk.getOperatingSystem)(),
        fk = dk({
          os: yk,
          userAgent: navigator.userAgent,
          agent: ek,
          appIosVersion: bk.i,
          hintsPlatformVersion: "string" === typeof Vk ? void 0 : Vk.platformVersion
        }),
        mk = (0, Rk.h)(navigator.platform, navigator.maxTouchPoints, ak.q);
      return [`os ${yk} ${fk}; user agent's ${null!==(kk=ek.os.name)&&void 0!==kk?kk:"?"} ${null!==(Fk=ek.os.version)&&void 0!==Fk?Fk:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,tk.getPlatformType)()}`, `browser ${null!==(Bk=ek.browser.name)&&void 0!==Bk?Bk:"?"} ${null!==(Xk=ek.browser.version)&&void 0!==Xk?Xk:"?"}, engine ${null!==(wk=ek.engine.name)&&void 0!==wk?wk:"?"} ${null!==(Jk=ek.engine.version)&&void 0!==Jk?Jk:"?"}`, `client hints ${"string"===typeof Vk?Vk:sk(Vk)}`, `gpu ${Ak()}`, `client ${Rk.i.client} (${Rk.i.reason})`, `surface site ${ak.q}, subsite ${ak.z}${ak.g?", iframed":""}, capped surface ${null!==mk&&void 0!==mk?mk:"none"}`]
    }
    void 0 === Jk ? Vk = "none (the browser has none)" : Jk.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((kk => {
      Vk = kk
    }), (kk => {
      Vk = `failed (${String(kk)})`
    }))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);