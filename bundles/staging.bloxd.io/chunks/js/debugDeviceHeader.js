export const id = 29;
export const ids = [29];
export const modules = {
  8807: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      debugDeviceLines: () => mb
    });
    var kb = sb(649),
      Wb = sb(117),
      ab = sb(167),
      Tb = sb(160),
      Ub = sb(4142);
    const Ib = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function Hb(bb) {
      if ("ios" === bb.os) return function(bb) {
        if (null !== bb.appIosVersion) return `${bb.appIosVersion} (the iOS app's)`;
        const cb = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(bb.userAgent);
        if (cb) return `${cb[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: sb,
          os: kb
        } = bb.agent;
        if ("Safari" === sb.name && sb.version) return `${sb.version} (Safari's version, which follows iOS)`;
        const Wb = kb.version;
        if ("iOS" !== kb.name || !Wb) return "? (a desktop user agent)";
        const [ab, Tb = 0] = Wb.split(".").map(Number);
        return ab < 18 || 18 === ab && Tb < 6 ? `${Wb} (user agent)` : `? (the user agent says ${Wb}, frozen from iOS 26)`
      }(bb);
      const cb = bb.hintsPlatformVersion;
      if (cb) return "windows" === bb.os ? `${cb} (${function(bb){const cb=parseInt(bb,10);if(cb>=13)return"Windows 11";return cb>=1?"Windows 10":"Windows 8.1 or older"}(cb)}, client hints)` : `${cb} (client hints)`;
      const sb = bb.agent.os.version;
      return sb ? Ib.has(sb) ? `${sb} (user agent, which may be frozen)` : `${sb} (user agent)` : "?"
    }

    function fb(bb) {
      var cb;
      const sb = (null !== (cb = bb.fullVersionList) && void 0 !== cb ? cb : []).filter((bb => {
        let {
          brand: cb
        } = bb;
        return !/not.a.brand/i.test(cb)
      })).map((bb => {
        let {
          brand: cb,
          version: sb
        } = bb;
        return `${cb} ${sb}`
      }));
      return `${bb.platform} ${bb.platformVersion||"?"}, ${sb.join(", ")||"?"}, ${bb.architecture||"?"} ${bb.bitness||"?"}-bit, model ${bb.model||"?"}, mobile ${bb.mobile}`
    }
    let Mb = "pending";
    const Xb = navigator.userAgentData;

    function nb() {
      const bb = (0, Tb.l)(),
        cb = null !== bb && void 0 !== bb ? bb : (0, Tb.h)(),
        sb = (0, Tb.f)();
      return [cb ? `webgl ${cb.vendor} / ${cb.renderer} (${bb?"the renderer's context":"a probe"})` : "webgl ?", sb ? `webgpu adapter ${sb.vendor||"?"}/${sb.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function mb() {
      var bb, cb, sb, Tb, Ib, Xb;
      const mb = (0, Wb.getUserAgentDetails)(),
        lb = (0, Wb.getOperatingSystem)(),
        Qb = Hb({
          os: lb,
          userAgent: navigator.userAgent,
          agent: mb,
          appIosVersion: Ub.f,
          hintsPlatformVersion: "string" === typeof Mb ? void 0 : Mb.platformVersion
        }),
        eb = (0, kb.j)(navigator.platform, navigator.maxTouchPoints, ab.r);
      return [`os ${lb} ${Qb}; user agent's ${null!==(bb=mb.os.name)&&void 0!==bb?bb:"?"} ${null!==(cb=mb.os.version)&&void 0!==cb?cb:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,Wb.getPlatformType)()}`, `browser ${null!==(sb=mb.browser.name)&&void 0!==sb?sb:"?"} ${null!==(Tb=mb.browser.version)&&void 0!==Tb?Tb:"?"}, engine ${null!==(Ib=mb.engine.name)&&void 0!==Ib?Ib:"?"} ${null!==(Xb=mb.engine.version)&&void 0!==Xb?Xb:"?"}`, `client hints ${"string"===typeof Mb?Mb:fb(Mb)}`, `gpu ${nb()}`, `client ${kb.n.client} (${kb.n.reason})`, `surface site ${ab.r}, subsite ${ab.y}${ab.i?", iframed":""}, capped surface ${null!==eb&&void 0!==eb?eb:"none"}`]
    }
    void 0 === Xb ? Mb = "none (the browser has none)" : Xb.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((bb => {
      Mb = bb
    }), (bb => {
      Mb = `failed (${String(bb)})`
    }))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);