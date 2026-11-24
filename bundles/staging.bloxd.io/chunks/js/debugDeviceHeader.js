export const id = 29;
export const ids = [29];
export const modules = {
  34157: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      debugDeviceLines: () => Om
    });
    var hm = fm(675),
      Am = fm(105),
      am = fm(135),
      xm = fm(130),
      wm = fm(3277);
    const Dm = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function im(mm) {
      if ("ios" === mm.os) return function(mm) {
        if (null !== mm.appIosVersion) return `${mm.appIosVersion} (the iOS app's)`;
        const Tm = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(mm.userAgent);
        if (Tm) return `${Tm[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: fm,
          os: hm
        } = mm.agent;
        if ("Safari" === fm.name && fm.version) return `${fm.version} (Safari's version, which follows iOS)`;
        const Am = hm.version;
        if ("iOS" !== hm.name || !Am) return "? (a desktop user agent)";
        const [am, xm = 0] = Am.split(".").map(Number);
        return am < 18 || 18 === am && xm < 6 ? `${Am} (user agent)` : `? (the user agent says ${Am}, frozen from iOS 26)`
      }(mm);
      const Tm = mm.hintsPlatformVersion;
      if (Tm) return "windows" === mm.os ? `${Tm} (${function(mm){const Tm=parseInt(mm,10);if(Tm>=13)return"Windows 11";return Tm>=1?"Windows 10":"Windows 8.1 or older"}(Tm)}, client hints)` : `${Tm} (client hints)`;
      const fm = mm.agent.os.version;
      return fm ? Dm.has(fm) ? `${fm} (user agent, which may be frozen)` : `${fm} (user agent)` : "?"
    }

    function Rm(mm) {
      var Tm;
      const fm = (null !== (Tm = mm.fullVersionList) && void 0 !== Tm ? Tm : []).filter((mm => {
        let {
          brand: Tm
        } = mm;
        return !/not.a.brand/i.test(Tm)
      })).map((mm => {
        let {
          brand: Tm,
          version: fm
        } = mm;
        return `${Tm} ${fm}`
      }));
      return `${mm.platform} ${mm.platformVersion||"?"}, ${fm.join(", ")||"?"}, ${mm.architecture||"?"} ${mm.bitness||"?"}-bit, model ${mm.model||"?"}, mobile ${mm.mobile}`
    }
    let pm = "pending";
    const Em = navigator.userAgentData;

    function om() {
      const mm = (0, xm.p)(),
        Tm = null !== mm && void 0 !== mm ? mm : (0, xm.i)(),
        fm = (0, xm.h)();
      return [Tm ? `webgl ${Tm.vendor} / ${Tm.renderer} (${mm?"the renderer's context":"a probe"})` : "webgl ?", fm ? `webgpu adapter ${fm.vendor||"?"}/${fm.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function Om() {
      var mm, Tm, fm, xm, Dm, Em;
      const Om = (0, Am.getUserAgentDetails)(),
        Ym = (0, Am.getOperatingSystem)(),
        qm = im({
          os: Ym,
          userAgent: navigator.userAgent,
          agent: Om,
          appIosVersion: wm.c,
          hintsPlatformVersion: "string" === typeof pm ? void 0 : pm.platformVersion
        }),
        jm = (0, hm.l)(navigator.platform, navigator.maxTouchPoints, am.q);
      return [`os ${Ym} ${qm}; user agent's ${null!==(mm=Om.os.name)&&void 0!==mm?mm:"?"} ${null!==(Tm=Om.os.version)&&void 0!==Tm?Tm:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,Am.getPlatformType)()}`, `browser ${null!==(fm=Om.browser.name)&&void 0!==fm?fm:"?"} ${null!==(xm=Om.browser.version)&&void 0!==xm?xm:"?"}, engine ${null!==(Dm=Om.engine.name)&&void 0!==Dm?Dm:"?"} ${null!==(Em=Om.engine.version)&&void 0!==Em?Em:"?"}`, `client hints ${"string"===typeof pm?pm:Rm(pm)}`, `gpu ${om()}`, `client ${hm.s.client} (${hm.s.reason})`, `surface site ${am.q}, subsite ${am.w}${am.f?", iframed":""}, capped surface ${null!==jm&&void 0!==jm?jm:"none"}`]
    }
    void 0 === Em ? pm = "none (the browser has none)" : Em.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((mm => {
      pm = mm
    }), (mm => {
      pm = `failed (${String(mm)})`
    }))
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);