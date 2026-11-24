export const id = 29;
export const ids = [29];
export const modules = {
  34114: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      clientHintsRead: () => sB,
      debugDeviceLines: () => mB
    });
    var QB = zB(690),
      nB = zB(106),
      dB = zB(145),
      IB = zB(140),
      NB = zB(3376);
    const uB = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function UB(BB) {
      if ("ios" === BB.os) return function(BB) {
        if (null !== BB.appIosVersion) return `${BB.appIosVersion} (the iOS app's)`;
        const jB = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(BB.userAgent);
        if (jB) return `${jB[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: zB,
          os: QB
        } = BB.agent;
        if ("Safari" === zB.name && zB.version) return `${zB.version} (Safari's version, which follows iOS)`;
        const nB = QB.version;
        if ("iOS" !== QB.name || !nB) return "? (a desktop user agent)";
        const [dB, IB = 0] = nB.split(".").map(Number);
        return dB < 18 || 18 === dB && IB < 6 ? `${nB} (user agent)` : `? (the user agent says ${nB}, frozen from iOS 26)`
      }(BB);
      const jB = BB.hintsPlatformVersion;
      if (jB) return "windows" === BB.os ? `${jB} (${function(BB){const jB=parseInt(BB,10);if(jB>=13)return"Windows 11";return jB>=1?"Windows 10":"Windows 8.1 or older"}(jB)}, client hints)` : `${jB} (client hints)`;
      const zB = BB.agent.os.version;
      return zB ? uB.has(zB) ? `${zB} (user agent, which may be frozen)` : `${zB} (user agent)` : "?"
    }

    function aB(BB) {
      var jB;
      const zB = (null !== (jB = BB.fullVersionList) && void 0 !== jB ? jB : []).filter((BB => {
        let {
          brand: jB
        } = BB;
        return !/not.a.brand/i.test(jB)
      })).map((BB => {
        let {
          brand: jB,
          version: zB
        } = BB;
        return `${jB} ${zB}`
      }));
      return `${BB.platform} ${BB.platformVersion||"?"}, ${zB.join(", ")||"?"}, ${BB.architecture||"?"} ${BB.bitness||"?"}-bit, model ${BB.model||"?"}, mobile ${BB.mobile}`
    }
    let pB = "pending";
    const rB = navigator.userAgentData;
    void 0 === rB && (pB = "none (the browser has none)");
    const sB = void 0 === rB ? Promise.resolve() : rB.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((BB => {
      pB = BB
    }), (BB => {
      pB = `failed (${String(BB)})`
    }));

    function JB() {
      const BB = (0, IB.q)(),
        jB = null !== BB && void 0 !== BB ? BB : (0, IB.j)(),
        zB = (0, IB.i)();
      return [jB ? `webgl ${jB.vendor} / ${jB.renderer} (${BB?"the renderer's context":"a probe"})` : "webgl ?", zB ? `webgpu adapter ${zB.vendor||"?"}/${zB.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function mB() {
      var BB, jB, zB, IB, uB, rB;
      const sB = (0, nB.getUserAgentDetails)(),
        mB = (0, nB.getOperatingSystem)(),
        yB = UB({
          os: mB,
          userAgent: navigator.userAgent,
          agent: sB,
          appIosVersion: NB.h,
          hintsPlatformVersion: "string" === typeof pB ? void 0 : pB.platformVersion
        }),
        kB = (0, QB.f)(navigator.platform, navigator.maxTouchPoints, dB.siteUsed, (0, nB.getWebGpuSupported)());
      return [`os ${mB} ${yB}; user agent's ${null!==(BB=sB.os.name)&&void 0!==BB?BB:"?"} ${null!==(jB=sB.os.version)&&void 0!==jB?jB:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,nB.getPlatformType)()}`, `browser ${null!==(zB=sB.browser.name)&&void 0!==zB?zB:"?"} ${null!==(IB=sB.browser.version)&&void 0!==IB?IB:"?"}, engine ${null!==(uB=sB.engine.name)&&void 0!==uB?uB:"?"} ${null!==(rB=sB.engine.version)&&void 0!==rB?rB:"?"}`, `client hints ${"string"===typeof pB?pB:aB(pB)}`, `gpu ${JB()}`, `client ${QB.p.client} (${QB.p.reason})`, `surface site ${dB.siteUsed}, subsite ${dB.subsiteUsed}${dB.isIframed?", iframed":""}, capped surface ${null!==kB&&void 0!==kB?kB:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);