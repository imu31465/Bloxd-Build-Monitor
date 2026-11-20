export const id = 195;
export const ids = [195];
export const modules = {
  9062: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => BU,
      f: () => YU,
      i: () => aU
    });
    var tU = gU(9067);
    const pU = {
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
      EU = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      PU = 1048576,
      TU = "is not a binary glTF 2.0 file",
      qU = "loads data from outside the file",
      KU = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      cU = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      GU = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      jU = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: GU,
        TEXCOORD_2: GU,
        TEXCOORD_3: GU,
        TEXCOORD_4: GU,
        TEXCOORD_5: GU
      },
      uU = new Set(tU.i.map((UU => {
        let [RU] = UU;
        return RU
      }))),
      CU = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      hU = 5126;

    function QU(UU) {
      return UU.toLocaleString("en-US")
    }

    function eU(UU, RU, gU) {
      return UU > RU ? `has ${QU(UU)} ${gU} (the limit is ${QU(RU)})` : null
    }

    function WU(UU, RU) {
      return Number.isInteger(UU) && UU >= 0 && UU < (null !== RU && void 0 !== RU ? RU : 0)
    }

    function fU(UU) {
      return Number.isInteger(UU) && UU >= 0
    }

    function xU(UU, RU) {
      return void 0 !== UU && (!Array.isArray(UU) || UU.length > RU)
    }

    function mU(UU, RU) {
      return "object" === typeof UU && null !== UU && Object.keys(UU).length > RU
    }

    function IU(UU) {
      var RU;
      return `${UU.normalized?"normalized ":""}${null!==(RU=tU.h[UU.componentType])&&void 0!==RU?RU:UU.componentType} ${UU.type}`
    }

    function JU(UU) {
      const RU = RU => {
        var gU;
        return null !== (gU = UU[RU]) && void 0 !== gU ? gU : -1
      };
      return 255 === RU(0) && 216 === RU(1) ? "JPEG" : 82 === RU(0) && 73 === RU(1) && 87 === RU(8) && 69 === RU(9) ? "WebP" : 171 === RU(0) && 75 === RU(1) && 84 === RU(2) && 88 === RU(3) ? "KTX2" : "non-PNG"
    }

    function wU(UU) {
      return UU.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((RU, gU) => UU[gU] === RU)) && 73 === UU[12] && 72 === UU[13] && 68 === UU[14] && 82 === UU[15]
    }

    function nU(UU) {
      return /^[aeiou]/i.test(UU) ? `an ${UU}` : `a ${UU}`
    }

    function bU(UU) {
      const RU = UU.byteStride;
      return void 0 === RU || Number.isInteger(RU) && RU >= 4 && RU <= 252 && RU % 4 === 0
    }

    function oU(UU, RU, gU) {
      var tU, pU;
      const EU = null === (tU = UU.bufferViews) || void 0 === tU ? void 0 : tU[gU];
      if (!EU || !RU || 0 !== EU.buffer) return null;
      const PU = null !== (pU = EU.byteOffset) && void 0 !== pU ? pU : 0;
      return !fU(PU) || !fU(EU.byteLength) || PU + EU.byteLength > RU.byteLength ? null : RU.subarray(PU, PU + EU.byteLength)
    }

    function ZU(UU, RU) {
      var gU, pU, EU;
      const PU = tU.o[RU.type],
        TU = tU.e[RU.componentType];
      if (!PU || !TU || !Number.isInteger(RU.count) || RU.count < 0) return !1;
      if (void 0 === RU.bufferView) return !0;
      const qU = null === (gU = UU.bufferViews) || void 0 === gU ? void 0 : gU[RU.bufferView],
        KU = null !== (pU = RU.byteOffset) && void 0 !== pU ? pU : 0;
      if (!qU || !fU(KU) || KU % TU !== 0) return !1;
      const cU = PU * TU,
        GU = null !== (EU = qU.byteStride) && void 0 !== EU ? EU : cU;
      if (GU < cU) return !1;
      return (0 === RU.count ? 0 : KU + GU * (RU.count - 1) + cU) <= qU.byteLength
    }

    function aU(UU) {
      return UU > pU.fileBytes ? `is ${(UU/PU).toFixed(1)} MiB (the limit is ${pU.fileBytes/PU} MiB)` : null
    }

    function YU(UU, RU) {
      try {
        return function(UU, RU) {
          var gU, PU, GU, QU, fU, aU, YU, BU, VU, rU, XU, vU, dU, HU, SU, sU, yU;
          const kU = Array.isArray(UU.extensionsUsed) && UU.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(UU, RU) {
              var gU, tU;
              const {
                items: pU,
                perFile: PU,
                surfaces: TU,
                few: qU,
                bounds: KU,
                attributeMembers: cU
              } = EU;
              if (xU(UU.extensionsRequired, qU) || xU(UU.animations, 1 / 0) || xU(UU.skins, 1 / 0)) return !0;
              if (null !== (gU = UU.animations) && void 0 !== gU && gU.length || null !== (tU = UU.skins) && void 0 !== tU && tU.length) return !1;
              if ([
                  [UU.buffers, qU],
                  [UU.scenes, qU],
                  [UU.bufferViews, pU],
                  [UU.accessors, pU],
                  [UU.nodes, pU],
                  [UU.meshes, pU],
                  [UU.materials, TU],
                  [UU.textures, TU],
                  [UU.samplers, TU],
                  [UU.images, TU]
                ].some((UU => {
                  let [RU, gU] = UU;
                  return xU(RU, gU)
                }))) return !0;
              for (const EU of null !== (GU = UU.accessors) && void 0 !== GU ? GU : []) {
                var GU, jU, uU;
                if (Number.isInteger(EU.count) && (!Number.isSafeInteger(EU.count) || Object.is(EU.count, -0)) || xU(null !== (jU = EU.min) && void 0 !== jU ? jU : void 0, KU) || xU(null !== (uU = EU.max) && void 0 !== uU ? uU : void 0, KU)) return !0
              }
              for (const EU of null !== (CU = UU.scenes) && void 0 !== CU ? CU : []) {
                var CU;
                if (xU(EU.nodes, pU)) return !0
              }
              let hU = 0;
              for (const EU of null !== (QU = UU.nodes) && void 0 !== QU ? QU : []) {
                var QU, eU, WU;
                if (xU(EU.children, PU)) return !0;
                hU += null !== (eU = null === (WU = EU.children) || void 0 === WU ? void 0 : WU.length) && void 0 !== eU ? eU : 0
              }
              if (hU > PU) return !0;
              let fU = 0;
              for (const EU of null !== (IU = UU.meshes) && void 0 !== IU ? IU : []) {
                var IU;
                if (!Array.isArray(EU.primitives)) return !0;
                if (fU += EU.primitives.length, fU > PU) return !0;
                for (const UU of EU.primitives) {
                  var JU;
                  const gU = RU ? null === (JU = UU.extensions) || void 0 === JU ? void 0 : JU.KHR_draco_mesh_compression : void 0;
                  if (mU(UU.attributes, cU) || mU(null === gU || void 0 === gU ? void 0 : gU.attributes, cU)) return !0
                }
              }
              return !1
            }(UU, kU)) return TU;
          const FU = null === (gU = UU.asset) || void 0 === gU ? void 0 : gU.version;
          if ("string" !== typeof FU || !/^2\.\d+/.test(FU)) return `uses glTF version ${null!==FU&&void 0!==FU?FU:"(none)"}`;
          const iU = null === (PU = UU.asset) || void 0 === PU ? void 0 : PU.minVersion;
          if (void 0 !== iU && "2.0" !== iU) return `uses glTF version ${iU}`;
          for (const tU of null !== (AU = UU.extensionsRequired) && void 0 !== AU ? AU : []) {
            var AU;
            if (!KU.has(tU)) return `requires the glTF extension ${tU}`
          }
          if (null !== (GU = UU.animations) && void 0 !== GU && GU.length) return "has animations";
          if (null !== (QU = UU.skins) && void 0 !== QU && QU.length) return "uses skins";
          const zU = null !== (fU = UU.buffers) && void 0 !== fU ? fU : [];
          for (const [tU, pU] of zU.entries()) {
            if (void 0 !== pU.uri) return qU;
            if (tU > 0 || !RU) return TU
          }
          for (const [tU, pU] of(null !== (MU = UU.bufferViews) && void 0 !== MU ? MU : []).entries()) {
            var MU;
            if (!oU(UU, RU, tU) || !bU(pU)) return TU
          }
          const DU = null !== (aU = UU.accessors) && void 0 !== aU ? aU : [];
          for (const tU of DU) {
            if (void 0 !== tU.sparse) return "uses sparse accessors";
            const RU = Number.isInteger(tU.count) ? eU(tU.count, pU.accessorElements, "elements in an accessor") : null;
            if (RU) return RU;
            if (!ZU(UU, tU)) return TU
          }
          const LU = null !== (YU = UU.scenes) && void 0 !== YU ? YU : [];
          if (1 !== LU.length) return `has ${LU.length} scenes`;
          const NU = (0, tU.s)(UU);
          if (void 0 !== NU && 0 !== NU) return TU;
          const lU = null !== (BU = UU.nodes) && void 0 !== BU ? BU : [],
            OU = null !== (VU = UU.meshes) && void 0 !== VU ? VU : [],
            UR = null !== (rU = UU.materials) && void 0 !== rU ? rU : [],
            RR = null !== (XU = UU.textures) && void 0 !== XU ? XU : [],
            gR = null !== (vU = UU.images) && void 0 !== vU ? vU : [],
            tR = null !== (dU = null !== (HU = null !== (SU = eU(lU.length, pU.nodes, "nodes")) && void 0 !== SU ? SU : eU(OU.length, pU.meshes, "meshes")) && void 0 !== HU ? HU : eU(UR.length, pU.materials, "materials")) && void 0 !== dU ? dU : eU(gR.length, pU.images, "images");
          if (tR) return tR;
          const pR = new Set;
          for (const tU of lU)
            for (const UU of null !== (ER = tU.children) && void 0 !== ER ? ER : []) {
              var ER;
              if (!WU(UU, lU.length) || pR.has(UU)) return TU;
              pR.add(UU)
            }
          const PR = new Set,
            TR = UU => {
              var RU;
              return !PR.has(UU) && (PR.add(UU), (null !== (RU = lU[UU].children) && void 0 !== RU ? RU : []).every(TR))
            };
          for (const tU of null !== (qR = LU[0].nodes) && void 0 !== qR ? qR : []) {
            var qR;
            if (!WU(tU, lU.length) || pR.has(tU) || !TR(tU)) return TU
          }
          for (const tU of lU) {
            if (void 0 !== tU.matrix) return "uses node matrices";
            if (void 0 !== tU.skin) return "uses skins";
            if (void 0 !== tU.weights) return "uses morph targets";
            if (void 0 !== tU.mesh && !WU(tU.mesh, OU.length)) return TU;
            const UU = [
              [tU.translation, 3],
              [tU.rotation, 4],
              [tU.scale, 3]
            ];
            for (const [RU, gU] of UU)
              if (void 0 !== RU && (!Array.isArray(RU) || RU.length !== gU || !RU.every((UU => Number.isFinite(UU))))) return TU
          }
          let KR = -1,
            cR = 0,
            GR = 0,
            jR = null;
          for (const pU of OU) {
            if (void 0 !== pU.weights) return "uses morph targets";
            if (0 === pU.primitives.length) return TU;
            for (const gU of pU.primitives) {
              var uR, CR;
              const pU = null !== (uR = gU.mode) && void 0 !== uR ? uR : 4;
              var hR;
              if (4 !== pU && 0 !== pU) return `uses ${null!==(hR=CU[pU])&&void 0!==hR?hR:`mode ${pU}`} primitives`;
              if (void 0 !== gU.targets) return "uses morph targets";
              if (void 0 !== gU.material && !WU(gU.material, UR.length)) return TU;
              const EU = kU ? null === (CR = gU.extensions) || void 0 === CR ? void 0 : CR.KHR_draco_mesh_compression : void 0;
              if (EU) {
                if (4 !== pU) return "uses Draco-compressed points";
                if (!oU(UU, RU, EU.bufferView) || "object" !== typeof EU.attributes) return TU
              }
              const PU = gU.attributes;
              if ("object" !== typeof PU || null === PU) return TU;
              if (void 0 === PU.POSITION) return "has a primitive with no positions";
              if (!WU(PU.POSITION, DU.length)) return TU;
              const qU = DU[PU.POSITION].count;
              for (const [UU, RU] of Object.entries(PU)) {
                if (!WU(RU, DU.length)) return TU;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(UU)) return "uses skins";
                const gU = DU[RU],
                  tU = cU[UU];
                if (tU && (gU.componentType !== hU || gU.normalized || gU.type !== tU)) return `stores ${UU} as ${IU(gU)}`;
                const pU = jU[UU];
                if (pU && (gU.type !== pU.type || !pU.componentTypes.includes(gU.componentType) || gU.componentType === hU === !!gU.normalized)) return `stores ${UU} as ${IU(gU)}`;
                if (uU.has(UU) && gU.count !== qU) return "has vertex attributes of different lengths"
              }
              if (EU) {
                if (void 0 === gU.indices) return TU;
                for (const RU in EU.attributes)
                  if (uU.has(RU) && void 0 === PU[RU]) return TU;
                if (void 0 === EU.attributes.POSITION) return TU;
                const UU = WU(gU.indices, DU.length) ? DU[gU.indices].count : -1;
                if (0 === UU) return TU;
                if (-1 === KR) KR = EU.bufferView, cR = qU, GR = UU;
                else {
                  jR ??= new Map([
                    [KR, [cR, GR]]
                  ]);
                  const RU = jR.get(EU.bufferView);
                  if (RU && (RU[0] !== qU || RU[1] !== UU)) return TU;
                  jR.set(EU.bufferView, null !== RU && void 0 !== RU ? RU : [qU, UU])
                }
              }
              let KU = qU;
              if (void 0 !== gU.indices) {
                if (!WU(gU.indices, DU.length)) return TU;
                const UU = DU[gU.indices];
                if ("SCALAR" !== UU.type) return TU;
                if (5121 === UU.componentType) return "uses 8-bit indices";
                var QR;
                if (5123 !== UU.componentType && 5125 !== UU.componentType) return `stores indices as ${null!==(QR=tU.h[UU.componentType])&&void 0!==QR?QR:UU.componentType}`;
                if (!EU && void 0 === UU.bufferView) return TU;
                KU = UU.count
              }
              if (4 === pU && KU % 3 !== 0) return TU
            }
          }
          let eR = 0,
            WR = 0,
            fR = 0;
          for (let tU = 0; tU < lU.length; tU++) {
            const UU = lU[tU].mesh;
            if (void 0 !== UU && PR.has(tU))
              for (const RU of OU[UU].primitives) fR++, eR += DU[RU.attributes.POSITION].count, void 0 !== RU.indices && (WR += DU[RU.indices].count)
          }
          const xR = null !== (sU = null !== (yU = eU(eR, pU.vertices, "vertices")) && void 0 !== yU ? yU : eU(WR, pU.indices, "indices")) && void 0 !== sU ? sU : eU(fR, pU.primitives, "primitives");
          if (xR) return xR;
          for (const tU of UR) {
            var mR, IR;
            if (void 0 !== tU.emissiveTexture) return "uses an emissive texture";
            const RU = null !== (mR = tU.alphaMode) && void 0 !== mR ? mR : "OPAQUE";
            if ("OPAQUE" !== RU && "MASK" !== RU && "BLEND" !== RU) return TU;
            const gU = null === (IR = tU.pbrMetallicRoughness) || void 0 === IR ? void 0 : IR.baseColorTexture;
            if (gU) {
              var JR, wR, nR, bR, oR;
              const RU = null !== (JR = UU.extensionsUsed) && void 0 !== JR && JR.includes("KHR_texture_transform") ? null === (wR = gU.extensions) || void 0 === wR ? void 0 : wR.KHR_texture_transform : void 0;
              if (0 !== (null !== (nR = gU.texCoord) && void 0 !== nR ? nR : 0) || 0 !== (null !== (bR = null === RU || void 0 === RU ? void 0 : RU.texCoord) && void 0 !== bR ? bR : 0)) return "uses a second UV set";
              const tU = RR[gU.index];
              if (!tU || !WU(tU.source, gR.length) || void 0 !== tU.sampler && !WU(tU.sampler, null === (oR = UU.samplers) || void 0 === oR ? void 0 : oR.length)) return TU
            }
          }
          for (const tU of gR) {
            if (void 0 !== tU.uri) return qU;
            if (void 0 === tU.bufferView) return TU;
            const gU = oU(UU, RU, tU.bufferView);
            if (!gU) return TU;
            if ("image/png" !== tU.mimeType) {
              var ZR, aR, YR;
              return `has ${nU(null!==(ZR=null!==(aR={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(YR=tU.mimeType)&&void 0!==YR?YR:""])&&void 0!==aR?aR:tU.mimeType)&&void 0!==ZR?ZR:"untyped")} image`
            }
            if (!wU(gU)) return `has ${nU(JU(gU))} image`;
            const EU = new DataView(gU.buffer, gU.byteOffset, gU.byteLength),
              PU = EU.getUint32(16),
              KU = EU.getUint32(20);
            if (PU > pU.imageSide || KU > pU.imageSide) return `has a ${PU} \xd7 ${KU} image (the limit is ${pU.imageSide})`
          }
          return null
        }(UU, RU)
      } catch {
        return TU
      }
    }

    function BU(UU) {
      const RU = aU(UU.byteLength);
      if (RU) return RU;
      try {
        const {
          json: RU,
          bin: gU
        } = (0, tU.u)(UU);
        return YU(RU, gU)
      } catch (gU) {
        if (gU instanceof tU.n) return gU.reason;
        throw gU
      }
    }
  },
  9067: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => uU,
      h: () => jU,
      i: () => hU,
      m: () => EU,
      n: () => pU,
      o: () => CU,
      p: () => cU,
      q: () => GU,
      s: () => PU,
      u: () => KU
    });
    var tU = gU(9069);
    class pU extends Error {
      constructor(UU) {
        super(`GLB refused: it ${UU}`), this.reason = UU, this.name = "GlbRefused"
      }
    }
    class EU extends Error {
      constructor(UU) {
        super(UU), this.name = "GlbError"
      }
    }

    function PU(UU) {
      return Reflect.get(UU, "scene")
    }
    const TU = 5130562,
      qU = "is not a binary glTF 2.0 file";

    function KU(UU) {
      var RU;
      const gU = UU instanceof Uint8Array ? UU : new Uint8Array(UU),
        EU = (0, tU.e)(gU);
      if (null === EU) throw new pU(qU);
      const PU = EU.json,
        {
          jsonEnd: KU,
          length: cU
        } = EU,
        GU = new DataView(gU.buffer, gU.byteOffset, gU.byteLength);
      let jU = -1,
        uU = 0;
      for (let QU = KU; QU < cU;) {
        if (QU + 8 > cU) throw new pU(qU);
        const UU = GU.getUint32(QU, !0),
          RU = GU.getUint32(QU + 4, !0);
        if (QU + 8 + UU > cU || RU === tU.b || RU === TU && -1 !== jU) throw new pU(qU);
        RU === TU && (jU = QU + 8, uU = UU), QU += 8 + UU
      }
      let CU = null;
      const hU = null === (RU = PU.buffers) || void 0 === RU ? void 0 : RU[0];
      if (-1 !== jU && hU && void 0 === hU.uri) {
        if (!(hU.byteLength >= 0) || hU.byteLength > uU) throw new pU(qU);
        CU = new Uint8Array(gU.buffer, gU.byteOffset + jU, hU.byteLength)
      }
      return {
        json: PU,
        bin: CU,
        fileBytes: gU.byteLength
      }
    }

    function cU(UU) {
      const RU = UU.slice(UU.indexOf(",") + 1),
        gU = Uint8Array.fromBase64;
      if (gU) return gU(RU).buffer;
      const tU = atob(RU),
        pU = new Uint8Array(tU.length);
      for (let EU = 0; EU < tU.length; EU++) pU[EU] = tU.charCodeAt(EU);
      return pU.buffer
    }
    async function GU(UU) {
      if (UU.startsWith("data:")) return cU(UU);
      const RU = await fetch(UU);
      if (!RU.ok) throw new EU(`fetching ${UU} failed: ${RU.status} ${RU.statusText}`);
      return await RU.arrayBuffer()
    }
    const jU = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      uU = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      CU = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      hU = [
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
  9069: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      e: () => EU,
      h: () => PU
    });
    const tU = 1179937895,
      pU = 1313821514;

    function EU(UU) {
      const RU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
      if (UU.byteLength < 20 || RU.getUint32(0, !0) !== tU || 2 !== RU.getUint32(4, !0)) return null;
      const gU = Math.min(RU.getUint32(8, !0), UU.byteLength),
        EU = RU.getUint32(12, !0);
      if (RU.getUint32(16, !0) !== pU || 20 + EU > gU) return null;
      let PU;
      try {
        PU = JSON.parse((new TextDecoder).decode(UU.subarray(20, 20 + EU)))
      } catch {
        return null
      }
      return "object" === typeof PU && null !== PU ? {
        json: PU,
        jsonEnd: 20 + EU,
        length: gU
      } : null
    }

    function PU(UU) {
      var RU;
      const gU = null === (RU = EU(UU)) || void 0 === RU ? void 0 : RU.json;
      if (void 0 === gU || !Array.isArray(gU.extensionsUsed) || !gU.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const tU = gU.meshes;
      return Array.isArray(tU) && tU.some((UU => {
        const RU = null === UU || void 0 === UU ? void 0 : UU.primitives;
        return Array.isArray(RU) && RU.some((UU => {
          const RU = null === UU || void 0 === UU ? void 0 : UU.extensions;
          return null != (null === RU || void 0 === RU ? void 0 : RU.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);