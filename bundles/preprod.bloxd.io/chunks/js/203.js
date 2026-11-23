export const id = 203;
export const ids = [203];
export const modules = {
  34223: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => mC,
      f: () => dC,
      j: () => YC
    });
    var QC = ZC(34228);
    const wC = {
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
      bC = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      nC = 1048576,
      fC = "is not a binary glTF 2.0 file",
      oC = "loads data from outside the file",
      qC = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      FC = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      WC = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      NC = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: WC,
        TEXCOORD_2: WC,
        TEXCOORD_3: WC,
        TEXCOORD_4: WC,
        TEXCOORD_5: WC
      },
      MC = new Set(QC.h.map((CC => {
        let [zC] = CC;
        return zC
      }))),
      gC = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      SC = 5126;

    function pC(CC) {
      return CC.toLocaleString("en-US")
    }

    function PC(CC, zC, ZC) {
      return CC > zC ? `has ${pC(CC)} ${ZC} (the limit is ${pC(zC)})` : null
    }

    function GC(CC, zC) {
      return Number.isInteger(CC) && CC >= 0 && CC < (null !== zC && void 0 !== zC ? zC : 0)
    }

    function RC(CC) {
      return Number.isInteger(CC) && CC >= 0
    }

    function AC(CC, zC) {
      return void 0 !== CC && (!Array.isArray(CC) || CC.length > zC)
    }

    function xC(CC, zC) {
      return "object" === typeof CC && null !== CC && Object.keys(CC).length > zC
    }

    function JC(CC) {
      var zC;
      return `${CC.normalized?"normalized ":""}${null!==(zC=QC.f[CC.componentType])&&void 0!==zC?zC:CC.componentType} ${CC.type}`
    }

    function IC(CC) {
      const zC = zC => {
        var ZC;
        return null !== (ZC = CC[zC]) && void 0 !== ZC ? ZC : -1
      };
      return 255 === zC(0) && 216 === zC(1) ? "JPEG" : 82 === zC(0) && 73 === zC(1) && 87 === zC(8) && 69 === zC(9) ? "WebP" : 171 === zC(0) && 75 === zC(1) && 84 === zC(2) && 88 === zC(3) ? "KTX2" : "non-PNG"
    }

    function iC(CC) {
      return CC.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((zC, ZC) => CC[ZC] === zC)) && 73 === CC[12] && 72 === CC[13] && 68 === CC[14] && 82 === CC[15]
    }

    function vC(CC) {
      return /^[aeiou]/i.test(CC) ? `an ${CC}` : `a ${CC}`
    }

    function eC(CC) {
      const zC = CC.byteStride;
      return void 0 === zC || Number.isInteger(zC) && zC >= 4 && zC <= 252 && zC % 4 === 0
    }

    function hC(CC, zC, ZC) {
      var QC, wC;
      const bC = null === (QC = CC.bufferViews) || void 0 === QC ? void 0 : QC[ZC];
      if (!bC || !zC || 0 !== bC.buffer) return null;
      const nC = null !== (wC = bC.byteOffset) && void 0 !== wC ? wC : 0;
      return !RC(nC) || !RC(bC.byteLength) || nC + bC.byteLength > zC.byteLength ? null : zC.subarray(nC, nC + bC.byteLength)
    }

    function KC(CC, zC) {
      var ZC, wC, bC;
      const nC = QC.q[zC.type],
        fC = QC.e[zC.componentType];
      if (!nC || !fC || !Number.isInteger(zC.count) || zC.count < 0) return !1;
      if (void 0 === zC.bufferView) return !0;
      const oC = null === (ZC = CC.bufferViews) || void 0 === ZC ? void 0 : ZC[zC.bufferView],
        qC = null !== (wC = zC.byteOffset) && void 0 !== wC ? wC : 0;
      if (!oC || !RC(qC) || qC % fC !== 0) return !1;
      const FC = nC * fC,
        WC = null !== (bC = oC.byteStride) && void 0 !== bC ? bC : FC;
      if (WC < FC) return !1;
      return (0 === zC.count ? 0 : qC + WC * (zC.count - 1) + FC) <= oC.byteLength
    }

    function YC(CC) {
      return CC > wC.fileBytes ? `is ${(CC/nC).toFixed(1)} MiB (the limit is ${wC.fileBytes/nC} MiB)` : null
    }

    function dC(CC, zC) {
      try {
        return function(CC, zC) {
          var ZC, nC, WC, pC, RC, YC, dC, mC, HC, EC, lC, XC, cC, uC, rC, sC, TC;
          const aC = Array.isArray(CC.extensionsUsed) && CC.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(CC, zC) {
              var ZC, QC;
              const {
                items: wC,
                perFile: nC,
                surfaces: fC,
                few: oC,
                bounds: qC,
                attributeMembers: FC
              } = bC;
              if (AC(CC.extensionsRequired, oC) || AC(CC.animations, 1 / 0) || AC(CC.skins, 1 / 0)) return !0;
              if (null !== (ZC = CC.animations) && void 0 !== ZC && ZC.length || null !== (QC = CC.skins) && void 0 !== QC && QC.length) return !1;
              if ([
                  [CC.buffers, oC],
                  [CC.scenes, oC],
                  [CC.bufferViews, wC],
                  [CC.accessors, wC],
                  [CC.nodes, wC],
                  [CC.meshes, wC],
                  [CC.materials, fC],
                  [CC.textures, fC],
                  [CC.samplers, fC],
                  [CC.images, fC]
                ].some((CC => {
                  let [zC, ZC] = CC;
                  return AC(zC, ZC)
                }))) return !0;
              for (const bC of null !== (WC = CC.accessors) && void 0 !== WC ? WC : []) {
                var WC, NC, MC;
                if (Number.isInteger(bC.count) && (!Number.isSafeInteger(bC.count) || Object.is(bC.count, -0)) || AC(null !== (NC = bC.min) && void 0 !== NC ? NC : void 0, qC) || AC(null !== (MC = bC.max) && void 0 !== MC ? MC : void 0, qC)) return !0
              }
              for (const bC of null !== (gC = CC.scenes) && void 0 !== gC ? gC : []) {
                var gC;
                if (AC(bC.nodes, wC)) return !0
              }
              let SC = 0;
              for (const bC of null !== (pC = CC.nodes) && void 0 !== pC ? pC : []) {
                var pC, PC, GC;
                if (AC(bC.children, nC)) return !0;
                SC += null !== (PC = null === (GC = bC.children) || void 0 === GC ? void 0 : GC.length) && void 0 !== PC ? PC : 0
              }
              if (SC > nC) return !0;
              let RC = 0;
              for (const bC of null !== (JC = CC.meshes) && void 0 !== JC ? JC : []) {
                var JC;
                if (!Array.isArray(bC.primitives)) return !0;
                if (RC += bC.primitives.length, RC > nC) return !0;
                for (const CC of bC.primitives) {
                  var IC;
                  const ZC = zC ? null === (IC = CC.extensions) || void 0 === IC ? void 0 : IC.KHR_draco_mesh_compression : void 0;
                  if (xC(CC.attributes, FC) || xC(null === ZC || void 0 === ZC ? void 0 : ZC.attributes, FC)) return !0
                }
              }
              return !1
            }(CC, aC)) return fC;
          const tC = null === (ZC = CC.asset) || void 0 === ZC ? void 0 : ZC.version;
          if ("string" !== typeof tC || !/^2\.\d+/.test(tC)) return `uses glTF version ${null!==tC&&void 0!==tC?tC:"(none)"}`;
          const DC = null === (nC = CC.asset) || void 0 === nC ? void 0 : nC.minVersion;
          if (void 0 !== DC && "2.0" !== DC) return `uses glTF version ${DC}`;
          for (const QC of null !== (jC = CC.extensionsRequired) && void 0 !== jC ? jC : []) {
            var jC;
            if (!qC.has(QC)) return `requires the glTF extension ${QC}`
          }
          if (null !== (WC = CC.animations) && void 0 !== WC && WC.length) return "has animations";
          if (null !== (pC = CC.skins) && void 0 !== pC && pC.length) return "uses skins";
          const yC = null !== (RC = CC.buffers) && void 0 !== RC ? RC : [];
          for (const [QC, wC] of yC.entries()) {
            if (void 0 !== wC.uri) return oC;
            if (QC > 0 || !zC) return fC
          }
          for (const [QC, wC] of(null !== (LC = CC.bufferViews) && void 0 !== LC ? LC : []).entries()) {
            var LC;
            if (!hC(CC, zC, QC) || !eC(wC)) return fC
          }
          const UC = null !== (YC = CC.accessors) && void 0 !== YC ? YC : [];
          for (const QC of UC) {
            if (void 0 !== QC.sparse) return "uses sparse accessors";
            const zC = Number.isInteger(QC.count) ? PC(QC.count, wC.accessorElements, "elements in an accessor") : null;
            if (zC) return zC;
            if (!KC(CC, QC)) return fC
          }
          const BC = null !== (dC = CC.scenes) && void 0 !== dC ? dC : [];
          if (1 !== BC.length) return `has ${BC.length} scenes`;
          const OC = (0, QC.w)(CC);
          if (void 0 !== OC && 0 !== OC) return fC;
          const kC = null !== (mC = CC.nodes) && void 0 !== mC ? mC : [],
            VC = null !== (HC = CC.meshes) && void 0 !== HC ? HC : [],
            Cz = null !== (EC = CC.materials) && void 0 !== EC ? EC : [],
            zz = null !== (lC = CC.textures) && void 0 !== lC ? lC : [],
            Zz = null !== (XC = CC.images) && void 0 !== XC ? XC : [],
            Qz = null !== (cC = null !== (uC = null !== (rC = PC(kC.length, wC.nodes, "nodes")) && void 0 !== rC ? rC : PC(VC.length, wC.meshes, "meshes")) && void 0 !== uC ? uC : PC(Cz.length, wC.materials, "materials")) && void 0 !== cC ? cC : PC(Zz.length, wC.images, "images");
          if (Qz) return Qz;
          const wz = new Set;
          for (const QC of kC)
            for (const CC of null !== (bz = QC.children) && void 0 !== bz ? bz : []) {
              var bz;
              if (!GC(CC, kC.length) || wz.has(CC)) return fC;
              wz.add(CC)
            }
          const nz = new Set,
            fz = CC => {
              var zC;
              return !nz.has(CC) && (nz.add(CC), (null !== (zC = kC[CC].children) && void 0 !== zC ? zC : []).every(fz))
            };
          for (const QC of null !== (oz = BC[0].nodes) && void 0 !== oz ? oz : []) {
            var oz;
            if (!GC(QC, kC.length) || wz.has(QC) || !fz(QC)) return fC
          }
          for (const QC of kC) {
            if (void 0 !== QC.matrix) return "uses node matrices";
            if (void 0 !== QC.skin) return "uses skins";
            if (void 0 !== QC.weights) return "uses morph targets";
            if (void 0 !== QC.mesh && !GC(QC.mesh, VC.length)) return fC;
            const CC = [
              [QC.translation, 3],
              [QC.rotation, 4],
              [QC.scale, 3]
            ];
            for (const [zC, ZC] of CC)
              if (void 0 !== zC && (!Array.isArray(zC) || zC.length !== ZC || !zC.every((CC => Number.isFinite(CC))))) return fC
          }
          let qz = -1,
            Fz = 0,
            Wz = 0,
            Nz = null;
          for (const wC of VC) {
            if (void 0 !== wC.weights) return "uses morph targets";
            if (0 === wC.primitives.length) return fC;
            for (const ZC of wC.primitives) {
              var Mz, gz;
              const wC = null !== (Mz = ZC.mode) && void 0 !== Mz ? Mz : 4;
              var Sz;
              if (4 !== wC && 0 !== wC) return `uses ${null!==(Sz=gC[wC])&&void 0!==Sz?Sz:`mode ${wC}`} primitives`;
              if (void 0 !== ZC.targets) return "uses morph targets";
              if (void 0 !== ZC.material && !GC(ZC.material, Cz.length)) return fC;
              const bC = aC ? null === (gz = ZC.extensions) || void 0 === gz ? void 0 : gz.KHR_draco_mesh_compression : void 0;
              if (bC) {
                if (4 !== wC) return "uses Draco-compressed points";
                if (!hC(CC, zC, bC.bufferView) || "object" !== typeof bC.attributes) return fC
              }
              const nC = ZC.attributes;
              if ("object" !== typeof nC || null === nC) return fC;
              if (void 0 === nC.POSITION) return "has a primitive with no positions";
              if (!GC(nC.POSITION, UC.length)) return fC;
              const oC = UC[nC.POSITION].count;
              for (const [CC, zC] of Object.entries(nC)) {
                if (!GC(zC, UC.length)) return fC;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(CC)) return "uses skins";
                const ZC = UC[zC],
                  QC = FC[CC];
                if (QC && (ZC.componentType !== SC || ZC.normalized || ZC.type !== QC)) return `stores ${CC} as ${JC(ZC)}`;
                const wC = NC[CC];
                if (wC && (ZC.type !== wC.type || !wC.componentTypes.includes(ZC.componentType) || ZC.componentType === SC === !!ZC.normalized)) return `stores ${CC} as ${JC(ZC)}`;
                if (MC.has(CC) && ZC.count !== oC) return "has vertex attributes of different lengths"
              }
              if (bC) {
                if (void 0 === ZC.indices) return fC;
                for (const zC in bC.attributes)
                  if (MC.has(zC) && void 0 === nC[zC]) return fC;
                if (void 0 === bC.attributes.POSITION) return fC;
                const CC = GC(ZC.indices, UC.length) ? UC[ZC.indices].count : -1;
                if (0 === CC) return fC;
                if (-1 === qz) qz = bC.bufferView, Fz = oC, Wz = CC;
                else {
                  Nz ??= new Map([
                    [qz, [Fz, Wz]]
                  ]);
                  const zC = Nz.get(bC.bufferView);
                  if (zC && (zC[0] !== oC || zC[1] !== CC)) return fC;
                  Nz.set(bC.bufferView, null !== zC && void 0 !== zC ? zC : [oC, CC])
                }
              }
              let qC = oC;
              if (void 0 !== ZC.indices) {
                if (!GC(ZC.indices, UC.length)) return fC;
                const CC = UC[ZC.indices];
                if ("SCALAR" !== CC.type) return fC;
                if (5121 === CC.componentType) return "uses 8-bit indices";
                var pz;
                if (5123 !== CC.componentType && 5125 !== CC.componentType) return `stores indices as ${null!==(pz=QC.f[CC.componentType])&&void 0!==pz?pz:CC.componentType}`;
                if (!bC && void 0 === CC.bufferView) return fC;
                qC = CC.count
              }
              if (4 === wC && qC % 3 !== 0) return fC
            }
          }
          let Pz = 0,
            Gz = 0,
            Rz = 0;
          for (let QC = 0; QC < kC.length; QC++) {
            const CC = kC[QC].mesh;
            if (void 0 !== CC && nz.has(QC))
              for (const zC of VC[CC].primitives) Rz++, Pz += UC[zC.attributes.POSITION].count, void 0 !== zC.indices && (Gz += UC[zC.indices].count)
          }
          const Az = null !== (sC = null !== (TC = PC(Pz, wC.vertices, "vertices")) && void 0 !== TC ? TC : PC(Gz, wC.indices, "indices")) && void 0 !== sC ? sC : PC(Rz, wC.primitives, "primitives");
          if (Az) return Az;
          for (const QC of Cz) {
            var xz, Jz;
            if (void 0 !== QC.emissiveTexture) return "uses an emissive texture";
            const zC = null !== (xz = QC.alphaMode) && void 0 !== xz ? xz : "OPAQUE";
            if ("OPAQUE" !== zC && "MASK" !== zC && "BLEND" !== zC) return fC;
            const ZC = null === (Jz = QC.pbrMetallicRoughness) || void 0 === Jz ? void 0 : Jz.baseColorTexture;
            if (ZC) {
              var Iz, iz, vz, ez, hz;
              const zC = null !== (Iz = CC.extensionsUsed) && void 0 !== Iz && Iz.includes("KHR_texture_transform") ? null === (iz = ZC.extensions) || void 0 === iz ? void 0 : iz.KHR_texture_transform : void 0;
              if (0 !== (null !== (vz = ZC.texCoord) && void 0 !== vz ? vz : 0) || 0 !== (null !== (ez = null === zC || void 0 === zC ? void 0 : zC.texCoord) && void 0 !== ez ? ez : 0)) return "uses a second UV set";
              const QC = zz[ZC.index];
              if (!QC || !GC(QC.source, Zz.length) || void 0 !== QC.sampler && !GC(QC.sampler, null === (hz = CC.samplers) || void 0 === hz ? void 0 : hz.length)) return fC
            }
          }
          for (const QC of Zz) {
            if (void 0 !== QC.uri) return oC;
            if (void 0 === QC.bufferView) return fC;
            const ZC = hC(CC, zC, QC.bufferView);
            if (!ZC) return fC;
            if ("image/png" !== QC.mimeType) {
              var Kz, Yz, dz;
              return `has ${vC(null!==(Kz=null!==(Yz={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(dz=QC.mimeType)&&void 0!==dz?dz:""])&&void 0!==Yz?Yz:QC.mimeType)&&void 0!==Kz?Kz:"untyped")} image`
            }
            if (!iC(ZC)) return `has ${vC(IC(ZC))} image`;
            const bC = new DataView(ZC.buffer, ZC.byteOffset, ZC.byteLength),
              nC = bC.getUint32(16),
              qC = bC.getUint32(20);
            if (nC > wC.imageSide || qC > wC.imageSide) return `has a ${nC} \xd7 ${qC} image (the limit is ${wC.imageSide})`
          }
          return null
        }(CC, zC)
      } catch {
        return fC
      }
    }

    function mC(CC) {
      const zC = YC(CC.byteLength);
      if (zC) return zC;
      try {
        const {
          json: zC,
          bin: ZC
        } = (0, QC.x)(CC);
        return dC(zC, ZC)
      } catch (ZC) {
        if (ZC instanceof QC.n) return ZC.reason;
        throw ZC
      }
    }
  },
  34228: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => MC,
      f: () => NC,
      h: () => SC,
      l: () => bC,
      n: () => wC,
      q: () => gC,
      s: () => FC,
      t: () => WC,
      w: () => nC,
      x: () => qC
    });
    var QC = ZC(34237);
    class wC extends Error {
      constructor(CC) {
        super(`GLB refused: it ${CC}`), this.reason = CC, this.name = "GlbRefused"
      }
    }
    class bC extends Error {
      constructor(CC) {
        super(CC), this.name = "GlbError"
      }
    }

    function nC(CC) {
      return Reflect.get(CC, "scene")
    }
    const fC = 5130562,
      oC = "is not a binary glTF 2.0 file";

    function qC(CC) {
      var zC;
      const ZC = CC instanceof Uint8Array ? CC : new Uint8Array(CC),
        bC = (0, QC.f)(ZC);
      if (null === bC) throw new wC(oC);
      const nC = bC.json,
        {
          jsonEnd: qC,
          length: FC
        } = bC,
        WC = new DataView(ZC.buffer, ZC.byteOffset, ZC.byteLength);
      let NC = -1,
        MC = 0;
      for (let pC = qC; pC < FC;) {
        if (pC + 8 > FC) throw new wC(oC);
        const CC = WC.getUint32(pC, !0),
          zC = WC.getUint32(pC + 4, !0);
        if (pC + 8 + CC > FC || zC === QC.c || zC === fC && -1 !== NC) throw new wC(oC);
        zC === fC && (NC = pC + 8, MC = CC), pC += 8 + CC
      }
      let gC = null;
      const SC = null === (zC = nC.buffers) || void 0 === zC ? void 0 : zC[0];
      if (-1 !== NC && SC && void 0 === SC.uri) {
        if (!(SC.byteLength >= 0) || SC.byteLength > MC) throw new wC(oC);
        gC = new Uint8Array(ZC.buffer, ZC.byteOffset + NC, SC.byteLength)
      }
      return {
        json: nC,
        bin: gC,
        fileBytes: ZC.byteLength
      }
    }

    function FC(CC) {
      const zC = CC.slice(CC.indexOf(",") + 1),
        ZC = Uint8Array.fromBase64;
      if (ZC) return ZC(zC).buffer;
      const QC = atob(zC),
        wC = new Uint8Array(QC.length);
      for (let bC = 0; bC < QC.length; bC++) wC[bC] = QC.charCodeAt(bC);
      return wC.buffer
    }
    async function WC(CC) {
      if (CC.startsWith("data:")) return FC(CC);
      const zC = await fetch(CC);
      if (!zC.ok) throw new bC(`fetching ${CC} failed: ${zC.status} ${zC.statusText}`);
      return await zC.arrayBuffer()
    }
    const NC = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      MC = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      gC = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      SC = [
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
  34237: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      f: () => bC,
      g: () => nC
    });
    const QC = 1179937895,
      wC = 1313821514;

    function bC(CC) {
      const zC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength);
      if (CC.byteLength < 20 || zC.getUint32(0, !0) !== QC || 2 !== zC.getUint32(4, !0)) return null;
      const ZC = Math.min(zC.getUint32(8, !0), CC.byteLength),
        bC = zC.getUint32(12, !0);
      if (zC.getUint32(16, !0) !== wC || 20 + bC > ZC) return null;
      let nC;
      try {
        nC = JSON.parse((new TextDecoder).decode(CC.subarray(20, 20 + bC)))
      } catch {
        return null
      }
      return "object" === typeof nC && null !== nC ? {
        json: nC,
        jsonEnd: 20 + bC,
        length: ZC
      } : null
    }

    function nC(CC) {
      var zC;
      const ZC = null === (zC = bC(CC)) || void 0 === zC ? void 0 : zC.json;
      if (void 0 === ZC || !Array.isArray(ZC.extensionsUsed) || !ZC.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const QC = ZC.meshes;
      return Array.isArray(QC) && QC.some((CC => {
        const zC = null === CC || void 0 === CC ? void 0 : CC.primitives;
        return Array.isArray(zC) && zC.some((CC => {
          const zC = null === CC || void 0 === CC ? void 0 : CC.extensions;
          return null != (null === zC || void 0 === zC ? void 0 : zC.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);