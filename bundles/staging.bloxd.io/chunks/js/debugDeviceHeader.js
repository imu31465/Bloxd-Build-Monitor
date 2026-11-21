export const id = 29;
export const ids = [29];
export const modules = {
  8970: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      debugDeviceLines: () => xQ
    });
    var LQ = wQ(634),
      qQ = wQ(96),
      oQ = wQ(134),
      DQ = wQ(126),
      kQ = wQ(4245);
    const vQ = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function mQ(QQ) {
      if ("ios" === QQ.os) return function(QQ) {
        if (null !== QQ.appIosVersion) return `${QQ.appIosVersion} (the iOS app's)`;
        const FQ = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(QQ.userAgent);
        if (FQ) return `${FQ[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: wQ,
          os: LQ
        } = QQ.agent;
        if ("Safari" === wQ.name && wQ.version) return `${wQ.version} (Safari's version, which follows iOS)`;
        const qQ = LQ.version;
        if ("iOS" !== LQ.name || !qQ) return "? (a desktop user agent)";
        const [oQ, DQ = 0] = qQ.split(".").map(Number);
        return oQ < 18 || 18 === oQ && DQ < 6 ? `${qQ} (user agent)` : `? (the user agent says ${qQ}, frozen from iOS 26)`
      }(QQ);
      const FQ = QQ.hintsPlatformVersion;
      if (FQ) return "windows" === QQ.os ? `${FQ} (${function(QQ){const FQ=parseInt(QQ,10);if(FQ>=13)return"Windows 11";return FQ>=1?"Windows 10":"Windows 8.1 or older"}(FQ)}, client hints)` : `${FQ} (client hints)`;
      const wQ = QQ.agent.os.version;
      return wQ ? vQ.has(wQ) ? `${wQ} (user agent, which may be frozen)` : `${wQ} (user agent)` : "?"
    }

    function uQ(QQ) {
      var FQ;
      const wQ = (null !== (FQ = QQ.fullVersionList) && void 0 !== FQ ? FQ : []).filter((QQ => {
        let {
          brand: FQ
        } = QQ;
        return !/not.a.brand/i.test(FQ)
      })).map((QQ => {
        let {
          brand: FQ,
          version: wQ
        } = QQ;
        return `${FQ} ${wQ}`
      }));
      return `${QQ.platform} ${QQ.platformVersion||"?"}, ${wQ.join(", ")||"?"}, ${QQ.architecture||"?"} ${QQ.bitness||"?"}-bit, model ${QQ.model||"?"}, mobile ${QQ.mobile}`
    }
    let HQ = "pending";
    const bQ = navigator.userAgentData;

    function YQ() {
      const QQ = (0, DQ.q)(),
        FQ = null !== QQ && void 0 !== QQ ? QQ : (0, DQ.k)(),
        wQ = (0, DQ.g)();
      return [FQ ? `webgl ${FQ.vendor} / ${FQ.renderer} (${QQ?"the renderer's context":"a probe"})` : "webgl ?", wQ ? `webgpu adapter ${wQ.vendor||"?"}/${wQ.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function xQ() {
      var QQ, FQ, wQ, DQ, vQ, bQ;
      const xQ = (0, qQ.getUserAgentDetails)(),
        AQ = (0, qQ.getOperatingSystem)(),
        tQ = mQ({
          os: AQ,
          userAgent: navigator.userAgent,
          agent: xQ,
          appIosVersion: kQ.e,
          hintsPlatformVersion: "string" === typeof HQ ? void 0 : HQ.platformVersion
        }),
        eQ = (0, LQ.g)(navigator.platform, navigator.maxTouchPoints, oQ.r);
      return [`os ${AQ} ${tQ}; user agent's ${null!==(QQ=xQ.os.name)&&void 0!==QQ?QQ:"?"} ${null!==(FQ=xQ.os.version)&&void 0!==FQ?FQ:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,qQ.getPlatformType)()}`, `browser ${null!==(wQ=xQ.browser.name)&&void 0!==wQ?wQ:"?"} ${null!==(DQ=xQ.browser.version)&&void 0!==DQ?DQ:"?"}, engine ${null!==(vQ=xQ.engine.name)&&void 0!==vQ?vQ:"?"} ${null!==(bQ=xQ.engine.version)&&void 0!==bQ?bQ:"?"}`, `client hints ${"string"===typeof HQ?HQ:uQ(HQ)}`, `gpu ${YQ()}`, `client ${LQ.j.client} (${LQ.j.reason})`, `surface site ${oQ.r}, subsite ${oQ.w}${oQ.j?", iframed":""}, capped surface ${null!==eQ&&void 0!==eQ?eQ:"none"}`]
    }
    void 0 === bQ ? HQ = "none (the browser has none)" : bQ.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((QQ => {
      HQ = QQ
    }), (QQ => {
      HQ = `failed (${String(QQ)})`
    }))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);