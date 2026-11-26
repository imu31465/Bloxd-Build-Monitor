export const id = 34;
export const ids = [34];
export const modules = {
  35172: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      clientHintsRead: () => rV,
      debugDeviceLines: () => bV
    });
    var JV = xV(686),
      YV = xV(99),
      UV = xV(138),
      yV = xV(134),
      pV = xV(3697);
    const QV = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function nV(VV) {
      if ("ios" === VV.os) return function(VV) {
        if (null !== VV.appIosVersion) return `${VV.appIosVersion} (the iOS app's)`;
        const eV = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(VV.userAgent);
        if (eV) return `${eV[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: xV,
          os: JV
        } = VV.agent;
        if ("Safari" === xV.name && xV.version) return `${xV.version} (Safari's version, which follows iOS)`;
        const YV = JV.version;
        if ("iOS" !== JV.name || !YV) return "? (a desktop user agent)";
        const [UV, yV = 0] = YV.split(".").map(Number);
        return UV < 18 || 18 === UV && yV < 6 ? `${YV} (user agent)` : `? (the user agent says ${YV}, frozen from iOS 26)`
      }(VV);
      const eV = VV.hintsPlatformVersion;
      if (eV) return "windows" === VV.os ? `${eV} (${function(VV){const eV=parseInt(VV,10);if(eV>=13)return"Windows 11";return eV>=1?"Windows 10":"Windows 8.1 or older"}(eV)}, client hints)` : `${eV} (client hints)`;
      const xV = VV.agent.os.version;
      return xV ? QV.has(xV) ? `${xV} (user agent, which may be frozen)` : `${xV} (user agent)` : "?"
    }

    function wV(VV) {
      var eV;
      const xV = (null !== (eV = VV.fullVersionList) && void 0 !== eV ? eV : []).filter((VV => {
        let {
          brand: eV
        } = VV;
        return !/not.a.brand/i.test(eV)
      })).map((VV => {
        let {
          brand: eV,
          version: xV
        } = VV;
        return `${eV} ${xV}`
      }));
      return `${VV.platform} ${VV.platformVersion||"?"}, ${xV.join(", ")||"?"}, ${VV.architecture||"?"} ${VV.bitness||"?"}-bit, model ${VV.model||"?"}, mobile ${VV.mobile}`
    }
    let ZV = "pending";
    const vV = navigator.userAgentData;
    void 0 === vV && (ZV = "none (the browser has none)");
    const rV = void 0 === vV ? Promise.resolve() : vV.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((VV => {
      ZV = VV
    }), (VV => {
      ZV = `failed (${String(VV)})`
    }));

    function kV() {
      const VV = (0, yV.z)(),
        eV = null !== VV && void 0 !== VV ? VV : (0, yV.o)(),
        xV = (0, yV.k)();
      return [eV ? `webgl ${eV.vendor} / ${eV.renderer} (${VV?"the renderer's context":"a probe"})` : "webgl ?", xV ? `webgpu adapter ${xV.vendor||"?"}/${xV.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function bV() {
      var VV, eV, xV, yV, QV, vV;
      const rV = (0, YV.getUserAgentDetails)(),
        bV = (0, YV.getOperatingSystem)(),
        EV = nV({
          os: bV,
          userAgent: navigator.userAgent,
          agent: rV,
          appIosVersion: pV.e,
          hintsPlatformVersion: "string" === typeof ZV ? void 0 : ZV.platformVersion
        }),
        BV = (0, JV.k)(navigator.platform, navigator.maxTouchPoints, UV.siteUsed, (0, YV.getWebGpuSupported)());
      return [`os ${bV} ${EV}; user agent's ${null!==(VV=rV.os.name)&&void 0!==VV?VV:"?"} ${null!==(eV=rV.os.version)&&void 0!==eV?eV:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,YV.getPlatformType)()}`, `browser ${null!==(xV=rV.browser.name)&&void 0!==xV?xV:"?"} ${null!==(yV=rV.browser.version)&&void 0!==yV?yV:"?"}, engine ${null!==(QV=rV.engine.name)&&void 0!==QV?QV:"?"} ${null!==(vV=rV.engine.version)&&void 0!==vV?vV:"?"}`, `client hints ${"string"===typeof ZV?ZV:wV(ZV)}`, `gpu ${kV()}`, `client ${JV.s.client} (${JV.s.reason})`, `surface site ${UV.siteUsed}, subsite ${UV.subsiteUsed}${UV.isIframed?", iframed":""}, capped surface ${null!==BV&&void 0!==BV?BV:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);