export const id = 29;
export const ids = [29];
export const modules = {
  8787: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      debugDeviceLines: () => jb
    });
    var Ab = Ub(603),
      Mb = Ub(101),
      Tb = Ub(137),
      Eb = Ub(131),
      Yb = Ub(4067);
    const Bb = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function eb(bb) {
      if ("ios" === bb.os) return function(bb) {
        if (null !== bb.appIosVersion) return `${bb.appIosVersion} (the iOS app's)`;
        const ab = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(bb.userAgent);
        if (ab) return `${ab[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: Ub,
          os: Ab
        } = bb.agent;
        if ("Safari" === Ub.name && Ub.version) return `${Ub.version} (Safari's version, which follows iOS)`;
        const Mb = Ab.version;
        if ("iOS" !== Ab.name || !Mb) return "? (a desktop user agent)";
        const [Tb, Eb = 0] = Mb.split(".").map(Number);
        return Tb < 18 || 18 === Tb && Eb < 6 ? `${Mb} (user agent)` : `? (the user agent says ${Mb}, frozen from iOS 26)`
      }(bb);
      const ab = bb.hintsPlatformVersion;
      if (ab) return "windows" === bb.os ? `${ab} (${function(bb){const ab=parseInt(bb,10);if(ab>=13)return"Windows 11";return ab>=1?"Windows 10":"Windows 8.1 or older"}(ab)}, client hints)` : `${ab} (client hints)`;
      const Ub = bb.agent.os.version;
      return Ub ? Bb.has(Ub) ? `${Ub} (user agent, which may be frozen)` : `${Ub} (user agent)` : "?"
    }

    function vb(bb) {
      var ab;
      const Ub = (null !== (ab = bb.fullVersionList) && void 0 !== ab ? ab : []).filter((bb => {
        let {
          brand: ab
        } = bb;
        return !/not.a.brand/i.test(ab)
      })).map((bb => {
        let {
          brand: ab,
          version: Ub
        } = bb;
        return `${ab} ${Ub}`
      }));
      return `${bb.platform} ${bb.platformVersion||"?"}, ${Ub.join(", ")||"?"}, ${bb.architecture||"?"} ${bb.bitness||"?"}-bit, model ${bb.model||"?"}, mobile ${bb.mobile}`
    }
    let Lb = "pending";
    const Pb = navigator.userAgentData;

    function Xb() {
      const bb = (0, Eb.j)(),
        ab = null !== bb && void 0 !== bb ? bb : (0, Eb.h)(),
        Ub = (0, Eb.g)();
      return [ab ? `webgl ${ab.vendor} / ${ab.renderer} (${bb?"the renderer's context":"a probe"})` : "webgl ?", Ub ? `webgpu adapter ${Ub.vendor||"?"}/${Ub.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function jb() {
      var bb, ab, Ub, Eb, Bb, Pb;
      const jb = (0, Mb.getUserAgentDetails)(),
        Rb = (0, Mb.getOperatingSystem)(),
        kb = eb({
          os: Rb,
          userAgent: navigator.userAgent,
          agent: jb,
          appIosVersion: Yb.f,
          hintsPlatformVersion: "string" === typeof Lb ? void 0 : Lb.platformVersion
        }),
        yb = (0, Ab.g)(navigator.platform, navigator.maxTouchPoints, Tb.p);
      return [`os ${Rb} ${kb}; user agent's ${null!==(bb=jb.os.name)&&void 0!==bb?bb:"?"} ${null!==(ab=jb.os.version)&&void 0!==ab?ab:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,Mb.getPlatformType)()}`, `browser ${null!==(Ub=jb.browser.name)&&void 0!==Ub?Ub:"?"} ${null!==(Eb=jb.browser.version)&&void 0!==Eb?Eb:"?"}, engine ${null!==(Bb=jb.engine.name)&&void 0!==Bb?Bb:"?"} ${null!==(Pb=jb.engine.version)&&void 0!==Pb?Pb:"?"}`, `client hints ${"string"===typeof Lb?Lb:vb(Lb)}`, `gpu ${Xb()}`, `client ${Ab.j.client} (${Ab.j.reason})`, `surface site ${Tb.p}, subsite ${Tb.s}${Tb.h?", iframed":""}, capped surface ${null!==yb&&void 0!==yb?yb:"none"}`]
    }
    void 0 === Pb ? Lb = "none (the browser has none)" : Pb.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((bb => {
      Lb = bb
    }), (bb => {
      Lb = `failed (${String(bb)})`
    }))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);