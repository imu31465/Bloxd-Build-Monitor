export const id = 206;
export const ids = [206];
export const modules = {
  34350: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => yT,
      g: () => aT,
      j: () => tT
    });
    var WT = mT(34358);
    const zT = {
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
      MT = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      gT = 1048576,
      nT = "is not a binary glTF 2.0 file",
      HT = "loads data from outside the file",
      kT = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      jT = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      lT = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      LT = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: lT,
        TEXCOORD_2: lT,
        TEXCOORD_3: lT,
        TEXCOORD_4: lT,
        TEXCOORD_5: lT
      },
      pT = new Set(WT.g.map((TT => {
        let [UT] = TT;
        return UT
      }))),
      BT = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      ZT = 5126;

    function cT(TT) {
      return TT.toLocaleString("en-US")
    }

    function vT(TT, UT, mT) {
      return TT > UT ? `has ${cT(TT)} ${mT} (the limit is ${cT(UT)})` : null
    }

    function fT(TT, UT) {
      return Number.isInteger(TT) && TT >= 0 && TT < (null !== UT && void 0 !== UT ? UT : 0)
    }

    function qT(TT) {
      return Number.isInteger(TT) && TT >= 0
    }

    function iT(TT, UT) {
      return void 0 !== TT && (!Array.isArray(TT) || TT.length > UT)
    }

    function bT(TT, UT) {
      return "object" === typeof TT && null !== TT && Object.keys(TT).length > UT
    }

    function OT(TT) {
      var UT;
      return `${TT.normalized?"normalized ":""}${null!==(UT=WT.e[TT.componentType])&&void 0!==UT?UT:TT.componentType} ${TT.type}`
    }

    function eT(TT) {
      const UT = UT => {
        var mT;
        return null !== (mT = TT[UT]) && void 0 !== mT ? mT : -1
      };
      return 255 === UT(0) && 216 === UT(1) ? "JPEG" : 82 === UT(0) && 73 === UT(1) && 87 === UT(8) && 69 === UT(9) ? "WebP" : 171 === UT(0) && 75 === UT(1) && 84 === UT(2) && 88 === UT(3) ? "KTX2" : "non-PNG"
    }

    function YT(TT) {
      return TT.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((UT, mT) => TT[mT] === UT)) && 73 === TT[12] && 72 === TT[13] && 68 === TT[14] && 82 === TT[15]
    }

    function JT(TT) {
      return /^[aeiou]/i.test(TT) ? `an ${TT}` : `a ${TT}`
    }

    function xT(TT) {
      const UT = TT.byteStride;
      return void 0 === UT || Number.isInteger(UT) && UT >= 4 && UT <= 252 && UT % 4 === 0
    }

    function dT(TT, UT, mT) {
      var WT, zT;
      const MT = null === (WT = TT.bufferViews) || void 0 === WT ? void 0 : WT[mT];
      if (!MT || !UT || 0 !== MT.buffer) return null;
      const gT = null !== (zT = MT.byteOffset) && void 0 !== zT ? zT : 0;
      return !qT(gT) || !qT(MT.byteLength) || gT + MT.byteLength > UT.byteLength ? null : UT.subarray(gT, gT + MT.byteLength)
    }

    function wT(TT, UT) {
      var mT, zT, MT;
      const gT = WT.k[UT.type],
        nT = WT.d[UT.componentType];
      if (!gT || !nT || !Number.isInteger(UT.count) || UT.count < 0) return !1;
      if (void 0 === UT.bufferView) return !0;
      const HT = null === (mT = TT.bufferViews) || void 0 === mT ? void 0 : mT[UT.bufferView],
        kT = null !== (zT = UT.byteOffset) && void 0 !== zT ? zT : 0;
      if (!HT || !qT(kT) || kT % nT !== 0) return !1;
      const jT = gT * nT,
        lT = null !== (MT = HT.byteStride) && void 0 !== MT ? MT : jT;
      if (lT < jT) return !1;
      return (0 === UT.count ? 0 : kT + lT * (UT.count - 1) + jT) <= HT.byteLength
    }

    function tT(TT) {
      return TT > zT.fileBytes ? `is ${(TT/gT).toFixed(1)} MiB (the limit is ${zT.fileBytes/gT} MiB)` : null
    }

    function aT(TT, UT) {
      try {
        return function(TT, UT) {
          var mT, gT, lT, cT, qT, tT, aT, yT, XT, IT, QT, sT, FT, PT, VT, uT, CT;
          const rT = Array.isArray(TT.extensionsUsed) && TT.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(TT, UT) {
              var mT, WT;
              const {
                items: zT,
                perFile: gT,
                surfaces: nT,
                few: HT,
                bounds: kT,
                attributeMembers: jT
              } = MT;
              if (iT(TT.extensionsRequired, HT) || iT(TT.animations, 1 / 0) || iT(TT.skins, 1 / 0)) return !0;
              if (null !== (mT = TT.animations) && void 0 !== mT && mT.length || null !== (WT = TT.skins) && void 0 !== WT && WT.length) return !1;
              if ([
                  [TT.buffers, HT],
                  [TT.scenes, HT],
                  [TT.bufferViews, zT],
                  [TT.accessors, zT],
                  [TT.nodes, zT],
                  [TT.meshes, zT],
                  [TT.materials, nT],
                  [TT.textures, nT],
                  [TT.samplers, nT],
                  [TT.images, nT]
                ].some((TT => {
                  let [UT, mT] = TT;
                  return iT(UT, mT)
                }))) return !0;
              for (const MT of null !== (lT = TT.accessors) && void 0 !== lT ? lT : []) {
                var lT, LT, pT;
                if (Number.isInteger(MT.count) && (!Number.isSafeInteger(MT.count) || Object.is(MT.count, -0)) || iT(null !== (LT = MT.min) && void 0 !== LT ? LT : void 0, kT) || iT(null !== (pT = MT.max) && void 0 !== pT ? pT : void 0, kT)) return !0
              }
              for (const MT of null !== (BT = TT.scenes) && void 0 !== BT ? BT : []) {
                var BT;
                if (iT(MT.nodes, zT)) return !0
              }
              let ZT = 0;
              for (const MT of null !== (cT = TT.nodes) && void 0 !== cT ? cT : []) {
                var cT, vT, fT;
                if (iT(MT.children, gT)) return !0;
                ZT += null !== (vT = null === (fT = MT.children) || void 0 === fT ? void 0 : fT.length) && void 0 !== vT ? vT : 0
              }
              if (ZT > gT) return !0;
              let qT = 0;
              for (const MT of null !== (OT = TT.meshes) && void 0 !== OT ? OT : []) {
                var OT;
                if (!Array.isArray(MT.primitives)) return !0;
                if (qT += MT.primitives.length, qT > gT) return !0;
                for (const TT of MT.primitives) {
                  var eT;
                  const mT = UT ? null === (eT = TT.extensions) || void 0 === eT ? void 0 : eT.KHR_draco_mesh_compression : void 0;
                  if (bT(TT.attributes, jT) || bT(null === mT || void 0 === mT ? void 0 : mT.attributes, jT)) return !0
                }
              }
              return !1
            }(TT, rT)) return nT;
          const KT = null === (mT = TT.asset) || void 0 === mT ? void 0 : mT.version;
          if ("string" !== typeof KT || !/^2\.\d+/.test(KT)) return `uses glTF version ${null!==KT&&void 0!==KT?KT:"(none)"}`;
          const ST = null === (gT = TT.asset) || void 0 === gT ? void 0 : gT.minVersion;
          if (void 0 !== ST && "2.0" !== ST) return `uses glTF version ${ST}`;
          for (const WT of null !== (GT = TT.extensionsRequired) && void 0 !== GT ? GT : []) {
            var GT;
            if (!kT.has(WT)) return `requires the glTF extension ${WT}`
          }
          if (null !== (lT = TT.animations) && void 0 !== lT && lT.length) return "has animations";
          if (null !== (cT = TT.skins) && void 0 !== cT && cT.length) return "uses skins";
          const NT = null !== (qT = TT.buffers) && void 0 !== qT ? qT : [];
          for (const [WT, zT] of NT.entries()) {
            if (void 0 !== zT.uri) return HT;
            if (WT > 0 || !UT) return nT
          }
          for (const [WT, zT] of(null !== (ET = TT.bufferViews) && void 0 !== ET ? ET : []).entries()) {
            var ET;
            if (!dT(TT, UT, WT) || !xT(zT)) return nT
          }
          const hT = null !== (tT = TT.accessors) && void 0 !== tT ? tT : [];
          for (const WT of hT) {
            if (void 0 !== WT.sparse) return "uses sparse accessors";
            const UT = Number.isInteger(WT.count) ? vT(WT.count, zT.accessorElements, "elements in an accessor") : null;
            if (UT) return UT;
            if (!wT(TT, WT)) return nT
          }
          const DT = null !== (aT = TT.scenes) && void 0 !== aT ? aT : [];
          if (1 !== DT.length) return `has ${DT.length} scenes`;
          const oT = (0, WT.o)(TT);
          if (void 0 !== oT && 0 !== oT) return nT;
          const AT = null !== (yT = TT.nodes) && void 0 !== yT ? yT : [],
            RT = null !== (XT = TT.meshes) && void 0 !== XT ? XT : [],
            TU = null !== (IT = TT.materials) && void 0 !== IT ? IT : [],
            UU = null !== (QT = TT.textures) && void 0 !== QT ? QT : [],
            mU = null !== (sT = TT.images) && void 0 !== sT ? sT : [],
            WU = null !== (FT = null !== (PT = null !== (VT = vT(AT.length, zT.nodes, "nodes")) && void 0 !== VT ? VT : vT(RT.length, zT.meshes, "meshes")) && void 0 !== PT ? PT : vT(TU.length, zT.materials, "materials")) && void 0 !== FT ? FT : vT(mU.length, zT.images, "images");
          if (WU) return WU;
          const zU = new Set;
          for (const WT of AT)
            for (const TT of null !== (MU = WT.children) && void 0 !== MU ? MU : []) {
              var MU;
              if (!fT(TT, AT.length) || zU.has(TT)) return nT;
              zU.add(TT)
            }
          const gU = new Set,
            nU = TT => {
              var UT;
              return !gU.has(TT) && (gU.add(TT), (null !== (UT = AT[TT].children) && void 0 !== UT ? UT : []).every(nU))
            };
          for (const WT of null !== (HU = DT[0].nodes) && void 0 !== HU ? HU : []) {
            var HU;
            if (!fT(WT, AT.length) || zU.has(WT) || !nU(WT)) return nT
          }
          for (const WT of AT) {
            if (void 0 !== WT.matrix) return "uses node matrices";
            if (void 0 !== WT.skin) return "uses skins";
            if (void 0 !== WT.weights) return "uses morph targets";
            if (void 0 !== WT.mesh && !fT(WT.mesh, RT.length)) return nT;
            const TT = [
              [WT.translation, 3],
              [WT.rotation, 4],
              [WT.scale, 3]
            ];
            for (const [UT, mT] of TT)
              if (void 0 !== UT && (!Array.isArray(UT) || UT.length !== mT || !UT.every((TT => Number.isFinite(TT))))) return nT
          }
          let kU = -1,
            jU = 0,
            lU = 0,
            LU = null;
          for (const zT of RT) {
            if (void 0 !== zT.weights) return "uses morph targets";
            if (0 === zT.primitives.length) return nT;
            for (const mT of zT.primitives) {
              var pU, BU;
              const zT = null !== (pU = mT.mode) && void 0 !== pU ? pU : 4;
              var ZU;
              if (4 !== zT && 0 !== zT) return `uses ${null!==(ZU=BT[zT])&&void 0!==ZU?ZU:`mode ${zT}`} primitives`;
              if (void 0 !== mT.targets) return "uses morph targets";
              if (void 0 !== mT.material && !fT(mT.material, TU.length)) return nT;
              const MT = rT ? null === (BU = mT.extensions) || void 0 === BU ? void 0 : BU.KHR_draco_mesh_compression : void 0;
              if (MT) {
                if (4 !== zT) return "uses Draco-compressed points";
                if (!dT(TT, UT, MT.bufferView) || "object" !== typeof MT.attributes) return nT
              }
              const gT = mT.attributes;
              if ("object" !== typeof gT || null === gT) return nT;
              if (void 0 === gT.POSITION) return "has a primitive with no positions";
              if (!fT(gT.POSITION, hT.length)) return nT;
              const HT = hT[gT.POSITION].count;
              for (const [TT, UT] of Object.entries(gT)) {
                if (!fT(UT, hT.length)) return nT;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(TT)) return "uses skins";
                const mT = hT[UT],
                  WT = jT[TT];
                if (WT && (mT.componentType !== ZT || mT.normalized || mT.type !== WT)) return `stores ${TT} as ${OT(mT)}`;
                const zT = LT[TT];
                if (zT && (mT.type !== zT.type || !zT.componentTypes.includes(mT.componentType) || mT.componentType === ZT === !!mT.normalized)) return `stores ${TT} as ${OT(mT)}`;
                if (pT.has(TT) && mT.count !== HT) return "has vertex attributes of different lengths"
              }
              if (MT) {
                if (void 0 === mT.indices) return nT;
                for (const UT in MT.attributes)
                  if (pT.has(UT) && void 0 === gT[UT]) return nT;
                if (void 0 === MT.attributes.POSITION) return nT;
                const TT = fT(mT.indices, hT.length) ? hT[mT.indices].count : -1;
                if (0 === TT) return nT;
                if (-1 === kU) kU = MT.bufferView, jU = HT, lU = TT;
                else {
                  LU ??= new Map([
                    [kU, [jU, lU]]
                  ]);
                  const UT = LU.get(MT.bufferView);
                  if (UT && (UT[0] !== HT || UT[1] !== TT)) return nT;
                  LU.set(MT.bufferView, null !== UT && void 0 !== UT ? UT : [HT, TT])
                }
              }
              let kT = HT;
              if (void 0 !== mT.indices) {
                if (!fT(mT.indices, hT.length)) return nT;
                const TT = hT[mT.indices];
                if ("SCALAR" !== TT.type) return nT;
                if (5121 === TT.componentType) return "uses 8-bit indices";
                var cU;
                if (5123 !== TT.componentType && 5125 !== TT.componentType) return `stores indices as ${null!==(cU=WT.e[TT.componentType])&&void 0!==cU?cU:TT.componentType}`;
                if (!MT && void 0 === TT.bufferView) return nT;
                kT = TT.count
              }
              if (4 === zT && kT % 3 !== 0) return nT
            }
          }
          let vU = 0,
            fU = 0,
            qU = 0;
          for (let WT = 0; WT < AT.length; WT++) {
            const TT = AT[WT].mesh;
            if (void 0 !== TT && gU.has(WT))
              for (const UT of RT[TT].primitives) qU++, vU += hT[UT.attributes.POSITION].count, void 0 !== UT.indices && (fU += hT[UT.indices].count)
          }
          const iU = null !== (uT = null !== (CT = vT(vU, zT.vertices, "vertices")) && void 0 !== CT ? CT : vT(fU, zT.indices, "indices")) && void 0 !== uT ? uT : vT(qU, zT.primitives, "primitives");
          if (iU) return iU;
          for (const WT of TU) {
            var bU, OU;
            if (void 0 !== WT.emissiveTexture) return "uses an emissive texture";
            const UT = null !== (bU = WT.alphaMode) && void 0 !== bU ? bU : "OPAQUE";
            if ("OPAQUE" !== UT && "MASK" !== UT && "BLEND" !== UT) return nT;
            const mT = null === (OU = WT.pbrMetallicRoughness) || void 0 === OU ? void 0 : OU.baseColorTexture;
            if (mT) {
              var eU, YU, JU, xU, dU;
              const UT = null !== (eU = TT.extensionsUsed) && void 0 !== eU && eU.includes("KHR_texture_transform") ? null === (YU = mT.extensions) || void 0 === YU ? void 0 : YU.KHR_texture_transform : void 0;
              if (0 !== (null !== (JU = mT.texCoord) && void 0 !== JU ? JU : 0) || 0 !== (null !== (xU = null === UT || void 0 === UT ? void 0 : UT.texCoord) && void 0 !== xU ? xU : 0)) return "uses a second UV set";
              const WT = UU[mT.index];
              if (!WT || !fT(WT.source, mU.length) || void 0 !== WT.sampler && !fT(WT.sampler, null === (dU = TT.samplers) || void 0 === dU ? void 0 : dU.length)) return nT
            }
          }
          for (const WT of mU) {
            if (void 0 !== WT.uri) return HT;
            if (void 0 === WT.bufferView) return nT;
            const mT = dT(TT, UT, WT.bufferView);
            if (!mT) return nT;
            if ("image/png" !== WT.mimeType) {
              var wU, tU, aU;
              return `has ${JT(null!==(wU=null!==(tU={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(aU=WT.mimeType)&&void 0!==aU?aU:""])&&void 0!==tU?tU:WT.mimeType)&&void 0!==wU?wU:"untyped")} image`
            }
            if (!YT(mT)) return `has ${JT(eT(mT))} image`;
            const MT = new DataView(mT.buffer, mT.byteOffset, mT.byteLength),
              gT = MT.getUint32(16),
              kT = MT.getUint32(20);
            if (gT > zT.imageSide || kT > zT.imageSide) return `has a ${gT} \xd7 ${kT} image (the limit is ${zT.imageSide})`
          }
          return null
        }(TT, UT)
      } catch {
        return nT
      }
    }

    function yT(TT) {
      const UT = tT(TT.byteLength);
      if (UT) return UT;
      try {
        const {
          json: UT,
          bin: mT
        } = (0, WT.p)(TT);
        return aT(UT, mT)
      } catch (mT) {
        if (mT instanceof WT.i) return mT.reason;
        throw mT
      }
    }
  },
  34358: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => pT,
      e: () => LT,
      g: () => ZT,
      h: () => MT,
      i: () => zT,
      k: () => BT,
      m: () => jT,
      n: () => lT,
      o: () => gT,
      p: () => kT
    });
    var WT = mT(34363);
    class zT extends Error {
      constructor(TT) {
        super(`GLB refused: it ${TT}`), this.reason = TT, this.name = "GlbRefused"
      }
    }
    class MT extends Error {
      constructor(TT) {
        super(TT), this.name = "GlbError"
      }
    }

    function gT(TT) {
      return Reflect.get(TT, "scene")
    }
    const nT = 5130562,
      HT = "is not a binary glTF 2.0 file";

    function kT(TT) {
      var UT;
      const mT = TT instanceof Uint8Array ? TT : new Uint8Array(TT),
        MT = (0, WT.g)(mT);
      if (null === MT) throw new zT(HT);
      const gT = MT.json,
        {
          jsonEnd: kT,
          length: jT
        } = MT,
        lT = new DataView(mT.buffer, mT.byteOffset, mT.byteLength);
      let LT = -1,
        pT = 0;
      for (let cT = kT; cT < jT;) {
        if (cT + 8 > jT) throw new zT(HT);
        const TT = lT.getUint32(cT, !0),
          UT = lT.getUint32(cT + 4, !0);
        if (cT + 8 + TT > jT || UT === WT.e || UT === nT && -1 !== LT) throw new zT(HT);
        UT === nT && (LT = cT + 8, pT = TT), cT += 8 + TT
      }
      let BT = null;
      const ZT = null === (UT = gT.buffers) || void 0 === UT ? void 0 : UT[0];
      if (-1 !== LT && ZT && void 0 === ZT.uri) {
        if (!(ZT.byteLength >= 0) || ZT.byteLength > pT) throw new zT(HT);
        BT = new Uint8Array(mT.buffer, mT.byteOffset + LT, ZT.byteLength)
      }
      return {
        json: gT,
        bin: BT,
        fileBytes: mT.byteLength
      }
    }

    function jT(TT) {
      const UT = TT.slice(TT.indexOf(",") + 1),
        mT = Uint8Array.fromBase64;
      if (mT) return mT(UT).buffer;
      const WT = atob(UT),
        zT = new Uint8Array(WT.length);
      for (let MT = 0; MT < WT.length; MT++) zT[MT] = WT.charCodeAt(MT);
      return zT.buffer
    }
    async function lT(TT) {
      if (TT.startsWith("data:")) return jT(TT);
      const UT = await fetch(TT);
      if (!UT.ok) throw new MT(`fetching ${TT} failed: ${UT.status} ${UT.statusText}`);
      return await UT.arrayBuffer()
    }
    const LT = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      pT = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      BT = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      ZT = [
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
  34363: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT,
      g: () => MT,
      i: () => gT
    });
    const WT = 1179937895,
      zT = 1313821514;

    function MT(TT) {
      const UT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      if (TT.byteLength < 20 || UT.getUint32(0, !0) !== WT || 2 !== UT.getUint32(4, !0)) return null;
      const mT = Math.min(UT.getUint32(8, !0), TT.byteLength),
        MT = UT.getUint32(12, !0);
      if (UT.getUint32(16, !0) !== zT || 20 + MT > mT) return null;
      let gT;
      try {
        gT = JSON.parse((new TextDecoder).decode(TT.subarray(20, 20 + MT)))
      } catch {
        return null
      }
      return "object" === typeof gT && null !== gT ? {
        json: gT,
        jsonEnd: 20 + MT,
        length: mT
      } : null
    }

    function gT(TT) {
      var UT;
      const mT = null === (UT = MT(TT)) || void 0 === UT ? void 0 : UT.json;
      if (void 0 === mT || !Array.isArray(mT.extensionsUsed) || !mT.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const WT = mT.meshes;
      return Array.isArray(WT) && WT.some((TT => {
        const UT = null === TT || void 0 === TT ? void 0 : TT.primitives;
        return Array.isArray(UT) && UT.some((TT => {
          const UT = null === TT || void 0 === TT ? void 0 : TT.extensions;
          return null != (null === UT || void 0 === UT ? void 0 : UT.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);