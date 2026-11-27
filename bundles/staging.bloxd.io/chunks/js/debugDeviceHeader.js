export const id = 35;
export const ids = [35];
export const modules = {
  35322: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      clientHintsRead: () => Ur,
      debugDeviceLines: () => hr
    });
    var Zr = Qr(712),
      Wr = Qr(109),
      ar = Qr(139),
      jr = Qr(135),
      Ir = Qr(4467),
      fr = Qr(766);
    const Er = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function pr(rr) {
      if ("ios" === rr.os) return function(rr) {
        if (null !== rr.appIosVersion) return `${rr.appIosVersion} (the iOS app's)`;
        const Sr = (0, fr.b)(rr.userAgent);
        if (null !== Sr) return `${Sr} (the in-app browser's iOS token)`;
        const {
          browser: Qr,
          os: Zr
        } = rr.agent;
        if ("Safari" === Qr.name && Qr.version) return `${Qr.version} (Safari's version, which follows iOS)`;
        const Wr = Zr.version;
        if ("iOS" !== Zr.name || !Wr) return "? (a desktop user agent)";
        const [ar, jr = 0] = Wr.split(".").map(Number);
        return ar < 18 || 18 === ar && jr < 6 ? `${Wr} (user agent)` : `? (the user agent says ${Wr}, frozen from iOS 26)`
      }(rr);
      const Sr = rr.hintsPlatformVersion;
      if (Sr) return "windows" === rr.os ? `${Sr} (${function(rr){const Sr=parseInt(rr,10);if(Sr>=13)return"Windows 11";return Sr>=1?"Windows 10":"Windows 8.1 or older"}(Sr)}, client hints)` : `${Sr} (client hints)`;
      const Qr = rr.agent.os.version;
      return Qr ? Er.has(Qr) ? `${Qr} (user agent, which may be frozen)` : `${Qr} (user agent)` : "?"
    }

    function xr(rr) {
      var Sr;
      const Qr = (null !== (Sr = rr.fullVersionList) && void 0 !== Sr ? Sr : []).filter((rr => {
        let {
          brand: Sr
        } = rr;
        return !/not.a.brand/i.test(Sr)
      })).map((rr => {
        let {
          brand: Sr,
          version: Qr
        } = rr;
        return `${Sr} ${Qr}`
      }));
      return `${rr.platform} ${rr.platformVersion||"?"}, ${Qr.join(", ")||"?"}, ${rr.architecture||"?"} ${rr.bitness||"?"}-bit, model ${rr.model||"?"}, mobile ${rr.mobile}`
    }
    let mr = "pending";
    const Nr = navigator.userAgentData;
    void 0 === Nr && (mr = "none (the browser has none)");
    const Ur = void 0 === Nr ? Promise.resolve() : Nr.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((rr => {
      mr = rr
    }), (rr => {
      mr = `failed (${String(rr)})`
    }));

    function tr() {
      const rr = (0, jr.C)(),
        Sr = null !== rr && void 0 !== rr ? rr : (0, jr.q)(),
        Qr = (0, jr.m)();
      return [Sr ? `webgl ${Sr.vendor} / ${Sr.renderer} (${rr?"the renderer's context":"a probe"})` : "webgl ?", Qr ? `webgpu adapter ${Qr.vendor||"?"}/${Qr.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function hr() {
      var rr, Sr, Qr, jr, fr, Er;
      const Nr = (0, Wr.getUserAgentDetails)(),
        Ur = (0, Wr.getOperatingSystem)(),
        hr = pr({
          os: Ur,
          userAgent: navigator.userAgent,
          agent: Nr,
          appIosVersion: Ir.g,
          hintsPlatformVersion: "string" === typeof mr ? void 0 : mr.platformVersion
        }),
        zr = (0, Zr.r)(navigator.platform, navigator.maxTouchPoints, ar.siteUsed, (0, Wr.getWebGpuSupported)());
      return [`os ${Ur} ${hr}; user agent's ${null!==(rr=Nr.os.name)&&void 0!==rr?rr:"?"} ${null!==(Sr=Nr.os.version)&&void 0!==Sr?Sr:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,Wr.getPlatformType)()}`, `browser ${null!==(Qr=Nr.browser.name)&&void 0!==Qr?Qr:"?"} ${null!==(jr=Nr.browser.version)&&void 0!==jr?jr:"?"}, engine ${null!==(fr=Nr.engine.name)&&void 0!==fr?fr:"?"} ${null!==(Er=Nr.engine.version)&&void 0!==Er?Er:"?"}`, `client hints ${"string"===typeof mr?mr:xr(mr)}`, `gpu ${tr()}`, `client ${Zr.B.client} (${Zr.B.reason})`, `surface site ${ar.siteUsed}, subsite ${ar.subsiteUsed}${ar.isIframed?", iframed":""}, capped surface ${null!==zr&&void 0!==zr?zr:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);