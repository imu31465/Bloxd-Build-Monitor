export const id = 29;
export const ids = [29];
export const modules = {
  34050: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      clientHintsRead: () => FB,
      debugDeviceLines: () => gB
    });
    var TB = ZB(684),
      JB = ZB(105),
      oB = ZB(140),
      GB = ZB(138),
      vB = ZB(3439);
    const kB = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function cB(BB) {
      if ("ios" === BB.os) return function(BB) {
        if (null !== BB.appIosVersion) return `${BB.appIosVersion} (the iOS app's)`;
        const IB = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(BB.userAgent);
        if (IB) return `${IB[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: ZB,
          os: TB
        } = BB.agent;
        if ("Safari" === ZB.name && ZB.version) return `${ZB.version} (Safari's version, which follows iOS)`;
        const JB = TB.version;
        if ("iOS" !== TB.name || !JB) return "? (a desktop user agent)";
        const [oB, GB = 0] = JB.split(".").map(Number);
        return oB < 18 || 18 === oB && GB < 6 ? `${JB} (user agent)` : `? (the user agent says ${JB}, frozen from iOS 26)`
      }(BB);
      const IB = BB.hintsPlatformVersion;
      if (IB) return "windows" === BB.os ? `${IB} (${function(BB){const IB=parseInt(BB,10);if(IB>=13)return"Windows 11";return IB>=1?"Windows 10":"Windows 8.1 or older"}(IB)}, client hints)` : `${IB} (client hints)`;
      const ZB = BB.agent.os.version;
      return ZB ? kB.has(ZB) ? `${ZB} (user agent, which may be frozen)` : `${ZB} (user agent)` : "?"
    }

    function nB(BB) {
      var IB;
      const ZB = (null !== (IB = BB.fullVersionList) && void 0 !== IB ? IB : []).filter((BB => {
        let {
          brand: IB
        } = BB;
        return !/not.a.brand/i.test(IB)
      })).map((BB => {
        let {
          brand: IB,
          version: ZB
        } = BB;
        return `${IB} ${ZB}`
      }));
      return `${BB.platform} ${BB.platformVersion||"?"}, ${ZB.join(", ")||"?"}, ${BB.architecture||"?"} ${BB.bitness||"?"}-bit, model ${BB.model||"?"}, mobile ${BB.mobile}`
    }
    let hB = "pending";
    const zB = navigator.userAgentData;
    void 0 === zB && (hB = "none (the browser has none)");
    const FB = void 0 === zB ? Promise.resolve() : zB.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((BB => {
      hB = BB
    }), (BB => {
      hB = `failed (${String(BB)})`
    }));

    function NB() {
      const BB = (0, GB.p)(),
        IB = null !== BB && void 0 !== BB ? BB : (0, GB.m)(),
        ZB = (0, GB.l)();
      return [IB ? `webgl ${IB.vendor} / ${IB.renderer} (${BB?"the renderer's context":"a probe"})` : "webgl ?", ZB ? `webgpu adapter ${ZB.vendor||"?"}/${ZB.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function gB() {
      var BB, IB, ZB, GB, kB, zB;
      const FB = (0, JB.getUserAgentDetails)(),
        gB = (0, JB.getOperatingSystem)(),
        qB = cB({
          os: gB,
          userAgent: navigator.userAgent,
          agent: FB,
          appIosVersion: vB.f,
          hintsPlatformVersion: "string" === typeof hB ? void 0 : hB.platformVersion
        }),
        yB = (0, TB.i)(navigator.platform, navigator.maxTouchPoints, oB.siteUsed, (0, JB.getWebGpuSupported)());
      return [`os ${gB} ${qB}; user agent's ${null!==(BB=FB.os.name)&&void 0!==BB?BB:"?"} ${null!==(IB=FB.os.version)&&void 0!==IB?IB:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,JB.getPlatformType)()}`, `browser ${null!==(ZB=FB.browser.name)&&void 0!==ZB?ZB:"?"} ${null!==(GB=FB.browser.version)&&void 0!==GB?GB:"?"}, engine ${null!==(kB=FB.engine.name)&&void 0!==kB?kB:"?"} ${null!==(zB=FB.engine.version)&&void 0!==zB?zB:"?"}`, `client hints ${"string"===typeof hB?hB:nB(hB)}`, `gpu ${NB()}`, `client ${TB.p.client} (${TB.p.reason})`, `surface site ${oB.siteUsed}, subsite ${oB.subsiteUsed}${oB.isIframed?", iframed":""}, capped surface ${null!==yB&&void 0!==yB?yB:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);