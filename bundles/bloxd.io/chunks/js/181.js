export const id = 181;
export const ids = [181];
export const modules = {
  8629: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => rB,
      f: () => KB,
      i: () => FB
    });
    var VB = dB(8634);
    const yB = {
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
      pB = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      lB = 1048576,
      JB = "is not a binary glTF 2.0 file",
      YB = "loads data from outside the file",
      gB = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      oB = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      kB = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      LB = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: kB,
        TEXCOORD_2: kB,
        TEXCOORD_3: kB,
        TEXCOORD_4: kB,
        TEXCOORD_5: kB
      },
      OB = new Set(VB.j.map((BB => {
        let [TB] = BB;
        return TB
      }))),
      DB = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      uB = 5126;

    function HB(BB) {
      return BB.toLocaleString("en-US")
    }

    function EB(BB, TB, dB) {
      return BB > TB ? `has ${HB(BB)} ${dB} (the limit is ${HB(TB)})` : null
    }

    function vB(BB, TB) {
      return Number.isInteger(BB) && BB >= 0 && BB < (null !== TB && void 0 !== TB ? TB : 0)
    }

    function mB(BB) {
      return Number.isInteger(BB) && BB >= 0
    }

    function iB(BB, TB) {
      return void 0 !== BB && (!Array.isArray(BB) || BB.length > TB)
    }

    function NB(BB, TB) {
      return "object" === typeof BB && null !== BB && Object.keys(BB).length > TB
    }

    function tB(BB) {
      var TB;
      return `${BB.normalized?"normalized ":""}${null!==(TB=VB.g[BB.componentType])&&void 0!==TB?TB:BB.componentType} ${BB.type}`
    }

    function fB(BB) {
      const TB = TB => {
        var dB;
        return null !== (dB = BB[TB]) && void 0 !== dB ? dB : -1
      };
      return 255 === TB(0) && 216 === TB(1) ? "JPEG" : 82 === TB(0) && 73 === TB(1) && 87 === TB(8) && 69 === TB(9) ? "WebP" : 171 === TB(0) && 75 === TB(1) && 84 === TB(2) && 88 === TB(3) ? "KTX2" : "non-PNG"
    }

    function sB(BB) {
      return BB.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((TB, dB) => BB[dB] === TB)) && 73 === BB[12] && 72 === BB[13] && 68 === BB[14] && 82 === BB[15]
    }

    function MB(BB) {
      return /^[aeiou]/i.test(BB) ? `an ${BB}` : `a ${BB}`
    }

    function zB(BB) {
      const TB = BB.byteStride;
      return void 0 === TB || Number.isInteger(TB) && TB >= 4 && TB <= 252 && TB % 4 === 0
    }

    function wB(BB, TB, dB) {
      var VB, yB;
      const pB = null === (VB = BB.bufferViews) || void 0 === VB ? void 0 : VB[dB];
      if (!pB || !TB || 0 !== pB.buffer) return null;
      const lB = null !== (yB = pB.byteOffset) && void 0 !== yB ? yB : 0;
      return !mB(lB) || !mB(pB.byteLength) || lB + pB.byteLength > TB.byteLength ? null : TB.subarray(lB, lB + pB.byteLength)
    }

    function UB(BB, TB) {
      var dB, yB, pB;
      const lB = VB.r[TB.type],
        JB = VB.c[TB.componentType];
      if (!lB || !JB || !Number.isInteger(TB.count) || TB.count < 0) return !1;
      if (void 0 === TB.bufferView) return !0;
      const YB = null === (dB = BB.bufferViews) || void 0 === dB ? void 0 : dB[TB.bufferView],
        gB = null !== (yB = TB.byteOffset) && void 0 !== yB ? yB : 0;
      if (!YB || !mB(gB) || gB % JB !== 0) return !1;
      const oB = lB * JB,
        kB = null !== (pB = YB.byteStride) && void 0 !== pB ? pB : oB;
      if (kB < oB) return !1;
      return (0 === TB.count ? 0 : gB + kB * (TB.count - 1) + oB) <= YB.byteLength
    }

    function FB(BB) {
      return BB > yB.fileBytes ? `is ${(BB/lB).toFixed(1)} MiB (the limit is ${yB.fileBytes/lB} MiB)` : null
    }

    function KB(BB, TB) {
      try {
        return function(BB, TB) {
          var dB, lB, kB, HB, mB, FB, KB, rB, IB, cB, SB, PB, QB, RB, aB, ZB, XB;
          const WB = Array.isArray(BB.extensionsUsed) && BB.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(BB, TB) {
              var dB, VB;
              const {
                items: yB,
                perFile: lB,
                surfaces: JB,
                few: YB,
                bounds: gB,
                attributeMembers: oB
              } = pB;
              if (iB(BB.extensionsRequired, YB) || iB(BB.animations, 1 / 0) || iB(BB.skins, 1 / 0)) return !0;
              if (null !== (dB = BB.animations) && void 0 !== dB && dB.length || null !== (VB = BB.skins) && void 0 !== VB && VB.length) return !1;
              if ([
                  [BB.buffers, YB],
                  [BB.scenes, YB],
                  [BB.bufferViews, yB],
                  [BB.accessors, yB],
                  [BB.nodes, yB],
                  [BB.meshes, yB],
                  [BB.materials, JB],
                  [BB.textures, JB],
                  [BB.samplers, JB],
                  [BB.images, JB]
                ].some((BB => {
                  let [TB, dB] = BB;
                  return iB(TB, dB)
                }))) return !0;
              for (const pB of null !== (kB = BB.accessors) && void 0 !== kB ? kB : []) {
                var kB, LB, OB;
                if (Number.isInteger(pB.count) && (!Number.isSafeInteger(pB.count) || Object.is(pB.count, -0)) || iB(null !== (LB = pB.min) && void 0 !== LB ? LB : void 0, gB) || iB(null !== (OB = pB.max) && void 0 !== OB ? OB : void 0, gB)) return !0
              }
              for (const pB of null !== (DB = BB.scenes) && void 0 !== DB ? DB : []) {
                var DB;
                if (iB(pB.nodes, yB)) return !0
              }
              let uB = 0;
              for (const pB of null !== (HB = BB.nodes) && void 0 !== HB ? HB : []) {
                var HB, EB, vB;
                if (iB(pB.children, lB)) return !0;
                uB += null !== (EB = null === (vB = pB.children) || void 0 === vB ? void 0 : vB.length) && void 0 !== EB ? EB : 0
              }
              if (uB > lB) return !0;
              let mB = 0;
              for (const pB of null !== (tB = BB.meshes) && void 0 !== tB ? tB : []) {
                var tB;
                if (!Array.isArray(pB.primitives)) return !0;
                if (mB += pB.primitives.length, mB > lB) return !0;
                for (const BB of pB.primitives) {
                  var fB;
                  const dB = TB ? null === (fB = BB.extensions) || void 0 === fB ? void 0 : fB.KHR_draco_mesh_compression : void 0;
                  if (NB(BB.attributes, oB) || NB(null === dB || void 0 === dB ? void 0 : dB.attributes, oB)) return !0
                }
              }
              return !1
            }(BB, WB)) return JB;
          const hB = null === (dB = BB.asset) || void 0 === dB ? void 0 : dB.version;
          if ("string" !== typeof hB || !/^2\.\d+/.test(hB)) return `uses glTF version ${null!==hB&&void 0!==hB?hB:"(none)"}`;
          const CB = null === (lB = BB.asset) || void 0 === lB ? void 0 : lB.minVersion;
          if (void 0 !== CB && "2.0" !== CB) return `uses glTF version ${CB}`;
          for (const VB of null !== (GB = BB.extensionsRequired) && void 0 !== GB ? GB : []) {
            var GB;
            if (!gB.has(VB)) return `requires the glTF extension ${VB}`
          }
          if (null !== (kB = BB.animations) && void 0 !== kB && kB.length) return "has animations";
          if (null !== (HB = BB.skins) && void 0 !== HB && HB.length) return "uses skins";
          const qB = null !== (mB = BB.buffers) && void 0 !== mB ? mB : [];
          for (const [VB, yB] of qB.entries()) {
            if (void 0 !== yB.uri) return YB;
            if (VB > 0 || !TB) return JB
          }
          for (const [VB, yB] of(null !== (xB = BB.bufferViews) && void 0 !== xB ? xB : []).entries()) {
            var xB;
            if (!wB(BB, TB, VB) || !zB(yB)) return JB
          }
          const jB = null !== (FB = BB.accessors) && void 0 !== FB ? FB : [];
          for (const VB of jB) {
            if (void 0 !== VB.sparse) return "uses sparse accessors";
            const TB = Number.isInteger(VB.count) ? EB(VB.count, yB.accessorElements, "elements in an accessor") : null;
            if (TB) return TB;
            if (!UB(BB, VB)) return JB
          }
          const AB = null !== (KB = BB.scenes) && void 0 !== KB ? KB : [];
          if (1 !== AB.length) return `has ${AB.length} scenes`;
          const bB = (0, VB.x)(BB);
          if (void 0 !== bB && 0 !== bB) return JB;
          const nB = null !== (rB = BB.nodes) && void 0 !== rB ? rB : [],
            eB = null !== (IB = BB.meshes) && void 0 !== IB ? IB : [],
            BT = null !== (cB = BB.materials) && void 0 !== cB ? cB : [],
            TT = null !== (SB = BB.textures) && void 0 !== SB ? SB : [],
            dT = null !== (PB = BB.images) && void 0 !== PB ? PB : [],
            VT = null !== (QB = null !== (RB = null !== (aB = EB(nB.length, yB.nodes, "nodes")) && void 0 !== aB ? aB : EB(eB.length, yB.meshes, "meshes")) && void 0 !== RB ? RB : EB(BT.length, yB.materials, "materials")) && void 0 !== QB ? QB : EB(dT.length, yB.images, "images");
          if (VT) return VT;
          const yT = new Set;
          for (const VB of nB)
            for (const BB of null !== (pT = VB.children) && void 0 !== pT ? pT : []) {
              var pT;
              if (!vB(BB, nB.length) || yT.has(BB)) return JB;
              yT.add(BB)
            }
          const lT = new Set,
            JT = BB => {
              var TB;
              return !lT.has(BB) && (lT.add(BB), (null !== (TB = nB[BB].children) && void 0 !== TB ? TB : []).every(JT))
            };
          for (const VB of null !== (YT = AB[0].nodes) && void 0 !== YT ? YT : []) {
            var YT;
            if (!vB(VB, nB.length) || yT.has(VB) || !JT(VB)) return JB
          }
          for (const VB of nB) {
            if (void 0 !== VB.matrix) return "uses node matrices";
            if (void 0 !== VB.skin) return "uses skins";
            if (void 0 !== VB.weights) return "uses morph targets";
            if (void 0 !== VB.mesh && !vB(VB.mesh, eB.length)) return JB;
            const BB = [
              [VB.translation, 3],
              [VB.rotation, 4],
              [VB.scale, 3]
            ];
            for (const [TB, dB] of BB)
              if (void 0 !== TB && (!Array.isArray(TB) || TB.length !== dB || !TB.every((BB => Number.isFinite(BB))))) return JB
          }
          let gT = -1,
            oT = 0,
            kT = 0,
            LT = null;
          for (const yB of eB) {
            if (void 0 !== yB.weights) return "uses morph targets";
            if (0 === yB.primitives.length) return JB;
            for (const dB of yB.primitives) {
              var OT, DT;
              const yB = null !== (OT = dB.mode) && void 0 !== OT ? OT : 4;
              var uT;
              if (4 !== yB && 0 !== yB) return `uses ${null!==(uT=DB[yB])&&void 0!==uT?uT:`mode ${yB}`} primitives`;
              if (void 0 !== dB.targets) return "uses morph targets";
              if (void 0 !== dB.material && !vB(dB.material, BT.length)) return JB;
              const pB = WB ? null === (DT = dB.extensions) || void 0 === DT ? void 0 : DT.KHR_draco_mesh_compression : void 0;
              if (pB) {
                if (4 !== yB) return "uses Draco-compressed points";
                if (!wB(BB, TB, pB.bufferView) || "object" !== typeof pB.attributes) return JB
              }
              const lB = dB.attributes;
              if ("object" !== typeof lB || null === lB) return JB;
              if (void 0 === lB.POSITION) return "has a primitive with no positions";
              if (!vB(lB.POSITION, jB.length)) return JB;
              const YB = jB[lB.POSITION].count;
              for (const [BB, TB] of Object.entries(lB)) {
                if (!vB(TB, jB.length)) return JB;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(BB)) return "uses skins";
                const dB = jB[TB],
                  VB = oB[BB];
                if (VB && (dB.componentType !== uB || dB.normalized || dB.type !== VB)) return `stores ${BB} as ${tB(dB)}`;
                const yB = LB[BB];
                if (yB && (dB.type !== yB.type || !yB.componentTypes.includes(dB.componentType) || dB.componentType === uB === !!dB.normalized)) return `stores ${BB} as ${tB(dB)}`;
                if (OB.has(BB) && dB.count !== YB) return "has vertex attributes of different lengths"
              }
              if (pB) {
                if (void 0 === dB.indices) return JB;
                for (const TB in pB.attributes)
                  if (OB.has(TB) && void 0 === lB[TB]) return JB;
                if (void 0 === pB.attributes.POSITION) return JB;
                const BB = vB(dB.indices, jB.length) ? jB[dB.indices].count : -1;
                if (0 === BB) return JB;
                if (-1 === gT) gT = pB.bufferView, oT = YB, kT = BB;
                else {
                  LT ??= new Map([
                    [gT, [oT, kT]]
                  ]);
                  const TB = LT.get(pB.bufferView);
                  if (TB && (TB[0] !== YB || TB[1] !== BB)) return JB;
                  LT.set(pB.bufferView, null !== TB && void 0 !== TB ? TB : [YB, BB])
                }
              }
              let gB = YB;
              if (void 0 !== dB.indices) {
                if (!vB(dB.indices, jB.length)) return JB;
                const BB = jB[dB.indices];
                if ("SCALAR" !== BB.type) return JB;
                if (5121 === BB.componentType) return "uses 8-bit indices";
                var HT;
                if (5123 !== BB.componentType && 5125 !== BB.componentType) return `stores indices as ${null!==(HT=VB.g[BB.componentType])&&void 0!==HT?HT:BB.componentType}`;
                if (!pB && void 0 === BB.bufferView) return JB;
                gB = BB.count
              }
              if (4 === yB && gB % 3 !== 0) return JB
            }
          }
          let ET = 0,
            vT = 0,
            mT = 0;
          for (let VB = 0; VB < nB.length; VB++) {
            const BB = nB[VB].mesh;
            if (void 0 !== BB && lT.has(VB))
              for (const TB of eB[BB].primitives) mT++, ET += jB[TB.attributes.POSITION].count, void 0 !== TB.indices && (vT += jB[TB.indices].count)
          }
          const iT = null !== (ZB = null !== (XB = EB(ET, yB.vertices, "vertices")) && void 0 !== XB ? XB : EB(vT, yB.indices, "indices")) && void 0 !== ZB ? ZB : EB(mT, yB.primitives, "primitives");
          if (iT) return iT;
          for (const VB of BT) {
            var NT, tT;
            if (void 0 !== VB.emissiveTexture) return "uses an emissive texture";
            const TB = null !== (NT = VB.alphaMode) && void 0 !== NT ? NT : "OPAQUE";
            if ("OPAQUE" !== TB && "MASK" !== TB && "BLEND" !== TB) return JB;
            const dB = null === (tT = VB.pbrMetallicRoughness) || void 0 === tT ? void 0 : tT.baseColorTexture;
            if (dB) {
              var fT, sT, MT, zT, wT;
              const TB = null !== (fT = BB.extensionsUsed) && void 0 !== fT && fT.includes("KHR_texture_transform") ? null === (sT = dB.extensions) || void 0 === sT ? void 0 : sT.KHR_texture_transform : void 0;
              if (0 !== (null !== (MT = dB.texCoord) && void 0 !== MT ? MT : 0) || 0 !== (null !== (zT = null === TB || void 0 === TB ? void 0 : TB.texCoord) && void 0 !== zT ? zT : 0)) return "uses a second UV set";
              const VB = TT[dB.index];
              if (!VB || !vB(VB.source, dT.length) || void 0 !== VB.sampler && !vB(VB.sampler, null === (wT = BB.samplers) || void 0 === wT ? void 0 : wT.length)) return JB
            }
          }
          for (const VB of dT) {
            if (void 0 !== VB.uri) return YB;
            if (void 0 === VB.bufferView) return JB;
            const dB = wB(BB, TB, VB.bufferView);
            if (!dB) return JB;
            if ("image/png" !== VB.mimeType) {
              var UT, FT, KT;
              return `has ${MB(null!==(UT=null!==(FT={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(KT=VB.mimeType)&&void 0!==KT?KT:""])&&void 0!==FT?FT:VB.mimeType)&&void 0!==UT?UT:"untyped")} image`
            }
            if (!sB(dB)) return `has ${MB(fB(dB))} image`;
            const pB = new DataView(dB.buffer, dB.byteOffset, dB.byteLength),
              lB = pB.getUint32(16),
              gB = pB.getUint32(20);
            if (lB > yB.imageSide || gB > yB.imageSide) return `has a ${lB} \xd7 ${gB} image (the limit is ${yB.imageSide})`
          }
          return null
        }(BB, TB)
      } catch {
        return JB
      }
    }

    function rB(BB) {
      const TB = FB(BB.byteLength);
      if (TB) return TB;
      try {
        const {
          json: TB,
          bin: dB
        } = (0, VB.y)(BB);
        return KB(TB, dB)
      } catch (dB) {
        if (dB instanceof VB.n) return dB.reason;
        throw dB
      }
    }
  },
  8634: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => OB,
      g: () => LB,
      j: () => uB,
      l: () => pB,
      n: () => yB,
      r: () => DB,
      u: () => oB,
      v: () => kB,
      x: () => lB,
      y: () => gB
    });
    var VB = dB(8640);
    class yB extends Error {
      constructor(BB) {
        super(`GLB refused: it ${BB}`), this.reason = BB, this.name = "GlbRefused"
      }
    }
    class pB extends Error {
      constructor(BB) {
        super(BB), this.name = "GlbError"
      }
    }

    function lB(BB) {
      return Reflect.get(BB, "scene")
    }
    const JB = 5130562,
      YB = "is not a binary glTF 2.0 file";

    function gB(BB) {
      var TB;
      const dB = BB instanceof Uint8Array ? BB : new Uint8Array(BB),
        pB = (0, VB.e)(dB);
      if (null === pB) throw new yB(YB);
      const lB = pB.json,
        {
          jsonEnd: gB,
          length: oB
        } = pB,
        kB = new DataView(dB.buffer, dB.byteOffset, dB.byteLength);
      let LB = -1,
        OB = 0;
      for (let HB = gB; HB < oB;) {
        if (HB + 8 > oB) throw new yB(YB);
        const BB = kB.getUint32(HB, !0),
          TB = kB.getUint32(HB + 4, !0);
        if (HB + 8 + BB > oB || TB === VB.c || TB === JB && -1 !== LB) throw new yB(YB);
        TB === JB && (LB = HB + 8, OB = BB), HB += 8 + BB
      }
      let DB = null;
      const uB = null === (TB = lB.buffers) || void 0 === TB ? void 0 : TB[0];
      if (-1 !== LB && uB && void 0 === uB.uri) {
        if (!(uB.byteLength >= 0) || uB.byteLength > OB) throw new yB(YB);
        DB = new Uint8Array(dB.buffer, dB.byteOffset + LB, uB.byteLength)
      }
      return {
        json: lB,
        bin: DB,
        fileBytes: dB.byteLength
      }
    }

    function oB(BB) {
      const TB = BB.slice(BB.indexOf(",") + 1),
        dB = Uint8Array.fromBase64;
      if (dB) return dB(TB).buffer;
      const VB = atob(TB),
        yB = new Uint8Array(VB.length);
      for (let pB = 0; pB < VB.length; pB++) yB[pB] = VB.charCodeAt(pB);
      return yB.buffer
    }
    async function kB(BB) {
      if (BB.startsWith("data:")) return oB(BB);
      const TB = await fetch(BB);
      if (!TB.ok) throw new pB(`fetching ${BB} failed: ${TB.status} ${TB.statusText}`);
      return await TB.arrayBuffer()
    }
    const LB = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      OB = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      DB = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      uB = [
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
  8640: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB,
      e: () => pB,
      f: () => lB
    });
    const VB = 1179937895,
      yB = 1313821514;

    function pB(BB) {
      const TB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      if (BB.byteLength < 20 || TB.getUint32(0, !0) !== VB || 2 !== TB.getUint32(4, !0)) return null;
      const dB = Math.min(TB.getUint32(8, !0), BB.byteLength),
        pB = TB.getUint32(12, !0);
      if (TB.getUint32(16, !0) !== yB || 20 + pB > dB) return null;
      let lB;
      try {
        lB = JSON.parse((new TextDecoder).decode(BB.subarray(20, 20 + pB)))
      } catch {
        return null
      }
      return "object" === typeof lB && null !== lB ? {
        json: lB,
        jsonEnd: 20 + pB,
        length: dB
      } : null
    }

    function lB(BB) {
      var TB;
      const dB = null === (TB = pB(BB)) || void 0 === TB ? void 0 : TB.json;
      if (void 0 === dB || !Array.isArray(dB.extensionsUsed) || !dB.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const VB = dB.meshes;
      return Array.isArray(VB) && VB.some((BB => {
        const TB = null === BB || void 0 === BB ? void 0 : BB.primitives;
        return Array.isArray(TB) && TB.some((BB => {
          const TB = null === BB || void 0 === BB ? void 0 : BB.extensions;
          return null != (null === TB || void 0 === TB ? void 0 : TB.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);