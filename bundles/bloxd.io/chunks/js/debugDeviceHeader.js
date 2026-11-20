export const id = 29;
export const ids = [29];
export const modules = {
  9217: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      debugDeviceLines: () => vT
    });
    var lT = cT(636),
      MT = cT(118),
      KT = cT(159),
      OT = cT(150),
      yT = cT(4373);
    const fT = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function xT(TT) {
      if ("ios" === TT.os) return function(TT) {
        if (null !== TT.appIosVersion) return `${TT.appIosVersion} (the iOS app's)`;
        const kT = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(TT.userAgent);
        if (kT) return `${kT[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: cT,
          os: lT
        } = TT.agent;
        if ("Safari" === cT.name && cT.version) return `${cT.version} (Safari's version, which follows iOS)`;
        const MT = lT.version;
        if ("iOS" !== lT.name || !MT) return "? (a desktop user agent)";
        const [KT, OT = 0] = MT.split(".").map(Number);
        return KT < 18 || 18 === KT && OT < 6 ? `${MT} (user agent)` : `? (the user agent says ${MT}, frozen from iOS 26)`
      }(TT);
      const kT = TT.hintsPlatformVersion;
      if (kT) return "windows" === TT.os ? `${kT} (${function(TT){const kT=parseInt(TT,10);if(kT>=13)return"Windows 11";return kT>=1?"Windows 10":"Windows 8.1 or older"}(kT)}, client hints)` : `${kT} (client hints)`;
      const cT = TT.agent.os.version;
      return cT ? fT.has(cT) ? `${cT} (user agent, which may be frozen)` : `${cT} (user agent)` : "?"
    }

    function IT(TT) {
      var kT;
      const cT = (null !== (kT = TT.fullVersionList) && void 0 !== kT ? kT : []).filter((TT => {
        let {
          brand: kT
        } = TT;
        return !/not.a.brand/i.test(kT)
      })).map((TT => {
        let {
          brand: kT,
          version: cT
        } = TT;
        return `${kT} ${cT}`
      }));
      return `${TT.platform} ${TT.platformVersion||"?"}, ${cT.join(", ")||"?"}, ${TT.architecture||"?"} ${TT.bitness||"?"}-bit, model ${TT.model||"?"}, mobile ${TT.mobile}`
    }
    let AT = "pending";
    const CT = navigator.userAgentData;

    function jT() {
      const TT = (0, OT.q)(),
        kT = null !== TT && void 0 !== TT ? TT : (0, OT.m)(),
        cT = (0, OT.j)();
      return [kT ? `webgl ${kT.vendor} / ${kT.renderer} (${TT?"the renderer's context":"a probe"})` : "webgl ?", cT ? `webgpu adapter ${cT.vendor||"?"}/${cT.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function vT() {
      var TT, kT, cT, OT, fT, CT;
      const vT = (0, MT.getUserAgentDetails)(),
        tT = (0, MT.getOperatingSystem)(),
        hT = xT({
          os: tT,
          userAgent: navigator.userAgent,
          agent: vT,
          appIosVersion: yT.g,
          hintsPlatformVersion: "string" === typeof AT ? void 0 : AT.platformVersion
        }),
        NT = (0, lT.h)(navigator.platform, navigator.maxTouchPoints, KT.u);
      return [`os ${tT} ${hT}; user agent's ${null!==(TT=vT.os.name)&&void 0!==TT?TT:"?"} ${null!==(kT=vT.os.version)&&void 0!==kT?kT:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,MT.getPlatformType)()}`, `browser ${null!==(cT=vT.browser.name)&&void 0!==cT?cT:"?"} ${null!==(OT=vT.browser.version)&&void 0!==OT?OT:"?"}, engine ${null!==(fT=vT.engine.name)&&void 0!==fT?fT:"?"} ${null!==(CT=vT.engine.version)&&void 0!==CT?CT:"?"}`, `client hints ${"string"===typeof AT?AT:IT(AT)}`, `gpu ${jT()}`, `client ${lT.k.client} (${lT.k.reason})`, `surface site ${KT.u}, subsite ${KT.D}${KT.k?", iframed":""}, capped surface ${null!==NT&&void 0!==NT?NT:"none"}`]
    }
    void 0 === CT ? AT = "none (the browser has none)" : CT.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((TT => {
      AT = TT
    }), (TT => {
      AT = `failed (${String(TT)})`
    }))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);