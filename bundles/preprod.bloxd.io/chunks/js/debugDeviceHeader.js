export const id = 34;
export const ids = [34];
export const modules = {
  34738: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      clientHintsRead: () => IU,
      debugDeviceLines: () => aU
    });
    var cU = zU(687),
      yU = zU(97),
      QU = zU(142),
      AU = zU(134),
      FU = zU(3640);
    const oU = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function DU(UU) {
      if ("ios" === UU.os) return function(UU) {
        if (null !== UU.appIosVersion) return `${UU.appIosVersion} (the iOS app's)`;
        const XU = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(UU.userAgent);
        if (XU) return `${XU[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: zU,
          os: cU
        } = UU.agent;
        if ("Safari" === zU.name && zU.version) return `${zU.version} (Safari's version, which follows iOS)`;
        const yU = cU.version;
        if ("iOS" !== cU.name || !yU) return "? (a desktop user agent)";
        const [QU, AU = 0] = yU.split(".").map(Number);
        return QU < 18 || 18 === QU && AU < 6 ? `${yU} (user agent)` : `? (the user agent says ${yU}, frozen from iOS 26)`
      }(UU);
      const XU = UU.hintsPlatformVersion;
      if (XU) return "windows" === UU.os ? `${XU} (${function(UU){const XU=parseInt(UU,10);if(XU>=13)return"Windows 11";return XU>=1?"Windows 10":"Windows 8.1 or older"}(XU)}, client hints)` : `${XU} (client hints)`;
      const zU = UU.agent.os.version;
      return zU ? oU.has(zU) ? `${zU} (user agent, which may be frozen)` : `${zU} (user agent)` : "?"
    }

    function EU(UU) {
      var XU;
      const zU = (null !== (XU = UU.fullVersionList) && void 0 !== XU ? XU : []).filter((UU => {
        let {
          brand: XU
        } = UU;
        return !/not.a.brand/i.test(XU)
      })).map((UU => {
        let {
          brand: XU,
          version: zU
        } = UU;
        return `${XU} ${zU}`
      }));
      return `${UU.platform} ${UU.platformVersion||"?"}, ${zU.join(", ")||"?"}, ${UU.architecture||"?"} ${UU.bitness||"?"}-bit, model ${UU.model||"?"}, mobile ${UU.mobile}`
    }
    let YU = "pending";
    const NU = navigator.userAgentData;
    void 0 === NU && (YU = "none (the browser has none)");
    const IU = void 0 === NU ? Promise.resolve() : NU.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((UU => {
      YU = UU
    }), (UU => {
      YU = `failed (${String(UU)})`
    }));

    function pU() {
      const UU = (0, AU.A)(),
        XU = null !== UU && void 0 !== UU ? UU : (0, AU.o)(),
        zU = (0, AU.l)();
      return [XU ? `webgl ${XU.vendor} / ${XU.renderer} (${UU?"the renderer's context":"a probe"})` : "webgl ?", zU ? `webgpu adapter ${zU.vendor||"?"}/${zU.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function aU() {
      var UU, XU, zU, AU, oU, NU;
      const IU = (0, yU.getUserAgentDetails)(),
        aU = (0, yU.getOperatingSystem)(),
        tU = DU({
          os: aU,
          userAgent: navigator.userAgent,
          agent: IU,
          appIosVersion: FU.h,
          hintsPlatformVersion: "string" === typeof YU ? void 0 : YU.platformVersion
        }),
        gU = (0, cU.j)(navigator.platform, navigator.maxTouchPoints, QU.siteUsed, (0, yU.getWebGpuSupported)());
      return [`os ${aU} ${tU}; user agent's ${null!==(UU=IU.os.name)&&void 0!==UU?UU:"?"} ${null!==(XU=IU.os.version)&&void 0!==XU?XU:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,yU.getPlatformType)()}`, `browser ${null!==(zU=IU.browser.name)&&void 0!==zU?zU:"?"} ${null!==(AU=IU.browser.version)&&void 0!==AU?AU:"?"}, engine ${null!==(oU=IU.engine.name)&&void 0!==oU?oU:"?"} ${null!==(NU=IU.engine.version)&&void 0!==NU?NU:"?"}`, `client hints ${"string"===typeof YU?YU:EU(YU)}`, `gpu ${pU()}`, `client ${cU.s.client} (${cU.s.reason})`, `surface site ${QU.siteUsed}, subsite ${QU.subsiteUsed}${QU.isIframed?", iframed":""}, capped surface ${null!==gU&&void 0!==gU?gU:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);