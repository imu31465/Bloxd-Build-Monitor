export const id = 35;
export const ids = [35];
export const modules = {
  35106: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      clientHintsRead: () => AW,
      debugDeviceLines: () => jW
    });
    var mW = OW(671),
      EW = OW(100),
      NW = OW(136),
      PW = OW(131),
      LW = OW(4440),
      cW = OW(713);
    const wW = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function tW(WW) {
      if ("ios" === WW.os) return function(WW) {
        if (null !== WW.appIosVersion) return `${WW.appIosVersion} (the iOS app's)`;
        const iW = (0, cW.d)(WW.userAgent);
        if (null !== iW) return `${iW} (the in-app browser's iOS token)`;
        const {
          browser: OW,
          os: mW
        } = WW.agent;
        if ("Safari" === OW.name && OW.version) return `${OW.version} (Safari's version, which follows iOS)`;
        const EW = mW.version;
        if ("iOS" !== mW.name || !EW) return "? (a desktop user agent)";
        const [NW, PW = 0] = EW.split(".").map(Number);
        return NW < 18 || 18 === NW && PW < 6 ? `${EW} (user agent)` : `? (the user agent says ${EW}, frozen from iOS 26)`
      }(WW);
      const iW = WW.hintsPlatformVersion;
      if (iW) return "windows" === WW.os ? `${iW} (${function(WW){const iW=parseInt(WW,10);if(iW>=13)return"Windows 11";return iW>=1?"Windows 10":"Windows 8.1 or older"}(iW)}, client hints)` : `${iW} (client hints)`;
      const OW = WW.agent.os.version;
      return OW ? wW.has(OW) ? `${OW} (user agent, which may be frozen)` : `${OW} (user agent)` : "?"
    }

    function ZW(WW) {
      var iW;
      const OW = (null !== (iW = WW.fullVersionList) && void 0 !== iW ? iW : []).filter((WW => {
        let {
          brand: iW
        } = WW;
        return !/not.a.brand/i.test(iW)
      })).map((WW => {
        let {
          brand: iW,
          version: OW
        } = WW;
        return `${iW} ${OW}`
      }));
      return `${WW.platform} ${WW.platformVersion||"?"}, ${OW.join(", ")||"?"}, ${WW.architecture||"?"} ${WW.bitness||"?"}-bit, model ${WW.model||"?"}, mobile ${WW.mobile}`
    }
    let xW = "pending";
    const lW = navigator.userAgentData;
    void 0 === lW && (xW = "none (the browser has none)");
    const AW = void 0 === lW ? Promise.resolve() : lW.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((WW => {
      xW = WW
    }), (WW => {
      xW = `failed (${String(WW)})`
    }));

    function bW() {
      const WW = (0, PW.t)(),
        iW = null !== WW && void 0 !== WW ? WW : (0, PW.j)(),
        OW = (0, PW.f)();
      return [iW ? `webgl ${iW.vendor} / ${iW.renderer} (${WW?"the renderer's context":"a probe"})` : "webgl ?", OW ? `webgpu adapter ${OW.vendor||"?"}/${OW.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function jW() {
      var WW, iW, OW, PW, cW, wW;
      const lW = (0, EW.getUserAgentDetails)(),
        AW = (0, EW.getOperatingSystem)(),
        jW = tW({
          os: AW,
          userAgent: navigator.userAgent,
          agent: lW,
          appIosVersion: LW.h,
          hintsPlatformVersion: "string" === typeof xW ? void 0 : xW.platformVersion
        }),
        UW = (0, mW.q)(navigator.platform, navigator.maxTouchPoints, NW.siteUsed, (0, EW.getWebGpuSupported)());
      return [`os ${AW} ${jW}; user agent's ${null!==(WW=lW.os.name)&&void 0!==WW?WW:"?"} ${null!==(iW=lW.os.version)&&void 0!==iW?iW:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,EW.getPlatformType)()}`, `browser ${null!==(OW=lW.browser.name)&&void 0!==OW?OW:"?"} ${null!==(PW=lW.browser.version)&&void 0!==PW?PW:"?"}, engine ${null!==(cW=lW.engine.name)&&void 0!==cW?cW:"?"} ${null!==(wW=lW.engine.version)&&void 0!==wW?wW:"?"}`, `client hints ${"string"===typeof xW?xW:ZW(xW)}`, `gpu ${bW()}`, `client ${mW.B.client} (${mW.B.reason})`, `surface site ${NW.siteUsed}, subsite ${NW.subsiteUsed}${NW.isIframed?", iframed":""}, capped surface ${null!==UW&&void 0!==UW?UW:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);