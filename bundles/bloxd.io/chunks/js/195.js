export const id = 195;
export const ids = [195];
export const modules = {
  9116: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => aD,
      f: () => KD,
      h: () => JD
    });
    var ID = cD(9125);
    const pD = {
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
      iD = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      fD = 1048576,
      bD = "is not a binary glTF 2.0 file",
      QD = "loads data from outside the file",
      wD = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      SD = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      BD = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      yD = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: BD,
        TEXCOORD_2: BD,
        TEXCOORD_3: BD,
        TEXCOORD_4: BD,
        TEXCOORD_5: BD
      },
      MD = new Set(ID.i.map((DD => {
        let [CD] = DD;
        return CD
      }))),
      tD = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      ZD = 5126;

    function oD(DD) {
      return DD.toLocaleString("en-US")
    }

    function vD(DD, CD, cD) {
      return DD > CD ? `has ${oD(DD)} ${cD} (the limit is ${oD(CD)})` : null
    }

    function ND(DD, CD) {
      return Number.isInteger(DD) && DD >= 0 && DD < (null !== CD && void 0 !== CD ? CD : 0)
    }

    function gD(DD) {
      return Number.isInteger(DD) && DD >= 0
    }

    function XD(DD, CD) {
      return void 0 !== DD && (!Array.isArray(DD) || DD.length > CD)
    }

    function mD(DD, CD) {
      return "object" === typeof DD && null !== DD && Object.keys(DD).length > CD
    }

    function nD(DD) {
      var CD;
      return `${DD.normalized?"normalized ":""}${null!==(CD=ID.f[DD.componentType])&&void 0!==CD?CD:DD.componentType} ${DD.type}`
    }

    function OD(DD) {
      const CD = CD => {
        var cD;
        return null !== (cD = DD[CD]) && void 0 !== cD ? cD : -1
      };
      return 255 === CD(0) && 216 === CD(1) ? "JPEG" : 82 === CD(0) && 73 === CD(1) && 87 === CD(8) && 69 === CD(9) ? "WebP" : 171 === CD(0) && 75 === CD(1) && 84 === CD(2) && 88 === CD(3) ? "KTX2" : "non-PNG"
    }

    function PD(DD) {
      return DD.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((CD, cD) => DD[cD] === CD)) && 73 === DD[12] && 72 === DD[13] && 68 === DD[14] && 82 === DD[15]
    }

    function HD(DD) {
      return /^[aeiou]/i.test(DD) ? `an ${DD}` : `a ${DD}`
    }

    function UD(DD) {
      const CD = DD.byteStride;
      return void 0 === CD || Number.isInteger(CD) && CD >= 4 && CD <= 252 && CD % 4 === 0
    }

    function xD(DD, CD, cD) {
      var ID, pD;
      const iD = null === (ID = DD.bufferViews) || void 0 === ID ? void 0 : ID[cD];
      if (!iD || !CD || 0 !== iD.buffer) return null;
      const fD = null !== (pD = iD.byteOffset) && void 0 !== pD ? pD : 0;
      return !gD(fD) || !gD(iD.byteLength) || fD + iD.byteLength > CD.byteLength ? null : CD.subarray(fD, fD + iD.byteLength)
    }

    function qD(DD, CD) {
      var cD, pD, iD;
      const fD = ID.r[CD.type],
        bD = ID.b[CD.componentType];
      if (!fD || !bD || !Number.isInteger(CD.count) || CD.count < 0) return !1;
      if (void 0 === CD.bufferView) return !0;
      const QD = null === (cD = DD.bufferViews) || void 0 === cD ? void 0 : cD[CD.bufferView],
        wD = null !== (pD = CD.byteOffset) && void 0 !== pD ? pD : 0;
      if (!QD || !gD(wD) || wD % bD !== 0) return !1;
      const SD = fD * bD,
        BD = null !== (iD = QD.byteStride) && void 0 !== iD ? iD : SD;
      if (BD < SD) return !1;
      return (0 === CD.count ? 0 : wD + BD * (CD.count - 1) + SD) <= QD.byteLength
    }

    function JD(DD) {
      return DD > pD.fileBytes ? `is ${(DD/fD).toFixed(1)} MiB (the limit is ${pD.fileBytes/fD} MiB)` : null
    }

    function KD(DD, CD) {
      try {
        return function(DD, CD) {
          var cD, fD, BD, oD, gD, JD, KD, aD, VD, zD, jD, lD, LD, TD, GD, RD, kD;
          const dD = Array.isArray(DD.extensionsUsed) && DD.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(DD, CD) {
              var cD, ID;
              const {
                items: pD,
                perFile: fD,
                surfaces: bD,
                few: QD,
                bounds: wD,
                attributeMembers: SD
              } = iD;
              if (XD(DD.extensionsRequired, QD) || XD(DD.animations, 1 / 0) || XD(DD.skins, 1 / 0)) return !0;
              if (null !== (cD = DD.animations) && void 0 !== cD && cD.length || null !== (ID = DD.skins) && void 0 !== ID && ID.length) return !1;
              if ([
                  [DD.buffers, QD],
                  [DD.scenes, QD],
                  [DD.bufferViews, pD],
                  [DD.accessors, pD],
                  [DD.nodes, pD],
                  [DD.meshes, pD],
                  [DD.materials, bD],
                  [DD.textures, bD],
                  [DD.samplers, bD],
                  [DD.images, bD]
                ].some((DD => {
                  let [CD, cD] = DD;
                  return XD(CD, cD)
                }))) return !0;
              for (const iD of null !== (BD = DD.accessors) && void 0 !== BD ? BD : []) {
                var BD, yD, MD;
                if (Number.isInteger(iD.count) && (!Number.isSafeInteger(iD.count) || Object.is(iD.count, -0)) || XD(null !== (yD = iD.min) && void 0 !== yD ? yD : void 0, wD) || XD(null !== (MD = iD.max) && void 0 !== MD ? MD : void 0, wD)) return !0
              }
              for (const iD of null !== (tD = DD.scenes) && void 0 !== tD ? tD : []) {
                var tD;
                if (XD(iD.nodes, pD)) return !0
              }
              let ZD = 0;
              for (const iD of null !== (oD = DD.nodes) && void 0 !== oD ? oD : []) {
                var oD, vD, ND;
                if (XD(iD.children, fD)) return !0;
                ZD += null !== (vD = null === (ND = iD.children) || void 0 === ND ? void 0 : ND.length) && void 0 !== vD ? vD : 0
              }
              if (ZD > fD) return !0;
              let gD = 0;
              for (const iD of null !== (nD = DD.meshes) && void 0 !== nD ? nD : []) {
                var nD;
                if (!Array.isArray(iD.primitives)) return !0;
                if (gD += iD.primitives.length, gD > fD) return !0;
                for (const DD of iD.primitives) {
                  var OD;
                  const cD = CD ? null === (OD = DD.extensions) || void 0 === OD ? void 0 : OD.KHR_draco_mesh_compression : void 0;
                  if (mD(DD.attributes, SD) || mD(null === cD || void 0 === cD ? void 0 : cD.attributes, SD)) return !0
                }
              }
              return !1
            }(DD, dD)) return bD;
          const YD = null === (cD = DD.asset) || void 0 === cD ? void 0 : cD.version;
          if ("string" !== typeof YD || !/^2\.\d+/.test(YD)) return `uses glTF version ${null!==YD&&void 0!==YD?YD:"(none)"}`;
          const WD = null === (fD = DD.asset) || void 0 === fD ? void 0 : fD.minVersion;
          if (void 0 !== WD && "2.0" !== WD) return `uses glTF version ${WD}`;
          for (const ID of null !== (sD = DD.extensionsRequired) && void 0 !== sD ? sD : []) {
            var sD;
            if (!wD.has(ID)) return `requires the glTF extension ${ID}`
          }
          if (null !== (BD = DD.animations) && void 0 !== BD && BD.length) return "has animations";
          if (null !== (oD = DD.skins) && void 0 !== oD && oD.length) return "uses skins";
          const ED = null !== (gD = DD.buffers) && void 0 !== gD ? gD : [];
          for (const [ID, pD] of ED.entries()) {
            if (void 0 !== pD.uri) return QD;
            if (ID > 0 || !CD) return bD
          }
          for (const [ID, pD] of(null !== (eD = DD.bufferViews) && void 0 !== eD ? eD : []).entries()) {
            var eD;
            if (!xD(DD, CD, ID) || !UD(pD)) return bD
          }
          const uD = null !== (JD = DD.accessors) && void 0 !== JD ? JD : [];
          for (const ID of uD) {
            if (void 0 !== ID.sparse) return "uses sparse accessors";
            const CD = Number.isInteger(ID.count) ? vD(ID.count, pD.accessorElements, "elements in an accessor") : null;
            if (CD) return CD;
            if (!qD(DD, ID)) return bD
          }
          const hD = null !== (KD = DD.scenes) && void 0 !== KD ? KD : [];
          if (1 !== hD.length) return `has ${hD.length} scenes`;
          const rD = (0, ID.v)(DD);
          if (void 0 !== rD && 0 !== rD) return bD;
          const AD = null !== (aD = DD.nodes) && void 0 !== aD ? aD : [],
            FD = null !== (VD = DD.meshes) && void 0 !== VD ? VD : [],
            DC = null !== (zD = DD.materials) && void 0 !== zD ? zD : [],
            CC = null !== (jD = DD.textures) && void 0 !== jD ? jD : [],
            cC = null !== (lD = DD.images) && void 0 !== lD ? lD : [],
            IC = null !== (LD = null !== (TD = null !== (GD = vD(AD.length, pD.nodes, "nodes")) && void 0 !== GD ? GD : vD(FD.length, pD.meshes, "meshes")) && void 0 !== TD ? TD : vD(DC.length, pD.materials, "materials")) && void 0 !== LD ? LD : vD(cC.length, pD.images, "images");
          if (IC) return IC;
          const pC = new Set;
          for (const ID of AD)
            for (const DD of null !== (iC = ID.children) && void 0 !== iC ? iC : []) {
              var iC;
              if (!ND(DD, AD.length) || pC.has(DD)) return bD;
              pC.add(DD)
            }
          const fC = new Set,
            bC = DD => {
              var CD;
              return !fC.has(DD) && (fC.add(DD), (null !== (CD = AD[DD].children) && void 0 !== CD ? CD : []).every(bC))
            };
          for (const ID of null !== (QC = hD[0].nodes) && void 0 !== QC ? QC : []) {
            var QC;
            if (!ND(ID, AD.length) || pC.has(ID) || !bC(ID)) return bD
          }
          for (const ID of AD) {
            if (void 0 !== ID.matrix) return "uses node matrices";
            if (void 0 !== ID.skin) return "uses skins";
            if (void 0 !== ID.weights) return "uses morph targets";
            if (void 0 !== ID.mesh && !ND(ID.mesh, FD.length)) return bD;
            const DD = [
              [ID.translation, 3],
              [ID.rotation, 4],
              [ID.scale, 3]
            ];
            for (const [CD, cD] of DD)
              if (void 0 !== CD && (!Array.isArray(CD) || CD.length !== cD || !CD.every((DD => Number.isFinite(DD))))) return bD
          }
          let wC = -1,
            SC = 0,
            BC = 0,
            yC = null;
          for (const pD of FD) {
            if (void 0 !== pD.weights) return "uses morph targets";
            if (0 === pD.primitives.length) return bD;
            for (const cD of pD.primitives) {
              var MC, tC;
              const pD = null !== (MC = cD.mode) && void 0 !== MC ? MC : 4;
              var ZC;
              if (4 !== pD && 0 !== pD) return `uses ${null!==(ZC=tD[pD])&&void 0!==ZC?ZC:`mode ${pD}`} primitives`;
              if (void 0 !== cD.targets) return "uses morph targets";
              if (void 0 !== cD.material && !ND(cD.material, DC.length)) return bD;
              const iD = dD ? null === (tC = cD.extensions) || void 0 === tC ? void 0 : tC.KHR_draco_mesh_compression : void 0;
              if (iD) {
                if (4 !== pD) return "uses Draco-compressed points";
                if (!xD(DD, CD, iD.bufferView) || "object" !== typeof iD.attributes) return bD
              }
              const fD = cD.attributes;
              if ("object" !== typeof fD || null === fD) return bD;
              if (void 0 === fD.POSITION) return "has a primitive with no positions";
              if (!ND(fD.POSITION, uD.length)) return bD;
              const QD = uD[fD.POSITION].count;
              for (const [DD, CD] of Object.entries(fD)) {
                if (!ND(CD, uD.length)) return bD;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(DD)) return "uses skins";
                const cD = uD[CD],
                  ID = SD[DD];
                if (ID && (cD.componentType !== ZD || cD.normalized || cD.type !== ID)) return `stores ${DD} as ${nD(cD)}`;
                const pD = yD[DD];
                if (pD && (cD.type !== pD.type || !pD.componentTypes.includes(cD.componentType) || cD.componentType === ZD === !!cD.normalized)) return `stores ${DD} as ${nD(cD)}`;
                if (MD.has(DD) && cD.count !== QD) return "has vertex attributes of different lengths"
              }
              if (iD) {
                if (void 0 === cD.indices) return bD;
                for (const CD in iD.attributes)
                  if (MD.has(CD) && void 0 === fD[CD]) return bD;
                if (void 0 === iD.attributes.POSITION) return bD;
                const DD = ND(cD.indices, uD.length) ? uD[cD.indices].count : -1;
                if (0 === DD) return bD;
                if (-1 === wC) wC = iD.bufferView, SC = QD, BC = DD;
                else {
                  yC ??= new Map([
                    [wC, [SC, BC]]
                  ]);
                  const CD = yC.get(iD.bufferView);
                  if (CD && (CD[0] !== QD || CD[1] !== DD)) return bD;
                  yC.set(iD.bufferView, null !== CD && void 0 !== CD ? CD : [QD, DD])
                }
              }
              let wD = QD;
              if (void 0 !== cD.indices) {
                if (!ND(cD.indices, uD.length)) return bD;
                const DD = uD[cD.indices];
                if ("SCALAR" !== DD.type) return bD;
                if (5121 === DD.componentType) return "uses 8-bit indices";
                var oC;
                if (5123 !== DD.componentType && 5125 !== DD.componentType) return `stores indices as ${null!==(oC=ID.f[DD.componentType])&&void 0!==oC?oC:DD.componentType}`;
                if (!iD && void 0 === DD.bufferView) return bD;
                wD = DD.count
              }
              if (4 === pD && wD % 3 !== 0) return bD
            }
          }
          let vC = 0,
            NC = 0,
            gC = 0;
          for (let ID = 0; ID < AD.length; ID++) {
            const DD = AD[ID].mesh;
            if (void 0 !== DD && fC.has(ID))
              for (const CD of FD[DD].primitives) gC++, vC += uD[CD.attributes.POSITION].count, void 0 !== CD.indices && (NC += uD[CD.indices].count)
          }
          const XC = null !== (RD = null !== (kD = vD(vC, pD.vertices, "vertices")) && void 0 !== kD ? kD : vD(NC, pD.indices, "indices")) && void 0 !== RD ? RD : vD(gC, pD.primitives, "primitives");
          if (XC) return XC;
          for (const ID of DC) {
            var mC, nC;
            if (void 0 !== ID.emissiveTexture) return "uses an emissive texture";
            const CD = null !== (mC = ID.alphaMode) && void 0 !== mC ? mC : "OPAQUE";
            if ("OPAQUE" !== CD && "MASK" !== CD && "BLEND" !== CD) return bD;
            const cD = null === (nC = ID.pbrMetallicRoughness) || void 0 === nC ? void 0 : nC.baseColorTexture;
            if (cD) {
              var OC, PC, HC, UC, xC;
              const CD = null !== (OC = DD.extensionsUsed) && void 0 !== OC && OC.includes("KHR_texture_transform") ? null === (PC = cD.extensions) || void 0 === PC ? void 0 : PC.KHR_texture_transform : void 0;
              if (0 !== (null !== (HC = cD.texCoord) && void 0 !== HC ? HC : 0) || 0 !== (null !== (UC = null === CD || void 0 === CD ? void 0 : CD.texCoord) && void 0 !== UC ? UC : 0)) return "uses a second UV set";
              const ID = CC[cD.index];
              if (!ID || !ND(ID.source, cC.length) || void 0 !== ID.sampler && !ND(ID.sampler, null === (xC = DD.samplers) || void 0 === xC ? void 0 : xC.length)) return bD
            }
          }
          for (const ID of cC) {
            if (void 0 !== ID.uri) return QD;
            if (void 0 === ID.bufferView) return bD;
            const cD = xD(DD, CD, ID.bufferView);
            if (!cD) return bD;
            if ("image/png" !== ID.mimeType) {
              var qC, JC, KC;
              return `has ${HD(null!==(qC=null!==(JC={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(KC=ID.mimeType)&&void 0!==KC?KC:""])&&void 0!==JC?JC:ID.mimeType)&&void 0!==qC?qC:"untyped")} image`
            }
            if (!PD(cD)) return `has ${HD(OD(cD))} image`;
            const iD = new DataView(cD.buffer, cD.byteOffset, cD.byteLength),
              fD = iD.getUint32(16),
              wD = iD.getUint32(20);
            if (fD > pD.imageSide || wD > pD.imageSide) return `has a ${fD} \xd7 ${wD} image (the limit is ${pD.imageSide})`
          }
          return null
        }(DD, CD)
      } catch {
        return bD
      }
    }

    function aD(DD) {
      const CD = JD(DD.byteLength);
      if (CD) return CD;
      try {
        const {
          json: CD,
          bin: cD
        } = (0, ID.x)(DD);
        return KD(CD, cD)
      } catch (cD) {
        if (cD instanceof ID.q) return cD.reason;
        throw cD
      }
    }
  },
  9125: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => MD,
      f: () => yD,
      i: () => ZD,
      m: () => iD,
      q: () => pD,
      r: () => tD,
      t: () => SD,
      u: () => BD,
      v: () => fD,
      x: () => wD
    });
    var ID = cD(9132);
    class pD extends Error {
      constructor(DD) {
        super(`GLB refused: it ${DD}`), this.reason = DD, this.name = "GlbRefused"
      }
    }
    class iD extends Error {
      constructor(DD) {
        super(DD), this.name = "GlbError"
      }
    }

    function fD(DD) {
      return Reflect.get(DD, "scene")
    }
    const bD = 5130562,
      QD = "is not a binary glTF 2.0 file";

    function wD(DD) {
      var CD;
      const cD = DD instanceof Uint8Array ? DD : new Uint8Array(DD),
        iD = (0, ID.d)(cD);
      if (null === iD) throw new pD(QD);
      const fD = iD.json,
        {
          jsonEnd: wD,
          length: SD
        } = iD,
        BD = new DataView(cD.buffer, cD.byteOffset, cD.byteLength);
      let yD = -1,
        MD = 0;
      for (let oD = wD; oD < SD;) {
        if (oD + 8 > SD) throw new pD(QD);
        const DD = BD.getUint32(oD, !0),
          CD = BD.getUint32(oD + 4, !0);
        if (oD + 8 + DD > SD || CD === ID.c || CD === bD && -1 !== yD) throw new pD(QD);
        CD === bD && (yD = oD + 8, MD = DD), oD += 8 + DD
      }
      let tD = null;
      const ZD = null === (CD = fD.buffers) || void 0 === CD ? void 0 : CD[0];
      if (-1 !== yD && ZD && void 0 === ZD.uri) {
        if (!(ZD.byteLength >= 0) || ZD.byteLength > MD) throw new pD(QD);
        tD = new Uint8Array(cD.buffer, cD.byteOffset + yD, ZD.byteLength)
      }
      return {
        json: fD,
        bin: tD,
        fileBytes: cD.byteLength
      }
    }

    function SD(DD) {
      const CD = DD.slice(DD.indexOf(",") + 1),
        cD = Uint8Array.fromBase64;
      if (cD) return cD(CD).buffer;
      const ID = atob(CD),
        pD = new Uint8Array(ID.length);
      for (let iD = 0; iD < ID.length; iD++) pD[iD] = ID.charCodeAt(iD);
      return pD.buffer
    }
    async function BD(DD) {
      if (DD.startsWith("data:")) return SD(DD);
      const CD = await fetch(DD);
      if (!CD.ok) throw new iD(`fetching ${DD} failed: ${CD.status} ${CD.statusText}`);
      return await CD.arrayBuffer()
    }
    const yD = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      MD = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      tD = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      ZD = [
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
  9132: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      d: () => iD,
      g: () => fD
    });
    const ID = 1179937895,
      pD = 1313821514;

    function iD(DD) {
      const CD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
      if (DD.byteLength < 20 || CD.getUint32(0, !0) !== ID || 2 !== CD.getUint32(4, !0)) return null;
      const cD = Math.min(CD.getUint32(8, !0), DD.byteLength),
        iD = CD.getUint32(12, !0);
      if (CD.getUint32(16, !0) !== pD || 20 + iD > cD) return null;
      let fD;
      try {
        fD = JSON.parse((new TextDecoder).decode(DD.subarray(20, 20 + iD)))
      } catch {
        return null
      }
      return "object" === typeof fD && null !== fD ? {
        json: fD,
        jsonEnd: 20 + iD,
        length: cD
      } : null
    }

    function fD(DD) {
      var CD;
      const cD = null === (CD = iD(DD)) || void 0 === CD ? void 0 : CD.json;
      if (void 0 === cD || !Array.isArray(cD.extensionsUsed) || !cD.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const ID = cD.meshes;
      return Array.isArray(ID) && ID.some((DD => {
        const CD = null === DD || void 0 === DD ? void 0 : DD.primitives;
        return Array.isArray(CD) && CD.some((DD => {
          const CD = null === DD || void 0 === DD ? void 0 : DD.extensions;
          return null != (null === CD || void 0 === CD ? void 0 : CD.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);