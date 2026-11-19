export const id = 190;
export const ids = [190];
export const modules = {
  8801: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => JT,
      e: () => jT,
      g: () => CT
    });
    var iT = IT(8805);
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
      kT = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      WT = 1048576,
      XT = "is not a binary glTF 2.0 file",
      BT = "loads data from outside the file",
      FT = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      ST = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      DT = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      LT = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: DT,
        TEXCOORD_2: DT,
        TEXCOORD_3: DT,
        TEXCOORD_4: DT,
        TEXCOORD_5: DT
      },
      xT = new Set(iT.k.map((TT => {
        let [oT] = TT;
        return oT
      }))),
      cT = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      KT = 5126;

    function MT(TT) {
      return TT.toLocaleString("en-US")
    }

    function rT(TT, oT, IT) {
      return TT > oT ? `has ${MT(TT)} ${IT} (the limit is ${MT(oT)})` : null
    }

    function AT(TT, oT) {
      return Number.isInteger(TT) && TT >= 0 && TT < (null !== oT && void 0 !== oT ? oT : 0)
    }

    function gT(TT) {
      return Number.isInteger(TT) && TT >= 0
    }

    function hT(TT, oT) {
      return void 0 !== TT && (!Array.isArray(TT) || TT.length > oT)
    }

    function wT(TT, oT) {
      return "object" === typeof TT && null !== TT && Object.keys(TT).length > oT
    }

    function mT(TT) {
      var oT;
      return `${TT.normalized?"normalized ":""}${null!==(oT=iT.g[TT.componentType])&&void 0!==oT?oT:TT.componentType} ${TT.type}`
    }

    function eT(TT) {
      const oT = oT => {
        var IT;
        return null !== (IT = TT[oT]) && void 0 !== IT ? IT : -1
      };
      return 255 === oT(0) && 216 === oT(1) ? "JPEG" : 82 === oT(0) && 73 === oT(1) && 87 === oT(8) && 69 === oT(9) ? "WebP" : 171 === oT(0) && 75 === oT(1) && 84 === oT(2) && 88 === oT(3) ? "KTX2" : "non-PNG"
    }

    function RT(TT) {
      return TT.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((oT, IT) => TT[IT] === oT)) && 73 === TT[12] && 72 === TT[13] && 68 === TT[14] && 82 === TT[15]
    }

    function uT(TT) {
      return /^[aeiou]/i.test(TT) ? `an ${TT}` : `a ${TT}`
    }

    function vT(TT) {
      const oT = TT.byteStride;
      return void 0 === oT || Number.isInteger(oT) && oT >= 4 && oT <= 252 && oT % 4 === 0
    }

    function ET(TT, oT, IT) {
      var iT, zT;
      const kT = null === (iT = TT.bufferViews) || void 0 === iT ? void 0 : iT[IT];
      if (!kT || !oT || 0 !== kT.buffer) return null;
      const WT = null !== (zT = kT.byteOffset) && void 0 !== zT ? zT : 0;
      return !gT(WT) || !gT(kT.byteLength) || WT + kT.byteLength > oT.byteLength ? null : oT.subarray(WT, WT + kT.byteLength)
    }

    function fT(TT, oT) {
      var IT, zT, kT;
      const WT = iT.s[oT.type],
        XT = iT.e[oT.componentType];
      if (!WT || !XT || !Number.isInteger(oT.count) || oT.count < 0) return !1;
      if (void 0 === oT.bufferView) return !0;
      const BT = null === (IT = TT.bufferViews) || void 0 === IT ? void 0 : IT[oT.bufferView],
        FT = null !== (zT = oT.byteOffset) && void 0 !== zT ? zT : 0;
      if (!BT || !gT(FT) || FT % XT !== 0) return !1;
      const ST = WT * XT,
        DT = null !== (kT = BT.byteStride) && void 0 !== kT ? kT : ST;
      if (DT < ST) return !1;
      return (0 === oT.count ? 0 : FT + DT * (oT.count - 1) + ST) <= BT.byteLength
    }

    function CT(TT) {
      return TT > zT.fileBytes ? `is ${(TT/WT).toFixed(1)} MiB (the limit is ${zT.fileBytes/WT} MiB)` : null
    }

    function jT(TT, oT) {
      try {
        return function(TT, oT) {
          var IT, WT, DT, MT, gT, CT, jT, JT, UT, aT, YT, QT, OT, HT, nT, qT, ZT;
          const lT = Array.isArray(TT.extensionsUsed) && TT.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(TT, oT) {
              var IT, iT;
              const {
                items: zT,
                perFile: WT,
                surfaces: XT,
                few: BT,
                bounds: FT,
                attributeMembers: ST
              } = kT;
              if (hT(TT.extensionsRequired, BT) || hT(TT.animations, 1 / 0) || hT(TT.skins, 1 / 0)) return !0;
              if (null !== (IT = TT.animations) && void 0 !== IT && IT.length || null !== (iT = TT.skins) && void 0 !== iT && iT.length) return !1;
              if ([
                  [TT.buffers, BT],
                  [TT.scenes, BT],
                  [TT.bufferViews, zT],
                  [TT.accessors, zT],
                  [TT.nodes, zT],
                  [TT.meshes, zT],
                  [TT.materials, XT],
                  [TT.textures, XT],
                  [TT.samplers, XT],
                  [TT.images, XT]
                ].some((TT => {
                  let [oT, IT] = TT;
                  return hT(oT, IT)
                }))) return !0;
              for (const kT of null !== (DT = TT.accessors) && void 0 !== DT ? DT : []) {
                var DT, LT, xT;
                if (Number.isInteger(kT.count) && (!Number.isSafeInteger(kT.count) || Object.is(kT.count, -0)) || hT(null !== (LT = kT.min) && void 0 !== LT ? LT : void 0, FT) || hT(null !== (xT = kT.max) && void 0 !== xT ? xT : void 0, FT)) return !0
              }
              for (const kT of null !== (cT = TT.scenes) && void 0 !== cT ? cT : []) {
                var cT;
                if (hT(kT.nodes, zT)) return !0
              }
              let KT = 0;
              for (const kT of null !== (MT = TT.nodes) && void 0 !== MT ? MT : []) {
                var MT, rT, AT;
                if (hT(kT.children, WT)) return !0;
                KT += null !== (rT = null === (AT = kT.children) || void 0 === AT ? void 0 : AT.length) && void 0 !== rT ? rT : 0
              }
              if (KT > WT) return !0;
              let gT = 0;
              for (const kT of null !== (mT = TT.meshes) && void 0 !== mT ? mT : []) {
                var mT;
                if (!Array.isArray(kT.primitives)) return !0;
                if (gT += kT.primitives.length, gT > WT) return !0;
                for (const TT of kT.primitives) {
                  var eT;
                  const IT = oT ? null === (eT = TT.extensions) || void 0 === eT ? void 0 : eT.KHR_draco_mesh_compression : void 0;
                  if (wT(TT.attributes, ST) || wT(null === IT || void 0 === IT ? void 0 : IT.attributes, ST)) return !0
                }
              }
              return !1
            }(TT, lT)) return XT;
          const sT = null === (IT = TT.asset) || void 0 === IT ? void 0 : IT.version;
          if ("string" !== typeof sT || !/^2\.\d+/.test(sT)) return `uses glTF version ${null!==sT&&void 0!==sT?sT:"(none)"}`;
          const tT = null === (WT = TT.asset) || void 0 === WT ? void 0 : WT.minVersion;
          if (void 0 !== tT && "2.0" !== tT) return `uses glTF version ${tT}`;
          for (const iT of null !== (GT = TT.extensionsRequired) && void 0 !== GT ? GT : []) {
            var GT;
            if (!FT.has(iT)) return `requires the glTF extension ${iT}`
          }
          if (null !== (DT = TT.animations) && void 0 !== DT && DT.length) return "has animations";
          if (null !== (MT = TT.skins) && void 0 !== MT && MT.length) return "uses skins";
          const pT = null !== (gT = TT.buffers) && void 0 !== gT ? gT : [];
          for (const [iT, zT] of pT.entries()) {
            if (void 0 !== zT.uri) return BT;
            if (iT > 0 || !oT) return XT
          }
          for (const [iT, zT] of(null !== (bT = TT.bufferViews) && void 0 !== bT ? bT : []).entries()) {
            var bT;
            if (!ET(TT, oT, iT) || !vT(zT)) return XT
          }
          const yT = null !== (CT = TT.accessors) && void 0 !== CT ? CT : [];
          for (const iT of yT) {
            if (void 0 !== iT.sparse) return "uses sparse accessors";
            const oT = Number.isInteger(iT.count) ? rT(iT.count, zT.accessorElements, "elements in an accessor") : null;
            if (oT) return oT;
            if (!fT(TT, iT)) return XT
          }
          const NT = null !== (jT = TT.scenes) && void 0 !== jT ? jT : [];
          if (1 !== NT.length) return `has ${NT.length} scenes`;
          const PT = (0, iT.z)(TT);
          if (void 0 !== PT && 0 !== PT) return XT;
          const dT = null !== (JT = TT.nodes) && void 0 !== JT ? JT : [],
            VT = null !== (UT = TT.meshes) && void 0 !== UT ? UT : [],
            To = null !== (aT = TT.materials) && void 0 !== aT ? aT : [],
            oo = null !== (YT = TT.textures) && void 0 !== YT ? YT : [],
            Io = null !== (QT = TT.images) && void 0 !== QT ? QT : [],
            io = null !== (OT = null !== (HT = null !== (nT = rT(dT.length, zT.nodes, "nodes")) && void 0 !== nT ? nT : rT(VT.length, zT.meshes, "meshes")) && void 0 !== HT ? HT : rT(To.length, zT.materials, "materials")) && void 0 !== OT ? OT : rT(Io.length, zT.images, "images");
          if (io) return io;
          const zo = new Set;
          for (const iT of dT)
            for (const TT of null !== (ko = iT.children) && void 0 !== ko ? ko : []) {
              var ko;
              if (!AT(TT, dT.length) || zo.has(TT)) return XT;
              zo.add(TT)
            }
          const Wo = new Set,
            Xo = TT => {
              var oT;
              return !Wo.has(TT) && (Wo.add(TT), (null !== (oT = dT[TT].children) && void 0 !== oT ? oT : []).every(Xo))
            };
          for (const iT of null !== (Bo = NT[0].nodes) && void 0 !== Bo ? Bo : []) {
            var Bo;
            if (!AT(iT, dT.length) || zo.has(iT) || !Xo(iT)) return XT
          }
          for (const iT of dT) {
            if (void 0 !== iT.matrix) return "uses node matrices";
            if (void 0 !== iT.skin) return "uses skins";
            if (void 0 !== iT.weights) return "uses morph targets";
            if (void 0 !== iT.mesh && !AT(iT.mesh, VT.length)) return XT;
            const TT = [
              [iT.translation, 3],
              [iT.rotation, 4],
              [iT.scale, 3]
            ];
            for (const [oT, IT] of TT)
              if (void 0 !== oT && (!Array.isArray(oT) || oT.length !== IT || !oT.every((TT => Number.isFinite(TT))))) return XT
          }
          let Fo = -1,
            So = 0,
            Do = 0,
            Lo = null;
          for (const zT of VT) {
            if (void 0 !== zT.weights) return "uses morph targets";
            if (0 === zT.primitives.length) return XT;
            for (const IT of zT.primitives) {
              var xo, co;
              const zT = null !== (xo = IT.mode) && void 0 !== xo ? xo : 4;
              var Ko;
              if (4 !== zT && 0 !== zT) return `uses ${null!==(Ko=cT[zT])&&void 0!==Ko?Ko:`mode ${zT}`} primitives`;
              if (void 0 !== IT.targets) return "uses morph targets";
              if (void 0 !== IT.material && !AT(IT.material, To.length)) return XT;
              const kT = lT ? null === (co = IT.extensions) || void 0 === co ? void 0 : co.KHR_draco_mesh_compression : void 0;
              if (kT) {
                if (4 !== zT) return "uses Draco-compressed points";
                if (!ET(TT, oT, kT.bufferView) || "object" !== typeof kT.attributes) return XT
              }
              const WT = IT.attributes;
              if ("object" !== typeof WT || null === WT) return XT;
              if (void 0 === WT.POSITION) return "has a primitive with no positions";
              if (!AT(WT.POSITION, yT.length)) return XT;
              const BT = yT[WT.POSITION].count;
              for (const [TT, oT] of Object.entries(WT)) {
                if (!AT(oT, yT.length)) return XT;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(TT)) return "uses skins";
                const IT = yT[oT],
                  iT = ST[TT];
                if (iT && (IT.componentType !== KT || IT.normalized || IT.type !== iT)) return `stores ${TT} as ${mT(IT)}`;
                const zT = LT[TT];
                if (zT && (IT.type !== zT.type || !zT.componentTypes.includes(IT.componentType) || IT.componentType === KT === !!IT.normalized)) return `stores ${TT} as ${mT(IT)}`;
                if (xT.has(TT) && IT.count !== BT) return "has vertex attributes of different lengths"
              }
              if (kT) {
                if (void 0 === IT.indices) return XT;
                for (const oT in kT.attributes)
                  if (xT.has(oT) && void 0 === WT[oT]) return XT;
                if (void 0 === kT.attributes.POSITION) return XT;
                const TT = AT(IT.indices, yT.length) ? yT[IT.indices].count : -1;
                if (0 === TT) return XT;
                if (-1 === Fo) Fo = kT.bufferView, So = BT, Do = TT;
                else {
                  Lo ??= new Map([
                    [Fo, [So, Do]]
                  ]);
                  const oT = Lo.get(kT.bufferView);
                  if (oT && (oT[0] !== BT || oT[1] !== TT)) return XT;
                  Lo.set(kT.bufferView, null !== oT && void 0 !== oT ? oT : [BT, TT])
                }
              }
              let FT = BT;
              if (void 0 !== IT.indices) {
                if (!AT(IT.indices, yT.length)) return XT;
                const TT = yT[IT.indices];
                if ("SCALAR" !== TT.type) return XT;
                if (5121 === TT.componentType) return "uses 8-bit indices";
                var Mo;
                if (5123 !== TT.componentType && 5125 !== TT.componentType) return `stores indices as ${null!==(Mo=iT.g[TT.componentType])&&void 0!==Mo?Mo:TT.componentType}`;
                if (!kT && void 0 === TT.bufferView) return XT;
                FT = TT.count
              }
              if (4 === zT && FT % 3 !== 0) return XT
            }
          }
          let ro = 0,
            Ao = 0,
            go = 0;
          for (let iT = 0; iT < dT.length; iT++) {
            const TT = dT[iT].mesh;
            if (void 0 !== TT && Wo.has(iT))
              for (const oT of VT[TT].primitives) go++, ro += yT[oT.attributes.POSITION].count, void 0 !== oT.indices && (Ao += yT[oT.indices].count)
          }
          const ho = null !== (qT = null !== (ZT = rT(ro, zT.vertices, "vertices")) && void 0 !== ZT ? ZT : rT(Ao, zT.indices, "indices")) && void 0 !== qT ? qT : rT(go, zT.primitives, "primitives");
          if (ho) return ho;
          for (const iT of To) {
            var wo, mo;
            if (void 0 !== iT.emissiveTexture) return "uses an emissive texture";
            const oT = null !== (wo = iT.alphaMode) && void 0 !== wo ? wo : "OPAQUE";
            if ("OPAQUE" !== oT && "MASK" !== oT && "BLEND" !== oT) return XT;
            const IT = null === (mo = iT.pbrMetallicRoughness) || void 0 === mo ? void 0 : mo.baseColorTexture;
            if (IT) {
              var eo, Ro, uo, vo, Eo;
              const oT = null !== (eo = TT.extensionsUsed) && void 0 !== eo && eo.includes("KHR_texture_transform") ? null === (Ro = IT.extensions) || void 0 === Ro ? void 0 : Ro.KHR_texture_transform : void 0;
              if (0 !== (null !== (uo = IT.texCoord) && void 0 !== uo ? uo : 0) || 0 !== (null !== (vo = null === oT || void 0 === oT ? void 0 : oT.texCoord) && void 0 !== vo ? vo : 0)) return "uses a second UV set";
              const iT = oo[IT.index];
              if (!iT || !AT(iT.source, Io.length) || void 0 !== iT.sampler && !AT(iT.sampler, null === (Eo = TT.samplers) || void 0 === Eo ? void 0 : Eo.length)) return XT
            }
          }
          for (const iT of Io) {
            if (void 0 !== iT.uri) return BT;
            if (void 0 === iT.bufferView) return XT;
            const IT = ET(TT, oT, iT.bufferView);
            if (!IT) return XT;
            if ("image/png" !== iT.mimeType) {
              var fo, Co, jo;
              return `has ${uT(null!==(fo=null!==(Co={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(jo=iT.mimeType)&&void 0!==jo?jo:""])&&void 0!==Co?Co:iT.mimeType)&&void 0!==fo?fo:"untyped")} image`
            }
            if (!RT(IT)) return `has ${uT(eT(IT))} image`;
            const kT = new DataView(IT.buffer, IT.byteOffset, IT.byteLength),
              WT = kT.getUint32(16),
              FT = kT.getUint32(20);
            if (WT > zT.imageSide || FT > zT.imageSide) return `has a ${WT} \xd7 ${FT} image (the limit is ${zT.imageSide})`
          }
          return null
        }(TT, oT)
      } catch {
        return XT
      }
    }

    function JT(TT) {
      const oT = CT(TT.byteLength);
      if (oT) return oT;
      try {
        const {
          json: oT,
          bin: IT
        } = (0, iT.B)(TT);
        return jT(oT, IT)
      } catch (IT) {
        if (IT instanceof iT.q) return IT.reason;
        throw IT
      }
    }
  },
  8805: (TT, oT, IT) => {
    IT.d(oT, {
      B: () => FT,
      e: () => xT,
      g: () => LT,
      k: () => KT,
      m: () => kT,
      q: () => zT,
      s: () => cT,
      w: () => ST,
      x: () => DT,
      z: () => WT
    });
    var iT = IT(8814);
    class zT extends Error {
      constructor(TT) {
        super(`GLB refused: it ${TT}`), this.reason = TT, this.name = "GlbRefused"
      }
    }
    class kT extends Error {
      constructor(TT) {
        super(TT), this.name = "GlbError"
      }
    }

    function WT(TT) {
      return Reflect.get(TT, "scene")
    }
    const XT = 5130562,
      BT = "is not a binary glTF 2.0 file";

    function FT(TT) {
      var oT;
      const IT = TT instanceof Uint8Array ? TT : new Uint8Array(TT),
        kT = (0, iT.e)(IT);
      if (null === kT) throw new zT(BT);
      const WT = kT.json,
        {
          jsonEnd: FT,
          length: ST
        } = kT,
        DT = new DataView(IT.buffer, IT.byteOffset, IT.byteLength);
      let LT = -1,
        xT = 0;
      for (let MT = FT; MT < ST;) {
        if (MT + 8 > ST) throw new zT(BT);
        const TT = DT.getUint32(MT, !0),
          oT = DT.getUint32(MT + 4, !0);
        if (MT + 8 + TT > ST || oT === iT.c || oT === XT && -1 !== LT) throw new zT(BT);
        oT === XT && (LT = MT + 8, xT = TT), MT += 8 + TT
      }
      let cT = null;
      const KT = null === (oT = WT.buffers) || void 0 === oT ? void 0 : oT[0];
      if (-1 !== LT && KT && void 0 === KT.uri) {
        if (!(KT.byteLength >= 0) || KT.byteLength > xT) throw new zT(BT);
        cT = new Uint8Array(IT.buffer, IT.byteOffset + LT, KT.byteLength)
      }
      return {
        json: WT,
        bin: cT,
        fileBytes: IT.byteLength
      }
    }

    function ST(TT) {
      const oT = TT.slice(TT.indexOf(",") + 1),
        IT = Uint8Array.fromBase64;
      if (IT) return IT(oT).buffer;
      const iT = atob(oT),
        zT = new Uint8Array(iT.length);
      for (let kT = 0; kT < iT.length; kT++) zT[kT] = iT.charCodeAt(kT);
      return zT.buffer
    }
    async function DT(TT) {
      if (TT.startsWith("data:")) return ST(TT);
      const oT = await fetch(TT);
      if (!oT.ok) throw new kT(`fetching ${TT} failed: ${oT.status} ${oT.statusText}`);
      return await oT.arrayBuffer()
    }
    const LT = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      xT = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      cT = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      KT = [
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
  8814: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT,
      e: () => kT,
      f: () => WT
    });
    const iT = 1179937895,
      zT = 1313821514;

    function kT(TT) {
      const oT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      if (TT.byteLength < 20 || oT.getUint32(0, !0) !== iT || 2 !== oT.getUint32(4, !0)) return null;
      const IT = Math.min(oT.getUint32(8, !0), TT.byteLength),
        kT = oT.getUint32(12, !0);
      if (oT.getUint32(16, !0) !== zT || 20 + kT > IT) return null;
      let WT;
      try {
        WT = JSON.parse((new TextDecoder).decode(TT.subarray(20, 20 + kT)))
      } catch {
        return null
      }
      return "object" === typeof WT && null !== WT ? {
        json: WT,
        jsonEnd: 20 + kT,
        length: IT
      } : null
    }

    function WT(TT) {
      var oT;
      const IT = null === (oT = kT(TT)) || void 0 === oT ? void 0 : oT.json;
      if (void 0 === IT || !Array.isArray(IT.extensionsUsed) || !IT.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const iT = IT.meshes;
      return Array.isArray(iT) && iT.some((TT => {
        const oT = null === TT || void 0 === TT ? void 0 : TT.primitives;
        return Array.isArray(oT) && oT.some((TT => {
          const oT = null === TT || void 0 === TT ? void 0 : TT.extensions;
          return null != (null === oT || void 0 === oT ? void 0 : oT.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);