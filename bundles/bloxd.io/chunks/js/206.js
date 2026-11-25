export const id = 206;
export const ids = [206];
export const modules = {
  34555: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => aG,
      d: () => vG,
      f: () => FG
    });
    var wG = ZG(34560);
    const SG = {
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
      LG = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      yG = 1048576,
      kG = "is not a binary glTF 2.0 file",
      UG = "loads data from outside the file",
      YG = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      VG = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      pG = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      fG = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: pG,
        TEXCOORD_2: pG,
        TEXCOORD_3: pG,
        TEXCOORD_4: pG,
        TEXCOORD_5: pG
      },
      QG = new Set(wG.i.map((GG => {
        let [bG] = GG;
        return bG
      }))),
      KG = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      hG = 5126;

    function dG(GG) {
      return GG.toLocaleString("en-US")
    }

    function JG(GG, bG, ZG) {
      return GG > bG ? `has ${dG(GG)} ${ZG} (the limit is ${dG(bG)})` : null
    }

    function rG(GG, bG) {
      return Number.isInteger(GG) && GG >= 0 && GG < (null !== bG && void 0 !== bG ? bG : 0)
    }

    function zG(GG) {
      return Number.isInteger(GG) && GG >= 0
    }

    function EG(GG, bG) {
      return void 0 !== GG && (!Array.isArray(GG) || GG.length > bG)
    }

    function oG(GG, bG) {
      return "object" === typeof GG && null !== GG && Object.keys(GG).length > bG
    }

    function XG(GG) {
      var bG;
      return `${GG.normalized?"normalized ":""}${null!==(bG=wG.g[GG.componentType])&&void 0!==bG?bG:GG.componentType} ${GG.type}`
    }

    function uG(GG) {
      const bG = bG => {
        var ZG;
        return null !== (ZG = GG[bG]) && void 0 !== ZG ? ZG : -1
      };
      return 255 === bG(0) && 216 === bG(1) ? "JPEG" : 82 === bG(0) && 73 === bG(1) && 87 === bG(8) && 69 === bG(9) ? "WebP" : 171 === bG(0) && 75 === bG(1) && 84 === bG(2) && 88 === bG(3) ? "KTX2" : "non-PNG"
    }

    function iG(GG) {
      return GG.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((bG, ZG) => GG[ZG] === bG)) && 73 === GG[12] && 72 === GG[13] && 68 === GG[14] && 82 === GG[15]
    }

    function CG(GG) {
      return /^[aeiou]/i.test(GG) ? `an ${GG}` : `a ${GG}`
    }

    function WG(GG) {
      const bG = GG.byteStride;
      return void 0 === bG || Number.isInteger(bG) && bG >= 4 && bG <= 252 && bG % 4 === 0
    }

    function mG(GG, bG, ZG) {
      var wG, SG;
      const LG = null === (wG = GG.bufferViews) || void 0 === wG ? void 0 : wG[ZG];
      if (!LG || !bG || 0 !== LG.buffer) return null;
      const yG = null !== (SG = LG.byteOffset) && void 0 !== SG ? SG : 0;
      return !zG(yG) || !zG(LG.byteLength) || yG + LG.byteLength > bG.byteLength ? null : bG.subarray(yG, yG + LG.byteLength)
    }

    function IG(GG, bG) {
      var ZG, SG, LG;
      const yG = wG.r[bG.type],
        kG = wG.e[bG.componentType];
      if (!yG || !kG || !Number.isInteger(bG.count) || bG.count < 0) return !1;
      if (void 0 === bG.bufferView) return !0;
      const UG = null === (ZG = GG.bufferViews) || void 0 === ZG ? void 0 : ZG[bG.bufferView],
        YG = null !== (SG = bG.byteOffset) && void 0 !== SG ? SG : 0;
      if (!UG || !zG(YG) || YG % kG !== 0) return !1;
      const VG = yG * kG,
        pG = null !== (LG = UG.byteStride) && void 0 !== LG ? LG : VG;
      if (pG < VG) return !1;
      return (0 === bG.count ? 0 : YG + pG * (bG.count - 1) + VG) <= UG.byteLength
    }

    function FG(GG) {
      return GG > SG.fileBytes ? `is ${(GG/yG).toFixed(1)} MiB (the limit is ${SG.fileBytes/yG} MiB)` : null
    }

    function vG(GG, bG) {
      try {
        return function(GG, bG) {
          var ZG, yG, pG, dG, zG, FG, vG, aG, cG, lG, jG, PG, MG, AG, sG, qG, nG;
          const gG = Array.isArray(GG.extensionsUsed) && GG.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(GG, bG) {
              var ZG, wG;
              const {
                items: SG,
                perFile: yG,
                surfaces: kG,
                few: UG,
                bounds: YG,
                attributeMembers: VG
              } = LG;
              if (EG(GG.extensionsRequired, UG) || EG(GG.animations, 1 / 0) || EG(GG.skins, 1 / 0)) return !0;
              if (null !== (ZG = GG.animations) && void 0 !== ZG && ZG.length || null !== (wG = GG.skins) && void 0 !== wG && wG.length) return !1;
              if ([
                  [GG.buffers, UG],
                  [GG.scenes, UG],
                  [GG.bufferViews, SG],
                  [GG.accessors, SG],
                  [GG.nodes, SG],
                  [GG.meshes, SG],
                  [GG.materials, kG],
                  [GG.textures, kG],
                  [GG.samplers, kG],
                  [GG.images, kG]
                ].some((GG => {
                  let [bG, ZG] = GG;
                  return EG(bG, ZG)
                }))) return !0;
              for (const LG of null !== (pG = GG.accessors) && void 0 !== pG ? pG : []) {
                var pG, fG, QG;
                if (Number.isInteger(LG.count) && (!Number.isSafeInteger(LG.count) || Object.is(LG.count, -0)) || EG(null !== (fG = LG.min) && void 0 !== fG ? fG : void 0, YG) || EG(null !== (QG = LG.max) && void 0 !== QG ? QG : void 0, YG)) return !0
              }
              for (const LG of null !== (KG = GG.scenes) && void 0 !== KG ? KG : []) {
                var KG;
                if (EG(LG.nodes, SG)) return !0
              }
              let hG = 0;
              for (const LG of null !== (dG = GG.nodes) && void 0 !== dG ? dG : []) {
                var dG, JG, rG;
                if (EG(LG.children, yG)) return !0;
                hG += null !== (JG = null === (rG = LG.children) || void 0 === rG ? void 0 : rG.length) && void 0 !== JG ? JG : 0
              }
              if (hG > yG) return !0;
              let zG = 0;
              for (const LG of null !== (XG = GG.meshes) && void 0 !== XG ? XG : []) {
                var XG;
                if (!Array.isArray(LG.primitives)) return !0;
                if (zG += LG.primitives.length, zG > yG) return !0;
                for (const GG of LG.primitives) {
                  var uG;
                  const ZG = bG ? null === (uG = GG.extensions) || void 0 === uG ? void 0 : uG.KHR_draco_mesh_compression : void 0;
                  if (oG(GG.attributes, VG) || oG(null === ZG || void 0 === ZG ? void 0 : ZG.attributes, VG)) return !0
                }
              }
              return !1
            }(GG, gG)) return kG;
          const eG = null === (ZG = GG.asset) || void 0 === ZG ? void 0 : ZG.version;
          if ("string" !== typeof eG || !/^2\.\d+/.test(eG)) return `uses glTF version ${null!==eG&&void 0!==eG?eG:"(none)"}`;
          const RG = null === (yG = GG.asset) || void 0 === yG ? void 0 : yG.minVersion;
          if (void 0 !== RG && "2.0" !== RG) return `uses glTF version ${RG}`;
          for (const wG of null !== (TG = GG.extensionsRequired) && void 0 !== TG ? TG : []) {
            var TG;
            if (!YG.has(wG)) return `requires the glTF extension ${wG}`
          }
          if (null !== (pG = GG.animations) && void 0 !== pG && pG.length) return "has animations";
          if (null !== (dG = GG.skins) && void 0 !== dG && dG.length) return "uses skins";
          const HG = null !== (zG = GG.buffers) && void 0 !== zG ? zG : [];
          for (const [wG, SG] of HG.entries()) {
            if (void 0 !== SG.uri) return UG;
            if (wG > 0 || !bG) return kG
          }
          for (const [wG, SG] of(null !== (tG = GG.bufferViews) && void 0 !== tG ? tG : []).entries()) {
            var tG;
            if (!mG(GG, bG, wG) || !WG(SG)) return kG
          }
          const DG = null !== (FG = GG.accessors) && void 0 !== FG ? FG : [];
          for (const wG of DG) {
            if (void 0 !== wG.sparse) return "uses sparse accessors";
            const bG = Number.isInteger(wG.count) ? JG(wG.count, SG.accessorElements, "elements in an accessor") : null;
            if (bG) return bG;
            if (!IG(GG, wG)) return kG
          }
          const NG = null !== (vG = GG.scenes) && void 0 !== vG ? vG : [];
          if (1 !== NG.length) return `has ${NG.length} scenes`;
          const OG = (0, wG.v)(GG);
          if (void 0 !== OG && 0 !== OG) return kG;
          const xG = null !== (aG = GG.nodes) && void 0 !== aG ? aG : [],
            BG = null !== (cG = GG.meshes) && void 0 !== cG ? cG : [],
            Gb = null !== (lG = GG.materials) && void 0 !== lG ? lG : [],
            bb = null !== (jG = GG.textures) && void 0 !== jG ? jG : [],
            Zb = null !== (PG = GG.images) && void 0 !== PG ? PG : [],
            wb = null !== (MG = null !== (AG = null !== (sG = JG(xG.length, SG.nodes, "nodes")) && void 0 !== sG ? sG : JG(BG.length, SG.meshes, "meshes")) && void 0 !== AG ? AG : JG(Gb.length, SG.materials, "materials")) && void 0 !== MG ? MG : JG(Zb.length, SG.images, "images");
          if (wb) return wb;
          const Sb = new Set;
          for (const wG of xG)
            for (const GG of null !== (Lb = wG.children) && void 0 !== Lb ? Lb : []) {
              var Lb;
              if (!rG(GG, xG.length) || Sb.has(GG)) return kG;
              Sb.add(GG)
            }
          const yb = new Set,
            kb = GG => {
              var bG;
              return !yb.has(GG) && (yb.add(GG), (null !== (bG = xG[GG].children) && void 0 !== bG ? bG : []).every(kb))
            };
          for (const wG of null !== (Ub = NG[0].nodes) && void 0 !== Ub ? Ub : []) {
            var Ub;
            if (!rG(wG, xG.length) || Sb.has(wG) || !kb(wG)) return kG
          }
          for (const wG of xG) {
            if (void 0 !== wG.matrix) return "uses node matrices";
            if (void 0 !== wG.skin) return "uses skins";
            if (void 0 !== wG.weights) return "uses morph targets";
            if (void 0 !== wG.mesh && !rG(wG.mesh, BG.length)) return kG;
            const GG = [
              [wG.translation, 3],
              [wG.rotation, 4],
              [wG.scale, 3]
            ];
            for (const [bG, ZG] of GG)
              if (void 0 !== bG && (!Array.isArray(bG) || bG.length !== ZG || !bG.every((GG => Number.isFinite(GG))))) return kG
          }
          let Yb = -1,
            Vb = 0,
            pb = 0,
            fb = null;
          for (const SG of BG) {
            if (void 0 !== SG.weights) return "uses morph targets";
            if (0 === SG.primitives.length) return kG;
            for (const ZG of SG.primitives) {
              var Qb, Kb;
              const SG = null !== (Qb = ZG.mode) && void 0 !== Qb ? Qb : 4;
              var hb;
              if (4 !== SG && 0 !== SG) return `uses ${null!==(hb=KG[SG])&&void 0!==hb?hb:`mode ${SG}`} primitives`;
              if (void 0 !== ZG.targets) return "uses morph targets";
              if (void 0 !== ZG.material && !rG(ZG.material, Gb.length)) return kG;
              const LG = gG ? null === (Kb = ZG.extensions) || void 0 === Kb ? void 0 : Kb.KHR_draco_mesh_compression : void 0;
              if (LG) {
                if (4 !== SG) return "uses Draco-compressed points";
                if (!mG(GG, bG, LG.bufferView) || "object" !== typeof LG.attributes) return kG
              }
              const yG = ZG.attributes;
              if ("object" !== typeof yG || null === yG) return kG;
              if (void 0 === yG.POSITION) return "has a primitive with no positions";
              if (!rG(yG.POSITION, DG.length)) return kG;
              const UG = DG[yG.POSITION].count;
              for (const [GG, bG] of Object.entries(yG)) {
                if (!rG(bG, DG.length)) return kG;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(GG)) return "uses skins";
                const ZG = DG[bG],
                  wG = VG[GG];
                if (wG && (ZG.componentType !== hG || ZG.normalized || ZG.type !== wG)) return `stores ${GG} as ${XG(ZG)}`;
                const SG = fG[GG];
                if (SG && (ZG.type !== SG.type || !SG.componentTypes.includes(ZG.componentType) || ZG.componentType === hG === !!ZG.normalized)) return `stores ${GG} as ${XG(ZG)}`;
                if (QG.has(GG) && ZG.count !== UG) return "has vertex attributes of different lengths"
              }
              if (LG) {
                if (void 0 === ZG.indices) return kG;
                for (const bG in LG.attributes)
                  if (QG.has(bG) && void 0 === yG[bG]) return kG;
                if (void 0 === LG.attributes.POSITION) return kG;
                const GG = rG(ZG.indices, DG.length) ? DG[ZG.indices].count : -1;
                if (0 === GG) return kG;
                if (-1 === Yb) Yb = LG.bufferView, Vb = UG, pb = GG;
                else {
                  fb ??= new Map([
                    [Yb, [Vb, pb]]
                  ]);
                  const bG = fb.get(LG.bufferView);
                  if (bG && (bG[0] !== UG || bG[1] !== GG)) return kG;
                  fb.set(LG.bufferView, null !== bG && void 0 !== bG ? bG : [UG, GG])
                }
              }
              let YG = UG;
              if (void 0 !== ZG.indices) {
                if (!rG(ZG.indices, DG.length)) return kG;
                const GG = DG[ZG.indices];
                if ("SCALAR" !== GG.type) return kG;
                if (5121 === GG.componentType) return "uses 8-bit indices";
                var db;
                if (5123 !== GG.componentType && 5125 !== GG.componentType) return `stores indices as ${null!==(db=wG.g[GG.componentType])&&void 0!==db?db:GG.componentType}`;
                if (!LG && void 0 === GG.bufferView) return kG;
                YG = GG.count
              }
              if (4 === SG && YG % 3 !== 0) return kG
            }
          }
          let Jb = 0,
            rb = 0,
            zb = 0;
          for (let wG = 0; wG < xG.length; wG++) {
            const GG = xG[wG].mesh;
            if (void 0 !== GG && yb.has(wG))
              for (const bG of BG[GG].primitives) zb++, Jb += DG[bG.attributes.POSITION].count, void 0 !== bG.indices && (rb += DG[bG.indices].count)
          }
          const Eb = null !== (qG = null !== (nG = JG(Jb, SG.vertices, "vertices")) && void 0 !== nG ? nG : JG(rb, SG.indices, "indices")) && void 0 !== qG ? qG : JG(zb, SG.primitives, "primitives");
          if (Eb) return Eb;
          for (const wG of Gb) {
            var ob, Xb;
            if (void 0 !== wG.emissiveTexture) return "uses an emissive texture";
            const bG = null !== (ob = wG.alphaMode) && void 0 !== ob ? ob : "OPAQUE";
            if ("OPAQUE" !== bG && "MASK" !== bG && "BLEND" !== bG) return kG;
            const ZG = null === (Xb = wG.pbrMetallicRoughness) || void 0 === Xb ? void 0 : Xb.baseColorTexture;
            if (ZG) {
              var ub, ib, Cb, Wb, mb;
              const bG = null !== (ub = GG.extensionsUsed) && void 0 !== ub && ub.includes("KHR_texture_transform") ? null === (ib = ZG.extensions) || void 0 === ib ? void 0 : ib.KHR_texture_transform : void 0;
              if (0 !== (null !== (Cb = ZG.texCoord) && void 0 !== Cb ? Cb : 0) || 0 !== (null !== (Wb = null === bG || void 0 === bG ? void 0 : bG.texCoord) && void 0 !== Wb ? Wb : 0)) return "uses a second UV set";
              const wG = bb[ZG.index];
              if (!wG || !rG(wG.source, Zb.length) || void 0 !== wG.sampler && !rG(wG.sampler, null === (mb = GG.samplers) || void 0 === mb ? void 0 : mb.length)) return kG
            }
          }
          for (const wG of Zb) {
            if (void 0 !== wG.uri) return UG;
            if (void 0 === wG.bufferView) return kG;
            const ZG = mG(GG, bG, wG.bufferView);
            if (!ZG) return kG;
            if ("image/png" !== wG.mimeType) {
              var Ib, Fb, vb;
              return `has ${CG(null!==(Ib=null!==(Fb={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(vb=wG.mimeType)&&void 0!==vb?vb:""])&&void 0!==Fb?Fb:wG.mimeType)&&void 0!==Ib?Ib:"untyped")} image`
            }
            if (!iG(ZG)) return `has ${CG(uG(ZG))} image`;
            const LG = new DataView(ZG.buffer, ZG.byteOffset, ZG.byteLength),
              yG = LG.getUint32(16),
              YG = LG.getUint32(20);
            if (yG > SG.imageSide || YG > SG.imageSide) return `has a ${yG} \xd7 ${YG} image (the limit is ${SG.imageSide})`
          }
          return null
        }(GG, bG)
      } catch {
        return kG
      }
    }

    function aG(GG) {
      const bG = FG(GG.byteLength);
      if (bG) return bG;
      try {
        const {
          json: bG,
          bin: ZG
        } = (0, wG.w)(GG);
        return vG(bG, ZG)
      } catch (ZG) {
        if (ZG instanceof wG.n) return ZG.reason;
        throw ZG
      }
    }
  },
  34560: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => QG,
      g: () => fG,
      i: () => hG,
      k: () => LG,
      n: () => SG,
      r: () => KG,
      s: () => VG,
      u: () => pG,
      v: () => yG,
      w: () => YG
    });
    var wG = ZG(34569);
    class SG extends Error {
      constructor(GG) {
        super(`GLB refused: it ${GG}`), this.reason = GG, this.name = "GlbRefused"
      }
    }
    class LG extends Error {
      constructor(GG) {
        super(GG), this.name = "GlbError"
      }
    }

    function yG(GG) {
      return Reflect.get(GG, "scene")
    }
    const kG = 5130562,
      UG = "is not a binary glTF 2.0 file";

    function YG(GG) {
      var bG;
      const ZG = GG instanceof Uint8Array ? GG : new Uint8Array(GG),
        LG = (0, wG.f)(ZG);
      if (null === LG) throw new SG(UG);
      const yG = LG.json,
        {
          jsonEnd: YG,
          length: VG
        } = LG,
        pG = new DataView(ZG.buffer, ZG.byteOffset, ZG.byteLength);
      let fG = -1,
        QG = 0;
      for (let dG = YG; dG < VG;) {
        if (dG + 8 > VG) throw new SG(UG);
        const GG = pG.getUint32(dG, !0),
          bG = pG.getUint32(dG + 4, !0);
        if (dG + 8 + GG > VG || bG === wG.b || bG === kG && -1 !== fG) throw new SG(UG);
        bG === kG && (fG = dG + 8, QG = GG), dG += 8 + GG
      }
      let KG = null;
      const hG = null === (bG = yG.buffers) || void 0 === bG ? void 0 : bG[0];
      if (-1 !== fG && hG && void 0 === hG.uri) {
        if (!(hG.byteLength >= 0) || hG.byteLength > QG) throw new SG(UG);
        KG = new Uint8Array(ZG.buffer, ZG.byteOffset + fG, hG.byteLength)
      }
      return {
        json: yG,
        bin: KG,
        fileBytes: ZG.byteLength
      }
    }

    function VG(GG) {
      const bG = GG.slice(GG.indexOf(",") + 1),
        ZG = Uint8Array.fromBase64;
      if (ZG) return ZG(bG).buffer;
      const wG = atob(bG),
        SG = new Uint8Array(wG.length);
      for (let LG = 0; LG < wG.length; LG++) SG[LG] = wG.charCodeAt(LG);
      return SG.buffer
    }
    async function pG(GG) {
      if (GG.startsWith("data:")) return VG(GG);
      const bG = await fetch(GG);
      if (!bG.ok) throw new LG(`fetching ${GG} failed: ${bG.status} ${bG.statusText}`);
      return await bG.arrayBuffer()
    }
    const fG = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      QG = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      KG = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      hG = [
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
  34569: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      f: () => LG,
      j: () => yG
    });
    const wG = 1179937895,
      SG = 1313821514;

    function LG(GG) {
      const bG = new DataView(GG.buffer, GG.byteOffset, GG.byteLength);
      if (GG.byteLength < 20 || bG.getUint32(0, !0) !== wG || 2 !== bG.getUint32(4, !0)) return null;
      const ZG = Math.min(bG.getUint32(8, !0), GG.byteLength),
        LG = bG.getUint32(12, !0);
      if (bG.getUint32(16, !0) !== SG || 20 + LG > ZG) return null;
      let yG;
      try {
        yG = JSON.parse((new TextDecoder).decode(GG.subarray(20, 20 + LG)))
      } catch {
        return null
      }
      return "object" === typeof yG && null !== yG ? {
        json: yG,
        jsonEnd: 20 + LG,
        length: ZG
      } : null
    }

    function yG(GG) {
      var bG;
      const ZG = null === (bG = LG(GG)) || void 0 === bG ? void 0 : bG.json;
      if (void 0 === ZG || !Array.isArray(ZG.extensionsUsed) || !ZG.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const wG = ZG.meshes;
      return Array.isArray(wG) && wG.some((GG => {
        const bG = null === GG || void 0 === GG ? void 0 : GG.primitives;
        return Array.isArray(bG) && bG.some((GG => {
          const bG = null === GG || void 0 === GG ? void 0 : GG.extensions;
          return null != (null === bG || void 0 === bG ? void 0 : bG.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);