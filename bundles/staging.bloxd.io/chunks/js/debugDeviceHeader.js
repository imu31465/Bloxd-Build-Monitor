export const id = 29;
export const ids = [29];
export const modules = {
  8713: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      debugDeviceLines: () => wz
    });
    var Fz = sz(601),
      Wz = sz(106),
      Xz = sz(133),
      Oz = sz(129),
      oz = sz(4034);
    const vz = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function Uz(zz) {
      if ("ios" === zz.os) return function(zz) {
        if (null !== zz.appIosVersion) return `${zz.appIosVersion} (the iOS app's)`;
        const tz = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(zz.userAgent);
        if (tz) return `${tz[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: sz,
          os: Fz
        } = zz.agent;
        if ("Safari" === sz.name && sz.version) return `${sz.version} (Safari's version, which follows iOS)`;
        const Wz = Fz.version;
        if ("iOS" !== Fz.name || !Wz) return "? (a desktop user agent)";
        const [Xz, Oz = 0] = Wz.split(".").map(Number);
        return Xz < 18 || 18 === Xz && Oz < 6 ? `${Wz} (user agent)` : `? (the user agent says ${Wz}, frozen from iOS 26)`
      }(zz);
      const tz = zz.hintsPlatformVersion;
      if (tz) return "windows" === zz.os ? `${tz} (${function(zz){const tz=parseInt(zz,10);if(tz>=13)return"Windows 11";return tz>=1?"Windows 10":"Windows 8.1 or older"}(tz)}, client hints)` : `${tz} (client hints)`;
      const sz = zz.agent.os.version;
      return sz ? vz.has(sz) ? `${sz} (user agent, which may be frozen)` : `${sz} (user agent)` : "?"
    }

    function Kz(zz) {
      var tz;
      const sz = (null !== (tz = zz.fullVersionList) && void 0 !== tz ? tz : []).filter((zz => {
        let {
          brand: tz
        } = zz;
        return !/not.a.brand/i.test(tz)
      })).map((zz => {
        let {
          brand: tz,
          version: sz
        } = zz;
        return `${tz} ${sz}`
      }));
      return `${zz.platform} ${zz.platformVersion||"?"}, ${sz.join(", ")||"?"}, ${zz.architecture||"?"} ${zz.bitness||"?"}-bit, model ${zz.model||"?"}, mobile ${zz.mobile}`
    }
    let uz = "pending";
    const Nz = navigator.userAgentData;

    function bz() {
      const zz = (0, Oz.k)(),
        tz = null !== zz && void 0 !== zz ? zz : (0, Oz.f)(),
        sz = (0, Oz.d)();
      return [tz ? `webgl ${tz.vendor} / ${tz.renderer} (${zz?"the renderer's context":"a probe"})` : "webgl ?", sz ? `webgpu adapter ${sz.vendor||"?"}/${sz.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function wz() {
      var zz, tz, sz, Oz, vz, Nz;
      const wz = (0, Wz.getUserAgentDetails)(),
        Dz = (0, Wz.getOperatingSystem)(),
        gz = Uz({
          os: Dz,
          userAgent: navigator.userAgent,
          agent: wz,
          appIosVersion: oz.f,
          hintsPlatformVersion: "string" === typeof uz ? void 0 : uz.platformVersion
        }),
        Hz = (0, Fz.h)(navigator.platform, navigator.maxTouchPoints, Xz.t);
      return [`os ${Dz} ${gz}; user agent's ${null!==(zz=wz.os.name)&&void 0!==zz?zz:"?"} ${null!==(tz=wz.os.version)&&void 0!==tz?tz:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,Wz.getPlatformType)()}`, `browser ${null!==(sz=wz.browser.name)&&void 0!==sz?sz:"?"} ${null!==(Oz=wz.browser.version)&&void 0!==Oz?Oz:"?"}, engine ${null!==(vz=wz.engine.name)&&void 0!==vz?vz:"?"} ${null!==(Nz=wz.engine.version)&&void 0!==Nz?Nz:"?"}`, `client hints ${"string"===typeof uz?uz:Kz(uz)}`, `gpu ${bz()}`, `client ${Fz.j.client} (${Fz.j.reason})`, `surface site ${Xz.t}, subsite ${Xz.x}${Xz.l?", iframed":""}, capped surface ${null!==Hz&&void 0!==Hz?Hz:"none"}`]
    }
    void 0 === Nz ? uz = "none (the browser has none)" : Nz.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((zz => {
      uz = zz
    }), (zz => {
      uz = `failed (${String(zz)})`
    }))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);