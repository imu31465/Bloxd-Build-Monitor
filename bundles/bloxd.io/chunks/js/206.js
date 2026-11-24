export const id = 206;
export const ids = [206];
export const modules = {
  34319: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => FB,
      f: () => DB,
      j: () => HB
    });
    var QB = zB(34325);
    const nB = {
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
      dB = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      IB = 1048576,
      NB = "is not a binary glTF 2.0 file",
      uB = "loads data from outside the file",
      UB = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      aB = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      pB = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      rB = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: pB,
        TEXCOORD_2: pB,
        TEXCOORD_3: pB,
        TEXCOORD_4: pB,
        TEXCOORD_5: pB
      },
      sB = new Set(QB.j.map((BB => {
        let [jB] = BB;
        return jB
      }))),
      JB = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      mB = 5126;

    function yB(BB) {
      return BB.toLocaleString("en-US")
    }

    function kB(BB, jB, zB) {
      return BB > jB ? `has ${yB(BB)} ${zB} (the limit is ${yB(jB)})` : null
    }

    function GB(BB, jB) {
      return Number.isInteger(BB) && BB >= 0 && BB < (null !== jB && void 0 !== jB ? jB : 0)
    }

    function LB(BB) {
      return Number.isInteger(BB) && BB >= 0
    }

    function gB(BB, jB) {
      return void 0 !== BB && (!Array.isArray(BB) || BB.length > jB)
    }

    function tB(BB, jB) {
      return "object" === typeof BB && null !== BB && Object.keys(BB).length > jB
    }

    function SB(BB) {
      var jB;
      return `${BB.normalized?"normalized ":""}${null!==(jB=QB.g[BB.componentType])&&void 0!==jB?jB:BB.componentType} ${BB.type}`
    }

    function MB(BB) {
      const jB = jB => {
        var zB;
        return null !== (zB = BB[jB]) && void 0 !== zB ? zB : -1
      };
      return 255 === jB(0) && 216 === jB(1) ? "JPEG" : 82 === jB(0) && 73 === jB(1) && 87 === jB(8) && 69 === jB(9) ? "WebP" : 171 === jB(0) && 75 === jB(1) && 84 === jB(2) && 88 === jB(3) ? "KTX2" : "non-PNG"
    }

    function EB(BB) {
      return BB.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((jB, zB) => BB[zB] === jB)) && 73 === BB[12] && 72 === BB[13] && 68 === BB[14] && 82 === BB[15]
    }

    function iB(BB) {
      return /^[aeiou]/i.test(BB) ? `an ${BB}` : `a ${BB}`
    }

    function qB(BB) {
      const jB = BB.byteStride;
      return void 0 === jB || Number.isInteger(jB) && jB >= 4 && jB <= 252 && jB % 4 === 0
    }

    function fB(BB, jB, zB) {
      var QB, nB;
      const dB = null === (QB = BB.bufferViews) || void 0 === QB ? void 0 : QB[zB];
      if (!dB || !jB || 0 !== dB.buffer) return null;
      const IB = null !== (nB = dB.byteOffset) && void 0 !== nB ? nB : 0;
      return !LB(IB) || !LB(dB.byteLength) || IB + dB.byteLength > jB.byteLength ? null : jB.subarray(IB, IB + dB.byteLength)
    }

    function oB(BB, jB) {
      var zB, nB, dB;
      const IB = QB.p[jB.type],
        NB = QB.e[jB.componentType];
      if (!IB || !NB || !Number.isInteger(jB.count) || jB.count < 0) return !1;
      if (void 0 === jB.bufferView) return !0;
      const uB = null === (zB = BB.bufferViews) || void 0 === zB ? void 0 : zB[jB.bufferView],
        UB = null !== (nB = jB.byteOffset) && void 0 !== nB ? nB : 0;
      if (!uB || !LB(UB) || UB % NB !== 0) return !1;
      const aB = IB * NB,
        pB = null !== (dB = uB.byteStride) && void 0 !== dB ? dB : aB;
      if (pB < aB) return !1;
      return (0 === jB.count ? 0 : UB + pB * (jB.count - 1) + aB) <= uB.byteLength
    }

    function HB(BB) {
      return BB > nB.fileBytes ? `is ${(BB/IB).toFixed(1)} MiB (the limit is ${nB.fileBytes/IB} MiB)` : null
    }

    function DB(BB, jB) {
      try {
        return function(BB, jB) {
          var zB, IB, pB, yB, LB, HB, DB, FB, YB, VB, hB, XB, ZB, AB, TB, PB, WB;
          const eB = Array.isArray(BB.extensionsUsed) && BB.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(BB, jB) {
              var zB, QB;
              const {
                items: nB,
                perFile: IB,
                surfaces: NB,
                few: uB,
                bounds: UB,
                attributeMembers: aB
              } = dB;
              if (gB(BB.extensionsRequired, uB) || gB(BB.animations, 1 / 0) || gB(BB.skins, 1 / 0)) return !0;
              if (null !== (zB = BB.animations) && void 0 !== zB && zB.length || null !== (QB = BB.skins) && void 0 !== QB && QB.length) return !1;
              if ([
                  [BB.buffers, uB],
                  [BB.scenes, uB],
                  [BB.bufferViews, nB],
                  [BB.accessors, nB],
                  [BB.nodes, nB],
                  [BB.meshes, nB],
                  [BB.materials, NB],
                  [BB.textures, NB],
                  [BB.samplers, NB],
                  [BB.images, NB]
                ].some((BB => {
                  let [jB, zB] = BB;
                  return gB(jB, zB)
                }))) return !0;
              for (const dB of null !== (pB = BB.accessors) && void 0 !== pB ? pB : []) {
                var pB, rB, sB;
                if (Number.isInteger(dB.count) && (!Number.isSafeInteger(dB.count) || Object.is(dB.count, -0)) || gB(null !== (rB = dB.min) && void 0 !== rB ? rB : void 0, UB) || gB(null !== (sB = dB.max) && void 0 !== sB ? sB : void 0, UB)) return !0
              }
              for (const dB of null !== (JB = BB.scenes) && void 0 !== JB ? JB : []) {
                var JB;
                if (gB(dB.nodes, nB)) return !0
              }
              let mB = 0;
              for (const dB of null !== (yB = BB.nodes) && void 0 !== yB ? yB : []) {
                var yB, kB, GB;
                if (gB(dB.children, IB)) return !0;
                mB += null !== (kB = null === (GB = dB.children) || void 0 === GB ? void 0 : GB.length) && void 0 !== kB ? kB : 0
              }
              if (mB > IB) return !0;
              let LB = 0;
              for (const dB of null !== (SB = BB.meshes) && void 0 !== SB ? SB : []) {
                var SB;
                if (!Array.isArray(dB.primitives)) return !0;
                if (LB += dB.primitives.length, LB > IB) return !0;
                for (const BB of dB.primitives) {
                  var MB;
                  const zB = jB ? null === (MB = BB.extensions) || void 0 === MB ? void 0 : MB.KHR_draco_mesh_compression : void 0;
                  if (tB(BB.attributes, aB) || tB(null === zB || void 0 === zB ? void 0 : zB.attributes, aB)) return !0
                }
              }
              return !1
            }(BB, eB)) return NB;
          const lB = null === (zB = BB.asset) || void 0 === zB ? void 0 : zB.version;
          if ("string" !== typeof lB || !/^2\.\d+/.test(lB)) return `uses glTF version ${null!==lB&&void 0!==lB?lB:"(none)"}`;
          const wB = null === (IB = BB.asset) || void 0 === IB ? void 0 : IB.minVersion;
          if (void 0 !== wB && "2.0" !== wB) return `uses glTF version ${wB}`;
          for (const QB of null !== (xB = BB.extensionsRequired) && void 0 !== xB ? xB : []) {
            var xB;
            if (!UB.has(QB)) return `requires the glTF extension ${QB}`
          }
          if (null !== (pB = BB.animations) && void 0 !== pB && pB.length) return "has animations";
          if (null !== (yB = BB.skins) && void 0 !== yB && yB.length) return "uses skins";
          const KB = null !== (LB = BB.buffers) && void 0 !== LB ? LB : [];
          for (const [QB, nB] of KB.entries()) {
            if (void 0 !== nB.uri) return uB;
            if (QB > 0 || !jB) return NB
          }
          for (const [QB, nB] of(null !== (CB = BB.bufferViews) && void 0 !== CB ? CB : []).entries()) {
            var CB;
            if (!fB(BB, jB, QB) || !qB(nB)) return NB
          }
          const cB = null !== (HB = BB.accessors) && void 0 !== HB ? HB : [];
          for (const QB of cB) {
            if (void 0 !== QB.sparse) return "uses sparse accessors";
            const jB = Number.isInteger(QB.count) ? kB(QB.count, nB.accessorElements, "elements in an accessor") : null;
            if (jB) return jB;
            if (!oB(BB, QB)) return NB
          }
          const bB = null !== (DB = BB.scenes) && void 0 !== DB ? DB : [];
          if (1 !== bB.length) return `has ${bB.length} scenes`;
          const vB = (0, QB.y)(BB);
          if (void 0 !== vB && 0 !== vB) return NB;
          const RB = null !== (FB = BB.nodes) && void 0 !== FB ? FB : [],
            OB = null !== (YB = BB.meshes) && void 0 !== YB ? YB : [],
            Bj = null !== (VB = BB.materials) && void 0 !== VB ? VB : [],
            jj = null !== (hB = BB.textures) && void 0 !== hB ? hB : [],
            zj = null !== (XB = BB.images) && void 0 !== XB ? XB : [],
            Qj = null !== (ZB = null !== (AB = null !== (TB = kB(RB.length, nB.nodes, "nodes")) && void 0 !== TB ? TB : kB(OB.length, nB.meshes, "meshes")) && void 0 !== AB ? AB : kB(Bj.length, nB.materials, "materials")) && void 0 !== ZB ? ZB : kB(zj.length, nB.images, "images");
          if (Qj) return Qj;
          const nj = new Set;
          for (const QB of RB)
            for (const BB of null !== (dj = QB.children) && void 0 !== dj ? dj : []) {
              var dj;
              if (!GB(BB, RB.length) || nj.has(BB)) return NB;
              nj.add(BB)
            }
          const Ij = new Set,
            Nj = BB => {
              var jB;
              return !Ij.has(BB) && (Ij.add(BB), (null !== (jB = RB[BB].children) && void 0 !== jB ? jB : []).every(Nj))
            };
          for (const QB of null !== (uj = bB[0].nodes) && void 0 !== uj ? uj : []) {
            var uj;
            if (!GB(QB, RB.length) || nj.has(QB) || !Nj(QB)) return NB
          }
          for (const QB of RB) {
            if (void 0 !== QB.matrix) return "uses node matrices";
            if (void 0 !== QB.skin) return "uses skins";
            if (void 0 !== QB.weights) return "uses morph targets";
            if (void 0 !== QB.mesh && !GB(QB.mesh, OB.length)) return NB;
            const BB = [
              [QB.translation, 3],
              [QB.rotation, 4],
              [QB.scale, 3]
            ];
            for (const [jB, zB] of BB)
              if (void 0 !== jB && (!Array.isArray(jB) || jB.length !== zB || !jB.every((BB => Number.isFinite(BB))))) return NB
          }
          let Uj = -1,
            aj = 0,
            pj = 0,
            rj = null;
          for (const nB of OB) {
            if (void 0 !== nB.weights) return "uses morph targets";
            if (0 === nB.primitives.length) return NB;
            for (const zB of nB.primitives) {
              var sj, Jj;
              const nB = null !== (sj = zB.mode) && void 0 !== sj ? sj : 4;
              var mj;
              if (4 !== nB && 0 !== nB) return `uses ${null!==(mj=JB[nB])&&void 0!==mj?mj:`mode ${nB}`} primitives`;
              if (void 0 !== zB.targets) return "uses morph targets";
              if (void 0 !== zB.material && !GB(zB.material, Bj.length)) return NB;
              const dB = eB ? null === (Jj = zB.extensions) || void 0 === Jj ? void 0 : Jj.KHR_draco_mesh_compression : void 0;
              if (dB) {
                if (4 !== nB) return "uses Draco-compressed points";
                if (!fB(BB, jB, dB.bufferView) || "object" !== typeof dB.attributes) return NB
              }
              const IB = zB.attributes;
              if ("object" !== typeof IB || null === IB) return NB;
              if (void 0 === IB.POSITION) return "has a primitive with no positions";
              if (!GB(IB.POSITION, cB.length)) return NB;
              const uB = cB[IB.POSITION].count;
              for (const [BB, jB] of Object.entries(IB)) {
                if (!GB(jB, cB.length)) return NB;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(BB)) return "uses skins";
                const zB = cB[jB],
                  QB = aB[BB];
                if (QB && (zB.componentType !== mB || zB.normalized || zB.type !== QB)) return `stores ${BB} as ${SB(zB)}`;
                const nB = rB[BB];
                if (nB && (zB.type !== nB.type || !nB.componentTypes.includes(zB.componentType) || zB.componentType === mB === !!zB.normalized)) return `stores ${BB} as ${SB(zB)}`;
                if (sB.has(BB) && zB.count !== uB) return "has vertex attributes of different lengths"
              }
              if (dB) {
                if (void 0 === zB.indices) return NB;
                for (const jB in dB.attributes)
                  if (sB.has(jB) && void 0 === IB[jB]) return NB;
                if (void 0 === dB.attributes.POSITION) return NB;
                const BB = GB(zB.indices, cB.length) ? cB[zB.indices].count : -1;
                if (0 === BB) return NB;
                if (-1 === Uj) Uj = dB.bufferView, aj = uB, pj = BB;
                else {
                  rj ??= new Map([
                    [Uj, [aj, pj]]
                  ]);
                  const jB = rj.get(dB.bufferView);
                  if (jB && (jB[0] !== uB || jB[1] !== BB)) return NB;
                  rj.set(dB.bufferView, null !== jB && void 0 !== jB ? jB : [uB, BB])
                }
              }
              let UB = uB;
              if (void 0 !== zB.indices) {
                if (!GB(zB.indices, cB.length)) return NB;
                const BB = cB[zB.indices];
                if ("SCALAR" !== BB.type) return NB;
                if (5121 === BB.componentType) return "uses 8-bit indices";
                var yj;
                if (5123 !== BB.componentType && 5125 !== BB.componentType) return `stores indices as ${null!==(yj=QB.g[BB.componentType])&&void 0!==yj?yj:BB.componentType}`;
                if (!dB && void 0 === BB.bufferView) return NB;
                UB = BB.count
              }
              if (4 === nB && UB % 3 !== 0) return NB
            }
          }
          let kj = 0,
            Gj = 0,
            Lj = 0;
          for (let QB = 0; QB < RB.length; QB++) {
            const BB = RB[QB].mesh;
            if (void 0 !== BB && Ij.has(QB))
              for (const jB of OB[BB].primitives) Lj++, kj += cB[jB.attributes.POSITION].count, void 0 !== jB.indices && (Gj += cB[jB.indices].count)
          }
          const gj = null !== (PB = null !== (WB = kB(kj, nB.vertices, "vertices")) && void 0 !== WB ? WB : kB(Gj, nB.indices, "indices")) && void 0 !== PB ? PB : kB(Lj, nB.primitives, "primitives");
          if (gj) return gj;
          for (const QB of Bj) {
            var tj, Sj;
            if (void 0 !== QB.emissiveTexture) return "uses an emissive texture";
            const jB = null !== (tj = QB.alphaMode) && void 0 !== tj ? tj : "OPAQUE";
            if ("OPAQUE" !== jB && "MASK" !== jB && "BLEND" !== jB) return NB;
            const zB = null === (Sj = QB.pbrMetallicRoughness) || void 0 === Sj ? void 0 : Sj.baseColorTexture;
            if (zB) {
              var Mj, Ej, ij, qj, fj;
              const jB = null !== (Mj = BB.extensionsUsed) && void 0 !== Mj && Mj.includes("KHR_texture_transform") ? null === (Ej = zB.extensions) || void 0 === Ej ? void 0 : Ej.KHR_texture_transform : void 0;
              if (0 !== (null !== (ij = zB.texCoord) && void 0 !== ij ? ij : 0) || 0 !== (null !== (qj = null === jB || void 0 === jB ? void 0 : jB.texCoord) && void 0 !== qj ? qj : 0)) return "uses a second UV set";
              const QB = jj[zB.index];
              if (!QB || !GB(QB.source, zj.length) || void 0 !== QB.sampler && !GB(QB.sampler, null === (fj = BB.samplers) || void 0 === fj ? void 0 : fj.length)) return NB
            }
          }
          for (const QB of zj) {
            if (void 0 !== QB.uri) return uB;
            if (void 0 === QB.bufferView) return NB;
            const zB = fB(BB, jB, QB.bufferView);
            if (!zB) return NB;
            if ("image/png" !== QB.mimeType) {
              var oj, Hj, Dj;
              return `has ${iB(null!==(oj=null!==(Hj={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(Dj=QB.mimeType)&&void 0!==Dj?Dj:""])&&void 0!==Hj?Hj:QB.mimeType)&&void 0!==oj?oj:"untyped")} image`
            }
            if (!EB(zB)) return `has ${iB(MB(zB))} image`;
            const dB = new DataView(zB.buffer, zB.byteOffset, zB.byteLength),
              IB = dB.getUint32(16),
              UB = dB.getUint32(20);
            if (IB > nB.imageSide || UB > nB.imageSide) return `has a ${IB} \xd7 ${UB} image (the limit is ${nB.imageSide})`
          }
          return null
        }(BB, jB)
      } catch {
        return NB
      }
    }

    function FB(BB) {
      const jB = HB(BB.byteLength);
      if (jB) return jB;
      try {
        const {
          json: jB,
          bin: zB
        } = (0, QB.z)(BB);
        return DB(jB, zB)
      } catch (zB) {
        if (zB instanceof QB.n) return zB.reason;
        throw zB
      }
    }
  },
  34325: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => sB,
      g: () => rB,
      j: () => mB,
      l: () => dB,
      n: () => nB,
      p: () => JB,
      t: () => aB,
      v: () => pB,
      y: () => IB,
      z: () => UB
    });
    var QB = zB(34333);
    class nB extends Error {
      constructor(BB) {
        super(`GLB refused: it ${BB}`), this.reason = BB, this.name = "GlbRefused"
      }
    }
    class dB extends Error {
      constructor(BB) {
        super(BB), this.name = "GlbError"
      }
    }

    function IB(BB) {
      return Reflect.get(BB, "scene")
    }
    const NB = 5130562,
      uB = "is not a binary glTF 2.0 file";

    function UB(BB) {
      var jB;
      const zB = BB instanceof Uint8Array ? BB : new Uint8Array(BB),
        dB = (0, QB.h)(zB);
      if (null === dB) throw new nB(uB);
      const IB = dB.json,
        {
          jsonEnd: UB,
          length: aB
        } = dB,
        pB = new DataView(zB.buffer, zB.byteOffset, zB.byteLength);
      let rB = -1,
        sB = 0;
      for (let yB = UB; yB < aB;) {
        if (yB + 8 > aB) throw new nB(uB);
        const BB = pB.getUint32(yB, !0),
          jB = pB.getUint32(yB + 4, !0);
        if (yB + 8 + BB > aB || jB === QB.d || jB === NB && -1 !== rB) throw new nB(uB);
        jB === NB && (rB = yB + 8, sB = BB), yB += 8 + BB
      }
      let JB = null;
      const mB = null === (jB = IB.buffers) || void 0 === jB ? void 0 : jB[0];
      if (-1 !== rB && mB && void 0 === mB.uri) {
        if (!(mB.byteLength >= 0) || mB.byteLength > sB) throw new nB(uB);
        JB = new Uint8Array(zB.buffer, zB.byteOffset + rB, mB.byteLength)
      }
      return {
        json: IB,
        bin: JB,
        fileBytes: zB.byteLength
      }
    }

    function aB(BB) {
      const jB = BB.slice(BB.indexOf(",") + 1),
        zB = Uint8Array.fromBase64;
      if (zB) return zB(jB).buffer;
      const QB = atob(jB),
        nB = new Uint8Array(QB.length);
      for (let dB = 0; dB < QB.length; dB++) nB[dB] = QB.charCodeAt(dB);
      return nB.buffer
    }
    async function pB(BB) {
      if (BB.startsWith("data:")) return aB(BB);
      const jB = await fetch(BB);
      if (!jB.ok) throw new dB(`fetching ${BB} failed: ${jB.status} ${jB.statusText}`);
      return await jB.arrayBuffer()
    }
    const rB = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      sB = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      JB = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      mB = [
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
  34333: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      h: () => dB,
      l: () => IB
    });
    const QB = 1179937895,
      nB = 1313821514;

    function dB(BB) {
      const jB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      if (BB.byteLength < 20 || jB.getUint32(0, !0) !== QB || 2 !== jB.getUint32(4, !0)) return null;
      const zB = Math.min(jB.getUint32(8, !0), BB.byteLength),
        dB = jB.getUint32(12, !0);
      if (jB.getUint32(16, !0) !== nB || 20 + dB > zB) return null;
      let IB;
      try {
        IB = JSON.parse((new TextDecoder).decode(BB.subarray(20, 20 + dB)))
      } catch {
        return null
      }
      return "object" === typeof IB && null !== IB ? {
        json: IB,
        jsonEnd: 20 + dB,
        length: zB
      } : null
    }

    function IB(BB) {
      var jB;
      const zB = null === (jB = dB(BB)) || void 0 === jB ? void 0 : jB.json;
      if (void 0 === zB || !Array.isArray(zB.extensionsUsed) || !zB.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const QB = zB.meshes;
      return Array.isArray(QB) && QB.some((BB => {
        const jB = null === BB || void 0 === BB ? void 0 : BB.primitives;
        return Array.isArray(jB) && jB.some((BB => {
          const jB = null === BB || void 0 === BB ? void 0 : BB.extensions;
          return null != (null === jB || void 0 === jB ? void 0 : jB.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);