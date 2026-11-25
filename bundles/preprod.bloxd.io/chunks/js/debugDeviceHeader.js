export const id = 30;
export const ids = [30];
export const modules = {
  34376: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      clientHintsRead: () => IQ,
      debugDeviceLines: () => BQ
    });
    var wQ = XQ(691),
      qQ = XQ(105),
      TQ = XQ(158),
      zQ = XQ(150),
      sQ = XQ(3534);
    const FQ = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function PQ(QQ) {
      if ("ios" === QQ.os) return function(QQ) {
        if (null !== QQ.appIosVersion) return `${QQ.appIosVersion} (the iOS app's)`;
        const WQ = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(QQ.userAgent);
        if (WQ) return `${WQ[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: XQ,
          os: wQ
        } = QQ.agent;
        if ("Safari" === XQ.name && XQ.version) return `${XQ.version} (Safari's version, which follows iOS)`;
        const qQ = wQ.version;
        if ("iOS" !== wQ.name || !qQ) return "? (a desktop user agent)";
        const [TQ, zQ = 0] = qQ.split(".").map(Number);
        return TQ < 18 || 18 === TQ && zQ < 6 ? `${qQ} (user agent)` : `? (the user agent says ${qQ}, frozen from iOS 26)`
      }(QQ);
      const WQ = QQ.hintsPlatformVersion;
      if (WQ) return "windows" === QQ.os ? `${WQ} (${function(QQ){const WQ=parseInt(QQ,10);if(WQ>=13)return"Windows 11";return WQ>=1?"Windows 10":"Windows 8.1 or older"}(WQ)}, client hints)` : `${WQ} (client hints)`;
      const XQ = QQ.agent.os.version;
      return XQ ? FQ.has(XQ) ? `${XQ} (user agent, which may be frozen)` : `${XQ} (user agent)` : "?"
    }

    function gQ(QQ) {
      var WQ;
      const XQ = (null !== (WQ = QQ.fullVersionList) && void 0 !== WQ ? WQ : []).filter((QQ => {
        let {
          brand: WQ
        } = QQ;
        return !/not.a.brand/i.test(WQ)
      })).map((QQ => {
        let {
          brand: WQ,
          version: XQ
        } = QQ;
        return `${WQ} ${XQ}`
      }));
      return `${QQ.platform} ${QQ.platformVersion||"?"}, ${XQ.join(", ")||"?"}, ${QQ.architecture||"?"} ${QQ.bitness||"?"}-bit, model ${QQ.model||"?"}, mobile ${QQ.mobile}`
    }
    let JQ = "pending";
    const rQ = navigator.userAgentData;
    void 0 === rQ && (JQ = "none (the browser has none)");
    const IQ = void 0 === rQ ? Promise.resolve() : rQ.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((QQ => {
      JQ = QQ
    }), (QQ => {
      JQ = `failed (${String(QQ)})`
    }));

    function jQ() {
      const QQ = (0, zQ.y)(),
        WQ = null !== QQ && void 0 !== QQ ? QQ : (0, zQ.n)(),
        XQ = (0, zQ.j)();
      return [WQ ? `webgl ${WQ.vendor} / ${WQ.renderer} (${QQ?"the renderer's context":"a probe"})` : "webgl ?", XQ ? `webgpu adapter ${XQ.vendor||"?"}/${XQ.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function BQ() {
      var QQ, WQ, XQ, zQ, FQ, rQ;
      const IQ = (0, qQ.getUserAgentDetails)(),
        BQ = (0, qQ.getOperatingSystem)(),
        yQ = PQ({
          os: BQ,
          userAgent: navigator.userAgent,
          agent: IQ,
          appIosVersion: sQ.d,
          hintsPlatformVersion: "string" === typeof JQ ? void 0 : JQ.platformVersion
        }),
        VQ = (0, wQ.g)(navigator.platform, navigator.maxTouchPoints, TQ.siteUsed, (0, qQ.getWebGpuSupported)());
      return [`os ${BQ} ${yQ}; user agent's ${null!==(QQ=IQ.os.name)&&void 0!==QQ?QQ:"?"} ${null!==(WQ=IQ.os.version)&&void 0!==WQ?WQ:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,qQ.getPlatformType)()}`, `browser ${null!==(XQ=IQ.browser.name)&&void 0!==XQ?XQ:"?"} ${null!==(zQ=IQ.browser.version)&&void 0!==zQ?zQ:"?"}, engine ${null!==(FQ=IQ.engine.name)&&void 0!==FQ?FQ:"?"} ${null!==(rQ=IQ.engine.version)&&void 0!==rQ?rQ:"?"}`, `client hints ${"string"===typeof JQ?JQ:gQ(JQ)}`, `gpu ${jQ()}`, `client ${wQ.l.client} (${wQ.l.reason})`, `surface site ${TQ.siteUsed}, subsite ${TQ.subsiteUsed}${TQ.isIframed?", iframed":""}, capped surface ${null!==VQ&&void 0!==VQ?VQ:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);