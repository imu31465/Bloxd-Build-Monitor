export const id = 29;
export const ids = [29];
export const modules = {
  34083: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      debugDeviceLines: () => ID
    });
    var pD = wD(638),
      sD = wD(103),
      KD = wD(128),
      rD = wD(125),
      LD = wD(3266);
    const cD = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function gD(DD) {
      if ("ios" === DD.os) return function(DD) {
        if (null !== DD.appIosVersion) return `${DD.appIosVersion} (the iOS app's)`;
        const zD = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(DD.userAgent);
        if (zD) return `${zD[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: wD,
          os: pD
        } = DD.agent;
        if ("Safari" === wD.name && wD.version) return `${wD.version} (Safari's version, which follows iOS)`;
        const sD = pD.version;
        if ("iOS" !== pD.name || !sD) return "? (a desktop user agent)";
        const [KD, rD = 0] = sD.split(".").map(Number);
        return KD < 18 || 18 === KD && rD < 6 ? `${sD} (user agent)` : `? (the user agent says ${sD}, frozen from iOS 26)`
      }(DD);
      const zD = DD.hintsPlatformVersion;
      if (zD) return "windows" === DD.os ? `${zD} (${function(DD){const zD=parseInt(DD,10);if(zD>=13)return"Windows 11";return zD>=1?"Windows 10":"Windows 8.1 or older"}(zD)}, client hints)` : `${zD} (client hints)`;
      const wD = DD.agent.os.version;
      return wD ? cD.has(wD) ? `${wD} (user agent, which may be frozen)` : `${wD} (user agent)` : "?"
    }

    function RD(DD) {
      var zD;
      const wD = (null !== (zD = DD.fullVersionList) && void 0 !== zD ? zD : []).filter((DD => {
        let {
          brand: zD
        } = DD;
        return !/not.a.brand/i.test(zD)
      })).map((DD => {
        let {
          brand: zD,
          version: wD
        } = DD;
        return `${zD} ${wD}`
      }));
      return `${DD.platform} ${DD.platformVersion||"?"}, ${wD.join(", ")||"?"}, ${DD.architecture||"?"} ${DD.bitness||"?"}-bit, model ${DD.model||"?"}, mobile ${DD.mobile}`
    }
    let AD = "pending";
    const UD = navigator.userAgentData;

    function fD() {
      const DD = (0, rD.p)(),
        zD = null !== DD && void 0 !== DD ? DD : (0, rD.h)(),
        wD = (0, rD.g)();
      return [zD ? `webgl ${zD.vendor} / ${zD.renderer} (${DD?"the renderer's context":"a probe"})` : "webgl ?", wD ? `webgpu adapter ${wD.vendor||"?"}/${wD.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function ID() {
      var DD, zD, wD, rD, cD, UD;
      const ID = (0, sD.getUserAgentDetails)(),
        BD = (0, sD.getOperatingSystem)(),
        GD = gD({
          os: BD,
          userAgent: navigator.userAgent,
          agent: ID,
          appIosVersion: LD.f,
          hintsPlatformVersion: "string" === typeof AD ? void 0 : AD.platformVersion
        }),
        hD = (0, pD.l)(navigator.platform, navigator.maxTouchPoints, KD.v);
      return [`os ${BD} ${GD}; user agent's ${null!==(DD=ID.os.name)&&void 0!==DD?DD:"?"} ${null!==(zD=ID.os.version)&&void 0!==zD?zD:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,sD.getPlatformType)()}`, `browser ${null!==(wD=ID.browser.name)&&void 0!==wD?wD:"?"} ${null!==(rD=ID.browser.version)&&void 0!==rD?rD:"?"}, engine ${null!==(cD=ID.engine.name)&&void 0!==cD?cD:"?"} ${null!==(UD=ID.engine.version)&&void 0!==UD?UD:"?"}`, `client hints ${"string"===typeof AD?AD:RD(AD)}`, `gpu ${fD()}`, `client ${pD.n.client} (${pD.n.reason})`, `surface site ${KD.v}, subsite ${KD.D}${KD.i?", iframed":""}, capped surface ${null!==hD&&void 0!==hD?hD:"none"}`]
    }
    void 0 === UD ? AD = "none (the browser has none)" : UD.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((DD => {
      AD = DD
    }), (DD => {
      AD = `failed (${String(DD)})`
    }))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);