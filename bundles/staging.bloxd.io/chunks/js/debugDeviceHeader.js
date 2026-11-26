export const id = 34;
export const ids = [34];
export const modules = {
  34658: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      clientHintsRead: () => pB,
      debugDeviceLines: () => ZB
    });
    var YB = GB(662),
      DB = GB(92),
      QB = GB(120),
      oB = GB(118),
      jB = GB(3685),
      yB = GB(715);
    const JB = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function MB(BB) {
      if ("ios" === BB.os) return function(BB) {
        if (null !== BB.appIosVersion) return `${BB.appIosVersion} (the iOS app's)`;
        const OB = (0, yB.b)(BB.userAgent);
        if (null !== OB) return `${OB} (the in-app browser's iOS token)`;
        const {
          browser: GB,
          os: YB
        } = BB.agent;
        if ("Safari" === GB.name && GB.version) return `${GB.version} (Safari's version, which follows iOS)`;
        const DB = YB.version;
        if ("iOS" !== YB.name || !DB) return "? (a desktop user agent)";
        const [QB, oB = 0] = DB.split(".").map(Number);
        return QB < 18 || 18 === QB && oB < 6 ? `${DB} (user agent)` : `? (the user agent says ${DB}, frozen from iOS 26)`
      }(BB);
      const OB = BB.hintsPlatformVersion;
      if (OB) return "windows" === BB.os ? `${OB} (${function(BB){const OB=parseInt(BB,10);if(OB>=13)return"Windows 11";return OB>=1?"Windows 10":"Windows 8.1 or older"}(OB)}, client hints)` : `${OB} (client hints)`;
      const GB = BB.agent.os.version;
      return GB ? JB.has(GB) ? `${GB} (user agent, which may be frozen)` : `${GB} (user agent)` : "?"
    }

    function PB(BB) {
      var OB;
      const GB = (null !== (OB = BB.fullVersionList) && void 0 !== OB ? OB : []).filter((BB => {
        let {
          brand: OB
        } = BB;
        return !/not.a.brand/i.test(OB)
      })).map((BB => {
        let {
          brand: OB,
          version: GB
        } = BB;
        return `${OB} ${GB}`
      }));
      return `${BB.platform} ${BB.platformVersion||"?"}, ${GB.join(", ")||"?"}, ${BB.architecture||"?"} ${BB.bitness||"?"}-bit, model ${BB.model||"?"}, mobile ${BB.mobile}`
    }
    let zB = "pending";
    const lB = navigator.userAgentData;
    void 0 === lB && (zB = "none (the browser has none)");
    const pB = void 0 === lB ? Promise.resolve() : lB.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((BB => {
      zB = BB
    }), (BB => {
      zB = `failed (${String(BB)})`
    }));

    function qB() {
      const BB = (0, oB.B)(),
        OB = null !== BB && void 0 !== BB ? BB : (0, oB.o)(),
        GB = (0, oB.m)();
      return [OB ? `webgl ${OB.vendor} / ${OB.renderer} (${BB?"the renderer's context":"a probe"})` : "webgl ?", GB ? `webgpu adapter ${GB.vendor||"?"}/${GB.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function ZB() {
      var BB, OB, GB, oB, yB, JB;
      const lB = (0, DB.getUserAgentDetails)(),
        pB = (0, DB.getOperatingSystem)(),
        ZB = MB({
          os: pB,
          userAgent: navigator.userAgent,
          agent: lB,
          appIosVersion: jB.g,
          hintsPlatformVersion: "string" === typeof zB ? void 0 : zB.platformVersion
        }),
        NB = (0, YB.m)(navigator.platform, navigator.maxTouchPoints, QB.siteUsed, (0, DB.getWebGpuSupported)());
      return [`os ${pB} ${ZB}; user agent's ${null!==(BB=lB.os.name)&&void 0!==BB?BB:"?"} ${null!==(OB=lB.os.version)&&void 0!==OB?OB:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,DB.getPlatformType)()}`, `browser ${null!==(GB=lB.browser.name)&&void 0!==GB?GB:"?"} ${null!==(oB=lB.browser.version)&&void 0!==oB?oB:"?"}, engine ${null!==(yB=lB.engine.name)&&void 0!==yB?yB:"?"} ${null!==(JB=lB.engine.version)&&void 0!==JB?JB:"?"}`, `client hints ${"string"===typeof zB?zB:PB(zB)}`, `gpu ${qB()}`, `client ${YB.u.client} (${YB.u.reason})`, `surface site ${QB.siteUsed}, subsite ${QB.subsiteUsed}${QB.isIframed?", iframed":""}, capped surface ${null!==NB&&void 0!==NB?NB:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);