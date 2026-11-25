export const id = 29;
export const ids = [29];
export const modules = {
  34239: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      clientHintsRead: () => Et,
      debugDeviceLines: () => wt
    });
    var Ot = Vt(725),
      qt = Vt(106),
      Dt = Vt(153),
      mt = Vt(146),
      dt = Vt(3331);
    const jt = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function Ht(tt) {
      if ("ios" === tt.os) return function(tt) {
        if (null !== tt.appIosVersion) return `${tt.appIosVersion} (the iOS app's)`;
        const et = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(tt.userAgent);
        if (et) return `${et[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: Vt,
          os: Ot
        } = tt.agent;
        if ("Safari" === Vt.name && Vt.version) return `${Vt.version} (Safari's version, which follows iOS)`;
        const qt = Ot.version;
        if ("iOS" !== Ot.name || !qt) return "? (a desktop user agent)";
        const [Dt, mt = 0] = qt.split(".").map(Number);
        return Dt < 18 || 18 === Dt && mt < 6 ? `${qt} (user agent)` : `? (the user agent says ${qt}, frozen from iOS 26)`
      }(tt);
      const et = tt.hintsPlatformVersion;
      if (et) return "windows" === tt.os ? `${et} (${function(tt){const et=parseInt(tt,10);if(et>=13)return"Windows 11";return et>=1?"Windows 10":"Windows 8.1 or older"}(et)}, client hints)` : `${et} (client hints)`;
      const Vt = tt.agent.os.version;
      return Vt ? jt.has(Vt) ? `${Vt} (user agent, which may be frozen)` : `${Vt} (user agent)` : "?"
    }

    function Xt(tt) {
      var et;
      const Vt = (null !== (et = tt.fullVersionList) && void 0 !== et ? et : []).filter((tt => {
        let {
          brand: et
        } = tt;
        return !/not.a.brand/i.test(et)
      })).map((tt => {
        let {
          brand: et,
          version: Vt
        } = tt;
        return `${et} ${Vt}`
      }));
      return `${tt.platform} ${tt.platformVersion||"?"}, ${Vt.join(", ")||"?"}, ${tt.architecture||"?"} ${tt.bitness||"?"}-bit, model ${tt.model||"?"}, mobile ${tt.mobile}`
    }
    let Qt = "pending";
    const lt = navigator.userAgentData;
    void 0 === lt && (Qt = "none (the browser has none)");
    const Et = void 0 === lt ? Promise.resolve() : lt.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((tt => {
      Qt = tt
    }), (tt => {
      Qt = `failed (${String(tt)})`
    }));

    function ft() {
      const tt = (0, mt.y)(),
        et = null !== tt && void 0 !== tt ? tt : (0, mt.t)(),
        Vt = (0, mt.p)();
      return [et ? `webgl ${et.vendor} / ${et.renderer} (${tt?"the renderer's context":"a probe"})` : "webgl ?", Vt ? `webgpu adapter ${Vt.vendor||"?"}/${Vt.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function wt() {
      var tt, et, Vt, mt, jt, lt;
      const Et = (0, qt.getUserAgentDetails)(),
        wt = (0, qt.getOperatingSystem)(),
        yt = Ht({
          os: wt,
          userAgent: navigator.userAgent,
          agent: Et,
          appIosVersion: dt.g,
          hintsPlatformVersion: "string" === typeof Qt ? void 0 : Qt.platformVersion
        }),
        Nt = (0, Ot.n)(navigator.platform, navigator.maxTouchPoints, Dt.siteUsed, (0, qt.getWebGpuSupported)());
      return [`os ${wt} ${yt}; user agent's ${null!==(tt=Et.os.name)&&void 0!==tt?tt:"?"} ${null!==(et=Et.os.version)&&void 0!==et?et:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,qt.getPlatformType)()}`, `browser ${null!==(Vt=Et.browser.name)&&void 0!==Vt?Vt:"?"} ${null!==(mt=Et.browser.version)&&void 0!==mt?mt:"?"}, engine ${null!==(jt=Et.engine.name)&&void 0!==jt?jt:"?"} ${null!==(lt=Et.engine.version)&&void 0!==lt?lt:"?"}`, `client hints ${"string"===typeof Qt?Qt:Xt(Qt)}`, `gpu ${ft()}`, `client ${Ot.u.client} (${Ot.u.reason})`, `surface site ${Dt.siteUsed}, subsite ${Dt.subsiteUsed}${Dt.isIframed?", iframed":""}, capped surface ${null!==Nt&&void 0!==Nt?Nt:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);