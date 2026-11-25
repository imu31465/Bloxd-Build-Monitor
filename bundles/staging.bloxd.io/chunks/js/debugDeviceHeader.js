export const id = 34;
export const ids = [34];
export const modules = {
  34912: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      clientHintsRead: () => HM,
      debugDeviceLines: () => JM
    });
    var OM = iM(656),
      SM = iM(83),
      jM = iM(119),
      aM = iM(114),
      PM = iM(3674);
    const nM = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function QM(MM) {
      if ("ios" === MM.os) return function(MM) {
        if (null !== MM.appIosVersion) return `${MM.appIosVersion} (the iOS app's)`;
        const rM = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(MM.userAgent);
        if (rM) return `${rM[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: iM,
          os: OM
        } = MM.agent;
        if ("Safari" === iM.name && iM.version) return `${iM.version} (Safari's version, which follows iOS)`;
        const SM = OM.version;
        if ("iOS" !== OM.name || !SM) return "? (a desktop user agent)";
        const [jM, aM = 0] = SM.split(".").map(Number);
        return jM < 18 || 18 === jM && aM < 6 ? `${SM} (user agent)` : `? (the user agent says ${SM}, frozen from iOS 26)`
      }(MM);
      const rM = MM.hintsPlatformVersion;
      if (rM) return "windows" === MM.os ? `${rM} (${function(MM){const rM=parseInt(MM,10);if(rM>=13)return"Windows 11";return rM>=1?"Windows 10":"Windows 8.1 or older"}(rM)}, client hints)` : `${rM} (client hints)`;
      const iM = MM.agent.os.version;
      return iM ? nM.has(iM) ? `${iM} (user agent, which may be frozen)` : `${iM} (user agent)` : "?"
    }

    function zM(MM) {
      var rM;
      const iM = (null !== (rM = MM.fullVersionList) && void 0 !== rM ? rM : []).filter((MM => {
        let {
          brand: rM
        } = MM;
        return !/not.a.brand/i.test(rM)
      })).map((MM => {
        let {
          brand: rM,
          version: iM
        } = MM;
        return `${rM} ${iM}`
      }));
      return `${MM.platform} ${MM.platformVersion||"?"}, ${iM.join(", ")||"?"}, ${MM.architecture||"?"} ${MM.bitness||"?"}-bit, model ${MM.model||"?"}, mobile ${MM.mobile}`
    }
    let LM = "pending";
    const mM = navigator.userAgentData;
    void 0 === mM && (LM = "none (the browser has none)");
    const HM = void 0 === mM ? Promise.resolve() : mM.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((MM => {
      LM = MM
    }), (MM => {
      LM = `failed (${String(MM)})`
    }));

    function hM() {
      const MM = (0, aM.y)(),
        rM = null !== MM && void 0 !== MM ? MM : (0, aM.o)(),
        iM = (0, aM.k)();
      return [rM ? `webgl ${rM.vendor} / ${rM.renderer} (${MM?"the renderer's context":"a probe"})` : "webgl ?", iM ? `webgpu adapter ${iM.vendor||"?"}/${iM.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function JM() {
      var MM, rM, iM, aM, nM, mM;
      const HM = (0, SM.getUserAgentDetails)(),
        JM = (0, SM.getOperatingSystem)(),
        dM = QM({
          os: JM,
          userAgent: navigator.userAgent,
          agent: HM,
          appIosVersion: PM.f,
          hintsPlatformVersion: "string" === typeof LM ? void 0 : LM.platformVersion
        }),
        yM = (0, OM.n)(navigator.platform, navigator.maxTouchPoints, jM.siteUsed, (0, SM.getWebGpuSupported)());
      return [`os ${JM} ${dM}; user agent's ${null!==(MM=HM.os.name)&&void 0!==MM?MM:"?"} ${null!==(rM=HM.os.version)&&void 0!==rM?rM:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,SM.getPlatformType)()}`, `browser ${null!==(iM=HM.browser.name)&&void 0!==iM?iM:"?"} ${null!==(aM=HM.browser.version)&&void 0!==aM?aM:"?"}, engine ${null!==(nM=HM.engine.name)&&void 0!==nM?nM:"?"} ${null!==(mM=HM.engine.version)&&void 0!==mM?mM:"?"}`, `client hints ${"string"===typeof LM?LM:zM(LM)}`, `gpu ${hM()}`, `client ${OM.x.client} (${OM.x.reason})`, `surface site ${jM.siteUsed}, subsite ${jM.subsiteUsed}${jM.isIframed?", iframed":""}, capped surface ${null!==yM&&void 0!==yM?yM:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);