export const id = 29;
export const ids = [29];
export const modules = {
  8909: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      debugDeviceLines: () => tD
    });
    var ID = cD(646),
      pD = cD(90),
      iD = cD(120),
      fD = cD(116),
      bD = cD(4189);
    const QD = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function wD(DD) {
      if ("ios" === DD.os) return function(DD) {
        if (null !== DD.appIosVersion) return `${DD.appIosVersion} (the iOS app's)`;
        const CD = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(DD.userAgent);
        if (CD) return `${CD[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: cD,
          os: ID
        } = DD.agent;
        if ("Safari" === cD.name && cD.version) return `${cD.version} (Safari's version, which follows iOS)`;
        const pD = ID.version;
        if ("iOS" !== ID.name || !pD) return "? (a desktop user agent)";
        const [iD, fD = 0] = pD.split(".").map(Number);
        return iD < 18 || 18 === iD && fD < 6 ? `${pD} (user agent)` : `? (the user agent says ${pD}, frozen from iOS 26)`
      }(DD);
      const CD = DD.hintsPlatformVersion;
      if (CD) return "windows" === DD.os ? `${CD} (${function(DD){const CD=parseInt(DD,10);if(CD>=13)return"Windows 11";return CD>=1?"Windows 10":"Windows 8.1 or older"}(CD)}, client hints)` : `${CD} (client hints)`;
      const cD = DD.agent.os.version;
      return cD ? QD.has(cD) ? `${cD} (user agent, which may be frozen)` : `${cD} (user agent)` : "?"
    }

    function SD(DD) {
      var CD;
      const cD = (null !== (CD = DD.fullVersionList) && void 0 !== CD ? CD : []).filter((DD => {
        let {
          brand: CD
        } = DD;
        return !/not.a.brand/i.test(CD)
      })).map((DD => {
        let {
          brand: CD,
          version: cD
        } = DD;
        return `${CD} ${cD}`
      }));
      return `${DD.platform} ${DD.platformVersion||"?"}, ${cD.join(", ")||"?"}, ${DD.architecture||"?"} ${DD.bitness||"?"}-bit, model ${DD.model||"?"}, mobile ${DD.mobile}`
    }
    let BD = "pending";
    const yD = navigator.userAgentData;

    function MD() {
      const DD = (0, fD.l)(),
        CD = null !== DD && void 0 !== DD ? DD : (0, fD.i)(),
        cD = (0, fD.f)();
      return [CD ? `webgl ${CD.vendor} / ${CD.renderer} (${DD?"the renderer's context":"a probe"})` : "webgl ?", cD ? `webgpu adapter ${cD.vendor||"?"}/${cD.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function tD() {
      var DD, CD, cD, fD, QD, yD;
      const tD = (0, pD.getUserAgentDetails)(),
        ZD = (0, pD.getOperatingSystem)(),
        oD = wD({
          os: ZD,
          userAgent: navigator.userAgent,
          agent: tD,
          appIosVersion: bD.e,
          hintsPlatformVersion: "string" === typeof BD ? void 0 : BD.platformVersion
        }),
        vD = (0, ID.e)(navigator.platform, navigator.maxTouchPoints, iD.p);
      return [`os ${ZD} ${oD}; user agent's ${null!==(DD=tD.os.name)&&void 0!==DD?DD:"?"} ${null!==(CD=tD.os.version)&&void 0!==CD?CD:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,pD.getPlatformType)()}`, `browser ${null!==(cD=tD.browser.name)&&void 0!==cD?cD:"?"} ${null!==(fD=tD.browser.version)&&void 0!==fD?fD:"?"}, engine ${null!==(QD=tD.engine.name)&&void 0!==QD?QD:"?"} ${null!==(yD=tD.engine.version)&&void 0!==yD?yD:"?"}`, `client hints ${"string"===typeof BD?BD:SD(BD)}`, `gpu ${MD()}`, `client ${ID.g.client} (${ID.g.reason})`, `surface site ${iD.p}, subsite ${iD.v}${iD.h?", iframed":""}, capped surface ${null!==vD&&void 0!==vD?vD:"none"}`]
    }
    void 0 === yD ? BD = "none (the browser has none)" : yD.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((DD => {
      BD = DD
    }), (DD => {
      BD = `failed (${String(DD)})`
    }))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);