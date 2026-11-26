export const id = 221;
export const ids = [221];
export const modules = {
  34959: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => OU,
      g: () => qU,
      i: () => wU
    });
    var cU = zU(34968);
    const yU = {
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
      QU = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      AU = 1048576,
      FU = "is not a binary glTF 2.0 file",
      oU = "loads data from outside the file",
      DU = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      EU = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      YU = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      NU = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: YU,
        TEXCOORD_2: YU,
        TEXCOORD_3: YU,
        TEXCOORD_4: YU,
        TEXCOORD_5: YU
      },
      IU = new Set(cU.i.map((UU => {
        let [XU] = UU;
        return XU
      }))),
      pU = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      aU = 5126;

    function tU(UU) {
      return UU.toLocaleString("en-US")
    }

    function gU(UU, XU, zU) {
      return UU > XU ? `has ${tU(UU)} ${zU} (the limit is ${tU(XU)})` : null
    }

    function kU(UU, XU) {
      return Number.isInteger(UU) && UU >= 0 && UU < (null !== XU && void 0 !== XU ? XU : 0)
    }

    function GU(UU) {
      return Number.isInteger(UU) && UU >= 0
    }

    function BU(UU, XU) {
      return void 0 !== UU && (!Array.isArray(UU) || UU.length > XU)
    }

    function ZU(UU, XU) {
      return "object" === typeof UU && null !== UU && Object.keys(UU).length > XU
    }

    function RU(UU) {
      var XU;
      return `${UU.normalized?"normalized ":""}${null!==(XU=cU.g[UU.componentType])&&void 0!==XU?XU:UU.componentType} ${UU.type}`
    }

    function PU(UU) {
      const XU = XU => {
        var zU;
        return null !== (zU = UU[XU]) && void 0 !== zU ? zU : -1
      };
      return 255 === XU(0) && 216 === XU(1) ? "JPEG" : 82 === XU(0) && 73 === XU(1) && 87 === XU(8) && 69 === XU(9) ? "WebP" : 171 === XU(0) && 75 === XU(1) && 84 === XU(2) && 88 === XU(3) ? "KTX2" : "non-PNG"
    }

    function WU(UU) {
      return UU.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((XU, zU) => UU[zU] === XU)) && 73 === UU[12] && 72 === UU[13] && 68 === UU[14] && 82 === UU[15]
    }

    function dU(UU) {
      return /^[aeiou]/i.test(UU) ? `an ${UU}` : `a ${UU}`
    }

    function LU(UU) {
      const XU = UU.byteStride;
      return void 0 === XU || Number.isInteger(XU) && XU >= 4 && XU <= 252 && XU % 4 === 0
    }

    function eU(UU, XU, zU) {
      var cU, yU;
      const QU = null === (cU = UU.bufferViews) || void 0 === cU ? void 0 : cU[zU];
      if (!QU || !XU || 0 !== QU.buffer) return null;
      const AU = null !== (yU = QU.byteOffset) && void 0 !== yU ? yU : 0;
      return !GU(AU) || !GU(QU.byteLength) || AU + QU.byteLength > XU.byteLength ? null : XU.subarray(AU, AU + QU.byteLength)
    }

    function CU(UU, XU) {
      var zU, yU, QU;
      const AU = cU.o[XU.type],
        FU = cU.d[XU.componentType];
      if (!AU || !FU || !Number.isInteger(XU.count) || XU.count < 0) return !1;
      if (void 0 === XU.bufferView) return !0;
      const oU = null === (zU = UU.bufferViews) || void 0 === zU ? void 0 : zU[XU.bufferView],
        DU = null !== (yU = XU.byteOffset) && void 0 !== yU ? yU : 0;
      if (!oU || !GU(DU) || DU % FU !== 0) return !1;
      const EU = AU * FU,
        YU = null !== (QU = oU.byteStride) && void 0 !== QU ? QU : EU;
      if (YU < EU) return !1;
      return (0 === XU.count ? 0 : DU + YU * (XU.count - 1) + EU) <= oU.byteLength
    }

    function wU(UU) {
      return UU > yU.fileBytes ? `is ${(UU/AU).toFixed(1)} MiB (the limit is ${yU.fileBytes/AU} MiB)` : null
    }

    function qU(UU, XU) {
      try {
        return function(UU, XU) {
          var zU, AU, YU, tU, GU, wU, qU, OU, SU, rU, uU, fU, iU, HU, MU, vU, VU;
          const sU = Array.isArray(UU.extensionsUsed) && UU.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(UU, XU) {
              var zU, cU;
              const {
                items: yU,
                perFile: AU,
                surfaces: FU,
                few: oU,
                bounds: DU,
                attributeMembers: EU
              } = QU;
              if (BU(UU.extensionsRequired, oU) || BU(UU.animations, 1 / 0) || BU(UU.skins, 1 / 0)) return !0;
              if (null !== (zU = UU.animations) && void 0 !== zU && zU.length || null !== (cU = UU.skins) && void 0 !== cU && cU.length) return !1;
              if ([
                  [UU.buffers, oU],
                  [UU.scenes, oU],
                  [UU.bufferViews, yU],
                  [UU.accessors, yU],
                  [UU.nodes, yU],
                  [UU.meshes, yU],
                  [UU.materials, FU],
                  [UU.textures, FU],
                  [UU.samplers, FU],
                  [UU.images, FU]
                ].some((UU => {
                  let [XU, zU] = UU;
                  return BU(XU, zU)
                }))) return !0;
              for (const QU of null !== (YU = UU.accessors) && void 0 !== YU ? YU : []) {
                var YU, NU, IU;
                if (Number.isInteger(QU.count) && (!Number.isSafeInteger(QU.count) || Object.is(QU.count, -0)) || BU(null !== (NU = QU.min) && void 0 !== NU ? NU : void 0, DU) || BU(null !== (IU = QU.max) && void 0 !== IU ? IU : void 0, DU)) return !0
              }
              for (const QU of null !== (pU = UU.scenes) && void 0 !== pU ? pU : []) {
                var pU;
                if (BU(QU.nodes, yU)) return !0
              }
              let aU = 0;
              for (const QU of null !== (tU = UU.nodes) && void 0 !== tU ? tU : []) {
                var tU, gU, kU;
                if (BU(QU.children, AU)) return !0;
                aU += null !== (gU = null === (kU = QU.children) || void 0 === kU ? void 0 : kU.length) && void 0 !== gU ? gU : 0
              }
              if (aU > AU) return !0;
              let GU = 0;
              for (const QU of null !== (RU = UU.meshes) && void 0 !== RU ? RU : []) {
                var RU;
                if (!Array.isArray(QU.primitives)) return !0;
                if (GU += QU.primitives.length, GU > AU) return !0;
                for (const UU of QU.primitives) {
                  var PU;
                  const zU = XU ? null === (PU = UU.extensions) || void 0 === PU ? void 0 : PU.KHR_draco_mesh_compression : void 0;
                  if (ZU(UU.attributes, EU) || ZU(null === zU || void 0 === zU ? void 0 : zU.attributes, EU)) return !0
                }
              }
              return !1
            }(UU, sU)) return FU;
          const nU = null === (zU = UU.asset) || void 0 === zU ? void 0 : zU.version;
          if ("string" !== typeof nU || !/^2\.\d+/.test(nU)) return `uses glTF version ${null!==nU&&void 0!==nU?nU:"(none)"}`;
          const mU = null === (AU = UU.asset) || void 0 === AU ? void 0 : AU.minVersion;
          if (void 0 !== mU && "2.0" !== mU) return `uses glTF version ${mU}`;
          for (const cU of null !== (lU = UU.extensionsRequired) && void 0 !== lU ? lU : []) {
            var lU;
            if (!DU.has(cU)) return `requires the glTF extension ${cU}`
          }
          if (null !== (YU = UU.animations) && void 0 !== YU && YU.length) return "has animations";
          if (null !== (tU = UU.skins) && void 0 !== tU && tU.length) return "uses skins";
          const xU = null !== (GU = UU.buffers) && void 0 !== GU ? GU : [];
          for (const [cU, yU] of xU.entries()) {
            if (void 0 !== yU.uri) return oU;
            if (cU > 0 || !XU) return FU
          }
          for (const [cU, yU] of(null !== (JU = UU.bufferViews) && void 0 !== JU ? JU : []).entries()) {
            var JU;
            if (!eU(UU, XU, cU) || !LU(yU)) return FU
          }
          const jU = null !== (wU = UU.accessors) && void 0 !== wU ? wU : [];
          for (const cU of jU) {
            if (void 0 !== cU.sparse) return "uses sparse accessors";
            const XU = Number.isInteger(cU.count) ? gU(cU.count, yU.accessorElements, "elements in an accessor") : null;
            if (XU) return XU;
            if (!CU(UU, cU)) return FU
          }
          const KU = null !== (qU = UU.scenes) && void 0 !== qU ? qU : [];
          if (1 !== KU.length) return `has ${KU.length} scenes`;
          const bU = (0, cU.u)(UU);
          if (void 0 !== bU && 0 !== bU) return FU;
          const TU = null !== (OU = UU.nodes) && void 0 !== OU ? OU : [],
            hU = null !== (SU = UU.meshes) && void 0 !== SU ? SU : [],
            UX = null !== (rU = UU.materials) && void 0 !== rU ? rU : [],
            XX = null !== (uU = UU.textures) && void 0 !== uU ? uU : [],
            zX = null !== (fU = UU.images) && void 0 !== fU ? fU : [],
            cX = null !== (iU = null !== (HU = null !== (MU = gU(TU.length, yU.nodes, "nodes")) && void 0 !== MU ? MU : gU(hU.length, yU.meshes, "meshes")) && void 0 !== HU ? HU : gU(UX.length, yU.materials, "materials")) && void 0 !== iU ? iU : gU(zX.length, yU.images, "images");
          if (cX) return cX;
          const yX = new Set;
          for (const cU of TU)
            for (const UU of null !== (QX = cU.children) && void 0 !== QX ? QX : []) {
              var QX;
              if (!kU(UU, TU.length) || yX.has(UU)) return FU;
              yX.add(UU)
            }
          const AX = new Set,
            FX = UU => {
              var XU;
              return !AX.has(UU) && (AX.add(UU), (null !== (XU = TU[UU].children) && void 0 !== XU ? XU : []).every(FX))
            };
          for (const cU of null !== (oX = KU[0].nodes) && void 0 !== oX ? oX : []) {
            var oX;
            if (!kU(cU, TU.length) || yX.has(cU) || !FX(cU)) return FU
          }
          for (const cU of TU) {
            if (void 0 !== cU.matrix) return "uses node matrices";
            if (void 0 !== cU.skin) return "uses skins";
            if (void 0 !== cU.weights) return "uses morph targets";
            if (void 0 !== cU.mesh && !kU(cU.mesh, hU.length)) return FU;
            const UU = [
              [cU.translation, 3],
              [cU.rotation, 4],
              [cU.scale, 3]
            ];
            for (const [XU, zU] of UU)
              if (void 0 !== XU && (!Array.isArray(XU) || XU.length !== zU || !XU.every((UU => Number.isFinite(UU))))) return FU
          }
          let DX = -1,
            EX = 0,
            YX = 0,
            NX = null;
          for (const yU of hU) {
            if (void 0 !== yU.weights) return "uses morph targets";
            if (0 === yU.primitives.length) return FU;
            for (const zU of yU.primitives) {
              var IX, pX;
              const yU = null !== (IX = zU.mode) && void 0 !== IX ? IX : 4;
              var aX;
              if (4 !== yU && 0 !== yU) return `uses ${null!==(aX=pU[yU])&&void 0!==aX?aX:`mode ${yU}`} primitives`;
              if (void 0 !== zU.targets) return "uses morph targets";
              if (void 0 !== zU.material && !kU(zU.material, UX.length)) return FU;
              const QU = sU ? null === (pX = zU.extensions) || void 0 === pX ? void 0 : pX.KHR_draco_mesh_compression : void 0;
              if (QU) {
                if (4 !== yU) return "uses Draco-compressed points";
                if (!eU(UU, XU, QU.bufferView) || "object" !== typeof QU.attributes) return FU
              }
              const AU = zU.attributes;
              if ("object" !== typeof AU || null === AU) return FU;
              if (void 0 === AU.POSITION) return "has a primitive with no positions";
              if (!kU(AU.POSITION, jU.length)) return FU;
              const oU = jU[AU.POSITION].count;
              for (const [UU, XU] of Object.entries(AU)) {
                if (!kU(XU, jU.length)) return FU;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(UU)) return "uses skins";
                const zU = jU[XU],
                  cU = EU[UU];
                if (cU && (zU.componentType !== aU || zU.normalized || zU.type !== cU)) return `stores ${UU} as ${RU(zU)}`;
                const yU = NU[UU];
                if (yU && (zU.type !== yU.type || !yU.componentTypes.includes(zU.componentType) || zU.componentType === aU === !!zU.normalized)) return `stores ${UU} as ${RU(zU)}`;
                if (IU.has(UU) && zU.count !== oU) return "has vertex attributes of different lengths"
              }
              if (QU) {
                if (void 0 === zU.indices) return FU;
                for (const XU in QU.attributes)
                  if (IU.has(XU) && void 0 === AU[XU]) return FU;
                if (void 0 === QU.attributes.POSITION) return FU;
                const UU = kU(zU.indices, jU.length) ? jU[zU.indices].count : -1;
                if (0 === UU) return FU;
                if (-1 === DX) DX = QU.bufferView, EX = oU, YX = UU;
                else {
                  NX ??= new Map([
                    [DX, [EX, YX]]
                  ]);
                  const XU = NX.get(QU.bufferView);
                  if (XU && (XU[0] !== oU || XU[1] !== UU)) return FU;
                  NX.set(QU.bufferView, null !== XU && void 0 !== XU ? XU : [oU, UU])
                }
              }
              let DU = oU;
              if (void 0 !== zU.indices) {
                if (!kU(zU.indices, jU.length)) return FU;
                const UU = jU[zU.indices];
                if ("SCALAR" !== UU.type) return FU;
                if (5121 === UU.componentType) return "uses 8-bit indices";
                var tX;
                if (5123 !== UU.componentType && 5125 !== UU.componentType) return `stores indices as ${null!==(tX=cU.g[UU.componentType])&&void 0!==tX?tX:UU.componentType}`;
                if (!QU && void 0 === UU.bufferView) return FU;
                DU = UU.count
              }
              if (4 === yU && DU % 3 !== 0) return FU
            }
          }
          let gX = 0,
            kX = 0,
            GX = 0;
          for (let cU = 0; cU < TU.length; cU++) {
            const UU = TU[cU].mesh;
            if (void 0 !== UU && AX.has(cU))
              for (const XU of hU[UU].primitives) GX++, gX += jU[XU.attributes.POSITION].count, void 0 !== XU.indices && (kX += jU[XU.indices].count)
          }
          const BX = null !== (vU = null !== (VU = gU(gX, yU.vertices, "vertices")) && void 0 !== VU ? VU : gU(kX, yU.indices, "indices")) && void 0 !== vU ? vU : gU(GX, yU.primitives, "primitives");
          if (BX) return BX;
          for (const cU of UX) {
            var ZX, RX;
            if (void 0 !== cU.emissiveTexture) return "uses an emissive texture";
            const XU = null !== (ZX = cU.alphaMode) && void 0 !== ZX ? ZX : "OPAQUE";
            if ("OPAQUE" !== XU && "MASK" !== XU && "BLEND" !== XU) return FU;
            const zU = null === (RX = cU.pbrMetallicRoughness) || void 0 === RX ? void 0 : RX.baseColorTexture;
            if (zU) {
              var PX, WX, dX, LX, eX;
              const XU = null !== (PX = UU.extensionsUsed) && void 0 !== PX && PX.includes("KHR_texture_transform") ? null === (WX = zU.extensions) || void 0 === WX ? void 0 : WX.KHR_texture_transform : void 0;
              if (0 !== (null !== (dX = zU.texCoord) && void 0 !== dX ? dX : 0) || 0 !== (null !== (LX = null === XU || void 0 === XU ? void 0 : XU.texCoord) && void 0 !== LX ? LX : 0)) return "uses a second UV set";
              const cU = XX[zU.index];
              if (!cU || !kU(cU.source, zX.length) || void 0 !== cU.sampler && !kU(cU.sampler, null === (eX = UU.samplers) || void 0 === eX ? void 0 : eX.length)) return FU
            }
          }
          for (const cU of zX) {
            if (void 0 !== cU.uri) return oU;
            if (void 0 === cU.bufferView) return FU;
            const zU = eU(UU, XU, cU.bufferView);
            if (!zU) return FU;
            if ("image/png" !== cU.mimeType) {
              var CX, wX, qX;
              return `has ${dU(null!==(CX=null!==(wX={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(qX=cU.mimeType)&&void 0!==qX?qX:""])&&void 0!==wX?wX:cU.mimeType)&&void 0!==CX?CX:"untyped")} image`
            }
            if (!WU(zU)) return `has ${dU(PU(zU))} image`;
            const QU = new DataView(zU.buffer, zU.byteOffset, zU.byteLength),
              AU = QU.getUint32(16),
              DU = QU.getUint32(20);
            if (AU > yU.imageSide || DU > yU.imageSide) return `has a ${AU} \xd7 ${DU} image (the limit is ${yU.imageSide})`
          }
          return null
        }(UU, XU)
      } catch {
        return FU
      }
    }

    function OU(UU) {
      const XU = wU(UU.byteLength);
      if (XU) return XU;
      try {
        const {
          json: XU,
          bin: zU
        } = (0, cU.w)(UU);
        return qU(XU, zU)
      } catch (zU) {
        if (zU instanceof cU.n) return zU.reason;
        throw zU
      }
    }
  },
  34968: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => pU,
      g: () => IU,
      i: () => tU,
      m: () => AU,
      n: () => QU,
      o: () => aU,
      p: () => YU,
      t: () => NU,
      u: () => FU,
      w: () => EU
    });
    const cU = 1179937895,
      yU = 1313821514;
    class QU extends Error {
      constructor(UU) {
        super(`GLB refused: it ${UU}`), this.reason = UU, this.name = "GlbRefused"
      }
    }
    class AU extends Error {
      constructor(UU) {
        super(UU), this.name = "GlbError"
      }
    }

    function FU(UU) {
      return Reflect.get(UU, "scene")
    }
    const oU = 5130562,
      DU = "is not a binary glTF 2.0 file";

    function EU(UU) {
      var XU;
      const zU = UU instanceof Uint8Array ? UU : new Uint8Array(UU),
        AU = function(UU) {
          const XU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
          if (UU.byteLength < 20 || XU.getUint32(0, !0) !== cU || 2 !== XU.getUint32(4, !0)) return null;
          const zU = Math.min(XU.getUint32(8, !0), UU.byteLength),
            QU = XU.getUint32(12, !0);
          if (XU.getUint32(16, !0) !== yU || 20 + QU > zU) return null;
          let AU;
          try {
            AU = JSON.parse((new TextDecoder).decode(UU.subarray(20, 20 + QU)))
          } catch {
            return null
          }
          return "object" === typeof AU && null !== AU ? {
            json: AU,
            jsonEnd: 20 + QU,
            length: zU
          } : null
        }(zU);
      if (null === AU) throw new QU(DU);
      const FU = AU.json,
        {
          jsonEnd: EU,
          length: YU
        } = AU,
        NU = new DataView(zU.buffer, zU.byteOffset, zU.byteLength);
      let IU = -1,
        pU = 0;
      for (let cU = EU; cU < YU;) {
        if (cU + 8 > YU) throw new QU(DU);
        const UU = NU.getUint32(cU, !0),
          XU = NU.getUint32(cU + 4, !0);
        if (cU + 8 + UU > YU || XU === yU || XU === oU && -1 !== IU) throw new QU(DU);
        XU === oU && (IU = cU + 8, pU = UU), cU += 8 + UU
      }
      let aU = null;
      const tU = null === (XU = FU.buffers) || void 0 === XU ? void 0 : XU[0];
      if (-1 !== IU && tU && void 0 === tU.uri) {
        if (!(tU.byteLength >= 0) || tU.byteLength > pU) throw new QU(DU);
        aU = new Uint8Array(zU.buffer, zU.byteOffset + IU, tU.byteLength)
      }
      return {
        json: FU,
        bin: aU,
        fileBytes: zU.byteLength
      }
    }

    function YU(UU) {
      const XU = UU.slice(UU.indexOf(",") + 1),
        zU = Uint8Array.fromBase64;
      if (zU) return zU(XU).buffer;
      const cU = atob(XU),
        yU = new Uint8Array(cU.length);
      for (let QU = 0; QU < cU.length; QU++) yU[QU] = cU.charCodeAt(QU);
      return yU.buffer
    }
    async function NU(UU) {
      if (UU.startsWith("data:")) return YU(UU);
      const XU = await fetch(UU);
      if (!XU.ok) throw new AU(`fetching ${UU} failed: ${XU.status} ${XU.statusText}`);
      return await XU.arrayBuffer()
    }
    const IU = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      pU = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      aU = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      tU = [
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
for (const UU in modules) Object.freeze(modules[UU]);