export const id = 29;
export const ids = [29];
export const modules = {
  8869: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      debugDeviceLines: () => Zz
    });
    var Ez = bz(606),
      nz = bz(96),
      iz = bz(128),
      lz = bz(125),
      Mz = bz(4163);
    const tz = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function Hz(zz) {
      if ("ios" === zz.os) return function(zz) {
        if (null !== zz.appIosVersion) return `${zz.appIosVersion} (the iOS app's)`;
        const uz = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(zz.userAgent);
        if (uz) return `${uz[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: bz,
          os: Ez
        } = zz.agent;
        if ("Safari" === bz.name && bz.version) return `${bz.version} (Safari's version, which follows iOS)`;
        const nz = Ez.version;
        if ("iOS" !== Ez.name || !nz) return "? (a desktop user agent)";
        const [iz, lz = 0] = nz.split(".").map(Number);
        return iz < 18 || 18 === iz && lz < 6 ? `${nz} (user agent)` : `? (the user agent says ${nz}, frozen from iOS 26)`
      }(zz);
      const uz = zz.hintsPlatformVersion;
      if (uz) return "windows" === zz.os ? `${uz} (${function(zz){const uz=parseInt(zz,10);if(uz>=13)return"Windows 11";return uz>=1?"Windows 10":"Windows 8.1 or older"}(uz)}, client hints)` : `${uz} (client hints)`;
      const bz = zz.agent.os.version;
      return bz ? tz.has(bz) ? `${bz} (user agent, which may be frozen)` : `${bz} (user agent)` : "?"
    }

    function Oz(zz) {
      var uz;
      const bz = (null !== (uz = zz.fullVersionList) && void 0 !== uz ? uz : []).filter((zz => {
        let {
          brand: uz
        } = zz;
        return !/not.a.brand/i.test(uz)
      })).map((zz => {
        let {
          brand: uz,
          version: bz
        } = zz;
        return `${uz} ${bz}`
      }));
      return `${zz.platform} ${zz.platformVersion||"?"}, ${bz.join(", ")||"?"}, ${zz.architecture||"?"} ${zz.bitness||"?"}-bit, model ${zz.model||"?"}, mobile ${zz.mobile}`
    }
    let pz = "pending";
    const dz = navigator.userAgentData;

    function Fz() {
      const zz = (0, lz.m)(),
        uz = null !== zz && void 0 !== zz ? zz : (0, lz.g)(),
        bz = (0, lz.e)();
      return [uz ? `webgl ${uz.vendor} / ${uz.renderer} (${zz?"the renderer's context":"a probe"})` : "webgl ?", bz ? `webgpu adapter ${bz.vendor||"?"}/${bz.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function Zz() {
      var zz, uz, bz, lz, tz, dz;
      const Zz = (0, nz.getUserAgentDetails)(),
        Rz = (0, nz.getOperatingSystem)(),
        Kz = Hz({
          os: Rz,
          userAgent: navigator.userAgent,
          agent: Zz,
          appIosVersion: Mz.g,
          hintsPlatformVersion: "string" === typeof pz ? void 0 : pz.platformVersion
        }),
        wz = (0, Ez.l)(navigator.platform, navigator.maxTouchPoints, iz.x);
      return [`os ${Rz} ${Kz}; user agent's ${null!==(zz=Zz.os.name)&&void 0!==zz?zz:"?"} ${null!==(uz=Zz.os.version)&&void 0!==uz?uz:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,nz.getPlatformType)()}`, `browser ${null!==(bz=Zz.browser.name)&&void 0!==bz?bz:"?"} ${null!==(lz=Zz.browser.version)&&void 0!==lz?lz:"?"}, engine ${null!==(tz=Zz.engine.name)&&void 0!==tz?tz:"?"} ${null!==(dz=Zz.engine.version)&&void 0!==dz?dz:"?"}`, `client hints ${"string"===typeof pz?pz:Oz(pz)}`, `gpu ${Fz()}`, `client ${Ez.o.client} (${Ez.o.reason})`, `surface site ${iz.x}, subsite ${iz.E}${iz.l?", iframed":""}, capped surface ${null!==wz&&void 0!==wz?wz:"none"}`]
    }
    void 0 === dz ? pz = "none (the browser has none)" : dz.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((zz => {
      pz = zz
    }), (zz => {
      pz = `failed (${String(zz)})`
    }))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);