export const id = 29;
export const ids = [29];
export const modules = {
  34095: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      debugDeviceLines: () => KS
    });
    var tS = gS(699),
      bS = gS(104),
      XS = gS(138),
      xS = gS(129),
      NS = gS(3421);
    const qS = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function uS(SS) {
      if ("ios" === SS.os) return function(SS) {
        if (null !== SS.appIosVersion) return `${SS.appIosVersion} (the iOS app's)`;
        const HS = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(SS.userAgent);
        if (HS) return `${HS[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: gS,
          os: tS
        } = SS.agent;
        if ("Safari" === gS.name && gS.version) return `${gS.version} (Safari's version, which follows iOS)`;
        const bS = tS.version;
        if ("iOS" !== tS.name || !bS) return "? (a desktop user agent)";
        const [XS, xS = 0] = bS.split(".").map(Number);
        return XS < 18 || 18 === XS && xS < 6 ? `${bS} (user agent)` : `? (the user agent says ${bS}, frozen from iOS 26)`
      }(SS);
      const HS = SS.hintsPlatformVersion;
      if (HS) return "windows" === SS.os ? `${HS} (${function(SS){const HS=parseInt(SS,10);if(HS>=13)return"Windows 11";return HS>=1?"Windows 10":"Windows 8.1 or older"}(HS)}, client hints)` : `${HS} (client hints)`;
      const gS = SS.agent.os.version;
      return gS ? qS.has(gS) ? `${gS} (user agent, which may be frozen)` : `${gS} (user agent)` : "?"
    }

    function IS(SS) {
      var HS;
      const gS = (null !== (HS = SS.fullVersionList) && void 0 !== HS ? HS : []).filter((SS => {
        let {
          brand: HS
        } = SS;
        return !/not.a.brand/i.test(HS)
      })).map((SS => {
        let {
          brand: HS,
          version: gS
        } = SS;
        return `${HS} ${gS}`
      }));
      return `${SS.platform} ${SS.platformVersion||"?"}, ${gS.join(", ")||"?"}, ${SS.architecture||"?"} ${SS.bitness||"?"}-bit, model ${SS.model||"?"}, mobile ${SS.mobile}`
    }
    let fS = "pending";
    const kS = navigator.userAgentData;

    function aS() {
      const SS = (0, xS.l)(),
        HS = null !== SS && void 0 !== SS ? SS : (0, xS.g)(),
        gS = (0, xS.f)();
      return [HS ? `webgl ${HS.vendor} / ${HS.renderer} (${SS?"the renderer's context":"a probe"})` : "webgl ?", gS ? `webgpu adapter ${gS.vendor||"?"}/${gS.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function KS() {
      var SS, HS, gS, xS, qS, kS;
      const KS = (0, bS.getUserAgentDetails)(),
        jS = (0, bS.getOperatingSystem)(),
        GS = uS({
          os: jS,
          userAgent: navigator.userAgent,
          agent: KS,
          appIosVersion: NS.f,
          hintsPlatformVersion: "string" === typeof fS ? void 0 : fS.platformVersion
        }),
        CS = (0, tS.j)(navigator.platform, navigator.maxTouchPoints, XS.r);
      return [`os ${jS} ${GS}; user agent's ${null!==(SS=KS.os.name)&&void 0!==SS?SS:"?"} ${null!==(HS=KS.os.version)&&void 0!==HS?HS:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,bS.getPlatformType)()}`, `browser ${null!==(gS=KS.browser.name)&&void 0!==gS?gS:"?"} ${null!==(xS=KS.browser.version)&&void 0!==xS?xS:"?"}, engine ${null!==(qS=KS.engine.name)&&void 0!==qS?qS:"?"} ${null!==(kS=KS.engine.version)&&void 0!==kS?kS:"?"}`, `client hints ${"string"===typeof fS?fS:IS(fS)}`, `gpu ${aS()}`, `client ${tS.p.client} (${tS.p.reason})`, `surface site ${XS.r}, subsite ${XS.A}${XS.i?", iframed":""}, capped surface ${null!==CS&&void 0!==CS?CS:"none"}`]
    }
    void 0 === kS ? fS = "none (the browser has none)" : kS.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((SS => {
      fS = SS
    }), (SS => {
      fS = `failed (${String(SS)})`
    }))
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);