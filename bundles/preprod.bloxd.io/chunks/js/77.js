export const id = 77;
export const ids = [77];
export const modules = {
  4635: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => Tz,
      h: () => WZ,
      j: () => Oz,
      k: () => zZ,
      l: () => Lz,
      o: () => kz,
      s: () => cz,
      u: () => Dz,
      v: () => Kz,
      w: () => FZ,
      A: () => qZ,
      C: () => jz,
      E: () => Xz
    });
    var QC = ZC(2848);
    const wC = Function.prototype.toString,
      bC = RegExp.prototype.exec,
      nC = Reflect.apply,
      fC = Function.prototype.call,
      oC = Function.prototype.apply,
      qC = Function.prototype.bind,
      FC = Object.defineProperty,
      WC = Uint8Array;
    let NC, MC;
    try {
      NC = globalThis.crypto, MC = void 0 === NC || null === NC ? void 0 : NC.getRandomValues
    } catch {}
    const gC = "bloxdBindApply";
    let SC;
    try {
      const CC = fC;
      FC(CC, gC, {
        __proto__: null,
        value: qC,
        configurable: !0
      });
      try {
        SC = CC[gC](oC)
      } finally {
        delete CC[gC]
      }
    } catch {}
    const pC = 16,
      PC = 256,
      GC = 0,
      RC = 1,
      AC = 2,
      xC = 3;
    let JC, IC = GC,
      iC = nC,
      vC = 0;

    function eC(CC, zC) {
      return CC === `function ${zC}() { [native code] }` || CC === `function ${zC}() {\n    [native code]\n}`
    }
    const hC = 0,
      KC = 1,
      YC = 2;
    let dC = hC;

    function mC(CC, zC, ZC) {
      if (dC === YC && IC === RC && ! function() {
          const CC = JC;
          return vC >= PC && (iC(MC, NC, [CC]), vC = 0), CC[vC++] < 256 / pC
        }()) return function(CC, zC, ZC) {
        return iC(CC, zC, ZC ?? 0)
      }(...arguments);
      if (dC === hC || IC === AC) return nC(CC, zC, ZC);
      let QC;
      dC = hC;
      try {
        IC === GC && (IC = xC, IC = function() {
          const CC = nC(wC, nC, []);
          if (eC(CC, "apply")) return AC;
          if (null === nC(bC, /\(\.\.\.arguments\)/, [CC]) && null === nC(bC, /^function\s*\(\.\.\.[\w$]+\)/, [CC])) return AC;
          if ("function" !== typeof SC || "function" !== typeof fC || "function" !== typeof oC || "function" !== typeof qC || "function" !== typeof FC || "function" !== typeof MC || "function" !== typeof WC || !eC(nC(wC, fC, []), "call") || !eC(nC(wC, oC, []), "apply") || !eC(nC(wC, qC, []), "bind") || !eC(nC(wC, FC, []), "defineProperty") || !eC(nC(wC, MC, []), "getRandomValues") || !eC(nC(wC, WC, []), "Uint8Array")) return AC;
          const zC = SC,
            ZC = {},
            QC = function(CC) {
              return this === ZC && CC === ZC
            };
          try {
            if (!0 !== zC(QC, ZC, [ZC])) return AC;
            const CC = new WC(PC);
            zC(MC, NC, [CC]), JC = CC
          } catch {
            return AC
          }
          return iC = zC, RC
        }()), QC = nC(CC, zC, ZC)
      } catch (gC) {
        throw IC = AC, gC
      }
      return dC = YC, QC
    }
    let HC = nC;

    function EC() {
      return (HC === nC ? 0 : 3) + dC
    }

    function lC() {
      const CC = EC();
      return HC = nC, CC
    }

    function XC(CC) {
      HC = CC >= 3 ? mC : nC, dC = CC % 3
    }
    const cC = Function.prototype.toString,
      uC = Object.getOwnPropertyDescriptor,
      rC = Object.prototype.hasOwnProperty,
      sC = RegExp.prototype.exec,
      TC = TextEncoder.prototype.encodeInto,
      aC = String.prototype.startsWith,
      tC = Number.prototype.toString,
      DC = WeakMap.prototype.get,
      jC = WeakMap.prototype.set,
      yC = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      LC = new TextEncoder,
      UC = new Uint8Array(1024),
      BC = 9999999,
      OC = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      kC = new WeakMap;

    function VC(CC) {
      if ("function" !== typeof CC) return "#a0.0";
      const zC = HC(DC, kC, [CC]);
      if (void 0 !== zC) return zC;
      const ZC = HC(cC, CC, []),
        QC = ZC.length > BC ? BC : ZC.length,
        wC = `#${function(CC,zC){const ZC=HC(sC,yC,[zC]);if(null===ZC)return"s";const QC=ZC[1];if("ProxyObject"===QC)return"p";if(""!==QC)return HC(aC,QC,["bound "])?"b":"n";try{const zC=uC(CC,"name"),ZC=void 0!==zC&&HC(rC,zC,["value"])?zC.value:void 0;return"string"===typeof ZC&&HC(aC,ZC,["bound "])?"b":"p"}catch{return"p"}}(CC,ZC)}${QC}.${function(CC){const{written:zC}=HC(TC,LC,[CC,UC]);let ZC=2166136261;for(let QC=0;QC<zC;QC++)ZC=(ZC^UC[QC])>>>0,ZC=ZC+(ZC<<1)+(ZC<<4)+(ZC<<7)+(ZC<<8)+(ZC<<24)>>>0;return HC(tC,ZC,[36])}(ZC)}`;
      return HC(jC, kC, [CC, wC]), wC
    }

    function Cz(CC) {
      const zC = HC(sC, OC, [CC]);
      return null === zC ? CC : zC[1]
    }
    var zz = ZC(2871);
    const Zz = Function.prototype.toString,
      Qz = Object.getOwnPropertyDescriptor,
      wz = RegExp.prototype.exec,
      bz = Object.prototype.hasOwnProperty,
      nz = Set.prototype.has,
      fz = WeakMap.prototype.get,
      oz = WeakMap.prototype.set,
      qz = Reflect.get,
      Fz = Object.getPrototypeOf,
      Wz = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function Nz(CC, zC, ZC) {
      return {
        code: CC,
        holder: zC,
        key: ZC,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${ZC}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function Mz() {
      return Wz
    }
    const gz = Wz?.Instance.prototype,
      Sz = Wz?.Memory.prototype;

    function pz() {
      return Sz
    }
    let Pz, Gz;
    try {
      const CC = globalThis.crypto,
        zC = CC?.subtle;
      Pz = CC ? Fz(CC) : void 0, Gz = zC ? Fz(zC) : void 0
    } catch {}

    function Rz(CC, zC) {
      for (let ZC = CC; void 0 !== ZC && null !== ZC; ZC = Fz(ZC)) {
        const CC = Qz(ZC, zC);
        if (CC) return CC
      }
    }
    const Az = [Nz("in", Mz, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), Nz("is", Mz, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Nz("co", Mz, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), Nz("cs", Mz, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), Nz("mo", Mz, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Nz("it", Mz, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Nz("me", Mz, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), Nz("ex", (function() {
      return gz
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), Nz("bu", pz, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), Nz("gr", pz, "grow", {
      tier: "punished"
    }), Nz("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), Nz("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Nz("su", (function() {
      return Pz
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), Nz("dg", (function() {
      return Gz
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function xz(CC) {
      let zC;
      try {
        const ZC = qz(globalThis, CC);
        zC = "function" === typeof ZC ? ZC.prototype : void 0
      } catch {}
      return () => zC
    }

    function Jz(CC, zC, ZC) {
      return ZC.map((ZC => Nz(CC, zC, ZC)))
    }
    const Iz = Nz("rx", xz("HTMLCanvasElement"), "getContext"),
      iz = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      vz = {
        webgpu: [...Jz("gd", xz("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...Jz("gq", xz("GPUQueue"), ["submit", "writeBuffer"]), ...Jz("ge", xz("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...Jz("gp", xz("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), Iz],
        webgl: [...Jz("g2", xz("WebGL2RenderingContext"), [...iz, "drawArraysInstanced", "drawElementsInstanced"]), Iz],
        webgl1: [...Jz("g1", xz("WebGLRenderingContext"), iz), Iz]
      };
    let ez = [];
    const hz = new WeakMap;

    function Kz(CC, zC) {
      const ZC = lC();
      try {
        HC(oz, hz, [CC, zC])
      } finally {
        XC(ZC)
      }
    }

    function Yz(CC) {
      try {
        const zC = fZ(CC),
          ZC = HC(fz, hz, [zC]);
        return CZ(ZC, CC) ? dz(CC, !0) : `${dz(CC,!1)}${VC(ZC??zC)}`
      } catch {
        return `${dz(CC,!1)}${VC(void 0)}`
      }
    }

    function dz(CC, zC) {
      let {
        code: ZC,
        key: QC
      } = CC;
      return `wh:${ZC}${zC?"-dbg":""}:${QC}`
    }

    function mz(CC) {
      return Object.values(vz).flatMap((zC => zC.map((zC => dz(zC, CC)))))
    }
    const Hz = new Set(mz(!0)),
      Ez = new Set([...mz(!1), ...Hz]),
      lz = dz(Iz, !1);

    function Xz(CC) {
      ez = vz[CC]
    }

    function cz(CC) {
      const zC = lC();
      try {
        return uz(CC) || uz(Cz(CC))
      } finally {
        XC(zC)
      }
    }

    function uz(CC) {
      return HC(nz, Ez, [CC])
    }

    function rz(CC) {
      return new Set(Az.filter((zC => zC.tier === CC)).map((CC => `wh:${CC.code}`)))
    }
    const sz = rz("punished"),
      Tz = !1,
      az = new Set(zz.c),
      tz = rz("weighted");

    function Dz(CC) {
      const zC = lC();
      try {
        return yz(Cz(CC))
      } finally {
        XC(zC)
      }
    }

    function jz(CC) {
      const zC = lC();
      try {
        return Cz(CC)
      } finally {
        XC(zC)
      }
    }

    function yz(CC) {
      return HC(nz, tz, [CC])
    }

    function Lz(CC) {
      const zC = lC();
      try {
        return Uz(CC)
      } finally {
        XC(zC)
      }
    }

    function Uz(CC) {
      return HC(nz, az, [CC])
    }

    function Bz(CC) {
      return "wb" === CC || HC(nz, sz, [CC])
    }

    function Oz(CC) {
      const zC = lC();
      try {
        return Bz(CC) || Uz(CC)
      } finally {
        XC(zC)
      }
    }

    function kz(CC) {
      const zC = lC();
      try {
        return "wb" === CC || Tz && Bz(CC)
      } finally {
        XC(zC)
      }
    }

    function Vz(CC, zC) {
      let {
        isGetter: ZC
      } = zC;
      const QC = Qz(CC, ZC ? "get" : "value");
      return void 0 === QC ? void 0 : QC.value
    }

    function CZ(CC, zC) {
      let {
        isConstructor: ZC,
        native: QC
      } = zC;
      return "function" === typeof CC && (!(!ZC && HC(bz, CC, ["prototype"])) && null !== HC(wz, QC, [HC(Zz, CC, [])]))
    }

    function zZ(CC, zC) {
      return CZ(CC, Nz("", (() => {}), zC, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let ZZ = null,
      QZ = !1;

    function wZ() {
      try {
        return globalThis.WebAssembly === Wz
      } catch {
        return !1
      }
    }

    function bZ(CC) {
      try {
        return function(CC) {
          const {
            holder: zC,
            key: ZC,
            onNamespace: QC,
            inSecureContext: wC
          } = CC, bC = zC(), nC = Rz(bC, ZC);
          if (!nC) return !(wC && !0 === globalThis.isSecureContext);
          const fC = Vz(nC, CC);
          if (!CZ(fC, CC)) return !1;
          if (QC) {
            const zC = globalThis.WebAssembly;
            if (zC !== bC && null !== zC && ("object" === typeof zC || "function" === typeof zC)) {
              const QC = qz(zC, ZC);
              return QC === fC || void 0 === QC || CZ(QC, CC)
            }
          }
          return !0
        }(CC)
      } catch {
        return !1
      }
    }

    function nZ(CC) {
      const zC = `wh:${CC.code}`;
      if ("punished" === CC.tier) return zC;
      try {
        return `${zC}${VC(fZ(CC))}`
      } catch {
        return `${zC}${VC(void 0)}`
      }
    }

    function fZ(CC) {
      const zC = Rz(CC.holder(), CC.key),
        ZC = void 0 === zC ? void 0 : Vz(zC, CC);
      return CC.onNamespace && !wZ() && CZ(ZC, CC) ? qz(globalThis.WebAssembly, CC.key) : ZC
    }

    function oZ(CC) {
      if (Bz(CC)) return 5;
      const zC = Cz(CC);
      return yz(zC) ? 4 : Uz(CC) ? 3 : uz(zC) ? function(CC) {
        return HC(nz, Hz, [CC])
      }(zC) ? -1 : zC === lz ? 0 : 1 : 2
    }

    function qZ() {
      const CC = function() {
        const CC = EC();
        return IC === GC || IC === RC ? (HC = mC, dC = KC) : HC = nC, CC
      }();
      try {
        if (null === ZZ || !Bz(ZZ)) {
          const CC = function() {
            if (void 0 === Wz) return null;
            let CC = wZ() ? null : "wh:wa";
            const zC = zC => {
              null !== zC && (null === CC || oZ(zC) > oZ(CC)) && (CC = zC)
            };
            for (let ZC = 0; ZC < Az.length; ZC++) {
              const CC = Az[ZC];
              void 0 === CC || bZ(CC) || zC(nZ(CC))
            }
            zC((0, zz.l)());
            for (let ZC = 0; ZC < ez.length; ZC++) {
              const CC = ez[ZC];
              void 0 === CC || bZ(CC) || zC(Yz(CC))
            }
            return CC
          }();
          (null === ZZ || null !== CC && oZ(CC) > oZ(ZZ)) && (ZZ = CC)
        }
      } finally {
        XC(CC)
      }
    }

    function FZ() {
      QZ = !0
    }

    function WZ() {
      if (QZ) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && qZ(), null !== ZZ) return ZZ;
      if (void 0 === Wz) return "wn:unsupported";
      const CC = (0, QC.q)();
      return null === CC ? null : `wn:${CC}`
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);