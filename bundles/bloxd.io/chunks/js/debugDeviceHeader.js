export const id = 29;
export const ids = [29];
export const modules = {
  8869: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      debugDeviceLines: () => CU
    });
    var tU = gU(603),
      pU = gU(96),
      EU = gU(135),
      PU = gU(131),
      TU = gU(4058);
    const qU = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function KU(UU) {
      if ("ios" === UU.os) return function(UU) {
        if (null !== UU.appIosVersion) return `${UU.appIosVersion} (the iOS app's)`;
        const RU = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(UU.userAgent);
        if (RU) return `${RU[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: gU,
          os: tU
        } = UU.agent;
        if ("Safari" === gU.name && gU.version) return `${gU.version} (Safari's version, which follows iOS)`;
        const pU = tU.version;
        if ("iOS" !== tU.name || !pU) return "? (a desktop user agent)";
        const [EU, PU = 0] = pU.split(".").map(Number);
        return EU < 18 || 18 === EU && PU < 6 ? `${pU} (user agent)` : `? (the user agent says ${pU}, frozen from iOS 26)`
      }(UU);
      const RU = UU.hintsPlatformVersion;
      if (RU) return "windows" === UU.os ? `${RU} (${function(UU){const RU=parseInt(UU,10);if(RU>=13)return"Windows 11";return RU>=1?"Windows 10":"Windows 8.1 or older"}(RU)}, client hints)` : `${RU} (client hints)`;
      const gU = UU.agent.os.version;
      return gU ? qU.has(gU) ? `${gU} (user agent, which may be frozen)` : `${gU} (user agent)` : "?"
    }

    function cU(UU) {
      var RU;
      const gU = (null !== (RU = UU.fullVersionList) && void 0 !== RU ? RU : []).filter((UU => {
        let {
          brand: RU
        } = UU;
        return !/not.a.brand/i.test(RU)
      })).map((UU => {
        let {
          brand: RU,
          version: gU
        } = UU;
        return `${RU} ${gU}`
      }));
      return `${UU.platform} ${UU.platformVersion||"?"}, ${gU.join(", ")||"?"}, ${UU.architecture||"?"} ${UU.bitness||"?"}-bit, model ${UU.model||"?"}, mobile ${UU.mobile}`
    }
    let GU = "pending";
    const jU = navigator.userAgentData;

    function uU() {
      const UU = (0, PU.n)(),
        RU = null !== UU && void 0 !== UU ? UU : (0, PU.h)(),
        gU = (0, PU.e)();
      return [RU ? `webgl ${RU.vendor} / ${RU.renderer} (${UU?"the renderer's context":"a probe"})` : "webgl ?", gU ? `webgpu adapter ${gU.vendor||"?"}/${gU.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function CU() {
      var UU, RU, gU, PU, qU, jU;
      const CU = (0, pU.getUserAgentDetails)(),
        hU = (0, pU.getOperatingSystem)(),
        QU = KU({
          os: hU,
          userAgent: navigator.userAgent,
          agent: CU,
          appIosVersion: TU.c,
          hintsPlatformVersion: "string" === typeof GU ? void 0 : GU.platformVersion
        }),
        eU = (0, tU.l)(navigator.platform, navigator.maxTouchPoints, EU.t);
      return [`os ${hU} ${QU}; user agent's ${null!==(UU=CU.os.name)&&void 0!==UU?UU:"?"} ${null!==(RU=CU.os.version)&&void 0!==RU?RU:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,pU.getPlatformType)()}`, `browser ${null!==(gU=CU.browser.name)&&void 0!==gU?gU:"?"} ${null!==(PU=CU.browser.version)&&void 0!==PU?PU:"?"}, engine ${null!==(qU=CU.engine.name)&&void 0!==qU?qU:"?"} ${null!==(jU=CU.engine.version)&&void 0!==jU?jU:"?"}`, `client hints ${"string"===typeof GU?GU:cU(GU)}`, `gpu ${uU()}`, `client ${tU.n.client} (${tU.n.reason})`, `surface site ${EU.t}, subsite ${EU.A}${EU.j?", iframed":""}, capped surface ${null!==eU&&void 0!==eU?eU:"none"}`]
    }
    void 0 === jU ? GU = "none (the browser has none)" : jU.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((UU => {
      GU = UU
    }), (UU => {
      GU = `failed (${String(UU)})`
    }))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);