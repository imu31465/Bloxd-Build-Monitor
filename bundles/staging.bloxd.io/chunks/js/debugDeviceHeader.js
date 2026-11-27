export const id = 35;
export const ids = [35];
export const modules = {
  35016: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      clientHintsRead: () => eR,
      debugDeviceLines: () => LR
    });
    var yR = GR(709),
      tR = GR(103),
      uR = GR(134),
      ZR = GR(132),
      qR = GR(4533),
      iR = GR(767);
    const fR = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function VR(RR) {
      if ("ios" === RR.os) return function(RR) {
        if (null !== RR.appIosVersion) return `${RR.appIosVersion} (the iOS app's)`;
        const JR = (0, iR.b)(RR.userAgent);
        if (null !== JR) return `${JR} (the in-app browser's iOS token)`;
        const {
          browser: GR,
          os: yR
        } = RR.agent;
        if ("Safari" === GR.name && GR.version) return `${GR.version} (Safari's version, which follows iOS)`;
        const tR = yR.version;
        if ("iOS" !== yR.name || !tR) return "? (a desktop user agent)";
        const [uR, ZR = 0] = tR.split(".").map(Number);
        return uR < 18 || 18 === uR && ZR < 6 ? `${tR} (user agent)` : `? (the user agent says ${tR}, frozen from iOS 26)`
      }(RR);
      const JR = RR.hintsPlatformVersion;
      if (JR) return "windows" === RR.os ? `${JR} (${function(RR){const JR=parseInt(RR,10);if(JR>=13)return"Windows 11";return JR>=1?"Windows 10":"Windows 8.1 or older"}(JR)}, client hints)` : `${JR} (client hints)`;
      const GR = RR.agent.os.version;
      return GR ? fR.has(GR) ? `${GR} (user agent, which may be frozen)` : `${GR} (user agent)` : "?"
    }

    function KR(RR) {
      var JR;
      const GR = (null !== (JR = RR.fullVersionList) && void 0 !== JR ? JR : []).filter((RR => {
        let {
          brand: JR
        } = RR;
        return !/not.a.brand/i.test(JR)
      })).map((RR => {
        let {
          brand: JR,
          version: GR
        } = RR;
        return `${JR} ${GR}`
      }));
      return `${RR.platform} ${RR.platformVersion||"?"}, ${GR.join(", ")||"?"}, ${RR.architecture||"?"} ${RR.bitness||"?"}-bit, model ${RR.model||"?"}, mobile ${RR.mobile}`
    }
    let wR = "pending";
    const rR = navigator.userAgentData;
    void 0 === rR && (wR = "none (the browser has none)");
    const eR = void 0 === rR ? Promise.resolve() : rR.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((RR => {
      wR = RR
    }), (RR => {
      wR = `failed (${String(RR)})`
    }));

    function aR() {
      const RR = (0, ZR.y)(),
        JR = null !== RR && void 0 !== RR ? RR : (0, ZR.o)(),
        GR = (0, ZR.k)();
      return [JR ? `webgl ${JR.vendor} / ${JR.renderer} (${RR?"the renderer's context":"a probe"})` : "webgl ?", GR ? `webgpu adapter ${GR.vendor||"?"}/${GR.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function LR() {
      var RR, JR, GR, ZR, iR, fR;
      const rR = (0, tR.getUserAgentDetails)(),
        eR = (0, tR.getOperatingSystem)(),
        LR = VR({
          os: eR,
          userAgent: navigator.userAgent,
          agent: rR,
          appIosVersion: qR.g,
          hintsPlatformVersion: "string" === typeof wR ? void 0 : wR.platformVersion
        }),
        nR = (0, yR.o)(navigator.platform, navigator.maxTouchPoints, uR.siteUsed, (0, tR.getWebGpuSupported)());
      return [`os ${eR} ${LR}; user agent's ${null!==(RR=rR.os.name)&&void 0!==RR?RR:"?"} ${null!==(JR=rR.os.version)&&void 0!==JR?JR:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,tR.getPlatformType)()}`, `browser ${null!==(GR=rR.browser.name)&&void 0!==GR?GR:"?"} ${null!==(ZR=rR.browser.version)&&void 0!==ZR?ZR:"?"}, engine ${null!==(iR=rR.engine.name)&&void 0!==iR?iR:"?"} ${null!==(fR=rR.engine.version)&&void 0!==fR?fR:"?"}`, `client hints ${"string"===typeof wR?wR:KR(wR)}`, `gpu ${aR()}`, `client ${yR.z.client} (${yR.z.reason})`, `surface site ${uR.siteUsed}, subsite ${uR.subsiteUsed}${uR.isIframed?", iframed":""}, capped surface ${null!==nR&&void 0!==nR?nR:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);