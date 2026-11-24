export const id = 29;
export const ids = [29];
export const modules = {
  34291: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      clientHintsRead: () => Wp,
      debugDeviceLines: () => Up
    });
    var Op = cp(657),
      op = cp(104),
      Ip = cp(131),
      Sp = cp(129),
      xp = cp(3380);
    const Lp = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function Yp(pp) {
      if ("ios" === pp.os) return function(pp) {
        if (null !== pp.appIosVersion) return `${pp.appIosVersion} (the iOS app's)`;
        const ip = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(pp.userAgent);
        if (ip) return `${ip[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: cp,
          os: Op
        } = pp.agent;
        if ("Safari" === cp.name && cp.version) return `${cp.version} (Safari's version, which follows iOS)`;
        const op = Op.version;
        if ("iOS" !== Op.name || !op) return "? (a desktop user agent)";
        const [Ip, Sp = 0] = op.split(".").map(Number);
        return Ip < 18 || 18 === Ip && Sp < 6 ? `${op} (user agent)` : `? (the user agent says ${op}, frozen from iOS 26)`
      }(pp);
      const ip = pp.hintsPlatformVersion;
      if (ip) return "windows" === pp.os ? `${ip} (${function(pp){const ip=parseInt(pp,10);if(ip>=13)return"Windows 11";return ip>=1?"Windows 10":"Windows 8.1 or older"}(ip)}, client hints)` : `${ip} (client hints)`;
      const cp = pp.agent.os.version;
      return cp ? Lp.has(cp) ? `${cp} (user agent, which may be frozen)` : `${cp} (user agent)` : "?"
    }

    function Dp(pp) {
      var ip;
      const cp = (null !== (ip = pp.fullVersionList) && void 0 !== ip ? ip : []).filter((pp => {
        let {
          brand: ip
        } = pp;
        return !/not.a.brand/i.test(ip)
      })).map((pp => {
        let {
          brand: ip,
          version: cp
        } = pp;
        return `${ip} ${cp}`
      }));
      return `${pp.platform} ${pp.platformVersion||"?"}, ${cp.join(", ")||"?"}, ${pp.architecture||"?"} ${pp.bitness||"?"}-bit, model ${pp.model||"?"}, mobile ${pp.mobile}`
    }
    let Ap = "pending";
    const Pp = navigator.userAgentData;
    void 0 === Pp && (Ap = "none (the browser has none)");
    const Wp = void 0 === Pp ? Promise.resolve() : Pp.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((pp => {
      Ap = pp
    }), (pp => {
      Ap = `failed (${String(pp)})`
    }));

    function yp() {
      const pp = (0, Sp.r)(),
        ip = null !== pp && void 0 !== pp ? pp : (0, Sp.j)(),
        cp = (0, Sp.i)();
      return [ip ? `webgl ${ip.vendor} / ${ip.renderer} (${pp?"the renderer's context":"a probe"})` : "webgl ?", cp ? `webgpu adapter ${cp.vendor||"?"}/${cp.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function Up() {
      var pp, ip, cp, Sp, Lp, Pp;
      const Wp = (0, op.getUserAgentDetails)(),
        Up = (0, op.getOperatingSystem)(),
        wp = Yp({
          os: Up,
          userAgent: navigator.userAgent,
          agent: Wp,
          appIosVersion: xp.h,
          hintsPlatformVersion: "string" === typeof Ap ? void 0 : Ap.platformVersion
        }),
        vp = (0, Op.h)(navigator.platform, navigator.maxTouchPoints, Ip.siteUsed, (0, op.getWebGpuSupported)());
      return [`os ${Up} ${wp}; user agent's ${null!==(pp=Wp.os.name)&&void 0!==pp?pp:"?"} ${null!==(ip=Wp.os.version)&&void 0!==ip?ip:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,op.getPlatformType)()}`, `browser ${null!==(cp=Wp.browser.name)&&void 0!==cp?cp:"?"} ${null!==(Sp=Wp.browser.version)&&void 0!==Sp?Sp:"?"}, engine ${null!==(Lp=Wp.engine.name)&&void 0!==Lp?Lp:"?"} ${null!==(Pp=Wp.engine.version)&&void 0!==Pp?Pp:"?"}`, `client hints ${"string"===typeof Ap?Ap:Dp(Ap)}`, `gpu ${yp()}`, `client ${Op.p.client} (${Op.p.reason})`, `surface site ${Ip.siteUsed}, subsite ${Ip.subsiteUsed}${Ip.isIframed?", iframed":""}, capped surface ${null!==vp&&void 0!==vp?vp:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);