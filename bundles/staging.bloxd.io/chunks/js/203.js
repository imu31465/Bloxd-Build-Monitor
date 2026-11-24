export const id = 203;
export const ids = [203];
export const modules = {
  34278: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => jD,
      e: () => bD,
      i: () => TD
    });
    var pD = wD(34287);
    const sD = {
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
      KD = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      rD = 1048576,
      LD = "is not a binary glTF 2.0 file",
      cD = "loads data from outside the file",
      gD = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      RD = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      AD = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      UD = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: AD,
        TEXCOORD_2: AD,
        TEXCOORD_3: AD,
        TEXCOORD_4: AD,
        TEXCOORD_5: AD
      },
      fD = new Set(pD.i.map((DD => {
        let [zD] = DD;
        return zD
      }))),
      ID = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      BD = 5126;

    function GD(DD) {
      return DD.toLocaleString("en-US")
    }

    function hD(DD, zD, wD) {
      return DD > zD ? `has ${GD(DD)} ${wD} (the limit is ${GD(zD)})` : null
    }

    function nD(DD, zD) {
      return Number.isInteger(DD) && DD >= 0 && DD < (null !== zD && void 0 !== zD ? zD : 0)
    }

    function MD(DD) {
      return Number.isInteger(DD) && DD >= 0
    }

    function OD(DD, zD) {
      return void 0 !== DD && (!Array.isArray(DD) || DD.length > zD)
    }

    function JD(DD, zD) {
      return "object" === typeof DD && null !== DD && Object.keys(DD).length > zD
    }

    function ED(DD) {
      var zD;
      return `${DD.normalized?"normalized ":""}${null!==(zD=pD.f[DD.componentType])&&void 0!==zD?zD:DD.componentType} ${DD.type}`
    }

    function QD(DD) {
      const zD = zD => {
        var wD;
        return null !== (wD = DD[zD]) && void 0 !== wD ? wD : -1
      };
      return 255 === zD(0) && 216 === zD(1) ? "JPEG" : 82 === zD(0) && 73 === zD(1) && 87 === zD(8) && 69 === zD(9) ? "WebP" : 171 === zD(0) && 75 === zD(1) && 84 === zD(2) && 88 === zD(3) ? "KTX2" : "non-PNG"
    }

    function XD(DD) {
      return DD.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((zD, wD) => DD[wD] === zD)) && 73 === DD[12] && 72 === DD[13] && 68 === DD[14] && 82 === DD[15]
    }

    function VD(DD) {
      return /^[aeiou]/i.test(DD) ? `an ${DD}` : `a ${DD}`
    }

    function PD(DD) {
      const zD = DD.byteStride;
      return void 0 === zD || Number.isInteger(zD) && zD >= 4 && zD <= 252 && zD % 4 === 0
    }

    function CD(DD, zD, wD) {
      var pD, sD;
      const KD = null === (pD = DD.bufferViews) || void 0 === pD ? void 0 : pD[wD];
      if (!KD || !zD || 0 !== KD.buffer) return null;
      const rD = null !== (sD = KD.byteOffset) && void 0 !== sD ? sD : 0;
      return !MD(rD) || !MD(KD.byteLength) || rD + KD.byteLength > zD.byteLength ? null : zD.subarray(rD, rD + KD.byteLength)
    }

    function xD(DD, zD) {
      var wD, sD, KD;
      const rD = pD.q[zD.type],
        LD = pD.b[zD.componentType];
      if (!rD || !LD || !Number.isInteger(zD.count) || zD.count < 0) return !1;
      if (void 0 === zD.bufferView) return !0;
      const cD = null === (wD = DD.bufferViews) || void 0 === wD ? void 0 : wD[zD.bufferView],
        gD = null !== (sD = zD.byteOffset) && void 0 !== sD ? sD : 0;
      if (!cD || !MD(gD) || gD % LD !== 0) return !1;
      const RD = rD * LD,
        AD = null !== (KD = cD.byteStride) && void 0 !== KD ? KD : RD;
      if (AD < RD) return !1;
      return (0 === zD.count ? 0 : gD + AD * (zD.count - 1) + RD) <= cD.byteLength
    }

    function TD(DD) {
      return DD > sD.fileBytes ? `is ${(DD/rD).toFixed(1)} MiB (the limit is ${sD.fileBytes/rD} MiB)` : null
    }

    function bD(DD, zD) {
      try {
        return function(DD, zD) {
          var wD, rD, AD, GD, MD, TD, bD, jD, dD, SD, iD, lD, WD, ND, ZD, yD, kD;
          const mD = Array.isArray(DD.extensionsUsed) && DD.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(DD, zD) {
              var wD, pD;
              const {
                items: sD,
                perFile: rD,
                surfaces: LD,
                few: cD,
                bounds: gD,
                attributeMembers: RD
              } = KD;
              if (OD(DD.extensionsRequired, cD) || OD(DD.animations, 1 / 0) || OD(DD.skins, 1 / 0)) return !0;
              if (null !== (wD = DD.animations) && void 0 !== wD && wD.length || null !== (pD = DD.skins) && void 0 !== pD && pD.length) return !1;
              if ([
                  [DD.buffers, cD],
                  [DD.scenes, cD],
                  [DD.bufferViews, sD],
                  [DD.accessors, sD],
                  [DD.nodes, sD],
                  [DD.meshes, sD],
                  [DD.materials, LD],
                  [DD.textures, LD],
                  [DD.samplers, LD],
                  [DD.images, LD]
                ].some((DD => {
                  let [zD, wD] = DD;
                  return OD(zD, wD)
                }))) return !0;
              for (const KD of null !== (AD = DD.accessors) && void 0 !== AD ? AD : []) {
                var AD, UD, fD;
                if (Number.isInteger(KD.count) && (!Number.isSafeInteger(KD.count) || Object.is(KD.count, -0)) || OD(null !== (UD = KD.min) && void 0 !== UD ? UD : void 0, gD) || OD(null !== (fD = KD.max) && void 0 !== fD ? fD : void 0, gD)) return !0
              }
              for (const KD of null !== (ID = DD.scenes) && void 0 !== ID ? ID : []) {
                var ID;
                if (OD(KD.nodes, sD)) return !0
              }
              let BD = 0;
              for (const KD of null !== (GD = DD.nodes) && void 0 !== GD ? GD : []) {
                var GD, hD, nD;
                if (OD(KD.children, rD)) return !0;
                BD += null !== (hD = null === (nD = KD.children) || void 0 === nD ? void 0 : nD.length) && void 0 !== hD ? hD : 0
              }
              if (BD > rD) return !0;
              let MD = 0;
              for (const KD of null !== (ED = DD.meshes) && void 0 !== ED ? ED : []) {
                var ED;
                if (!Array.isArray(KD.primitives)) return !0;
                if (MD += KD.primitives.length, MD > rD) return !0;
                for (const DD of KD.primitives) {
                  var QD;
                  const wD = zD ? null === (QD = DD.extensions) || void 0 === QD ? void 0 : QD.KHR_draco_mesh_compression : void 0;
                  if (JD(DD.attributes, RD) || JD(null === wD || void 0 === wD ? void 0 : wD.attributes, RD)) return !0
                }
              }
              return !1
            }(DD, mD)) return LD;
          const eD = null === (wD = DD.asset) || void 0 === wD ? void 0 : wD.version;
          if ("string" !== typeof eD || !/^2\.\d+/.test(eD)) return `uses glTF version ${null!==eD&&void 0!==eD?eD:"(none)"}`;
          const oD = null === (rD = DD.asset) || void 0 === rD ? void 0 : rD.minVersion;
          if (void 0 !== oD && "2.0" !== oD) return `uses glTF version ${oD}`;
          for (const pD of null !== (aD = DD.extensionsRequired) && void 0 !== aD ? aD : []) {
            var aD;
            if (!gD.has(pD)) return `requires the glTF extension ${pD}`
          }
          if (null !== (AD = DD.animations) && void 0 !== AD && AD.length) return "has animations";
          if (null !== (GD = DD.skins) && void 0 !== GD && GD.length) return "uses skins";
          const uD = null !== (MD = DD.buffers) && void 0 !== MD ? MD : [];
          for (const [pD, sD] of uD.entries()) {
            if (void 0 !== sD.uri) return cD;
            if (pD > 0 || !zD) return LD
          }
          for (const [pD, sD] of(null !== (vD = DD.bufferViews) && void 0 !== vD ? vD : []).entries()) {
            var vD;
            if (!CD(DD, zD, pD) || !PD(sD)) return LD
          }
          const tD = null !== (TD = DD.accessors) && void 0 !== TD ? TD : [];
          for (const pD of tD) {
            if (void 0 !== pD.sparse) return "uses sparse accessors";
            const zD = Number.isInteger(pD.count) ? hD(pD.count, sD.accessorElements, "elements in an accessor") : null;
            if (zD) return zD;
            if (!xD(DD, pD)) return LD
          }
          const FD = null !== (bD = DD.scenes) && void 0 !== bD ? bD : [];
          if (1 !== FD.length) return `has ${FD.length} scenes`;
          const YD = (0, pD.z)(DD);
          if (void 0 !== YD && 0 !== YD) return LD;
          const HD = null !== (jD = DD.nodes) && void 0 !== jD ? jD : [],
            qD = null !== (dD = DD.meshes) && void 0 !== dD ? dD : [],
            Dz = null !== (SD = DD.materials) && void 0 !== SD ? SD : [],
            zz = null !== (iD = DD.textures) && void 0 !== iD ? iD : [],
            wz = null !== (lD = DD.images) && void 0 !== lD ? lD : [],
            pz = null !== (WD = null !== (ND = null !== (ZD = hD(HD.length, sD.nodes, "nodes")) && void 0 !== ZD ? ZD : hD(qD.length, sD.meshes, "meshes")) && void 0 !== ND ? ND : hD(Dz.length, sD.materials, "materials")) && void 0 !== WD ? WD : hD(wz.length, sD.images, "images");
          if (pz) return pz;
          const sz = new Set;
          for (const pD of HD)
            for (const DD of null !== (Kz = pD.children) && void 0 !== Kz ? Kz : []) {
              var Kz;
              if (!nD(DD, HD.length) || sz.has(DD)) return LD;
              sz.add(DD)
            }
          const rz = new Set,
            Lz = DD => {
              var zD;
              return !rz.has(DD) && (rz.add(DD), (null !== (zD = HD[DD].children) && void 0 !== zD ? zD : []).every(Lz))
            };
          for (const pD of null !== (cz = FD[0].nodes) && void 0 !== cz ? cz : []) {
            var cz;
            if (!nD(pD, HD.length) || sz.has(pD) || !Lz(pD)) return LD
          }
          for (const pD of HD) {
            if (void 0 !== pD.matrix) return "uses node matrices";
            if (void 0 !== pD.skin) return "uses skins";
            if (void 0 !== pD.weights) return "uses morph targets";
            if (void 0 !== pD.mesh && !nD(pD.mesh, qD.length)) return LD;
            const DD = [
              [pD.translation, 3],
              [pD.rotation, 4],
              [pD.scale, 3]
            ];
            for (const [zD, wD] of DD)
              if (void 0 !== zD && (!Array.isArray(zD) || zD.length !== wD || !zD.every((DD => Number.isFinite(DD))))) return LD
          }
          let gz = -1,
            Rz = 0,
            Az = 0,
            Uz = null;
          for (const sD of qD) {
            if (void 0 !== sD.weights) return "uses morph targets";
            if (0 === sD.primitives.length) return LD;
            for (const wD of sD.primitives) {
              var fz, Iz;
              const sD = null !== (fz = wD.mode) && void 0 !== fz ? fz : 4;
              var Bz;
              if (4 !== sD && 0 !== sD) return `uses ${null!==(Bz=ID[sD])&&void 0!==Bz?Bz:`mode ${sD}`} primitives`;
              if (void 0 !== wD.targets) return "uses morph targets";
              if (void 0 !== wD.material && !nD(wD.material, Dz.length)) return LD;
              const KD = mD ? null === (Iz = wD.extensions) || void 0 === Iz ? void 0 : Iz.KHR_draco_mesh_compression : void 0;
              if (KD) {
                if (4 !== sD) return "uses Draco-compressed points";
                if (!CD(DD, zD, KD.bufferView) || "object" !== typeof KD.attributes) return LD
              }
              const rD = wD.attributes;
              if ("object" !== typeof rD || null === rD) return LD;
              if (void 0 === rD.POSITION) return "has a primitive with no positions";
              if (!nD(rD.POSITION, tD.length)) return LD;
              const cD = tD[rD.POSITION].count;
              for (const [DD, zD] of Object.entries(rD)) {
                if (!nD(zD, tD.length)) return LD;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(DD)) return "uses skins";
                const wD = tD[zD],
                  pD = RD[DD];
                if (pD && (wD.componentType !== BD || wD.normalized || wD.type !== pD)) return `stores ${DD} as ${ED(wD)}`;
                const sD = UD[DD];
                if (sD && (wD.type !== sD.type || !sD.componentTypes.includes(wD.componentType) || wD.componentType === BD === !!wD.normalized)) return `stores ${DD} as ${ED(wD)}`;
                if (fD.has(DD) && wD.count !== cD) return "has vertex attributes of different lengths"
              }
              if (KD) {
                if (void 0 === wD.indices) return LD;
                for (const zD in KD.attributes)
                  if (fD.has(zD) && void 0 === rD[zD]) return LD;
                if (void 0 === KD.attributes.POSITION) return LD;
                const DD = nD(wD.indices, tD.length) ? tD[wD.indices].count : -1;
                if (0 === DD) return LD;
                if (-1 === gz) gz = KD.bufferView, Rz = cD, Az = DD;
                else {
                  Uz ??= new Map([
                    [gz, [Rz, Az]]
                  ]);
                  const zD = Uz.get(KD.bufferView);
                  if (zD && (zD[0] !== cD || zD[1] !== DD)) return LD;
                  Uz.set(KD.bufferView, null !== zD && void 0 !== zD ? zD : [cD, DD])
                }
              }
              let gD = cD;
              if (void 0 !== wD.indices) {
                if (!nD(wD.indices, tD.length)) return LD;
                const DD = tD[wD.indices];
                if ("SCALAR" !== DD.type) return LD;
                if (5121 === DD.componentType) return "uses 8-bit indices";
                var Gz;
                if (5123 !== DD.componentType && 5125 !== DD.componentType) return `stores indices as ${null!==(Gz=pD.f[DD.componentType])&&void 0!==Gz?Gz:DD.componentType}`;
                if (!KD && void 0 === DD.bufferView) return LD;
                gD = DD.count
              }
              if (4 === sD && gD % 3 !== 0) return LD
            }
          }
          let hz = 0,
            nz = 0,
            Mz = 0;
          for (let pD = 0; pD < HD.length; pD++) {
            const DD = HD[pD].mesh;
            if (void 0 !== DD && rz.has(pD))
              for (const zD of qD[DD].primitives) Mz++, hz += tD[zD.attributes.POSITION].count, void 0 !== zD.indices && (nz += tD[zD.indices].count)
          }
          const Oz = null !== (yD = null !== (kD = hD(hz, sD.vertices, "vertices")) && void 0 !== kD ? kD : hD(nz, sD.indices, "indices")) && void 0 !== yD ? yD : hD(Mz, sD.primitives, "primitives");
          if (Oz) return Oz;
          for (const pD of Dz) {
            var Jz, Ez;
            if (void 0 !== pD.emissiveTexture) return "uses an emissive texture";
            const zD = null !== (Jz = pD.alphaMode) && void 0 !== Jz ? Jz : "OPAQUE";
            if ("OPAQUE" !== zD && "MASK" !== zD && "BLEND" !== zD) return LD;
            const wD = null === (Ez = pD.pbrMetallicRoughness) || void 0 === Ez ? void 0 : Ez.baseColorTexture;
            if (wD) {
              var Qz, Xz, Vz, Pz, Cz;
              const zD = null !== (Qz = DD.extensionsUsed) && void 0 !== Qz && Qz.includes("KHR_texture_transform") ? null === (Xz = wD.extensions) || void 0 === Xz ? void 0 : Xz.KHR_texture_transform : void 0;
              if (0 !== (null !== (Vz = wD.texCoord) && void 0 !== Vz ? Vz : 0) || 0 !== (null !== (Pz = null === zD || void 0 === zD ? void 0 : zD.texCoord) && void 0 !== Pz ? Pz : 0)) return "uses a second UV set";
              const pD = zz[wD.index];
              if (!pD || !nD(pD.source, wz.length) || void 0 !== pD.sampler && !nD(pD.sampler, null === (Cz = DD.samplers) || void 0 === Cz ? void 0 : Cz.length)) return LD
            }
          }
          for (const pD of wz) {
            if (void 0 !== pD.uri) return cD;
            if (void 0 === pD.bufferView) return LD;
            const wD = CD(DD, zD, pD.bufferView);
            if (!wD) return LD;
            if ("image/png" !== pD.mimeType) {
              var xz, Tz, bz;
              return `has ${VD(null!==(xz=null!==(Tz={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(bz=pD.mimeType)&&void 0!==bz?bz:""])&&void 0!==Tz?Tz:pD.mimeType)&&void 0!==xz?xz:"untyped")} image`
            }
            if (!XD(wD)) return `has ${VD(QD(wD))} image`;
            const KD = new DataView(wD.buffer, wD.byteOffset, wD.byteLength),
              rD = KD.getUint32(16),
              gD = KD.getUint32(20);
            if (rD > sD.imageSide || gD > sD.imageSide) return `has a ${rD} \xd7 ${gD} image (the limit is ${sD.imageSide})`
          }
          return null
        }(DD, zD)
      } catch {
        return LD
      }
    }

    function jD(DD) {
      const zD = TD(DD.byteLength);
      if (zD) return zD;
      try {
        const {
          json: zD,
          bin: wD
        } = (0, pD.D)(DD);
        return bD(zD, wD)
      } catch (wD) {
        if (wD instanceof pD.n) return wD.reason;
        throw wD
      }
    }
  },
  34287: (DD, zD, wD) => {
    wD.d(zD, {
      D: () => gD,
      b: () => fD,
      f: () => UD,
      i: () => BD,
      m: () => KD,
      n: () => sD,
      q: () => ID,
      s: () => RD,
      w: () => AD,
      z: () => rD
    });
    var pD = wD(34294);
    class sD extends Error {
      constructor(DD) {
        super(`GLB refused: it ${DD}`), this.reason = DD, this.name = "GlbRefused"
      }
    }
    class KD extends Error {
      constructor(DD) {
        super(DD), this.name = "GlbError"
      }
    }

    function rD(DD) {
      return Reflect.get(DD, "scene")
    }
    const LD = 5130562,
      cD = "is not a binary glTF 2.0 file";

    function gD(DD) {
      var zD;
      const wD = DD instanceof Uint8Array ? DD : new Uint8Array(DD),
        KD = (0, pD.d)(wD);
      if (null === KD) throw new sD(cD);
      const rD = KD.json,
        {
          jsonEnd: gD,
          length: RD
        } = KD,
        AD = new DataView(wD.buffer, wD.byteOffset, wD.byteLength);
      let UD = -1,
        fD = 0;
      for (let GD = gD; GD < RD;) {
        if (GD + 8 > RD) throw new sD(cD);
        const DD = AD.getUint32(GD, !0),
          zD = AD.getUint32(GD + 4, !0);
        if (GD + 8 + DD > RD || zD === pD.c || zD === LD && -1 !== UD) throw new sD(cD);
        zD === LD && (UD = GD + 8, fD = DD), GD += 8 + DD
      }
      let ID = null;
      const BD = null === (zD = rD.buffers) || void 0 === zD ? void 0 : zD[0];
      if (-1 !== UD && BD && void 0 === BD.uri) {
        if (!(BD.byteLength >= 0) || BD.byteLength > fD) throw new sD(cD);
        ID = new Uint8Array(wD.buffer, wD.byteOffset + UD, BD.byteLength)
      }
      return {
        json: rD,
        bin: ID,
        fileBytes: wD.byteLength
      }
    }

    function RD(DD) {
      const zD = DD.slice(DD.indexOf(",") + 1),
        wD = Uint8Array.fromBase64;
      if (wD) return wD(zD).buffer;
      const pD = atob(zD),
        sD = new Uint8Array(pD.length);
      for (let KD = 0; KD < pD.length; KD++) sD[KD] = pD.charCodeAt(KD);
      return sD.buffer
    }
    async function AD(DD) {
      if (DD.startsWith("data:")) return RD(DD);
      const zD = await fetch(DD);
      if (!zD.ok) throw new KD(`fetching ${DD} failed: ${zD.status} ${zD.statusText}`);
      return await zD.arrayBuffer()
    }
    const UD = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      fD = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      ID = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      BD = [
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
  34294: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      d: () => KD,
      g: () => rD
    });
    const pD = 1179937895,
      sD = 1313821514;

    function KD(DD) {
      const zD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
      if (DD.byteLength < 20 || zD.getUint32(0, !0) !== pD || 2 !== zD.getUint32(4, !0)) return null;
      const wD = Math.min(zD.getUint32(8, !0), DD.byteLength),
        KD = zD.getUint32(12, !0);
      if (zD.getUint32(16, !0) !== sD || 20 + KD > wD) return null;
      let rD;
      try {
        rD = JSON.parse((new TextDecoder).decode(DD.subarray(20, 20 + KD)))
      } catch {
        return null
      }
      return "object" === typeof rD && null !== rD ? {
        json: rD,
        jsonEnd: 20 + KD,
        length: wD
      } : null
    }

    function rD(DD) {
      var zD;
      const wD = null === (zD = KD(DD)) || void 0 === zD ? void 0 : zD.json;
      if (void 0 === wD || !Array.isArray(wD.extensionsUsed) || !wD.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const pD = wD.meshes;
      return Array.isArray(pD) && pD.some((DD => {
        const zD = null === DD || void 0 === DD ? void 0 : DD.primitives;
        return Array.isArray(zD) && zD.some((DD => {
          const zD = null === DD || void 0 === DD ? void 0 : DD.extensions;
          return null != (null === zD || void 0 === zD ? void 0 : zD.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);