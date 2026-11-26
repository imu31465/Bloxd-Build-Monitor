export const id = 227;
export const ids = [227];
export const modules = {
  34869: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => IB,
      h: () => mB,
      j: () => uB
    });
    var YB = GB(34875);
    const DB = {
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
      QB = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      oB = 1048576,
      jB = "is not a binary glTF 2.0 file",
      yB = "loads data from outside the file",
      JB = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      MB = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      PB = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      zB = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: PB,
        TEXCOORD_2: PB,
        TEXCOORD_3: PB,
        TEXCOORD_4: PB,
        TEXCOORD_5: PB
      },
      lB = new Set(YB.e.map((BB => {
        let [OB] = BB;
        return OB
      }))),
      pB = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      qB = 5126;

    function ZB(BB) {
      return BB.toLocaleString("en-US")
    }

    function NB(BB, OB, GB) {
      return BB > OB ? `has ${ZB(BB)} ${GB} (the limit is ${ZB(OB)})` : null
    }

    function RB(BB, OB) {
      return Number.isInteger(BB) && BB >= 0 && BB < (null !== OB && void 0 !== OB ? OB : 0)
    }

    function WB(BB) {
      return Number.isInteger(BB) && BB >= 0
    }

    function AB(BB, OB) {
      return void 0 !== BB && (!Array.isArray(BB) || BB.length > OB)
    }

    function VB(BB, OB) {
      return "object" === typeof BB && null !== BB && Object.keys(BB).length > OB
    }

    function SB(BB) {
      var OB;
      return `${BB.normalized?"normalized ":""}${null!==(OB=YB.d[BB.componentType])&&void 0!==OB?OB:BB.componentType} ${BB.type}`
    }

    function nB(BB) {
      const OB = OB => {
        var GB;
        return null !== (GB = BB[OB]) && void 0 !== GB ? GB : -1
      };
      return 255 === OB(0) && 216 === OB(1) ? "JPEG" : 82 === OB(0) && 73 === OB(1) && 87 === OB(8) && 69 === OB(9) ? "WebP" : 171 === OB(0) && 75 === OB(1) && 84 === OB(2) && 88 === OB(3) ? "KTX2" : "non-PNG"
    }

    function UB(BB) {
      return BB.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((OB, GB) => BB[GB] === OB)) && 73 === BB[12] && 72 === BB[13] && 68 === BB[14] && 82 === BB[15]
    }

    function fB(BB) {
      return /^[aeiou]/i.test(BB) ? `an ${BB}` : `a ${BB}`
    }

    function kB(BB) {
      const OB = BB.byteStride;
      return void 0 === OB || Number.isInteger(OB) && OB >= 4 && OB <= 252 && OB % 4 === 0
    }

    function dB(BB, OB, GB) {
      var YB, DB;
      const QB = null === (YB = BB.bufferViews) || void 0 === YB ? void 0 : YB[GB];
      if (!QB || !OB || 0 !== QB.buffer) return null;
      const oB = null !== (DB = QB.byteOffset) && void 0 !== DB ? DB : 0;
      return !WB(oB) || !WB(QB.byteLength) || oB + QB.byteLength > OB.byteLength ? null : OB.subarray(oB, oB + QB.byteLength)
    }

    function KB(BB, OB) {
      var GB, DB, QB;
      const oB = YB.h[OB.type],
        jB = YB.b[OB.componentType];
      if (!oB || !jB || !Number.isInteger(OB.count) || OB.count < 0) return !1;
      if (void 0 === OB.bufferView) return !0;
      const yB = null === (GB = BB.bufferViews) || void 0 === GB ? void 0 : GB[OB.bufferView],
        JB = null !== (DB = OB.byteOffset) && void 0 !== DB ? DB : 0;
      if (!yB || !WB(JB) || JB % jB !== 0) return !1;
      const MB = oB * jB,
        PB = null !== (QB = yB.byteStride) && void 0 !== QB ? QB : MB;
      if (PB < MB) return !1;
      return (0 === OB.count ? 0 : JB + PB * (OB.count - 1) + MB) <= yB.byteLength
    }

    function uB(BB) {
      return BB > DB.fileBytes ? `is ${(BB/oB).toFixed(1)} MiB (the limit is ${DB.fileBytes/oB} MiB)` : null
    }

    function mB(BB, OB) {
      try {
        return function(BB, OB) {
          var GB, oB, PB, ZB, WB, uB, mB, IB, FB, iB, LB, gB, rB, XB, wB, EB, cB;
          const hB = Array.isArray(BB.extensionsUsed) && BB.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(BB, OB) {
              var GB, YB;
              const {
                items: DB,
                perFile: oB,
                surfaces: jB,
                few: yB,
                bounds: JB,
                attributeMembers: MB
              } = QB;
              if (AB(BB.extensionsRequired, yB) || AB(BB.animations, 1 / 0) || AB(BB.skins, 1 / 0)) return !0;
              if (null !== (GB = BB.animations) && void 0 !== GB && GB.length || null !== (YB = BB.skins) && void 0 !== YB && YB.length) return !1;
              if ([
                  [BB.buffers, yB],
                  [BB.scenes, yB],
                  [BB.bufferViews, DB],
                  [BB.accessors, DB],
                  [BB.nodes, DB],
                  [BB.meshes, DB],
                  [BB.materials, jB],
                  [BB.textures, jB],
                  [BB.samplers, jB],
                  [BB.images, jB]
                ].some((BB => {
                  let [OB, GB] = BB;
                  return AB(OB, GB)
                }))) return !0;
              for (const QB of null !== (PB = BB.accessors) && void 0 !== PB ? PB : []) {
                var PB, zB, lB;
                if (Number.isInteger(QB.count) && (!Number.isSafeInteger(QB.count) || Object.is(QB.count, -0)) || AB(null !== (zB = QB.min) && void 0 !== zB ? zB : void 0, JB) || AB(null !== (lB = QB.max) && void 0 !== lB ? lB : void 0, JB)) return !0
              }
              for (const QB of null !== (pB = BB.scenes) && void 0 !== pB ? pB : []) {
                var pB;
                if (AB(QB.nodes, DB)) return !0
              }
              let qB = 0;
              for (const QB of null !== (ZB = BB.nodes) && void 0 !== ZB ? ZB : []) {
                var ZB, NB, RB;
                if (AB(QB.children, oB)) return !0;
                qB += null !== (NB = null === (RB = QB.children) || void 0 === RB ? void 0 : RB.length) && void 0 !== NB ? NB : 0
              }
              if (qB > oB) return !0;
              let WB = 0;
              for (const QB of null !== (SB = BB.meshes) && void 0 !== SB ? SB : []) {
                var SB;
                if (!Array.isArray(QB.primitives)) return !0;
                if (WB += QB.primitives.length, WB > oB) return !0;
                for (const BB of QB.primitives) {
                  var nB;
                  const GB = OB ? null === (nB = BB.extensions) || void 0 === nB ? void 0 : nB.KHR_draco_mesh_compression : void 0;
                  if (VB(BB.attributes, MB) || VB(null === GB || void 0 === GB ? void 0 : GB.attributes, MB)) return !0
                }
              }
              return !1
            }(BB, hB)) return jB;
          const aB = null === (GB = BB.asset) || void 0 === GB ? void 0 : GB.version;
          if ("string" !== typeof aB || !/^2\.\d+/.test(aB)) return `uses glTF version ${null!==aB&&void 0!==aB?aB:"(none)"}`;
          const eB = null === (oB = BB.asset) || void 0 === oB ? void 0 : oB.minVersion;
          if (void 0 !== eB && "2.0" !== eB) return `uses glTF version ${eB}`;
          for (const YB of null !== (TB = BB.extensionsRequired) && void 0 !== TB ? TB : []) {
            var TB;
            if (!JB.has(YB)) return `requires the glTF extension ${YB}`
          }
          if (null !== (PB = BB.animations) && void 0 !== PB && PB.length) return "has animations";
          if (null !== (ZB = BB.skins) && void 0 !== ZB && ZB.length) return "uses skins";
          const bB = null !== (WB = BB.buffers) && void 0 !== WB ? WB : [];
          for (const [YB, DB] of bB.entries()) {
            if (void 0 !== DB.uri) return yB;
            if (YB > 0 || !OB) return jB
          }
          for (const [YB, DB] of(null !== (CB = BB.bufferViews) && void 0 !== CB ? CB : []).entries()) {
            var CB;
            if (!dB(BB, OB, YB) || !kB(DB)) return jB
          }
          const HB = null !== (uB = BB.accessors) && void 0 !== uB ? uB : [];
          for (const YB of HB) {
            if (void 0 !== YB.sparse) return "uses sparse accessors";
            const OB = Number.isInteger(YB.count) ? NB(YB.count, DB.accessorElements, "elements in an accessor") : null;
            if (OB) return OB;
            if (!KB(BB, YB)) return jB
          }
          const vB = null !== (mB = BB.scenes) && void 0 !== mB ? mB : [];
          if (1 !== vB.length) return `has ${vB.length} scenes`;
          const sB = (0, YB.n)(BB);
          if (void 0 !== sB && 0 !== sB) return jB;
          const xB = null !== (IB = BB.nodes) && void 0 !== IB ? IB : [],
            tB = null !== (FB = BB.meshes) && void 0 !== FB ? FB : [],
            BO = null !== (iB = BB.materials) && void 0 !== iB ? iB : [],
            OO = null !== (LB = BB.textures) && void 0 !== LB ? LB : [],
            GO = null !== (gB = BB.images) && void 0 !== gB ? gB : [],
            YO = null !== (rB = null !== (XB = null !== (wB = NB(xB.length, DB.nodes, "nodes")) && void 0 !== wB ? wB : NB(tB.length, DB.meshes, "meshes")) && void 0 !== XB ? XB : NB(BO.length, DB.materials, "materials")) && void 0 !== rB ? rB : NB(GO.length, DB.images, "images");
          if (YO) return YO;
          const DO = new Set;
          for (const YB of xB)
            for (const BB of null !== (QO = YB.children) && void 0 !== QO ? QO : []) {
              var QO;
              if (!RB(BB, xB.length) || DO.has(BB)) return jB;
              DO.add(BB)
            }
          const oO = new Set,
            jO = BB => {
              var OB;
              return !oO.has(BB) && (oO.add(BB), (null !== (OB = xB[BB].children) && void 0 !== OB ? OB : []).every(jO))
            };
          for (const YB of null !== (yO = vB[0].nodes) && void 0 !== yO ? yO : []) {
            var yO;
            if (!RB(YB, xB.length) || DO.has(YB) || !jO(YB)) return jB
          }
          for (const YB of xB) {
            if (void 0 !== YB.matrix) return "uses node matrices";
            if (void 0 !== YB.skin) return "uses skins";
            if (void 0 !== YB.weights) return "uses morph targets";
            if (void 0 !== YB.mesh && !RB(YB.mesh, tB.length)) return jB;
            const BB = [
              [YB.translation, 3],
              [YB.rotation, 4],
              [YB.scale, 3]
            ];
            for (const [OB, GB] of BB)
              if (void 0 !== OB && (!Array.isArray(OB) || OB.length !== GB || !OB.every((BB => Number.isFinite(BB))))) return jB
          }
          let JO = -1,
            MO = 0,
            PO = 0,
            zO = null;
          for (const DB of tB) {
            if (void 0 !== DB.weights) return "uses morph targets";
            if (0 === DB.primitives.length) return jB;
            for (const GB of DB.primitives) {
              var lO, pO;
              const DB = null !== (lO = GB.mode) && void 0 !== lO ? lO : 4;
              var qO;
              if (4 !== DB && 0 !== DB) return `uses ${null!==(qO=pB[DB])&&void 0!==qO?qO:`mode ${DB}`} primitives`;
              if (void 0 !== GB.targets) return "uses morph targets";
              if (void 0 !== GB.material && !RB(GB.material, BO.length)) return jB;
              const QB = hB ? null === (pO = GB.extensions) || void 0 === pO ? void 0 : pO.KHR_draco_mesh_compression : void 0;
              if (QB) {
                if (4 !== DB) return "uses Draco-compressed points";
                if (!dB(BB, OB, QB.bufferView) || "object" !== typeof QB.attributes) return jB
              }
              const oB = GB.attributes;
              if ("object" !== typeof oB || null === oB) return jB;
              if (void 0 === oB.POSITION) return "has a primitive with no positions";
              if (!RB(oB.POSITION, HB.length)) return jB;
              const yB = HB[oB.POSITION].count;
              for (const [BB, OB] of Object.entries(oB)) {
                if (!RB(OB, HB.length)) return jB;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(BB)) return "uses skins";
                const GB = HB[OB],
                  YB = MB[BB];
                if (YB && (GB.componentType !== qB || GB.normalized || GB.type !== YB)) return `stores ${BB} as ${SB(GB)}`;
                const DB = zB[BB];
                if (DB && (GB.type !== DB.type || !DB.componentTypes.includes(GB.componentType) || GB.componentType === qB === !!GB.normalized)) return `stores ${BB} as ${SB(GB)}`;
                if (lB.has(BB) && GB.count !== yB) return "has vertex attributes of different lengths"
              }
              if (QB) {
                if (void 0 === GB.indices) return jB;
                for (const OB in QB.attributes)
                  if (lB.has(OB) && void 0 === oB[OB]) return jB;
                if (void 0 === QB.attributes.POSITION) return jB;
                const BB = RB(GB.indices, HB.length) ? HB[GB.indices].count : -1;
                if (0 === BB) return jB;
                if (-1 === JO) JO = QB.bufferView, MO = yB, PO = BB;
                else {
                  zO ??= new Map([
                    [JO, [MO, PO]]
                  ]);
                  const OB = zO.get(QB.bufferView);
                  if (OB && (OB[0] !== yB || OB[1] !== BB)) return jB;
                  zO.set(QB.bufferView, null !== OB && void 0 !== OB ? OB : [yB, BB])
                }
              }
              let JB = yB;
              if (void 0 !== GB.indices) {
                if (!RB(GB.indices, HB.length)) return jB;
                const BB = HB[GB.indices];
                if ("SCALAR" !== BB.type) return jB;
                if (5121 === BB.componentType) return "uses 8-bit indices";
                var ZO;
                if (5123 !== BB.componentType && 5125 !== BB.componentType) return `stores indices as ${null!==(ZO=YB.d[BB.componentType])&&void 0!==ZO?ZO:BB.componentType}`;
                if (!QB && void 0 === BB.bufferView) return jB;
                JB = BB.count
              }
              if (4 === DB && JB % 3 !== 0) return jB
            }
          }
          let NO = 0,
            RO = 0,
            WO = 0;
          for (let YB = 0; YB < xB.length; YB++) {
            const BB = xB[YB].mesh;
            if (void 0 !== BB && oO.has(YB))
              for (const OB of tB[BB].primitives) WO++, NO += HB[OB.attributes.POSITION].count, void 0 !== OB.indices && (RO += HB[OB.indices].count)
          }
          const AO = null !== (EB = null !== (cB = NB(NO, DB.vertices, "vertices")) && void 0 !== cB ? cB : NB(RO, DB.indices, "indices")) && void 0 !== EB ? EB : NB(WO, DB.primitives, "primitives");
          if (AO) return AO;
          for (const YB of BO) {
            var VO, SO;
            if (void 0 !== YB.emissiveTexture) return "uses an emissive texture";
            const OB = null !== (VO = YB.alphaMode) && void 0 !== VO ? VO : "OPAQUE";
            if ("OPAQUE" !== OB && "MASK" !== OB && "BLEND" !== OB) return jB;
            const GB = null === (SO = YB.pbrMetallicRoughness) || void 0 === SO ? void 0 : SO.baseColorTexture;
            if (GB) {
              var nO, UO, fO, kO, dO;
              const OB = null !== (nO = BB.extensionsUsed) && void 0 !== nO && nO.includes("KHR_texture_transform") ? null === (UO = GB.extensions) || void 0 === UO ? void 0 : UO.KHR_texture_transform : void 0;
              if (0 !== (null !== (fO = GB.texCoord) && void 0 !== fO ? fO : 0) || 0 !== (null !== (kO = null === OB || void 0 === OB ? void 0 : OB.texCoord) && void 0 !== kO ? kO : 0)) return "uses a second UV set";
              const YB = OO[GB.index];
              if (!YB || !RB(YB.source, GO.length) || void 0 !== YB.sampler && !RB(YB.sampler, null === (dO = BB.samplers) || void 0 === dO ? void 0 : dO.length)) return jB
            }
          }
          for (const YB of GO) {
            if (void 0 !== YB.uri) return yB;
            if (void 0 === YB.bufferView) return jB;
            const GB = dB(BB, OB, YB.bufferView);
            if (!GB) return jB;
            if ("image/png" !== YB.mimeType) {
              var KO, uO, mO;
              return `has ${fB(null!==(KO=null!==(uO={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(mO=YB.mimeType)&&void 0!==mO?mO:""])&&void 0!==uO?uO:YB.mimeType)&&void 0!==KO?KO:"untyped")} image`
            }
            if (!UB(GB)) return `has ${fB(nB(GB))} image`;
            const QB = new DataView(GB.buffer, GB.byteOffset, GB.byteLength),
              oB = QB.getUint32(16),
              JB = QB.getUint32(20);
            if (oB > DB.imageSide || JB > DB.imageSide) return `has a ${oB} \xd7 ${JB} image (the limit is ${DB.imageSide})`
          }
          return null
        }(BB, OB)
      } catch {
        return jB
      }
    }

    function IB(BB) {
      const OB = uB(BB.byteLength);
      if (OB) return OB;
      try {
        const {
          json: OB,
          bin: GB
        } = (0, YB.r)(BB);
        return mB(OB, GB)
      } catch (GB) {
        if (GB instanceof YB.g) return GB.reason;
        throw GB
      }
    }
  },
  34875: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => pB,
      d: () => lB,
      e: () => ZB,
      f: () => oB,
      g: () => QB,
      h: () => qB,
      k: () => PB,
      m: () => zB,
      n: () => jB,
      r: () => MB
    });
    const YB = 1179937895,
      DB = 1313821514;
    class QB extends Error {
      constructor(BB) {
        super(`GLB refused: it ${BB}`), this.reason = BB, this.name = "GlbRefused"
      }
    }
    class oB extends Error {
      constructor(BB) {
        super(BB), this.name = "GlbError"
      }
    }

    function jB(BB) {
      return Reflect.get(BB, "scene")
    }
    const yB = 5130562,
      JB = "is not a binary glTF 2.0 file";

    function MB(BB) {
      var OB;
      const GB = BB instanceof Uint8Array ? BB : new Uint8Array(BB),
        oB = function(BB) {
          const OB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
          if (BB.byteLength < 20 || OB.getUint32(0, !0) !== YB || 2 !== OB.getUint32(4, !0)) return null;
          const GB = Math.min(OB.getUint32(8, !0), BB.byteLength),
            QB = OB.getUint32(12, !0);
          if (OB.getUint32(16, !0) !== DB || 20 + QB > GB) return null;
          let oB;
          try {
            oB = JSON.parse((new TextDecoder).decode(BB.subarray(20, 20 + QB)))
          } catch {
            return null
          }
          return "object" === typeof oB && null !== oB ? {
            json: oB,
            jsonEnd: 20 + QB,
            length: GB
          } : null
        }(GB);
      if (null === oB) throw new QB(JB);
      const jB = oB.json,
        {
          jsonEnd: MB,
          length: PB
        } = oB,
        zB = new DataView(GB.buffer, GB.byteOffset, GB.byteLength);
      let lB = -1,
        pB = 0;
      for (let YB = MB; YB < PB;) {
        if (YB + 8 > PB) throw new QB(JB);
        const BB = zB.getUint32(YB, !0),
          OB = zB.getUint32(YB + 4, !0);
        if (YB + 8 + BB > PB || OB === DB || OB === yB && -1 !== lB) throw new QB(JB);
        OB === yB && (lB = YB + 8, pB = BB), YB += 8 + BB
      }
      let qB = null;
      const ZB = null === (OB = jB.buffers) || void 0 === OB ? void 0 : OB[0];
      if (-1 !== lB && ZB && void 0 === ZB.uri) {
        if (!(ZB.byteLength >= 0) || ZB.byteLength > pB) throw new QB(JB);
        qB = new Uint8Array(GB.buffer, GB.byteOffset + lB, ZB.byteLength)
      }
      return {
        json: jB,
        bin: qB,
        fileBytes: GB.byteLength
      }
    }

    function PB(BB) {
      const OB = BB.slice(BB.indexOf(",") + 1),
        GB = Uint8Array.fromBase64;
      if (GB) return GB(OB).buffer;
      const YB = atob(OB),
        DB = new Uint8Array(YB.length);
      for (let QB = 0; QB < YB.length; QB++) DB[QB] = YB.charCodeAt(QB);
      return DB.buffer
    }
    async function zB(BB) {
      if (BB.startsWith("data:")) return PB(BB);
      const OB = await fetch(BB);
      if (!OB.ok) throw new oB(`fetching ${BB} failed: ${OB.status} ${OB.statusText}`);
      return await OB.arrayBuffer()
    }
    const lB = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      pB = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      qB = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      ZB = [
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
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);