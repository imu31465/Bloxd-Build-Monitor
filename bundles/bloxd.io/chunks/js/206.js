export const id = 206;
export const ids = [206];
export const modules = {
  34261: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => MB,
      d: () => HB,
      f: () => aB
    });
    var TB = ZB(34269);
    const JB = {
        fileBytes: 4194304,
        vertices: 65535,
        indices: 196608,
        accessorElements: 196608,
        primitives: 64,
        nodes: 128,
        meshes: 64,
        materials: 8,
        images: 8,
        imageSide: 1024
      },
      oB = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      GB = 1048576,
      vB = "is not a binary glTF 2.0 file",
      kB = "loads data from outside the file",
      cB = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      nB = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      hB = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      zB = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: hB,
        TEXCOORD_2: hB,
        TEXCOORD_3: hB,
        TEXCOORD_4: hB,
        TEXCOORD_5: hB
      },
      FB = new Set(TB.k.map((BB => {
        let [IB] = BB;
        return IB
      }))),
      NB = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      gB = 5126;

    function qB(BB) {
      return BB.toLocaleString("en-US")
    }

    function yB(BB, IB, ZB) {
      return BB > IB ? `has ${qB(BB)} ${ZB} (the limit is ${qB(IB)})` : null
    }

    function UB(BB, IB) {
      return Number.isInteger(BB) && BB >= 0 && BB < (null !== IB && void 0 !== IB ? IB : 0)
    }

    function WB(BB) {
      return Number.isInteger(BB) && BB >= 0
    }

    function dB(BB, IB) {
      return void 0 !== BB && (!Array.isArray(BB) || BB.length > IB)
    }

    function CB(BB, IB) {
      return "object" === typeof BB && null !== BB && Object.keys(BB).length > IB
    }

    function QB(BB) {
      var IB;
      return `${BB.normalized?"normalized ":""}${null!==(IB=TB.g[BB.componentType])&&void 0!==IB?IB:BB.componentType} ${BB.type}`
    }

    function sB(BB) {
      const IB = IB => {
        var ZB;
        return null !== (ZB = BB[IB]) && void 0 !== ZB ? ZB : -1
      };
      return 255 === IB(0) && 216 === IB(1) ? "JPEG" : 82 === IB(0) && 73 === IB(1) && 87 === IB(8) && 69 === IB(9) ? "WebP" : 171 === IB(0) && 75 === IB(1) && 84 === IB(2) && 88 === IB(3) ? "KTX2" : "non-PNG"
    }

    function wB(BB) {
      return BB.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((IB, ZB) => BB[ZB] === IB)) && 73 === BB[12] && 72 === BB[13] && 68 === BB[14] && 82 === BB[15]
    }

    function OB(BB) {
      return /^[aeiou]/i.test(BB) ? `an ${BB}` : `a ${BB}`
    }

    function YB(BB) {
      const IB = BB.byteStride;
      return void 0 === IB || Number.isInteger(IB) && IB >= 4 && IB <= 252 && IB % 4 === 0
    }

    function iB(BB, IB, ZB) {
      var TB, JB;
      const oB = null === (TB = BB.bufferViews) || void 0 === TB ? void 0 : TB[ZB];
      if (!oB || !IB || 0 !== oB.buffer) return null;
      const GB = null !== (JB = oB.byteOffset) && void 0 !== JB ? JB : 0;
      return !WB(GB) || !WB(oB.byteLength) || GB + oB.byteLength > IB.byteLength ? null : IB.subarray(GB, GB + oB.byteLength)
    }

    function pB(BB, IB) {
      var ZB, JB, oB;
      const GB = TB.t[IB.type],
        vB = TB.c[IB.componentType];
      if (!GB || !vB || !Number.isInteger(IB.count) || IB.count < 0) return !1;
      if (void 0 === IB.bufferView) return !0;
      const kB = null === (ZB = BB.bufferViews) || void 0 === ZB ? void 0 : ZB[IB.bufferView],
        cB = null !== (JB = IB.byteOffset) && void 0 !== JB ? JB : 0;
      if (!kB || !WB(cB) || cB % vB !== 0) return !1;
      const nB = GB * vB,
        hB = null !== (oB = kB.byteStride) && void 0 !== oB ? oB : nB;
      if (hB < nB) return !1;
      return (0 === IB.count ? 0 : cB + hB * (IB.count - 1) + nB) <= kB.byteLength
    }

    function aB(BB) {
      return BB > JB.fileBytes ? `is ${(BB/GB).toFixed(1)} MiB (the limit is ${JB.fileBytes/GB} MiB)` : null
    }

    function HB(BB, IB) {
      try {
        return function(BB, IB) {
          var ZB, GB, hB, qB, WB, aB, HB, MB, jB, PB, RB, rB, mB, XB, LB, eB, uB;
          const fB = Array.isArray(BB.extensionsUsed) && BB.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(BB, IB) {
              var ZB, TB;
              const {
                items: JB,
                perFile: GB,
                surfaces: vB,
                few: kB,
                bounds: cB,
                attributeMembers: nB
              } = oB;
              if (dB(BB.extensionsRequired, kB) || dB(BB.animations, 1 / 0) || dB(BB.skins, 1 / 0)) return !0;
              if (null !== (ZB = BB.animations) && void 0 !== ZB && ZB.length || null !== (TB = BB.skins) && void 0 !== TB && TB.length) return !1;
              if ([
                  [BB.buffers, kB],
                  [BB.scenes, kB],
                  [BB.bufferViews, JB],
                  [BB.accessors, JB],
                  [BB.nodes, JB],
                  [BB.meshes, JB],
                  [BB.materials, vB],
                  [BB.textures, vB],
                  [BB.samplers, vB],
                  [BB.images, vB]
                ].some((BB => {
                  let [IB, ZB] = BB;
                  return dB(IB, ZB)
                }))) return !0;
              for (const oB of null !== (hB = BB.accessors) && void 0 !== hB ? hB : []) {
                var hB, zB, FB;
                if (Number.isInteger(oB.count) && (!Number.isSafeInteger(oB.count) || Object.is(oB.count, -0)) || dB(null !== (zB = oB.min) && void 0 !== zB ? zB : void 0, cB) || dB(null !== (FB = oB.max) && void 0 !== FB ? FB : void 0, cB)) return !0
              }
              for (const oB of null !== (NB = BB.scenes) && void 0 !== NB ? NB : []) {
                var NB;
                if (dB(oB.nodes, JB)) return !0
              }
              let gB = 0;
              for (const oB of null !== (qB = BB.nodes) && void 0 !== qB ? qB : []) {
                var qB, yB, UB;
                if (dB(oB.children, GB)) return !0;
                gB += null !== (yB = null === (UB = oB.children) || void 0 === UB ? void 0 : UB.length) && void 0 !== yB ? yB : 0
              }
              if (gB > GB) return !0;
              let WB = 0;
              for (const oB of null !== (QB = BB.meshes) && void 0 !== QB ? QB : []) {
                var QB;
                if (!Array.isArray(oB.primitives)) return !0;
                if (WB += oB.primitives.length, WB > GB) return !0;
                for (const BB of oB.primitives) {
                  var sB;
                  const ZB = IB ? null === (sB = BB.extensions) || void 0 === sB ? void 0 : sB.KHR_draco_mesh_compression : void 0;
                  if (CB(BB.attributes, nB) || CB(null === ZB || void 0 === ZB ? void 0 : ZB.attributes, nB)) return !0
                }
              }
              return !1
            }(BB, fB)) return vB;
          const lB = null === (ZB = BB.asset) || void 0 === ZB ? void 0 : ZB.version;
          if ("string" !== typeof lB || !/^2\.\d+/.test(lB)) return `uses glTF version ${null!==lB&&void 0!==lB?lB:"(none)"}`;
          const AB = null === (GB = BB.asset) || void 0 === GB ? void 0 : GB.minVersion;
          if (void 0 !== AB && "2.0" !== AB) return `uses glTF version ${AB}`;
          for (const TB of null !== (tB = BB.extensionsRequired) && void 0 !== tB ? tB : []) {
            var tB;
            if (!cB.has(TB)) return `requires the glTF extension ${TB}`
          }
          if (null !== (hB = BB.animations) && void 0 !== hB && hB.length) return "has animations";
          if (null !== (qB = BB.skins) && void 0 !== qB && qB.length) return "uses skins";
          const bB = null !== (WB = BB.buffers) && void 0 !== WB ? WB : [];
          for (const [TB, JB] of bB.entries()) {
            if (void 0 !== JB.uri) return kB;
            if (TB > 0 || !IB) return vB
          }
          for (const [TB, JB] of(null !== (xB = BB.bufferViews) && void 0 !== xB ? xB : []).entries()) {
            var xB;
            if (!iB(BB, IB, TB) || !YB(JB)) return vB
          }
          const EB = null !== (aB = BB.accessors) && void 0 !== aB ? aB : [];
          for (const TB of EB) {
            if (void 0 !== TB.sparse) return "uses sparse accessors";
            const IB = Number.isInteger(TB.count) ? yB(TB.count, JB.accessorElements, "elements in an accessor") : null;
            if (IB) return IB;
            if (!pB(BB, TB)) return vB
          }
          const DB = null !== (HB = BB.scenes) && void 0 !== HB ? HB : [];
          if (1 !== DB.length) return `has ${DB.length} scenes`;
          const KB = (0, TB.A)(BB);
          if (void 0 !== KB && 0 !== KB) return vB;
          const VB = null !== (MB = BB.nodes) && void 0 !== MB ? MB : [],
            SB = null !== (jB = BB.meshes) && void 0 !== jB ? jB : [],
            BI = null !== (PB = BB.materials) && void 0 !== PB ? PB : [],
            II = null !== (RB = BB.textures) && void 0 !== RB ? RB : [],
            ZI = null !== (rB = BB.images) && void 0 !== rB ? rB : [],
            TI = null !== (mB = null !== (XB = null !== (LB = yB(VB.length, JB.nodes, "nodes")) && void 0 !== LB ? LB : yB(SB.length, JB.meshes, "meshes")) && void 0 !== XB ? XB : yB(BI.length, JB.materials, "materials")) && void 0 !== mB ? mB : yB(ZI.length, JB.images, "images");
          if (TI) return TI;
          const JI = new Set;
          for (const TB of VB)
            for (const BB of null !== (oI = TB.children) && void 0 !== oI ? oI : []) {
              var oI;
              if (!UB(BB, VB.length) || JI.has(BB)) return vB;
              JI.add(BB)
            }
          const GI = new Set,
            vI = BB => {
              var IB;
              return !GI.has(BB) && (GI.add(BB), (null !== (IB = VB[BB].children) && void 0 !== IB ? IB : []).every(vI))
            };
          for (const TB of null !== (kI = DB[0].nodes) && void 0 !== kI ? kI : []) {
            var kI;
            if (!UB(TB, VB.length) || JI.has(TB) || !vI(TB)) return vB
          }
          for (const TB of VB) {
            if (void 0 !== TB.matrix) return "uses node matrices";
            if (void 0 !== TB.skin) return "uses skins";
            if (void 0 !== TB.weights) return "uses morph targets";
            if (void 0 !== TB.mesh && !UB(TB.mesh, SB.length)) return vB;
            const BB = [
              [TB.translation, 3],
              [TB.rotation, 4],
              [TB.scale, 3]
            ];
            for (const [IB, ZB] of BB)
              if (void 0 !== IB && (!Array.isArray(IB) || IB.length !== ZB || !IB.every((BB => Number.isFinite(BB))))) return vB
          }
          let cI = -1,
            nI = 0,
            hI = 0,
            zI = null;
          for (const JB of SB) {
            if (void 0 !== JB.weights) return "uses morph targets";
            if (0 === JB.primitives.length) return vB;
            for (const ZB of JB.primitives) {
              var FI, NI;
              const JB = null !== (FI = ZB.mode) && void 0 !== FI ? FI : 4;
              var gI;
              if (4 !== JB && 0 !== JB) return `uses ${null!==(gI=NB[JB])&&void 0!==gI?gI:`mode ${JB}`} primitives`;
              if (void 0 !== ZB.targets) return "uses morph targets";
              if (void 0 !== ZB.material && !UB(ZB.material, BI.length)) return vB;
              const oB = fB ? null === (NI = ZB.extensions) || void 0 === NI ? void 0 : NI.KHR_draco_mesh_compression : void 0;
              if (oB) {
                if (4 !== JB) return "uses Draco-compressed points";
                if (!iB(BB, IB, oB.bufferView) || "object" !== typeof oB.attributes) return vB
              }
              const GB = ZB.attributes;
              if ("object" !== typeof GB || null === GB) return vB;
              if (void 0 === GB.POSITION) return "has a primitive with no positions";
              if (!UB(GB.POSITION, EB.length)) return vB;
              const kB = EB[GB.POSITION].count;
              for (const [BB, IB] of Object.entries(GB)) {
                if (!UB(IB, EB.length)) return vB;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(BB)) return "uses skins";
                const ZB = EB[IB],
                  TB = nB[BB];
                if (TB && (ZB.componentType !== gB || ZB.normalized || ZB.type !== TB)) return `stores ${BB} as ${QB(ZB)}`;
                const JB = zB[BB];
                if (JB && (ZB.type !== JB.type || !JB.componentTypes.includes(ZB.componentType) || ZB.componentType === gB === !!ZB.normalized)) return `stores ${BB} as ${QB(ZB)}`;
                if (FB.has(BB) && ZB.count !== kB) return "has vertex attributes of different lengths"
              }
              if (oB) {
                if (void 0 === ZB.indices) return vB;
                for (const IB in oB.attributes)
                  if (FB.has(IB) && void 0 === GB[IB]) return vB;
                if (void 0 === oB.attributes.POSITION) return vB;
                const BB = UB(ZB.indices, EB.length) ? EB[ZB.indices].count : -1;
                if (0 === BB) return vB;
                if (-1 === cI) cI = oB.bufferView, nI = kB, hI = BB;
                else {
                  zI ??= new Map([
                    [cI, [nI, hI]]
                  ]);
                  const IB = zI.get(oB.bufferView);
                  if (IB && (IB[0] !== kB || IB[1] !== BB)) return vB;
                  zI.set(oB.bufferView, null !== IB && void 0 !== IB ? IB : [kB, BB])
                }
              }
              let cB = kB;
              if (void 0 !== ZB.indices) {
                if (!UB(ZB.indices, EB.length)) return vB;
                const BB = EB[ZB.indices];
                if ("SCALAR" !== BB.type) return vB;
                if (5121 === BB.componentType) return "uses 8-bit indices";
                var qI;
                if (5123 !== BB.componentType && 5125 !== BB.componentType) return `stores indices as ${null!==(qI=TB.g[BB.componentType])&&void 0!==qI?qI:BB.componentType}`;
                if (!oB && void 0 === BB.bufferView) return vB;
                cB = BB.count
              }
              if (4 === JB && cB % 3 !== 0) return vB
            }
          }
          let yI = 0,
            UI = 0,
            WI = 0;
          for (let TB = 0; TB < VB.length; TB++) {
            const BB = VB[TB].mesh;
            if (void 0 !== BB && GI.has(TB))
              for (const IB of SB[BB].primitives) WI++, yI += EB[IB.attributes.POSITION].count, void 0 !== IB.indices && (UI += EB[IB.indices].count)
          }
          const dI = null !== (eB = null !== (uB = yB(yI, JB.vertices, "vertices")) && void 0 !== uB ? uB : yB(UI, JB.indices, "indices")) && void 0 !== eB ? eB : yB(WI, JB.primitives, "primitives");
          if (dI) return dI;
          for (const TB of BI) {
            var CI, QI;
            if (void 0 !== TB.emissiveTexture) return "uses an emissive texture";
            const IB = null !== (CI = TB.alphaMode) && void 0 !== CI ? CI : "OPAQUE";
            if ("OPAQUE" !== IB && "MASK" !== IB && "BLEND" !== IB) return vB;
            const ZB = null === (QI = TB.pbrMetallicRoughness) || void 0 === QI ? void 0 : QI.baseColorTexture;
            if (ZB) {
              var sI, wI, OI, YI, iI;
              const IB = null !== (sI = BB.extensionsUsed) && void 0 !== sI && sI.includes("KHR_texture_transform") ? null === (wI = ZB.extensions) || void 0 === wI ? void 0 : wI.KHR_texture_transform : void 0;
              if (0 !== (null !== (OI = ZB.texCoord) && void 0 !== OI ? OI : 0) || 0 !== (null !== (YI = null === IB || void 0 === IB ? void 0 : IB.texCoord) && void 0 !== YI ? YI : 0)) return "uses a second UV set";
              const TB = II[ZB.index];
              if (!TB || !UB(TB.source, ZI.length) || void 0 !== TB.sampler && !UB(TB.sampler, null === (iI = BB.samplers) || void 0 === iI ? void 0 : iI.length)) return vB
            }
          }
          for (const TB of ZI) {
            if (void 0 !== TB.uri) return kB;
            if (void 0 === TB.bufferView) return vB;
            const ZB = iB(BB, IB, TB.bufferView);
            if (!ZB) return vB;
            if ("image/png" !== TB.mimeType) {
              var pI, aI, HI;
              return `has ${OB(null!==(pI=null!==(aI={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(HI=TB.mimeType)&&void 0!==HI?HI:""])&&void 0!==aI?aI:TB.mimeType)&&void 0!==pI?pI:"untyped")} image`
            }
            if (!wB(ZB)) return `has ${OB(sB(ZB))} image`;
            const oB = new DataView(ZB.buffer, ZB.byteOffset, ZB.byteLength),
              GB = oB.getUint32(16),
              cB = oB.getUint32(20);
            if (GB > JB.imageSide || cB > JB.imageSide) return `has a ${GB} \xd7 ${cB} image (the limit is ${JB.imageSide})`
          }
          return null
        }(BB, IB)
      } catch {
        return vB
      }
    }

    function MB(BB) {
      const IB = aB(BB.byteLength);
      if (IB) return IB;
      try {
        const {
          json: IB,
          bin: ZB
        } = (0, TB.C)(BB);
        return HB(IB, ZB)
      } catch (ZB) {
        if (ZB instanceof TB.p) return ZB.reason;
        throw ZB
      }
    }
  },
  34269: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => GB,
      C: () => cB,
      c: () => FB,
      g: () => zB,
      k: () => gB,
      m: () => oB,
      p: () => JB,
      t: () => NB,
      u: () => nB,
      w: () => hB
    });
    var TB = ZB(34273);
    class JB extends Error {
      constructor(BB) {
        super(`GLB refused: it ${BB}`), this.reason = BB, this.name = "GlbRefused"
      }
    }
    class oB extends Error {
      constructor(BB) {
        super(BB), this.name = "GlbError"
      }
    }

    function GB(BB) {
      return Reflect.get(BB, "scene")
    }
    const vB = 5130562,
      kB = "is not a binary glTF 2.0 file";

    function cB(BB) {
      var IB;
      const ZB = BB instanceof Uint8Array ? BB : new Uint8Array(BB),
        oB = (0, TB.d)(ZB);
      if (null === oB) throw new JB(kB);
      const GB = oB.json,
        {
          jsonEnd: cB,
          length: nB
        } = oB,
        hB = new DataView(ZB.buffer, ZB.byteOffset, ZB.byteLength);
      let zB = -1,
        FB = 0;
      for (let qB = cB; qB < nB;) {
        if (qB + 8 > nB) throw new JB(kB);
        const BB = hB.getUint32(qB, !0),
          IB = hB.getUint32(qB + 4, !0);
        if (qB + 8 + BB > nB || IB === TB.c || IB === vB && -1 !== zB) throw new JB(kB);
        IB === vB && (zB = qB + 8, FB = BB), qB += 8 + BB
      }
      let NB = null;
      const gB = null === (IB = GB.buffers) || void 0 === IB ? void 0 : IB[0];
      if (-1 !== zB && gB && void 0 === gB.uri) {
        if (!(gB.byteLength >= 0) || gB.byteLength > FB) throw new JB(kB);
        NB = new Uint8Array(ZB.buffer, ZB.byteOffset + zB, gB.byteLength)
      }
      return {
        json: GB,
        bin: NB,
        fileBytes: ZB.byteLength
      }
    }

    function nB(BB) {
      const IB = BB.slice(BB.indexOf(",") + 1),
        ZB = Uint8Array.fromBase64;
      if (ZB) return ZB(IB).buffer;
      const TB = atob(IB),
        JB = new Uint8Array(TB.length);
      for (let oB = 0; oB < TB.length; oB++) JB[oB] = TB.charCodeAt(oB);
      return JB.buffer
    }
    async function hB(BB) {
      if (BB.startsWith("data:")) return nB(BB);
      const IB = await fetch(BB);
      if (!IB.ok) throw new oB(`fetching ${BB} failed: ${IB.status} ${IB.statusText}`);
      return await IB.arrayBuffer()
    }
    const zB = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      FB = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      NB = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      gB = [
        ["POSITION", "position"],
        ["NORMAL", "normal"],
        ["TANGENT", "tangent"],
        ["TEXCOORD_0", "uv"],
        ["TEXCOORD_1", "uv2"],
        ["TEXCOORD_2", "uv3"],
        ["TEXCOORD_3", "uv4"],
        ["TEXCOORD_4", "uv5"],
        ["TEXCOORD_5", "uv6"],
        ["COLOR_0", "color"]
      ]
  },
  34273: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      d: () => oB,
      g: () => GB
    });
    const TB = 1179937895,
      JB = 1313821514;

    function oB(BB) {
      const IB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      if (BB.byteLength < 20 || IB.getUint32(0, !0) !== TB || 2 !== IB.getUint32(4, !0)) return null;
      const ZB = Math.min(IB.getUint32(8, !0), BB.byteLength),
        oB = IB.getUint32(12, !0);
      if (IB.getUint32(16, !0) !== JB || 20 + oB > ZB) return null;
      let GB;
      try {
        GB = JSON.parse((new TextDecoder).decode(BB.subarray(20, 20 + oB)))
      } catch {
        return null
      }
      return "object" === typeof GB && null !== GB ? {
        json: GB,
        jsonEnd: 20 + oB,
        length: ZB
      } : null
    }

    function GB(BB) {
      var IB;
      const ZB = null === (IB = oB(BB)) || void 0 === IB ? void 0 : IB.json;
      if (void 0 === ZB || !Array.isArray(ZB.extensionsUsed) || !ZB.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const TB = ZB.meshes;
      return Array.isArray(TB) && TB.some((BB => {
        const IB = null === BB || void 0 === BB ? void 0 : BB.primitives;
        return Array.isArray(IB) && IB.some((BB => {
          const IB = null === BB || void 0 === BB ? void 0 : BB.extensions;
          return null != (null === IB || void 0 === IB ? void 0 : IB.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);