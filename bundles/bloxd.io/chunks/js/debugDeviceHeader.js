export const id = 29;
export const ids = [29];
export const modules = {
  9103: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      debugDeviceLines: () => Ld
    });
    var pd = kd(626),
      Nd = kd(95),
      Wd = kd(126),
      Pd = kd(119),
      Zd = kd(4226);
    const gd = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function Cd(dd) {
      if ("ios" === dd.os) return function(dd) {
        if (null !== dd.appIosVersion) return `${dd.appIosVersion} (the iOS app's)`;
        const Jd = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(dd.userAgent);
        if (Jd) return `${Jd[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: kd,
          os: pd
        } = dd.agent;
        if ("Safari" === kd.name && kd.version) return `${kd.version} (Safari's version, which follows iOS)`;
        const Nd = pd.version;
        if ("iOS" !== pd.name || !Nd) return "? (a desktop user agent)";
        const [Wd, Pd = 0] = Nd.split(".").map(Number);
        return Wd < 18 || 18 === Wd && Pd < 6 ? `${Nd} (user agent)` : `? (the user agent says ${Nd}, frozen from iOS 26)`
      }(dd);
      const Jd = dd.hintsPlatformVersion;
      if (Jd) return "windows" === dd.os ? `${Jd} (${function(dd){const Jd=parseInt(dd,10);if(Jd>=13)return"Windows 11";return Jd>=1?"Windows 10":"Windows 8.1 or older"}(Jd)}, client hints)` : `${Jd} (client hints)`;
      const kd = dd.agent.os.version;
      return kd ? gd.has(kd) ? `${kd} (user agent, which may be frozen)` : `${kd} (user agent)` : "?"
    }

    function Kd(dd) {
      var Jd;
      const kd = (null !== (Jd = dd.fullVersionList) && void 0 !== Jd ? Jd : []).filter((dd => {
        let {
          brand: Jd
        } = dd;
        return !/not.a.brand/i.test(Jd)
      })).map((dd => {
        let {
          brand: Jd,
          version: kd
        } = dd;
        return `${Jd} ${kd}`
      }));
      return `${dd.platform} ${dd.platformVersion||"?"}, ${kd.join(", ")||"?"}, ${dd.architecture||"?"} ${dd.bitness||"?"}-bit, model ${dd.model||"?"}, mobile ${dd.mobile}`
    }
    let od = "pending";
    const ld = navigator.userAgentData;

    function Qd() {
      const dd = (0, Pd.q)(),
        Jd = null !== dd && void 0 !== dd ? dd : (0, Pd.i)(),
        kd = (0, Pd.h)();
      return [Jd ? `webgl ${Jd.vendor} / ${Jd.renderer} (${dd?"the renderer's context":"a probe"})` : "webgl ?", kd ? `webgpu adapter ${kd.vendor||"?"}/${kd.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function Ld() {
      var dd, Jd, kd, Pd, gd, ld;
      const Ld = (0, Nd.getUserAgentDetails)(),
        Od = (0, Nd.getOperatingSystem)(),
        ed = Cd({
          os: Od,
          userAgent: navigator.userAgent,
          agent: Ld,
          appIosVersion: Zd.f,
          hintsPlatformVersion: "string" === typeof od ? void 0 : od.platformVersion
        }),
        Rd = (0, pd.j)(navigator.platform, navigator.maxTouchPoints, Wd.t);
      return [`os ${Od} ${ed}; user agent's ${null!==(dd=Ld.os.name)&&void 0!==dd?dd:"?"} ${null!==(Jd=Ld.os.version)&&void 0!==Jd?Jd:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,Nd.getPlatformType)()}`, `browser ${null!==(kd=Ld.browser.name)&&void 0!==kd?kd:"?"} ${null!==(Pd=Ld.browser.version)&&void 0!==Pd?Pd:"?"}, engine ${null!==(gd=Ld.engine.name)&&void 0!==gd?gd:"?"} ${null!==(ld=Ld.engine.version)&&void 0!==ld?ld:"?"}`, `client hints ${"string"===typeof od?od:Kd(od)}`, `gpu ${Qd()}`, `client ${pd.l.client} (${pd.l.reason})`, `surface site ${Wd.t}, subsite ${Wd.A}${Wd.k?", iframed":""}, capped surface ${null!==Rd&&void 0!==Rd?Rd:"none"}`]
    }
    void 0 === ld ? od = "none (the browser has none)" : ld.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((dd => {
      od = dd
    }), (dd => {
      od = `failed (${String(dd)})`
    }))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);